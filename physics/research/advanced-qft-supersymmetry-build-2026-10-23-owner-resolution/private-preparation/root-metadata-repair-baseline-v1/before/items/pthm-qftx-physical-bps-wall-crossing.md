---
id: pthm-qftx-physical-bps-wall-crossing
kind: physics-theorem
title: Conditional physical BPS wall crossing from an exact Hall bridge
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 10
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-physical-hall-bps-wall-crossing
axiom_base: ZF + AC_omega, inherited through the supplied physical BPS charge and trace data; the finite-field Hall argument uses no choice.
deps:
  - def-countable-choice
  - def-qftx-physical-bps-charge-data
  - def-qftx-hall-spectrum-generator
  - prop-qftx-hall-spectrum-invariance
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-physical-bps-charge-data: formulation-prerequisite
  def-qftx-hall-spectrum-generator: mathematical-premise
  prop-qftx-hall-spectrum-invariance: mathematical-premise
proof_strategy: direct
physical_scope: Conditional wall-crossing identity for the second-helicity BPS index of an already specified pure four-dimensional rigid N=2 SU(2) model on regular Coulomb-branch chambers, provided a locally finite finite-quiver presentation and an exact coefficient-, charge-, pairing-, and factor-preserving Hall-to-Hilbert bridge are supplied; it asserts neither that this bridge exists nor a continuum QFT construction.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Davide Gaiotto, Gregory W. Moore, and Andrew Neitzke, Four-dimensional wall-crossing via three-dimensional field theory
      url: https://arxiv.org/pdf/0807.4723
      locator: "Introduction equation (1.1) and Section 2.2 equations (2.10)–(2.18): second-helicity supertrace, support property, sign refinement, and the ordered KS factors; the local proof below does not import the paper's physical derivation as the Hall-to-index bridge."
    - title: Frederik Denef, Quantum Quivers and Hall/Hole Halos
      url: https://arxiv.org/pdf/hep-th/0206072
      locator: "Section 5.3, printed pages 35–36: the pure-SU(2) monopole/dyon two-arrow quiver and its model-specific stability regime; this does not identify its complex quiver quantum mechanics with a finite-field Hall groupoid."
    - title: N. Seiberg and E. Witten, Electric-Magnetic Duality, Monopole Condensation, and Confinement in N=2 Supersymmetric Yang-Mills Theory
      url: https://arxiv.org/pdf/hep-th/9407087v1
      locator: "Section 4 equations (4.3)–(4.9) and Section 6 equations (6.19)–(6.28): source normalization of the charge-period central charge and alignment walls."
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$ as required by the supplied trace-class BPS-index data. Use the physical charge datum on a regular pure-SU(2) Seiberg–Witten patch and let $u_-$ and $u_+$ be points in two chambers. Write $\Omega_u(\gamma)$ for its second-helicity supertrace and $\langle\cdot,\cdot\rangle_{\mathrm{DSZ}}$ for its integral antisymmetric pairing. The finite-field Hall input is a finite acyclic quiver $Q$ over $\mathbb F_q$, where $q>1$ is a prime power, with the subobject-first, total-dimension-completed skew Hall generator from the mathematical supplier. Let

$$\chi_Q(\mathbf d,\mathbf e)=\sum_{i\in Q_0}d_i e_i-\sum_{a:i\to j}d_i e_j,\qquad \langle\mathbf d,\mathbf e\rangle_Q=\chi_Q(\mathbf d,\mathbf e)-\chi_Q(\mathbf e,\mathbf d),\qquad t=\sqrt q>0.$$

Suppose an additive map $\rho:\mathbb Z^{Q_0}\to\Gamma_{\mathrm{SW}}$ and a physical charge cone $\Gamma_+$ are supplied, where $\Gamma_+$ contains $0$, is closed under addition and is pointed, such that $\rho(\mathbb N^{Q_0})\subseteq\Gamma_+$. Supply a positive additive degree $\ell:\Gamma_+\to\mathbb N$ with finite sublevel sets and $\ell(\rho(\mathbf d))=\sum_i d_i$, and assume

$$\langle\rho(\mathbf d),\rho(\mathbf e)\rangle_{\mathrm{DSZ}}=\langle\mathbf d,\mathbf e\rangle_Q.$$

Choose one real phase rotation $\alpha$ such that for both $u\in\{u_-,u_+\}$ the vertex charges $Z_u(\mathbf e_i)=e^{-i\alpha}z_u(\rho(\mathbf e_i))$ lie in the upper half-plane, with the decreasing Hall phase order matching the chosen physical BPS-ray order. Assume the nonzero BPS-index support lies in $\Gamma_+$, is locally finite in the $\ell$-completion, and has $\Omega_u(\gamma)\in\mathbb Z$ on its support.

