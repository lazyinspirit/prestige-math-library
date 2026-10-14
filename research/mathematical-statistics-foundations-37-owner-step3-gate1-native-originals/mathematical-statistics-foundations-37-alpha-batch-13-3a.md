# Batch 13 Step 3a adjudication

Run: `mathematical-statistics-foundations-37`; group: `batch-13`; original scope group `e` preserved.

Reviewed the dispatch, scope, reader report/findings, refuter report, immutable pre/post hash records, current manifest and contract. All twelve source files initially match their frozen post-reader raw SHA-256 hashes; eight differ between pre/post snapshots. Hashes establish carrier identity; repair descriptions below also use the reader evidence and independent current mathematical review.

## Level 0 completed

- `def-asymptotic-distribution`: retain the explicit Euclidean Borel target clarification as `reviewed_no_defect`, `audit_enrichment`. The two cited definitions identify convergence solely through laws and bounded continuous tests, including different underlying spaces; a law ν can be realized by the identity on (R^d,B,ν). No moment claim follows. This is nonfatal clarification, with no new mathematical restriction beyond the random-vector convention.
- `def-op-and-little-op-stochastic-bounds`: retain the same measurable-target clarification as `reviewed_no_defect`, `audit_enrichment`. Checked all four supplier definitions, zero and constant-one cases, strict positive thresholds, limsup quantifiers and varying spaces. Its complete risk review is recorded before proceeding.

No new source edit, published defect or unresolved prerequisite at this checkpoint. Next: level 1 tightness calculus and rare-outlier example.

## Level 1 completed

- `thm-vector-stochastic-order-calculus`: all five proof steps are sound. In step 2.1 “letting η decrease” refers to choosing a bound separately for each error budget, as O_P requires; it does not assert one universal bound. The explicit composite-measurability premise handles arbitrary norm-bounded maps. Read Portmanteau and continuity-from-above proofs, metric-ball/topology/open-ball results, and the stochastic-order suppliers.
- `ex-degenerate-asymptotic-distribution-with-rare-outliers`: accept the integrability insertion in Verification 2.2. The simple-minorant bound justifies L1 linearity before shifting the test function back. The estimate is 2||f||∞/n, and E X_n=1 even at n=1. All fifteen direct suppliers were read, including change of variables and integral linearity proofs. No moments converge to the limit moment.

Both complete risk reviews are recorded. Current claims are preserved; no published finding or blocker. Next: level 2 Slutsky and root-n example.

## Level 2 completed

- `thm-vector-slutsky`: the compact set K is closed and bounded in the correct Euclidean dimension. Uniform continuity applies on K, δ/2 handles strict inequalities, and γ and η are arbitrary. The marginal bounded-continuous-test limit and continuous mapping establish both conclusions without independence. Read all eleven direct dependencies, including compactness and continuous-mapping proofs.
- `ex-tightness-times-smallness-and-root-n-rate`: accept the added product measurability argument in Verification 2.1. The power-set sigma-algebra supplies every inverse image, satisfying the current calculus hypothesis. M=1 works with the strict tail. The n=4 calculation and exact scaled identity are correct.

Both risk reviews are complete; no blockers. 

## Levels 3 and 4 completed

- `def-estimator-sequence-in-iid-experiments`: retain the explicit identification of the target Borel sigma-algebra with the given metric topology as `reviewed_no_defect`, `audit_enrichment`. Finite probability products exist by iteration of the cited sigma-finite product theorem; no infinite product or parameter measurability is asserted. Read its eight direct suppliers and the product-measure proof. Risk review complete.
- `def-consistency-in-probability`: retain the explicit measurability argument as `reviewed_no_defect`, `audit_enrichment`. For fixed target value a, |d(t,a)-d(s,a)|≤d(t,s) follows from the two triangle inequalities. Thus {t:d(t,a)>ε} is open and its estimator preimage is an event. The definition is pointwise, with θ fixed first, and imposes no uniformity.

Next: level 5 sample-mean and identification obstruction, including refuter:13:1.

## Level 5 completed

