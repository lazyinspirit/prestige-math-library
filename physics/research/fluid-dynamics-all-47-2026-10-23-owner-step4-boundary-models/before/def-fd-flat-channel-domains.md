---
id: def-fd-flat-channel-domains
kind: definition
title: "Flat periodic and infinite channel domains"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2, §§3.2.1–3.2.3"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pending
---

## Definition

Fix lengths $L_1,L_2>0$ and width $h>0$. Define the periodic channel
$$\Omega_{\mathrm{per}}=(\mathbb R/L_1\mathbb Z)\times(0,h)\times(\mathbb R/L_2\mathbb Z)$$
and the infinite channel
$$\Omega_{\infty}=\mathbb R\times(0,h)\times\mathbb R.$$
Both have the product Euclidean metric. On $\Omega_{\mathrm{per}}$, the first and third coordinates are periodic quotient coordinates with periods $L_1$ and $L_2$; differential operators are the ordinary coordinate operators applied to periodic lifts. On $\Omega_{\infty}$, all three coordinates are ordinary real coordinates. The closures add the two wall faces at $y=0$ and $y=h$, and no other spatial boundary is imposed. A vector field is $C^\infty$ up to these walls when it is smooth in the interior and every spatial derivative of every order extends continuously to both faces on each compact coordinate patch. Its homogeneous no-slip boundary condition is $u=0$ on the two wall faces; prescribed wall velocity $g$ means the trace condition $u=g$. The definition imposes no decay or other condition at infinity on $\Omega_{\infty}$; such conditions must be stated separately.

## Definition references

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.2.1–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

