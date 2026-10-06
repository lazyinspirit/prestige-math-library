---
id: lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators
kind: lemma
title: "The Hilbert and Riesz transforms are Calderon-Zygmund operators"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-calderon-zygmund-kernel-and-principal-value-operator, def-standard-holder-calderon-zygmund-kernel, cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, cor-riesz-transforms-are-ltwo-bounded, lem-hilbert-transform-has-signum-fourier-multiplier, lem-hilbert-transform-is-skew-adjoint-on-ltwo, def-truncated-hilbert-transform-and-principal-value, def-riesz-transforms-on-euclidean-space, lem-riesz-transform-principal-value-kernel-formula, lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds, thm-plancherel, lem-ltwo-fourier-multiplier-bound, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-polar-coordinates-formula-for-lebesgue-measure, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-locally-integrable-functions-embed-in-distributions, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Section 3.1 (Hilbert and Riesz transforms as homogeneous singular integrals) and Definition 3.1 with Remark 3.2(b) ($Tf=W*f$ for Schwartz $f$; $L^2$ extension by density), printed pp. 6-7"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "the kernel/localisation discussion in Section 3, printed p. 10"
---

## Statement

Assume Countable Choice. Let $H$ be the Hilbert transform of
[[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity|the line]]
and, for $1\le j\le n$, let $R_j$ be the Riesz transform of
[[def-riesz-transforms-on-euclidean-space]]. Then $H$ and each $R_j$ are
Calderon-Zygmund operators with the kernels $k(x)=1/(\pi x)$ and
$K_j(x)=c_nx_j/|x|^{n+1}$: they are $L^2$-bounded with norm at most $1$, and
for every compactly supported $f\in L^2$ and almost every
$x\notin\operatorname{supp}f$ one has $Tf(x)=\int k(x-y)f(y)\,dy$ with the
kernel of $T$. Moreover both kernels are standard $1$-Holder Calderon-Zygmund
kernels with the published constants ($A_2'=2/\pi$ and
$C_n=c_n2^{n+1}(3n+4)$, respectively).

## Facts & Assumptions

**Given:** Countable Choice, the Hilbert transform $H$ on $\mathbb R$ with
kernel $k(x)=1/(\pi x)$, and the Riesz transforms $R_1,\dots,R_n$ on
$\mathbb R^n$ with kernels $K_j(x)=c_nx_j/|x|^{n+1}$.

[F1] The Hilbert transform is a well-defined $L^2$ operator with
$\|Hf\|_2=\|f\|_2$ and $H^2f=-f$; it is skew-adjoint,
$\langle Hf,g\rangle=-\langle f,Hg\rangle$; on Schwartz functions
$Hf=W*f$, the principal value $\lim_{\varepsilon\downarrow0}H_\varepsilon f(x)$
exists at every $x$ and equals $(W*f)(x)$, with
$\mathcal F(Hf)=-i\operatorname{sgn}(\xi)\widehat f(\xi)$
([[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]],
[[lem-hilbert-transform-is-skew-adjoint-on-ltwo]],
[[lem-hilbert-transform-has-signum-fourier-multiplier]],
[[def-truncated-hilbert-transform-and-principal-value]]).

[F2] The Riesz transform $R_j$ has multiplier
$m_j(\xi)=-i\xi_j/|\xi|$ for $\xi\ne0$ (and $m_j(0)=0$), acts on Schwartz
functions, and satisfies $\|R_jf\|_2\le\|f\|_2$ for all $f\in L^2$; its kernel
$K_j(x)=c_nx_j/|x|^{n+1}$ obeys $|K_j(x)|\le c_n|x|^{-n}$ and
$|K_j(x-h)-K_j(x)|\le C_n|h||x|^{-(n+1)}$ whenever $x\ne0$ and
$|h|\le|x|/2$, with $C_n=c_n2^{n+1}(3n+4)$; and for every Schwartz function
$f$ the truncated integrals $\int_{|y|>\varepsilon}K_j(y)f(x-y)\,dy$ converge as
$\varepsilon\downarrow0$, for every $x$, to a continuous representative of the
$L^2$ class $R_jf$
([[def-riesz-transforms-on-euclidean-space]],
[[cor-riesz-transforms-are-ltwo-bounded]],
[[lem-riesz-transform-kernels-have-explicit-size-difference-and-spherical-cancellation-bounds]],
[[lem-riesz-transform-principal-value-kernel-formula]]).

