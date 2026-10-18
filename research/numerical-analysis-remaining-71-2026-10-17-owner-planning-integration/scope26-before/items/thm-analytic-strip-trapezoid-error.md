---
id: thm-analytic-strip-trapezoid-error
kind: theorem
title: An analytic-strip error bound for the infinite trapezoid sum
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-complex-differentiability-holomorphic-and-entire, def-complex-exponential, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-sine-cosine-zero-sets-and-fundamental-period, thm-quarter-turn-values-and-shift-formulas, def-pi-via-first-positive-cosine-zero, thm-residue-theorem-null-homologous-cycle, thm-exponential-limits-and-range]
proof_strategy: direct
axiom_use: None. The contour proof uses a finite residue sum and no choice principle.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Lloyd N. Trefethen and J. A. C. Weideman, The Exponentially Convergent Trapezoidal Rule, SIAM Review 56(3), 2014
      url: https://people.maths.ox.ac.uk/trefethen/publication/PDF/2014_149.pdf
      locator: §5.1, Theorem 5.1 and the residue-calculus proof on printed pp. 399–402.
---

## Statement

Let $d>0$, $0<a<d$, $h>0$, and let $F$ be holomorphic on the strip $S_d=\{z\in\mathbb C:|\operatorname{Im}z|<d\}$ and continuous on its closed substrip $|\operatorname{Im}z|\le a$. Suppose there are $C,\eta>0$ such that
$$|F(x+iy)|\le C e^{-\eta|x|}\qquad(x\in\mathbb R,\ |y|\le a).$$
Put $I=\int_{\mathbb R}F(x)\,dx$ and $I_\pm=\int_{\mathbb R}|F(x\pm ia)|\,dx$. Then the infinite trapezoid sum converges absolutely and
$$\left|I-h\sum_{k\in\mathbb Z}F(kh)\right|\le\frac{I_++I_-}{e^{2\pi a/h}-1}.$$

## Facts & Assumptions

**Given:** The strip hypotheses above, $a,h>0$, and the complex exponential/trigonometric conventions.

[F1] [[def-complex-differentiability-holomorphic-and-entire]]: holomorphic means complex differentiable on an open set.

[F2] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] and [[thm-complex-exponential-is-entire-with-derivative-itself]]: $|e^{x+iy}|=e^x$ and $(e^z)'=e^z$.

[F3] [[thm-sine-cosine-zero-sets-and-fundamental-period]] and [[thm-quarter-turn-values-and-shift-formulas]]: the real sine zeros are $k\pi$, and $\cos(k\pi)=(-1)^k$.

[F4] [[thm-residue-theorem-null-homologous-cycle]]: the integral of a meromorphic function around a positively oriented rectangle equals $2\pi i$ times the sum of its enclosed residues when no pole is on the boundary.

[F5] [[thm-exponential-limits-and-range]]: $e^{-x}\to0$ as $x\to+\infty$.

## Proof

1.1 Define $K_h(z)=\frac{\pi i}{h}\frac{e^{2\pi iz/h}+1}{e^{2\pi iz/h}-1}$. By [F2] and [F3], its poles are exactly $z=kh$, $k\in\mathbb Z$: if the denominator vanishes, its modulus gives $\operatorname{Im}z=0$, and Euler's formula then gives $2\pi z/h=2j\pi$. At each such point the denominator has derivative $2\pi i/h$ and the numerator is $2$, so $K_h$ has residue $1$. Therefore $F K_h$ has residue $F(kh)$ there. [F2, F3, algebra]

2.1 Fix $N\ge0$ and $R=(N+\tfrac12)h$. Apply [F4] to the rectangle with vertical sides $\pm R$ and horizontal sides $\operatorname{Im}z=\pm a$; [F1] supplies the required holomorphy of $F$ away from the kernel poles. The enclosed poles are exactly $kh$ for $-N\le k\le N$, so its contour integral is $2\pi i\sum_{k=-N}^NF(kh)$. [F1, F4, step 1.1, construct]

3.1 On the upper edge, $|e^{2\pi i(x+ia)/h}|=\rho:=e^{-2\pi a/h}<1$ and $$\left|K_h(x+ia)+\frac{\pi i}{h}\right|=\frac{2\pi}{h}\left|\frac{e^{2\pi i(x+ia)/h}}{e^{2\pi i(x+ia)/h}-1}\right|\le\frac{2\pi/h}{e^{2\pi a/h}-1}.$$ On the lower edge, the analogous estimate is $\left|K_h(x-ia)-\pi i/h\right|\le(2\pi/h)/(e^{2\pi a/h}-1)$. On either vertical edge, $e^{2\pi iz/h}$ is negative real and $|K_h(z)|\le\pi/h$. The vertical integrals therefore tend to zero as $N\to\infty$ by the uniform strip bound in the statement. [F2, given, step 2.1, algebra]

4.1 Cauchy's theorem, applied to $F$ on the rectangles between the real axis and each horizontal edge, and the same vanishing vertical-side bound for $F$, show $\int_{\mathbb R}F(x\pm ia)\,dx=I$. Replacing $K_h$ on the two long edges of step 2.1 by its constants $\mp\pi i/h$, the residue identity becomes $$h\sum_{k=-N}^NF(kh)=\frac12\left(\int_{-R}^{R}F(x-ia)\,dx+\int_{-R}^{R}F(x+ia)\,dx\right)+E_N,$$ where $|E_N|\le(\int_{-R}^{R}|F(x-ia)|dx+\int_{-R}^{R}|F(x+ia)|dx)/(e^{2\pi a/h}-1)+o(1)$ as $N\to\infty$. [F4, given, step 2.1, step 3.1]

5.1 The real and horizontal sums and integrals converge absolutely by the exponential bound. Letting $N\to\infty$ in step 4.1, the average tends to $I$ and the error term is at most $(I_-+I_+)/(e^{2\pi a/h}-1)$. This proves the assertion. [given, F5, step 4.1] ∎

