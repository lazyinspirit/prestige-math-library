# Batch 3 Step-3a adjudication

Run: `physics-cm-qm-gr-79-2026-10-11`. Group: `batch-3`. Scope: batch 3 only.

Completed all 20 owed decisions: 12 touched carriers and 8 refuter findings; no reader or page-only decisions are owed. Four refuter findings are fatal and four nonfatal; all eight are repaired, including historical defects already repaired by the reader. Twenty-two HIGH/CRITICAL risk reviews are complete. No local mathematical blocker remains. Outside-scope alerts are retained below for owner disposition; no outside or published carrier was edited, no agent was dispatched, and no judge/stamp/gate cycle was initiated.

Git HEAD bytes match every recorded pre-reader item fingerprint; starting current bytes match post-reader fingerprints. Two touched carriers had identical pre/post item bytes (continuous-dependence and Jordan example), reflecting contract enrichment. Continuous-dependence now has small Alpha Fact/proof-citation repairs; the Jordan example remains unchanged. There is no missing historical preimage escalation in this assignment. Reports are evidence and each current argument was checked independently.

## Routed decisions

| Obligation | Verdict | Closed defects |
|---|---|---|
| `touched:3:def-cm-topologically-mixing-dense-periodic-and-sensitive-maps` | accepted_repair | 1 |
| `touched:3:lem-cm-continuous-dependence-on-initial-data` | amended_repair | 1 |
| `refuter:3:4` | confirmed_nonfatal | 1 |
| `refuter:3:6` | confirmed_nonfatal | 1 |
| `touched:3:thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism` | amended_repair | 2 |
| `refuter:3:2` | confirmed_fatal | 1 |
| `refuter:3:3` | confirmed_nonfatal | 1 |
| `touched:3:thm-cm-exponential-stability-by-a-lyapunov-quadratic-form` | amended_repair | 1 |
| `touched:3:thm-cm-quadratic-mode-decomposition` | accepted_repair | 1 |
| `refuter:3:7` | confirmed_fatal | 1 |
| `refuter:3:8` | confirmed_fatal | 1 |
| `touched:3:thm-cm-smooth-dependence-and-the-variational-equation` | amended_repair | 2 |
| `touched:3:ex-cm-jordan-block-dichotomy-computed` | reviewed_no_defect | 0 |
| `refuter:3:1` | confirmed_nonfatal | 1 |
| `touched:3:cor-cm-flow-domain-open-and-flow-is-c1` | accepted_repair | 1 |
| `refuter:3:5` | confirmed_fatal | 1 |
| `touched:3:thm-cm-energy-stability-of-a-strict-minimum` | amended_repair | 2 |
| `touched:3:thm-cm-instability-of-a-hyperbolic-saddle` | amended_repair | 1 |
| `touched:3:prop-cm-first-return-map-is-a-local-c1-diffeomorphism` | accepted_repair | 1 |
| `touched:3:ex-cm-planar-harmonic-oscillator-return-map` | amended_repair | 2 |

## Current claims, prerequisites and risk reviews

All owned proof items have domain mathematics and only mathematical-premise edges; none claims observations or empirical certainty. Source Statements/Definitions are quoted exactly in the synchronized contract citations. Source status is retained; no planned/open result was treated as proved. The supplied dependency order was used for adjudication.

### def-cm-topologically-mixing-dense-periodic-and-sensitive-maps

Definition quantifies over all nonempty open sets, all radii and a single positive sensitivity constant. Removing the compact/no-isolated-points transitivity-to-mixing converse is sound: the immediate implication uses a sufficiently large positive iterate. Only Remarks changed; Definition and consumer contract unchanged. Exact suppliers: metric topology, density and metric continuity Definitions.

### lem-cm-continuous-dependence-on-initial-data

Item bytes were unchanged pre/post; the touched obligation arises from contract enrichment. Verified the recentered radius R-||a-a0||>0, closed endpoints, hM equality, reflected Gronwall and joint Lipschitz estimate. Corrected the Given line to include rho=0 and made that singleton convention explicit; added the exact norm-triangle supplier used in steps 1.1, 2.1 and 4.1. The Statement is unchanged.

