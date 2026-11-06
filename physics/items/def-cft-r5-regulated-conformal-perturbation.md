---
id: def-cft-r5-regulated-conformal-perturbation
kind: definition
title: Regulated conformal perturbation and beta-function conventions
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
deps:
  - def-cft-r5-full-local-cft-data
  - def-cft-r5-two-dimensional-bootstrap-system
dependency_roles:
  def-cft-r5-full-local-cft-data: mathematical-premise
  def-cft-r5-two-dimensional-bootstrap-system: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - source_key: S01
      title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, published 1989, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§8.6, printed pp. 128–130: first-order conformal perturbations, operator dimensions, OPE obstructions to exact marginality."
      source_limit: The discussion is about CFT perturbations and marginal operators; it does not prove all-order beta functions or existence of a global RG trajectory.
    - source_key: S20
      title: Satoshi Nawata, Runkai Tao, Daisuke Yokoyama, An Introduction to 2d Conformal Field Theory, arXiv:2208.05180v5
      url: https://arxiv.org/pdf/2208.05180v5
      locator: "§6.1, Eqs. (6.5)–(6.22): operator deformations, regulated insertion expansion (6.12), length-scale beta functions, and correlation functions with field mixing."
      source_limit: The RG and path-integral calculations are framework calculations; the notes do not establish existence of every proposed model or its global flow.
physical_scope: Formal perturbations of declared full local two-dimensional CFT data under a specified UV cutoff, counterterm prescription, operator basis, and renormalization scheme; no model realization or global flow is asserted.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Define perturbations of a two-dimensional fixed point by normalized local operators $\mathcal O_i$, a UV regulator/counterterm prescription, and couplings $\lambda^i$ with dimensionful factors $\mu^{2-\Delta_i}$; define beta functions by an explicit RG scale and scheme.
Here the dimensionless coupling coordinates denoted $\lambda^i$ in that summary are written $g^i(a)$ below; $\lambda_{\rm phys}^i$ denotes the fixed dimensionful coefficient.

Fix full local two-dimensional CFT data in the state-space/OPE presentation, together with the spectrum, OPE coefficients, and convergent channel data. These data specify the state-field map and the OPE coefficients used below; their current draft status does not assert that a particular model realizes them. Choose a finite or countable family of local scaling eigenoperators $\mathcal O_i$ with weights $(h_i,\bar h_i)$ and total scaling dimensions $\Delta_i=h_i+\bar h_i$. Write $s_i=h_i-\bar h_i$ for spin. A perturbation is scalar only when each $s_i=0$, or when nonscalar terms are paired so their sum is a scalar under rotations. For scalar operators, the nonzero two-point coefficient matrix $N_{ij}$ in each compatible degenerate scaling sector is fixed by $\langle\mathcal O_i(x)\mathcal O_j(0)\rangle_*=N_{ij}|x|^{-\Delta_i-\Delta_j}$; positivity is not assumed here. For operators of nonzero spin, the data instead specify the full two-point distribution $W_{ij}$ on $\mathbb R^2\setminus\{0\}$ and its pairing, with the rotation law $W_{ij}(R_\alpha x)=e^{-i(s_i+s_j)\alpha}W_{ij}(x)$ for $R_\alpha(x^1,x^2)=(x^1\cos\alpha-x^2\sin\alpha,x^1\sin\alpha+x^2\cos\alpha)$. The scalar radial formula is not imposed on them.

