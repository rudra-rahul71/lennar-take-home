export interface CreateUserInput {
  name: string;
  username: string;
  email: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}

interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string }>;
}

/**
 * Service class handling trial user registration.
 * Modeled after Angular's injectable service pattern (e.g. @Injectable({ providedIn: 'root' })).
 */
export class TrialService {
  private readonly apiUrl = 'https://graphqlzero.almansi.me/api';

  /**
   * Validates an email address against W3C HTML5 email specification.
   * Ensures standard user@domain.tld structure and length <= 254 characters.
   */
  static isValidEmail(email: string): boolean {
    const trimmed = email.trim();
    if (!trimmed || trimmed.length > 254) {
      return false;
    }
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    return emailRegex.test(trimmed);
  }

  /**
   * Registers a trial user via GraphQL mutation.
   * Uses GraphQLZero's dummy createUser mutation endpoint.
   */
  async createUser(email: string): Promise<User> {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      throw new Error('Email address is required.');
    }

    if (!TrialService.isValidEmail(trimmedEmail)) {
      throw new Error('Please enter a valid email address.');
    }

    const username = trimmedEmail.split('@')[0] || 'trial_user';

    const mutation = `
      mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          id
          name
          username
          email
        }
      }
    `;

    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          input: {
            name: username,
            username,
            email: trimmedEmail,
          },
        },
      }),
    });

    if (!response.ok) {
      throw new Error(`Server returned HTTP ${response.status}`);
    }

    const result: GraphQLResponse<{ createUser: User }> = await response.json();

    if (result.errors && result.errors.length > 0) {
      throw new Error(result.errors[0].message);
    }

    if (!result.data?.createUser) {
      throw new Error('No user data returned from the GraphQL endpoint.');
    }

    return result.data.createUser;
  }
}

// Export a singleton instance (analogous to providedIn: 'root' in Angular)
export const trialService = new TrialService();
