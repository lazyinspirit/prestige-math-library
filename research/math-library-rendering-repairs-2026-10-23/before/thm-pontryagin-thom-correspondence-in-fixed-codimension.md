---
id: thm-pontryagin-thom-correspondence-in-fixed-codimension
kind: theorem
title: "The Pontryagin-Thom correspondence in fixed codimension"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 6
deps:
  - def-pontryagin-thom-map-of-a-framed-submanifold
  - lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps
  - lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages
  - lem-regular-value-choice-does-not-change-the-framed-cobordism-class
  - lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold
  - lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map
  - def-framed-regular-preimage-of-a-map-to-a-sphere
  - lem-based-and-free-homotopy-classes-of-sphere-maps-agree
  - def-framed-cobordism-of-embedded-submanifolds
  - lem-framed-cobordism-is-an-equivalence-relation
  - thm-morse-sard-for-smooth-manifolds
  - cor-regular-values-form-a-dense-g-delta-set
  - cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map
  - thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic
  - def-higher-homotopy-group-by-based-cubes
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Theorems A, B and C, printed pp.42-51"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Theorem 3.9, printed pp.26-28"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "6.10 and Proposition 6.13, electronic pp.112-113"
    - title: "John Milnor and James Munkres, Differential Topology (Prentice-Hall, 1974)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/difftop.pdf"
      locator: "Theorems 3.15 and 3.16, printed pp.26-28"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]] is inherited from the
transversality and approximation suppliers). For $n\ge k\ge1$ the collapse
construction and the framed-regular-preimage construction define mutually
inverse bijections between

- the set of framed cobordism classes of closed framed $(n-k)$-submanifolds of
  $S^n$ ([[def-framed-cobordism-of-embedded-submanifolds]]) and
- the $n$-th homotopy group $\pi_n(S^k)$
  ([[def-higher-homotopy-group-by-based-cubes]]).

Equivalently, they give a bijection with the set $[S^n,S^k]$ of free homotopy
classes of continuous maps
([[lem-based-and-free-homotopy-classes-of-sphere-maps-agree]]). The statement
includes the empty preimage and the case $n=k$, where the framed submanifolds
are zero-dimensional.

## Facts & Assumptions

**Given:** Integers $n\ge k\ge1$, the sphere $S^n$, and the framed cobordism relation on closed framed $(n-k)$-submanifolds of $S^n$.

[F1] The Pontryagin-Thom map $f_{(N,\varphi)}$ of a framed submanifold is a based continuous map, smooth in the radial cutoff model of the construction, and it is the composite of the collapse with the framing homeomorphism and the based projection ([[def-pontryagin-thom-map-of-a-framed-submanifold]]).

[F2] Framed-cobordant submanifolds have based homotopic Pontryagin-Thom maps ([[lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps]]).

[F3] Every continuous map $S^n\to S^k$ is homotopic to a smooth map, and continuously homotopic smooth maps are smoothly homotopic ([[cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map]], [[thm-continuously-homotopic-smooth-maps-are-smoothly-homotopic]]).

[F4] A smooth map has regular values, they are dense, and at a regular value with any positive basis the framed regular preimage is defined ([[thm-morse-sard-for-smooth-manifolds]], [[cor-regular-values-form-a-dense-g-delta-set]], [[def-framed-regular-preimage-of-a-map-to-a-sphere]]).

[F5] Along a smooth homotopy whose endpoints have a common regular value and fixed positive basis, the framed preimages are framed cobordant; and both the framed preimage class and the homotopy class of the collapse are independent of the regular value, the positive basis and the smooth representative ([[lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages]], [[lem-regular-value-choice-does-not-change-the-framed-cobordism-class]]).

[F6] The framed regular preimage of the Pontryagin-Thom map of $(N,\varphi)$, at its centre and the corresponding positive basis, is $(N,\varphi)$ on the nose ([[lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold]]), and the Pontryagin-Thom map of the framed preimage of a smooth map is smoothly homotopic to that map ([[lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map]]).

