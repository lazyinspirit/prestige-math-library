---
id: thm-type-i-ii-mobius-correlation-with-equidistributed-nilsequences
kind: theorem
title: Möbius cancellation against totally equidistributed nilsequences
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - lem-mobius-type-i-ii-inverse-decomposition
  - def-total-equidistribution-of-a-nil-orbit
  - def-malcev-basis-and-rationality
  - def-polynomial-sequence-on-a-filtered-group
  - lem-quantitative-malcev-metric-and-subgroup-comparisons
  - lem-rational-subgroups-have-quantitatively-adapted-malcev-bases
  - lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates
  - lem-rational-polynomial-nil-orbits-have-bounded-period
  - lem-quantitative-polynomial-weyl-and-recurrence
  - lem-polynomial-coefficient-recovery-and-affine-extrapolation
  - lem-vertical-fourier-and-bracket-polynomial-reductions
  - lem-relative-square-polynomial-orbits-have-lower-degree
  - thm-quantitative-leibman-equidistribution-criterion
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The Möbius function is strongly orthogonal to nilsequences
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf
      locator: Proposition 2.1 and complete proof in Section 3, printed pp. 544–553
    - title: Ben Green and Terence Tao, Quadratic uniformity of the Möbius function
      url: https://www.numdam.org/article/AIF_2008__58_6_1863_0.pdf
      locator: Lemma 4.1 and Proposition 4.2, printed pp. 1876–1879
---

## Statement

Fix integers $m\geq0$ and $d\geq1$. There are constants $c,C>0$ depending
only on $m,d$ such that the following holds. Let $N$ be sufficiently large
in terms of $m,d$, let $0<\delta<1/2$, let $Q\geq2$, and let $G/\Gamma$
be an $m$-dimensional nilmanifold with a degree-$d$ filtration and a
$Q$-rational adapted Mal’cev basis $X$. Suppose
$g\in\operatorname{poly}(\mathbb Z,G_\bullet)$ and
$(g(n)\Gamma)_{n\in[N]}$ is totally $\delta$-equidistributed. If
$F:G/\Gamma\to\mathbb R$ is Lipschitz with
$\int_{G/\Gamma}F=0$, then for every arithmetic progression
$P\subseteq[N]$ with $|P|\geq N/Q$,
$$\left|\frac1N\sum_{n\in[N]}\mu(n)\mathbf 1_P(n)F(g(n)\Gamma)\right| \leq C(\delta^c Q)\|F\|_{\mathrm{Lip}}\log(2N).$$
The constants are effective and depend only on $m,d$.

## Statement references

[Green and Tao, Proposition 2.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p03-p.pdf)

