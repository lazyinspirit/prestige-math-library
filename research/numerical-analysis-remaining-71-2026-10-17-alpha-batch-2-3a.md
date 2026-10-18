# Batch 2 Step 3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-2`. Completed six routed decisions and sixteen HIGH/CRITICAL risk reviews in dependency order. Accepted all three reader repairs; confirmed both refuter findings and repaired them; rejected the Gamma finding by the contrapositive of its exact cited theorem. Engine owns stamping and gates.

## Completed level 1

- `def-bessel-potential-space-and-restriction-quotient`: reviewed s>d/2, weighted a.e. quotient and positive evaluation bound, conservative AC and forward well-definedness obligations. No edit.
- `lem-cone-sites-admit-stable-polynomial-norming-stencils`: confirmed nonfatal refuter:2:1. Added the missing supposition of vanishing on the cone before applying the polynomial root bound. Also handled J=1 explicitly before taking a minimum of pair distances. All four steps checked; finite choices only, uniform determinant/cofactor bounds and affine pullback preserve the Statement and all consumers. Dependencies: cone definition, real field/order, rank-nullity and polynomial root theorem. Contract derivations updated; risk review complete. Final local checks pending.
- `lem-rbf-augmented-system-is-invertible`: accepted reader repair: strict quadratic form and unisolvence kill both blocks; rank-nullity plus explicit basis preimages construct a two-sided inverse. No new item edit; complete risk review.

Level-1 checkpoint completed before reviewing higher levels. The published Gamma observation was independently resolved below.

## Completed level 2

- `alg-augmented-rbf-finite-difference-weights`: accept reader repair. Least nonzero row selection specifies deterministic exact elimination; the descending substitution formula is correct, admissibility assumptions ensure nonsingularity, and all loops are finite. The Statement of the invertibility supplier applies. NeurIPS §2.2 equations (8)–(11) support the augmented matrix and moments, not an unconditional stability/rate assertion. No new Definition change.
- `lem-matern-spectral-integral-and-normalization`: all seven steps checked. Gaussian IBP and differentiation have Gaussian majorants; gamma/Tonelli constants give integral w=1 and Bessel normalization. Parameters s,nu,a strictly positive. GPML Chapter 4 equations (4.14)–(4.15), PDF p.84, match a=sqrt(2nu)/ell. Risk review complete.

## Completed level 3

- Weighted Fourier injectivity/Hilbert lemma: checked L1 embedding, Gaussian approximate identity, absolute Fubini uniqueness and weighted L2 isometry; strict s>d/2 and conservative AC essential.
- Separated Gram lemma: checked bump positivity, rapid decay, q-ball shell packing, row sums, spectral scaling q^(2s-d), trace N and inverse eigenvalues. Uniform lower bound explicitly assumes 0<q<=1. One-site case is separate.
- RBF-FD reproduction/truncation theorem: accept reader repair. Exact elimination terminates, moment equations reproduce polynomials, and Taylor cancellation gives the weighted bound. Optional rate explicitly assumes r_Y>0; the allowed p=t=0,Y={x} case retains the base truncation estimate. No unconditional stability is inferred. All three risk reviews complete.

## Completed level 4

- Mesh-ratio corollary: q-ball packing gives N<=Cq^(-d); q>=h/rho0 yields exponent 2s=d+2nu. All small-scale and cardinality restrictions retained.
- Schwartz density: checked weighted truncation/smoothing, compact-interior zero extension, coordinate integration by parts and Gaussian-damped Fourier inversion. Both Schwartz membership and density established under declared AC.
- Cone zeros lemma: checked h>0, tail O(h^nu), low-frequency derivative O(h^(nu-m)), m>nu, Taylor cancellation on globally smooth V, and infimum over all extensions. No convexity of Omega, mesh ratio, or extension theorem is needed.
- Poor-conditioning example: checked cube Lipschitz charts/cones, odd-grid center, distinct near-duplicate, corner limit for h, q<=delta/2 and Rayleigh quotient 1-k(delta)<1/m; trace gives largest eigenvalue >=1. All four risk reviews complete.

