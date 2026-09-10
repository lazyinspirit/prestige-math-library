---
id: def-exhaustive-separated-bounded-and-finite-filtration
kind: definition
title: Exhaustive separated bounded and finite filtration
deps: ["def-increasing-and-decreasing-filtration-of-an-object"]
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

For an increasing filtration as in [[def-increasing-and-decreasing-filtration-of-an-object]], **exhaustive** means $\bigvee_{p\in\mathbb Z}F_pA=A$ and **separated** means $\bigwedge_{p\in\mathbb Z}F_pA=0$, when those joins and meets exist in the subobject order. In modules these are the usual union and intersection. A filtration is **bounded below** if $F_aA=0$ for some $a$, **bounded above** if $F_bA=A$ for some $b$, and **finite** if both hold; the witnesses may be enlarged to give $a<b$. Thus finite does not require distinct consecutive subobjects.

For a complex, **degreewise bounded** means $F_{a_n}C_n=0$ and $F_{b_n}C_n=C_n$ for each $n$, with bounds permitted to depend on $n$; **uniformly bounded** requires the same bounds for all degrees. For decreasing filtrations finite means $F^aA=A$ and $F^bA=0$ for $a<b$. For orientation only, completeness means that the canonical map $A\to\varprojlim_{p\to-\infty}A/F_pA$ is an isomorphism, when that inverse limit exists. No assertion about convergence of an unbounded spectral sequence is part of these definitions.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90. Sharifi 4.1.14 reverses the decreasing endpoints in its prose; the endpoints above agree with its Definition 4.2.1(b).
