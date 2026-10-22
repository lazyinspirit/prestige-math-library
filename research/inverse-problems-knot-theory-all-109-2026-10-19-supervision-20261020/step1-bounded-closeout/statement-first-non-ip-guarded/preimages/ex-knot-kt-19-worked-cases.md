---
id: ex-knot-kt-19-worked-cases
kind: example
title: "The figure-eight complement and its nonhyperbolic zero filling"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-multicusped-dehn-filling
  - lem-zero-filling-of-fibered-knot-is-a-torus-bundle
  - lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup
  - lem-figure-eight-ideal-gluing-and-cusp-completeness
  - def-covering-map-and-evenly-covered-neighbourhoods
  - thm-covering-maps-inject-fundamental-groups
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
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
      locator: "Chapter 5, §5.8.1, Construction 5.37, Theorem 5.38 and Example 5.39, printed pp.206–207"
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §§4.1–4.4, regular ideal tetrahedra, edge equations and finite-volume cusp geometry"
verification:
  precheck: pending
---

## Example

Let $K_8$ be the standard figure-eight knot, let $E_{K_8}$ be the exterior obtained by deleting the binding neighborhood from its open-book presentation, and use the positive meridian $\mu$ and preferred longitude $\lambda$. The exterior admits a complete finite-volume hyperbolic metric obtained by gluing two regular ideal tetrahedra, of total volume $2v_3=6\Lambda(\pi/3)\approx2.02988$, where $v_3=3\Lambda(\pi/3)$ is the volume of one regular ideal tetrahedron and $\Lambda$ is the Lobachevsky function. The ordinary zero filling along $\lambda$ is a torus bundle over $S^1$ with monodromy matrix $\begin{pmatrix}2&1\\1&1\end{pmatrix}$ on the capped fiber homology, and the filled manifold admits no complete hyperbolic metric.

## Example references

[Danny Calegari, *Foliations and the Geometry of 3-Manifolds*, Construction 5.37, Theorem 5.38 and Example 5.39](https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §§4.1–4.4](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

## Diagram

The map from the punctured torus fiber to the capped torus induces the displayed integer matrix on first homology. This schematic records the fiber and base circle; it does not encode the knot projection or prove the bundle claim.

```tikz
\begin{tikzpicture}[>=stealth,scale=1]
  \draw[thick] (0,0) circle (1.0);
  \draw[thick] (0,0) ellipse (1.0 and 0.42);
  \draw[->,blue,thick] (-0.75,0) arc (180:520:0.75 and 0.30);
  \draw[->,red,thick] (0,-0.32) arc (-90:270:0.30 and 0.30);
  \node[blue] at (-1.35,0.45) {$a$};
  \node[red] at (0.45,-0.75) {$b$};
  \node at (0,1.32) {$T^2$ fiber};
  \draw[->,thick] (2.0,0)--(3.0,0);
  \node[above] at (2.5,0) {$\begin{pmatrix}2&1\\1&1\end{pmatrix}$};
  \draw[thick] (3.7,0) circle (0.30);
  \node[below] at (3.7,-0.48) {$S^1$ base};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The standard figure-eight knot with chosen compact exterior and peripheral basis $(\mu,\lambda)$, with $\lambda$ the preferred longitude.

[A1] [[def-axiom-of-choice]]: AC selects from every family of nonempty sets.

[F1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ selects from every countable family of nonempty sets.

[F2] [[thm-choice-implies-dependent-implies-countable-choice]]: in ZF, $\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$.

[F3] [[lem-figure-eight-ideal-gluing-and-cusp-completeness]]: the standard two-tetrahedron gluing gives the figure-eight exterior a complete finite-volume hyperbolic metric, with total volume $2v_3$.

[F4] [[lem-zero-filling-of-fibered-knot-is-a-torus-bundle]]: filling the figure-eight exterior along $\lambda$ caps its once-punctured torus fiber and gives the torus bundle whose homology matrix is $\begin{pmatrix}2&1\\1&1\end{pmatrix}$.

[F5] [[lem-closed-hyperbolic-three-manifold-has-no-z2-subgroup]]: a closed connected three-manifold with a complete curvature $-1$ metric has fundamental group with no subgroup isomorphic to $\mathbb Z^2$.

[F6] [[def-multicusped-dehn-filling]]: ordinary filling along $\lambda$ attaches a solid torus with meridian disk boundary in that slope.

[F7] [[def-covering-map-and-evenly-covered-neighbourhoods]]: the explicit pullback of a bundle along $\mathbb R\to S^1$ is a covering map.

[F8] [[thm-covering-maps-inject-fundamental-groups]]: every covering map induces an injective homomorphism on fundamental groups.

## Proof

1.1 By [A1] and [F2], the countable-choice premise [F1] holds. The face gluing and regular-shape assignment in [F3] give the complete finite-volume metric and its two-tetrahedron volume. By [F4] and [F6], the zero filling along the preferred longitude is the stated torus bundle. [given, A1, F1, F2, F3, F4, F6, construct]

2.1 Write the bundle as the mapping torus of its torus monodromy. Pull it back along the explicit universal cover $t\mapsto e^{2\pi i t}$ of $S^1$; its total space is $T^2\times\mathbb R$, and the pullback projection is a covering because it is trivial over each lifted bundle chart. Its fundamental group is $\pi_1(T^2)\cong\mathbb Z^2$. By [F8], this subgroup injects into the fundamental group of the filled manifold. [F7, F8, step 1.1, construct]

3.1 If the filled manifold admitted a complete hyperbolic metric, it would be a closed connected three-manifold with curvature $-1$. By [F5] its fundamental group could contain no $\mathbb Z^2$ subgroup, contradicting step 2.1. Hence the zero filling is nonhyperbolic. The original complete structure has volume $2v_3=6\Lambda(\pi/3)$ by step 1.1. [F3, F5, step 1.1, step 2.1, contradiction] ∎

## Proof references

[Danny Calegari, *Foliations and the Geometry of 3-Manifolds*, Construction 5.37, Theorem 5.38 and Example 5.39](https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf)

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §§4.1–4.4](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)
