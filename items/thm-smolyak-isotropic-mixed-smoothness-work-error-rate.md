---
id: thm-smolyak-isotropic-mixed-smoothness-work-error-rate
kind: theorem
title: Explicit work and error rate for dyadic Simpson Smolyak cubature
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: sparse-grid-cubature-and-mixed-regularity
dependency_level: 5
deps:
  - def-smolyak-univariate-level-hierarchy
  - def-smolyak-cubature
  - alg-smolyak-node-deduplication
  - lem-smolyak-mixed-simpson-detail-decay
  - lem-smolyak-dyadic-tensor-simpson-convergence
  - thm-smolyak-absolute-detail-reconstruction-and-tail-error
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-geometric-series
  - thm-dedekind-complete
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-stars-and-bars
  - cor-compositions-with-k-parts-are-counted-by-binomial-coefficients
  - def-binomial-coefficient
  - thm-binomial-theorem
  - lem-power-monotone
  - lem-of-inverse-positive
  - thm-of-archimedean
  - def-integer-power
  - cor-of-one-positive
justified_by: []
proof_strategy: direct
axiom_use: None. The index counts, dyadic node classification, and finite derivative bounds use no choice principle.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. Gerstner and M. Griebel, Sparse Grids, Encyclopedia of Quantitative Finance, §§Classical Sparse Grids and Numerical Integration"
      url: "https://ins.uni-bonn.de/media/public/publication-media/sparsegrids_j8NLaMi.pdf?name=sparsegrids.pdf"
    - title: "T. Gerstner and M. Griebel, Dimension-Adaptive Tensor-Product Quadrature, §2"
      url: "https://ins.uni-bonn.de/media/public/publication-media/dimadapt.pdf?pk=177"
    - title: "N. Zabaras, Sparse Grid Collocation Methods, lecture notes, slides 17–21"
      url: "https://web.ics.purdue.edu/~ibilion/www.zabaras.com/Courses/UQ/Smolyak.pdf"
---

## Statement

Use the dyadic composite-Simpson hierarchy of
[[def-smolyak-univariate-level-hierarchy]]. Let $d\ge1$, $n\ge2d$, and let
$f:[0,1]^d\to\mathbb R$ satisfy the
continuous mixed fourth-derivative hypotheses and bounds $M_S$ of
[[lem-smolyak-mixed-simpson-detail-decay]]. Define the isotropic index set
$$\Lambda_n:=\{\ell\in\mathbb N_0^d:|\ell|_1\le n\},$$
and let $W_{n,d}:=|\mathcal N_{\Lambda_n}|$ be the distinct-node work count
of [[def-smolyak-cubature]] and [[alg-smolyak-node-deduplication]]. For a
dyadic node $x$, let $t(x)=0$ for $x=0,1,1/2$; if $x=p/2^{r+1}$ is interior
and reduced with odd numerator $p$, let $t(x)=r\ge1$. Put
$$a_0:=3,\qquad a_r:=2^r\ (r\ge1),$$
$$\|f\|_{\mathrm{mix},d}:=\sum_{\varnothing\ne S\subseteq\{1,\ldots,d\}}\left(\frac{17}{2880}\right)^{|S|}M_S,\quad T_d:=\sup_{N\ge1}\sum_{r=1}^{N}r^{d-1}16^{-r},$$
$$D_d:=2\cdot3^d d^{d-1},\qquad C_d:=D_d^4T_d\left(\frac3{\log 2}\right)^{5(d-1)},$$
where $\log$ is the natural logarithm of [[def-natural-logarithm]]. Then
$T_d<\infty$, and the actual node-union count and error satisfy
$$W_{n,d}=\sum_{\substack{t\in\mathbb N_0^d\\|t|_1\le n}}\prod_{j=1}^d a_{t_j},\qquad 2^n\binom{n-1}{d-1}\le W_{n,d}\le D_d2^n(n+1)^{d-1},$$
$$|I_d(f)-Q_{\Lambda_n}(f)|\le T_d\|f\|_{\mathrm{mix},d}16^{-n}(n+1)^{d-1}\le C_d\|f\|_{\mathrm{mix},d}W_{n,d}^{-4}\bigl(\log(2+W_{n,d})\bigr)^{5(d-1)}.$$
All constants and the mixed-derivative quantity display their dimension
dependence; no weighted-anisotropic tractability claim is made.

