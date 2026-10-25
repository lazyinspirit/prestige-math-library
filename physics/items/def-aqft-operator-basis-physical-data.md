---
id: def-aqft-operator-basis-physical-data
kind: definition
title: Physical EFT operator data and power-counting contract
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
deps:
  - def-countable-choice
  - def-aqft-model-and-scale-data
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-qftx-associated-covariant-derivative
  - prop-gr-fx-spin-double-cover
  - def-aqft-local-operator-and-dimension
  - lem-aqft-finite-order-local-operator-space-finite-dimensional
  - def-aqft-operator-basis-quotient
dependency_roles:
  def-countable-choice: mathematical-premise
  def-aqft-model-and-scale-data: formulation-prerequisite
  def-qftx-nonabelian-gauge-data: formulation-prerequisite
  def-qftx-principal-connection-form: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-qftx-associated-covariant-derivative: mathematical-premise
  prop-gr-fx-spin-double-cover: mathematical-premise
  def-aqft-local-operator-and-dimension: mathematical-premise
  lem-aqft-finite-order-local-operator-space-finite-dimensional: mathematical-premise
  def-aqft-operator-basis-quotient: mathematical-premise
axiom_base: "ZF + AC_omega, inherited through the declared non-Abelian gauge and principal-connection data; no full Axiom of Choice is asserted."
physical_scope: "A finite-jet, finite-order operator contract for a selected four-dimensional EFT, including its field representations, symmetry compatibility, coefficient convention, and canonical-dimension/loop truncation. It proves no complete SMEFT or HEFT classification, coefficient calculation, numerical truncation error, continuum limit, or empirical realization."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
      locator: "§2.1, printed pp. 13–15, redundant-interaction argument and equations (21)–(26), for the leading-equation field-redefinition relation; §3.1–3.3, printed pp. 28–33, for its specified power-counting class and loop-order logic."
    - title: "David B. Kaplan, Five lectures on effective field theory"
      url: "https://arxiv.org/pdf/nucl-th/0510023"
      locator: "§1.2, printed pp. 4–7, local operators and scaling dimension; §§2.4.1–2.4.2, printed pp. 22–23, gauge and global symmetry roles."
    - title: "Juan Carlos Criado and Manuel Pérez-Victoria, Field redefinitions in effective theories at higher orders"
      url: "https://arxiv.org/pdf/1811.09413"
      locator: "§3, printed pp. 9–10, equations (3.1)–(3.2), for the first-order EOM limitation; §5.1, printed pp. 16–17, equations (5.1)–(5.3), for order-by-order redefinitions and induced higher-order terms."
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§1.1.8, Claim 1.1.14 and its proof: associated sections, equivariant maps and frame-dependent component functions."
    - title: "David Tong, Quantum Field Theory"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html"
      locator: "§4.4, equations (4.365)–(4.368): Weyl representations of the Lorentz double cover; source Clifford signs are not adopted."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Use four-dimensional Minkowski space $M=\mathbb R^{1,3}$, coordinates $x^0=ct$ and metric $\eta=\operatorname{diag}(-1,1,1,1)$, and natural units $c=\hbar=1$ for mass-dimension counting. A **physical EFT operator contract** is a record of the following selected model data; none of the selections is inferred from an operator's name.

Here an EFT is an adopted low-energy model whose local Lagrangian is organized by specified fields, symmetries, coefficients, and a finite retained order; this definition implies no ultraviolet completion or physical realization. First choose a finite set $I$ of field species. For each $i\in I$, specify a finite-dimensional complex graded component space $\Phi_i=\Phi_i^{\bar 0}\oplus\Phi_i^{\bar 1}$, its bosonic or fermionic parity, its smooth field domain as specified below, any reality condition, and its assigned rational engineering weight $\Delta_i$. Fix a finite Grassmann coefficient algebra $\mathcal G=\Lambda_{\mathbb C}(\zeta_1,\ldots,\zeta_s)$, $s\ge0$, and evaluate a component of parity $\bar p$ in $\mathcal G_{\bar p}$, with smooth scalar coefficients. Ordinary commuting complex fields are the special case with coefficients in $\mathbb C\,1\subset\mathcal G_{\bar0}$. A spurion is a fixed, non-dynamical parameter assigned a representation and engineering weight, used to record a declared symmetry-breaking insertion.

