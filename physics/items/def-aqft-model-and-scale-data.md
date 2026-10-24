---
id: def-aqft-model-and-scale-data
kind: definition
domain: physics
library: physics
title: Finite-regulator EFT model and scale data
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-countable-choice
  - def-qft-framework-units
  - def-qftx-nonabelian-gauge-data
  - def-axiom-of-choice
  - def-multivariate-normal-law
justified_by: []
forward_refs: []
axiom_base: ZF + AC_omega for the spectral and optional gauge data; AC only when the optional Gaussian-law supplier is used
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qft-framework-units: formulation-prerequisite
  def-qftx-nonabelian-gauge-data: formulation-prerequisite
  def-axiom-of-choice: mathematical-premise
  def-multivariate-normal-law: mathematical-premise
physical_scope: Finite-regulator model data and scale labels only; it constructs no continuum theory, measurement, or physical realization.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David B. Kaplan, Five lectures on effective field theory
      url: https://arxiv.org/pdf/nucl-th/0510023
      locator: §§1.1–1.2, printed pp. 3–7, low-energy degrees of freedom, local operators, and scale counting.
    - title: C. P. Burgess, Introduction to Effective Field Theory
      url: https://arxiv.org/pdf/hep-th/0701053
      locator: §1 and §§2.2.1–2.2.5, printed pp. 2–27, scale separation and the finite two-scalar Wilson-action example.
---

## Definition

Use natural units c=ℏ=1, with physical dimensions assigned using the QFT unit convention of the selected model. A finite-regulator effective-field-theory model-data record consists of a finite undirected graph Γ=(X,EΓ) with nonempty vertex set X, retained real coordinates ℓ∈ℝ^X, integrated real coordinates χ∈ℝ^X, a Borel ultraviolet action SUV(ℓ,χ)∈ℝ, and a specified Borel probability measure νH on ℝ^X for the integrated coordinates. Define dΓ(x,y) as the least number of edges in a path from x to y, with dΓ(x,y)=+∞ when no path exists. Equip ℝ^X with the coordinate inner product $u^Tv=\sum_{x\in X}u_xv_x$ and its norm $\|u\|=(u^Tu)^{1/2}$; matrix entries refer to the standard coordinate basis, I is the identity, and $\|A\|=\sup\{\|Au\|:\|u\|=1\}$. The full ultraviolet data are these objects before any integration. This definition does not assert that the integral of exp(−SUV) exists; finiteness and positivity are checked when the Wilsonian action is defined.

For the positive heavy-scalar Gaussian submodel, include a real symmetric matrix A on ℝ^X satisfying uᵀAu≥0 for every u and Axy=0 when dΓ(x,y)>1. Its entries have mass-squared units and its operator norm satisfies √‖A‖≤Λ. Choose M>0 and put K=M²I+A; for u≠0, uᵀKu≥M²‖u‖²>0. Require νH to be the centered Gaussian probability with covariance K⁻¹: after a fixed ordering of X, it is $N_{|X|}(0,K^{-1})$, meaning every real linear projection uᵀχ has normal law with mean zero and variance uᵀK⁻¹u. This optional law uses the Axiom of Choice under the multivariate-normal supplier's convention; no Gaussian law is required of the general model record. The heavy coordinate χ has mass-inverse units, so χᵀKχ is dimensionless. Specify a Borel source map $J:\mathbb R^X\to\mathbb R^X$ whose values have mass units, so J(ℓ)ᵀχ is dimensionless. Complexify to ℂ^X with first-variable-linear Hermitian pairing $\langle z,w\rangle=\sum_{x\in X}z_x\overline{w_x}$ and $A_{\mathbb C}(x+iy)=Ax+iAy$. Real symmetry and positivity make $A_{\mathbb C}$ self-adjoint and nonnegative. Assume countable choice for the spectral supplier in the QFT unit convention and use its normalized projection-valued measure $E_{A_{\mathbb C}}$: Borel sets map to orthogonal projections, the total value is I, and countable additivity holds on each vector. Define PE as $E_{A_{\mathbb C}}([0,E^2])$ restricted to ℝ^X, equivalently the real orthogonal projection onto the sum of A-eigenspaces with eigenvalues in [0,E²]; the real symmetric matrix's eigenspaces make this restriction real. When the source is restricted to external energy E, require J(ℓ)=PEJ(ℓ) for every ℓ.

The scale data are a positive Wilsonian matching scale $\mu_W$, a heavy mass $M>0$, an external energy bound $E\ge0$, and a regulator cutoff $\Lambda>0$, with $\sqrt{\|A\|}\le\Lambda$ in the Gaussian submodel. The Wilsonian scale $\mu_W$ records where the retained low-coordinate action is specified; $M$ is the heavy quadratic mass; $E$ bounds the admitted source spectrum; and $\Lambda$ bounds the finite regulator. These are separately named parameters, and this definition imposes no relation among their numerical values. A small-remainder theorem may require an additional hierarchy such as $E<M$.

Light and heavy name the roles in the declared split: ℓ is retained at μW and χ is integrated in the finite measure νH. They do not assert that every retained field is massless or that every integrated field is heavy in an unrestricted continuum theory. If the model includes non-Abelian gauge data, record the actual global group, Lie algebra, principal bundle, representations, and admitted bundle sectors as one supplied gauge-data object. That object selects no connection, action, or quantum measure by itself. The Gaussian submodel below keeps any such gauge data as fixed context and makes no gauge-field integration claim.

This is a finite-dimensional regulator description. It makes no assertion that a general interacting functional measure exists, that a cutoff can be removed, or that any selected model describes nature.

## Definition references

[[def-countable-choice]]

[[def-qft-framework-units]]

[[def-qftx-nonabelian-gauge-data]]

[[def-axiom-of-choice|Choice assumption for the optional Gaussian-law supplier]]

[[def-multivariate-normal-law|Gaussian law specified by every real linear projection]]
