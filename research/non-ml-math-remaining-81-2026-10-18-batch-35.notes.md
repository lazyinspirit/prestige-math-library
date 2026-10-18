# Batch 35 authoring notes — Clifford classification, modules, and graded products

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: beta  
Assigned A/B pair: `real-complex-clifford-classification-and-graded-products`  
Scheduling input: `825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042`

## Scope, plan comparison, and conflicts

The current owner direction and this batch assignment require actual mathematics authoring for the assigned pair. The older physics prose-scaffold describes a historical placement-only splice (“No mathematical item is minted or copied”); that limit is superseded for this active authoring run. Existing PA-03 carriers were reused by exact item ID and were not duplicated. The PA-04 design’s three substantive duties remain: nondegenerate real/complex classification with explicit signature, graded-simple module/type classification, and the graded tensor formula for orthogonal sums. The B page contains worked checks and a counterexample only.

`research/plan-spec.json` agrees with the assigned plan record: A/B IDs, titles, category, companion links, orders 2884/2885, and `requires` (`clifford-universal-algebras-and-pbw`) all match. Its empty `items` arrays are pre-authoring plan inventories; the authored inventory is recorded in the batch manifests, and the shared plan was left unchanged. No direct conflict between the current page plan and the batch assignment was found.

Conventions and scope from the Clifford design were retained: `$v^2=Q(v)1$`; real signature order `(+^p,-^q)`; `Cl_{1,0} \cong R \oplus R` and `Cl_{0,1} \cong C`; semisimple real/complex tables only for nondegenerate forms. Gallier’s convention matches; ABS negative-definite `C_k` translates to `Cl_{0,k}`; Wernli’s source convention `$v^2=-g(v,v)$` is translated by swapping the signature indices. The degenerate-form PBW result is used only for the dimension/basis statements that cover it; no semisimple classification is claimed for degenerate forms. The Koszul sign in the graded tensor product is essential for orthogonal sums; the B-page counterexample checks the ordinary tensor failure. The A-page TikZ generator diagram is a reading aid, and no proof relies on it. The page explicitly leaves Pin/Spin, KO/ABS, CAR/Fock, and geometric index claims to their separately assigned pages.

## Inventory and full-run dependency levels

Sixteen items are assigned: 13 on A and 3 on B. The levels below were recomputed from the full run graph after synchronizing the item frontmatter, batch pages manifest, and batch items manifest. All batch-35 labels match the recomputed values; there is no dependency cycle in this pair.

| Level | Items |
|---:|---|
| 0 | `def-clifford-graded-algebra-module-and-tensor-product`; `def-real-quaternion-matrix-algebra-notation` |
| 1 | `lem-clifford-quotient-has-canonical-z2-grading`; `lem-clifford-zero-dimensional-algebra-is-base-field`; `lem-real-quaternions-form-a-division-algebra`; `thm-graded-module-classification-from-even-subalgebra` |
| 2 | `lem-real-division-algebra-tensor-identities` |
| 4 | `lem-clifford-even-subalgebra-signature-identification`; `lem-real-clifford-low-dimensional-models`; `thm-clifford-graded-tensor-product-for-orthogonal-sums` |
| 5 | `lem-real-clifford-signature-recurrences-and-periodicity`; `cex-ordinary-tensor-product-fails-for-clifford-orthogonal-sums` |
| 6 | `thm-real-complex-clifford-algebra-classification` |
| 7 | `thm-graded-clifford-modules-and-real-complex-types`; `ex-real-clifford-low-signature-models` |
| 8 | `ex-graded-clifford-module-types-in-low-dimensions` |

The A-page item list is ordered by these levels. The B-page’s three example records are in its examples inventory. The 100-item page cap is not close to binding.

## Sources and harvested-result disposition

The full source records, supported items, locators, recovery history, hashes, and per-result dispositions are in [batch-35.coverage.json](non-ml-math-remaining-81-2026-10-18-batch-35.coverage.json). All three full texts were inspected; 27 harvested results have dispositions. The retrieval check verified all three sources (0 newly stamped); no retrieval failed, so no `source_resolution` recovery entry was needed.

