# Batch 15 Step 3a adjudication

Run: physics-cm-qm-gr-79-2026-10-11; group: batch-15. Scope: the 57 reader/refuter obligations listed in the generated order task (35 reader, 22 refuter); no touched or page-carrier decisions are owed. Reader made no edits; pre/post hashes coincide. Current initial raw hashes match post for all 18 items. Historical observed hashes differ from these snapshots; current proofs are reviewed independently and historical formatting is not attributed to current bytes. No judgments, stamps or gate battery are performed.

## def-periodic-vector-sobolev-space-and-leray-projection

Reviewed all Definition clauses, Fourier/Fejer/Fubini exact statements and torus measure definition. Conjugate symmetry, k=0, negative orders and gradient sign are sound. Scalar spaces now explicitly supply pressure. Consumer review: every local fluid consumer uses the same scalar component or gradient conventions; outside post-cm17-fluid-constitutive clause (c), pthm-cm17-incompressible-periodic-local-evolution F2/1.2 and ex-cm17-periodic-shear-exact-solution-check F2 retain their types and uses; no repair is necessary. These outside dispositions require owner acknowledgment before interface closure. No imported bytes were edited. Next: endpoint integral conventions.

## lem-cm-integral-and-ftc-for-continuous-normed-space-curves

Complete normed real X and compact a<b: boundedness/uniform continuity give a finite modulus; deterministic uniform partitions and common refinements give a Cauchy limit independent of tags. Additivity includes c=a,b using the explicit zero convention. Signed nonzero increments yield both derivatives with one-sided endpoints. Linearity and bounded images commute with sums/limits, even if Y is incomplete, since their sums converge to T of the X-limit. Zero X, zero g, one cell and constant curves are covered; no extra choice is needed. Consumer: local existence step 3.1 now has a defined t=0 identity; the integral is unchanged on positive intervals. No outside item directly cites this supplier. Next: lattice shell counts.

## lem-cm-lattice-shell-count-and-weight-sums

Checked disjoint half-open cubes, R=0 and shell m=1; the inner radius m-sqrt(3)/2-epsilon is positive and annular comparison followed by epsilon→0 avoids sphere-boundary assumptions. 36pi<240 validates the chosen constant. Finite shell sums now have bound 1+C sum m^(2-2sigma), convergent at sigma>3/2; general weights replace sigma by sigma-r. Finite Cauchy–Schwarz then supremum gives l1 estimates, and w≥2pi(N+1) gives the tail estimate for every real r including extended infinite sums. AC_omega is inherited only from measure suppliers. No converse threshold is used downstream.

## lem-fourier-lattice-sobolev-embedding

Reviewed the summability threshold sigma-|alpha|>3/2, weighted Cauchy–Schwarz and uniform convergence. Bounded convergence identifies Fourier coefficients, Parseval gives equality almost everywhere, and every nonempty torus-open set contains a fundamental-domain box of positive volume, proving pointwise uniqueness without any torus metric. Componentwise FTC plus the continuous tagged-sum bound justifies the differentiation induction for positive and negative h. Scalar proof is precisely the single-coordinate argument; vector bounds use coefficient Euclidean norms. Endpoint j=0, zero fields and canonical equivalence-class representatives are covered. Outside physical consumer pthm-cm17-incompressible-periodic-local-evolution F4/1.2 uses the unchanged all-order embedding implication; no rewrite required, pending owner acknowledgment of interface disposition.

## lem-fourier-tail-diagonal-compact-convergence

Reviewed deterministic nested bisection subsequences and least-index diagonal construction, equicontinuity from bounded coefficient derivatives by scalar MVT, finite dyadic nets and finite-frequency uniform convergence. All-order finite-sum bounds give the limit norms; uniform H^(p+1) tails yield convergence/continuity in every H^p by using hypothesis (c) at p+2. Conjugate symmetry, divergence constraints and initial values pass in each bounded coefficient functional. B=0 and vanishing coefficient differences cause no division. No Arzela–Ascoli or dependent-choice invocation is hidden. F1 dimension shorthand is harmless for the actual six-real-coordinate extraction in steps 1.1/2.1.

## lem-discrete-young-and-sobolev-product

