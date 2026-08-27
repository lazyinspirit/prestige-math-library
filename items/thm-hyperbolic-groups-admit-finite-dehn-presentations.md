---
id: thm-hyperbolic-groups-admit-finite-dehn-presentations
kind: theorem
title: "Hyperbolic groups admit finite Dehn presentations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-presentation, def-hyperbolic-group, thm-morse-stability-of-quasi-geodesics]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.4"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.3"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

Let $G$ be a hyperbolic group. Then $G$ admits a finite presentation
$\langle S \mid R \rangle$ with the following Dehn property: every nonempty
freely reduced word $w$ over $S^{\pm 1}$ representing the identity in $G$
contains a subword $u$ such that $u$ is longer than half of some cyclic
conjugate $uv$ of a relator in $R^{\pm 1}$.

## Facts & Assumptions

**Given:** A hyperbolic group $G$.

[A1] There is an integer $L\ge1$, depending only on the hyperbolicity
constant, such that an $L$-local geodesic is a uniform quasi-geodesic and no
nonempty closed path is an $L$-local geodesic.

[A2] For a fixed finite generating set, there are only finitely many words of
length at most $2L$.

## Proof

**Proof technique:** direct.

1.1 Choose a finite generating set $S$ for $G$ and an integer $L$ as in [A1]. Let $R$ be the finite set of freely reduced words over $S^{\pm1}$ of length at most $2L$ that represent the identity. Finiteness follows from [A2], and $\langle S\mid R\rangle$ presents $G$ once the Dehn property below is proved. [given, A1, A2, construct]

2.1 Suppose a nonempty freely reduced trivial word $w$ contains no subword longer than half of a cyclic conjugate of a member of $R^{\pm1}$. If a subword of $w$ of length at most $L$ were nongeodesic, choose one of minimal length and call it $u$, and choose a shorter geodesic word $v$ with the same endpoints. Minimality of $u$ implies that $u$ and $v$ share neither an initial nor a terminal edge: deleting such a common edge would give a shorter nongeodesic subword. Hence the loop word $uv^{-1}$ is freely and cyclically reduced. It belongs to $R$, has length $|u|+|v|<2|u|\le2L$, and contains $u$ as more than half of a cyclic conjugate, a contradiction. Thus every length-at-most-$L$ subword of $w$ is geodesic, so the closed path labelled by $w$ is an $L$-local geodesic. [step 1.1, choose, algebra]

3.1 Fact [A1] forbids a nonempty closed $L$-local geodesic, contradicting step 2.1. Hence every nonempty freely reduced trivial word has the required long relator subword. This is the Dehn property, so the finite set $R$ presents $G$ and gives a finite Dehn presentation. [A1, step 1.1, step 2.1] ∎
