---
id: ex-hilbert-transform-of-an-interval-indicator
kind: example
title: "Hilbert transform of an interval indicator"
status: published
origin: pipeline
deps: [def-truncated-hilbert-transform-and-principal-value, lem-hilbert-transform-has-signum-fourier-multiplier, cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, def-countable-choice, def-complex-lp-and-euclidean-test-function-conventions, lem-schwartz-cutoffs-from-the-standard-smooth-step, def-mollifier-family-generated-by-a-unit-mass-smooth-bump, prop-mollifier-families-are-l-one-approximate-identities, thm-l-one-approximate-identities-converge-in-l-p, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset, thm-lebesgue-measure-of-a-box-of-every-kind, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, thm-chain-rule, thm-ftc-second-part, thm-additivity-over-subintervals, thm-complex-lp-completeness-and-almost-everywhere-subsequences]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Section 5.1.1, Example 5.1.3 and equation (5.1.7), printed pp. 315-316"
---

## Statement

Assume [[def-countable-choice|Countable Choice]] and let $f:=\mathbf 1_{(0,1)}$
be the indicator of the open unit interval, with the $L^p$ conventions of
[[def-complex-lp-and-euclidean-test-function-conventions]]. Write

$$q(x):=\frac1\pi\log\frac{|x|}{|x-1|}\qquad(x\notin\{0,1\}).$$

Then:

1. for every $x\notin\{0,1\}$ the symmetric principal value
   $\lim_{\varepsilon\downarrow0}H_\varepsilon f(x)$ exists and equals $q(x)$,
   the logarithm being taken at the positive argument $|x|/|x-1|$;
2. the function $q$ represents the $L^2$ Hilbert transform of $f$ almost
   everywhere, that is, $q=Hf$ in $L^2(\mathbb R;\mathbb C)$.

The values at the two endpoints are immaterial: every assertion is about the
complement of the Lebesgue-null set $\{0,1\}$, and no claim is made about
$H_{\varepsilon}f$ at $x\in\{0,1\}$.

## Facts & Assumptions

**Given:** Countable Choice, the indicator $f=\mathbf 1_{(0,1)}\in L^1(\mathbb R)\cap L^2(\mathbb R)$ with $0\le f\le1$, and the truncated Hilbert transform of [[def-truncated-hilbert-transform-and-principal-value]].

[F1] For $\varepsilon>0$ and $x\in\mathbb R$, $H_\varepsilon f(x)=\frac1\pi\int_{|t|>\varepsilon}\frac{f(x-t)}{t}\,dt$, absolutely convergent for $f\in L^p$, $1\le p<\infty$; $H_{\mathrm{pv}}f(x)$ is the $\varepsilon\downarrow0$ limit where it exists. [[def-truncated-hilbert-transform-and-principal-value]]

[F2] For Schwartz $g$ the principal value exists at every $x$ and equals $(W*g)(x)$ for the tempered convolution with $\operatorname{pv}\frac1{\pi x}$, and the $L^2$ extension $H$ has symbol $m(\xi)=-i\operatorname{sgn}(\xi)$ and satisfies $\|Hg\|_2=\|g\|_2$. [[lem-hilbert-transform-has-signum-fourier-multiplier]] [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]]

[F3] There is $\chi\in C_c^\infty(\mathbb R)$ with $0\le\chi\le1$, $\chi=1$ on $[-1,1]$ and $\chi=0$ off $(-2,2)$. [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]

[F4] For real $a\le b$ the interval $[a,b]$ is Lebesgue measurable with $\lambda_1([a,b])=b-a$; and if $0\le u\le v$ are measurable then $\int u\le\int v$. [[thm-lebesgue-measure-of-a-box-of-every-kind]] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[F5] A function $\varphi\in C_c^\infty(\mathbb R)$ with $\int\varphi=1$ generates the mollifier family $\varphi_\varepsilon(x)=\varepsilon^{-1}\varphi(x/\varepsilon)$, and $(\varphi_\varepsilon)_{\varepsilon>0}$ is an $L^1$ approximate identity. [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]] [[prop-mollifier-families-are-l-one-approximate-identities]]

[F6] If $1\le p<\infty$ and $g\in L^p(\mathbb R)$, then $\|g*\varphi_\varepsilon-g\|_p\to0$; in particular $g*\varphi_\varepsilon\to g$ in $L^p$. [[thm-l-one-approximate-identities-converge-in-l-p]]

