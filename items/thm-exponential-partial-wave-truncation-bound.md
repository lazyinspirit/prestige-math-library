---
id: thm-exponential-partial-wave-truncation-bound
kind: theorem
title: Exponential coefficient decay gives a uniform partial-wave truncation bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-spherical-harmonic-partial-wave-conventions, lem-spherical-harmonics-form-complete-basis-and-addition-formula, def-countable-choice, def-dependent-choice]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice and Dependent Choice are carried from the complete-harmonic supplier used for the addition-kernel estimate. The exponential coefficient hypothesis is explicit and is not deduced for arbitrary contrasts."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
      locator: "PDF pp. 17–21, harmonic expansion and angular truncation context; the uniform coefficient tail estimate is proved locally."
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, version July 15, 2009, Chapter 8"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 145–150, spherical-harmonic expansion and addition theorem."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and Dependent Choice. Let $b_\ell\in\mathcal H_\ell$ for every integer $\ell\ge0$, where $\mathcal H_\ell$ is defined in [[def-spherical-harmonic-partial-wave-conventions]]. Suppose constants $C\ge0$ and $\rho>1$ satisfy $\|b_\ell\|_{L^2(S^2)}\le C\rho^{-\ell}$ for all $\ell$. Then $b(\omega):=\sum_{\ell=0}^\infty b_\ell(\omega)$ converges uniformly on $S^2$, and for every integer $L\ge0$,
$$\sup_{\omega\in S^2}\left|b(\omega)-\sum_{\ell=0}^L b_\ell(\omega)\right|\le C\sqrt{\frac{2L+3}{4\pi}}\,\frac{\rho^{-(L+1)}}{(1-\rho^{-1})^2}.$$
This is a conditional angular-coefficient bound; it does not assert exponential decay for general scattering data.

## Facts & Assumptions

**Given:** The harmonic spaces, constants $C\ge0$, $\rho>1$, and coefficient bounds above.

[F1] [[lem-spherical-harmonics-form-complete-basis-and-addition-formula]]: for $g\in\mathcal H_\ell$, $\|g\|_\infty\le\sqrt{(2\ell+1)/(4\pi)}\|g\|_2$.

## Proof

**Given:** The data in the Statement.

1.1 By [F1], $\|b_\ell\|_\infty\le C\sqrt{(2\ell+1)/(4\pi)}\rho^{-\ell}$. The scalar series of these bounds converges because $\rho>1$, so the partial sums of $\sum b_\ell$ are uniformly Cauchy and converge uniformly to a function $b$. [F1, given, algebra]

2.1 For $\ell=L+1+n$ with $n\ge0$, $\sqrt{2\ell+1}\le(n+1)\sqrt{2L+3}$: squaring reduces this to $2L+3+2n\le(2L+3)(n+1)^2$, whose difference is nonnegative. Therefore the tail in step 1.1 is at most $C\sqrt{(2L+3)/(4\pi)}\rho^{-(L+1)}\sum_{n=0}^\infty(n+1)\rho^{-n}$. For $t=\rho^{-1}\in(0,1)$, multiplying the geometric series by itself or differentiating its partial sums gives $\sum_{n\ge0}(n+1)t^n=(1-t)^{-2}$. This yields the claimed bound. [given, step 1.1, algebra] ∎
