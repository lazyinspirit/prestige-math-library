---
id: thm-pe05-hydrostatic-reconstruction-is-well-balanced
kind: theorem
title: The hydrostatic HLL update preserves lakes at rest, including dry cells
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-pe05-shallow-water-balance-law, def-pe05-hydrostatic-hll-scheme]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
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
      locator: "Complete 16-page paper; lake-at-rest reconstruction and Theorem 2.1(ii), §2.1, printed pp. 2052–2054."
    - title: "F. Bouchut, III. Shallow water problem – Hydrostatic reconstruction scheme"
      url: "https://www.lestudium-ias.com/sites/default/files/07_-_bouchut.pdf"
      locator: "Complete 20-page lecture; shallow-water rest states and hydrostatic reconstruction, PDF pp. 8–11."
---

## Statement

For any discrete bed values, the update of [[def-pe05-hydrostatic-hll-scheme]] leaves every lake-at-rest profile of [[def-pe05-shallow-water-balance-law]] unchanged, including a wet/dry shoreline with dry cells above the free-surface level. On a finite chain, the supplied ghost states and bed values must extend the same lake-at-rest profile.

## Facts & Assumptions

**Given:** $g>0$, arbitrary cell bed values $b_i$, a level $\eta_0$, and cell states with $m_i=0$, $h_i+b_i=\eta_0$ when wet, and $h_i=0$, $b_i\ge\eta_0$ when dry. On a finite chain these conditions also hold for the supplied ghost data. Verify every cell update.

[F1] [[def-pe05-shallow-water-balance-law]]: a dry cell has state $(0,0)$ and the physical flux there is $(0,0)$; a wet lake-at-rest cell has $m=0$ and $h+b=\eta_0$.

[F2] [[def-pe05-hydrostatic-hll-scheme]]: the face bed is the maximum of the two adjacent beds, reconstructed depths are positive parts of free surface minus that bed, and each corrected side flux adds its cell pressure minus reconstructed pressure.

## Proof

1.1 Fix a face and set $b^*=\max(b_L,b_R)$. If a side cell is wet, its free surface is $\eta_0$, so its reconstructed depth is $(\eta_0-b^*)_+$. If a side cell is dry, then $b_s\ge\eta_0$ and $b^*\ge b_s$, so its reconstructed depth is $(b_s-b^*)_+=0=(\eta_0-b^*)_+$. Thus both reconstructed depths equal $H=(\eta_0-b^*)_+$, and both reconstructed velocities are zero. [given, F1, F2, algebra]

2.1 If $H>0$, the states on the face are equal to $(H,0)$ and the middle HLL formula has speeds $-\sqrt{gH}$ and $\sqrt{gH}$, so its flux is $F(H,0)=(0,gH^2/2)$. If $H=0$, both states and speeds are zero and the dry branch returns $(0,0)$. Thus in either case the common flux is $(0,gH^2/2)$. [F1, F2, step 1.1, algebra]

3.1 On the side belonging to a cell of depth $h_s$, the correction in [F2] changes this common flux to $(0,g h_s^2/2)$. Therefore the right corrected flux of cell $i$ and the left corrected flux of that same cell are both $(0,g h_i^2/2)$. Their difference is zero, so the update leaves every $U_i$ unchanged. [F2, step 2.1, algebra] ∎
