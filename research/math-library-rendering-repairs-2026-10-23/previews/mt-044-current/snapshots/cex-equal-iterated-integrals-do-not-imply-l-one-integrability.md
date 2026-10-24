---
id: cex-equal-iterated-integrals-do-not-imply-l-one-integrability
kind: counterexample
title: "Equal iterated integrals still do not imply product integrability"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [cex-fubini-fails-without-l-one-integrability, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Exercise 55(a)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement refuted

If both iterated integrals of a function exist and are equal, then the function
must belong to $L^1(\mu \times \nu)$.

## Counterexample

**Proof technique:** direct.

Let
$$f(x,y):=\frac{x^2-y^2}{(x^2+y^2)^2}$$
on $(0,1)^2$, and define $g$ on
$
((0,1)\times\{0,1\}) \times (0,1)
$
by
$$g((x,0),y):=f(x,y),\qquad g((x,1),y):=f(y,x).$$
Give $(0,1)\times\{0,1\}$ the product of Lebesgue measure with counting measure
on $\{0,1\}$, and give $(0,1)$ Lebesgue measure.

## Facts & Assumptions

**Given:** The function $g$ above.

[L1] The function $f$ from [[cex-fubini-fails-without-l-one-integrability]] has two existing iterated integrals equal to $\pi/4$ and $-\pi/4$, and it is not in $L^1$.

## Verification

1.1 The first copy of $g$ contributes the two iterated values of $f$, while the second copy contributes the same values with the order reversed. Therefore both iterated integrals of $g$ exist and are equal to $$\pi/4+(-\pi/4)=0.$$ [L1]

2.1 The absolute integral of $g$ is the sum of the absolute integrals of the two copies, so it is still infinite because each copy carries the non-$L^1$ singularity of [L1]. Thus equal iterated integrals do not imply $L^1$-integrability. [L1, step 1.1] ∎
