---
id: lem-open-manifolds-admit-exhaustions-with-no-caps
kind: lemma
title: "Open manifolds admit exhaustions with no caps"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [thm-extreme-value-metric, lem-regular-sublevels-are-compact-manifolds-with-boundary, cor-local-normal-form-for-submersions, thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function, cor-regular-values-have-null-complement-and-are-dense, lem-regular-sublevels-are-compact-manifolds-with-boundary, def-closed-sublevel-and-level-set-of-a-smooth-function, def-embedded-smooth-submanifold-with-boundary, def-interior-point-boundary-point-interior-and-boundary-of-a-manifold, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, def-connected-space, def-connected-component-and-quasicomponent, def-locally-connected, def-smooth-manifold, def-compact-space, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., Ch. 2 §2.2 “The Topology of Sublevel Sets” (exhaustive Morse functions, compact sublevel sets, handle attachment across critical values), printed pp. 37–56"
      url: https://www3.nd.edu/~lnicolae/Morse2nd.pdf
    - title: "John Francis, The h-Principle, Lectures 5 & 6: The Hirsch–Smale theorem, Lemma 1.6 (a manifold has a handle decomposition without n-handles iff it is open)"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/5%266smalehirsch.pdf
dependency_level: 1
---

## Statement

Assume the axiom of countable choice. Let $M$ be a nonempty connected open smooth $m$-manifold without boundary: every connected component of a manifold is open and closed, so here no component is compact, and connectedness makes $M$ noncompact. Then there is a sequence $\varnothing\neq M_0\subseteq M_1\subseteq M_2\subseteq\cdots$ of compact $m$-submanifolds with boundary such that $M_j\subseteq\operatorname{int}M_{j+1}$, $M=\bigcup_jM_j$, and for every $j$ the complement $M\setminus\operatorname{int}M_j$ has no compact connected component. Call a compact connected component of $M\setminus\operatorname{int}M_j$ a cap of $M_j$; the conclusion is that no $M_j$ has a cap. Consequently, for every $j$ and every connected component $C$ of the band $M_{j+1}\setminus\operatorname{int}M_j$ the outgoing boundary $C\cap\partial M_{j+1}$ is nonempty; the incoming boundary $C\cap\partial M_j$ may be empty.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and a nonempty connected open smooth $m$-manifold $M$ without boundary and with no compact component.

[F1] Under $\mathrm{AC}_\omega$ there is a smooth exhaustive function $h:M\to[0,\infty)$ with $h^{-1}([0,c])$ compact for every $c$ ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[F2] The regular values of a smooth function have null complement, hence are dense, so every nonempty open interval contains one ([[cor-regular-values-have-null-complement-and-are-dense]]).

[F3] For a regular value $c$ the sublevel $h^{-1}((-\infty,c])$ is a compact smooth manifold with boundary $h^{-1}(c)$ and interior $h^{-1}((-\infty,c))$ ([[lem-regular-sublevels-are-compact-manifolds-with-boundary]]); interiors and boundaries are as in [[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]] and [[def-closed-sublevel-and-level-set-of-a-smooth-function]].

[F4] Components of a manifold are open and closed, manifolds are locally connected, and a compact locally connected space has finitely many components ([[def-connected-component-and-quasicomponent]], [[def-locally-connected]], [[def-smooth-manifold]], [[def-compact-space]]); a clopen subset of a connected space is empty or the whole space ([[def-connected-space]]).

[F5] The identity on a nonempty compact metric subset of $\mathbb R$ attains a minimum ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct.

1.1 Choose $h$ as in [F1]. Choose any $x_0\in M$. The nonempty compact sublevel $\{h\le h(x_0)\}$ has compact image in $\mathbb R$, by pulling any image cover back to a cover of the sublevel; the identity function on that image has a minimum by [F5], and all other points have larger values; thus $h$ attains a global minimum $m_0$; choose a regular value $b_0\geq m_0$ with $m_0<b_0<m_0+1$, and for every $j\geq1$ choose a regular value $b_j\in(b_0+j,b_0+j+1)$. Each interval is nonempty and contains a regular value by [F2], and the countably many selections are licensed by [F1]$\ $'s $\mathrm{AC}_\omega$. The sequence $(b_j)$ is strictly increasing with $b_j\to\infty$. [F1, F2, F5, given, choose]

2.1 For each $j$ put $K_j:=h^{-1}((-\infty,b_j])$. By [F3] each $K_j$ is a nonempty compact smooth $m$-manifold with boundary $h^{-1}(b_j)$ and interior $h^{-1}((-\infty,b_j))$; since $b_j<b_{j+1}$ are regular, $K_j\subseteq\operatorname{int}K_{j+1}$, and the $K_j$ exhaust $M$ because $h$ is exhaustive. [F3, step 1.1]

3.1 Fix $j$ and let $Z$ be a cap of $K_j$, that is a compact connected component of $M\setminus\operatorname{int}K_j$. Its boundary in $M$ is $\partial Z=Z\cap h^{-1}(b_j)$: a point of $Z$ with $h>b_j$ has a ball around it contained in the open set $\{h>b_j\}\subseteq M\setminus\operatorname{int}K_j$ and, being connected, that ball lies in the component $Z$, while a ball around a point of $Z\cap h^{-1}(b_j)$ meets $\{h<b_j\}$ because $b_j$ is a regular value. If $\partial Z=\varnothing$, then every point of $Z$ is interior to $Z$ in $M$, so $Z$ is open in $M$, while $Z$ is closed in $M$ because it is a component of the closed set $M\setminus\operatorname{int}K_j$; connectivity of $M$ then forces $Z=M$; but then $M$ would be compact, contradicting that $M$ has no compact component. Hence $\partial Z\neq\varnothing$. [F4, given, step 2.1]

4.1 The cap $Z$ is a compact smooth $m$-manifold with boundary $\partial Z$: at a point with $h>b_j$ it is open in $M$ by the ball argument of step 3.1, and at a point of the level the local normal form of $h$ at the regular value $b_j$ ([[cor-local-normal-form-for-submersions]]) exhibits a neighbourhood of $Z$ as a half-space. Hence $\partial Z$ is a nonempty closed $(m-1)$-submanifold of the compact $(m-1)$-manifold $h^{-1}(b_j)$ ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]], [[def-embedded-smooth-submanifold-with-boundary]]), hence a union of components of $h^{-1}(b_j)$. Two distinct caps have disjoint boundaries: a point of $\partial Z_1\cap\partial Z_2$ has a neighbourhood in $M\setminus\operatorname{int}K_j$ that is connected (a half-ball at the level set) and meets both caps, contradicting that they are distinct components. Since $h^{-1}(b_j)$ is compact and locally connected it has finitely many components by [F4], so sending a cap to the nonempty set of level components in its boundary injects the caps into the power set of a finite set: there are finitely many caps $Z_1,\dots,Z_r$ of $K_j$. [F4, step 3.1, algebra]

