---
id: ex-tgr-finite-bath-stabilization
kind: example
title: "Finite bath can stabilize negative heat capacity exchange"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - lem-tgr-finite-bath-exchange-stability
dependency_roles:
  lem-tgr-finite-bath-exchange-stability: mathematical-premise
justified_by: []
aliases: []
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
proof_strategy: direct
verification:
  precheck: pass
dependency_level: 4
---

## Example

Take a negative-capacity subsystem at energy $E_*$ with Gibbs-volume temperature $T_*>0$ and capacity $C_G(E_*)<0$, as in [[lem-tgr-finite-bath-exchange-stability]]. Set $C_b=|C_G(E_*)|/2$. For any $E_0\in\mathbb R$, reference temperature $T_{\mathrm{ref}}>0$, and additive entropy constant $S_0$, take
$$S_b(E_b)=C_b\log\left(\frac{E_b-E_0}{C_bT_{\mathrm{ref}}}\right)+S_0,\qquad E_b>E_0,$$
and choose $E_b=E_0+C_bT_*$. The argument of the logarithm is dimensionless.

## Facts & Assumptions

**Given:** A negative-capacity finite subsystem at common temperature $T_*$ and the selected finite-bath exchange model.

[F1] For the specified finite-bath entropy and exchange law, $0<C_b<|C_G|$ gives strict negative combined-entropy curvature and local exponential attraction under $\dot x=L S_{\mathrm{tot}}'(x)$. ([[lem-tgr-finite-bath-exchange-stability]])

## Verification

1.1 Differentiating the displayed bath entropy gives $S_b'(E_b)=C_b/(E_b-E_0)$, so $T_b=1/S_b'(E_b)=(E_b-E_0)/C_b$ and $dE_b/dT_b=C_b$. The chosen $E_b$ makes $T_b=T_*$. [given, algebra]

2.1 Since $C_b=|C_G|/2$, the reciprocal-capacity sum is $1/C_G+1/C_b=-1/|C_G|+2/|C_G|=1/|C_G|>0$. At the matched-temperature critical point, [F1] gives
$$S_{\mathrm{tot}}''=-\frac1{T_*^2}\left(\frac1{C_G}+\frac1{C_b}\right) =-\frac1{T_*^2|C_G|}<0.$$
Thus the combined entropy has a strict local maximum in this exchange direction. [F1, step 1.1, algebra]

3.1 The selected effective law $\dot x=L S_{\mathrm{tot}}'(x)$ has nonnegative entropy production and exponentially attracts this local maximum by [F1]. This is a constructed mathematical reservoir model, not empirical data or a generic gravitational stability conclusion. [F1, step 2.1] ∎
