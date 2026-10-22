---
id: ex-knot-kt-45-worked-cases
kind: example
title: "The trefoil Khovanov-to-Floer rank calculation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - lem-trefoil-reduced-khovanov-rank-three
  - thm-os-khovanov-spectral-sequence-to-branched-cover-floer
  - lem-trefoil-double-branched-cover-is-lens-space-order-three
  - lem-hat-CF-genus-one-lens-space-order-three-rank-three
proof_strategy: not-supplied
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §§3 and 6"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5.3"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Example

Let $T$ be the oriented left-handed trefoil, the closure of the two-strand braid $\sigma_1^{-3}$, and choose a marked point away from its three crossings. Its mirror $\overline T$ is the closure of $\sigma_1^3$, depicted below. Use the smoothing convention in which the zero-resolution of this mirror diagram is the through pairing and the one-resolution is the cap-cup pairing. The reduced Khovanov cohomology of $\overline T$ over $\mathbb F_2$ has total rank $3$. The double branched cover of $T$ is a lens space $L(3,1)$ up to orientation, and the hat Floer group of this lens space over $\mathbb F_2$ has total rank $3$. Thus the two endpoint ranks agree, and any spectral sequence with these finite-dimensional endpoints has no nonzero differential in this example.

~~~tikz
\begin{tikzpicture}[scale=0.55]
\draw (-1,6) .. controls (-3,6) and (-3,0) .. (-1,0);
\draw (1,6) .. controls (3,6) and (3,0) .. (1,0);
\foreach \yt/\yb in {6/4,4/2,2/0} {
  \draw (1,\yt) -- (-1,\yb);
  \draw[white,line width=4pt] (-1,\yt) -- (1,\yb);
  \draw[black,line width=1.1pt] (-1,\yt) -- (1,\yb);
}
\node at (0,7) {$\widehat{\sigma_1^3}$};
\end{tikzpicture}
~~~

The drawing depicts the closure of the braid word; each diagonal from left at the top to right at the bottom is drawn over the other diagonal. The algebraic calculation uses the smoothing cube and Frobenius maps, not the picture.

## Example references

[[lem-trefoil-reduced-khovanov-rank-three|Finite reduced Khovanov calculation]]

[[thm-os-khovanov-spectral-sequence-to-branched-cover-floer|Khovanov-to-branched-cover spectral sequence]]

[[lem-trefoil-double-branched-cover-is-lens-space-order-three|Trefoil branched-cover identification]]

[[lem-hat-CF-genus-one-lens-space-order-three-rank-three|Finite lens-space hat Floer rank]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §§3 and 6](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5.3](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)
