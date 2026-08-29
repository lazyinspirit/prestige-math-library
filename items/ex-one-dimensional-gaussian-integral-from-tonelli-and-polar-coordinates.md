---
id: ex-one-dimensional-gaussian-integral-from-tonelli-and-polar-coordinates
kind: example
title: "Tonelli and the plane polar formula give int_R e^{-x^2} dx = sqrt(pi)"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tonelli-theorem-for-sigma-finite-product-spaces, lem-plane-gaussian-integral-in-polar-coordinates]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Proposition 2.53"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

Let
$$I:=\int_{\mathbb R} e^{-x^2}\,dx.$$
Then $I=\sqrt{\pi}$.

## Facts & Assumptions

**Given:** The nonnegative function $x \mapsto e^{-x^2}$ on $\mathbb R$.

[L1] Tonelli's theorem applies to nonnegative functions on $\mathbb R^2$. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

[L2] The plane Gaussian integral equals $\pi$. ([[lem-plane-gaussian-integral-in-polar-coordinates]])

## Verification

**Proof technique:** direct.

1.1 Since $e^{-x^2}e^{-y^2}=e^{-(x^2+y^2)}$ is nonnegative, Tonelli gives $$I^2 = \int_{\mathbb R}\int_{\mathbb R} e^{-(x^2+y^2)}\,dy\,dx.$$ [L1]

2.1 By [L2], the double integral in step 1.1 is $\pi$. Since $I \ge 0$, it follows that $I^2=\pi$ and hence $I=\sqrt{\pi}$. [L2, step 1.1] ∎
