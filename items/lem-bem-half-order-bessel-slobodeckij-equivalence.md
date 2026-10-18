---
id: lem-bem-half-order-bessel-slobodeckij-equivalence
kind: lemma
title: Bessel and Slobodeckij norms agree at order one half
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-fourier-translation-modulation-dilation-and-reflection-laws, thm-tonelli-and-fubini-for-completed-product-measures, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-linear-change-of-variables-for-lebesgue-measure, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, def-countable-choice, thm-polar-coordinates-formula-for-lebesgue-measure, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-vector-valued-ftc-and-lipschitz-bound]
justified_by: []
proof_strategy: direct
axiom_use: Countable Choice is inherited through the cited Fourier and product-measure theorems.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed pp. 614–616: the invariance of real-order Sobolev spaces under Lipschitz coordinates and local Sobolev norms on Lipschitz boundaries."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §1.5, PDF pp. 12–14: Lipschitz graph coordinates used for local Sobolev spaces on polyhedral boundaries."
---

## Statement

Assume Countable Choice. For $f\in\mathcal S(\mathbb R^2)$, define
$$[f]_{1/2,2}^2=\int_{\mathbb R^2}\int_{\mathbb R^2}\frac{|f(x)-f(y)|^2}{|x-y|^3}\,dx\,dy.$$
There is a finite constant $c_*>0$ such that
$$[f]_{1/2,2}^2=c_*\int_{\mathbb R^2}|\xi|\,|\widehat f(\xi)|^2d\xi.$$
Consequently, the norm $\|f\|_2^2+[f]_{1/2,2}^2$ is equivalent on $\mathcal S(\mathbb R^2)$ to the Bessel-potential norm $\int_{\mathbb R^2}(1+4\pi^2|\xi|^2)^{1/2}|\widehat f(\xi)|^2d\xi$. The two completions therefore define the same $H^{1/2}(\mathbb R^2)$ space with equivalent norms.

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]) and a Schwartz function $f$ on $\mathbb R^2$.

[A1] Countable Choice is assumed for the Fourier and product-measure suppliers ([[def-countable-choice]]).

[F1] The Fourier transform agrees with its unitary Plancherel extension on $L^2$, and translations transform into multiplication by $e^{2\pi i\xi\cdot h}$ ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]).

[F2] Lebesgue measure is translation invariant, and the $L^1$ Fourier transform of $f(\cdot+h)$ is $e^{2\pi i\xi\cdot h}\widehat f(\xi)$ ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-fourier-translation-modulation-dilation-and-reflection-laws]]).

[F3] Nonnegative measurable functions on product measure spaces may be integrated in either order ([[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F4] Use the equivalent Hilbert renorming of the Bessel-potential $H^{1/2}(\mathbb R^2)$ completion with Fourier weight $(1+4\pi^2|\xi|^2)^{1/2}$: it is between the published weight $(1+|\xi|^2)^{1/2}$ and $2\pi$ times that weight ([[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[F5] An invertible linear map changes Lebesgue measure by the absolute determinant ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F90] Polar integration uses the published radial formula, not a linear substitution: $dx=r^{n-1}dr\,d\sigma(\omega)$. The sphere measure agrees with graph-chart surface measure and scales by $R^{n-1}$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

[F91] The complex exponential has derivative itself and $|e^{it}|=1$ for real $t$. The finite-dimensional FTC, applied to real and imaginary parts along $t\mapsto it$, gives $|e^{it}-1|\le|t|$. ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[cor-vector-valued-ftc-and-lipschitz-bound]])

## Proof


1.1 Set $h=x-y$ and use translation invariance in [F2] and Tonelli [F3] on the nonnegative integrand. This gives $[f]_{1/2,2}^2=\int_{\mathbb R^2}\frac{\|f(\cdot+h)-f(\cdot)\|_2^2}{|h|^3}dh.$ For each $h$, Plancherel and the translation formula [F1]–[F2] express the squared norm in the integrand as $\int_{\mathbb R^2}|e^{2\pi i\xi\cdot h}-1|^2|\widehat f(\xi)|^2d\xi$. [A1, F1, F2, F3, given, algebra]

2.1 Tonelli [F3] now yields $[f]_{1/2,2}^2=\int_{\mathbb R^2}|\widehat f(\xi)|^2J(\xi)d\xi,\qquad J(\xi)=\int_{\mathbb R^2}\frac{|e^{2\pi i\xi\cdot h}-1|^2}{|h|^3}dh.$ If $\xi=0$, then $J(\xi)=0$. If $\xi\ne0$, rotate $h$ so that $\xi\cdot h=|\xi|h_1$, then substitute $z=|\xi|h$ using [F5]; the Jacobian is $|\xi|^{-2}$ and $|h|^{-3}=|\xi|^3|z|^{-3}$, so $J(\xi)=c_*|\xi|$ with $c_*=\int_{\mathbb R^2}|e^{2\pi iz_1}-1|^2|z|^{-3}dz$. This constant is finite: for $|z|\le1$, $|e^{2\pi iz_1}-1|\le2\pi|z|$, and for $|z|>1$ it is at most $2$; polar integration gives finite bounds $C\int_0^1dr$ and $C\int_1^\infty r^{-2}dr$. It is positive because the numerator is positive on a nonempty open set. [A1, F1, F2, F3, F5, F90, F91, step 1.1, algebra]

3.1 Substitution of $J(\xi)=c_*|\xi|$ into step 2.1 gives the exact seminorm identity. By [F4], the Bessel norm is the weighted Fourier norm; for every $r\ge0$, $(1+4\pi^2r^2)^{1/2}$ is bounded above and below by positive constants times $1+r$. Hence that norm is equivalent to $\|f\|_2^2+\int |\xi||\widehat f(\xi)|^2d\xi$, and step 2.1 proves the asserted equivalence. Equivalent norms have the same Cauchy sequences and completion classes, proving the final claim. [F4, step 2.1, algebra] ∎

