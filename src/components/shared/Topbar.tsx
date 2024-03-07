import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";

const Topbar = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  return (
    <section className="topbar">
      <div className="px-5 py-4 flex-between">
      <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-start flex-1 gap-1">
            <img
              src="/assets/images/icon.svg"
              className="w-9 h-9"
              alt="logo"
            />
            <h1 className="text-logo h3-bold">Social App</h1>
          </div>
        </Link>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => signOut()}>
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="gap-3 flex-center">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;