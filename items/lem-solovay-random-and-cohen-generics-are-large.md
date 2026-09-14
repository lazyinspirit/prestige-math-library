---
id: lem-solovay-random-and-cohen-generics-are-large
kind: lemma
title: Random and Cohen generics over an intermediate model are conull and comeagre
status: published
origin: pipeline
deps: [lem-solovay-collapse-localizes-countable-ordinal-data, lem-solovay-borel-code-and-regularity-absoluteness, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: countable-enumeration
verification:
  audited: 2026-09-14
sources:
  references:
    - {title: "Solovay 1970, Part III, Lemmas 1.1–1.2; Unger 2015, Claim 1", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}
---

## Statement

If an intermediate transitive $N$ has countably many reals in $V[G]$, the $N$-random reals are conull and the $N$-Cohen-generic reals are comeagre in $V[G]$.

## Facts & Assumptions

**Given:** Such an intermediate $N$.

[F1] [[lem-solovay-collapse-localizes-countable-ordinal-data]]: $\mathbb R^N$ is ambient-countable.

[F2] [[lem-solovay-borel-code-and-regularity-absoluteness]]: coded null/meagre witnesses and their countable unions are absolute.

[F3] [[def-axiom-of-choice]]: ambient AC enumerates the codes.

## Proof

1.1 Borel codes are reals, so F1 and ambient AC enumerate all $N$-coded Borel null sets as $(C_n)$. A real is not random over $N$ exactly when it belongs to one of these null sets (every random-algebra dense failure has such a coded null witness). Thus the nonrandom reals lie in $C=\bigcup_nC_n$, which is null by F2. [F1, F2, F3]

2.1 Similarly enumerate the $N$-coded closed nowhere-dense sets. A real failing Cohen genericity misses an $N$-coded dense open set, hence belongs to its closed nowhere-dense complement. Their union is meagre by F2, so its complement, the $N$-Cohen generics, is comeagre. Empty coded exceptions and a model with finitely many codes are covered by repeating codes in the enumeration. [F1, F2, F3] ∎
