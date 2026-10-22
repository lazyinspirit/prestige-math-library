# Batch 50 notes — measurement compatibility, dilation and identifiable tomography

Run: physics-non-fluid-129-2026-10-21-r2  
Batch: 50  
Owner scope: nrqmx-measurement-compatibility and its examples page

## Plan and scope reconciliation

The assigned task, plan-track section at line 349, detailed prose design, inventory, current plan, and the empty batch-50 scaffold agree on the A/B page identities, title, category, library, prerequisite pages, and the five planned A items plus two B examples. The current canonical plan row intentionally has an empty item inventory before Step 1 construction; it does not conflict with the detailed inventory. The optional run-local owner-authoring-direction file is absent.

The A page requires qm-math-composites and qsm-dt-channels. The B page requires the A page. Batch 50 is dependency level 0 and has no in-run supplier page. All A and B claims remain mathematical, finite-dimensional, and conditional; no laboratory realization, empirical outcome, or physical postulate is asserted.

Three A-page prerequisites were authored locally because the planned tomography claims need them explicitly:

- def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse defines the real Hermitian frame, Gram matrix, Moore–Penrose inverse convention, canonical dual, and reconstruction map.
- lem-nrqmx-finite-hermitian-trace-inner-product proves the trace pairing and Gram map are well-defined with the stated real inner-product conventions.
- lem-nrqmx-frame-pseudoinverse-reconstruction proves the canonical dual reconstructs every Hermitian matrix even when the measurement frame is redundant.

The inventory listed thm-qsm-dt-choi-kraus as a dependency of the tomography procedure. Its inspected Statement and Proof classify finite completely positive maps by Kraus and Choi representations; they do not define a finite POVM, a real Hermitian frame, or the frequency-inversion procedure. The procedure therefore depends on the local frame definition and the exact finite POVM/instrument interface from lem-nrqm-composites-finite-effects-and-instruments. The tomography theorem also names the frame-reconstruction lemma and finite POVM probability interface used in its proof. This is a mathematical dependency correction within the assigned A page; no shared plan was edited.

The sharp joint-measurability proof adds lem-qsm-matrix-state-calculus for the finite positive square-root argument. The instrument dilation uses the finite-channel definition and Choi–Kraus theorem; its CP-map family and outcome labels are defined in its own Statement, so it does not depend on the separate Kraus-instrument interface lemma. The Bernoulli tail proof specializes the inspected, choice-free bounded-variable MGF lemma and proves the product-moment factorization, Markov step, optimization, and union bound locally.

## Supplier inspection

The current qsm-dt-channels page is published. I read the complete current thm-qsm-dt-choi-kraus Statement and Proof, its complete positivity/trace-preserving definition, the finite trace-cyclicity lemma, and the finite spectral/state-calculus lemma. The Choi supplier uses its explicitly stated input-reference tensor output convention and applies to maps M_d(C) to M_e(C), with finite Kraus length at most de; trace preservation is equivalent to the sum of Kraus adjoint products being the input identity. The instrument construction uses only those abstract finite-map conclusions.

The current qm-math-composites page is published. I read the complete current lem-nrqm-composites-finite-effects-and-instruments Statement and Proof. It defines finite effects, POVMs, normalized Kraus instruments, outcome effects, outcome maps, probabilities, and conditional updates. The finite-dimensional trace and positivity arguments are explicit in that carrier. Its read proof status is not replaced by this batch note.

The local frame setup also uses the published mathematical originals def-moore-penrose-pseudoinverse, thm-moore-penrose-pseudoinverse-exists-and-is-unique, thm-singular-value-decomposition, and thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces. Their actual statements and proofs were inspected. The finite matrix pseudoinverse and norm calculations add no choice assumption. The Bernoulli item uses lem-bounded-variable-hoeffding-mgf, whose actual full proof states that it is choice-free; this avoids inheriting the Axiom of Choice from the broader independent-bounded-sums theorem.

The current-run Step 1 readiness lookup for the two direct page suppliers returned no records because they are external to this run. Their actual published carriers and complete relevant proofs were inspected. No missing supplier argument or unsupported input was found, so neither external supplier was escalated.

## Source reading and harvest

The source URLs, exact locators, supported items, each harvested result and its included/inline/already-published/out-of-scope disposition are recorded in physics-non-fluid-129-2026-10-21-r2-batch-50.coverage.json. The treatments include Watrous’s textbook chapter and Cleve’s full Waterloo course notes, plus the specialized Heinosaari–Reitzner–Stano joint-measurability paper, Turkeshi–Heinrich’s tomography lecture notes, and Panchenko’s complete three-page MIT lecture note.

The relevant full-text ranges were inspected: Watrous Chapter 2 §§2.2.2 and 2.3.3; Cleve Chapter 3 §§3.3.1–3.3.2 and 3.4–3.5; Heinosaari–Reitzner–Stano §2 and Appendix Proposition 8; Turkeshi–Heinrich §3.1 including equations (3.1)–(3.9) and Exercise 3.1; and all three pages of MIT Lecture 07. The MIT short-document reading receipt binds the exact PDF SHA-256 in the coverage file.

