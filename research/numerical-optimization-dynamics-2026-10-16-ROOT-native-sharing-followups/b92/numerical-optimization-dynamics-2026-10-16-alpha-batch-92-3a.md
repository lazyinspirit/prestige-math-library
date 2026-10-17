# Batch 92 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-92`.
Scope: four touched items, one touched A page, four reader findings and one refuter finding, plus all 17 HIGH/CRITICAL risk reviews. Review follows the generated dependency order. No judge or engine gate is run.

## Read-only producer: overlap whitening (batch 57)

`reader:92:1` and `refuter:92:1`: confirmed nonfatal historical adjoint-algebra omission. The current producer adds F3 citing `prop-adjoint-algebra` and `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`; Proof 1.1 derives the inverse-adjoint identities from both inverse equations. Proofs 2.1 and 3.1 then reversibly transform the pencil and preserve the positive denominator. Those exact supplier statements and their proofs, the Cholesky definition/existence statement, and the producer contract/manifest were read. Positive definiteness excludes singular L; c≠0 iff y≠0. No current mathematical defect remains in the producer proof. This is a current-source review, not a claim that the historical reported bytes contain F3.

Producer metadata alert to owner/batch 57: current contract still quotes old F2-only derivations and omits F3; reconcile contract and manifest dependency mirrors with the corrected source. Outside edit scope. Original producer fingerprints, paths and consumer bindings will be retained verbatim in the decisions. Consumer `def-finite-basis-projector-energy-model` uses precisely the sound current whitening interface.

## Item reviews

### `def-finite-temperature-density-matrix-free-energy`

Definition checked against all nine actual dependency statements: n≥2, integer 1≤r<n, beta>0, Hermitian order and spectral functional calculus. D=(r/n)I is feasible. Endpoint entropy is assigned 0 log 0=0; its continuity and interior derivative are discharged by the two justified_by items, reviewed below. Real C1 energy is supplied on an open neighborhood and its gradient is Hermitian in the real Frobenius space. Fixed F is Hermitian; no nonlinear uniqueness or convexity is asserted. No AC use or mathematical defect.

### `lem-complex-hermitian-eigenvalues-lipschitz`

Proof 1.1–3.1 checked against complex/real spectral theorems, real Weyl inequalities and induced-norm definition. Realification is an isometry C^n→R^(2n), preserves products and duplicates each real Hermitian eigenvalue, including multiplicity. Weyl upper uses (i,j)=(k,1); lower uses (k,2n). Thus every duplicated eigenvalue differs by at most ||A−B||2. Repeated eigenvalues, A=B and zero dimension are harmless (the last is vacuous). No choice axiom beyond finite-dimensional basis existence is used.

### `def-finite-basis-projector-energy-model`

Definition reviewed after the current batch-57 whitening proof: S>0, invertible L, h=L^−1 h0 L^−* is Hermitian and y=L*c preserves the quotient in both directions. Supplied interactions are in orthonormal coordinates. On 1≤r<n projectors, G is real-linear and Frobenius self-adjoint and Exc is real C2 on an open neighborhood; these are exactly the gradient supplier hypotheses. Reality and the gradient formula are discharged by prop-finite-projector-energy-reality-and-gradient. No continuum exactness or arbitrary tensor properties are asserted. Producer metadata mismatch is reported separately; current mathematical interface is sound.

### `lem-finite-temperature-entropy-continuous-at-endpoints`

Accepted reader repair: actual complex spectral/Frobenius norm theorem supplies ||A||2≤||A||F over C, replacing real-only support. Step 1.1 proves x log x→0 by the integral bound log t≤2(sqrt(t)−1), and symmetry handles 1. Steps 1.2–2.1 use ordered-eigenvalue Lipschitz continuity and a finite sum of continuous scalar entropy values; repeated eigenvalues and occupations 0/1 require no eigenvector continuity. Current raw source exactly matches immutable post-reader hash 1af8e8cb5f67600f2c3eee5c39b4e88f74504210bdeac796b2778b43f43311f0. No statement change.

### `prop-interior-entropy-trace-derivative`

Accepted reader repair: steps 1.1–4.1 prove the matrix logarithm Frechet derivative by the exact resolvent identity, not eigenvector differentiation. X≥mI and ||H||2<m/2 ensure X+H>0. Submultiplicativity is derived; the integrable remainder bound 2||H||2²/m² is valid (loose). Finite-dimensional norm equivalence transfers the quadratic bound to Frobenius differentiability. Resolvent integrals converge absolutely; tracing XR_s H R_s uses cyclicity derived from diagonal sums and ∫x/(x+s)² ds=1. Applying to I−D with −H cancels identity terms. F1 integral representation follows locally from the cited scalar logarithm integral. Published product-rule omission is nonfatal and separately routed. Source exactly matches post-reader 3be6d5cc9060c5782c759590b5de621fe1a17371b7299af7d915b1f639acff1f; no statement change.