- `thm-iid-sample-mean-consistency`: **amended_repair**. Accept the reader's cylinder-preimage measurability proof in 1.1. Independently checked IID joint laws, Khinchin's truncation proof, integrability and change of variables. The statement explicitly supplies the infinite sequence; the conclusion transfers to finite sample laws without constructing an infinite product. **refuter:13:1 confirmed_fatal** as an inaccurate citation (not a false theorem): F14 cited an abstract definition for the concrete usual metric. Replaced that citation/dependency with `lem-real-line-is-a-metric-space`, whose Statement 1 and Proof 1.1–1.3, 2.1 establish exactly this fact. Manifest and contract citation synchronized; no Statement or proof-step change. The routed observed digest is retained as historical evidence; the reviewed initial current source is the frozen post-reader source, where the same defect is visible.
- `thm-nonidentifiability-precludes-simultaneous-consistency`: sound. The full-space finite exhaustion licenses uniqueness of product measures. With Δ>0, the radius Δ/3 balls are disjoint Borel sets; both probabilities cannot tend to one under a common law. F10's nonnegativity follows immediately from its cited axioms by 0≤2d(x,y); no missing substantial prerequisite.

Both risk reviews are complete; no blocker or published defect. Next: level 6 examples. A second concrete-metric citation issue in the owned level-6 nonidentifiable example will be corrected in that item's turn.

## Level 6 completed

- `ex-bernoulli-sample-mean-consistency`: accept the supplied common IID sequence and explicit finite joint-law transfers, which meet the actual weak-law prerequisites. The mass, expectation, variance, 1/(4nε²) bound, endpoints and n=2 finite check are all correct. The reader repair states the realization hypothesis rather than invoking an unproved infinite-product construction.
- `ex-nonidentifiable-targets-preclude-consistency`: the pair (1/2,0),(1/2,1) has identical law and target distance one. The obstruction and finite product check are sound. During its risk review, independently confirmed the same inaccurate concrete metric citation in F10. Corrected only that citation/dependency to `lem-real-line-is-a-metric-space`, with manifest and contract mirrors. This previously untouched item has no owed touched decision; its additional closed defect is recorded in the report and ledger.

All ten HIGH/CRITICAL risk reviews are complete. No Statement/Definition was changed by this adjudicator, and both citation repairs have confidence 1. No judge record was present on either edited draft.

## Carrier decisions and contract maintenance

Exactly nine decisions are written: eight touched obligations and `refuter:13:1`. The four definition explanations enrich already sound conventional definitions, so they are `reviewed_no_defect` with `change_kind: audit_enrichment` and empty defect IDs. No invented mathematical defect is charged for making those conventions explicit. Their source bytes remain exactly reader-post.

The four proof-bearing touched carriers are `amended_repair`, each at confidence 1. Reader source repairs are retained, while this review also synchronizes exact contract quotations to the clarified supplier Definitions. The sample-mean theorem additionally receives the F14 correction. Each touched proof repair has its own closed nonfatal explicit-prerequisite defect row. The independently refuted F14 citation has its separate closed fatal citation row and exactly one flagged-decision reference. Nonfatal proof gaps here are immediately closable finite measurability/integrability details, not assertions of false claims.

The first strict contract check found thirteen stale supplier quotations (in eight consumers) and one omitted F1 use in root-n Verification 2.1. These are mechanical record mismatches, not additional mathematical findings: replaced only the quotation fields with the exact current supplier Definition text and mapped the actual F1 use. The subsequent strict check passes all twelve items with zero warnings. Original pre/post snapshots and original scope remain immutable. No decision hash, judge stamp, native gate, or self-certification was created.

Only two item sources were edited by this adjudicator: `thm-iid-sample-mean-consistency` and `ex-nonidentifiable-targets-preclude-consistency`. Each replaces an inaccurate concrete metric citation with the proved real-line supplier, without changing its Statement/Example or numbered argument. The latter proof provenance is updated to `ai-altered` and retains its existing source URLs. Both manifest dependency mirrors and both exact citation records are synchronized. All other source bytes remain reader-post.

## Supplier and consumer evidence

The source of the metric repairs is `items/lem-real-line-is-a-metric-space.md`, Statement 1 and Proof 1.1–1.3, 2.1: separation follows from |u|=0 iff u=0, symmetry from |-u|=|u|, and the triangle inequality from |a+b|≤|a|+|b|. This is the precise missing citation interface. Its current published carrier was read only.

All direct suppliers of the twelve owned carriers were opened. Relevant proved supplier arguments read include Portmanteau (especially the closed-set bound), probability continuity from above, metric open-set algebra, Euclidean metric axioms, Heine-Borel, Heine-Cantor, continuous mapping, expectation change of variables and L1 linearity, finite product-measure existence/uniqueness, generating-pi-system uniqueness, finite independent joint law, arithmetic measurability, Khinchin's truncation argument and the IID finite-variance weak law. Definitions read include law/random element/measurability/Borel structures, finite product sigma-algebras, IID/sample means, moments, statistical experiment/model/estimand, observational equivalence and identifiability. These exact local statements supply the reviewed inferences; source bibliography links are provenance, not unproved substitutes. No external web or textbook reading is claimed; these familiar arguments were resolved from their local proved suppliers. No full transitive re-audit is claimed.

