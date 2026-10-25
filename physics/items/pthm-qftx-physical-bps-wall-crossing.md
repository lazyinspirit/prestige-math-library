---
id: pthm-qftx-physical-bps-wall-crossing
kind: physics-theorem
title: Conditional physical BPS wall crossing from an exact Hall bridge
status: "published"
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
physical_scope: Conditional identity for the second-helicity BPS index of an already specified pure four-dimensional rigid N=2 SU(2) model at two points of a regular Coulomb-branch patch, provided a finite-quiver presentation with finite charge-degree sublevels and an exact coefficient-, charge-, pairing-, and factor-preserving Hall-to-Hilbert bridge are supplied; it asserts neither that this bridge exists nor a continuum QFT construction.
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume $\mathrm{AC}_\omega$ as required by the supplied trace-class BPS-index data. Use the selected pure four-dimensional rigid $\mathcal N=2$ Yang–Mills model with global gauge group $SU(2)$ and no microscopic matter hypermultiplets, in natural units $c=\hbar=1$. On a simply connected regular patch $U$, the local periods $a,a_D:U\to\mathbb C$ are holomorphic and satisfy $\operatorname{Im}(\partial a_D/\partial a)>0$. Its formal charge-label lattice is $\Gamma_{\mathrm{SW}}=\mathbb Z^2$, with
$$z_u(n_e,n_m)=\sqrt2\bigl(n_ea(u)+n_ma_D(u)\bigr),\qquad \langle(n_e,n_m),(n'_e,n'_m)\rangle_{\mathrm{DSZ}}=2(n_mn'_e-n_en'_m).$$
For each supplied stable one-particle BPS rest sector, $\Omega_u(\gamma)$ is the second-helicity trace $-\frac12\operatorname{tr}_{E_{u,\gamma}}\!\bigl((-1)^{2J_3}(2J_3)^2\bigr)$ from the physical charge-data definition; it is set to zero off the selected stable support. Let $u_-,u_+\in U$ be two specified points.

The finite-field Hall input is a finite acyclic quiver $Q$ over $\mathbb F_q$, where $q>1$ is a prime power. For integer dimension vectors, define
$$\chi_Q(\mathbf d,\mathbf e)=\sum_{i\in Q_0}d_i e_i-\sum_{a:i\to j}d_i e_j,\qquad \langle\mathbf d,\mathbf e\rangle_Q=\chi_Q(\mathbf d,\mathbf e)-\chi_Q(\mathbf e,\mathbf d),\qquad t=\sqrt q>0.$$

Suppose an additive map $\rho:\mathbb Z^{Q_0}\to\Gamma_{\mathrm{SW}}$ and a physical charge cone $\Gamma_+$ are supplied, where $\Gamma_+$ contains $0$, is closed under addition and is pointed, such that $\rho(\mathbb N^{Q_0})\subseteq\Gamma_+$. Supply a positive additive degree $\ell:\Gamma_+\to\mathbb N$ with finite sublevel sets and require $\ell(\rho(\mathbf d))=\sum_i d_i$ for every $\mathbf d\in\mathbb N^{Q_0}$. Assume also, for all $\mathbf d,\mathbf e\in\mathbb Z^{Q_0}$, that

$$\langle\rho(\mathbf d),\rho(\mathbf e)\rangle_{\mathrm{DSZ}}=\langle\mathbf d,\mathbf e\rangle_Q.$$

