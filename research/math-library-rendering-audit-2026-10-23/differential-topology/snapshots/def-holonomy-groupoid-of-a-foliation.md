---
id: def-holonomy-groupoid-of-a-foliation
kind: definition
title: "The holonomy groupoid of a foliation"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
deps:
  - def-monodromy-groupoid-of-a-foliation
  - lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
  - thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints
  - lem-holonomy-respects-path-concatenation-and-reversal
  - def-local-transversal-to-a-regular-foliation
  - def-germ-of-a-local-diffeomorphism-at-a-point
  - def-countable-choice
justified_by:
  - lem-holonomy-classes-form-a-groupoid-congruence
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
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $F$
be a regular foliation of $M$. Two leafwise paths with the same endpoints $x,y$
are **holonomy-equivalent** when their holonomy germs relative to some choice of
local transversals at $x$ and $y$ agree
([[lem-holonomy-germ-is-independent-of-the-foliation-chart-chain]],
[[def-local-transversal-to-a-regular-foliation]]). By chain independence the
answer does not depend on the choice of the transversals: by the concatenation
law [[lem-holonomy-respects-path-concatenation-and-reversal]], passing from the
pair of transversals $(T,T')$ to another pair $(T_1,T_1')$ replaces the germ
$h_c(T',T)$ of any leafwise path $c$ from $x$ to $y$ by
$\beta\circ h_c(T',T)\circ\alpha^{-1}$, where $\alpha$ and $\beta$ are the
germs of constant-path transport $\alpha:(T,x)\to(T_1,x)$ and
$\beta:(T',y)\to(T_1',y)$ across the plaques at the endpoints; since the same two germs
$\alpha,\beta$ occur for every such path $c$, the relation "the two germs
agree" is the same for the two choices. So "one choice" and "every choice" give
the same relation.

The **holonomy groupoid** $\operatorname{Hol}(F)$ is the groupoid with object
set $M$ whose arrows from $x$ to $y$ are the holonomy classes of leafwise paths
from $x$ to $y$; there is no arrow between points in different leaves.
Composition is induced by concatenation of leafwise paths, the identity at $x$
is the class of the constant path, and inverses are induced by reversal. That
these operations are well defined on holonomy classes, and that
$\operatorname{Hol}(F)$ is a groupoid, is the content of
[[lem-holonomy-classes-form-a-groupoid-congruence]], which is recorded as the
well-definedness certificate of this definition. By
[[thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints]] and
[[lem-holonomy-respects-path-concatenation-and-reversal]] leafwise homotopy relative to endpoints refines
the holonomy relation, and multiplicativity of holonomy germs
is what makes composition descend.

Thus $\operatorname{Hol}(F)$ is the quotient of the monodromy groupoid
$\operatorname{Mon}(F)$ of [[def-monodromy-groupoid-of-a-foliation]] by the
relation that identifies arrows with equal holonomy germs: the projection
$\operatorname{Mon}(F)\to\operatorname{Hol}(F)$ sends the leafwise homotopy
class of a path to its holonomy class. Arrows whose endpoints are not composable
have no composite. As for the monodromy groupoid, no topology on the arrow set
is imposed and no smooth structure on it is asserted.
