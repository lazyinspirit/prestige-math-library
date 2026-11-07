---
id: def-finite-flat-group-scheme-and-cartier-dual
kind: definition
title: "Finite flat commutative group scheme and Cartier dual"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-group-scheme-over-a-scheme
  - def-fppf-topology-on-schemes
  - lem-affine-representable-fppf-family-descent
justified_by: []
proof_strategy: direct
axiom_use: "None. Finite projective Hopf duality, affine representable fppf family descent, and unique gluing suffice; no generic-choice descent interface is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §0"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §2"
      url: "https://arxiv.org/pdf/1804.03941"
verification: {}
---

## Definition

Let $S$ be a scheme and let $G$ be a commutative $S$-group scheme whose
structure morphism is finite locally free. Its **Cartier dual** $G^D$ is the
commutative finite locally free $S$-group scheme representing the functor
$T\mapsto\operatorname{Hom}_{T\text{-grp}}(G_T,\mathbb G_{m,T})$ on
$S$-schemes $T$. Evaluation gives a canonical pairing
$G^D\times_S G\to\mathbb G_m$, and the induced biduality map
$G\to(G^D)^D$ is an isomorphism. The finite locally free Hopf-algebra
construction and biduality use no choice principle; the represented functor
is an fppf sheaf without an additional choice assumption.

## Definition references

[[def-group-scheme-over-a-scheme]]

[[def-fppf-topology-on-schemes]]

[[def-fppf-sheaf-and-sheafification]]

[Milne, *Arithmetic Duality Theorems*, Chapter III, §0](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Demarche–Harari, §2](https://arxiv.org/pdf/1804.03941)

## Facts & Assumptions

**Given:** A scheme $S$ and a commutative finite locally free $S$-group scheme
$G$.

[F1] [[def-group-scheme-over-a-scheme]]: a group scheme is a group object in
$S$-schemes, and commutativity means that its multiplication is invariant
under exchange of the two factors.

[F2] [[def-fppf-topology-on-schemes]] supplies the fppf site on which the
represented functor is considered.

[F3] For an affine scheme $Z$, $T\mapsto\operatorname{Hom}(T,Z)$ satisfies unique descent for arbitrary jointly surjective flat locally finitely presented families, including nonaffine test schemes, without a choice axiom. [[lem-affine-representable-fppf-family-descent]]

[L1] For a finite locally free algebra $B$ over a ring $A$, the $A$-dual
$B^\vee=\operatorname{Hom}_A(B,A)$ is finite locally free, and the canonical
map $B\to B^{\vee\vee}$ is an isomorphism. The Hopf structure dualizes by
transposing the structure maps.

## Proof

**Proof technique:** construct the dual locally by finite projective Hopf
algebra duality and glue.

**Given:** The group object and finite locally free structure in [F1].

1.1 On an affine open $S_i=\operatorname{Spec}(A_i)$ where $G=\operatorname{Spec}(B_i)$, pullback of multiplication, unit, and inverse gives maps $\Delta:B_i\to B_i\otimes_{A_i}B_i$, $\epsilon:B_i\to A_i$, and $S:B_i\to B_i$ satisfying the Hopf identities, which are the coordinate form of the group-object identities in [F1]. Since $B_i$ is finite locally free, [L1] gives a finite locally free dual module $B_i^\vee$; transposing those structure maps gives its dual Hopf algebra. The commutativity of $G$ makes $\Delta$ cocommutative, so the dual multiplication is commutative; the commutativity of $B_i$ makes the dual comultiplication cocommutative. [given, F1, L1]

2.1 For any affine $T=\operatorname{Spec}R\to S_i$, finite projectivity identifies an $R$-linear map $\phi:B_i^\vee\otimes_{A_i}R\to R$ with a unique $b\in B_i\otimes_{A_i}R$. The dual multiplication is the transpose of the comultiplication on $B_i$. Therefore $\phi$ preserves multiplication and unit precisely when $\Delta(b)=b\otimes b$ and $\epsilon(b)=1$. These are conditions for an algebra map to $R$, not an extra Hopf-map condition on that point. The antipode identity gives $bS(b)=S(b)b=1$, so such $b$ is a unit. Equivalently, sending $z$ to $b$ gives a Hopf-algebra map $R[z,z^{-1}]\to B_i\otimes_{A_i}R$, which is exactly a homomorphism $G_T\to\mathbb G_{m,T}$. The correspondence is natural in $R$ and respects the group law. Thus $\operatorname{Spec}(B_i^\vee)$ represents the desired character functor on affine tests. On arbitrary tests, these affine descriptions glue uniquely on open covers, so representation holds for all $S_i$-schemes. [F1, L1, step 1.1, algebra]

3.1 Finite projective dualization commutes with localization and base change. Thus the constructions on all affine opens of $S$ have canonical identifications on overlaps, satisfying the cocycle identity by functoriality, and glue to a finite locally free commutative $S$-group scheme $G^D$. This uses the whole family of affine opens and unique transition identifications, without selecting one chart for each point. The universal character defines evaluation $G^D\times_SG\to\mathbb G_m$. [F1, L1, step 2.1, construct, algebra]

4.1 To check the fppf sheaf assertion over an arbitrary test scheme $T\to S$, let a compatible family of morphisms into $G^D$ be given on an fppf cover. Over each base-affine open $S_i$, restrict to $T_i=T\times_SS_i$. Its target $G^D_{S_i}=\operatorname{Spec}(B_i^\vee)$ is affine, so [F3] descends these morphisms uniquely on $T_i$. They are $S_i$-morphisms: their composites to the affine scheme $S_i$ agree with the given structure map after the cover, hence agree by the uniqueness in [F3]. On $T_i\cap T_j$ the descended morphisms agree because their pullbacks agree; this can be checked after covering $S_i\cap S_j$ by all affine opens and applying [F3] there. They therefore glue uniquely on $T$. This proves the represented functor is an fppf sheaf for the arbitrary families in [F2], without the old generic AC premise. [F2, F3, step 3.1, construct, algebra]

5.1 Applying the same construction twice gives the double-dual Hopf algebra $B_i^{\vee\vee}$. The canonical finite-projective bidual map in [L1] respects the dual Hopf operations, so it is an isomorphism on each affine open and hence globally. The empty base and the trivial rank-one group are included: their canonical local dual and bidual identifications remain the same ones. [F1, L1, step 3.1, step 4.1, algebra] ∎
