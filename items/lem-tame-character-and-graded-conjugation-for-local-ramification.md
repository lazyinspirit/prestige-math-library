---
dependency_level: 6
id: lem-tame-character-and-graded-conjugation-for-local-ramification
kind: lemma
title: "Tame character and graded conjugation in total local ramification"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-choice-free-finite-local-extension-isometry-degree-and-digits
  - def-lower-ramification-groups-of-a-local-galois-extension
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
justified_by: []
proof_strategy: direct
axiom_use: "ZF; all valuation-topology facts are supplied by the specialized choice-free local helpers; no CC ramification theorem is invoked."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition, Chapter I \u00a75 and Chapter III \u00a7\u00a71\u20134"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
verification: {}
---

## Statement

Let $L/K$ be a finite totally ramified Galois extension of finite-residue nonarchimedean local fields, let $G=\operatorname{Gal}(L/K)$, let $\ell=\operatorname{char}(k_L)$, and fix a uniformizer $\varpi$ of $L$. For the lower ramification groups $G_i$, the map $\chi:G\to k_L^\times$, $\chi(\sigma)=\overline{\sigma(\varpi)/\varpi}$, is a homomorphism with kernel $G_1$. For $i\ge1$, the map $\theta_i:G_i\to(k_L,+)$, $\theta_i(\tau)=\overline{(\tau\varpi-\varpi)/\varpi^{i+1}}$, is a homomorphism with kernel $G_{i+1}$ and satisfies $\theta_i(\sigma\tau\sigma^{-1})=\chi(\sigma)^i\theta_i(\tau)$. The group $G_1$ is an $\ell$-group, and $G/G_1$ is cyclic of order $r$ prime to $\ell$. If $G$ is abelian and $G_i\ne G_{i+1}$ with $i\ge1$, then $r\mid i$. These assertions are choice-free.

## Statement references

[[lem-choice-free-finite-local-extension-isometry-degree-and-digits]]

[[def-lower-ramification-groups-of-a-local-galois-extension]]

[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

## Facts & Assumptions

**Given:** The data in the Statement.

[F1] Automorphisms preserve valuation, $L=K(\varpi)$, and every element has a deterministic convergent expansion in powers of $\varpi$ with a fixed finite residue representative set in $K$. [[lem-choice-free-finite-local-extension-isometry-degree-and-digits]]

[F2] The literal lower-group condition is $v_L(\sigma x-x)\ge i+1$ for every $x\in\mathcal O_L$. We use this definition, not a choice-conditional termination proof. [[def-lower-ramification-groups-of-a-local-galois-extension]]

[F3] The multiplicative group of a finite field is cyclic. [[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

## Proof

**Given:** The data and conventions above.

1.1 Every automorphism fixes residue classes, because $k_L=k_K$. Hence reduction of $\sigma(\tau\varpi)/\varpi$ proves $\chi(\sigma\tau)=\chi(\sigma)\chi(\tau)$. For $i\ge0$, the condition in [F2] is equivalent to $v_L(\sigma\varpi-\varpi)\ge i+1$. The forward implication takes $x=\varpi$. For the reverse, expand $x\in\mathcal O_L$ using [F1] with coefficients fixed by $\sigma$; the term of degree $j\ge1$ has displacement divisible by $\sigma\varpi-\varpi$ and of valuation at least $i+j$, hence at least $i+1$. Limits preserve this bound. Thus $\ker\chi=G_1$. Each $G_i$ is a subgroup by the isometry in [F1]. The groups eventually become trivial: for each of the finitely many nonidentity $\sigma$, the displacement of $\varpi$ is nonzero because $L=K(\varpi)$, and its valuation is finite. [F1, F2, given, algebra]

2.1 For $\sigma\in G_1$, $\sigma$ acts trivially on every integer-valued associated graded piece: for $x=u\varpi^j$, the leading residue of $\sigma x/x$ is $\chi(\sigma)^j=1$, also when $j<0$. If $\sigma,\tau\in G_i$, $i\ge1$, use $\sigma\tau\varpi-\varpi=\sigma(\tau\varpi-\varpi)+(\sigma\varpi-\varpi)$ and this trivial action to obtain $\theta_i(\sigma\tau)=\theta_i(\sigma)+\theta_i(\tau)$. Its kernel is exactly $G_{i+1}$ by step 1.1. Its image is an additive subgroup of the finite field, so has $\ell$-power order. Multiplying these orders down the finite terminating filtration proves that $G_1$ is an $\ell$-group. The quotient embeds by $\chi$ into $k_L^\times$, which is cyclic of order prime to $\ell$ by [F3]. [F1, F2, F3, step 1.1, algebra]

3.1 Let $\tau\in G_i$, $i\ge1$, and write $\delta=\tau\varpi-\varpi$. Expand $\sigma^{-1}\varpi=a_1\varpi+a_2\varpi^2+\cdots$ with the fixed coefficients in $K$ from [F1]. Here $a_1$ is a unit and $\overline{a_1}=\chi(\sigma)^{-1}$. For $j\ge2$, $(\varpi+\delta)^j-\varpi^j$ has valuation at least $i+j\ge i+2$; consequently $\tau(\sigma^{-1}\varpi)-\sigma^{-1}\varpi\equiv a_1\delta\pmod{\mathfrak m_L^{i+2}}$. Apply $\sigma$, use its isometry, and divide by $\varpi^{i+1}$. Since $\sigma$ fixes residue coefficients and $\sigma\varpi/\varpi$ has residue $\chi(\sigma)$, the result is $\theta_i(\sigma\tau\sigma^{-1})=\chi(\sigma)^{-1}\chi(\sigma)^{i+1}\theta_i(\tau)=\chi(\sigma)^i\theta_i(\tau)$. [F1, step 1.1, step 2.1, algebra]

4.1 If $G$ is abelian and $G_i/G_{i+1}\ne1$, take $\tau$ with $\theta_i(\tau)\ne0$. Conjugation is trivial, so step 3.1 gives $\chi(\sigma)^i=1$ for every $\sigma\in G$. The cyclic image of $\chi$ has order $r$, so $r\mid i$. The assertions include trivial $G$, for which $r=1$ and there are no nontrivial jumps. [F3, step 2.1, step 3.1, algebra] ∎ 