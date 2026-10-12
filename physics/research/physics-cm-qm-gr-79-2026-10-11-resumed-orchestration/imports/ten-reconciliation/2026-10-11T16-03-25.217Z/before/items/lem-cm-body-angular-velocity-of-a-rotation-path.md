---
id: lem-cm-body-angular-velocity-of-a-rotation-path
kind: lemma
title: "The body angular velocity of a $C^1$ rotation path: $\\Omega=R^{\\mathsf T}R'$ is skew, $\\Omega z=\\omega\\times z$ determines a unique continuous $\\omega$, and $R'=R\\Omega$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [lem-cm-quaternion-product-rule-and-conjugation-formula, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, def-matrix-product-and-identity-matrix, thm-matrix-multiplication-laws, prop-transpose-laws, def-matrix-space]
dependency_roles:
  lem-cm-quaternion-product-rule-and-conjugation-formula: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-matrix-multiplication-laws: mathematical-premise
  prop-transpose-laws: mathematical-premise
  def-matrix-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. Sola, Quaternion kinematics for the error-state Kalman filter (arXiv:1711.02508), Section 2.3.1 (differentiating R^T R: R^T Rdot is skew-symmetric, equations (63)-(66)), printed pages 16-18, and Section 4.5 ((200): Rdot = R [omega_L]_x for body-referenced angular rates), printed pages 45-46"
      url: "https://arxiv.org/pdf/1711.02508"
    - title: "N. Trawny and S. I. Roumeliotis, Indirect Kalman Filter for 3D Attitude Estimation (University of Minnesota, TR-2005-002), Section 1.2 (quaternion multiplication, inverse and conjugate quaternion, equations (21)-(23)), printed pages 3-4, and Section 1.5 (quaternion time derivative for a moving frame, equations (80)-(89)), printed pages 9-10"
      url: "http://mars.cs.umn.edu/tr/reports/Trawny05b.pdf"
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, Digital Second Edition (2023), Introduction, Section 1 (the linear Lie algebra so(3) consists of the skew-symmetric real 3-by-3 matrices), printed pages 5-6"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf"
verification:
  precheck: pass
---

## Statement

Let $I\subseteq\mathbb R$ be a nondegenerate open interval, let $SO(3)$ be as in [[def-cm-special-orthogonal-group]], and let $R:I\to SO(3)$ be of class $C^1$, that is, all nine entries of $R$ have continuous first derivatives; write $R'(t)$ for the entrywise derivative and put

$$\Omega(t):=R(t)^{\mathsf T}R'(t)\in M_3(\mathbb R)$$

for the product of the transpose of $R(t)$ with $R'(t)$ ([[def-matrix-product-and-identity-matrix]], [[def-matrix-space]]). Then:

1. $\Omega(t)$ is skew-symmetric for every $t\in I$, that is $\Omega(t)^{\mathsf T}=-\Omega(t)$.
2. There is exactly one map $\omega:I\to\mathbb R^3$ with

$$R(t)^{\mathsf T}R'(t)\,z=\omega(t)\times z\qquad(z\in\mathbb R^3,\ t\in I),$$

namely $\omega(t)=\bigl(-\Omega_{23}(t),\ \Omega_{13}(t),\ -\Omega_{12}(t)\bigr)$, and this $\omega$ is continuous. It is called the **body angular velocity** of $R$.
3. For every $t\in I$, writing $\Omega_{\omega(t)}$ for the matrix $z\mapsto\omega(t)\times z$, one has $R'(t)=R(t)\,\Omega_{\omega(t)}$.

## Facts & Assumptions

**Given:** A $C^1$ curve $R:I\to SO(3)$ and $\Omega=R^{\mathsf T}R'$, with cross product and Euclidean inner product as in [[def-cross-product-in-r3]] and [[lem-cross-product-is-bilinear-alternating-and-orthogonal]].

[L1] $SO(3)$ consists of the $3\times3$ real matrices with $R^{\mathsf T}R=I_3$ and $\det R=1$; for $R\in SO(3)$ one has $R^{\mathsf T}=R^{-1}$ and $RR^{\mathsf T}=I_3$ ([[def-cm-special-orthogonal-group]], [[lem-cm-so3-is-a-matrix-group]]).

