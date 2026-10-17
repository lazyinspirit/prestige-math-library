---
id: lem-parareal-sweep-work-and-span
kind: lemma
title: "Work and idealized span of completed Parareal sweeps"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-parareal-correction-sweeps
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "R. D. Falgout et al., Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "Sections 2.2–2.4 for the procedures; the stated accounting model is proved locally."
---

## Statement

Suppose initialization and all $K\ge0$ sweeps of [[alg-parareal-correction-sweeps]] complete successfully. They make $KN$ fine calls and $(K+1)N$ coarse calls. In an accounting model with constant nonnegative call costs $c_F,c_G$, $P$ processors for a positive integer $P$, fine calls scheduled without idle time in batches of $P$ except possibly the last, serial coarse calls, and additive synchronization cost $\tau_{\rm sync}\ge0$ per sweep, their modeled work and span are respectively
$$W=KNc_F+(K+1)Nc_G+K\tau_{\rm sync},\qquad S=Nc_G+K\bigl(\lceil N/P\rceil c_F+Nc_G+\tau_{\rm sync}\bigr).$$
This model excludes vector arithmetic, storage, certificate verification and any overhead other than the declared synchronization cost. It gives no measured speedup guarantee.

## Facts & Assumptions

**Given:** Successful completion and the accounting model in the Statement; $N\ge1$ and $K\ge0$ are integers.

[F1] [[alg-parareal-correction-sweeps]] initializes one serial coarse row, then evaluates all $N$ fine calls and $N$ new coarse calls per sweep, reusing the preceding row's stored coarse values.

## Proof

1.1 Initialization makes $N$ coarse calls. Each of the $K$ sweeps in [F1] makes $N$ fine calls and $N$ new coarse calls, so the totals are $KN$ and $(K+1)N$. Multiplying by the stipulated costs and adding $K$ synchronization charges gives $W$. [given, F1, algebra]

2.1 Each fine phase has $N$ independent equal-cost calls. Filling each batch except possibly the last gives $\lceil N/P\rceil$ batches, taking $\lceil N/P\rceil c_F$ without idle time. Initialization takes $Nc_G$, and each sweep has this fine phase followed by $N$ serial coarse calls and one synchronization charge. Adding these sequential phases gives $S$, including $K=0$ and zero call costs. [given, F1, step 1.1, algebra] ∎
