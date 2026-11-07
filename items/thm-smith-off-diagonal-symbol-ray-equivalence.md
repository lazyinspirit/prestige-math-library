---
id: thm-smith-off-diagonal-symbol-ray-equivalence
kind: theorem
title: "Off-diagonal symbols, local sections and ray Frobenius"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 31
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-smith-ramification-sections-from-unpacked-tuple, lem-smith-kummer-section-from-approximate-generator, lem-smith-off-diagonal-symbol-section-equivalence, lem-smith-global-section-reciprocity-comparison, lem-smith-ray-frobenius-local-generator-comparison, lem-kummer-cohomology-of-roots-of-unity, thm-shapiro-lemma-for-group-cohomology, thm-global-field-completion-tensor-product-decomposition]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the class-field, finite-module
  duality, section and local completion interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3.1, Proposition 3.23"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K/F$ be finite Galois with group $G$, let $e\ge2$ with $\mu_e\subseteq K$, and let $V$ contain all archimedean places, places dividing $e$, and places ramified in $K/F$. Suppose that for every intermediate $J$ with $K/J$ cyclic, and every prime of $J$ outside $V$ inert in $K/J$, there exists an approximate generator with valuation $1$ at that prime and $0$ at every other outside prime, modulo $e$.

Let $P,P',Q$ be primes of $K$ outside $V$ over three distinct primes of $F$. Assume $P,P'$ have the same decomposition subgroup and arithmetic Frobenius element in $G$. Put $E=K^{D_P}$, let $\mathfrak p=P\cap E$, $\mathfrak p'=P'\cap E$, and let $T$ be the set of primes of $E$ over the prime of $F$ below $Q$. Give $P,P',Q$ approximate generators $\alpha,\alpha',\beta$ in their respective decomposition fields, with $\alpha/\alpha'$ a local $e$th power at every place of $E$ over $V$. Use their natural Kummer ramification sections. Let $s_{P,Q}:G\to\mu_e$ be the off-diagonal Hilbert-symbol function defined in [[lem-smith-off-diagonal-symbol-section-equivalence]], and define $s_{P',Q}$ similarly.

The following conditions are equivalent:

1. $s_{P,Q}=s_{P',Q}$.
2. For every finite $G$-module $M$ killed by $e$ and $m\in\operatorname{Hom}(\mu_e,M)^{D_P}$, the difference $B_{P,M}(m)-B_{P',M}(m)$ restricts trivially at $Q$.
3. For every finite $G$-module $N$ killed by $e$ and $n\in\operatorname{Hom}(\mu_e,N)^{D_Q}$, the values $B_{Q,N}(n)(\operatorname{Frob}_P)$ and $B_{Q,N}(n)(\operatorname{Frob}_{P'})$ agree in the common Frobenius coinvariant group.
4. $\mathfrak p$ and $\mathfrak p'$ have equal Frobenius in every finite abelian exponent-$e$ extension of $E$ unramified outside the places above $V$ and the set $T$.

The theorem retains the stated matched and distinct-prime hypotheses. It makes no symbol-surjectivity, uniform counting, diagonal-spin, or favored-twist distribution assertion.

## Statement references

[[lem-smith-off-diagonal-symbol-section-equivalence]]

[[lem-smith-global-section-reciprocity-comparison]]

[[lem-smith-ray-frobenius-local-generator-comparison]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 3.23](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the extension, starting-tuple generator condition, primes and generators in the Statement.

[F1] The cyclic-inert approximate-generator hypothesis supplies approximate generators at all outside primes of every intermediate field and compatible natural ramification sections. The same construction applies to the starting tuple $K/E$. [[lem-smith-ramification-sections-from-unpacked-tuple]]

[F2] The off-diagonal Hilbert-symbol functions agree exactly when all $Q$-section Frobenius evaluations agree under the displayed matched decomposition and Frobenius hypotheses. [[lem-smith-off-diagonal-symbol-section-equivalence]]

[F3] Global finite-module reciprocity equates the local $Q$-vanishing condition for the $P$-section difference with equality of the $Q$-section evaluations at $P,P'$. [[lem-smith-global-section-reciprocity-comparison]]

[F4] Under the outside-prime generator and constant-dual section hypotheses, agreement of the ray Frobenius data is equivalent to the original approximate-generator ratio being an $e$th power at every place in $T$. [[lem-smith-ray-frobenius-local-generator-comparison]]

[F5] The natural universal section is the Shapiro image of the Kummer class of the approximate generator. Shapiro is natural, completion decomposes over the primes above a finite place, and local Kummer classes vanish precisely for local $e$th powers. [[lem-smith-kummer-section-from-approximate-generator]] [[thm-shapiro-lemma-for-group-cohomology]] [[thm-global-field-completion-tensor-product-decomposition]] [[lem-kummer-cohomology-of-roots-of-unity]]

## Proof

1.1 All hypotheses of [F2] hold with the second selected prime $Q$ unchanged, so it gives the equivalence of conditions 1 and 3. The local agreement of $\alpha/\alpha'$ above $V$ and the three distinct base primes give the hypotheses of [F3], which gives the equivalence of conditions 2 and 3. [F2, F3, given, algebra]

1.2 Put $S$ for the places of $E$ over $V$. By [F1], every finite prime of $E$ outside $S$ has an approximate generator modulo $e$. For the tuple $K/E$, each cyclic intermediate field is also intermediate over $F$, and every prime inert in the corresponding cyclic extension satisfies the original generator hypothesis. Hence [F1], applied over $E$ with the constant module $\mathbb Z/e\mathbb Z$, supplies the global ramification classes required by [F4] at every prime outside $S$. The original generators $\alpha,\alpha'$ satisfy [F4], since $T$ lies outside $S$ and the three underlying primes of $F$ are distinct. Thus condition 4 is equivalent to $\alpha/\alpha'$ being a local $e$th power at every place of $T$. [F1, F4, given, algebra]

1.3 Let $U=\mathbb Z[G]\otimes_{\mathbb Z[D_P]}\mu_e$ and $m_0(\zeta)=[1]\otimes\zeta$. By [F5], the universal section difference is the Shapiro image of the Kummer class of $\alpha/\alpha'$. Restricting the finite induced module to the local decomposition group at $Q$ decomposes it by the double cosets $D_Q\backslash G/D_P$; these cosets index the primes of $E$ above the prime of $F$ below $Q$. Applying the natural local Shapiro isomorphism on each orbit identifies the restriction with the tuple of local Kummer classes of $\alpha/\alpha'$ at those primes. By [F5], the universal restriction vanishes if and only if the ratio is an $e$th power at every place of $T$. [F5, given, construct, algebra]

2.1 For an arbitrary $M,m$, the $D_P$-equivariant map $m:\mu_e\to M$ induces the unique $G$-equivariant map $U\to M$ carrying $m_0$ to $m$. Naturality in [F5] sends the universal section difference to the section difference for $M,m$. Hence the universal local vanishing in step 1.3 is equivalent to condition 2. Combining steps 1.1, 1.2, and 1.3 proves all four equivalences. [F5, step 1.1, step 1.2, step 1.3, given, algebra] ∎
