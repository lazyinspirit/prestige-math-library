---
id: thm-seifert-matrix-presents-knot-alexander-module
kind: theorem
title: "A Seifert matrix presents the one-variable Alexander module"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-oriented-seifert-surface
  - lem-knot-infinite-cyclic-cover-cut-and-paste-presentation
  - lem-knot-normal-circle-bundle-trivialization
  - lem-knot-tubular-exterior-and-boundary
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
  - def-tubular-neighbourhood-of-an-embedded-submanifold
  - thm-knot-exterior-homology-and-longitude
  - def-one-variable-alexander-module-of-an-oriented-link
  - def-the-laurent-polynomial-ring
  - thm-classification-of-connected-covering-spaces
  - thm-regular-covering-characterizations
  - cor-deck-group-of-a-regular-covering
  - def-deck-transformation-and-deck-group
  - def-countable-choice
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links, Chapter 7.B–8.C"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, Section 6.2.3"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a smooth oriented knot in the oriented standard three-sphere, let $F$ be a connected compact smooth oriented embedded surface with boundary orientation equal to that of $K$, let $g$ satisfy $\chi(F)=1-2g$, and choose an ordered integral basis $a_1,\ldots,a_{2g}$ of $H_1(F;\mathbb Z)$. Use the positive normal convention $(n,u,v)>0$ and define $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. Let $A_K=H_1(\widetilde X_K;\mathbb Z)$ be the one-variable Alexander module of the knot complement $X_K=S^3\setminus K$, where the cover is classified by the total-linking homomorphism and $t$ acts by the deck transformation corresponding to the positive meridian. Then there is an isomorphism of $\Lambda=\mathbb Z[t^{\pm1}]$-modules
$$A_K\cong\operatorname{coker}\bigl(V-tV^T:\Lambda^{2g}\to\Lambda^{2g}\bigr).$$

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix]]

[[def-one-variable-alexander-module-of-an-oriented-link|The total-linking cover and positive deck action]]

[[lem-knot-infinite-cyclic-cover-cut-and-paste-presentation|The cut-open cover matrix convention]]

[[def-the-laurent-polynomial-ring|The coefficient ring $\Lambda$]]

## Facts & Assumptions

**Given:** Full AC, a smooth oriented knot $K$, a connected compact smooth oriented spanning surface $F$, an integral homology basis, and the positive-push convention.

[A1] Full AC implies the countable-choice hypothesis used by the tubular-neighborhood and surface normal-form suppliers, and is the stated hypothesis of Alexander duality and the one-variable module convention. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The knot normal bundle admits an orientation-preserving framing, and a tubular map gives a compact exterior $E$ whose inclusion into $X_K=S^3\setminus K$ is a homotopy equivalence. [[lem-knot-normal-circle-bundle-trivialization]], [[lem-knot-tubular-exterior-and-boundary]], [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]], [[def-tubular-neighbourhood-of-an-embedded-submanifold]]

[F2] The positive meridian generates $H_1(E;\mathbb Z)\cong\mathbb Z$, and the boundary longitude is the unique degree-one class in the kernel of its map into the exterior. [[thm-knot-exterior-homology-and-longitude]]

[F3] For a tube compatible with the surface collar, the cut-open cover has Alexander-module presentation $V-tV^T$ under the stated positive seam and linking-dual convention. [[lem-knot-infinite-cyclic-cover-cut-and-paste-presentation]]

[F4] The one-variable module is $H_1$ of the connected cover classified by the kernel of total linking, with $t$ acting by the deck transformation for $+1$; the positive meridian maps to $+1$. [[def-one-variable-alexander-module-of-an-oriented-link]]