### lem-cm-positive-definite-matrix-square-roots

Confirmed short omitted inferences at 2.1/3.1, repaired by defining the inverse on the positive square-root eigenbasis and directly proving x^T S x>0 for x nonzero. Checked uniqueness among positive roots, inverse symmetry/positivity and both congruence directions, including K=0 and n=1. F2 exactly supplies the nonnegative eigenbasis and unique root; F3 supplies the two-sided inverse criterion. No Statement change.

### lem-cm-strict-minimum-has-positive-semidefinite-hessian

Fermat applies at the interior minimum; Taylor with fixed nonzero h has remainder o(t^2). Choosing epsilon=c/(4||h||^2) contradicts a negative quadratic form. h=0 is handled separately; degeneracy is allowed and no converse is inferred. Exact sources: Fermat Statement, C2 Hessian symmetry and second-order Taylor Statements; function-limit Definition licenses the quantitative remainder.

### thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism

Confirmed nonfatal missing polynomial-exponential estimate at 2.3; now each u^k exp(-a u) is bounded by k! a^{-k} from the scalar exponential series (F1). Reviewed finite nilpotent binomial sums, conjugate-stable real factors, Bezout splitting, complexified kernels, adapted block norms and norm equivalence. n>=1 ensures a nonempty spectrum; empty stable/unstable factors give zero subspaces and constants at least 1. Invertibility gives reverse growth and both decay-characterization converses. Reader explicit inner-product Statement is equivalent to the original; its consumers will be checked before closure.

### lem-cm-bilateral-shift-metric-and-sequential-compactness

Confirmed nonfatal missing absolute-value triangle citation at 1.1; added lem-of-triangle-inequality to deps and F1. Taking x=s_j-u_j, y=u_j-t_j gives the exact termwise inequality; bounded nonnegative partial sums and series linearity then give the metric triangle inequality. No Statement change. Confirmed fatal ill-formed diagonal witness: r_0 is undefined, and the recursive text enumerated indices as X-valued terms. Now define increasing indices i^(m)_j and set x^(m)_j=x^(m-1)_{i^(m)_j}; use only m>=max(1,|k|). Composition of increasing index maps makes the diagonal original indices strictly increasing. Compatible restrictions define s:Z->{0,1}, and the tail bound 2^(1-m) proves convergence. Sequential compactness is choice-free; Countable Choice and DC are used only for clause 4 via the exact metric-compactness-equivalences Statement. Metric separation, both cylinder inclusions (m=0 included), open cylinder basis and zero distances checked.

### lem-cm-energy-conservation-for-the-mechanical-system

Differentiated each M entry and the potential, and checked v^T grad_q(v^T M v)=v^T(D_qM[v])v; the two acceleration terms and kinetic derivative cancel exactly. The proof is sound. Corrected the explanatory Remark sign/coefficient and cited zero-derivative-implies-constant for the last inference on an interval. No claim of empirical conservation or global existence; Statement unchanged.

### lem-cm-local-flow-composition-law

Translated autonomous solutions on I_a-s through b=Phi(s,a); maximal uniqueness gives I_a-s subset I_b, and reversing a hypothetical proper extension gives equality. This checks composition domain, identity and inverse-time domain rather than assuming completeness. Negative, zero and positive times all use the same interval translate. Exact suppliers: local-flow/maximal-solution Definitions and unique-maximal-solution Statement.

### thm-cm-exponential-stability-by-a-lyapunov-quadratic-form

Reader explicit quadratic-form eigenvalue bounds and entrywise Cauchy-Schwarz estimate are sound. All-negative spectrum gives E_u=0 in the reviewed dichotomy. Entrywise improper integrals converge by exponential domination; differentiating finite Q_T gives A^TQ+QA=-I. Q>0 follows from continuity and positive value at t=0. The compact sublevel is strictly inside the derivative-remainder ball; first exit and compact continuation yield forward existence, and the integrating factor gives the stated beta and gamma. Zero initial data, smallest eigenvalue positivity and local radius quantified correctly. Statement unchanged. Replaced limit-comparison citation (which requires a ratio limit) with the exact direct comparison theorem for exponential domination; added the elementary exponential antiderivative and tail limit. Convergence of each continuous matrix entry now has the precise supplier hypotheses.

