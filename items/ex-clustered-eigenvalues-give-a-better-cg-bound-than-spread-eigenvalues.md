---
id: ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues
kind: example
title: "Clustered eigenvalues give a visibly better CG condition-number bound than equally sized spread spectra"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-conjugate-gradient-chebyshev-bound-in-the-a-norm]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Example

Compare the Hermitian positive-definite matrices

$$A_{\mathrm{cl}}=\operatorname{diag}(9,10,11),\qquad A_{\mathrm{sp}}=\operatorname{diag}(1,10,100).$$

Both are $3\times3$, but the clustered spectrum of $A_{\mathrm{cl}}$ gives a
much sharper CG bound than the spread spectrum of $A_{\mathrm{sp}}$.

## Facts & Assumptions

**Given:** The two displayed Hermitian positive-definite matrices.

[L1] The CG error bound is
$$\|e_m\|_A\le 2\left(\frac{\sqrt{\kappa_2(A)}-1}{\sqrt{\kappa_2(A)}+1}\right)^m\|e_0\|_A$$
([[thm-conjugate-gradient-chebyshev-bound-in-the-a-norm]]).

## Verification
**Proof technique:** direct calculation.

1.1 The spectral condition numbers are $$\kappa_2(A_{\mathrm{cl}})=\frac{11}{9},\qquad \kappa_2(A_{\mathrm{sp}})=100.$$ So the contraction factors in [L1] are $$\theta_{\mathrm{cl}}=\frac{\sqrt{11/9}-1}{\sqrt{11/9}+1}=\frac{\sqrt{11}-3}{\sqrt{11}+3},$$ and $$\theta_{\mathrm{sp}}=\frac{\sqrt{100}-1}{\sqrt{100}+1}=\frac{9}{11}.$$ Moreover $\sqrt{11}<10/3$, so $\theta_{\mathrm{cl}}<1/18$. [L1, algebra]

2.1 At $m=2$, [L1] yields $$\|e_2\|_{A_{\mathrm{cl}}}\le 2\theta_{\mathrm{cl}}^2\|e_0\|_{A_{\mathrm{cl}}}<\frac{1}{162}\|e_0\|_{A_{\mathrm{cl}}},$$ whereas $$\|e_2\|_{A_{\mathrm{sp}}}\le 2\theta_{\mathrm{sp}}^2\|e_0\|_{A_{\mathrm{sp}}}=\frac{162}{121}\|e_0\|_{A_{\mathrm{sp}}}.$$ Thus the clustered eigenvalues give a visibly sharper theoretical CG estimate than the spread spectrum of the same size. [L1, step 1.1, algebra] ∎
