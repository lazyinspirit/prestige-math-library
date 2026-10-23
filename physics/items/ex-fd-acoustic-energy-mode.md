---
id: ex-fd-acoustic-energy-mode
kind: example
title: "A longitudinal acoustic mode with constant transverse flow conserves weighted energy"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - thm-fd-global-linear-acoustics
  - def-countable-choice
dependency_roles:
  thm-fd-global-linear-acoustics: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 3, §4.4.4"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
      locator: "PDF pp. 150–153; the example is an exact mode of the linear tangent system, with its normalized-torus calculation given here."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Example

Assume Countable Choice, $\rho_*>0$, and $c_*>0$. On the torus $Q_2=\mathbb R^2/(2\pi\mathbb Z)^2$ with normalized measure $d\mu=(2\pi)^{-2}dx$, let $e_1,e_2$ be the standard basis of $\mathbb R^2$ and choose $A,B,W\in\mathbb R$. Put
$$Z(t)=A\cos(c_*t)-\frac{\rho_*B}{c_*}\sin(c_*t),\qquad V(t)=B\cos(c_*t)+\frac{c_*A}{\rho_*}\sin(c_*t),$$
$$z(t,x)=Z(t)\cos x_1,\qquad v(t,x)=V(t)\sin x_1\,e_1+W e_2.$$
Then $(z,v)$ solves the linear acoustic tangent system $z_t+\rho_*\operatorname{div}v=0$, $v_t+(c_*^2/\rho_*)\nabla z=0$ for all $t\in\mathbb R$, with initial data $z(0,x)=A\cos x_1$ and $v(0,x)=B\sin x_1e_1+We_2$. Its weighted energy is constant and equals
$$\|v(t)\|_{L^2(Q_2)}^2+\frac{c_*^2}{\rho_*^2}\|z(t)\|_{L^2(Q_2)}^2=W^2+\frac12\left(B^2+\frac{c_*^2}{\rho_*^2}A^2\right).$$

## Example references

[[thm-fd-global-linear-acoustics]]

[Tong, *Fluid Mechanics*, Chapter 3, §4.4.4](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

## Facts & Assumptions

**Given:** $\rho_*>0$, $c_*>0$, real amplitudes $A,B,W$, and the normalized torus conventions in the Example.

[F1] [[thm-fd-global-linear-acoustics]]: on the normalized periodic torus the system $z_t+\rho_*\operatorname{div}v=0$, $v_t+(c_*^2/\rho_*)\nabla z=0$ has a unique global smooth solution, and $\|v\|_2^2+(c_*^2/\rho_*^2)\|z\|_2^2$ is conserved.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

## Proof

1.1 Differentiate the amplitudes: $Z'=-\rho_*V$ and $V'=(c_*^2/\rho_*)Z$. Thus $z_t=-\rho_*V\cos x_1$ and $\operatorname{div}v=V\cos x_1$, while $v_t=V'\sin x_1e_1$ and $\nabla z=-Z\sin x_1e_1$. Substitution gives both equations of the stated linear system. At $t=0$, $Z(0)=A$ and $V(0)=B$, so the initial fields are exactly those in the Example. [given, algebra]

2.1 By [F1], the fields from step 1.1 are the unique global smooth solution with these data, and their weighted energy is the stated norm sum. [given, A1, F1, step 1.1]

3.1 Under the stated normalized measure, $\int_{Q_2}\sin^2x_1\,d\mu=\int_{Q_2}\cos^2x_1\,d\mu=1/2$ and $\int_{Q_2}1\,d\mu=1$. Since $e_1\perp e_2$, the energy in step 2.1 is $W^2+\frac12(V^2+(c_*^2/\rho_*^2)Z^2)$. Differentiating the bracket gives $2VV'+2(c_*^2/\rho_*^2)ZZ'=2(c_*^2/\rho_*)VZ-2(c_*^2/\rho_*)ZV=0$. Its value at $t=0$ is $B^2+(c_*^2/\rho_*^2)A^2$, proving the asserted constant. [given, step 2.1, algebra]

4.1 The explicit fields in step 1.1 have only smooth sine, cosine, and constant factors, so they are smooth for every real time; the formula and energy calculation therefore verify the complete Example. [given, step 1.1, step 3.1] ∎