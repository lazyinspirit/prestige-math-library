---
id: lem-germs-of-local-diffeomorphisms-form-a-group
kind: lemma
title: "Germs of local diffeomorphisms at a point form a group"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
  - def-germ-of-a-local-diffeomorphism-at-a-point
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-group
  - def-subgroup
  - prop-smooth-maps-are-continuous
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

With the notation of [[def-germ-of-a-local-diffeomorphism-at-a-point]]:
composition of representatives induces a well-defined binary operation on
$\operatorname{Diff}_x(M)$; this operation is associative, the germ of the
identity is a two-sided identity, and every germ has a two-sided inverse. Hence
$\operatorname{Diff}_x(M)$ is a group.

## Facts & Assumptions

**Given:** A smooth manifold $M$ and a point $x\in M$, with $\operatorname{Diff}_x(M)$ the set of germs at $x$ of local diffeomorphisms $(M,x)\to(M,x)$.

[F1] A germ of local diffeomorphisms at $x$ is an equivalence class of local diffeomorphisms $f:U\to V$ with $x\in U$, $f(x)=x$, two representatives being equivalent when they agree on a neighbourhood of $x$; the product of two germs is represented by the composite on the common domain, the identity germ is that of $\mathrm{id}_M$, and the inverse germ is that of a local inverse ([[def-germ-of-a-local-diffeomorphism-at-a-point]]).

[F2] A local diffeomorphism is a smooth map every point of which has an open neighbourhood mapped diffeomorphically onto an open set; in particular each local diffeomorphism has a smooth local inverse ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F3] A group is a monoid in which every element is invertible, i.e. a set with an associative binary operation, a two-sided identity, and two-sided inverses ([[def-group]], [[def-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 **Well-definedness.** Let $f:U\to V$ and $f':U'\to V'$ be equivalent representatives of one germ at $x$, and $g:W\to Z$ and $g':W'\to Z'$ equivalent representatives of another, all fixing $x$. Choose an open neighbourhood $N\subseteq U\cap U'$ of $x$ with $f|_N=f'|_N$. Then $g^{-1}(N)\cap W$ and $g'^{-1}(N)\cap W'$ are open neighbourhoods of $x$, because $g(x)=g'(x)=x$ and both are smooth, hence continuous ([[prop-smooth-maps-are-continuous]]), and on the intersection $P:=(g^{-1}(N)\cap W)\cap(g'^{-1}(N)\cap W')\cap Q$, where $Q$ is an open neighborhood of $x$ on which $g=g'$, one has $f\circ g=f'\circ g'$, since $g=g'$ near $x$ and then $f=f'$ on the common image. So the composite germ $[f]\cdot[g]:=[f\circ g]$ does not depend on the representatives. [F1, F2]

1.2 **Associativity and identity.** Representatives of three germs all fix $x$; on a sufficiently small common neighbourhood the composites $(f\circ g)\circ h$ and $f\circ(g\circ h)$ agree, because composition of functions is associative. Likewise $f\circ\mathrm{id}=\mathrm{id}\circ f=f$ near $x$, so the germ of $\mathrm{id}_M$ is a two-sided identity. Hence the operation is associative with a two-sided identity. [F1]

1.3 **Inverses.** Let $f:U\to V$ represent a germ in $\operatorname{Diff}_x(M)$, so $f(x)=x$. By [F2] there is an open neighbourhood $A\subseteq U$ of $x$ such that $f|_A$ is a diffeomorphism onto the open set $f(A)$; the inverse $g:=(f|_A)^{-1}:f(A)\to A$ is a local diffeomorphism with $g(x)=x$. Its germ $[g]$ satisfies $[f]\cdot[g]=[\mathrm{id}]$ and $[g]\cdot[f]=[\mathrm{id}]$, because $f\circ g$ and $g\circ f$ are the identity on neighbourhoods of $x$. [F1, F2, construct]

2.1 **Conclusion.** The product is well defined (step 1.1), associative with two-sided identity (step 1.2), and every element is invertible (step 1.3). By [F3] the set $\operatorname{Diff}_x(M)$ with this operation is a group. [F3, step 1.1, step 1.2, step 1.3] ∎
