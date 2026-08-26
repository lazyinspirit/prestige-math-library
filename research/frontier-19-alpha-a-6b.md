# frontier-19 — Alpha-a, Step 6b adjudication

Run: `frontier-19`
Group: `a`
Covers: batches `1`, `9`
Reviewer: Alpha `a`

## Context checkpoint

- Completed checks:
  - Read `CLAUDE.md`, `LEVELS.md`, `SCHEMA.md`, `ARCHITECTURE.md`, and `QUALITY-CONTROLS.md` sections governing Step 6b, defect-ledger ownership, and proof-contract/risk-review closure.
  - Verified group `a` scope from `research/frontier-19-alpha-groups.json`: batches `1` and `9`.
  - Read `research/frontier-19-step6-scope-1.json` and `research/frontier-19-step6-scope-9.json` to enumerate the exact touched and flagged obligations.
  - Read `research/frontier-19-reader-1.md`, `research/frontier-19-reader-9.md`, `research/frontier-19-reader-findings-1.json`, and `research/frontier-19-reader-findings-9.json`; both reader-finding JSON files are empty, so there are no `reader:<batch>:<n>` obligations in this dispatch.
  - Read `research/frontier-19-refute-1.json` and `research/frontier-19-refute-9.json`; batch `1` has three fatal refuter findings and batch `9` has two fatal refuter findings.
  - Audited the current disk text of all touched batch-1 carriers, the batch-1 refuter subjects, and the central batch-9 density / free-cocompletion / Kan-extension items against their cited dependencies.
  - Confirmed one surviving touched-carrier defect on disk: `items/ex-density-computed-for-a-presheaf-on-a-two-object-category.md` still states the density indexing category as `(\int P)^{\mathrm{op}}`, contrary to `items/thm-density-for-a-small-category.md`.
  - Confirmed the batch-9 refuter finding on `items/fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor.md`: the current witness does not establish that `(L,\eta)` is a left Kan extension. Verified the authoritative repair model in Riehl, *Category Theory in Context*, Example `6.2.17`.

- Changed artifacts so far:
  - Created this report file only; no mathematical content or ledger artifact has been edited yet.

- Open constraints:
  - Every confirmed defect needs a closed Step-6 ledger row before the 6b decision file can validate.
  - `ex-density-computed-for-a-presheaf-on-a-two-object-category` and `fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor` both need item edits and matching contract updates.
  - Batch `1` refuter findings still need disk repairs for `def-isometric-proper-and-cobounded-actions-on-metric-spaces`, `cor-groups-acting-geometrically-on-the-same-space-are-quasi-isometric`, and `ex-dihedral-actions-of-prime-and-composite-degree`.
  - The high-risk items in both batches need `risk_review` completion in the owning batch proof contracts after the text is final.

- Exact next action:
  - Repair the five confirmed live mathematical defects on disk (`def-isometric-proper-and-cobounded-actions-on-metric-spaces`, `cor-groups-acting-geometrically-on-the-same-space-are-quasi-isometric`, `ex-dihedral-actions-of-prime-and-composite-degree`, `ex-density-computed-for-a-presheaf-on-a-two-object-category`, `fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor`), then update the affected batch proof contracts before writing the Step-6 decisions and ledger rows.

## Current state

- Reader-finding JSON obligations: none. `research/frontier-19-reader-findings-1.json` and `research/frontier-19-reader-findings-9.json` both carry `findings: []`.
- Exact Step-6 decisions written: `22`.
- Step-6 defect rows appended: `22`.
- High-risk reviews completed: batch `1` = `8/8`; batch `9` = `24/24`.

## Reader-touched obligations

