---
id: lem-finite-local-character-extension-obstruction-in-zf
kind: lemma
title: "Finite local character extension and its local-power obstruction in ZF"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - lem-finite-local-character-extension-obstruction-under-choice
  - thm-constructible-inner-model-semantic-and-formal-schema
  - prop-constructible-levels-transitivity-ordinals-and-rank
  - thm-delta-zero-absoluteness-for-transitive-sets
  - thm-rational-polynomial-root-isolation-is-sound-and-finite
  - thm-ring-of-integers-free-of-rank-degree
  - lem-number-field-completion-tensor-and-norm-in-zf
  - thm-weak-approximation-for-global-fields
  - thm-number-field-ray-class-field-artin-isomorphism
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, Chapter VIII §2"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Printed p. 232, Theorem 2.4: local-character extension and its order question. The exact obstruction and ZF finite-code transfer are locally proved."
---

## Statement

Work in ZF. Let $K$ be a number field, $S$ a finite set of its places, $m\ge1$, and for each $v\in S$ let $\chi_v:K_v^\times\to\mu_m$ be a continuous character. Put
$$P(m,S)=\{a\in K^\times:a\in(K_v^\times)^m\text{ for every }v\notin S\}.$$
There is a continuous character $\chi:C_K=\mathbb A_K^\times/K^\times\to\mu_m$ restricting to every $\chi_v$ if and only if
$$\prod_{v\in S}\chi_v(a)=1\qquad(a\in P(m,S)).$$
For a finite rational-coordinate presentation of $K$, membership of any $a\in K^\times$ in $(K_v^\times)^m$ has the same truth value in the ambient and constructible completions at every place $v$; finite local-character tables and their multiplication rules are likewise identical. With finite rational-coordinate presentations of $K$ and the local data, a continuous character of the internal idèle-class group in the constructible universe with values in $\mu_m$ has an ambient counterpart with the same image and the same local character tables; conversely every such ambient character has an internal counterpart with the same image and tables. No ambient choice axiom, field-extension realization, or classification of the $2$-primary obstruction is asserted.

## Facts & Assumptions

**Given:** ZF, the number field, finite place set, exponent and local characters in the Statement.

[F1] For each fixed ZFC proof, its finitely many axioms hold relativized to the transitive constructible universe $\mathcal L$, which has the ambient ordinals. Bounded arithmetic on common natural-number codes is absolute. Rational polynomials have finite exact real-root isolation data. [[thm-constructible-inner-model-semantic-and-formal-schema]] [[prop-constructible-levels-transitivity-ordinals-and-rank]] [[thm-delta-zero-absoluteness-for-transitive-sets]] [[thm-rational-polynomial-root-isolation-is-sound-and-finite]]

[F2] A number field's ring of integers is finite free over $\mathbb Z$. Its finite-place completion is the fraction field of the inverse limit of its finite residue quotients, and the number field embeds densely there; these constructions hold in ZF. [[thm-ring-of-integers-free-of-rank-degree]] [[lem-number-field-completion-tensor-and-norm-in-zf]]

[F3] Under AC, Countable Choice and DC, the exact local-power annihilation condition is equivalent to existence of a continuous global character with the prescribed restrictions. [[lem-finite-local-character-extension-obstruction-under-choice]]

[F4] Under AC and Countable Choice, weak approximation simultaneously prescribes finitely many local neighborhoods and real signs. Under AC, Countable Choice and DC, the ray class group is the idèle-class quotient by the corresponding congruence and positivity subgroup. These assumptions will be used only inside $\mathcal L$. [[thm-weak-approximation-for-global-fields]] [[thm-number-field-ray-class-field-artin-isomorphism]]

[F5] The idèle group is the restricted product of local multiplicative groups, with its restricted-product topology, and the idèle-class group has its quotient topology. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

## Proof

1.1 Choose finite rational coordinates for $K$ and replace it by its isomorphic multiplication-table presentation; this is a finite selection. The field and its operations belong to $\mathcal L$. Integrality is an arithmetic condition on a rational tuple, so the internal and ambient integer rings agree. By [F2] the ring is finite free over $\mathbb Z$. Every subgroup of $\mathbb Z^n$ is finitely generated in ZF: project to one coordinate, take the least positive image generator and one preimage when nonzero, and induct on the kernel. Hence every integral ideal has a finite integer code in $\mathcal L$; fractional ideals have finite denominators. Prime ideals, their finite residue quotients and their valuation data agree internally and externally. The finitely many real embeddings and $m$th roots of unity have the same finite algebraic isolating codes by [F1]. Thus $K$, $S$, $m$ and all relevant finite arithmetic data are available inside $\mathcal L$. [F1, F2, given, construct, algebra]

