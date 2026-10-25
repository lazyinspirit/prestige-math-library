---
id: def-aqft-threshold-matching-map
kind: definition
title: Finite-order EFT threshold matching map
status: draft
origin: pipeline
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
dependency_level: 4
deps:
  - def-aqft-model-and-scale-data
  - def-aqft-operator-basis-physical-data
  - def-aqft-scheme-and-wilson-coefficients
justified_by: []
forward_refs: []
dependency_roles:
  def-aqft-model-and-scale-data: formulation-prerequisite
  def-aqft-operator-basis-physical-data: formulation-prerequisite
  def-aqft-scheme-and-wilson-coefficients: mathematical-premise
axiom_base: "ZF + AC_omega, inherited through the physical operator-data and declared gauge/connection interface; no full Axiom of Choice is asserted."
physical_scope: Finite-dimensional, fixed-order EFT coefficient and amplitude data with supplied threshold and RG maps; this definition asserts no generic continuum QFT or universal matching calculation.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Aneesh V. Manohar, Introduction to Effective Field Theories (full Les Houches lecture notes)
      url: https://arxiv.org/pdf/1804.05863
      locator: Chapter 5, §§5.5–5.7 and §5.10; Chapter 7, §§7.1–7.2.
    - title: C. P. Burgess, Introduction to Effective Field Theory (full review)
      url: https://arxiv.org/pdf/hep-th/0701053
      locator: §§2.2.1–2.2.2 on scale cancellation and matching; §4.1.4 on charged-particle thresholds and decoupling-subtraction matching.
verification:
  precheck: n/a
---

## Definition

Use natural units $c=\hbar=1$ and Minkowski signature $\eta=\operatorname{diag}(-,+,+,+)$. Fix a reference renormalization scale $\mu_0>0$ and a common open interval $J\subset(0,\infty)$ of renormalization scales $\mu$, with $\mu_0\in J$. Write $t=\log(\mu/\mu_0)$, so $t$ is dimensionless. A threshold datum consists of a high-energy description, denoted $+$, and a lower-energy effective description, denoted $-$. The descriptions have a common declared light-field sector and differ by the degrees of freedom retained across a specified threshold of mass $M>0$. The external-energy domain and the range of validity of the local expansion are supplied separately; in a heavy-particle expansion they ordinarily require external energy $E_{\mathrm{ext}}<M$. The Wilsonian matching scale $\mu_W$, the renormalization scale $\mu$, the threshold mass $M$, the external-energy bound $E_{\mathrm{ext}}$, and the regulator cutoff $\Lambda_{\mathrm{reg}}$ (denoted $\Lambda$ in the finite-regulator model data) have mass dimension one and are distinct data; no equality between $\mu_W$ and $\mu$ is part of this definition.

For each sign $\sigma\in\{+,-\}$, supply a finite coefficient-coordinate space $\mathbb C^{N_\sigma}$ with $N_\sigma\ge1$, a declared ordered operator basis and power-counting truncation, and a renormalization-scheme coordinate map. Any identification of the Wilsonian coefficient data at $\mu_W$ with these scheme coordinates is supplied input; this definition does not identify $\mu_W$ with $\mu$. The vector $C_\sigma(t)\in\mathbb C^{N_\sigma}$ is the column of dimensionless Wilson coefficients in that basis. The corresponding finite-order operator expression uses the supplied convention $C_{\sigma,i}O_{\sigma,i}/\Lambda_{\mathrm{op},\sigma}^{d_i-4}$, with each $O_{\sigma,i}$ of engineering dimension $d_i$ and $\Lambda_{\mathrm{op},\sigma}>0$ the coefficient-suppression scale for that theory, denoted $\Lambda_{\mathrm{op}}$ in its physical operator contract and $\Lambda$ in the generic scheme convention. It is distinct from $\Lambda_{\mathrm{reg}}$, $M$, $E_{\mathrm{ext}}$, $\mu_W$, and $\mu$ unless additional model data identify some of them. Write $\rho_{N_\sigma}$ for the realification that lists the real and imaginary parts of each coefficient. A supplied RG vector field is a continuous map $\beta_\sigma:\Omega_\sigma\to\mathbb R^{2N_\sigma}$ on a supplied open domain $\Omega_\sigma\subset J\times\mathbb R^{2N_\sigma}$; an RG trajectory satisfies
$$\frac{d}{dt}\rho_{N_\sigma}(C_\sigma(t))=\beta_\sigma(t,\rho_{N_\sigma}(C_\sigma(t))).$$
For each sign, the physical operator datum is an instance of the selected physical EFT operator contract. It specifies finitely many field species and jet generators, finite-dimensional graded field spaces, smooth field domains and regularity, reality data, and rational engineering weights. Even fields are smooth maps; odd components take values in a fixed Grassmann algebra with smooth coefficient functions.

The Lorentz action is that of the proper orthochronous group
$SO^+(1,3)=\{L\in GL_4(\mathbb R):L^T\eta L=\eta,\ \det L=1,\ L^0{}_0\ge1\}$,
and each Lagrangian density is a Lorentz scalar. The datum gives the full gauge
and flavor actions on fields, indices, and spurions. A spurion is a fixed
non-dynamical parameter used to record a declared symmetry-breaking insertion;
absent flavor symmetry is recorded as trivial, and broken symmetry requires
its spurions and weights.

The datum fixes finite derivative, field-degree, dimension, and loop cutoffs,
the relation subspace and representatives, and a complex reductive affine
algebraic group with maps relating its representations to the physical gauge
and flavor groups. Here reductive means there is no nontrivial closed normal
unipotent subgroup; unipotent means every nonzero finite-dimensional rational
module has a nonzero fixed vector. On each retained jet space the data either
verify that the algebraic invariant subspace equals the intended physical
invariant space or label the quotient as a formal algebraic selection only.

