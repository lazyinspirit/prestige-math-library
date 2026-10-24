---
id: ex-na-interior-stationary-phase-boundary-term
kind: example
title: An interior stationary point adds a Fresnel-scale term
status: published
origin: pipeline
dependency_level: 5
deps:
  - thm-na-single-interior-stationary-phase-expansion
  - thm-na-nonstationary-oscillatory-integration-by-parts
  - lem-complex-conjugation-and-modulus-laws
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses explicit finite formulas
  and the cited calculus results."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iv)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §4"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

For $f(x)=1$, $g(x)=x^2/2$ on $[-1,1]$, and $\omega\ge1$, the integral has an interior contribution of order $\omega^{-1/2}$ in addition to its order-$\omega^{-1}$ endpoint term:
$$I_\omega(1,g;[-1,1])=\sqrt{\frac{2\pi}{\omega}}e^{i\pi/4}+\frac{2e^{i\omega/2}}{i\omega}+R_\omega,\qquad |R_\omega|\le C\omega^{-3/2}.$$
The nonstationary expansion cannot be applied on the full interval because $g'(0)=0$.

## Facts & Assumptions

**Given:** $f(x)=1$, $g(x)=x^2/2$ on $[-1,1]$, and $\omega\ge1$.

[F1] [[thm-na-single-interior-stationary-phase-expansion]]: a single simple interior stationary point contributes $f(x_0)e^{i\omega g(x_0)}\sqrt{2\pi/|\omega g''(x_0)|}e^{i\operatorname{sgn}(\omega g''(x_0))\pi/4}$, with the endpoint term and an $O(|\omega|^{-3/2})$ remainder.

[F2] [[thm-na-nonstationary-oscillatory-integration-by-parts]]: the nonstationary branch requires $|g'|\ge c>0$ on the whole interval to which it is applied.

[F3] The complex modulus is subadditive, $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Verification

1.1 Here $g'(x)=x$, $g''(0)=1$, and $g(\pm1)=1/2$. Applying [F1] at $x_0=0$ gives the stationary term $\sqrt{2\pi/\omega}e^{i\pi/4}$, while the endpoint bracket is $\frac{1}{i\omega}\left(\frac{e^{i\omega/2}}{1}-\frac{e^{i\omega/2}}{-1}\right)=\frac{2e^{i\omega/2}}{i\omega}.$ The remainder bound is the one in [F1]. [given, F1, algebra]

2.1 Since $g'(0)=0$, no $c>0$ satisfies [F2] on $[-1,1]$. By [F3], the endpoint term and remainder together are bounded by $2/\omega+C\omega^{-3/2}$, both smaller than the stationary term's magnitude $\sqrt{2\pi/\omega}$ by a factor tending to zero. Thus the leading scale is $\omega^{-1/2}$, not the nonstationary integer-power expansion. [given, F1, F2, F3, step 1.1, algebra] ∎