[L2] Matrix multiplication is associative, and transposition reverses products: $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$, $(A^{\mathsf T})^{\mathsf T}=A$ ([[thm-matrix-multiplication-laws]], [[def-matrix-product-and-identity-matrix]], [[prop-transpose-laws]]).

[L3] For $C^1$ matrix curves the product rule $(AB)'=A'B+AB'$ holds, and differentiation is entrywise ([[lem-cm-quaternion-product-rule-and-conjugation-formula]] clause 1).

[L4] The cross product is $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$, so it is bilinear and $u\times u=0$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

## Proof

**Proof technique:** direct; differentiate the orthogonality identity, then the finite skew-matrix/cross-product correspondence.

1.1 By [L3], differentiating the identity $R^{\mathsf T}R=I_3$ of [L1] gives $0=(R^{\mathsf T}R)'=(R')^{\mathsf T}R+R^{\mathsf T}R'$. Transposing the resulting identity $(R')^{\mathsf T}R=-R^{\mathsf T}R'$ with [L2] gives $\Omega^{\mathsf T}=(R^{\mathsf T}R')^{\mathsf T}=R'^{\mathsf T}(R^{\mathsf T})^{\mathsf T}=R'^{\mathsf T}R=-\Omega$. This proves clause 1. [L1, L2, L3, algebra]

1.2 Let $\Omega\in M_3(\mathbb R)$ be skew-symmetric and put $\omega:=(-\Omega_{23},\Omega_{13},-\Omega_{12})$. For $z\in\mathbb R^3$, the first coordinate of $\Omega z$ is $\Omega_{11}z_1+\Omega_{12}z_2+\Omega_{13}z_3=\Omega_{13}z_3-\Omega_{12}z_2=(\omega\times z)_1$, and the second and third coordinates are the same computation with the remaining entries; hence $\Omega z=\omega\times z$ for all $z$. Conversely, if $\omega'\times z=0$ for all $z$, then testing $z=e_1,e_2,e_3$ gives $\omega'=0$ by the coordinate formula of [L4]; in particular the $\omega$ above is the only vector representing $\Omega$. [L4, algebra]

2.1 By [step 1.1] the matrix $\Omega(t)$ is skew for every $t$, so by [step 1.2] the vector $\omega(t):=(-\Omega_{23}(t),\Omega_{13}(t),-\Omega_{12}(t))$ satisfies $\Omega(t)z=\omega(t)\times z$ for all $z$, and it is the only such vector; the entries of $\Omega=R^{\mathsf T}R'$ are finite sums of products of the continuous entries of $R$ and $R'$, so $t\mapsto\omega(t)$ is continuous. This proves clause 2. [step 1.1, step 1.2, L1, L2, algebra]

3.1 Multiplying the identity $\Omega=R^{\mathsf T}R'$ on the left by $R(t)$ and using the associativity of matrix multiplication and $RR^{\mathsf T}=I_3$ from [L1] gives $R\Omega=R(R^{\mathsf T}R')=(RR^{\mathsf T})R'=R'$. By [step 2.1] the matrix $\Omega$ is exactly $\Omega_{\omega}$, so $R'=R\Omega_{\omega}$; this proves clause 3. [step 2.1, L1, L2, algebra] ∎

## Remarks

- The convention here is the body-fixed one: $\Omega=R^{\mathsf T}R'$ and $R'=R\Omega$. The spatial angular velocity of the same path is the vector attached to $R'R^{\mathsf T}$, and the two differ by the rotation $R$; consumers must state which convention they use. For $C^2$ paths this $\omega$ is the same vector that appears in the rotating-frame acceleration identity of [[lem-cm-moving-frame-acceleration-identity]], whose clause 2 records it under a twice-differentiability hypothesis; the present lemma covers the $C^1$ case and proves only what is used here.

- The lemma is a statement about curves of matrices. No physical object, frame or time scale is introduced; an interpretation of $\omega$ as the angular velocity of a rigid body belongs to the physical items that adopt a rigid-body model.
