---
id: lem-johnston-nickel-sk1-elementary-vanishing
kind: lemma
title: $SK_1$ vanishing on the elementary subgroups used by Johnston–Nickel
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-elementary-one-dimensional-p-adic-lie-groups
  - lem-finite-by-zp-profinite-group-splits
  - def-iwasawa-algebra-of-profinite-group
  - def-algebraic-k0-and-k1-of-a-ring
  - def-noncommutative-maximal-fitting-invariant
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Henri Johnston and Andreas Nickel, An Unconditional Proof of the Abelian Equivariant Iwasawa Main Conjecture and Applications
      url: https://arxiv.org/pdf/2010.03186
      locator: Lemma 11.1 and Corollary 11.3 proof, printed p. 28; Theorem 10.1 and Corollary 10.2, printed pp. 25–27.
verification: {}
---

## Statement

Let $p$ be odd and let $G$ be an admissible one-dimensional $p$-adic Lie group with an abelian Sylow pro-$p$ subgroup. For every open $\mathbb Q_p$-p-elementary subgroup $H$ of $G$, the reduced norm $\operatorname{nr}_H:K_1(Q(H))\to\zeta(Q(H))^\times$ is injective, so $SK_1(Q(H))=0$.

## Theorem references

[Johnston and Nickel, Corollary 11.3 and proof](https://arxiv.org/pdf/2010.03186)

## Proof status

For this lemma's $\mathbb Q_p$-$p$-elementary subgroups, the source uses Lemma 11.1 to write $H=C_n\rtimes U$, with $p\nmid n$ and $U$ pro-$p$. The abelian Sylow hypothesis makes $U$ abelian, so $H'\le C_n$ and $p\nmid |H'|$. Corollary 10.2 then supplies the reduced-norm isomorphism. Lau's theorem enters Proposition 11.2 for elementary primes different from $p$, not this Corollary 11.3 argument. The group-theoretic reduction has a separate uninstalled draft in `research/number-theory-all-141-2026-10-25-targeted-followup/batch-124/`; the required prime-to-$p$ commutator reduced-norm theorem still lacks a local proof. This lemma remains an unresolved prerequisite, not an accepted supplier.
