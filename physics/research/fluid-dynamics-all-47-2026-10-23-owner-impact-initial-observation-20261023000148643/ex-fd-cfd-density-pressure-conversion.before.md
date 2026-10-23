---
id: ex-fd-cfd-density-pressure-conversion
kind: example
title: "Pressure normalization carries density units"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: physics
library: physics
dependency_level: 6
deps:
  - pthm-fd-no-slip-cfd-observations
dependency_roles:
  pthm-fd-no-slip-cfd-observations: physical-result
generation:
  role: example
proof_strategy: direct
physical_scope: >-
  Symbolic conversion of a dimensionless smooth-MINI pressure observation to
  physical pressure using constant density and declared length, velocity, and
  time scales. It reports no simulation or measurement.
empirical_premises: []
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
---

## Example

Assume the full hypotheses of the preceding no-slip continuum CFD theorem, including its Countable Choice, strong-solution regularity, the explicitly adopted distributional weak extension of the physical momentum balance at that regularity (the continuous exact-field equation of the MINI interface), mean-zero pressure gauge, projected initialization, actual mixed backward-Euler solution, and time-step restriction. Take the dimensionless physical domain $D^*=(0,1)^3$, constant density $\rho_0>0$ kilograms per cubic metre, and positive scales $\ell_0$ metres and $U_0$ metres per second. Use the mean-zero pressure weight $\xi(y)=y_1-\tfrac12$ and the normalized test $\eta\in C_c^\infty(0,T^*)$ with $\|\eta'\|_{L^1(0,T^*)}=1$. Let $p_{\mathrm{phys}}=\rho_0U_0^2p^*$ and let $\bar p_{\mathrm{phys},h}$ be its corresponding right-constant physical pressure reconstruction. The physically weighted space-time pressure error

$$E_{\mathrm{phys}}:=\int_0^{(\ell_0/U_0)T^*}\int_{\ell_0D^*}\xi(x/\ell_0)\bigl(p_{\mathrm{phys}}(x,t)-\bar p_{\mathrm{phys},h}(x,t)\bigr)\eta(U_0t/\ell_0)\,dx\,dt$$

has the symbolic bound $|E_{\mathrm{phys}}|\le\rho_0U_0\ell_0^4(K+1)H/\sqrt{12}$, in pascal cubic-metre seconds. The factor $\rho_0$ converts kinematic pressure $p_{\mathrm{phys}}/\rho_0$, measured in square metres per square second, to physical pressure in pascals; the remaining factors convert the dimensionless pressure-time-volume integral. No measurement or computed numerical value is asserted.

## Example references

[[pthm-fd-no-slip-cfd-observations|No-slip continuum CFD observable error theorem]]

## Facts & Assumptions

**Given:** The full hypotheses and notation of the preceding no-slip continuum CFD theorem; $D^*=(0,1)^3$; $\rho_0,\ell_0,U_0>0$ with the stated SI units; the mean-zero weight $\xi(y)=y_1-\tfrac12$; and $\eta\in C_c^\infty(0,T^*)$ with $\|\eta'\|_{L^1}=1$.

[F1] The preceding theorem gives the dimensionless time-tested pressure estimate with bound $(K+1)H\|\eta'\|_{L^1}\|\xi\|_Q$ under the stated smooth-solution and MINI hypotheses. [[pthm-fd-no-slip-cfd-observations]]

## Verification

**Given:** The unit-cube domain, normalized pressure sensor and test, and the theorem supplier [F1].

1.1 The sensor has mean zero because $\int_0^1(y_1-\tfrac12)\,dy_1=0$. Its squared $L^2(D^*)$ norm is $\int_0^1(y_1-\tfrac12)^2\,dy_1=1/12$, since the other two unit-length coordinates contribute factors one. Thus $\xi\in Q$ and $\|\xi\|_Q=1/\sqrt{12}$. [given, algebra]

1.2 Choose $0<a<b<T^*$ and let $\widehat\eta(t)=\exp(-1/((t-a)(b-t)))$ for $a<t<b$, with $\widehat\eta(t)=0$ otherwise. This is a nonconstant smooth compactly supported function, so $\|\widehat\eta'\|_{L^1}>0$. Setting $\eta=\widehat\eta/\|\widehat\eta'\|_{L^1}$ gives $\|\eta'\|_{L^1}=1$. [given, construct]

2.1 Apply [F1] with these sensors. By step 1.1 and step 1.2, the dimensionless time-tested pressure error is at most $(K+1)H/\sqrt{12}$. [F1, step 1.1, step 1.2]

3.1 Under $x=\ell_0y$ and $t=(\ell_0/U_0)t^*$, the physical pressure is $\rho_0U_0^2$ times the dimensionless pressure, the volume element is $\ell_0^3dy$, and the time element is $(\ell_0/U_0)dt^*$. Their product is $\rho_0U_0\ell_0^4$. Multiplying the bound in step 2.1 by this positive factor proves the stated physical-unit estimate. This conversion is symbolic and supplies no empirical observation. [step 2.1, algebra] ∎
