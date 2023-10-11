import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import FormAddVariasi from "../components/FormAddVariasi";
import VariasiList from "../components/VariasiList";

const AddVariasi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    // Periksa peran pengguna di sini
    if (isError) {
      navigate("/"); // Redirect jika ada kesalahan autentikasi
    } else if (user && user.role === "user") {
      // Ubah "user" dengan properti yang sesuai pada objek pengguna Anda
      navigate("/restrict"); // Redirect jika pengguna adalah "user"
    }
  }, [isError, navigate, user]);
  return (
    <Layout>
      <h1 className="mt-[40px] font-semibold text-3xl">Add Variasi</h1>
      <FormAddVariasi />
      <div>
        <h1 className="mt-[40px] font-semibold text-xl">List Varian</h1>
        <VariasiList />
      </div>
    </Layout>
  );
};

export default AddVariasi;
