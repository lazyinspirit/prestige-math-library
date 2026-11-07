---
dependency_level: 6
id: lem-fppf-kummer-roots-of-unity-over-a-field
kind: lemma
title: Fppf Kummer exactness and roots-of-unity torsors over a field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-fppf-h1-of-commutative-group-sheaves-as-torsors
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - lem-affine-representable-fppf-family-descent
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: The proof uses only a single torsor trivialization and finitely many choices for each given torsor. No arbitrary-index choice, injective-resolution existence, or separable closure is used.
sources:
  references:
    - title: The Stacks Project, Kummer theory, Lemma 59.28.3 and ensuing fppf Kummer sequence
      url: https://stacks.math.columbia.edu/tag/03PK
      locator: Finite-free root cover and field Kummer H1; the complete field-torsor descent proof is supplied locally.
---

## Statement

Let $K$ be a field and $n\ge1$ an integer. On the big fppf site of $\operatorname{Spec}K$, the sequence of represented abelian sheaves
$$1\longrightarrow\mu_n\longrightarrow\mathbb G_m\xrightarrow{z\mapsto z^n}\mathbb G_m\longrightarrow1$$
is exact. With first fppf cohomology defined as torsor classes, the map sending $a\in K^\times$ to the root torsor $\operatorname{Spec}K[X]/(X^n-a)$ induces a natural bijection
$$K^\times/K^{\times n}\xrightarrow{\sim}H^1_{\mathrm{fppf}}(K,\mu_n).$$
Its group law is multiplication of the parameters. For $K=\mathbb F_p(t)$ and $n=p$, this group is nonzero, while the restriction of $\mu_p$ to the small étale site is the zero abelian sheaf.

## Statement references

[[def-fppf-h1-of-commutative-group-sheaves-as-torsors]]