## Completed level 5

`lem-matern-native-space-fourier-identity-and-positive-definiteness`: All five steps checked. Positive affine-quadratic weights are comparable via min/max(a²,4pi²), yielding same representatives and equivalent complete norms. Section representative w exp(-2pi i y.xi) has squared norm integral w=1 and reproduces with first-linear pairing; zero orthogonal complement gives density. Nonnegative Fourier quadratic integral zero forces continuous exponential sum zero everywhere; finite-root avoidance chooses a separating vector and derivatives at zero plus explicit Lagrange polynomials force every coefficient zero. Empty list vacuous, N=1 gives positive scalar; d=1 separating vector also valid. AC inherited only.

## Completed level 6

`lem-restricted-matern-native-space-is-sobolev`: All five steps checked. Evaluation continuity closes nullspace; Hilbert orthogonal decomposition identifies each restriction class with unique minimum-norm orthogonal representative. Sections centered in Omega lie in nullspace complement and reproduce there; zero orthogonal complement proves dense span. Both whole-space norm inequalities pass to infima over the identical extension set in both directions, giving quotient norm equivalence without a domain extension theorem. Nonempty Omega and conservative AC stated.

## Completed level 7

`thm-native-interpolation-projection-and-power-function`: All three steps checked. Finite span is closed (also directly from invertible Gram and continuous evaluations), projection residual zero at each site determines unique coefficients. Orthogonality, first-linear reproducing pairing and Cauchy–Schwarz give error bound; residual projection is contractive by Pythagoras. Projected kernel coefficients K^-1 k_X give P²=k(0)-k_X* K^-1 k_X>=0 as actual squared norm. Distinct nonempty sites ensure inverse; x at site gives P=0, zero data trivial. Conservative AC declared.

## Completed level 8

`thm-matern-interpolation-fill-distance-error`: Both steps checked. Archimedean supplier chooses fixed m>nu. Residual vanishes on X, native projection contracts its norm; two norm-equivalence constants and zeros bound give uniform h^nu interpolation error. Residual evaluation has exact norm P by testing r_x/||r_x||, with r_x=0 separately; norm conversion on native unit ball gives uniform power bound. Constants depend only on fixed parameters/cone and chosen m(nu), no separation or mesh ratio. AC inherited.

## Completed level 9

`ex-smooth-scattered-surface-matern-rate`: All three steps checked. Cube maximum-of-linear-functions boundary charts and explicit Householder inward cone work also in d=1 and at corners. Midpoint sites distinct, h<=sqrt(d)/(2m) for every m>=1. Coordinate chain/product rules make Gaussian derivatives polynomial times Gaussian; exponential domination bounds all Schwartz seminorms, so density supplier gives H^s membership. For sufficiently large m the fixed h0 applies and gives interpolation and power bounds O(m^-nu), fixed f norm absorbed only in error constant. Full AC and CC declared.

## Routed findings, ledger and historical comparison

- `touched:2:lem-rbf-augmented-system-is-invertible`: **accepted_repair**, `numerical-analysis-remaining-71-2026-10-17-3a-batch-2-D01`. Accepted the reader repair. Current raw bytes equal the immutable reader-post hash d84d0e8b5b4f47b75d4ea28fb0d42b6aec0906884164364471c7c8549f4b908b and differ from pre-reader. Strict positivity kills the Gram kernel; conditional positivity and unisolvence kill both augmented blocks. Rank-nullity supplies onto maps and explicit basis preimages give both inverse identities. The former omitted bridge is a nonfatal finite-dimensional inference. Contract exact quotation and derivation mirrors reconciled; Statement unchanged. Full review: research/numerical-analysis-remaining-71-2026-10-17-alpha-batch-2-3a.md

