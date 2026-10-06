---
id: thm-inhomogeneous-heat-cauchy-formula
kind: theorem
title: The inhomogeneous heat Cauchy formula
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps:
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-dominated-convergence
  - def-countable-choice
  - def-duhamel-heat-potential
  - thm-duhamel-principle-for-the-whole-space-heat-equation
  - thm-whole-space-heat-uniqueness-under-gaussian-growth
  - def-heat-evolution-of-initial-data
  - thm-heat-cauchy-solution-for-lp-data
  - thm-heat-cauchy-solution-for-bounded-continuous-data
  - thm-bochner-dominated-convergence
  - lem-bochner-integral-norm-inequality
  - cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions
  - lem-heat-kernel-semigroup-identity
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "§1.1, printed p. 7, Theorem 1.2 and (1.1.20) (Duhamel's formula for bounded continuous forcing with bounded continuous first and second spatial derivatives; the proof is assigned as an exercise). The Hölder and Bochner arguments used here are local."
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Chapter 10, §10.1 (uniqueness and representation of the inhomogeneous solution)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.2, printed pp. 152–153, formula (6.48) and the representation (6.50)"
---

## Statement

Assume Countable Choice. Let $n\ge1$, $T>0$, $1\le p<\infty$,
$u_0\in L^p(\mathbb R^n)$ and $f\in C([0,T];L^p(\mathbb R^n))$. Define
$$u(t):=H_tu_0+Df(t)=H_tu_0+\int_0^tH_{t-s}f(s)\,ds\qquad(0\le t\le T).$$
Then $u\in C([0,T];L^p(\mathbb R^n))$, $u(0)=u_0$, and $u$ satisfies the forced
relation
$$u(t)=H_{t-s}u(s)+\int_s^tH_{t-\tau}f(\tau)\,d\tau\qquad(0<s<t\le T);$$
conversely every $w\in C([0,T];L^p(\mathbb R^n))$ with $w(0)=u_0$ satisfying this
relation equals $u$. If $u_0$ is bounded and uniformly continuous and $f$ is
bounded and jointly continuous and uniformly spatially Hölder on $[0,T]$ as in
the Duhamel theorem, then $u$ is a classical solution of $u_t-\Delta u=f$ with
$u(\cdot,0)=u_0$, and it is the unique classical solution in the Gaussian
growth class. For bounded uniformly continuous $u_0$ and bounded jointly
uniformly continuous $f$ without the Hölder assumption, the same scalar formula
remains a bounded continuous mild solution with the forced semigroup relation
and initial trace $u_0$; the $C^{1,2}$ upgrade is not claimed for that general
forcing class.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $T>0$, $1\le p<\infty$, $u_0\in L^p(\mathbb R^n)$ and $f\in C([0,T];L^p(\mathbb R^n))$; for the classical clause a bounded uniformly continuous $u_0$ and a bounded jointly continuous uniformly spatially Hölder $f$; for the last clause a bounded uniformly continuous $u_0$ and a bounded jointly uniformly continuous $f$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Heat flow: $H$ is a contraction semigroup on $L^p$, $H_{t+s}=H_tH_s$, $\|H_tg\|_p\le\|g\|_p$, and for $1\le p<\infty$ it is strongly continuous ([[def-heat-evolution-of-initial-data]], [[thm-heat-cauchy-solution-for-lp-data]]).

[F2] Duhamel principle: in the mild setting $Df(t)=\int_0^tH_{t-s}f(s)\,ds$ lies in $C([0,T];L^p)$, $Df(0)=0$, satisfies $Df(t)=H_{t-s}Df(s)+\int_s^tH_{t-\tau}f(\tau)\,d\tau$ and is the unique such zero-data curve; in the classical setting, if $f$ is bounded, jointly continuous and uniformly spatially Hölder, its scalar potential $u^*(t,x)=\int_0^t\int\Gamma(x-y,t-s)f(y,s)\,dy\,ds$ is $C^{1,2}$ with $u^*_t-\Delta u^*=f$ and $u^*(0,\cdot)=0$, and it is the unique classical solution with zero initial data in every Gaussian growth class ([[thm-duhamel-principle-for-the-whole-space-heat-equation]]).

[F3] Classical homogeneous flow: for bounded uniformly continuous $u_0$, the function $(t,x)\mapsto\int\Gamma(x-y,t)u_0(y)\,dy$ for $t>0$ and $u_0$ at $t=0$ is $C^\infty$ in positive time, solves the homogeneous heat equation, is bounded by $\|u_0\|_\infty$ and converges locally uniformly to $u_0$ at $t=0$ ([[thm-heat-cauchy-solution-for-bounded-continuous-data]]); a $C^{1,2}$ solution of the homogeneous equation with zero initial data and Gaussian growth vanishes identically ([[thm-whole-space-heat-uniqueness-under-gaussian-growth]]).

[F4] Bochner integration: for $L^p$-valued integrable curves the Bochner integral is additive over the splitting of the interval and obeys the norm estimate $\|\int f\,d\mu\|\le\int\|f\|\,d\mu$ ([[lem-bochner-integral-norm-inequality]], [[thm-bochner-dominated-convergence]]).

