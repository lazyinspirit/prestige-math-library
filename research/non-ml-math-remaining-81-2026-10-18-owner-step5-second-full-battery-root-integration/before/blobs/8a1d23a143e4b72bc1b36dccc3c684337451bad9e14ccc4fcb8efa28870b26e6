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
  - prop-identity-maps-and-composites-of-smooth-maps-are-smooth
provenance:
  statement: ai-altered
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
The identity is a smooth diffeomorphism and composites of smooth maps are
smooth by
[[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]; composites of
diffeomorphisms are diffeomorphisms because their inverses are composites of
the smooth inverses. The identity covers $M$ and commutes with the right
action. If $\Phi,\Psi\in\mathcal G(P)$, then $\Phi\circ\Psi$ covers $M$ and
$(\Phi\circ\Psi)(pg)=\Phi(\Psi(p)g)=\Phi(\Psi(p))g$, so the conditions are
closed under composition. The inverse of such a $\Phi$ also covers $M$: if
$q=\Phi(p)$ then $\pi(\Phi^{-1}(q))=\pi(p)=\pi(q)$. Equivariance gives
$$\Phi^{-1}(qg)=\Phi^{-1}(\Phi(p)g)=\Phi^{-1}(\Phi(pg))=pg.$$
Its smoothness is part of the diffeomorphism condition. Hence these maps form a
group under the composition law of [[def-group]].

The structure group $G$ acts on each fibre of $P$, while $\mathcal G(P)$ acts
on the total bundle by automorphisms over the identity map of $M$. They are
different groups: a gauge transformation may vary from fibre to fibre, and
this definition assigns no topology or finite-dimensional Lie-group structure
to $\mathcal G(P)$.
