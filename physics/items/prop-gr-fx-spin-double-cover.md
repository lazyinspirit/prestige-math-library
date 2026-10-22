---
id: prop-gr-fx-spin-double-cover
kind: proposition
title: The Lorentzian spin double cover from Hermitian matrices
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-countable-choice
  - def-determinant-of-a-square-matrix
  - thm-determinant-multiplicative
  - def-lorentz-map-and-lorentz-group
  - lem-lorentz-map-preserves-metric-and-causal-structure
  - lem-gr-fx-sl2c-connected
  - lem-gr-fx-so-plus-connected
  - lem-lorentz-lie-algebra-structure
  - def-rpm-h-poincare-charge-space
  - thm-euclidean-inverse-function-theorem
  - def-lie-group
dependency_roles:
  def-countable-choice: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  lem-gr-fx-sl2c-connected: mathematical-premise
  lem-gr-fx-so-plus-connected: mathematical-premise
  lem-lorentz-lie-algebra-structure: mathematical-premise
  def-rpm-h-poincare-charge-space: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  def-lie-group: mathematical-premise
sources:
  references:
    - title: "Blagoje Oblak, From the Lorentz Group to the Celestial Sphere, arXiv:1508.00920 (2015)"
      url: "https://arxiv.org/pdf/1508.00920"
      locator: "§2.3.1–§2.3.3, PDF pp. 24–27: connectedness, Hermitian-matrix model, determinant, image and kernel of SL(2,C) acting on Minkowski vectors."
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4.5.6 Spinors"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
      locator: "§4.5.6, local Lorentz spinor conventions and the Lorentzian spin group."
verification:
  precheck: pass
physical_scope: null
---

## Statement

Assume $\mathrm{AC}_\omega$ for the cited smooth Lie-group convention. For a complex matrix $A$, write $A^\dagger:=\overline A^{\mathsf T}$. Let
$\eta=\operatorname{diag}(-1,1,1,1)$ and define
$SL(2,\mathbb C)=\{A\in M_2(\mathbb C):\det A=1\}$. Let
$\sigma_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}$,
$\sigma_2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$,
$\sigma_3=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ and
$X(x)=x^0I+x^1\sigma_1+x^2\sigma_2+x^3\sigma_3$ for
$x\in\mathbb R^4$. The real-linear map $x\mapsto X(x)$ identifies
$\mathbb R^4$ with the Hermitian $2\times2$ matrices and
$-\det X(x)=-(x^0)^2+(x^1)^2+(x^2)^2+(x^3)^2$. For $A\in SL(2,\mathbb C)$,
let $\rho(A)$ be the real linear transformation defined by

$$X(\rho(A)x)=AX(x)A^\dagger.$$

Then $\rho:SL(2,\mathbb C)\to SO^+(1,3)$ is a smooth surjective Lie-group
homomorphism, its kernel is exactly $\{I,-I\}$, and its differential at the
identity is an isomorphism. In particular, $\rho$ is a two-sheeted covering
homomorphism. This is a local group statement; it does not assert that a
spacetime admits a global spin lift.

## Statement references

[[def-lorentz-map-and-lorentz-group]]

[[lem-gr-fx-sl2c-connected]]

[[lem-gr-fx-so-plus-connected]]

[[thm-euclidean-inverse-function-theorem]]

## Facts & Assumptions

**Given:** The Minkowski quadratic form, the group $SL(2,\mathbb C)$, and the
matrix action specified in the Statement.

[A1] Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] The Leibniz determinant formula gives $\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc$ and $\det(A^\dagger)=\overline{\det A}$; determinants of square-matrix products multiply ([[def-determinant-of-a-square-matrix]], [[thm-determinant-multiplicative]]).

[F2] [[lem-gr-fx-sl2c-connected]]: $SL(2,\mathbb C)$ is path-connected.

[F3] [[def-lorentz-map-and-lorentz-group]]: $SO^+(1,3)$ is the subgroup of Lorentz maps preserving orientation and the chosen future cone.

[F4] [[lem-gr-fx-so-plus-connected]]: with the Euclidean subspace topology inherited from $M_4(\mathbb R)$, $SO^+(1,3)$ is path-connected and is the connected component of $I_4$ in $O(1,3)$.

[F5] [[def-rpm-h-poincare-charge-space]]: under $\mathrm{AC}_\omega$, $SO^+(1,3)$ has its smooth six-dimensional matrix Lie-group structure.

[F6] [[lem-lorentz-lie-algebra-structure]]: the matrices $K$ satisfying $K^{\mathsf T}\eta+\eta K=0$ form a six-dimensional real vector space.

[F7] [[thm-euclidean-inverse-function-theorem]]: a smooth map between equal-dimensional Euclidean coordinate neighborhoods with invertible derivative at a point is a local diffeomorphism there.

[F8] [[def-lie-group]]: a finite-dimensional smooth manifold with smooth group multiplication and inversion is a Lie group.

## Proof

