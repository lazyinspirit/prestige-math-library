# Batch 14 Step 3a adjudication

Run: numerical-analysis-remaining-71-2026-10-17; group: batch-14.

## alg-pade-coefficient-matching

Accepted explicit status repair. Checked finite elimination, free columns, inconsistent rows, n=0 and m=n=0. No dependencies. Source comparison: Gonnet–Güttel–Trefethen Section 2, equations (2.3)–(2.11), checked. Direct consumers were reviewed below.

## lem-divided-difference-lagrange-formula-and-symmetry

Refuter:14:1 confirmed nonfatal. Cardinal definition/theorem require increasing nodes. Sorted node/data list explicitly in F2 and step 1.1; finite reindexing preserves formulas. q=0, endpoints and interior coefficient algebra checked. Risk review complete; no Statement change or consumer repair. Natural-number/induction interfaces checked: 0 and successor closure, ordinary induction on all natural q.

## thm-pade-solvable-system-gives-local-order

Current proof cancels coefficients through m+n and divides by q bounded below near q(0)=1. m=0,n=0 and nonunique but chosen solutions are covered; no global pole conclusion. Pre/post carrier hashes identical; routed contract enrichment is mathematical audit metadata.

## lem-divided-difference-repeated-rolle-bound

Checked q=0 including singleton interval; for q>=1 distinct nodes force positive interval. Sorted consecutive zeros yield distinct interior zeros through q rounds; C^q provides every Rolle hypothesis and q! times leading coefficient is exact. Continuous derivative attains finite norm. No AC or refuter defect.

## lem-hermite-genocchi-simplex-integral

Checked q=0 convention, q=1 FTC, top face reordering by proved symmetry, t_q-t_0 nonzero and continuous inner derivative. Degenerate inner intervals contribute zero. Volume induction gives 1/q!. Refuter 14:3 confirmed citation defect; replaced inaccurate FH/BT locators with de Boor Section 9 pp63–65 formula52, whose simplex coordinates are equivalent under unit triangular change u_j=s_j-s_{j+1}. Local proof remains intact; no AC.

## prop-barycentric-rational-quotient-well-defined

Checked k=1 empty products, complex data and possible zero numerator. Evaluation Q(z_j)=w_j product of nonzero distinct-node factors rules out zero polynomial. P(z_j)=f_j Q(z_j); cancellation cannot introduce support poles. Definition and denominator supplier read; AAA Section2 Theorem2.1 agrees. No AC.

## ex-pade-singular-system-and-froissart-cancellation

Verified 0q=0, nonunique selected cancellation; epsilon q=-1, numerator epsilon-squared at pole, root separation epsilon-cubed/(1-epsilon-squared) and residue -epsilon-cubed. The original introductory promise of an inconsistent system lacked a corresponding witness; repaired by adding the target z^2 with 0q=-1. Source: Padé Section2 normalized equations.

## alg-aaa-finite-sample-rational-approximation

Accepted initialized accepted state, integral QR budget and common output shape. N=1 forces B=0; B=0, zero initial residual, first QR failure, zero projected coordinate weights and rejected poles all return a defined accepted candidate. Remaining list updates do not escape a failure return. Nonzero smallest eigenspace supplies a least nonzero coordinate projection independent of singular-basis choices. SVD completion is conditional and not promised with finite exact QR budget. All direct consumers in this batch use these interfaces.

## lem-hermite-genocchi-bv-window-variation

Checked C^{d+1} real g, n>=1 and d<n; fixed query x keeps same simplex coordinate. All moving node coordinates are nondecreasing; remove repetitions and append endpoints to bound partition variation by V. Integrate finite sum of continuous absolute increments over volume 1/(d+1)!. Includes d=0 and V=0; no AC.

## lem-floater-hormann-window-polynomial-interpolates

Read local window Definition and ordered-node cardinal definition/theorem. Window nodes inherit strict ordering. Each cardinal factor evaluates to zero/one; degree <=d and uniqueness imply partition of unity. d=0 gives constant single-node polynomial. No gap, no AC.

## thm-aaa-loewner-minimum-and-support-interpolation

Read finite AAA and exact SVD theorem, Householder and QR definitions plus their unitary equivalence proofs. B<=floor(N/2) ensures tall nonempty Loewner matrices. Successful exact QR with tau=0 deletes only zeros; diagonal phases/sorting give full SVD. Spectral squared norm sum proves minimum, including zero and repeated singular values. Coordinate projection uniquely chooses w; nonzero weights and reduced-denominator sample test give support interpolation and finite residuals. Budgeted calls and B iterations terminate even when SVD fails. Reader explicit success condition accepted; no off-grid/minimax implication or AC.

