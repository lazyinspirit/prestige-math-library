---
id: ex-fd-x02-application
kind: example
title: "Acoustic and inertial finite modes — worked interpretation"
status: published
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01-examples
deps:
  - thm-fd-x02
dependency_roles:
  thm-fd-x02: mathematical-premise
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
generation:
  role: example
---

## Example

For the acoustic mode, take $\rho_0=1\,\mathrm{kg\,m^{-3}}$, $P(\rho)=(4\,\mathrm{m^2\,s^{-2}})\rho$, $k=(1,2,2)\,\mathrm{m^{-1}}$, $A=1/4\,\mathrm{kg\,m^{-3}}$, and $\omega=6\,\mathrm{s^{-1}}$. Then $\chi=P'(\rho_0)=4\,\mathrm{m^2\,s^{-2}}$, $|k|=3\,\mathrm{m^{-1}}$, and the fields are

$$r(t,x)=\frac14 C(\theta)\,\mathrm{kg\,m^{-3}},\qquad v(t,x)=\left(\frac16,\frac13,\frac13\right)C(\theta)\,\mathrm{m\,s^{-1}},\quad \theta=k\cdot x-\omega t.$$

The rotating example takes $\Omega=(0,0,3)\,\mathrm{s^{-1}}$, $k=(1,0,1)\,\mathrm{m^{-1}}$, $a=(0,1,0)$, and $W=2\,\mathrm{m\,s^{-1}}$. With $e=(1,0,1)/\sqrt2$, $b=(-1,0,1)/\sqrt2$, and $\alpha=3\sqrt2\,\mathrm{s^{-1}}$, its theorem-defined vector $z$ and scalar $\beta$ are

$$z(t)=\left(\frac{S(\alpha t)}{\sqrt2},C(\alpha t),-\frac{S(\alpha t)}{\sqrt2}\right),\qquad \beta(t)=-3\sqrt2 C(\alpha t)\,\mathrm{s^{-1}}.$$

Consequently the rotating fields are

$$w(t,x)=2z(t)C(k\cdot x)\,\mathrm{m\,s^{-1}},\qquad q(t,x)=6C(\alpha t)S(k\cdot x)\,\mathrm{m^2\,s^{-2}}.$$

These are exact substitutions into the specified linear systems, not observations or nonlinear fluid solutions.

## Example references

Acoustic and rotating finite-mode theorem: [[thm-fd-x02]].

## Facts & Assumptions

**Given:** The formal parameter values and fields in the Example.

[F1] For $\chi>0$, the displayed acoustic fields solve the linear acoustic system when $A\ne0$ and $\omega^2=\chi|k|^2$; the theorem also gives the zero-amplitude case ([[thm-fd-x02]]).

[F2] For constant $\Omega$ and nonzero $k$, the theorem-defined $e,a,b,\alpha,z,\beta,w,q$ satisfy the rotating linear system when $|a|=|e|=1$ and $a\perp e$ ([[thm-fd-x02]]).

## Verification

1.1 The acoustic data give $|k|^2=1+4+4=9\,\mathrm{m^{-2}}$ and $\chi|k|^2=4\cdot9=36\,\mathrm{s^{-2}}=\omega^2$. Also $|A|=1/4<\rho_0=1$. Substitution in [F1] yields exactly the displayed $r$ and $v$, and the density lower bound from the theorem is $\rho_0-|A|=3/4\,\mathrm{kg\,m^{-3}}$. [given, F1, algebra]

2.1 For the rotating data, $|k|=\sqrt2\,\mathrm{m^{-1}}$, $e=k/|k|=(1,0,1)/\sqrt2$, and $b=e\times a=(-1,0,1)/\sqrt2$. Thus $|a|=|e|=1$ and $a\perp e$. The theorem gives $\alpha=2\Omega\cdot e=3\sqrt2\,\mathrm{s^{-1}}$ and $z=aC(\alpha t)-bS(\alpha t)$, which is the displayed vector. Directly, $2\Omega\times z=(-6C(\alpha t),3\sqrt2S(\alpha t),0)\,\mathrm{s^{-1}}$, so $\beta=e\cdot(2\Omega\times z)=-3\sqrt2C(\alpha t)\,\mathrm{s^{-1}}$. Therefore $-W\beta/|k|=6\,\mathrm{m^2\,s^{-2}}C(\alpha t)$ and the pressure and velocity fields are exactly those in the Example. The hypotheses of [F2] hold, so its conclusion verifies both rotating equations and zero divergence. [given, F2, algebra] ∎
