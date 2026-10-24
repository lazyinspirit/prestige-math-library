---
id: ex-aqft-scalar-gauge-operator-power-counting
kind: example
title: A finite-order SU(2) scalar operator contract
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
proof_strategy: direct
deps:
  - def-aqft-operator-basis-physical-data
  - def-countable-choice
  - def-qftx-nonabelian-gauge-data
  - def-aqft-local-operator-and-dimension
  - def-aqft-operator-basis-quotient
dependency_roles:
  def-aqft-operator-basis-physical-data: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-gauge-data: formulation-prerequisite
  def-aqft-local-operator-and-dimension: mathematical-premise
  def-aqft-operator-basis-quotient: mathematical-premise
physical_scope: "Formal finite-order scalar operator counting for an SU(2) gauge representation and its complex-algebraic invariant model; no complete basis, matching coefficient, truncation error, continuum construction, or empirical claim."
axiom_base: "ZF + AC_omega through the supplied non-Abelian gauge datum; no full Axiom of Choice is asserted."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
      locator: "§§3.1–3.3, printed pp. 28–33: a stated operator class, power counting, and its model-dependent loop-order logic."
    - title: "David B. Kaplan, Five lectures on effective field theory"
      url: "https://arxiv.org/pdf/nucl-th/0510023"
      locator: "§1.2, printed pp. 4–7, and §§2.4.1–2.4.2, printed pp. 22–23: local operators, engineering dimension, and gauge/global symmetry constraints."
verification:
  precheck: pending
---

## Example

Assume countable choice $\mathrm{AC}_\omega$, meaning that every countable family of nonempty sets has a choice function, for the supplied gauge datum. Use $M=\mathbb R^{1,3}$ with $\eta=\operatorname{diag}(-1,1,1,1)$ and $c=\hbar=1$. Let $SU(2)=\{u\in GL_2(\mathbb C):u^\dagger u=I,\det u=1\}$. Use the trivial right principal bundle $P=M\times SU(2)$ with projection $\pi(x,g)=x$ and right action $(x,g)h=(x,gh)$. Its product connection has horizontal spaces $\mathcal H_{(x,g)}=T_xM\times\{0_g\}\subset T_xM\times T_gSU(2)$, complementary to the vertical spaces $\{0_x\}\times T_gSU(2)$ and invariant under the right action. The associated $\mathfrak{su}(2)$-valued connection form $\omega$ has kernel $\mathcal H$; for the global section $s(x)=(x,e)$ its potential is $A=s^*\omega=0$, hence $A_\mu=0$. Gauge transformations are smooth maps $u:M\to SU(2)$ acting by $H(x)\mapsto u(x)H(x)$ and $\widetilde H(x)\mapsto\widetilde H(x)u(x)^{-1}$. Take one even Lorentz-scalar complex doublet $H\in C^\infty(M,\mathbb C^2)$ in the standard unitary representation. Before imposing the real-action condition, treat an independent dual field $\widetilde H\in C^\infty(M,(\mathbb C^2)^*)$ as a smooth field variable. In the complex-algebraic polynomial model, use $G_{\mathrm{alg}}=SO(\eta,\mathbb C)\times SL(2,\mathbb C)$, with $SO(\eta,\mathbb C)=\{L\in GL_4(\mathbb C):L^T\eta L=\eta,\det L=1\}$ and $SL(2,\mathbb C)=\{g\in GL_2(\mathbb C):\det g=1\}$. The orthogonal factor acts trivially on these Lorentz-scalar fields, and the special-linear factor acts by the standard and dual representations. Here $SO^+(1,3)=\{L\in GL_4(\mathbb R):L^T\eta L=\eta,\det L=1,L^0{}_0\ge1\}$, and the physical Lorentz and gauge groups map to $G_{\mathrm{alg}}$ by $(L,u)\mapsto(L,u)$, viewing $L$ as a complex matrix and $u\in SU(2)$ as a matrix in $SL(2,\mathbb C)$; the standard and dual actions restrict to the specified physical actions. Impose $\widetilde H=H^\dagger$ for the real action. Take no flavor symmetry, field weight one, derivative cutoff $r=0$, maximum field degree $q=6$, retained engineering dimension $D_{\max}=6$, loop order $L_{\max}=0$, and a positive scalar coefficient scale $\Lambda_{\mathrm{op}}$ of mass dimension one as assigned by the physical EFT operator contract. For this illustration the declared relation subspace is zero. Then $\mathcal O_2=\widetilde H H$, $\mathcal O_4=(\widetilde H H)^2$, and $\mathcal O_6=(\widetilde H H)^3$ are gauge-invariant scalar polynomials of engineering dimensions $2$, $4$, and $6$. With real dimensionless $C_6$, the term $C_6\mathcal O_6/\Lambda_{\mathrm{op}}^2$ has Lagrangian density dimension $4$ and belongs to this dimension-six truncation. For $a,b\in\{1,2\}$, define $\varepsilon_{12}=1$, $\varepsilon_{21}=-1$, and $\varepsilon_{11}=\varepsilon_{22}=0$; then the antisymmetric polynomial $\varepsilon_{ab}H^aH^b$ vanishes because the even field components commute. This is a finite scalar-sector illustration, not a complete $SU(2)$ EFT basis or a claim that these coefficients describe nature.

