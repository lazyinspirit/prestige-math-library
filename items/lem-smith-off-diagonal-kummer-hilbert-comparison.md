---
id: lem-smith-off-diagonal-kummer-hilbert-comparison
kind: lemma
title: "Off-diagonal Kummer value and Hilbert symbol comparison"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps: [def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-smith-unramified-kummer-frobenius-residue-symbol, lem-tame-local-hilbert-symbol-residue-formula]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the local Kummer and tame
  Hilbert-symbol interfaces.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3.1, Definition 3.21 and Proposition 3.22"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $F$ be a nonarchimedean local field of characteristic zero with residue field of cardinality $q$ and characteristic prime to $e\ge2$. Put $m=\gcd(e,q-1)$. Let $\alpha,\beta\in F^\times$ have valuations $v(\alpha)\equiv1\pmod e$ and $v(\beta)\equiv0\pmod e$, and let $\psi_\beta:G_F\to\mu_e$ be a Kummer cocycle for $\beta$. For any arithmetic Frobenius lift $\sigma$, the value of $\psi_\beta(\sigma)$ in $\mu_e/(\sigma-1)\mu_e$ is independent of the lift. Under the power map to $\mu_m(F)$,
$$\psi_\beta(\sigma)^{e/m}=H_m(\alpha,\beta)^{-1},$$
where $H_m(a,b)=\operatorname{rec}_F(b)(a^{1/m})/a^{1/m}$ is the local Hilbert symbol. The identity also holds for $m=1$, when both sides are trivial. This is a local off-diagonal comparison, not a diagonal-spin or global-distribution theorem.

## Statement references

[[lem-smith-unramified-kummer-frobenius-residue-symbol]]

[[lem-tame-local-hilbert-symbol-residue-formula]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Definition 3.21](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, the local field, integer, elements, Kummer cocycle and Frobenius lift in the Statement.

[F1] A local unit has unramified Kummer class, and its Frobenius value raised to $e/m$ is the unique $m$th root of unity reducing to the unit residue raised to $(q-1)/m$. [[lem-smith-unramified-kummer-frobenius-residue-symbol]]

[F2] If $m$ is prime to the residue characteristic and $u$ is a unit, then $H_m(u,b)$ is the residue $m$th-power character of $u$ raised to $v(b)$, while $H_m(a,b)H_m(b,a)=1$. [[lem-tame-local-hilbert-symbol-residue-formula]]

## Proof

1.1 Since $v(\beta)$ is divisible by $e$, choose a uniformizer $\pi$ and write $\beta=\pi^{ek}u$ with $u$ a unit. The Kummer classes of $\beta$ and $u$ agree, and an $e$th power is also an $m$th power, so their Hilbert symbols with $\alpha$ agree. By [F1], the Kummer class is unramified, its value in coinvariants is independent of the arithmetic Frobenius lift, and the $e/m$ power equals the residue $m$th-power character $\rho_m(u)$. [F1, given, choose, algebra]

2.1 The residue field contains $\mu_m$ because $m\mid q-1$, and its roots lift to $F$ since $m$ is prime to the residue characteristic. By [F2] and $v(\alpha)\equiv1\pmod m$, $$H_m(u,\alpha)=\rho_m(u)^{v(\alpha)}=\rho_m(u),\qquad H_m(\alpha,u)^{-1}=H_m(u,\alpha).$$ Combine this with step 1.1. When $m=1$, every group and symbol in the formula is trivial. [F2, step 1.1, given, algebra] ∎
