---
id: ex-fibre-foliation-of-a-mapping-torus-is-taut
kind: example
title: A fibre foliation of a mapping torus is taut
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
- def-countable-choice-principle-for-foliation-pair
- def-taut-codimension-one-foliation
- lem-a-reeb-component-obstructs-tautness
- lem-a-taut-foliation-of-a-compact-connected-manifold-is-met-by-a-single-closed-transversal
- prop-gluing-two-reeb-components-gives-a-foliation-of-s-three
- prop-mapping-torus-foliations-realize-global-reeb-stable-examples
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 5
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete
      author-hosted PDF)
    url: https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf
    locator: §4.4, printed pp. 155-157
  - title: 'Samuel Ranz, Approximately Holomorphic Techniques in Foliations: A Simple Proof of Novikov''s Theorem
      (PhD thesis, Universidad Autonoma de Madrid, 2024; complete PDF)'
    url: https://www.icmat.es/Thesis/2024/Tesis_Samuel_Ranz.pdf
    locator: §2.1, printed pp. 32-36
---

## Example

Assume Countable Choice $\mathrm{AC}_\omega$. Let $L$ be a nonempty closed connected smooth manifold and $f:L\to L$ a diffeomorphism, with mapping torus $M_f=(L\times\mathbb R)/\mathbb Z$, where $k\cdot(x,t)=(f^k(x),t+k)$, and fibre foliation $F_f$ ([[prop-mapping-torus-foliations-realize-global-reeb-stable-examples]]). Every leaf is compact and diffeomorphic to $L$. There is a smooth path $a:[0,1]\to L$, constant near its endpoints, with $a(1)=f(a(0))$, and its graph $t\mapsto[a(t),t]$ descends to a smooth embedded closed transversal meeting every fibre exactly once. Consequently $F_f$ is taut and a single closed transversal meets all its leaves.

## Facts & Assumptions

**Given:** A nonempty closed connected smooth manifold $L$, a diffeomorphism $f:L\to L$, the mapping torus $M_f=(L\times\mathbb R)/\mathbb Z$ with its fibre foliation $F_f$ whose leaves are the fibres $L\times\{t\}$.

[F1] The mapping-torus foliations realize the global Reeb-stable examples: the fibres of $M_f$ are the leaves of $F_f$, each diffeomorphic to $L$ and compact ([[prop-mapping-torus-foliations-realize-global-reeb-stable-examples]]).

[F2] A foliation is taut when every leaf admits a closed transversal ([[def-taut-codimension-one-foliation]]), and on a nonempty compact connected manifold the leaf-by-leaf condition is equivalent to the existence of a single closed transversal meeting every leaf ([[lem-a-taut-foliation-of-a-compact-connected-manifold-is-met-by-a-single-closed-transversal]]).

[F3] [[prop-gluing-two-reeb-components-gives-a-foliation-of-s-three]] and [[lem-a-reeb-component-obstructs-tautness]] give the negative comparison, the non-taut Reeb foliation of $S^3$; the standing assumption is Countable Choice $\mathrm{AC}_\omega$ as recorded for this pair ([[def-countable-choice-principle-for-foliation-pair]]).

## Verification

**Proof technique:** direct.

1.1 Gluing the two standard Reeb solid tori produces the Reeb foliation of $S^3$, with their common boundary torus a leaf and each torus a Reeb component. The Reeb-component obstruction implies that no closed transversal meets that boundary leaf, so the resulting foliation is not taut. This supplies the negative comparison directly from the general obstruction. [F3]

1.2 A connected smooth manifold is path connected, so join a chosen $x_0\in L$ to $f(x_0)$ by a finite smooth chartwise path, smooth its finitely many corners and reparametrize it to be constant near $0$ and $1$; this gives a smooth path $a:[0,1]\to L$ with $a(0)=x_0$, $a(1)=f(x_0)$ and stationary ends. [given, construct]

2.1 Extend $a$ by $a(t+k)=f^k(a(t))$; the stationary ends make the extension smooth across every integer, and the graph $t\mapsto[a(t),t]$ is periodic under the diagonal mapping-torus action $k\cdot(x,t)=(f^k(x),t+k)$, hence descends to a smooth closed curve in $M_f$. [F1, step 1.2]

3.1 The descended curve is embedded because its composition with the base projection $S^1\to S^1$ is the identity, so distinct parameters have distinct images; its derivative has base component $1$, so it is everywhere positively transverse to the fibre foliation $F_f$. [F1, step 2.1]

4.1 The curve meets every fibre exactly once, because the base component of its parametrization runs monotonically once around the circle; hence the leaf-by-leaf condition of tautness holds for $F_f$ directly, with no fixed point of $f$ assumed. [F2, step 3.1]

5.1 Since $L$ is nonempty, $M_f$ is nonempty, compact and connected, [F2] upgrades the leaf-by-leaf condition to a single closed transversal meeting every leaf, so $F_f$ is taut and a single closed transversal meets all its leaves. This verifies the positive model dual to the non-taut Reeb foliation example [F3], and the construction uses one finite chartwise path, hence only the standing countable choice from [F3]. [F2, F3, step 4.1] ∎
