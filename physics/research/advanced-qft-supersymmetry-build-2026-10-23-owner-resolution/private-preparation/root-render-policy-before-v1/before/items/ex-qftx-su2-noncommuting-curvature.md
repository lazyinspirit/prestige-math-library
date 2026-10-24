---
id: ex-qftx-su2-noncommuting-curvature
kind: example
title: Constant noncommuting potentials with nonzero curvature
status: draft
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited through the supplied SU(2) Lie-group and principal-connection constructions."
deps:
  - def-countable-choice
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
  - def-qftx-lie-algebra-valued-form-bracket
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-qftx-associated-covariant-derivative
  - def-smooth-principal-g-bundle
  - def-left-maurer-cartan-form
  - prop-adjoint-is-a-smooth-lie-group-representation
  - ex-unitary-and-special-unitary-lie-groups
  - thm-heine-borel-rn
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-nonabelian-gauge-data: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  def-qftx-lie-algebra-valued-form-bracket: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-qftx-associated-covariant-derivative: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  def-left-maurer-cartan-form: mathematical-premise
  prop-adjoint-is-a-smooth-lie-group-representation: mathematical-premise
  ex-unitary-and-special-unitary-lie-groups: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories (full text)"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§1.3.1, printed pp. 32–36: the non-Abelian Cartan curvature equation."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 6 §6.1, printed pp. 100–101: local curvature formula and bracket convention; the finite matrix/operator calculations are proved locally."
verification:
  precheck: pending
---

## Example

Let $M=\mathbb R^2$ with coordinates $(x,y)$, let $G=SU(2)$, let $P=M\times G$ carry the right action $(z,g)h=(z,gh)$, and take the admitted sector set to be $\Sigma=\{[P]\}$. Use the defining representation $\rho:SU(2)\to U(\mathbb C^2,h)$ for the standard positive-definite Hermitian form $h(v,w)=v^*w$. With the Pauli matrices $\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, $\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$, and $\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, set $T_a=-\tfrac i2\sigma_a\in\mathfrak{su}(2)$ and $A=T_1dx+T_2dy$. The form

$$
\omega_{(z,g)}(X,\xi)=\operatorname{Ad}_{g^{-1}}A_z(X)+(\theta_L)_g(\xi)
$$

is a principal connection form whose canonical-section potential is $A$. Its curvature is $F=T_3\,dx\wedge dy$. On the associated bundle with fibre $\mathbb C^2$, every smooth section represented by $\psi:M\to\mathbb C^2$ has $\nabla_{\partial_x}\psi=(\partial_x+T_1)\psi$ and $\nabla_{\partial_y}\psi=(\partial_y+T_2)\psi$; the commutator operator is $[\nabla_{\partial_x},\nabla_{\partial_y}]=T_3$. Thus the exterior-derivative part of the curvature vanishes, while its nonzero value is the Lie-bracket contribution.

## Example references