[F3] Polar coordinates under Countable Choice: for every Borel measurable nonnegative $g$ on $\mathbb R^n$, $$\int_{\mathbb R^n}g(x)\,dx=\int_0^\infty\int_{S^{n-1}}g(r\omega)r^{n-1}\,d\sigma(\omega)\,dr,$$ where $\sigma(S^{n-1})=|S^{n-1}|$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F4] The Fourier transform extends to a unitary
$\mathcal F_2:L^2(\mathbb R^n)\to L^2(\mathbb R^n)$ preserving the
first-variable-linear inner product ([[thm-plancherel]]).

[F5] The Fubini theorem applies to $L^1$ functions on products of $\sigma$-finite
measure spaces
([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F6] The map sending a locally integrable function to its regular distribution
is injective on $L^1_{\mathrm{loc}}(\Omega)$ modulo almost-everywhere equality,
for every open $\Omega$
([[thm-locally-integrable-functions-embed-in-distributions]]).

[F7] The Calderon-Zygmund kernel and operator conventions are those of [[def-calderon-zygmund-kernel-and-principal-value-operator]]: conditions (1) and (2) are the annular size and Hormander conditions, and condition (3) is the off-support representation by the kernel.

[F9] The pointwise first-difference estimate defines the standard $1$-Holder kernel condition once the base Calderon-Zygmund conditions have been verified ([[def-standard-holder-calderon-zygmund-kernel]]).

[F8] Countable Choice ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 The Hilbert kernel $k(x)=1/(\pi x)$ is odd, continuous on $\mathbb R\setminus\{0\}$ and hence locally integrable there, and for every $R>0$ the annular integral is $\int_{R\le|x|\le2R}|k(x)|\,dx=\frac{1}{\pi}\int_{R\le|x|\le2R}\frac{dx}{|x|}=\frac{2\ln2}{\pi}$, so condition (1) of [F7] holds with $A_1=2\ln2/\pi$. If $|x|\ge2|h|>0$ then $|x-h|\ge|x|/2$, so $|k(x-h)-k(x)|=\frac{|h|}{\pi|x||x-h|}\le\frac{2}{\pi}\frac{|h|}{|x|^2}$; this gives the required pointwise first-difference bound with constant $A_2'=2/\pi$. The standing Countable Choice hypothesis [F8] is inherited with the $L^2$ Hilbert theory of [F1], which is stated under it, and is used nowhere else in this step. [F1, F7, F8, algebra]

1.2 The Riesz kernel $K_j(x)=c_nx_j/|x|^{n+1}$ is smooth and odd on $\mathbb R^n\setminus\{0\}$, hence locally integrable there, and $|K_j(x)|\le c_n|x|^{-n}$ gives $\int_{R\le|x|\le2R}|K_j(x)|\,dx\le c_n|S^{n-1}|\ln2$ for every $R>0$, so condition (1) of [F7] holds with $A_1=c_n|S^{n-1}|\ln2$; [F2] gives the pointwise first-difference bound with $A_2'=C_n=c_n2^{n+1}(3n+4)$. The standing Countable Choice hypothesis [F8] is inherited here with the Riesz theory of [F2], which is stated under it. [F2, F7, F8, algebra]

1.3 The operators are $L^2$-bounded with norm at most $1$: $\|Hf\|_2=\|f\|_2$ and $\|R_jf\|_2\le\|f\|_2$ by [F1] and [F2]. The Hilbert transform is skew-adjoint by [F1]. For the Riesz transforms, Plancherel [F4] and the multiplier representation give, for $f,g\in L^2(\mathbb R^n)$, $\langle R_jf,g\rangle=\int_{\mathbb R^n}m_j\widehat f\,\overline{\widehat g}\,d\xi=\int_{\mathbb R^n}\widehat f\,\overline{(-m_j)\widehat g}\,d\xi=\langle f,-R_jg\rangle$, because $\overline{m_j}=-m_j$ on the purely imaginary symbol; hence $R_j^*=-R_j$. [F1, F2, F4, algebra]

2.1 Both kernels satisfy the annular size condition (1) of [F7] by steps 1.1 and 1.2. For either kernel $q$ and every $h\ne0$, the pointwise difference bound in step 1.1 or 1.2 gives $|q(x-h)-q(x)|\le A_2'|h||x|^{-n-1}$ for $|x|\ge2|h|$. By polar coordinates [F3], $$\int_{|x|\ge2|h|}|q(x-h)-q(x)|\,dx\le A_2'|h|\int_{|x|\ge2|h|}|x|^{-n-1}\,dx=A_2'|h|\,|S^{n-1}|\int_{2|h|}^{\infty}r^{-2}\,dr=\frac{|S^{n-1}|}{2}A_2'.$$ Thus condition (2) of [F7] holds directly with $A_2=|S^{n-1}|A_2'/2$, so both kernels are Calderon-Zygmund kernels in the base sense. Since condition (2) is now established, their pointwise first-difference bounds make them standard $1$-Holder kernels by [[def-standard-holder-calderon-zygmund-kernel]], with constants $2/\pi$ and $C_n$. [F3, step 1.1, step 1.2, F7, F9, algebra]

2.2 Fix a compactly supported $f\in L^2(\mathbb R^n)$ and put $\Omega=\mathbb R^n\setminus\operatorname{supp}f$; fix also $\varphi\in C_c^\infty(\Omega)$. Then $\operatorname{supp}f$ and $\operatorname{supp}\varphi$ are disjoint compact sets, so their distance is positive and the kernel is bounded on $\operatorname{supp}f\times\operatorname{supp}\varphi$; since $f$ is integrable on its compact support by Cauchy-Schwarz, the double integral below is absolutely convergent. For $x\in\operatorname{supp}f$ one has $x\notin\operatorname{supp}\varphi$, and the truncated integrals in the principal-value formulas [F1] and [F2] converge to the full absolutely convergent integral $\int k(x-y)\varphi(y)\,dy$, so $T\varphi(x)=\int k(x-y)\varphi(y)\,dy$ there. Skew-adjointness from step 1.3 therefore gives $\langle Tf,\varphi\rangle=-\langle f,T\varphi\rangle=-\int_{\operatorname{supp}f}f(x)\overline{\int k(x-y)\varphi(y)\,dy}\,dx$, and since the kernels are real-valued this equals $-\iint f(x)k(x-y)\overline{\varphi(y)}\,dy\,dx$. Substituting $k(x-y)=-k(y-x)$ by oddness and applying Fubini [F5] yields $\langle Tf,\varphi\rangle=\int\overline{\varphi(y)}\,g(y)\,dy$ with $g(y):=\int k(y-x)f(x)\,dx$. [F1, F2, F5, step 1.3, algebra]

3.1 For every $y\in\Omega$ the integral defining $g(y)$ is absolutely convergent: $x\mapsto k(y-x)$ is bounded on the compact set $\operatorname{supp}f$, and $\int_{\operatorname{supp}f}|f(x)|\,dx\le|\operatorname{supp}f|^{1/2}\|f\|_2<\infty$. Hence $g$ is locally integrable on the open set $\Omega$, and $Tf|_\Omega$ is locally integrable as well because $Tf\in L^2(\mathbb R^n)$; step 2.2 says that the regular distributions of $Tf|_\Omega$ and $g|_\Omega$ agree on every test function supported in $\Omega$, so the injectivity of [F6], applied on $\Omega$, gives $Tf=g$ almost everywhere on $\Omega$. [step 2.2, F6]

4.1 By step 2.1 the kernels $k$ and $K_j$ are Calderon-Zygmund kernels, by step 1.3 the operators $H$ and $R_j$ are $L^2$-bounded with norm at most $1$ and skew-adjoint, and by step 3.1 the off-support representation (3) of [F7] holds: for almost every $x\notin\operatorname{supp}f$, $Tf(x)=\int k(x-y)f(y)\,dy$. Therefore $H$ and $R_j$ are Calderon-Zygmund operators with the kernels $k$ and $K_j$, and the standard $1$-Holder constants are $A_2'=2/\pi$ and $C_n=c_n2^{n+1}(3n+4)$. [step 2.1, step 1.3, step 3.1, F7] ∎ 