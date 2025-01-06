import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher, {
    shouldRetryOnError: false, // Avoid infinite retries on errors
  });

  return {
    user: data,
    error,
    isLoading,
    mutate,
    isError: !!error,
  };
};

export default useCurrentUser;
