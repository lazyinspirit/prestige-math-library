---
id: lem-standard-projective-line-height-count-lower-bound
kind: lemma
title: "A quadratic lower bound for rational points of bounded height on the projective line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - ex-projective-line-height-is-maximum-of-primitive-coordinates
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC is inherited from the absolute-height supplier; the integer count itself is
  choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §2.6.4.3"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. For every real $B\ge2$, at least $B^2/16$ distinct points $[a:b]\in\mathbb P^1(\mathbb Q)$ have standard height $H([a:b])\le B$.

## Statement references

[[ex-projective-line-height-is-maximum-of-primitive-coordinates]]

## Facts & Assumptions

**Given:** AC and a real number $B\ge2$.

[A1] AC is inherited from the absolute projective-height definition and its standard projective-line example. ([[def-axiom-of-choice]], [[ex-projective-line-height-is-maximum-of-primitive-coordinates]])

[F1] A rational point represented by coprime integer coordinates has standard height $\max\{|a|,|b|\}$, and two coprime integer pairs representing the same point differ only by a common sign. ([[ex-projective-line-height-is-maximum-of-primitive-coordinates]])

## Proof

1.1 Put $N:=\lfloor B\rfloor$. For each coprime pair of positive integers $1\le a,b\le N$, [F1] gives a rational point of height $\max(a,b)\le N\le B$. Distinct such pairs give distinct points because both coordinates are positive, so the sign ambiguity in [F1] cannot identify two different pairs. [given, A1, F1, construct]

1.2 A pair $(a,b)$ in $[1,N]^2$ that is not coprime has some common integer divisor $d$ with $2\le d\le N$. By the union bound, the number of such pairs is at most $\sum_{d=2}^N\lfloor N/d\rfloor^2\le N^2\sum_{d=2}^{\infty}d^{-2}\le3N^2/4$: for $d\ge3$, $d^{-2}\le\int_{d-1}^{d}x^{-2}\,dx$, so the tail is at most $\int_2^\infty x^{-2}\,dx=1/2$, and the $d=2$ term is $1/4$. Hence at least $N^2/4$ pairs are coprime. [given, step 1.1, algebra]

1.3 Since $B\ge2$, $N=\lfloor B\rfloor\ge B/2$. The number of distinct points from step 1.1 is therefore at least $N^2/4\ge B^2/16$, as required. [given, step 1.1, step 1.2, algebra] ∎
