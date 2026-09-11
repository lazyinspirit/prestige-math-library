---
id: cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms
kind: corollary
title: Uniqueness of finite Borel measures from their Fourier transforms
deps: ["lem-gaussian-smoothing-of-finite-complex-measures", "cor-uniqueness-of-the-l-one-fourier-transform", "cor-second-countable-lch-locally-finite-borel-measures-are-regular", "def-axiom-of-choice", "thm-rmk-uniqueness-among-radon-measures", "thm-jordan-decomposition-for-signed-measures", "prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures", "thm-heine-borel-rn", "thm-rationals-countable"]
status: draft
origin: pipeline
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Gerald Teschl, Topics in Real and Functional Analysis (2017)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Problem 14.10, p.387
---

## Statement

Assume AC. Finite complex Borel measures $\mu,\nu$ on $\mathbb R^n$ with $\widehat\mu=\widehat\nu$ are equal. Here finite means finite total variation, and $n\ge1$.

## Facts & Assumptions

**Given:** The stated measures and [[def-axiom-of-choice]].

[F1] Gaussian smoothing has transform $\widehat k_t\widehat\sigma$ and converges against all compactly supported continuous tests ([[lem-gaussian-smoothing-of-finite-complex-measures]]).

[F2] The integral Fourier transform is injective on $L^1$ ([[cor-uniqueness-of-the-l-one-fourier-transform]]).

[F3] A compact-finite Borel measure on a second-countable LCH space is regular ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

[F4] Positive Radon measures agreeing on every compactly supported continuous test are equal ([[thm-rmk-uniqueness-among-radon-measures]]).

[F5] Real and imaginary parts are finite signed measures, and under AC they have Jordan decompositions ([[prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures]], [[thm-jordan-decomposition-for-signed-measures]]).

[F6] Closed bounded Euclidean sets are compact and the rationals are countable ([[thm-heine-borel-rn]], [[thm-rationals-countable]]).

## Proof

1.1 Set $\sigma=\mu-\nu$. It is a complex measure and its partition sums are bounded by $|\mu|+|\nu|$, so it has finite variation. Linearity of the bounded-test integrals gives $\widehat\sigma=0$. For every $t>0$, F1 gives a density $h_t\in L^1$ with zero transform; F2 gives $h_t=0$ almost everywhere. Passing to the F1 testing limit yields $\int\varphi\,d\sigma=0$ for every complex $\varphi\in C_c$. [F1, F2, given]

2.1 Euclidean space is Hausdorff (disjoint small balls separate points) and locally compact by compact closed balls from F6. Balls with rational centers and positive rational radii form a countable base: for an open neighborhood of x choose a sufficiently small contained ball, then a rational center sufficiently near x and rational radius between the resulting strict bounds. Thus F3 applies to the finite positive measure $v=|\sigma|$ and makes it regular. Under AC, F5 gives Jordan parts $r^+,r^-$ of $r=\operatorname{Re}\sigma$ and $s^+,s^-$ of $s=\operatorname{Im}\sigma$. On their respective Hahn sets, for example $r^+(E)=r(E\cap P)\le|\sigma(E\cap P)|\le v(E)$; the same argument bounds each other part by v. [F3, F5, F6, step 1.1]

3.1 If $0\le\rho\le v$ is one of these parts and E is Borel, regularity of finite v gives compact $K\subseteq E$ and open $U\supseteq E$ with $v(E\setminus K)<\epsilon$ and $v(U\setminus E)<\epsilon$. The corresponding rho errors are at most these, so rho is both inner and outer regular and finite on compact sets, hence Radon. For real $\varphi\in C_c$, step 1.1 gives $\int\varphi\,dr^+=\int\varphi\,dr^-$ and the analogous equality for s. These component integral identities follow for simple tests and then by their bounded-test approximation. F4 gives $r^+=r^-$ and $s^+=s^-$, so $\sigma=0$. AC is used in smoothing and the Hahn/Jordan decompositions, and covers the regularity construction. [F4, F5, step 1.1, step 2.1] ∎
