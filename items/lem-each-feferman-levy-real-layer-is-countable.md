---
id: lem-each-feferman-levy-real-layer-is-countable
kind: lemma
title: Each Feferman–Levy real layer is countable
status: published
origin: pipeline
deps: [lem-feferman-levy-real-layer-ground-cardinality-bound, lem-ground-aleph-n-is-countable-in-the-feferman-levy-model, lem-countable-iff-surjection-from-n]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, Lemmas 10.8–10.9 and conclusion of Theorem 10.6, printed p. 144", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

For every $m<\omega$, the real layer $R_m$ is countable in the
Feferman–Levy model $N$.

## Facts & Assumptions

**Given:** One fixed $m<\omega$ and the corresponding layer in $N$.

[F1] [[lem-feferman-levy-real-layer-ground-cardinality-bound]] supplies in $N$ a specified surjection $e_m:\aleph_{m+1}^V\twoheadrightarrow R_m$.

[F2] [[lem-ground-aleph-n-is-countable-in-the-feferman-levy-model]] says that $\aleph_{m+1}^V$ is countable in $N$.

[F3] [[lem-countable-iff-surjection-from-n]] says that every nonempty countable set is the range of a surjection from $\omega$, without Choice.

## Proof

**Proof technique:** direct composition of the two supplied maps.

1.1 The ordinal $\aleph_{m+1}^V$ is nonempty. By F2 and F3, fix in $N$ one surjection $f:\omega\twoheadrightarrow\aleph_{m+1}^V$, and form $g_m=e_m\circ f$. Both factors are sets of $N$, and ordinary ordered-pair Separation produces their composition. For each $x\in R_m$, its $e_m$-preimage is nonempty, so take its least ordinal member $\xi$; then the $f$-preimage of $\xi$ is a nonempty set of naturals and has a least member $k$. Thus $g_m(k)=x$, so $g_m:\omega\twoheadrightarrow R_m$. This fixes one witness for one already fixed $m$; it does not choose a family indexed by $\omega$. [F1, F2, F3, construct]

2.1 The layer is nonempty because it contains the interpretation of the constantly-zero Boolean name. Sending each $x\in R_m$ to its least $g_m$-preimage gives an injection into $\omega$, so $R_m$ is at most countable. The least-preimage clauses are definable and involve one fixed map; no choice function for the family $(R_m)_{m<\omega}$ is formed. [step 1.1] ∎
