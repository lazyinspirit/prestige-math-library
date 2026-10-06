---
id: cor-heat-flow-preserves-mass-and-positivity
kind: corollary
title: "Mass conservation and positivity of the heat flow"
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - def-l-one-of-a-measure
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integrals-are-invariant-under-measure-preserving-maps
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-3.md
      - research/frontier-38-owner-30-dispatch/reader-reader-3.result.json
      - research/frontier-38-owner-30-step5-hash-3-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-3-5a-decisions.json
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Corollary 6.10(i), printed pp. 152–153, formula (6.39) (mass conservation)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 5.5 and §5.1.2, printed p. 131"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1 and Lemma 1.0.2, p. 1 (positive Gaussian and unit mass), and (1.0.8), p. 2"
---

## Statement

Assume Countable Choice, let $n\ge1$, and let $H_t$ be the heat evolution of
[[def-heat-evolution-of-initial-data]]. (i) If $f\in L^1(\mathbb R^n)$ then
$\int_{\mathbb R^n}H_tf(x)\,dx=\int_{\mathbb R^n}f(x)\,dx$ for every $t>0$.
(ii) If $f\in L^p(\mathbb R^n)$, $1\le p\le\infty$, satisfies $f\ge0$ almost
everywhere, then $H_tf\ge0$ almost everywhere for every $t>0$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $t>0$, and data $f$ in the class named in the respective clause.

[A1] Countable Choice is the hypothesis carried by the integration suppliers below ([[def-countable-choice]]).

[F1] For $t>0$ the heat kernel is positive and has $\int_{\mathbb R^n}\Gamma(x,t)\,dx=1$ ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F2] For $1\le p\le\infty$, $t>0$ and $f\in L^p(\mathbb R^n)$, the heat evolution $H_tf$ is the $L^p$ class of the almost-everywhere defined function $x\mapsto\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$ ([[def-heat-evolution-of-initial-data]]).

[F3] On sigma-finite product spaces Tonelli's theorem gives $\int_{X\times Y}f\,d(\mu\times\nu)=\int_X\int_Yf_x\,d\nu\,d\mu$ for nonnegative product-measurable $f$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] On sigma-finite product spaces Fubini's theorem gives the same iterated equality for $f\in L^1(\mu\times\nu)$, the sections being integrable almost everywhere ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] Under $\mathbb R^{m+n}=\mathbb R^m\times\mathbb R^n$ the Lebesgue measure $\lambda_{m+n}$ is the completion of the product measure $\lambda_m\times\lambda_n$ ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F6] If a measure-preserving $T$ and an integrable $f$ are given, then $\int f\circ T\,d\mu=\int f\,d\mu$ ([[thm-integrals-are-invariant-under-measure-preserving-maps]]); for each fixed $y$ the translation $x\mapsto x+y$ preserves Lebesgue measure.

[F7] $\int_{\mathbb R^n}|f|\,d\lambda_n$ denotes the $L^1$ norm of [[def-l-one-of-a-measure]].



## Proof

**Proof technique:** direct.

1.1 Work under [A1] and fix $t>0$. By [F2] the evolution $H_tf$ is the $L^p$ class of the representative $u(x)=\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$, defined for almost every $x$; by [F1] the kernel is positive with unit mass. [A1, F1, F2, given]

2.1 Mass conservation: assume $f\in L^1(\mathbb R^n)$, so that by [F2] and [F1] the function $(x,y)\mapsto|f(y)|\Gamma(x-y,t)$ is nonnegative and measurable. The identification [F5] makes the integral over $\mathbb R^{2n}$ the completed product integral, so Tonelli [F3] gives $\int_{\mathbb R^n}\int_{\mathbb R^n}|f(y)|\Gamma(x-y,t)\,dy\,dx=\int_{\mathbb R^n}|f(y)|\Bigl(\int_{\mathbb R^n}\Gamma(x-y,t)\,dx\Bigr)dy=\int_{\mathbb R^n}|f(y)|\,dy<\infty$, the inner integral being $1$ for every $y$ by the translation invariance [F6] and the unit mass of [F1]; hence $(x,y)\mapsto f(y)\Gamma(x-y,t)$ lies in $L^1(\lambda_{2n})$ and Fubini [F4] gives $\int_{\mathbb R^n}u(x)\,dx=\int_{\mathbb R^n}f(y)\Bigl(\int_{\mathbb R^n}\Gamma(x-y,t)\,dx\Bigr)dy=\int_{\mathbb R^n}f(y)\,dy$, which is (i), the integral of the class $H_tf$ being computed from its representative $u$. [step 1.1, F1, F3, F4, F5, F6, F7, given]

2.2 Positivity: assume $f\in L^p(\mathbb R^n)$ satisfies $f\ge0$ almost everywhere and let $N$ be the null set where $f<0$. For every $x$ at which the defining integral converges, the function $y\mapsto\Gamma(x-y,t)f(y)$ is $\ge0$ for every $y\notin N$, because $\Gamma>0$ by [F1]; a function that is nonnegative almost everywhere has nonnegative integral, so $u(x)\ge0$ wherever $u$ is defined, and $u$ is defined almost everywhere by [F2]; hence the class $H_tf$ is $\ge0$ almost everywhere, which is (ii). [step 1.1, F1, F2, given]

3.1 Steps 2.1 and 2.2 prove the mass-conservation clause (i) for $L^1$ data and the positivity clause (ii) for nonnegative $L^p$ data, so the corollary holds. [step 2.1, step 2.2, given] ∎
