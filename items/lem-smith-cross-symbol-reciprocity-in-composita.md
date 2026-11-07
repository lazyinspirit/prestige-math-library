---
id: lem-smith-cross-symbol-reciprocity-in-composita
kind: lemma
title: "Off-diagonal cross-symbol reciprocity in decomposition-field composita"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-decomposition-and-inertia-fixed-fields, thm-ramification-and-residue-degrees-in-towers, lem-smith-cross-symbol-reciprocity-common-field]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the global and local Hilbert
  reciprocity interface.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I, Proposition 3.16"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3, Proposition 3.16(5), off-diagonal cross-symbol reciprocity"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K/F$ be a finite Galois extension of number fields with $\mu_e\subseteq K$ for $e\ge2$, and let $V$ contain the archimedean places, the places dividing $e$, and the places ramified in $K/F$. Choose distinct finite primes $\mathfrak P,\mathfrak Q$ of $K$ not above $V$. Write $D_{\mathfrak P},D_{\mathfrak Q}$ for their decomposition groups over $F$, put $E_{\mathfrak P}=K^{D_{\mathfrak P}}$, $E_{\mathfrak Q}=K^{D_{\mathfrak Q}}$, and $L=E_{\mathfrak P}E_{\mathfrak Q}$. Suppose given $\alpha\in E_{\mathfrak P}^\times$ and $\beta\in E_{\mathfrak Q}^\times$ whose valuations at the contractions of $\mathfrak P$ and $\mathfrak Q$ respectively are $1$ modulo $e$ and whose other finite valuations outside $V$ are $0$ modulo $e$.

Let $m$ be the largest divisor of $e$ with $\mu_m\subseteq L$. Write $\mathfrak p=\mathfrak P\cap L$ and $\mathfrak q=\mathfrak Q\cap L$. For $m\ge2$, let $H_{w,m}$ be the normalized local $m$th Hilbert symbol in the convention $\operatorname{rec}_w(b)(a^{1/m})/a^{1/m}$; for $m=1$ set it to $1$. Then $\mathfrak p\ne\mathfrak q$ and
$$H_{\mathfrak p,m}(\alpha,\beta)\,H_{\mathfrak q,m}(\beta,\alpha)^{-1}=\prod_{w\mid V}H_{w,m}(\alpha,\beta)^{-1}.$$
If a second pair $\mathfrak P',\mathfrak Q'$ has the same respective decomposition groups, with approximate generators whose ratios to $\alpha$ and $\beta$ are local $e$th powers at every place over $V$ of the corresponding decomposition fields, its displayed cross-symbol ratio is equal to the first. No diagonal spin or arbitrary double-coset expansion is asserted.

## Statement references

[[thm-decomposition-and-inertia-fixed-fields]]

[[thm-ramification-and-residue-degrees-in-towers]]

[[lem-smith-cross-symbol-reciprocity-common-field]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 3.16](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the finite Galois extension, auxiliary places, distinct primes and generators in the Statement.

[F1] In a finite Galois extension, the chosen prime is the only prime above its contraction to the decomposition field. [[thm-decomposition-and-inertia-fixed-fields]]

[F2] Ramification indices multiply in towers. [[thm-ramification-and-residue-degrees-in-towers]]

[F3] For two valuation-normalized generators in one field containing the relevant roots of unity, the cross-symbol ratio is the inverse product of the auxiliary local symbols and depends only on the auxiliary local power classes. [[lem-smith-cross-symbol-reciprocity-common-field]]

## Proof

1.1 By [F1], $\mathfrak P$ is the unique prime of $K$ above its contraction to $E_{\mathfrak P}$; hence $\mathfrak p=\mathfrak P\cap L$ is the unique prime of $L$ above that contraction. Similarly $\mathfrak q$ is the unique prime above the contraction of $\mathfrak Q$ to $E_{\mathfrak Q}$. If $\mathfrak p=\mathfrak q$, then $\mathfrak Q$ lies above the contraction of $\mathfrak P$ to $E_{\mathfrak P}$, contradicting the uniqueness of $\mathfrak P$. Thus $\mathfrak p\ne\mathfrak q$. [F1, given, algebra]

2.1 Since the primes of $F$ below $\mathfrak P$ and $\mathfrak Q$ lie outside $V$, they are unramified in $K/F$. By [F2], the corresponding primes are unramified in each intermediate tower, so lifting $\alpha$ and $\beta$ to $L$ preserves their valuation $1$ modulo $e$ at $\mathfrak p$ and $\mathfrak q$. Step 1.1 and the assumed valuation conditions show that every other finite valuation outside the places of $L$ above $V$ is divisible by $e$, hence by $m$. The places above $V$ contain the archimedean and $m$-adic places of $L$. [F2, step 1.1, given, algebra]

3.1 If $m=1$, all displayed symbols equal $1$. If $m\ge2$, apply [F3] over $L$ with the two selected primes and generators from step 2.1 to obtain the formula. Equal respective decomposition groups for a second pair give the same fields $E_{\mathfrak P}$, $E_{\mathfrak Q}$ and $L$. An $e$th power in either decomposition-field completion remains an $m$th power in every completion of $L$ above it, so the auxiliary local classes of the two pairs agree. The comparison conclusion follows from [F3]. No diagonal case is used. [F3, step 2.1, given, algebra] ∎
