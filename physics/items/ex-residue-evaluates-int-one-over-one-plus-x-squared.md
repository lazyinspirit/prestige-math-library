---
id: ex-residue-evaluates-int-one-over-one-plus-x-squared
kind: example
title: "The integral of 1 / (1 + x^2) over the real line is pi"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-residue-evaluation-rational-real-integrals]
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
    - title: "R. Howell and J. Mathews, Complex Analysis, Ch. 8 §8.3"
      url: "https://complexanalysis.org/web/ch_residue.html"
pipeline_run: null
---

## Example

$\int_{-\infty}^{\infty}\frac{dx}{1+x^2}=\pi.$

## Facts & Assumptions

**Given:** The rational function $R(z)=1/(1+z^2)$.

[L1] A rational function with no real poles and a two-degree denominator gap is evaluated by the residues of its upper-half-plane poles ([[thm-residue-evaluation-rational-real-integrals]]).

## Verification

**Proof technique:** computation.

1.1 The only pole of $R$ in the upper half-plane is $i$, and it is simple with $\operatorname{Res}(R,i)=\lim_{z\to i}\frac{z-i}{(z-i)(z+i)}=\frac{1}{2i}.$ [given, algebra]

2.1 Applying [L1] gives $\int_{-\infty}^{\infty}\frac{dx}{1+x^2} =2\pi i\cdot \frac{1}{2i} =\pi.$ [step 1.1, L1] ∎
