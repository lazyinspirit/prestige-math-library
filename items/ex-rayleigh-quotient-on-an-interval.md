---
id: "ex-rayleigh-quotient-on-an-interval"
kind: "example"
title: "The Rayleigh quotient on an interval"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 14
deps:
  - "cor-pi-is-the-first-positive-sine-zero"
  - "def-axiom-of-choice"
  - "def-countable-choice"
  - "def-dependent-choice"
  - "def-hahn-banach-extension-principle-relative"
  - "def-hk-and-hk-zero-notation"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-ultrafilter-extension-principle"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-schwartz-cutoffs-from-the-standard-smooth-step"
  - "lem-sharp-dirichlet-poincare-inequality-on-an-interval"
  - "thm-chain-rule"
  - "thm-double-angle-and-power-reduction-identities"
  - "thm-first-dirichlet-eigenfunction-by-constrained-minimisation"
  - "thm-ftc-second-part"
  - "thm-linearity-of-the-integral"
  - "thm-sine-and-cosine-derivatives"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 7, printed pp. 67-71 (the variational characterization of eigenvalues and the explicit interval example)"
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations: Lecture Notes (arXiv:1203.2344, complete monograph)"
      url: "https://arxiv.org/pdf/1203.2344"
      locator: "Chapter 9, printed pp. 51-56 (Rayleigh principle (9.1); eigenvalues as critical values of the Rayleigh quotient)"
---

## Example

Assume the Axiom of Choice, the ultrafilter lemma, DC and HB ([[def-axiom-of-choice]], [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]), inherited from [[thm-first-dirichlet-eigenfunction-by-constrained-minimisation]]; the explicit computation below consumes only Countable Choice, through [[lem-sharp-dirichlet-poincare-inequality-on-an-interval]]. On $\Omega=(0,1)$ the constrained minimisation of [[thm-first-dirichlet-eigenfunction-by-constrained-minimisation]] is explicit: a minimiser of $E(u)=\int_0^1u'^2$ on the $L^2$-unit sphere $S\subseteq H^1_0(0,1)$ is $u_0(x)=\sqrt2\,\sin(\pi x)$, the minimum is $\lambda_1=\pi^2$, and the weak eigenvalue equation is $-u_0''=\pi^2u_0$ with $u_0(0)=u_0(1)=0$.

## Facts & Assumptions

**Given:** The interval $(0,1)$, the energy $E(u)=\int_0^1u'^2\,dx$ on $H^1_0(0,1;\mathbb R)$, the unit sphere $S=\{u\in H^1_0(0,1):\|u\|_{L^2}=1\}$ ([[def-hk-and-hk-zero-notation]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]), and $u_0(x)=\sqrt2\,\sin(\pi x)$.

[F1] [[lem-sharp-dirichlet-poincare-inequality-on-an-interval]]: with $L=1$ and $\phi(x)=\sin(\pi x)$, every $u\in H^1_0(0,1)$ satisfies $\|u\|_{L^2}\le\pi^{-1}\|u'\|_{L^2}$, the function $\phi$ attains equality, and $\int_0^1\phi'v'\,dx=\pi^2\int_0^1\phi v\,dx$ for every $v\in H^1_0(0,1)$.

[F2] [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]: $u_0'(x)=\sqrt2\,\pi\cos(\pi x)$ and $u_0''(x)=-\sqrt2\,\pi^2\sin(\pi x)=-\pi^2u_0(x)$.

[F3] [[thm-ftc-second-part]]: for every $\psi\in C_c^\infty(0,1)$, choose $0<a<b<1$ with $\psi=0$ near $a,b$; applying the fundamental theorem to $u_0\psi$ on $[a,b]$ gives $\int_0^1u_0\psi'=-\int_0^1u_0'\psi$. Thus the classical derivative $u_0'$ is also the weak derivative.

[F4] [[lem-schwartz-cutoffs-from-the-standard-smooth-step]]: in dimension one there is $\chi\in C_c^\infty(\mathbb R)$ with $0\le\chi\le1$, $\chi=1$ on $[-1,1]$, and $\chi=0$ outside $[-2,2]$; for every $R>0$, the dilate $\chi_R(x)=\chi(x/R)$ has derivative $R^{-1}\chi'(x/R)$. The construction requires no choice.

[F5] [[thm-double-angle-and-power-reduction-identities]], [[thm-ftc-second-part]], [[thm-sine-and-cosine-derivatives]], [[thm-linearity-of-the-integral]], [[cor-pi-is-the-first-positive-sine-zero]]: $\sin^2t=(1-\cos2t)/2$ and $\cos^2t=(1+\cos2t)/2$; $\sin(\pi)=\sin(2\pi)=0$; and the fundamental theorem of calculus applied to $\sin(2\pi x)/(2\pi)$ gives $\int_0^1\cos(2\pi x)\,dx=0$, since the integral is linear.

