# frontier-16 Alpha group b — step 6b adjudication

Run: `frontier-16`  
Group: `b`  
Batches: 2 and 5  
Pages: `areas-of-elementary-plane-figures`, `improper-and-parameter-dependent-multiple-integrals`, `measures-and-their-basic-properties`, and their companions

## Reader assignments and coverage

`reader-2` was a fresh `reader` dispatch distinct from `beta-author-batch-2`; `reader-5` was distinct from `beta-author-batch-5`. Neither assignment violates the scaffold/author exclusion.

- `research/frontier-16-reader-2.md`: complete. It opened every one of the 42 originally dispatched items, all 110 original proof steps, 146 original Fact citations, 280 original boundary rows, all provenance pairs and all page bodies. After two withdrawals, it reread the 40-item final scope and its 33 proofs.
- `research/frontier-16-reader-5.md`: complete. It opened all 59 scoped items, all 44 proofs, every Fact citation and boundary row, both page bodies, all provenance pairs, and 41 additional dependency files.

I reopened every item implicated by a reader finding, the exact dependency clauses used by its repaired Facts, the current manifests and contracts, all six page files, and all source harvests. The two A-page summaries each contain exactly two nonempty prose paragraphs below 150 words; every B page has frontmatter only.

## Reader findings adjudicated

Every reader finding below was confirmed from the quoted old defect and the repaired disk text. `confirmed_nonfatal` includes the reader's four batch-2 polish rows under the 30-second rule. `R5-13` was explicitly withdrawn by the reader after direct schema inspection and is not a finding.

