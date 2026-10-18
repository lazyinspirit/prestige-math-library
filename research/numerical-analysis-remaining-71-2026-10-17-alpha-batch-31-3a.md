# Batch 31 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-31`.

Scope: four touched carriers; no routed reader/refuter findings or page obligations. Initial risk-report passed and routed 22 HIGH/CRITICAL items. Review completed in the generated dependency order.

## lem-na-homogeneous-dirichlet-korn-identity

Expansion gives the cross term sum; two compact-support integrations by parts identify it with squared divergence. H1 closure passes all three L2 norms under declared Countable Choice. Empty D and zero fields give 0=0; no boundary trace theorem is assumed. No carrier edit required.

## lem-na-homogeneous-dirichlet-poincare

Zero extension of a test function is smooth on the slab; coordinate FTC and Cauchy-Schwarz give L squared after integration. H1 closure and finite measure pass the inequality. The width is positive and the empty-domain case is harmless; no connectedness or regular boundary is used. No carrier edit required.

## lem-na-scott-zhang-boundary-preserving-p1-interpolant

Checked facet dual mass matrices, affine trace scaling, boundary H0 closure, and patch connectivity/size comparability for d=2,3 on a Lipschitz domain. Cell mean differences give patch Poincare; H2 gradient traces control full affine gradient differences, so propagation yields the local affine approximation. Reproduction and bounded overlap give both claimed estimates and seminorm stability. Published trace, Bramble-Hilbert, affine scaling and zero-boundary supplier statements match the p=2 uses; no nodal evaluation of H1 data occurs. No carrier edit required.

## lem-na-zero-mean-of-zero-boundary-divergence

Each weak derivative is L2; compactly supported smooth coordinate derivatives integrate to zero by Fubini/FTC. Finite measure and Holder pass divergence integrals along the declared Countable Choice H1 approximation. Empty D and zero fields satisfy the conclusion. No carrier edit required.

## thm-na-infsup-bounded-right-inverse-hilbert

Riesz identifies the adjoint norm with the signed real supremum via v to -v. The form (B*q,B*r) is bounded and beta-squared coercive; Lax-Milgram gives BB*q=g. Combining the energy identity with beta||q||<=||Rg|| gives the sharper beta-inverse bound, including Rg=0. The separate Q=0 branch and V nonzero hypothesis avoid empty suprema. Countable Choice is explicit and matches both Hilbert suppliers. No carrier edit required.


## lem-na-bogovskii-kernel-support-and-divergence

Segment support is the compact image of supp f times supp omega times [0,1], contained in U by ball star-shapedness. The r^(1-d) kernel is integrable by annuli in both variables; weighted Cauchy-Schwarz gives the L2 majorant bound. Absolutely convergent test integration, x=y+t(z-y), and segment FTC give div Bf=f-omega integral f with the correct sign. Countable Choice matches the linear change-of-variables supplier; zero input and mean-zero specialization are valid. No carrier edit required.

## lem-na-finite-cover-zero-mean-data-decomposition

The finite-cover supplier supplies a nonempty connected cover, partition, finite tree and unit-integral overlap bumps. Checked both child/root integral identities and cancellation of each signed edge term. Subtree masses are bounded by the L1 norm, giving exactly the incident-edge constant D_i. N=1, zero masses and zero q all work; all operations are linear. No carrier edit required.

## thm-na-babuska-brezzi-kernel-coercivity

Lift Rg satisfies the constraint; kernel Lax-Milgram applies because Z is closed and coercivity is restricted precisely there. The residual annihilates Z, so v-RBv proves factorization through Q; Riesz supplies p and the stated estimate. Difference testing gives velocity uniqueness, and surjectivity pressure uniqueness. Q=0 is explicitly reduced to Lax-Milgram; the displayed beta bounds belong to the nonzero-Q branch. Countable Choice matches the actual Hilbert suppliers. No carrier edit required.

## lem-na-bogovskii-truncated-derivative-fourier-formula

The repaired delta-to-epsilon pairing has absolutely convergent Fubini for delta>0. Integration by parts cancels t^-1 and gives the stated O(epsilon-delta) test bound, which defines a tempered limit. Fourier change of variables gives the 2pi i xi_j factor and (1-t)xi argument; uniform polynomial growth controls Schwartz tails as well as compact frequency convergence. The kernel majorant justifies convergence of truncated B, and z_k-y_k gives the correct minus sign in its derivative decomposition. Checked exact Fourier/distribution suppliers and Duran section 2, formula (2.6); all compact-support and Countable Choice hypotheses hold. Reader repair is mathematically accepted; exact hash comparison is recorded below.

## thm-na-mixed-galerkin-quasioptimality

