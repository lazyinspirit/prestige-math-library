---
id: ex-maxwell-dielectric-jump-reflection
kind: example
title: Normal-incidence reflection at a planar dielectric interface
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-transient-maxwell-system-with-material-interfaces]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 5 §5.8, printed pp. 133–135: plane-wave reflection and transmission at a material interface."
verification:
  precheck: pass
---

## Example

Let the planar interface be $x=0$, with constant isotropic media $(\epsilon_i,\mu_i)$ on $x<0$ ($i=1$) and $x>0$ ($i=2$). For angular frequency $\omega>0$, define impedances $\eta_i=\sqrt{\mu_i/\epsilon_i}$ and wave numbers $k_i=\omega\sqrt{\epsilon_i\mu_i}$. Take the real parts of the phasors
$$E_z^-=E_0\left(e^{i(k_1x-\omega t)}+R e^{i(-k_1x-\omega t)}\right),\quad H_y^-=-\frac{E_0}{\eta_1}e^{i(k_1x-\omega t)}+\frac{R E_0}{\eta_1}e^{i(-k_1x-\omega t)},$$
$$E_z^+=T E_0e^{i(k_2x-\omega t)},\qquad H_y^+=-\frac{T E_0}{\eta_2}e^{i(k_2x-\omega t)}.$$
The electric field is directed along $z$, and the magnetic intensity is along $y$.

## Facts & Assumptions


**Given:** Source-free Maxwell fields in each constant medium and the interface convention with no singular surface charge or current.

[F1] The tangential traces of $E$ and $H=\mu^{-1}B$ are continuous across a material interface with no singular surface current; the normal traces of $\epsilon E$ and $B$ are continuous when there is no surface charge. ([[def-transient-maxwell-system-with-material-interfaces]])

## Verification

1.1 For a wave with sign $s=+1$ (right-going) or $s=-1$ (left-going), write its phasor as $E_z=Ae^{i(sk_ix-\omega t)}$ and $H_y=-sA e^{i(sk_ix-\omega t)}/\eta_i$. Then $(\operatorname{curl}E)_y=-isk_iE_z$ and $(\operatorname{curl}H)_z=ik_iH_y=-ik_iA e^{i(sk_ix-\omega t)}/\eta_i$. Faraday's equation holds because $B_y=\mu_iH_y=-s(k_i/\omega)E_z$, and Ampere's equation holds because $k_i/\eta_i=\omega\epsilon_i$. Also $\operatorname{div}(\epsilon_iE)=0$ since $E_z$ is independent of $z$, and $\operatorname{div}B=0$ since $B_y$ is independent of $y$. Real parts also solve these real linear equations. At $x=0$, continuity of tangential $E_z$ and $H_y$ is exactly $1+R=T,\qquad \frac{1-R}{\eta_1}=\frac{T}{\eta_2}.$ [F1, given, algebra]

2.1 Solving the first equation for $T$ and substituting into the second gives $\eta_2(1-R)=\eta_1(1+R)$, hence $R=\frac{\eta_2-\eta_1}{\eta_1+\eta_2},\qquad T=\frac{2\eta_2}{\eta_1+\eta_2}.$ Because both fields have only tangential components, their normal traces vanish on both sides, so the normal interface conditions in [F1] also hold. [F1, step 1.1, algebra] ∎