## Example references

[C. P. Burgess, Introduction to Effective Field Theory, §§3.1–3.3](https://arxiv.org/pdf/hep-th/0701053)

[David B. Kaplan, Five lectures on effective field theory, §1.2 and §§2.4.1–2.4.2](https://arxiv.org/pdf/nucl-th/0510023)

[[def-aqft-operator-basis-physical-data|Physical EFT operator data and power-counting contract]]

[[def-countable-choice|Countable-choice assumption inherited by the non-Abelian gauge datum]]

[[def-qftx-nonabelian-gauge-data|Compact non-Abelian gauge group, bundle, and unitary representation]]

[[def-aqft-local-operator-and-dimension|Finite-jet local operator algebra and engineering dimension]]

[[def-aqft-operator-basis-quotient|Declared finite-order operator quotient]]

## Facts & Assumptions

**Given:** The finite scalar field, the standard $SU(2)$ representation, the dual algebraic representation, the physical conjugation condition $\widetilde H=H^\dagger$, and the fixed truncation data in the Example.

[A1] Adopted model data: the local gauge action is $H(x)\mapsto u(x)H(x)$ for smooth $u:M\to SU(2)$ on the trivial bundle, and the action is restricted to its real slice $\widetilde H=H^\dagger$. This is a formal model choice, not an observed physical sector.

[F1] [[def-aqft-operator-basis-physical-data]]: the contract fixes field representations, engineering weights, finite jet and field-degree cutoffs, symmetry compatibility, and a finite canonical-dimension and loop truncation; it does not identify the operator scale with regulator scales.

[F2] [[def-qftx-nonabelian-gauge-data]]: the physical group is the actual compact noncommutative group $SU(2)$, and its standard representation is unitary; the algebraic polynomial model records the standard and dual representations separately.

[F3] [[def-aqft-local-operator-and-dimension]]: local operators are weight-homogeneous polynomials in a finite field-jet representation, with even generators commuting and odd generators anticommuting; a dimensionless coefficient multiplies $\mathcal O_D/\Lambda_{\mathrm{op}}^{D-4}$ in four dimensions.

[F4] [[def-aqft-operator-basis-quotient]]: a finite-order basis quotient is by its explicitly declared invariant relation subspace and asserts no omitted-relation completeness.

[A2] In natural units, each scalar component of $H$ and $\widetilde H$ has engineering weight one, $\Lambda_{\mathrm{op}}$ has weight one, and the selected terms are evaluated without derivatives.

[A3] $\mathrm{AC}_\omega$ is countable choice inherited through the supplied non-Abelian gauge-data construction; no full Axiom of Choice is assumed. [[def-countable-choice]]

## Verification

**Given:** The facts and model data above.

1.1 For every $u(x)\in SU(2)$, unitarity gives $u(x)^\dagger u(x)=I$. Therefore $(uH)^\dagger(uH)=H^\dagger u^\dagger uH=H^\dagger H$ pointwise. Equivalently, for $g\in SL(2,\mathbb C)$ the dual transformation is $\widetilde H\mapsto\widetilde H g^{-1}$ while $H\mapsto gH$, so $\widetilde H H$ is invariant under the algebraic action as well. Since the expressions contain no derivatives, allowing $u$ to depend on $x$ introduces no derivative-of-$u$ term. Each power $(\widetilde H H)^n$ is thus a local gauge-invariant scalar polynomial. [given, A1, A3, F2, F3, algebra]

1.2 The two doublet components are even commuting variables, so $\varepsilon_{ab}H^aH^b=H^1H^2-H^2H^1=0$. This is an algebraic identity, not an additional nonzero invariant or an assumption about an operator basis. [given, F3, algebra]

1.3 Each factor $\widetilde H H$ has engineering weight $1+1=2$. Hence $\mathcal O_2,\mathcal O_4,\mathcal O_6$ have weights $2,4,6$, respectively. Since $\Lambda_{\mathrm{op}}$ has weight one, $\mathcal O_6/\Lambda_{\mathrm{op}}^2$ has weight $6-2=4$, so its real coefficient $C_6$ is dimensionless and the term lies within $D_{\max}=6$, $q=6$, and $L_{\max}=0$. No coefficient value or omitted-order bound follows from this counting. [given, A2, F1, F3, algebra]

2.1 The relation space in this example is not used to eliminate or identify further operators; the displayed singlet is an allowed representative and the antisymmetric polynomial is zero before quotienting. Thus the calculation establishes membership and dimensions only, not a complete basis. [given, F4, step 1.1, step 1.2, step 1.3] ∎