The proper orthochronous Lorentz group is $SO^+(1,3)=\{L\in GL_4(\mathbb R):L^T\eta L=\eta,\ \det L=1,\ L^0{}_0\ge1\}$. Select either this group with projection $p=\operatorname{id}$, or its spin double cover $\mathcal L=\mathrm{Spin}^+(1,3)=SL(2,\mathbb C)$ with the smooth surjective covering homomorphism $p:\mathcal L\to SO^+(1,3)$ and kernel $\{I,-I\}$ supplied by the Hermitian-matrix double-cover proposition. In that convention, $X(x)=\begin{pmatrix}x^0+x^3&x^1-ix^2\\x^1+ix^2&x^0-x^3\end{pmatrix}$ and $X(p(a)x)=aX(x)a^\dagger$. Specify a smooth finite-dimensional parity-preserving representation of the selected Lorentz group on each $\Phi_i$; vector and derivative indices transform through $p$ and its dual. The spin choice uses the fixed global flat spin frame on $M$ and permits Weyl actions $v\mapsto av$ and $w\mapsto(a^\dagger)^{-1}w$ on $\mathbb C^2$; these do not descend to $SO^+(1,3)$ because $-I$ acts as $-1$. Require each Lagrangian density to be a scalar under the selected group. State the full commuting gauge and flavor actions on every field, index, and spurion. A flavor symmetry that is absent is recorded as trivial; an approximate or explicitly broken symmetry requires its breaking spurions and weights to be listed.

For a non-Abelian gauge sector, specify the compact real gauge group with its actual global form, smooth right principal bundle, admitted bundle sectors, unitary representations, and a smooth principal connection. The connection is a Lie-algebra-valued one-form reproducing fundamental vertical vectors and transforming by the adjoint action; its local curvature is $F_A=dA+\tfrac12[A\wedge A]$, and the covariant derivative in a representation $\rho$ is $D_\mu\psi=\partial_\mu\psi+\rho_*(A_\mu)\psi$. The field and connection data must include their regularity and spacetime and internal index representations. These formulas use the right-principal-bundle convention fixed by the supplied gauge-geometry definitions.

More precisely, write $P\to M$ for the chosen right principal $G$-bundle and $\rho_i:G\to\operatorname{GL}_{\mathbb C}(\Phi_i)$ for its specified parity-preserving gauge representation, unitary on its internal factors. The field bundle is $E_i=P\times_{\rho_i}\Phi_i$, with $[pg,v]=[p,\rho_i(g)v]$; the spacetime and flavor actions commute with $\rho_i$. A field configuration is a smooth section of $\bigoplus_{\bar p\in\mathbb Z/2}(E_i^{\bar p}\otimes\mathcal G_{\bar p})$, possibly restricted by stated support or reality conditions. A section assigns to each $x\in M$ a vector in that bundle's fibre over $x$. With local principal sections $s_\alpha$ and $s_\beta=s_\alpha g_{\alpha\beta}$, its components obey $\psi_{i,\beta}=\rho_i(g_{\alpha\beta}^{-1})\psi_{i,\alpha}$, coefficientwise in $\mathcal G$. Only a chosen global trivialization identifies this section with a map on all of $M$; absent a gauge sector, use $E_i=M\times\Phi_i$. A gauge transformation is a smooth $G$-equivariant bundle diffeomorphism $f:P\to P$ over $\operatorname{id}_M$, acting by $[p,v]\mapsto[f(p),v]$. In a chosen trivialization with $f(s(x))=s(x)u(x)$ this is $\psi_i\mapsto\rho_i(u)\psi_i$, accompanied by $A\mapsto\operatorname{Ad}_u A-(du)u^{-1}$ for the transformed connection $(f^{-1})^*\omega$. Any global Lorentz action covering $x\mapsto p(a)x$ additionally requires specified lifts to the gauge bundle; an index representation alone supplies no such lift.

The local operator algebra uses a separate finite-dimensional rational representation of a complex reductive affine algebraic group $G_{\mathrm{alg}}$ on the finite jet generators. A contract must supply the maps and representations relating $G_{\mathrm{alg}}$ to the selected Lorentz group, compact gauge group and flavor group. It must either verify, on each retained finite jet space, that the algebraic invariant subspace is exactly the intended physical invariant space, or label the quotient as a formal algebraic selection only. Compactness of a real gauge group alone does not identify its invariant polynomials with those of an algebraic complexification.

