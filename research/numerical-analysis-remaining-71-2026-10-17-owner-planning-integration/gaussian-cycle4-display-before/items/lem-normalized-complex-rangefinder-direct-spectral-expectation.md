---
id: lem-normalized-complex-rangefinder-direct-spectral-expectation
kind: lemma
title: Direct expected spectral bound for the normalized complex range finder
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-standard-real-and-normalized-complex-gaussian-matrix-law
  - def-countable-choice
  - alg-gaussian-randomized-range-finder
  - lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence
  - lem-wide-gaussian-matrix-has-full-row-rank-almost-surely
  - lem-wide-gaussian-pseudoinverse-frobenius-moments
  - def-moore-penrose-pseudoinverse
  - lem-normalized-complex-gaussian-block-affine-spectral-second-moments
  - thm-singular-value-decomposition
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-operator-norm-is-the-largest-singular-value
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - thm-jensen-inequality-for-expectation
  - def-factorial-and-falling-factorial
  - def-canonical-natural
  - lem-of-naturals-positive
  - def-real-exponential-function-and-e
  - cor-two-less-than-e-less-than-three
  - thm-geometric-series
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, §§9.1–10.2; the present normalized-complex moment and rank-shift argument is derived locally"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §§11.4.1–11.4.2; the present normalized-complex proof is derived locally"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $A\in\mathbb C^{m\times n}$ be fixed, let $k\ge2$, $p\ge2$ be integers
with $\ell=k+p\le\min(m,n)$, and draw $\Omega\in\mathbb C^{n\times\ell}$
with iid normalized complex Gaussian entries satisfying $\mathbb E|g|^2=1$.
Let $Q$ be the exact finite-scan range-finder basis of
$\operatorname{Ran}(A\Omega)$ returned by
[[alg-gaussian-randomized-range-finder]], and put $P=QQ^*$. Then
$$\mathbb E\|(I-P)A\|_2\le\sqrt{\frac{\ell}{p}}\,\sigma_{k+1}
+\frac{e\sqrt\ell}{p}\left(\sum_{j>k}\sigma_j^2\right)^{1/2}.$$
In particular, the original approved bound with leading coefficient
$1+\sqrt{k/(p-1)}$ follows. The algorithm and sketch width $\ell$ are
unchanged; only the analysis may use a larger SVD partition rank.

## Facts & Assumptions

**Given:** Countable Choice, the fixed complex matrix and the stated $k,p,\ell$,
and the normalized complex Gaussian sketch.

[F1] [[alg-gaussian-randomized-range-finder]] forms $Y=A\Omega$, returns a
finite-scan orthonormal basis of its actual range, and makes the orthogonal
projector $P$ a Borel function of $\Omega$, including rank-deficient and empty
samples.

