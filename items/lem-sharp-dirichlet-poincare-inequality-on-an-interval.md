---
id: "lem-sharp-dirichlet-poincare-inequality-on-an-interval"
kind: "lemma"
title: "The sharp Dirichlet Poincare inequality on an interval"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 0
deps:
  - "cor-pi-is-the-first-positive-sine-zero"
  - "cor-sine-and-cosine-are-one-lipschitz"
  - "cor-trigonometric-parity-and-pythagorean-identity"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-the-standard-smooth-step-function"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-classical-derivatives-are-weak-derivatives"
  - "lem-integral-elementary-bounds"
  - "thm-additivity-over-subintervals"
  - "thm-algebra-of-derivatives"
  - "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral"
  - "thm-chain-rule"
  - "thm-complex-holder-minkowski-and-the-quotient-norm"
  - "thm-continuous-implies-integrable"
  - "thm-extreme-value-r"
  - "thm-ftc-second-part"
  - "thm-integration-by-parts"
  - "thm-linearity-of-the-integral"
  - "thm-sine-and-cosine-addition-formulas"
  - "thm-sine-and-cosine-derivatives"
proof_strategy: "direct"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 8.6, Theorem 8.22 and the example on printed pp. 231–232: e_n=sqrt(2) sin(n pi x), lambda_n=n^2 pi^2. The interval statement is extracted and scaled; the independent proof here replaces the spectral decomposition by a ground-state identity."
---

## Statement

Assume Countable Choice. Let $L>0$, $I=(0,L)$ and $\mathbb K\in\{\mathbb R,\mathbb C\}$. Then every $u\in H^1_0(I;\mathbb K)$ satisfies
$$\|u\|_{L^2(I)}\le\frac L\pi\|u'\|_{L^2(I)}.$$
The constant $L/\pi$ is optimal: $\phi(x)=\sin(\pi x/L)$ belongs to $H^1_0(I)$, is nonzero, and attains equality. Moreover
$$\int_I\phi'\overline{v'}\,dx=(\pi/L)^2\int_I\phi\overline v\,dx\qquad(v\in H^1_0(I)).$$
This is a direct interval inequality and weak identity; no spectral decomposition is assumed.

## Facts & Assumptions

**Given:** Reals $L>0$ and $k:=\pi/L$, the interval $I=(0,L)$, a field $\mathbb K\in\{\mathbb R,\mathbb C\}$, and the function $\phi(x):=\sin(kx)$.

[F1] $H^1_0(I;\mathbb K)=W_0^{1,2}(I;\mathbb K)$ is the closure of $C_c^\infty(I;\mathbb K)$ in the $W^{1,2}$ norm, which for functions of one variable is $\|v\|_{H^1}^2=\|v\|_{L^2(I)}^2+\|v'\|_{L^2(I)}^2$; complex test functions are defined by requiring both components to be real test functions, and the $L^2$ theory of complex classes is the componentwise one ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F2] A classical smooth derivative on $I$ is the weak derivative of the class ([[lem-classical-derivatives-are-weak-derivatives]]). On a closed bounded interval a bounded Riemann integrable function is Lebesgue measurable and Lebesgue integrable with the same integral, a continuous function on $[a,b]$ is Riemann integrable, the Riemann integral is linear and additive over subintervals, and $m\le h\le M$ on $[a,b]$ gives $m(b-a)\le\int_a^bh\le M(b-a)$ ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]], [[thm-continuous-implies-integrable]], [[thm-linearity-of-the-integral]], [[thm-additivity-over-subintervals]], [[lem-integral-elementary-bounds]]).

[F3] Integration by parts and the second fundamental theorem on $[a,b]$ for differentiable functions with integrable derivatives ([[thm-integration-by-parts]], [[thm-ftc-second-part]]).

[F4] Trigonometric facts: $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$, $\sin0=0$; $\sin\pi=0$ and $\sin x>0$ for $0<x<\pi$; $\sin^2x+\cos^2x=1$, $|\sin x|,|\cos x|\le1$; $|\sin u-\sin v|\le|u-v|$; and the addition formulas, in particular $\cos2x=\cos^2x-\sin^2x$ and $\sin2\pi=2\sin\pi\cos\pi$ ([[thm-sine-and-cosine-derivatives]], [[cor-pi-is-the-first-positive-sine-zero]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[cor-sine-and-cosine-are-one-lipschitz]], [[thm-sine-and-cosine-addition-formulas]]).