### thm-cm-quadratic-mode-decomposition

Reader interval/domain-relative derivative clarification licenses endpoints without changing matrices or modal families. Reviewed square-root inverse and congruence supplier after repair, orthogonal diagonalization, both directions of invertible transform, lambda=0 affine and lambda>0 oscillatory solutions, uniqueness via conserved nonnegative scalar energy, and bijection of initial data/coefficients. Zero derivative supplier applies to order-convex I including endpoints. Direct/reference consumers of the clarified interval will be inspected before closure.

### thm-cm-smooth-dependence-and-the-variational-equation

Confirmed fatal overstrong title: exact Ck Definition means smooth=C-infinity, while F is only C1 and the conclusion C1. Renamed the displayed title to C1 dependence; stable ID and Statement retained. Reviewed fixed-ball first-exit trapping, compact continuation, operator norm estimates F10, segment/FTC uniform remainder using Heine-Cantor, linear matrix existence, Gronwall differentiation residual uniformly in t, and joint Y continuity. Final open time extension treats T, zero and negative times (M=0 included) before continuous-partial differentiability. No empirical claim. Confirmed historical inaccurate operator-norm citation: pre-reader Statement cited Jacobian/gradient alone. Reader has already added def-operator-norm (an adequate general supplier, so the proposed finite-dimensional-only alternative is unnecessary), bounded linear operator/matrix definitions, and local F10 proving boundedness, submultiplicativity, continuity and matrix-integral estimates. The current L is finite by compactness and norm continuity. This repairs the historical finding; it is not a counterexample to current bytes.

### cex-cm-nonhyperbolic-equilibria-defeat-exponential-conclusions

F=x^3 is C1 with F(0)=Fprime(0)=0. Explicit positive-data solution x0/sqrt(1-2x0^2t) differentiates to x^3 and blows up at 1/(2x0^2); maximal uniqueness licenses the restriction, and continuity rules out including that endpoint. Arbitrarily small positive data fail forward existence, as required by the actual stability Definition. Opposite-sign solution decays algebraically; no hyperbolic conclusion or physical assertion inferred. The exponent -1/2 derivative is now licensed by thm-real-power-continuity-and-derivatives on the strictly positive denominator interval.

### ex-cm-jordan-block-dichotomy-computed

Pre/post carrier identical; touched reflects contract enrichment. Checked explicit shear matrix derivative/initial identity and uniqueness, the coordinate eigenvalue cases over C, the squared-norm derivative fprime<=-f from (w1-w2)^2>=0, and integrating factor giving C=1,c=1/2 even though the block is nonnormal. Diagonal B has forward/backward subspaces and C=1,c=1/4 with correct time signs. Zero vectors included; no optimality claim. Compatible with clarified dichotomy inner product.

### cor-cm-flow-domain-open-and-flow-is-c1

Confirmed original nonfatal undefined compact-tube distance inference. Current reader repair explicitly defines d_K(z)=min_{k in K}||z-k||, proves attainment from compactness and continuity, then 1-Lipschitz continuity, closedness/boundedness of H and H subset U using the positive separation d>delta. Read current 1.1-5.1: fixed M,L before subdivision, shrinking radii rho_j, finite C1 composition and endpoint open extension from the reviewed variational theorem give openness/C1; t=0 and negative-time reversal are handled. M=0,L=0 and U=Rn cause no division or gap issue. Statement unchanged.

### prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium

C2 coefficients and adjugate inversion give a C1 field. At (q0,0), both velocity-quadratic terms and all first derivatives vanish, and B(q0,0)=0 kills the inverse-matrix derivative; only -M(q0)^(-1) Hess(U) delta q remains. Multiplying the first-order variation gives the second-order system. Minimum lemma yields semidefinite K without positive-definite Hessian, and reviewed modal theorem applies on every nondegenerate interval with domain-relative derivatives. No nonlinear approximation error or long-time claim is asserted.

### thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive

