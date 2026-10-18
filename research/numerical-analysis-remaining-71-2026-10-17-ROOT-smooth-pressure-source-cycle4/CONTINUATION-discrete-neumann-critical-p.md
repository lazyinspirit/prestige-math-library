# Actual discrete Neumann gradient projector: critical-p source audit

Research-only continuation of the bounded source task. No theorem covering the requested full mesh/domain class at p=3 in two dimensions or p approximately 2.5 in three dimensions was verified. This is an audit result, not a proof that such a theorem is false or absent from the literature.

## Exact operator and necessary distinction

For the actual mean-zero continuous P1 pressure space Q_h, set G_h=grad Q_h. Define N_h F=grad phi_h by

    (grad phi_h,grad q_h)=(F,grad q_h),  q_h in Q_h.

Thus N_h is the L2 orthogonal projection onto G_h and has L2 norm one. The requested assertion is a uniform vector estimate

    ||N_h F||_p <= C ||F||_p,

with C depending on the domain, dimension, p, and fixed shape-regularity constant, but not on the global mesh ratio or the number of grading layers. The actual definition agrees with the graded owner's `actual-schur-fixed-p-transfer-and-face-defect.md`.

The scalar Neumann Ritz map R_h satisfies N_h grad u=grad R_h u. Its W1,p stability on gradient inputs alone does not prove the displayed all-vector estimate without a continuous Neumann-gradient decomposition at the same p. Neither operator is the whole-space Fourier gradient projection, whose separately proved norm bound two cannot be substituted here.

## 1. Graded-mesh gradient theorem: actual stronger mesh hypotheses

Author full PDF: A. Demlow, D. Leykekhman, A. H. Schatz, L. B. Wahlbin, *Best approximation property in the W1-infinity norm on graded meshes*, Math. Comp. 81 (2012), 743–764; author preprint https://www2.math.uconn.edu/~leykekhman/my_papers/max_general_meshes.pdf. Saved `demlow-graded2012.pdf/.txt`, 22 pages. Read Sections 1–2, Theorems 1–2, and the complete final Section 4.4 absorption argument.

The actual main Theorem 2, preprint p17, is a Dirichlet result on convex polygons/polyhedra. Besides shape regularity it assumes Mesh Condition 1: mesh sizes are comparable throughout balls of radius P h(x) log(1+hmax/hmin), with P sufficiently large. Section 2 explicitly distinguishes this from shape regularity. In the proof, Proposition 4.1 supplies the annular mesh-growth bound; p19 produces an error coefficient C h0 log(1+hmax/hmin)/d0, absorbed using the large-patch hypothesis. Constants are uniform in mesh size under those additional fixed assumptions; no usable numerical bound for the critical-p N_h norm is supplied. The result cannot establish the requested Neumann/arbitrary-shape-regular statement. Failure of its sufficient condition is not instability.

## 2. Genuine nonconvex Neumann result: different norm and prescribed grading

Author full PDF: Buyang Li, *Maximum-norm stability of the finite element method for the Neumann problem in nonconvex polygons with locally refined mesh*, Math. Comp. 91 (2022), 1533–1585, DOI 10.1090/mcom/3724; https://libuyang.com/MCOM-8.pdf. Saved `li-neumann-nonconvex2022.pdf/.txt`, 53 pages. Read complete Sections 1–2, including actual mesh assumptions and Theorem 2.1. No claim to have inspected the remaining long proof.

Theorem 2.1 is scalar L-infinity stability of the normalized Neumann Ritz map, with a logarithmic factor for P1. Its mesh hypothesis prescribes corner power-gradings h(x) comparable to h |x-z_j|^(1-gamma_j), capped at h^(1/gamma_j), where 0<gamma_j<pi/theta_j and gamma_j<=1; the mesh is quasiuniform away from corners. This allows nonconvexity and strong grading but excludes arbitrary shape-regular refinement patterns. It also does not assert gradient Lp stability. Consequently it does not supply N_h at either requested exponent. The introduction's discussion of unresolved W1,p extensions is historical context from 2022, not a current impossibility theorem.

## 3. Recent pointwise gradient bound: global mesh size is used in the proof

Full arXiv source: L. Diening, J. Rolfes, A. J. Salgado, *Pointwise gradient estimate of the Ritz projection*, https://arxiv.org/pdf/2305.03575 (download returned v1; subsequent journal publication SIAM J. Numer. Anal. 62 (2024), 1212–1225). Saved `diening-rolfes-salgado2024.pdf/.txt`, 14 pages. Read Sections 1–2, Theorem 3.1/Corollary 3.2 and proof Sections 4.1–4.6.

Theorem 3.1 assumes convex polytopes, homogeneous Dirichlet data, and a conforming quasiuniform family. It yields a pointwise maximal-function gradient bound and hence Lp stability. Although its constants sentence mentions shape regularity, the theorem retains quasiuniformity. Proof Section 4.2 constructs a regularized delta inside the element containing z with derivative bounds C h^(-n-m), using the single global mesh size h. Such bounds on arbitrarily smaller elements require factors involving h/h_T. Section 4.5 also invokes a local error theorem assuming a quasiuniform mesh on the observation region. The constant sentence therefore cannot be used to erase the actual mesh hypothesis or transfer the theorem to Neumann data.

## What remains available and what is unproved

The existing actual Neumann/Schur near-two interpolation proof remains a positive research input: an interval |p-2|<epsilon exists with epsilon depending on the domain, mesh shape constants, and interpolation/coercivity constants. It does not guarantee epsilon>=1 in 2D or epsilon>=0.5 in 3D, nor the quantitative norm needed by a contraction argument.

The targeted source families above yielded no new exact-scope theorem or counterexample for N_h at the requested exponents. In particular, neither failure of a grading criterion nor the separate full mass-projector fan counterexample refutes this gradient projector. The precise open interface in this packet remains uniform critical-p stability of the actual discrete Neumann gradient space on the original meshes, with sufficiently controlled constants if used to invert I-N_h B. All conclusions remain research-only.
