---
id: prop-relative-local-finiteness-artin-tits-normalisers
kind: proposition
title: Local finiteness of the interior relative arrangement
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-relative-cone-artin-tits-normalisers
  - def-hyperplane-arrangement-artin-tits-normalisers
  - lem-author-b319c70a2611-finite-relative-ball
  - math:thm-cg-tits-cone-finite-negativity-and-convexity
dependency_roles:
  def-relative-cone-artin-tits-normalisers: mathematical-premise
  def-hyperplane-arrangement-artin-tits-normalisers: mathematical-premise
  lem-author-b319c70a2611-finite-relative-ball: mathematical-premise
  math:thm-cg-tits-cone-finite-negativity-and-convexity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF pp. 2 and 9; Proposition 3.6
      statement: Every point of the interior of the Tits cone intersection is
        contained in an open ball in that intersection meeting only finitely
        many relative hyperplanes; the interior arrangement is locally finite.
      hypotheses: The article's Coxeter-system and relative-cone notation; the proof
        uses a finite-dimensional ambient space and does not assume spherical
        type.
      reading_limits: The frozen extracted article text at the statement and proof on
        PDF p. 9 and the summary on p. 2 was read. This citation attributes the
        proposition; the proof below uses the declared mathematical suppliers
        instead.
dependency_level: 10
---

## Statement

Let $\Gamma_0$ be finite, $W$ its Coxeter group, $J\subseteq\Gamma_0$, and use the relative space $E=\Theta_J$, Tits cone intersection $T=\mathrm{Cone}(J)$, and set of distinct relative hyperplanes $\mathcal H^J$ from [[def-relative-cone-artin-tits-normalisers]]. The interior $T^\circ$ is taken in $E$. Every $u\in T^\circ$ has an open ball in $T$ meeting only finitely many hyperplanes of $\mathcal H^J$. In particular $(T^\circ,\mathcal H^J)$ is locally finite, with the hyperplane set restricted to the members meeting $T^\circ$.

## Facts & Assumptions

[F1] For every $u\in T^\circ$, [[lem-author-b319c70a2611-finite-relative-ball]] supplies $r>0$ such that the relative Euclidean ball $B_E(u,r)$ is contained in $T$ and meets only finitely many distinct members of $\mathcal H^J$.

[F2] The full Tits cone is convex by clause (4) of [[math:thm-cg-tits-cone-finite-negativity-and-convexity]]. The relative cone is its intersection with the linear subspace $E$, and $T^\circ$ is its interior in the relative Euclidean topology ([[def-relative-cone-artin-tits-normalisers]]).

[F3] An arrangement is locally finite when each point of its underlying set has an open neighbourhood meeting only finitely many of its distinct hyperplanes. Restriction to a convex subset retains precisely the hyperplanes meeting that subset ([[def-hyperplane-arrangement-artin-tits-normalisers]]).

## Proof
**Given:** The finite-rank Coxeter system, subset $J$, relative space, cone intersection and relative hyperplanes in the Statement.

**Goal:** Prove the finite-ball assertion and local finiteness of the restricted interior arrangement.


**Proof technique:** direct.

1.1 Let $u\in T^\circ$. By [F1], there is $r>0$ such that $B_E(u,r)\subseteq T$ and this ball meets only finitely many members of $\mathcal H^J$. Since it is open in $E$ and contained in $T$, it is an open ball in the subspace $T$. This proves the first assertion. [given, F1]

1.2 The intersection of the convex full Tits cone with the linear subspace $E$ is convex, so $T$ is convex. If $x,y\in T^\circ$, choose positive radii $a,b$ with $B_E(x,a),B_E(y,b)\subseteq T$. For $0<t<1$, every vector of norm less than $(1-t)a+tb$ can be written as $(1-t)h+tk$ with $\|h\|<a$ and $\|k\|<b$, by taking $h=k$ to be that vector divided by $(1-t)a+tb$ and multiplied by the respective radius. Convexity therefore gives a ball about $(1-t)x+ty$ contained in $T$; the endpoints are already interior. Thus $T^\circ$ is convex. [F2, algebra]

2.1 For each $u\in T^\circ$, the ball in step 1.1 is open in $E$ and contained in $T$, hence is contained in $T^\circ$. It is consequently an open neighbourhood of $u$ in $T^\circ$ and meets only finitely many hyperplanes in the restricted set $\{H\in\mathcal H^J:H\cap T^\circ\ne\varnothing\}$. By [F3], the restricted arrangement is locally finite. [F3, step 1.1, step 1.2] ∎

## Source notes

The article is cited for attribution of the retained proposition. The finite-ball lemma proves the needed relative statement using finite separation of Tits-cone points; this proof does not use the proposition itself or assume local finiteness of the relative arrangement.
