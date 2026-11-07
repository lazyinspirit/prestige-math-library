---
dependency_level: 0
id: lem-finite-residue-covering-from-probability-marginals
kind: lemma
title: Finite residue covers from probability marginals
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-probability-vector
- lem-finite-probability-basic-laws
- thm-derivative-of-exponential
- def-integers-modulo-n
- thm-standard-representatives-modulo-n
- thm-exponential-addition-formula
- thm-ftc-second-part
- cor-exponential-is-a-bijection-onto-positive-reals
justified_by: []
proof_strategy: direct
axiom_use: ZF finite sums, explicit finite products and an existential positive-weight
  outcome; no choice principle.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: James Maynard, Large gaps between primes (2016), §3; finite local reconstruction
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v183-n3-p03-p.pdf
    locator: Printed pp.918–919, finite independent-cover argument, with explicit
      exceptions and empty boundaries.
verification: {}
---

## Statement

Let $Q$ be a finite set of integers, let $B\subseteq Q$, let $r\ge0$ be an integer, and let $p_1,\ldots,p_r\ge2$ be integers. For every $i$, let $\mu_i$ be a probability vector on the standard residue representatives $\{0,\ldots,p_i-1\}$. Let $t\ge0$ and suppose that
$$\sum_{i=1}^r\mu_i(q\bmod p_i)\ge t\qquad(q\in Q\setminus B).$$
Then there are representatives $0\le a_i<p_i$ such that at most
$$|B|+e^{-t}(|Q|-|B|)$$
elements of $Q$ avoid every selected congruence $q\equiv a_i\pmod{p_i}$. The statement includes empty $Q$, an empty modulus list and zero probability coordinates. No choice axiom is assumed.

## Statement references

[[def-finite-probability-vector]]

[[lem-finite-probability-basic-laws]]

[[thm-derivative-of-exponential]]

[[def-integers-modulo-n]]

[[thm-standard-representatives-modulo-n]]

[[thm-exponential-addition-formula]]

[[thm-ftc-second-part]]

[[cor-exponential-is-a-bijection-onto-positive-reals]]

## Facts & Assumptions

**Given:** Exactly the finite sets, moduli, probability vectors and threshold in the Statement.

[F1] A finite probability vector has nonnegative coordinates summing to one; finite probability is the sum of its outcome weights. [[def-finite-probability-vector]] [[lem-finite-probability-basic-laws]]

[F2] Modulo a positive integer, every integer has a unique representative in the standard range. [[def-integers-modulo-n]] [[thm-standard-representatives-modulo-n]]

[F3] The exponential is positive, differentiates to itself and satisfies the addition law; the fundamental theorem evaluates integrals of continuous derivatives. [[thm-derivative-of-exponential]] [[thm-exponential-addition-formula]] [[cor-exponential-is-a-bijection-onto-positive-reals]] [[thm-ftc-second-part]]

## Proof

**Given:** The stated finite data.

1.1 For $0\le s\le1$, differentiate $h(s)=(1-s)e^s$ to get $h'(s)=-s e^s$. Thus $h(s)=1-\int_0^s u e^u\,du\le1$ by [F3], with the $s=0$ case immediate. Multiplying by $e^{-s}>0$ gives $1-s\le e^{-s}$. The addition law then gives $\prod_i(1-s_i)\le\exp(-\sum_i s_i)$ for any finite list in $[0,1]$. [F3, given, algebra]

1.2 Put $\Omega=\prod_{i=1}^r\{0,\ldots,p_i-1\}$ and give a tuple $a$ weight $w(a)=\prod_i\mu_i(a_i)$. Finite distributivity gives $\sum_{a\in\Omega}w(a)=\prod_i\sum_{a_i}\mu_i(a_i)=1$, and all weights are nonnegative. For $r=0$, the product is the singleton empty tuple of weight one. For a fixed $q\in Q$, [F2] gives its residue in each coordinate, so the total weight of tuples not covering $q$ is exactly $\prod_i(1-\mu_i(q\bmod p_i))$. [F1, F2, given, construct, algebra]

2.1 Let $U(a)$ count the elements uncovered by $a$. Interchanging only finite sums gives $\sum_a w(a)U(a)=\sum_{q\in Q}\prod_i(1-\mu_i(q\bmod p_i))$. Each exceptional $q\in B$ costs at most one. For every other $q$, step 1.1 and the assumed marginal bound give cost at most $e^{-t}$. Hence this weighted average is at most the displayed bound. [F1, step 1.1, step 1.2, given, algebra]

3.1 A finite weighted average with total mass one cannot be strictly below all its positive-weight values. Therefore some tuple of positive weight has $U(a)$ no greater than the bound in step 2.1. This is an existential finite-sum argument and requires no ordering of an arbitrary finite set or choice axiom. It proves the Statement, including $Q=\varnothing$, $B=Q$, $t=0$ and the empty product. [F1, step 1.2, step 2.1, algebra] ∎

