---
id: lem-ip-compact-support-fourier-laplace-is-entire
kind: lemma
title: The compact-support Fourier-Laplace transform is entire in each coordinate
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-2d-radon-transform
  - thm-continuous-on-a-rectangle-is-riemann-integrable
  - thm-multidimensional-integral-properties
  - thm-complex-exponential-is-entire-with-derivative-itself
  - def-complex-differentiability-holomorphic-and-entire
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1"
      url: "https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf"
      locator: "§2.1, pp. 4–5, Theorems 2.1–2.2: Radon line parameterization, Fourier-slice identity, and full-angle uniqueness by Fourier inversion; the coordinate-entire extension is proved here."
    - title: "Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography"
      url: "https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf"
      locator: "§1.3.2, pp. 13–14, Theorem 3 proof: compact-support analytic continuation."
---

## Statement

Let $f\in C_c^\infty(\mathbb R^2;\mathbb C)$ and, for $z=(z_1,z_2)\in\mathbb C^2$, define $F(z)=\int_{\mathbb R^2}f(x)e^{-2\pi i(x_1z_1+x_2z_2)}\,dx$ using the compact-support Riemann integral on any rectangle containing $\operatorname{supp}f$. This value is independent of the containing rectangle. Each coordinate slice of $F$ is entire, with $\frac{\partial F}{\partial z_j}(z)=\int_{\mathbb R^2}(-2\pi ix_j)f(x)e^{-2\pi i x\cdot z}\,dx$ for $j=1,2$, and the restriction of $F$ to $\mathbb R^2$ is the compact-support Fourier transform in the stated line-normal convention. The proof uses no Countable Choice.

## Statement references

[[def-ip-2d-radon-transform|Compact-support Fourier transform convention]]

[Mikko Salo, On geometric inverse problems and microlocal analysis, §2.1](https://users.jyu.fi/~salomi/pub/RICAM_notes_v1.pdf)

[Venkataswaran P. Krishnan and Eric Todd Quinto, Microlocal Analysis in Tomography, §1.3.2](https://math.tifrbng.res.in/~vkrishnan/Papers/Microlocal_Analysis_Tomography.pdf)

## Facts & Assumptions

**Given:** A compactly supported smooth complex function $f$ on $\mathbb R^2$, a rectangle containing its support, and a complex frequency $z\in\mathbb C^2$.

[F1] [[def-ip-2d-radon-transform]]: the compact-support Fourier transform uses $e^{-2\pi i x\cdot\xi}$ and is defined by a compact-support Riemann integral.

[F2] [[thm-continuous-on-a-rectangle-is-riemann-integrable]]: each continuous real function on a nondegenerate closed rectangle is Riemann integrable; apply this to real and imaginary parts.

[F3] [[thm-complex-exponential-is-entire-with-derivative-itself]]: the complex exponential is entire with derivative itself, so $(e^w-1)/w\to1$ as $w\to0$.

[F4] [[thm-multidimensional-integral-properties]]: the Riemann integral is linear and its absolute-value estimate bounds an integral by the rectangle volume times a uniform bound; for complex functions apply the real estimate to both components.

[F5] [[def-complex-differentiability-holomorphic-and-entire]]: a function complex differentiable at every point of $\mathbb C$ is entire.

## Proof

1.1 Choose a nondegenerate closed rectangle $B$ containing $\operatorname{supp}f$. For every $z\in\mathbb C^2$, the integrand $x\mapsto f(x)e^{-2\pi i x\cdot z}$ is continuous on $B$, so [F2] makes its real and imaginary parts Riemann integrable. It vanishes outside $\operatorname{supp}f$; hence enlarging $B$ changes the integral only by adding regions on which the integrand is zero. This proves existence and independence of the containing rectangle. [F1, F2, given, choose]

1.2 Fix $j\in\{1,2\}$, fix the other complex coordinate, and let $h\in\mathbb C\setminus\{0\}$. By [F4], the coordinate difference quotient is the integral over $B$ of $f(x)e^{-2\pi i x\cdot z}(e^{-2\pi i x_jh}-1)/h$. The coordinate $x_j$ is bounded on $B$; [F3] therefore makes $(e^{-2\pi i x_jh}-1)/h$ converge uniformly on $B$ to $-2\pi i x_j$ as $h\to0$. Multiplication by the fixed bounded continuous factor $f(x)e^{-2\pi i x\cdot z}$ preserves uniform convergence, and [F4] passes the real and imaginary integrals to their limits. Thus the coordinate derivative exists and is the displayed integral. Since the other coordinate and the point were arbitrary, every coordinate slice is complex differentiable everywhere. [F2, F3, F4, given]

2.1 By [F5], each coordinate slice is entire. At real $z=\xi$, the defining integral is exactly the compact-support Fourier integral of [F1], so $F(\xi)=\widehat f(\xi)$. This proves all claims without using a Lebesgue/Riemann identification theorem or Countable Choice. [F1, F5, step 1.1, step 1.2] ∎
