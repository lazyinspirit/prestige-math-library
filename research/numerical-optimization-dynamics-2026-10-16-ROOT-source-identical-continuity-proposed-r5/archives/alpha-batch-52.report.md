# Batch 52 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-52`; original scope group `f` preserved.

Scope: exactly four touched obligations, ordered levels 0, 3, 4, 5; no reader, refuter, or page obligations. Read the current scope, order task, reader report/findings and `refute-52.json`; both finding arrays are empty. Those reports are evidence, not acceptance.

## Historical binding

For all four items, the current raw source equals the immutable post-reader item SHA-256. Exact pre-reader bytes were located and verified against each pre-reader hash in `research/numerical-optimization-dynamics-2026-10-16-owner-r2-ledger-FINAL-native-five-20261016T0720-inputs/sources/items/<id>.md`. Compared those complete preimages with current sources; no historical byte uncertainty is asserted. The pre/post snapshots are `research/numerical-optimization-dynamics-2026-10-16-step3-hash-52-{pre,post}.json`.

## Completed item reviews

### Level 0 — def-matrix-contractivity-and-logarithmic-norm

Verdict: accepted_repair; repair_confidence: 1. Exact reader delta explicitly fixes integer d>=1, the real vector domain, and compatible square dimensions of M and A. This closes the literal incompatible-matrix/empty-norm-domain cases without changing the intended content. Positive definiteness makes every nonzero-vector denominator positive; finite dimension bounds both suprema. d=1 and A=M=0 are admitted; x=0 is excluded; singular Q(hA) is expressly excluded. No choice is used. No logical suppliers are declared.

The direct dependency/reference consumer search and current `cex-backward-euler-scalar-stability-not-matrix-contractivity` show a 2x2 real witness with G=I: inverse [[1/2,4],[0,1/2]], norm on e2 squared 65/4, and logarithmic norm 7 from 7||x||^2-x^T A x=8(x1-x2)^2. No consumer correction is needed. Contract definition-domain note is compatible; no judge stamp exists or was changed.

### Level 3 — lem-bdf2-root-locus-location

Verdict: amended_repair; repair_confidence: 1. Accept the reader's two explicit modulus suppliers, reciprocal identity and coordinate equality argument. Independently read every current proof step and each of its five cited carriers. Setting r_n=1 in the current algorithm gives the stated BDF2 equation. The polynomial convention is increasing-index rho-z*sigma. Since zeta is nonzero, w=1/zeta is defined, |w|=1/|zeta|, and direct real-coordinate expansion gives Re(z)=(1-Re(w))^2+(1-|w|^2)/2. The outside-disk case is strictly positive; equality on the circle forces w=zeta=1 and z=0. The linear degeneration z=3/2 does not invalidate the conditional claim. No converse, accuracy theorem, matrix bound, or branch-existence result is inferred.

The only additional amendment refreshes contract citation F2 to the exact current supplier Definition, addressing the batch-36 owner alert in the frontier ledger. The prior quote had stale order quantifiers and coordinate indexing; the polynomial interface actually used is unchanged. Complete specific Alpha risk review recorded before proceeding to level 4. No item Statement/Definition changes here; the manifest correctly includes both reader-added modulus suppliers.

### Level 4 — prop-bdf2-roots-vanish-in-stiff-limit

Verdict: amended_repair; repair_confidence: 1. Accept the reader's modulus-law dependencies, reverse triangle derivation and epsilon argument. All three cited Statements and both current steps were read. C=|3-2z|>=2|z|-3 and C*r^2<=4*r+1 imply r<1 and C*r^2<5 for C>5. Given epsilon>0, |z|>(3+max(5,5/epsilon^2))/2 works for every root simultaneously. Thus no branch selection or choice axiom is needed. Re(z)<=0 excludes degree loss z=3/2; repeated roots are harmless, and z=0 is not asserted to have small roots. The proposition expressly avoids extending the one-step L-stability definition. Manifest and contract dependencies agree. Specific Alpha risk review completed before level 5.

The proposition's F2/F3 contract mirrors were additionally normalized to exact current supplier Statements. This is evidence normalization, not a new mathematical failure.

### Level 5 — ex-stiff-decay-mode-damping-comparison

Verdict: accepted_repair; repair_confidence: 1. Read its whole current argument and all eleven direct supplier Definitions/Statements, including smoothness of exp, both limit-point hypotheses of the chain rule, algebra of derivatives and continuous functions, the order-convex-interval zero-derivative corollary, positivity/reciprocity and the numerical-factor results. The direct suppliers support every use. The reader's local identity derivative and epsilon-delta composition arguments work for rho>0. Endpoint continuity holds on [0,h]; derivatives are used only in (0,h). The integrating factor is continuous on the closed interval, differentiable inside, and has zero derivative, so its value is one and the exact factor is exp(-x). Both rational denominators are positive for x>0. BE tends to zero, trapezoidal to -1, and the independently reviewed BDF2 estimate applies to z=-x. Thus the final discrepancy modulus tends to one. Finite x=2 gives a zero trapezoidal factor and does not contradict the asserted large-x alternation. No general accuracy or variable-step claim is made; no AC is used. Alpha CRITICAL risk review complete.

