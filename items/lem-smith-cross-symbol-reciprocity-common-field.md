---
id: lem-smith-cross-symbol-reciprocity-common-field
kind: lemma
title: "Cross-symbol reciprocity for two approximate generators over one field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-tame-local-hilbert-symbol-residue-formula, thm-hilbert-reciprocity-product-formula-for-number-fields]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the global reciprocity and
  local Hilbert-symbol interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I, Proposition 3.16"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3, Proposition 3.16(5), Hilbert reciprocity for cross symbols"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $E$ be a number field containing $\mu_e$ for an integer $e\ge2$, and let $V$ be a finite set of places containing the archimedean places and all places dividing $e$. Let $\mathfrak p\ne\mathfrak q$ be finite places outside $V$, and choose $\alpha,\beta\in E^\times$ with
$$v_{\mathfrak p}(\alpha)\equiv1,\quad v_{\mathfrak q}(\beta)\equiv1\pmod e,$$
and with every other finite valuation outside $V$ of $\alpha$ and respectively $\beta$ divisible by $e$. For each place $w$, let $H_w(a,b)$ be the normalized local $e$th Hilbert symbol in the convention $\operatorname{rec}_w(b)(a^{1/e})/a^{1/e}$. Then
$$H_{\mathfrak p}(\alpha,\beta)\,H_{\mathfrak q}(\beta,\alpha)^{-1}=\prod_{w\in V}H_w(\alpha,\beta)^{-1}.$$
In particular, a second pair of distinct places and generators satisfying the same hypotheses gives the same cross-symbol ratio whenever the corresponding generators agree modulo $e$th powers in $E_w^\times$ for every $w\in V$. This is a common-field reciprocity statement; it does not assert the general double-coset or involution-spin formulas.

## Statement references

[[lem-tame-local-hilbert-symbol-residue-formula]]

[[thm-hilbert-reciprocity-product-formula-for-number-fields]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 3.16](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** The field, integer, auxiliary places, two distinct primes, and approximate generators in the Statement.

[F1] The product of the normalized local $e$th Hilbert symbols of two global elements is $1$. [[thm-hilbert-reciprocity-product-formula-for-number-fields]]

[F2] At a finite place, the normalized Hilbert symbol is skew-symmetric. If the residue characteristic is prime to $e$, its value on two units is $1$. [[lem-tame-local-hilbert-symbol-residue-formula]]

## Proof

1.1 At a finite place $w\notin V\cup\{\mathfrak p,\mathfrak q\}$, both valuations are multiples of $e$, so after removing local $e$th powers both inputs are units. The symbol is unchanged by removing an $e$th power in either argument: this is immediate from its defining Kummer character and reciprocity action. By [F2] the resulting unit-unit symbol is $1$. Thus the only possible factors outside $V$ in [F1] occur at $\mathfrak p$ and $\mathfrak q$. [F1, F2, given, algebra]

2.1 Applying [F1] and then the skew-symmetry in [F2] at $\mathfrak q$ gives $$H_{\mathfrak p}(\alpha,\beta)H_{\mathfrak q}(\beta,\alpha)^{-1}\prod_{w\in V}H_w(\alpha,\beta)=1,$$ which is the displayed identity. Each local factor in $V$ depends only on the two local classes modulo $e$th powers. Therefore a second pair with the stated local-class agreement has the same product and hence the same cross-symbol ratio. The argument uses neither a double-coset formula nor an involution-spin assertion. [F1, F2, step 1.1, algebra] ∎