[[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

[The Stacks Project, Kummer theory](https://stacks.math.columbia.edu/tag/03PK)

## Facts & Assumptions

**Given:** The field and integer in the Statement. Represented functors are initially functors; their arbitrary-family fppf sheaf property is supplied by [F4].

[F1] First fppf cohomology is the set of torsor isomorphism classes. [[def-fppf-h1-of-commutative-group-sheaves-as-torsors]]

[F2] Faithfully flat descent of modules and algebras is effective and fully faithful, with the invariant equalizer as the descended object. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

[F3] Faithfully flat tensor product preserves exact sequences and detects zero modules and isomorphisms. [[def-flat-and-faithfully-flat-modules-and-ring-maps]]

[F4] Every affine represented functor satisfies the sheaf condition for arbitrary jointly surjective flat locally finitely presented covering families. The proof refines the family by bounded Zariski and single finite-free trees and descends along their explicit equalizers. [[lem-affine-representable-fppf-family-descent]]

## Proof

1.1 For a $K$-algebra $A$ and a unit $a$, the algebra $A[X]/(X^n-a)$ is free on $1,X,\ldots,X^{n-1}$. It is faithfully flat: as an $A$-module it is $A^n$, and tensoring with it is the direct sum of $n$ copies, which is exact and detects zero. For every prime ideal of $A$, the residue algebra of this monic quotient is a nonzero finite-dimensional algebra over the residue field. It has a maximal ideal: among its proper ideals choose one of maximal vector-space dimension, a finite integer maximum; its quotient has no nontrivial ideals and hence is a field. This gives a point over the given prime. Thus its spectrum is topologically surjective, and finite presentation and flatness make it an fppf cover. The class of $X$ is a unit because $X^n=a$, and is an $n$th root of $a$. Affine open covers reduce an arbitrary test scheme to this construction. The kernel is precisely $\mu_n$ by its defining equation. Each root cover is a $\mu_n$-torsor: on test rings, two roots $x,y$ are units and their unique ratio $y/x$ lies in $\mu_n$, so the inverse of the action map is $(x,y)\mapsto(x,y/x)$. The represented functors $\mathbb G_m$ and $\mu_n$ are sheaves for the actual arbitrary covering families by [F4], including non-affine test schemes; this is not inferred from single-cover descent alone. Thus the displayed sheaf sequence is exact without an invertibility condition on $n$. [F2, F3, F4, given, construct, algebra]

2.1 Let $P$ be a $\mu_n$-torsor. A trivializing fppf cover has a nonempty affine member over $\operatorname{Spec}K$; fix one, $\operatorname{Spec}B$, and a section there. Its algebra $B$ is nonzero and faithfully flat over the field. The section identifies $P_B$ with $\mu_{n,B}$; on $B\otimes_KB$ the transition is multiplication by a unit $u$ satisfying $u^n=1$. It satisfies the cocycle identity because it compares the three pullbacks of the same torsor section. This gives descent data on $B[T]/(T^n-1)$, preserving its $\mathbb Z/n\mathbb Z$-grading and taking $T$ to $uT$. Apply [F2] to the algebra and separately to its finitely many homogeneous rank-one modules. It produces a graded $K$-algebra $C=\bigoplus_{i\bmod n}C_i$, with $B\otimes C_i\cong BT^i$. Its affine represented sheaf is the original $P$: the locally given isomorphisms agree by the transport data, and the sheaf gluing axiom gives a unique global isomorphism and inverse. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Each $C_i$ is one-dimensional over $K$. To check this without an arbitrary basis choice, a generator of $B\otimes C_i\cong B$ is a finite sum of simple tensors; the finitely many occurring elements span a subspace $V_i\subset C_i$ with $(C_i/V_i)\otimes B=0$, hence $V_i=C_i$ by [F3]. Finite Gaussian elimination gives a finite basis. If its size were $r\ne1$, the induced isomorphism $B^r\cong B$ would contradict invariant basis number for the nonzero commutative ring $B$: for $r>1$ a rank-one outer product cannot be the identity, as its two-by-two minors vanish while an identity minor is one; $r=0$ contradicts $B\ne0$. The descent of degree zero is $C_0=K$, and multiplication $C_i\otimes_KC_j\to C_{i+j}$ becomes an isomorphism over $B$, so is an isomorphism by [F3]. Choose one nonzero $x\in C_1$. Then $x^n=a\in K^\times$ and $1,x,\ldots,x^{n-1}$ span the respective one-dimensional components. Consequently $C\cong K[X]/(X^n-a)$, compatibly with the $\mu_n$-action. This proves surjectivity of the root-torsor classification. When $n=1$ the same grading has one component and the unique torsor is trivial. [F2, F3, step 2.1, construct, algebra]

4.1 An equivariant isomorphism between root torsors preserves the degree-one character spaces and therefore takes $X$ to $bY$ for some $b\in K^\times$. The relation says exactly $a=b^n a'$, and this condition conversely defines an equivariant isomorphism. Thus the parameter quotient is precisely $K^\times/K^{\times n}$. The product of two root torsors sends their degree-one generators to their tensor product, whose $n$th power is $aa'$. On the common finite root cover this is the ordinary multiplication map; the equalizer descent in [F2] makes it the contracted torsor product. This proves the asserted group law and naturality under field extension. [F1, F2, step 3.1, algebra]

5.1 In characteristic $p$, the equation $z^p=1$ is $(z-1)^p=0$. An étale algebra over a field is reduced, so on every small étale test scheme the only section is $1$, giving the zero abelian sheaf. In $\mathbb F_p(t)$ the order of vanishing at $t=0$ of a rational function is the exponent of its factor $t$ in numerator minus denominator; it multiplies by $p$ on a $p$th power. The value for $t$ is one. Thus $t\notin K^{\times p}$, and its root torsor is nontrivial by step 4.1. Only one field, one valuation and finitely many sections for each given torsor have been used. [step 1.1, step 4.1, algebra] ∎

## Source and scope notes

The fppf sequence and field torsor computation adapt the cited standard Kummer statement; no theorem is imported. The degree-one cohomology convention is the actual torsor definition in the existing batch85 carrier. Identification with a separate injective-derived H1 model requires its own comparison proof if that model is used. This lemma does not claim a full higher-degree fppf-to-étale comparison or compact-support comparison.

The arbitrary-family sheaf assertion uses the locally reconstructed affine family-descent theorem. The finite-free root cover and its action are proved explicitly; no injective-existence assertion is used.
