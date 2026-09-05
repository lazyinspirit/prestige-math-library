---
id: thm-frobenius-local-coordinate-theorem
kind: theorem
title: "Frobenius local coordinate theorem"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integrable-distribution,
       def-involutive-distribution,
       prop-local-frame-characterization-of-a-smooth-distribution,
       prop-integrable-distributions-are-involutive,
       lem-involutive-frame-reduction,
       lem-commuting-independent-vector-fields-give-a-coordinate-system]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
---

## Statement

Let $\mathcal D$ be a rank-$k$ smooth distribution on an $n$-manifold $M$. Then
the following are equivalent:

1. $\mathcal D$ is integrable.
2. $\mathcal D$ is involutive.

When these conditions hold, every point $p \in M$ has a coordinate
neighborhood $(x^1,\dots,x^n)$ in which

$$ \mathcal D = \operatorname{span}\!\left(\frac{\partial}{\partial x^1},\dots,\frac{\partial}{\partial x^k}\right). $$

## Facts & Assumptions

**Given:** A rank-$k$ smooth distribution $\mathcal D$ on $M$ and a point $p \in M$.

[A1] Assume first that $\mathcal D$ is integrable.

## Proof

**Proof technique:** direct.

1.1 If $\mathcal D$ is integrable, then it is involutive by the necessity [given] proposition. This proves `1 => 2`. [given]

1.2 Now assume $\mathcal D$ is involutive. For $k = 0$ the distribution is [given] zero, and for $k = n$ it is all of $TM$, so the displayed coordinate form is immediate. Thus only the case $1 \leq k < n$ needs work. [given, cases]

1.3 Choose a local frame $X_1,\dots,X_k$ of $\mathcal D$ near $p$ with [given] $X_1(p) \neq 0$. By the frame-reduction lemma, after shrinking there are local sections $Y_2,\dots,Y_k$ such that $X_1,Y_2,\dots,Y_k$ frames $\mathcal D$, each $Y_j$ is tangent to the slices of a flow-box chart for $X_1$, and $[X_1,Y_j]=0$ for all $j \geq 2$. Let $S$ be the slice $x^1=0$ in that flow-box chart, and write $V_j:=Y_j|_S$. Then $V_2,\dots,V_k$ are pointwise independent vector fields on the $(n-1)$-manifold $S$. Because $[Y_i,Y_j]\in\Gamma(\mathcal D)$ and each $Y_j$ is tangent to the slices, the restrictions $[V_i,V_j]=[Y_i,Y_j]|_S$ lie in the span of $V_2,\dots,V_k$. Hence those $V_j$ span an involutive rank-$(k-1)$ distribution on $S$. [given, construct]

1.4 Apply the theorem inductively on the rank to that distribution on $S$. [given] There are local coordinates $(x^2,\dots,x^k,x^{k+1},\dots,x^n)$ on $S$ in which $$\operatorname{span}(V_2,\dots,V_k)=\operatorname{span}(\partial_{x^2},\dots,\partial_{x^k}).$$ Extend these coordinates off $S$ by keeping them constant along the $X_1$-flow, and use the flow parameter as $x^1$. Then $X_1=\partial_{x^1}$. Since each $Y_j$ commutes with $X_1$, its coefficients in these flow-box coordinates are constant along the $X_1$-flow, so the span identity on $S$ extends to $$\operatorname{span}(Y_2,\dots,Y_k)=\operatorname{span}(\partial_{x^2},\dots,\partial_{x^k}).$$ Therefore $\mathcal D=\operatorname{span}(\partial_{x^1},\dots,\partial_{x^k})$ on a neighborhood of $p$. [given, construct]

1.5 In those coordinates, the slices with [given] $x^{k+1},\dots,x^n$ fixed are integral manifolds of $\mathcal D$. Thus the involutive case is integrable, proving `2 => 1`. [given, construct]

2.1 Hence integrability and involutivity are equivalent, and in the involutive [given] case the distribution is locally flat in coordinates as stated. [given] ∎
