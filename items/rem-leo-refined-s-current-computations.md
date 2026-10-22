---
id: rem-leo-refined-s-current-computations
kind: remark
title: Reported refined s-invariant computations
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-odd-khovanov-barnatan-and-leo-triple
  - def-rasmussen-s-invariant
  - def-locally-flat-topological-knot-concordance
  - def-smooth-and-topological-slice-genus
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Nathan Dunfield, Robert Lipshitz, and Dirk Schütz, Local equivalence and
        refinements of Rasmussen's s-invariant, arXiv:2312.09114v3
      url: https://arxiv.org/pdf/2312.09114v3
      locator: §7.1, printed pp. 40–41
---

## Remark

The cited version of Dunfield, Lipshitz and Schütz's paper (v3, November 2025) reports that, as of April 2023, 17,991 prime knots with at most 19 crossings still had smooth sliceness status unknown in the cited census. Their reported refined LEO computations obstruct smooth sliceness for 890 of these knots; at least 832 of those 890 have Alexander polynomial one and are topologically slice by the criterion cited in that paper. These are dated source-reported computation results, not an independently recomputed or current census.

## Remark references

[[def-odd-khovanov-barnatan-and-leo-triple|LEO invariant data]]

[[def-smooth-and-topological-slice-genus|Smooth and topological slice genus]]

[[def-locally-flat-topological-knot-concordance|Locally flat topological concordance]]

[Dunfield–Lipshitz–Schütz, *Local equivalence and refinements of Rasmussen's s-invariant* (v3, 2025), §7.1](https://arxiv.org/pdf/2312.09114v3)

## Facts & Assumptions

**Given:** The stated dated report from the cited version of the paper.

[F1] The paper's §7.1 reports the 17,991-knot cohort, 890 obstructions, and the lower bound of 832 topologically slice knots as of April 2023 (Dunfield–Lipshitz–Schütz, §7.1).

## Proof

**Given:** The numerical counts in [F1].

1.1 The paper's stated cohort is historical and date-qualified. Dividing the reported count by the cohort size gives $890/17{,}991\approx0.04947$, or approximately $4.95\%$, which rounds to the paper's “5%” description. Since $832\le890$, the reported lower bound for topologically slice knots is consistent with the reported obstructed subset. [F1, algebra]

2.1 No knot-by-knot calculation or present-day census is asserted in the Remark. Its claims are exactly the dated source report in [F1], with the percentage check from step 1.1; the topological sliceness count is attributed to the criterion cited by the source rather than re-proved here. [F1, step 1.1] ∎