Let $K_{\mathrm{phys}}$ be a coefficient field containing a fixed $\hbar$ and a field embedding $\sigma:\mathbb Q(t)\to K_{\mathrm{phys}}$ with $\sigma(t)=\hbar$. Define the completed physical charge torus with basis $Y^\gamma$ and multiplication

$$Y^\gamma\star_\hbar Y^\delta=\hbar^{-\langle\delta,\gamma\rangle_{\mathrm{DSZ}}}Y^{\gamma+\delta}.$$

The charge map and coefficient embedding define the degree-continuous torus map $\Phi(x^{\mathbf d})=Y^{\rho(\mathbf d)}$, $\Phi(c x^{\mathbf d})=\sigma(c)Y^{\rho(\mathbf d)}$. On the commutative completed charge series with basis $y^\delta$ for $\delta\in\Gamma_+$, supply a sign refinement $\varepsilon:\Gamma_+\to\{\pm1\}$ with $\varepsilon(0)=1$ and $\varepsilon(\gamma+\delta)=(-1)^{\langle\gamma,\delta\rangle_{\mathrm{DSZ}}}\varepsilon(\gamma)\varepsilon(\delta)$. Define the physical KS factor at supported charge $\gamma$ by

$$\mathcal K_{\gamma,u}(y^\delta)=y^\delta\bigl(1-\varepsilon(\gamma)y^\gamma\bigr)^{\Omega_u(\gamma)\langle\delta,\gamma\rangle_{\mathrm{DSZ}}}.$$

The integer power is interpreted by its formal binomial series in the pointed degree completion. Let $\mathcal S_u$ be the composition of these factors over the stable BPS support in decreasing phase order, with the largest phase leftmost. Finally assume an exact model-specific bridge: there is a continuous group homomorphism $\Theta$ from units of the physical completed quantum torus to continuous automorphisms of the commutative charge series, and for every phase $\phi$ and either chamber it satisfies

$$\Theta\!\left(\Phi(J(S_{Z_u}(\phi)))\right)=\prod_{\substack{\gamma\in\Gamma_+\\\phi_u(\gamma)=\phi}}^{\searrow}\mathcal K_{\gamma,u}.$$

Here $S_{Z_u}(\phi)$ and $J$ are the semistable phase factor and skew integration from the finite-field Hall definition. Then

$$\mathcal S_{u_-}=\mathcal S_{u_+}.$$

This is a conditional transport theorem. The specified per-phase bridge is an additional physical input; neither the finite-field Hall identity nor this theorem asserts that the pure-SU(2) model supplies it, that the resulting index counts exist, or that the model has a continuum quantum-field-theory construction.

## Statement references

Physical BPS charge and second-helicity index data: [[def-qftx-physical-bps-charge-data]].

Finite-field Hall spectrum generators: [[def-qftx-hall-spectrum-generator]].

Finite-field Hall spectrum invariance: [[prop-qftx-hall-spectrum-invariance]].

