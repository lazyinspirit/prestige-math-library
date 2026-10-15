---
id: "ex-td-volume-sized-external-field"
kind: "example"
title: "A volume-filling field changes ideal-gas pressure"
status: "draft"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "A classical ideal positional gas in dimension d at least two with a constant per-particle external energy throughout the volume; it is excluded from the fixed uniformly tempered exterior class."
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

For the ideal positional gas $\varphi=0$ in dimension $d\geq2$ and a region of finite dimensionless volume $V\ge0$, the grand partition is $\Xi_V(z,\beta)=e^{zV}$. Now impose an external energy $c$ joules per particle at every point of the volume. The new grand partition is $\Xi_V^{(c)}=e^{ze^{-\beta c}V}$, For $V>0$ the normalized logarithm is defined, so its dimensionless pressure rate changes from $z$ to $ze^{-\beta c}$ when $c\neq0$. At $V=0$ both partition formulas equal $1$ and no per-volume rate is assigned. This exact volume-filling external preparation is not a member of the deterministic exterior class used by [[pthm-td-qualified-van-hove-and-exterior-limit]].

## Facts & Assumptions

[F1] [[def-td-stable-tempered-continuum-preparation]]: $V$ is dimensionless reference volume, $\beta$ is inverse energy, and the ideal model has $H_N=0$.

[A1] [[post-td-equilibrium-ensemble-sampling]]: $\Xi_V=\sum_{N\geq0}z^NZ_{V,N}$ with the indistinguishable positional factor $1/N!$.

[F2] [[def-td-admissible-van-hove-and-tempered-exterior]]: the qualified exterior theorem restricts deterministic exterior configurations by one fixed square-count bound $t$ and does not include an energy field applied throughout $\Lambda$.

[L1] [[pthm-td-qualified-van-hove-and-exterior-limit]]: its current conditional statement treats exterior energy only as $W_n(\omega,\zeta)$ for a fixed $\zeta\in\Omega(t)$ and expressly excludes a volume-filling external field; the theorem is draft and remains conditional on its mathematical suppliers.

## Verification

**Given:** The finite-volume grand weight, an ideal gas, and the uniform per-particle shift $c$ over the entire region.

1.1 Since $H_N=0$, the finite-volume canonical positional integral is $Z_{V,N}=V^N/N!$. Summing the adopted grand weights gives $\Xi_V=\sum_{N\geq0}(zV)^N/N!=e^{zV}$. [given, F1, A1, algebra]

2.1 Adding $cN$ to the energy multiplies the $N$-particle weight by $e^{-\beta cN}$, so $\Xi_V^{(c)}=\sum_{N\geq0}(ze^{-\beta c}V)^N/N!=e^{ze^{-\beta c}V}$. For $c\neq0$ this has a different log-partition rate. [given, A1, step 1.1, algebra]

3.1 The perturbation is a potential on every point of $\Lambda$, whereas [F2] and [L1] restrict the boundary result to free walls or the interaction with one fixed uniformly tempered exterior configuration. Therefore this example lies outside those hypotheses and contradicts no qualified boundary conclusion. [given, F2, L1, step 2.1] ∎