Let $\mathbb H=\{z\in\mathbb C:\operatorname{Im}z>0\}$. Choose one real phase rotation $\alpha$ such that for both $u\in\{u_-,u_+\}$ the vertex charges $Z_u(\mathbf e_i)=e^{-i\alpha}z_u(\rho(\mathbf e_i))$ lie in $\mathbb H$, and extend each assignment additively by $Z_u(\mathbf d)=\sum_i d_i Z_u(\mathbf e_i)=e^{-i\alpha}z_u(\rho(\mathbf d))$. 
A representation $M$ assigns a finite-dimensional $\mathbb F_q$-vector space to each vertex and a linear map to each arrow; its dimension vector is $\mathbf d(M)\in\mathbb N^{Q_0}$. The additive central charge $Z_u(\mathbf d)$ was specified above. For nonzero $\mathbf d$, set $\phi_{Z_u}(\mathbf d)=\arg Z_u(\mathbf d)/\pi\in(0,1)$; this range follows because a nonzero sum of upper-half-plane vertex charges lies in $\mathbb H$. For every nonzero dimension vector, the defining equality for $Z_u$ identifies $\phi_{Z_u}(\mathbf d)$ with $\arg(e^{-i\alpha}z_u(\rho(\mathbf d)))/\pi$. A nonzero $M$ is $Z_u$-semistable when every nonzero subrepresentation $U\subseteq M$ satisfies $\phi_{Z_u}(\mathbf d(U))\le\phi_{Z_u}(\mathbf d(M))$.

On the isomorphism-class basis $\delta_M$, the subobject-first Hall product is $(f\star g)(L)=\sum_{U\subseteq L}f(U)g(L/U)$, with distinct embedded subobjects counted separately. Complete by total dimension, that is, take the product over dimension vectors of the finite-dimensional homogeneous components. For a phase $\phi$, put $S_{Z_u}(\phi)=\delta_0+\sum_{[M]\ne[0],\,M\ Z_u\text{-semistable},\,\phi_{Z_u}(\mathbf d(M))=\phi}\delta_M$, where $\delta_0$ is the Hall unit. Its skew integration is $J(f)=\sum_{[M]}t^{\chi_Q(\mathbf d(M),\mathbf d(M))}f(M)|\operatorname{Aut}(M)|^{-1}x^{\mathbf d(M)}$, and the completed skew torus has product $x^{\mathbf d}*x^{\mathbf e}=t^{-\langle\mathbf e,\mathbf d\rangle_Q}x^{\mathbf d+\mathbf e}$. The resulting Hall spectrum generator is the decreasing-phase product $P_{Z_u}^{\mathrm{sk}}=\mathop{*}_{\phi}^{\searrow}J(S_{Z_u}(\phi))$, with the largest phase leftmost.

For each of the two specified points define the nonzero index support
$$\Sigma_u:=\{\gamma\in\Gamma_+\setminus\{0\}:\Omega_u(\gamma)\ne0\}.$$
Assume $\{\gamma\in\Gamma_{\mathrm{SW}}\setminus\{0\}:\Omega_u(\gamma)\ne0\}\subseteq\Gamma_+$ for both specified points, so $\Sigma_u$ is the full nonzero index support. Assume $\{\gamma\in\Sigma_u:\ell(\gamma)\le N\}$ is finite for every $N\ge0$, $\Omega_u(\gamma)\in\mathbb Z$ on $\Sigma_u$, and $e^{-i\alpha}z_u(\gamma)\in\mathbb H$ for every $u\in\{u_-,u_+\}$ and $\gamma\in\Sigma_u$. Thus every phase $\phi_u(\gamma)=\arg(e^{-i\alpha}z_u(\gamma))/\pi$ used below is defined. Zero charge is excluded from $\Sigma_u$ and from all phase-indexed products.

Let $K_{\mathrm{phys}}$ be a coefficient field with a field embedding $\sigma:\mathbb Q(t)\to K_{\mathrm{phys}}$, and write $v:=\sigma(t)$ for the dimensionless Hall coefficient parameter. Here $\mathbb Q(t)=\mathbb Q(\sqrt q)$ is the field generated by the specified algebraic number $t$, so $v^2=q$ and $v\ne1$; $v$ is distinct from the physical constant $\hbar=1$ fixed by natural units. Use the supplied additive degree $\ell:\Gamma_+\to\mathbb N$ with $\ell(0)=0$, $\ell(\gamma)>0$ for $\gamma\ne0$, and finite sublevel sets. Define the commutative formal charge-series algebra and the quantum charge torus by

$$\widehat{\mathbb A}_{\mathrm{phys}}:=\prod_{\gamma\in\Gamma_+}K_{\mathrm{phys}}y^\gamma,\qquad y^\gamma y^\delta=y^{\gamma+\delta},$$