[F7] Based and free homotopy classes of maps $S^n\to S^k$ agree ([[lem-based-and-free-homotopy-classes-of-sphere-maps-agree]]).

[F8] Framed cobordism is an equivalence relation, so "framed cobordism class" is a set of framed submanifolds ([[lem-framed-cobordism-is-an-equivalence-relation]]).

## Proof

1.1 (The map $\Phi$ on classes.) First take the free homotopy class of $f_{(N,\varphi)}|_{S^n}$, and use the inverse of the forgetful bijection [F7] to define $\Phi(N,\varphi)\in\pi_n(S^k)$. The disjoint basepoint of $(S^n)_+$ does not by itself make that restriction based at a preselected point of $S^n$. By [F2], framed-cobordant framed submanifolds have based homotopic Pontryagin-Thom maps, so $\Phi$ is constant on framed cobordism classes and induces a map $\Phi$ from framed cobordism classes to $\pi_n(S^k)$. [F1, F2, F7, F8]

1.2 (The map $\Psi$ on classes.) For a continuous map $f:S^n\to S^k$, choose a smooth map $f'$ homotopic to it by [F3], a regular value $y$ of $f'$ and a positive basis $b$ of $T_yS^k$ (a positive basis exists since the orientation of $T_yS^k$ has two classes and one flips sign by negating a vector), and set $\Psi(f):=[(f'^{-1}(y),f'_*b)]$, the framed cobordism class of the framed regular preimage. This is well defined: any two smooth maps homotopic to $f$ are smoothly homotopic by [F3], and [F5] gives framed cobordism of the resulting preimages for different smooth representatives, different regular values and different positive bases. Hence $\Psi$ induces a map $\Psi:\pi_n(S^k)\to\{\text{framed cobordism classes}\}$, defined without choosing a representative of the class: for every representative and every admissible choice the value is the same. [F3, F4, F5]

2.1 ($\Psi\circ\Phi$ is the identity.) Let $(N,\varphi)$ be a closed framed $(n-k)$-submanifold and $f=f_{(N,\varphi)}$ its Pontryagin-Thom map, which is smooth by [F1]. Its centre $y_0$ is a regular value and the framed preimage of $(f,y_0,b)$ is $(N,\varphi)$ on the nose by [F6], where $b$ is the positive basis corresponding to the structure identification. Therefore one admissible choice in the definition of $\Psi$ gives the class of $(N,\varphi)$, and by the well-definedness proved in step 1.2 every admissible choice gives it: $\Psi(\Phi(N,\varphi))=[(N,\varphi)]$. [F1, F6, step 1.2]

2.2 ($\Phi\circ\Psi$ is the identity.) Let $[f]\in\pi_n(S^k)$ and let $(N,\varphi)$ be the framed preimage produced by $\Psi$ from a smooth map $f'$ homotopic to $f$, a regular value $y$ and a positive basis $b$. Then $\Phi(\Psi[f])=[f_{(N,\varphi)}]$, and $f_{(N,\varphi)}$ is smoothly homotopic to $f'$ by [F6]; since $f'$ is homotopic to $f$, the classes agree: $\Phi(\Psi[f])=[f]$. [F5, F6, step 1.2]

3.1 (Conclusion.) Steps 1.1-1.2 define the two maps, and steps 2.1-2.2 show that their composites are the identities on the two sets; hence they are mutually inverse bijections. Composing $\Psi$ with the identification of based and free classes [F7] gives the corresponding bijection with $[S^n,S^k]$. The case $n=k$ is included: the preimages are zero-dimensional, and the empty manifold is allowed as a framed submanifold and as a preimage. Only $\mathrm{AC}_\omega$, inherited through the transversality, approximation and normal-bundle suppliers, is used. [F1, F5, F7, F8, step 1.1, step 1.2, step 2.1, step 2.2] ∎
