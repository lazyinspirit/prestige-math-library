---
id: lem-smith-ramification-sections-finite-local-refinement
kind: lemma
title: "Ramification sections compatible on a finite local refinement"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-smith-approximate-generators-after-finite-enlargement, lem-smith-kummer-section-from-approximate-generator]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC chooses the approximate generators for the family of primes. Countable
  Choice and DC are inherited from the Kummer-section interface.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I, §3"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3, approximate generators and ramification sections"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K/F$ be a finite Galois extension of number fields, let $e\ge2$ with $\mu_e\subseteq K$, and let $V_0$ contain the archimedean places, the places dividing $e$, and the places ramified in $K/F$. There is a finite set $V\supseteq V_0$, a choice of approximate generators, and finitely many labels for pairs $(v,\mathfrak P)$ consisting of a finite place $v\notin V$ and a place $\mathfrak P$ of $K$ above it, with the following property.

Writing $D$ for the decomposition group of $\mathfrak P$ and $E=K^D$, the chosen generator in $E^\times$ has valuation $1$ at $\mathfrak P\cap E$ and valuation $0$ at all other finite places of $E$ outside $V$. It induces a natural ramification section for every finite $\operatorname{Gal}(K/F)$-module killed by $e$. If two pairs have the same label, their decomposition groups and fields $E$ coincide, and the two sections agree after restriction to every place in $V$ under the resulting identifications.

The labels are constructed from local power classes. No assertion is made that they are the original Frobenius grid classes, have a specified density, or preserve favored-twist hypotheses when $V_0$ is enlarged.

## Statement references

[[lem-smith-approximate-generators-after-finite-enlargement]]

[[lem-smith-kummer-section-from-approximate-generator]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, §3](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the finite Galois extension, $e$, and $V_0$ in the Statement.

[F1] After a finite enlargement of $V_0$, each prime of each intermediate field outside the enlarged set has a valuation-normalized approximate generator. [[lem-smith-approximate-generators-after-finite-enlargement]]

[F2] A supplied approximate generator gives a natural section for all finite $e$-torsion modules; local $e$th-power agreement of two generators over the auxiliary set gives equality of the corresponding section values there. [[lem-smith-kummer-section-from-approximate-generator]]

## Proof

1.1 Take $V$ from [F1]. For each pair $(v,\mathfrak P)$ as in the Statement, its decomposition group $D$ fixes an intermediate field $E$, and [F1] gives a generator with the displayed valuations at $\mathfrak P\cap E$. AC chooses one such generator for every pair. The set of possible subgroups $D$ is finite, so only finitely many intermediate fields and finitely many completions above $V$ occur. [F1, given, choose]

1.2 For every finite extension $L$ of $\mathbb Q_p$, the group $L^\times/(L^\times)^e$ is finite. Indeed, the valuation contributes only $\mathbb Z/e\mathbb Z$. Let $a=v_L(e)$ and choose $m>2a$. Every unit $u\equiv1\pmod{\mathfrak p_L^m}$ is an $e$th power: Newton iteration for $X^e-u$, starting at $1$, has error valuations tending to infinity because the initial error has valuation $>2v_L(e)$ and the derivative has valuation $v_L(e)$. The residue ring $\mathcal O_L/\mathfrak p_L^m$ is finite, so the quotient of the unit group by these principal units is finite. At a real completion the power-class group has at most two elements, and at a complex completion it is trivial. [given, construct, algebra]

2.1 For a pair $(v,\mathfrak P)$ with associated $D$ and $E$, label it by $D$ and by the tuple of the chosen generator's classes in $E_w^\times/(E_w^\times)^e$ for all $w$ above $V$. By steps 1.1 and 1.2 there are only finitely many labels. Equal labels give the same $D$ and $E$ and make the ratio of the two generators an $e$th power in every $E_w$ above $V$. Applying [F2] to each generator gives the natural ramification sections, and its compatibility assertion makes the two restrictions equal at every place of $V$. No density or original grid-class identification is used. [F2, step 1.1, step 1.2, algebra] ∎
