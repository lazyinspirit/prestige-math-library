---
id: ex-residue-evaluates-int-one-over-one-plus-x-fourth
kind: example
title: "The integral of 1 / (1 + x^4) over the real line is pi over sqrt(2)"
status: draft
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

$\int_{-\infty}^{\infty}\frac{dx}{1+x^4}=\frac{\pi}{\sqrt2}.$

## Facts & Assumptions

**Given:** The rational function $R(z)=1/(1+z^4)$.

[L1] The rational residue theorem evaluates the real integral by the upper-half-plane residues ([[thm-residue-evaluation-rational-real-integrals]]).

## Verification

**Proof technique:** computation.

1.1 The poles of $R$ in the upper half-plane are $a_1=e^{i\pi/4}$ and $a_2=e^{3i\pi/4}$, and they are simple. Since $(z^4+1)'=4z^3$, $\operatorname{Res}(R,a_j)=\frac{1}{4a_j^3}\qquad(j=1,2).$ [given, algebra]

2.1 Their sum is $\frac14\left(e^{-3i\pi/4}+e^{-9i\pi/4}\right) =\frac14\left(e^{-3i\pi/4}+e^{-i\pi/4}\right) =-\frac{i}{2\sqrt2}.$ [step 1.1, algebra]

3.1 Therefore [L1] gives $\int_{-\infty}^{\infty}\frac{dx}{1+x^4} =2\pi i\left(-\frac{i}{2\sqrt2}\right) =\frac{\pi}{\sqrt2}.$ [step 2.1, L1] ∎
