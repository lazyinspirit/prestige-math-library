---
id: def-simple-solid-region-in-a-coordinate-direction
kind: definition
title: "Simple solid regions in a coordinate direction and their cyclic coordinate projection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-solid-between-continuous-graphs-over-a-jordan-base, thm-solid-between-continuous-graphs-fubini-formula, def-riemann-integral-over-a-jordan-set, def-metric-interior-closure-boundary, thm-jordan-boundary-criterion, lem-cyclic-coordinate-permutations-preserve-integrals-in-r3, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. Strang and E. Herman, Calculus Volume 3 (OpenStax), section 6.8"
      url: "https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem"
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.2"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Definition

Coordinates on $\mathbb R^3$ are named $x,y,z$ for the indices $0,1,2$ of [[def-euclidean-inner-product]]. For each $k\in\{x,y,z\}$ the **cyclic coordinate projection** $\pi_k:\mathbb R^3\to\mathbb R^2$ drops the $k$th coordinate and keeps the other two in cyclic order:

$$\pi_x(p)=(p_y,p_z),\qquad \pi_y(p)=(p_z,p_x),\qquad \pi_z(p)=(p_x,p_y).$$

A **simple description of a solid in the direction $k$** is a quadruple $(k,D,\gamma_1,\gamma_2)$ in which $D\subseteq\mathbb R^2$ is compact, Jordan measurable and has nonempty interior, and $\gamma_1,\gamma_2:D\to\mathbb R$ are continuous with $\gamma_1\le\gamma_2$ on $D$ and $\gamma_1<\gamma_2$ on the interior of $D$. The **simple solid region** it describes is

$$E=\{p\in\mathbb R^3:\pi_k(p)\in D,\ \gamma_1(\pi_k(p))\le p_k\le\gamma_2(\pi_k(p))\}.$$

The set $D$ is the **base**, $\gamma_2$ the **upper graph function** and $\gamma_1$ the **lower graph function** of the description. A solid is **simple in the direction $k$** when some such description of it is supplied; the description is part of the data and is not inferred from the set $E$.

Writing $\sigma_k$ for the cyclic permutation of [[lem-cyclic-coordinate-permutations-preserve-integrals-in-r3]], so that $\sigma_k(p)=(\pi_k(p),p_k)$, the image $\sigma_k[E]$ is exactly the solid between the graphs of $\gamma_1$ and $\gamma_2$ over the base $D$ in the sense of [[def-solid-between-continuous-graphs-over-a-jordan-base]]. That set is compact and Jordan measurable by [[thm-solid-between-continuous-graphs-fubini-formula]], and $\sigma_k^{-1}$ is again a cyclic coordinate permutation, so $E$ is compact and Jordan measurable as well; integration over $E$ is that of [[def-riemann-integral-over-a-jordan-set]], and interiors, closures and boundaries are those of [[def-metric-interior-closure-boundary]].

## Remarks

- **Weak inequality on the base, strict inside.** The graphs are allowed to meet on $\partial D$, so a vertical section of $E$ over a boundary point of the base may be a single point; that is what lets a ball be described in every direction, since its two hemispherical graph functions agree exactly on the equatorial circle. The strictness on the interior of $D$ is what makes the interior of $E$ nonempty and is used where the outward normal is identified.

- **The cyclic order is not cosmetic.** With $\pi_y(p)=(p_z,p_x)$ rather than $(p_x,p_z)$, each $\sigma_k$ has determinant $1$ and each coordinate of an oriented area vector is the Jacobian determinant of the matching projection; taking the surviving coordinates in increasing order would reverse both signs in the case $k=y$ and no statement on this page would hold uniformly in $k$.

- **Nonempty interior of the base.** A base with empty interior need not make $E$ a graph: a line-segment base with $\gamma_1<\gamma_2$ produces a vertical rectangle. It does, however, make $E$ three-dimensionally content zero and makes the strictness condition on the interior vacuous. Requiring nonempty interior keeps every simple solid region a genuine solid. The boundary of $D$ has content zero by [[thm-jordan-boundary-criterion]], which is what makes the base the closure of its interior up to a negligible set in the arguments that follow.
