---
id: def-annihilator-and-preannihilator
kind: definition
title: "Annihilator notation and the preannihilator"
status: published
origin: pipeline
deps: ["def-dual-space-of-a-normed-space", "def-continuous-annihilator-of-a-subspace"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Brezis, Functional Analysis, Sobolev Spaces and PDEs, §1.3, notation p.9"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
---

## Definition

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and arbitrary subsets $M\subseteq X$, $N\subseteq X^*$, define $$M^\perp=\{f\in X^*:f(m)=0\text{ for all }m\in M\},\qquad {}^\perp N=\{x\in X:f(x)=0\text{ for all }f\in N\}.$$ Here $X^*$ is [[def-dual-space-of-a-normed-space]]. The first notation agrees with [[def-continuous-annihilator-of-a-subspace]] on $\operatorname{span}M$, since linearity makes vanishing on $M$ equivalent to vanishing on its span. The preannihilator lies in $X$, not in $X^{**}$. Empty sets impose no conditions: $\varnothing^\perp=X^*$ and ${}^\perp\varnothing=X$.