## ex-aaa-small-sample-error-does-not-control-off-grid

Reviewed completed-square upper-bound audit enrichment. Both samples vanish and return before QR even with S=0; t(1-t)>=0 on [0,1], maximum 1/4 attained at 1/2. No source optimality assertion imported.

## lem-floater-hormann-weight-and-blend-identity

Checked sign mu_i=(-1)^{n-d}P0 lambda_i, partial fraction expansion and sign (-1)^{2i+d-j}=(-1)^{j-d}; same weights in denominator follow by partition of unity. At every node surviving-window index set nonempty and products positive; cleared numerator equals f_alpha s. Includes d=0 and d=n-1; no AC.

## lem-floater-hormann-window-newton-remainder

Refuter14:2 confirmed nonfatal: arbitrary query is not necessarily largest. Sort combined node/data list before ordered-node interpolation citation; symmetry identifies its leading coefficient. Subtract c times monic window product, use degree<=d uniqueness on ordered window, evaluate at query. Checked d=0, zero c and query outside window. Statement and direct consumers unchanged; no AC.

## ex-aaa-transfer-function-pole

Checked four data, zero mean, first tie z=1, first one-column SVD singleton with no sweep; next maximal residual z=3. L rank1 nullspace span(1,1), projection of e1 fixes weights. Negative-phase Householder gives B=[[1/sqrt2,1/sqrt2],[0,0]], trailing Gram tie chooses zero shift. Displayed real G has prescribed orientation and B G=diag(1,0), left identity. Next deflation check precedes budget, so S=1 succeeds. Rational quotient is exactly 1/(z-2), finite at samples, eta2=0. Reader ordering enrichment establishes completion before conditional theorem use; no AC.

## lem-floater-hormann-denominator-lower-bound

Independently checked positive block decomposition and valid middle j=max(0,alpha-d+1)<=n-d. Window product <=u!v!h^{d+1}<=d!h^{d+1}, since u,v>=1 and binomial(d+1,u)>=d+1. d=0 first/last gaps give 1/h, interior pairs yield max of adjacent ratio bounds and hence min-ratio beta. n=1,2 have no interior indices, beta=0. Positive h and distinct nodes retained; no AC.

## thm-floater-hormann-no-real-poles

Checked surviving-window nonempty positivity at each node; gap blocks partition all indices and at least one is nonempty, including d=0. Exterior successive ratios negative with magnitude <1 in stated forward/backward orders, finite pairing stays strictly positive. Cleared denominator is (-1)^{n-d}s as a polynomial everywhere; cancellation cannot create roots. Reader fixes final self-reference to actual steps1.1–1.3. No AC; statement unchanged.

## cex-floater-hormann-cd1-seminorm-rate-fails

Checked each fixed d, n>=2d+2 uniform [0,1] mesh ratio1. Scaled binomial weights satisfy 1<=delta<=2^d and equal2^d centrally. Bump zero multiplicity d+2 ensures C^{d+1}; termwise derivative bound M_d follows |t|<=1/4 and is positive. Disjoint radius h/4 supports bound highest derivative uniformly and leave h/2 zero. Sign choices align numerator terms; alternating denominator blocks give |D|<=2^d(4d+4)/h and no-pole supplier makes D nonzero off nodes. Central harmonic sum diverges; division by fixed M_d contradicts any C(d,1). Actual derivative may be smaller, which strengthens contradiction. No AC.

## thm-floater-hormann-error-rate-bv

Checked exact Newton/blend error ratio; pair even-index windows and bound their differences by full adjacent variation V/(d+1)!. m even leaves one term, bounded by simplex volume times norm, m odd none. Positive denominator estimates give d!/(d+1)!=1/(d+1); degree0 factor h(1+beta) correct. Node error zero and no poles give compact continuous supremum. Optional C^{d+2} consequence uses MVT on nondegenerate partition intervals with continuous derivative; sum lengths b-a. V=0, d=0, n=d+1 and parity cases checked; no AC.

## thm-floater-hormann-error-rate-c2

Checked recurrence sign using symmetry, all d+3 nodes distinct since query off all nodes. Each pair order d+2 bounded by repeated Rolle; each mesh gap appears <=d+1 times, so total paired lengths <=(d+1)(b-a). m even adds order d+1 endpoint term, odd none. Dividing by d>=1 denominator gives coefficient 1/(d+2), endpoint1/(d+1); d=0 gives1/2 and beta factor. Includes n=1,d=0, d=n-1, zero derivative and nodes. Continuous no-pole quotient gives uniform norm. FH Theorems2–3 agree; no AC.

