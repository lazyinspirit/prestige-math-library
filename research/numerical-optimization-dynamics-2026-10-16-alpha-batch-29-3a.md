# Batch 29 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-29.

Scope: one touched obligation, no reader/refuter findings or page obligations. Review follows the generated dependency order.

## lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound

Steps 1.1–3.1: rank-nullity gives the one-dimensional kernel and the complement isomorphism, using the exact finite-dimensional supplier statements. Step 4.1 explicitly solves both row equations when tau^T t is nonzero and exhibits the nonzero null vector otherwise. Step 5.1 bounds alpha by (|s|+K_A||u||)/c and applies two-dimensional Cauchy–Schwarz. Checked n=1, c=1, zero right-hand sides and the excluded zero-angle boundary; no AC or unresolved defect.

Current carrier: items/lem-pseudo-arclength-border-matrix-invertibility-and-inverse-bound.md. Dependencies: exact statements in its declared deps; source citation locations are retained in the carrier. No item edit. Next: continue in generated dependency order.

## thm-augmented-residual-contraction-certificate

Read every step and exact Banach, completeness, geometric-series and convex-open mean-value supplier statements. The Neumann series has both inverse identities, norm bound beta and entrywise convergence in finite dimension. The open-ball derivative estimate extends by continuity to its closed ball, which is complete and invariant even at beta*rho=(1-q)R. Checked rho=0, L=0 (q=0), strict q<1 and strict perturbation margin; fixed points are exactly zeros because A is invertible. No unresolved defect.

Current carrier: items/thm-augmented-residual-contraction-certificate.md. Dependencies: exact statements in its declared deps; source citation locations are retained in the carrier. No item edit. Next: continue in generated dependency order.

## lem-regular-curve-chart-and-pseudo-arclength-predictor-defect

Read steps 1.1–4.1 and exact IFT, chain rule, FTC, oriented-additivity and integral monotonicity statements. Bordered derivative is invertible with tau=t, so the IFT gives local graph uniqueness; rank-nullity yields gamma prime(0)=t. Positive speed gives a C1 arclength inverse on both sides of zero. The predictor segment remains in K; subtracting its zero tangent linear term yields coordinate error Lh^2/2 and Euclidean bound sqrt(n)Lh^2/2. Checked n=1, L=0 and h>0; no claim of global uniqueness or arbitrary choice.

Current carrier: items/lem-regular-curve-chart-and-pseudo-arclength-predictor-defect.md. Dependencies: exact statements in its declared deps; source citation locations are retained in the carrier. No item edit. Next: continue in generated dependency order.

## lem-simple-fold-complement-restriction-is-an-isomorphism

Read all five steps, the fold-splitting Definition, and exact dimension, independence and kernel supplier statements. w^Tq=1 proves surjectivity of w^T and all projection identities; im J=Y by matching dimension, and X intersects ker J trivially. Checked n=1: X=Y={0}, the restriction is the unique isomorphism and P=0. Nonzero a is essential for q=b/a and is explicitly assumed. No unresolved defect or AC use.

Current carrier: items/lem-simple-fold-complement-restriction-is-an-isomorphism.md. Dependencies: exact statements in its declared deps; source citation locations are retained in the carrier. No item edit. Next: continue in generated dependency order.

## lem-transverse-hyperplane-selects-unique-local-branch-point

Steps 1.1–2.1 reduce intersection to a scalar C1 function with derivative at least kappa>0. Exact FTC, integral monotonicity and IVT statements give endpoint signs and existence, while integration between arbitrary ordered parameters proves strict uniqueness on the entire chart segment. Checked d=0 (basepoint), d=kappa*r_plus (possible endpoint root), negative segment and positive r_minus,r_plus. No assertion beyond the supplied local chart; no unresolved defect.

Current carrier and cited dependency statements checked. No item edit. Next: local Newton correction.

## thm-simple-fold-lyapunov-schmidt-parameterization

