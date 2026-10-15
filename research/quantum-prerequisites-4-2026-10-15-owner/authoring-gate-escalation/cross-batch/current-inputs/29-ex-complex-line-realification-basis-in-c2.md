---
id: ex-complex-line-realification-basis-in-c2
kind: example
title: "The complex line through (1,i) has a two-vector real basis"
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 3
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-complex-norm-and-complex-normed-space
  - lem-complex-coordinate-l1-is-a-norm
  - def-complex-normed-subspace
  - lem-complex-normed-subspace-realifies-to-real-normed-subspace
  - def-realification-of-a-complex-vector-space
  - thm-complex-numbers-are-the-real-coordinate-plane
  - def-linear-subspace
  - def-linear-basis
  - def-linear-independence
  - def-linear-combination-and-span
  - lem-span-is-the-set-of-linear-combinations
  - def-vector-space
  - lem-independent-list-is-injective
  - lem-vector-space-elementary-consequences
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
---

## Example

Equip $V=\mathbb C^2$ with coordinatewise operations and the norm
$N(z_1,z_2)=|z_1|+|z_2|$. Let $b=(1,i)$ and
$W=\{\lambda b:\lambda\in\mathbb C\}$ with the restricted complex norm. Then
$W_{\mathbb R}$ is a real normed subspace of $V_{\mathbb R}$ with the restricted
norm metric, and the ordered real basis list is
$$ (b,ib)=\bigl((1,i),(i,-1)\bigr). $$

## Facts & Assumptions

**Given:** $V=\mathbb C^2$, $N(z_1,z_2)=|z_1|+|z_2|$, $b=(1,i)$, and $W=\{\lambda b:\lambda\in\mathbb C\}$.

[F1] A complex norm is real-valued, separates zero, is homogeneous for every complex scalar, and satisfies the triangle inequality ([[def-complex-norm-and-complex-normed-space]]).

[F2] [[lem-complex-coordinate-l1-is-a-norm]] proves that the coordinate sum of complex moduli is a complex norm on $\mathbb C^n$, including $n=0$.

[F3] [[def-complex-normed-subspace]] makes a complex-linear subspace carry the restricted complex norm.

[F4] [[lem-complex-normed-subspace-realifies-to-real-normed-subspace]] states that such a subspace realifies to a real normed subspace with the identical restricted norm metric.

[F5] [[def-realification-of-a-complex-vector-space]] keeps the underlying set and addition and restricts scalar multiplication to the canonical real embedding.

[F6] [[thm-complex-numbers-are-the-real-coordinate-plane]] gives unique coordinates $a+bi$ and the complex coordinate arithmetic.

[F7] [[def-linear-subspace]] tests a linear subspace by zero containment and closure under addition and scalar multiplication.

[F8] [[def-linear-basis]] defines a basis by linear independence and spanning, and an ordered basis as a finite injective list with basis image.

[F9] [[def-linear-independence]] defines independence of a finite list by requiring every scalar relation equal to zero to have all coefficients zero.

[F10] [[def-linear-combination-and-span]] defines a linear combination of elements of a set as a finite sum of scalar multiples of elements of that set.

[F11] [[lem-span-is-the-set-of-linear-combinations]] identifies the span with the set of finite linear combinations.

[F12] In a vector space, scalar multiplication distributes over vector and scalar addition and associates with scalar multiplication ([[def-vector-space]]).

[F13] A finite linearly independent list is injective and has a linearly independent image ([[lem-independent-list-is-injective]]).

[F14] On $\mathbb C^2$, addition and scalar multiplication are pointwise ([[lem-complex-coordinate-l1-is-a-norm]]).

[F15] For any vector $v$, scalar multiplication by zero gives $0_{\mathbb C}v=0_V$ ([[lem-vector-space-elementary-consequences]]).

## Verification

1.1 The coordinate sum norm on $V$ is a complex norm by [F2] and [F1]. The set $W$ contains zero because $0_{\mathbb C}b=0_V$ by [F15]. The vector-space laws [F12] give $\lambda b+\mu b=(\lambda+\mu)b$ and $\alpha(\lambda b)=(\alpha\lambda)b$, so $W$ is closed under addition and complex scalar multiplication; [F7] makes it a complex-linear subspace. The restricted norm inherits separation, full complex homogeneity, and the triangle inequality, so it gives the complex normed subspace in [F3]. [given, F1, F2, F3, F7, F12, F15, algebra]

1.2 If $r(1,i)+s(i,-1)=(0,0)$ for $r,s\in\mathbb R$, the pointwise coordinate operations of [F14] give first coordinate $r+is=0$. Uniqueness of the real and imaginary coordinates in [F6] implies $r=s=0$, so the list is linearly independent by [F9]. [F6, F9, F14, algebra]

2.1 Applying [F4] to this complex normed subspace gives the real normed subspace $W_{\mathbb R}\subseteq V_{\mathbb R}$ and the identical restricted norm metric. [given, F4, step 1.1]

2.2 For $\lambda=a+ic$, [F6] gives $\lambda b=(a+ic,i(a+ic))=(a+ic,-c+ia)=a(1,i)+c(i,-1)$ using coordinatewise scalar multiplication [F14] and the vector-space laws [F12]. Also $ib=(i,-1)\in W$ by its definition. Every element of $W_{\mathbb R}$ is therefore a real linear combination of the displayed list; by [F10] and [F11] the list spans $W_{\mathbb R}$. [given, F5, F6, F10, F11, F12, F14, step 1.1, algebra]

3.1 By steps 2.2 and 1.2 the list is spanning and linearly independent. By [F13] it is injective with linearly independent image, and step 2.2 says that image spans; hence [F8] makes it an ordered real basis. [F8, F13, step 2.2, step 1.2, algebra] ∎
