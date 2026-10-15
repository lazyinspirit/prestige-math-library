---
id: thm-tdmath-codimension-one-frobenius
kind: theorem
title: "The local nonsingular codimension-one Pfaff–Frobenius theorem"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tdmath-one-form-and-horizontal-path, lem-tdmath-local-contraction-flow, lem-tdmath-variational-flow-and-commutation, lem-tdmath-exact-multiple-implies-pfaff-integrability, thm-chain-rule-for-total-derivatives, thm-tdmath-local-implicit-rank]
dependency_roles:
  def-tdmath-one-form-and-horizontal-path: mathematical-premise
  lem-tdmath-local-contraction-flow: mathematical-premise
  lem-tdmath-variational-flow-and-commutation: mathematical-premise
  lem-tdmath-exact-multiple-implies-pfaff-integrability: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-tdmath-local-implicit-rank: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "Ko Honda, Differential Geometry Course Notes, §§33.1–33.2, full 84-page lecture notes"
      url: "https://www.math.ucla.edu/~honda/math225a/revised%20course%20notes.pdf"
    - title: "Pavel Etingof, 18.745 Lie Groups and Lie Algebras I, §8.3, full MIT lecture notes"
      url: "https://arxiv.org/html/2201.09397"
verification:
  precheck: n/a
---

## Statement

Let $U\subseteq\mathbb R^{n+1}$, $n\ge1$, be open and let $\omega=\sum_{i=1}^n a_i dx_i+b dz$ be a $C^2$ one-form with $\omega_q\ne0$ near $q_0\in U$. After shrinking to a neighborhood on which one coefficient $b$ is nonzero, the following are equivalent: (i) $\omega\wedge d\omega=0$ throughout that neighborhood; (ii) on a possibly smaller neighborhood there are $\mu\in C^1$ nowhere zero and $S\in C^2$ with $dS=\mu\omega$. The theorem is local; it gives no global exactness or thermodynamic calibration.

## Facts & Assumptions

**Given:** The open Euclidean domain, the coefficient regularity, and nonsingularity near $q_0$.

[F1] [[def-tdmath-one-form-and-horizontal-path]]: $\omega_q$ is a covector and $H_q=\ker\omega_q$ is its rank-$n$ horizontal subspace; $d\omega$ and the alternating products are the stated coordinate forms.

[F2] [[lem-tdmath-local-contraction-flow]]: a $C^1$ vector field has a unique local flow with local inverse and Lipschitz dependence.

[F3] [[lem-tdmath-variational-flow-and-commutation]]: for $C^2$ fields, local flows are $C^2$ and commute when their bracket vanishes.

[F4] [[lem-tdmath-exact-multiple-implies-pfaff-integrability]]: $dS=\mu\omega$ with $S\in C^2$ and nowhere-zero $\mu\in C^1$ implies $\omega\wedge d\omega=0$.

[F5] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of derivatives.

[L1] [[thm-tdmath-local-implicit-rank]] (planned in batch 4; carrier absent at this authoring check): for $F:O\subseteq\mathbb R^N\to\mathbb R^q$ of class $C^1$, if $F(u_0)=0$ and $DF(u_0)$ has row rank $q$, then after a coordinate permutation the zero set near $u_0$ is a unique $C^1$ graph over $N-q$ free coordinates. When the derivative in the $q$ solved coordinates is invertible, the same assertion gives a unique local $C^1$ implicit solution. Its planned source argument uses a contraction iteration and finite-dimensional calculus; no choice principle is identified. This fact is used conditionally and is not a claimed proof or acceptance of the absent carrier.

## Proof

**Given:** Translate $q_0$ to $(0,z_0)$. Restrict all fields and flows to a sufficiently small coordinate neighborhood of $q_0$.

