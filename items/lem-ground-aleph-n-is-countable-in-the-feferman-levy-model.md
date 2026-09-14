---
id: lem-ground-aleph-n-is-countable-in-the-feferman-levy-model
kind: lemma
title: Every finite ground aleph is countable in the Feferman–Levy model
status: draft
origin: pipeline
deps: [def-feferman-levy-symmetric-collapse-system, thm-collapse-and-levy-collapse-effects, lem-forcing-monotonicity-density-and-decision]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Thomas Jech, The Axiom of Choice, Lemma 10.9, printed p. 144", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Statement

For every $n<\omega$, the ground-model ordinal $\aleph_n^V$ is countable in
the Feferman–Levy model $N$.

## Facts & Assumptions

**Given:** The Feferman–Levy system, its generic $G$, and one fixed
$n<\omega$.

[F1] [[def-feferman-levy-symmetric-collapse-system]] presents layer $n$ as
finite partial functions from $\omega$ to $\aleph_n^V$ and says that
$H_{n+1}$ fixes that layer pointwise.

[F2] [[thm-collapse-and-levy-collapse-effects]] proves that the generic union
of this collapse is a surjection $\omega\twoheadrightarrow\aleph_n^V$.

[F3] [[lem-forcing-monotonicity-density-and-decision]] supplies the dense-set
reading of totality and surjectivity.

## Proof

**Proof technique:** direct construction from the generic union.

1.1 Define $f_n(i)=\alpha$ exactly when some $p\in G$ contains the triple $(n,i,\alpha)$. Functionality follows because two conditions in the filter are compatible and conditions are functional at $(n,i)$. For each $i<\omega$, conditions assigning a value at $(n,i)$ are dense; for each $\alpha<\aleph_n^V$, conditions putting $\alpha$ at some fresh $(n,i)$ are dense. Therefore genericity, equivalently F2 and F3, makes $f_n:\omega\twoheadrightarrow\aleph_n^V$. [F2, F3, construct]

2.1 The canonical name for $f_n$ uses only Boolean values from layer $n$. Every member of $H_{n+1}$ fixes all layers below $n+1$, hence fixes this name and its canonical ordinal subnames by F1. It is hereditarily symmetric, so $f_n\in N$. [F1, step 1.1]

3.1 The ordinal $\aleph_n^V$ is nonempty. In ZF a surjection $f:\omega\twoheadrightarrow A$ onto a nonempty set gives an injection $A\to\omega$ by sending $a$ to the least $i$ with $f(i)=a$; hence $A$ is at most countable. Applying this inside $N$ to $f_n$ proves the claim. The construction is for one specified $n$ and does not assert that the sequence $\langle f_n:n<\omega\rangle$ belongs to $N$. [step 1.1, step 2.1] ∎
