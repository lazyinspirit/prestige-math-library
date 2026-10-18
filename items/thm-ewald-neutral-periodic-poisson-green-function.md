---
id: thm-ewald-neutral-periodic-poisson-green-function
kind: theorem
title: "The mean-zero Fourier distribution solves the neutral periodic Poisson
  equation"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  [
    def-countable-choice,
    def-ewald-three-dimensional-periodic-source-data,
    lem-ewald-smooth-torus-fourier-pairing
  ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lior Silberman, Fourier Series and the Poisson Summation Formula (Math
        613 lecture notes)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+Poisson\
        Sum.pdf"
      locator: "§2, Exercises 10–11, printed pp. 3–4: Fourier reconstruction of smooth
        periodic data and its derivatives."
    - title: "Cameron F. Abrams, Modern Molecular Simulations (CHE T580, 2021 lecture
        notes)"
      url: "https://research.coe.drexel.edu/cbe/abramsgroup/msim2/CHE_T580_Lecture_No\
        tes.pdf"
      locator: "Chapter 7, equations (229)–(241), printed pp. 85–86: the Fourier-space
        Poisson solve and zero mode."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and a neutral finite point-source configuration on the
cell $A\mathbb Z^3$ of
[[def-ewald-three-dimensional-periodic-source-data]]. Put
$$\widehat u(0)=0,\qquad \widehat u(k)=\frac{4\pi}{V|\kappa_k|^2} \sum_{i=1}^nq_i e^{-i\kappa_k\cdot x_i}\quad(k\ne0).$$
The polynomially bounded sequence $\widehat u(k)$ defines a periodic
distribution $u$ by Fourier pairing. It is the unique mean-zero periodic
distribution satisfying $-\Delta u=4\pi\rho$.

## Facts & Assumptions

**Given:** Countable Choice, $A\in GL_3(\mathbb R)$, a finite configuration
$(x_i,q_i)_{i=1}^n$ with $\sum_iq_i=0$, and a smooth periodic test function
$\varphi$.

[A1] The proof uses Countable Choice through the smooth Fourier pairing and the lattice periodic uniqueness supplier ([[def-countable-choice]]).

[F1] The source distribution satisfies $\langle\rho,\varphi\rangle=\sum_iq_i\varphi(x_i)$ and its Fourier coefficient is $V^{-1}\sum_iq_ie^{-i\kappa_k\cdot x_i}$; distributions are defined by continuous linear pairings on smooth periodic tests ([[def-ewald-three-dimensional-periodic-source-data]]).

[F2] Every polynomially bounded coefficient sequence defines a continuous periodic distribution by $V\sum_k a_k\widehat\varphi(-k)$; smooth Fourier series converge to the test function in every smooth seminorm ([[lem-ewald-smooth-torus-fourier-pairing]]).

[F3] Since $e_k(x)=e^{i\kappa_k\cdot x}$, one has $-\Delta e_k=|\kappa_k|^2e_k$ and the zero character is the constant function $1$ ([[def-ewald-three-dimensional-periodic-source-data]]).

## Proof

**Proof technique:** direct.

1.1 Define $\widehat u$ by the displayed coefficients. For $k\ne0$, $|\widehat u(k)|\le\frac{4\pi Q}{V|\kappa_k|^2},\qquad Q=\sum_i|q_i|,$ so the sequence is polynomially bounded. Under Countable Choice [A1], [F2] therefore defines a continuous periodic distribution $u$ with exactly these coefficients; its zero Fourier coefficient is zero by construction. [given, A1, F1, F2, algebra]

1.2 For a smooth periodic $\varphi$, use Countable Choice [A1], [F3], and the coefficient pairing of [F2] to compute $\langle u,-\Delta\varphi\rangle =V\sum_{k\ne0}\widehat u(k)|\kappa_k|^2\widehat\varphi(-k) =4\pi\sum_iq_i\sum_{k\ne0}e^{-i\kappa_k\cdot x_i}\widehat\varphi(-k).$ The sums converge absolutely by [F2]. Reindex the full Fourier series by $j=-k$; [F2] gives $\sum_{k\in\mathbb Z^3}e^{-i\kappa_k\cdot x_i}\widehat\varphi(-k)=\varphi(x_i)$. The omitted zero term contributes $\widehat\varphi(0)\sum_iq_i=0$ by neutrality. Hence $\langle u,-\Delta\varphi\rangle=4\pi\sum_iq_i\varphi(x_i)=4\pi\langle\rho,\varphi\rangle$, proving $-\Delta u=4\pi\rho$. [given, A1, F1, F2, F3, algebra]

2.1 If $u_1,u_2$ are two mean-zero periodic distribution solutions, let $h=u_1-u_2$. Testing $-\Delta h=0$ against each character gives $|\kappa_k|^2\widehat h(k)=0$ for every $k\ne0$. Thus all nonzero Fourier coefficients of $h$ vanish, and its zero coefficient vanishes because both solutions have mean zero. Under [A1], the smooth Fourier partial sums converge in every smooth seminorm by [F2]; continuity of $h$ as a distribution then makes $h$ vanish on every smooth test function. Therefore $u_1=u_2$. [A1, F2, F3, algebra] ∎

