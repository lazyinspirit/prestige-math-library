---
id: "def-spectral-sequence-computation-record"
kind: "definition"
title: "Spectral-sequence computation record"
deps: ["def-collapse-at-a-page", "def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence", "thm-a-first-quadrant-filtered-complex-spectral-sequence-converges-to-filtered-homology"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Weibel, Sections 5.2-5.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
---

## Definition

A **spectral-sequence computation record** consists of the following mathematical data and justifications, in the stated range of total degrees.

1. Specify the input complex or functors and replacements, homological or cohomological indexing, differential bidegree, filtration direction, support bounds and target convention. State any choice axiom and its exact use, or the supplied-data alternative.
2. Compute a specified page, with the maps used to identify each nonzero entry. Label zero entries by the calculation or vanishing theorem that gives zero. An uncomputed entry is not zero.
3. For every later page, determine each possible differential in the claimed range, including arrows entering that range. Give its value or a bidegree, naturality or other proved vanishing reason. Specify the stationary page at each relevant bidegree, or prove the all-later vanishing required by [[def-collapse-at-a-page]].
4. Prove convergence for the actual filtration. For example, verify the hypotheses of [[thm-a-first-quadrant-filtered-complex-spectral-sequence-converges-to-filtered-homology]] or its cohomological counterpart, and identify the stationary terms with the associated graded of the stated target. A written double arrow is notation for this assertion, not its proof.
5. Give the finite filtration, its endpoints and the resulting extension problems in each target degree. Solve these extensions if a complete target computation is claimed. Distinguish existence of a splitting, a chosen splitting and a natural splitting. For vector spaces, state any use of AC to choose complements.
6. When the spectral sequence is first-quadrant from a page $s\geq2$ and has the finite normalized abutment filtration required by [[def-edge-homomorphisms-of-a-first-quadrant-spectral-sequence]], identify those canonical edge maps with the maps relevant to the application, and state naturality and its scope. Under any other support or convergence convention, construct the application boundary maps directly from that convention and record why the cited first-quadrant edge-map definition does not apply.

A record is **complete in its declared range** when no page, differential, convergence or reconstruction obligation in that range remains unresolved. A record may instead explicitly document a partial computation with named unknown differentials or extensions. For a zero target the filtration must still be identified as zero; with one graded piece the endpoint identifications give the target directly. There is no implication that a complete record chooses a canonical splitting.
