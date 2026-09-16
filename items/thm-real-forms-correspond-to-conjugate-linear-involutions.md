---
id: thm-real-forms-correspond-to-conjugate-linear-involutions
kind: theorem
title: Real forms correspond to conjugate-linear involutions
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-real-form-of-a-complex-lie-algebra, prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, printed pp. 348-353"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 39, §39.2, Theorem 39.6 and its proof, printed pp. 199-201"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex Lie algebra
([[def-real-form-of-a-complex-lie-algebra]]). For a real form $\mathfrak g_0$
of $\mathfrak g$ let $\sigma_{\mathfrak g_0}$ be the conjugate-linear map
$$\sigma_{\mathfrak g_0}(X+iY):=X-iY\qquad(X,Y\in\mathfrak g_0),$$
well-defined by the real direct-sum decomposition
$\mathfrak g=\mathfrak g_0\oplus i\mathfrak g_0$. Then:

1. $\sigma_{\mathfrak g_0}$ is a conjugate-linear involution of $\mathfrak g$
   with fixed locus $\mathfrak g_0$, and the assignment
   $\mathfrak g_0\mapsto\sigma_{\mathfrak g_0}$ is injective.
2. Conversely, if $\sigma$ is a conjugate-linear involution of $\mathfrak g$,
   then $\mathfrak g^\sigma=\{Z:\sigma Z=Z\}$ is a real form of $\mathfrak g$,
   its associated involution $\sigma_{\mathfrak g^\sigma}$ equals $\sigma$, and
   $(\mathfrak g_0)^{\sigma_{\mathfrak g_0}}=\mathfrak g_0$.
