# Batch 45 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16. Group: batch-45.

Scope: three routed findings; no reader-touched items or pages. Pre/post snapshots have identical item inventories and hashes.

## Completed review, in dependency order

- `lem-fractional-integral-kernel-power-integral`: Steps 1.1–2.1: the affine decreasing substitution satisfies compact-truncation hypotheses; Beta(beta,1) converges for beta>0, and the positive Gamma recurrence gives 1/beta. Checked beta=1, singular endpoint 0<beta<1, and excluded beta=0,t=0. Current cited Definition/Statement sections match; no choice use or findings.

- `def-caputo-derivative-and-fractional-integral`: Read complete Definition: Tonelli bounds the absolute kernel integral by T^beta ||g||_1/beta, so the L1 representative exists a.e.; continuous input gives every-time finiteness. Gamma positivity and recurrence justify denominators. CC is confined to deriving integrability of an AC derivative; specified integrable derivatives need none. Orders beta>0,0<alpha<1 exclude divergent endpoints.

- `lem-continuous-fractional-integral-is-holder`: Steps 1.1–2.1: split the increment integral at s, use decreasing exponent beta-1 and evaluate both kernel integrals. The first nonnegative piece is at most (t-s)^beta/beta because t^beta>=s^beta; the second equals that bound. Gamma recurrence yields constant 2/Gamma(beta+1). Checked s=t, s=0 and exchanged order; no choice or findings.

- `lem-fractional-integral-semigroup`: Steps 1.1–4.1: absolute triple integral bounded by T^(a+b)||g||_1/(ab) licenses a.e. iterated integration; the affine inner substitution gives B(b,a), with both arguments positive. Bounded continuous input gives finite double integral at every fixed t. Gamma cancellation proves identity and L1 bound; constant input and t=0 handled separately. No unjustified everywhere claim for general L1 input.

- `lem-backward-euler-cq-principal-branch-generating-function`: All four steps checked with current cited statements: recurrence bounds coefficients by 1; geometric domination gives holomorphy in D. Real ODE (1-x)W'= -alpha W has integrating factor (1-x)^(-alpha), yielding W=(1-x)^alpha. The affine image 1-D avoids the closed negative axis; exponential/log composition is holomorphic, real positive-base agreement and accumulation at 0 license identity theorem. No claim at |z|=1 or choice use.

- `lem-caputo-volterra-equivalence-for-absolutely-continuous-solutions`: Read both directions and current AC/FTC suppliers, with CC and DC explicitly assumed as required. Semigroup applies to v=u' in L1 and continuous f; forward equality upgrades by continuity, including endpoints. Reverse primitives are continuous because both integrands are L1, so a.e. equality upgrades before L1 FTC. Refuter:45:1 confirmed nonfatal and that immediate argument now explicit. No claim that arbitrary continuous mild solutions are AC; no Statement change.

- `lem-l1-positive-weights-and-discrete-comparison`: All five steps checked: adjacent averages of increasing integrable kernel prove positive monotone weights. For phi=t^alpha, decreasing phi' and increasing kernel give nonnegative covariance; product is integrable, including n=k=1 by Beta(alpha,1-alpha). Thus delta(phi)>=Gamma(1+alpha). First-negative-index comparison and barriers Rq±e yield bound, including R=0,lambda=0,n=1. Positive diagonal proves finite recurrence uniqueness. No choice assumption needed.

- `lem-weakly-singular-fractional-gronwall`: Steps 1.1–2.1 checked: Gamma(k alpha+1)>=exp(-(k alpha+1))(k alpha)^(k alpha) yields uniform geometric tail after explicit Archimedean cutoff. Positivity and pointwise semigroup prove finite iteration; bounded y makes remainder vanish. Handles L=0 with stated zeroth-term convention, A=0 and t=0. No choice use or external singular-factor theorem substituted.