The official Preskill Physics 229 PDF timed out on the initial open and one retry after an alternative-source search. Cleve’s full 104-page Waterloo course notes were found and successfully opened; their complete relevant measurement, Kraus, and Stinespring sections were read. The failed Preskill candidate is preserved in the coverage source-resolution history, is not cited as a read source, and leaves no selected-source gap.

The final source-fetch-check stamp completed successfully: 8/8 source entries fetch-verified, with no documented drops. The independent A-page treatment threshold is met by the textbook and course notes; the specialist treatments add focused support for compatibility, tomography, and finite-sample concentration.

## Item inventory and levels

| Item | Page | In-run dependencies | Level | Argument / use |
|---|---|---:|---:|---|
| def-nrqmx-finite-hermitian-frame-and-gram-pseudoinverse | A | none | 0 | Defines the real frame, Gram, pseudoinverse, and canonical dual interface. |
| lem-nrqmx-bernoulli-hoeffding | A | none | 0 | Choice-free Bernoulli tail specialization from the bounded-variable MGF supplier. |
| thm-nrqmx-instrument-stinespring-register | A | none | 0 | Choi–Kraus each outcome; combine labels into an isometry and outcome projections. |
| thm-nrqmx-sharp-joint-measurability | A | none | 0 | Construct products for commuting PVMs; prove converse by positive support and marginals. |
| lem-nrqmx-finite-hermitian-trace-inner-product | A | frame definition | 1 | Proves trace-pairing well-definedness and Gram positivity. |
| alg-nrqmx-linear-tomography-procedure | A | frame definition and real-trace setup | 2 | Specifies the finite Gram pseudoinverse and linear-inversion steps. |
| lem-nrqmx-frame-pseudoinverse-reconstruction | A | frame definition and real-trace setup | 2 | Proves exact reconstruction for a spanning, possibly redundant frame. |
| thm-nrqmx-tomography-identifiability-stability | A | algorithm, frame reconstruction, trace inner product, Bernoulli bound | 3 | Proves exact/deterministic reconstruction and the stated IID union-bound guarantee; directly cites the real trace inner product, Cauchy–Schwarz, and real completeness to establish the induced norm. |
| cex-nrqmx-same-povm-distinct-disturbance | B | instrument dilation | 1 | Exact qubit Kraus counterexample with equal effects and unequal updates. |
| ex-nrqmx-pauli-tomography | B | tomography theorem, frame reconstruction, frame definition | 4 | Exact Gram spectrum, canonical dual, Bloch reconstruction, and nonpositive output example. |

The levels use zero for suppliers outside the current run and one plus the maximum level among in-run item suppliers. The batch dependency level remains 0. The current in-run page and item dependency graph is acyclic. There are no cross-batch item or page edges, so the required batch-50 cross-batch dependency file is the empty JSON array.

Each item’s complete declared dependencies and proof route are also recorded in the coverage file’s source-resolution item map. The three locally added frame items are marked inventory expansions in the batch manifest; all five planned A results and both B leaves are retained.

## Readiness and remaining evidence

## Final scoped checks

- `content-policy.mjs ...batch-50.pages.json --manifest-only --authored`: 10 items, 0 errors, 0 warnings.
- `proof-contract.mjs ...batch-50.proof-contracts.json --strict`: 10/10 items checked, 0 errors, 0 warnings. All eight proof-bearing items have step-level derivations and all ten items have supplier excerpts and boundary dispositions.
- `coverage-checklist.mjs ...batch-50.coverage.json --require-destination`: both pages and all 20 harvested results checked, 0 errors. It reports a low-yield warning because five of 16 A-page harvested results became items; the remaining results are explicitly recorded as inline, already published, or out of scope with item-specific reasons.
- `source-fetch-check.mjs --coverage ...batch-50.coverage.json`: 8/8 sources fetch-verified and resolved, with 0 drops.
- `depcheck.mjs --items-file /tmp/b50-items.json`: 10 selected items and their prerequisite cycle checks passed; 1,532 items and 494 pages were in the selected dependency context.
- `rendercheck.mjs` on the 10 items and both pages: 12 files, no math or frontmatter errors.
- `proof-layout.mjs` on the eight proof-bearing items: 8 items, 28 proof steps, 0 defects.
- The scoped two-page `dependencyLevels` calculation checked all 10 items with 0 errors. The levels are 0 for the four no-in-run-supplier A items, 1 for the trace-inner-product lemma and B counterexample, 2 for the tomography algorithm and frame-reconstruction lemma, 3 for the tomography theorem, and 4 for the Pauli example. Batch 50's current page prerequisite graph remains level 0 with no in-run supplier batch.
- The run-wide `proof-contract-coverage.mjs --run ...` check cannot load the full frontier because another run page, `emx-paraxial-optics`, has an empty scaffold inventory. Batch 50's own strict proof-contract check passes. The run-wide `item-dependency-levels.mjs check --run ...` likewise reports empty scaffold inventories in other batches; the scoped calculation for this batch passes.
- The shared batch-dependency-levels file is owner-managed and was not rewritten by batch 50. The final full recomputation and file check pass; batch 50 is at level 0 with `requires: []` and no in-run page prerequisite.

## Step 1 readiness

The non-owner Step 1 readiness command recorded each of the 10 items `ready` after checking its current dependencies, placement, and matching contract. The readiness hashes bind the final item and manifest inputs. These records confirm authored prerequisite readiness and are not independent proof approval. The batch remains draft.