After repairing the metric supplier, verified continuity from block inclusions; disjoint finite prescriptions give a point for every sufficiently large positive n (take N=max(1,q-pprime+1)); periodic extension handles L=1 and negative indices through residues; flipping a positive coordinate yields initial distance 2^-k and shifted coordinate-zero distance >=1. Compactness and choice are unused. Corrected two boundary inaccuracies only in the final Remark: negative-coordinate weight and positive sensitivity constants.

### thm-cm-energy-stability-of-a-strict-minimum

Confirmed inaccurate norm citation in F4; added the exact Cauchy-Schwarz/Euclidean-norm theorem and derived the reverse inequality from triangle in both orders. Reviewed positivity of E-E0 on the sphere: U-U0>=0 inside the strict-minimum configuration ball, and either nonzero v gives positive kinetic energy or v=0 gives positive potential. Compact nonempty sphere yields a strictly positive minimum; continuity picks delta<=epsilon, first-hit energy contradiction traps the solution, and compact continuation gives all forward times. Test radius is shrunk below r0; degenerate Hessians allowed. Reader non-attraction Remark is valid only in this strict-minimum setting and is accepted. No measured premise.

### thm-cm-instability-of-a-hyperbolic-saddle

Reader builds Q_u,Q_s and both signed Lyapunov equations locally; inherited subspace inner products and real/imaginary parts supply a nonzero real unstable direction. Reviewed entrywise exponential domination, positive quadratic forms, bounded commuting projections without orthogonality, error constant 8M eta<=1, and Vprime>=gamma V on V>0. Scaling u0 gives arbitrarily small positive V. Bounded-ball contradiction plus compact continuation forces a finite positive sphere hit. E_s=0 is explicitly handled. Statement and instability radius quantifiers retained; dichotomy explicit inner-product clarification compatible. Replaced limit-comparison citation (which requires a ratio limit) with the exact direct comparison theorem for exponential domination; added the elementary exponential antiderivative and tail limit. Convergence of each continuous matrix entry now has the precise supplier hypotheses.

### ex-cm-coupled-oscillator-modes

Checked K quadratic form k(x1^2+x2^2)+c(x1-x2)^2>=0, M=mI positive, square-root identities, orthonormal eigenvectors and eigenvalues k/m,(k+2c)/m. Scalar mode branches include c=0 equal eigenvalues, k=0<c one affine mode, and k=c=0 two affine modes. Corrected the false concluding sentence at 3.1 while preserving Example. Application of the clarified modal interval is on any nondegenerate solution interval (or R for the displayed global formulas).

### ex-cm-flow-of-a-linear-system-is-the-matrix-exponential

Exponential derivative and value at zero directly solve every IVP on R; unique maximal solution cannot have a larger domain, hence Omega=R x Rn. Linear state derivative has identically zero remainder, composition is the exponential group identity, and matrix-ODE uniqueness works on every compact interval. Corrected negative-time bound in the Remark to exp(||A|| |t|). C1 variational supplier is used only at its actual C1 conclusion; explicit linear calculation independently supplies the all-time derivative.

### prop-cm-first-return-map-is-a-local-c1-diffeomorphism

Reviewed both scalar-time IFT applications (positive-dimensional state block), ambient C1 P,Q and compatible shrinkings. Both inverse identities use exact crossing uniqueness and inverse-time composition; equality of images gives openness relative to Sigma. Reader n=1 section chart uses monotonic h and a singleton, avoiding the IFT zero-horizontal-dimension case. For n>=2 graph charts apply. First-return persistence uses nonzero signs near endpoints and compact middle orbit separated from closure(Sigma), with finite product neighbourhoods; these intervals cover all (0,tau). Periodicity is not assumed. Statement unchanged.

### ex-cm-bilateral-shift-finite-checks

Checked single-coordinate distance 1/8, compatible three-periodic word including negative indices, coordinate flip shifting to index 0 and distance >=1, and inverse shift prescriptions at -n,1-n,-1. n=1 is conflicting; n=2 repeats compatible zero prescriptions; n>=3 all three positions differ. Exact N=2 is correct. Requires metric/cylinder clauses only and inherits no choice premise. Example and supplier interfaces unchanged.

### ex-cm-planar-harmonic-oscillator-return-map

