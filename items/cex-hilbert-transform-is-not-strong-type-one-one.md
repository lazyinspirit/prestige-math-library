---
id: cex-hilbert-transform-is-not-strong-type-one-one
kind: counterexample
title: "Hilbert transform is not strong type (1,1)"
status: draft
origin: pipeline
deps: [ex-hilbert-transform-of-an-interval-indicator, cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, prop-mollifier-families-are-l-one-approximate-identities, thm-l-one-approximate-identities-converge-in-l-p, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-schwartz-space-and-its-seminorms, thm-complex-holder-minkowski-and-the-quotient-norm, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-lebesgue-measure-of-a-box-of-every-kind, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.1, Example 5.1.3, printed pp. 315-316; Section 5.1.3, Remark 5.1.9, p. 322"
---

## Statement refuted

The claim that the Schwartz-core Hilbert transform has a bounded
$\mathbb C$-linear extension $T:L^1(\mathbb R;\mathbb C)\to L^1(\mathbb R;\mathbb C)$
agreeing with the $L^2$ Hilbert transform on $L^1(\mathbb R)\cap L^2(\mathbb R)$
— equivalently, that the Hilbert transform is of strong type $(1,1)$ — is
false. The interval indicator supplies the witness: it lies in $L^1$, while its
$L^2$ transform $q(x)=\frac1\pi\log\frac{|x|}{|x-1|}$ has a nonintegrable
$\frac1{|x|}$ tail and therefore is not an $L^1$ class.

This refutes only strong type $(1,1)$. No weak-type $(1,1)$ estimate is
refuted or asserted here.

## Facts & Assumptions

**Given:** Countable Choice, the indicator $f=\mathbf 1_{(0,1)}$, and the function $q(x)=\frac1\pi\log\frac{|x|}{|x-1|}$ for $x\notin\{0,1\}$, with the $L^p$ conventions of [[def-complex-lp-and-euclidean-test-function-conventions]].

[F1] $f\in L^1(\mathbb R)\cap L^2(\mathbb R)$ with $0\le f\le1$; the symmetric principal value of $\frac1\pi\int\frac{f(y)}{x-y}dy$ exists at every $x\notin\{0,1\}$ and equals $q(x)$; and $q=Hf$ in $L^2(\mathbb R;\mathbb C)$ for the $L^2$ Hilbert transform. [[ex-hilbert-transform-of-an-interval-indicator]]

[F2] $H$ is complex-linear on $L^2(\mathbb R;\mathbb C)$ and $\|Hg\|_2=\|g\|_2$ for every $g\in L^2$. [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]]

[F3] For $0<a<b$ one has $\int_a^b\frac{dt}{t}=\log b-\log a$, and $\log(1+u)=\int_1^{1+u}\frac{dt}{t}$ for $u\ge0$; $\log$ is strictly increasing on $(0,\infty)$. [[thm-logarithm-derivative-and-integral]] [[thm-natural-logarithm-laws]]

[F4] The nonnegative integral is monotone and positively homogeneous, and monotone convergence passes to the limit of an increasing sequence of truncations. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]] [[thm-monotone-convergence-for-the-integral]]

[F5] There is $\chi\in C_c^\infty(\mathbb R)$ with $0\le\chi\le1$, $\chi=1$ on $[-1,1]$ and $\chi=0$ off $(-2,2)$; $\varphi:=\chi/\int\chi$ is a nonnegative $C_c^\infty$ function of integral one; and its mollifiers $\varphi_\varepsilon(x)=\varepsilon^{-1}\varphi(x/\varepsilon)$ satisfy: $g*\varphi_\varepsilon$ is smooth, $\operatorname{supp}(g*\varphi_\varepsilon)\subseteq\overline{\operatorname{supp}g+\operatorname{supp}\varphi_\varepsilon}$, and $\|g*\varphi_\varepsilon-g\|_p\to0$ for $g\in L^p(\mathbb R)$ and $1\le p<\infty$. Every $C_c^\infty(\mathbb R)$ function is a Schwartz function. [[lem-schwartz-cutoffs-from-the-standard-smooth-step]] [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]] [[prop-mollifier-families-are-l-one-approximate-identities]] [[thm-l-one-approximate-identities-converge-in-l-p]] [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]] [[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]] [[def-schwartz-space-and-its-seminorms]]

[F6] Holder: $|\int uv\,dx|\le\|u\|_1\|v\|_\infty$ and $|\int uv\,dx|\le\|u\|_2\|v\|_2$. [[thm-complex-holder-minkowski-and-the-quotient-norm]]

[F7] Dominated convergence: if $|h_R|\le G$ with $G\in L^1$ and $h_R\to h$ almost everywhere, then $\int h_R\to\int h$. [[thm-dominated-convergence]]

[F8] On a compact interval a bounded Riemann integrable function is Lebesgue integrable with the same integral, and the interval $(0,1)$ has Lebesgue measure one. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]] [[thm-lebesgue-measure-of-a-box-of-every-kind]]

## Counterexample

**Proof technique:** direct.

1.1 The indicator $f$ is measurable with $0\le f\le1$ and $\{f\ne0\}=(0,1)$ of measure one, so $|f|^p\le1$ on a set of measure one and vanishes elsewhere; hence $f\in L^p(\mathbb R;\mathbb C)$ for every $1\le p\le\infty$, with $\|f\|_p\le1$. [F1, F8, given, algebra]

