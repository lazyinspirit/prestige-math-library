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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Use natural units $c=\hbar=1$ and Minkowski signature $\eta=\operatorname{diag}(-,+,+,+)$. Fix a reference renormalization scale $\mu_0>0$ and a common open interval $J\subset(0,\infty)$ of renormalization scales $\mu$, with $\mu_0\in J$. Define $I:=\{\log(\mu/\mu_0):\mu\in J\}$. Because $\mu\mapsto\log(\mu/\mu_0)$ is an increasing homeomorphism from $(0,\infty)$ to $\mathbb R$, $I$ is an open interval containing $0$. For $\mu\in J$, write $t=\log(\mu/\mu_0)\in I$; $t$ is dimensionless. A threshold datum consists of a high-energy description, denoted $+$, and a lower-energy effective description, denoted $-$. The descriptions have a common declared light-field sector and differ by the degrees of freedom retained across a specified threshold of mass $M>0$. The external-energy domain and the range of validity of the local expansion are supplied separately; in a heavy-particle expansion they ordinarily require external energy $E_{\mathrm{ext}}<M$. The Wilsonian matching scale $\mu_W$, the renormalization scale $\mu$, the threshold mass $M$, the external-energy bound $E_{\mathrm{ext}}$, and the regulator cutoff $\Lambda_{\mathrm{reg}}$ (denoted $\Lambda$ in the finite-regulator model data) have mass dimension one and are distinct data; no equality between $\mu_W$ and $\mu$ is part of this definition.

For each sign $\sigma\in\{+,-\}$, supply a finite nonempty ordered set $D_\sigma\subset\mathbb Q$ of retained engineering weights. For every $d\in D_\sigma$, supply an instance of the fixed-weight scheme contract: a finite complex quotient $\mathcal Q_{\sigma,d}$ of operators of weight $d$, an ordered basis $O_{\sigma,d,1},\ldots,O_{\sigma,d,N_{\sigma,d}}$ with $N_{\sigma,d}\ge1$, and scheme maps $\mathcal R_{\sigma,d,\mu}:B_\sigma\to\mathbb C^{N_{\sigma,d}}$ on the common nonempty input-label set $B_\sigma$ and common scale interval $J$. The quotient relations and power-counting truncation are declared for each block. Set $N_\sigma=\sum_{d\in D_\sigma}N_{\sigma,d}$ and concatenate these bases and maps in the supplied weight order to obtain the ordered basis of $\bigoplus_{d\in D_\sigma}\mathcal Q_{\sigma,d}$ and the scheme map $\mathcal R_{\sigma,\mu}(b)=(\mathcal R_{\sigma,d,\mu}(b))_{d\in D_\sigma}\in\mathbb C^{N_\sigma}$. The common label $b$ allows correlations between blocks; no independence of their coefficients is assumed. The fixed-weight case is recovered by taking a singleton $D_\sigma$. Any identification of the Wilsonian coefficient data at $\mu_W$ with these scheme coordinates is supplied input; this definition does not identify $\mu_W$ with $\mu$. The vector $C_\sigma(t)\in\mathbb C^{N_\sigma}$ is the column of dimensionless Wilson coefficients in that basis. The corresponding finite-order operator expression uses the supplied convention $C_{\sigma,i}O_{\sigma,i}/\Lambda_{\mathrm{op},\sigma}^{d_i-4}$, with each $O_{\sigma,i}$ of engineering dimension $d_i$ and $\Lambda_{\mathrm{op},\sigma}>0$ the coefficient-suppression scale for that theory, denoted $\Lambda_{\mathrm{op}}$ in its physical operator contract and $\Lambda$ in the generic scheme convention. It is distinct from $\Lambda_{\mathrm{reg}}$, $M$, $E_{\mathrm{ext}}$, $\mu_W$, and $\mu$ unless additional model data identify some of them. Write $\rho_{N_\sigma}$ for the realification that lists the real and imaginary parts of each coefficient. The supplied full RG vector field may couple different weight blocks; no block-diagonal restriction is imposed. A supplied RG vector field is a continuous map $\beta_\sigma:\Omega_\sigma\to\mathbb R^{2N_\sigma}$ on a supplied open domain $\Omega_\sigma\subset I\times\mathbb R^{2N_\sigma}$; an RG trajectory satisfies
$$\frac{d}{dt}\rho_{N_\sigma}(C_\sigma(t))=\beta_\sigma(t,\rho_{N_\sigma}(C_\sigma(t))).$$
For each sign, the physical operator datum is an instance of the selected physical EFT operator contract. It specifies finitely many field species and jet generators, finite-dimensional graded field spaces, smooth field domains and regularity, reality data, and rational engineering weights. For a chosen right principal bundle $P\to M$ and gauge representation $\rho_i$ on the component space $\Phi_i$, fields are smooth sections of $E_i=P\times_{\rho_i}\Phi_i$, with coefficients of the appropriate parity in the supplied finite Grassmann algebra. Here $[pg,v]=[p,\rho_i(g)v]$; if local principal sections obey $s_\beta=s_\alpha g_{\alpha\beta}$, the field components obey $\psi_{i,\beta}=\rho_i(g_{\alpha\beta}^{-1})\psi_{i,\alpha}$. Smooth maps on all of $M$ describe these sections only after a global trivialization is chosen; with no gauge sector use $E_i=M\times\Phi_i$.