## Facts & Assumptions

**Given:** $d\ge1$, $n\ge2d$, and $f$ with the continuous mixed derivatives and finite bounds in [[lem-smolyak-mixed-simpson-detail-decay]].

[F1] [[def-smolyak-cubature]]: $Q_{\Lambda_n}$ is the finite sum of tensor details, and $\mathcal N_{\Lambda_n}$ is the union of its tensor-level node sets.

[F2] [[alg-smolyak-node-deduplication]]: each exact distinct node in this union is evaluated once, including nodes with zero combined weight.

[F3] [[lem-smolyak-mixed-simpson-detail-decay]]: $|\delta_\ell(f)|\le M_{S(\ell)}(17/2880)^{|S(\ell)|}16^{-\sum_{j\in S(\ell)}\ell_j}$; its proof bounds every finite absolute-detail subsum.

[F4] [[lem-smolyak-dyadic-tensor-simpson-convergence]] gives tensor-rule convergence for this dyadic hierarchy; [[thm-smolyak-absolute-detail-reconstruction-and-tail-error]] then bounds the error by omitted absolute details when the finite-subsum bounds in [F3] give absolute summability.

[F5] [[thm-stars-and-bars]]: weak compositions of $m$ into $d$ nonnegative coordinates are counted by $\binom{m+d-1}{d-1}$.

[F6] [[cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]]: compositions of $m$ into $k$ positive parts are counted by $\binom{m-1}{k-1}$ for $m,k\ge1$.

[F7] [[thm-geometric-series]]: a geometric series with ratio of absolute value less than one has bounded partial sums.

[F8] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing on positive reals, $\log1=0$, $\log(xy)=\log x+\log y$, and repeated use gives $\log(2^n)=n\log2$; in particular $\log2>0$.

[F9] [[def-finite-sum]] and [[lem-finite-sum-laws]]: finite sums split over disjoint finite index sets, are monotone in nonnegative summands, and telescope.

[F10] [[def-binomial-coefficient]]: $\binom{m}{k}$ counts the $k$-element subsets of an $m$-element set, with the stated boundary values. An ordered $q$-tuple from an $m$-element set has $m^q$ possibilities: there is one empty tuple for $q=0$, and each extension appends one of the $m$ entries, giving the count by induction on $q$.

[F11] [[thm-binomial-theorem]]: $\sum_{j=0}^{d-1}\binom{d-1}{j}=2^{d-1}$.

[F12] [[thm-dedekind-complete]]: every nonempty real set bounded above has a finite supremum.

[F13] [[lem-power-monotone]] and [[lem-of-inverse-positive]]: if $r\ge1$ and $j\ge1$, then $r^j\ge r>0$, so $r^{-j}\le r^{-1}$ (with equality when $r^j=r$, and reciprocal order when $r^j>r$); powers are as in [[def-integer-power]].

[F14] [[thm-of-archimedean]]: for every real $x$ there is a natural $R\ge1$ with $x<R$.

[F15] [[def-integer-power]]: $2^0=1$ and $2^{m+1}=2^m\cdot2$.

[F16] [[cor-of-one-positive]]: $1>0$.

## Proof

1.1 Set $b_r=r^{d-1}16^{-r}$. By [F11] and [F13], for $r\ge1$ and $j\ge1$ we have $r^{-j}\le r^{-1}$; hence $b_{r+1}/b_r=(1+1/r)^{d-1}/16\le(1+(2^{d-1}-1)/r)/16$. Put $C:=2^{d-1}-1\ge0$. If $C=0$, take $R=1$; if $C>0$, [F14] gives a natural $R\ge1$ with $2C<R$. For every $r\ge R$, the ratio is at most $(3/2)/16=3/32<1/2$. Induction then bounds the tail by a geometric sequence with ratio $1/2$, so [F7] bounds its partial sums; adding the finite initial segment bounds every partial sum. The partial sums form a nonempty bounded set, so [F12] defines a finite supremum $T_d$. [given, F7, F11, F12, F13, F14, algebra]

