---
id: lem-regular-link-diagram-admits-normalized-height-realization
kind: lemma
title: "A regular link diagram admits a normalized height realization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-countable-choice
  - def-regular-oriented-link-diagram
  - lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable 3-Manifolds"
      url: "https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content"
      locator: "§2.5, printed pp. 16–18 (PDF pp. 24–26), for link and meridian conventions; the height normalization is proved locally."
    - title: "John Milnor, Link Groups"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf"
      locator: "§§1–2, full paper PDF pp. 1–6, link and meridian context; the height normalization is proved locally."
---

## Statement

Assume countable choice. Let $D$ be a finite regular oriented diagram of a
nonempty labeled smooth link $L\subset\mathbb R^3$, and assume every component
has at least one underpassing point. Then $L$ is ambient isotopic through links
with the same projection and crossing data to a smooth height realization
$$\widehat L=\{(\gamma_i(s),\widehat\eta_i(s)):s\in S^1,\ 1\le i\le r\} \subset\mathbb R^2\times[-1,0]$$
such that $\widehat\eta_i(s)=-1$ exactly at the underpassing parameters on
component $i$ and $\widehat\eta_i(s)>-1$ at every other parameter.

## Statement references

[[def-regular-oriented-link-diagram|Regular oriented link diagrams and crossing data]]

[[lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy|Ambient isotopy extension for compact embedded submanifolds]]

## Facts & Assumptions

**Given:** Countable choice, a finite regular oriented diagram, its smooth embedded realization, and at least one underpassing parameter on each component.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is [[def-countable-choice]].

[F1] A regular oriented diagram has a fixed planar projection which is an immersion with finitely many transverse double points and records which branch is over at each point. [[def-regular-oriented-link-diagram]]

[F2] A smooth isotopy of a compact embedded link in a boundaryless smooth $3$-manifold extends to an ambient isotopy under countable choice. [[lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy]], [[def-countable-choice]]

## Proof

**Given:** The diagram, its initial height functions, and [A1].

1.1 Parameterize component $i$ by $S^1=\mathbb R/\mathbb Z$, and let
$U_i=\{u_{i,1},\ldots,u_{i,m_i}\}$ be its nonempty finite set of underpassing
parameters. Define
$$p_i(s)=\prod_{a=1}^{m_i}\bigl(1-\cos(2\pi(s-u_{i,a}))\bigr).$$
Every factor is smooth and nonnegative, and it vanishes exactly when
$s=u_{i,a}$ in $S^1$. Thus $p_i$ is smooth, vanishes exactly on $U_i$, and is
positive somewhere because a finite subset does not exhaust $S^1$. Its maximum
$P_i$ is positive by compactness. Set
$\widehat\eta_i(s)=-1+p_i(s)/P_i$. Then $-1\le\widehat\eta_i\le0$,
equality at $-1$ holds exactly on $U_i$, and all other heights are greater than
$-1$. [A1, F1, given, construct, construct]

1.2 At every projected double point, the overpassing parameter is not an
underpassing parameter: regularity excludes triple points, so the two source
parameters at that double point have distinct over/under roles. Hence the new
height difference between the over and under branches is strictly positive.
Let $\eta_i$ be the original height function and choose a smooth
$\varphi:[0,1]\to[0,1]$ equal to $0$ near $0$ and $1$ near $1$. The family
$$F_t(i,s)=\bigl(\gamma_i(s),(1-\varphi(t))\eta_i(s)+\varphi(t)\widehat\eta_i(s)\bigr)$$
is smooth and stationary near both endpoints. At each crossing its over-minus-
under height is a convex combination of two positive numbers, so it remains
positive. Since [F1] lists all projected multiple points, each $F_t$ is
injective; its projection remains an immersion, so each compact-source map is
a smooth embedding. [A1, F1, given, step 1.1, algebra]

2.1 The track of the isotopy in step 1.2 is compact, so choose an open ball
containing it and apply [F2] with that ball as the support neighborhood. The
resulting ambient isotopy of $\mathbb R^3$ has compact support and therefore
extends by the identity at $\infty$ to an ambient isotopy of $S^3$. It carries
the original link to $\widehat L$ and fixes the planar projection and
over/under data throughout, because every slice of $F$ has those same data.
This proves the stated normalized realization. [A1, F2, step 1.2, choose, construct] ∎