### `ex-nested-trial-spaces-may-have-equal-energies`

Verification 1.1–2.1: nonempty complex unit spheres are compact in real coordinates and the polynomial energy is continuous. On span(e2), span(e2,e3), and C3 the diagonal energy minima are 1,1,−1; extending K_j=C3 for j≥3 gives the stated sequence limit. Exact nested-minimum supplier permits equality and −infinity generally; here the ground state is in K3. No strict-improvement or unsupported continuum claim.

### `ex-zero-ritz-residual-does-not-identify-ground-state`

Exact diagonal calculation gives Rayleigh value 1 and residual 0 for u=e2, while the lowest eigenvalue is −1. This meets the nonzero finite Hermitian supplier domain. Countable Choice is explicitly carried for the invoked residual theorem (the displayed witness calculation itself needs none); no gap-based ground-branch selection is claimed. The awkward phrase about a nonzero threshold being zero does not alter the explicit zero-residual witness or conclusion. No mathematical defect.

### `lem-finite-temperature-minimizer-is-interior`

Both endpoint cases independently checked in steps 1.1–2.1: trace 0<r<n supplies a second occupation to transfer t from/to. In the eigenbasis the perturbation preserves Hermiticity, trace and [0,1] for sufficiently small positive t. One endpoint contributes t log t+O(t), two endpoints contribute 2t log t+O(t); interior changes and the C1 energy are O(t). Positive beta makes the quotient negative as t→0. Repeated eigenvalues do not affect a fixed diagonalizing basis. No convexity, global Lipschitz assumption or eigenvector derivative is used.

### `lem-rank-r-projector-grassmann-chart-and-tangent`

Steps 1.1–3.1 checked: kernel is the orthogonal complement, J*J=I+X*X>0, projector range has dimension r, and equal-dimensional T is invertible iff TT*>0. The top-left block at P0 is I; inversion is smooth on the invertible locus by its exact derivative formula and iteration, so X=BA^−1 gives inverse smooth coordinates. Differentiated idempotence forces precisely off-diagonal Hermitian tangent blocks, all realized by P(tB). Frame equality iff right unitary multiplication follows from Q=Y*Z; rank assumptions exclude empty/full charts but r=1 is included. Published inversion/product proof omissions are confirmed nonfatal below with explicit elementary closure, not substantial missing prerequisites. No local statement repair is needed.

### `thm-finite-temperature-free-energy-attains-minimum`

Steps 1.1–2.1 apply the exact nonempty compact metric extreme-value theorem to continuous E+beta^−1 tr phi. The compact-domain supplier and repaired endpoint continuity cover eigenvalues 0 and 1; D=(r/n)I witnesses nonemptiness, beta>0 is finite. Existence alone is concluded; interiority and uniqueness are not inferred from compactness.

### `ex-overlap-whitening-can-amplify-coefficient-errors`

Accepted reader repair. Verification 1.1 explicitly gives orthonormal eigenvectors with eigenvalues 2−epsilon and epsilon>0. Step 2.1 proves ||A||2²=lambda_max(A*A) from the induced norm and spectral theorem. For L^−1 its Gram matrix is S^−1; for L^−* it is L^−1 S^−1 L, similar to S^−1. Thus the actual coordinate-back map L^−* has norm epsilon^−1/2, attained at a unit vector. Condition number is explicitly spectral. Each 0<epsilon<1 is admissible; the singular limit epsilon=0 is excluded. No floating-point energy estimate is asserted. Current source equals post-reader 47fe3c65956ddef28d35d85d96e9e79fb6d961d76275de0912a7c3cb7453df2d; clarification preserves the mathematical claim.

### `lem-complex-projector-tangent-commutator-curves`

Steps 1.1–4.1: skew-Hermitian K has purely imaginary quadratic form, excluding a nonzero real eigenvalue 2/t, hence I−tK/2 is invertible for every real t by elementary finite-dimensional injectivity/invertibility. Commuting factors give Q*Q=I; inverse differentiation yields Qprime(0)=K. Unitary conjugation preserves Hermitian idempotence and trace; derivative is [K,P]. Conversely each Hermitian off-diagonal block is [K_X,P] for the explicitly displayed skew block, with the signs checked. References to rank/inverse rules leave only immediate finite-matrix algebra implicit, not an unmet substantive prerequisite. No exponential or arbitrary choice is needed.

### `thm-finite-temperature-fermi-dirac-stationarity`

Steps 1.1–4.1: positive least eigenvalue of both D and I−D allows every traceless Hermitian direction with both signs. Orthogonality against H=A−tr(A)I/n forces A=mu I by ||H||F²=0, with real mu. Thus F_E(D) commutes with D and the scalar log-odds equation yields the matrix logistic formula. For each fixed field and beta>0, all occupations are continuous strictly increasing in mu with limits 0/1, so the sum crosses any 0<r<n exactly once by IVT on a finite bracketing interval. Degenerate field eigenvalues cause no problem. This does not imply uniqueness for nonlinear self-consistency or at excluded trace endpoints.

