---
id: lem-normalized-complex-gaussian-block-affine-spectral-second-moments
kind: lemma
title: Affine second-moment bounds for normalized complex Gaussian block products
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-standard-real-and-normalized-complex-gaussian-matrix-law
  - def-countable-choice
  - lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence
  - lem-wide-gaussian-matrix-has-full-row-rank-almost-surely
  - lem-wide-gaussian-pseudoinverse-frobenius-moments
  - thm-real-beta-gamma-identity
  - def-real-beta-integral
  - def-gamma-distribution-shape-rate
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-gamma-functional-equation
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - def-frobenius-matrix-norm
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-operator-norm-is-the-largest-singular-value
  - thm-singular-value-decomposition
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - lem-absolute-real-powers-are-convex
  - thm-jensen-inequality-for-expectation
  - thm-finite-jensen-inequality-in-euclidean-space
  - thm-am-gm
  - def-factorial-and-falling-factorial
  - def-canonical-natural
  - lem-of-naturals-positive
  - def-real-exponential-function-and-e
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-algebra-of-derivatives
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
  - thm-additivity-over-subintervals
  - thm-monotonicity-of-the-integral
  - def-oriented-integral
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-polar-coordinates-formula-for-lebesgue-measure
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, §10.1 and Appendix A.1; standard Gaussian block context, with the present normalized-complex estimates derived locally"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §11.4.2; real Gaussian rangefinder context, with the present normalized-complex estimates derived locally"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $k\ge1$, $p\ge2$, $\ell=k+p$, and $d,a\ge1$ be integers. Let
$G_1\in\mathbb C^{k\times\ell}$ and $G_2\in\mathbb C^{d\times\ell}$ be
independent matrices with iid normalized complex Gaussian entries as in
[[def-standard-real-and-normalized-complex-gaussian-matrix-law]], so
$\mathbb E|g|^2=1$. Put $Z=G_2G_1^\dagger$, where $G_1^\dagger$ is the
Moore--Penrose pseudoinverse of [[def-moore-penrose-pseudoinverse]]. For every
fixed $S\in\mathbb C^{a\times d}$, writing $C=2\sqrt2e$ with
$e=\exp(1)$ as in [[def-real-exponential-function-and-e]], one has
$$\mathbb E\|SZ\|_2^2\le\frac{C\ell}{p^2}\left(\|S\|_F^2+\frac p4\|S\|_2^2\right),$$
$$\mathbb E\|SZ\|_2^2\le\frac{e^2\ell}{p^2}\left(\|S\|_F^2+\frac p2\|S\|_2^2\right).$$
Here $\|\cdot\|_2$ is the induced operator norm of
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]] and
$\|\cdot\|_F$ is the Frobenius norm of [[def-frobenius-matrix-norm]]. These
are coarse second-moment bounds; no sharp complex Chevet comparison is assumed.
The values on the null event where $G_1$ loses row rank may be set to zero in
these integrals.

## Facts & Assumptions

**Given:** Countable Choice for the finite-dimensional Gaussian law; the stated
independent blocks, $k\ge1$, $p\ge2$, $\ell=k+p$, $d,a\ge1$; and a fixed
compatible matrix $S$.

[F1] [[def-standard-real-and-normalized-complex-gaussian-matrix-law]]: a
normalized complex Gaussian scalar has density $\pi^{-1}e^{-|z|^2}$ and
$\mathbb E|z|^2=1$; matrix entries have the independent product density. The
finite-dimensional Lebesgue Gaussian measures use the stated
[[def-countable-choice]] assumption.