[F2] Fixed unitary SVD coordinates preserve the iid normalized complex
Gaussian law and make disjoint row blocks independent
([[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]).

[F3] A wide complex Gaussian block has full row rank almost surely, and on
that event its pseudoinverse is $G^*(GG^*)^{-1}$
([[lem-wide-gaussian-matrix-has-full-row-rank-almost-surely]],
[[lem-wide-gaussian-pseudoinverse-frobenius-moments]],
[[def-moore-penrose-pseudoinverse]]).

[F4] For independent normalized complex Gaussian blocks
$G_1\in\mathbb C^{a\times\ell}$, $G_2\in\mathbb C^{d\times\ell}$ with
$\ell=a+r$ and $r\ge2$, and every fixed compatible $S$, writing
$C=2\sqrt2e$,
$$\mathbb E\|S G_2G_1^\dagger\|_2^2
\le C\ell r^{-2}\left(\|S\|_F^2+(r/4)\|S\|_2^2\right),$$
$$\mathbb E\|S G_2G_1^\dagger\|_2^2
\le e^2\ell r^{-2}\left(\|S\|_F^2+(r/2)\|S\|_2^2\right).$$
This is [[lem-normalized-complex-gaussian-block-affine-spectral-second-moments]].

[F5] SVD coordinates preserve the operator norm; the operator norm is the
largest singular value and is bounded above by the Frobenius norm
([[thm-singular-value-decomposition]],
[[def-operator-norm-on-a-finite-dimensional-inner-product-space]],
[[thm-operator-norm-is-the-largest-singular-value]],
[[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[F6] For a nonnegative random variable $X$ with finite second moment,
$\mathbb E X\le\sqrt{\mathbb E X^2}$
([[thm-jensen-inequality-for-expectation]]).

[F7] The normalized exponential constant satisfies
$e=\sum_{n\ge0}1/n!$, with factorial recurrence
([[def-real-exponential-function-and-e]],
[[def-factorial-and-falling-factorial]],
[[def-canonical-natural]], [[lem-of-naturals-positive]]), and
$2<e<3$ ([[cor-two-less-than-e-less-than-three]]); for $|r|<1$,
$\sum_{j\ge0}r^j=(1-r)^{-1}$
([[thm-geometric-series]]).

[A1] Countable Choice supplies the finite-dimensional Lebesgue Gaussian
probability law ([[def-countable-choice]]).

## Proof

1.1 Choose an SVD $A=U\Sigma V^*$ and fix any deterministic analysis rank $a$ with $1\le a<\ell$. Write $V^*\Omega=[\Omega_1^T\ \Omega_2^T]^T$ with the first $a$ rows in $\Omega_1$. By [F2] these blocks are independent normalized complex Gaussian matrices, and by [F3] $\Omega_1$ has full row rank almost surely. In SVD coordinates set $Y=\Sigma V^*\Omega$ and $C_0=Y\Omega_1^\dagger[I_a\ 0]$; then $\operatorname{Ran}(C_0)\subseteq\operatorname{Ran}(Y)$. Since $\Omega_1\Omega_1^\dagger=I_a$, the first $a$ rows of $\Sigma-C_0$ vanish and its remaining rows are $[-T\ \ W]$, where $T=\Sigma_{>a}\Omega_2\Omega_1^\dagger$ and $W=\Sigma_{>a}$. For the projector $\widetilde P$ onto $\operatorname{Ran}(Y)$, $(I-\widetilde P)C_0=0$. For any vector $z$, the two terms in $z=\widetilde Pz+(I-\widetilde P)z$ are orthogonal, so $\|(I-\widetilde P)z\|_2\le\|z\|_2$; taking the unit-vector supremum shows that this projector is contractive. Thus $\|(I-\widetilde P)\Sigma\|_2^2\le\|[-T\ \ W]\|_2^2$. The block identity $[-T\ \ W][-T\ \ W]^*=TT^*+WW^*$ and [F5] give $\|[-T\ \ W]\|_2^2=\|TT^*+WW^*\|_2$. The operator-norm triangle inequality follows by applying the vector triangle inequality to each unit vector and taking the supremum; the SVD gives $\|TT^*\|_2=\|T\|_2^2$ and $\|WW^*\|_2=\|W\|_2^2$. Hence $\|[-T\ \ W]\|_2^2\le\|T\|_2^2+\|W\|_2^2 =\|\Sigma_{>a}\Omega_2\Omega_1^\dagger\|_2^2+\sigma_{a+1}^2$. Unitary invariance transfers this to $E^2\le\sigma_{a+1}^2+ \|\Sigma_{>a}\Omega_2\Omega_1^\dagger\|_2^2$, where $E=\|(I-P)A\|_2$. This uses no inverse of $\Sigma_{1:a}$ and includes $\operatorname{rank}(A)<a$. For every draw $E\le\|A\|_2$; by [F1] it is measurable, so exceptional rank-loss sets do not change its expectation. [given, F1, F2, F3, F5, A1, choose, algebra]

2.1 Put $\sigma=\sigma_{k+1}$ and $R=\sum_{j>k}\sigma_j^2$. If $\sigma=0$, then $R=0$ and all tail singular values vanish, so step 1.1 with $a=k$ gives $E=0$ almost surely. Otherwise $R\ge\sigma^2>0$; set $x=R/(p\sigma^2)>0$ and $b=\sigma\sqrt{\ell/p}$. By [F6], it suffices to prove $\mathbb E E^2/b^2\le(1+e\sqrt x)^2$. [step 1.1, F6, algebra]

3.1 Suppose $x\ge1$. Apply the second bound in [F4] to step 1.1 at $a=k$, with oversampling $p$. Since $\|\Sigma_{>k}\|_2=\sigma$ and $\|\Sigma_{>k}\|_F^2=R$ by [F5], $\mathbb E E^2/b^2\le p/\ell+e^2(x+1/2) \le1+e^2x+e^2/2\le(1+e\sqrt x)^2.$ The last inequality uses $e<3<4$ from [F7] and $\sqrt x\ge1$. [step 1.1, step 2.1, F4, F5, F7, algebra]

3.2 Suppose $1/7\le x\le1$. The first bound in [F4] at $a=k$ gives $\mathbb E E^2/b^2\le1+C(x+1/4)$. Set $y=\sqrt x$ and $a_0=2\sqrt2-e$. The difference $[(1+e\sqrt x)^2-(1+C(x+1/4))]/e$ is $f(y)=2y-a_0y^2-1/\sqrt2$. The series in [F7] gives $27/10<e<11/4$: the partial sum through $1/5!$ is $163/60>27/10$, and the tail after $1/4!$ is at most $(1/5!)\sum_{j\ge0}(1/6)^j=1/100$, so $e\le65/24+1/100=1631/600<11/4$. For the tail estimate, every ratio between successive terms after $1/5!$ is at most $1/6$ by the factorial recurrence, and [F7] sums the resulting geometric majorant. The square comparisons $49/25<2<289/144$ and $7<64/9$ give $7/5<\sqrt2<17/12$ and $\sqrt7<8/3$. Hence $0<a_0<2/15$, $1/\sqrt2<5/7$, and $2/\sqrt7>3/4$. The identity $f((1-t)u+tv)-(1-t)f(u)-tf(v)=a_0t(1-t)(u-v)^2\ge0$ shows $f$ is concave on $[1/\sqrt7,1]$. Therefore it lies above the chord joining its endpoint values, and $f(1/\sqrt7)>3/4-2/105-5/7=1/60>0$, $f(1)>2-2/15-5/7=121/105>0$. This proves $\mathbb E E^2/b^2\le(1+e\sqrt x)^2$ throughout the region. [step 1.1, step 2.1, F4, F7, algebra]

3.3 Suppose $0<x\le1/7$. Let $s=\lfloor p/4\rfloor$, $p'=p-s$, and $a=k+s$. Then $p'\ge\lceil3p/4\rceil\ge2$, $s+1>p/4$, and $a+p'=\ell$, so $1\le a<\ell$. Put $\sigma'=\sigma_{k+s+1}$ and $R'=\sum_{j>k+s}\sigma_j^2$. The first $s+1$ terms in $R$ are at least $(\sigma')^2$, hence $(\sigma')^2\le R/(s+1)$; also $R'\le R$. Apply step 1.1 at this $a$ and the first bound in [F4] with oversampling $p'$. The same sketch and projector are used; only the deterministic SVD partition rank changes. This gives $\mathbb E E^2\le(\sigma')^2+ C\ell(p')^{-2}\bigl(R'+(p'/4)(\sigma')^2\bigr).$ Since $b^2=\sigma^2\ell/p$, $\ell\ge p$, and $p'\ge3p/4$, division yields $\mathbb E E^2/b^2\le x\left[\frac{p^2}{\ell(s+1)}+\frac{Cp^2}{(p')^2} +\frac{Cp^2}{4p'(s+1)}\right] \le x\left[4+\frac{16}{9}C+\frac43C\right]=xK^2,$ where $K^2=4+(28/9)C$. These estimates include $p=2,3$, when $s=0$. [step 1.1, step 2.1, F4, algebra]

4.1 Since $2<9801/4900$, squaring gives $\sqrt2<99/70$. From this and the bound $e<11/4$ proved in step 3.2, $C<1089/140$ and therefore $K^2<4+(28/9)(1089/140)=141/5$. Since $441/64<7$ and $e>27/10$, we have $\sqrt7+e>213/40$ and $(213/40)^2=45369/1600>141/5$. Thus $K<\sqrt7+e$, and $x\le1/7$ implies $K\sqrt x\le(\sqrt7+e)\sqrt x\le1+e\sqrt x$. Step 3.3 now yields $\mathbb E E^2/b^2\le(1+e\sqrt x)^2$ in the last region. [step 3.2, step 3.3, F7, algebra]

5.1 The cases $x\ge1$, $1/7\le x\le1$, and $0<x\le1/7$ exhaust $x>0$; the zero-tail case was handled in step 2.1. Taking square roots in steps 3.1, 3.2 and 4.1 gives $\mathbb E E\le b(1+e\sqrt x) =\sqrt{\ell/p}\,\sigma+(e\sqrt\ell/p)\sqrt R$. Finally $\sqrt{\ell/p}=\sqrt{1+k/p}\le1+\sqrt{k/p} \le1+\sqrt{k/(p-1)}$, so the original expected-error bound follows without changing its field, dimensions, constants, or sketch width. [step 2.1, step 3.1, step 3.2, step 4.1, algebra] ∎
