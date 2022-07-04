import { render } from '@testing-library/react';

import AuthClient from './auth-client';

describe('AuthClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthClient />);
    expect(baseElement).toBeTruthy();
  });
});