[Vákár, §1.3.1, Cartan curvature](https://arxiv.org/html/2110.06334)

[Neeb, Chapter 6 §6.1, local curvature formula](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[[def-qftx-nonabelian-gauge-data|Non-Abelian gauge datum and global group choice]]

[[def-qftx-principal-connection-form|Principal connection form]]

[[def-qftx-associated-covariant-derivative|Associated covariant derivative]]

[[lem-qftx-principal-curvature-cartan-bianchi|Cartan curvature]]

[[ex-unitary-and-special-unitary-lie-groups|The group $SU(2)$ and its Lie algebra]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $M=\mathbb R^2$, the right-principal product bundle $P=M\times SU(2)$, its defining representation, and the constant potential $A=T_1dx+T_2dy$.

[A1] A non-Abelian gauge datum uses a compact noncommutative Lie group, a smooth right principal bundle, and specified unitary representations. [[def-qftx-nonabelian-gauge-data]]

[A2] $\mathrm{AC}_\omega$ is the axiom of countable choice. [[def-countable-choice]]

[F1] $SU(2)$ is a finite-dimensional Lie group with tangent Lie algebra given by the traceless anti-Hermitian matrices. [[ex-unitary-and-special-unitary-lie-groups]]

[F2] Closed bounded subsets of finite-dimensional Euclidean space are compact; the theorem uses no choice. [[thm-heine-borel-rn]]

[F3] A right-principal connection form reproduces fundamental vectors, is right-equivariant, and determines its horizontal kernel. [[def-qftx-principal-connection-form]]

[F4] The graded bracket convention gives $\tfrac12[A\wedge A](X,Y)=[A(X),A(Y)]$ for a Lie-algebra-valued 1-form. [[def-qftx-lie-algebra-valued-form-bracket]]

[F5] The local Cartan curvature is $F=dA+\tfrac12[A\wedge A]$. [[lem-qftx-principal-curvature-cartan-bianchi]]

[F6] For $SU(2)$, $\mathfrak{su}(2)$ consists of traceless anti-Hermitian matrices, and the defining inclusion is unitary. [[ex-unitary-and-special-unitary-lie-groups]]

[F7] In a local section of the associated bundle, $\nabla\psi=d\psi+\rho_*(A)\psi$. [[def-qftx-associated-covariant-derivative]]

[F8] The left Maurer–Cartan form is smooth and for matrices is $(\theta_L)_g(\xi)=g^{-1}\xi$. [[def-left-maurer-cartan-form]]

[F9] The adjoint maps obey $\operatorname{Ad}_{gh}=\operatorname{Ad}_g\operatorname{Ad}_h$. [[prop-adjoint-is-a-smooth-lie-group-representation]]

[F10] A smooth principal bundle has a smooth projection and right action and equivariant local product charts. [[def-smooth-principal-g-bundle]]

## Verification

1.1 Regard $M_2(\mathbb C)$ as $\mathbb R^8$. The conditions $g^*g=I$ and $\det g=1$ defining $SU(2)$ are closed equations in the matrix entries, so $SU(2)$ is closed. Each column of a unitary matrix has norm one, hence all entries have modulus at most one, so $SU(2)$ is bounded. By [F2], it is compact. The matrices $D=\begin{pmatrix}i&0\\0&-i\end{pmatrix}$ and $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ are unitary with determinant one, but $DJ=\begin{pmatrix}0&i\\i&0\end{pmatrix}\ne\begin{pmatrix}0&-i\\-i&0\end{pmatrix}=JD$. Thus $SU(2)$ is noncommutative, and [F1] supplies its Lie-group structure. This verifies the group conditions in [A1]. The declared axiom base is $\mathrm{AC}_\omega$ by [A2], while [F2] uses no choice. Each Pauli matrix is Hermitian and traceless, so each $T_a$ is anti-Hermitian and traceless; [F6] puts them in $\mathfrak{su}(2)$. Direct multiplication gives $\sigma_1\sigma_2=i\sigma_3$ and $\sigma_2\sigma_1=-i\sigma_3$, hence $[T_1,T_2]=(-i/2)^2[\sigma_1,\sigma_2]=-(1/4)(2i\sigma_3)=T_3$. Since $T_3\ne0$, this also verifies that $T_1$ and $T_2$ do not commute. [A1, A2, F1, F2, F6, algebra]

2.1 The product $P=M\times SU(2)$ with right multiplication on its second coordinate is smooth, free, and transitive on each fibre, and the product chart is equivariant; [F10] therefore makes it a smooth right principal bundle. By [F8], the displayed $\omega$ is smooth. A fundamental vertical vector generated by $Z\in\mathfrak{su}(2)$ at $(z,g)$ is $(0,gZ)$, and $(\theta_L)_g(gZ)=Z$, so $\omega(Z_P)=Z$. For a fixed $h\in SU(2)$, the right-translated tangent is $(X,\xi h)$; [F8] gives $(\theta_L)_{gh}(\xi h)=h^{-1}(\theta_L)_g(\xi)h=\operatorname{Ad}_{h^{-1}}((\theta_L)_g(\xi))$, and [F9] gives $\operatorname{Ad}_{(gh)^{-1}}=\operatorname{Ad}_{h^{-1}}\operatorname{Ad}_{g^{-1}}$. Therefore $\omega_{(z,gh)}(X,\xi h)=\operatorname{Ad}_{h^{-1}}\omega_{(z,g)}(X,\xi)$. Together with reproduction, [F3] shows it is a principal connection form. Its pullback along $s(z)=(z,e)$ is $A$. [F3, F8, F9, F10, step 1.1, algebra]

2.2 The coefficients of $A$ are constant, so $dA=0$. Evaluating the bracket on $(\partial_x,\partial_y)$, [F4] gives $\tfrac12[A\wedge A](\partial_x,\partial_y)=[T_1,T_2]=T_3$ by step 1.1. Since a 2-form on $\mathbb R^2$ is determined by this value on the coordinate basis, $F=T_3dx\wedge dy$. [F4, F5, step 1.1]

3.1 For the defining representation, the differential $\rho_*$ sends each tangent matrix $T\in\mathfrak{su}(2)$ to the same endomorphism $T$ of $\mathbb C^2$, since $\rho$ is the matrix inclusion. Applying [F7] to a smooth $\psi:M\to\mathbb C^2$ gives the two displayed covariant derivatives. The constant matrices commute with the coordinate derivatives, and $\partial_x\partial_y\psi=\partial_y\partial_x\psi$; expansion gives $[\nabla_{\partial_x},\nabla_{\partial_y}]\psi=(T_1T_2-T_2T_1)\psi=T_3\psi$. This verifies the stated operator commutator for every smooth section in the global trivialization. [F5, F7, step 1.1, step 2.1, step 2.2, algebra] ∎


