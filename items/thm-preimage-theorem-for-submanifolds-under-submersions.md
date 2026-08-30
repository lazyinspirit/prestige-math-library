---
id: thm-preimage-theorem-for-submanifolds-under-submersions
kind: theorem
title: "The preimage theorem for submanifolds under submersions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-embedded-submanifolds-admit-local-defining-submersions, thm-a-regular-level-set-is-an-embedded-submanifold, prop-tangent-space-of-a-regular-level-set-is-the-kernel, prop-identity-maps-and-composites-of-smooth-maps-are-smooth, thm-chain-rule-for-differentials-of-smooth-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Restricting Maps to Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $F:M\to N$ be a smooth submersion and let $S\subseteq N$ be an embedded
submanifold of codimension $c$. Then $F^{-1}(S)$ is an embedded submanifold of
$M$ of codimension $c$. For each $p\in F^{-1}(S)$,

$$T_p\bigl(F^{-1}(S)\bigr)=(dF_p)^{-1}\bigl(T_{F(p)}S\bigr).$$

## Facts & Assumptions

**Given:** A smooth submersion $F:M\to N$ and an embedded codimension-$c$ submanifold $S\subseteq N$.

[L1] Embedded submanifolds admit local defining submersions ([[thm-embedded-submanifolds-admit-local-defining-submersions]]).

[L2] A regular level set is an embedded submanifold ([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

[L3] The tangent space of a regular level set is the kernel of the defining differential ([[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

[L4] Composites of smooth maps are smooth ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]).

[L5] Differentials satisfy the chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

## Proof
**Proof technique:** direct.

1.1 Fix $p\in F^{-1}(S)$ and put $y:=F(p)$. By [L1], there is a neighbourhood $V$ of $y$ and a local defining submersion $\Phi:V\to\mathbb R^c$ for $S$ at $y$. Shrink to an open neighbourhood $U$ of $p$ with $F(U)\subseteq V$, and set $H:=\Phi\circ F:U\to\mathbb R^c$. By [L4], $H$ is smooth, and $H^{-1}(0)=U\cap F^{-1}(S)$. For every $x\in U$, [L5] gives $dH_x=d\Phi_{F(x)}\circ dF_x$; both factors are surjective because $F$ and $\Phi$ are submersions, so $dH_x$ is surjective. Thus $0$ is a regular value of $H$. [L1, L4, L5, given, construct]

2.1 By [L2], $U\cap F^{-1}(S)$ is an embedded codimension-$c$ submanifold near $p$. Since $p$ was arbitrary, $F^{-1}(S)$ is embedded of codimension $c$. [L2, step 1.1]

2.2 Applying [L3] to the regular level set of $H$ gives $T_p(F^{-1}(S))=\ker dH_p$. By [L5], $\ker dH_p=\ker(d\Phi_y\circ dF_p)=(dF_p)^{-1}(\ker d\Phi_y)$. Applying [L3] again to the regular level set $\Phi^{-1}(0)=V\cap S$ at $y$ gives $\ker d\Phi_y=T_yS$, so $T_p(F^{-1}(S))=(dF_p)^{-1}(T_yS)$. [L3, L5, step 1.1]

3.1 Steps 2.1 and 2.2 prove the theorem. [step 2.1, step 2.2] ∎