Read all nine steps and exact complement, IFT, rank-nullity, chain-rule, FTC and compact-extrema supplier statements. The parameter column leaves im J=ker w^T because a is nonzero, proving full rank. The n=1 case bypasses the positive-dimensional IFT restriction for zero-dimensional complements. For n>=2 coordinates on X,Y give the complement solve, psi_s=psi_mu=0, reduced derivatives g_mu=a and g_ss=b, hence lambda second derivative=-b/a. C3 regularity and a smaller compact interval bound the third derivative; the oriented triple integral controls both signs of s. Checked nonunit w, both signs of a,b, unit tangent and nonzero angle; no AC or unresolved defect.

Current carrier and cited dependency statements checked. No item edit. Next: local Newton correction.

## thm-pseudo-arclength-local-newton-correction

Read steps 1.1–3.1 and complete current Newton convergence theorem, finite-budget procedure and proved work lemma. Flipping the section normal preserves its plane and yields a positive local derivative bound; d=0 selects the existing root. The bordered inverse estimate has its exact rank, unit and angle hypotheses. The affine last coordinate contributes zero derivative difference, preserving L for the square residual, so the Newton supplier gives invariant rho and C=KL/2. Checked L=0, negative original angle, finite N=0 and positive tolerance: only an independent contraction certificate proves a root. No unresolved defect.

Current carrier and its actual cited supplier interfaces checked. No item edit. Next: fold-crossing example adjudication.

## alg-pseudo-arclength-continuation-with-certified-local-corrector

Read the complete Definition, all seven procedure blocks and both current called Newton procedures. Inputs distinguish certified seed section, true enclosed tangent, candidate orientation, inverse and evaluation bounds; missing evidence has explicit failure statuses. Previous tau stays fixed while the paired tangents orient together. Strict h*a>r gives positive offset and h*a+r<=kappa*r_chart gives existence; whole-ball V inclusion identifies the certified root with the previous branch chart. Exact and error-bounded candidate paths each append once only after certification. Checked zero requested/attempt/correction budgets, failed chart/rank/error evidence, root versus exhausted status, orientation update, requested fold finalization and conditional returning callbacks. No self-edge, AC, global-success or unsupported error-branch convergence claim.

Current carrier and its actual cited supplier interfaces checked. No item edit. Next: fold-crossing example adjudication.

## thm-pseudo-arclength-finite-trace-partial-correctness-and-termination

Read all five steps against the current seven-block procedure and exact work, chart, contraction, fold and mean-value suppliers. Offset inequalities imply a strictly forward selected chart root; ball inclusion and contraction identify exactly that root, preserved by induction over the single append. Counts refer to appended balls, not the seed. Attempts increment before callbacks; exact updates <=N_c and bounded-error certificates <=N_c+1, with finite finalization explicitly conditional on all callbacks returning. Checked all zero budgets and failed candidates. Predictor error follows ||z_p-p_*||<=r+h*e and the convex-open mean-value bound, added to the exact quadratic defect. No global completeness or tolerance-attainment implication; no unresolved defect.

Current carrier and its actual cited supplier interfaces checked. No item edit. Next: fold-crossing example adjudication.

## ex-pseudo-arclength-crosses-x-squared-fold

Read all six Verification steps and all four complete current suppliers. The old realization began at x=0 and reached only x=h>0; the repaired realization starts at -alpha and ends at alpha+alpha^2>0 on one isolating regular chart. For every 0<alpha<1/32, H+R0=9alpha/4+alpha^2<1/8<1/(2sqrt(5))<=kappa*r_chart_plus; both zero-residual certificates have inverse bound 2, L=2, radius alpha/4 and q=alpha<1. The seed and corrected balls lie in |x|<1/4. The approximate unit tangent has the displayed exact error bound; the seed complement inverse bound is 1/sqrt(1+4alpha^2)<=1 by the same two-dimensional computation shown at the selected root. Choose admitted angle margin c=2/sqrt(5). One Newton correction has delta x=0 and delta lambda=2alpha^3+alpha^4, reaches the positive root, then passes certification. Checked alpha approaching both excluded endpoints, zero residual/error, all budgets one and epsilon=0. Accepted reader repair; no further item edit, unresolved defect or global completeness claim.

