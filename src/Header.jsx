function Header() {
    return (
        // <!-- Navbar Starts -->
        <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                {/* <!-- Logo --> */}
                <a href="/">
                    <h3 className="font-extrabold text-green-500 ring-4 ring-green-500 px-3 py-1 text-xl">Fozlur</h3>
                </a>
                {/* <!-- Logo Ends --> */}
            </div>
        </nav>
        // <!-- Navbar Ends -->
    );
}

export default Header;