1.2 A node of $X_\ell=\{k/2^{\ell+1}:0\le k\le2^{\ell+1}\}$ belongs to every level at least its minimal level $t(x)$. The three nodes of minimal level zero are $0,1/2,1$. For $r\ge1$, a node of minimal level $r$ has reduced form $p/2^{r+1}$ with odd $p$ and $0<p<2^{r+1}$, giving exactly $2^r$ choices. A node tuple belongs to $\mathcal N_{\Lambda_n}$ iff its minimal-level vector $t$ satisfies $|t|_1\le n$: that condition itself supplies an admissible index, and any index containing the tuple has each coordinate at least its minimal level. Multiplying the coordinate counts and summing over these vectors proves the exact work formula. [given, F1, F2, algebra]

2.1 Fix a finite $F\subseteq\mathbb N_0^d\setminus\Lambda_n$ and group its indices by the nonempty active-coordinate subset $S$ of size $k$. If the positive coordinates sum to $m=n+r$, then $r\ge1$; there are at most $\binom{m-1}{k-1}$ such tuples by [F6]. Since this coefficient counts $(k-1)$-element subsets, listing each subset in increasing order injects them into ordered $(k-1)$-tuples with entries from a set of $m$ elements; thus $\binom{m-1}{k-1}\le m^{k-1}$. Since $m=n+r\le(n+1)r$, each fixed-$S$ contribution is at most $M_S(17/2880)^k16^{-n}(n+1)^{d-1}r^{d-1}16^{-r}$. Summing over the finitely many $r$ present in $F$, enlarging to the partial sum through the largest such $r$, and then summing over $S$ gives $\sum_{\ell\in F}|\delta_\ell(f)|\le T_d\|f\|_{\mathrm{mix},d}16^{-n}(n+1)^{d-1}$. Taking the supremum over finite $F$ bounds the omitted absolute-detail tail; [F4] gives the first error inequality. [given, F3, F4, F6, F9, F10, step 1.1, algebra]

2.2 By the node classification and exact formula in step 1.2, the number of level vectors with $|t|_1=m$ is $\binom{m+d-1}{d-1}$ by [F5], and each has $\prod_j a_{t_j}\le3^d2^m$. Since $\binom{m+d-1}{d-1}$ counts $(d-1)$-element subsets, increasing enumeration injects them into ordered $(d-1)$-tuples from a set of $m+d$ elements, giving $\binom{m+d-1}{d-1}\le(m+d)^{d-1}$. The finite geometric sum is $\sum_{m=0}^n2^m=\sum_{m=0}^n(2^{m+1}-2^m)=2^{n+1}-1<2^{n+1}$: the term identity follows from [F15], telescoping from [F9], and $1>0$ from [F16]. Hence $W_{n,d}\le3^d(n+d)^{d-1}\sum_{m=0}^n2^m<2\cdot3^d2^n(n+d)^{d-1}\le D_d2^n(n+1)^{d-1}$, since $n+d\le d(n+1)$. For a lower bound, restrict to vectors with all $t_j\ge1$ and $|t|_1=n$. There are $\binom{n-1}{d-1}$ by [F6], and each contributes $\prod_ja_{t_j}=2^n$. [given, F5, F6, F9, F10, F15, F16, step 1.2, algebra]

3.1 From step 2.2, $2^n\ge W_{n,d}/(D_d(n+1)^{d-1})$, so $16^{-n}\le D_d^4W_{n,d}^{-4}(n+1)^{4(d-1)}$. The exact work formula in step 1.2 contains the contribution of the vector $t=(n-d+1,1,\ldots,1)$, whose entries are positive because $n\ge2d$; this contribution is $2^n$, so $W_{n,d}\ge2^n$. Hence [F8] yields $\log(2+W_{n,d})\ge n\log2$. As $n\ge2d\ge2$, $n+1\le(3/2)n\le3\log(2+W_{n,d})/\log2$. Substituting these inequalities into step 2.1's error estimate gives the second bound with the stated $C_d$. [given, F8, step 1.2, step 2.1, step 2.2, algebra] ∎