## Page and prerequisite interfaces

The A-page's mathematical summary is sound. Reader's explicit successful-SVD qualifier is useful audit enrichment: the original phrase “selected unit weight” already presupposed selection, which the procedure reaches only after completion. The transfer example already proved the one-sweep calculation later in the same argument; moving it earlier is sound audit enrichment, not a new missing theorem. The off-grid maximum upper bound follows immediately from the elementary quadratic, so its explicit completed square is also audit enrichment. No defect rows are manufactured for these clarifications.

The reader reported the authored/plan two-page requires list versus manifest three-page list. Alpha reconciles the assigned page to the current batch manifest, retaining outward-rounded-interval-and-ball-arithmetic: its published MVT really supplies the optional C^{d+2} consequence in the BV theorem. Replaces the plan-equality prose with the actual prerequisite roles. This is metadata/audit enrichment, not a mathematical defect. The engine owns subsequent plan reconciliation; no plan is edited here. Minimax remains contextual; no theorem on that page is used. Stable IDs and proposed withdrawals are preserved.

Actual direct/reference consumers of the reader Definition/Statement changes were searched in items/: Padé algorithm -> local-order theorem and singular-system example; AAA algorithm -> Loewner theorem and the two AAA examples; Loewner theorem -> transfer example. All are in batch14 and were independently read above; each use remains valid. No further Statement/Definition changes were necessary, so no outside consumer repair is owed. The newly added inconsistent witness changes only example verification, not a supplying Statement.

Every cited direct dependency was opened, including the exact SVD construction and its unitary-equivalence proofs, natural-number/induction, ordered cardinal interpolation, C^q, EVT, Rolle, Newton–Leibniz, BV and real MVT suppliers. Published content is read-only; no defective published item was found. All reviews are finite and choice-free. No substantial unmet prerequisite or escalation remains.

## Exact historical comparisons

Recovered all six reader-changed item preimages from `research/numerical-analysis-remaining-71-2026-10-17-dispatch/reader-reader-14.attempt-1.log`, matching their raw SHA256 to step3-hash-14-pre.json. Locators: alg-pade line1310; alg-aaa2691; thm-aaa2990; ex-off-grid3106; ex-transfer3798; thm-no-poles3485. Exact differences were read; no historical byte uncertainty remains for these comparisons. thm-pade and ex-pade item hashes agree pre/post; their routed changes are contracts only. Alpha later repairs ex-pade’s omitted promised inconsistent case.

- `alg-pade-coefficient-matching`: pre `df0f2d760c5cbc2dd8f35c6836a952275dc0b3c5c79cf8003df66dec20552c20`; post `1e130604f5b373b76b11724e02ec4ed02624c3b2a7f911f4c2c376af71fdc55b`.
- `alg-aaa-finite-sample-rational-approximation`: pre `d0fc393b035ea8a36b06ce90e087e382bc17272ee326f08c5324753c1ba36c3c`; post `3ad16a6911ac40b7b9ec7eb568dba486019d8ade1daa01ca893d3afbaf665a3a`.
- `thm-pade-solvable-system-gives-local-order`: pre `ee6193f33a79371c8d6392ee6c08e3c29df29ca4ca9dd8c734e3d8f3fa8a3de9`; post `ee6193f33a79371c8d6392ee6c08e3c29df29ca4ca9dd8c734e3d8f3fa8a3de9`.
- `ex-pade-singular-system-and-froissart-cancellation`: pre `c3464fdfe275fe98370df081abe6652e9e092f44eee752b12f5e4c747f9807f3`; post `c3464fdfe275fe98370df081abe6652e9e092f44eee752b12f5e4c747f9807f3`.
- `thm-aaa-loewner-minimum-and-support-interpolation`: pre `7d5d1c6bc67cc0e776c1cc751dbc5f3cd1945aa1d93cb8b924b3c30319362b84`; post `ed99e1de992b705a0773c9a070f0637771d24663beb15fd1f8c092bbe2b0bba6`.
- `ex-aaa-small-sample-error-does-not-control-off-grid`: pre `0bca5c5275b64ba79f223a1d1f53ecca98088e5bc8f55ae0b0abc35fc43038f6`; post `e35bd354491f7a26796aaf2697e796744981b56b06e1904a2e61f0d5989da59a`.
- `ex-aaa-transfer-function-pole`: pre `d7658f3d377060cf1d5f92035123e5608c1f3d59c1f8732c99dd1dbaf44991eb`; post `078031a5d554f952f0979adb14f00bdc77851b1dfa0f306f0a1b740de51d67d1`.
- `thm-floater-hormann-no-real-poles`: pre `2923a567721511f6b6eb0a002c799b966029cf81028a235061199dc2fc68a99d`; post `bbab34430b3e570f155f58bbe7c0853b6d0f95195bb04e2ed0e57bf90c412061`.

