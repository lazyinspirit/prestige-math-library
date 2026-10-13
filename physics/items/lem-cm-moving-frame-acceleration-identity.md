---
id: lem-cm-moving-frame-acceleration-identity
kind: lemma
title: "Angular velocity of a moving frame and the rotating-frame acceleration identity"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-special-orthogonal-group, thm-real-square-matrix-invertible-iff-determinant-nonzero, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, prop-transpose-laws, thm-algebra-of-derivatives, def-vector-valued-derivative-and-integral]
dependency_roles:
  def-cm-special-orthogonal-group: mathematical-premise
  thm-real-square-matrix-invertible-iff-determinant-nonzero: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  prop-transpose-laws: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 3.1.1 (angular velocity and the antisymmetry of omega), printed pages 47-49"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, 2013), Section 6 (non-inertial frames: centrifugal and Coriolis terms), printed pages 101-110"
      url: "https://www.damtp.cam.ac.uk/user/tong/relativity/dynrel.pdf"
verification:
  precheck: pass
---

## Statement

Use one-based labels $z_i:=z(i-1)$ and $A_{ij}:=A(i-1,j-1)$ for $1\le i,j\le3$, so the displayed components correspond in order to the imported coordinates $0,1,2$. Matrix-vector products mean $(Az)(k):=\sum_{j<3}A(k,j)z(j)$, obtained from the rectangular product by representing $z$ as the column $C_z(j,0)=z(j)$ ([[def-matrix-product-and-identity-matrix]]).

Let $I\subseteq\mathbb R$ be a nondegenerate interval, let $R:I\to SO(3)$ and $c:I\to\mathbb R^3$ be twice continuously differentiable in the sense that all entries of $R$ and all components of $c$ have continuous second derivatives, and put

$$\Omega(t):=R(t)^{\mathsf T}R'(t)\qquad(t\in I).$$

1. $\Omega(t)$ is skew-symmetric for every $t\in I$, that is $\Omega(t)^{\mathsf T}=-\Omega(t)$.
2. For every $t\in I$ there is exactly one vector $\omega(t)\in\mathbb R^3$ such that

$$\Omega(t)z=\omega(t)\times z\qquad(z\in\mathbb R^3),$$

the cross product being that of [[def-cross-product-in-r3]]. Its components in the standard basis are $\omega(t)=(-\Omega_{23}(t),\Omega_{13}(t),-\Omega_{12}(t))$. Since $R$ is $C^2$, $\Omega=R^{\mathsf T}R'$ and hence $\omega$ are $C^1$; thus $\omega'(t)$ in clause 3 is defined.
3. If $y:I\to\mathbb R^3$ is twice continuously differentiable and

$$x(t):=R(t)y(t)+c(t)\qquad(t\in I),$$

then for every $t\in I$

$$R(t)^{\mathsf T}x''(t)=y''(t)+2\,\omega(t)\times y'(t)+\omega'(t)\times y(t)+\omega(t)\times\bigl(\omega(t)\times y(t)\bigr)+R(t)^{\mathsf T}c''(t).$$

4. For every $t\in I$ and $z\in\mathbb R^3$, $\|R(t)z\|_2=\|z\|_2$: the rotation part of the change of coordinates preserves Euclidean norms ([[def-euclidean-inner-product]]).

## Facts & Assumptions

**Given:** A nondegenerate interval $I$, twice continuously differentiable maps $R:I\to SO(3)$ and $c:I\to\mathbb R^3$, and a twice continuously differentiable $y:I\to\mathbb R^3$; write $\Omega=R^{\mathsf T}R'$ and $x=Ry+c$.

[L1] $R(t)^{\mathsf T}R(t)=I_3$ for every $t$ by [[def-cm-special-orthogonal-group]]. The matrix entries of $R$ are twice continuously differentiable by the given hypothesis.

[L2] Matrix products, transposes and vector-valued derivatives obey the componentwise product, sum and scalar rules, and $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$, $(A^{\mathsf T})^{\mathsf T}=A$ ([[def-matrix-product-and-identity-matrix]], [[prop-transpose-laws]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]]).

[L3] The cross product is bilinear and alternating, and $\Omega z=\omega\times z$ for all $z$ holds exactly for the matrix $\Omega$ with entries $\Omega_{12}=-\omega_3$, $\Omega_{13}=\omega_2$, $\Omega_{23}=-\omega_1$ and the opposite entries fixed by skew-symmetry ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

[L4] The Euclidean norm satisfies $\|z\|_2^2=\langle z,z\rangle_2=z^{\mathsf T}z$, and $\langle z,z\rangle_2=0$ only for $z=0$ ([[def-euclidean-inner-product]]).

[L5] If $R\in SO(3)$, then $\det R=1$, so $R$ is invertible by the square-matrix determinant criterion. Since $R^{\mathsf T}R=I_3$, its inverse is $R^{\mathsf T}$ and $RR^{\mathsf T}=I_3$ ([[def-cm-special-orthogonal-group]], [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]).