Checked nonnegative double sums as suprema over finite sets; Young follows from finite Cauchy–Schwarz and reindexing, with absolute convergence supplied by l2 coefficient boundedness. Defined every typed multiplication and proved the same weighted coefficient estimate using |ab|≤|a||b|. The weight convexity factor 2^(sigma-1) and two Young terms yield exactly C_sigma=2^sigma W_sigma; scalar components times derivatives produce transport factor 3. Sigma>3/2 is essential; zero sequences and constant modes are included. All direct consumers are the in-batch commutator, IVP, lifespan, bootstrap, pressure and existence items, which use scalar-component products or transport; their uses are now licensed. No outside direct reference consumer was found.

## cex-cm-absolute-convergence-fails-in-h-zero

Checked shell multiplicity (2L+1)^3-(2L-1)^3=24L^2+2, weight bounds 2pi L≤w≤sqrt(1+12pi^2)L and log comparability for L≥2. Squared coefficients sum like 1/(L log^2 L), whose proper integral is bounded by 1/log 2; unsquared shell terms grow like sqrt(L)/log L and cannot tend to zero. Real symmetry plus the assumed supplier Parseval isometry supplies an L2 class. Low modes are explicitly zero; no continuity or dynamical assertion is made. AC_omega is the adopted convention of the cited definition.

## ex-cm-leray-projection-explicit-computations

Checked all Fourier coefficients, signs at ±e3 and the scalar potential sin(2pi x3)/(2pi); mixed norms are 1/2+1/2=1 by Parseval and orthogonality. For A·k=0, k≠0, P fixes the mode and its pairing with arbitrary H0 v; A=0 is allowed. No dynamical assertion. Historical formatting is already repaired in current carrier.

## lem-cm-strong-solution-smoothness-bootstrap

All-order continuity and differentiability are explicit hypotheses, including one-sided endpoints. The repaired F2 uses p>5/2 for the H^(p-1) transport output; all desired lower targets follow by taking sufficiently high order and inclusion. Bounded evaluation and spatial-derivative evaluation identify pointwise time derivatives and commute mixed derivatives. Joint continuity follows from H^q→C^j bounds. Bilinear difference quotients prove Leibniz, and the induction uses only already available time derivatives to obtain one additional derivative from u prime=G. nu=0 and zero u are covered; no parabolic regularity theorem is presumed.

## lem-fluid-galerkin-coefficient-ivp

The finite generating list consists of projected real/imaginary scalar characters times coordinate vectors, so it lies in X_N and spans it. Ordered greedy deletion constructs a basis without infinite choice. Orthogonal truncation preserves conjugate symmetry/divergence. Component product rule proves the convection mean is zero without tensor notation. Checked exact 12pi²nu N²+6C_s c_N R Lipschitz bound, two-sided coordinate norm constants and quantitative Picard hypotheses on all R^M. Restarting within enlarged balls gives uniform duration for bounded states and thus actual norm divergence at a finite maximal endpoint, then norm equivalence covers every s prime. Derivative bounds at low orders use support≤2N, and the tail bound is independent of N. Zero fields and viscosity, N≥1 and constant modes are covered.

## lem-tame-transport-commutator

Explicit symmetric cutoff proves density inside the divergence-free subspace, enabling polynomial integration by parts to extend by continuous trilinearity. Weight gradient≤2pi yields the m>5/2 comparison; Young and differentiated l1 coefficients yield the stated (nonoptimal) constant. The commutator terms are legitimately interpreted first in H^-1, not falsely assumed separately L2; bounded multiplication and coefficient differentiation supply their limits. Bilinear estimate shows truncated commutator convergence in L2, matching the H^-1 difference. Claim 3 uses u in H^(2m), so Lambda^m u in H^m and every pairing is defined; Parseval supplies the self-adjoint rearrangement. Zero u and nu-independent constants are covered.

## lem-fluid-energy-common-lifespan

Differentiated norms now explicitly use the weighted H^m pairing, while the commutator identity uses L2 pairing; the original F1 incorrectly omitted weights, found during risk review and repaired. Self-adjoint P/P_N and Fourier Laplacian give exact dissipation; commutator Cauchy–Schwarz gives the inequality. Reciprocal regularization uses epsilon>0 and a positive denominator, taking epsilon down to zero only at t in the maximal interval; the bound then excludes a finite endpoint≤T, including T itself. Y0=0 is handled by uniqueness of the zero IVP on the whole interval. Title no longer divides by zero. No claim of global nonzero-data existence or viscosity-dependent lifespan is made. Additional risk finding: weighted pairing error in original F1/1.1 was independently corrected; owner must route this additional carrier defect before final gate closure.