Seven confirmed defects are closed with repair_confidence 1 in the shared ledger: two algorithm output specifications, no-poles prose self-reference, two sorting gaps, the inaccurate Hermite–Genocchi citation, and the missing promised inconsistent example. The exact twelve routed decisions are in the companion JSON. No reader findings were owed.

## Sources checked

- [de Boor, Divided Differences](https://ftp.cs.wisc.edu/Approx/dvdsurvey.pdf), Section 9, pp. 63–65, formula (52) and following coordinate definition; smooth real C^q case, including q=1 FTC and q=0 local convention. The ordered-coordinate region maps to the authored standard simplex with determinant one. This replaces the inaccurate Hermite–Genocchi references.
- [Floater–Hormann](https://www.inf.usi.ch/hormann/papers/Floater.2007.BRI.pdf), Section 2, Theorem 1 and its positivity argument; Section 3, Theorems 2–3 and their full numerator/denominator arguments; Section 4, weight expansion (18) and uniform-node binomial weights. The author-hosted copy was read. The authored BV estimate is independently proved from simplex window variation; the stronger seminorm-only rate is explicitly refuted rather than attributed to this paper.
- [Berrut–Trefethen](https://people.maths.ox.ac.uk/trefethen/barycentric.pdf), complete Sections 2–3, pp. 501–504: cardinal and Newton formulas, recurrence, leading coefficients and barycentric weight reindexing. These sections do not state the Hermite–Genocchi integral.
- [Nakatsukasa–Sète–Trefethen](https://people.maths.ox.ac.uk/trefethen/AAAfinal.pdf), Section 2, Theorem 2.1 and Section 3, equations (3.4)–(3.10): nonzero support weights, tall Loewner matrix, normalized least-squares problem and final right singular vector. Local deterministic projection and finite failure statuses are specified in the algorithm, with their own local justification.
- [Gonnet–Güttel–Trefethen](https://people.maths.ox.ac.uk/trefethen/gonnet_guettel_trefethen.pdf), Section 2, pp. 102–104, equations (2.3)–(2.11): coefficient matching and the distinction between arbitrary nonzero homogeneous denominator and normalized q(0)=1 systems that can be singular. The local theorem assumes an actual normalized solution; it never asserts universal full-order normalized solvability.

## Local validation and handoff

After final item edits: reflowed all four changed items, then regenerated their four proof-contract entries while preserving boundary worksheets and risk reviews. Refreshed stale manifest claim/source mirrors to actual current authored sections; these mirrors introduce no new mathematical claims. No material rewrite left a judge record in place; none of these changed items had one.

All checks below passed on current files:

- Precheck: four changed items, 4 checked, 0 failing.
- Rendercheck: four changed items and assigned A page, 5 files, no YAML/KaTeX errors.
- Strict proof-contract check: 22/22 proof-bearing batch items, 0 errors, 0 warnings.
- Risk report run before review and again with --require-reviewed: all fifteen HIGH/CRITICAL reviews complete, 0 errors, 22 proof-bearing items routed.
- Content policy on the explicit batch14 manifest: 29 scoped items, 0 errors, 0 warnings. An earlier --help probe was treated by this tool as a filename and failed before checking any content; the actual scoped command above passed.
- Final required single batched layout command: `node tools/proof-layout.mjs items/lem-divided-difference-lagrange-formula-and-symmetry.md items/lem-hermite-genocchi-simplex-integral.md items/ex-pade-singular-system-and-froissart-cancellation.md items/lem-floater-hormann-window-newton-remainder.md` — 4 items, 12 steps, 0 defects. No later item edit.
- Decision inventory: exactly 12 owed obligations (8 touched, 1 page, 3 refuter), no duplicates, each flagged decision names exactly one fixed defect row. Seven confirmed defects were appended using the ledger's serialized append command; no mechanical failure received a defect row.

No mathematical blockers, outside consumer repairs, published findings or unresolved batch14 escalations. No item judgment, stamping, certification or native gate battery was performed. Engine owns current carrier hashes, plan reconciliation and the subsequent gate battery.
