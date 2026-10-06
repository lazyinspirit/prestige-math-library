---
id: thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation
kind: theorem
title: "Calderon-Zygmund operators map $H^1$ boundedly into $L^1$"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [thm-atomic-characterisation-of-real-hp, def-hp-atom-with-moment-order, def-calderon-zygmund-kernel-and-principal-value-operator, def-standard-holder-calderon-zygmund-kernel, lem-holder-cz-kernels-satisfy-hormander-cancellation, def-maximal-truncated-singular-integral, thm-maximal-truncations-are-weak-one-one-and-strong-lp, cor-principal-value-truncations-converge-almost-everywhere, thm-calderon-zygmund-operator-has-weak-type-one-one, cor-l-p-convergence-implies-convergence-in-measure, def-countable-choice, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-multidimensional-rectangle-and-volume, thm-lebesgue-measure-of-a-box-of-every-kind, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-dominated-convergence, thm-complex-holder-minkowski-and-the-quotient-norm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Li-An Daniel Wang, Multiplier Theorems on Anisotropic Hardy Spaces (PhD dissertation, University of Oregon, 2012)"
      url: "https://scholarsbank.uoregon.edu/bitstreams/9f6ef525-2867-467f-8ce0-ae7bfbeca1c1/download"
      locator: "Remark 1.2(3)-(4) and Table 1.1, printed pp. 14-15, and Theorem 1.4(1), p. 16: singular integral operators bounded on $H^1$"
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, pp. 15-16 and Theorem 1, p. 17: operators uniformly bounded on atoms extend to $H^p\\to L^p$"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 7.35 and Remark 7.37, printed pp. 40-41: the $p=1$ atomic estimate and summation"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $n\ge1$, $0<\delta\le1$, fix the kernel
$\varphi$ defining $H^1$ and an admissible order $N$ for its atomic
characterisation, and let
$k:\mathbb R^n\setminus\{0\}\to\mathbb C$ satisfy the pointwise size bound
$|k(x)|\le A_1|x|^{-n}$, the standard $\delta$-Holder bound
$|k(x-y)-k(x)|\le A_2'|y|^\delta|x|^{-n-\delta}$ for $|x|\ge2|y|>0$, and the
cancellation bound $\sup_{0<r<R}|\int_{r<|x|<R}k(x)\,dx|\le A_3$. Let $W$ be a
principal-value distribution for $k$ and let $T$ be the convolution operator
with $W$, assumed $L^2$-bounded with norm $B$ and satisfying the off-support
representation of
[[def-calderon-zygmund-kernel-and-principal-value-operator]] with kernel $k$.
Then $T$ has a unique extension to a bounded linear operator
$H^1(\mathbb R^n)\to L^1(\mathbb R^n)$, and there is
$C=C_{n,\delta,N,\varphi}$ with
$$\|Tf\|_{L^1}\le C(A_1+A_2'+A_3+B)\|f\|_{H^1}\qquad(f\in H^1).$$
The extension agrees with the given $L^2$ operator on
$L^2\cap H^1$, and for any fixed sequence $\delta_j\downarrow0$ realizing $W$ in [[def-calderon-zygmund-kernel-and-principal-value-operator]], its values are $\lim_j T_{\delta_j}f$ almost everywhere. A full limit as $\varepsilon\downarrow0$ requires the additional hypothesis that the defining principal-value integrals converge along all radii; sequence-based principal-value existence alone does not imply this.

## Facts & Assumptions

**Given:** Countable Choice, a fixed sequence $\delta_j$ realizing $W$, $n\ge1$, $0<\delta\le1$, the fixed $H^1$ kernel $\varphi$ and atomic order $N$, the kernel $k$, the principal-value distribution $W$, the operator $T$ and the constants as in the statement.

[F1] The Holder bound makes $k$ continuous at each nonzero point: take $y\to0$ with $2|y|\le|x|$ in the stated difference bound. Thus $k$ is Borel, and its size bound gives integrability on compact sets away from zero. Truncations: for $f\in L^p$, $1\le p<\infty$, and $0<\varepsilon<\infty$, $T_\varepsilon f(x)=\int_{|y|>\varepsilon}k(y)f(x-y)dy$ converges absolutely at every $x$; the maximal truncations obey the weak $(1,1)$ bound $|\{T^*f>\lambda\}|\le C_{n,\delta}(A_1+A_2'+A_3+B)\lambda^{-1}\|f\|_1$ for $f\in L^1$ and the strong $L^p$ bounds for $1<p<\infty$ ([[def-maximal-truncated-singular-integral]], [[thm-maximal-truncations-are-weak-one-one-and-strong-lp]], [[lem-holder-cz-kernels-satisfy-hormander-cancellation]], [[def-standard-holder-calderon-zygmund-kernel]]).

[F2] Fix a sequence $\delta_j\downarrow0$ realizing $W$. For $g\in C_c^\infty$, the definition of $W$ applied to the Schwartz test $g(x-\cdot)$ gives $T_{\delta_j}g(x)\to(W*g)(x)$ at every $x$. This extends to a.e. sequential convergence for every $f\in L^1$: for $g$ approximating $f$ in $L^1$, the tail oscillation of $(T_{\delta_j}f)$ is at most $2T^*(f-g)$. For every $\eta>0$, [F1] therefore bounds the measure of the set where that oscillation exceeds $\eta$ by $2C\eta^{-1}\|f-g\|_1$. Density ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]) makes this zero. Taking a countable sequence of $\eta$ shows that the scalar sequence is Cauchy, hence convergent, a.e. The same argument uses the strong $L^2$ bound for $f\in L^2$. On $C_c^\infty$, dominated convergence with majorant $T^*g\in L^2$ gives $T_{\delta_j}g\to Tg$ in $L^2$; density and the uniform $L^2$ bound of $T^*$ extend this to all $L^2$. If the principal-value integrals converge along all radii on Schwartz tests, the identical oscillation argument over $0<\varepsilon<\eta$ gives the full a.e. limit. The measurable suprema can be reduced to rational radii by absolute convergence away from zero.

[F3] Atomic characterisation: every $f\in H^1$ has a representation $f=\sum_j\lambda_ja_j$ in $\mathcal S'$ with $(1,\infty,0)$-atoms $a_j$ and $(\lambda_j)\in\ell^1$; the series also converges in the $H^1$ norm and one may choose $\sum_j|\lambda_j|\le C_{n,N,\varphi}\|f\|_{H^1}$ ([[thm-atomic-characterisation-of-real-hp]]). A $(1,\infty,0)$-atom is supported in a cube $Q$, satisfies $|a|\le|Q|^{-1}$ and $\int a=0$ ([[def-hp-atom-with-moment-order]]).

[F4] Complex $L^1$ is complete under Countable Choice ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]). Norm convergence implies convergence in measure ([[cor-l-p-convergence-implies-convergence-in-measure]]). A weak $(1,1)$ difference estimate also gives convergence in measure directly, since $|\{|u_j-u|>\eta\}|\le C\eta^{-1}\|f_j-f\|_1\to0$. Limits in measure are unique: $\{|u-v|>\eta\}$ lies in the union of the two error sets at threshold $\eta/2$, whose measures tend to zero.

