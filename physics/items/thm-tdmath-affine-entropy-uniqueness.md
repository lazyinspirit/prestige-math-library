---
id: thm-tdmath-affine-entropy-uniqueness
kind: theorem
title: Uniqueness up to a positive affine transformation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 8
deps: [def-tdmath-tagged-scalable-compound, def-tdmath-comparison-and-stability, def-tdmath-signed-comparison, lem-tdmath-spectator-cancellation, lem-tdmath-reference-order, thm-tdmath-additive-entropy-representation]
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  def-tdmath-signed-comparison: mathematical-premise
  lem-tdmath-spectator-cancellation: mathematical-premise
  lem-tdmath-reference-order: mathematical-premise
  thm-tdmath-additive-entropy-representation: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 2.3"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Campión et al., A Survey on the Mathematical Foundations of Axiomatic Entropy, §§2–5"
      url: "https://www.mdpi.com/2075-1680/7/2/29/pdf"
---

## Statement

Assume the strict-reference hypotheses and let $S$ be the normalized representation from [[thm-tdmath-additive-entropy-representation]]. Let $T:X\to\mathbb R$ be another additive extensive representation of the same comparisons: for every finite compound $C=\sum_i c_i e_{x_i}$ define $T(C):=\sum_i c_iT(x_i)$, and require $C\preceq D$ iff $T(C)\le T(D)$ whenever $m(C)=m(D)$. Then there are unique $a>0$ and $b\in\mathbb R$ such that $T(x)=aS(x)+b$ for every $x\in X$. Conversely every such positive affine change represents the same comparisons.

## Facts & Assumptions

[F1] [[thm-tdmath-additive-entropy-representation]]: $x\sim_sR_{S(x)}$ for every $x$, with $S(x_0)=0$ and $S(x_1)=1$.

[F2] [[def-tdmath-signed-comparison]] and [[lem-tdmath-spectator-cancellation]]: signed equivalence is obtained by cancelling common finite coefficients; additive order comparisons extend consistently to finite signed maps.

[A1] [[def-tdmath-comparison-and-stability]]: the chosen pair satisfies $x_0\preceq x_1$ and not $x_1\preceq x_0$.

## Proof

**Given:** [F1], [F2], and [A1].

1.1 Fix $x\in X$ and put $s=S(x)$. The equivalence $x\sim_sR_s$ in [F1] says that the positive and negative parts of their coefficient difference compare in both directions. Since $T$ represents the same order, their finite $T$-sums are equal. By its definition on finite compounds and linearity of finite sums, the signed value of $R_s$ is $(1-s)T(x_0)+sT(x_1)$, including when $s\notin[0,1]$. Thus $T(x)=T(x_0)+[T(x_1)-T(x_0)]S(x)$. [F1, F2, algebra]

2.1 Because $x_0\preceq x_1$ but not conversely, the exact representation property of $T$ gives $T(x_0)<T(x_1)$. Hence $a:=T(x_1)-T(x_0)>0$ and $b:=T(x_0)$ give the asserted form. Conversely, multiplying both sides of any represented-value inequality by $a>0$ and adding the same $b$ times the common compound mass preserves and reflects its order; therefore $aS+b$ represents the same comparisons. The parameters are unique by evaluating at $x_0$ and $x_1$, where $S$ equals $0$ and $1$. [A1, F1, step 1.1, algebra] ∎

