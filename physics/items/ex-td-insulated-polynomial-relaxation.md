---
id: ex-td-insulated-polynomial-relaxation
kind: example
title: A nonuniform insulated temperature profile relaxes to its mean
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 8
physical_scope: An exact initial-profile example inside the constant-capacity, constant-conductivity insulated rectangular model; it is a conditional calculation, not an observation.
deps:
  - pthm-td-constant-conductivity-neumann-existence
  - pthm-td-neumann-heat-relaxation
  - def-countable-choice
dependency_roles:
  pthm-td-constant-conductivity-neumann-existence: physical-result
  pthm-td-neumann-heat-relaxation: physical-result
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Statistical Mechanics, §6.5, heat conduction"
      url: https://batch.libretexts.org/print/Letter/Finished/phys-32579/Full.pdf
      locator: Chapter 6, §6.5, the constant-conductivity heat equation
    - title: MIT OpenCourseWare, 18.303 Linear Partial Differential Equations, The 1-D Heat Equation
      url: https://ocw.mit.edu/courses/18-303-linear-partial-differential-equations-fall-2006/d11b374a85c3fde55ec971fe587f8a50_heateqni.pdf
      locator: Full-text lecture note retrieved; §§1.1–1.2, heat equation and insulated boundary setup.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume Countable Choice as in [[pthm-td-constant-conductivity-neumann-existence]]. Let $L_i>0$ be lengths in metres and $\Omega=\prod_{i=1}^3(0,L_i)$. Let $c>0$ be a constant volumetric heat capacity in $\mathrm{J\,m^{-3}\,K^{-1}}$, $k>0$ a constant scalar conductivity in $\mathrm{W\,m^{-1}\,K^{-1}}$, and $u_\star$ an arbitrary reference energy density in $\mathrm{J\,m^{-3}}$, with $u(\theta)=u_\star+c\theta$ as in [[pthm-td-constant-conductivity-neumann-existence]]. Let $T_b$ and $\epsilon$ be temperatures in kelvins with $T_b>\epsilon/30>0$. For $r\in[0,1]$ set $h(r)=r^2(1-r)^2-1/30$ and prescribe
$$g(x)=T_b+\epsilon h(x_1/L_1)\qquad(x\in\overline\Omega).$$
Use its even $2L_i$-periodic extension in each coordinate as the initial datum on $\mathbb R^3$. The unique insulated heat solution has constant spatial mean $T_b$ and satisfies
$$\int_\Omega|T(x,t)-T_b|^2\,dx\le \frac{\epsilon^2|\Omega|}{2100}e^{-2(k/c)t/C_\Omega},\qquad C_\Omega=\frac32\max_iL_i^2.$$
This gives an exactly computed initial variance and the conditional relaxation estimate of the model.

## Facts & Assumptions

**Given:** Countable Choice; lengths $L_i$ in metres; $c,k,u_\star,T_b,\epsilon$ with the units and hypotheses in the Statement; the profile $h(r)=r^2(1-r)^2-1/30$; and the field $g(x)=T_b+\epsilon h(x_1/L_1)$.

[A1] Countable Choice is the explicit hypothesis used by the heat-evolution supplier [[def-countable-choice]].

[F1] [[pthm-td-constant-conductivity-neumann-existence]]: the even-periodic compatible initial field has the unique Gaussian-convolution heat solution with positive bounds and homogeneous Neumann faces.

[F2] [[pthm-td-neumann-heat-relaxation]]: for this solution, the mean is conserved and $E(t)\le e^{-2(k/c)t/C_\Omega}E(0)$.

## Example

The function $h$ is dimensionless, and $g$ has units of kelvins. The extension uses even reflection at each face and period $2L_i$; the initial field is nonconstant but compatible with insulated walls.

## Verification


1.1 Write $q(r)=r^2(1-r)^2$. Then $q'(r)=2r(1-r)(1-2r)$, so $q'(0)=q'(1)=0$, and $q''(0)=q''(1)=2$. Also $0\le q\le1/16$ on $[0,1]$. The constant and first two derivatives therefore match across the even-reflection and periodic seams; the extension is $C^2$, with bounded uniformly continuous derivatives. Since $h=q-1/30$, its values lie in $[-1/30,7/240]$, so $g\ge T_b-\epsilon/30>0$. [given, algebra]

1.2 Expand $q(r)=r^2-2r^3+r^4$, so $\int_0^1q(r)\,dr=1/3-1/2+1/5=1/30$. Also $q(r)^2=r^4-4r^5+6r^6-4r^7+r^8$, whence
$$\int_0^1q(r)^2\,dr=\frac15-\frac46+\frac67-\frac48+\frac19=\frac1{630}.$$
Therefore $\int_0^1h(r)\,dr=0$ and
$$\int_0^1h(r)^2\,dr=\int_0^1(q-1/30)^2\,dr=\frac1{630}-\frac1{900}=\frac1{2100}.$$
Integrating over the other two coordinates now gives $\overline g=T_b$ and $E(0)=\epsilon^2L_2L_3L_1/2100=\epsilon^2|\Omega|/2100$. [given, algebra]

2.1 The profile satisfies every initial-data hypothesis of [F1]; its vanishing normal derivative follows from $q'(0)=q'(1)=0$. Apply [F1] for existence and [F2] with the computed $E(0)$ to obtain the stated conserved mean and decay bound. This is a deduction within the adopted continuum model. [A1, F1, F2, step 1.1, step 1.2] ∎
