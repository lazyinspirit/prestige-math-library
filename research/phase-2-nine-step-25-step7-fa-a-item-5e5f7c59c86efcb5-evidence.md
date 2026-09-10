# Final adjudicator evidence — group a, queue position 1 of 1

Run: `phase-2-nine-step-25`.
Item: `cex-bounded-continuous-cannot-be-replaced-by-all-bounded-measurable-functions`.
Decision: **accepted-after-review**. Source status: **familiar**.
Current itemHashGuard: `a883ada57d58035fe3f0eeefd00cfc27822f90f20986c75980ac1af1671c4a20`.

## Independent mathematical basis

The current statement explicitly defines the family only for integers n >= 1, with mu_n = delta_(1/n), mu = delta_0, and h the indicator of {0}. Both universal proof claims explicitly retain n >= 1. Thus no occurrence of 1/n is evaluated at zero.

This indexing is consistent with the published library, not an exception inferred from outside practice. `items/def-sequence.md`, Remarks, final “Indexing” bullet, says that texts indexing from 1 describe the same objects up to a shift and that the shift does not affect convergence. `items/lem-limit-of-tail.md`, Statement, complete Proof, and second Remarks bullet, explicitly justify this convention. Its proof transfers the convergence threshold between k and j+K in both directions. If a zero-indexed presentation is desired, the current positive-indexed family is represented by nu_k = mu_(k+1) = delta_(1/(k+1)) for k in N. This is a change of labels of the already specified family, not a missing mathematical construction or a change to the item.

Each delta_x is a Borel probability measure: on a Borel set E it is 1 when x belongs to E and 0 otherwise; in a disjoint countable union at most one summand contains x, establishing countable additivity, and its total mass is 1. Integration against it evaluates a bounded Borel function at x, first for simple functions and then from the nonnegative-integral definition and positive/negative parts. Consequently, for every bounded continuous real f the two integrals are f(1/n) and f(0). Given epsilon > 0, continuity at zero supplies delta > 0, and an integer N > 1/delta gives |f(1/n)-f(0)| < epsilon for every n >= N. This proves precisely the bounded-continuous testing condition of F1, without completeness, coupling, independence, or choice.

The closed singleton {0} is Borel; its indicator is bounded and Borel measurable. Since 1/n > 0 for every allowed index, its integral against every mu_n is 0; its integral against mu is 1. Therefore the proposed extension from bounded continuous tests to all bounded Borel tests fails. All integrals are finite. No further lemma or dependency repair is needed.

The mathematics used here (Dirac integration, continuity, indicator measurability, and explicit sequence indexing) is familiar enough to verify directly. No web search or external source retrieval was performed, and no independent reading of the item's bibliographic reference is claimed.

## Review record and context inspected

- Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, and `WORKFLOW.md`, and the exact dispatch queue and task file.
- Read the complete current item and its sole direct dependency, `items/def-weak-convergence-of-borel-probability-measures.md`. F1 accurately reproduces its bounded continuous real-test definition. Also read its supporting definitions of probability measure, Borel sigma-algebra, metric continuity, and real/complex integrability. Only the choice-free epsilon-delta definition of continuity is used.
- Read both A/B pages, `library/probability/weak-convergence-tightness-and-representation.md` and its `-examples.md` companion. Their intended boundary is continuous versus measurable tests, exactly the claim established here.
- Inspected the item's entry in `research/phase-2-nine-step-25-batch-3.pages.json`, coverage entry in `research/phase-2-nine-step-25-batch-3.coverage.json`, complete contract and risk review in `research/phase-2-nine-step-25-batch-3.proof-contracts.json`, and prior item review in `research/phase-2-nine-step-25-alpha-a-5a.md`. The manifest and contract use the shorter original notation; their universal claims inherit the explicit positive-index domain now fixed in the current statement. They do not impose a separate zeroth-term obligation. The contract's zero/one boundary rows refer to the computed integrals, and the endpoint row to the discontinuity at zero. Their mathematical content remains correct.
- Initial Terra rejection: `research/phase-2-nine-step-25-judge.jsonl`, item row at `2026-09-10T06:40:03.898Z`, context `3fcd58bfd5d89bcb86eb2d9c58f0c90d0c205ae970354926b32dafd4e254757e`, objected to unspecified indexing at zero.
- Sol adjudication: the exact item row in `research/phase-2-nine-step-25-judge-adjudications.jsonl` at `2026-09-10T17:58:05+10:00`, and the first completed item in `research/phase-2-nine-step-25-alpha-step7-a.md`, confirmed that issue and restricted the statement and both proof claims to n >= 1. The current guard equals Sol's recorded post-edit guard.
- Final Terra rejection: `research/phase-2-nine-step-25-judge.jsonl`, item row at `2026-09-10T08:04:51.991Z`, context `8a055a92e78526e45bd069a63102e5f716a606802a27689fa4488c7f416e10e3`, still demands mu_0. I reject that objection independently because it disregards the explicit index domain and the published indexing convention cited above.

## Focused checks, scope, and completion

- `node tools/tsx-run.mjs tools/precheck.mts items/cex-bounded-continuous-cannot-be-replaced-by-all-bounded-measurable-functions.md`: PASS, 1 checked, 0 failing, with no canonical-format repair requested.
- `node tools/rendercheck.mjs items/cex-bounded-continuous-cannot-be-replaced-by-all-bounded-measurable-functions.md`: PASS, one file; YAML and all math spans parse.
- Compared this item's batch and aggregate proof-contract objects: equal. Inspected the declared dependency and page placement: the sole direct supplier is on the paired A page in the same batch, before this B-page consumer.
- Read `briefs/tasks/frontier-dependency-ledger.md` and checked the owning batch-3 consumer input: no cross-batch row for this item. No dependency was changed or repaired, so the conditional dependency-repair bookkeeping requirement does not trigger a ledger edit or refresh.

No mathematical item, dependency, page, manifest, contract, risk record, or judge result was edited. These focused checks are format/interface checks; the mathematical decision rests on the independent argument above. No third consumer judgment or pass stamp is authorized or created. There are no unresolved mathematical obligations or blockers. Next action: record this acceptance using `tools/step7-terminal-resolution.mjs`; the engine then resumes the owning Alpha.