| obligation | verdict | evidence |
|---|---|---|
| `touched:1:cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer` | `amended_repair` | The reader correctly added `|\Omega|>1`; the final carrier adds the required high-risk review on the repaired subgroup-block argument. |
| `touched:1:cor-doubly-transitive-actions-are-exactly-the-rank-two-transitive-actions` | `amended_repair` | The reader correctly excluded the singleton action; I also wrote out the conjugated-stabilizer step and completed the high-risk review. |
| `touched:1:def-growth-comparison-and-growth-type` | `accepted_repair` | The comparison constant is now a natural number, so `g(Cn+C)` is typed on the declared domain. |
| `touched:1:lem-growth-comparison-is-a-preorder` | `accepted_repair` | The preorder proof now composes only natural comparison constants. |
| `touched:1:thm-growth-type-is-independent-of-the-finite-generating-set` | `accepted_repair` | The generating-set comparison now keeps every radius input in `\mathbb N`. |
| `touched:1:thm-growth-type-is-a-quasi-isometry-invariant-of-finitely-generated-groups` | `accepted_repair` | The quasi-isometry comparison proof now integerizes the Lipschitz and fibre constants before invoking growth comparison. |
| `touched:1:thm-svarc-milnor-lemma` | `amended_repair` | The reader supplied the missing quasi-inverse; I then corrected the contract use map and completed the high-risk review on the repaired proof. |
| `touched:1:fs-cobounded-and-cocompact-are-unconditionally-identical` | `amended_repair` | The reader’s cocompactness clarification is correct; I additionally resynchronized the dependent contract quote after tightening the nonempty-space caveat in the coboundedness definition. |
| `touched:1:thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product` | `amended_repair` | The narrowed title now matches the kernel-modulo embedding actually proved, and the final carrier adds the required high-risk review. |
| `touched:9:ex-a-kan-extension-computing-a-free-functor` | `amended_repair` | The touched carrier is the contract row: `[L1]` now quotes the repaired free-cocompletion theorem, and the high-risk review is complete. |
| `touched:9:ex-density-computed-for-a-presheaf-on-a-two-object-category` | `amended_repair` | The touched carrier is the contract row: the density-theorem quote and boundary notes now match the repaired theorem, and the high-risk review is complete. |
| `touched:9:ex-induction-and-coinduction-of-group-representations` | `amended_repair` | The reader’s comma-category repair is correct, and the final carrier adds the Step-6 high-risk review on the fixed quotient description. |
| `touched:9:fs-the-free-cocompletion-theorem-holds-for-a-large-source-category` | `amended_repair` | The touched carrier is the contract row: the free-cocompletion citation now matches the repaired theorem, and the foundation-sensitive high-risk review is complete. |
| `touched:9:thm-density-as-a-self-kan-extension-for-a-small-category` | `amended_repair` | The reader correctly replaced the opposite-category import by the actual `(y\downarrow P)\cong\int P` identification, and the final contract adds the high-risk review. |
| `touched:9:thm-density-for-a-small-category` | `amended_repair` | The density theorem now uses `\int P`, not its opposite, and the final contract records the high-risk review on the repaired Yoneda-cocone route. |
| `touched:9:thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad` | `amended_repair` | The reader supplied the missing filter and monad-law arguments, and the final contract records the completed critical-risk review. |
| `touched:9:thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion` | `amended_repair` | The reader’s density repair stands, and I tightened the adjunction step through the presheaf `\mathcal E(F-,-)` before completing the critical-risk review. |

## Refuter obligations

| obligation | verdict | evidence |
|---|---|---|
| `refuter:1:1` | `confirmed_fatal` | On `X=\varnothing`, coboundedness via `B=\varnothing` does not produce a basepoint-orbit description. The equivalence clause in `def-isometric-proper-and-cobounded-actions-on-metric-spaces` now explicitly requires `X` nonempty. |
| `refuter:1:2` | `confirmed_fatal` | Without `X` nonempty, the empty geodesic space makes any two groups “geometric” on `X`. `cor-groups-acting-geometrically-on-the-same-space-are-quasi-isometric` now assumes a nonempty common space and chooses basepoints explicitly. |
| `refuter:1:3` | `confirmed_fatal` | `n=4`, `d=1` gives the trivial one-block partition, not a nontrivial block system. `ex-dihedral-actions-of-prime-and-composite-degree` now restricts to divisors `d` with `1<d<n`. |
| `refuter:9:1` | `confirmed_fatal` | The old witness in `fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor` did not make the displayed pair a left Kan extension. I replaced it with Riehl’s Example `6.2.17`, which is a genuine non-pointwise left Kan extension along a fully faithful functor. |
| `refuter:9:2` | `confirmed_fatal` | `[L1]` in `ex-density-computed-for-a-presheaf-on-a-two-object-category` had changed the density theorem from `\int P` to `(\int P)^{\mathrm{op}}`. The item now cites the theorem with the correct indexing category. |

