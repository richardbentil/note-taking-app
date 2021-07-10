import { useRouter } from "next/router";

function BackAndRefresh() {
  const router = useRouter();
  return (
    <div className="col-12">
      <div
        className="d-flex justify-content-end align-items-center mb-2"
        type="button"
        onClick={() => router.reload()}>
        <span className="small mr-2">Refresh</span>
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default BackAndRefresh;