[F6] [[thm-first-dirichlet-eigenfunction-by-constrained-minimisation]]: on a nonempty bounded open set, $E$ attains its infimum $\lambda_1$ on $S$, and every minimiser $u_0$ satisfies $\int u_0'h'=\lambda_1\int u_0h$ for all $h\in H^1_0$ with $\lambda_1=E(u_0)$.

## Verification

**Proof technique:** direct.

**Given:** The interval, the energy and the function $u_0$ above.

1.1 The function $u_0$ is smooth on $[0,1]$, with classical derivative $u_0'(x)=\sqrt2\pi\cos(\pi x)$ by [F2]. For each test function $\psi\in C_c^\infty(0,1)$, integration of $(u_0\psi)'$ over an interior interval containing its support gives $\int_0^1u_0\psi'=-\int_0^1u_0'\psi$ [F3], so $u_0'$ is its weak derivative; both $u_0$ and $u_0'$ are bounded, hence $u_0\in H^1(0,1)$. Take $\chi$ from [F4] and put $M=\|\chi'\|_{L^\infty(\mathbb R)}<\infty$. For integers $m\ge5$, define $\xi_m(x)=(1-\chi(mx))(1-\chi(m(1-x)))$. Then $\xi_m\in C_c^\infty(0,1)$, $\xi_m=1$ on $[2/m,1-2/m]$, $\|\xi_m'\|_\infty\le2Mm$, and both $1-\xi_m$ and $\xi_m'$ are supported in $B_m=(0,2/m)\cup(1-2/m,1)$. On $B_m$, $|u_0(x)|\le2\sqrt2\pi/m$, while $|u_0'(x)|\le\sqrt2\pi$ everywhere; since $|B_m|\le4/m$, these bounds give $\|(1-\xi_m)u_0\|_{L^2}\to0$ and $\|(1-\xi_m)u_0'-\xi_m'u_0\|_{L^2}\to0$. Hence $\xi_m u_0\to u_0$ in $H^1(0,1)$, and the closure definition of $H^1_0$ gives $u_0\in H^1_0(0,1)$. Finally $u_0(0)=u_0(1)=0$ because $\sin0=\sin\pi=0$ [F5]. [given, F2, F3, F4, F5]

2.1 Normalisation and energy: by the power-reduction identities and the vanishing of $\int_0^1\cos(2\pi x)\,dx$ [F5], $\int_0^1\sin^2(\pi x)\,dx=\tfrac12\int_0^1(1-\cos(2\pi x))\,dx=\tfrac12$ and $\int_0^1\cos^2(\pi x)\,dx=\tfrac12$; hence $\|u_0\|_{L^2}^2=2\cdot\tfrac12=1$, so $u_0\in S$, and $E(u_0)=\int_0^1u_0'^2=2\pi^2\int_0^1\cos^2(\pi x)\,dx=\pi^2$. [step 1.1, F5]

3.1 Minimality: for every $v\in S$ the sharp inequality [F1] gives $1=\|v\|_{L^2}\le\pi^{-1}\|v'\|_{L^2}$, that is $E(v)=\|v'\|_{L^2}^2\ge\pi^2$; since $u_0\in S$ with $E(u_0)=\pi^2$ by step 2.1, the infimum over $S$ is the minimum $\lambda_1=\pi^2$, attained at $u_0$. [step 1.1, step 2.1, F1]

4.1 Weak eigenvalue equation: the weak identity of [F1] for $\phi=\sin(\pi x)$ scales by $\sqrt2$ to $\int_0^1u_0'h'=\pi^2\int_0^1u_0h$ for every $h\in H^1_0(0,1)$, and by [F2] $u_0''=-\pi^2u_0$ classically with $u_0(0)=u_0(1)=0$; thus $-u_0''=\pi^2u_0$ holds in the weak sense, with $\lambda_1=\pi^2$ as the eigenvalue. [step 1.1, step 3.1, F1, F2, F5]

5.1 Steps 1.1-4.1 exhibit the minimiser, the minimum and the eigenvalue equation explicitly, so the constrained minimisation of [F6] on $(0,1)$ has $u_0(x)=\sqrt2\sin(\pi x)$ as a minimiser with $\lambda_1=\pi^2$, in agreement with the general statement; the only choice principle consumed by this computation is Countable Choice through the sharp interval inequality [F1]. [step 1.1, step 2.1, step 3.1, step 4.1, F1, F6] ∎