Use a flat Euclidean coordinate patch $x=(x^1,x^2)\in\mathbb R^2$ with both coordinates measured in units of length, Euclidean measure $d^2x$, and $\hbar=1$. The dimensionless complex coordinate in the supplier is $z=(x^1+ix^2)/\ell_{\rm ref}$ for one fixed reference length $\ell_{\rm ref}>0$; conformal weights remain dimensionless. A local action is dimensionless. A field of total scaling dimension $\Delta_i$ has units $[{\rm length}]^{-\Delta_i}$. Let $a>0$ be a UV cutoff length, and let $\lambda_{\rm phys}^i$ have units $[{\rm length}]^{\Delta_i-2}$. The dimensionless cutoff coupling is $g^i(a)=\lambda_{\rm phys}^i a^{2-\Delta_i}$. This conversion at a fixed cutoff gives engineering rescaling when $\lambda_{\rm phys}^i$ is held fixed; a renormalized trajectory need not hold these dimensionful coefficients fixed. Choose a dimensionless smooth compactly supported switching function $\chi:\mathbb R^2\to\mathbb R$, equal to $1$ near the external insertions, as an infrared regulator. Write the formal regulated deformation as

$$S(g,a)=S_*+V_a(g),\qquad V_a(g)=\sum_i g^i a^{\Delta_i-2}\int_{\mathbb R^2}d^2x\,\chi(x)\mathcal O_i(x)+S_{\rm ct}(g,a).$$

Here $S_*$ denotes the fixed-point vacuum functional $\langle\cdot\rangle_*$ supplied by the CFT data, not an inferred action on a configuration space. The expression $S_*+V_a$ means the insertion prescription below. A path-integral realization would require additional configuration-space, measure and integrability data and is not assumed. The local counterterm $S_{\rm ct}(g,a)$ is a specified formal series with zero constant term, whose coefficients are dimensionless integrals of specified CFT fields and their derivatives against compactly supported smooth functions. Give every coefficient, including finite counterterms, its field labels, smearing, and cutoff dependence. The operator basis, its two-point normalization, contact-term rules, symmetry restrictions, convention for identifying perturbations related by field redefinitions, and finite scheme choices are fixed data.

Define the regulated insertion operation $\mathfrak P_a$ as follows. For each number $n$ of insertions choose a dimensionless smooth symmetric function $\rho_{a,n}$ of their positions, zero when any pair has distance at most $a$ and equal to $1$ when every pair has distance at least $2a$; put $\rho_{a,0}=\rho_{a,1}=1$. For a product of smeared local fields, multiply its fixed-point correlation function away from coincident positions by $\rho_{a,n}$, extend it by zero across the removed diagonals, and integrate against the specified smearing functions. Use this rule for all products of interaction and external insertions, with all derivative and contact counterterms explicitly specified by the prescription. Compact support supplies the infrared cutoff. If other regulators are used, specify the corresponding linear operation on these insertion products and its domains instead. No infinite-volume integral is defined by notation alone: removing $\chi$ requires specified limits of every coefficient used in a claim, with the required convergence.

Let $F$ belong to the vector space spanned by formal ordered lists of the supplier's field labels and compactly supported test densities, with pairwise disjoint external supports; the empty list is $1$. Impose linearity in each field label and test density, and reduce identity-field insertions using $Y(\mathbf1;f)=(\int f)I$ before applying the regulator. No further quotient by operator identities is implicit in this regulated insertion space. Such lists and their linear combinations are the external field polynomials used below. Supply a linear external-insertion renormalization map $Z_{a,g}=I+O(g)$ on this space with $Z_{a,g}1=1$; every coefficient is a specified linear combination of local field insertion lists, with declared convergence for infinite combinations. It incorporates field mixing and normalization. Define the normalized perturbed correlator by

$$\mathcal C_{a,g}(F)=\frac{\displaystyle\sum_{k\ge0}\frac{(-1)^k}{k!}\,\mathfrak P_a\langle (Z_{a,g}F)V_a(g)^k\rangle_*}{\displaystyle\sum_{k\ge0}\frac{(-1)^k}{k!}\,\mathfrak P_a\langle V_a(g)^k\rangle_*}.$$