### `thm-finite-projector-commutator-stationarity`

Accepted reader clarification: stationarity is explicitly DE(P)[H]=0 for every projector tangent. Trace rearrangement gives −tr([F,P]K); C=[F,P] is skew-Hermitian. Choosing K=C yields −tr(C²)=tr(C*C)=||C||F², so stationarity forces C=0. Conversely C=0 annihilates every tangent using the exact commutator-curve lemma. Both directions and sign checked over complex matrices with real Frobenius pairing. First-order stationarity does not imply minimality. Current source equals post-reader d9db4aabbb6d7c387f720af02a560941b1838e9e38c53b2553f75c5f4d057e39. Direct consumer uses of the clarified Statement are checked below.

### `thm-positive-tangent-hessian-implies-strict-projector-minimum`

Steps 1.1–3.1 use the same tangent-vanishing meaning of stationarity as the clarified supplier; no consumer repair needed. Chart differential is tangent, giving Dpsi(0)=0. C2 continuity in finite dimension preserves the uniform Hessian lower bound c/2 in a sufficiently small ball; integrating twice along tX yields c||X||F²/4. A small ball is star-shaped, so all tX remain in it. Smooth injective graph coordinates transfer strict minimality to distinct nearby projectors and hence frame classes. The positive Hessian in that ball also precludes another local minimizer there (strict convexity), supporting isolated. No ambient Hessian shortcut or necessity is claimed.

### `ex-two-level-nonlinear-projector-stationary-maximum`

Verification 1.1–3.1 checked: G(A)=2tr(HA)H is real-linear self-adjoint and maps Hermitian matrices to Hermitian matrices, giving E(P)=tr(HP)^2. For any complex rank-one frame u, s=|u2|²=P22 parametrizes the value (1−2s)². The open projector neighborhood s<1/2 contains P0; every distinct projector there has 0<s<1/2 and lower energy, so the maximum is strict in all complex directions. F(P0)=2H commutes with P0, and the clarified tangent-stationarity supplier applies without a consumer change. This explicitly disproves a stationarity-implies-minimum inference.

### `ex-finite-basis-projector-optimization-on-grassmann`

Proof 1.1–3.1 and all 18 exact declared supplier statements reviewed. XX* parametrizes all rank-r Hermitian projectors modulo U(r); complex horizontal projection and real Frobenius gradient give 2(I−P)F(P)X. The real-only geometry dependencies are unused context, not applied to complex frames. For every horizontal eta the Gram I+eta*eta is positive, so complex polar trials are always defined and preserve constraints. The bounded horizontal disk is closed and bounded in real coordinates; smooth polar retraction and C2 ambient E give a continuous fiber Hessian with a finite uniform operator bound, hence Lipschitz pullback gradients. B=0 is real self-adjoint; immediate inner failure invokes Cauchy fallback, and the +infinity safeguard selects it at every positive radius. Exact algorithm parameters and 0<epsilon≤1 meet the cited theorem, whose cap counts accepted plus rejected outer trials only. No inner-work, second-order, nonlinear uniqueness or continuum guarantee is imported.

## Historical comparison and page disposition

Recovered complete pre-reader carriers from `research/numerical-optimization-dynamics-2026-10-16-owner-boundary92-95-template-proposals/source-before/items/` for all four touched items, and from `research/numerical-optimization-dynamics-2026-10-16-owner-final-ledger-page-closure/before/finite-basis-projector-energies-and-variational-electronic-structure.md` for the A page. Each raw SHA-256 exactly matches its immutable batch-92 pre snapshot. Compared their full diffs with current carriers, which exactly match the immutable post snapshot. No historical preimage is missing for these five decisions.

All four reader item changes are accepted. The stationarity Statement adds only the tangent-vanishing definition; both direct item consumers are `thm-positive-tangent-hessian-implies-strict-projector-minimum` and `ex-two-level-nonlinear-projector-stationary-maximum`, whose actual uses were checked above. Neither requires a content repair. The whitening example clarifies the spectral condition number; it has no item consumer. Other touched Statements are unchanged.

The A-page repair is accepted: nonempty compact feasible sets and one common continuous energy are now explicit, exactly matching `thm-nested-finite-basis-infimum-monotonicity`. The energy-recovery caveat applies to any ambient feasible set, including a continuum domain. Its projector, entropy, stationarity and Hessian summary assertions agree with the local items. No page content was edited by Alpha.

## Published supplier findings (read-only)

