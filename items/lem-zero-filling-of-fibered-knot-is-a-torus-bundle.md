---
id: lem-zero-filling-of-fibered-knot-is-a-torus-bundle
kind: lemma
title: "Zero filling of a fibered knot caps its fiber"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-multicusped-dehn-filling
  - def-oriented-slope-and-knot-dehn-filling
  - thm-knot-exterior-homology-and-longitude
  - lem-figure-eight-complement-punctured-torus-bundle
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "Chapter 5, §5.8.1, Construction 5.37 and Example 5.39, printed pp.206–207"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §4.5, filling slopes and meridional disks"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $K_8$ be the standard figure-eight knot with compact exterior obtained by deleting the binding neighborhood from its open-book presentation and peripheral basis $(\mu,\lambda)$, where $\mu$ is the positive meridian and $\lambda$ is the preferred zero-homology longitude. The exterior fibers over $S^1$ with fiber a once-punctured torus and monodromy fixing its boundary pointwise. Filling along the slope $\lambda$ produces a torus bundle over $S^1$. For the fiber and ordered core basis in the figure-eight plumbing convention, the induced action on the capped torus homology is $\begin{pmatrix}2&1\\1&1\end{pmatrix}$.

## Statement references

[Danny Calegari, *Foliations and the Geometry of 3-Manifolds*, Construction 5.37 and Example 5.39](https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

## Facts & Assumptions

**Given:** The chosen exterior of the standard figure-eight knot, its positive meridian and preferred longitude, and the square-plumbed fiber and monodromy convention.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ selects from every countable family of nonempty sets.

[F2] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, $\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$.

[F3] [[def-oriented-slope-and-knot-dehn-filling]]: with the stated peripheral basis, the integer coefficient $0$ is the unoriented slope represented by $\lambda$; ordinary filling attaches a solid torus whose meridian is that slope.

[F4] [[thm-knot-exterior-homology-and-longitude]]: under AC the preferred longitude is the unique primitive boundary class that maps to zero in $H_1(E_K;\mathbb Z)$, and $(\mu,\lambda)$ is a basis.

[F5] [[lem-figure-eight-complement-punctured-torus-bundle]]: the exterior is the mapping torus of a once-punctured torus, with boundary-fixing monodromy whose capped homology matrix is $\begin{pmatrix}2&1\\1&1\end{pmatrix}$.

[F6] [[def-multicusped-dehn-filling]]: a filling along a selected boundary slope is obtained by attaching an oriented solid torus with the specified meridian slope.

[F7] Any two attaching maps with the same meridian slope give oriented-homeomorphic fillings by a homeomorphism that is the identity on the unfilled exterior. [[lem-meridian-preserving-torus-homeomorphism-extends-over-solid-torus]]

## Proof

1.1 By [F2] and [A1], the needed countable-choice hypothesis [F1] holds. Let $F$ be the fiber from [F5]. Cutting the exterior along $F$ gives $F\times[0,1]$, with its interval ends reidentified by the monodromy $\varphi$; because $\varphi$ fixes $\partial F$ pointwise, the boundary torus is identified with $\partial F\times S^1$. [given, A1, F1, F2, F5, construct]

2.1 The curve $\partial F$ on the peripheral torus is an essential parallel of the knot and bounds the fiber in the exterior, so its homology class maps to zero in $H_1(E_{K_8};\mathbb Z)$. It is primitive because it is a simple essential curve. By uniqueness in [F4], it represents $\lambda$ up to orientation, hence it is exactly the unoriented filling slope $0$ by [F3]. [given, F3, F4, step 1.1, construct]

3.1 For the model gluing, use the second coordinate of $D^2\times S^1$ as the mapping-torus direction and identify the meridian disk boundary with $\partial F\times\{t\}$. The filled space is the mapping torus of $\overline F=F\cup_{\partial F}D^2$: extend $\varphi$ over the disk by the identity, which is continuous and fixes the seam since $\varphi|_{\partial F}=\mathrm{id}$. The actual filling map has the same meridian slope by [F3]; [F7] extends the transition map over the filling solid torus, so the actual filling is oriented-homeomorphic to this model mapping torus. [F3, F6, F7, step 1.1, step 2.1, construct]

4.1 The surface $\overline F$ is obtained from a once-punctured torus by capping its sole boundary component with a disk, so it is a closed torus. The mapping torus of the extended homeomorphism $\overline\varphi$ is consequently a torus bundle over $S^1$. Inclusion $F\hookrightarrow\overline F$ induces an isomorphism on first homology, and the extension is the identity on the cap, so its matrix remains the matrix in [F5]. [F5, step 3.1, algebra] ∎

## Sources

[Danny Calegari, *Foliations and the Geometry of 3-Manifolds*, Construction 5.37 and Example 5.39](https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)
