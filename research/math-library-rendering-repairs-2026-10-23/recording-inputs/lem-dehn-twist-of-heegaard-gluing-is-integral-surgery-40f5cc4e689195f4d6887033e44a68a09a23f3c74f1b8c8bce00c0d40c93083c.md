---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-dehn-twist-of-heegaard-gluing-is-integral-surgery.json
  precheck: pass
id: lem-dehn-twist-of-heegaard-gluing-is-integral-surgery
kind: lemma
title: "A Dehn twist of Heegaard gluing is integral surgery"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-heegaard-splitting-of-closed-oriented-three-manifold
  - def-dehn-twist-on-oriented-surface
  - def-p-surgery-on-a-smooth-m-manifold
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
      locator: "Lemma 2.2 and proof, Lecture 2 §2.2, printed pp. 34–35"

---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M=H_-\cup_\varphi H_+$ be a Heegaard splitting of a closed oriented smooth $3$-manifold, let $\Sigma=\partial H_-=\partial H_+$, and let $c\subset\Sigma$ be an embedded circle with a chosen annular neighbourhood. If $\varphi$ is replaced by $\varphi\circ\tau_c$ or $\varphi\circ\tau_c^{-1}$, where $\tau_c$ is a Dehn twist in the chosen annular coordinates, the resulting oriented $3$-manifold is obtained from $M$ by one surgery on a knot $K$ obtained by pushing $c$ into the interior of $H_-$. The annulus between $c$ and the boundary of a tubular neighbourhood of $K$ supplies a framing; the surgery meridian is identified with $\mu+ \lambda_A$ or $\mu-\lambda_A$, according to the twist direction, where $\mu$ is the meridian of $K$ and $\lambda_A$ is the parallel determined by that annulus. Thus the surgery coefficient relative to this framing is integral with absolute value $1$.

## Statement references

[[def-heegaard-splitting-of-closed-oriented-three-manifold|Heegaard splitting data]]

[[def-dehn-twist-on-oriented-surface|Annular twist convention]]

[[def-p-surgery-on-a-smooth-m-manifold|Surgery on a framed knot]]

[Saveliev, Lecture 2 §2.2, Lemma 2.2 and proof](https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf)

## Facts & Assumptions

**Given:** The Heegaard splitting, an embedded circle $c\subset\Sigma$, its chosen annular coordinates, the gluing map $\varphi$, and $\mathrm{AC}_\omega$.

[F1] [[def-dehn-twist-on-oriented-surface]]: in oriented annular coordinates a Dehn twist adds one full turn between the two boundary circles and is the identity outside the annulus.

[F2] [[def-heegaard-splitting-of-closed-oriented-three-manifold]]: $M$ is obtained by gluing two handlebodies along $\Sigma$ by an orientation-reversing boundary diffeomorphism.

[F3] [[def-p-surgery-on-a-smooth-m-manifold]]: surgery removes a framed tubular neighbourhood and glues in the complementary disk-factor piece using the prescribed framing on the common boundary.

[A1] $\mathrm{AC}_\omega$ is the countable-choice hypothesis [[def-countable-choice]] used for the tubular and collar data.

## Proof


1.1 Push $c$ a small distance into $H_-$ to obtain an embedded knot $K$ and choose a closed tubular neighbourhood $N(K)$ disjoint from $\Sigma$. The collar between $c$ and the boundary of $N(K)$ is an embedded annulus $A$; its parallel boundary curve on $\partial N(K)$ is $\lambda_A$. Choose the product coordinates on $N(K)$ so that the meridian $\mu$ bounds a normal disk. [given, F2, A1, construct]

2.1 Cut $H_-\setminus\operatorname{int}N(K)$ along $A$ and reglue the two annular faces after one full turn. In annular coordinates the turn adds $2\pi$ to the angular coordinate between the two ends and is stationary near the seams. Thus on $\Sigma$ the induced map is $\tau_c$ (or its inverse if the turn is reversed). On $\partial N(K)$, a meridian crossing the annulus once returns with one extra longitude traverse, so the induced homology shear is $[\mu]\mapsto[\mu]+[\lambda_A]$ or $[\mu]\mapsto[\mu]-[\lambda_A]$, respectively; the longitude is fixed. The operation fixes the rest of $H_-$ and is smooth after rounding the product corners. [given, F1, step 1.1, construct]

3.1 Glue the identity on $H_+$ to the cut-and-reglued map on the complement of $N(K)$. Along $\Sigma$ the maps agree because the new gluing is $\varphi\circ\tau_c^{\pm1}$; hence they give an orientation-preserving diffeomorphism between the two knot exteriors. The meridian of the replacement solid torus is identified with $[\mu]\pm[\lambda_A]$, exactly the framed surgery slope from step 2.1. By [F3], filling this boundary is the stated integral surgery, so its result is the Heegaard-glued manifold with the twisted gluing map. [given, F2, F3, step 2.1, construct]

4.1 The annular parallel and its product framing are part of the supplied data, and the only auxiliary collar/tubular choices are within the $\mathrm{AC}_\omega$ interface [A1]. The construction therefore uses an actual framed knot and introduces no rational coefficient. [given, A1, step 3.1] ∎


## Remarks

The two squares below are fundamental domains of $\partial N(K)$, with opposite sides identified. Horizontal displacement represents the annular parallel $\lambda_A$ from step 1.1, and vertical displacement represents $\mu$. The dashed vertical curve is the original meridian; the solid diagonal is the replacement meridian after the annular shear in step 2.1. The two panels show the two inverse turns, with signs labeled by their induced shear on this boundary torus. They do not impose a separate right-hand surgery convention. In each case $\lambda_A$ is fixed. Step 3.1 identifies the resulting filling with the corresponding twisted Heegaard gluing; the proof does not depend on this illustration.

```tikz
\begin{tikzpicture}[scale=1.15]
\draw (0,0) rectangle (2,2);
\draw[dashed,->] (0.4,0) -- (0.4,2);
\draw[very thick,->] (0,0) -- (2,2);
\node at (1,2.55) {$\mu\longmapsto\mu+\lambda_A$};
\draw[->] (0,-0.35) -- (2,-0.35);
\node at (1,-0.65) {$\lambda_A$};
\draw[->] (-0.35,0) -- (-0.35,2);
\node at (-0.65,1) {$\mu$};
\draw (4,0) rectangle (6,2);
\draw[dashed,->] (4.4,0) -- (4.4,2);
\draw[very thick,->] (6,0) -- (4,2);
\node at (5,2.55) {$\mu\longmapsto\mu-\lambda_A$};
\draw[->] (4,-0.35) -- (6,-0.35);
\node at (5,-0.65) {$\lambda_A$};
\draw[->] (3.65,0) -- (3.65,2);
\node at (3.35,1) {$\mu$};
\end{tikzpicture}
```