[F2] [[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]:
left or right unitary changes preserve the normalized complex Gaussian law,
and disjoint row blocks of a transformed iid matrix are independent.

[F3] [[lem-wide-gaussian-matrix-has-full-row-rank-almost-surely]]: the
$k\times(k+p)$ block $G_1$ has row rank $k$ almost surely.

[F4] [[lem-wide-gaussian-pseudoinverse-frobenius-moments]]: on that
full-row-rank event, $M=(G_1G_1^*)^{-1}=(G_1^\dagger)^*G_1^\dagger$, each
diagonal entry of $M$ has the reciprocal $\Gamma(p+1,1)$ law, and
$\mathbb E\operatorname{tr}M=k/p$.

[F5] [[def-moore-penrose-pseudoinverse]] defines $G_1^\dagger$ by the four
Penrose equations, and
[[thm-moore-penrose-pseudoinverse-exists-and-is-unique]] gives its unique
finite-dimensional real or complex value. On full row rank,
[[lem-wide-gaussian-pseudoinverse-frobenius-moments]] also gives
$G_1^\dagger=G_1^*(G_1G_1^*)^{-1}$.

[F6] The Beta function is $B(u,v)=\int_0^1t^{u-1}(1-t)^{v-1}\,dt$ for
$u,v>0$ ([[def-real-beta-integral]]), and the Beta--Gamma identity is
$B(u,v)=\Gamma(u)\Gamma(v)/\Gamma(u+v)$
([[thm-real-beta-gamma-identity]]). Euler integration and the functional
equation for $\Gamma$ are [[def-real-gamma-function-by-the-euler-integral]]
and [[thm-real-gamma-functional-equation]].

[F7] For integer $q\ge1$, $t\mapsto |t|^q$ is convex by
[[lem-absolute-real-powers-are-convex]], so Jensen for expectation gives
$\mathbb E X\le(\mathbb E X^q)^{1/q}$ for $X\ge0$ with finite $q$th moment
([[thm-jensen-inequality-for-expectation]]). The finite Jensen inequality for
convex functions on Euclidean convex sets is
[[thm-finite-jensen-inequality-in-euclidean-space]], and the finite
arithmetic--geometric mean inequality is [[thm-am-gm]].

[F8] Nonnegative product-measurable functions may be integrated in either
order by [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F9] Matrices admit SVDs, the operator norm is attained at a unit right
singular vector and equals the largest singular value
([[thm-singular-value-decomposition]],
[[thm-operator-norm-is-the-largest-singular-value]],
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]]). The
Frobenius norm is the Euclidean norm of the entry list, equals the square root
of the sum of squared singular values, and dominates the operator norm
([[def-frobenius-matrix-norm]],
[[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[F10] The factorial is the recursively defined natural product
([[def-factorial-and-falling-factorial]]); in real arithmetic natural numbers
are read through the canonical embedding $\iota$
([[def-canonical-natural]], [[lem-of-naturals-positive]]). Also
$e=\exp(1)$ with
$\exp(x)=\sum_{n\ge0}x^n/n!$
([[def-real-exponential-function-and-e]]). The natural logarithm is the
inverse of the positive real exponential, is strictly increasing, obeys the
product and quotient laws, and satisfies $\log'(x)=1/x$
([[def-natural-logarithm]], [[thm-natural-logarithm-laws]],
[[thm-logarithm-derivative-and-integral]]).

[F11] A continuous function on a closed interval is Riemann integrable
([[thm-continuous-implies-integrable]]); an integrable derivative is evaluated
by [[thm-ftc-second-part]]. Integrals are additive over subintervals and
monotone in their integrands
([[thm-additivity-over-subintervals]],
[[thm-monotonicity-of-the-integral]]), using the oriented convention
[[def-oriented-integral]]. The finite-sum convention and splitting laws are
[[def-finite-sum]] and [[lem-finite-sum-laws]].

[F12] Under Countable Choice, a $C^1$ diffeomorphism between open subsets of
$\mathbb R^n$ changes variables in nonnegative Lebesgue integrals by its
absolute Jacobian
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F13] Polar coordinates decompose Lebesgue measure on $\mathbb R^n$ as
$r^{n-1}\,dr\,d\sigma$ for nonnegative Borel functions
([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F14] The shape-rate Gamma law with shape $a>0$ and rate $b>0$ has density
$b^a u^{a-1}e^{-bu}/\Gamma(a)$ on $u>0$; in particular,
$\Gamma(a,1)$ has density $u^{a-1}e^{-u}/\Gamma(a)$
([[def-gamma-distribution-shape-rate]]). This matches the scale-$1$ notation
in [[lem-wide-gaussian-pseudoinverse-frobenius-moments]].

[A1] Assume the Axiom of Countable Choice as required by the finite-dimensional
Gaussian law [F1], the Gamma density normalization in [F14], and the Lebesgue
integration suppliers [F12] and [F13] ([[def-countable-choice]]). No stronger
choice principle is used.

## Proof

1.1 On the full-row-rank event of [F3], set $M=(G_1G_1^*)^{-1}$. For a fixed unit $v\in\mathbb C^k$, choose a unitary $U_0$ with $U_0e_1=v$. By [F2], $U_0^*G_1$ has the same law as $G_1$, and its inverse Gram matrix is $U_0^*MU_0$; hence $v^*Mv$ has the same law as $M_{11}$. The Moore--Penrose formula in [F4] gives $\|G_1^\dagger v\|_2^2=v^*Mv$, so [F4] makes this variance $1/U$ for $U\sim\Gamma(p+1,1)$. The formula in [F4] also gives $G_1G_1^\dagger=I_k$, hence $G_1^\dagger v\ne0$. Conditional on $G_1$, a row of $G_2G_1^\dagger v$ is a fixed linear functional of one isotropic normalized complex Gaussian row. Completing $G_1^\dagger v/\|G_1^\dagger v\|_2$ to a unitary basis and using [F2] shows that this functional is a normalized complex Gaussian with variance $v^*Mv$; the $d$ rows are conditionally independent. The full-row-rank set is open because it is the union of the nonzero-minor sets. On this set the inverse formula in [F4] is continuous; setting $Z=0$ on its null complement therefore gives a Borel version, equal almost surely to the stated product. This justifies the expectations without changing their values. [given, F2, F3, F4, F5, A1, algebra]

2.1 Apply [F13] in $\mathbb R^2$ to the radial density $\pi^{-1}e^{-|z|^2}$ from [F1]. Since this is a probability density, $1=\pi^{-1}\sigma(S^1)\int_0^\infty e^{-r^2}r\,dr$; substitution $u=r^2$ by [F12] makes the integral $\Gamma(1)/2=1/2$ by [F6], so $\sigma(S^1)=2\pi$. Applying [F13] to the indicator of $\{z:|z|^2\in E\}$ for a Borel set $E\subseteq(0,\infty)$, and again substituting $u=r^2$, gives $\mathbb P(|g|^2\in E)=\int_E e^{-u}\,du$. Thus the squared modulus is $\Gamma(1,1)$. For independent $X\sim\Gamma(r,1)$ and $Y\sim\Gamma(s,1)$, the map $(x,y)\mapsto(t=x+y,w=x/(x+y))$ is a $C^1$ diffeomorphism from $(0,\infty)^2$ to $(0,\infty)\times(0,1)$, with inverse $(t,w)\mapsto(tw,t(1-w))$ and inverse Jacobian determinant $t$. By [F12], their joint density in these coordinates is $t^{r+s-1}e^{-t}w^{r-1}(1-w)^{s-1}/(\Gamma(r)\Gamma(s))$. Integrating in $w$ by Tonelli [F8] and applying the Beta--Gamma identity [F6] gives the $\Gamma(r+s,1)$ density in $t$. Finite induction therefore makes the squared norm of $j$ independent normalized complex Gaussian coordinates $\Gamma(j,1)$. Euler integration [F6] gives its $q$th moment $\Gamma(j+q)/\Gamma(j)$ and gives $\mathbb E U^{-q}=\Gamma(p+1-q)/\Gamma(p+1)$ for $U\sim\Gamma(p+1,1)$ when $0<q<p+1$. Integrating first over $G_2$ and then $G_1$ by [F8], for each fixed unit $v\in\mathbb C^k$ and $1\le j\le d$ this yields $\mathbb E\|P_jZv\|_2^{2q}=\frac{\Gamma(j+q)\Gamma(p+1-q)}{\Gamma(j)\Gamma(p+1)},$ where $P_j$ keeps the first $j$ rows. [step 1.1, F1, F6, F8, F12, F13, F14, A1, algebra]

3.1 Define $P_0Z=0$. On an auxiliary finite product probability space, let $h\in\mathbb C^k$ have iid normalized complex Gaussian coordinates, independent of $(G_1,G_2)$, and put $v=h/\|h\|_2$ when $h\ne0$ and $v=e_1$ when $h=0$; the latter event has probability zero by [F1]. The law of $v$ is unitary invariant by [F2]. For $k=1$, $\mathbb E|v_1|^{2q}=1$. For $k\ge2$, $X=|h_1|^2$ and $Y=\sum_{i=2}^k|h_i|^2$ are independent with laws $\Gamma(1,1)$ and $\Gamma(k-1,1)$ by step 2.1. The change $s=X+Y$, $t=X/(X+Y)$ is a $C^1$ diffeomorphism with Jacobian $s$ and factors the joint density into a $\Gamma(k,1)$ density in $s$ and a Beta$(1,k-1)$ density in $t$ by [F12]. Thus [F6] gives $c_k(q):=\mathbb E|v_1|^{2q}=\frac{\Gamma(k)\Gamma(q+1)}{\Gamma(k+q)},$ which also equals $1$ when $k=1$. For each fixed $Z$, choose a unit right singular vector $u$ of $P_jZ$ for its largest singular value (possible by [F9]). Its SVD gives $\|P_jZv\|_2^2\ge\|P_jZ\|_2^2|u^*v|^2$. Average over the auxiliary $v$; unitary invariance replaces $u$ by $e_1$, so the left side is at least $c_k(q)\|P_jZ\|_2^{2q}$ after raising to power $q$. Integrate over $Z$ by [F8] and use step 2.1, then divide by $c_k(q)>0$, to obtain $\mathbb E\|P_jZ\|_2^{2q}\le \frac{\Gamma(j+q)\Gamma(k+q)\Gamma(p+1-q)} {\Gamma(j)\Gamma(k)\Gamma(q+1)\Gamma(p+1)}.$ The eigenvector is selected only for each fixed finite matrix in this pointwise inequality; no measurable eigenvector is used. [step 2.1, F1, F2, F6, F8, F9, F12, A1, choose, algebra]

4.1 The law of $Z$ is left-unitary invariant by [F2], since left multiplication acts only on $G_2$. Conditional coordinate second moments give $\mathbb E_{G_2}\|G_2G_1^\dagger\|_F^2=d\|G_1^\dagger\|_F^2$; [F4] and [F8] therefore give $\mathbb E\|Z\|_F^2=dk/p<\infty$. For integer $1\le q\le p$, apply Jensen [F7] to the nonnegative variable $\|P_jZ\|_2^2$ and use step 3.1. The Gamma functional equation [F6] then gives $\mathbb E\|P_jZ\|_2^2\le \left[\frac{(k)_q(j)_q}{q!(p)_{\downarrow q}}\right]^{1/q},$ where $(b)_q=b(b+1)\cdots(b+q-1)$ and $(p)_{\downarrow q}=p(p-1)\cdots(p-q+1)$. [step 3.1, F2, F4, F6, F7, F8, A1, algebra]

5.1 By AM--GM [F7], $(k)_q^{1/q}\le k+(q-1)/2$ and $(j)_q^{1/q}\le j+(q-1)/2$. We also have $(q!)^{1/q}\ge q/e$: for $q=1$ this is immediate since the first two terms of the defining series give $e>1$; for $q\ge2$, on each $[r-1,r]$ with $2\le r\le q$, monotonicity of $\log$ in [F10] gives $\int_{r-1}^r\log t\,dt\le\log r$. Additivity and monotonicity of integration [F11] yield $\int_1^q\log t\,dt\le\sum_{r=2}^q\log r=\log(q!)$, the last equality following by induction from the product law in [F10]. The primitive $t\log t-t$ has derivative $\log t$ by [F10], and $\log$ is integrable on $[1,q]$ by [F11], so the fundamental theorem gives $\int_1^q\log t\,dt=q\log q-q+1$. Hence $\log(q!)\ge q\log q-q+1\ge q\log(q/e)$, because $\log e=1$ and the quotient law holds by [F10]. Since $\log$ is strictly increasing and both arguments are positive, $q!\ge(q/e)^q$. Finally, pair the first and last, second and penultimate, and so on among the $q$ factors of $(p)_{\downarrow q}$. Each complete pair has product $(p-i)(p-q+1+i)=p(p-q+1)+i(q-1-i)\ge p(p-q+1).$ If $q$ is odd, the unpaired middle factor is $p-(q-1)/2$, and $\left(p-\frac{q-1}{2}\right)^2=p(p-q+1)+\frac{(q-1)^2}{4} \ge p(p-q+1).$ Thus $(p)_{\downarrow q}^{1/q}\ge\sqrt{p(p-q+1)}$. [step 4.1, F6, F7, F10, F11, algebra]

6.1 Take $q=\lceil p/2\rceil$ in step 4.1. Then $q\ge p/2$, $p-q+1\ge p/2$, and $(q-1)/2\le p/4$. Step 5.1 gives, for $1\le j\le d$, $\mathbb E\|P_jZ\|_2^2\le C\ell p^{-2}(j+p/4),\qquad C=2\sqrt2e.$ Indeed, the denominator in step 5.1 is at least $(q/e)\sqrt{p(p-q+1)}\ge p^2/(2\sqrt2e)$, while $k+(q-1)/2\le k+p/4\le\ell$ and $j+(q-1)/2\le j+p/4$. This proves the displayed half-order bound. For $q=p$, $(p)_{\downarrow p}=p!$, so step 5.1 bounds both denominator roots by $p/e$ and their product from below by $(p/e)^2$. The numerator factors are at most $k+p/2\le\ell$ and $j+p/2$. Substitution into step 4.1 gives $\mathbb E\|P_jZ\|_2^2\le e^2\ell p^{-2}(j+p/2).$ Both bounds also hold at $j=0$ because $P_0Z=0$. [step 4.1, step 5.1, A1, algebra]

7.1 If $S=0$, both claims hold. Otherwise set $\sigma=\|S\|_2>0$ and diagonalize $S^*S$ by [F9] as $W^*\operatorname{diag}(\sigma^2w_1,\ldots,\sigma^2w_d)W$, where $0\le w_i\le1$. The Frobenius singular-value formula in [F9] gives $\|S\|_F^2=\operatorname{tr}(S^*S)=\sigma^2\sum_iw_i$, hence $\sum_iw_i=\|S\|_F^2/\sigma^2$. For $w\in[0,1]^d$, define $f(w)=\mathbb E\|\operatorname{diag}(\sqrt{w_i})Z\|_2^2$. It is finite because $0\le w_i\le1$ and operator norm is bounded by Frobenius norm in [F9], so $f(w)\le\mathbb E\|Z\|_F^2<\infty$ by step 4.1. It is convex because for every fixed unit vector $u$, $\|\operatorname{diag}(\sqrt{w_i})Zu\|_2^2=\sum_iw_i|(Zu)_i|^2$ is linear in $w$, and taking the unit-vector maximum and then expectation preserves convexity. It is invariant under coordinate permutations by the row-unitary invariance of $Z$ from [F2]. For each subset $J\subseteq\{1,\ldots,d\}$ put $\lambda_J=\prod_{i\in J}w_i\prod_{i\notin J}(1-w_i)$. These are nonnegative, sum to $\prod_i(w_i+1-w_i)=1$, and satisfy $\sum_{J\ni i}\lambda_J=w_i$; hence the convex combination of indicator vectors is $w$ and its mean cardinality is $\sum_iw_i$. Finite Euclidean Jensen [F7] gives $f(w)\le\sum_J\lambda_Jf(\mathbf1_J)$. By permutation invariance and step 6.1, $f(\mathbf1_J)=\mathbb E\|P_{|J|}Z\|_2^2\le h(|J|)$ for each of the two affine bounds $h(j)$ there. Since $h$ is affine, $f(w)\le\sum_J\lambda_Jh(|J|)=h(\sum_iw_i)$; this includes every endpoint $w_i=0$ or $1$ and never uses a row count above $d$. Finally, left-unitary invariance and the diagonalization of $S^*S$ give $\mathbb E\|SZ\|_2^2=\mathbb E\|\operatorname{diag}(\sigma\sqrt{w_i})WZ\|_2^2 =\sigma^2f(w)$. Substitution of each affine $h$ proves both asserted inequalities. [step 4.1, step 6.1, F2, F7, F9, A1, construct, algebra] ∎
