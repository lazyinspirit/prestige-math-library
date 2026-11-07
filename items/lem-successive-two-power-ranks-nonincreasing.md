---
id: lem-successive-two-power-ranks-nonincreasing
kind: lemma
title: "Successive 2-power ranks are nonincreasing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-successive-2-power-ranks-of-quadratic-class-groups, thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of 2^k-Class Groups of Imaginary Quadratic Fields, §1.2"
      url: "https://people.math.harvard.edu/~adsmith/Clas.pdf"
      locator: "§1.2, decomposition of the 2-primary class group"
verification: {}
---

## Statement

For every positive integer $d$ and every $k\ge2$, the ranks defined above satisfy $r_{2^{k+1}}(d)\le r_{2^k}(d)$.

## Statement references

[[def-successive-2-power-ranks-of-quadratic-class-groups]]

[[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

## Facts & Assumptions

**Given:** $d>0$, $K_d=\mathbb Q(\sqrt{-d})$, and the finite abelian group $A_d=\operatorname{Cl}(K_d)[2^\infty]$.

[F1] The finite abelian group $A_d$ is a direct product of cyclic groups of orders $2^{e_i}$, with uniquely determined exponents $e_i\ge1$. [[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]

[F2] The rank $r_{2^k}(d)$ is the dimension of $2^{k-1}A_d[2^k]$ over $\mathbb F_2$. [[def-successive-2-power-ranks-of-quadratic-class-groups]]

## Proof
1.1 On a cyclic factor $C_{2^{e_i}}$, the subgroup $2^{k-1}C_{2^{e_i}}[2^k]$ is zero when $e_i<k$ and has order $2$ when $e_i\ge k$. Hence its dimension is $1$ exactly for factors with $e_i\ge k$. [F1, F2, algebra]

2.1 Therefore $r_{2^k}(d)=\#\{i:e_i\ge k\}$. The set of indices with $e_i\ge k+1$ is contained in the set with $e_i\ge k$, so $r_{2^{k+1}}(d)\le r_{2^k}(d)$. [step 1.1, algebra] ∎
