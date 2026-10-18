---
id: ex-pe05-lake-at-rest-over-a-dry-crest
kind: example
title: A lake at rest over a bump with a dry crest
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-pe05-shallow-water-balance-law
  - def-pe05-hydrostatic-hll-scheme
  - thm-pe05-hydrostatic-reconstruction-is-well-balanced
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "E. Audusse, F. Bouchut, M.-O. Bristeau, R. Klein, and B. Perthame, A Fast and Stable Well-Balanced Scheme with Hydrostatic Reconstruction for Shallow Water Flows"
      url: "https://publications.imp.fu-berlin.de/478/1/file_2004_siam.pdf"
      locator: "Complete 16-page paper; lake-at-rest rest state (1.4), hydrostatic reconstruction (2.8)–(2.14), printed pp. 2051–2054."
    - title: "F. Bouchut, III. Shallow water problem – Hydrostatic reconstruction scheme"
      url: "https://www.lestudium-ias.com/sites/default/files/07_-_bouchut.pdf"
      locator: "Complete 20-page lecture; rest state and reconstructed flux equations (21)–(24), PDF pp. 8–11."
---

## Example

Take five periodic cells, $g=1$, bed values $(b_0,b_1,b_2,b_3,b_4)=(0,1,2,1,0)$, and free-surface level $\eta_0=2$. Set $m_i=0$ and $h_i=(2-b_i)_+$, so $(h_i)=(2,1,0,1,2)$; the crest cell is dry.

## Facts & Assumptions

**Given:** The periodic five-cell bed and states above. Verify the exact one-step hydrostatic HLL update.

[F1] [[def-pe05-shallow-water-balance-law]]: on wet rest cells, $m_i=0$ and $h_i+b_i=\eta_0$; a dry cell has $(h_i,m_i)=(0,0)$ with $b_i\ge\eta_0$.

[F2] [[def-pe05-hydrostatic-hll-scheme]]: each side corrected flux is the common HLL flux plus its cell pressure minus reconstructed pressure.

[F3] [[thm-pe05-hydrostatic-reconstruction-is-well-balanced]]: if the reconstructed states at a face agree at rest, the cell-side corrections leave equal hydrostatic pressures on the two faces of each cell.

## Verification

1.1 The data are admissible by [F1]. The four face maxima, including the periodic face between cells $4$ and $0$, are $(1,2,2,1,0)$, so the paired reconstructed depths are respectively $(1,1)$, $(0,0)$, $(0,0)$, $(1,1)$, and $(2,2)$. All reconstructed velocities are zero. [given, F1, F2, algebra]

2.1 At these equal states the common HLL fluxes are $(0,1/2)$, $(0,0)$, $(0,0)$, $(0,1/2)$ and $(0,2)$. Adding the one-sided pressure corrections in [F2] makes the two corrected fluxes adjacent to each cell both equal $(0,h_i^2/2)$: the five cell pressures are $2,1/2,0,1/2,2$. [F2, step 1.1, algebra]

3.1 Each cell therefore has zero corrected-flux difference in the update, so every state is unchanged, including the dry crest. This verifies the exact lake-at-rest preservation in [F3] for this finite wet/dry example. [F2, F3, step 2.1, algebra] ∎
