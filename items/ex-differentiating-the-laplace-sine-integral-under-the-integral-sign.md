---
id: ex-differentiating-the-laplace-sine-integral-under-the-integral-sign
kind: example
title: "Differentiating $\\int_0^{\\infty} e^{-tx}\\sin x\\,dx$ under the integral sign"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-differentiation-under-the-integral-sign]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.27"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Example

For
$$F(t):=\int_0^\infty e^{-tx}\sin x\,dx \qquad (t>0),$$
differentiation under the integral sign is legal, and
$$F'(t)=-\int_0^\infty x e^{-tx}\sin x\,dx.$$

## Facts & Assumptions

**Given:** The parameter integral $F(t)$ for $t>0$.

[L1] Differentiation under the integral sign is valid under an integrable dominating bound for the parameter derivative ([[thm-differentiation-under-the-integral-sign]]).

## Verification

**Proof technique:** direct.

1.1 Fix a compact interval $[a,b]\subset(0,\infty)$. For $$f(x,t):=e^{-tx}\sin x,$$ one has $$\frac{\partial f}{\partial t}(x,t)=-xe^{-tx}\sin x,$$ so $$\left|\frac{\partial f}{\partial t}(x,t)\right|\le xe^{-ax}\qquad(t\in[a,b]).$$ [given, construct, algebra]


2.1 The function $x\mapsto xe^{-ax}$ is integrable on $[0,\infty)$, so [L1] applies on every compact parameter interval and yields $$F'(t)=-\int_0^\infty x e^{-tx}\sin x\,dx.$$ This is exactly the advertised differentiation step. [step 1.1, L1] ∎
