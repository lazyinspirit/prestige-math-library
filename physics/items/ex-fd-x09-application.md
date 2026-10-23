---
id: ex-fd-x09-application
kind: example
title: Barotropic Kelvin and Bernoulli with exact hypotheses — worked interpretation
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-fd-px09-prediction
  - def-fd-x00
dependency_roles:
  pthm-fd-px09-prediction: physical-result
  def-fd-x00: formulation-prerequisite
physical_scope: Constructed exact barotropic Euler field with specified
  parameters; not an empirical claim about viscous fluids.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Mandre, Fluid Dynamics Lecture Notes
      url: https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch5.html
      locator: Chapter 5, §§5.2.1–5.2.2, incompressible Bernoulli context only; the
        chapter does not treat the barotropic/compressible result used here.
verification:
  precheck: pending
---

## Example

Choose $P(\rho)=4\,\mathrm{m^2\,s^{-2}}\rho$, $\Omega=1\,\mathrm{s^{-1}}$, $\rho_c=\rho_{\rm ref}=1\,\mathrm{kg\,m^{-3}}$, and an open cylinder with radius $R=2\,\mathrm m$, half-height $H=1\,\mathrm m$. The exact steady density is $\rho(r)=e^{r^2/(8\,\mathrm{m^2})}\,\mathrm{kg\,m^{-3}}$ and $u=\Omega(-y,x,0)$, with $x,y$ in metres. On a material circle of radius $1\,\mathrm m$, $\Gamma=2\pi\,\mathrm{m^2\,s^{-1}}$. Between $r=0$ and $r=1\,\mathrm m$, Bernoulli value changes by $1\,\mathrm{m^2\,s^{-2}}$; each circular streamline still has constant value.

## Example references

[Mandre, *Fluid Dynamics Lecture Notes*, Chapter 5, §§5.2.1–5.2.2, incompressible Bernoulli context only; the chapter does not treat the barotropic/compressible result used here](https://notes.shreyasmandre.com/fluid-dynamics-notes/Ch5.html)


## Facts & Assumptions

**Given:** $P=c^2\rho$ with $c=2\,\mathrm{m\,s^{-1}}$, $\Omega=1\,\mathrm{s^{-1}}$, $\rho_c=\rho_{\rm ref}=1\,\mathrm{kg\,m^{-3}}$, and the exact solid-rotation field.

[F1] [[pthm-fd-px09-prediction]]: circulation is $2\pi\Omega s^2$ and Bernoulli is a constant plus $\Omega^2r^2$ in this smooth barotropic Euler model.

[F2] [[def-fd-x00]]: for a closed piecewise-$C^1$ oriented curve, circulation is $\oint_\gamma u\cdot d\mathbf r=\int u(\gamma(s))\cdot\gamma'(s)\,ds$. Here the material circle in the $z=0$ plane is $X(t,\theta)=((1\,\mathrm m)\cos(\theta+\Omega t),(1\,\mathrm m)\sin(\theta+\Omega t),0)$ for $t\in\mathbb R$ seconds and $0\le\theta\le2\pi$, with $\Omega=1\,\mathrm{s^{-1}}$; $\partial_tX=u(t,X)$ and $\Gamma(t)=\int_0^{2\pi}u(t,X(t,\theta))\cdot\partial_\theta X(t,\theta)\,d\theta$.

## Proof

1.1 For the radius-one material circle $X$ in [F2], its circulation is $\Gamma(t)=\int_0^{2\pi}u(t,X(t,\theta))\cdot\partial_\theta X(t,\theta)\,d\theta=2\pi\Omega(1\,\mathrm m)^2=2\pi\,\mathrm{m^2\,s^{-1}}$. [given, F1, F2, algebra]

2.1 The Bernoulli difference from $r=0$ to $r=1\,\mathrm m$ is $1^2(1^2-0^2)=1\,\mathrm{m^2\,s^{-2}}$. It is a between-streamline difference; each circle keeps fixed $r$. [given, F1, step 1.1, algebra] ∎

