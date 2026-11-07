---
id: lem-formal-smooth-group-kernel-is-cyclically-acyclic-over-unramified-extension
kind: lemma
title: "Formal smooth-group kernels are cyclically acyclic over unramified extensions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-henselian-pair-and-henselian-local-ring
  - cor-henselian-local-simple-root-criterion
  - thm-jacobian-criterion-smooth-morphism
  - thm-etale-locally-standard-etale
  - thm-normal-basis-theorem
  - thm-adjugate-identity-over-a-commutative-ring
  - lem-affine-representable-fppf-family-descent
  - lem-cyclic-group-cohomology-norm-and-inflation
justified_by: []
proof_strategy: direct
axiom_use: "AC is retained exactly for the published smooth-chart and standard-etale geometry interfaces. The finite normal-basis, differential and individual Henselian-lifting arguments add no choice axiom. This qualified helper does not prove the unqualified local flat-duality theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Etale Cohomology, III Section 3, and Arithmetic Duality Theorems, III Lemma1.1"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Smooth-group Henselian comparison route; the finite cyclic formal-kernel argument is reconstructed below, not imported."
verification: {}
---

## Statement

Assume AC. Let $(R,\mathfrak m,k)$ be a Henselian local ring with finite
residue field. Let $B$ be a nonzero finite free etale local $R$-algebra whose
residue field $\ell=B/\mathfrak mB$ is a finite extension of $k$ of degree
$n$, and whose rank over $R$ is $n$. Suppose a generator $\sigma$ of
$\operatorname{Gal}(\ell/k)$ lifts to an $R$-automorphism of $B$ of order
$n$, with $B^{\langle\sigma\rangle}=R$ and
$B\otimes_RB\cong\prod_{i=0}^{n-1}B$ by
$b\otimes c\mapsto(b\sigma^i(c))_i$.
Let $G$ be a smooth commutative separated group scheme of finite presentation
over $R$. Write its law additively and put
$$M=\ker\bigl(G(B)\longrightarrow G(\ell)\bigr),\qquad N=1+\sigma+\cdots+\sigma^{n-1}.$$
Then
$$N(M)=M^{\langle\sigma\rangle},\qquad \ker(N:M\to M)=(\sigma-1)M.$$
For Tate cohomology use the two-sided periodic norm/difference complex.
Consequently every Tate cohomology group of the cyclic group
$\langle\sigma\rangle$ with coefficients in $M$ vanishes; its ordinary
cohomology vanishes in every positive degree. The assertion includes $n=1$
and relative dimension zero. Completeness and a characteristic restriction
are not assumed.

## Facts & Assumptions

**Given:** Exactly the ring, finite etale cyclic algebra and group in the Statement.

[A1] AC is assumed for the stated published geometric interfaces. [[def-axiom-of-choice]]

[F1] Henselian local rings have unique simple-root lifting for monic polynomials. [[def-henselian-pair-and-henselian-local-ring]] [[cor-henselian-local-simple-root-criterion]]

[F2] Under AC, a smooth morphism has a local finite presentation with an invertible Jacobian minor; etale morphisms have standard-etale charts. [[thm-jacobian-criterion-smooth-morphism]] [[thm-etale-locally-standard-etale]]

[F3] A finite Galois field extension has a normal basis. A square matrix over a commutative ring with unit determinant is invertible by the adjugate identity. [[thm-normal-basis-theorem]] [[thm-adjugate-identity-over-a-commutative-ring]]

[F4] An affine representable functor has unique descent for arbitrary fppf covering families. [[lem-affine-representable-fppf-family-descent]]

[F5] The cyclic periodic resolution computes positive ordinary cohomology by the alternating fixed-group norm quotient and norm-kernel difference quotient. [[lem-cyclic-group-cohomology-norm-and-inflation]]

## Proof

**Proof technique:** finite normal-basis linear algebra and Henselian lifting in two smooth fibres.

**Given:** The data above. All points called formal specialize to the identity.

1.1 Choose a normal-basis element $\bar b\in\ell$ by [F3], and lift it to $b\in B$. Since $B$ is free of rank $n$, the determinant of the $n$ conjugates $\sigma^i(b)$ in any one $R$-basis reduces to a nonzero determinant over $k$; it is a unit. Thus these conjugates are an $R$-basis. In this basis $\sigma$ permutes coordinates cyclically. The additive trace $T=\sum_i\sigma^i:B\to R$ is surjective, since $T(b)$ reduces to the nonzero element $\sum_i\sigma^i(\bar b)$: the latter is a sum of distinct basis elements and is not zero. Its image is a unit. Coordinate differences give $\ker T=(\sigma-1)B$, and $B^\sigma=R$. These assertions persist after tensoring with any finite free $R$-module. In particular, for $L=\operatorname{Lie}(G/R)$ they give a split surjection $T:L\otimes_RB\to L$ and a surjection $\sigma-1:L\otimes_RB\to\ker T$. Here $L$ is finite free: smoothness gives a locally free finite-rank tangent module, and a chart containing the closed point trivializes it over the whole local base. [F2, F3, given, choose, algebra]