## Contract and Consumer Closure

- `research/frontier-19-batch-1.proof-contracts.json`
  - corrected the `cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer` citation-use map and malformed `nonempty-choice` boundary row;
  - synchronized contract quotes on `fs-a-block-is-an-invariant-subset`, `lem-metric-properness-agrees-with-proper-discontinuity-on-proper-discrete-metric-spaces`, `lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz`, `ex-a-proper-isometric-action-that-is-not-cobounded`, and `fs-cobounded-and-cocompact-are-unconditionally-identical` after the repaired example / definition text changed the exact quoted clause;
  - synchronized `thm-svarc-milnor-lemma`’s `L3` use map and `nonempty-choice` boundary row with the repaired quasi-inverse proof.
- `research/frontier-19-batch-9.proof-contracts.json`
  - synchronized the contract rows of `ex-a-kan-extension-computing-a-free-functor`, `ex-density-computed-for-a-presheaf-on-a-two-object-category`, and `fs-the-free-cocompletion-theorem-holds-for-a-large-source-category` to the repaired density / free-cocompletion theorem text;
  - synchronized the `thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion` derivation and `L4` use map to the tightened adjunction argument;
  - completed every missing `risk_review` required by `risk-report --require-reviewed`.

## High-risk review

- Batch `1`
  - Wrote `risk_review` entries for all routed high/critical items:
    - `cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer`
    - `cor-doubly-transitive-actions-are-exactly-the-rank-two-transitive-actions`
    - `ex-blocks-in-a-regular-cyclic-action`
    - `lem-bounded-local-displacement-on-a-geodesic-space-implies-coarse-lipschitz`
    - `lem-cobounded-proper-geodesic-actions-produce-finite-generating-sets`
    - `thm-iwasawa-simplicity-criterion-for-primitive-actions`
    - `thm-svarc-milnor-lemma`
    - `thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product`
- Batch `9`
  - Wrote `risk_review` entries for all `24` routed high/critical items, including the repaired density / free-cocompletion / codensity items and the untouched refuter-cleared Kan-extension items.

## Gates run

- Per changed item:
  - `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md`
  - `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md`
  - Result: all changed items clean after repair.
- Batch quality gates:
  - `node tools/proof-contract.mjs research/frontier-19-batch-1.proof-contracts.json --strict`
    - `0 error(s), 0 warning(s), 51/51 item(s) checked`
  - `node tools/proof-contract.mjs research/frontier-19-batch-9.proof-contracts.json --strict`
    - `0 error(s), 0 warning(s), 28/28 item(s) checked`
  - `node tools/risk-report.mjs research/frontier-19-batch-1.proof-contracts.json --require-reviewed`
    - `0 error(s), 51 item(s) routed`
  - `node tools/risk-report.mjs research/frontier-19-batch-9.proof-contracts.json --require-reviewed`
    - `0 error(s), 28 item(s) routed`
  - `node tools/coverage-checklist.mjs research/frontier-19-batch-1.coverage.json research/frontier-19-batch-9.coverage.json`
    - `0 error(s), 0 warning(s)`
  - `node tools/content-policy.mjs research/frontier-19-batch-1.pages.json research/frontier-19-batch-9.pages.json`
    - `0 error(s), 0 warning(s)`
- Step-6 records:
  - `node tools/defect-ledger.mjs append --file research/frontier-19-alpha-a-6b-ledger-rows.json`
    - appended `22` rows and rerendered `research/DEFECT-LEDGER.md`
  - `node tools/defect-ledger.mjs validate --run frontier-19`
    - `22 defect row(s) checked, 0 error(s)`
  - `node tools/step6-scope.mjs stamp --run frontier-19`
    - stamped `22` current carrier hashes for group `a`

## Blockers

- `node tools/step6-scope.mjs check --run frontier-19 --phase adjudicate --batch 1`
  - `reader-findings-invalid`: `research/frontier-19-reader-findings-1.json` stores `"batch": "frontier-19-batch-1"` instead of bare batch id `1`, so the routed reader-findings artifact is internally invalid for the gate and cannot be rewritten honestly by this 6b pass.
  - `published-claim-extra`: `research/frontier-19-step6-published-claims.jsonl` contains unrelated group-`d` claims for `def-erdos-hajnal-property-and-constant` and `lem-erdos-hajnal-constants-are-downward-closed` with no matching Step-6 published-repair obligation in my scope.
