---
id: thm-bridge-one-is-unknot
kind: theorem
title: Bridge number one characterizes the unknot
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-knot-bridge-position-and-unknotting-number
  - lem-knot-admits-morse-height-representative
  - lem-one-extremum-arc-is-boundary-parallel
  - lem-knot-genus-zero-iff-unknot
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Jennifer Schultens, Additivity of Bridge Numbers of Knots"
      url: "https://www.math.ucdavis.edu/~jcs/pubs/addbri15.pdf"
      locator: "Introduction, printed p. 1, bridge-position convention"
    - title: "Burde and Zieschang, Knots, 2nd revised and extended edition"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/burdzies.pdf"
      locator: "§16.C, Remark 16.12 and Exercise 16.3, printed pp. 339–340"
---

## Statement

Assume the Axiom of Countable Choice used by the bridge-number definition. For every smooth oriented knot $K$ in the standard $S^3$, $b(K)=1$ if and only if $K$ is ambient isotopic through orientation-preserving diffeomorphisms to the fixed oriented coordinate circle used as the standard unknot.

## Statement references

[[def-knot-bridge-position-and-unknotting-number|Bridge number and the standard unknot]]

[[lem-knot-genus-zero-iff-unknot|A genus-zero spanning disk characterizes the standard unknot]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth oriented knot $K$ in the standard $S^3$.

[A1] The definition of $b(K)$ is the least number of local maxima over Morse representatives, and the standard unknot is the fixed coordinate circle. [[def-knot-bridge-position-and-unknotting-number]]

[F1] The set of Morse representatives is nonempty for every smooth knot. [[lem-knot-admits-morse-height-representative]]

[F2] A proper arc with one height maximum (or minimum) in a height ball bounds a bridge disk with any prescribed simple boundary arc joining its endpoints on the level sphere. [[lem-one-extremum-arc-is-boundary-parallel]]

[F3] A smooth oriented knot bounds a genus-zero spanning surface exactly when it is ambient isotopic to the standard unknot. [[lem-knot-genus-zero-iff-unknot]]

## Proof

**Given:** $\mathrm{AC}_\omega$ and the knot $K$.


1.1 Suppose $b(K)=1$. By [A1] and [F1], the nonempty set of maximum counts has least value $1$, so choose a Morse representative $K'$ with exactly one local maximum. On the circle, nondegenerate critical points alternate between maxima and minima; compactness gives finitely many, and a function on a circle has at least one minimum. Hence $h|K'$ has exactly one minimum. Choose a regular value between these two critical values. Its level sphere meets $K'$ in exactly two points, and the upper and lower balls contain one proper arc each, with respectively one maximum and one minimum. [A1, F1, given, choose]

2.1 Fix a simple arc $\beta$ on the level sphere joining the two intersection points. Apply [F2] to the upper arc and the lower arc, using this same $\beta$. The resulting bridge disks lie in opposite balls and meet only along $\beta$; their union, with its corner smoothed, is an embedded disk whose boundary is $K'$. Thus $K'$ has genus zero, and [F3] makes it ambient isotopic to the standard unknot. [F2, F3, step 1.1, construct]

3.1 Conversely, choose an orientation-preserving rotation in $SO(4)$ carrying the fixed coordinate 2-plane of the standard unknot $U$ to the plane spanned by $e_1$ and $e_4$. A path of rotations from the identity gives an ambient isotopy, and on the rotated circle the fixed height is a sine or cosine with exactly one maximum. Hence $b(U)\le1$. Every Morse function on a compact circle has at least one maximum, so $b(U)\ge1$ and $b(U)=1$. Ambient-isotopic knots have the same set of representative maximum counts, so every unknot has bridge number one. [A1, given, construct, algebra] ∎

## Sources

[[def-knot-bridge-position-and-unknotting-number]]

[[lem-one-extremum-arc-is-boundary-parallel]]

[[lem-knot-genus-zero-iff-unknot]]

## Diagram

The dashed line represents a regular level sphere in a two-dimensional cross-section; the two solid arcs are the upper and lower height arcs. The figure is only a cross-sectional schematic. The proof uses the bridge disks from [F2], not the drawing.

```tikz
\begin{tikzpicture}[scale=0.9,>=stealth]
  \draw[dashed] (-3,0) -- (3,0) node[right] {$S_c$};
  \fill (-1.4,0) circle (2pt);
  \fill (1.4,0) circle (2pt);
  \draw[thick,->] (-1.4,0) .. controls (-1.15,1.15) and (1.15,1.15) .. (1.4,0);
  \draw[thick,->] (1.4,0) .. controls (1.15,-1.15) and (-1.15,-1.15) .. (-1.4,0);
  \node[above] at (0,0.7) {one maximum};
  \node[below] at (0,-0.7) {one minimum};
  \node[left] at (-1.6,0.15) {$p_1$};
  \node[right] at (1.6,0.15) {$p_2$};
\end{tikzpicture}
```
