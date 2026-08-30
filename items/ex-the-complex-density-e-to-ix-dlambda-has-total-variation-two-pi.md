---
id: ex-the-complex-density-e-to-ix-dlambda-has-total-variation-two-pi
kind: example
title: "The complex density e^{ix} dlambda has total variation 2pi"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.4"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Example

On $\mathcal B([0,2\pi])$, define
$$\nu(E):=\int_E e^{ix}\,d\lambda.$$
Then $\nu$ is a complex measure and
$$|\nu|([0,2\pi])=\int_0^{2\pi}|e^{ix}|\,dx=2\pi.$$

## Facts & Assumptions

**Given:** The density $h(x)=e^{ix}$ on $[0,2\pi]$.

[L1] A complex $L^1$ density $h$ defines a complex measure with
$|\nu|(E)=\int_E |h|\,d\mu$. ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]])

[A1] One has $|e^{ix}|=1$ for every real $x$.

## Verification

**Proof technique:** direct.

1.1 The function $h(x)=e^{ix}$ is bounded on the finite interval $[0,2\pi]$, [L1, A1]
so it lies in $L^1(\lambda)$. Therefore [L1] makes
$\nu(E)=\int_E e^{ix}\,d\lambda$ a complex measure.

2.1 Applying [L1] and then [A1] on the whole interval gives [L1, A1, step 1.1] ∎
$$|\nu|([0,2\pi])=\int_0^{2\pi}|e^{ix}|\,dx=\int_0^{2\pi}1\,dx=2\pi.$$
