---
id: "ex-td-volume-sized-external-field"
kind: "example"
title: "A volume-filling field changes ideal-gas pressure"
status: "draft"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "A classical ideal positional gas in dimension d at least two with a constant per-particle external energy throughout the volume; for nonzero shift it is excluded from the fixed uniformly tempered exterior class; the zero shift coincides with free walls."
deps: [def-td-stable-tempered-continuum-preparation, def-td-admissible-van-hove-and-tempered-exterior, post-td-equilibrium-ensemble-sampling, pthm-td-qualified-van-hove-and-exterior-limit]
dependency_roles:
  def-td-stable-tempered-continuum-preparation: formulation-prerequisite
  def-td-admissible-van-hove-and-tempered-exterior: formulation-prerequisite
  post-td-equilibrium-ensemble-sampling: physical-assumption
  pthm-td-qualified-van-hove-and-exterior-limit: physical-result
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
dependency_level: 9
---

## Example

For the ideal positional gas $\varphi=0$ in dimension $d\geq2$ and a bounded measurable region of dimensionless volume $0\leq V<\infty$, take $z>0$ and $T>0$, with $\beta=(k_{\mathrm B}T)^{-1}>0$ in $\mathrm{J}^{-1}$. The grand partition is $\Xi_V(z,\beta)=e^{zV}$. Now impose a constant external energy $c\in\mathbb R$ joules per particle at every point of the volume, adding $cN$ to the configuration energy and using the same grand weighting convention. The new grand partition is $\Xi_V^{(c)}=e^{ze^{-\beta c}V}$. For $V>0$, the dimensionless per-volume log-partition rate changes from $z$ to $ze^{-\beta c}$ when $c\neq0$. At $V=0$, both partitions are $1$ and no per-volume rate is assigned. For $c\neq0$, this volume-filling external energy cannot be represented by the deterministic exterior term used by [[pthm-td-qualified-van-hove-and-exterior-limit]] for this ideal potential. For $c=0$, it agrees with free walls, represented by the empty exterior configuration.

## Facts & Assumptions

[F1] [[def-td-stable-tempered-continuum-preparation]]: $V$ is dimensionless reference volume, $\beta$ is inverse energy, and the ideal model has $H_N=0$.

[A1] [[post-td-equilibrium-ensemble-sampling]]: $\Xi_V=\sum_{N\geq0}z^NZ_{V,N}$ with the indistinguishable positional factor $1/N!$.

[F2] [[def-td-admissible-van-hove-and-tempered-exterior]]: the qualified exterior theorem restricts deterministic exterior configurations by one fixed square-count bound $t$ and does not include an energy field applied throughout $\Lambda$.

[L1] [[pthm-td-qualified-van-hove-and-exterior-limit]]: its current conditional statement treats exterior energy only as $W_n(\omega,\zeta)$ for a fixed $\zeta\in\Omega(t)$ and expressly excludes a volume-filling external field; the theorem is draft and remains conditional on its mathematical suppliers.

## Verification

**Given:** The finite-volume grand weight, an ideal gas, and the uniform per-particle shift $c$ over the entire region.

1.1 Since $H_N=0$, the finite-volume canonical positional integral is $Z_{V,N}=V^N/N!$. Summing the adopted grand weights gives $\Xi_V=\sum_{N\geq0}(zV)^N/N!=e^{zV}$. [given, F1, A1, algebra]

2.1 Adding $cN$ to the energy multiplies the $N$-particle weight by $e^{-\beta cN}$, so $\Xi_V^{(c)}=\sum_{N\geq0}(ze^{-\beta c}V)^N/N!=e^{ze^{-\beta c}V}$. When $V>0$, division of the two logarithms by $V$ gives $z$ and $ze^{-\beta c}$; these differ for $c\neq0$ because $\beta>0$ and $z>0$. When $V=0$, only the vacuum contributes, both partitions equal $1$, and division by $V$ is undefined. [given, A1, step 1.1, algebra]

3.1 Since $\varphi=0$, the exterior sum in [F2] is $W_n(\omega,\zeta)=0$ for every allowed exterior. If $c\neq0$, a one-particle interior configuration has the nonzero imposed energy $c$, so no such exterior term equals $cN$ for all configurations. If $c=0$, the added energy is zero and agrees with free walls, or with the empty exterior $\varnothing\in\Omega(0)$. Thus only the nonzero volume-filling perturbation gives the claimed exterior-energy exclusion. Separately, the ideal potential does not satisfy [L1]’s positive divergent-core hypothesis, so no exterior-limit theorem for that stronger class is contradicted in either case. [given, F2, L1, step 2.1] ∎