$$\widehat{\mathbb T}_{\mathrm{phys}}:=\prod_{\gamma\in\Gamma_+}K_{\mathrm{phys}}Y^\gamma,\qquad Y^\gamma\star_v Y^\delta=v^{-\langle\delta,\gamma\rangle_{\mathrm{DSZ}}}Y^{\gamma+\delta}.$$

For either algebra and $N\ge0$, let $F^N$ consist of series supported on charges $\gamma$ with $\ell(\gamma)\ge N$. Give both algebras the linear topology whose neighborhoods of zero are the $F^N$. Finite sublevel sets make every truncation modulo $F^N$ finite-dimensional; the algebras are separated and complete, and their products are degreewise finite. Give $\widehat{\mathbb T}_{\mathrm{phys}}^\times$ the subspace topology from $\widehat{\mathbb T}_{\mathrm{phys}}$. For each $N\ge1$, let $G_N$ be the group of $K_{\mathrm{phys}}$-algebra automorphisms of $\widehat{\mathbb A}_{\mathrm{phys}}/F^N$ preserving every induced quotient filtration subspace $F^j/F^N$ for $1\le j<N$, with reduction as the transition maps and the discrete topology on each $G_N$. Define $\operatorname{Aut}_{\mathrm{fil}}(\widehat{\mathbb A}_{\mathrm{phys}}):=\varprojlim_{N\ge1}G_N$ with the inverse-limit topology. It is the group of continuous automorphisms and continuous inverses preserving the degree filtration.

The charge map and coefficient embedding define the degree-continuous torus map, extended from the total-dimension-completed Hall skew torus by continuity,

$$\Phi(x^{\mathbf d})=Y^{\rho(\mathbf d)},\qquad \Phi(c x^{\mathbf d})=\sigma(c)Y^{\rho(\mathbf d)}.$$

The degree identity $\ell(\rho(\mathbf d))=\sum_i d_i$ for $\mathbf d\in\mathbb N^{Q_0}$ ensures this continuity. On the commutative completed charge series, supply a sign refinement $\varepsilon:\Gamma_+\to\{\pm1\}$ with $\varepsilon(0)=1$ and $\varepsilon(\gamma+\delta)=(-1)^{\langle\gamma,\delta\rangle_{\mathrm{DSZ}}}\varepsilon(\gamma)\varepsilon(\delta)$. Define the physical KS factor for each $\gamma\in\Sigma_u$ by

$$\mathcal K_{\gamma,u}(y^\delta)=y^\delta\bigl(1-\varepsilon(\gamma)y^\gamma\bigr)^{\Omega_u(\gamma)\langle\delta,\gamma\rangle_{\mathrm{DSZ}}}.$$

The integer power is interpreted by its formal binomial series in the degree topology. When charges have equal phase, order their labels lexicographically as integer pairs $(n_e,n_m)$. Let $\mathcal S_u$ be the composition of these factors over $\Sigma_u$ in decreasing phase order, with the largest phase leftmost and the stated lexicographic order within each phase. Finally assume an exact model-specific bridge: there is a continuous group homomorphism
$$\Theta:\widehat{\mathbb T}_{\mathrm{phys}}^\times\longrightarrow\operatorname{Aut}_{\mathrm{fil}}(\widehat{\mathbb A}_{\mathrm{phys}}),$$
and for every phase $\phi$ and either specified point it satisfies, using the same within-phase order,
$$\Theta\!\left(\Phi(J(S_{Z_u}(\phi)))\right)=\prod_{\substack{\gamma\in\Sigma_u\\\phi_u(\gamma)=\phi}}^{\searrow}\mathcal K_{\gamma,u}.$$

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

[A3] The positive cone, finite degree sublevels of the support, and integral indices in the Statement are assumed so each formal binomial factor and each ordered product is defined degreewise.

## Proof

**Given:** The hypotheses and conventions in the Statement and [F1]–[F3], [A1]–[A3].

