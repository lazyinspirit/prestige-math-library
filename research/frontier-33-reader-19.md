# frontier-33 reader report — batch 19

## Scope opened

Read the current batch manifest, coverage, notes, all four assigned pages, and all 59 assigned items.

| Page | Kind | Items read | Verdict |
| --- | --- | ---: | --- |
| `formal-set-theoretic-syntax-structures-and-satisfaction` | A | 19 | Pass after independent review |
| `formal-set-theoretic-syntax-structures-and-satisfaction-examples` | B | 5 | Pass after independent review |
| `well-founded-relations-rank-and-the-cumulative-hierarchy` | A | 30 | Pass after independent review |
| `well-founded-relations-rank-and-the-cumulative-hierarchy-examples` | B | 5 | Pass after independent review |

The items were read in full from their current `items/*.md` files, including every Definition/Statement, facts block, proof or verification, frontmatter dependency, source reference, and boundary computation. The four current page summaries were read in full. No page-prose edit was needed.

Opened published dependency targets: `def-natural-numbers`, `thm-recursion`, `thm-strong-induction`, `def-ordinal`, `thm-transfinite-recursion`, `lem-ordinal-basics`, `def-limit-ordinal`, `thm-transfinite-induction`, `def-cardinal`, `thm-well-ordering-theorem`, and `thm-hartogs`.

Opened source documents at the cited material: Moschovakis *Lecture Notes in Logic*, 1B–1C and app3–app4; Weiss *Set Theory*, the syntax/relativization material and chapter 10–11 hierarchy material; Marks *Set Theory*, §§6–7; Schlicht *Introduction to Mathematical Logic*, §2.4; Kozen–Ruozzi, §6; and Shulman, universe discussion. In particular, Schlicht’s displayed truth-definition diagonal is exactly the two-variable truth-with-parameters scheme used here, and Marks’s recursion/rank/collapse passages support the stated relation orientation.

## Repair

Repaired `prop-well-foundedness-and-descending-sequences`.

The previous proof cited `thm-induction-on-well-founded-relations` at step 1.1, but that published theorem assumes *setlike* as well as well-founded, while the proposition’s forward direction intentionally applies to arbitrary well-founded relations. The proof step directly follows from the defining minimal-element property and needs no induction theorem or setlike hypothesis.

Changes made:

- removed the unnecessary `thm-induction-on-well-founded-relations` dependency and copied fact;
- replaced the inappropriate citation in step 1.1 with the stated well-foundedness assumption;
- renumbered the retained transfinite-recursion fact to `F1` and updated step 1.2;
- updated the corresponding proof-contract citation and derivation inputs.

This preserves the stronger, correct forward claim and retains the explicitly supplied choice-function hypothesis only for the converse. The item had no `verification.judge` record to remove.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/prop-well-foundedness-and-descending-sequences.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/prop-well-foundedness-and-descending-sequences.md` — pass.
- `node tools/proof-contract.mjs research/frontier-33-batch-19.proof-contracts.json --strict` — 41/41 checked, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-33-batch-19.pages.json` — 59 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass; only existing global redundant-prerequisite advisories.
- `node tools/rendercheck.mjs items/prop-well-foundedness-and-descending-sequences.md` — pass.
- `node tools/depcheck.mjs --quiet` — not clean because of five unassigned library pages with YAML `\\u` title-escape errors, plus global warnings; it reports no batch-19 path.

## Findings and blockers

No uneditable defect or batch-19 blocker remains. The global `depcheck` failure is outside the assigned scope and is not included in the structured findings artifact.
