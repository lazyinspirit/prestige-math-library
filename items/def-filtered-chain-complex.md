---
id: def-filtered-chain-complex
kind: definition
title: Filtered chain complex
deps: ["def-increasing-and-decreasing-filtration-of-an-object", "def-subcomplex"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

A **filtered chain complex** $(C,d,F)$ in an abelian category is a chain complex with increasing filtrations $F_pC_n\subseteq C_n$ for all $n$, whose pieces form subcomplexes. Explicitly $d_n$ factors as $F_pC_n\to F_pC_{n-1}$ on each piece. These restrictions square to zero since their composites with the monic inclusion into $C_{n-2}$ are $d_{n-1}d_n=0$. The conventions are [[def-increasing-and-decreasing-filtration-of-an-object]] and [[def-subcomplex]]. Thus, in modules, the condition is exactly $d_n(F_pC_n)\subseteq F_pC_{n-1}$; a factorization implies the inclusion, and the inclusion defines the restricted function. No finite-bound hypothesis is implicit.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
