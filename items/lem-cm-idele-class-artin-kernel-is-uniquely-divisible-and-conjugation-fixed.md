---
id: lem-cm-idele-class-artin-kernel-is-uniquely-divisible-and-conjugation-fixed
kind: lemma
title: "The CM finite-idelic Artin kernel is uniquely divisible and conjugation-fixed"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-idele-group-of-a-global-field
  - def-global-artin-map-as-product-of-local-reciprocity-maps
  - thm-global-artin-reciprocity-and-norm-index
  - thm-number-field-ray-class-field-artin-isomorphism
  - lem-cm-unit-power-lattice-has-full-profinite-congruence-topology
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Lemma3.6 and its complete proof, printed21, read. The unit congruence topology it cites is supplied by a complete local prerequisite, not an external Chevalley import."
verification: {}
---

## Statement

Assume AC. Let $E$ be a CM number field of degree $2g$ with conjugation $\iota$, and use either the arithmetic global Artin map or its reciprocal on finite ideles; they have the same kernel. Principal finite ideles are killed since $E$ is totally imaginary. Put
$$K_E=\ker\left(\mathbb A_{f,E}^{\times}/E^\times\xrightarrow{\operatorname{art}_E}\operatorname{Gal}(E^{\mathrm{ab}}/E)\right).$$
Then $K_E$ is uniquely divisible by every positive integer, and every element of $K_E$ is fixed by $\iota$. More explicitly, put $V=O_E^\times$, $w=|\mu_E|$ and $U=V^w$, and take closures in the finite idele group. There are natural identifications of abstract groups
$$K_E=\overline{E^\times}/E^\times\cong\overline U/U,$$
and every integral basis of $U$ gives $K_E\cong\widehat{\mathbb Z}^{\,g-1}/\mathbb Z^{g-1}$. The same assertions hold for a finite product of CM fields, with finite ideles, multiplicative groups, conjugation and Artin maps interpreted componentwise. The abstract kernel quotient is not asserted to be Hausdorff or profinite.

## Facts & Assumptions

**Given:** AC, the CM field or finite product, and the explicitly defined finite-idelic Artin kernel. No Artin-kernel structure is assumed.

[A1] AC implies the DC and Countable Choice inherited from global Artin and ray-class existence. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Finite ideles have the restricted-product topology. The global Artin map is continuous, kills principal full ideles, and has trivial complex-place components; the norm quotient gives the Galois group of each finite abelian extension. [[def-idele-group-of-a-global-field]] [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[thm-global-artin-reciprocity-and-norm-index]]

[F2] For every integral modulus the ray-class field exists, with arithmetic Artin kernel the corresponding ray subgroup of the idele-class group. [[thm-number-field-ray-class-field-artin-isomorphism]]

[F3] For $U=(O_E^\times)^{|\mu_E|}$, the group is free of rank $g-1$, has finite index in the full units and is fixed by conjugation. Its induced finite-idele topology is its full profinite topology, and an integral basis identifies its closure with $\widehat{\mathbb Z}^{\,g-1}$. [[lem-cm-unit-power-lattice-has-full-profinite-congruence-topology]]

## Proof

1.1 The kernel of the finite-idele Artin map before quotienting by $E^\times$ is exactly $\overline{E^\times}$. The inclusion from right to left follows from continuity and the fact that every principal finite idele is killed: its missing archimedean factors are complex and trivial by [F1]. Conversely, if a finite idele $x$ is killed, it is killed in every ray-class field of modulus $MO_E$, $M\ge1$. By [F2] it lies in $E^\times W_M$, where $W_M$ is the product of $1+MO_{E_v}$ at places dividing $M$ and $O_{E_v}^\times$ elsewhere. The $W_M$ are cofinal among identity neighborhoods of the finite idele group: any finitely many local unit-neighborhood conditions contain sufficiently deep principal-unit subgroups; increase the exponents of their finitely many underlying rational primes in $M$. Thus membership in every $E^\times W_M$ says exactly that every neighborhood of $x$ meets $E^\times$, so $x\in\overline{E^\times}$. Quotienting proves the first equality in the Statement. No kernel theorem is imported in this argument. [A1, F1, F2, given, construct, algebra]