- `ex-l1-full-history-cost-and-truncation-bias`: All five verification steps checked: u=t is explicitly AC and derivative 1; Gamma recurrence gives exact pointwise Caputo t^(1-alpha)/Gamma(2-alpha). Finite reindexing yields N(N+1)/2 history terms, telescoping retained weights yields (mh)^(1-alpha)/Gamma(2-alpha), and subtraction gives positive lost-history bias. m=N,n<=m and N=1 have no omitted terms. Storage means implementation retaining all versus m+1 nodal values; no general truncated-error guarantee.

- `lem-backward-euler-cq-weights-and-partial-sums`: Steps 1.1–5.1: omega_1=-alpha and positive subsequent recurrence multipliers give strictly negative tail, modulus<=1. Principal-branch supplier plus positive-real agreement gives real W. Cauchy product with geometric series defines P; coefficient ODE yields p_(n+1)=(1-alpha/(n+1))p_n. Gamma recurrence and empty product handle n=0. Gautschi applies x=n>0,s=1-alpha in (0,1), and taking positive reciprocals has correct direction.

- `thm-l1-stability-and-smooth-data-error`: Read all six steps: bounded u' gives AC by delta=epsilon/(M1+1); CC licenses continuous-derivative Riemann/Lebesgue bridge. Secant derivative error has zero panel mean and modulus<=M2 h. Last panel contributes M2 h^(2-alpha)/Gamma(2-alpha); earlier midpoint-subtracted kernels contribute alpha M2 h^(2-alpha)j^(-1-alpha)/(2 Gamma(1-alpha)), whose sum <=1+1/alpha. This gives exactly C_alpha, then residual comparison supplies global bound. n=1 empty earlier sum, zero curvature, lambda=0 checked; no startup or alpha-uniform claim.

- `thm-lipschitz-local-existence-for-caputo-volterra-equation`: All seven steps and prerequisites checked: supplied finite M and positive r allow T>0, including M=0. Phi maps the closed ball into itself; specified Picard recursion requires no choices. Semigroup induction bounds d_n by M L^(n-1)t^(n alpha)/Gamma(n alpha+1), with stated L^0 convention when L=0. Geometric-majorant proof of Gronwall gives summability of sup norms (bounds attained at T), hence completeness applies on nonempty compact interval. Lipschitz continuity passes limit through Phi; Gronwall with A=0 proves uniqueness. Continuous mild solution only; no AC claim.

- `lem-cq-quadratic-generating-coefficient-estimate`: All four steps checked against Gamma recurrence, ratio test (nonzero terms for 0<|z|<1; z=0 separate), power-series and Gautschi suppliers. Recurrence gives C=(1-z)^(-(beta+1)); product z(1+z)C has coefficients s_n. Gautschi x=n-alpha>0,q=alpha and MVT on n-alpha>=n/2 bound c_(n-1)-n^beta/Gamma(beta+1) by O(n^(beta-1)); shift and finitely many n=1,2 finish. Reader:45:1 is false positive: current and identical pre/post carrier explicitly tag F12 in step 1.1 and 2.1; contract uses matches. No mapping edit.

- `thm-backward-euler-cq-scalar-resolvent-stability`: All four steps checked: positive h^(-alpha)+lambda yields unique finite recurrence for general initial input; count includes n history terms even zero V0. Finite maximum with negative omega_j gives (lambda+h^(-alpha)p_n)M<=G. Gautschi lower bound and h(n+1)<=T+h<=2T give exact stated Gamma(1-alpha)(2T)^alpha factor. M=0,G=0,N=1,lambda=0 checked. Scalar only, no operator or alpha-uniform conclusion.

- `ex-caputo-startup-singularity-and-graded-grid`: All five steps checked: explicit epsilon split at eta=epsilon^2/16 proves sqrt(t) AC; u' integrability uses stated CC. Splitting the product kernel at t/2 licenses L1 affine substitution; Beta(1/2,1/2) and Gamma recurrence yield Gamma(3/2). Positive strict bound Gamma(3/2)<1 follows from sqrt(s)<(s+1)/2 off 1. First L1 node U1=Gamma(3/2)^2 sqrt(t1) gives error sqrt(h), incompatible with h^(3/2); graded t1=T/N^2 yields sqrt(T)/N. Four-step nodes verified, no global graded rate claimed.

