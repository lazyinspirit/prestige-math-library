---
id: ex-fd-x03-application
kind: example
title: "Finite-depth gravity-wave dispersion — worked interpretation"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01-examples
deps:
  - thm-fd-x03
dependency_roles:
  thm-fd-x03: mathematical-premise
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references: []
verification:
  precheck: pending
---

## Example

Take $h=1\,\mathrm m$, $g=\frac94\,\mathrm{m\,s^{-2}}$, $k=1\,\mathrm{m^{-1}}$, and $a=\frac1{10}\,\mathrm m$. Write $x_m=x/(1\,\mathrm m)$, $z_m=z/(1\,\mathrm m)$, and $t_s=t/(1\,\mathrm s)$ for the numerical coordinate values in SI units. Then $s=kh=1$, $\omega=\frac32\sqrt{\tanh(1)}\,\mathrm{s^{-1}}$, and the theorem's mode is

$$\theta=x_m-\frac32\sqrt{\tanh(1)}\,t_s,$$

$$\eta=\frac1{10}\,\mathrm m\,C(\theta),\qquad \phi=\frac{3}{20\sqrt{\tanh(1)}}\,\mathrm{m^2\,s^{-1}}\frac{\cosh(z_m+1)}{\cosh(1)}S(\theta).$$

Both comparison frequencies equal $\omega_{\rm sh}=\omega_{\rm deep}=\frac32\,\mathrm{s^{-1}}$. The exact relative errors are

$$\frac{\omega_{\rm sh}^2-\omega^2}{\omega_{\rm sh}^2}=1-\tanh(1),\quad 1-\frac{\omega}{\omega_{\rm sh}}=1-\sqrt{\tanh(1)},\quad \frac{\omega_{\rm deep}^2-\omega^2}{\omega_{\rm deep}^2}=1-\tanh(1).$$

They satisfy $0\le1-\tanh(1)\le1/3$, $0\le1-\sqrt{\tanh(1)}\le1/3$, and $0\le1-\tanh(1)\le2e^{-2}$ by the finite-depth theorem. The values are a formal parameter choice, not measured wave data.

## Example references

Finite-depth linear mode and quantitative bounds: [[thm-fd-x03]].

## Facts & Assumptions

**Given:** The positive parameter values, dimensional coordinate convention, and linear wave model in the Example.

[F1] For $h,g,k>0$, the frequency $\omega=\sqrt{gk\tanh(kh)}$ gives the displayed exact linear potential mode and the shallow and deep relative-error bounds ([[thm-fd-x03]]).

## Verification

1.1 The assignments give $kh=1$ and $gk=(9/4)\,\mathrm{s^{-2}}$, hence $\omega=\sqrt{(9/4)\tanh(1)}=(3/2)\sqrt{\tanh(1)}\,\mathrm{s^{-1}}$. The theorem's profile factor is $\cosh(k(z+h))/\cosh(kh)=\cosh(z_m+1)/\cosh(1)$, and $ag/\omega=(3/(20\sqrt{\tanh(1)}))\,\mathrm{m^2\,s^{-1}}$. Thus [F1] specializes to the stated $\eta$ and $\phi$. [given, F1, algebra]

2.1 The comparison definitions give $\omega_{\rm sh}=k\sqrt{gh}=(3/2)\,\mathrm{s^{-1}}$ and $\omega_{\rm deep}=\sqrt{gk}=(3/2)\,\mathrm{s^{-1}}$. Dividing the dispersion identity $\omega^2=gk\tanh(1)$ by either squared comparison frequency yields the exact relative-error expressions in the Example. Applying the bounds in [F1] at $kh=1$ gives the three stated inequalities, with no decimal approximation or empirical inference. [given, F1, algebra] ∎