5.1 Put $K_j^+:=K_j\cup Z_1\cup\cdots\cup Z_r$. Give $K_j^+$ the smooth structure with boundary carried by the ambient charts of $M$: a point of $\operatorname{int}K_j$ or of $\operatorname{int}Z_i$ has an open neighbourhood in $M$ contained in $K_j^+$ and serves as an interior chart; at a seam point in $\partial Z_i\subseteq\partial K_j$ the local regular-level chart has its lower half in $K_j$ and its upper half in $Z_i$, so their union contains a full ambient neighbourhood and the seam point is interior too; a point of $\partial K_j\setminus(\partial Z_1\cup\cdots\cup\partial Z_r)$ has a half-space chart inherited from a boundary chart of $K_j$, and a sufficiently small such chart avoids the caps because the caps meet $\partial K_j$ exactly in the closed sets $\partial Z_i$; transitions are restrictions of transition maps of $M$. Hence $K_j^+$ is a compact smooth $m$-manifold with boundary, with $\partial K_j^+=\partial K_j\setminus(\partial Z_1\cup\cdots\cup\partial Z_r)$ and $\operatorname{int}K_j^+=\operatorname{int}K_j\cup Z_1\cup\cdots\cup Z_r$. [F3, step 4.1, construct]

6.1 The complement $M\setminus\operatorname{int}K_j^+$ is obtained from $M\setminus\operatorname{int}K_j$ by deleting the components $Z_1,\dots,Z_r$, so every connected component of it is a connected component of $M\setminus\operatorname{int}K_j$ other than the $Z_i$, hence is noncompact by the definition of a cap. Therefore $K_j^+$ has no cap. [step 3.1, step 5.1]

7.1 Define $M_0:=K_0^+$, which is nonempty, compact, and cap-free by step 6.1. Given a cap-free compact $M_j$, let $k_j$ be the least integer with $M_j\subseteq\operatorname{int}K_{k_j}$, which exists because the compact $M_j$ is contained in $M=\bigcup_k\operatorname{int}K_k$; set $M_{j+1}:=K_{k_j}^+$. Then $M_j\subseteq\operatorname{int}K_{k_j}\subseteq\operatorname{int}M_{j+1}$ and $M_{j+1}$ is compact and cap-free by step 6.1. The indices $k_j$ strictly increase, since $K_{k_j}\subseteq M_{j+1}$ forces $k_{j+1}>k_j$; hence $M=\bigcup_jM_j$ and each $M_j$ is a nonempty compact $m$-manifold with boundary. [F3, step 2.1, step 5.1, step 6.1, construct, choose]

8.1 Let $C$ be a connected component of the band $M_{j+1}\setminus\operatorname{int}M_j$ and suppose $C\cap\partial M_{j+1}=\varnothing$; then $C\subseteq\operatorname{int}M_{j+1}\setminus\operatorname{int}M_j$. At a point $x\in\partial C$ we have $\partial C\subseteq\partial M_j$, and since $\partial M_j\subseteq M_j\subseteq\operatorname{int}M_{j+1}$ there is a ball $B$ around $x$ contained in $\operatorname{int}M_{j+1}$; the set $B\cap(M\setminus\operatorname{int}M_j)$ is a half-ball, hence connected, and meets $C$, so it lies in $C$. Thus $C$ is open and closed in $M\setminus\operatorname{int}M_j$, and it is compact, so it is a compact component of $M\setminus\operatorname{int}M_j$, that is a cap of $M_j$, contradicting cap-freeness. Hence $C\cap\partial M_{j+1}\neq\varnothing$. The band is compact and locally connected and therefore has finitely many components by [F4]. [F4, step 7.1, algebra] ∎
