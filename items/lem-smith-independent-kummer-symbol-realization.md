---
id: lem-smith-independent-kummer-symbol-realization
kind: lemma
title: "Independent Kummer values with prescribed Frobenius class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 31
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-kummer-pairing-is-perfect, lem-smith-unramified-kummer-frobenius-residue-symbol, thm-natural-density-chebotarev, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the natural-density
  Chebotarev and local Kummer interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3.1, Kummer extensions in the realization of symbols"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $E$ be a number field containing $\mu_e$, where $e\ge2$. Let $\mathfrak q_1,\ldots,\mathfrak q_r$ be distinct finite primes of residue characteristic prime to $e$, and let $\beta_1,\ldots,\beta_r\in E^\times$ satisfy
$$v_{\mathfrak q_i}(\beta_j)\equiv\delta_{ij}\pmod e.$$
Let $U/E$ be a finite Galois extension unramified at every $\mathfrak q_i$, and let $C\subseteq\operatorname{Gal}(U/E)$ be a nonempty conjugacy-stable set. Put $L=E(\beta_1^{1/e},\ldots,\beta_r^{1/e})$, with chosen roots. Then $L$ and $U$ are linearly disjoint over $E$, and the Kummer map identifies $\operatorname{Gal}(L/E)$ with $\mu_e^r$. For every tuple $(\zeta_i)\in\mu_e^r$, a set of primes of $E$ of natural density
$$\frac{|C|}{[U:E]e^r}$$
has Frobenius in $C$ on $U$ and sends each chosen $e$th root of $\beta_i$ to $\zeta_i$ times that root. The primes are understood to be unramified in $LU/E$. This result does not assert the general source grid-symbol realization or its uniform analytic estimates.

## Statement references

[[thm-kummer-pairing-is-perfect]]

[[thm-natural-density-chebotarev]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, §3.1](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the field, roots of unity, primes, radicals, extension and conjugacy-stable set in the Statement.

[F1] The Kummer pairing of a finite subgroup of $E^\times/(E^\times)^e$ with the associated Galois group is nondegenerate in both variables. [[thm-kummer-pairing-is-perfect]]

[F2] For a local field of residue characteristic prime to $e$, the Kummer class of a unit is unramified. [[lem-smith-unramified-kummer-frobenius-residue-symbol]]

[F3] For a finite Galois number-field extension, the natural density of primes with Frobenius in a conjugacy-stable subset is the cardinality of that subset divided by the Galois group order. [[thm-natural-density-chebotarev]]

[F4] Finite abelian groups admit elementary-divisor decompositions. [[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

## Proof

1.1 If $\prod_i\beta_i^{a_i}$ is an $e$th power in $E$, its valuation at $\mathfrak q_j$ is divisible by $e$, so $a_j\equiv0\pmod e$ for each $j$. Thus the classes of the $\beta_i$ generate $(\mathbb Z/e\mathbb Z)^r$. By [F1] and [F4], their Kummer pairing identifies $\operatorname{Gal}(L/E)$ with $\operatorname{Hom}((\mathbb Z/e\mathbb Z)^r,\mu_e)=\mu_e^r$. [F1, F4, given, algebra]

2.1 Fix $i$ and work over the completion at $\mathfrak q_i$. For $j\ne i$, the valuation of $\beta_j$ is divisible by $e$, so after removing an $e$th power it is a unit; its Kummer extension is unramified by [F2]. The valuation of $\beta_i$ is prime to $e$, so the valuation of an $e$th root has denominator $e$; adjoining it has ramification index at least $e$ and degree at most $e$, hence is totally ramified of degree $e$. The same remains true after adjoining the other, unramified radicals. Consequently the inertia subgroup of $L/E$ at a prime above $\mathfrak q_i$ maps onto the full $i$th factor of $\mu_e^r$ and trivially to all other factors. [F2, step 1.1, given, algebra]

3.1 The inertia subgroups from step 2.1 generate all of $\operatorname{Gal}(L/E)$. Let $T=L\cap U$. It is unramified at all $\mathfrak q_i$ as a subextension of $U$, so each of those inertia groups acts trivially on $T$. Therefore every automorphism of $L/E$ fixes $T$, giving $T=E$. Since both extensions are Galois, they are linearly disjoint and $\operatorname{Gal}(LU/E)\cong\operatorname{Gal}(U/E)\times\mu_e^r$. [step 1.1, step 2.1, given, algebra]

4.1 In the direct product from step 3.1, the subset $C\times\{(\zeta_i)\}$ is conjugacy-stable because the Kummer factor is abelian. It has $|C|$ elements, while the full group has order $[U:E]e^r$. Applying [F3] gives the stated natural density; projection to the Kummer factor is precisely the displayed action on the chosen roots. [F3, step 3.1, given, algebra] ∎