Reader sine-zero-set prerequisite is necessary and sound: first positive hit for x near 1 (hence x>0) is pi/omega, reflection hits near -1, and the reference open segment avoids the closed section. Differentiated both explicit flow components, checked nonzero DhF at both endpoints and inverse reflection. Added x!=0 to the intermediate zero-set inference, which otherwise fails at the equilibrium x=0; Example already restricts x near 1, so interface unchanged. omega>0 precludes zero denominators.

## Repair ledger and artifact maintenance

- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-4` (nonfatal): Confirmed short omitted inferences at 2.1/3.1, repaired by defining the inverse on the positive square-root eigenbasis and directly proving x^T S x>0 for x nonzero. Checked uniqueness among positive roots, inverse symmetry/positivity and both congruence directions, including K=0 and n=1. F2 exactly supplies the nonnegative eigenbasis and unique root; F3 supplies the two-sided inverse criterion. No Statement change.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-6` (nonfatal): Confirmed nonfatal missing polynomial-exponential estimate at 2.3; now each u^k exp(-a u) is bounded by k! a^{-k} from the scalar exponential series (F1). Reviewed finite nilpotent binomial sums, conjugate-stable real factors, Bezout splitting, complexified kernels, adapted block norms and norm equivalence. n>=1 ensures a nonempty spectrum; empty stable/unstable factors give zero subspaces and constants at least 1. Invertibility gives reverse growth and both decay-characterization converses. Reader explicit inner-product Statement is equivalent to the original; its consumers will be checked before closure.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-2` (fatal): Confirmed fatal ill-formed diagonal witness: r_0 is undefined, and the recursive text enumerated indices as X-valued terms. Now define increasing indices i^(m)_j and set x^(m)_j=x^(m-1)_{i^(m)_j}; use only m>=max(1,|k|). Composition of increasing index maps makes the diagonal original indices strictly increasing. Compatible restrictions define s:Z->{0,1}, and the tail bound 2^(1-m) proves convergence. Sequential compactness is choice-free; Countable Choice and DC are used only for clause 4 via the exact metric-compactness-equivalences Statement. Metric separation, both cylinder inclusions (m=0 included), open cylinder basis and zero distances checked.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-3` (nonfatal): Confirmed nonfatal missing absolute-value triangle citation at 1.1; added lem-of-triangle-inequality to deps and F1. Taking x=s_j-u_j, y=u_j-t_j gives the exact termwise inequality; bounded nonnegative partial sums and series linearity then give the metric triangle inequality. No Statement change.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-7` (fatal): Confirmed fatal overstrong title: exact Ck Definition means smooth=C-infinity, while F is only C1 and the conclusion C1. Renamed the displayed title to C1 dependence; stable ID and Statement retained. Reviewed fixed-ball first-exit trapping, compact continuation, operator norm estimates F10, segment/FTC uniform remainder using Heine-Cantor, linear matrix existence, Gronwall differentiation residual uniformly in t, and joint Y continuity. Final open time extension treats T, zero and negative times (M=0 included) before continuous-partial differentiability. No empirical claim.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-8` (fatal): Confirmed historical inaccurate operator-norm citation: pre-reader Statement cited Jacobian/gradient alone. Reader has already added def-operator-norm (an adequate general supplier, so the proposed finite-dimensional-only alternative is unnecessary), bounded linear operator/matrix definitions, and local F10 proving boundedness, submultiplicativity, continuity and matrix-integral estimates. The current L is finite by compactness and norm continuity. This repairs the historical finding; it is not a counterexample to current bytes.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-1` (nonfatal): Confirmed original nonfatal undefined compact-tube distance inference. Current reader repair explicitly defines d_K(z)=min_{k in K}||z-k||, proves attainment from compactness and continuity, then 1-Lipschitz continuity, closedness/boundedness of H and H subset U using the positive separation d>delta. Read current 1.1-5.1: fixed M,L before subdivision, shrinking radii rho_j, finite C1 composition and endpoint open extension from the reviewed variational theorem give openness/C1; t=0 and negative-time reversal are handled. M=0,L=0 and U=Rn cause no division or gap issue. Statement unchanged.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-shift-remark` (nonfatal): Corrected negative-coordinate flip distance to 2^(-|k|) and retained positivity in the sensitivity-constant interval. Main constructive proof unchanged.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-5` (fatal): Confirmed inaccurate norm citation in F4; added the exact Cauchy-Schwarz/Euclidean-norm theorem and derived the reverse inequality from triangle in both orders. Reviewed positivity of E-E0 on the sphere: U-U0>=0 inside the strict-minimum configuration ball, and either nonzero v gives positive kinetic energy or v=0 gives positive potential. Compact nonempty sphere yields a strictly positive minimum; continuity picks delta<=epsilon, first-hit energy contradiction traps the solution, and compact continuation gives all forward times. Test radius is shrunk below r0; degenerate Hessians allowed. Reader non-attraction Remark is valid only in this strict-minimum setting and is accepted. No measured premise.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-coupled-zero` (nonfatal): The sentence claiming only one free direction contradicted its own k=c=0 branch. Qualified it to k=0<c and explicitly retained two free directions when k=c=0. The Example already stated both branches correctly, so no interface change.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-linear-time-sign` (nonfatal): Exponential norm bound in the Remark now uses |t|, covering negative times as required by the exponential-series supplier. The explicit flow and derivative claims are unchanged.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-integral-citation` (nonfatal): Replaced limit-comparison citation (which requires a ratio limit) with the exact direct comparison theorem for exponential domination; added the elementary exponential antiderivative and tail limit. Convergence of each continuous matrix entry now has the precise supplier hypotheses.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-integral-citation` (nonfatal): Replaced limit-comparison citation (which requires a ratio limit) with the exact direct comparison theorem for exponential domination; added the elementary exponential antiderivative and tail limit. Convergence of each continuous matrix entry now has the precise supplier hypotheses.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-oscillator-zero` (nonfatal): Qualified zero-set equivalence to x!=0; at x=0 the section is met at every time, while the Example concerns x near 1.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-continuous-zero-citation` (nonfatal): Given incorrectly excluded rho=0, permitted by Statement; removed that strict inequality, stated singleton convention, and added exact Euclidean triangle theorem used in recentering and difference estimates. Proof/Fact repair only.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-energy-remark` (nonfatal): Corrected false sign/coefficient description of the kinetic cancellation; final constancy now explicitly cites zero-derivative-implies-constant. Derivative proof and Statement are unchanged.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-refuter-power-citation` (nonfatal): Added the exact real-power derivative supplier for exponent -1/2 on the positive denominator interval; chain/product rules alone did not state it. The explicit counterexample and hypotheses remain unchanged.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-touched-mixing-converse` (fatal): Removed false implication from transitivity to mixing under compactness/no isolated points; the cited symbolic-dynamics notes Example 2.2.3 give irrational rotations as counterexamples.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-touched-reader-complex-norm` (nonfatal): Retained reader explicit Hermitian norm/isometry, finite-matrix boundedness/completeness, finite nilpotent sum rearrangement and real/complex kernel identification; checked original and repaired paragraphs against the exact library suppliers.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-touched-reader-interval` (fatal): Original unspecified curve domain did not license interval uniqueness/constancy; retained nondegenerate order-convex I containing 0 and continuous domain-relative derivatives. All modal conclusions retained.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-touched-reader-section-chart` (nonfatal): Retained reader separate n=1 singleton chart argument via nonzero derivative and mean value theorem, and n>=2 graph-chart application; preserves both local inverse identities.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-touched-reader-conservation-scope` (fatal): Retained restriction of the non-attraction inference to the strict-minimum mechanical model: nearby non-equilibrium energies exceed E0. A general conserved energy may be constant and does not prohibit asymptotic stability.
- `physics-cm-qm-gr-79-2026-10-11-3a-batch-3-touched-reader-sine-zero` (nonfatal): Retained sine-zero-set theorem as exact direct prerequisite for first positive hit pi/omega and the no-hit open segment; derivative formulas alone do not license the complete zero set.