- `touched:2:alg-augmented-rbf-finite-difference-weights`: **accepted_repair**, `numerical-analysis-remaining-71-2026-10-17-3a-batch-2-D02`. Accepted the reader repair. Current raw bytes equal reader-post 3e67ace91ca52f71828f431d8487776f80e4b5e9d99d9ba7c8d8a390c5ad502b and differ from pre-reader. Deterministic least-index nonzero-pivot selection is accurately named and descending substitution is explicit. All admissible strict CPD/unisolvent inputs yield an invertible augmented system, finite elimination and correct moment equations. NeurIPS section 2.2 equations (8)-(11) checked directly; source metadata mirrored into owning manifest. Sole item consumer and A-page actual uses remain valid. Full review: research/numerical-analysis-remaining-71-2026-10-17-alpha-batch-2-3a.md

- `touched:2:thm-rbf-fd-polynomial-reproduction-and-local-truncation`: **accepted_repair**, `numerical-analysis-remaining-71-2026-10-17-3a-batch-2-D03`. Accepted the reader repair. Current raw bytes equal reader-post f9058353256881485e72a90dc8bcc7a10033eb48a3cdd6880632b0a500187b5d and differ from pre-reader. The allowed p=t=0,Y={x} case has r_Y=0, whereas def-real-power leaves 0^0 undefined. Requiring r_Y>0 only for the conditional r_Y^(-t) weight-norm rate closes this domain defect while preserving polynomial reproduction and base Taylor estimate. Exact elimination induction, Taylor cancellation and convex-hull remainder checked; sole page consumer asserts only the valid conditional estimate. Full review: research/numerical-analysis-remaining-71-2026-10-17-alpha-batch-2-3a.md

- `refuter:2:1`: **confirmed_nonfatal**, `numerical-analysis-remaining-71-2026-10-17-3a-batch-2-D04`. Confirmed nonfatal. Proof 1.1 omitted the supposition that p vanishes throughout C before its box root-bound argument; insert that supposition to prove that a nonzero p is nonzero at some cone point. Rank-nullity then builds independent evaluations. Determinant/cofactor perturbation and finite fill-distance choices prove the unchanged stencil Statement. Separately repaired the J=1 empty-pair-minimum construction (D05), found during this risk review. Updated derivation mirrors and completed risk review. Full review: research/numerical-analysis-remaining-71-2026-10-17-alpha-batch-2-3a.md

- `refuter:2:2`: **confirmed_fatal**, `numerical-analysis-remaining-71-2026-10-17-3a-batch-2-D06`. Confirmed fatal page overstatement. Uniform lambda_min>=c q^(2nu) is proved only for 0<q<=1; for two sites with q unbounded, normalized unit diagonal gives lambda_min<=1 and rules out the unqualified uniform lower bound. Added 0<q<=1 to page summary and 0<h<=1 to its bounded-mesh-ratio conditioning consequence, matching the exact supplier Statements. Page inventory and requirements unchanged. Full review: research/numerical-analysis-remaining-71-2026-10-17-alpha-batch-2-3a.md

- `reader:2:1`: **false_positive**, `numerical-analysis-remaining-71-2026-10-17-3a-batch-2-D07`. False positive after independent current proof and exact comparison-Statement review. Let u(t)=exp(-1)/t and v(t)=t^(s-1)exp(-t) for s<=0 and 0<t<=1. They are nonnegative and locally integrable, u<=v, and F3/F4 give divergence of integral u. If integral v converged, the cited upper convergence theorem F2 applied with f=u,g=v would make integral u converge, contradiction. Thus the lower divergence comparison is precisely its contrapositive; no additional theorem or edit is needed. Current published guard 57e5766da6a19b7b8820481311534f7a06d219c5da9bff6c25d8280334811873 equals routed pre_sha256; raw verification-only currency is distinct. Positive-parameter Gamma uses and all current theorem steps checked; published carrier read-only. Full review: research/numerical-analysis-remaining-71-2026-10-17-alpha-batch-2-3a.md

