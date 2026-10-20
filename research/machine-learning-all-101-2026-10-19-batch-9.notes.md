# Batch 9 authoring notes

Run: `machine-learning-all-101-2026-10-19`
Pair: `minimax-learning-lower-bounds-and-optimal-rates`
Role: beta, batch 9

## Controlling design and inventory

The complete ML-08 design at `research/plan-machine-learning-track.md` lines 102–110 matches the ML-08 `plan-spec.json` row in scope, exact constants, proof route, item interfaces, examples, and source locators. There is no design conflict. The plan row leaves its item list empty; the assigned scaffold manifest supplies the explicit item inventory.

The A page contains six items and the B page contains three examples. The current manifest levels are:

| Item | In-run dependencies | Level |
|---|---|---:|
| `lem-bernoulli-two-point-testing-for-vc-lower-bound` | none | 0 |
| `lem-bounded-variable-lower-tail-from-mean` | none | 0 |
| `def-minimax-excess-risk` | batch-2 risk setup, risk definition, measurability lemma | 3 |
| `thm-realizable-vc-minimax-lower-bound` | local definition and tail lemma | 4 |
| `thm-agnostic-vc-minimax-lower-bound` | local definition and two local lemmas | 4 |
| `cor-vc-minimax-rate-match` | both lower-bound theorems and local definition | 5 |
| `ex-bernoulli-two-point-testing` | Bernoulli testing lemma | 1 |
| `ex-finite-shattered-set` | local definition | 4 |
| `ex-fixed-confidence-vc-lower-bounds` | both lower-bound theorems and local definition | 5 |

The A-page prerequisites are the published page `library/mathematical-statistics/minimax-lower-bounds-and-information-theoretic-methods.md` and the batch-2 draft page `library/machine-learning/prediction-problems-risks-and-empirical-minimization.md`. The published prerequisite was not missing; its actual home is mathematical statistics. The B page requires the assigned A page. The six A-page and three B-page inventories remain below the 100-item cap. Both assigned page bodies remain empty and frontmatter-only.

## Supplier interfaces checked

- `def-supervised-learning-problem` (batch 2, level 0; draft): actual definition fixes measurable instance and label spaces, a joint law, measurable predictors, and a measurable loss. It does not impose iid sampling. The new definition states iid sampling separately.
- `def-population-and-empirical-risk` (batch 2, level 1; draft): actual population risk is an extended nonnegative integral, and empirical risk is a finite average. The new definition specializes zero-one risk to a bounded event probability.
- `lem-population-and-empirical-risk-are-measurable` (batch 2, level 2; draft): its full proof handles fixed measurable predictors. It does not prove measurability for a random learner's parameter-indexed risk. `def-minimax-excess-risk` therefore explicitly requires measurable prediction evaluations and a measurable random risk for each admissible learner.
- Its inspected transitive measurability inputs include the finite product sigma-algebra definition, measurable-map definition, and the published measurable-closure proposition. The expectation interface defines nonnegative expectation as an extended integral. These suppliers introduce no choice assumption used here.
- `def-shattering-and-vc-dimension` (published, combinatorics): its actual finite-set-family definition was read. `def-minimax-excess-risk` forms the class trace only after indexing a finite set of distinct classifier points. The proofs use the full power set on a shattered indexed set; they do not use Sauer's upper bound for arbitrary traces.
- The published minimax-methods prerequisite was read. Candidate interfaces were checked: Pinsker uses event-supremum TV/KL and AC; two-point Le Cam is for squared-error scalar estimation; Assouad is for squared Euclidean hypercubes; Fano is for separated targets and KL. None matches or is used by these binary risk claims. The local finite Bernoulli test proof keeps its own half-L1 convention and affinity argument.

No theorem, local definition, or proof branch here assumes the Axiom of Choice. Finite selection among the 2^d shattered labelings is the only selection in the constructions.

## Item-by-item mathematical checkpoint

