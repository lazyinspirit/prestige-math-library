---
id: lem-smolyak-mixed-simpson-detail-decay
kind: lemma
title: Mixed-derivative bounds for dyadic Simpson details
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 3
deps:
  - def-smolyak-univariate-level-hierarchy
  - alg-composite-simpson-rule
  - thm-composite-simpson-error-bound
  - def-higher-derivatives-and-smoothness
  - lem-triangle-inequality-finite
  - lem-finite-sum-laws
  - thm-geometric-series
  - lem-power-laws
justified_by: []
proof_strategy: direct
axiom_use: None. The proof uses finite quadrature sums and finite-dimensional derivatives only.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §§Classical Sparse Grids and Numerical Integration"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §2"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.6"
      url: "https://fncbook.com/integration/"
---

## Statement

Use the dyadic composite-Simpson hierarchy of
[[def-smolyak-univariate-level-hierarchy]]. Let $d\ge1$. For
$S=\{j_1<\cdots<j_k\}\subseteq\{1,\ldots,d\}$, define
$$D_Sf:=\partial_{x_{j_k}}^4\cdots\partial_{x_{j_1}}^4f,$$
so these derivatives are applied in increasing coordinate order; set
$D_\varnothing f=f$. Assume every $D_Sf$ is continuous on the closed cube,
with the one-sided endpoint convention of
[[def-higher-derivatives-and-smoothness]], and choose finite bounds $M_S\ge0$
such that $|D_Sf(x)|\le M_S$ on $[0,1]^d$. For
$\ell\in\mathbb N_0^d$, put $S(\ell):=\{j:\ell_j\ge1\}$ and
$$\delta_\ell(f):=(\Delta_{\ell_1}^{(1)}\otimes\cdots\otimes\Delta_{\ell_d}^{(d)})(f).$$
Then
$$|\delta_\ell(f)|\le M_{S(\ell)}\left(\frac{17}{2880}\right)^{|S(\ell)|}16^{-\sum_{j\in S(\ell)}\ell_j}.$$
Moreover, for every finite $F\subseteq\mathbb N_0^d$,
$$\sum_{\ell\in F}|\delta_\ell(f)|\le\sum_{S\subseteq\{1,\ldots,d\}}M_S\left(\frac{17}{43200}\right)^{|S|}<\infty.$$

## Facts & Assumptions

**Given:** $d\ge1$ and a function with the continuous mixed fourth partials and finite bounds stated above.

[F1] [[def-smolyak-univariate-level-hierarchy]]: $Q_\ell=Q_S(\cdot;0,1,2^{\ell+1})$, $\Delta_0=Q_0$, and $\Delta_\ell=Q_\ell-Q_{\ell-1}$ for $\ell\ge1$.

[F2] [[thm-composite-simpson-error-bound]]: on $[0,1]$, for an even panel count $N\ge2$, $|\int_0^1g-Q_S(g;0,1,N)|\le(180N^4)^{-1}\|g^{(4)}\|_\infty$ for $g\in C^4[0,1]$.

[F3] [[alg-composite-simpson-rule]]: the two-panel level-zero rule has nonnegative weights $1/6,4/6,1/6$, which sum to one.

[F4] [[def-higher-derivatives-and-smoothness]]: the stated continuous mixed derivatives exist through the required coordinatewise orders, with one-sided endpoint derivatives.

[F5] [[lem-triangle-inequality-finite]]: the absolute value of a finite sum is at most the sum of its absolute values.

[F6] [[lem-finite-sum-laws]]: finite sums may be regrouped and distribute over products, and are monotone in their terms.

[F7] [[thm-geometric-series]] states the series starting at $k=0$: for ratio $1/16$, $\sum_{k\ge0}(1/16)^k=16/15$. By [[lem-power-laws]], $(1/16)^k=16^{-k}$. Removing the $k=0$ term, which is $1$, gives $\sum_{r\ge1}16^{-r}=1/15$; since all terms are nonnegative, every finite partial sum starting at $r=1$ is at most $1/15$.

## Proof

1.1 For $\ell\ge1$, use [F2] on levels $\ell$ and $\ell-1$, inserting the exact integral between their values. With panel counts $2^{\ell+1}$ and $2^\ell$, [F5] gives $|\Delta_\ell g|\le(2^{-4(\ell+1)}/180+2^{-4\ell}/180)\|g^{(4)}\|_\infty=(17/2880)16^{-\ell}\|g^{(4)}\|_\infty$. For $\ell=0$, [F3] gives $|\Delta_0g|=|Q_0g|\le\|g\|_\infty$. [given, F1, F2, F3, F5, algebra]

2.1 Apply the one-dimensional bounds successively in the coordinates. A finite quadrature functional commutes with derivatives in any other coordinate because it is a finite weighted sum. In each active coordinate $j$, apply step 1.1 to the section after the earlier-coordinate derivatives have been taken; the needed fourth derivative is the corresponding sequential mixed derivative. In each inactive coordinate use the level-zero supremum bound. Multiplying the bounds gives $M_{S(\ell)}(17/2880)^{|S(\ell)|}16^{-\sum_{j\in S(\ell)}\ell_j}$. The stated continuous mixed derivatives justify each section estimate, and [F6] justifies the finite tensor expansions. [given, F1, F4, step 1.1, F6, algebra]

3.1 Fix finite $F$ and group indices by $S=S(\ell)$. For a fixed nonempty $S$, enlarge its levels to the finite box $1\le\ell_j\le R_j$ where $R_j$ is the largest such coordinate level in that group. By step 2.1 and [F6], the sum over that box is at most $M_S\prod_{j\in S}((17/2880)\sum_{r=1}^{R_j}16^{-r})\le M_S(17/43200)^{|S|}$, using [F7]. For $S=\varnothing$, the only possible index is $0$ and its term is at most $M_\varnothing$. Summing over all subsets proves the finite-subsum claim; the right side is finite. [given, step 2.1, F6, F7, algebra] ∎
