import Search from '@/app/ui/search';
import { CustomersTable } from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Suspense fallback={<div className="w-full" />}>
          <Search placeholder="Search customers..." />
        </Suspense>
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  );
}