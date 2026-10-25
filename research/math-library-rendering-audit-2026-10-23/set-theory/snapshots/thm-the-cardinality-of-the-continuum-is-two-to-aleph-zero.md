---
id: thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero
kind: theorem
title: "The continuum is equinumerous with the power set of the naturals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cantor-set-ternary-description, thm-reals-ordered-field, cor-cauchy-reals-lub-complete, thm-of-archimedean, lem-of-q-dense, thm-rationals-countable, lem-cardinal-operations-are-well-defined, thm-schroder-bernstein, thm-cardinal-power-set-and-cantor, thm-well-ordering-theorem, lem-cardinality-of-a-well-orderable-set, def-aleph-and-beth-hierarchies, def-axiom-of-choice]
proof_strategy: two-injections
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references: []
---

## Statement

In ZF, without any choice principle, there are bijections
$$\mathbb R\approx{}^{\omega}2\approx\mathcal P(\mathbb N),$$
where $\mathbb N=\omega$ and $2=\{0,1\}$. Assuming the Axiom of Choice,
these bijections give the cardinal equality
$$|\mathbb R|=2^{\aleph_0}=|\mathcal P(\mathbb N)|.$$

## Facts & Assumptions

**Given:** The reals and naturals under the library's ZF conventions. Choice is assumed only for the cardinal-equality clause.

[L1] Binary sequences are in bijection with the Cantor set $C\subseteq\mathbb R$ ([[thm-cantor-set-ternary-description]]).

[L2] The reals are a complete ordered field ([[thm-reals-ordered-field]], [[cor-cauchy-reals-lub-complete]]), hence Archimedean ([[thm-of-archimedean]]). Therefore a rational lies strictly between any two distinct reals ([[lem-of-q-dense]]), and $\mathbb Q\approx\mathbb N$ without Choice ([[thm-rationals-countable]]).

[L3] A bijection $A\approx B$ induces a bijection $\mathcal P(A)\approx\mathcal P(B)$ ([[lem-cardinal-operations-are-well-defined]]). Opposite injections between two sets give a bijection ([[thm-schroder-bernstein]]).

[L4] Under Choice, every set is well-orderable and has an initial-ordinal cardinality; equinumerous sets have equal cardinalities ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]], [[lem-cardinality-of-a-well-orderable-set]]). Also $\aleph_0=\omega$ ([[def-aleph-and-beth-hierarchies]]) and $2^{|A|}=|\mathcal P(A)|$ ([[thm-cardinal-power-set-and-cantor]]).

## Proof

**Proof technique:** two-injections.

1.1 The inclusion $C\hookrightarrow\mathbb R$ composed with [L1] gives an injection ${}^{\omega}2\hookrightarrow\mathbb R$. This construction uses no choice. [L1]

1.2 For each real $x$, put $D_x=\{q\in\mathbb Q:q<x\}$. If $x<y$, choose a rational $q$ with $x<q<y$ by [L2]. Then $q\in D_y\setminus D_x$, so $x\mapsto D_x$ injects $\mathbb R$ into $\mathcal P(\mathbb Q)$. A fixed bijection $\mathbb Q\approx\mathbb N$ and [L3] give an injection $\mathbb R\hookrightarrow\mathcal P(\mathbb N)$. No family of choices is made: only the existence of one separating rational is used to prove injectivity. [L2, L3]

2.1 Sending $S\subseteq\mathbb N$ to its characteristic function $\mathbf1_S:\omega\to2$ is a bijection $\mathcal P(\mathbb N)\approx{}^{\omega}2$, with inverse $b\mapsto b^{-1}(\{1\})$. Combine it with steps 1.1 and 1.2. There are injections in both directions between $\mathbb R$ and ${}^{\omega}2$, so Schröder–Bernstein [L3] gives $\mathbb R\approx{}^{\omega}2\approx\mathcal P(\mathbb N)$ in ZF. [L3, step 1.1, step 1.2]

3.1 Now assume Choice. By [L4], the equinumerous sets in step 2.1 have equal cardinalities, while $|\mathbb N|=\aleph_0$ and $|\mathcal P(\mathbb N)|=2^{|\mathbb N|}$. Hence $|\mathbb R|=2^{\aleph_0}=|\mathcal P(\mathbb N)|$. [L4, step 2.1] ∎

## Source notes

The proof is adapted from the published Foundations B example on continuum cardinality, using its Cantor-set and rational-cut injections. Its listed external references were not independently read for this draft; the mathematical argument above is checked against the exact published supplier statements.