1.1 For a supported charge $\gamma\in\Sigma_u$, put $n_\delta=\Omega_u(\gamma)\langle\delta,\gamma\rangle_{\mathrm{DSZ}}\in\mathbb Z$. Since $\ell(\gamma)>0$, the binomial expansion of $1-\varepsilon(\gamma)y^\gamma$ to any integer power is defined degreewise in the stated completion: terms of order $k$ have degree increased by $k\ell(\gamma)$. Bilinearity gives $n_{\delta+\delta'}=n_\delta+n_{\delta'}$, so the formula for $\mathcal K_{\gamma,u}$ is multiplicative on monomials and hence on series by continuity. It fixes $y^\gamma$ because the pairing is alternating, and replacing $n_\delta$ by $-n_\delta$ gives its inverse. Every correction term raises degree, so $\mathcal K_{\gamma,u}$ and its inverse preserve each $F^N$ and define elements of $\operatorname{Aut}_{\mathrm{fil}}(\widehat{\mathbb A}_{\mathrm{phys}})$. Finite sublevels and local finiteness of $\Sigma_u$ ensure each bounded-degree truncation of the ordered composition uses only finitely many input terms and factors. Thus the phase-ordered composition $\mathcal S_u$ is defined in the inverse-limit topology. [F1, A3, given, algebra]

1.2 The formula for $\Phi$ preserves products on basis monomials: $\Phi(x^{\mathbf d}*x^{\mathbf e})=\sigma(t)^{-\langle\mathbf e,\mathbf d\rangle_Q}Y^{\rho(\mathbf d+\mathbf e)}$, while $\Phi(x^{\mathbf d})\star_v\Phi(x^{\mathbf e})=v^{-\langle\rho(\mathbf e),\rho(\mathbf d)\rangle_{\mathrm{DSZ}}}Y^{\rho(\mathbf d+\mathbf e)}$. The pairing identity and $\sigma(t)=v$ make these expressions equal. The degree identity in the Statement makes $\Phi$ continuous on the total-dimension and $\ell$-degree completions. [A2, A3, given, algebra]

1.3 The finite-field hypotheses of [F3] hold for the same $Q$ and the two assignments $Z_{u_-},Z_{u_+}$, since their vertex values lie in $\mathbb H$ by the common phase rotation. Therefore $P_{Z_{u_-}}^{\mathrm{sk}}=P_{Z_{u_+}}^{\mathrm{sk}}$ as units of the completed Hall skew torus. [F2, F3, given]

2.1 Apply the continuous homomorphism $\Phi$ from step 1.2 to the degreewise equality in step 1.3. Equal coefficients remain equal under the coefficient embedding and charge map, so $\Phi(P_{Z_{u_-}}^{\mathrm{sk}})=\Phi(P_{Z_{u_+}}^{\mathrm{sk}})$. [A2, step 1.2, step 1.3]

3.1 Since $\Theta$ is continuous for the stated unit-group and inverse-limit automorphism topologies, applying it to step 2.1 preserves equality. The Hall generator is the decreasing-phase product of the factors $J(S_{Z_u}(\phi))$; multiplicativity of $\Phi$ and $\Theta$ and the per-phase identity in [A2] therefore identify each image with the corresponding physical phase factor, in the same order. Degreewise continuity and local finiteness in [A3] pass this equality from finite truncations to the full products. The phase condition on $\Sigma_u$ ensures every factor used in that bridge is defined, and $\Sigma_u\subseteq\Gamma_+\setminus\{0\}$ excludes the undefined zero-charge phase. [F1] supplies the second-helicity index convention, and [A1] records its choice-strength premise. Thus $\mathcal S_{u_-}=\mathcal S_{u_+}$. [A1, A2, A3, F1, F2, step 2.1] ∎

## Remarks

The equality above is a model-conditional deduction from a separate finite-field Hall theorem and the explicit per-phase bridge. The physical Witten heat-supertrace item defines a different index interface; no identification of it with the second-helicity trace is used. The Hall proposition's verification record and the current owner proof inspection are kept distinct from the additional physical bridge premise.
