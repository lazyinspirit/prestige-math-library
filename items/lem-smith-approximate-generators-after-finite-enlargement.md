---
id: lem-smith-approximate-generators-after-finite-enlargement
kind: lemma
title: "Approximate generators after finitely enlarging the auxiliary places"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-number-field, def-ideal-class-group-of-a-domain, def-ring-of-integers-of-a-number-field, thm-number-field-ideal-class-group-finite-in-zf, thm-number-field-integral-ideal-factorisation-in-zf, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC is stated for the number-field and intermediate-field conventions; the
  actual choice of ideal representatives and their prime factors is finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I, Proposition 3.12"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3, approximate generators and finite enlargement of the auxiliary places"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K/F$ be a finite Galois extension of number fields, and let $V_0$ be a finite set of places of $F$. There is a finite set $V\supseteq V_0$ of places of $F$ such that, for every intermediate field $F\subseteq E\subseteq K$ and every finite prime $\mathfrak p$ of $E$ not above $V$, there is an $\alpha\in E^\times$ with
$$v_{\mathfrak p}(\alpha)=1,\qquad v_{\mathfrak q}(\alpha)=0\quad\text{for every other finite prime }\mathfrak q\text{ of }E\text{ not above }V.$$
In particular, for every integer $e\ge2$ this $\alpha$ satisfies the valuation congruences of an $e$th-power approximate generator. The assertion does not impose compatibility between different generators at the places above $V$.

## Statement references

[[def-number-field]]

[[def-ideal-class-group-of-a-domain]]

[[thm-number-field-ideal-class-group-finite-in-zf]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 3.12](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, a finite Galois number-field extension $K/F$, and a finite set $V_0$ of places of $F$.

[F1] Every number-field ideal class group is finite. [[thm-number-field-ideal-class-group-finite-in-zf]]

[F2] The ideal class group is the group of nonzero fractional ideals modulo principal fractional ideals. [[def-ideal-class-group-of-a-domain]] [[def-ring-of-integers-of-a-number-field]]

[F3] Every nonzero integral ideal of a number field has a finite factorization into prime ideals. [[thm-number-field-integral-ideal-factorisation-in-zf]]

## Proof

1.1 The finite Galois group $\operatorname{Gal}(K/F)$ has finitely many subgroups, so the extension has finitely many intermediate fields. By [F1], each has a finite ideal class group. For each intermediate $E$, choose finitely many nonzero integral ideals whose classes represent all elements of $\operatorname{Cl}(E)$, and include in $V$ the places of $F$ below every prime ideal dividing one of these representatives. Add $V_0$. Unique factorization of number-field ideals makes the resulting set $V$ finite. [F1, F2, F3, given, choose, construct]

2.1 Fix an intermediate field $E$ and a finite prime $\mathfrak p$ not above $V$. By construction, the class of $\mathfrak p$ is represented by an integral ideal supported at primes of $E$ above $V$. Thus there are integers $a_{\mathfrak q}$, nonzero for only finitely many $\mathfrak q$ above $V$, for which the fractional ideal $$\mathfrak p\prod_{\mathfrak q\mid V}\mathfrak q^{-a_{\mathfrak q}}$$ has trivial class. By [F2] it is $(\alpha)$ for some $\alpha\in E^\times$. Its valuations outside $V$ are exactly those in the Statement. Reducing them modulo any $e\ge2$ gives the final assertion. The proof does not impose local power-class relations among separately chosen generators. [F2, step 1.1, given, algebra, choose] ∎
