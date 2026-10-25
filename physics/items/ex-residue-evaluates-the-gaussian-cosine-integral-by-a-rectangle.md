---
id: ex-residue-evaluates-the-gaussian-cosine-integral-by-a-rectangle
kind: example
title: "A rectangle contour evaluates the Gaussian cosine integral"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-residue-contours,
       thm-eulers-formula,
       thm-residue-theorem-null-homologous-cycle,
       thm-gaussian-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Example

For every real $b$,
$\int_0^\infty e^{-x^2}\cos(2bx)\,dx=\frac{\sqrt\pi}{2}e^{-b^2}.$

## Facts & Assumptions

**Given:** A real number $b$ and the entire function $F(z)=e^{-z^2}e^{2ibz}$.

[L1] An entire function has zero integral on every rectangle contour ([[thm-residue-theorem-null-homologous-cycle]]).

[L2] The Gaussian integral is $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$ ([[thm-gaussian-integral]]).

## Verification

**Proof technique:** computation.

1.1 Integrate $F$ around the rectangle with vertices [given, L1] $-T,T,T+ib,-T+ib$. Since $F$ is entire, makes the total integral $0$. The vertical sides vanish as $T\to\infty$ because $|F(x+iy)|=e^{-x^2+y^2-2by}$ and therefore decays like $e^{-T^2}$ there. [L1]

2.1 The top horizontal side is traversed from $T+ib$ to $-T+ib$ and therefore contributes $-e^{-b^2}\int_{-T}^{T}e^{-x^2}\,dx.$ Hence step 1.1 gives $\int_{-T}^{T}e^{-x^2}e^{2ibx}\,dx =e^{-b^2}\int_{-T}^{T}e^{-x^2}\,dx+o(1).$ [step 1.1, algebra]

3.1 Letting $T\to\infty$ and using [L2] yields $\int_{-\infty}^{\infty}e^{-x^2}e^{2ibx}\,dx =e^{-b^2}\sqrt\pi.$ Taking real parts and then using the evenness of $e^{-x^2}\cos(2bx)$ gives the half-line formula. [step 2.1, L2] ∎
