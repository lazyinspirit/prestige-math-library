---
id: def-filtered-chain-map
kind: definition
title: Filtered chain map
deps: ["def-filtered-chain-complex", "def-chain-map"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
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
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
---



## Definition

A **filtered chain map** $f:(C,d,F)\to(D,\partial,F)$ is a chain map satisfying $\partial_nf_n=f_{n-1}d_n$ such that $f_n$ restricts to $F_pC_n\to F_pD_n$ for every $p,n\in\mathbb Z$. Here filtered complex means [[def-filtered-chain-complex]] and chain map means [[def-chain-map]]. The restrictions are unique. The identity preserves each piece; if $f$ and $g$ preserve pieces, then $(gf)(F_pC_n)\subseteq g(F_pD_n)\subseteq F_pE_n$, so their composite does too.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