[F5] Under Countable Choice, an $L^2$-norm convergent sequence has a subsequence of representatives converging almost everywhere to a representative of its limit ([[cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences]]).

[F6] Tonelli's theorem permits interchanging the integrals of nonnegative measurable functions on sigma-finite product measure spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F7] The Calderon-Zygmund kernel and operator conventions are those of [[def-calderon-zygmund-kernel-and-principal-value-operator]]: conditions (1) and (2) are the annular size and Hormander conditions, and condition (3) is the off-support representation by the kernel.

[F8] Countable Choice ([[def-countable-choice]]).

[F9] Under Countable Choice, a closed cube of side length $L$ in $\mathbb R^n$ is Lebesgue measurable and has measure $L^n$: its volume is the product of its side lengths ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-multidimensional-rectangle-and-volume]]).



**Proof technique:** the near/far atom estimate, the a.e. sequential limit of the truncations, and summation over an atomic representation.

## Proof

**Proof technique:** direct.

1.1 Atom estimate. Let $a$ be a $(1,\infty,0)$-atom supported in a cube $Q$ of side length $\ell(Q)$ and centre $c_Q$, and let $Q^\dagger$ be the concentric cube of side length $2\sqrt n\,\ell(Q)$. Since $a\in L^2$ and $T$ is $L^2$-bounded, Cauchy-Schwarz and [F9] give
$$\int_{Q^\dagger}|Ta|\le|Q^\dagger|^{1/2}\|Ta\|_{L^2}\le|Q^\dagger|^{1/2}B\|a\|_{L^2}\le(2\sqrt n)^{n/2}B,$$
using $\|a\|_2\le|Q|^{-1/2}$. Outside $Q^\dagger$, for almost every $x$ the off-support representation gives $Ta(x)=\int_Qk(x-y)a(y)dy$, and the mean-zero property rewrites this as $\int_Q[k(x-y)-k(x-c_Q)]a(y)dy$. For every $y\in Q$ one has $|y-c_Q|\le\sqrt n\,\ell(Q)/2$, while $x\notin Q^\dagger$ implies $|x-c_Q|\ge\sqrt n\,\ell(Q)$; hence $|x-c_Q|\ge2|y-c_Q|$. The standard H\"older bound and the H\"ormander condition therefore give
$$\int_{(Q^\dagger)^c}|Ta|\le\int_Q|a(y)|\int_{|x-c_Q|\ge2|y-c_Q|}|k(x-y)-k(x-c_Q)|\,dx\,dy\le A_2\|a\|_1\le C_{n,\delta}A_2',$$
where $A_2\le C_{n,\delta}A_2'$ by [F1] and $\|a\|_1\le1$. Thus $\|Ta\|_{L^1}\le (2\sqrt n)^{n/2}B+C_{n,\delta}A_2'$. [F1, F3, F6, F7, F9, given, algebra]

