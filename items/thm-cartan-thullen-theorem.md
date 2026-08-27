---
id: thm-cartan-thullen-theorem
kind: theorem
title: "Cartan-Thullen theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       def-holomorphically-convex-hull-and-domain,
       lem-basic-properties-of-the-holomorphic-hull,
       thm-cartan-thullen-boundary-radius-theorem,
       thm-open-connected-subsets-of-rn-are-polygonally-connected,
       thm-identity-theorem-in-several-complex-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Theorem 2.6.3"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Theorems 5 and 6"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

For a domain $\Omega\subseteq\mathbb C^m$, the following are equivalent.

1. $\Omega$ is a domain of holomorphy.
2. For every compact $K\Subset\Omega$,
   $$\delta_\Omega(\widehat K_\Omega)=\delta_\Omega(K).$$
3. $\Omega$ is holomorphically convex.

## Facts & Assumptions

**Given:** A domain $\Omega\subseteq\mathbb C^m$.

[L1] On a domain of holomorphy, compact hulls preserve the boundary-radius
function exactly
([[thm-cartan-thullen-boundary-radius-theorem]]).

[L2] Hulls contain the original compact set, are closed in $\Omega$, and are
coordinate-bounded for compact inputs
([[lem-basic-properties-of-the-holomorphic-hull]],
[[def-holomorphically-convex-hull-and-domain]]).

[L3] A domain of holomorphy is defined by the failure of every common
simultaneous extension pair
([[def-holomorphic-extension-and-domain-of-holomorphy]]).

[L4] Every open connected subset of Euclidean space is polygonally connected
([[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

[L5] Holomorphic functions on a connected domain that agree on a nonempty open
set agree everywhere ([[thm-identity-theorem-in-several-complex-variables]]).

## Proof

**Proof technique:** direct.

1.1 Property 1 implies property 2 by [L1]. [L1]

1.2 Assume property 3. If $\Omega=\mathbb C^m$, property 1 holds directly from [L3]. Otherwise fix $p\in\partial\Omega$ and a connected open set $C\subseteq\Omega$ with $p\in\overline C$. Let $(D_n)$ be an increasing compact exhaustion of $\Omega$. Construct increasing holomorphically convex compact sets $K_n$ and points $p_n\to p$ recursively. Start with $K_1:=\widehat{D_1}_\Omega$. Once $K_n\Subset\Omega$ is chosen, choose $p_n\in C\setminus K_n$ with $|p_n-p|<1/n$, and put $$K_{n+1}:=\widehat{K_n\cup D_{n+1}\cup\{p_n\}}_\Omega.$$ Property 3 and idempotence of hulls make each $K_n$ compactly contained in $\Omega$, and $p_n\in K_j$ whenever $j>n$. [L2, L3, given, choose, construct]

2.1 Since $p_n\notin\widehat K_n{}_{\Omega}=K_n$, choose $g_n\in\mathcal O(\Omega)$ with $|g_n(p_n)|>\sup_{K_n}|g_n|$. Taking a sufficiently large positive power makes the ratio of these two quantities arbitrarily large; scaling that power then gives $f_n\in\mathcal O(\Omega)$ such that $$\sup_{K_n}|f_n|<2^{-n}\qquad\text{and}\qquad |f_n(p_n)|>n+1+\sum_{j<n}|f_j(p_n)|.$$ Every compact subset of $\Omega$ lies in some $K_N$, so $\sum_n f_n$ converges uniformly on compact subsets to a holomorphic function $f$. Moreover, $p_n\in K_j$ for $j>n$, so $$\sum_{j>n}|f_j(p_n)|<\sum_{j>n}2^{-j}<1.$$ The reverse triangle inequality and the second displayed bound give $|f(p_n)|>n$. [step 1.2, L2, algebra, choose]

2.2 Assume property 2, and let $K\Subset\Omega$ be compact. By [L2], the hull $\widehat K_\Omega$ is closed in $\Omega$ and coordinate-bounded. Property 2 gives $\delta_\Omega(\widehat K_\Omega)=\delta_\Omega(K)>0$, so every point of $\widehat K_\Omega$ carries a positive-radius polydisc contained in $\Omega$. Hence every Euclidean limit point of $\widehat K_\Omega$ still lies in $\Omega$, and the closedness from [L2] makes $\widehat K_\Omega$ closed in $\mathbb C^m$. Being closed and bounded in finite-dimensional Euclidean space, it is compact; the positive boundary-radius lower bound keeps it away from $\partial\Omega$. Thus $\widehat K_\Omega\Subset\Omega$, so property 3 holds. [L2, step 1.1, algebra]

3.1 Suppose toward a contradiction that domains $U_1,U_2$ witness failure of property 1 as in [L3]. Choose $a\in U_1$ and $b\in U_2\setminus\Omega$. By [L4], join them by a path in $U_2$, and let $p$ be its first point on $\partial\Omega$. The part of the path before $p$ lies in the connected component $C$ of $\Omega\cap U_2$ containing $U_1$, so $p\in\overline C$. Apply steps 1.2 and 2.1 with this $p$ and $C$, obtaining $f\in\mathcal O(\Omega)$ and $p_n\in C$ with $p_n\to p$ and $|f(p_n)|>n$. By the assumed simultaneous-extension property, $f$ has an extension $F\in\mathcal O(U_2)$ agreeing with $f$ on $U_1$. The identity theorem [L5] gives $F=f$ on $C$, but continuity makes $F$ bounded near $p\in U_2$, contradicting $|F(p_n)|>n$. Thus property 3 implies property 1, and the three properties are equivalent. [L3, L4, L5, step 1.2, step 2.1, assume-contra, discharge-contradiction] ∎
