---
id: ex-residue-evaluates-sine-over-x-principal-value
kind: example
title: "The whole-line principal value of sin x / x is pi, so the half-line integral is pi / 2"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-cauchy-principal-value,
       def-standard-residue-contours,
       thm-residue-theorem-null-homologous-cycle,
       lem-indented-arc-residue-limit,
       cor-second-derivative-characterises-convexity]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.5"
      url: "https://complexanalysis.org/web/ch_residue.html"
pipeline_run: null
---

## Example

The principal value identity

$\operatorname{PV}\!\int_{-\infty}^{\infty}\frac{\sin x}{x}\,dx=\pi$

implies the classical half-line formula

$\int_0^\infty\frac{\sin x}{x}\,dx=\frac{\pi}{2}.$

## Facts & Assumptions

**Given:** The rational function $R(z)=1/z$ with an upper indentation at the origin.

[L1] The residue theorem applies to the upper semicircle contour with a small upper indentation at the simple pole $0$ ([[thm-residue-theorem-null-homologous-cycle]], [[def-standard-residue-contours]]).

[L2] The upper indentation contributes $-i\pi$ times the residue ([[lem-indented-arc-residue-limit]]).

[L3] Principal value on the whole line is the symmetric truncation from [[def-cauchy-principal-value]].

[L4] A twice-differentiable function with nonnegative second derivative is convex ([[cor-second-derivative-characterises-convexity]]).

## Verification

**Proof technique:** computation.

1.1 On the upper semicircle $z=Te^{it}$ one has $|e^{iz}|=e^{-T\sin t}$. Convexity of $-\sin t$ on $[0,\pi/2]$ gives $\sin t\ge2t/\pi$ there, and symmetry gives the corresponding bound on the other half. Hence $$\left|\int_{\gamma_T^+}\frac{e^{iz}}z\,dz\right|\le\int_0^\pi e^{-T\sin t}\,dt\le\frac\pi T,$$ so the outer arc tends to $0$. [L4, algebra]

2.1 Apply [L1] to the upper contour of radius $T$ with an upper indentation of radius $\varepsilon$ at $0$. The contour encloses no pole, while the residue of $e^{iz}/z$ at $0$ is $1$. Therefore the sum of the two punctured straight integrals, the indentation, and the outer arc is $0$. Letting $\varepsilon\downarrow0$ in this coupled symmetric truncation, then $T\to\infty$, [L2] and step 1.1 give $$\lim_{T\to\infty}\lim_{\varepsilon\downarrow0}\left(\int_{-T}^{-\varepsilon}\frac{e^{ix}}x\,dx+\int_{\varepsilon}^{T}\frac{e^{ix}}x\,dx\right)=i\pi.$$ [L1, L2, step 1.1, algebra]

3.1 The imaginary integrand $\sin x/x$ has the removable value $1$ at $0$ and is locally integrable on the real line, so the imaginary part of step 2.1 is exactly the whole-line principal value in [L3]. Hence $$\operatorname{PV}\!\int_{-\infty}^{\infty}\frac{\sin x}{x}\,dx=\pi.$$ Since $\sin x/x$ is even, the symmetric principal value is twice the half-line integral, so $\int_0^\infty\frac{\sin x}{x}\,dx=\frac{\pi}{2}$. [step 2.1, L3] ∎
