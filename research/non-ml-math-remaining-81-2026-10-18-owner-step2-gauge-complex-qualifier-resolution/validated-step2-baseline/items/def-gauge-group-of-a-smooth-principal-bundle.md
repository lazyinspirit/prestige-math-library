---
id: def-gauge-group-of-a-smooth-principal-bundle
kind: definition
title: Gauge group of a smooth principal bundle
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
axiom_base: "No choice principle is used."
deps:
  - def-smooth-principal-g-bundle
  - def-smooth-map-between-manifolds-with-boundary
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-group
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "D. Husemöller, M. Joachim, B. Jurčo, and M. Schottenloher, Basic Bundle Theory and K-Cohomology Invariants"
      url: "https://www.mathematik.uni-muenchen.de/~schotten/Texte/978-3-540-74955-4_Book_LNP726corr1.pdf"
      locator: "Part I, Chapter 5, §5.6, Definition 6.1, printed p. 62 (PDF p. 77)."
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/pdf/2110.06334"
      locator: "Chapter 2, §2.1, printed pp. 53–54 (PDF pp. 52–53), definition of gauge transformation as a base-fixing principal automorphism."
verification:
  precheck: n/a
---

## Definition

Let $\pi:P\to M$ be a smooth right principal $G$-bundle as in
[[def-smooth-principal-g-bundle]]. A **smooth gauge transformation** of $P$ is
a smooth diffeomorphism $\Phi:P\to P$ satisfying
$$\pi\circ\Phi=\pi,\qquad \Phi(pg)=\Phi(p)g\quad(p\in P,\ g\in G).$$
Here diffeomorphism has the meaning of
[[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]. The **gauge
group** $\mathcal G(P)$ is the set of these transformations under composition.
The identity satisfies the two conditions, compositions preserve them, and
the inverse of such a $\Phi$ also covers $M$ and commutes with the right
$G$-action: writing $q=\Phi(p)$ gives
$\Phi^{-1}(qg)=\Phi^{-1}(\Phi(p)g)=\Phi^{-1}(\Phi(pg))=pg$. Hence these maps
form a group under the composition law of [[def-group]].

The structure group $G$ acts on each fibre of $P$, while $\mathcal G(P)$ acts
on the total bundle by automorphisms over the identity map of $M$. They are
different groups: a gauge transformation may vary from fibre to fibre, and
this definition assigns no topology or finite-dimensional Lie-group structure
to $\mathcal G(P)$.
