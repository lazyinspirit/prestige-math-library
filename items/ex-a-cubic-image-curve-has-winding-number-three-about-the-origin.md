---
id: ex-a-cubic-image-curve-has-winding-number-three-about-the-origin
kind: example
title: "A cubic image curve winds three times around the origin"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-argument-principle-as-image-winding-number]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Example

Let $\gamma(t)=2e^{it}$ for $0\le t\le2\pi$ and let $f(z)=z^3-1$. Then the
image contour $f\circ\gamma$ winds three times around the origin:

$$n(f\circ\gamma,0)=3.$$

## Facts & Assumptions

**Given:** The circle $\gamma(t)=2e^{it}$ and the cubic polynomial $f(z)=z^3-1$.

[L1] The logarithmic-derivative integral equals the winding number of the image
contour, and on a null-homologous contour it also equals the zero-minus-pole
count ([[thm-argument-principle-as-image-winding-number]]).

## Verification

**Proof technique:** direct.

1.1 The three zeros of $f$ are the cube roots of unity, so they all lie in $|z|<2$. The function has no poles. [given, algebra]

2.1 Apply [L1] to the circle $\gamma$. Since $\gamma$ is null-homologous in $\mathbb C$ and encloses all three zeros of $f$, the argument-principle count is $3$. Therefore $n(f\circ\gamma,0)=3$. [step 1.1, L1] ∎