[F7] For locally integrable $g$ the convolution $g*\varphi_\varepsilon$ is smooth; and $\operatorname{supp}(g*\varphi_\varepsilon)\subseteq\overline{\operatorname{supp}(g)+\operatorname{supp}(\varphi_\varepsilon)}$. [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]] [[thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset]]

[F8] On $(0,\infty)$: $\log$ is differentiable with $\log'=1/x$, $\log x=\int_1^xdt/t$, and $\log(x/y)=\log x-\log y$; $\log$ is strictly increasing. With the chain rule this gives $\frac{d}{dt}\log|t|=\frac1t$ for $t\in\mathbb R\setminus\{0\}$. [[thm-logarithm-derivative-and-integral]] [[thm-natural-logarithm-laws]] [[thm-chain-rule]]

[F9] Oriented additivity over subintervals and the second fundamental theorem: on a compact interval on which the integrand is continuous with the displayed antiderivative, the integral is the antiderivative difference, and $\int_u^vf+\int_v^wf=\int_u^wf$. [[thm-additivity-over-subintervals]] [[thm-ftc-second-part]]

[F10] Norm-convergent sequences in $L^2$ have subsequences converging almost everywhere to a representative of the limit. [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]

## Proof

**Proof technique:** direct.

1.1 Let $x\notin\{0,1\}$ and $\varepsilon>0$. Substituting $t=x-y$ in [F1] and using $\mathbf 1_{(0,1)}(x-t)=1$ exactly for $t\in(x-1,x)$ gives $H_\varepsilon f(x)=\frac1\pi\int_{(x-1,x)\cap\{|t|>\varepsilon\}}\frac{dt}{t}$, the integrand being continuous on each piece because $t=0$ is either excluded by the truncation or avoided. [F1]

1.2 Construction of approximants. Put $\varphi:=\chi/\int\chi$ with $\chi$ as in [F3]. The bounds $0\le\chi\le1$ and [F4] give $2=\lambda_1([-1,1])\le\int\chi\le\lambda_1([-2,2])=4$, so $0<\int\chi<\infty$ and $\varphi\in C_c^\infty(\mathbb R)$ is nonnegative with $\int\varphi=1$. Let $(\varphi_\varepsilon)$ be its mollifier family and put $f_j:=f*\varphi_{1/j}$ for $j\ge1$. By [F7] each $f_j$ is smooth, and since $\operatorname{supp}(f)\subseteq[0,1]$ and $\operatorname{supp}(\varphi_{1/j})\subseteq[-2/j,2/j]$, the support inclusion gives $\operatorname{supp}(f_j)\subseteq[-2/j,1+2/j]$. Also, if $\operatorname{dist}(y,\{0,1\})>2/j$, the bump samples only where $f$ is constant, so $f_j(y)=f(y)$; hence $g_j=f_j-f$ is supported within distance $2/j$ of the endpoints, and $f_j\in C_c^\infty(\mathbb R)$. Since $0\le\varphi$ and $\int\varphi_{1/j}=1$, moreover $0\le f_j\le1$ pointwise: $f_j(x)=\int f(x-y)\varphi_{1/j}(y)\,dy\in[0,1]$. [F3, F4, F5, F7]

2.1 Case $x>1$. For $0<\varepsilon<x-1$ one has $(x-1,x)\subseteq(\varepsilon,\infty)$, so $H_\varepsilon f(x)=\frac1\pi\int_{x-1}^{x}\frac{dt}{t}=\frac1\pi\bigl(\log x-\log(x-1)\bigr)=\frac1\pi\log\frac{x}{x-1}$ by [F8] and [F9]. [step 1.1, F8, F9]

2.2 Case $x<0$. For $0<\varepsilon<-x$ one has $(x-1,x)\subseteq(-\infty,-\varepsilon)$, so $H_\varepsilon f(x)=\frac1\pi\int_{x-1}^{x}\frac{dt}{t}=\frac1\pi\bigl(\log|x|-\log|x-1|\bigr)=\frac1\pi\log\frac{|x|}{|x-1|}$ by [F8], the antiderivative of $1/t$ on the negative axis being $\log|t|$. [step 1.1, F8, F9]

