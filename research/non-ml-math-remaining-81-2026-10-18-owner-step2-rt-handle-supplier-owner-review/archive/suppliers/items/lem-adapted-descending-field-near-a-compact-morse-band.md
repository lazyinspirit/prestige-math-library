---
id: "lem-adapted-descending-field-near-a-compact-morse-band"
kind: "lemma"
title: "Adapted descending field near a compact morse band"
deps: ["def-closed-sublevel-and-level-set-of-a-smooth-function", "thm-morse-lemma", "def-riemannian-gradient-of-a-smooth-function", "cor-every-smooth-manifold-admits-a-riemannian-metric", "thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary", "lem-manifold-bump-for-a-compact-set-inside-an-open-set", "thm-compactly-supported-vector-fields-are-complete"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
    - url: "https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf"
      title: "Benedetti, Lectures on Differential Topology"
status: published
origin: "pipeline"
proof_strategy: "patch local fields"
---

## Statement

Assume $\mathrm{AC}_\omega$. Suppose the compact closed band of a smooth function on a boundaryless manifold has only finitely many critical points, all nondegenerate. There is a smooth field $X$ with $df(X)<0$ at every noncritical point of the band and $X=(2u,-2v)$ in smaller disjoint Morse charts $f=f(p)-|u|^2+|v|^2$. It can be chosen compactly supported on $M$ and hence complete.

## Facts & Assumptions

[F1] [[def-closed-sublevel-and-level-set-of-a-smooth-function]]: Let $f:M\to\mathbb R$ be smooth on a boundaryless smooth $n$-manifold. Write $M^a=f^{-1}(( -\infty,a])$, $M_a=f^{-1}(\{a\})$, and $f^{-1}([a,b])$ for the closed band. Both endpoints are included. A regular value may have empty fiber. The smooth-manifold convention is def-smooth-manifold.

[F2] [[thm-morse-lemma]]: Let $f:M\to\mathbb R$ be smooth, let $p$ be a nondegenerate critical point of $f$, and let $\lambda$ be the index of $p$. If $n=\dim M$, then there are local coordinates $(x^1,\dots,x^n)$ centered at $p$ in which $$f=f(p)-\sum_{i=1}^{\lambda}(x^i)^2+\sum_{i=\lambda+1}^{n}(x^i)^2.$$ For $n=0$, both sums are empty.

[F3] [[def-riemannian-gradient-of-a-smooth-function]]: Let $g$ be a Riemannian metric on a smooth manifold $M$ and let $f:M\to\mathbb R$ be smooth. The **Riemannian gradient** of $f$ is the smooth vector field $\operatorname{grad}_g f$ characterized by $$ g_x\bigl((\operatorname{grad}_g f)_x,v\bigr)=df_x(v) \quad\text{for every }x\in M\text{ and }v\in T_xM. $$ Pointwise, it is the inverse metric-dual of $df_x$. In a local frame with metric matrix $(g_{ij})$ and inverse $(g^{ij})$, it is $$ \operatorname{grad}_g f=\sum_{i,j}g^{ij}\frac{\partial f}{\partial x^j}\partial_{x^i}; $$ the displayed coefficients are smooth, so this pointwise definition is a smooth vector field.

[F4] [[cor-every-smooth-manifold-admits-a-riemannian-metric]]: Assume $\mathrm{AC}_\omega$. Every smooth manifold admits a Riemannian metric.

[F5] [[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]: Assume $\mathrm{AC}_\omega$. Every open cover of a smooth manifold with boundary admits a smooth partition of unity subordinate to it.

[F6] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]: Let $M$ be a smooth manifold, let $K\subseteq M$ be compact, and let $W\subseteq M$ be open with $K\subseteq W$. Then there exists a smooth function $\rho:M\to [0,1]$ that equals $1$ on an open neighbourhood of $K$ and satisfies $\operatorname{supp}(\rho)\subseteq W$.

[F7] [[thm-compactly-supported-vector-fields-are-complete]]: Every compactly supported smooth vector field on a smooth manifold is complete.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Use the closed-band convention. Choose pairwise disjoint Morse neighborhoods of the finitely many critical points, and smaller neighborhoods with compact closure in them. Compactness allows a neighborhood of the band with no other critical points outside these charts. In each chart the field $(2u,-2v)$ has derivative $-4(|u|^2+|v|^2)$. [F1, F2, algebra]

2.1 Choose a metric; away from the critical points the field $-\operatorname{grad}f$ has strictly negative derivative. Cover the band neighborhood by the Morse neighborhoods and a regular open set avoiding the closures of the smaller charts. A subordinate partition of unity patches these fields. At a regular point the derivative is a convex combination of strictly negative numbers; on a smaller chart only its local field is present. [F3, F4, F5, step 1.1]

3.1 Choose a relatively compact neighborhood of the compact band within the field domain and a bump equal to one near the band. Multiply by it and extend by zero. This leaves the required local formulas intact and gives a complete field. With no critical points the regular field alone is used; with an empty band use zero. In dimension zero each local field is zero and there are no regular points to test. [F6, F7, step 2.1] ∎