[F5] Chain rule and the algebra of derivatives (sums, products, quotients away from zeros) for real functions ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F6] The standard smooth step $\sigma$ is smooth with $\sigma(t)=0$ for $t\le0$ and $\sigma(t)=1$ for $t\ge1$; hence $\sigma'\equiv0$ outside $(0,1)$ and, being continuous on the compact interval $[0,1]$, the derivative satisfies $C_\sigma:=\sup_{\mathbb R}|\sigma'|<\infty$ ([[def-the-standard-smooth-step-function]], [[thm-extreme-value-r]]).

[F7] H\"older's inequality and the quotient norms: for complex $L^2$ classes, $\bigl|\int f\overline g\bigr|\le\|f\|_2\|g\|_2$, and the quotient norm obeys the triangle inequality, hence $|\|f\|_2-\|g\|_2|\le\|f-g\|_2$ ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F8] Countable Choice is assumed ([[def-countable-choice]]).







## Proof

1.1 Properties of $\phi$: differentiating $\phi=\sin\circ(k\,\mathrm{id})$ gives $\phi'(x)=k\cos(kx)$ and $\phi''(x)=-k^2\sin(kx)=-k^2\phi(x)$ by the chain rule; $|\phi'|\le k$ because $|\cos|\le1$; $\phi>0$ on $I$ because $0<kx<\pi$ there; and the one-Lipschitz property of sine at the points $0$, $kx$ and $\pi$ gives $|\phi(x)|=|\sin(kx)-\sin0|\le kx$ and $|\phi(x)|=|\sin(kx)-\sin\pi|\le k(L-x)$ for $x\in I$. [F4, F5]

1.2 $\phi$ is a nonzero class: $\sin^2t=\frac12-\frac12\cos2t$ and $\cos2t=1-2\sin^2t$ from the addition formulas and the Pythagorean identity give $\phi^2=\frac12-\frac12\cos(2kx)$; the antiderivative $x\mapsto\frac{\sin(2kx)}{2k}$ has derivative $\cos(2kx)$ by the chain rule and vanishes at $x=0$ and at $x=L$, where $\sin(2\pi)=2\sin\pi\cos\pi=0$. So $\int_0^L\phi^2=\frac{L}{2}-\frac12\int_0^L\cos(2kx)\,dx=\frac{L}{2}>0$ by linearity, the fundamental theorem and elementary bounds; in particular the $L^2$ class of $\phi$ is not zero. [F2, F3, F4, F5, algebra]

2.1 Real smooth case: let $a\in C_c^\infty(I;\mathbb R)$ and put $w:=a/\phi$, a real $C_c^\infty$ function, since $\operatorname{supp}a$ is a compact subset of $I$ on which $\phi>0$. Then $a=\phi w$, so $a'=\phi'w+\phi w'$ and $(|a'|^2-k^2|a|^2)=\phi^2|w'|^2+(\phi\phi'w^2)'$: indeed $|a'|^2=\phi'^2w^2+2\phi\phi'ww'+\phi^2w'^2$ while $(\phi\phi'w^2)'=(\phi'^2+\phi\phi'')w^2+2\phi\phi'ww'=(\phi'^2-k^2\phi^2)w^2+2\phi\phi'ww'$ by step 1.1. Choose endpoints $r<s$ in $I$ with $\operatorname{supp}a\subseteq(r,s)$; then $\phi\phi'w^2$ vanishes at $r$ and $s$, so the fundamental theorem gives $\int_r^s(\phi\phi'w^2)'=0$ and hence $\int_I(|a'|^2-k^2|a|^2)=\int_I\phi^2|w'|^2\ge0$, all integrals agreeing in the Riemann and Lebesgue senses. [F2, F3, F5, step 1.1, algebra]

