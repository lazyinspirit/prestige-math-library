---
id: ex-knot-kt-45-worked-cases
kind: example
title: "The trefoil Khovanov-to-Floer rank calculation"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-reduced-khovanov-cohomology-of-a-based-link-over-f2
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
  - lem-reduced-khovanov-over-f2-basepoint-independence
  - thm-os-khovanov-spectral-sequence-to-branched-cover-floer
  - lem-trefoil-double-branched-cover-is-lens-space-order-three
  - lem-hat-CF-genus-one-lens-space-order-three-rank-three
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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

The drawing depicts the closure of the braid word; each diagonal from left at the top to right at the bottom is drawn over the other diagonal. The algebraic calculation below uses the smoothing cube and Frobenius maps, not the picture.

## Example references

[[def-reduced-khovanov-cohomology-of-a-based-link-over-f2|Based reduced Khovanov complex]]

[[thm-os-khovanov-spectral-sequence-to-branched-cover-floer|Khovanov-to-branched-cover spectral sequence]]

[[lem-trefoil-double-branched-cover-is-lens-space-order-three|Trefoil branched-cover identification]]

[[lem-hat-CF-genus-one-lens-space-order-three-rank-three|Finite lens-space hat Floer rank]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §§3 and 6](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5.3](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** The three-crossing closure of $\sigma_1^3$, its reduced Khovanov cube over $\mathbb F_2$, and the stated Floer spectral-sequence conventions.

[F1] The based reduced state space has one factor for every resolution circle except the marked circle, and a split of the marked circle sends its surviving label $1$ to $X$ on the unmarked output ([[def-reduced-khovanov-cohomology-of-a-based-link-over-f2]]).

[F2] The Floer construction, if established, has this reduced Khovanov cohomology as $E_2$ and converges to the hat Floer homology of the double cover ([[thm-os-khovanov-spectral-sequence-to-branched-cover-floer]]).

[F3] The local cube and Frobenius formulas for merges and splits are those in [[def-khovanov-frobenius-algebra-and-cube-of-resolutions]].

[F4] The trefoil branch cover is the order-three lens space in the stated orientation convention ([[lem-trefoil-double-branched-cover-is-lens-space-order-three]]).

[F5] The standard genus-one hat complex for this lens space has three generators and zero differential ([[lem-hat-CF-genus-one-lens-space-order-three-rank-three]]).

## Proof

1.1 Let $r$ be the number of one-resolutions. In the two-strand Temperley–Lieb closure, the all-through state has two circles; once a cap-cup occurs, the first cap-cup gives one circle, and every additional cap-cup contributes one closed circle. Hence the state circle counts for states in lexicographic order are $2,1,1,2,1,2,2,3$. Removing the marked circle gives reduced state dimensions $2,1,1,2,1,2,2,4$, so $C^0,C^1,C^2,C^3$ have dimensions $2,3,6,4$. [F1, given, construct]

1.2 Order states within each cohomological degree lexicographically; order free circle factors by their first encounter in a fixed scan of the resolved braid diagram, with tensor basis $1$ before $X$. The cube edge formulas in [F1] and [F3] give
$$
d^0=\begin{pmatrix}1&0\\1&0\\1&0\end{pmatrix},\qquad
d^1=\begin{pmatrix}
0&0&0\\1&1&0\\0&0&0\\1&0&1\\0&0&0\\0&1&1
\end{pmatrix},\qquad
d^2=\begin{pmatrix}
0&0&0&0&0&0\\
1&0&1&0&0&0\\
0&0&1&0&1&0\\
0&1&0&1&0&1
\end{pmatrix}.
$$
For $d^0$, each merge maps the marked-circle quotient basis $1$ to $1$ and kills the other generator $X$. For $d^1$, each target state receives two edges, each splitting the marked circle and sending $1$ to $X$ on the new free circle. The three source-state maps in $d^2$, written on the basis $(1,X)$ of their one free circle and the ordered target basis $(1\otimes1,1\otimes X,X\otimes1,X\otimes X)$, are respectively
$$
011:\ (1\mapsto1\otimes X,\ X\mapsto X\otimes X),\quad
101:\ (1\mapsto1\otimes X+X\otimes1,\ X\mapsto X\otimes X),\quad
110:\ (1\mapsto X\otimes1,\ X\mapsto X\otimes X).
$$
These are the marked quotient split maps and the ordinary Frobenius split map. They give the displayed matrices in the fixed component order. [F1, F3, step 1.1, construct, finite-check]

2.1 The first matrix has rank $1$. In the second matrix the three columns are nonzero, the first two are independent, and their sum is the third, so its rank is $2$. The last matrix has three independent nonzero rows and rank $3$. Thus the homology dimensions in cohomological degrees $0,1,2,3$ are respectively $2-1=1$, $3-1-2=0$, $6-2-3=1$, and $4-3=1$, for total rank $3$. The quotient complex is a cochain complex by [F1]. [F1, step 1.2, algebra]

2.2 By [F4] the target is an order-three lens space, and [F5] asserts its Floer rank is $3$. These two helper claims remain escalated because their local meridian-slope computation and basepoint-free disk-domain count are not supplied. [F2, F4, F5, step 2.1]

2.3 In any finite-dimensional spectral sequence over $\mathbb F_2$, a page differential of rank $s$ reduces total page dimension by $2s$, since its image lies in its kernel. The filtration has finitely many levels, so equality of the $E_2$ and limiting total ranks forces every later differential to have rank zero. Thus the endpoint rank equality in [F2], once the target rank in step 2.2 is verified, implies collapse for this example. [F2, step 2.1, step 2.2, algebra]
