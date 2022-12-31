type Args = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  reqBody?: unknown;
};

export class CustomError extends Error {
  message: string;
  constructor() {
    super();
    this.message = 'Custom Error';
  }
}

export const fetcher = async ({ url, method = 'GET', reqBody }: Args) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody),
  });

  if (!response.ok) throw new CustomError();

  return response.json();
};