2.2 $\phi\in H^1_0(I;\mathbb K)$: for integers $m\ge4/L$ put $\eta_m(x):=\sigma(mx-1)\sigma(m(L-x)-1)$ and $\phi_m:=\eta_m\phi$. Each factor is smooth, so $\eta_m\in C_c^\infty(I;\mathbb R)$ with its support contained in $[1/m,L-1/m]\subset I$, hence $\phi_m\in C_c^\infty(I;\mathbb K)$. By the chain and product rules, $\eta_m'=\bigl(m\sigma'(mx-1)\bigr)\sigma(m(L-x)-1)-\sigma(mx-1)\bigl(m\sigma'(m(L-x)-1)\bigr)$, so $|\eta_m'|\le2mC_\sigma$, while $\eta_m=1$ on $[2/m,L-2/m]$. Hence $\psi_m:=\phi_m-\phi$ is supported in $[0,2/m]\cup[L-2/m,L]$, where $|\psi_m|=|(\eta_m-1)\phi|\le|\phi|\le2k/m$ by step 1.1, and $|\psi_m'|=|\eta_m'\phi+(\eta_m-1)\phi'|\le2mC_\sigma\cdot2k/m+k=4kC_\sigma+k$ there. So $\|\psi_m\|_{L^2(I)}^2\le(2k/m)^2L$ and, splitting the integral over the two strips, $\|\psi_m'\|_{L^2(I)}^2\le(4kC_\sigma+k)^2\cdot4/m$, both tending to $0$. Thus $\|\phi_m-\phi\|_{H^1}\to0$ with $\phi_m\in C_c^\infty(I;\mathbb K)$, and $\phi$ lies in the closure $H^1_0(I;\mathbb K)$. [F1, F2, F6, F5, step 1.1, algebra]

2.3 Weak identity on smooth tests: let $v\in C_c^\infty(I;\mathbb K)$ and choose $a<b$ in $I$ with $\operatorname{supp}v\subseteq(a,b)$. Applying integration by parts to the real and imaginary parts of $v$ with the real function $\phi'$ gives $\int_a^b\phi'\overline{v'}=\bigl[\phi'\overline v\bigr]_a^b-\int_a^b\phi''\overline v=k^2\int_a^b\phi\overline v$, since $\phi'v$ vanishes at $a$ and $b$ and $\phi''=-k^2\phi$ by step 1.1. [F2, F3, step 1.1]

3.1 Complex smooth case: let $u\in C_c^\infty(I;\mathbb K)$ and write $u=a+ib$ with real $a,b\in C_c^\infty(I)$ (and $b=0$ when $\mathbb K=\mathbb R$). Differentiation is componentwise, so $|u'|^2=|a'|^2+|b'|^2$ and $|u|^2=a^2+b^2$; applying step 2.1 to $a$ and to $b$ and adding gives $\int_I(|u'|^2-k^2|u|^2)=\int_I\phi^2\bigl(|w_a'|^2+|w_b'|^2\bigr)\ge0$ with $w_a=a/\phi$, $w_b=b/\phi$. Therefore every $u\in C_c^\infty(I;\mathbb K)$ satisfies $\|u\|_{L^2(I)}\le\frac L\pi\|u'\|_{L^2(I)}$, since $k=\pi/L$. [F1, step 2.1, algebra]

3.2 Weak identity on $H^1_0$: define $\Lambda(v):=\int_I\phi'\overline{v'}-k^2\int_I\phi\overline v$ for $v\in H^1_0(I;\mathbb K)$. By H\"older, $|\Lambda(v)|\le\bigl(\|\phi'\|_2+k^2\|\phi\|_2\bigr)\|v\|_{H^1}$, so $\Lambda$ is bounded, and it vanishes on $C_c^\infty(I;\mathbb K)$ by step 2.3. For arbitrary $v\in H^1_0$ take $v_n\in C_c^\infty(I;\mathbb K)$ with $\|v_n-v\|_{H^1}\to0$; then $|\Lambda(v)|=|\Lambda(v)-\Lambda(v_n)|\le C\|v-v_n\|_{H^1}\to0$, so $\Lambda(v)=0$. Hence $\int_I\phi'\overline{v'}=k^2\int_I\phi\overline v$ for every $v\in H^1_0(I;\mathbb K)$. [F1, F7, step 2.3]

4.1 Approximation: let $u\in H^1_0(I;\mathbb K)$. By definition of the closure there are $u_n\in C_c^\infty(I;\mathbb K)$ with $\|u_n-u\|_{H^1}\to0$, so $\|u_n-u\|_{L^2}\to0$ and $\|u_n'-u'\|_{L^2}\to0$. Step 3.1 gives $\|u_n\|_2\le\frac L\pi\|u_n'\|_2$ for every $n$, and the reverse triangle inequality turns both sides into convergent sequences with limits $\|u\|_2$ and $\|u'\|_2$; passing to the limit gives $\|u\|_{L^2(I)}\le\frac L\pi\|u'\|_{L^2(I)}$. [F1, F7, F8, step 3.1]

5.1 Optimality: step 2.2 puts $\phi$ in $H^1_0(I;\mathbb K)$ and step 1.2 makes it nonzero; taking $v=\phi$ in the identity of step 3.2 gives $\|\phi'\|_{L^2}^2=k^2\|\phi\|_{L^2}^2$, that is $\|\phi\|_{L^2}=\frac L\pi\|\phi'\|_{L^2}$: the constant $L/\pi$ is attained, hence optimal. [step 2.2, step 1.2, step 3.2, algebra] ∎
