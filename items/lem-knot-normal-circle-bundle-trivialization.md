---
id: lem-knot-normal-circle-bundle-trivialization
kind: lemma
title: "The oriented normal bundle of a knot is trivial"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-normal-and-conormal-bundles-of-an-embedded-submanifold
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Section 3.3, pp. 26-30"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Section 4.4, meridian and peripheral orientation conventions"
    - title: "Allen Hatcher, Vector Bundles and K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Section 1.2, Proposition 1.14 and the discussion of oriented bundles over $S^1$, printed pp. 25-26"
---

## Statement

For every smooth oriented embedding $K:S^1\to S^3$, let $\nu_K=K^*TS^3/dK(TS^1)$ be the quotient normal bundle. Orient its two-dimensional fibres so that a positive tangent to $K$ followed by a positive basis of the normal fibre gives the fixed orientation of $S^3$. Then $\nu_K$ admits a smooth orientation-preserving bundle isomorphism $\nu_K\cong K\times\mathbb R^2$.

## Statement references

[Calegari, §3.3](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Cattabriga and Francaviglia, §4.4](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Hatcher, Vector Bundles and K-Theory, §1.2](https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf)

## Facts & Assumptions

**Given:** A smooth oriented embedding $K:S^1\to S^3$ and the fixed orientation of $S^3$.

[F1] [[def-oriented-link-in-s-three-and-ambient-isotopy]] defines an oriented knot as a smooth embedding of an oriented circle into the standard oriented three-sphere.

[F2] [[def-normal-and-conormal-bundles-of-an-embedded-submanifold]] defines the normal-bundle set as the fibrewise quotient of the ambient tangent bundle by the tangent bundle of the embedded submanifold.

## Proof

**Proof technique:** direct.

1.1 Use an orientation-preserving identification of the standard three-sphere with the unit sphere in $\mathbb R^4$. Write the knot as $\gamma:S^1\to S^3\subset\mathbb R^4$ and set $\tau(s)=\gamma'(s)/\lVert\gamma'(s)\rVert$. Since $\gamma(s)$ is unit and $\gamma$ is an immersion, $\gamma(s)$ and $\tau(s)$ are orthonormal. The plane $P_s=\{v\in\mathbb R^4:\langle v,\gamma(s)\rangle=\langle v,\tau(s)\rangle=0\}$ is therefore a smooth rank-two subbundle of $TS^3|_K$. Orthogonal projection $v\mapsto v-\langle v,\tau(s)\rangle\tau(s)$ has kernel $\mathbb R\tau(s)$ and image $P_s$, so it identifies this subbundle smoothly with the quotient $\nu_K$ of [F2]. Orient $P_s$ by the rule in the statement. [F1, F2, construct, algebra]

1.2 Cut $S^1$ at one point and fix an oriented local frame on an arc about the cut. Compactness of the remaining interval gives a finite subdivision whose closed subintervals each lie in a bundle-trivializing chart. Inductively extend a frame from one subinterval to the next: on a small overlap, the incoming and chart frames differ by a smooth map into $\mathrm{GL}^+(2,\mathbb R)$. Shrink the overlap so that this map lies in a neighbourhood of its value at the junction where straight interpolation remains in $\mathrm{GL}^+$. Then join that constant value to the identity by a path in $\mathrm{GL}^+$ and use a smooth cutoff to extend the transition across the new subinterval, making the adjusted frame agree on a collar of the junction and be a fixed chart frame away from it. This can be done at each of the finitely many junctions, with the first and last collars expressed in the fixed cut-arc frame by constant matrices. The required paths exist because Gram–Schmidt writes every matrix in $\mathrm{GL}^+(2,\mathbb R)$ as a rotation times an upper-triangular matrix with positive diagonal; rotations are path-connected and the positive-diagonal triangular matrices contract linearly to the identity. We obtain a smooth oriented interval frame with constant transition matrices at its endpoint collars. [F1, F2, construct, choose]

2.1 Under the endpoint identification, the two endpoint frame germs differ by a constant matrix $A\in\mathrm{GL}^+(2,\mathbb R)$ by step 1.2. Choose a smooth path $B(t)$ from the identity to $A^{-1}$ that is constant on collars of $0$ and $1$, and multiply the interval frame by $B(t)$. The endpoint values and germs now agree under the identification, because the original germs differ by the constant $A$ and $B$ is constant on their collars. The adjusted frame descends smoothly to an oriented frame on $S^1$, giving the required bundle isomorphism. [step 1.2, construct, choose, algebra] ∎