1.2 The almost-everywhere limit extension. Define $\widetilde Tf(x)=\lim_jT_{\delta_j}f(x)$ for $f\in L^1$, which exists almost everywhere by [F2]. Then $|\widetilde Tf|\le T^*f$ pointwise, so $\widetilde T$ is linear on $L^1$ (limits of linear expressions) and $\|\widetilde Tf\|_{L^{1,\infty}}\le C_{n,\delta}(A_1+A_2'+A_3+B)\|f\|_1$ by the weak $(1,1)$ bound of [F1]. [F1, F2, algebra]

2.1 Identification on atoms. Let $a$ be a $(1,\infty,0)$-atom, so $a\in L^1\cap L^2$. By [F2], the truncations $T_{\delta_j}a$ converge almost everywhere to $\widetilde Ta$ as $j\to\infty$. The $L^2$ convergence in [F2] and the subsequence principle [F5] give a subsequence $T_{\delta_{j_\ell}}a\to Ta$ almost everywhere. On the intersection of these two full-measure sets, this subsequence converges to both limits, so $\widetilde Ta=Ta$ almost everywhere. Step 1.1 therefore gives $\|\widetilde Ta\|_{L^1}\le C_{n,\delta}(A_2'+B)$. [step 1.1, F2, F3, F5]

3.1 Summation. Let $f\in H^1$ and let $f=\sum_j\lambda_ja_j$ be the representation of [F3] with $\sum_j|\lambda_j|\le C_{n,N,\varphi}\|f\|_{H^1}$. Since $\|a_j\|_{L^1}\le1$, the series converges absolutely in $L^1$ to $f$, so $f\in L^1$ and the partial sums $g_J=\sum_{j\le J}\lambda_ja_j$ satisfy $\|f-g_J\|_{L^1}\le\sum_{j>J}|\lambda_j|\to0$. By step 1.2 and linearity, $\widetilde Tg_J=\sum_{j\le J}\lambda_j\widetilde Ta_j$, and by the $L^{1,\infty}$ bound $\widetilde Tg_J\to\widetilde Tf$ in measure; on the other hand step 2.1 gives $\sum_j|\lambda_j|\|\widetilde Ta_j\|_{L^1}\le C_{n,\delta}(A_2'+B)\sum_j|\lambda_j|<\infty$, so $\widetilde Tg_J$ converges absolutely in $L^1$. The $L^1$ limit is also a limit in measure, so it equals $\widetilde Tf$ a.e., and $$\|\widetilde Tf\|_{L^1}\le\sum_j|\lambda_j|\|\widetilde Ta_j\|_{L^1}\le C_{n,\delta,N,\varphi}(A_2'+B)\|f\|_{H^1}\le C(A_1+A_2'+A_3+B)\|f\|_{H^1}$$ after enlarging the constant. [step 1.2, step 2.1, F3, F4, algebra]

4.1 Agreement and uniqueness. Let $f\in L^2\cap H^1$. By [F2], $T_{\delta_j}f\to Tf$ in $L^2$, so a subsequence converges almost everywhere to $Tf$; by [F2] the sequential limit $\lim_j T_{\delta_j}f=\widetilde Tf$ exists almost everywhere, hence $\widetilde Tf=Tf$ a.e. Thus the bounded operator $\widetilde T:H^1\to L^1$ extends the given $L^2$ operator on the dense subspace $L^2\cap H^1$ of $H^1$ (dense because finite atomic sums lie there and approximate every $H^1$ element in the $H^1$ quasi-norm by [F3]). Any two bounded extensions with the same bound agree on the dense subspace and hence everywhere, so the extension is unique. [step 1.2, step 3.1, F2, F3, F4, F5, algebra]

5.1 Conclusion. Steps 1.1 and 1.2 give the atom estimate and construct the extension as the almost-everywhere sequential limit of the truncations, step 2.1 identifies it with $T$ on atoms, step 3.1 bounds it on $H^1$ by summation over the atomic representation, and step 4.1 proves agreement with the $L^2$ operator and uniqueness. Countable Choice is used through the cited subsequence and atomic-representation results. This proves the theorem. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, F8] ∎
