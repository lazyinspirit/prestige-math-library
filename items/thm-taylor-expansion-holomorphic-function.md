---
id: thm-taylor-expansion-holomorphic-function
kind: theorem
title: "A holomorphic function equals its Taylor series throughout the largest centred disc in its domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-taylor-series-holomorphic-function, thm-cauchy-integral-formula-circle, thm-cauchy-integral-formula-higher-derivatives, thm-uniform-limit-interchanges-complex-line-integrals, lem-geometric-sequence-null, lem-complex-conjugation-and-modulus-laws, def-metric-bounded-diameter, def-extended-reals, cor-complex-differentiability-implies-continuity, thm-heine-borel-rn, thm-extreme-value-metric]
justified_by: []
aliases: []
landmark: true
short: "holomorphic $\\Rightarrow$ Taylor expansion"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 4.4"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Theorem 2.2.3"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Steven G. Krantz, A Guide to Complex Variables, §3.1.6"
      url: "https://www.math.wustl.edu/~sk/books/guide.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $f:\Omega\to\mathbb C$ be holomorphic, and let $a\in\Omega$. Put

$$\rho_a:=\begin{cases}d(a,\mathbb C\setminus\Omega),&\mathbb C\setminus\Omega\ne\varnothing,\\+\infty,&\Omega=\mathbb C.\end{cases}$$

Then $\rho_a>0$, the disc $D(a,\rho_a)$ is the largest centred open disc contained in $\Omega$, with $D(a,+\infty)=\mathbb C$, and

$$f(z)=\sum_{n\ge0}\frac{f^{(n)}(a)}{n!}(z-a)^n\qquad(|z-a|<\rho_a).$$

Every holomorphic function equals its Taylor series throughout the largest centred open disc contained in its domain.

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb C$, a holomorphic function $f:\Omega\to\mathbb C$, and a point $a\in\Omega$; the Taylor series convention of [[def-taylor-series-holomorphic-function]] and the whole-plane element $+\infty$ of [[def-extended-reals]].

[L1] For a point $x$ and a nonempty subset $A$ of a metric space, the distance $d(x,A)$ is the greatest lower bound of $\{d(x,y):y\in A\}$ ([[def-metric-bounded-diameter]]).

[L2] If $f$ is holomorphic on $D(a,R)$, $0<r<R$, $|z-a|<r$, and $\gamma(t)=a+r\exp(it)$, then $f(z)=(2\pi i)^{-1}\int_\gamma f(\zeta)/(\zeta-z)\,d\zeta$ ([[thm-cauchy-integral-formula-circle]]).

[L3] Complex modulus is multiplicative, vanishes exactly at zero, and satisfies $|u+v|\le|u|+|v|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L4] If a real $q$ satisfies $|q|<1$, then $q^k\to0$ ([[lem-geometric-sequence-null]]).

[L5] Uniform convergence of continuous integrands on the trace of a fixed rectifiable contour permits passage of the limit through the complex line integral ([[thm-uniform-limit-interchanges-complex-line-integrals]]).

[L6] For every natural $n$, Cauchy's higher-derivative formula gives $f^{(n)}(a)=n!(2\pi i)^{-1}\int_\gamma f(\zeta)/(\zeta-a)^{n+1}\,d\zeta$ on a compactly contained circle ([[thm-cauchy-integral-formula-higher-derivatives]]).

[L7] A holomorphic function is continuous ([[cor-complex-differentiability-implies-continuity]]).

[L8] Closed bounded subsets of the Euclidean plane, and in particular circles of positive radius, are compact ([[thm-heine-borel-rn]]).

[L9] A continuous real-valued function on a nonempty compact metric space is bounded and attains a maximum ([[thm-extreme-value-metric]]).

## Proof

**Proof technique:** direct.

1.1 If $\Omega\ne\mathbb C$, openness gives $s>0$ with $D(a,s)\subseteq\Omega$, so every $w\in\mathbb C\setminus\Omega$ has $|w-a|\ge s$ and [L1] gives $\rho_a\ge s>0$; moreover $|z-a|<\rho_a$ forces $z\in\Omega$, while every $R>\rho_a$ contains a point of the complement by the defining greatest-lower-bound property. If $\Omega=\mathbb C$, the stated $+\infty$ convention gives the same largest-disc conclusion. [given, L1]

2.1 Fix $z$ with $|z-a|<\rho_a$, and choose $r=(|z-a|+\rho_a)/2$ when $\rho_a$ is finite and $r=|z-a|+1$ otherwise; then $|z-a|<r<\rho_a$, the radius-$r$ circle and its interior lie in $\Omega$ by step 1.1, and [L2] gives $f(z)=(2\pi i)^{-1}\int_\gamma f(\zeta)/(\zeta-z)\,d\zeta$. [step 1.1, L2, choose]

3.1 On $|\zeta-a|=r$, the finite geometric identity gives $1/(\zeta-z)=\sum_{n=0}^{N}(z-a)^n/(\zeta-a)^{n+1}+E_N(\zeta)$ with $|E_N(\zeta)|\le q^{N+1}/(r-|z-a|)$ for $q=|z-a|/r<1$; [L7], [L8], and [L9] bound $|f|$ on the circle, so [L3] and [L4] make $fE_N\to0$ uniformly there, including the case $z=a$ where $q=0$. [step 2.1, L3, L4, L7, L8, L9, algebra]

4.1 By [L5], step 3.1 may be integrated term by term in the limit, and step 2.1 becomes $f(z)=\sum_{n\ge0}(z-a)^n(2\pi i)^{-1}\int_\gamma f(\zeta)/(\zeta-a)^{n+1}\,d\zeta$. [step 2.1, step 3.1, L5, algebra]

5.1 Choose a radius $R$ with $r<R<\rho_a$ when $\rho_a$ is finite, and take $R=r+1$ in the whole-plane case. Then $f$ is holomorphic on $D(a,R)$ and the radius-$r$ circle is compactly contained there, so for every natural $n$, [L6] identifies the integral coefficient in step 4.1 with $f^{(n)}(a)/n!$, including $n=0$ and $0!=1$. [step 1.1, step 2.1, step 4.1, L6, choose]

6.1 Since the point $z$ was arbitrary in the disc identified in step 1.1, step 5.1 proves the displayed Taylor equality throughout the largest centred open disc contained in $\Omega$. [step 1.1, step 5.1] ∎