## Proof

**Proof technique:** direct.

1.1 Differentiate the identity $R^{\mathsf T}R=I_3$ of [L1] componentwise using [L2]: $0=(R^{\mathsf T}R)'=R'^{\mathsf T}R+R^{\mathsf T}R'$, so $R^{\mathsf T}R'=-R'^{\mathsf T}R$. Transposing this last identity with [L2] gives $\Omega^{\mathsf T}=(R^{\mathsf T}R')^{\mathsf T}=R'^{\mathsf T}(R^{\mathsf T})^{\mathsf T}=R'^{\mathsf T}R=-\Omega$. This proves clause 1. [L1, L2, algebra]

1.2 Differentiate $x=Ry+c$ twice using [L2]: $x'=R'y+Ry'+c'$ and $x''=R''y+2R'y'+Ry''+c''$. Multiplying on the left by $R^{\mathsf T}$ gives $R^{\mathsf T}x''=R^{\mathsf T}R''y+2R^{\mathsf T}R'y'+y''+R^{\mathsf T}c''$. [L1, L2, algebra]

2.1 Write the entries of the skew matrix $\Omega(t)$ as $\Omega_{ij}$; by step 1.1, $\Omega_{ji}=-\Omega_{ij}$ and $\Omega_{ii}=0$, so $\Omega$ is determined by the three entries $\Omega_{12},\Omega_{13},\Omega_{23}$. Define $\omega:=(\omega_1,\omega_2,\omega_3)$ by $\omega_1:=-\Omega_{23}$, $\omega_2:=\Omega_{13}$, $\omega_3:=-\Omega_{12}$, and substitute into the defining formula of [L3]: for every $z$, the $i$-th component of $\Omega z$ and of $\omega\times z$ agree by the displayed finite computation of the cross product, so $\Omega z=\omega\times z$. [step 1.1, L3, algebra]

2.2 By definition of $\Omega$ and [L2], $\Omega'=(R^{\mathsf T}R')'=R'^{\mathsf T}R'+R^{\mathsf T}R''$, hence $R^{\mathsf T}R''=\Omega'-R'^{\mathsf T}R'=\Omega'+\Omega^2$. Indeed, $R'=R\Omega$ follows from $R^{\mathsf T}R'=\Omega$ after multiplying on the left by $R$ and using $RR^{\mathsf T}=I_3$ from [L5]; then $R'^{\mathsf T}R'=(R\Omega)^{\mathsf T}(R\Omega)=\Omega^{\mathsf T}R^{\mathsf T}R\Omega=\Omega^{\mathsf T}\Omega=-\Omega^2$ by clause 1. Also $R^{\mathsf T}R'=\Omega$. Substituting into step 1.2, $R^{\mathsf T}x''=(\Omega'+\Omega^2)y+2\Omega y'+y''+R^{\mathsf T}c''$. [step 1.1, step 1.2, L1, L2, L5, algebra]

3.1 If another vector $\eta\in\mathbb R^3$ satisfies $\Omega z=\eta\times z$ for every $z$, then $(\omega-\eta)\times z=0$ for every $z$; taking $z$ to be each standard basis vector in the formula of [L3] gives $\omega-\eta=0$, proving uniqueness. Each entry of $\Omega=R^{\mathsf T}R'$ is $C^1$ by the given $C^2$ regularity and the product rule [L2]; the three component formulas of step 2.1 therefore make $\omega$ a $C^1$ curve. This completes clause 2. [step 2.1, given, L2, L3, algebra]

4.1 Differentiating the three component formulas in step 2.1, justified by the $C^1$ regularity proved in step 3.1, gives $\Omega'z=\omega'\times z$ for each fixed $z$. Thus $\Omega'y=\omega'\times y$, $\Omega^2y=\Omega(\omega\times y)=\omega\times(\omega\times y)$ and $\Omega y'=\omega\times y'$. Substituting these into step 2.2 gives the displayed identity of clause 3. [step 2.1, step 2.2, step 3.1, L2, L3, algebra]

5.1 For $z\in\mathbb R^3$, $\|Rz\|_2^2=(Rz)^{\mathsf T}(Rz)=z^{\mathsf T}R^{\mathsf T}Rz=z^{\mathsf T}z=\|z\|_2^2$ by [L1], [L2] and [L4]; taking square roots proves clause 4. [L1, L2, L4, algebra] ∎

## Remarks

- The vector $\omega(t)$ is the angular velocity of the frame in the body-fixed convention $\Omega=R^{\mathsf T}R'$. The vector attached to the other convention $R'R^{\mathsf T}$ is the spatial angular velocity, and the two differ by a rotation by $R$; this item records only the convention used in clause 3, and its consumers must state which convention they use.

- The identity of clause 3 is a coordinate identity for twice differentiable curves. It asserts nothing about forces: reading the terms $2\omega\times y'$ and $\omega\times(\omega\times y)$ as "Coriolis" and "centrifugal" accelerations is an interpretation made by the physical items, under their own mass and force hypotheses.
