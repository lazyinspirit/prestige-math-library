---
id: lem-tdmath-reference-order
kind: lemma
title: Ordering the two-state reference mixtures
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps: [def-tdmath-tagged-scalable-compound, def-tdmath-comparison-and-stability, def-tdmath-signed-comparison, lem-tdmath-spectator-cancellation]
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  def-tdmath-signed-comparison: mathematical-premise
  lem-tdmath-spectator-cancellation: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Lemma 2.2"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Campión et al., A Survey on the Mathematical Foundations of Axiomatic Entropy, §§2–5"
      url: "https://www.mdpi.com/2075-1680/7/2/29/pdf"
---

## Statement

Let $x_0,x_1\in X$ satisfy $x_0\preceq x_1$ and not $x_1\preceq x_0$. For every real $\lambda$, define the signed unit-mass reference map $R_\lambda:=(1-\lambda)e_{x_0}+\lambda e_{x_1}$. For all $\lambda,\mu\in\mathbb R$,

$$R_\lambda\preceq_s R_\mu\quad\Longleftrightarrow\quad\lambda\le\mu.$$

The parameters need not lie in $[0,1]$; outside that interval $R_\lambda$ is signed notation, not a compound.

## Facts & Assumptions

[A1] [[def-tdmath-comparison-and-stability]]: the relation is reflexive, positively scale-invariant, and the reference states have the stated one-way comparison.

[F1] [[def-tdmath-signed-comparison]]: signed comparison is determined by the positive and negative parts of the coefficient difference.

[F2] [[lem-tdmath-spectator-cancellation]]: on positive maps the signed relation agrees with the compound relation, and its definition is well-defined for equal-total signed maps.

## Proof

**Given:** [A1], [F1], and [F2].

1.1 Put $\delta:=\mu-\lambda$. The coefficient difference is $R_\mu-R_\lambda=\delta(e_{x_1}-e_{x_0})$ and has total zero. If $\delta>0$, its negative and positive parts are $\delta e_{x_0}$ and $\delta e_{x_1}$; if $\delta<0$, they are $(-\delta)e_{x_1}$ and $(-\delta)e_{x_0}$; if $\delta=0$, both are zero. [F1, F2, algebra]

1.2 If $\delta=0$, reflexivity gives $R_\lambda\preceq_sR_\mu$. If $\delta>0$, [F1] reduces this comparison to $\delta e_{x_0}\preceq\delta e_{x_1}$, which follows by positive scaling of $x_0\preceq x_1$ by $\delta$. Hence $\lambda<\mu$ implies $R_\lambda\preceq_sR_\mu$. [A1, F1, algebra]

2.1 If $\delta<0$ and $R_\lambda\preceq_sR_\mu$, [F1] gives $c e_{x_1}\preceq c e_{x_0}$ for $c:=-\delta>0$. In the ordered real field, $c^{-1}>0$: $c^{-1}\ne0$, and if $-c^{-1}>0$ then closure of the positive cone under multiplication gives $c(-c^{-1})=-1>0$. But $1>0$: since $1\ne0$, trichotomy gives either $1>0$ or $-1>0$; the latter would, by positive-product closure, also give $(-1)^2=1>0$, contradicting trichotomy. Thus $-1>0$ is impossible, and so $c^{-1}>0$. Positive scaling by $c^{-1}$ therefore implies $x_1\preceq x_0$, contrary to [A1]. Thus this comparison fails when $\lambda>\mu$. The three cases prove the equivalence. [A1, F1, step 1.1, step 1.2, algebra] ∎