Initially this is a formal series in the commuting variables $g^i$: equality means equality of the coefficient of every monomial of finite support. Since $V_a(0)=0$ and $\langle1\rangle_*=1$, the denominator has constant coefficient $1$; formal division means recursively solving for each total degree. For countably many couplings, every coefficient sum must be finite or converge in the specified topology with a stated summation rule. There is no assertion of convergence in perturbative order. At $g=0$ the prescription gives the regulated fixed-point correlator, equal to the unregulated one for external supports separated by more than $2a$. In particular, an OPE logarithm may change a nonlinear beta coefficient, and first-order marginality alone does not assert exact marginality.

The renormalization scale is $\mu=a^{-1}$, with units of inverse length. Define RG time by $t=\log(a/a_0)=-\log(\mu/\mu_0)$, where $a_0=\mu_0^{-1}$ is a fixed reference cutoff. Increasing $t$ is the IR direction. Let $Q\subseteq\mathbb R^N$ be an open domain in a declared finite-dimensional real coupling chart, or, when infinitely many couplings are retained, let $Q$ be open in a specified Hausdorff locally convex real topological vector space $E$. Choose an open interval $J\subseteq\mathbb R$ containing $0$ and an open set $D\subseteq J\times Q$ containing $\{0\}\times Q$. A local renormalized RG map is a map $R:D\to Q$; write $D_t=\{g\in Q:(t,g)\in D\}$ and $R_t(g)=R(t,g)$. Require $R_0={\rm id}_Q$ and $R_{t+s}(g)=R_t(R_s(g))$ whenever both sides are defined. In finite dimensions require $R$ to be continuously differentiable. In the locally convex case require Bastiani $C^1$: for each $(t,g)\in D$ and direction $h\in\mathbb R\times E$, the directional derivative
$$dR((t,g);h)=\lim_{\varepsilon\to0}\frac{R((t,g)+\varepsilon h)-R(t,g)}{\varepsilon}$$
exists in the topology of $E$ and is jointly continuous in $((t,g),h)$. Include $0\in Q$ and require $R_t(0)=0$. In either case set $\beta_g=\left.\partial_tR(t,g)\right|_{t=0}$. If component coordinates are used, $\beta^i(g)$ denotes the corresponding coordinate of $\beta_g$.

For this differentiable realization, also supply actual correlation functionals $C_{a,g}(F)$ on $Q$, linear in $F$ with $C_{a,g}(1)=1$, realizing the prescribed formal expansion $\mathcal C_{a,g}(F)$: either give convergence and sum the displayed series, or give the functions and justify their stated perturbative asymptotic expansion, including its remainder interpretation. They are additional data, not consequences of abstract OPE data or of a symbolic action. In a fixed physical coordinate and external-field normalization, cutoff preservation means the explicit identity

$$C_{e^t a,R_t(g)}(F)=C_{a,g}(F)$$

for every declared external polynomial $F$ whose distinct external supports have pairwise distance greater than $2\max(a,e^t a)$, and every admissible cutoff pair, with the same infrared prescription. Any change of field normalization is already included in $Z_{a,g}$. The cutoff range, external test domain, and matching identities must be supplied; their solvability and uniqueness in the chosen coupling chart are not asserted. Thus $R$ is part of a perturbation package satisfying these identities, not a flow inferred from engineering dimensions alone. In the infinite-dimensional case every coordinate family used is declared and every sum, derivative, and contraction converges in the specified topology.

A purely formal package instead supplies $R_t(g)$ as a zero-constant-term series with coefficientwise continuously differentiable dependence on $t$, identity at $t=0$, and the same local composition law. Require substitution to be well-defined coefficientwise (including convergence of coefficient sums for countably many couplings). Impose the displayed matching identity with $C$ replaced by $\mathcal C$, coefficient by coefficient, and define the formal beta series by $\beta(g)=\left.\partial_t R_t(g)\right|_{0}$ coefficientwise. This version needs no evaluated functions on $Q$; it supplies no differentiable realization. Both versions keep existence of such matching data, cutoff removal, and global flow as separate obligations.

## Definition references

[[def-cft-r5-full-local-cft-data]]

[[def-cft-r5-two-dimensional-bootstrap-system]]

