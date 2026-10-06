---
id: lem-analytic-duhamel-cancellation-removes-the-generator-singularity
kind: lemma
title: Analytic Duhamel cancellation removes the generator singularity
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [def-sectorial-operator-with-the-semigroup-sign-convention, thm-analytic-semigroup-smoothing-estimates, lem-semigroup-generator-commutes-with-orbits-on-its-domain, lem-integrated-semigroup-orbits-belong-to-the-generator-domain, lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing, def-classical-strong-and-mild-abstract-cauchy-solutions, def-infinitesimal-generator-of-a-c-zero-semigroup, def-bounded-linear-operator, def-operator-norm, def-bochner-integrable-function, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, lem-linearity-of-the-bochner-integral, def-dependent-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, the cancellation step in the proof of Theorem 2.31, printed pp. 70-71'
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: 'Chapter 11 Section 11.3, the strong-solution proof by Duhamel cancellation, printed pp. 258-261'
verification:
  precheck: pass
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]) for the cited integral and semigroup suppliers.

Let $A$ be sectorial of angle $\delta\in(0,\pi/2]$ in the $e^{tA}$ convention
([[def-sectorial-operator-with-the-semigroup-sign-convention]]) and let
$(T(t))_{t\ge0}$ be the generated analytic semigroup with $\|T(t)\|\le c_0$ and
$\|AT(t)\|\le c_1t^{-1}$ for $0<t\le b$
([[thm-analytic-semigroup-smoothing-estimates]]). Let
$f\in C^\alpha([0,b],X)$ with Hölder constant $[f]_\alpha<\infty$, where
$\alpha\in(0,1)$. For $0<t\le b$ set
$$v(t):=\int_0^tT(t-s)f(s)\,ds,\qquad v_1(t):=\int_0^tT(t-s)\bigl(f(s)-f(t)\bigr)\,ds,\qquad v_2(t):=\int_0^tT(\tau)f(t)\,d\tau,$$
so that $v=v_1+v_2$. Then:

1. $v_1(t)\in D(A)$ and
   $Av_1(t)=\int_0^tAT(t-s)(f(s)-f(t))\,ds$ with
   $\|Av_1(t)\|\le\frac{c_1}{\alpha}[f]_\alpha t^\alpha$;
2. $v_2(t)\in D(A)$, $Av_2(t)=(T(t)-I)f(t)$ and
   $\|Av_2(t)\|\le(c_0+1)\|f\|_\infty$;
3. $v\in C([0,b],D(A))$ in the graph norm and $Av\in C([0,b],X)$ when
   $v(0):=0$, with $Av(0)=0$.

Consequently, for $x\in D(A)$ the function $u(t):=T(t)x+v(t)$ satisfies
$u(t)\in D(A)$ and $Au(t)=AT(t)x+Av(t)\to Ax$ as $t\downarrow0$. No choice
principle beyond Dependent Choice is used.

## Facts & Assumptions

**Given:** A sectorial operator $A$ of angle $\delta$ with its analytic semigroup $T$, constants $\|T(t)\|\le c_0$, $\|AT(t)\|\le c_1/t$ on $(0,b]$, a Hölder-continuous $f\in C^\alpha([0,b],X)$ with constant $[f]_\alpha$, an exponent $\alpha\in(0,1)$, and the functions $v,v_1,v_2$ above; $f$ is continuous and hence Bochner integrable on $[0,b]$, and $C^\alpha$ embeds in $C([0,b],X)$.

[L1] $T(t)X\subseteq D(A)$ for $t>0$, $AT(t)\in\mathcal B(X)$ with $\|AT(t)\|\le c_1/t$, and $\|T(t)\|\le c_0$ ([[thm-analytic-semigroup-smoothing-estimates]], [[def-operator-norm]]).

[L2] For every $y\in X$ and $t>0$ one has $J_ty:=\int_0^tT(\tau)y\,d\tau\in D(A)$ with $AJ_ty=T(t)y-y$; and for $y\in D(A)$ one has $AT(t)y=T(t)Ay$ ([[lem-integrated-semigroup-orbits-belong-to-the-generator-domain]], [[lem-semigroup-generator-commutes-with-orbits-on-its-domain]]).

[L3] The Bochner integral obeys $\|\int_Eg\|\le\int_E\|g\|$ and the Duhamel integral $t\mapsto\int_0^tT(t-s)f(s)ds$ is continuous on $[0,b]$ for continuous $f$ ([[lem-bochner-integral-norm-inequality]], [[lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing]]).

