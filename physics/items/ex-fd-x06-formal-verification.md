---
id: ex-fd-x06-formal-verification
kind: example
title: "Exterior sphere Stokes solution, force and uniqueness — formal worked field"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x02-examples
dependency_level: 2
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-fd-x06
dependency_roles:
  thm-fd-x06: mathematical-premise
scope: "The theorem's explicit exterior Stokes field for a unit sphere and unit far-field velocity along the z-axis, including its formal stress resultant and applicable decay-class uniqueness."
verification:
  precheck: pass
---

## Example

Assume the indexed axiom of countable choice $\mathrm{AC}_\omega$: for every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets there is a function $f$ on $\mathbb N$ with $f(n)\in X_n$ for every $n$. Take $a=\mu=\rho_0=1$, $p_\infty=0$, and $U=e_z=(0,0,1)$ on $r>1$. With $s=z$, the exact field and pressure are

$$u=A(r)e_z+B(r)zx,\qquad A(r)=1-\frac{3}{4r}-\frac{1}{4r^3},\qquad B(r)=-\frac{3}{4r^3}+\frac{3}{4r^5},\qquad p=-\frac{3z}{2r^3}.$$

It has zero velocity on the unit sphere, tends uniformly to $e_z$, and its formal stress resultant with $n=x$ is $6\pi e_z$. The theorem's uniqueness conclusion applies among fields in its stated uniform decay class.

## Example references

[[thm-fd-x06]]

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$ as formulated in the Example, and work on the exterior $r>1$ with constant parameters and far-field/boundary data in [A1]. This supplies the axiom used in the supplier's bounded-annulus proof.

[A1] Assume $\mathrm{AC}_\omega$ as formulated in the Example. Set $a=\mu=\rho_0=1$, $\nu=1$, $p_\infty=0$, $U=e_z$, with no-slip trace $u=0$ at $r=1$ and uniform limits $u\to e_z$, $p\to0$.

[F1] [[thm-fd-x06]]: for arbitrary $a,\mu,\rho_0>0$ and $U$, the stated explicit exterior Stokes field has zero sphere trace, constant far field, formal resultant $6\pi\mu aU$, and is unique in the explicitly stated decay class, assuming $\mathrm{AC}_\omega$ for the annular divergence theorem.

## Verification

1.1 Under [A1], $s=U\cdot x=z$ and the general coefficients in [F1] reduce to the displayed $A,B,p$. At $r=1$, $A=1-3/4-1/4=0$ and $B=-3/4+3/4=0$, so $u=0$. As $r\to\infty$, $A\to1$ and $Bzx=O(r^{-1})$ uniformly because $|z||x|\le r^2$ and $B=O(r^{-3})$; hence $u\to e_z$. [given, A1, F1, algebra]

2.1 The constants meet the positivity and regularity hypotheses of [F1], and [A1] supplies its $\mathrm{AC}_\omega$ hypothesis. Its exact resultant specializes to $6\pi(1)(1)e_z=6\pi e_z$, and its uniqueness statement applies to every competing classical solution with the same data and decay bounds. This is a Stokes-model conclusion, not a finite-Reynolds-number estimate. [given, A1, F1, step 1.1, algebra] ∎