[Gaiotto, Moore, and Neitzke, Introduction and Section 2.2](https://arxiv.org/pdf/0807.4723).

[Denef, Section 5.3](https://arxiv.org/pdf/hep-th/0206072).

[Seiberg and Witten, Sections 4 and 6](https://arxiv.org/pdf/hep-th/9407087v1).

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the physical charge/index datum, the finite acyclic quiver and its finite-field stability data, the charge/pairing map, the completed tori, and the stated bridge maps.

[A1] Assume Countable Choice, $\mathrm{AC}_\omega$: every at most countable family of nonempty sets has a choice function. It is inherited through the supplied trace-class definitions; the finite-field Hall theorem itself is choice-free. [[def-countable-choice]]

[F1] [[def-qftx-physical-bps-charge-data]]: on a regular patch the formal label lattice is $\mathbb Z^2$, $z_u(n_e,n_m)=\sqrt2(n_ea+n_ma_D)$, the chosen DSZ form is integral and antisymmetric, and $\Omega_u(\gamma)$ is the second-helicity supertrace on the supplied one-particle BPS sector.

[F2] [[def-qftx-hall-spectrum-generator]]: for a finite acyclic quiver over $\mathbb F_q$, vertex charges in $\mathbb H$ define semistable subobject-first factors $S_Z(\phi)$ and the degreewise formal skew generator $P_Z^{\mathrm{sk}}=\prod_{\phi}^{\searrow}J(S_Z(\phi))$ in the completion with skew Euler pairing; no physical interpretation is part of this definition.

[F3] [[prop-qftx-hall-spectrum-invariance]]: for any finite acyclic $Q$ over $\mathbb F_q$ and two upper-half-plane vertex-charge assignments, the completed skew generators are equal units. Its inspected proof uses the finite-field HN factorization and continuous skew integration; it proves no physical Hilbert-space identification.

[A2] The common coefficient embedding $\sigma$, charge map $\rho$, degree condition, and continuous factor-matching homomorphism $\Theta$ in the Statement are the exact bridge hypothesis. They include the equality of every Hall phase image with the physical KS factors, not merely a matching of total charge labels.

[A3] The positive cone, finite sublevels, integral indices, and locally finite support in the Statement are assumed so each formal binomial factor and each ordered product is defined degreewise.

## Proof

**Given:** The hypotheses and conventions in the Statement and [F1]–[F3], [A1]–[A3].

1.1 For a supported charge $\gamma$, put $n_\delta=\Omega_u(\gamma)\langle\delta,\gamma\rangle_{\mathrm{DSZ}}\in\mathbb Z$. Since $\ell(\gamma)>0$, the binomial expansion of $1-\varepsilon(\gamma)y^\gamma$ to any integer power is defined degreewise in the pointed completion: terms of order $k$ have degree increased by $k\ell(\gamma)$. Bilinearity gives $n_{\delta+\delta'}=n_\delta+n_{\delta'}$, so the formula for $\mathcal K_{\gamma,u}$ is multiplicative on monomials and hence on series by continuity. It fixes $y^\gamma$ because the pairing is alternating, and replacing $n_\delta$ by $-n_\delta$ gives its inverse. Finite sublevels and $\ell(\gamma)>0$ ensure each bounded-degree output uses only finitely many input terms and binomial terms. Local finiteness of the support then makes the phase-ordered composition $\mathcal S_u$ continuous and well-defined. [F1, A3, given, algebra]

1.2 The formula for $\Phi$ preserves products on basis monomials: $\Phi(x^{\mathbf d}*x^{\mathbf e})=\sigma(t)^{-\langle\mathbf e,\mathbf d\rangle_Q}Y^{\rho(\mathbf d+\mathbf e)}$, while $\Phi(x^{\mathbf d})\star_\hbar\Phi(x^{\mathbf e})=\hbar^{-\langle\rho(\mathbf e),\rho(\mathbf d)\rangle_{\mathrm{DSZ}}}Y^{\rho(\mathbf d+\mathbf e)}$. The pairing identity and $\sigma(t)=\hbar$ make these expressions equal. The degree condition in the Statement makes $\Phi$ continuous on the completions. [A2, A3, given, algebra]

1.3 The finite-field hypotheses of [F3] hold for the same $Q$ and the two assignments $Z_{u_-},Z_{u_+}$, since their vertex values lie in $\mathbb H$ by the common phase rotation. Therefore $P_{Z_{u_-}}^{\mathrm{sk}}=P_{Z_{u_+}}^{\mathrm{sk}}$ as units of the completed Hall skew torus. [F2, F3, given]

2.1 Apply the continuous homomorphism $\Phi$ from step 1.2 to the degreewise equality in step 1.3. Equal coefficients remain equal under the coefficient embedding and charge map, so $\Phi(P_{Z_{u_-}}^{\mathrm{sk}})=\Phi(P_{Z_{u_+}}^{\mathrm{sk}})$. [A2, step 1.2, step 1.3]

3.1 Since $\Theta$ is a continuous group homomorphism on units, applying it to step 2.1 preserves equality. The Hall generator is the decreasing-phase product of the factors $J(S_{Z_u}(\phi))$; multiplicativity of $\Phi$ and $\Theta$ and the per-phase identity in [A2] therefore identify each image with the corresponding physical phase factor, in the same order. Degreewise continuity and local finiteness in [A3] pass this equality from finite truncations to the full products. [F1] supplies the second-helicity index convention, and [A1] records its choice-strength premise. Thus $\mathcal S_{u_-}=\mathcal S_{u_+}$. [A1, A2, A3, F1, F2, step 2.1] ∎

## Remarks

The equality above is a model-conditional deduction from a separate finite-field Hall theorem and the explicit per-phase bridge. The physical Witten heat-supertrace item defines a different index interface; no identification of it with the second-helicity trace is used. The Hall proposition's verification record and the current owner proof inspection are kept distinct from the additional physical bridge premise.