## Proof

**Proof technique:** direct.

1.1 Truncated first term. Fix $0<t\le b$ and $0<\varepsilon<t$, and set $v_{1,\varepsilon}(t):=\int_0^{t-\varepsilon}T(t-s)(f(s)-f(t))\,ds$. For $s\le t-\varepsilon$ the semigroup law gives $T(t-s)=T(\varepsilon)T(t-s-\varepsilon)$, so the integrand lies in $D(A)$ and, since $AT(\varepsilon)$ is bounded by [L1], Riemann sums and the norm inequality [L3] give $v_{1,\varepsilon}(t)\in D(A)$ and $Av_{1,\varepsilon}(t)=\int_0^{t-\varepsilon}AT(t-s)(f(s)-f(t))\,ds$. [L1, L2, L3, given, algebra]

1.2 The constant-endpoint term. Since $f(t)$ does not depend on the integration variable, $v_2(t)=\int_0^tT(\tau)f(t)\,d\tau=J_tf(t)$, so [L2] gives $v_2(t)\in D(A)$ and $Av_2(t)=T(t)f(t)-f(t)$, whence $\|Av_2(t)\|\le(c_0+1)\|f\|_\infty$. [L2, L3, given, algebra]

2.1 The truncated first term is Cauchy in the graph norm. For $0<\varepsilon<\eta<t$ the difference of the truncated $A$-images is the integral over $[t-\eta,t-\varepsilon]$ of $AT(t-s)(f(s)-f(t))$, whose norm is at most $c_1[f]_\alpha(t-s)^{\alpha-1}$ by [L1] and Hölder continuity of $f$; integrating gives $\|Av_{1,\varepsilon}(t)-Av_{1,\eta}(t)\|\le\frac{c_1}{\alpha}[f]_\alpha\bigl(\eta^\alpha-\varepsilon^\alpha\bigr)\to0$ as $\varepsilon,\eta\downarrow0$. Likewise $\|v_{1,\varepsilon}(t)-v_{1,\eta}(t)\|\le c_0[f]_\alpha\int_{t-\eta}^{t-\varepsilon}(t-s)^\alpha ds\to0$, so both $v_{1,\varepsilon}(t)$ and $Av_{1,\varepsilon}(t)$ converge; since $A$ is closed, $v_1(t)\in D(A)$ and $Av_1(t)=\int_0^tAT(t-s)(f(s)-f(t))\,ds$, with $\|Av_1(t)\|\le\frac{c_1}{\alpha}[f]_\alpha t^\alpha$. [step 1.1, L1, L3, given, algebra]

3.1 Continuity in the graph norm. The bounds just obtained give $\|v_1(t)\|\le c_0[f]_\alpha t^{1+\alpha}/(1+\alpha)$ and $\|Av_1(t)\|\le\frac{c_1}{\alpha}[f]_\alpha t^\alpha$, so $v_1$ and $Av_1$ extend continuously to $t=0$ with value $0$; on every $[a,b]$ with $a>0$, the truncated expressions are continuous for $0<\varepsilon<a$, and their tails are bounded uniformly in $t$ by $c_0[f]_\alpha\varepsilon^{1+\alpha}/(1+\alpha)$ and $c_1[f]_\alpha\varepsilon^\alpha/\alpha$, respectively. They therefore converge uniformly on $[a,b]$, proving continuity of $v_1$ and $Av_1$ at positive times. For the constant-endpoint term, $\|Av_2(t)\|\le(c_0+1)\|f\|_\infty$ and $\|Av_2(t)-Av_2(0)\|\le(c_0+1)\|f(t)-f(0)\|+\|(T(t)-I)f(0)\|\to0$ by continuity of $f$ and strong continuity of $T$; finally $v$ is continuous on $[0,b]$ by [L3]. Hence $v\in C([0,b],D(A))$ in the graph norm and $Av\in C([0,b],X)$ with $Av(0)=0$. [step 1.2, step 2.1, L2, L3, given, algebra]

4.1 The final assertion. For $x\in D(A)$, [L2] gives $AT(t)x=T(t)Ax\to Ax$ as $t\downarrow0$ by strong continuity, so $Au(t)=AT(t)x+Av(t)\to Ax+0=Ax$; the decomposition $u=T(\cdot)x+v$ therefore removes the singularity of $AT(t)x$ at the endpoint, and no choice principle beyond Dependent Choice was used. [step 1.2, step 3.1, L2, given, algebra] ∎ 
