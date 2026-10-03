---
id: cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients
kind: corollary
title: "Irreducible symmetric-group character values are power-sum coefficients"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
  - cor-power-sums-are-orthogonal-for-the-hall-inner-product
  - def-hall-inner-product-on-symmetric-functions
  - def-frobenius-characteristic-map
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "(7.7), printed p. 114 (χ^λ_ρ=⟨s_λ,p_ρ⟩)"
---

## Statement

For all $\lambda,\rho\vdash n$,

$$\chi^\lambda(\rho)=\langle s_\lambda,p_\rho\rangle_H,$$

the coefficient of $p_\rho/z_\rho$ in the power-sum expansion of $s_\lambda$.
Equivalently,

$$s_\lambda=\sum_{\rho\vdash n}\chi^\lambda(\rho)\,\frac{p_\rho}{z_\rho}.$$

## Facts & Assumptions

**Given:** An integer $n\ge0$ and partitions $\lambda,\rho\vdash n$.

[F1] $\operatorname{ch}(\chi^\lambda)=s_\lambda$ in $\Lambda^n$, where $\chi^\lambda$ is the character of the Specht module $S^\lambda$ and all its values are integers ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

[F2] $\operatorname{ch}(f)=\sum_{\sigma\vdash n}f(\sigma)p_\sigma/z_\sigma$ for $f\in\mathrm{cf}(S_n)$, where $z_\sigma=\prod_ii^{m_i(\sigma)}m_i(\sigma)!>0$ ([[def-frobenius-characteristic-map]]).

[F3] The Hall form is the $\mathbb Z$-bilinear form with $\langle h_\alpha,m_\beta\rangle_H=\delta_{\alpha\beta}$ and $\mathbb Q$-bilinear extension to $\Lambda_{\mathbb Q}$, and $\langle p_\sigma,p_\rho\rangle_H=\delta_{\sigma\rho}z_\rho$ ([[def-hall-inner-product-on-symmetric-functions]], [[cor-power-sums-are-orthogonal-for-the-hall-inner-product]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and the definition of the characteristic [F2], $s_\lambda=\operatorname{ch}(\chi^\lambda)=\sum_{\sigma\vdash n}\chi^\lambda(\sigma)\,p_\sigma/z_\sigma$ in $\Lambda_{\mathbb Q}^n$. [F1, F2]

2.1 Pairing both sides of step 1.1 with $p_\rho$ and using $\mathbb Q$-bilinearity of the Hall form and the orthogonality $\langle p_\sigma,p_\rho\rangle_H=\delta_{\sigma\rho}z_\rho$ of [F3], $\langle s_\lambda,p_\rho\rangle_H=\sum_{\sigma\vdash n}\frac{\chi^\lambda(\sigma)}{z_\sigma}\langle p_\sigma,p_\rho\rangle_H=\frac{\chi^\lambda(\rho)}{z_\rho}\,z_\rho=\chi^\lambda(\rho)$. [F3, step 1.1, algebra]

3.1 Step 2.1 is the first displayed identity; step 1.1 exhibits $\chi^\lambda(\rho)$ as the coefficient of $p_\rho/z_\rho$ in the expansion of $s_\lambda$ in the basis $\{p_\sigma/z_\sigma:\sigma\vdash n\}$ of $\Lambda_{\mathbb Q}^n$, which is the equivalent second display. [step 1.1, step 2.1] ∎
