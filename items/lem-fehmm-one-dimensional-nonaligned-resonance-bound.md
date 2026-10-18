---
id: lem-fehmm-one-dimensional-nonaligned-resonance-bound
kind: lemma
title: One-dimensional nonaligned micro sampling resonance bound
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-periodic-scalar-diffusion-data
  - def-periodic-cell-correctors-and-effective-tensor
  - def-periodic-cell-problem
  - lem-periodic-cell-corrector-wellposedness
  - lem-periodic-cell-poincare
  - def-periodic-ltwo-weak-derivative
  - lem-fourier-coefficients-of-a-periodic-weak-derivative
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Patrick Ciarlet Jr. and Christian Stohrer, Finite-element heterogeneous multiscale method for the Helmholtz equation"
      url: "https://comptes-rendus.academie-sciences.fr/mathematique/item/10.1016/j.crma.2014.07.006.pdf"
      locator: "§§2–3: micro sampling domains, coupling conditions, and effective coefficient reconstruction."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Statement

In one dimension, let $a$ be measurable, $1$-periodic, and satisfy $0<\lambda\le a\le\Lambda$. For a phase $\theta\in\mathbb R$ and ratio $r=\delta/\epsilon\ge1$, let $w_r\in V_\#$ solve $\int_0^1a(\theta+ry)(1+w_r')v'\,dy=0$ for every $v\in V_\#$, and define $A_r(\theta)=\int_0^1a(\theta+ry)(1+w_r')\,dy$. Then
$$A_r(\theta)=\left(\int_0^1\frac{dy}{a(\theta+ry)}\right)^{-1},\qquad A^*=\left(\int_0^1\frac{dy}{a(y)}\right)^{-1},$$
and
$$|A_r(\theta)-A^*|\le\frac{2\Lambda^2}{\lambda r}=\frac{2\Lambda^2}{\lambda}\frac\epsilon\delta.$$
No dimension-independent bound for the unaligned case is claimed here.

## Facts & Assumptions

**Given:** A measurable one-dimensional periodic scalar coefficient with $\lambda\le a\le\Lambda$, and periodic mean-zero corrector problems for both the original and sampled coefficient.

[F1] [[def-periodic-scalar-diffusion-data]] and [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: $a$ is periodic, $\lambda\le a\le\Lambda$ almost everywhere, and the affine sampled coefficient $a(\theta+ry)$ is a well-defined measurable class with the same bounds.

[F2] [[def-periodic-cell-correctors-and-effective-tensor]] and [[lem-periodic-cell-corrector-wellposedness]]: $A^*$ is the mean flux of the exact mean-zero cell corrector.

[F3] [[def-periodic-cell-problem]]: the mean-zero periodic coupling tests against every periodic fluctuation; a constant flux therefore solves the cell equation.

[F4] [[def-periodic-ltwo-weak-derivative]], [[lem-fourier-coefficients-of-a-periodic-weak-derivative]], and [[thm-fourier-basis-and-parseval-on-the-n-torus]]: a periodic $L^2$ weak derivative has Fourier coefficients $2\pi ik\widehat f(k)$, and Parseval holds.

[F5] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: the bounded triangular integrand in the primitive calculation can be integrated in either order.

[F6] [[lem-periodic-cell-poincare]]: every periodic $H^1$ derivative has zero cell integral.

## Proof



1.1 For either $b=a$ or $b(y)=a(\theta+ry)$, define $c_b=(\int_0^1b^{-1})^{-1}$ and $h_b=c_b/b-1$. The ellipticity bounds make $h_b\in L^\infty(0,1)$, and $\int_0^1h_b=0$. Put $\chi_b(t)=\int_0^th_b(s)ds$. For every smooth periodic $\varphi$, Fubini [F5] gives $\int_0^1\chi_b(t)\varphi'(t)dt=\int_0^1h_b(s)(\varphi(1)-\varphi(s))ds=-\int_0^1h_b(s)\varphi(s)ds$, so $h_b$ is its periodic weak derivative. By [F4], the symmetric Fourier partial sums of $\chi_b$ are real trigonometric polynomials and converge in $H^1(0,1)$, since both $\chi_b$ and $h_b$ are in $L^2$ and their Fourier coefficients satisfy the weak-derivative relation; after subtracting its mean, the limit belongs to $V_\#$ by the closure definition. Since $b(1+h_b)=c_b$ almost everywhere, for every $v\in V_\#$ we have $\int_0^1b(1+\chi_b')v'=c_b\int_0^1v'=0$ by [F6]. Thus it solves the cell equation. If two mean-zero solutions existed, testing their difference equation by the difference would give $\int b|\chi'-\widetilde\chi'|^2=0$; the periodic Poincare inequality [F6] then makes their difference zero. This proves both harmonic-mean formulas, including the nonperiodic-in-$y$ sampled coefficient under periodic coupling. [F1, F2, F3, F4, F5, F6, algebra]

2.1 Put $g=1/a$ and $I=\int_0^1g$. Write $r=N+s$ with integer $N\ge1$ and $0\le s<1$. Periodicity gives $\int_0^r g(\theta+t)dt=NI+R,\qquad R=\int_\theta^{\theta+s}g(t)dt,$ so $\int_0^1g(\theta+ry)dy=I+(R-sI)/r$. Since $0<g\le1/\lambda$, both $R$ and $sI$ lie in $[0,s/\lambda]$, hence $|R-sI|\le s/\lambda\le1/\lambda$. In particular the weaker bound $|I_r-I|\le2/(\lambda r)$ holds. Also $I,I_r\ge1/\Lambda$. Therefore $|A_r-A^*|=\frac{|I_r-I|}{I_rI}\le\frac{2}{\lambda r}\Lambda^2,$ as claimed. [F1, step 1.1, algebra] ∎