- `node tools/step6-scope.mjs check --run frontier-19 --phase adjudicate --batch 9`
  - the same two blocker classes recur:
    - `research/frontier-19-reader-findings-9.json` stores `"batch": "frontier-19-batch-9"` instead of `9`;
    - `research/frontier-19-step6-published-claims.jsonl` still carries the same two unrelated group-`d` claim rows.
- Global `node tools/step6-scope.mjs check --run frontier-19 --phase adjudicate`
  - also expects other groups’ decision files and therefore is not yet a meaningful local close-out signal while group concurrency is still live.

These are artifact-level or concurrent-stage blockers, not remaining mathematical defects in group `a`’s owned batches.

## Changed artifacts

- Items
  - `items/cor-doubly-transitive-actions-are-exactly-the-rank-two-transitive-actions.md`
  - `items/cor-groups-acting-geometrically-on-the-same-space-are-quasi-isometric.md`
  - `items/def-isometric-proper-and-cobounded-actions-on-metric-spaces.md`
  - `items/ex-dihedral-actions-of-prime-and-composite-degree.md`
  - `items/ex-density-computed-for-a-presheaf-on-a-two-object-category.md`
  - `items/fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor.md`
  - `items/thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion.md`
- Contracts and Step-6 records
  - `research/frontier-19-batch-1.proof-contracts.json`
  - `research/frontier-19-batch-9.proof-contracts.json`
  - `research/frontier-19-alpha-a-6b-ledger-rows.json`
  - `research/frontier-19-alpha-a-6b-decisions.json`
  - `research/frontier-19-alpha-a-6b.md`
  - `research/defect-ledger.jsonl`
  - `research/DEFECT-LEDGER.md`

## Exact next action

- Leave the global Step-6 artifact blockers for the owning stage / owner:
  - normalize the routed `reader-findings` batch ids at source rather than rewriting Step-6 evidence by hand; and
  - resolve or remove the stray group-`d` published-claim rows only through the published-repair owner workflow.
- Once those artifacts and the sibling groups’ decision files are in place, rerun the global Step-6 adjudication gate.

## Gate adjudication — `rendercheck` (2026-08-26)

- `gate:rendercheck:multiline-display:def-imprimitive-wreath-product-of-permutation-groups` — `repaired`. Reproduced `node tools/rendercheck.mjs`; the displayed action-composition equation in the Definition had two source lines between `$$`, so the renderer mis-read it. I collapsed that display to one source line without changing the mathematical content.
- `gate:rendercheck:katex-parse-error:thm-kan-extensions-are-unique-up-to-unique-isomorphism` — `repaired`. Reproduced the real KaTeX failure on the undefined placeholder command `\blank` in step `2.1`. I rewrote the sentence to state the actual composite $((\alpha'\alpha)K)\circ\eta=\eta$ explicitly, which preserves the proof and parses under KaTeX.

Group-`a` gate findings are cleared on current disk. The final rerun was:
`OK — 7812 file(s): no wikilink inside math, no nested or unbalanced delimiters, no multiline display block, every math span parses under the real KaTeX, and every frontmatter block parses under the renderer's YAML parser.`

## Gate adjudication — `proof-contract` (2026-08-26)

- `gate:proof-contract:thm-transitive-imprimitive-groups-embed-in-an-imprimitive-wreath-product` — `repaired`. Reproduced the merged `node tools/proof-contract.mjs research/frontier-19-proof-contracts.json --strict` failure on current disk. The theorem's batch-1 contract still quoted an older form of `def-imprimitive-wreath-product-of-permutation-groups`; after the rendercheck repair that quote no longer occurred verbatim. I regenerated the theorem contract entry from current item text, which restored the exact citation quote and step-use map without changing the mathematics.
- `gate:proof-contract:ex-imprimitive-wreath-product-block-system` — `repaired`. Same defect class and same source Definition: the example's batch-1 contract still carried the pre-repair quote. I regenerated that contract entry from current disk so the exact citation quote matches the authored Definition again.