## lem-periodic-pressure-reconstruction

Scalar pressure now lives in the explicitly defined scalar H^m. Its k≠0 multiplier is bounded by the sum of nine product norms and preserves conjugate symmetry; k=0 is zero. Product bounds are used only above 3/2, and higher orders cover lower targets. The reviewed bootstrap supplies all time derivatives of u; bounded bilinear products and multiplier commute with these derivatives, yielding joint smoothness through scalar embedding. Computed every 2pi factor and sign: grad p=-(I-P)v and Delta p=-sum partial_i partial_j(u_i u_j). Injectivity yields equality almost everywhere, then positive-measure neighborhoods give equality everywhere. Constant velocities and zero u give p=0. No empirical premise enters.

## lem-high-sobolev-norms-share-base-lifespan

For each finite initial H^m norm, weighted energy gives Z prime≤4C_mY0 Z. Exponential integrating factor gives Z≤Z0 exp(4C_mY0T), whose square root is ≤the stated conservative B_m. Orders r<s follow from the s bound. At an infinite initial norm the bound is explicitly extended and not finite; the lacunary refuter witness w^(-s)/n at ±(2^n,0,0)e2 lies in H^s and fails H^(s+1), so the old title was overstrong. Derivative bounds require m>7/2 and use the product constant at m-2>3/2; if lower than s they use B_s by inclusion. Y0=0 gives B=0 and derivative zero. Common T is independent of high order and truncation; smooth-data existence is its intended finite-all-orders consumer.

## ex-cm-plane-wave-and-shear-exact-solutions

Checked transverse A·k=0 cancellation, Fourier support ±k, dissipation rate 4pi²nu|k|² and shear k=e2,A=e1. Taylor–Green divergence cancels, Laplacian eigenvalue is -8pi², convection is (pi sin(4pi x1),pi sin(4pi x2),0)=-grad p0, so velocity decays with exp(-8pi²nu t) and pressure with its square. nu=0, A=0, p mean zero and all t≥0 are covered. Galerkin single-mode interpretation applies when cutoff includes the chosen k. These are exact mathematical solutions, not observations or a general global theorem.

## thm-local-smooth-periodic-euler-viscous-solution

All-order smooth initial norms feed the common base lifespan and derivative bounds; deterministic diagonal extraction converges in every chosen H^m. Nonlinearity converges by splitting its two bilinear differences and cutoff tail; viscous convergence explicitly uses extraction one order higher to control Delta in H^(m-2). Finite-dimensional componentwise FTC proves the Galerkin integral equation; uniform norm convergence passes its integral to the limit, with zero-length convention at t=0. For target H^p choose integer m≥max(s+1,p+2), so the established equation in H^(m-2) licenses differentiation in H^p. Bootstrap yields joint smoothness, coefficient zero-mode convergence preserves mean, and zero datum gives zero solution. No stronger global or empirical assertion is inferred.

## thm-fluid-uniqueness-and-continuous-dependence

Smooth bounded initial data share T_B, with zero data extended by the explicit zero solution even if T_B>1. Reviewed smooth H^s energy argument giving the sharper 2B base bound, not confused with the existence supplier exponential bound. The difference splitting cancels (u·grad)w via divergence, and Frobenius gradient bounds control remaining convection. Gronwall with y=||w||² and lambda=2Theta gives exp(Theta t) after square roots. Finite Holder with exponents s and s/(s-1), then supremum over frequency sets, proves interpolation and exponent 1/s. Continuous representatives turn zero L2 into equality everywhere. Uniform K can be chosen exp(6W_(s-1)BT/s)(4B)^((s-1)/s); viscosity does not affect this particular upper bound. Equal/zero data, endpoints and nu=0 are covered.

## cm-math-fluid

Replaced the inaccurate numbered reference to pressure (item 13, not 12) by its stable item link. Page lifespan now states the zero-data branch and high norms explicitly require finite initial norms; the smooth-data narrative remains unchanged. The B-page computations match the exact three current examples. No page inventory or pair changed.

