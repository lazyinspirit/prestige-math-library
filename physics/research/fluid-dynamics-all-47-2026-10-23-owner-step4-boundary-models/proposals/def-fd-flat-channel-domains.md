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
Both have the product Euclidean metric. On $\Omega_{\mathrm{per}}$, the first and third coordinates are periodic quotient coordinates with periods $L_1$ and $L_2$; differential operators are the ordinary coordinate operators applied to periodic lifts. On $\Omega_{\infty}$, all three coordinates are ordinary real coordinates. The closures add the two wall faces at $y=0$ and $y=h$, and no other spatial boundary is imposed. For either channel $\Omega$, let $\Gamma:=\partial\Omega$ denote these two wall faces. A steady velocity field with a classical wall trace is a continuous map $u:\overline\Omega\to\mathbb R^3$, with trace $u_\Gamma:=u|_\Gamma$; prescribed steady wall data are a continuous map $g:\Gamma\to\mathbb R^3$. A vector field is $C^\infty$ up to these walls when it is smooth in the interior and every spatial derivative of every order extends continuously to both faces on each compact coordinate patch. Its homogeneous no-slip boundary condition is $u_\Gamma=0$; prescribed wall velocity means $u_\Gamma=g$. For an evolution on a specified time interval $I\subseteq\mathbb R$, the corresponding trace convention uses continuous maps $u:I\times\overline\Omega\to\mathbb R^3$ and $g:I\times\Gamma\to\mathbb R^3$, with $u_\Gamma(t,x):=u(t,x)$ and the same trace equalities on $I\times\Gamma$; any additional time or spatial regularity and compatibility required by an evolution result are stated separately. These conventions assert no solution existence for prescribed data. The definition imposes no decay or other condition at infinity on $\Omega_{\infty}$; such conditions must be stated separately.

## Definition references

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.2.1–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