- `lem-bernoulli-two-point-testing-for-vc-lower-bound` (level 0, no deps): for 0<u<1, proves the exact equal-prior Bernoulli error bound from total variation, finite Cauchy–Schwarz, product affinity, and the logarithmic inequality. It handles k=0 separately. Mohri et al., Foundations of Machine Learning, 2e, Chapter 3 section 3.4, Lemma 3.21 and the omitted Exercise D.3, PDF pp. 61–62 / printed pp. 44–45; Shalev-Shwartz and Ben-David section 28.2.1 is an independent treatment with different hypotheses and constants. The exercise gap is proved locally.
- `lem-bounded-variable-lower-tail-from-mean` (level 0, no deps): proves P(Z>t) >= (E Z - t)/(1-t) for Z in [0,1], t<1, by splitting the expectation over the strict-tail event. Mohri et al., Lemma 3.22, PDF p. 62 / printed p. 45.
- `def-minimax-excess-risk` (level 3; deps: `def-supervised-learning-problem`, `def-population-and-empirical-risk`, `lem-population-and-empirical-risk-are-measurable`, `def-shattering-and-vc-dimension`): defines indexed binary traces, VC dimension, class risk and benchmark, realizable target risk, and minimax/tail risks. Randomized learners use a seed probability space and law fixed independently of $D$, with product-law and evaluation/risk measurability made explicit. Mohri et al., Chapter 3 section 3.4; Shalev-Shwartz and Ben-David, Chapters 2–3. It imposes no conditional-label kernel or measurable selector.
- `thm-realizable-vc-minimax-lower-bound` (level 4; deps: definition, shattering, bounded-variable lemma): proves the (d-1)/(32m), 1/100 strict-tail bound for m >= ceil((d-1)/4). The repaired range keeps rare mass 8 epsilon=(d-1)/(4m) <= 1. The source proof only obtains a non-strict intermediate tail at epsilon; the local normalized bounded-variable step proves the required strict event. Mohri et al., Theorem 3.20 and proof, PDF pp. 59–61 / printed pp. 43–45; UBC course notes, Theorem 7.13 and proof, lines 205–225 (independent proof only for d>=3, m>d/2).
- `thm-agnostic-vc-minimax-lower-bound` (level 4; deps: definition, shattering, Bernoulli and bounded-variable lemmas): proves the sqrt(d/(320m)), 1/64 strict-tail bound for m >= ceil(64d/5). It supplies the affinity/TV proof missing from Mohri Exercise D.3, conditions on each binomial coordinate count, proves the finite convex tangent inequality for Phi locally, proves Phi(m/d+1,a)>1/8 with s=d/m<=5/64 and log(4/3)>23/80, then applies the bounded-variable lemma to normalized excess at 7/64. Mohri et al., Lemma 3.21, Lemma 3.22, Theorem 3.23 and complete proof, PDF pp. 61–64 / printed pp. 44–48; Shalev-Shwartz and Ben-David, Chapter 28 section 28.2.2, PDF pp. 395–398, independently rederived. The source's printed final substitution is not used.
- `cor-vc-minimax-rate-match` (level 5; deps: both theorems and definition): derives expected minimax lower bounds and exact fixed-confidence sample-size thresholds by taking worst-case laws and learner infima. It asserts no computational lower bound or matching upper bound.
- `ex-bernoulli-two-point-testing` (level 1; dep: Bernoulli testing lemma): computes the exact one-sample error 1/4 and proves optimality by expansion.
- `ex-finite-shattered-set` (level 4; deps: definition and shattering): constructs all eight functions on a three-point domain and proves VC dimension exactly three.
- `ex-fixed-confidence-vc-lower-bounds` (level 5; deps: both lower-bound theorems and definition): verifies d=4, m=64, both theorem ranges, and thresholds 3/2048 and 1/sqrt(5120). Its two hard laws may differ.

## Source retrieval and dispositions

The assigned `batch-9.coverage.json` retains its earlier retrieval history and now has actual `source-fetch-check --stamp` records for all six page/source entries: 6/6 full-text fetch verified, zero drops. The A-page treatments are:

- Mohri, Rostamizadeh, and Talwalkar, Foundations of Machine Learning, 2e, Chapter 3 section 3.4, Theorem 3.20 and proof, Lemmas 3.21–3.22, Theorem 3.23 and proof; PDF pp. 59–64 / printed pp. 43–48. Theorem 3.20's all-m statement omits the nonnegative-mass range used in its proof; this authoring uses the plan's repaired range. Lemma 3.21 leaves Exercise D.3 unproved; the Bernoulli lemma supplies a complete local proof. Theorem 3.23's epsilon<=1/64 condition is carried by the repaired sample range and its final constants are independently recomputed.
- Shalev-Shwartz and Ben-David, Understanding Machine Learning, Chapter 28 sections 28.2.1–28.2.2, PDF pp. 393–398; Appendix B.6, Lemma B.11, PDF p. 427. The book's section 28.2.2 proof invokes B.11, whose appendix statement cites standard normal tails without proving them; the authored finite Bernoulli test lemma does not use B.11. The printed final substitution in section 28.2.2 is not used.
- Statistical Learning Theory course notes, University of British Columbia, Chapter 7 sections 7.2.2–7.3, lines 120–234. The complete Theorem 7.10 proof, Theorem 7.13 proof, and Proposition 7.14 were inspected. Theorem 7.13 is a useful independent realizable comparison but has the narrower domain d>=3, m>d/2.