Additional confirmed risk defect `numerical-analysis-remaining-71-2026-10-17-3a-batch-2-D05`: Proof 2.1 of the cone lemma used a minimum over no distinct pairs when m=1,J=1. This is an ill-typed construction, classified fatal even though the theorem is true and the repair is short. The perturbation radius now starts at 0<epsilon<1 with pair restriction only for J>1. No extra decision obligation added. Repair confidence is 1 for every completed repair.

The immutable pre/post snapshots establish three reader changes. Current item raw hashes match reader-post exactly for all three touched carriers; no historical preimage was synthesized, restored, or inferred from Git. Their former defects are described by the reader report, not by a claimed reread of absent full pre-reader files. No owner current-content or missing-history waiver is used. Reader-post claims, actual current proofs and prerequisites were independently reviewed.

Published finding: Gamma divergence comparison is sound by contrapositive, so there is no confirmed published defect, no published edit, and no new published-consumer ledger classification. The guard matches routed pre_sha256 even though raw bytes differ through verification. No historical corrected theorem or source repair is claimed.

## Historical raw source bindings

| Carrier | Pre-reader SHA-256 | Reader-post and current SHA-256 |
|---|---|---|
| `lem-rbf-augmented-system-is-invertible` | `a7074541f1266084f81c5a1e294dfcce425c67f29b66f7beb42dd8565859b1ac` | `d84d0e8b5b4f47b75d4ea28fb0d42b6aec0906884164364471c7c8549f4b908b` |
| `alg-augmented-rbf-finite-difference-weights` | `c058ec697e11f44ffa33a8649a77487a7028c7d94365d8c20e537d51ec0e6f85` | `3e67ace91ca52f71828f431d8487776f80e4b5e9d99d9ba7c8d8a390c5ad502b` |
| `thm-rbf-fd-polynomial-reproduction-and-local-truncation` | `85d426d8d0fe28ca04b126d8dfa1d9be7126e03f8f64fabc1feb6783d5ae26ea` | `f9058353256881485e72a90dc8bcc7a10033eb48a3cdd6880632b0a500187b5d` |

Alpha changed only the cone item and A-page mathematical text. Final raw cone SHA-256: `b6d1877d18b2cd3b9e6d2547e218a057716a56ad80fe8e6667e1b9bbdb2d8ee0`. Reader touched source bytes were preserved. The cone Statement is unchanged; its contract derivations reflect both proof repairs. Invertibility contract step 1.2 now mirrors the current M notation and F5 quotes the actual two-sided-inverse Definition verbatim. These last changes repair mechanical contract mirrors, not new mathematical defects. The algorithm and truncation theorem source-title/locator mirrors were synchronized into the batch manifest. Provenance remains appropriate: literature-derived statements and ai-altered proofs; no material rewrite or existing judge stamp to invalidate.

## Sources and independent-review limits