Every completed repair has repair_confidence 1 in its ledger/decision record. The owning batch manifest now matches current Statement/Definition/Example text, titles, sources, provenance and dependency roles; proof contracts match final step paragraphs/tags and exact Fact suppliers. Changed generated example proofs have ai-altered proof provenance. No changed carrier had a judge stamp to invalidate. Countable Choice/DC uses for the shift are confined to clause 4/step 3.1; its canonical subsequence construction uses neither. Stable IDs, item/page inventories and page placements are preserved. No pair/page was added or withdrawn.

## Focused local checks

- Final precheck on the 19 changed carriers: 18 proof-bearing items checked, zero failures; the definition has no proof.
- Final rendercheck on the same 19 paths: YAML and all mathematical spans parse with the actual renderer/KaTeX.
- Final single batched proof-layout invocation on those paths after the last item edit: 19 items, 97 steps, zero defects.
- Initial risk-report ran without require-reviewed; final require-reviewed passed for all 22 contracts.
- Focused coherence: exact 20-obligation set, no duplicates, all flagged decisions bind exactly one closed row, all 29 manifest dependency/role records match carriers, all 22 risk reviews complete.
- Owned cross-batch input updated, and frontier-dependency-ledger refresh completed/deduplicated.

Precheck command prefix: `node tools/tsx-run.mjs tools/physics-support/precheck.mts`; rendercheck: `node tools/physics-support/rendercheck.mjs`; layout: `node tools/physics-support/proof-layout.mjs`. Each used the following explicit item paths in one invocation:

