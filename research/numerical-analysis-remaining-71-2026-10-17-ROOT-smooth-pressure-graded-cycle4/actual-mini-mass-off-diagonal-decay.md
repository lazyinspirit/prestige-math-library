# Actual MINI mass projector: uniform graph off-diagonal decay

## Result and limitation

The L2 projector R_h onto the **full** MINI velocity space has exponentially decaying off-diagonal L2 blocks in the vertex graph, on every allowed graded mesh. The decay ratio is universal in each dimension. This is a proved actual-space estimate, rather than a generic mixed inf-sup assertion. It does not establish a fractional Sobolev estimate for R_h, the constrained projector P_Zh, or the discrete Stokes operator.

The exact condensed local moments used below were first derived in the supplier owner's note `../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-pressure-supplier-cycle4/smooth-helper/actual-mini-mass-schur-and-boundary-layer-test.md`, section 5. The rank-one condensation and fractions are checked explicitly below. No canonical files, runtime controls, manifests, hashes, tests or gates were changed or run.

## 1. Orthogonal bubble condensation

It suffices to prove the scalar assertion; components of the full vector projector are independent. Let B_h be the space of independent cell bubbles and let P_B be its L2 orthogonal projector. For each interior vertex i let phi_i be its standard continuous P1 hat function. Put

    psi_i=(I-P_B)phi_i.

The scalar MINI space is the L2 orthogonal direct sum of B_h and span{psi_i}. Each psi_i is supported on the original vertex star; subtracting independent element bubbles does not enlarge support. The psi_i are independent, since their nodal values are those of phi_i.

Write C_ij=(psi_i,psi_j)_2. On a d-simplex K, set n=d+1 and b=n^n product_i lambda_i. Let

    I1=|K|^(-1) integral_K b=n^n d!/(d+n)!,
    I2=|K|^(-1) integral_K b^2=n^(2n) d! 2^n/(d+2n)!.

The local P1 mass diagonal and off-diagonal, divided by |K|, are respectively 2/[n(n+1)] and 1/[n(n+1)], and (lambda_i,b)/|K|=I1/n. Subtracting P_B therefore subtracts delta=(I1/n)^2/I2 from every local entry. Consequently C has positive off-diagonal entries, and its local diagonal/off-diagonal values are

    d=2: Dloc=4/45,       Oloc=1/180,
    d=3: Dloc=283/4480,   Oloc=59/4480.

For example, in d=2 the bubble ratio I1^2/I2=7/10, so delta=7/90, giving 1/6-7/90=4/45 and 1/12-7/90=1/180. In d=3 that ratio is 33/56, so delta=33/896, giving 1/10-33/896=283/4480 and 1/20-33/896=59/4480.

Let D be the diagonal of the assembled C and E=C-D. At an interior vertex i, D_ii=Dloc sum_(K incident i)|K|. There are at most d other free vertices in each incident cell. Thus

    E_ij>=0,
    sum_j E_ij <= gamma D_ii,
    gamma=1/8  (d=2),      gamma=177/283  (d=3).                 (1)

Deletion of boundary nodal degrees of freedom can only reduce the off-diagonal sum. No element diameter, local grading ratio, or shape-regularity constant enters (1).

## 2. A normalized local operator

Define U:ell2(vertices)->L2(D) by

    U a=sum_i psi_i D_ii^(-1/2) a_i,

and set H=D^(-1/2) E D^(-1/2). Then U*U=I+H. Since E is symmetric, H is self-adjoint. For any real vector a, 2|a_i a_j|<=a_i^2+a_j^2, applied after inserting the diagonal weights, gives

    |a^T H a|
      <= sum_i a_i^2 D_ii^(-1) sum_j E_ij
      <= gamma ||a||_ell2^2.

Equivalently, one can apply this calculation in the D-weighted norm before normalization. Hence ||H||<=gamma<1 and ||U||^2<=1+gamma. In particular

    (I+H)^(-1)=sum_(m=0)^infinity (-H)^m

in operator norm, with a dimension-independent remainder bound gamma^L/(1-gamma).

The exact full mass projector is

    R_h=P_B+U(I+H)^(-1)U*.                                    (2)

Indeed the second summand is the orthogonal projector onto span{psi_i}, and the two ranges are L2 orthogonal. This identity does not involve P_Zh.

## 3. Finite propagation and the block estimate

Connect two distinct interior vertices whenever they share an element, and give each edge length one. For a union W of mesh cells let S_W consist of the interior vertices whose stars intersect W in positive measure. Define S_G similarly for a second cell union G. Let L=dist_graph(S_G,S_W), taking L=infinity if no graph path exists or one set is empty.

Since U*1_W has coefficient support contained in S_W, and 1_G U has coefficient support contained in S_G, while H couples only graph neighbors, one has

    1_G U H^m U*1_W=0,    m<L.                                (3)

If G and W contain no common cell, the bubble block 1_G P_B 1_W also vanishes. Combining (2), (3) and the Neumann-series remainder gives the actual estimate

    ||1_G R_h 1_W||_(L2->L2)
      <= [(1+gamma)/(1-gamma)] gamma^L.                        (4)

The right side is interpreted as zero when L=infinity. Every assertion remains valid if the relevant cell unions touch on faces, since those intersections have zero volume. The vector-valued estimate has the same constant when the Euclidean component norm is used, by orthogonal direct sum.

## 4. Why this is not yet the fractional supplier

Graph distance is not physical distance or a fractional Sobolev seminorm. In particular, replacing graph steps by powers of ratios of neighboring element diameters can reintroduce the grading dependence that the target theorem forbids. Estimate (4) must not be advertised as H^s stability without a further physical-space argument.

The constrained projection additionally requires inversion of the scalar pressure Schur form g_h(q,r)=(R_h grad q,R_h grad r). Its elliptic inverse is globally coupled even though (4) holds for R_h. Neither the H^s-stable cell-average left inverse of R_h grad nor the positive energy decomposition of g_h automatically controls this inverse in H^(1+s). The missing fractional or direct parabolic estimate therefore remains explicit.
