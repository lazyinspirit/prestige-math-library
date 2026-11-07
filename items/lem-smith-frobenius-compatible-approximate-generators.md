---
id: lem-smith-frobenius-compatible-approximate-generators
kind: lemma
title: "Frobenius-compatible approximate generators after finite enlargement"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, def-idele-group-of-a-global-field, def-idele-class-group-of-a-global-field, lem-smith-approximate-generators-after-finite-enlargement, thm-number-field-integral-ideal-factorisation-in-zf, thm-global-class-field-existence-number-field, thm-global-artin-reciprocity-and-norm-index, thm-local-artin-unramified-frobenius-normalization, thm-local-artin-reciprocity-and-norm-index, lem-unramified-local-unit-norms-and-cohomology, thm-finite-unramified-local-extensions-classified-by-residue-extensions, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC chooses compatible representatives for all prime classes; Countable Choice
  and DC are inherited from the number-field class-field interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I, Notation 3.8 and Proposition 3.9"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3, compatible approximate generators from class field theory"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K/F$ be a finite Galois extension of number fields, let $e\ge2$, and let $V_0$ be a finite set of places of $F$ containing the archimedean places and those dividing $e$. There is a finite $V\supseteq V_0$ with the following property for every intermediate field $E$ of $K/F$.

One may choose, for each finite prime $\mathfrak p$ of $E$ not above $V$, an element $\alpha_{\mathfrak p}\in E^\times$ whose valuation is $1$ at $\mathfrak p$ and $0$ at every other finite place of $E$ outside $V$. If two such primes have the same Frobenius in every finite abelian extension of $E$ of exponent dividing $e$ unramified outside the places above $V$, their chosen generators can be made compatible in the sense that
$$\alpha_{\mathfrak p}/\alpha_{\mathfrak q}\in(E_w^\times)^e\quad\text{for every place }w\text{ of }E\text{ above }V.$$
The choices can be made simultaneously for all intermediate fields and all these primes. This does not assert that enlarging $V_0$ preserves favored-twist hypotheses or prove the source's symbol reciprocity.

## Statement references

[[lem-smith-approximate-generators-after-finite-enlargement]]

[[thm-global-class-field-existence-number-field]]

[[thm-global-artin-reciprocity-and-norm-index]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Notation 3.8 and Proposition 3.9](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the finite Galois extension, integer and initial auxiliary place set in the Statement.

[F1] A finite enlargement makes every outside prime of every intermediate field have a generator with exactly the stated outside valuations. [[lem-smith-approximate-generators-after-finite-enlargement]]

[F2] Every open finite-index idèle-class subgroup is the norm group of a finite abelian extension, and global Artin reciprocity identifies the quotient with its Galois group. [[thm-global-class-field-existence-number-field]] [[thm-global-artin-reciprocity-and-norm-index]]

[F3] The local Artin map sends a uniformizer to arithmetic Frobenius on unramified extensions; local abelian norm subgroups determine the extensions. For an unramified extension every unit is a norm, and unramified extensions of every finite degree exist. [[thm-local-artin-unramified-frobenius-normalization]] [[thm-local-artin-reciprocity-and-norm-index]] [[lem-unramified-local-unit-norms-and-cohomology]] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[F4] Nonzero number-field ideals factor uniquely into prime ideals, and finite abelian groups admit elementary-divisor decompositions. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

## Proof

1.1 Take $V$ from [F1] and fix an intermediate field $E$. Write $S$ for the places of $E$ above $V$, and $U_S=\{u\in E^\times:v_w(u)=0\text{ for every finite }w\notin S\}$. By [F1] and [F4], for every fractional ideal supported outside $S$ there is $z\in E^\times$ with exactly its valuations outside $S$: multiply the prime generators and their inverses. Thus the outside-$S$ ideal class group is trivial. [F1, F4, given, construct, algebra]

1.2 For each $w\in S$, the quotient $E_w^\times/(E_w^\times)^e$ is finite and the subgroup of $e$th powers is open. At a finite $w$, the valuation quotient is finite; if $a=v_w(e)$ and $m>2a$, Newton iteration shows that every unit congruent to $1$ modulo $\mathfrak p_w^m$ is an $e$th power, and the corresponding finite residue-ring quotient controls the remaining units. The real quotient has at most two classes and the complex quotient is trivial. Hence $$A_S=\left(\prod_{w\in S}E_w^\times/(E_w^\times)^e\right)\Big/\operatorname{im}(U_S)$$ is a finite abelian group of exponent dividing $e$. [given, construct, algebra]

2.1 For a character $\lambda:A_S\to\mu_e$ and an idèle $a$, choose $z\in E^\times$ whose outside-$S$ valuations equal those of $a$, using step 1.1, and put $$\Theta_\lambda(a)=\lambda\bigl([(a_w/z)_{w\in S}]\bigr).$$ A different $z$ differs by an $S$-unit, so the value is independent of the choice; it is multiplicative and trivial on $E^\times$. Its kernel contains the product of the local $e$th-power subgroups at $S$ and local unit groups outside $S$. By step 1.2 this is an open subgroup, so $\Theta_\lambda$ is a continuous idèle-class character of finite order dividing $e$, unramified outside $S$. [step 1.1, step 1.2, construct, algebra]

3.1 By [F2], the kernel of $\Theta_\lambda$ corresponds to a finite abelian extension of $E$ of exponent dividing $e$; it is unramified outside $S$: by compatibility of global and local Artin maps, each local norm subgroup contains the local units. Its quotient is therefore cyclic of order $d$ generated by a uniformizer. The unramified degree-$d$ extension has the same norm subgroup by [F3], so local uniqueness in [F3] identifies the completion with that unramified extension. If $\alpha_{\mathfrak p}$ is any generator with outside valuations concentrated with value $1$ at $\mathfrak p$, then [F3] gives $$\Theta_\lambda(\operatorname{Frob}_{\mathfrak p})=\lambda\bigl([\alpha_{\mathfrak p}]_S^{-1}\bigr).$$ Thus the displayed Frobenius agreement for $\mathfrak p,\mathfrak q$ forces every character of $A_S$ to take the same value on their local-label classes. By the elementary-divisor theorem in [F4], characters into $\mu_e$ separate $A_S$, so $[\alpha_{\mathfrak p}/\alpha_{\mathfrak q}]_S$ lies in the image of an $S$-unit. Multiplying one generator by that unit gives the required local $e$th-power agreement without changing any outside valuation. [F2, F3, F4, step 1.2, step 2.1, given, algebra]

4.1 Partition the primes of each intermediate field by their joint Frobenius data in the stated class of extensions. Choose one representative generator per class and, using step 3.1, choose an $S$-unit correction for every other prime in the class. AC makes these choices simultaneously; the resulting generators have matching local classes throughout each class. There are finitely many intermediate fields, so the same choice completes all of them. No statement about favored twists or symbol equidistribution is used. [F1, step 3.1, given, choose, algebra] ∎
