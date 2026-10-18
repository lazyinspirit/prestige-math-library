# Actual full MINI projector: a physical fractional stability theorem

Research result, 2026-10-18. This is a result about the actual full MINI L2 projector R_h, not about the constrained projector P_Zh. It is an unconditional further step from the proved condensed-mass decay. It does not close the original pressure estimate.

## Statement

On any conforming shape-regular simplicial mesh of the fixed Lipschitz polyhedron D in dimension d=2 or 3, there is s_*>0 depending only on the shape bound such that

    ||R_h f||_{H^s(D)} <= C_s ||f||_{H^s(D)},   0<s<s_*.

There is no bound on h_max/h_min. One may take any

    0<s<min(1/2, log(1/gamma)/log(rho)),

where gamma=1/8 in dimension two and gamma=177/283 in dimension three, and rho>=1 bounds the ratio of the nodal mesh sizes at two vertices sharing a cell. If rho=1 the logarithmic restriction is absent. The constant C_s may depend on the shape bound, s and D. In particular this assertion supplies a positive exponent, but does not assert that s can be chosen greater than 1/4 for every shape bound.

Here H^s is the physical Slobodeckij space. The proof below converts graph information to that norm explicitly. This note uses the exact condensed mass formulas in the existing owner note and its independent off-diagonal verification, rather than assuming a general mass projector theorem.

## 1. Weighted mass stability

Let ell_i be the minimum diameter of a cell incident at interior vertex i. Local star comparability on a matching shape-regular mesh gives constants c,C,rho, depending only on the shape bound, such that

    c h_K <= ell_i <= C h_K    whenever i is a vertex of K,
    rho^{-1} <= ell_i/ell_j <= rho    whenever i,j share a cell.

Boundary vertices have no nodal degree of freedom. The bubble degrees remain independent.

Use the proved orthogonal bubble condensation R_h=P_B+U(I+H)^(-1)U*, with U a synthesis operator from normalized modified hats, H=D^{-1/2} E D^{-1/2}, E_ij>=0, and sum_j E_ij<=gamma D_ii. Set W_ii=ell_i^{-s} and p_i=D_ii^{1/2}. The positive matrix B=W H W^{-1} satisfies

    sum_j B_ij p_j <= gamma rho^s p_i,
    sum_i B_ij p_i <= gamma rho^s p_j.

The second inequality uses the symmetry of E and the same neighbor ratio bound with the indices exchanged. The weighted Schur test, obtained by Cauchy--Schwarz with weights p_j/p_i, gives

    ||W H W^{-1}||_{ell2->ell2} <= gamma rho^s.

Thus, when gamma rho^s<1,

    ||W(I+H)^(-1)W^{-1}|| <= (1-gamma rho^s)^(-1).       (1)

Set the cellwise scalar weight w(x)=h_K^{-s} on K. Uniform finite overlap of vertex stars, bounded reference modified hats, and ell_i comparable to h_K on their support imply

    ||w U a||_2 <= C ||W a||_{ell2},
    ||W U* f||_{ell2} <= C ||w f||_2.                  (2)

For clarity, the second estimate follows by Cauchy--Schwarz in each star: D_ii is a fixed reference constant times its volume; replacing ell_i^{-s} by h_K^{-s} on that star costs only its uniform comparability constant, and then bounded overlap bounds the coefficient sum. The first follows by the pointwise bounded overlap of the modified hats and the same local weight comparison. No iteration of a mesh ratio occurs in (2). The independent cell bubble projector is bounded in the w-weighted L2 norm because w is constant on each cell. Equations (1)--(2) give

    ||h^{-s} R_h f||_2 <= C_s ||h^{-s} f||_2.           (3)

The exact dependence in the Neumann denominator is why one may not simply infer every s<1/2 from the unweighted graph decay.

## 2. A physical inverse estimate with a cellwise weight

For every w_h in the full MINI space and 0<s<1,

    ||w_h||_{H^s(D)} <= C_s ||h^{-s} w_h||_2,           (4)

after absorbing the fixed domain diameter into C_s for the L2 term. This estimate has h_K on the right, rather than h_min.

One proof uses the continuous piecewise affine mesh-size function ell(x) whose nodal values are minima of adjacent cell diameters, including boundary vertices. Shape regularity implies ell is comparable with h_K on K and has a uniformly bounded Lipschitz constant. For a sufficiently small fixed c, split the double seminorm integral into |x-y|<c ell(x) and its complement. On the complement, integrating |x-y|^{-d-2s} in y gives C ell(x)^{-2s}; symmetry handles the term containing |w_h(y)|^2. The symmetry step is valid because the Lipschitz mesh-size bound gives ell(y)<=C|x-y| whenever |x-y|>=c ell(x).

