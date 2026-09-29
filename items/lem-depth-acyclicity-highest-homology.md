---
id: lem-depth-acyclicity-highest-homology
kind: lemma
title: The highest positive homology of a depth-bounded finite complex has positive depth
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-depth-with-respect-to-an-ideal
  - thm-depth-lemma
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.102.8 (tag 00N0), acyclicity lemma"
      url: https://stacks.math.columbia.edu/tag/00N0
---

## Statement

Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a
Noetherian local ring and
$F_\bullet:0\to F_e\to F_{e-1}\to\cdots\to F_0$
a complex of finite $R$-modules with
$\operatorname{depth}_R F_j\ge j$ for every $j$.
If $i>0$ is the largest index with $H_i(F_\bullet)\ne0$,
then $\operatorname{depth}_R H_i(F_\bullet)\ge1$.
In particular a nonzero finite-length module cannot be
the highest positive homology of such a complex.

## Facts & Assumptions

**Given:** The local ring, finite complex, depth bounds, and largest positive homology index.

[F1] For a short exact sequence $0\to A\to B\to C\to0$ of finite modules over a Noetherian local ring, the depth lemma gives $\operatorname{depth}C\ge \min(\operatorname{depth}A-1,\operatorname{depth}B)$ and $\operatorname{depth}A\ge \min(\operatorname{depth}B,\operatorname{depth}C+1)$ ([[thm-depth-lemma]]).

[F2] The zero module has infinite depth. Every nonzero finite-length module has depth zero, since its maximal ideal has a nonzero annihilated element ([[def-depth-with-respect-to-an-ideal]]).

## Proof

**Proof technique:** move downward through the exact top of the complex using the depth lemma, then compare boundaries, cycles, and homology at index $i$.

1.1 Write $B_j=\operatorname{im}(F_{j+1}\to F_j)$ and $Z_j=\ker(F_j\to F_{j-1})$, with $B_e=0$. All are finite because $R$ is Noetherian. Since $i$ is the highest nonexact positive index, $Z_j=B_j$ for every $j>i$. The exact top provides short sequences $0\to B_j\to F_j\to B_{j-1}\to0$ for $j=e,e-1,\ldots,i+1$, where $B_e=0$. [F1]

2.1 If $i=e$, then $B_i=B_e=0$ has infinite depth, so $\operatorname{depth}B_i\ge i+1$ directly. Suppose $i<e$. The top sequence of step 1.1 gives $B_{e-1}\cong F_e$, of depth at least $e$. Descend along the remaining sequences: if $\operatorname{depth}B_j\ge j+1$, [F1] applied to $0\to B_j\to F_j\to B_{j-1}\to0$ gives $\operatorname{depth}B_{j-1}\ge \min(j,\operatorname{depth}F_j)\ge j$. Thus also in this case $\operatorname{depth}B_i\ge i+1$. [F1, F2, step 1.1]

3.1 The exact sequence $0\to Z_i\to F_i\to B_{i-1}\to0$ and [F1] give $\operatorname{depth}Z_i\ge \min(\operatorname{depth}F_i, \operatorname{depth}B_{i-1}+1)\ge1$, since $i>0$ and every finite module has nonnegative depth (with infinite depth for zero). The sequence $0\to B_i\to Z_i\to H_i\to0$ and [F1], together with step 2.1, give $\operatorname{depth}H_i\ge \min(\operatorname{depth}B_i-1, \operatorname{depth}Z_i)\ge1$. [F1, F2, step 2.1]

4.1 A nonzero finite-length module has depth zero by [F2], so it cannot equal $H_i$. AC enters through the published depth lemma; no further infinite choice is needed. [F1, F2, step 3.1] ∎
