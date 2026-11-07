---
dependency_level: 1
id: lem-finite-locally-free-commutative-group-of-invertible-rank-is-etale
kind: lemma
title: Finite locally free commutative groups of invertible rank are étale
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-etale-morphism-schemes
  - lem-determinant-trick-for-nakayama
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: Only the unqualified finite-projective algebraic Cartier biduality clause is used. No represented-fppf-sheaf packaging, arbitrary closure, or choice principle is used.
sources:
  references:
    - title: Demarche and Harari, Artin–Mazur–Milne duality for fppf cohomology, arXiv:1804.03941v3
      url: https://arxiv.org/pdf/1804.03941v3
      locator: Introduction, first paragraph, PDF page1, explicitly states that invertible order implies etale. That paragraph was read in full in the retrieved primary text. The determinant/Hopf-differential proof below is locally reconstructed, not imported.
---

## Statement

Let $G\to S$ be a commutative finite locally free group scheme. Suppose its locally constant rank $n$ is invertible on $S$. Then multiplication by $n$ on each constant-rank part of $G$ is zero, its relative differential sheaf vanishes, and $G\to S$ is étale. No smoothness hypothesis or choice axiom is assumed.

## Statement references

[[def-finite-flat-group-scheme-and-cartier-dual]]

[[def-etale-morphism-schemes]]

## Facts & Assumptions

**Given:** The group scheme and invertible rank in the Statement, restricted to an affine constant-rank neighborhood when calculating.

[F1] Finite locally free commutative Hopf-algebra dualization represents the character functor algebraically, and evaluation induces the canonical algebraic biduality isomorphism. Only this unqualified algebraic clause of [[def-finite-flat-group-scheme-and-cartier-dual]] is used, not its choice-qualified fppf-sheaf packaging.

[F2] Étale means flat, locally finitely presented and geometrically regular with zero-dimensional geometric fibres, as in [[def-etale-morphism-schemes]].

[F3] If $IM=M$ for a finite module, some $1-a$ with $a\in I$ annihilates it. [[lem-determinant-trick-for-nakayama]]

## Proof

**Proof technique:** direct.

1.1 Work on a constant-rank affine base $S=\operatorname{Spec}A$, and after a further Zariski cover write the finite projective coordinate algebra as a free module of rank $n$. For any base change $T\to S$, any $g\in G(T)$ and any character $\chi\in G^D(T)$, translation by $g$ conjugates the multiplication operator by $\chi$ to that by $\chi(g)\chi$. Their determinants are equal, whereas scalar multiplication gives $N(\chi(g)\chi)=\chi(g)^nN(\chi)$. Since $\chi$ is a unit its norm is a unit. Hence $\chi(g)^n=1$. This calculation commutes with every base change and applies in particular to the universal character on $G^D_T$; thus the character defined by $[n]g$ is identically one. Algebraic biduality makes $[n]g$ the identity. Consequently $[n]_G=0$ as a morphism of group schemes. No assumption that ordinary field-valued characters separate points was made: the universal character and full algebraic biduality are used. [F1, given, construct, algebra]

1.2 We give the finite field-algebra consequence explicitly. If $L/K$ is a finite field extension with $\Omega_{L/K}=0$, it is separable. In characteristic zero this is the derivative criterion for an irreducible polynomial. In characteristic $p$, put $L_0=K L^p$. Choose a finite maximal tuple $x_1,\ldots,x_r$ whose $p$-monomials are independent over $L_0$; finite dimension bounds its length, and maximality makes those monomials a basis of $L$. The presentation over $L_0$ is obtained by the relations $X_i^p-x_i^p$, so if $r>0$, sending $x_1$ to one and the other $x_i$ to zero gives a nonzero $K$-derivation. Thus $r=0$ and $L=K L^p$. Let $L_s$ be the separable subfield of $L/K$. Factoring the finitely many minimal polynomials as separable polynomials in $T^{p^e}$ gives one finite $e$ with $L^{p^e}\subseteq L_s$. Iterating $L=K L^p$ yields $L=K L^{p^e}\subseteq L_s$. Hence $L/K$ is separable. Only finite field-generator lists and finite-dimensional elimination are used. [given, construct, algebra]

2.1 Let $B$ be the coordinate Hopf algebra and $I=\ker(\epsilon:B\to A)$. The invariant-differential isomorphism is $\Omega_{B/A}\cong B\otimes_A I/I^2$. Explicitly, the map from differentials sends $db$ to $\sum b_1\otimes(b_2-\epsilon(b_2))$; the inverse sends $b\otimes(c-\epsilon(c))$ to $b\sum S(c_1)\,dc_2$, with Sweedler notation. The product rule and the Hopf identities verify that both maps are well defined and inverse: the composite on $db$ is $\sum b_1S(b_2)db_3=db$, and the other composite reduces to $1\otimes(c-\epsilon(c))$ modulo $I^2$. On $I/I^2$, pullback by $[n]$ is multiplication by $n$: modulo products of augmentation ideals, comultiplication is $c\mapsto c\otimes1+1\otimes c$, so iterating the group law adds $n$ copies. By step 1.1 that pullback is zero. Since $n$ is a unit, $I/I^2=0$, and therefore $\Omega_{B/A}=0$. [F1, step 1.1, algebra]

2.2 Let $C$ be a finite-dimensional commutative $K$-algebra with $\Omega_{C/K}=0$. It is a finite product of local Artinian algebras: choose a proper ideal of maximal vector-space dimension, stabilize a power of that maximal ideal, and use [F3] on the stabilized idempotent ideal to split off its local factor; iterate on the complementary factor, whose dimension decreases. This is a finite process. For a local factor with maximal ideal $\mathfrak m$, its residue field $L$ has $\Omega_{L/K}=0$ by the quotient map, so is finite separable by step 1.2. Lift a finite separable field-generator tower to a coefficient field $\sigma:L\to C$. At each step a monic separable polynomial has a specified simple root modulo the nilpotent ideal $\mathfrak m$; finite Newton correction through its powers lifts that root. Its derivative is a unit because its residue is nonzero, and the finite geometric-series inverse lifts units through a nilpotent ideal. These maps give the required compatible field embedding. Now $c\mapsto c-\sigma(\bar c)$ modulo $\mathfrak m^2$ is a $K$-derivation from $C$ onto $\mathfrak m/\mathfrak m^2$. Vanishing of differentials forces this quotient to vanish, and nilpotence (or [F3]) gives $\mathfrak m=0$. Thus every local factor is a finite separable field. [F3, step 1.2, construct, algebra]

3.1 Finite locally free algebras are flat and finitely presented as algebras: locally choose their finite basis and record the finite multiplication-table and unit relations. For every field base change of a fibre of $G$, step 2.1 and the universal differential presentation give a finite-dimensional algebra with zero differentials. Step 2.2 makes it a product of finite separable fields, whose local rings are regular of dimension zero. Therefore every such geometric-fibre local ring has the required property, and [F2] proves $G\to S$ étale. All calculations and conclusions glue over the original affine constant-rank cover. The empty base is vacuous; a nonempty group fibre has positive rank because of its identity. [F2, step 2.1, step 2.2, algebra] ∎

## Source notes

This proof uses the existing literal finite-projective algebraic biduality interface and reconstructs the norm, invariant differentials and finite field-algebra arguments. The cited primary introduction explicitly records invertible order implying etale; it supplies no proof of that implication, so the complete local norm/differential proof is written here. Only the introductory paragraph, not an unwritten proof, is claimed read for this helper. The Milne URL fetch returnedHTTP406 and is not used as a read source. No external theorem is imported. This is research-only and has not yet received an independent review or installation.
