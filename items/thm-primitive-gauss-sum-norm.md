---
id: thm-primitive-gauss-sum-norm
kind: theorem
title: "Norm of a primitive Gauss sum"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-gauss-sum-dirichlet-character, lem-primitive-gauss-sum-twist]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, Lemma 16.4"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

For a primitive character $\chi$ modulo $q$, $|\tau(\chi)|^2=q$.

## Facts & Assumptions

**Given:** A primitive character $\chi$ modulo $q$.

[F1] The primitive twist identity holds for every integer ([[lem-primitive-gauss-sum-twist]]).

## Proof

**Proof technique:** direct.

1.1 By the definition of the Gauss sum, $$\overline{\tau(\chi)}=\sum_{a\bmod q}\overline{\chi(a)}e(-a/q).$$ Multiplying by $\tau(\chi)$ and using [F1] with $m=a$ gives $$|\tau(\chi)|^2=\sum_{a\bmod q}\sum_{b\bmod q}\chi(b)e(ab/q)e(-a/q).$$ [F1, given, algebra]

2.1 The inner sum over $a$ is $q$ when $b\equiv1\pmod q$ and $0$ otherwise. Thus only $b=1$ remains, and the expression in step 1.1 is $q\chi(1)=q$. [step 1.1, algebra] ∎
