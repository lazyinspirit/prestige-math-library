---
id: ex-fd-capillary-zero-tension-limit
kind: example
title: "Capillary dispersion reduces to gravity waves"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-bl01-examples
deps:
  - thm-fd-capillary-gravity-dispersion-energy
  - thm-fd-x03
dependency_roles:
  thm-fd-capillary-gravity-dispersion-energy: mathematical-premise
  thm-fd-x03: mathematical-premise
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  scraped: []
  references: []
verification:
  precheck: pending
---

## Example

Fix $h,g,\rho,k>0$, an amplitude $a\in\mathbb R$, and $\sigma\ge0$. Let

$$\omega_\sigma=\sqrt{\left(gk+\frac{\sigma}{\rho}k^3\right)\tanh(kh)},\qquad \omega_0=\sqrt{gk\tanh(kh)},\qquad G(z)=\frac{\cosh(k(z+h))}{\cosh(kh)}.$$

Then $\omega_\sigma=\omega_0$ when $\sigma=0$, and the capillary-gravity mode in the theorem specializes to

$$\eta_0=aC(kx-\omega_0t),\qquad \phi_0=\frac{ag}{\omega_0}G(z)S(kx-\omega_0t),$$

the finite-depth gravity-wave mode. Moreover, with $h,g,\rho,k$ fixed,

$$\lim_{\sigma\downarrow0}\omega_\sigma=\omega_0.$$

This is an exact parameter specialization and one-sided limit within the linear mathematical model, not a nonlinear-wave result or an experimental observation. In the optional SI interpretation, $[h]=\mathrm m$, $[g]=\mathrm{m\,s^{-2}}$, $[\rho]=\mathrm{kg\,m^{-3}}$, $[k]=\mathrm{m^{-1}}$, $[\sigma]=\mathrm{N\,m^{-1}}$, $[a]=\mathrm m$, and $[\omega_\sigma]=\mathrm{s^{-1}}$.

## Example references

Capillary-gravity dispersion and its exact mode: [[thm-fd-capillary-gravity-dispersion-energy]].

Finite-depth gravity-wave mode: [[thm-fd-x03]].

## Facts & Assumptions

**Given:** The positive parameters, amplitude, and frequency definitions in the Example.

[F1] [[thm-fd-capillary-gravity-dispersion-energy]]: for $h,g,\rho,k>0$ and $\sigma\ge0$, $\omega_\sigma^2=(gk+\sigma k^3/\rho)\tanh(kh)$ and the positive-frequency mode has potential coefficient $a\omega_\sigma/(k\tanh(kh))$.

[F2] [[thm-fd-x03]]: for $h,g,k>0$, $\omega_0=\sqrt{gk\tanh(kh)}>0$ and the finite-depth gravity mode has potential coefficient $ag/\omega_0$.

## Verification

1.1 Setting $\sigma=0$ in [F1] gives $\omega_\sigma^2=gk\tanh(kh)=\omega_0^2$. Both frequencies are positive by [F1] and [F2], so $\omega_\sigma=\omega_0$. The capillary mode's potential coefficient satisfies $a\omega_0/(k\tanh(kh))=ag/\omega_0$ because $\omega_0^2=gk\tanh(kh)$ and $k\tanh(kh)>0$. Thus both the elevation and potential specialize exactly as stated; no division by $a$ is used. [given, F1, F2, algebra]

2.1 For $\sigma\ge0$, $\omega_\sigma^2-\omega_0^2=\sigma k^3\tanh(kh)/\rho\ge0$, so the positive roots satisfy $\omega_\sigma\ge\omega_0$. For $\sigma>0$, rationalizing gives $\omega_\sigma-\omega_0=(\omega_\sigma^2-\omega_0^2)/(\omega_\sigma+\omega_0)=(\sigma k^3\tanh(kh)/\rho)/(\omega_\sigma+\omega_0)$. The numerator tends to zero as $\sigma\downarrow0$, while $\omega_\sigma+\omega_0\ge\omega_0>0$. Hence the quotient tends to zero and $\omega_\sigma\to\omega_0$. [given, F1, F2, algebra] ∎
