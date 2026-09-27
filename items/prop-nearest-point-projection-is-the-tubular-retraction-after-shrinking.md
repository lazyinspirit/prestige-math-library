---
id: prop-nearest-point-projection-is-the-tubular-retraction-after-shrinking
kind: proposition
title: "Nearest-point projection is the tubular retraction after shrinking"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euclidean-tubular-neighbourhood-theorem, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Assume countable choice. Let $S\subseteq\mathbb R^m$ be a closed embedded smooth submanifold. After
shrinking the tubular neighbourhood from the Euclidean tubular neighbourhood
theorem, the tubular retraction agrees with the unique nearest-point
projection onto $S$.

## Facts & Assumptions

**Given:** Countable choice and a closed embedded smooth submanifold $S\subseteq\mathbb R^m$.

[L1] Under countable choice ([[def-countable-choice]]), the Euclidean tubular theorem constructs $E:\Omega_\delta\to U$ with a positive radius satisfying $\delta(p)\le r(p)/4$, where $E$ is a diffeomorphism on each local set $V_a(p)=\{(q,w):\|q-p\|<a,\ \|w\|<a\}$ for $a<r(p)$ ([[thm-euclidean-tubular-neighbourhood-theorem]], proof steps 2.1–4.1).

[L2] The tubular retraction is $r=\pi\circ E^{-1}$, where $\pi(p,v)=p$ is the normal-bundle projection (directly from [L1]).

## Proof
**Proof technique:** direct.

1.1 If $S$ is empty the assertion is vacuous. Otherwise fix $x=E(p,v)=p+v$ in the tube from [L1]. Since $S$ is closed, the continuous distance function to $x$ attains a minimum on the compact set $S\cap\overline B(x,\|v\|)$; let $q$ be a minimizer. Because $p\in S$, $\|x-q\|\le\|v\|$. The first derivative of $y\mapsto\|x-y\|^2$ along every tangent vector at $q$ vanishes, so $x-q\perp T_qS$ and $x=E(q,x-q)$. [L1, given, algebra]

2.1 The triangle inequality gives $\|q-p\|\le\|q-x\|+\|x-p\|\le2\|v\|<r(p)/2$. Also $\|x-q\|\le\|v\|<r(p)/4$. Choose $a$ with $2\|v\|<a<r(p)$. Both $(p,v)$ and $(q,x-q)$ then lie in $V_a(p)$, on which [L1] makes $E$ injective. Since they have the same image $x$, they coincide, and in particular $q=p$. The same argument applies to any minimizing $q$, so the nearest point is unique. [L1, step 1.1, algebra]

3.1 By [L2], $r(x)=p$. Step 2.1 shows that $p$ is exactly the unique nearest point. The theorem’s constructed tube already has this property, hence so does any smaller tube. [L2, step 2.1] ∎