Discrete kernel coercivity and positive beta_h apply to the nonzero finite-dimensional Hilbert pair. The right-inverse correction removes the constraint residual and gives R_h; testing on z_h gives U_h, including z_h=0. Rewriting theta_u+eta_u as total velocity error gives a pressure estimate even stronger than P_h, with all beta_h factors retained. V_h and Q_h nonzero prevent undefined suprema. The consumer MINI error theorem must supply nonzero spaces from its nonempty mesh. Reader repair is mathematically accepted; exact hash comparison is recorded below.

## lem-na-bogovskii-fourier-ray-and-derivative-ltwo-bound

Checked xi_j=0 separately and split the ray at (2pi rho |xi_j|)^-1; the two contributions are precisely rho^-1||phi||_1 and rho||partial_j^2 phi||_1. Weighted Cauchy-Schwarz, eta=(1-t)xi and s=t/(1-t) yield factor 2^(d-1) before square root. The long-t kernel integrates to at most 2^d, so restriction to bounded U has the stated L2 bound. Density extends only the restriction to U, as claimed. Fourier suppliers, density supplier and Duran Lemmas 2.2-2.4 were checked; no support-ball restriction on phi is needed for these estimates. No further carrier edit required.

## lem-na-mini-element-local-and-global-dimensions

Nonempty mesh gives positive domain measure and a nonzero mean functional. Barycentric vertex basis plus a bubble gives d+2 local scalars; independent cell bubbles add d per cell. The repaired trace argument uses H1 closure, affine pullback and reference trace continuity to force boundary nodal values to vanish; the converse uses the exact zero-boundary polynomial theorem. Thus N_v,0 free scalar nodal values and N_v-1 pressure dimensions follow. Empty mesh is now excluded, and the two-triangle consumer satisfies this hypothesis. No further carrier edit required.

## ex-na-mini-element-bubble-moment

For v=b_K gradient q, apply the smooth simplex divergence formula to q v (product rule), whose boundary flux is zero. This gives positive integral b_K|gradient q|^2 because q is nonconstant and K nondegenerate. The reuse of b_K for bubble and local bilinear pairing is disambiguated by arguments; no global inf-sup conclusion is inferred. No further carrier edit required.

## thm-na-star-shaped-bogovskii-bounded-right-inverse

For the two phi choices, all truncated derivative supports lie in a fixed compact segment set inside U, so restricted L2 derivative representatives extend to the ambient distributions without a boundary term. Summing the component estimates gives exactly C_U, using |y_k|<=R_U. Compact support and ambient H1 mollification prove H0 membership; corrected smooth data h_n-omega integral h_n are dense in L2_0. Poincare plus Hilbert completeness gives the unique linear extension and divergence identity. Checked the exact mollifier, support, derivative and approximate-identity suppliers at p=2 with Countable Choice. No boundary smoothness of U is required. No carrier edit required.

## cex-na-q1-p0-checkerboard-pressure-mode

On the 2x2 square mesh only one scalar interior Q1 node remains. The alternating pressure has zero mean and norm one. Direct tensor integration annihilates both directional derivatives of the central hat, hence all velocities. The supremum for this pressure is zero; sign symmetry makes all such suprema nonnegative. Therefore beta_h=0, which refutes the asserted universal Cartesian-mesh stability. No carrier edit required.

## ex-na-weakly-versus-exactly-divergence-free-mini-velocity

The two-triangle mesh is nonempty, with dimension counts 4 velocity and 3 pressure, so rank-nullity gives a nonzero weak-kernel velocity. All nodal velocities vanish at boundary vertices, leaving only bubbles. A nonzero bubble coefficient cannot have identically zero directional derivative: the barycenter line exits at zero-bubble endpoints. Continuity gives nonzero divergence on positive measure. The exact kernel is contained in the weak kernel by the integral definition, so inclusion is strict. No carrier edit required.

## thm-na-bounded-lipschitz-domain-divergence-right-inverse

Finite cover and tree decomposition supply linear local mean-zero data with D_i bounds. Each local H0 lift zero-extends by its compact-support approximation, so no interface divergence terms arise. Finite summation preserves the divergence identity and gives exactly sum C_Ui D_i; the compatible range follows from the zero-mean lemma. Nonempty connected Lipschitz D, d=2,3 and Countable Choice match the supplier hypotheses; the constant is independent of a mesh. No carrier edit required.

## thm-na-continuous-stokes-divergence-infsup

The Frobenius trace bound is sqrt(d), giving boundedness. For each nonzero pressure choose minus the divergence lift; the sign gives positive ||q||^2, and nonzero divergence ensures a nonzero test velocity. Division yields C_div^-1 uniformly in q. The pressure/velocity domains and Countable Choice are inherited from the explicitly nonempty Lipschitz Stokes space definition. No carrier edit required.

