---
id: lem-frobenius-classes-with-bounded-poles-are-finite
kind: lemma
title: Frobenius classes with a bounded-pole representative are finite
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-riemann-roch-space-of-divisor
  - thm-full-riemann-roch-divisor
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves, Riemann–Roch"
      url: "https://stacks.math.columbia.edu/tag/0B5B"
      locator: "Section 53.5, finite-dimensional spaces of sections and Riemann–Roch; the Frobenius intersection and cardinality are derived below."
---

## Statement

Assume AC. Let $C$ be a smooth proper geometrically integral curve over a finite field $k$ with $q$ elements and characteristic $p>0$, and let $K=k(C)$. Let $D=\sum_v n_v[v]$ be any divisor on $C$ and put $E=\sum_v\lfloor n_v/p\rfloor[v]$. Write $L(D)=\{0\}\cup\{f\in K^\times:\operatorname{div}(f)+D\ge0\}$ and $l(D)=\dim_k L(D)$. Then
$$L(D)\cap K^p=L(E)^p,$$
and the image of $L(D)$ in the additive quotient $K/K^p$ has exactly
$$q^{l(D)-l(E)}$$
elements. Consequently, for any finite sequence of divisors $D_1,\ldots,D_r$, any set admitting an injection into $\prod_i K/K^p$ whose $i$th coordinate has a representative in $L(D_i)$ is finite, with cardinal at most $\prod_i q^{l(D_i)-l(E_i)}$. The empty product has one element. No local-condition or Selmer inclusion is asserted.

## Statement references

[[def-riemann-roch-space-of-divisor]]

[[thm-full-riemann-roch-divisor]]

## Facts & Assumptions

**Given:** AC, the finite field, curve and divisors in the Statement; in the last assertion an injection with the displayed bounded-representative property is supplied.

[F1] The Riemann–Roch space $L(D)$ is the indicated $k$-subspace of $K$ and has finite dimension $l(D)$. [[def-riemann-roch-space-of-divisor]] [[thm-full-riemann-roch-divisor]]

## Proof

1.1 The finite field $k$ is perfect: its Frobenius map is injective and hence bijective. For $0\ne h\in K$, the valuation of $h^p$ at every closed point is $p$ times the valuation of $h$. Therefore $h^p\in L(D)$ precisely when $v(h)\ge\lceil-n_v/p\rceil=-\lfloor n_v/p\rfloor$ for every $v$, equivalently $h\in L(E)$. Including zero gives $L(D)\cap K^p=L(E)^p$. [F1, given, algebra]

2.1 By [F1], $L(D)$ and $L(E)$ are finite-dimensional $k$-vector spaces, with respective cardinalities $q^{l(D)}$ and $q^{l(E)}$. Frobenius is an injective additive map on $K$ and maps $L(E)$ bijectively onto $L(D)\cap K^p$ by step 1.1. The additive quotient map $L(D)\to K/K^p$ has this intersection as kernel, so its image has cardinality $q^{l(D)}/q^{l(E)}=q^{l(D)-l(E)}$. [F1, step 1.1, algebra]

3.1 For finitely many divisors, the bounded-representative condition places the supplied injection's image in the product of the finite sets computed in step 2.1. Its domain is therefore finite and has at most the displayed product cardinality. The case $r=0$ has singleton target and is included. No assertion is made that an actual Selmer group has such an injection or such representatives. [step 2.1, given, algebra] ∎

## Remarks

For characteristic-dividing Selmer finiteness, a separate argument must construct an injective or finite-fibre reduction of the relevant local conditions to finitely many bounded-pole Frobenius classes. The finite-étale unramified-torsor lemma does not supply that argument, and no such reduction follows merely from finite flatness.
