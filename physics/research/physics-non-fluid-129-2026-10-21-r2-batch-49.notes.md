# Batch 49 authoring notes

## Scope and plan comparison

- Authored only the assigned A/B pair: nrqmx-weyl-galilei-representations and nrqmx-weyl-galilei-representations-examples.
- Read the complete assigned design section in research/frontier-expansion-2026-10-19/non-relativistic-quantum-mechanics/prose-scaffold.md and its matching inventory.json entry. The requested owner-direction file research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md is absent.
- The matching A/B rows in research/plan-spec.json have the assigned order, titles, category, library, companion, and page prerequisites, but both have items: []. The detailed inventory supplies the six item IDs, statements, routes, and dependencies mirrored into this batch manifest. There is no title or prerequisite-page conflict.
- The design describes the imported finite-dimensional Stone–von Neumann item as draft planning evidence. The current imported item is status published; its import receipt pins SHA-256 62cd493686549a8a2012f13b588a0114706aa36dbbdd077f0c13517064699a18. I read its full current proof and matched its actual assumptions: AC, finite-dimensional real symplectic phase space, nonzero fixed parameter, regularity, and irreducibility. This is a status discrepancy in the design description, not a proof gap.
- The original CEX inventory edge to thm-nrqmx-finite-weyl-uniqueness-interface was removed. The counterexample is proved directly for arbitrary finite matrices by expanding both finite trace sums and reindexing; it neither uses nor needs Weyl-system uniqueness. No prerequisite was hidden or weakened.
- The boost theorem directly depends on the published lem-schrodinger-weyl-system-is-regular-and-irreducible. Its claim that the displayed canonical model itself is regular and irreducible needs that exact supplier; equivalence of an arbitrary input system alone would not establish this fact. The full supplier proof was inspected.
- The source definition of unitary representation includes strong continuity, and the assigned design specifically calls for it. The boost statement and proof now establish strong continuity on a dense smooth core and extend it by unitarity. The exact current suppliers are the complex C_c-infinity density lemma, real compact-support translation-continuity lemma, complex/real test-function conventions, and dominated-convergence theorem; their statements and full direct proofs were inspected. These remain external dependencies, so the boost item stays at in-run level one.
- The spin item includes a TikZ commutative diagram for the proved projective descent. The text states exactly what the arrows mean and that the proof does not rely on the diagram.

## Item dependencies and levels

Levels were computed from the six-item batch inventory before carrier authoring. External suppliers do not increase in-run levels.

| Item | In-run suppliers | Level |
|---|---|---:|
| thm-nrqmx-finite-weyl-uniqueness-interface | none | 0 |
| thm-nrqmx-boost-translation-cocycle | thm-nrqmx-finite-weyl-uniqueness-interface | 1 |
| thm-nrqmx-spin-cover-projective-rotations | none | 0 |
| thm-nrqmx-finite-superselection-algebra | none | 0 |
| ex-nrqmx-boost-interferometric-phase | thm-nrqmx-boost-translation-cocycle | 2 |
| cex-nrqmx-finite-matrix-ccr | none | 0 |

The independent scoped calculation over the batch manifest returned six items, levels 0, 1, 0, 0, 2, 0, and no cycles or level mismatches. The run-wide dependency command also inspects unassigned scaffolds and reports unrelated empty inventories (for example emx-premetric-maxwell); no outside page was edited to clear those blockers.

## Supplier/readiness checks

- For every direct supplier used in the six items, I inspected its current statement and complete proof where proof-bearing, including the imported Stone–von Neumann theorem, finite spin-block theorem, SU(2) cover example, nuclear bounded-cyclicity lemma, complex L² Hilbert-space lemma, translation/measure invariance results, integral invariance, modulus laws, unitary-representation definition, canonical Schrödinger Weyl-system lemma, dense smooth-vector lemma, compact-support translation-continuity lemma, and dominated-convergence theorem. The density supplier's actual hypotheses include Countable Choice, the complex-valued case, open domain, and finite dimension; these match d≥1 and the declared complex L² space here.
- Every direct external supplier presently has status published. loadStep1Record/step1Decision still report missing current-run readiness records for them because they are outside this run’s item inventory; that result is not treated as a mathematical gap. Their current statements, assumptions, and proofs were inspected directly. Draft status or missing independent approval is not used to escalate a supplier.
- The batch items are proved conditionally from their listed, inspected dependencies. The mass-phase calculation is not presented as a physical superselection law. The trace-functional result is relative to its declared block-diagonal algebra. The two-arm example is an exact overlap calculation in its defined path model and asserts no experimental observation.

## Full-text source record

The coverage file records eight full-text sources, exact locators, source headings, supported items, read extents, qualifications, and a disposition for each harvested result. The independent treatments include the full Speicher lecture notes, Bongaarts and Binney–Skinner textbooks, and MIT course notes. The source-fetch checker stamped all eight active URLs; no source was dropped.

Retrieval history is preserved in the coverage file. Knapp’s earlier author-site URL returned HTTP 404; the current author-hosted clickable second-edition PDF was found and read. An optional Strocchi candidate returned HTTP 403; the accessible NDL candidate was identified as Bongaarts and is cited under its verified author/title, not as Strocchi. Knapp Problem 5 states trace cyclicity as an exercise, not a proof; the batch relies on the separate published local bounded-cyclicity lemma, and the finite-matrix CEX supplies its own finite-sum proof.

## Scoped check record

Final scoped checks passed on the current carriers:

- Normative phase precheck: 6 items, 0 failures.
- Author check: passed precheck, rendercheck (8 files, real KaTeX and renderer YAML), content policy (6 items, 0 errors/warnings), and strict proof contract (6 items, 0 errors/warnings). Receipt: research/physics-non-fluid-129-2026-10-21-r2-author-check-49.json.
- Proof layout: the six-item final scope scan checked 23 numbered steps with 0 defects; after the last path-model wording edit, the explicitly changed example was rerun (1 item, 2 steps, 0 defects).
- Focused depcheck: all 6 assigned items and their dependency closure checked; 0 errors and 0 warnings.
- Scoped item-level dependency calculation: 6 items, levels 0, 1, 0, 0, 2, 0; 0 cycles or level mismatches.
- Proof-contract strict validation: 6/6 item entries checked, 0 errors and 0 warnings.
- Source-coverage checklist: 1 A page, 20 harvested source results, 0 errors and 0 warnings. Source-fetch check: all 8 active URLs verified, 0 drops.
- Page capacity is 4 A items and 2 B items, below the 100-item cap. The cross-batch dependency input is the required empty JSON array because this batch has no declared in-run cross-batch item or page edge; the B-to-A companion edge is within batch 49.
- Step 1 readiness records for all 6 assigned items are current and each reopens as ready with dependencies matching its item frontmatter.

Two run-wide tools remain blocked by unassigned empty scaffold inventories. item-dependency-levels.mjs check --run reports multiple outside-batch empty inventories, including emx-premetric-maxwell. proof-contract-coverage.mjs --run ... --contracts ... stops at emx-paraxial-optics: Empty or invalid frontier page inventory. That tool has no batch-selection option. The batch-local level calculation, author check, and strict proof contracts all pass; no outside page was edited.

All six assigned items have current Step 1 ready records with dependency lists matching their authored frontmatter. No assigned item is escalated. These are authoring-readiness records only; independent review and publication remain later gates.
