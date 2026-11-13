---
id: def-se-hum-map
kind: definition
domain: mathematics
title: Scale Riesz map and free HUM operator
status: published
deps:
  - def-se-dirichlet-scale
  - lem-se-positive-spectral-scale-contract
  - prop-se-scale-flow
  - prop-se-cutoff-multipliers
  - def-se-internal-systems
  - prop-se-forced-linear-wellposedness
  - def-se-foundation-time-function-spaces
  - math:def-axiom-of-choice
dependency_roles:
  def-se-dirichlet-scale: mathematical-premise
  lem-se-positive-spectral-scale-contract: mathematical-premise
  prop-se-scale-flow: mathematical-premise
  prop-se-cutoff-multipliers: mathematical-premise
  def-se-internal-systems: mathematical-premise
  prop-se-forced-linear-wellposedness: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
dependency_level: 9
---

## Definition

Assume the Axiom of Choice. Let $\Omega$ be the smooth connected exterior domain, let $A=I-\Delta_D$ and let $H_D^r=H_D^r(\Omega)$ be its Dirichlet spectral scale. The $L^2(\Omega)$ inner product is linear in its first argument. Let $T>0$, let $\varphi$ be the real control cutoff, and write $W(t)=e^{it\Delta_D}$.

For $s\in[-2,2]$ put $\sigma=-s$ and define the scale Riesz map $\Lambda_s=A^s:H_D^s\to H_D^{-s}$, with inverse $\Lambda_s^{-1}=A^{-s}:H_D^\sigma\to H_D^s$. The notation denotes the consistent extensions of the spectral powers. Write $\langle f,g\rangle_{s,-s}$ for the pivot pairing of $H_D^s$ with $H_D^{-s}$, linear in $f$ and conjugate-linear in $g$. Thus $\langle\Lambda_s^{-1}g,g\rangle_{s,-s}=\|g\|_{H_D^\sigma}^2$ for $g\in H_D^\sigma$.

For $v_0\in H_D^\sigma$, set $v(t)=W(t)v_0$ and $h(t)=-i\Lambda_s^{-1}(\varphi v(t))$. Let $z\in C([0,T];H_D^s)$ be the unique backward mild solution of $i\partial_tz+\Delta_Dz=\varphi h$ with $z(T)=0$. Define the free Hilbert uniqueness method (HUM) operator $S:H_D^\sigma\to H_D^s$ by $Sv_0=z(0)$.

## Definition references

[[def-se-dirichlet-scale]]

[[lem-se-positive-spectral-scale-contract]]

[[prop-se-scale-flow]]

[[prop-se-cutoff-multipliers]]

[[def-se-internal-systems]]

[[prop-se-forced-linear-wellposedness]]

[[def-se-foundation-time-function-spaces]]

[[math:def-axiom-of-choice]]

## Justification

The geometry, shifted Dirichlet Laplacian, scale and pivot convention are those of [[def-se-dirichlet-scale]], under the Choice assumption recorded in [[math:def-axiom-of-choice]]. By [[lem-se-positive-spectral-scale-contract]], $A^{-r/2}$ is an onto isometry from $H_D^a$ to $H_D^{a+r}$ for all real $a,r$. Taking $(a,r)=(s,-2s)$ and $(-s,2s)$ gives the two mutually inverse maps above. On the common spectral core, the pivot pairing satisfies $\langle f,g\rangle_{s,-s}=\langle A^{s/2}f,A^{-s/2}g\rangle_2$; the scale isometries extend this identity continuously to all $f\in H_D^s$ and $g\in H_D^{-s}$. Substituting $f=A^{-s}g$ gives the displayed norm identity. This convention also covers negative $s$; it does not treat arbitrary negative-order elements as pointwise functions.

By [[prop-se-scale-flow]], $v\in C([0,T];H_D^\sigma)$. The cutoff in [[def-se-internal-systems]] acts boundedly on this space by [[prop-se-cutoff-multipliers]], and the inverse scale map is bounded; consequently $h\in C([0,T];H_D^s)$ and in particular $h\in L^1(0,T;H_D^s)$. The backward existence and uniqueness result of [[prop-se-forced-linear-wellposedness]] therefore defines a unique $z$ and a unique value $z(0)$. Each operation in the construction is complex-linear and bounded, so $S$ is a bounded complex-linear map. This definition alone asserts neither its coercivity nor its invertibility.

## Source notes

The original article is cited for the notation and construction in the proof of Theorem 3.6 and (3.15), on PDF page 12. The justification uses the independent suppliers above; the article is not used as proof of its own construction.