## thm-na-mini-element-fortin-stability

The bubble correction denominator is positive and enforces cell mean preservation. In the repaired argument the exact published conforming-polynomial supplier gives q_h in H1 with cellwise gradient; compactly supported approximation of the H0 difference proves global weak integration by parts, so no unsupported cell-boundary cancellation is needed. Gradient q_h is cellwise constant, hence the preserved means annihilate the pairing. Bubble scaling, the local interpolation estimate and bounded patch overlap give C_F depending only on d and shape regularity. The construction is linear, maps into V_h, and transfers the continuous inf-sup bound with all declared choice hypotheses. No further carrier edit required.

## thm-na-weak-stokes-solvability-lipschitz-domain

Gradient norm equivalence and closed H0 give a Hilbert velocity space; the bounded integral functional makes L2_0 a closed Hilbert pressure space. The strain identity gives coercivity nu on all velocities, and Cauchy-Schwarz gives M_a=2nu. Mixed solvability with G=0 gives ||u||<=||F||/nu and pressure bound 3 C_div||F||. Divergence lies in Q by the zero-mean lemma, allowing its use as a constraint test to prove exact incompressibility. Nonempty connected Lipschitz D, d=2,3, nu>0 and Countable Choice match every supplier. No further carrier edit required.

## thm-na-discrete-helmholtz-projection-and-pressure-schur

Nonzero velocity coordinates give a positive mass quadratic form; discrete inf-sup gives injective B transpose on gauged pressures. Both Schur matrices are positive definite by their inverse-mass/stiffness quadratic forms, with stiffness positivity from Korn and nu>0. Direct multiplication establishes BP=0 and P identity on ker B; the difference is mass-orthogonal to ker B. Elimination gives S_A p=B A^-1 f-g with the correct sign. Zero-mean subtraction and zero integral of divergence identify the ungauged nullspace exactly as constants. No carrier edit required.

## thm-na-mini-element-h1-pressure-error

The face-average interpolant preserves H0 for u and approximates H2 in gradient norm; applying it to p and subtracting its mean gives L2 pressure error at most twice the interpolation error. Korn gives discrete coercivity nu, boundedness constants are 2nu and sqrt(d), and Fortin gives a uniform beta_h lower bound. The nonempty domain mesh has a cell bubble (V_h nonzero) and a nonconstant nodal affine pressure after mean subtraction (Q_h nonzero), so the repaired mixed theorem applies. Its explicit bounds are linear in the two approximation errors with h-independent coefficients. Poincare converts to the full H1 norm. H2 regularity is assumed, not asserted for all Lipschitz solutions. No carrier edit required.

## Routed decisions and historical evidence

All four touched obligations receive `accepted_repair`, with `repair_confidence: 1`. No reader/refuter findings or page obligations are owed. The pre/post snapshots establish four changed raw carriers, and every current raw item equals its immutable reader-post hash. No full pre-reader item preimage was recovered; historical descriptions below are attributed to the reader report, while acceptance rests on independent review of the exact current proof and prerequisites. These are nonfatal proof-justification repairs and scope clarifications; no historical counterexample to a corrected current claim is asserted.

### lem-na-bogovskii-truncated-derivative-fourier-formula

The reader reported a direct omitted-range argument at t=0. The current proof instead compares positive truncations and cancels t^-1 by test-function integration by parts, proving convergence without an absolute-integrability assumption at zero.

Pre: `503e8373bfd59374147fce86329cef4c362e7f5d33c25953fd8bd012b9698a7b`; post/current: `89735fc26cec6307c25d144be4ab463043ba76b7f864ee774c2065d01e6399fa`. Closed defect: `numerical-analysis-remaining-71-2026-10-17-3a-batch-31-truncation`.

### thm-na-mixed-galerkin-quasioptimality

The reader reported an unsupported pressure-error estimate. The current proof rewrites the pressure residual using the total velocity error and proves the stated P_h bound; the explicit V_h nonzero hypothesis also removes empty-supremum ambiguity. This records a proof-justification repair, not a counterexample to the error theorem.

Pre: `289d8992989d47577a7b84f34d8982321ea56f85a1a76c8e7aeac53b26cd2090`; post/current: `992258c5e3f186f00922764c4fd5685b9ba038a261f9580c4d0bb7b4062e9597`. Closed defect: `numerical-analysis-remaining-71-2026-10-17-3a-batch-31-pressure-bound`.

### lem-na-mini-element-local-and-global-dimensions