- `thm-backward-euler-cq-compatible-quadratic-first-order-error`: All five steps checked: finite increments prove polynomial AC without choice; specified u'=2t is L1 and Beta(2,1-alpha) calculation gives 2t^(2-alpha)/Gamma(3-alpha). u'(0)=0 by endpoint quotient. Generating coefficients of n^2 convolved with omega give h^(2-alpha)s_n; coefficient supplier bounds residual by C_alpha h(nh)^(1-alpha)<=C_alpha T^(1-alpha)h. Subtraction uses shifted v=u-u0, so lambda u0 cancels; scalar stability gives constant depending only on alpha,T, independent of lambda,u0,N. n=0 error zero and N=1 included.

- `ex-l1-and-cq-fractional-relaxation-first-step`: Both verification steps checked by substituting alpha=1/2,lambda=u0=1,F1=0 into exact procedure equations. L1 coefficient h^(-1/2)/Gamma(3/2) yields 1/(1+Gamma(3/2)sqrt(h)); shifted CQ gives V1=-sqrt(h)/(1+sqrt(h)), hence U1=1/(1+sqrt(h)). Positive Gamma and h make both outputs strictly between 0 and 1. No later-step or asymptotic assertion, no extra choice.

## Routed findings

- `refuter:45:1`: confirmed_nonfatal. Reverse primitives are continuous and equal a.e.; continuity argument is now explicit in Proof 2.1. Statement and dependencies unchanged.
- `reader:45:1`: false_positive. Current coefficient carrier raw SHA256 `3543825b4d11d09939030d04dcf0950acc23e1ea8f231137b5b51497cc1829f6` equals both pre/post hashes. Step 1.1 ends with F12 as well as step 2.1; contract uses [1.1,2.1] is accurate. No edit.
- `refuter:45:2`: confirmed_fatal. The page Objective now states Countable Choice and Dependent Choice specifically for the equivalence, matching its Statement and F4 supplier. Definition-only CC and choice-free Volterra existence remain accurately distinguished.

## Decisions and defect ledger

Exactly three decisions are in `research/numerical-optimization-dynamics-2026-10-16-alpha-batch-45-3a-decisions.json`; no extra touched/page obligation was invented for an Alpha repair. Both completed repairs have `repair_confidence: 1`.

| Obligation | Verdict | Closed ledger row |
| --- | --- | --- |
| refuter:45:1 | confirmed_nonfatal | nod-b45-3a-primitive-continuity (fixed) |
| reader:45:1 | false_positive | nod-b45-3a-f12-mapping-false-positive (false-positive) |
| refuter:45:2 | confirmed_fatal | nod-b45-3a-page-choice-scope (fixed) |

All rows are owned at `3a-adjudicate`, role `group-alpha`, batch 45. The normal locked append added the rows and refreshed the generated ledger view. No row records a mechanical failure.

## Sources, dependency evidence, and scope

Read the generated order task, scope, reader Markdown/findings, refuter JSON, pre/post hash snapshots, current batch manifest, current proof contracts, both current page carriers and nineteen owned item carriers. The pre/post item hash maps are identical; only the equivalence item now differs from those source hashes. No reader repair is accepted, amended, or reverted because the reader edited no carrier.

Current supplier evidence was read from the exact Definition/Statement sections used by the facts: positive-domain Beta and Gamma definitions, Beta–Gamma identity and Gamma recurrence; improper substitution; Tonelli; real powers, MVT and derivative rules; geometric/comparison/ratio tests; real and complex power-series differentiation, Cauchy products and coefficient formula; principal logarithm, branch-power positive-real agreement and identity theorem; Gautschi; AC, integrable derivatives, both fundamental theorems, indefinite-integral AC and Riemann/Lebesgue bridge; compactness/completeness and boundedness; nonnegative integral order/additivity and C1 Lebesgue substitution. The exact source-ID/section/quote records remain in the nineteen-item owning contract. The proof review above records actual hypotheses, signs, domains, endpoint treatments and choice uses rather than relying on prior verdicts.

