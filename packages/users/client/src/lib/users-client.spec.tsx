import { render } from '@testing-library/react';

import UsersClient from './users-client';

describe('UsersClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UsersClient />);
    expect(baseElement).toBeTruthy();
  });
});