1.2 We will use the following explicit lifting consequence of [F1] and [F2]. If a finite-presentation $R$-scheme $Y$ is smooth at a $k$-point $y$, it has an $R$-point specializing to $y$. Choose a standard smooth chart at $y$, and lift its residue coordinates not used by a unit Jacobian minor arbitrarily to $R$. Setting those coordinates to these lifts cuts out an etale neighbourhood of $y$: the augmented square Jacobian has unit determinant. In a standard-etale chart this is a monic simple-root equation with a unit denominator. The simple-root lift from [F1] avoids that denominator and gives the required section. Only the finitely many coordinates and one chart are selected. This argument applies also to a fibre of a smooth morphism over an arbitrary specified $R$-point of its target. [A1, F1, F2, choose, construct, algebra]

2.1 Choose an affine neighbourhood $U\subseteq G$ of the identity. Every formal $B$-point of $G$ lies in $U$: its inverse image is an open neighbourhood of the closed point of the local scheme $\operatorname{Spec}B$, hence the whole scheme. The functor $W=\operatorname{Res}_{B/R}U$ is affine of finite presentation. Explicitly choose an $R$-basis of $B$, replace each coordinate of a finite algebra presentation of $U$ by its $n$ coefficient coordinates, and impose all coefficient equations. A localization denominator is handled by introducing its inverse and the equation that their product is one. This represents exactly $U(B\otimes_RC)$ over every $R$-algebra $C$. At the identity its tangent module is $L\otimes_RB$. It is smooth there: use a standard smooth presentation of $U$ near the identity, and expand its invertible Jacobian block in the same $B$-basis. Its coefficient matrix is invertible over $R$, because the original block is an invertible $B$-linear map. The coefficient presentation therefore has an invertible Jacobian block of size $n$ times the original size. [F2, F3, step 1.1, construct, algebra]

3.1 Commutativity defines a norm morphism $\nu:W\to G$ near the identity, given on points by $\nu(z)=\sum_i\sigma^i(z)$. To justify its target, the sum is invariant under the cyclic action after every base change. The stated Galois tensor identity and [F4] descend this invariant point uniquely; restrict to the open neighbourhood where the descended point lies in $U$. The differential of $\nu$ at the identity is the trace $T:L\otimes_RB\to L$ of step 1.1. This split surjection makes $\nu$ smooth at the residual identity. Indeed in standard smooth source and target coordinates, adjoin to the source equations the target-coordinate differences; the surjectivity provides a unit minor in their augmented Jacobian. This is exactly the finite Jacobian criterion of [F2]. [F2, F4, step 1.1, step 2.1, construct, algebra]

4.1 An invariant formal point $a\in M^\sigma$ descends to a formal $R$-point of $G$. For descent use its affine chart $U$ and [F4]; the invariant equality is the full descent datum by the Galois tensor identity. The fibre $\nu^{-1}(a)$ has the residual identity as a $k$-point and is smooth there by step 3.1. Step 1.2 gives an $R$-point in this fibre specializing to that identity. As a $B$-point it is an element $z\in M$ and satisfies $Nz=a$. Conversely every norm is invariant. This proves $NM=M^\sigma$. [F4, step 1.2, step 2.1, step 3.1, construct, algebra]

4.2 Let $Z=\nu^{-1}(0)$ near the identity. It is smooth there by step 3.1, with tangent module $\ker T$. The morphism $d:W\to Z$, $d(z)=\sigma(z)-z$, is defined on an open neighbourhood of the identity: its norm is zero by telescoping, and all products can be restricted to the chosen affine charts. Its differential is $\sigma-1:L\otimes_RB\to\ker T$, surjective by step 1.1. The same augmented-Jacobian argument as in step 3.1 makes $d$ smooth at the residual identity. Given $a\in M$ with $Na=0$, its corresponding formal point belongs to this neighbourhood of $Z$, since every open containing the closed point pulls back to all of $\operatorname{Spec}R$. The fibre $d^{-1}(a)$ is smooth at its residual identity, and step 1.2 gives a formal point $z$ with $d(z)=a$. Thus $\ker N\subseteq(\sigma-1)M$; the reverse inclusion follows by telescoping. [F2, step 1.1, step 1.2, step 2.1, step 3.1, construct, algebra]

5.1 Steps 4.1 and 4.2 make both alternating quotients in [F5] zero. Extend the alternating group-ring maps to all integer degrees; the same cyclic coefficient calculation makes this complete periodic complex exact and its group-ring dual exact. Its Hom complex is the stipulated Tate model. The positive-degree periodic resolution in [F5] gives the ordinary groups. Both complexes therefore give vanishing in every Tate degree and every positive ordinary degree, with the actual cyclic action specified in the Statement. For $n=1$ the norm is the identity and the difference map zero, so both formulas remain valid; relative dimension zero gives zero tangent modules and the same Henselian fibre argument. This is a statement about the actual formal-point module, not a claim that the whole group is torsion or that arbitrary smooth fppf and etale cohomology have already been compared. [F5, step 4.1, step 4.2, algebra] ∎