```text
items/lem-cm-continuous-dependence-on-initial-data.md
items/thm-cm-smooth-dependence-and-the-variational-equation.md
items/cor-cm-flow-domain-open-and-flow-is-c1.md
items/prop-cm-first-return-map-is-a-local-c1-diffeomorphism.md
items/lem-cm-bilateral-shift-metric-and-sequential-compactness.md
items/def-cm-topologically-mixing-dense-periodic-and-sensitive-maps.md
items/thm-cm-bilateral-shift-mixing-dense-periodic-and-sensitive.md
items/thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism.md
items/thm-cm-exponential-stability-by-a-lyapunov-quadratic-form.md
items/thm-cm-instability-of-a-hyperbolic-saddle.md
items/lem-cm-energy-conservation-for-the-mechanical-system.md
items/lem-cm-positive-definite-matrix-square-roots.md
items/thm-cm-quadratic-mode-decomposition.md
items/thm-cm-energy-stability-of-a-strict-minimum.md
items/prop-cm-linearization-of-the-mechanical-system-at-an-equilibrium.md
items/ex-cm-flow-of-a-linear-system-is-the-matrix-exponential.md
items/ex-cm-coupled-oscillator-modes.md
items/ex-cm-planar-harmonic-oscillator-return-map.md
items/cex-cm-nonhyperbolic-equilibria-defeat-exponential-conclusions.md
```

Risk command: `node tools/physics-support/risk-report.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-3.proof-contracts.json --require-reviewed`. Local checks are not engine gates or publication acceptance. An attempted help lookup for a nonexistent manifest-sync tool returned MODULE_NOT_FOUND; no gate was run or pass claimed from it. Manifest coherence was checked directly as described above.

## Consumer review, owner alerts and source scope

Public-interface consumer check: the only substantive reader Statement clarifications are the explicit real inner product/complexification in the dichotomy and the nondegenerate order-convex relative-derivative interval in quadratic modes. The variational Statement adds an exact operator-norm link without changing L or regularity. Local consumers checked in their own routed reviews. Outside uses checked: def-cm16-stability-and-hyperbolicity-concepts Definition (vi), pthm-cm16-hyperbolic-linearization L1/1.1, def-cm09-coupled-quadratic-model Definition (e), cor-cm-forced-modal-oscillator-response Statement/F1, ex-cm-ideal-pendulum-equation-and-stability F4, pthm-cm09-free-modes-and-degeneracy F1/1.1, pthm-cm09-linearization-at-a-strict-minimum F2, prop-cm-flow-derivative-satisfies-the-canonical-matrix-identity F1/1.1/1.2/4.1, pthm-cm16-variational-equation-and-linearization L1/1.1, lem-kam-generator-flow-and-remainder-bound F4/3.1/3.2/4.1, and pthm-cm16-recurrence-for-finite-volume-models L3/4.1. The modal forced/general-sign consumers explicitly use only the algebraic transform or their independently established global scalar families; no unsupported application to an interval omitting 0 was found. KAM realifies and uses C1 derivatives; its holomorphy is proved separately in 3.2, not inferred from the word smooth. Dichotomy consumers use Euclidean finite-dimensional spaces with the same spectral gap. No necessary Statement/Definition consumer repair is caused by these clarifications, so no next-hop propagation is needed. The owning dynamics-page summary and rem-cm-scope-of-energy-stability-and-quadratic-modes remain accurate at those supplier uses.