For the reader's Definition clarifications, independently searched every direct dependency/reference consumer. Outside-batch actual uses checked were the M/Z estimator definitions, M/Z consistency theorems, Z asymptotic-linearity theorem, quadratic sample-mean and absolute sample-median examples, finite-class consistency example, unseparated M-estimator counterexample, delta-method theorem, empirical-process CLT, misspecified sandwich theorem, regular MLE theorem and Wald/score/LR theorem. Their relevant statements and cited-fact paragraphs use Borel-measurable metric targets, scalar/fixed-dimensional Euclidean tail bounds or the fixed-target pointwise convention. The empirical-process theorem's citation explicitly limits this supplier to finite-dimensional random vectors; it does not treat this definition as an infinite-dimensional convergence theorem. No clarification invalidates an actual consumer use, and no outside consumer edit or escalation is necessary. The owned direct consumers were checked in the dependency-ordered review above. This is interface-impact review, not a whole-proof audit of those outside items.

The owning cross-batch dependency records retain their stable IDs and verified experiment/model/estimand/identifiability interfaces. No supplier claim was changed in this adjudication. No withdrawal is proposed or removed. No defective published supplier or consumer was established, and no published source or published-consumer ledger edit was made.

## Owner routing alert

During the explicitly routed risk review of `ex-nonidentifiable-targets-preclude-consistency`, independently found and fully repaired its F10 concrete-metric misattribution. Closed row: `mathematical-statistics-foundations-37-3a-batch-13-example-usual-metric-citation`; source locus `items/ex-nonidentifiable-targets-preclude-consistency.md` F10; supplier `lem-real-line-is-a-metric-space`, Statement 1 and proof cited above. The repair and confidence 1 are recorded in its complete risk review and synchronized live carriers.

This item was originally untouched and unflagged, so the dispatch owes no decision for it. To obey the exact nine-obligation inventory, no extra decision and no alteration to the frozen scope were made. **Owner/engine routing remains required for this additional closed defect and repaired carrier before native closure.** Its closed ledger row references this alert; it cannot yet reference a task-authorized owed decision. The owner must route the new finding/current carrier for a disposition or provide the native additional-ownership path. This is a routing blocker, not an unmet mathematical prerequisite or a claim that the native battery passed. All original nine obligations have substantive decisions; no original escalation is silently cleared.

## Focused checks

- Initial risk report: 12 items, ten HIGH/CRITICAL, zero tool errors. All ten specific complete reviews are in the owning contract. Final `--require-reviewed`: 12 items, zero errors.
- Reflow on both edited item sources: unchanged.
- Precheck on both edited item sources: 2 checked proofs, zero failures.
- Strict batch proof contract after quotation/use synchronization: 12/12 items, zero errors and warnings.
- Renderer check on both edited sources: 2 files, all mathematics and YAML parse successfully.
- Defect-ledger append: six closed rows added under `3a-adjudicate`; generated ledger view refreshed by the append tool. Four nonfatal reader-repair details and two fatal inaccurate citations; mechanical contract mismatches produced no defect rows.

Final proof-layout and final current source hashes are recorded below after the last source/provenance edit. Full native gates, decision stamping and additional routing belong to the engine.

Final batched command `node tools/proof-layout.mjs items/thm-iid-sample-mean-consistency.md items/ex-nonidentifiable-targets-preclude-consistency.md`: **2 items, 6 steps, 0 defects**, exit 0. This ran after the final source edit and reflow. Final precheck, renderer and strict contract checks were also repeated successfully after the provenance edit. Exact decision-inventory check: nine unique original owed obligations, no extras; ten complete required risk reviews.

Final raw source SHA-256 values:

- `thm-iid-sample-mean-consistency`: `ee80afd831624bfe5dd828e39aadaba3892f55545084e0b8c6d6838c5d24a81b`.
- `ex-nonidentifiable-targets-preclude-consistency`: `f4336818e84a424d7296a9a6838c3646398c7e04c585e26116b80125d3433061`.

Mathematical prerequisite blockers: none. Remaining owner action: route the additional risk-only carrier correction identified in the Owner routing alert; native closure is not claimed.
