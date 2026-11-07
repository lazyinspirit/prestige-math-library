---
id: thm-smith-off-diagonal-symbol-realization
kind: theorem
title: "Realization of all off-diagonal symbol values in a fixed prime class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 32
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-smith-ramification-sections-from-unpacked-tuple, lem-smith-fixed-set-compatible-approximate-generators, lem-smith-ramification-section-ray-degree-formula, thm-smith-off-diagonal-symbol-ray-equivalence, thm-natural-density-chebotarev, thm-decomposition-and-inertia-in-towers, thm-decomposition-and-inertia-fixed-fields, thm-decomposition-inertia-exact-sequence]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the section, class-field,
  finite-module duality and Chebotarev interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3.1, Proposition 3.17"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K/F$ be finite Galois with group $G$, let $e\ge2$ with $\mu_e\subseteq K$, and let $V$ contain the archimedean places, places dividing $e$, and all primes ramified in $K/F$. Suppose every prime outside $V$ inert in a cyclic extension $K/J$, for every intermediate $J$, has an approximate generator of valuation $1$ there and $0$ at every other outside prime, modulo $e$.

Fix primes $P_0,Q$ of $K$ outside $V$. Put $D=D_{P_0}$, $E=K^D$, $J=K^{D_Q}$, and let $S$ be the places of $E$ above $V$. Choose approximate generators for primes of $E$ outside $S$ so that primes with the same Frobenius in every finite abelian exponent-$e$ extension of $E$ unramified outside $S$ have locally matching $e$th-power classes at $S$. Fix an approximate generator for $Q$. For each double coset $D\backslash G/D_Q$, choose $t\in G$, put $L_t=E\,tJ$ and $m_t=|\mu_e(L_t)|$, and choose any $\zeta_t\in\mu_{m_t}$.

There exists a prime $P$ of $K$ outside $V$, with underlying prime of $F$ distinct from that of $Q$, such that $D_P=D$ and $\operatorname{Frob}_P=\operatorname{Frob}_{P_0}$ in $G$, the contractions of $P,P_0$ to $E$ have the same Frobenius in every finite abelian exponent-$e$ extension of $E$ unramified outside $S$, and its off-diagonal Hilbert symbols satisfy
$$H_{m_t}(\alpha_P,t\beta_Q)_{P\cap L_t}=\zeta_t\qquad\text{for every chosen }t.$$
Here the generators $\alpha_P,\beta_Q$ are the selected approximate generators and $H_m$ uses the convention of [[lem-smith-off-diagonal-symbol-section-equivalence]]. This realizes individual off-diagonal symbol values; it does not assert uniform estimates, diagonal-spin distribution, or the favored-twist rank law.

## Statement references

[[lem-smith-ramification-section-ray-degree-formula]]

[[thm-smith-off-diagonal-symbol-ray-equivalence]]

