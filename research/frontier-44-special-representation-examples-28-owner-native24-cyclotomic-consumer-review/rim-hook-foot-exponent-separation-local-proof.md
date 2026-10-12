# Rim-hook foot exponents in the LM deformation

Same native24 first pending repair; local prerequisite construction only. No native, readiness or gate writes. This proves applicability of the Laurent-binomial valuation leaf, not the Schur determinant identity.

For a removable rim hook of length L from a partition rho to kappa of size M, write its foot as (h,j), with h the height of its column, and foot content gamma=j-h. Then

-(M+L-1) <= gamma <= M.

Indeed h<=|rho|=M+L and j>=1 give the lower bound. Every box strictly left of the foot in its row survives removal: the rim hook ends at the bottom box of its starting column and removes no box to its left. Thus j-1<=M, and h>=1 gives gamma<=M.

Suppose lambda and mu have size n and remove equal-length hooks L in distinct components a,b to the same multipartition. If those remainder components have sizes M_a,M_b, their foot contents satisfy |gamma_x-gamma_y|<=M_a+M_b+L-1<=n-1. Therefore the deformation exponent difference

N=n(a-b)+gamma_x-gamma_y

is nonzero. This includes n=1 and all field characteristics: it is an integer exponent assertion, not a nonzero scalar modulo characteristic.

For hooks in the same component, equal foot content and equal length L determine the same inverse hook addition to the common remainder. More explicitly, choose a common beta-set charge c. Removing a hook with foot content gamma replaces a bead at v+L by a bead at v, where v=gamma+c-1. Thus the remainder beta-set and the pair (v,L) reconstruct the original partition uniquely. Equal foot contents would force lambda=mu. In the strictly dominant distinct-label terms of the Jantzen sum this is excluded, so again N!=0.

Consequently whenever the constant foot residues coincide, their two deformed residues differ by a nonzero Laurent exponent. The binomial does not vanish identically over F(t). Its valuation at t=1 is 1 in characteristic zero and p^{v_p(N)} in characteristic p. If the constant residues differ, the valuation is zero. The exact determinant/rim-hook cancellation identity remains separately required.