| source | item/page | outcome | Alpha disposition |
|---|---|---|---|
| R2-1 | `lem-simple-polygon-has-an-interior-diagonal` | confirmed fatal | The definition of a diagonal did not license local sidedness, the intervening-vertex claim or containment of the constructed segment. Accepted withdrawal; source rows now defer the frugal result to the later polygonal-separation development. |
| R2-2 | `thm-simple-polygon-admits-a-triangulation` | confirmed fatal | The original diagonal did not license the asserted split into smaller polygonal regions. Accepted the complete constructive rewrite by generic projection, vertical bands, common wall refinement and triangle subdivision. |
| R2-3 | `cor-simple-polygon-triangulation-has-n-minus-two-triangles` | confirmed fatal | The claim is false for the repaired general triangulation convention and its frugal proof was unsupported. Accepted withdrawal and durable deferral. |
| R2-4 | `thm-triangle-content-and-base-height-formula` | confirmed fatal | The title omitted the nonzero chosen-side hypothesis. Accepted the narrowed title in the item and manifest. |
| R2-5 | `lem-uniform-tail-control-for-dominated-improper-multiple-integrals` | confirmed fatal | The Statement omitted the open domain, map type and local-integrability hypotheses, and the proof lacked exhaustion and signed-limit inputs. Accepted the repaired Statement, Facts, proof and contract. |
| R2-6 | `areas-of-elementary-plane-figures` | confirmed fatal | The summary misattributed graph/Jordan agreement and the disc value to translation invariance. Accepted the repaired progression and vertical-decomposition description. |
| R2-7 | `thm-continuity-of-dominated-parameter-dependent-improper-integrals` | confirmed fatal | Fact L1 was only an opening slogan and omitted every quantified tail hypothesis and estimate. Accepted the faithful Fact and exact contract clause. |
| R2-8 | `thm-differentiation-under-dominated-improper-multiple-integrals` | confirmed fatal | Facts L2/L3 omitted the tail estimates and continuity/domination hypotheses actually used. Accepted the faithful Facts plus the written exhaustion-linearity and slice-integrability steps. |
| R2-9 | `cex-differentiation-under-an-improper-integral-without-domination` | confirmed fatal | The proof used a contrapositive of a truncated sufficient theorem, so it had not isolated domination as the failed hypothesis. Accepted the full theorem clause and verification of every other hypothesis. |
| R2-10 | `ex-scaled-gaussian-parameter-integral` | confirmed fatal | Fact L2 omitted the conditions licensing differentiation. Accepted the complete clause and compact-parameter Gaussian-polynomial dominator check. |
| R2-11 | `thm-open-subsets-of-rn-admit-jordan-exhaustions` | confirmed nonfatal | The rational-code bridge was omitted. Accepted the explicit endpoint perturbation inside two positive compact margins. |
| R2-12 | `thm-absolute-improper-multiple-integral-by-exhaustion` | confirmed nonfatal | Proper monotonicity was used but not stated. Accepted the Fact and contract update. |
| R2-13 | `thm-differentiation-under-dominated-improper-multiple-integrals` | confirmed nonfatal | Proper linearity alone did not state the improper difference-quotient identity. Accepted the absolute-exhaustion dependency and the one-exhaustion passage. |
| R2-14 | `lem-plane-gaussian-integral-in-polar-coordinates` | confirmed nonfatal | Product integration, the chain rule, the square derivative and exponential normalization were missing inputs. Accepted all exact Facts and contract entries. |
| R2-15 | `thm-simple-polygon-content-is-the-sum-of-triangle-contents` | confirmed nonfatal | Singleton and empty intersections used content-zero monotonicity without a Fact. Accepted `def-null-and-content-zero-in-rn` as the real edge. |
| R2-16 | `cex-differentiation-under-an-improper-integral-without-domination` | confirmed nonfatal | The value `integral exp(-u)=1` was left unevaluated. Accepted the explicit antiderivative, normalization and limit. |
| R2-17 | `cor-disc-jordan-content-is-pi-r-squared` | confirmed nonfatal | The choice boundary row described a nonexistent shrinking-square construction. Accepted the fixed no-selection disposition. |
| R2-18 | `thm-nonnegative-improper-multiple-integral-by-exhaustion` | confirmed nonfatal | The one-boundary row falsely said a strictly nested nonempty exhaustion stabilizes. Accepted the actual one-dimensional check. |
| R2-19 | `thm-absolute-improper-multiple-integral-by-exhaustion` | confirmed nonfatal | The same false stabilizing-exhaustion rationale recurred. Accepted the positive/negative-part boundary check. |
| R2-20 | five batch-2 citation rows | confirmed nonfatal | Quotes ended at an introductory clause, colon or dangling pronoun. Accepted the complete operative clauses; citation fidelity passes 155/155. |
| R2-21 | batch-2 manifest records | confirmed nonfatal | The manifest disagreed with final titles/dependencies and retained the two withdrawn ids. Accepted all 40 surviving rows and applied `splice-plan --update` for batch 2. |
| R5-1 | `thm-finite-inclusion-exclusion-for-measures` | confirmed fatal | The induction coefficient was off by one. Accepted `(-1)^{|J|+2}=(-1)^{|J union {r+1}|+1}` and the synchronized proof/contract inputs. |
| R5-2 | `def-completion-of-a-measure-space` | confirmed fatal | The title called the proposed domain a sigma-algebra before the choice-dependent closure lemma and well-definedness result. Accepted the domain/proposed-function title. |
| R5-3 | `lem-completion-domain-is-a-sigma-algebra` | confirmed fatal | The title omitted countable choice, and a load-bearing nullity expression wrote `mu` instead of `mu`. Accepted the explicit hypothesis and corrected notation. The defect ledger records these as two defects under the one reader finding. |
| R5-4 | `thm-completion-of-a-measure-space` | confirmed fatal | The title omitted countable choice. Accepted the scoped title in the item and manifest. |
| R5-5 | `ex-completion-of-borel-dirac-measure` | confirmed fatal | The generated example title omitted Choice although its theorem and cardinality route use it. Accepted the scoped title. |
| R5-14 | batch-5 citation contracts | confirmed fatal | Numerous source clauses were openings, dangling `Then` clauses or unrelated tails. Accepted complete exact Definition/Statement sections for all 194 final citations. |
| R5-6 | `thm-tonelli-for-nonnegative-double-series` | confirmed nonfatal | The transposed argument omitted an earlier step and the finite simultaneous approximation omitted finite choice. Accepted both inputs and canonical renumbering. |
| R5-7 | `prop-measure-of-a-set-difference` | confirmed nonfatal | Two steps omitted the decomposition and given finiteness inputs. Accepted the tags and contract map. |
| R5-8 | `prop-counting-measure-is-a-measure` | confirmed nonfatal | The finite-union identity was omitted, and an upper index bound was not strict. Accepted the step citations and one-more-than-the-maximum endpoint. |
| R5-9 | `cor-dominated-convergence-for-sets` | confirmed nonfatal | The proof used `E subset D` without deriving it. Accepted the eventual-membership derivation and squeeze input. |
| R5-10 | `lem-completed-measure-is-well-defined` | confirmed nonfatal | Null-union and null-subset closure lacked an input. Accepted the sigma-ideal dependency, Fact and contract row. |
| R5-11 | `thm-completion-of-a-measure-space` | confirmed nonfatal | The uniqueness step invoked finite additivity on a possibly nondisjoint representation. Accepted replacement of `N` by `N minus A`. |
| R5-12 | `thm-semifinite-and-zero-infinity-decomposition` | confirmed nonfatal | A countable-union Fact was cited as though it stated the zero-infinity function was a measure. Accepted the inline empty-set and countable-additivity case split. |
| R5-15 | `thm-semifinite-part-is-a-measure` | confirmed nonfatal | The finite initial-range approximants used finite choice without recording it. Accepted the dependency, Fact, manifest strategy, proof tag, contract and boundary update. |

