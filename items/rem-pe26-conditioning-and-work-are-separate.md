---
id: rem-pe26-conditioning-and-work-are-separate
kind: remark
title: Conditioning and solver work are separate claims
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-pe26-scaled-averaging-and-bddc-preconditioner, def-pe26-feti-dp-dual-system-and-preconditioner]
justified_by: []
aliases: []
axiom_use: "None."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 3 and 87–89"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
verification:
  precheck: n/a
---

## Remarks

The condition-number theorem concerns the ideal exact local and coarse solves and the spectrum of the preconditioned interface operators. It does not bound elapsed time, communication, memory, or total arithmetic work. For example, under a dense direct-solver model with coarse dimension $n_c$, a coarse factorization uses $O(n_c^3)$ arithmetic and $O(n_c^2)$ storage, while a dense local factorization for subdomain dimensions $n_i$ uses $O(\sum_i n_i^3)$ arithmetic before parallel scheduling. Therefore a growing primal space can make the coarse solve dominate even while the condition number remains polylogarithmic. An inexact local or coarse solve requires its own spectral-equivalence and cost hypotheses.