1.1 Since $\omega_{q_0}\ne0$, one coordinate coefficient is nonzero at $q_0$; relabel that coordinate as $z$ and shrink the neighborhood so $b\ne0$. Put $c_i:=-a_i/b$ and $X_i:=\partial_{x_i}+c_i\partial_z$. Then $X_i\in C^2$, $\omega(X_i)=a_i+bc_i=0$, and the $X_i$ are a basis of $\ker\omega$ because their first $n$ components form the standard basis. [given, F1, construct]

1.2 Define $[X,Y]:=DY\,X-DX\,Y$. Coordinate expansion of the displayed formula for $d\omega$ gives $d\omega(X,Y)=X[\omega(Y)]-Y[\omega(X)]-\omega([X,Y])$. Thus for horizontal fields $d\omega(X_i,X_j)=-\omega([X_i,X_j])$. Also $[X_i,X_j]$ has zero $x$-components, hence is vertical. Evaluating the three-form on $(\partial_z,X_i,X_j)$ gives $(\omega\wedge d\omega)(\partial_z,X_i,X_j)=b\,d\omega(X_i,X_j)$. Under (i), $d\omega(X_i,X_j)=0$; then $\omega([X_i,X_j])=0$, and a vertical vector $v\partial_z$ has $\omega(v\partial_z)=vb$, so $[X_i,X_j]=0$. [F1, algebra]

2.1 By [F2]–[F3] the fields $X_i$ have commuting local $C^2$ flows $\phi_i^t$. Define $\Phi(x,\eta):=\phi_n^{x_n}\circ\cdots\circ\phi_1^{x_1}(0,\eta)$ for $(x,\eta)$ near $(0,z_0)$. Each $X_i$ changes only $x_i$, at rate one, so the first $n$ coordinates of $\Phi(x,\eta)$ are exactly $x$. Commutation and the transported-field identity in [F3] give $\partial_{x_i}\Phi=X_i(\Phi)$. At $(0,z_0)$ the columns of $D\Phi$ are $X_1,\ldots,X_n,\partial_z$; their first $n$ components form $I_n$ and the last column is $\partial_z$, so $D\Phi$ is invertible. [F2, F3, algebra]

2.2 Let $N=n+1$ and $H(u,y):=\Phi(u)-y$ on a neighborhood of $(u_0,y_0)=((0,z_0),(0,z_0))$. Then $H(u_0,y_0)=0$ and $D_uH=D\Phi(u_0)$ is invertible, hence $DH$ has full row rank $N$. Apply [L1] with the $u$ coordinates as the solved block and $y$ as the free block: conditionally, there is a unique local $C^1$ map $G(y)$ with $\Phi(G(y))=y$. Since $\Phi$ is $C^2$, differentiating this identity by [F5] gives $D\Phi(G(y))DG(y)=I$ and hence $DG(y)=(D\Phi(G(y)))^{-1}$. The right side is $C^1$ (matrix inverse entries are cofactors divided by the nonzero determinant), so $G$ is $C^2$. [L1, F3, F5, algebra]

2.3 Let $S(x,z)$ be the last coordinate $\eta$ of $G(x,z)$. Then $S\in C^2$, $S(\Phi(x,\eta))=\eta$, and $S_z(0,z_0)=1$; after shrinking, $S_z\ne0$. Differentiating along $X_i$ gives $S_{x_i}+c_iS_z=0$, so $dS=S_z(dz-\sum_i c_i dx_i)=(S_z/b)\omega$. Thus $\mu:=S_z/b$ is $C^1$ and nowhere zero. This proves (ii), conditionally on [L1]. [step 2.1, step 2.2, F3, algebra]

3.1 Conversely, if (ii) holds, [F4] gives $\omega\wedge d\omega=0$ on that neighborhood, proving (i). [F4] ∎

## Remarks

The proof builds a local potential by commuting flows, rather than inferring a global entropy. A nonzero period on a punctured domain can obstruct a global potential even when a local integrating factor exists. If a physical theory later identifies $S$ with entropy, its sign, units, and physical meaning require separate hypotheses and calibration.