`reader:92:2`: confirmed nonfatal, `thm-derivative-of-matrix-inversion` Proof 1.1 omits determinant invertibility/continuity suppliers. Its current complete proof and declared dependencies were read. A short determinant-free closure is available: if ||A^−1 K||2<1, then (I+A^−1 K)x=0 implies ||x||≤||A^−1 K||2||x||, so x=0. Finite-dimensional injectivity implies invertibility; hence A+K is invertible in an open ball. This avoids both determinant citations and works over R and C, including the vacuous zero-dimensional case. The exact inverse/remainder algebra in step 1.1 is correct. Required owner action: add this local argument or the exact determinant suppliers; published carrier unchanged. Consumer: `lem-rank-r-projector-grassmann-chart-and-tangent` (open smooth graph chart).

`reader:92:3`: confirmed nonfatal, the same theorem Proof 2.1 omits norm-inequality support. From the induced-norm definition ||AB||2≤||A||2||B||2. Applying ||Av||≤||A||2||v|| to columns gives ||AB||F≤||A||2||B||F; adjoints give ||AB||F≤||A||F||B||2. The actual real/complex singular-value comparison theorem supplies ||K||2≤||K||F and adjoint invariance. Thus the inverse bound and quadratic Frobenius remainder 2||A^−1||2³||K||F² are valid. Required owner action: cite/derive these estimates. Consumer and interface are the same; no substantial prerequisite remains mathematically unproved.

`reader:92:4`: confirmed nonfatal, `prop-matrix-differentials-obey-sum-product-and-adjoint-rules` Proof 2.1 leaves the product norm unspecified and the product estimate unproved. Take q=(||H||F²+||K||F²)^(1/2). Finite-coordinate complex Cauchy–Schwarz gives |(HK)_ij|²≤(sum_l |H_il|²)(sum_l |K_lj|²); summing yields ||HK||F≤||H||F||K||F≤q²/2=o(q). The sum/adjoint maps have exactly zero remainder; the product derivative is therefore correct. Required owner action: insert this norm and estimate or exact complex-compatible suppliers. Owned consumers include `prop-finite-projector-energy-reality-and-gradient`, the graph-chart and commutator-curve lemmas, and the entropy derivative; all use the valid product rule. Published carrier unchanged.

These are closed nonfatal adjudication dispositions with pending published editorial maintenance, not claimed published repairs. Exact current raw hashes and routed original bindings appear in the decisions. Published classifications and repair strategies are recorded under the required serialized ledger lock.

## Metadata maintenance

Alpha synchronized the two changed dependency lists in the batch-92 page manifest (complex norm comparison and operator-norm definition), five stale contract citation quotations with exact current supplier sections, and the entropy-derivative step-1.1 F6 input. The first strict contract check reported six mechanical mismatches; after these metadata corrections it reports 0 errors, 0 warnings, 26/26 items checked. These mechanical mismatches have no defect-ledger rows. All 17 required risk reviews are recorded individually above and in the owning contract. No mathematical item, published item, judge record, scope, snapshot, or historical report was edited.

Sources used for this review are the exact local supplier statements and the complete current arguments identified above, together with the immutable reader/refuter artifacts and authenticated preimages. No external source reading or independent audit of the entire transitive published library is claimed.

## Final local checks and owner handoff

- Strict proof contract: `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-92.proof-contracts.json --strict` — pass, 26/26 items, 0 errors and 0 warnings.
- Risk report was run before review without `--require-reviewed`; final run with `--require-reviewed` — pass, 26 routed items, all 17 HIGH/CRITICAL reviews complete.
- Focused precheck on the four reader-changed items — 4 checked, 0 failing.
- Required batched `proof-layout` on the same four items — 4 items, 12 steps, 0 defects. No item edit followed this check.
- Defect ledger append — nine closed rows, covering five accepted repairs and four distinct outside-supplier omissions; reader/refuter duplicate whitening findings share exactly one row. No mechanical-failure row was created.
- Decisions — exactly ten owed obligations, retaining producer batch, consumer, dependency path and immutable original fingerprints for both routed batch-57 findings. No engine decision hash was stamped.
- Scoped whitespace check — pass.

Owner action remains for batch-57 metadata synchronization and published nonfatal editorial maintenance. Shared frontier-ledger refresh was attempted with `node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16` and exited 1: `Invalid escape sequence \\k at line 32, column 76`. The offending current source locator is `items/thm-cir-lamperti-scheme-converges-in-probability.md:33`, a double-quoted YAML string containing unescaped mathematical backslashes. That item is outside batch 92; it was not edited. The owned cross-batch input is updated and valid JSON, but the shared refresh remains for the owner after that foreign parse error is resolved. This is a mechanical handoff blocker, not an unresolved substantial mathematical prerequisite or an adjudication escalation.

No proposed withdrawal was removed. Published items remain read-only. No judging, stamping, dispatching, gate battery, publication or commit was initiated.
