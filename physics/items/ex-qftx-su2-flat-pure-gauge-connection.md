---
id: ex-qftx-su2-flat-pure-gauge-connection
kind: example
title: A nonzero pure-gauge potential with zero curvature
status: "published"
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited through the supplied SU(2) Lie-group and principal-connection constructions; Heine–Borel itself uses no choice."
deps:
  - def-countable-choice
  - def-qftx-nonabelian-gauge-data
  - def-qftx-principal-connection-form
  - def-qftx-lie-algebra-valued-form-bracket
  - lem-qftx-principal-curvature-cartan-bianchi
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
      locator: "§§1.3.1 and 2.5.1, printed pp. 32–35 and 80–83: principal forms and the local U(1) potential-to-connection construction; the SU(2) pure-gauge calculation is proved locally."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 5 §5.4 and Chapter 6 §6.1, printed pp. 92–95 and 100–101: trivial-bundle connection forms and curvature."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Let $M=\mathbb R^2$ with coordinates $(x,y)$, let $G=SU(2)$, and let $P=M\times G$ have the right action $(z,g)h=(z,gh)$. Use the defining representation on $V=\mathbb C^2$ with its standard positive-definite Hermitian form $h(v,w)=v^*w$, let $E=P\times_G\mathbb C^2$, and take the admitted sector set to be $\Sigma=\{[P]\}$. Set

$$T_3=-\frac{i}{2}\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad u(x,y)=\begin{pmatrix}e^{-ix/2}&0\\0&e^{ix/2}\end{pmatrix},\qquad A=u^{-1}du=T_3\,dx.$$

Equip $P$ with the principal form

$$
\omega_{(z,g)}(X,\xi)=\operatorname{Ad}_{g^{-1}}A_z(X)+(\theta_L)_g(\xi),
$$

where $\theta_L$ is the left Maurer–Cartan form. This is a smooth principal connection form with local potential $A$ along the canonical section $s(z)=(z,e)$. Its Cartan curvature $F=dA+\tfrac12[A\wedge A]$ vanishes identically although $A$ is nonzero; in this sense $A=u^{-1}du$ is a nonzero pure-gauge potential on the trivial bundle.

## Example references