2.1 Fix one finite place $v$. Write $e=v(m)$ and choose a uniformizer $\pi\in K$. For any unit $y$ with $v(y-1)>2e$, deterministic Newton iteration for $X^m-y$ starting at $1$ stays in the unit group, and its error valuations grow by the recurrence $h\mapsto2h-2e$. Completeness in [F2] gives an $m$th root. Thus $1+\pi^N\mathcal O_v$ consists of $m$th powers for some integer $N$. The valuation modulo $m$ and unit residue modulo $\pi^N$ show that $K_v^\times/(K_v^\times)^m$ is finite. Its classes are open, and each meets the dense field $K^\times$; choose its least representative in a fixed enumeration of $K$. A character to $\mu_m$ factors through this quotient, so its finite table on these representatives has values among the algebraic $m$th roots of unity in $\mathcal L$. The real-place quotient is given by sign and the complex-place quotient is trivial. Since $S$ is finite, the prescribed local characters determine finitely many such tables in $\mathcal L$; the ambient characters themselves need not belong to $\mathcal L$. [F1, F2, step 1.1, given, construct, algebra]

3.1 For $a\in K^\times$, the assertion that $a$ is an $m$th power in a finite completion is absolute between the internal and ambient completions. Its valuation must first be divisible by $m$; remove the corresponding uniformizer power, reducing to a unit equation $X^m=u$. The solutions modulo $\pi^n$ form finite sets with the same codes in both universes. An ambient root yields a solution at every level. Conversely, if every level has a solution, recursively choose the least node with descendants at every later level. Each node has finitely many children, so an extendible child exists, and extendibility has only natural-number and finite-code quantifiers; it is absolute by [F1]. The resulting internal branch is a root in the internal completion by [F2]. An internal root maps to an ambient root through the same compatible residues. At real places the test is positivity for even $m$, an algebraic sign test; complex places give no obstruction. Thus $P(m,S)$ has the same elements in $\mathcal L$ and outside. The finite quotient multiplication tables are also the same: equality of representative products is this same local power test. Consequently the tables from step 2.1 define genuine continuous internal characters and give the same value on every such algebraic element. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 Suppose the displayed obstruction condition holds in the ambient universe. By step 3.1 it holds internally for the finitely coded local-character tables. Apply [F3] inside $\mathcal L$ using [F1], obtaining a continuous character $\psi_{\mathcal L}:C_K^{\mathcal L}\to\mu_m$ with those restrictions. Its kernel contains a basic idèlic neighborhood: outside finitely many places it contains all local units, and at the remaining finite places it contains sufficiently deep congruence subgroups. The positive real and complex multiplicative groups are connected, so their images in the finite discrete group $\mu_m$ are trivial. Hence the kernel contains a ray congruence subgroup for some finite modulus, including the necessary real positivity conditions, and $\psi_{\mathcal L}$ factors through its finite ray class group by [F4] inside $\mathcal L$. The modulus and finite ray character are arithmetic codes in $\mathcal L$. [F1, F3, F4, F5, step 3.1, given, construct]

5.1 Define the same ray character on ambient idèles. An ambient idèle has only finitely many nonzero finite valuations, and at the finitely many modulus primes and real places it determines finite valuation, residue and sign codes. These codes have representatives in the common number field by density. The corresponding finite local-approximation problem has a solution in $K^\times$: [F4] gives one inside $\mathcal L$ for those coded targets, and it is the same rational-coordinate field element outside. Select the least solution in the fixed enumeration of $K$. Multiplying the given idèle by this principal element makes its modulus components congruent to one and its selected real components positive. Read the resulting ideal prime to the modulus and evaluate the internal ray character on its class. Any two normalizing choices differ by a principal element satisfying the same congruences and signs, so they give the same ray class. This produces a homomorphism on ambient $C_K$, continuous because its kernel contains the open ray congruence subgroup. Its local restrictions agree with the prescribed characters: both factor through the finite local $m$-power quotient and have the same table on the algebraic representatives from step 2.1. Every internal ray class has an ambient idèle representative obtained from its finite prime factorization, so the ambient and internal characters have the same image and order. Conversely, an ambient continuous $\mu_m$-valued character has open kernel and therefore contains some ray congruence subgroup by the same finite-neighborhood argument. The ray ideal and principal-equivalence codes are identical by step 1.1, and every ray class has an internal and an ambient representative. Its finite ray-character table lies in $\mathcal L$ and defines an internal character with the same image. Its local restrictions have the same tables on the representatives in step 2.1, using the power-test absoluteness of step 3.1. This proves both directions of the stated transfer for any such character. [F1, F4, F5, step 2.1, step 4.1, construct, algebra]

6.1 Conversely, let an ambient continuous global character with the stated restrictions be given. Its kernel contains a basic idèlic neighborhood, so it is trivial on all local unit groups outside a finite set. For $a\in P(m,S)$, only finitely many places outside $S$ can then contribute to the value on the principal idèle: the finite exceptional set together with the finite nonunit support of $a$. At each of these places an $m$th root exists and can be chosen using only finite choice, so the local character value is one. Since the principal idèle has global value one, the product of the local values over $S$ is one. This proves necessity without simultaneously choosing roots at infinitely many places. [F5, step 5.1, given, algebra] ∎