1.2 On $(1,\infty)$ one has $q(x)=\frac1\pi\log\frac{x}{x-1}=\frac1\pi\log\left(1+\frac1{x-1}\right)>0$ because $\log$ is strictly increasing and $\log1=0$ by [F3]. [F1, F3, given, algebra]

1.3 For $0\le u\le1$ one has $\log(1+u)=\int_1^{1+u}\frac{dt}{t}\ge\int_1^{1+u}\frac{dt}{1+u}=\frac{u}{1+u}\ge\frac u2$, using monotonicity of the integral and $1+u\le2$. [F3, F4, algebra]

2.1 $q\notin L^1(\mathbb R)$: for $x\ge2$ put $u=\frac1{x-1}\in(0,1]$; steps 1.2 and 1.3 give $q(x)\ge\frac1{2\pi}\cdot\frac1{x-1}\ge\frac1{2\pi x}\ge0$. Hence for every $R>2$, using additivity over the interval and [F8] with the antiderivative of [F3], $\int_{(2,R)}q\ge\frac1{2\pi}\int_{(2,R)}\frac{dx}{x}=\frac1{2\pi}(\log R-\log2)$, which tends to $+\infty$; monotone convergence [F4] gives $\int_{(2,\infty)}q=+\infty$, and monotonicity in the domain gives $\int_{\mathbb R}|q|\ge\int_{(2,\infty)}q=+\infty$. So $q$ is not an $L^1$ class. [F3, F4, F8, step 1.2, step 1.3, algebra]

2.2 Let $\varphi$ be the unit-mass bump of [F5] and for $j\in\mathbb N$ put $f_j:=f*\varphi_{1/(j+1)}$. Each $f_j$ is smooth with $\operatorname{supp}f_j\subseteq[-2/(j+1),1+2/(j+1)]$, so $f_j\in C_c^\infty(\mathbb R)\subseteq\mathcal S(\mathbb R)$; and $0\le f_j\le1$ because $0\le f\le1$ and $\varphi_{1/(j+1)}\ge0$ has integral one. Since $\|f_j-f\|_p\to0$ for $p=1$ and $p=2$, each $f_j$ lies in $L^1\cap L^2$ and the sequence converges to $f$ in both norms. [F5, step 1.1, algebra]

3.1 $\|Hf_j-q\|_2\to0$: by [F1] $q=Hf$, and by [F2] $H$ is a linear isometry, so $\|Hf_j-q\|_2=\|H(f_j-f)\|_2=\|f_j-f\|_2\to0$ by step 2.2. [F1, F2, step 2.2, algebra]

4.1 Suppose, for contradiction, that $T:L^1(\mathbb R;\mathbb C)\to L^1(\mathbb R;\mathbb C)$ is bounded and linear with $Tg=Hg$ for every $g\in\mathcal S(\mathbb R)$. Since $f_j\in\mathcal S$, one has $Tf_j=Hf_j$ as $L^1$ classes, and $\|Tf_j-Tf\|_1\le\|T\|\,\|f_j-f\|_1\to0$ by step 2.2. Fix $\psi\in C_c^\infty(\mathbb R)$. Then $|\int(Tf_j-Tf)\psi|\le\|Tf_j-Tf\|_1\|\psi\|_\infty\to0$ and, by step 3.1, $|\int(Hf_j-q)\psi|\le\|Hf_j-q\|_2\|\psi\|_2\to0$; since the $j$-th integrals of $Tf_j$ and $Hf_j$ agree, it follows that $\int(Tf)\psi=\int q\psi$, i.e. $\int(Tf-q)\psi=0$ for every $\psi\in C_c^\infty(\mathbb R)$. [step 2.2, step 3.1, F6, given]

5.1 For $R>8$ set $\psi_R:=\mathbf 1_{[4,R]}*\varphi_1$ with $\varphi_1$ as in [F5]. Then $\psi_R\in C_c^\infty(\mathbb R)$, its support is contained in $[2,R+2]$, where $q\ge0$ by step 1.2, $0\le\psi_R\le1$, and $\psi_R=1$ on $[6,R-2]$: indeed $\psi_R(x)=\int_{x-R}^{x-4}\varphi_1(y)dy$, and for $x\in[6,R-2]$ the interval $[x-R,x-4]$ contains the support of $\varphi_1$, which is contained in $[-2,2]$. Step 4.1 gives $\int(Tf)\psi_R=\int q\psi_R$ for every $R>8$. As $R\to\infty$ the functions $\psi_R$ converge pointwise to the bounded function $x\mapsto\int_{-\infty}^{x-4}\varphi_1$, so dominated convergence [F7] with majorant $|Tf|\in L^1$ shows that the left-hand sides converge to a finite limit; but step 2.1 and $\psi_R=1$ on $[6,R-2]$ give $\int q\psi_R\ge\int_{[6,R-2]}q\ge\frac1{2\pi}\left(\log(R-2)-\log6\right)\to\infty$. A sequence cannot converge to a finite limit while equalling terms that tend to $+\infty$, so no such $T$ exists. [step 2.1, step 4.1, F5, F7, algebra]

6.1 The compatibility hypothesis in step 4.1 was imposed only on Schwartz functions, which lie in $L^1\cap L^2$; hence there is no bounded linear $L^1\to L^1$ operator agreeing with the $L^2$ Hilbert transform on $L^1\cap L^2$ either. The witness $f\in L^1$ with transform $q\notin L^1$ therefore refutes strong type $(1,1)$. Nothing here addresses weak type $(1,1)$, which is a different assertion. [step 5.1] ∎