[Vákár, §1.3.1, principal connection forms](https://arxiv.org/html/2110.06334)

[Vákár, §2.5.1, potentials and principal connections](https://arxiv.org/html/2110.06334)

[Neeb, Chapter 5 §5.4, trivial-bundle connection forms](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[Neeb, Chapter 6 §6.1, Cartan curvature formula](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[[def-qftx-nonabelian-gauge-data|Non-Abelian gauge datum and global group choice]]

[[def-qftx-principal-connection-form|Principal connection form]]

[[lem-qftx-principal-curvature-cartan-bianchi|Cartan curvature]]

[[ex-unitary-and-special-unitary-lie-groups|The group $SU(2)$ and its Lie algebra]]

[[thm-heine-borel-rn|Closed and bounded subsets of Euclidean space are compact]]

[[prop-adjoint-is-a-smooth-lie-group-representation|The adjoint action is a group representation]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the finite-dimensional matrix group $SU(2)$, the smooth base $M=\mathbb R^2$, and the matrices and functions displayed in the example.

[A1] The supplied gauge datum requires a compact noncommutative Lie group, a smooth right principal bundle, and specified smooth unitary representations. [[def-qftx-nonabelian-gauge-data]]

[F1] $SU(2)$ is an embedded finite-dimensional real Lie group in $U(2)$ with $\mathfrak{su}(2)=\{X:X^*+X=0,\ \operatorname{tr}X=0\}$; its defining inclusion is unitary for the standard Hermitian form. [[ex-unitary-and-special-unitary-lie-groups]]

[F2] A closed bounded subset of finite-dimensional Euclidean space is compact; this Heine–Borel result uses no choice. [[thm-heine-borel-rn]]

[F3] A smooth right principal connection form reproduces fundamental vectors and is equivariant under the right action; conversely such a form defines its horizontal kernel. [[def-qftx-principal-connection-form]]

[F4] For the right action, the local potential is $s^*\omega$, and the Cartan curvature is $F=dA+\tfrac12[A\wedge A]$ with the stated shuffle bracket. [[lem-qftx-principal-curvature-cartan-bianchi]], [[def-qftx-lie-algebra-valued-form-bracket]]

[F5] The left Maurer–Cartan form is smooth and is $(\theta_L)_g=d(L_{g^{-1}})_g$; on matrix groups it evaluates as $g^{-1}dg$. [[def-left-maurer-cartan-form]]

[F6] The adjoint maps obey $\operatorname{Ad}_{gh}=\operatorname{Ad}_g\operatorname{Ad}_h$. [[prop-adjoint-is-a-smooth-lie-group-representation]]

[F7] A smooth principal bundle has a smooth projection and right action and equivariant local product charts. [[def-smooth-principal-g-bundle]]

[A2] $\mathrm{AC}_\omega$ is the axiom of countable choice. [[def-countable-choice]]

## Verification

**Given:** $M=\mathbb R^2$, $G=SU(2)$, $P=M\times G$, and $A=T_3dx$.

1.1 Regard $M_2(\mathbb C)$ as $\mathbb R^8$. The conditions $g^*g=I$ and $\det g=1$ are closed equations in the matrix entries, so $SU(2)$ is closed. For a unitary matrix each column has norm one, hence every entry has absolute value at most one; thus the subset is bounded. By [F2], it is compact. The matrices $D=\begin{pmatrix}i&0\\0&-i\end{pmatrix}$ and $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ are unitary with determinant one, while $DJ=\begin{pmatrix}0&i\\i&0\end{pmatrix}\ne\begin{pmatrix}0&-i\\-i&0\end{pmatrix}=JD$. Therefore $SU(2)$ is noncommutative. Together with [F1], this verifies the group conditions in [A1]. The declared axiom base is $\mathrm{AC}_\omega$ by [A2], and [F2] requires no additional choice. [A1, A2, F1, F2, algebra]

1.2 The matrix $u(x,y)$ is unitary and has determinant one because its diagonal entries have modulus one and multiply to one. Differentiating its entries gives $du=\operatorname{diag}(-\tfrac i2e^{-ix/2},\tfrac i2e^{ix/2})dx$, hence $u^{-1}du=T_3dx$. The coefficient $T_3\ne0$, so $A$ is not the zero form. The defining representation is unitary. [A1, F1, algebra]

2.1 The product $P=M\times SU(2)$ has projection to $M$ and right action on its second coordinate; both are smooth, the action is free and transitive on each fibre, and the product chart is equivariant, so [F7] makes it a smooth right principal bundle. By [F5], the displayed $\omega$ is smooth. On the fundamental vector generated by $Z\in\mathfrak{su}(2)$, the tangent is $(0,gZ)$, and $(\theta_L)_g(gZ)=Z$; thus $\omega(Z_P)=Z$. For fixed $h\in SU(2)$, right translation sends $(X,\xi)$ to $(X,\xi h)$, and $\operatorname{Ad}_{(gh)^{-1}}A(X)+(\theta_L)_{gh}(\xi h)=\operatorname{Ad}_{h^{-1}}(\operatorname{Ad}_{g^{-1}}A(X)+(\theta_L)_g(\xi))$. The equality uses [F6] for the adjoint product and the matrix formula for $\theta_L$ from [F5]. Thus $R_h^*\omega=\operatorname{Ad}_{h^{-1}}\omega$, and [F3] shows it is a principal connection form. Since $s(z)=(z,e)$, its pullback is $s^*\omega=A$. [F1, F3, F5, F6, F7, step 1.1, step 1.2]

3.1 The coefficient $T_3$ is constant and $d(dx)=0$, so $dA=0$. For tangent vectors $X,Y$, the bracket term is $[A(X),A(Y)]$; both values are scalar multiples of $T_3$, so this bracket is zero. Therefore $F=dA+\tfrac12[A\wedge A]=0$ everywhere by [F4], while step 1.2 showed $A\ne0$. [F4, step 1.2, step 2.1] ∎