## Sources and dependency dispositions

Local source locators: the complete current Definition of `alg-variable-step-bdf2-with-selected-implicit-branch`, the coefficient/polynomial paragraphs of `def-linear-multistep-method-consistency-order-and-root-condition`, the complete scalar stability Definition, both published modulus-law Statements, and each calculus/exponential Statement cited in the example's F1–F11. These exact item IDs and sections are retained in the proof contract. Current supplier statements are sufficient; this was not a re-audit of their full transitive foundations.

External corroboration: [Hairer–Wanner Chapter III](https://www.unige.ch/~hairer/poly/chap3.pdf), §III.9, printed pp. 76–78 (PDF pp. 20–22), gives the scalar test problem, rho-z*sigma in (9.9)–(9.10), and on p. 78 the BDF2 unit-circle expression z=3/2-2 exp(-i theta)+(1/2) exp(-2i theta), Re(z)=(1-cos(theta))^2. The PDF's extracted mathematics was garbled, so its printed p. 78 was rendered and inspected visually. The current proof independently handles every |zeta|>=1, not just that boundary curve. Web fetching failed twice; direct HTTPS download succeeded. [Demanet's MIT notes](https://math.mit.edu/icg/resources/teaching/18.330/18.330-Apr-2014.pdf), §5.2.2, printed pp. 50–53 (PDF pp. 50–53), Examples 15–16, give the BE and trapezoidal multipliers; the notes use strict asymptotic scalar stability, whereas this library explicitly adopts its own closed-region/root convention. No unproved nonlinear generalization in the notes is used. Other bibliography URLs were not independently audited.

The global direct dependency/reference search for the changed matrix Definition found only its own A-page placement and the counterexample; neither requires a mathematical correction. The counterexample's stale F1 contract quote is now the exact current Definition. The BDF2 and example Statements/Definitions were unchanged by the reader and remain unchanged. Existing batch-52 cross-batch dependency records continue to describe the actual scalar polynomial interface; no variable-grid convergence claim is imported. The historical nonfatal batch-36 row `nod-20261016-b36-3a-downstream-quote` and its unbound original observation are preserved; this report records only the now-refreshed current batch-52 quote, without rewriting that prior owner's disposition.

All four confirmed reader repairs are nonfatal: dimensional clarification, declared modulus prerequisites/expanded elementary algebra in two carriers, and direct continuity/derivative justification in the example. Each has one closed row in `research/defect-ledger.jsonl`, owned at `3a-adjudicate` and referenced by its decision. The additional verbatim quote mirror normalization changes no mathematical claim. No new fatal defect, published defective item, missing prerequisite, proposed withdrawal or outside consumer repair was identified. Published carriers remained read-only. Stable IDs and existing withdrawals are retained. No judge stamp was present in these four items; none was created or changed.

## Local checks

- `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-52.proof-contracts.json`: initial routing completed with 0 errors, two HIGH and one CRITICAL carrier. Specific Alpha reviews replaced the author notes in dependency order; subsequent `--require-reviewed` completed with 0 errors over 12 items.
- `node tools/citation-fidelity.mjs research/numerical-optimization-dynamics-2026-10-16-batch-52.proof-contracts.json`: 29 citations across 12 owned items; after refreshing the stale F2 and five observed paraphrased/stale mirrors, no missing quotes or widening candidates. Semantic uses were independently checked; this is a focused citation diagnostic, not a proof verdict.
- `node tools/defect-ledger.mjs append --file /tmp/nod52-defects.json --no-render`: appended four validated closed rows under its append lock. No global generated ledger view was refreshed by this worker.
- `node tools/tsx-run.mjs tools/precheck.mts` with the four routed item paths: 3 checked, 0 failing; definition has no proof phase.
- `node tools/rendercheck.mjs` with those same four paths: all four pass frontmatter and actual KaTeX checks.
- Final single batched `node tools/proof-layout.mjs items/def-matrix-contractivity-and-logarithmic-norm.md items/lem-bdf2-root-locus-location.md items/prop-bdf2-roots-vanish-in-stiff-limit.md items/ex-stiff-decay-mode-damping-comparison.md`: 4 items, 9 steps, 0 defects. No item edits or formatter followed it. Item sources were retained exactly; contract evidence, risk reviews, ledgers and report/decisions are this worker's changes.

All four owed obligations are complete: two accepted repairs and two amended repairs (contract evidence amendments only). No blockers remain in this dispatch. The engine owns decision hashes and the gate battery; no judging, stamping, dispatch, native gate battery or transition was initiated.