The reader supplied the missing justification that H0 continuous P1 functions have exactly the interior vertex degrees of freedom, using closure and the precise affine/reference trace suppliers and the converse zero-boundary theorem. The explicit nonempty mesh caveat prevents a bare N_v-1 formula from being read on an empty mesh.

Pre: `bba03959fa58204a47697323641f1020af96fcc8ad1daf0260cd6ffbbf09b282`; post/current: `ceaa6dd28e178a4a613acac151a5ebb8372a3ca0942bd3993d7cde34e532dbb7`. Closed defect: `numerical-analysis-remaining-71-2026-10-17-3a-batch-31-boundary-dofs`.

### thm-na-mini-element-fortin-stability

The reader replaced the unsupported cellwise Sobolev Green/cancellation invocation with global weak integration by parts. The current proof uses the exact conforming-polynomial H1 supplier and compact-support approximation, followed by cell mean cancellation.

Pre: `ad74a1092b9dd6f51da3b81b7ff0e46479e951b4a6b4d4f0b0ccd8858507731a`; post/current: `739fdcd3fc59ef199702279acba846b9d5a4328a7c61deeb8bb2b3ebb7a54be7`. Closed defect: `numerical-analysis-remaining-71-2026-10-17-3a-batch-31-weak-green`.

## Consumer and metadata checks

The mixed theorem Statement now explicitly requires nonzero V_h. Its assigned MINI-error consumer has cell bubbles, so V_h is nonzero, and nodal pressures after mean subtraction make Q_h nonzero. Outside-scope direct consumers `thm-na-mini-solenoidal-stokes-projection-error` and `thm-na-mini-be-smooth-velocity-error` use the same nonempty MINI spaces; `thm-na-rt0-p0-darcy-error-estimate` uses the mixed theorem only with at least two facet-connected cells and a positive divergence lift, which implies nonzero velocity space, and separately handles the one-cell zero pair. No surgical repair is needed.

The dimension lemma explicitly requires a nonempty mesh. Its owned two-triangle example meets this. Outside-scope `cor-na-mini-element-pressure-mass-schur-bounds` explicitly assumes a finite nonempty mesh, and `cor-na-mini-element-pressure-mass-block-spectrum` inherits that hypothesis. Their dimension uses remain sound. This is a focused supplier-use check, not a review of their unrelated arguments.

Updated the batch-31 manifest to mirror the reader-added dimension and Fortin dependencies and the explicit nonempty/nonzero caveats. No item body, Statement, Definition, provenance, verification stamp, page, or published carrier was changed by this adjudication. The batch-31 cross-batch dependency input remains `[]`: the owned items use only same-batch or published suppliers, so there is no same-frontier cross-batch consumer edge to add. No outside defect or proposed withdrawal was found.

## Sources and limits

Read exact current Definition/Statement clauses of every direct prerequisite used by the routed items, including the closure, Hilbert, Fourier, trace, interpolation, scaling, density, mollification, rank-nullity and Gauss–Green suppliers. The local dependency proofs are reviewed above in order. No independent audit of all published supplier proofs is claimed.

Checked [Duran, arXiv:1103.3718v1](https://arxiv.org/pdf/1103.3718), formula (1.3), section 2, Lemmas 2.1–2.4 and Theorem 2.1 (PDF pages 2–7): the adopted normalization and boundedness interface agree; the local proofs independently establish their distributional limits and signs. Checked [Guermond, Chapter 54](https://people.tamu.edu/~guermond/M661_FALL_2025/chap54.pdf), section 54.1.1 and Lemma 54.5 with its complete proof and Remark 54.6 (printed pages 408, 411–412), for the Fortin construction and mesh/regularity hypotheses. Checked [Chapter 53](https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf), section 53.2.2, Lemma 53.9(i),(iii) and Theorem 53.11 (printed pages 395–396), as source statements; its cited external surjectivity proof is replaced by the complete local chain reviewed here. I did not read the entire Boffi–Brezzi–Fortin textbook or claim the reader's broader source coverage as my own.

## Local validation and handoff

Initial risk-report and the final `--require-reviewed` invocation both passed: 25 proof-bearing contract entries routed, including 22 HIGH/CRITICAL reviews recorded complete with item-specific evidence. Strict proof-contract validation of all four touched carriers passed with 0 errors and 0 warnings. Batched precheck passed 4/4; the single final batched proof-layout invocation reported 4 items, 15 steps, 0 defects. No item edits followed it. No judge, stamp, self-certification or engine gate battery was initiated.

The four accepted repairs are closed locally. No mathematical blockers or published defects remain from this dispatched review. Engine-owned current decision hashing and gate checks remain for handoff.
