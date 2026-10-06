---
id: def-monodromy-groupoid-of-a-foliation
kind: definition
title: "The monodromy groupoid of a foliation"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
deps:
  - def-leafwise-path-and-leafwise-homotopy
  - def-homotopy-relative-and-path-homotopy
  - thm-composition-respects-homotopy
  - lem-homotopy-transitivity-by-reparametrisation
  - cor-homotopy-relative-and-path-homotopy-are-equivalence-relations
  - def-leaf-of-a-regular-foliation
  - def-countable-choice
  - thm-fundamental-group-laws
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $F$
be a regular foliation of a smooth manifold $M$ with leaf-wise structure as in
[[def-leaf-of-a-regular-foliation]], and let leafwise paths and leafwise
homotopy relative to endpoints be as in
[[def-leafwise-path-and-leafwise-homotopy]].

The **monodromy groupoid** $\operatorname{Mon}(F)$ is the groupoid with object
set $M$ whose arrows from $x$ to $y$ are the leafwise homotopy classes relative
to endpoints of leafwise paths from $x$ to $y$; there is no arrow from $x$ to
$y$ when $x$ and $y$ lie in different leaves. Composition is induced by
concatenation of leafwise paths: if $a$ is a leafwise path from $x$ to $y$ and
$b$ a leafwise path from $y$ to $z$, the composite $[b]\circ[a]$ is the class of
the concatenation of $b$ after $a$. The identity at $x$ is the class of the
constant leafwise path at $x$, and the inverse of the class of $a$ is the class
of the reversed path $a^{-1}$.

The groupoid laws have the following endpoint-fixed witnesses. If $A,B$
are homotopies of composable paths, their concatenation is
$A(s,2t)$ for $t\le1/2$ and $B(s,2t-1)$ for $t\ge1/2$; the clauses
agree at the common endpoint, so finite closed pasting makes this a leafwise
homotopy. For any endpoint-fixing reparametrization $\phi:I\to I$,
$a((1-s)t+s\phi(t))$ is an endpoint-fixed leafwise homotopy from $a$ to
$a\circ\phi$. This gives associativity and the two constant-path identities
using the explicit reparametrizations in
[[thm-fundamental-group-laws]], proof steps 2.1–2.2; those formulas work also
when the path endpoints differ. For $a:x\to y$, the path
$a((1-s)\min(2t,2-2t))$ contracts $a*a^{-1}$ to the constant path at $x$;
the same formula with $a^{-1}$ contracts $a^{-1}*a$ at $y$.
All these maps stay in the single leaf of their paths, and the formulas and
finite pasting establish continuity in $M$. Thus the displayed operations
are well defined and satisfy all groupoid laws.

The groupoid is set-theoretic: no topology is imposed on the arrow set and no
smooth structure on it is asserted here.