[[thm-natural-density-chebotarev]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 3.17](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the starting tuple, primes, compatible generator choices, double-coset representatives and target values in the Statement.

[F1] The approximate-generator hypothesis supplies compatible generators and natural global ramification sections over $E$ for the constant module, with the original auxiliary set. [[lem-smith-ramification-sections-from-unpacked-tuple]] [[lem-smith-fixed-set-compatible-approximate-generators]]

[F2] Given such sections, adjoining the selected outside primes to $S$ enlarges the maximal exponent-$e$ abelian extension by degree the product of $\gcd(e,Nw-1)$ over those primes. [[lem-smith-ramification-section-ray-degree-formula]]

[F3] For two primes in the fixed class and with distinct base primes away from $Q$, equality of the full off-diagonal Hilbert-symbol functions is equivalent to equality of the associated ray Frobenius data. [[thm-smith-off-diagonal-symbol-ray-equivalence]]

[F4] Every nonempty conjugacy class in a finite Galois number-field extension occurs at infinitely many unramified primes. [[thm-natural-density-chebotarev]]

[F5] Decomposition and inertia groups intersect in towers; an unramified decomposition group is cyclic, acts by residue Frobenius, and its fixed field has residue degree one at the distinguished prime. [[thm-decomposition-and-inertia-in-towers]] [[thm-decomposition-inertia-exact-sequence]] [[thm-decomposition-and-inertia-fixed-fields]]

## Proof

1.1 Let $T$ be the set of primes of $E$ over the prime of $F$ below $Q$. Let $E(S)$ and $E(S\cup T)$ be the maximal abelian exponent-$e$ extensions unramified outside the indicated sets. By [F1] the section hypotheses of [F2] hold over $E$, so these fields are finite and $$[E(S\cup T):E(S)]=\prod_{w\in T}\gcd(e,Nw-1).$$ The extension $K/E$ is cyclic with group $D$ and unramified outside $S$. Its intersection with $E(S\cup T)$ is an abelian exponent-$e$ extension of $E$ unramified outside $S$, hence lies in $E(S)$. Thus $$[K E(S\cup T):K E(S)]=[E(S\cup T):E(S)].$$ [F1, F2, F5, given, algebra]

2.1 The primes of $E$ over the base prime below $Q$ are indexed by $D\backslash G/D_Q$. For a representative $t$, put $H_t=D\cap tD_Qt^{-1}$ and $L_t=K^{H_t}=E\,tJ$. At the prime $tQ$, [F5] identifies $H_t$ with the decomposition group of $K/L_t$ and with the decomposition group of $K/E$. Hence the corresponding prime of $L_t$ has residue degree one over its contraction $w$ to $E$. The residue Frobenius at $w$ acts on $\mu_e$ through a generator of $H_t$, so $$m_t=|\mu_e^{H_t}|=\gcd(e,Nw-1).$$ Consequently the degree in step 1.1 is $\prod_t m_t$. [F5, step 1.1, given, algebra]

3.1 The extension $K E(S\cup T)/E$ is finite abelian, because $K/E$ is cyclic and the ray extension is abelian. Let $\sigma_0$ be the Frobenius at $P_0\cap E$ in $K E(S)/E$. There are exactly $\prod_t m_t$ lifts of $\sigma_0$ to $K E(S\cup T)/E$. Fix one lift $\gamma$, extend it to an automorphism $\widetilde\gamma$ of a finite Galois closure $N/F$, and apply [F4] to its conjugacy class. Choosing a prime of $N$ whose Frobenius is exactly $\widetilde\gamma$ gives a prime $w$ of $E$ of residue degree one over its prime of $F$, since $\widetilde\gamma$ fixes $E$. Its Frobenius in $K E(S\cup T)/E$ is $\gamma$. The restriction of $\gamma$ to $K/E$ is the generator $\operatorname{Frob}_{P_0}$ of $D$, so $w$ is inert in $K/E$. Its unique prime $P$ in $K$ has $D_P=D$ and the same arithmetic Frobenius as $P_0$. Exclude the finitely many primes below $V$ or $Q$ and any previously chosen base primes; [F4] still supplies infinitely many choices. [F4, F5, step 1.1, step 2.1, given, choose, algebra]

4.1 For the prime $P$ in step 3.1, the restriction of $\gamma$ to $E(S)$ equals that of $\sigma_0$, so the selected generator $\alpha_P$ has the required matching local labels with the generator at $P_0$. Choose one such $P$ for each lift, with pairwise distinct base primes. If two lifts are distinct, their ray Frobenius elements differ in $E(S\cup T)$; by [F3] their full off-diagonal symbol functions differ. Conversely, by the double-coset covariance in [F3], a symbol function is determined by its values at the chosen representatives, which lie in the groups $\mu_{m_t}$. Thus at least $\prod_t m_t$ distinct functions inject into a set of exactly $\prod_t m_t$ tuples. Every tuple occurs, including the prescribed $(\zeta_t)$. [F3, step 2.1, step 3.1, given, choose, algebra] ∎