Select the proper orthochronous Lorentz group
$SO^+(1,3)=\{L\in GL_4(\mathbb R):L^T\eta L=\eta,\ \det L=1,\ L^0{}_0\ge1\}$,
or its spin double cover $\mathcal L=SL(2,\mathbb C)$ with projection $p:\mathcal L\to SO^+(1,3)$ and kernel $\{I,-I\}$ from the physical operator contract. In its convention $X(p(a)x)=aX(x)a^\dagger$, where $X(x)=\begin{pmatrix}x^0+x^3&x^1-ix^2\\x^1+ix^2&x^0-x^3\end{pmatrix}$. Specify the parity-preserving component representations of the selected group; spacetime and derivative indices transform through $p$ and its dual (with $p=\operatorname{id}$ in the tensor-only choice), and require each Lagrangian density to be a scalar. A global action on gauge-bundle sections additionally requires chosen lifts covering the spacetime action. The datum gives the full gauge
and flavor actions on fields, indices, and spurions. A spurion is a fixed
non-dynamical parameter used to record a declared symmetry-breaking insertion;
absent flavor symmetry is recorded as trivial, and broken symmetry requires
its spurions and weights.

The datum fixes finite derivative, field-degree, dimension, and loop cutoffs,
the relation subspace and representatives, and a complex reductive affine
algebraic group with maps relating its representations to the selected Lorentz, physical gauge
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

Let $S$ be a finite index set whose element $j$ specifies selected external states, kinematics, and, for a Green-function datum, an ordered field component together with any test-function pairing needed to define its value. For each $j\in S$, supply a common complex vector space $\mathcal Y_j$ of outputs and a finite-dimensional subspace $\mathcal Y_j^{\mathrm{ret}}\subseteq\mathcal Y_j$, with a supplied linear projection $P_j:\mathcal Y_j\to\mathcal Y_j$ satisfying $P_j^2=P_j$ and $\operatorname{im}P_j=\mathcal Y_j^{\mathrm{ret}}$. This projection selects the declared retained loop, operator-dimension, and mass-expansion orders. Also supply a set $\mathcal R_{\mathrm{IR}}$ of infrared-regulator labels and choose one common $\lambda_{\mathrm{IR}}\in\mathcal R_{\mathrm{IR}}$ for each comparison. For each $\sigma\in\{+,-\}$ and $j\in S$, a matching calculation supplies a map $A_{\sigma,j}:D_{\sigma,j}\to\mathcal Y_j$, where $D_{\sigma,j}\subset I\times U_\sigma\times\mathcal R_{\mathrm{IR}}$ is a specified domain. The supplied renormalization and normalization prescription for each theory is part of this data; in this definition, a renormalized amplitude or Green-function value means the resulting element of $\mathcal Y_j$ for the selected external-state, kinematic, and component data at the stated regulator. No regularity of $A_{\sigma,j}$ is required beyond being defined at the inputs used below, and this definition neither constructs those maps nor asserts that they exist for every model.

Let $U_\sigma\subset\mathbb C^{N_\sigma}$ be open coefficient domains for $\sigma\in\{+,-\}$. The supplied matching family is a jointly continuously differentiable real map $\widehat{\mathcal M}:\mathcal V\to\rho_{N_-}(U_-)$ on an open domain $\mathcal V\subset I\times\rho_{N_+}(U_+)$. Its admissible domain is the open subset $\mathcal U=\{(t,x)\in\mathcal V:(t,x)\in\Omega_+,\ (t,\widehat{\mathcal M}(t,x))\in\Omega_-\}$. It defines $M_t(c):=\rho_{N_-}^{-1}(\widehat{\mathcal M}(t,\rho_{N_+}(c)))$ for each admitted $(t,c)$, and $\widehat M_t(x):=\widehat{\mathcal M}(t,x)$ on the corresponding slice. Thus the scale derivative and coefficient derivative in the compatibility condition below both exist and are continuous. It is a matching map through the declared loop order, operator dimension, and mass-expansion order when, for every selected $j\in S$ and every admitted pair $(t,c)$ with $c\in U_+$, both $(t,c,\lambda_{\mathrm{IR}})\in D_{+,j}$ and $(t,M_t(c),\lambda_{\mathrm{IR}})\in D_{-,j}$ and
$$P_j\!\left(A_{+,j}(t,c;\lambda_{\mathrm{IR}})\right)=P_j\!\left(A_{-,j}(t,M_t(c);\lambda_{\mathrm{IR}})\right).$$
The retained orders and projection are part of the supplied data. This equality records only the selected outputs and orders; it gives no estimate on discarded terms and asserts no matching calculation exists for every model.

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