[F5] For the last clause: the kernels form an $L^1$ approximate identity, so $\sup_{x\in K}|\int\Gamma(x-y,\sigma)g(y)\,dy-g(x)|\to0$ as $\sigma\downarrow0$ for every bounded continuous $g$ and compact $K$ ([[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]], [[lem-heat-kernel-normalisation-scaling-and-derivatives]]); the kernels satisfy the semigroup law $\Gamma_t*\Gamma_s=\Gamma_{t+s}$ and Fubini-Tonelli applies to the nonnegative iterated integrals of the scalar potentials ([[lem-heat-kernel-semigroup-identity]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Proof

**Given:** Countable Choice, $1\le p<\infty$, $u_0\in L^p(\mathbb R^n)$, $f\in C([0,T];L^p(\mathbb R^n))$, and the data of the classical and bounded-continuous clauses.

1.1 In the mild setting $u=H_\cdot u_0+Df\in C([0,T];L^p(\mathbb R^n))$ and $u(0)=u_0$: the curve $t\mapsto H_tu_0$ is continuous by the strong continuity and semigroup law of [F1], the curve $Df$ is continuous with $Df(0)=0$ by [F2], and $H_0u_0=u_0$; a sum of continuous curves is continuous. [A1, F1, F2, given]

1.2 In the bounded-continuous setting the same scalar formula is well defined, bounded and continuous with initial trace $u_0$. Boundedness: $|u(t,x)|\le\|u_0\|_\infty+t\|f\|_\infty$. Continuity and initial trace: the homogeneous term is continuous in $(t,x)$ for $t>0$ and converges to $u_0$ locally uniformly as $t\downarrow0$ by [F3], while the potential can be written $\int_0^T\mathbf1_{\{\tau<t\}}(\Gamma_\tau*f(\cdot,t-\tau))(x)d\tau$. For $(x_j,t_j)\to(x,t)$, joint uniform continuity of $f$ gives convergence of the integrands at each fixed $\tau\ne t$; they are bounded by $\|f\|_\infty$, so [[thm-dominated-convergence]] gives continuity. Its bound $t\|f\|_\infty$ also gives uniform vanishing at zero; finally the scalar forced relation $u(t,x)=\int\Gamma(x-y,t-s)u(s,y)\,dy+\int_s^t\int\Gamma(x-y,t-\tau)f(y,\tau)\,dy\,d\tau$ for $0<s<t\le T$ follows from the semigroup law and Fubini-Tonelli applied to the real and imaginary positive and negative parts of the absolutely integrable iterated integrands (bounded by kernel masses times the data bounds), using [[thm-tonelli-and-fubini-for-completed-product-measures]]: the homogeneous term convolves to $\Gamma_t*u_0=\Gamma_{t-s}*(\Gamma_s*u_0)$ and the double integral splits at $s$. No differentiation of $f$ is used, so no $C^{1,2}$ claim is made here. [F3, F5, given]

2.1 In the classical setting, $u$ is a classical solution with the stated data and is unique in the Gaussian growth class. Indeed $H_tu_0$ is, by [F3], $C^\infty$ in positive time with $\partial_t(H_tu_0)=\Delta(H_tu_0)$ and initial data $u_0$, while the scalar potential $u^*$ of [F2] is $C^{1,2}$ with $u^*_t-\Delta u^*=f$ and zero initial data; hence the scalar formula $u=H_\cdot u_0+u^*$ is $C^{1,2}$ on $\mathbb R^n\times(0,T]$ with $u_t-\Delta u=f$ and $u(\cdot,0)=u_0$. If $\tilde u$ is another classical solution with the same data and $|\tilde u|\le Ce^{a|x|^2}$, then $w:=\tilde u-u$ is a $C^{1,2}$ solution of the homogeneous equation with zero initial data and Gaussian growth (the sum of the two growth bounds), so [F3] forces $w\equiv0$ and $\tilde u=u$. [step 1.1, F2, F3, given]

2.2 The mild curve of step 1.1 satisfies the forced relation: for $0<s<t\le T$, subtracting $H_{t-s}u(s)$ from $u(t)$ and using the semigroup law of [F1] together with the relation for $Df$ in [F2] and the additivity of the Bochner integral [F4] gives $u(t)-H_{t-s}u(s)=(H_tu_0-H_{t-s}H_su_0)+(Df(t)-H_{t-s}Df(s))=\int_s^tH_{t-\tau}f(\tau)\,d\tau$. [step 1.1, F1, F2, F4, given]



3.1 Mild uniqueness: if $w\in C([0,T];L^p(\mathbb R^n))$ with $w(0)=u_0$ satisfies the relation, then $v:=w-u$ is continuous with $v(0)=0$ and satisfies $v(t)=H_{t-s}v(s)$ for all $0<s<t\le T$; the contraction bound of [F1] gives $\|v(t)\|_p\le\|v(s)\|_p$ for every $s\in(0,t)$, and letting $s\downarrow0$ with continuity of $v$ at $0$ gives $\|v(t)\|_p=0$. Hence $w=u$, and all clauses of the statement are proved; the only choices made are finitely many thresholds, and Countable Choice is inherited from the cited suppliers. [step 1.1, step 2.2, F1, F4, given] ∎