For the near pairs, the relative ball of radius c ell(x) is contained in a bounded cell patch of diameter comparable to ell(x), and every cell there has comparable size. The integral restricted to that patch scales, by affine reference-simplex changes of variables and the fixed polynomial degree, to at most C_s h_K^{-2s} times the squared L2 norm on the patch. Equivalently, one can use the H1 seminorm of the continuous MINI polynomial on the patch, its local inverse inequality, and the standard H1-to-Hs scaling estimate. There are uniformly finitely many cells per patch and bounded patch overlap. Summation gives (4). Pairs across distinct boundary sheets are harmless after using fixed Lipschitz domain charts; their constants depend on D. The argument applies componentwise.

Notice that (4) alone cannot be applied to a smooth globally transported pressure correction with a useful bound: the weighted right side can diverge in an overrefined region. The approximation decomposition below is essential.

## 3. A local interpolant and its fractional approximation estimate

Choose a boundary-preserving volume-dual Scott--Zhang-type P1 quasi-interpolant J_h. For each interior nodal coefficient use integration against a fixed-degree dual polynomial on one incident cell; set boundary nodal coefficients to zero. This definition extends to L2. Reference scaling, local star comparability and bounded overlap give

    ||J_h f||_2 <= C||f||_2,
    ||J_h f||_{H1_0} <= C||f||_{H1_0},

and the local estimates

    ||f-J_h f||_{L2(K)} <= C ||f||_{L2(omega_K)},
    ||f-J_h f||_{L2(K)} <= C h_K ||grad f||_{L2(omega_K)}
                                                    (f in H1_0).

For a boundary patch the last inequality follows from the zero-trace patch Poincare inequality; for an interior patch subtract a constant, which J_h reproduces there. The cell dual may be chosen to reproduce affine polynomials. Shape-regular patch chains supply the usual estimates for a vertex's chosen cell even when it differs from K.

Interpolating these two local operator bounds, then summing over the uniformly overlapping patches, gives

    ||h^{-s}(f-J_h f)||_2 <= C_s||f||_{[L2,H1_0]_s},
    ||J_h f||_{[L2,H1_0]_s} <= C_s||f||_{[L2,H1_0]_s}.       (5)

For completeness, the local weighted interpolation can be implemented by regarding f -> {f-J_h f on K}_K as an operator into the Hilbert direct sum with endpoint weights 1 and h_K^{-2}; interpolation of weighted Hilbert direct sums produces h_K^{-2s}. It therefore does not interpolate h_max or h_min.

For 0<s<1/2 on a Lipschitz domain, [L2(D),H1_0(D)]_s=H^s(D) with equivalent norms. This standard identity follows from bounded zero extension in H^s below its trace threshold, interpolation on Euclidean space, and restriction. Thus (5) has precisely H^s on the right and in the second estimate. This invocation concerns the standard Sobolev spaces only, and does not assume a discrete Stokes interpolation theorem.

## 4. Conclusion

Because J_h f belongs to the full MINI space, R_h J_h f=J_h f. Hence

    R_h f = J_h f + R_h(f-J_h f).

Apply (4), then (3), then (5) to the second summand. Apply (5) directly to the first summand. This proves

    ||R_h f||_{H^s}
      <= C_s||f||_{H^s}
         +C_s||h^{-s}R_h(f-J_h f)||_2
      <= C_s||f||_{H^s}.

All constants are independent of the number of cells, the smallest element, and global grading. In particular the argument passes from normalized graph decay to physical H^s stability without substituting graph distance for Euclidean distance.

## 5. Exact scope remaining

This theorem does not establish any positive fractional estimate for the constrained projector. Its Schur inverse remains a different operator: g_h(q,r)=(R_h grad q,R_h grad r). Even boundedness of this form on H^{1+s} cross H^{1-s}, combined with its H1 coercivity, requires an actual uniform interpolation/retraction argument before a fractional inverse can be inferred. The interpolation of Q_h in H^{1+s}, and especially the relation of the resulting velocity H^s norm to the intrinsic powers of A_h on Z_h, must not be assumed.

The theorem also does not establish the desired exponent 1/8<alpha<1/4 for A_h^alpha P_Zh. No canonical item, metadata, runtime state, gate, hash, or consumer was changed. No test or gate was run.
