---
id: ex-tdmath-poisson-intensity-information-density
kind: example
title: Specific Relative Entropy of a Poisson Law with Changed Intensity
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-axiom-of-choice, def-tdmath-poisson-configuration-reference, thm-tdmath-poisson-reference-count-properties, def-tdmath-finite-region-relative-entropy, thm-tdmath-specific-entropy-density, def-real-exponential-function-and-e, def-factorial-and-falling-factorial, thm-exponential-addition-formula]
justified_by: []
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
---

## Example

For intensity $z>0$, let $P=Q_z$ be the translation-invariant Poisson law from [[def-tdmath-poisson-configuration-reference]], compared with the unit-intensity reference $Q=Q_1$. Its specific relative entropy is
$$I(Q_z)=1-z+z\log z.$$
The parameter $z$ is a mathematical intensity relative to the chosen reference; no physical preparation is asserted.

## Facts & Assumptions

**Given:** $d\geq1$, $z>0$, and $P=Q_z$ with reference $Q=Q_1$.

[F1] The cell count under $Q_\lambda$ is Poisson with mean $\lambda$, conditional positions have the same uniform law for all $\lambda$, and disjoint cells are independent ([[def-tdmath-poisson-configuration-reference]], [[thm-tdmath-poisson-reference-count-properties]]).

[F2] Finite-region relative entropy is computed from a Radon–Nikodym density, and the specific entropy is the normalized cube limit ([[def-tdmath-finite-region-relative-entropy]], [[thm-tdmath-specific-entropy-density]]).

[F3] $e^x e^y=e^{x+y}$, $n!=n(n-1)!$ for $n\geq1$, and $e^x=\sum_{n\geq0}x^n/n!$ ([[thm-exponential-addition-formula]], [[def-factorial-and-falling-factorial]], [[def-real-exponential-function-and-e]]).

## Verification

**Given:** The hypotheses and the laws in Facts & Assumptions.

1.1 In one unit cell, the conditional distribution of point positions given the count is identical for $Q_z$ and $Q_1$. The ratio of their count probabilities at $n$ is $$\frac{e^{-z}z^n/n!}{e^{-1}/n!}=e^{1-z}z^n.$$ Thus this is the Radon–Nikodym density on that cell. [F1, algebra]

2.1 The cube $\Lambda_m=[0,m)^d$ is the disjoint union of $m^d$ unit cells. Independence in [F1] makes the finite-cube density the product of the cell densities: $$h_m(\omega)=e^{(1-z)m^d}z^{N_{\Lambda_m}(\omega)}.$$ [F1, step 1.1, algebra]

3.1 The count $N_{\Lambda_m}$ is Poisson with mean $zm^d$ by [F1]. Directly from its mass function and the exponential series, $$E_PN_{\Lambda_m}=e^{-zm^d}\sum_{n\geq1}n\frac{(zm^d)^n}{n!}=zm^d e^{-zm^d}\sum_{k\geq0}\frac{(zm^d)^k}{k!}=zm^d.$$ Therefore [F2] gives $$\frac{D(P_{\Lambda_m}\Vert Q_{\Lambda_m})}{m^d}=\frac{E_P\log h_m}{m^d}=1-z+z\log z$$ for every positive integer $m$. [F1, F2, F3, step 2.1, algebra]

4.1 By [F1], $Q_z$ is stationary and $E_{Q_z}N_{[0,1)^d}=z<\infty$. Every bounded region meets finitely many unit cells, so all its counts are integrable and every local tame function bounded by a constant times $1+N_A$ is integrable. Thus $Q_z$ belongs to the exact class $\mathcal P^1_{\rm stat}(\Omega)$ required by [F2]. Taking the cube limit in [F2] yields $I(Q_z)=1-z+z\log z$. At $z=1$ the value is zero, the reference-law baseline. [F1, F2, step 3.1] ∎