2.1 Put $\widehat V=\prod_vO_{E_v}^\times$, an open subgroup of the finite idele group. It is also closed, as is any open subgroup. For $x\in\overline{E^\times}$ choose $a\in E^\times$ in the open coset $x\widehat V$. Then $x/a\in\overline{E^\times}\cap\widehat V=\overline V$. The equality holds because $\widehat V$ is open and $E^\times\cap\widehat V=V$: a global element with zero valuation at every finite prime is a unit. Since $V/U$ is finite by [F3], choose finitely many coset representatives in $V$. Their translates of $\overline U$ are closed and their finite union is exactly $\overline V$. Consequently every class of $\overline{E^\times}/E^\times$ is represented in $\overline U$. The kernel of the resulting surjection from $\overline U$ is $\overline U\cap E^\times$. This intersection equals $U$. Indeed an element $z$ of the intersection lies in $V$, so $z^w\in U$. Under the identification $\overline U=\widehat{\mathbb Z}^{\,r}$ of [F3], $r=g-1$, the coordinate $t$ of $z$ satisfies $wt\in\mathbb Z^r$. Reducing modulo $w$ shows this integral vector belongs to $w\mathbb Z^r$. Multiplication by $w$ is injective on $\widehat{\mathbb Z}^r$: if $wt=0$, its residue modulo $wm$ shows its residue modulo each $m$ is zero. Hence $t\in\mathbb Z^r$, meaning $z\in U$. Thus $K_E\cong\overline U/U\cong\widehat{\mathbb Z}^{\,r}/\mathbb Z^r$. This proves the quotient identification without silently assuming that a finite-index subgroup of units was already closed in the congruence topology. [F1, F3, step 1.1, choose, construct, algebra]

3.1 The group $\widehat{\mathbb Z}/\mathbb Z$ is uniquely divisible. To divide the class of $t\in\widehat{\mathbb Z}$ by $n\ge1$, choose an integer $a$ with $a\equiv-t\pmod n$. The element $t+a$ belongs to $n\widehat{\mathbb Z}$. Explicitly, its compatible residues modulo $nm$, divided by $n$ and reduced modulo $m$, give a compatible element $y$ with $ny=t+a$. Thus $n[y]=[t]$. For uniqueness suppose $nt=k\in\mathbb Z$. Reduction modulo $n$ gives $n\mid k$, so $n(t-k/n)=0$. The inverse-limit argument in step 2.1 makes multiplication by $n$ injective on $\widehat{\mathbb Z}$, hence $t=k/n\in\mathbb Z$. There is no nonzero $n$-torsion in the quotient. Apply this in each of the finitely many coordinates in step 2.1, including $r=0$. This proves unique divisibility of $K_E$. [F3, step 2.1, construct, algebra]

4.1 Conjugation on finite ideles is continuous: it permutes the finite places and acts by their compatible local-field isomorphisms, preserving every unit congruence basis. It fixes $U$ pointwise by [F3], so it fixes $\overline U$ pointwise by continuity and density in the Hausdorff unit product. Every element of $K_E$ has such a representative by step 2.1, hence is fixed by conjugation. For a finite product of CM fields, the finite idele quotient and its Artin map are the finite products of these fieldwise groups and maps. Their kernels, closure quotients and conjugation actions are therefore the corresponding finite products. Unique division and the fixedness assertion hold coordinatewise. This proves the full stated product scope. [F1, F3, step 2.1, step 3.1, algebra] ∎

## Source-reading boundary

Milne2007 Lemma3.6, printed21, was actually read in full. Its cited Chevalley theorem is not imported: the required unit topology has the complete local Kummer/prime-detection proof in [F3]. The proof above derives the finite-idelic Artin kernel from the actual ray-class existence theorem and explicitly proves its closure quotient, unique divisibility and conjugation action. No appeal to general idelic connected-component structure, class-formation H2, Grunwald–Wang, Leopoldt or an external computation is made.
