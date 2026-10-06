---
id: def-holonomy-representation-and-holonomy-group-of-a-leaf
kind: definition
title: "The holonomy representation and the holonomy group of a leaf"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 4
deps:
  - def-germ-of-a-local-diffeomorphism-at-a-point
  - lem-germs-of-local-diffeomorphisms-form-a-group
  - lem-a-leafwise-path-determines-a-germ-of-transverse-diffeomorphism
  - lem-holonomy-germ-is-independent-of-the-foliation-chart-chain
  - thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints
  - lem-holonomy-respects-path-concatenation-and-reversal
  - def-based-loops-and-fundamental-group
  - def-induced-homomorphism-on-fundamental-groups
  - def-local-transversal-to-a-regular-foliation
  - def-leaf-of-a-regular-foliation
  - def-group
  - def-subgroup
  - def-countable-choice
  - def-leafwise-path-and-leafwise-homotopy
  - thm-regular-foliations-and-integrable-distributions-correspond
  - thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: n/a
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $F$
be a regular foliation of $M$, let $L$ be a leaf
([[def-leaf-of-a-regular-foliation]]), let $x\in L$, and let $T$ be a local
transversal to $F$ at $x$ ([[def-local-transversal-to-a-regular-foliation]]).
Equip $L$ with the unique intrinsic smooth manifold structure of its maximal connected integral manifold of $TF$ ([[thm-regular-foliations-and-integrable-distributions-correspond]], [[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]). This topology, rather than the ambient subspace topology, defines $\pi_1(L,x)$. The leaf inclusion is smooth and continuous, so intrinsic leaf loops and endpoint-fixed homotopies are leafwise paths and homotopies in $M$.

Since $T$ is a smooth manifold, the germs at $x$ of local diffeomorphisms
$T\to T$ form the group $\operatorname{Diff}_x(T)$
([[def-germ-of-a-local-diffeomorphism-at-a-point]],
[[lem-germs-of-local-diffeomorphisms-form-a-group]]).

The **holonomy representation of $L$ at $x$ relative to $T$** is
$$\rho_x:\pi_1(L,x)\to\operatorname{Diff}_x(T),\qquad \rho_x([a]):=h_{a^{-1}}(T,T),$$
where $a$ is a based loop in the intrinsic leaf topology
([[def-based-loops-and-fundamental-group]],
[[def-leafwise-path-and-leafwise-homotopy]]). The inverse is essential:
the library product $[a][b]=[a*b]$ traverses $a$ first, whereas ordinary
composition of germs applies the rightmost map first. Homotopy invariance
and reversal therefore give
$\rho_x([a][b])=(h_b\circ h_a)^{-1}=h_a^{-1}\circ h_b^{-1}
=\rho_x([a])\circ\rho_x([b])$
([[thm-holonomy-depends-only-on-leafwise-homotopy-relative-endpoints]],
[[lem-holonomy-respects-path-concatenation-and-reversal]]).
Thus $\rho_x$ is a homomorphism. The unreversed map $[a]\mapsto h_a(T,T)$
is an antihomomorphism with the same image and kernel. The **holonomy
group** of $L$ at $x$ is the image
$$\operatorname{Hol}(L,x):=\rho_x\bigl(\pi_1(L,x)\bigr)\le\operatorname{Diff}_x(T),$$
a subgroup of the group of germs in the sense of [[def-subgroup]] and
[[def-group]].

Replacing $T$ by another local transversal $T_1$ at $x$ replaces $\rho_x$ by a
conjugate homomorphism: with $\alpha$ the germ of the transport across the
plaque at $x$ from $T_1$ to $T$, one has
$\rho_x^{T_1}([a])=\alpha^{-1}\circ\rho_x^{T}([a])\circ\alpha$ for every leaf
loop $a$. Indeed, viewing the loop $a$ as the concatenation of the constant path
at $x$, then $a$, then the constant path at $x$, the concatenation law gives
exactly this formula, with the constant-path germs supplying $\alpha$ and
$\alpha^{-1}$ ([[lem-holonomy-respects-path-concatenation-and-reversal]]). It
follows that the kernel of $\rho_x$ and the conjugacy class of the holonomy
group are intrinsic to the leaf and do not depend on the choice of the local
transversal $T$. The representative $\rho_x$ itself does depend on $T$.
