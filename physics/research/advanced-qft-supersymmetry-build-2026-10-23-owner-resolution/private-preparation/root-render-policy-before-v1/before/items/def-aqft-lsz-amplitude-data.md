---
id: def-aqft-lsz-amplitude-data
kind: definition
title: Regulated perturbative LSZ amplitude data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 1
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps: [def-aqft-local-operator-and-dimension]
dependency_roles:
  def-aqft-local-operator-and-dimension: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in effective theories at higher orders, §2"
      url: "https://arxiv.org/pdf/1811.09413"
verification:
  precheck: n/a
---
## Definition

Fix the field data and Minkowski convention from the earlier finite-jet definition and a truncation order $N\geq0$. A regulated perturbative generating datum consists, for each regulator label $\rho$, of a finite-dimensional $\mathbb Z/2$-graded complex space $X_\rho$ of field-mode coordinates, a specified integration functional $d\mu_\rho$ on its even/odd coordinates, a local action $S_{\rho,\epsilon}:X_\rho\to\mathbb C[\epsilon]/(\epsilon^{N+1})$, and a generating functional

$$
Z_{\rho,\epsilon}[J]=\int_{X_\rho}\exp\!\bigl(iS_{\rho,\epsilon}(\varphi)+i\langle J,\varphi\rangle\bigr)\,d\mu_\rho(\varphi),\qquad Z_{\rho,\epsilon}[0]\text{ is a unit},
$$

where $J\in X_\rho^*$ is a linear source and the integral is either an actual convergent finite-dimensional integral or a specified formal perturbative integral. “A unit” means that the constant coefficient of $Z_{\rho,\epsilon}[0]$ is nonzero, so the normalized functional $Z_{\rho,\epsilon}[J]/Z_{\rho,\epsilon}[0]$ is defined in the truncated ring. An admissible field-coordinate change is a local, parity-preserving formal map $F_{\rho,\epsilon}:X_\rho\to X_\rho$ with $F_{\rho,0}=\operatorname{id}$ and an inverse modulo $\epsilon^{N+1}$; local means each output field at $x$ depends on a finite jet at $x$. Its regulated Jacobian factor $\mathcal J_{F,\rho}$ is the factor specified by the exact change-of-variables identity

$$
\int h(\varphi)\,d\mu_\rho(\varphi)=\int h(F_{\rho,\epsilon}(\psi))\,\mathcal J_{F,\rho}(\psi)\,d\mu_\rho(\psi)
$$

for every admissible integrand $h$; no assertion that this factor is $1$ is part of the definition. In the transformed coordinates the source is $J\cdot F_{\rho,\epsilon}(\psi)$, so the field insertion remains the same named original coordinate.

An LSZ amplitude datum is an additional limit of connected momentum-space Green functions as regulators are removed, when that limit exists. The connected $n$-point function is $i^{-n}$ times the $n$th source derivative of $\log(Z_{\rho,\epsilon}[J]/Z_{\rho,\epsilon}[0])$ at $J=0$, Fourier transformed with convention $\widetilde f(p)=\int e^{ip\cdot x}f(x)\,d^4x$; the overall momentum-conservation delta function is removed. For each external one-particle channel $a$ (with a fixed polarization component when the field has spin), the datum specifies a mass $m_a>0$ and nonzero simple-pole residue $Z_a$ at $s_a=m_a^2$, where $s_a=-\eta^{\mu\nu}p_{a,\mu}p_{a,\nu}$. Here “stable external channel” means precisely that this isolated pole exists with nonzero residue and zero width. The transformed interpolating fields must have an invertible one-particle overlap matrix; this is part of the datum. For every $n$-point function it requires pole factorization

$$
G_n(p_1,\ldots,p_n)=\left(\prod_{j=1}^n\frac{Z_{a_j}^{1/2}}{s_j-m_{a_j}^2}\right)\mathcal A_n(p_1,\ldots,p_n)+\text{terms missing at least one external pole}.
$$

The normalized LSZ amplitude is the joint residue

$$
\mathcal A_n=\left(\prod_{j=1}^n Z_{a_j}^{-1/2}\right)\lim_{s_j\to m_{a_j}^2}\left(\prod_{j=1}^n(s_j-m_{a_j}^2)\right)G_n.
$$

This definition supplies only the regulator and pole data needed for a conditional amplitude statement. It does not assert that a continuum limit, stable particles, or LSZ poles exist for a given quantum field theory.

## Definition references

[[def-aqft-local-operator-and-dimension|Finite-jet local operators and engineering dimension]]

[Criado–Pérez-Victoria, §2, equations (2.2)–(2.8)](https://arxiv.org/pdf/1811.09413)