| Source | Read locator and use | Relevant disposition |
|---|---|---|
| [Jean Gallier, *Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions*](https://arxiv.org/pdf/0805.0311) | Full 46-page notes; §§1.1, 1.2, 1.6. Supports quaternion notation/division, grading, graded tensor product, low-dimensional models, recurrences, coefficient identities, and periodicity. | Included for the listed local items; PA-03 PBW was `out-of-scope` here because its actual supplier is in batch 34. Proposition 1.16’s printed right-factor order is not copied: the local map `$x\mapsto yx\bar z$` is multiplicative. |
| [Atiyah–Bott–Shapiro, *Clifford Modules*, Part I](https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf) | Complete 36-page article; §1, §4, §5. Supports the orthogonal-sum theorem, real/complex table, even-subalgebra module correspondence, and split-factor accounting. | PA-03 quotient/UP/PBW results were `out-of-scope` as duplicate ownership; PA-04 results were `included`. |
| [Konstantin Wernli, *Lecture Notes on Spin Geometry*](https://arxiv.org/pdf/1911.09766) | Full 108-page notes; §§1.4.1–1.4.2 and §§1.5.1–1.5.4. Supports even algebras, low-dimensional models, recurrences, coefficient tensor identities, classification, and module/chirality cases. | PA-04 items were `included`; the published simple-matrix-module theorem was `already-published`. Wernli’s recurrence proof is a sketch and the local recurrence proof is complete. Its opposite sign convention was translated. |

The citation-faithfulness screen emitted eight lexical candidates. Each was manually checked against its exact supplier statement; these were mathematical-notation matches, not widened claims. Gallier’s Proposition 1.16 right-factor order and apparent Lemma 1.15 factor-of-two dimension slip are not copied: the local tensor map is multiplicative with the conjugated right factor, and the dimension comparison uses `dim(H)=4`. The opposite Wernli convention is likewise translated rather than imported unchanged.

## Cross-batch prerequisites and affected claims

There are 22 direct logical edges from this batch to batch 34; the cross-batch ledger has exactly 22 matching item rows, with no missing or stale edge. All four supplier bodies and proofs were inspected. They remain drafts with no native Step-1 readiness/acceptance recorded, so their claims are not treated as accepted. The ledger records the exact source excerpts, hypotheses, fact labels, and current proof-step uses for each edge.

| Unresolved supplier | Required claim and hypotheses | Direct consumers in batch 35 |
|---|---|---|
| `def-clifford-algebra-of-a-quadratic-space` | Plus-square quotient `T_k(V)/J_Q` by the square relations; `k` a field of characteristic not 2, `V` finite-dimensional, `B` symmetric (possibly degenerate), `Q(v)=B(v,v)`. | `lem-clifford-even-subalgebra-signature-identification`; `lem-clifford-quotient-has-canonical-z2-grading`; `lem-clifford-zero-dimensional-algebra-is-base-field`; `lem-real-clifford-low-dimensional-models`; `lem-real-clifford-signature-recurrences-and-periodicity`; `thm-clifford-graded-tensor-product-for-orthogonal-sums`; `thm-graded-clifford-modules-and-real-complex-types`; `thm-real-complex-clifford-algebra-classification`. |
| `lem-clifford-polarized-relations` | The identity `bar(v)bar(w)+bar(w)bar(v)=2B(v,w)1` for the same finite-dimensional plus-square quotient over characteristic not 2; no nondegeneracy assumption. | `lem-clifford-even-subalgebra-signature-identification`; `lem-real-clifford-signature-recurrences-and-periodicity`; `thm-graded-clifford-modules-and-real-complex-types`. |
| `thm-universal-property-of-clifford-algebra` | A linear map into a unital associative `k`-algebra preserving `f(v)^2=Q(v)1` extends uniquely, with the same quotient hypotheses. | `lem-clifford-even-subalgebra-signature-identification`; `lem-real-clifford-low-dimensional-models`; `lem-real-clifford-signature-recurrences-and-periodicity`; `thm-clifford-graded-tensor-product-for-orthogonal-sums`; `thm-real-complex-clifford-algebra-classification`. |
| `thm-clifford-pbw-basis-and-associated-graded` | Ordered square-free monomial basis and dimension `2^dim(V)` for finite-dimensional `V`, characteristic not 2, and any symmetric `B`, including degenerate forms. | `lem-clifford-even-subalgebra-signature-identification`; `lem-real-clifford-low-dimensional-models`; `lem-real-clifford-signature-recurrences-and-periodicity`; `thm-clifford-graded-tensor-product-for-orthogonal-sums`; `thm-graded-clifford-modules-and-real-complex-types`; `thm-real-complex-clifford-algebra-classification`. |

The exact transitive open-supplier closure used for item-level escalation is:

| Item | Open supplier closure |
|---|---|
| `lem-clifford-quotient-has-canonical-z2-grading`; `lem-clifford-zero-dimensional-algebra-is-base-field` | `def-clifford-algebra-of-a-quadratic-space` |
| `lem-real-clifford-low-dimensional-models` | `def-clifford-algebra-of-a-quadratic-space`; `thm-universal-property-of-clifford-algebra`; `thm-clifford-pbw-basis-and-associated-graded` |
| `lem-clifford-even-subalgebra-signature-identification`; `lem-real-clifford-signature-recurrences-and-periodicity`; `thm-real-complex-clifford-algebra-classification`; `thm-graded-clifford-modules-and-real-complex-types`; `ex-real-clifford-low-signature-models`; `ex-graded-clifford-module-types-in-low-dimensions` | `def-clifford-algebra-of-a-quadratic-space`; `lem-clifford-polarized-relations`; `thm-universal-property-of-clifford-algebra`; `thm-clifford-pbw-basis-and-associated-graded` |
| `thm-clifford-graded-tensor-product-for-orthogonal-sums`; `cex-ordinary-tensor-product-fails-for-clifford-orthogonal-sums` | `def-clifford-algebra-of-a-quadratic-space`; `thm-universal-property-of-clifford-algebra`; `thm-clifford-pbw-basis-and-associated-graded` |

The direct claims remain present in the drafts. The missing native readiness is an owner-reconciliation blocker; planned interfaces and the batch-34 body are not approvals.

## Step-1 decisions

`node tools/step1-decisions.mjs record` was used without `--owner` for all 16 items. Five records are `ready`: `def-clifford-graded-algebra-module-and-tensor-product`, `def-real-quaternion-matrix-algebra-notation`, `lem-real-quaternions-form-a-division-algebra`, `thm-graded-module-classification-from-even-subalgebra`, and `lem-real-division-algebra-tensor-identities`. Eleven records are `escalated` because of the open supplier closure above. All 16 record hashes were rechecked against the current item/dependency inputs. These are authoring-readiness records only, not independent proof approval.

For audit clarity, the CLI escalation reasons state the batch-wide four-supplier set; the exact narrower per-item transitive closure is the table immediately above, and direct uses are itemized in the cross-batch ledger. Existing escalation records were not overwritten.

## Scoped checks and blockers

| Check | Result |
|---|---|
| `proof-layout.mjs` on the 16 assigned item files | Pass: 16 items, 58 numbered steps, 0 defects. |
| `precheck.mts` on the 16 assigned item files | Pass: 14 proof-bearing items checked, 0 failing; two definitions not applicable. |
| `rendercheck.mjs` on the 16 assigned items and both draft page files | Pass: 18 files, 0 errors, 0 warnings. The A-page TikZ generator diagram is explained in prose; no proof relies on it. |
| Scoped `depcheck.mjs` | Pass: 16 selected items; dependency closure 369 items/110 pages; 0 errors and 0 warnings. |
| Strict proof contract | Pass: 16/16 items, 58 actual derivations, 73 exact supplier excerpts; 0 errors/warnings. |
| Citation fidelity | Pass: 73 citations, 0 missing quotes, 0 widening candidates. |
| Coverage checklist | Pass: 1 page, 27 harvested results, 0 errors/warnings. |
| `source-fetch-check.mjs --stamp` | Pass: 3/3 full texts verified and resolved; 0 new stamps. |
| Full-run item levels | Batch-35 levels match the recomputed full graph. The global check still exits nonzero on empty inventories and stale/missing levels in other batches; no batch-35 level error was reported. |
| `batch-dependency-levels.mjs check --run …` | Blocked before hash comparison by malformed YAML in the out-of-scope item `items/thm-parallel-awgn-feedback-capacity-water-filling.md`: its unquoted source title contains `Information Theory:` (reported as nested mappings not allowed at line 17, column 14). Shared scheduling state was not edited. |

The global item-level check also reports empty inventories and level-label defects in other batches. Those pages and their shared scheduling evidence are outside this assignment and were left untouched. The batch-level checker’s YAML failure prevents this batch from independently confirming the run-wide batch scheduling hash.