- [Rasmussen–Williams, GPML Chapter 4](https://gaussianprocess.org/gpml/chapters/RW4.pdf), printed p.84, equations (4.14)–(4.15): positive smoothness/length parameters and normalized radial/spectral formulas. Substitution a=sqrt(2nu)/ell matches the authored constants and 2pi convention.
- [NeurIPS 2022 paper](https://proceedings.neurips.cc/paper_files/paper/2022/file/0764db1151b936aca59249e2c1386101-Paper-Conference.pdf), section 2.2, printed p.4, equations (8)–(11) and immediately following paragraph: augmented local system and polynomial moments. Local authored proofs, rather than the source’s abbreviated rate statement, justify exact reproduction and the conditional Taylor bound.
- [Narcowich–Ward–Wendland, author-uploaded full text](https://www.researchgate.net/publication/220577178_Sobolev_bounds_on_functions_with_scattered_zeros_with_applications_to_radial_basis_function_surface_fitting), also [published-paper PDF](https://scispace.com/pdf/sobolev-bounds-on-functions-with-scattered-zeros-with-1xexqpm2rb.pdf): read Theorem 1.1 (pp.744–745), Proposition 2.3 and Remark 2.4 (p.748), and section 3.1.1 equations (15)–(17) and interpolation minimum principle (p.756). Its intrinsic fractional-space theorem has additional integer-order restrictions; it was not imported as a proof of arbitrary-nu quotient-space zeros bounds. The complete current Fourier split and stencil proofs were checked directly.
- Fasshauer Chapter 13 URL failed to fetch; the AMS PDF returned 403 and the CiteSeer copy failed. No claim of reading these unavailable copies, and no proof step is discharged by them. NWW author upload and published-paper mirror supplied the cited context.

Read all routed current carriers and every direct cited dependency’s relevant Statement/Definition, including real/complex pairing, CC/AC, completed-product Fubini, Gaussian integral, polar coordinates, change of variables, smooth bump/density, Schwartz transform, translation continuity, Hilbert projection, Taylor, power laws, matrix norms/eigenvalues and exact Gamma/comparison proofs. Published recursive closures were not audited. The already sound arguments were accepted without extra edits.

## Consumers, published status and owner alerts

The reader changed the algorithm Definition and the theorem’s optional rate clause. Searching actual item/page references finds only the owned algorithm, reproduction theorem and A-page. The theorem uses exactly the returned moment equations and finite exact elimination; the page asserts only reproduction and the bound retaining the actual weight norm. These uses are sound. The cone repair changes no Statement and requires no interface propagation. No outside consumer needs repair. No published defect, missing prerequisite, escalation, new item/page or proposed withdrawal was introduced. Stable IDs and all prior withdrawal proposals are retained. The empty batch-2 cross-batch ledger remains correct for the actual current suppliers; a bounded owned-consumer note was appended to briefs/tasks/frontier-dependency-ledger.md.

Owner metadata alert (already noticed by reader): batch-2.pages.json has additional A-page requires fredholm-elliptic-problems-and-the-elliptic-spectrum and sparse-high-dimensional-estimation-and-covariance, absent from current authored page and reported current plan. None is an actual logical supplier of these proofs. No unrelated prerequisite or plan change was made in this dispatch; owner should reconcile that manifest projection through its ordinary metadata route.

Owner ledger alert: run-wide `defect-ledger validate` reports `na71-b8-3a-finite-support-procedure: subclass "underspecified-procedure" outside the closed enum`. This belongs to batch 8; left unchanged. It is a mechanical taxonomy failure, not a mathematical defect row or escalation in batch 2.

## Final local checks and handoff

- Initial risk-report without --require-reviewed: 20 items routed, 0 errors; sixteen HIGH/CRITICAL obligations. After specific reviews, --require-reviewed: 20 routed, 0 errors.
- Reflow on the changed cone item: unchanged. Precheck on cone and all three reader-touched items: 3 proofs checked, 0 failing; algorithm has no phase proof.
- Strict batch proof-contract check: 20/20 items, 0 errors and 0 warnings after correcting the F5 exact-quote mismatch.
- Rendercheck on cone, all three reader-touched items and A-page: 5 files passed real KaTeX and YAML checks.
- Content-policy on owning manifest: 20 scoped items, 0 errors and 0 warnings.
- Final proof-layout command batched cone and all three reader-touched paths: 4 items, 12 steps, 0 defects. Its first invocation outlived the captured shell output; the recorded repeat returned exit 0. No item edit or formatter followed.
- Defect ledger: appended seven rows with serialized append/render tool, all closed; procedure-label subclass clarified in the own newly written row under the same append lock and generated view refreshed. Run-wide validation: 29 run rows checked, 1 unrelated batch-8 enum error above. No row was created for either mechanical diagnostic.

Required report and version-1 group batch-2 decisions file written; exactly six owed decisions. Each reader/flagged decision references exactly one closed ledger row. The additional singleton-stencil risk defect has its own closed row and no fabricated routed obligation. No judgment, stamp, certification, dispatch, stage transition, publication, push or gate battery was performed. Owner/engine retain global metadata and ledger reconciliation and all normal current-hash gates.