[Green and Tao, Proposition 4.2](https://www.numdam.org/article/AIF_2008__58_6_1863_0.pdf)

## Facts & Assumptions

[F1] Polynomial sequences allow integer affine substitution and products;
products of nilmanifolds have the product adapted basis. Bounded rational
coordinate and metric changes have fixed-power losses.
[[lem-filtered-polynomial-sequences-form-a-group-and-have-weighted-coordinates]]
[[lem-quantitative-malcev-metric-and-subgroup-comparisons]]
[[lem-rational-subgroups-have-quantitatively-adapted-malcev-bases]]

[F2] The quantitative Leibman criterion detects failure of equidistribution
by a nonzero bounded horizontal character with bounded polynomial
$C^\infty$ seminorm. It applies after making its discrepancy parameter
small enough that the supplied basis is rational with that parameter.
[[thm-quantitative-leibman-equidistribution-criterion]]

[F3] Scale-aware affine extrapolation and conversion between ordinary and
binomial coefficients clear only fixed-degree factorials and bounded
rational denominators. [[lem-polynomial-coefficient-recovery-and-affine-extrapolation]]

[F4] Epsilon-sensitive polynomial recurrence permits an arbitrary constant
coefficient, and retains its explicit small-length alternative.
[[lem-quantitative-polynomial-weyl-and-recurrence]]

[F5] A large real bounded Möbius correlation on $(X,2X]$ has the stated
Type I or Type II alternative, including its logarithmic losses.
[[lem-mobius-type-i-ii-inverse-decomposition]]

[F6] Total equidistribution tests every sufficiently long arithmetic
progression with the full norm $\|F\|_\infty+\operatorname{Lip}(F)$.
[[def-total-equidistribution-of-a-nil-orbit]]

## Proof

**Given:** The data in the Statement. Divide by $\|F\|_{\mathrm{Lip}}$;
if it is zero there is nothing to prove. Thus $\|F\|_{\mathrm{Lip}}=1$
and $|F|\leq1$. All constants below depend only on $m,d$.

1.1 We first record how a horizontal obstruction contradicts total equidistribution. If $0<|\psi|\leq B$ and $\|\psi\circ g\|_{C^\infty[N]}\leq B$, $B\geq2$, then the test $e(\psi(x))$ has Haar mean zero and Lipschitz norm at most $C Q^C B$. Indeed its integral is unchanged by translation by any $u\in G$, and some $e(\psi(u))\ne1$; its coordinate Lipschitz bound follows from F1. Choose lifts of the nonconstant binomial coefficients with size at most $B/N^j$. On the initial interval of length $L=\max(1,\lfloor N/(C_dB)\rfloor)$ their phase varies by at most $1/10$ if $L\geq2$. Thus the modulus of this test's average is at least $1/2$; for $L=1$ it is one. Since $L\geq N/(2C_dB)$, this contradicts F6 whenever $\delta C Q^CB$ is sufficiently small. This argument includes short $N$ and never asserts epsilon-sensitive recurrence at short length. [F1, F6, algebra, construct]

1.2 Prove first the estimate for $\delta\geq N^{-\sigma}$, with a sufficiently small fixed $\sigma>0$ chosen below. Let $\kappa>0$ be another small fixed constant and put $E=\delta^\kappa Q\log(2N)$. If $E\geq c_0$ for a sufficiently small absolute $c_0$, the assertion follows by the trivial bound after enlarging its constant. Otherwise $Q,\log(2N)\leq\delta^{-\kappa}$ after harmless constant enlargement. Partition $[N]$ into dyadic intervals $(X,2X]$ and a discarded initial interval of length at most $C\delta^\kappa N$. Integer endpoints and the last incomplete interval can be represented by including their indicator in $f$; use integer $X$ powers of two and the last containing annulus. The retained $X$ satisfy $c\delta^\kappa N\leq X\leq N$, and the sum of their lengths is at most $2N$. Consequently it suffices to bound every retained annular average by $C E$. The discarded terms contribute $O(\delta^\kappa)$. We keep the original variable of $\mu$ and of $g$; no translated Möbius function is used. [F5, given, algebra, construct]

2.1 Suppose one such average has modulus at least $E$. Apply F5 to $f(n)=\mathbf1_{(X,2X]\cap[N]\cap P}(n)F(g(n)\Gamma)$, zero outside $(X,2X]$. Write $\ell$ for the step of $P$. Its length assumption gives $\ell\leq2Q$ in the nontrivial range. Every positive quantity produced by F5, after its logarithmic losses, is at least $c\delta^{D\kappa}$; every reciprocal, $Q$-factor and $N/X$ loss is at most $C\delta^{-D\kappa}$, for a fixed $D$ depending only on $m,d$. Below $D$ can increase a finite number of times. This notation is legitimate because all suppliers F1–F5 have fixed-power bounds, there are at most $d$ coefficient operations, and no exponent depends on $N,Q,\delta$. Choose $\kappa$ only after majorizing this finite list of exponents. [F1, F2, F3, F4, F5, step 1.2, algebra]

3.1 In Type I there are at least $c\delta^{D\kappa}K$ good positive integers $k\in[K,2K)$ with $K\leq X^{2/3}$. Splitting each $w$-sum by its residue modulo $\ell$ loses at most $2Q$, and intersection with the progression and interval indicators leaves an interval of parameters $w=b+\ell t$. A good sum has length and absolute sum at least $c\delta^{D\kappa}X/(k\ell)$. Normalize by its actual length. Since $\int F=0$, F2 applied on that parameter interval produces a nonzero horizontal character $\psi_k$ with modulus and composed seminorm at most $C\delta^{-D\kappa}$. F1 bounds the adapted basis complexity; shrinking the discrepancy parameter by a fixed power ensures the criterion's basis hypothesis. F3 removes the affine substitution and interval start, then enlarges the seminorm scale to $X/k$ with only $C\delta^{-D\kappa}$ loss. There are at most $C\delta^{-D\kappa}$ integral character vectors and clearing multipliers, so pigeonholing gives one nonzero $\psi$ of modulus at most that bound for at least $c\delta^{D\kappa}K$ good $k$, such that $\|\psi\circ g(k\cdot)\|_{C^\infty[X/k]} \leq C\delta^{-D\kappa}$. [F1, F2, F3, F5, step 2.1, algebra]

4.1 Write $\psi\circ g(n)=\sum_{j=0}^d\beta_jn^j$, using any fixed real lift of its circle coefficients. Conversion of binomial to ordinary coefficients has rational coefficients with denominators dividing a fixed integer depending on $d$; hence one fixed multiplier $u_d$ gives $\|u_d k^j\beta_j\|_{\mathbb T} \leq C\delta^{-D\kappa}(K/X)^j$ for every $j\geq1$ on the retained set. If $K\leq C\delta^{-D'\kappa}$, retain one good positive $k$ and multiply by the product of its powers $k^j$ and $u_d$; all resulting multipliers are bounded powers and give $\|v\beta_j\|\leq C\delta^{-D''\kappa}X^{-j}$ simultaneously. Otherwise apply F4 on $[2K]$ to the polynomial $u_d\beta_j k^j$ and its visits to the circle interval centered at zero of length $C\delta^{-D\kappa}(K/X)^j$. Its density is a fixed power of $\delta^\kappa$. The interval-length hypothesis follows from $K/X\leq X^{-1/3}$, $X\geq c\delta^\kappa N$ and $\delta\geq N^{-\sigma}$, on choosing $\sigma$ small enough. Choose $D'$ large enough to exclude the recurrence's short-length alternative. Its conclusion bounds the top binomial coefficient $j!u_d\beta_j$ by $C\delta^{-D''\kappa}X^{-j}$ after a bounded positive multiplier. Take the product of these at most $d$ multipliers, including the factorials; multiplication preserves every preceding circle bound. Converting back and using $X\geq c\delta^\kappa N$ gives a nonzero horizontal character $\widetilde\psi$ with $|\widetilde\psi|+\|\widetilde\psi\circ g\|_{C^\infty[N]} \leq C\delta^{-D\kappa}$. No multiplier was cancelled inside a circle norm. [F3, F4, step 3.1, algebra]

5.1 In Type II two Cauchy–Schwarz expansions give a power-density set of pairs $(k,k')\in[K,2K)^2$ whose $w$-average of $f(kw)f(k'w)$ is power-sized. Splitting modulo $\ell$ again leaves an interval and a mean-zero product test $F\otimes F$ on $(G/\Gamma)^2$: its Haar integral is $(\int F)^2=0$ and its Lipschitz norm is at most a fixed constant. Apply F2 and F3 as in step 3.1, now to $(g(k\cdot),g(k'\cdot))$ at scale $X/K$. A product horizontal character is $\psi_1\oplus\psi_2$, with not both components zero; pigeonholing makes this pair fixed on at least $c\delta^{D\kappa}K^2$ pairs. Conversion of coefficients yields $\|u_d(k^j\beta_j+k'^j\beta'_j)\| \leq C\delta^{-D\kappa}(K/X)^j$ for all $j\geq1$ on those pairs. Relabel the components so that $\psi_1\ne0$, then fix a $k'$ occurring with at least $c\delta^{D\kappa}K$ values of $k$. Apply F4 directly to $u_d\beta_j k^j+u_d\beta'_j k'^j$ on $[2K]$. Its arbitrary constant term is allowed. This avoids replacing differences of kth powers by powers of differences. The short-length alternative is excluded by $K\geq cX^{1/3}$ and the same small choice of $\sigma$. The interval-length condition and coefficient recovery are exactly those in step 4.1. They produce a bounded positive multiple of the nonzero $\psi_1$ with the same obstruction on $[N]$. [F1, F2, F3, F4, F5, step 2.1, step 3.1, step 4.1, algebra]

6.1 Fix one $D$ majorizing all the preceding power losses and the Lipschitz loss in step 1.1. Choose $\kappa>0$ so small that $D\kappa<1/4$, and then $\sigma>0$ small enough for all recurrence-length and interval-length comparisons in steps 4.1–5.1. Their obstructions contradict step 1.1, since $Q\leq\delta^{-\kappa}$ and $\delta C\delta^{-D\kappa}$ is small for small $\delta$. For the remaining bounded-away-from-zero $\delta$, the trivial estimate is absorbed in the final constant. Thus both alternatives are impossible; step 1.2 proves the bound with exponent $\kappa$ for $\delta\geq N^{-\sigma}$. [step 1.1, step 1.2, step 4.1, step 5.1, algebra]

7.1 If $\delta N\leq1$, singleton progressions and $\int F=0$ give $|F(g(n)\Gamma)|\leq\delta$, so the conclusion is immediate. Otherwise $\delta>1/N$. In the remaining range $1/N<\delta<N^{-\sigma}$, total $\delta$ implies total $\delta_0=N^{-\sigma}$. The proved estimate is bounded by $C N^{-\sigma\kappa}Q\log(2N) \leq C\delta^{\sigma\kappa}Q\log(2N)$. Together with step 6.1, after decreasing the final exponent to $c=\min(\kappa,\sigma\kappa)$, this proves the Statement. [F6, step 6.1, algebra] ∎

## Source notes

This is the source-strength effective bound of GT Proposition 2.1,
$\delta^c Q\log N$. The former $(\log N)^{-A}$ intermediate was not
supplied by that proposition or by the approved dossier. The final
orthogonality theorem retains its every-power logarithmic saving through
factorization. The reconstruction uses the complete source Section 3,
with the annular-domain bridge made explicit. Its polynomial recurrence
argument replaces the source's Waring input and handles the arbitrary
constant in the Type II coefficient relation locally. No Waring theorem,
external nilsequence theorem, or analytic character estimate is imported.