The direct web reader initially could not follow the Dropbox redirect for the Mohri PDF. A search located a complete 505-page comparison copy at `https://moodle2.units.it/pluginfile.php/757669/mod_resource/content/1/Mohri%20et%20al.%20-%202018%20-%20Foundations%20of%20machine%20learning.pdf`; its title pages and the full relevant proofs were inspected. The canonical Dropbox URL subsequently passed the required full-text fetch check. The previously recorded Shalev-Shwartz/Ben-David first-URL failure and recovery to the full U. Szeged copy remain preserved in the coverage history. No source is dropped or unresolved; no `source_resolution` drop record is needed. No registered finite-smoke check applies to these general analytical proofs; finite examples have complete written verifications.

## Dependency and scheduling evidence

The dispatch says batch 9 is level 1 and requires batch 2. The dispatch input hash is `4652875380fb83fe2b469069a490dc8aeba66b4b740ea67dbde87608a9c8b602`; the initially observed artifact input hash was `982af2c63244b1ec607b5996f210b3b6e0ae327f963e8fe1cdf4689e25c19b03`. A live recomputation before a later malformed batch-37 manifest appeared produced input hash `f92eaf600a67ed5da9d1b943abdc00c4130270586cecd62ea658a1385a70e5a3`, still with batch 9 at level 1 requiring batch 2. The latest observed shared artifact records input hash `4c693476eaf104b5816a67b6ddafcf6f499863f314d6b6c8ab7c9cce2209a13a` and batch 9 level 1 requiring batch 2. The live batch-level recomputation is now blocked because `research/machine-learning-all-101-2026-10-19-batch-37.pages.json`, page `neural-operators-and-physics-informed-learning`, contains 22 string entries where item objects with IDs are required; `loadStep3` fails with `Duplicate item undefined`. The shared dependency-level artifact remains unedited. Hash observations and the exact blocker are also recorded in `batch-9.dependency-inputs.json`.

## Final checks and handoff

- `precheck.mts` passed all 8 proof-bearing assigned items after adopting its canonical phase/step numbering.
- `proof-layout.mjs` passed the 9 assigned items with 26 proof steps and zero defects. `rendercheck.mjs` passed the 9 assigned items and both A/B pages (11 files) with zero errors or warnings. Content policy passed all 9 manifest items with zero errors or warnings.
- Focused `depcheck` and `fwdcheck` passed all 9 items and both pages with zero errors or warnings. `extcheck` passed all 9 items with zero unproved items, errors, or warnings. Strict proof-contract validation passed 9/9 contracts with zero errors or warnings. The contracts contain exact supplier excerpts, actual derivation steps and inputs, boundary dispositions, and no applicable finite-smoke checks; the finite examples have full written verifications.
- `source-fetch-check` verified all 6/6 coverage sources, with zero drops. No source-resolution drop or owner escalation was needed.
- The batch-9 item dependency levels recomputed from the full manifest graph match all nine declared levels exactly: 0, 0, 3, 4, 4, 5, 1, 4, 5 in manifest order, with no batch-9 dependency errors. The official run-wide item-level check reports 152 errors outside this pair: 112 empty page inventories, 18 existing item-level label mismatches, and 22 batch-37 string entries that have no item IDs. No other batch files were edited.
- `proof-contract-coverage` is blocked by the empty run-wide page inventory `distribution-shift-and-domain-adaptation`. The shared batch dependency-level check is stale relative to the dispatch/current manifests; after the malformed batch-37 change, live recomputation fails before a fresh graph can be obtained. These are owner-side reconciliation blockers, not batch-9 item failures.
- All 9 batch-9 `step1-decisions` records were initially written as `ready` without `--owner`, with their direct dependency IDs and hashes; all 9 were hash-checked closed at that point. A final measurability clarification to `def-minimax-excess-risk` then changed its hash and the hashes of its five downstream items (`thm-realizable-vc-minimax-lower-bound`, `thm-agnostic-vc-minimax-lower-bound`, `cor-vc-minimax-rate-match`, `ex-finite-shattered-set`, and `ex-fixed-confidence-vc-lower-bounds`). The official recorder cannot refresh these 6 records because its full-run loader now fails on batch 37's 22 non-object entries (`Duplicate item undefined`). The two local lemmas and `ex-bernoulli-two-point-testing` do not depend on that definition. Once the owner repairs batch 37, rerun the official recorder for the 6 stale items; no `--owner` override or other-pair edit was used. Readiness records mean complete authoring for owner review, not acceptance, independent approval, or publication.

Design comparison remains conflict-free. The remaining handoff work is owner reconciliation of the run-wide blockers, refreshing the 6 now-stale Step 1 records after the manifest is repaired, and normal independent review. No published content, shared plan, engine state, or verdict was changed.