The machine counterpart is `research/frontier-16-alpha-b-6b-findings.json`: 35 adjudicated reader findings, 16 `confirmed_fatal` and 19 `confirmed_nonfatal`.

## Refuter reports and dispositions

The canonical `tools/dispatch.mjs --role refuter` calls were attempted first with the three task files in `research/`. All three failed before producing mathematical output because the sandbox denied both WebSocket and HTTPS transports; their result files in `research/frontier-16-dispatch/` record the transport failure. No escalation was requested.

The available in-session subagent runtime exposes no sandbox selector, so the repository's fallback rule was used: each prompt strictly forbade writes, fixes and permission requests. No refuter changed the tree.

- `refute_b2_areas`: no findings. Complete coverage of the 21 current pair items, all 17 proofs, 47 derivations, 52 Fact citations and 136 boundary rows; every direct dependency was opened, and all generated finite constructions were recomputed.
- `refute_b2_improper`: no findings. Complete coverage of all 19 pair items and 16 proofs; every cited Fact target was opened, both generated improper-integral witnesses were recomputed, and exhaustion, parameter, seam and endpoint boundaries were checked.
- `refute_b5_measures`: no findings. Complete coverage of all 59 pair items and 44 proofs, 199 contracted derivations and 194 citations against 76 cited internal items; all generated constructions were directly checked.

Because there was no refuter finding, the machine findings file has no `F2A`, `F2I` or `F5` row to adjudicate.

## High and critical risk review

Every high/critical item routed by `risk-report.mjs` has a complete Alpha `risk_review` in its owning batch contract, with the relevant refuter named and concrete notes about the checked inference and boundary. Batch 2 has 24 routed high/critical proofs after the two withdrawals; batch 5 has 32. The reviews cover:

- area: translation, graph/Jordan agreement, bounded-set refutation, determinant/base-height formulas, collinearity, polygon content, shoelace cancellation and the generated collinear example;
- improper integration: rational-coded exhaustions, nonnegative and signed exhaustion limits, uniform tails, continuity, differentiation, content-zero modification, all Gaussian stages, and all four companion constructions;
- measures: Tonelli, subadditivity and monotone continuity, counting measure, inclusion-exclusion, set limits, completion, weighted/atomic measures, semifinite machinery, uniqueness counterexamples and all companion constructions.

Both `risk-report --require-reviewed` invocations pass. The batch-2 boundary detector initially routed the shoelace empty-sum row: the Statement requires `n>=3`, so Alpha changed the truthful disposition from `not_applicable` to a checked exclusion against that hypothesis. The strict boundary gate now passes.

## Harvest faithfulness

The source inventories were checked against extracted full text at every recorded locator, not against HTTP status:

- the area harvest matches Trench §7.2–§7.3, Taylor §3.1, ETH Chapter 4 §§4.1–4.2 through Exercise 4.17, and Erickson §1.4;
- the improper-integral harvest matches Guillemin §§3.7–3.8, Taylor §3.1 and Trench §§2 and 7;
- the measure harvest matches Axler §2C plus 12.1/12.6, Folland §1.3 through Exercises 6–16, Tao's Notation and §1.4.3 ranges plus Exercises 1.4.35/1.4.44, Pollard §10 and Galvin §2.

The area checklist's 5/50 low-yield warning is honest: the remaining rows are already-published Jordan/linear-change results, source-specific calculations, three-dimensional tetrahedralization material, computational algorithms, or the frugal diagonal/count results whose polygonal-separation/Euler inputs are on a later topic page. The weakened face-to-face triangulation remains proved locally. The improper and measure harvests contain the standard development and no unexplained decline. All three pairs have multiple independent treatments with textbook, monograph or full-note primary backing.

## Provenance, generated claims and page prose

Every in-scope mathematical item carries separate component provenance. Reader proof repairs remain `ai-altered`; narrowed source-backed titles/Statements remain faithful to their cited literature conventions; generated examples remain `ai-generated` and non-load-bearing. All literature-derived or AI-altered items carry reader-visible reference URLs.