In particular, `items/thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions.md`, Statement, assumes CC and DC and concludes both integrability of u' and the every-time integral representation. `items/thm-first-fundamental-theorem-of-calculus-for-l-one.md`, Statement, assumes CC and identifies the derivative of the L1 primitive a.e. `items/cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous.md`, Statement, supplies continuity of those primitives through AC. These are the exact hypotheses and conclusions used in the repaired reverse implication. For the false positive, `items/lem-cq-quadratic-generating-coefficient-estimate.md`, Proof 1.1 and 2.1, both explicitly tag F12; F12 is `cor-power-series-sums-are-smooth-with-coefficient-formula`, Statement.

All needed mathematical suppliers are locally proved items; this review did not fetch or independently re-audit the full external bibliography or every transitive published proof. No external source was substituted for a missing local proof, and no unresolved mathematical uncertainty was identified. The current contextual prerequisite pages `composite-quadrature-rules` and `conformal-mapping-branches-and-the-schwarz-lemma` were read. The existing owner disposition of the generic smooth-quadrature edge is retained: it supplies context, while singular-kernel L1 bounds are derived locally. Its earlier open history is preserved in the cross-batch record, not reopened or erased.

## Repairs, consumers, and published findings

The sole changed item is `items/lem-caputo-volterra-equivalence-for-absolutely-continuous-solutions.md`: the reverse-direction proof now explicitly upgrades equality of continuous primitives from a.e. to everywhere. Its derivation claim/input mirror was updated. Reflow joined soft-wrapped facts without altering their mathematics. The sole changed page is `library/numerical-differential-equations-and-stochastic-dynamics/fractional-evolution-and-convolution-quadrature.md`: the equivalence clause now explicitly carries both CC and DC. All seventeen risk reviews are complete in the batch contract. No item Statement, Definition, dependency, manifest inventory, or provenance classification changed; no judge record was present to invalidate. Existing `ai-generated` proof provenance still describes the repaired proof.

No interface change triggers downstream Statement/Definition propagation. Owned consumers use the locally established semigroup, comparison, coefficient and stability results under their actual hypotheses; no necessary outside consumer repair was identified. The owned-consumer note was appended to `briefs/tasks/frontier-dependency-ledger.md`. No defective published item was identified, so the published-consumer ledger remains unchanged. Stable IDs and existing owner dispositions are preserved; no withdrawal was proposed or removed.

## Local checks and handoff

All checks below were actually executed on the current scoped inputs:

- Initial `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-45.proof-contracts.json`: 19 items routed, 17 HIGH/CRITICAL items.
- Reflow on the changed equivalence item: completed; only soft-wrapped paragraphs joined.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-caputo-volterra-equivalence-for-absolutely-continuous-solutions.md`: 1 checked, 0 failing.
- After the final item edit and formatter, the single required command `node tools/proof-layout.mjs items/lem-caputo-volterra-equivalence-for-absolutely-continuous-solutions.md`: 1 item, 2 steps, 0 defects.
- `node tools/proof-contract.mjs research/numerical-optimization-dynamics-2026-10-16-batch-45.proof-contracts.json --strict`: 19/19 items checked, 0 errors and 0 warnings.
- Required-risk rerun on that contract with `--require-reviewed`: 19 items routed, 0 errors; all seventeen required reviews complete.
- `node tools/rendercheck.mjs` on the changed item and A page: 2 files, successful real KaTeX and YAML checks.
- Exact decision-inventory comparison: 3/3 owed obligations, no duplicates or extras.
- `node tools/defect-ledger.mjs validate --run numerical-optimization-dynamics-2026-10-16`: 196 run rows checked, 0 errors.

Final raw source hashes: equivalence item `971ce3445a769ca7b9e9b18d2025fd58579f7505145aa879e9371088a987995e`; A page `7b2369120f1606bbf62573d540023be27b716d1524ba25f0116b93895a381350`.

No batch-45 blockers or open risk reviews remain. No judge, decision stamp, gate battery, engine transition, publication or commit was initiated. The engine owns current decision hashes and subsequent validation/coverage gates.