Choose nonnegative integer cutoffs $r$ and $q$, a coefficient field (here $\mathbb C$) and its conjugation data, and a finite rational maximum engineering dimension $D_{\max}$. Apply the local field-jet definition in the specified local frames; include the connection, curvature and their transformation rules whenever used as jet generators. A claimed physical scalar operator must agree on overlaps and be invariant under the specified local gauge transformations; a formal algebraic selection alone asserts neither property. With derivatives assigned weight one, the local field-jet definition supplies the supercommutative polynomial module $P_r=\operatorname{Sym}(J_{r,\bar 0}^*)\otimes\Lambda(J_{r,\bar 1}^*)$ and its fixed-weight subspaces. For each weight $D$, let $W_D$ be the finite raw polynomial space, $V_D=W_D^{G_{\mathrm{alg}}}$ its invariant scalar subspace, and $\widetilde R_D$ the explicitly declared $G_{\mathrm{alg}}$-stable linear relation subspace. The selected operator quotient is $\mathcal Q_D=V_D/(\widetilde R_D\cap V_D)$: it identifies exactly the declared relations and makes no completeness claim about all EFT redundancies. For each retained $D$, choose a vector-space basis of $\mathcal Q_D$ and one representative $\mathcal O_\alpha\in V_D$ of each basis class; write $\mathcal I_{\mathrm{op}}$ for the resulting finite set of representative labels and $\Delta_\alpha$ for the weight of $\mathcal O_\alpha$. The finite jet, field-degree, and dimension cutoffs give a finite-dimensional retained space, and the fixed-cutoff monomial set gives finitely many retained weights and representatives.

For each $\widetilde R_D$, record each generator as a polynomial or Fierz identity, a total divergence under compact-support or stated boundary conditions, or a leading-equation or field-redefinition relation tied to an explicit base action and retained order. An equation-of-motion entry records its variational derivative and field multiplier; a field-redefinition entry records the local map, its inverse through the retained order, and all induced higher-order terms. The quotient is a definition of the declared relation space; its existence alone does not establish action, off-shell Green-function, quantum-measure, or scattering equivalence.

Choose the canonical-dimension power-counting scheme, coefficient truncation, and a nonnegative integer loop order $L_{\max}$. The formal loop label $\zeta$ is dimensionless bookkeeping and is not a convergence claim. The positive coefficient-suppression scale $\Lambda_{\mathrm{op}}$ is an adopted fixed model parameter, invariant under the declared Lorentz, gauge, and flavor actions, with mass dimension one (engineering weight one); this definition assigns it no numerical value or hierarchy. The retained local Lagrangian has the convention

$$\mathcal L_{\mathrm{tr}}=\sum_{\substack{\alpha\in\mathcal I_{\mathrm{op}}\\\Delta_\alpha\le D_{\max}}}\sum_{\ell=0}^{L_{\max}}\zeta^\ell C_{\alpha,\ell}(\mu_W)\frac{\mathcal O_\alpha}{\Lambda_{\mathrm{op}}^{\Delta_\alpha-4}},$$

where each $\mathcal O_\alpha$ has engineering weight $\Delta_\alpha$, each $C_{\alpha,\ell}$ is dimensionless in the stated natural units, and the chosen reality conditions make $\mathcal L_{\mathrm{tr}}$ real. This is canonical-dimension counting for the selected linear EFT; HEFT chiral counting and multi-scale SCET counting are different schemes and are not implied. A truncation order is not a numerical error bound, a coefficient prediction, or a derived renormalization-group flow.
Since $\Lambda_{\mathrm{op}}$ has engineering weight one, each retained summand has engineering weight four.

If the same application also uses a finite-regulator data record, retain its graph variables, measure, Wilsonian scale $\mu_W$, heavy mass $M$, external-energy bound $E$, and regulator cutoff $\Lambda$ with their supplied meanings. The operator-suppression scale $\Lambda_{\mathrm{op}}$, regulator cutoff $\Lambda$, $M$, $E$, and $\mu_W$ are distinct parameters unless an additional model input identifies them. A map from finite-graph variables to the continuum finite-jet operator data is also additional input; the finite-regulator definition supplies no such map or continuum limit.

## Definition references

[[def-countable-choice|Countable-choice assumption inherited by the gauge data]]

[[def-aqft-model-and-scale-data|Finite-regulator EFT model and separate scale labels]]

[[def-qftx-nonabelian-gauge-data|Non-Abelian gauge group, global form, bundle, sectors, and representations]]

[[def-qftx-principal-connection-form|Right-principal connection one-form]]

[[lem-qftx-principal-curvature-cartan-bianchi|Curvature and local Cartan convention]]

[[def-qftx-associated-covariant-derivative|Associated-bundle covariant derivative]]

[[prop-gr-fx-spin-double-cover|Hermitian-matrix Lorentz double cover, projection and kernel]]

[Vákár, §1.1.8: associated sections and their local components](https://arxiv.org/html/2110.06334)

[Tong, §4.4: Weyl spinors and the Lorentz double cover](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html)

[[def-aqft-local-operator-and-dimension|Finite-jet polynomial module and engineering dimension]]

[[lem-aqft-finite-order-local-operator-space-finite-dimensional|Finite dimensionality at fixed field-degree and engineering-order cutoffs]]

[[def-aqft-operator-basis-quotient|Finite-order invariant operator-basis quotient]]
