---
id: lem-smith-fixed-set-compatible-approximate-generators
kind: lemma
title: "Frobenius-compatible approximate generators for a fixed auxiliary set"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, def-idele-group-of-a-global-field, def-idele-class-group-of-a-global-field, thm-number-field-integral-ideal-factorisation-in-zf, thm-global-class-field-existence-number-field, thm-global-artin-reciprocity-and-norm-index, thm-local-artin-unramified-frobenius-normalization, thm-local-artin-reciprocity-and-norm-index, lem-unramified-local-unit-norms-and-cohomology, thm-finite-unramified-local-extensions-classified-by-residue-extensions, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC chooses prime generators and compatible representatives. Countable Choice
  and DC are inherited from the number-field class-field interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3, Notations 3.5 and 3.8"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $E$ be a number field, let $e\ge2$, and let $S$ be a finite set of places of $E$ containing all archimedean places. Suppose that for every finite prime $\mathfrak p\notin S$ there is $\alpha\in E^\times$ such that
$$v_{\mathfrak p}(\alpha)\equiv1\pmod e,\qquad v_{\mathfrak r}(\alpha)\equiv0\pmod e\quad(\mathfrak r\notin S,\ \mathfrak r\ne\mathfrak p).$$
Then such an $\alpha_{\mathfrak p}$ can be chosen for every $\mathfrak p\notin S$ so that, whenever two primes have the same Frobenius in every finite abelian extension of $E$ of exponent dividing $e$ unramified outside $S$, their quotient is an $e$th power in $E_w^\times$ for every $w\in S$. The auxiliary set $S$ is not enlarged.

## Statement references

[[thm-global-class-field-existence-number-field]]

[[thm-global-artin-reciprocity-and-norm-index]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Notations 3.5 and 3.8](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the field, $e$, set $S$, and the prime-generator hypothesis in the Statement.

[F1] Every open finite-index idèle-class subgroup is the norm group of a finite abelian extension, and global Artin reciprocity identifies the quotient with its Galois group. [[thm-global-class-field-existence-number-field]] [[thm-global-artin-reciprocity-and-norm-index]]

[F2] The local Artin map sends a uniformizer to arithmetic Frobenius on unramified extensions; local abelian norm subgroups determine the extensions. For an unramified extension every unit is a norm, and unramified extensions of every finite degree exist. [[thm-local-artin-unramified-frobenius-normalization]] [[thm-local-artin-reciprocity-and-norm-index]] [[lem-unramified-local-unit-norms-and-cohomology]] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[F3] Nonzero number-field ideals factor uniquely into prime ideals, and finite abelian groups admit elementary-divisor decompositions. [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

## Proof

1.1 Put $U_{S,e}=\{u\in E^\times:v_{\mathfrak r}(u)\equiv0\pmod e\text{ for all }\mathfrak r\notin S\}$. For any idèle $a$, the prime-generator hypothesis and [F3] supply $z\in E^\times$ with $v_{\mathfrak r}(z)\equiv v_{\mathfrak r}(a_{\mathfrak r})\pmod e$ for every $\mathfrak r\notin S$: multiply appropriate powers of the finitely many prime generators. Two such elements differ by an element of $U_{S,e}$. [F3, given, construct, algebra]

1.2 For each $w\in S$, the quotient $E_w^\times/(E_w^\times)^e$ is finite and the subgroup of $e$th powers is open. At a finite $w$, the valuation quotient is finite; if $a=v_w(e)$ and $m>2a$, Newton iteration makes every unit congruent to $1$ modulo $\mathfrak p_w^m$ an $e$th power, and the finite residue-ring quotient controls the other units. The real quotient has at most two classes and the complex quotient is trivial. Thus $$A=\left(\prod_{w\in S}E_w^\times/(E_w^\times)^e\right)\Big/\operatorname{im}(U_{S,e})$$ is finite abelian of exponent dividing $e$. [given, construct, algebra]

2.1 Given a character $\lambda:A\to\mu_e$ and an idèle $a$, take $z$ as in step 1.1 and set $$\Theta_\lambda(a)=\lambda\bigl([(a_w/z)_{w\in S}]\bigr).$$ This is independent of $z$ and multiplicative, and it is trivial on $E^\times$. Its kernel contains the product of local $e$th-power subgroups at $S$ and local unit groups outside $S$, which is open by step 1.2. Hence it is a continuous finite-order idèle-class character, of order dividing $e$. [step 1.1, step 1.2, construct, algebra]

3.1 By [F1], its kernel corresponds to a finite abelian extension of exponent dividing $e$. This extension is unramified outside $S$: local-global Artin compatibility and step 2.1 make each local norm subgroup contain the local units. Its quotient is cyclic of some order $d$, generated by a uniformizer. The unramified degree-$d$ extension has the same norm subgroup by [F2], so the uniqueness in [F2] identifies the local extension with it. For a generator $\alpha_{\mathfrak p}$ as in the hypothesis, [F2] gives $$\Theta_\lambda(\operatorname{Frob}_{\mathfrak p})=\lambda\bigl([\alpha_{\mathfrak p}]_S^{-1}\bigr).$$ If two primes have the same stated Frobenius data, all characters of $A$ agree on their generator labels. Characters into $\mu_e$ separate $A$ by [F3], so their label ratio belongs to the image of $U_{S,e}$. Multiplying one generator by a suitable element of $U_{S,e}$ makes the labels equal while preserving every outside valuation modulo $e$. [F1, F2, F3, step 1.2, step 2.1, given, algebra]

4.1 Partition the primes outside $S$ by their joint Frobenius data. Choose one generator in each class and a correction in $U_{S,e}$ for each other prime, as in step 3.1. AC supplies the simultaneous choices. The resulting generators retain the prescribed outside valuation residues and have pairwise matching $e$th-power classes at each place of $S$. [step 3.1, given, choose, algebra] ∎
