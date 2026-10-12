---
id: thm-feferman-levy-reals-are-a-countable-union-of-countable-sets
kind: theorem
title: The Feferman–Levy reals are a countable union of countable sets
status: published
origin: pipeline
landmark: true
deps: [lem-feferman-levy-bounded-layer-support, def-feferman-levy-real-layers, lem-each-feferman-levy-real-layer-is-countable, thm-hereditarily-symmetric-interpretations-form-a-zf-model]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, Theorem 10.6, printed pp. 142–144", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

In the Feferman–Levy model $N$,

$$\mathbb R^N=\bigcup_{m<\omega}R_m,$$

and every $R_m$ is countable. Thus the set of all reals is a countable union
of countable sets.

## Facts & Assumptions

**Given:** The Feferman–Levy symmetric interpretation $N$.

[F1] [[lem-feferman-levy-bounded-layer-support]] gives every real in $N$ a Boolean name supported by one $H_m$.

[F2] [[def-feferman-levy-real-layers]] puts the sequence $\langle R_m:m<\omega\rangle$ in $N$ and identifies $R_m$ with the reals having such an $m$-bounded name.

[F3] [[lem-each-feferman-levy-real-layer-is-countable]] proves in $N$ that each fixed $R_m$ is countable.

[F4] [[thm-hereditarily-symmetric-interpretations-form-a-zf-model]] ensures that $N$ is a transitive ZF model, so its sequence, union, and internal countability assertions have their ordinary ZF meanings.

## Proof

**Proof technique:** direct verification of both inclusions and the indexed-family property.

1.1 If $x\in\mathbb R^N$, F1 gives a Boolean real name for $x$ whose coefficients are fixed by some $H_m$; by F2 this says $x\in R_m$. Hence $\mathbb R^N\subseteq\bigcup_{m<\omega}R_m$. Conversely F2 defines each $R_m$ using names for subsets of $\omega$, so every member of every $R_m$ is a real of $N$. This proves the displayed equality. [F1, F2]

2.1 F2 supplies the sequence $m\mapsto R_m$ itself as a set of $N$, not merely each layer separately. Its domain is $\omega^N=\omega$, so its range is a countable indexed family in the exact ZF sense, including possible repeated layers. By F4, Union applied in $N$ gives the set on the right of step 1.1. [F2, F4, step 1.1]

3.1 F3 gives $N\models$ “$R_m$ is countable” for every $m<\omega$. Combining this pointwise statement with the sequence from step 2.1 proves that $\mathbb R^N$ is a countable union of countable sets. No function choosing an enumeration of every $R_m$ is asserted; forming such a simultaneous family would be the invalid Choice step that the theorem deliberately avoids. [F3, step 2.1] ∎