The generated area, improper-integral and measure constructions were independently recomputed by reader, Alpha and refuter. No counterexample or false witness was found, and no generated Statement is a dependency target. No changed item carried a `verification.judge` block, so no stale judge stamp remained to delete.

All A summaries satisfy the exact two-paragraph shape and dependency/progression order. All B pages have no authored body. Prose and render checks on the six pages are clean.

## Files, plan changes and twice-touched status

Accepted reader changes are exactly those listed in the two reader reports. Batch 2 withdrew two unmerged ids and replaced one full proof; batch 5 added or deleted no item. Alpha added no mathematical result and therefore authored no new proof.

Alpha changed:

- `research/frontier-16-batch-2.proof-contracts.json`: 24 risk reviews plus the checked shoelace empty-family disposition;
- `research/frontier-16-batch-5.proof-contracts.json`: 32 risk reviews;
- `research/plan-spec.json`: licensed `splice-plan --update` refreshes for batches 2 and 5, including deletion of the two withdrawn polygon ids;
- `research/defect-ledger.jsonl` and generated `research/DEFECT-LEDGER.md`: 37 step-6 defect rows;
- this report and `research/frontier-16-alpha-b-6b-findings.json`.

`research/frontier-16-touches.json` currently contains only the engine's `pre-author` snapshot, so `touchlog report` cannot yet measure the author-to-reader repair count: first appearances are not repairs. No item is known from the available reports to have been repaired in two separate post-author passes, but the lead/engine must take the post-6b snapshot before treating the twice-touched set as measured.

## Consolidated fatal-error ledger

The append-only ledger has one row per defect. The 16 fatal reader findings comprise 17 defects because R5-3 bundled a false title and an undefined load-bearing symbol:

- Invalid proof inference: `lem-simple-polygon-has-an-interior-diagonal` deferred; `thm-simple-polygon-admits-a-triangulation` proof replaced.
- Arithmetic error: `thm-finite-inclusion-exclusion-for-measures` sign repaired.
- False or overstrong Statement/title: `cor-simple-polygon-triangulation-has-n-minus-two-triangles` deferred; titles repaired on `thm-triangle-content-and-base-height-formula`, `def-completion-of-a-measure-space`, `lem-completion-domain-is-a-sigma-algebra`, `thm-completion-of-a-measure-space`, and `ex-completion-of-borel-dirac-measure`.
- Missing hypothesis: `lem-uniform-tail-control-for-dominated-improper-multiple-integrals` Statement and proof repaired.
- Truncated dependency citation: Facts repaired in `thm-continuity-of-dominated-parameter-dependent-improper-integrals`, `thm-differentiation-under-dominated-improper-multiple-integrals`, `cex-differentiation-under-an-improper-integral-without-domination`, and `ex-scaled-gaussian-parameter-integral`; the batch-5 contract citation class was rewritten.
- Undefined notation: `lem-completion-domain-is-a-sigma-algebra` now uses the measure symbol correctly.
- Page-summary attribution: `areas-of-elementary-plane-figures` now separates translation invariance, graph/Jordan agreement and the disc theorem.

Every fatal defect is fixed, withdrawn or durably deferred; none remains open in batches 2 or 5.

## Gate record and remaining gaps

Passing batch-scoped checks after Alpha's updates:

- proof contract: batch 2 33/33, batch 5 44/44;
- citation fidelity: batch 2 155/155, batch 5 194/194, no missing quote or widening candidate;
- boundary audit: 264 and 352 rows, no template reuse or contradicted disposition;
- risk routing: 0 missing review in either batch;
- content policy: 40 batch-2 and 59 batch-5 items, no error or warning;
- coverage checklist: 176 harvested rows, no error; one adjudicated low-yield warning;
- all six page files: exact summary/body contract and clean prose.

The plan splice was applied for both batches, and `manifest-integrity` reports all 22 owed pages present. A whole-level `splice-plan --verify` run after these updates reports four remaining page mismatches, all in batch 1; none is in group b's six pages. That batch remains another Alpha's owned repair and is the current whole-level integration red.

Cross-batch/cross-level edge audit, the impact receipt, the whole-level merged contract and snapshots belong to lead Alpha/engine at 6c and are intentionally not claimed here.

No mathematical or source-faithfulness concern remains open in this group's batches. The only operational caveat is the failed canonical refuter transport; the fallback refuters completed the same read-only mathematical scope without writing.