2.3 Case $0<x<1$. For $0<\varepsilon<\min(x,1-x)$ the set $(x-1,x)\cap\{|t|>\varepsilon\}$ is $(x-1,-\varepsilon)\cup(\varepsilon,x)$, so by [F9] $H_\varepsilon f(x)=\frac1\pi\bigl[\log|-\varepsilon|-\log|x-1|+\log x-\log\varepsilon\bigr]=\frac1\pi\bigl[\log x-\log(1-x)\bigr]=\frac1\pi\log\frac{x}{1-x}$, the two $\log\varepsilon$ terms cancelling exactly because $\log|-\varepsilon|=\log\varepsilon$; since $|x-1|=1-x>0$ this is $\frac1\pi\log\frac{|x|}{|x-1|}$. [step 1.1, F8, F9]

2.4 By [F6] applied with $p=1$ and $p=2$, the sequence of 1.2 satisfies $\|f_j-f\|_1\to0$ and $\|f_j-f\|_2\to0$; consequently $f_j\to f$ in $L^2$, and the $L^2$ boundedness of [F2] gives $\|Hf_j-Hf\|_2\to0$, where $Hf_j$ is both the $L^2$ transform of $f_j$ and the pointwise principal value of [F2]. [step 1.2, F2, F6]

2.5 Fix $x\notin\{0,1\}$ and put $\delta:=\frac12\operatorname{dist}(x,\{0,1\})>0$; let $c\in\{0,1\}$ be the constant value of $f$ on $(x-\delta,x+\delta)$ and set $r:=\delta/4$. The mollifier is supported in $[-2/j,2/j]$, so for $j>4/\delta$ its convolution samples only points of $(x-\delta,x+\delta)$ when the argument lies in $(x-\delta/2,x+\delta/2)$; hence 1.2 gives $f_j=c$ there. Thus for $0<\eta<r$ the part of $H_\eta f_j(x)$ over $\eta<|x-y|<r$ is the integral of $c/(\pi(x-y))$ over a symmetric annulus, hence is zero. The remaining integral is absolutely convergent because $f_j$ has compact support and $|x-y|\ge r$ there. Letting $\eta\downarrow0$ in [F2] gives $$Hf_j(x)=\frac1\pi\int_{|x-y|>r}\frac{f_j(y)}{x-y}\,dy.$$ [step 1.2, F2, algebra]

3.1 By 2.1, 2.2 and 2.3, for every $x\notin\{0,1\}$ and every $0<\varepsilon<r(x)$, where $r(x):=x-1$ for $x>1$, $r(x):=-x$ for $x<0$ and $r(x):=\min(x,1-x)$ for $0<x<1$, one has $H_\varepsilon f(x)=q(x)=\frac1\pi\log\frac{|x|}{|x-1|}$. Since $r(x)>0$, the symmetric principal value exists at every $x\notin\{0,1\}$ and equals $q(x)$; this proves assertion 1. [step 2.1, step 2.2, step 2.3]

3.2 The function $g_j=f_j-f$ is supported in $\{y:\operatorname{dist}(y,\{0,1\})\le2/j\}$ by 1.2, so for $j>4/\delta$ and $y\in\operatorname{supp}(g_j)$ one has $|x-y|\ge2\delta-\frac2j\ge\frac\delta2$; hence $\bigl|\frac1\pi\int_{\mathbb R}\frac{g_j(y)}{x-y}\,dy\bigr|\le\frac{\|g_j\|_1}{\pi}\cdot\frac2\delta\to0$ as $j\to\infty$ by 2.4. [step 1.2, step 2.4, step 2.5]

4.1 Since $f=c$ on $|x-y|<r$, the same symmetric cancellation shows that for every $0<\eta<r$, $H_\eta f(x)=\frac1\pi\int_{|x-y|>r}\frac{f(y)}{x-y}\,dy$. This outer integral is absolutely convergent because $f$ has compact support and its denominator is bounded away from zero. By 3.1 its value is $q(x)$. [step 3.1, algebra]

5.1 Combining 2.5, 3.2 and 4.1, $Hf_j(x)\to q(x)$ for every fixed $x\notin\{0,1\}$. [step 2.5, step 3.2, step 4.1]

6.1 By 2.4, $Hf_j\to Hf$ in $L^2$; by [F10] a subsequence converges almost everywhere to a representative of the class $Hf$, while 5.1 makes that same subsequence converge to $q$ at every point of the full-measure set $\mathbb R\setminus\{0,1\}$. Therefore $q=Hf$ almost everywhere: $q$ represents the $L^2$ multiplier extension of $f$, which is assertion 2. [step 2.4, step 5.1, F10] ∎
