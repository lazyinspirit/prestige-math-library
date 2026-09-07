---
id: "lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time"
kind: "lemma"
title: "Normalized gradient crosses a compact regular band in controlled time"
deps: ["def-closed-sublevel-and-level-set-of-a-smooth-function", "def-riemannian-gradient-of-a-smooth-function", "cor-every-smooth-manifold-admits-a-riemannian-metric", "lem-manifold-bump-for-a-compact-set-inside-an-open-set", "thm-compactly-supported-vector-fields-are-complete"]
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
    - url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      title: "Audin–Damian, Morse Theory and Floer Homology"
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
status: published
origin: "pipeline"
proof_strategy: "cutoff and controlled flow"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless manifold, $a<b$, and let $K=f^{-1}([a,b])$ be compact with $df\ne0$ on $K$. For any Riemannian metric there is a compactly supported smooth field $Y$ agreeing with $\operatorname{grad}f/\|\operatorname{grad}f\|^2$ near $K$. Its complete flow $\Phi$ satisfies $f(\Phi_t(x))=f(x)+t$ for $x\in K$ and $a-f(x)\le t\le b-f(x)$. Thus every intervening level is reached in exactly its value difference.

## Facts & Assumptions

[F1] [[def-closed-sublevel-and-level-set-of-a-smooth-function]]: Let $f:M\to\mathbb R$ be smooth on a boundaryless smooth $n$-manifold. Write $M^a=f^{-1}(( -\infty,a])$, $M_a=f^{-1}(\{a\})$, and $f^{-1}([a,b])$ for the closed band. Both endpoints are included. A regular value may have empty fiber. The smooth-manifold convention is def-smooth-manifold.

[F2] [[def-riemannian-gradient-of-a-smooth-function]]: Let $g$ be a Riemannian metric on a smooth manifold $M$ and let $f:M\to\mathbb R$ be smooth. The **Riemannian gradient** of $f$ is the smooth vector field $\operatorname{grad}_g f$ characterized by $$ g_x\bigl((\operatorname{grad}_g f)_x,v\bigr)=df_x(v) \quad\text{for every }x\in M\text{ and }v\in T_xM. $$ Pointwise, it is the inverse metric-dual of $df_x$. In a local frame with metric matrix $(g_{ij})$ and inverse $(g^{ij})$, it is $$ \operatorname{grad}_g f=\sum_{i,j}g^{ij}\frac{\partial f}{\partial x^j}\partial_{x^i}; $$ the displayed coefficients are smooth, so this pointwise definition is a smooth vector field.

[F3] [[cor-every-smooth-manifold-admits-a-riemannian-metric]]: Assume $\mathrm{AC}_\omega$. Every smooth manifold admits a Riemannian metric.

[F4] [[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]: Let $M$ be a smooth manifold, let $K\subseteq M$ be compact, and let $W\subseteq M$ be open with $K\subseteq W$. Then there exists a smooth function $\rho:M\to [0,1]$ that equals $1$ on an open neighbourhood of $K$ and satisfies $\operatorname{supp}(\rho)\subseteq W$.

[F5] [[thm-compactly-supported-vector-fields-are-complete]]: Every compactly supported smooth vector field on a smooth manifold is complete.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Use the closed-band convention and choose a metric. If $K=\varnothing$, the zero field suffices and all trajectory assertions are vacuous. Otherwise the metric exists under the stated choice axiom. [F1, F3, given]

1.2 The open set $\{df\ne0\}$ contains $K$. Cover $K$ by finitely many coordinate neighborhoods with compact closures in this open set; their union $W$ is relatively compact. Choose $\rho=1$ near $K$ with support in $W$. [F4]

2.1 On $W$ set $Y=\rho\operatorname{grad}f/\|\operatorname{grad}f\|^2$, and set it to zero outside $W$. The support condition makes this smooth with compact support. Since $df(\operatorname{grad}f)=\|\operatorname{grad}f\|^2$, $df(Y)=1$ near $K$. [F2, step 1.2, algebra]

3.1 The field is complete. On every trajectory segment contained in $K$, differentiation gives $d(f\circ\Phi_t)/dt=1$. Starting at an endpoint the same identity holds on its open neighborhood, so the trajectory enters the band in the required time direction. A first exit before the claimed level would have value strictly between $a$ and $b$, contradicting continuity. Integrating gives the identity through both endpoints; strict unit speed gives the asserted hitting time. [F5, step 2.1, algebra] ∎
