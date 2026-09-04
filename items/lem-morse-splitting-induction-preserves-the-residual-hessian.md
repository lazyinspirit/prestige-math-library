---
id: lem-morse-splitting-induction-preserves-the-residual-hessian
kind: lemma
title: "Splitting one Morse coordinate preserves the residual Hessian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-one-variable-completion-of-the-square-with-a-smooth-parameter, def-hessian-of-a-function-at-a-critical-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct local comparison
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

Let $F$ be smooth near $(0,0)\in\mathbb R\times\mathbb R^m$, assume
$dF_{(0,0)}=0$, and suppose there is a smooth local coordinate system $(s,y)$
centered at $(0,0)$, obtained from $(u,y)$ by a change of variables of the
form $(u,y)\mapsto(s,y)$, together with a smooth function $H$ near
$0\in\mathbb R^m$ such that, in these coordinates,

$$\widetilde F(s,y):=F(u(s,y),y)=F(0,0)+\varepsilon s^2+H(y), \qquad \varepsilon\in\{\pm1\}.$$

Then $0$ is a critical point of $H$, the Hessian of $H$ at $0$ is the
restriction of the Hessian of $F$ at $(0,0)$ to the $y$-coordinate subspace in
the $(s,y)$ chart, and if $\operatorname{Hess}_{(0,0)}(F)$ is nondegenerate
then so is $\operatorname{Hess}_0(H)$.

## Facts & Assumptions

**Given:** The smooth function $F$, the local coordinates $(s,y)$, and the decomposition $$\widetilde F(s,y)=F(0,0)+\varepsilon s^2+H(y)$$ from the statement.

[F1] The Hessian at a critical point is represented by the matrix of second partial derivatives in any chart ([[def-hessian-of-a-function-at-a-critical-point]]).

## Proof

**Proof technique:** direct local comparison.

1.1 Because the coordinate change fixes $(0,0)$, the coordinate representative $\widetilde F$ also satisfies $d\widetilde F_{(0,0)}=0$. Setting $s=0$ in the displayed decomposition gives $\widetilde F(0,y)=F(0,0)+H(y)$. Differentiating at $y=0$ therefore shows $dH_0=0$, so $0$ is a critical point of $H$. [given, algebra]

2.1 In the coordinates $(s,y)$, the function $\widetilde F$ has no mixed $sy$ term and no term linear in $s$, so its Hessian matrix at $(0,0)$ has block form $\begin{pmatrix}2\varepsilon&0\\0&\operatorname{Hess}_0(H)\end{pmatrix}$. By [F1], this is the Hessian of $F$ at $(0,0)$ in the $(s,y)$ chart, and the lower-right block is exactly its restriction to the $y$-coordinate subspace. [F1, step 1.1, algebra]

3.1 If $\operatorname{Hess}_0(H)$ had a nonzero kernel vector $v$, then $(0,v)$ would lie in the kernel of the block matrix from step 2.1. Hence a nondegenerate Hessian for $F$ forces $\operatorname{Hess}_0(H)$ to be nondegenerate. [step 2.1, algebra]

4.1 Thus splitting one signed square preserves the residual critical Hessian. [step 1.1, step 2.1, step 3.1] ∎