## Decision coverage and historical evidence

All 57 owed obligations are present exactly once: 35 reader and 22 refuter (route `flagged`). There are 12 `confirmed_fatal` and 45 `confirmed_nonfatal` decisions, no invented touched/page obligations and no false positives. Paired observations use `same_defect_as` and one closed defect row with the same subject and observed fingerprint. The 16 historical separator findings are confirmed on the reader record, not falsely attributed to current pre/post carriers: current layout was already repaired before this adjudication. Those observed raw preimages were not recovered in this session; mathematical current-content review and the final layout check independently verify the present sources. No unbound in-run-dependency finding is routed here. The reader made no edits, all pre/post raw item fingerprints coincide, and all initial current raw hashes matched post; there is no reader repair to accept/amend/revert.

The decisions reference 38 closed rows in `research/defect-ledger.jsonl`. One additional, independently detected fatal weighted-pairing error has a separate fixed row `physics-cm-qm-gr-79-2026-10-11-3a-batch-15-energy-weighted-pairing`, with empty adjudication references until the owner/engine supplies a routed obligation. It is not used to close the historical layout finding and is not silently omitted from handoff. Its counterexample is any single nonconstant frequency at m>0: the old claimed unweighted sum differs from the actual weighted H^m norm by w_k^(2m)>1. The final F1 and step 1.1 use the weighted pairing consistently. The undefined proof placeholder T_epsilon was also removed in favor of t in the actual maximal interval and positive-denominator conditions; zero datum uses IVP uniqueness.

## Sources and dependency fidelity

Current local source clauses were inspected, not inferred from contracts alone. Imported theorem/definition statements are read-only context, not newly audited proofs. The key exact clauses are:

- `thm-fourier-basis-and-parseval-on-the-n-torus`, Statement 1–4: under AC_omega, coordinate characters form an L2 orthonormal basis and the coefficient map is a surjective isometry. Used for real/scalar coefficient realization, norm identities and injectivity; not general L1 uniqueness.
- `thm-fejer-convergence-in-lp`, Statement, p=1: one-periodic L1 functions are L1 limits of their Fejer means. Zero coefficients make those means zero. `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, Statement 1–4, applies to the finite probability factors and supplies integrable sections and iterated integrals. The written dimension induction then proves L1 uniqueness on T3.
- `def-the-one-dimensional-torus-and-normalized-haar-integral`, Definition, finite-torus clause: quotient/product topology, fundamental-domain measure, product-measure identification and normalized characters. `lem-finite-tori-are-compact-hausdorff-character-spaces`, Statement 1–2, supplies compact Hausdorff finite tori. Nonempty-open positivity is proved locally using a nondegenerate fundamental-domain box; no metric on T3 is presumed.
- `thm-lebesgue-measure-of-a-box-of-every-kind`, Statement, assumes AC_omega and includes half-open boxes and degenerate faces. `cor-volume-of-a-radius-r-n-ball`, Statement, supplies the 3-ball volume. `def-nonnegative-extended-series`, Definition, and `thm-cauchy-schwarz-finite`, Statement, supply finite-sum bounds followed by suprema. `thm-integral-test-for-series`, Statement 1–2, is used only on proper integrals of decreasing nonnegative functions. These give the lattice and counterexample estimates locally.
- `cor-compact-domain-maps-are-uniformly-continuous`, Statement, applies to the nonempty compact interval and norm metric; completeness is explicitly assumed. `cor-vector-valued-ftc-and-lipschitz-bound`, Statement 1, applies to smooth finite real coordinate curves. Continuous Darboux integrals and tagged-sum integrals agree by uniform-continuity squeezing; the locally proved normed-curve bound supplies passage to uniform limits. The metric version of uniform-limit continuity is extended locally to the torus topology by the epsilon/3 neighborhood proof.
- `thm-coordinate-map-for-a-finite-dimensional-normed-space`, Statement, assumes an ordered basis; the basis is now actually constructed from the finite projected spanning list. `thm-picard-lindelof-local-existence-and-uniqueness`, Statement, requires an open time/state domain, continuity and local state Lipschitz bounds; the coordinate field is autonomous on all R^M, with M≥3 from constant vector fields. Its quantitative closed-cylinder clause supplies uniform restart duration on bounded states. `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, Statement, supplies unique maximal open interval and restriction uniqueness.
- `thm-ftc-second-part`, Statement, differentiability and integrability on a<b, and `thm-monotonicity-of-the-integral`, Statement 1–3, support the positive-time reciprocal energy argument. `cor-mean-value-theorem`, Statement, supports bounded coefficient derivatives and the nonpositive-derivative integrating-factor reasoning. `thm-gronwall-integral-inequality`, Statement, applies to continuous nonnegative y and constant nonnegative a,b. `thm-holder-finite-real-exponents`, Statement, uses p=s, q=s/(s-1)>1 on finite frequency families and then the supremum. Exponential derivative/positivity/chain-rule suppliers have their stated real-domain and limit-point hypotheses.

