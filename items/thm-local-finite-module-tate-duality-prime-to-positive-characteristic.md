---
id: thm-local-finite-module-tate-duality-prime-to-positive-characteristic
kind: theorem
title: "Prime-to-characteristic finite-module Tate duality over positive-characteristic local fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-local-class-formation-for-finite-residue-local-field
  - lem-class-formation-finitely-generated-ext-duality
  - lem-local-prime-to-p-power-subgroup-is-a-norm-group
  - lem-canonical-local-reciprocity-from-cyclic-character-pairings
  - thm-module-categories-have-enough-injectives
  - thm-injective-modules-over-a-pid-are-exactly-divisible
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
  - prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group
  - thm-degree-one-inflation-restriction-exact-sequence
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are explicit as in the actual class formation, canonical reciprocity and injective/cochain constructions. Only prime-to-p divisibility is used; full divisibility of the separable-closure multiplicative group in characteristic p is not asserted."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "I Theorem2.1 and Corollary2.3, printed pp.26-29; the finite prime-to-characteristic specialization is reconstructed from the actual bounded cyclic norm and Ext arguments."
verification: {}
---

## Statement

Assume AC and DC. Let $K$ be complete discretely valued of characteristic
$p>0$ with finite residue field, fix a separable closure $K_s$, and put
$G_K=\operatorname{Gal}(K_s/K)$. Let $M$ be a finite discrete continuous
$G_K$-module whose order is prime to $p$, and set
$M^D=\operatorname{Hom}_{\mathbb Z}(M,K_s^\times)$.
Then the actual normalized local invariant and cup evaluation give perfect
pairings of finite groups
$$H^r_{\mathrm{cts}}(G_K,M^D)\times H^{2-r}_{\mathrm{cts}}(G_K,M)\longrightarrow\mathbb Q/\mathbb Z$$
for every integer $r$. All cohomology groups vanish above degree two and
below zero. No unramifiedness condition is imposed. No assertion is made
for modules with $p$-torsion, nonetale finite-flat $p$-groups, integral
reference-subgroup annihilators or the original unqualified local flat
pairing.

## Facts & Assumptions

**Given:** Exactly the field, finite prime-to-$p$ module and AC/DC in the Statement. Choose an exponent $n$ of $M$, with $p\nmid n$.

[A1] AC and DC retain their actual supplier scope. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] $C=K_s^\times$ and its normalized invariant form a genuine full class formation in every finite-residue local-field characteristic. [[thm-local-class-formation-for-finite-residue-local-field]]

[F2] In a genuine class formation, the actual Yoneda/invariant $\alpha_2$ is an isomorphism for finitely generated modules and their higher Ext groups vanish; finite coinduction and the two long exact diagrams used there have their explicit injective/cochain construction and carry normalization. The extra all-coefficient degree-one condition is not assumed here. [[lem-class-formation-finitely-generated-ext-duality]]

[F3] For every positive $d$ prime to the residue characteristic, $K^{\times d}$ is the norm subgroup of a finite abelian extension. The canonical local map gives its onto finite Artin quotient, inclusion-reversing norm correspondence and positive cyclic character/carry pairing. [[lem-local-prime-to-p-power-subgroup-is-a-norm-group]] [[lem-canonical-local-reciprocity-from-cyclic-character-pairings]]

[F4] Ordinary abelian groups have injective embeddings; a divisible abelian group is injective. Finite abelian groups have finite cyclic decompositions, and finite root groups in a field are cyclic. [[thm-module-categories-have-enough-injectives]] [[thm-injective-modules-over-a-pid-are-exactly-divisible]] [[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]] [[prop-the-roots-of-unity-in-a-field-form-a-finite-cyclic-group]]

[F5] The degree-one crossed-map inflation-restriction sequence is exact; with an open normal subgroup its maps and the same proof preserve continuity. [[thm-degree-one-inflation-restriction-exact-sequence]]

## Proof

**Proof technique:** prove only the bounded prime-to-$p$ cyclic base cases, descend within that bounded coefficient class, and identify the resulting Ext pairing with finite Galois cup product.

**Given:** The data above; all assertions are simultaneous over every finite extension of $K$ and all modules killed by the fixed $n$.

1.1 For such an extension $L$ and every $d\mid n$, [F3] supplies the finite abelian extension with norm group $L^{\times d}$. Its canonical Artin quotient is $A=L^\times/L^{\times d}$, finite of exponent dividing $d$. Every continuous character $G_L\to\mathbb Z/d$ factors through this quotient: its own cyclic norm kernel contains $L^{\times d}$, and the actual norm correspondence puts that cyclic field in the chosen extension. Hence $H^1(G_L,\mathbb Z/d)=\operatorname{Hom}(A,\mathbb Z/d)$. The carry normalization in [F2] and canonical formula in [F3] identify $\alpha_1(L,\mathbb Z/d)$ with finite evaluation $A\to D(\operatorname{Hom}(A,\mathbb Z/d))$, with $\bar a\mapsto a/d$ in $\mathbb Q/\mathbb Z$. This is an isomorphism by cyclic decomposition [F4]. No $p$-power cyclic base map is claimed or used. [F2, F3, F4, given, choose, construct, algebra]