[F5] Connected covers are classified by subgroups of $\pi_1$, normal kernels give regular covers with quotient deck group, and degree-one Hurewicz identifies total linking on $H_1$ with the corresponding homomorphism on $\pi_1$. [[thm-classification-of-connected-covering-spaces]], [[thm-regular-covering-characterizations]], [[cor-deck-group-of-a-regular-covering]], [[def-deck-transformation-and-deck-group]], [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

## Proof

1.1 **Choose a tube adapted to $F$.** The smooth boundary collar of $F$ gives $c:K\times[0,\delta)\to F$ with $c(s,0)=s$; in local ambient charts extend it smoothly a small distance to negative collar parameter, shrinking it so its image stays in the domain of a tubular chart $\Phi_0$ from [F1]. Let $\pi$ be the chart's projection to the zero section. The map
$$\Psi:K\times(-\delta,\delta)\to K\times\mathbb R,\qquad \Psi(s,r)=(\pi(c(s,r)),r)$$
is two-dimensional. At $r=0$, its derivative in the $(s,r)$ variables has block form $\begin{pmatrix}1&*\\0&1\end{pmatrix}$, so it is invertible. The inverse function theorem makes $\Psi$ a local diffeomorphism near $K\times\{0\}$. After shrinking $\delta$, each circle map $s\mapsto\pi(c(s,r))$ is $C^1$-close to the identity and hence a degree-one local diffeomorphism of the circle; it is therefore a diffeomorphism. Thus $\Psi$ is a diffeomorphism on the smaller collar, and reparameterizing by it writes the extended collar as a graph $q(s,r)$ in the normal disks, with $q(s,0)=0$ and $\partial_rq(s,0)=u(s)$, the inward conormal. Use the oriented framing in [F1] with $u(s)$ as first vector and a transverse vector $v(s)$ as second. The map $(s,r,z)\mapsto\Phi_0(s,q(s,r)+zv(s))$ has invertible derivative along the zero section and agrees with $c(s,r)$ for $z=0,r\ge0$. The inverse function theorem gives local coordinates; compactness gives a common radius, and after shrinking, distinct fibers do not collide. Reparameterizing each fiber disk by these coordinates yields an embedded tubular map for which the surface is exactly the radial half-collar $z=0,r\ge0$. [A1, F1, given, construct]

1.2 Let $E$ be the compact exterior of this adapted tube and $S=F\cap E$. Then $S$ is properly embedded and its boundary on $\partial E$ projects once positively to $K$, because it is the outer edge of the inward boundary collar. It bounds $S$ in $E$, so its homology class maps to zero in $H_1(E)$. By [F2] it is the unique degree-one class in that kernel, hence the preferred longitude. Thus the hypotheses of [F3] hold. [F2, F3, step 1.1, given, construct]

2.1 The cut-open cover supplied by [F3] has first homology the cokernel of $V-tV^T$ over $\Lambda$, with $t$ moving in the positive-meridian direction. [F3, step 1.2, given]

3.1 Let $X_K=S^3\setminus K$. By [F1], inclusion $E\hookrightarrow X_K$ is a homotopy equivalence, so it induces an isomorphism on $H_1$ and on $\pi_1$ (the latter up to basepoint conjugacy). Naturality of Alexander duality and [F2], [F4] show that the total-linking homomorphism on $X_K$ restricts to the positive-meridian homomorphism on $E$: both send the same positive meridian to $+1$. Therefore the two homomorphisms on fundamental groups have corresponding kernels under the induced $\pi_1$ isomorphism. By [F5], the connected covers classified by these kernels are isomorphic as covers, and the isomorphism sends the deck transformation for $+1$ to the deck transformation for $+1$. It consequently induces an isomorphism of their $\Lambda$-modules on first homology. The cut-open cover module in step 2.1 is thus exactly the one-variable Alexander module $A_K$, proving the displayed isomorphism. [A1, F1, F2, F4, F5, step 2.1, given] ∎

## Remarks

The tube is chosen only to realize the cut-and-stack construction; the resulting module is identified with the cover of the open complement in step 3.1. The formula uses the stated positive meridian as $t$ and the positive normal in $V_{ij}$.
