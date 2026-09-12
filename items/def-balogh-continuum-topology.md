---
id: def-balogh-continuum-topology
kind: definition
title: Balogh continuum topology
status: published
origin: pipeline
deps: [lem-balogh-combinatorial-map, def-axiom-of-choice]
justified_by: [lem-balogh-neighborhood-basis]
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
    - title: "Hart, Set-Theoretic Methods in General Topology, Chapter 5 section 2, construction and Exercise 2, printed p. 31"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop.pdf
---

## Definition

Assume AC ([[def-axiom-of-choice]]) and put $\kappa=2^{\aleph_0}$ and $C={}^\kappa2$. Fix a map $D:C\to C$, $D(c)=d_c$, supplied by [[lem-balogh-combinatorial-map]]. For $\alpha<\kappa$, $s\in[C]^{<\omega}$ and $a\in[\kappa]^{<\omega}$ set

$$F(\alpha,s,a)=\{\beta<\kappa:(\forall c\in s)\ d_c(\beta)=c(\alpha)\}\setminus a,$$

and let $\mathcal F_\alpha$ be the family of all these sets. It may contain the empty set; it is not assumed to be a proper filter. When $s=\varnothing$, the condition on $c$ is vacuous and $F(\alpha,\varnothing,a)=\kappa\setminus a$.

On $X=\kappa\times\omega$ declare $O\subseteq X$ open when, for every $(\alpha,n+1)\in O$, there is $F\in\mathcal F_\alpha$ with $F\times\{n\}\subseteq O$. No extra condition is placed on points at height zero. The next lemma proves that this rule defines a topology and describes its neighborhood bases.

Write $L_n=\kappa\times\{n\}$ and $U_n=\kappa\times\{0,\ldots,n\}$ for $n<\omega$, and use $U_{-1}=\varnothing$ in formulas involving the bottom level. This occurrence of $-1$ is only an indexing convention; every point of $X$ has a natural-number height.
