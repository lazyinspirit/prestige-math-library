---
id: "ex-the-de-rham-map-on-the-angular-form"
kind: "example"
title: "The de Rham map on the angular form"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-de-rham-integration-cochain-map","thm-sine-and-cosine-derivatives","cor-trigonometric-parity-and-pythagorean-identity","thm-chain-rule","prop-degree-of-the-power-map-on-the-circle"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem, §3, PDF pp.5–7
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Example

On the counterclockwise unit circle $S^1\subset\mathbb R^2$, let
$$\alpha=\frac{-y\,dx+x\,dy}{2\pi}.$$
For the positively oriented once-around loop $\gamma(t)=(\cos 2\pi t,\sin 2\pi t)$, $0\le t\le1$, the de Rham integration cochain satisfies $I_{S^1}^1(\alpha)(\gamma)=1$.

## Facts & Assumptions

**Given:** The circle, form and loop in the example.

[F1] [[def-de-rham-integration-cochain-map]] evaluates a one-form cochain by integrating its pullback along the supplied smooth path.

[F2] [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], and [[thm-chain-rule]] give the derivatives of the two coordinate functions and $\sin^2s+\cos^2s=1$.

[F3] [[prop-degree-of-the-power-map-on-the-circle]] computes the degree of the $m$-fold power map as $m$ for every integer $m$.

## Verification

1.1 Differentiation using [F2] gives $x'(t)=-2\pi\sin(2\pi t)$ and $y'(t)=2\pi\cos(2\pi t)$. Hence $$\gamma^*(-y\,dx+x\,dy)=\bigl(-y(t)x'(t)+x(t)y'(t)\bigr)dt=2\pi\bigl(\sin^2(2\pi t)+\cos^2(2\pi t)\bigr)dt=2\pi\,dt,$$ and therefore $\gamma^*\alpha=dt$. [F2, given]

2.1 Therefore [F1] gives $$I_{S^1}^1(\alpha)(\gamma)=\int_0^1dt=1.$$ More generally, composing with $P_m(z)=z^m$ gives the lift $t\mapsto mt$ and $P_m^*\alpha=m\alpha$, so the same calculation yields $I^1(\alpha)(P_m\gamma)=m$, in agreement with $\deg(P_m)=m$ from [F3], including negative $m$ and $m=0$. [F1, F3, step 1.1]

3.1 Reversing the loop changes the value to $-1$; the constant loop has value zero. Both endpoints of $[0,1]$ map to the same circle point, so the path is a cycle and there is no seam contribution. The calculation uses explicit maps and no choice principle. [F1, step 1.1, step 2.1] ∎