3. For every complex automorphism $u$ of $\mathfrak g$ one has
   $u(\mathfrak g_0)=(\mathfrak g)^{\,u\sigma_{\mathfrak g_0}u^{-1}}$, and
   $\mathfrak g_0'=u(\mathfrak g_0)$ if and only if
   $\sigma_{\mathfrak g_0'}=u\circ\sigma_{\mathfrak g_0}\circ u^{-1}$.
   Consequently the constructions above induce mutually inverse bijections
   between isomorphism classes of real forms of $\mathfrak g$ and conjugacy
   classes of conjugate-linear involutions, and conjugate real forms correspond
   to conjugate involutions.

## Facts & Assumptions

**Given:** A finite-dimensional complex Lie algebra $\mathfrak g$; a real form $\mathfrak g_0$ of $\mathfrak g$ with $\mathfrak g=\mathfrak g_0\oplus i\mathfrak g_0$; a conjugate-linear involution $\sigma$ of $\mathfrak g$; and a complex automorphism $u$ of $\mathfrak g$.

[L1] The real form condition means that the complex-linear extension $e\colon\mathfrak g_0\otimes_{\mathbb R}\mathbb C\to\mathfrak g$, $e(X\otimes z)=zX$, of the inclusion is an isomorphism, equivalently $\mathfrak g_0\cap i\mathfrak g_0=0$ and $\mathfrak g=\mathfrak g_0+i\mathfrak g_0$, with $\mathfrak g_0$ closed under the bracket; the conjugate-linear involution condition is stated in the same definition ([[def-real-form-of-a-complex-lie-algebra]]).

[L2] For a real Lie algebra $\mathfrak h_0$ with complexification $\mathfrak h_0\otimes_{\mathbb R}\mathbb C$, the map $\sigma_0(X\otimes z)=X\otimes\overline z$ is a well-defined conjugate-linear bracket-preserving involution with fixed locus $\mathfrak h_0\otimes1$, and the canonical embedding is an injective real Lie-algebra homomorphism ([[prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]]).



**Proof technique:** direct.

1.1 Every $Z\in\mathfrak g$ has a unique expression $Z=X+iY$ with $X,Y\in\mathfrak g_0$ by [L1], so $\sigma_{\mathfrak g_0}$ is well-defined and additive; it is conjugate-linear because $\sigma_{\mathfrak g_0}((a+ib)(X+iY))=(aX-bY)-i(bX+aY)=\overline{(a+ib)}\,(X-iY)$ for real $a,b$, and it is involutive with fixed locus exactly $\mathfrak g_0=\{X+i0\}$, since $X-iY=X+iY$ forces $2Y=0$. If $\sigma_{\mathfrak g_0}=\sigma_{\mathfrak g_0'}$, then their fixed loci $\mathfrak g_0,\mathfrak g_0'$ coincide, so the assignment is injective. [L1, algebra]

1.2 For a conjugate-linear involution $\sigma$, the fixed locus $\mathfrak g^\sigma$ is a real subspace: it is closed under addition and under real scalars, and if $Z\in\mathfrak g^\sigma$ with $Z\ne0$ then $iZ\notin\mathfrak g^\sigma$ because $\sigma(iZ)=-i\sigma Z=-iZ\ne iZ$; hence $\mathfrak g^\sigma\cap i\mathfrak g^\sigma=0$. Every $Z\in\mathfrak g$ decomposes as $Z=\tfrac12(Z+\sigma Z)+\tfrac12(Z-\sigma Z)$ with $\tfrac12(Z+\sigma Z)$ fixed and $\tfrac12(Z-\sigma Z)$ anti-fixed, so $\mathfrak g=\mathfrak g^\sigma\oplus i\mathfrak g^\sigma$. The fixed locus is a real Lie subalgebra because $\sigma[X,Y]=[\sigma X,\sigma Y]=[X,Y]$ for $X,Y\in\mathfrak g^\sigma$. [L1, algebra]

2.1 $\sigma_{\mathfrak g_0}$ preserves brackets: writing $Z=X+iY$, $W=U+iV$ with $X,Y,U,V\in\mathfrak g_0$ and using $\mathbb C$-bilinearity, $[Z,W]=([X,U]-[Y,V])+i([X,V]+[Y,U])$ with both components in the real subalgebra $\mathfrak g_0$ by [L1], so $\sigma_{\mathfrak g_0}[Z,W]=([X,U]-[Y,V])-i([X,V]+[Y,U])=[X-iY,U-iV]=[\sigma_{\mathfrak g_0}Z,\sigma_{\mathfrak g_0}W]$. [L1, step 1.1, algebra]

2.2 The involution associated with $\mathfrak g^\sigma$ is $\sigma$: since $\sigma$ is conjugate-linear and fixes $X,Y\in\mathfrak g^\sigma$, we have $\sigma(X+iY)=\sigma X+\overline{i}\,\sigma Y=X-iY=\sigma_{\mathfrak g^\sigma}(X+iY)$ for all $X,Y\in\mathfrak g^\sigma$, and by step 1.2 every element of $\mathfrak g$ is of this form. The composite assignments are therefore inverse on the objects displayed: $(\mathfrak g_0)^{\sigma_{\mathfrak g_0}}=\mathfrak g_0$ by step 1.1 and $\sigma_{\mathfrak g^\sigma}=\sigma$ by the displayed computation. [step 1.1, step 1.2, algebra]

3.1 Let $u$ be a complex automorphism. For $Z\in\mathfrak g$, $Z\in u(\mathfrak g_0)=\mathfrak g^{u\sigma u^{-1}}$ exactly when $u^{-1}Z\in\mathfrak g_0$, i.e. $\sigma u^{-1}Z=u^{-1}Z$, i.e. $u\sigma u^{-1}Z=Z$; hence $u(\mathfrak g_0)=\mathfrak g^{\,u\sigma u^{-1}}$. Applying step 1.1 to the real form $u(\mathfrak g_0)$, equivalently applying step 1.2 to the involution $u\sigma_{\mathfrak g_0}u^{-1}$, gives $$\sigma_{u(\mathfrak g_0)}=u\circ\sigma_{\mathfrak g_0}\circ u^{-1}.$$ Conversely if $\sigma_{\mathfrak g_0'}=u\sigma_{\mathfrak g_0}u^{-1}$ then the fixed loci agree, so $\mathfrak g_0'=u(\mathfrak g_0)$ by step 1.2. [L1, step 1.1, step 1.2, step 2.2, algebra]

4.1 The two constructions are bijective at the level of isomorphism classes: step 1.1 and step 2.2 show they are mutually inverse as maps on objects, and by step 3.1 two real forms are carried to one another by a complex automorphism exactly when their involutions are conjugate. Both constructions are invariant under the identity comparison of $\mathfrak g$ with itself, so restricting to fixed objects and passing to the corresponding equivalence classes gives the asserted bijection. In particular conjugate real forms, which by definition are related by a complex automorphism, have conjugate involutions, and conversely conjugate involutions give conjugate real forms. [step 1.1, step 2.2, step 3.1, algebra] ∎

1 checked, 1 failing