Norm, completeness, Cauchy, interval, real/metric continuity, series, quotient/product topology, vector-space, inner-product, basis and countability definitions were checked at their relevant clauses. No arbitrary-index choice or DC is spent: the only adopted principle is AC_omega carried from the Fourier/measure suppliers, and diagonal subsequences are specified by deterministic bisection/least indices. Every batch item remains mathematical and depends only on mathematics. No measurement, uncertainty estimate or empirical conclusion was added.

The Wiedemann and Majda–Bertozzi references remain the existing provenance sources, with their item-local section/theorem locators; this adjudication independently checked the written local derivations and exact local mathematical suppliers. It did not newly retrieve/re-audit those monographs or verify the un-routed date-sensitive CMI remark. Prior source-fetch evidence is retained as prior evidence, not claimed as a fresh read. No defective published supplier was established, so the published-consumer ledger was not edited.

## Checks performed after final edits

- `node tools/physics-support/proof-layout.mjs` with all 18 batch item paths in one command: 18 items, 85 steps, 0 defects. This is the required final layout pass, including every changed item.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` with the same explicit inventory: 16 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs` with all 18 items and the edited A page: 19 files OK; actual KaTeX and renderer YAML parse.
- `node tools/physics-support/proof-contract.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-15.proof-contracts.json --strict`: 16/16 items, 0 errors, 0 warnings. Initial stale citation/derivation diagnostics were repaired by synchronizing exact current source clauses, F7 contracts and actual step inputs; they are mechanical checks, not additional defect rows.
- `node tools/physics-support/manifest-deps.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-15.pages.json`: 18 items, 0 normalized, 0 errors.
- `node tools/physics-support/content-policy.mjs research/physics-cm-qm-gr-79-2026-10-11-batch-15.pages.json`: 18 scoped items, 0 errors/warnings.
- `node tools/physics-support/depcheck.mjs --items-file /tmp/alpha15-items.json --quiet`: selected item/page checks and prerequisite cycles passed; selection is exactly the 18 manifest IDs.
- Risk report was run before review without `--require-reviewed`, then after completing every required review with it: 0 errors, 16 item records (15 HIGH/CRITICAL complete reviews; one MODERATE). Each review records the actual proof hypotheses, limiting argument and boundary cases.
- Local JSON audit: exactly 57 unique owed obligations, matching scope IDs/routes; each decision has one fixed same-subject 3a defect row and repair_confidence=1. No decision hashes or certification stamps were written.

## Owner handoff and holds

The mathematical repairs and all routed decisions are complete. Final production closure remains with the engine/owner. Two explicit dispositions remain:

1. Route the additional fixed weighted-energy-pairing defect and bind its adjudication decision; do not treat its empty adjudication references as full coverage.
2. Acknowledge the inspected outside direct consumers of the scalar-space and embedding interface clarifications: `post-cm17-fluid-constitutive` clause (c), `pthm-cm17-incompressible-periodic-local-evolution` F2/F4 and step 1.2, and `ex-cm17-periodic-shear-exact-solution-check` F2. Their current uses are sound and need no edit, but they are outside batch-15 edit/closure authority. Their unchanged interfaces cause no further-hop repair.

Stable IDs and page inventories are preserved; no withdrawal was proposed. Three imported prerequisite page homes (Fejer summability, product measures/Fubini, and Rn FTC) are now declared in the owned A-page manifest/carrier. The owned cross-batch input and frontier-dependency notes retain the continuum page as reading-order context. Engine hashing, whole-run gates, certification, scheduling and transitions were not performed.