Verdict: `accepted_repair`; repair_confidence: 1. Closed defect: `nod-20261016-b29-3a-fold-crossing-realization`.

The exact pre-reader bytes were recovered at `research/numerical-optimization-dynamics-2026-10-16-owner-step2-gate-repair-final-binding-before/items/ex-pseudo-arclength-crosses-x-squared-fold.md` and have raw SHA-256 `f5737619d33cd78c7e17b138c14cdb14b839a990231135912814bc45acbbc2ca`, matching the pre snapshot. The current raw SHA-256 is `b20cb0e7180987027b9f73b49db2959a487808bd5e685289d031d9fc8e5b6b62`, matching the post snapshot. Historical delta is known: the old seed was the fold itself, so its positive-only trace did not witness crossing. The revised Example preserves the intended claim and supplies a negative-to-positive trace. No item bytes changed during adjudication. The reader updated the proof contract; no prior judge record exists in this carrier. No Statement/Definition change was made to a supplier, so no consumer repair is triggered.

Next: scoped local validation and final evidence reconciliation.

## Sources and prerequisite evidence

All ten required risk reviews are complete in the owned proof contract. Each current proof/procedure was reviewed together with its cited local dependency statements. The complete current Newton work/convergence proofs, the Newton remainder and inverse-bound arguments, and the parametrized higher-regularity implicit-function proof were also read. The finite-dimensional complements include the zero-space case, and no arbitrary choice is required.

Consulted [Cliffe–Spence–Tavener](https://www.math.colostate.edu/~tavener/manuscripts/cliffe/acta-numerica-2000.pdf), §3.2, printed pp. 53–54, equations (3.15)–(3.20), for the complement solve, scalar reduction and reduced derivatives; and §7.1, printed pp. 92–94, equations (7.3)–(7.6), for the full-rank curve and bordered pseudo-arclength system. The library proofs explicitly verify their finite-dimensional hypotheses and prove their own quantitative estimates. The Allgower–Georg URL returned HTTP 502, so no new reading of that book is claimed. This access limit leaves no mathematical prerequisite unmet: the arguments close through the named local proved suppliers and elementary computations.

Maintained the owned consumer-batch dependency input with current uses and exact locations, retaining supplier IDs and prior owner receipts. Refreshed the derived frontier ledger through its tool. No supplier interface changed, no outside consumer requires repair, no published defect was identified, and no withdrawal is proposed. Published content remains read-only. The page prerequisite inventories were consulted only as dependency evidence; there is no page adjudication obligation.

## Local checks and handoff

- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-29.proof-contracts.json`: exit 0; ten HIGH/CRITICAL items identified, all independently reviewed.
- The same command with `--require-reviewed`: exit 0; 14 items routed, zero errors.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-pseudo-arclength-crosses-x-squared-fold.md`: exit 0; direct proof PASS, one checked, zero failing.
- `node tools/rendercheck.mjs items/ex-pseudo-arclength-crosses-x-squared-fold.md`: exit 0; YAML and all math spans parse.
- Final `node tools/proof-layout.mjs items/ex-pseudo-arclength-crosses-x-squared-fold.md`: exit 0; one item, six steps, zero defects. No subsequent item edit or formatter.
- Appended exactly one closed mathematical defect row through `tools/defect-ledger.mjs`; it regenerated the ledger view. The initial reader formatting failure is not a separate defect row.
- `node tools/frontier-dependency-ledger.mjs refresh --run numerical-optimization-dynamics-2026-10-16`: successful refresh and deduplication.
- Compared all 14 current raw item hashes against the post-reader snapshot: no drift. The one decisions entry exactly matches the one touched obligation; reader/refuter/page obligations are empty. Manifest ID, kind, dependency list, level and title remain correct for the accepted example.

No blockers or open escalations remain. No item/page edit was needed during this adjudication; only risk evidence, owned dependency evidence, the closed defect ledger and required outputs were written. No judge, stamp, dispatch, certification or engine gate battery was invoked. Next action belongs to the engine: hash stamping and scheduled gates.