Outside scope alerts remain for owner disposition, without editing consumers: pthm-cm16-recurrence-for-finite-volume-models L3 incorrectly credits the local cylinder variational theorem with global open-domain/C1 regularity. Its needed established supplier is cor-cm-flow-domain-open-and-flow-is-c1; owner should add that direct dependency/Fact citation (or cite its finite-cylinder proof explicitly). This is a pre-existing nonfatal citation defect, not a failure of current batch-3 proofs. def-cm-mechanical-vector-field-and-energy-in-a-chart source references place formulas (8.76)-(8.78) in Section 8.6; the retrieved 2012 Teschl edition has these in Section 8.4, printed pp.245-246. That unrouted definition was left unchanged. Local risk-only repairs are listed in the ledger and report; the engine must bind any new carrier coverage before its own gates. Existing outside producer escalations in batches 6, 7 and 13 require their owners/engine to resolve against the current repaired producers; this dispatch does not clear their decisions. No proposed withdrawal or defective published item was identified; no published item/import was edited.

Source retrieval: [Teschl, 2012 online edition](https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf), PDF pp.55-60 (printed 43-48, Theorems 2.8-2.10), pp.201-202 (printed 189-190, Theorem 6.1/cocycle proof), p.209 (printed 197, Lemma 6.9), pp.210-211 (stability and xprime=mu x^3), p.216 (Theorem 6.16), pp.257-258 (Section 8.4 oscillator transform), pp.266-267 (Theorems 9.1-9.2). Read those relevant sections; local proofs establish the generalized matrix-field conclusions. Theorem 6.16 does not state strictness; the local energy argument requires and states it. The half-section in Problem 6.14 differs from our whole-line section, so its return is not silently transferred.

Source retrieval: [Ulcigrai symbolic-dynamics notes](https://m-artigiani.github.io/files/SisDin-Part2.pdf), PDF pp.8-9 (transitivity/mixing distinction and irrational rotation), p.13 (Definition 2.3.4), pp.31-35 (metric, cylinders and transition-matrix assertions). The binary-weight metric used here has rho=2, outside the notes' exact-cylinder-equals-ball hypothesis rho>2N-1; its weaker two inclusions and basis claim are proved locally. Countable Choice/DC are separately declared through the exact imported metric compactness theorem, not borrowed from these notes.

Source retrieval: [Ramponi notes](https://federico-ramponi.unibs.it/docs/lyapunov.pdf), all seven PDF pages, especially pp.4-6 (integral Lyapunov equation and C1 linearization). The instability theorem there is explicitly unproved, so the local indefinite-quadratic proof is essential. Page 7 claims two-sided attraction for xprime=-x^2, which fails for negative initial data; our independently proved +/-x^3 example does not adopt that claim. [Glasner-Weiss author version](https://www.math.tau.ac.il/~glasner/papers/sensi.pdf), PDF p.1 Section 0, inspected for the transitivity/dense-periodic/sensitivity package; our definition explicitly substitutes mixing. Secondary Arino, Tong and Axler texts were not independently retrieved in this dispatch; no claim of reading them or importing their unverified proof is made. All actual cited mathematical supplier Statements/Definitions were inspected at needed scope; unrelated transitive proofs were not re-audited.


Handoff: reports/decisions and local artifacts are ready for engine hash-binding and its gate battery. Owner should route the listed outside citation/location alerts and existing dependent-batch producer escalations. No unresolved substantial mathematical prerequisite remains in batch 3.
