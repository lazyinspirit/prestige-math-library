---
id: thm-aqft-field-redefinition-observable-equivalence-at-fixed-order
kind: theorem
title: Fixed-order on-shell amplitude equivalence under local field redefinition
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
proof_strategy: direct
deps:
  - def-aqft-operator-basis-quotient
  - prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy
  - def-aqft-lsz-amplitude-data
  - def-axiom-of-choice
  - def-reductive-and-linearly-reductive-over-c
dependency_roles:
  def-aqft-operator-basis-quotient: mathematical-premise
  prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy: mathematical-premise
  def-aqft-lsz-amplitude-data: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-reductive-and-linearly-reductive-over-c: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in effective theories at higher orders"
      url: "https://arxiv.org/pdf/1811.09413"
verification:
  precheck: pass
---
## Statement

Assume full AC. Let $S_\epsilon$ be a local $G$-invariant action through order $N$, with coefficients in $\mathbb C[\epsilon]/(\epsilon^{N+1})$, where $G$ is the declared complex reductive symmetry group. Let $F_\epsilon=\operatorname{id}+O(\epsilon^k)$ be a parity-preserving local formal coordinate map with a local inverse modulo $\epsilon^{N+1}$, for some $1\leq k\leq N$, and suppose its order-$k$ difference is an admitted relation in the finite-order operator-basis quotient. For each regulator $\rho$, assume a regulated generating functional whose zero-source partition value is a unit in $\mathbb C[\epsilon]/(\epsilon^{N+1})$ and an exact change-of-variables density factor $\mathcal J_{F,\rho}$ satisfying

$$
\int h(\varphi)\,d\mu_\rho(\varphi)=\int h(F_{\rho,\epsilon}(\psi))\,\mathcal J_{F,\rho}(\psi)\,d\mu_\rho(\psi)
$$

for every admissible integrand $h$. Define the transformed data using action $S_\epsilon\circ F_\epsilon$, this full Jacobian factor, and source $J\cdot F_\epsilon(\psi)$. Assume the common regulator limit has stable external channels $a_j$ with masses $m_{a_j}>0$, simple poles with nonzero residues $Z_{a_j}$ at $s_j=m_{a_j}^2$, where $s_j=-\eta^{\mu\nu}p_{j,\mu}p_{j,\nu}$, and connected functions that factor as

$$
G_n(p_1,\ldots,p_n)=\left(\prod_{j=1}^n\frac{Z_{a_j}^{1/2}}{s_j-m_{a_j}^2}\right)\mathcal A_n(p_1,\ldots,p_n)+\text{terms missing at least one external pole}.
$$

Here $s_j=-\eta^{\mu\nu}p_{j,\mu}p_{j,\nu}$ with $\eta=\operatorname{diag}(-1,1,1,1)$. The normalized amplitude is the joint residue $\mathcal A_n=(\prod_j Z_{a_j}^{-1/2})\lim_{s_j\to m_{a_j}^2}(\prod_j(s_j-m_{a_j}^2))G_n$. Then the normalized source generating functionals agree through order $N$, and every normalized on-shell LSZ amplitude agrees coefficientwise modulo $\epsilon^{N+1}$. The action-level relation is a change of field coordinates with induced higher-order terms; it is not equality of the two off-shell action expressions. The conclusion does not apply after dropping the Jacobian, leaving the source untransformed, discarding induced terms, or asserting nonexistent continuum or unstable-particle LSZ limits.

## Statement references

[[def-aqft-operator-basis-quotient|Finite-order invariant operator-basis quotient]]

[[prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy|Fixed-order integration-by-parts and leading-equation field-redefinition relations]]

[[def-aqft-lsz-amplitude-data|Regulated perturbative LSZ amplitude data]]

[Criado–Pérez-Victoria, §2, equations (2.2)–(2.8), and Appendix B](https://arxiv.org/pdf/1811.09413)

## Facts & Assumptions

**Given:** Full AC; the finite-order quotient and action-level relation data; a regulator family with exact change-of-variables density factors and transformed sources; and a common LSZ limit with stable one-particle simple-pole data.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; full AC is inherited through the invariant-quotient premise.

[F1] [[def-aqft-operator-basis-quotient]]: at each retained order the operator-basis class is the invariant finite polynomial space modulo its explicitly declared invariant relation subspace.

[F2] [[prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy]]: an admitted leading-equation coefficient is removed by an invertible identity-leading local field redefinition; all induced terms through the retained order must be kept.

[F3] [[def-aqft-lsz-amplitude-data]]: the transformed source is $J\cdot F_\epsilon(\psi)$, the exact Jacobian is included, and LSZ amplitudes are normalized joint residues at stable one-particle simple poles.

[F4] [[def-reductive-and-linearly-reductive-over-c]]: a complex algebraic group is reductive when it has no nontrivial closed normal unipotent subgroup, with unipotent understood by the fixed-vector condition on nonzero finite-dimensional rational modules.

[A2] For every regulator, the integration measure obeys the exact change-of-variables identity with the full Jacobian factor and transformed source.

[A3] The common regulator limit exists with the stable one-particle simple poles, nonzero residues, and connected-function pole factorization stated above.

[A4] $F_\epsilon$ is the actual local parity-preserving identity-leading formal map with inverse through order $N$; all terms through that order in $S_\epsilon\circ F_\epsilon$ are retained.

## Proof

1.1 By F2 and A4, the admitted order-$k$ relation is implemented by an actual local invertible coordinate map $F_\epsilon$; the reductive-group condition F4 is the hypothesis carried by the quotient proposition. Any boundary relation has zero action by its boundary hypothesis, and any declared polynomial identity vanishes identically. All higher-order terms generated by the full pullback are retained. [given, A1, A4, F1, F2, F4]

1.2 Fix a regulator $\rho$ and make the substitution $\varphi=F_{\rho,\epsilon}(\psi)$ in the original integral. By A2 and F3, its density becomes $\mathcal J_{F,\rho}(\psi)d\mu_\rho(\psi)$, the action becomes $S_{\rho,\epsilon}(F_{\rho,\epsilon}(\psi))$, and the source becomes $J\cdot F_{\rho,\epsilon}(\psi)$. Thus the unnormalized source functionals are equal coefficientwise through order $N$. Their zero-source values are the same unit, so their normalized functionals are equal as well. [given, A2, F3, algebra]

2.1 Taking the same source derivatives of equal normalized functionals gives equal connected Green functions for the original field and for the transformed interpolating operator $F_{\rho,\epsilon}(\psi)$. Fourier transformation and removal of the same momentum-conservation delta function preserve equality; hence the pole positions and residues agree at each regulator and in the assumed common limit. [A3, step 1.2, F3, algebra]

3.1 By F3 and A3, the LSZ amplitude is the normalized joint-pole residue of these connected functions. The functions and all external pole residues are equal by step 2.1, so the residue-normalized amplitudes are equal coefficientwise through order $N$. This conclusion is conditional on the common stable-pole limit; if it does not exist, no amplitude claim is made. [given, A3, step 2.1, F3] ∎