1.1 Every Hermitian matrix has a unique form $X(x)$, since its two real diagonal entries determine $x^0,x^3$ and its complex off-diagonal entry determines $x^1,x^2$. Direct evaluation gives
$$X(x)=\begin{pmatrix}x^0+x^3&x^1-ix^2\\x^1+ix^2&x^0-x^3\end{pmatrix},\qquad \det X(x)=(x^0)^2-(x^1)^2-(x^2)^2-(x^3)^2.$$
Near its identity, the set $SL(2,\mathbb C)$ is a smooth real six-dimensional manifold: where the upper-left entry $a$ is nonzero, writing a matrix as $\begin{pmatrix}a&b\\c&d\end{pmatrix}$, the equation $ad-bc=1$ uniquely gives $d=(1+bc)/a$, so $(a,b,c)$ are six real local coordinates. Left translates of this chart cover the group and have smooth transitions because left multiplication is a smooth invertible matrix map. The group product and inverse are smooth matrix operations, so [F8] makes $SL(2,\mathbb C)$ a Lie group. [given, F1, F8, algebra]

2.1 For $A\in SL(2,\mathbb C)$, multiplicativity and the conjugate-transpose determinant identity in [F1] give $\det(AXA^\dagger)=\det X$. Thus the action defines a real linear Lorentz map $\rho(A)$; composition satisfies $\rho(AB)=\rho(A)\rho(B)$, and the coordinate entries are quadratic polynomials in the entries of $A$, so $\rho$ is smooth. Given any $A$, choose a path $A_t$ in $SL(2,\mathbb C)$ from $I$ to $A$ by [F2]. Then $t\mapsto\rho(A_t)$ is a path of Lorentz maps from the identity to $\rho(A)$. By [F4], its endpoint is in $SO^+(1,3)$. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 A tangent matrix at $I$ to $SL(2,\mathbb C)$ has trace zero: differentiating $ad-bc=1$ at $I$ gives $Z_{11}+Z_{22}=0$. Conversely, for any trace-zero $Z=\begin{pmatrix}z&b\\c&-z\end{pmatrix}$, the curve
$$A(t)=\begin{pmatrix}1+tz&tb\\tc&(1+t^2bc)/(1+tz)\end{pmatrix}$$
has determinant one near $0$ and derivative $Z$ at $0$. Hence the real tangent space has dimension six. Differentiating the action gives
$$d\rho_I(Z)X=ZX+XZ^\dagger.$$
Since [F1] shows that the action preserves $-\det X$, differentiation places $d\rho_I(Z)$ in the tangent space of the Lorentz group. If it vanishes for every Hermitian $X$, then $X=I$ gives $Z^\dagger=-Z$, and the remaining equations give $ZX=XZ$ for every Hermitian $X$. Commuting with $\operatorname{diag}(1,0)$ makes $Z$ diagonal; commuting with $\sigma_1$ makes its diagonal entries equal. Its trace is zero, so $Z=0$. Thus $d\rho_I$ is injective. Every tangent $K$ to $SO^+(1,3)$ at $I$ is the derivative of a smooth curve $\Lambda(t)$ in that group. Differentiating $\Lambda(t)^{\mathsf T}\eta\Lambda(t)=\eta$ at $t=0$ gives $K^{\mathsf T}\eta+\eta K=0$, so by [F6] the target tangent lies in the six-dimensional eta-skew space. By [F5] its own dimension is six, hence it equals that space. The injective differential between the six-dimensional source and target tangent spaces is therefore an isomorphism. [given, A1, F1, F3, F5, F6, step 2.1, algebra]

4.1 Apply [F7] in smooth coordinate charts at the identity, using step 3.1: after shrinking a neighborhood $U$ of $I$ in $SL(2,\mathbb C)$, $\rho$ maps $U$ diffeomorphically onto a neighborhood $V$ of the identity in $SO^+(1,3)$. Since $\rho$ is a homomorphism, its image is a subgroup containing $V$ and hence is open. Every coset of this subgroup is open; its complement is a union of open cosets, so the image is also closed. The target is connected by [F4], and the image is nonempty, so it is all of $SO^+(1,3)$. [F4, F7, step 2.1, step 3.1]

5.1 If $A$ lies in the kernel, then $AXA^\dagger=X$ for every Hermitian $X$. Setting $X=I$ gives $AA^\dagger=I$, so $A$ is unitary and the same equations imply $AX=XA$. Commuting with $\operatorname{diag}(1,0)$ and $\sigma_1$ as in step 3.1 forces $A=zI$; $\det A=1$ gives $z^2=1$. Both $I$ and $-I$ act trivially, hence the kernel is exactly $\{I,-I\}$. Shrink $U$ from step 4.1 so that $U\cap(-U)=\varnothing$. If $\rho(B)\in V$, let $C\in U$ be the unique point with $\rho(C)=\rho(B)$; then $BC^{-1}$ is in the kernel, so $B=C$ or $B=-C$. Therefore $\rho^{-1}(V)=U\sqcup(-U)$ and both pieces map diffeomorphically to $V$. Translating this neighborhood by any target element gives evenly covered neighborhoods everywhere, proving that $\rho$ is a two-sheeted covering. [given, F1, step 3.1, step 4.1, algebra] ∎