1.2 The coefficient $C$ is divisible by every $d\mid n$: $T^d-a$ is separable in characteristic $p$ and splits in $K_s$. Each $\mu_d(K_s)$ has exactly $d$ elements and is cyclic by [F4]. Thus $M^D$ is finite of the same order as $M$, is killed by $n$, and evaluation identifies $(M^D)^D$ with $M$, equivariantly, by checking each cyclic summand. We make no claim that $C$ is divisible by $p$. [F4, construct, algebra]

2.1 We prove the precise bounded variant of the degree-one Ext conclusion. For every finite continuous module $B$ killed by $n$, choose an open normal $U$ acting trivially, and form $0\to B\to P=\operatorname{Coind}_U^{G_K}B\to B_1\to0$. Both $P$ and $B_1$ are finite and killed by $n$. Finite adjunction identifies the $P$ terms with trivial-action terms over $U$; step 1.1 and cyclic decomposition make $\alpha_1(P)$ an isomorphism. All degree-two terms are isomorphisms by [F2]. The degree-one/degree-two exact diagrams first give surjectivity for every $B$: lift a target class through its degree-two boundary, use the degree-two isomorphisms to lift that boundary from Ext, and correct the difference by a $P$-class. For injectivity, a class with zero dual image has zero degree-two boundary and lifts from $\operatorname{Ext}^1(P,C)$. The dual of that lift comes from the $B_1$ term; the surjectivity already proved for every module killed by $n$ gives an Ext lift there. Subtract it and use the $P$ isomorphism. This proves $\alpha_1(B)$ bijective in this bounded class. Every auxiliary quotient remains killed by $n$, so the all-$d$ condition in the full theorem [F2] has not been improperly invoked. [F2, F4, step 1.1, construct, algebra]

2.2 For these coefficients the actual finite-module Ext/cohomology comparison is valid. Choose the injective continuous coresolution built from $J(I)=C_{\mathrm{cts}}(G_K,I)$ with ordinary injective abelian $I$, using evaluation adjunction as in the internal construction of [F2]. Each underlying term is divisible: finitely many preimages lift the finite values of any continuous function. It is therefore an ordinary injective resolution of $C$. On a cyclic summand of $M$ of order $d\mid n$, the ordinary Ext calculation from $0\to\mathbb Z\xrightarrow d\mathbb Z\to\mathbb Z/d\to0$ gives $\operatorname{Ext}^1_{\mathbb Z}(\mathbb Z/d,C)=C/dC=0$ and higher ordinary Ext zero. Finite sums show $\operatorname{Hom}_{\mathbb Z}(M,I^\bullet)$ resolves $M^D$. Its terms are group-cochain-acyclic: the isomorphism $\operatorname{Hom}(M,J(I))\cong J(\operatorname{Hom}(M,I))$ is $\Phi(f)(h)(m)=f(h^{-1}m)(h)$, with inverse $f(m)(h)=\Phi(f)(h)(hm)$. Finiteness of $M$ and the function images proves continuity. Insertion of the identity contracts positive homogeneous cochains of $J(-)$. The first-quadrant cochain double complex then identifies $\operatorname{Ext}^r_{G_K}(M,C)$ with $H^r(G_K,M^D)$ in all degrees. Its evaluation map is the standard normalized cup formula, so the pairing is the actual one. This uses only $d$-divisibility for $d\mid n$, not full divisibility and not finite-torsion Tor vanishing. [F2, F4, step 1.2, construct, algebra]

2.3 The degree-one groups are finite. Choose a finite Galois extension $L/K$ trivializing the action on $M$. By [F5] the kernel of restriction is a subgroup of finite $H^1(\operatorname{Gal}(L/K),M)$, and its image is a subgroup of $H^1(G_L,M)$. The latter is a finite sum of the finite cyclic character groups in step 1.1. Thus $H^1(G_K,M)$ is finite, and the same proof applies to $M^D$. Degree zero is finite because the modules are finite. This finiteness does not follow merely from an unproved abstract reflexivity assertion. [F3, F4, F5, step 1.1, step 1.2, choose, algebra]

3.1 By [F1]-[F2], degree-two Ext is $D(M^{G_K})$ and higher Ext vanishes. Step 2.2 gives finite degree-two cohomology and higher vanishing for $M^D$. Apply the same result to the finite $M^D$ and the biduality of step 1.2 for the corresponding assertions about $M$. Step 2.1 gives the actual degree-one cup isomorphism $H^1(G_K,M^D)=D(H^1(G_K,M))$. [F1, F2, step 2.1, step 1.2, step 2.2, algebra]

4.1 The isomorphisms of step 3.1 are now perfect pairings of finite groups in degrees one and two; applying degree two to $M^D$ gives degree zero by the canonical biduality. Outside zero, one and two both factors vanish. The normalized evaluation/carry comparison of steps 1.1 and 2.2 identifies every map with the actual stated cup pairing and invariant. The zero module, $d=1$ and arbitrary ramification are included. Nothing extends this proof to $p$-torsion, whose required divisibility and finite cyclic character quotients fail; no integral or unramified-reference annihilator assertion is inferred. This proves exactly the displayed prime-to-positive-characteristic scope under AC/DC. [A1, F1, F2, step 1.1, step 1.2, step 2.2, step 3.1, step 2.3, algebra] ∎
