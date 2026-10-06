---
id: def-holonomy-cover-of-a-leaf
kind: definition
title: "The holonomy cover of a leaf"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps:
  - lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists
  - def-holonomy-representation-and-holonomy-group-of-a-leaf
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-immersed-submanifold
  - def-countable-choice
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
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $F$
be a regular foliation of $M$, let $L$ be a leaf with base point $x$, let $T$ be
a local transversal at $x$, let
$\rho_x:\pi_1(L,x)\to\operatorname{Diff}_x(T)$ be the holonomy representation
and let $K=\ker\rho_x$
([[def-holonomy-representation-and-holonomy-group-of-a-leaf]]). The **holonomy
cover** of $L$ relative to $T$ is the connected covering
$p:\widehat L\to L$ with $p_*\pi_1(\widehat L,\hat x)=K$ supplied by
[[lem-the-covering-of-a-leaf-associated-to-the-holonomy-kernel-exists]],
equipped with a base point $\hat x$ over $x$. It exists and, by that lemma, is
unique up to an isomorphism over $L$: the construction takes the universal cover
$\widetilde L\to L$, identifies $\pi_1(L,x)$ with its deck group and puts
$\widehat L=\widetilde L/K$, so the fibre of $p$ over $z\in L$ is the set of $K$-orbits in the
universal-cover fibre over $z$.

By construction $\pi_1(\widehat L,\hat x)\cong K$ and the covering
$p:\widehat L\to L$ is the covering associated with the kernel of the holonomy
representation; the covering class of $p$ is the leaf-level input for the
finite-holonomy normal model of the Reeb stability pair, which consumes the
holonomy cover rather than the universal cover. The kernel $K$ is independent
of the choice of the local transversal $T$, because replacing $T$ conjugates
$\rho_x$ and conjugation preserves kernels, so the holonomy cover of $L$ does
not depend on $T$ up to isomorphism over $L$.
