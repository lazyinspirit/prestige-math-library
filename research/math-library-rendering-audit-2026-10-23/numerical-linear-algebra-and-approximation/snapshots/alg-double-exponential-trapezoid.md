---
id: alg-double-exponential-trapezoid
kind: algorithm
title: Finite truncated tanh–sinh, exp–sinh, and sinh–sinh trapezoid rules
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-real-exponential-function-and-e, thm-exponential-limits-and-range, def-pi-via-first-positive-cosine-zero]
justified_by: [thm-double-exponential-transforms-and-integral-identities, thm-double-exponential-trapezoid-error-bound]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §§5.1, 6, and 14, analytic-strip trapezoids, truncation, and tanh-sinh transformation.
    - title: David H. Bailey, A Catalogue of Mathematical Formulas Involving π, with Analysis, Journal of Numerical Analysis and Approximation Theory 50 (2021), no. 2, 108–125
      url: https://ictp.acad.ro/jnaat/journal/article/download/1259/1203
      locator: §5.3, printed pp. 118–120, tanh-sinh formula (73)–(74), and the exp-sinh and sinh-sinh transformations.
---

## Definition

Input a real function $f$ that is continuous on the interior of the selected target domain, a step $h>0$, nonnegative integers $N_-,N_+$, and exactly one domain mode. The finite rule evaluates $f$ only at interior points:

1. **Finite interval $(a,b)$, $a<b$.** Put $m=(a+b)/2$, $d=(b-a)/2$, $s(t)=\sinh t=(e^t-e^{-t})/2$, $c(t)=\cosh t=(e^t+e^{-t})/2$, and $\psi(t)=\tanh((\pi/2)s(t))$, where $\tanh u=\sinh u/\cosh u$. Set $x(t)=m+d\psi(t)$, $x'(t)=d(\pi/2)c(t)/\cosh^2((\pi/2)s(t))$, and $\Phi(t)=f(x(t))x'(t)$.
2. **Positive half-line $(0,\infty)$.** Here $f$ is continuous on $(0,\infty)$. Set $x(t)=\exp((\pi/2)s(t))$, $x'(t)=x(t)(\pi/2)c(t)$, and $\Phi(t)=f(x(t))x'(t)$.
3. **Whole line $\mathbb R$.** Here $f$ is continuous on $\mathbb R$. Set $x(t)=\sinh((\pi/2)s(t))$, $x'(t)=\cosh((\pi/2)s(t))(\pi/2)c(t)$, and $\Phi(t)=f(x(t))x'(t)$.

Return the finite sum
$$T_{h,N_-,N_+}(f)=h\sum_{k=-N_-}^{N_+}\Phi(kh).$$
The algorithm makes no accuracy claim from integrability alone. Analytic-strip and tail hypotheses required for an error certificate are stated in [[thm-double-exponential-trapezoid-error-bound]].