Each relation generator is recorded as a polynomial or Fierz identity, a total
divergence with compact-support or stated boundary conditions, or a
leading-equation/field-redefinition relation tied to a base action and retained
order. The latter records its variational derivative, multiplier, inverse
through the retained order, and induced higher-order terms. This quotient alone
does not establish action, off-shell Green-function, quantum-measure, or
scattering equivalence.

If a non-Abelian gauge sector is selected, its actual compact real global group
(compact meaning every open cover has a finite subcover), smooth right
principal bundle (with smooth free and transitive right action and equivariant
local trivializations), admitted bundle sectors, and unitary representations
(actions preserving specified positive-definite Hermitian forms) are part of
the data. A selected smooth principal connection uses the right-action
convention $Z_P(p):=\left.\frac{d}{dt}\right|_0p\exp_G(tZ)$,
$\omega_p(Z_P(p))=Z$, and $R_g(p)=pg$,
$R_g^*\omega=\operatorname{Ad}_{g^{-1}}\omega$, where
$\operatorname{Ad}_g=d(C_g)_e$ and $C_g(h)=ghg^{-1}$. Locally, for
$A=s^*\omega$ and a representation $\rho$ with $\rho_*:=d\rho_e$, its
curvature and associated covariant derivative are
$F_A=dA+\tfrac12[A\wedge A]$ and
$D_\mu=\partial_\mu+\rho_*(A_\mu)$, using the supplied graded Lie-bracket
convention. Each finite basis represents only this supplied fixed-order
quotient; no completeness claim about all physical relations or an infinite
operator tower is made. These field and counting inputs are not inferred from
coefficient coordinates.
For $x\in\mathbb R^{2N_\sigma}$, write $\Phi_\sigma(t,s)x\in\mathbb R^{2N_\sigma}$ for the value at $t$ of the unique realified coefficient solution with value $x$ at $s$, whenever a unique such solution exists on the interval between $s$ and $t$.

A declared matching calculation supplies a finite list of renormalized amplitudes or Green-function values $A_{\sigma,j}(t,c;\lambda_{\mathrm{IR}})$, where $j$ indexes the selected external states and kinematics, $c$ is a coefficient vector, and $\lambda_{\mathrm{IR}}$ denotes the common infrared regulator used in both descriptions. Let $U_\sigma\subset\mathbb C^{N_\sigma}$ be open coefficient domains for $\sigma\in\{+,-\}$. The supplied matching family is a jointly continuously differentiable real map $\widehat{\mathcal M}:\mathcal V\to\rho_{N_-}(U_-)$ on an open domain $\mathcal V\subset J\times\rho_{N_+}(U_+)$. Its admissible domain is the open subset $\mathcal U=\{(t,x)\in\mathcal V:(t,x)\in\Omega_+,\ (t,\widehat{\mathcal M}(t,x))\in\Omega_-\}$. It defines $M_t(c):=\rho_{N_-}^{-1}(\widehat{\mathcal M}(t,\rho_{N_+}(c)))$ for each admitted $(t,c)$, and $\widehat M_t(x):=\widehat{\mathcal M}(t,x)$ on the corresponding slice. Thus the scale derivative and coefficient derivative in the compatibility condition below both exist and are continuous. It is a matching map through the declared loop order, operator dimension, and mass-expansion order when, for every selected $j$ and every admitted pair $(t,c)$ with $c\in U_+$, the prescribed truncations of $A_{+,j}(t,c;\lambda_{\mathrm{IR}})$ and $A_{-,j}(t,M_t(c);\lambda_{\mathrm{IR}})$ agree. The truncation projection and its retained orders are part of the datum. This equality records only the selected amplitudes and orders; it neither estimates discarded terms nor asserts that a matching calculation exists for every model.

A matching map is RG-compatible on these domains when, in realified coefficient coordinates,
$$\partial_t\widehat M_t(x)+D_x\widehat M_t(x)\,\beta_+(t,x)=\beta_-\!\left(t,\widehat M_t(x)\right)$$
for every admitted $(t,x)$. Here $D_x$ is the ordinary real derivative with respect to the coefficient coordinates. RG-compatibility is an additional condition to be checked from the supplied beta functions and matching calculation; it does not follow merely from defining $M_t$ by amplitude equality.

For several thresholds, let $t_1>\cdots>t_k$ be their logarithmic scales, let $\Phi_j$ be the realified evolution in the theory active between thresholds $t_j$ and $t_{j+1}$, and let $\widehat M_j(t_j)$ map realified coefficient data from the theory above threshold $j$ to the theory below it. The ordered high-to-low transport is
$$\Phi_k(t_f,t_k)\circ\widehat M_k(t_k)\circ\Phi_{k-1}(t_k,t_{k-1})\circ\cdots\circ\widehat M_1(t_1)\circ\Phi_0(t_1,t_i),$$
whenever all displayed flows and matching maps are defined. This definition specifies supplied finite-order data and their conventions; it computes no beta-function entry or matching coefficient and asserts no continuum limit.

## Definition references

[[def-aqft-model-and-scale-data]]

[[def-aqft-operator-basis-physical-data]]

[[def-aqft-scheme-and-wilson-coefficients]]

[Manohar, full EFT lecture notes](https://arxiv.org/pdf/1804.05863)

[Burgess, full EFT review](https://arxiv.org/pdf/hep-th/0701053)
