---
id: thm-sard-smale-residual-regular-values-for-fredholm-maps
kind: theorem
title: "Sard--Smale residual regular values for Fredholm maps"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-axiom-of-choice, def-fredholm-maps-and-regular-values-on-countable-banach-manifolds, def-nowhere-dense-meagre-and-residual-subsets, lem-fredholm-maps-have-countable-proper-local-restrictions, lem-critical-images-of-proper-local-fredholm-restrictions-are-nowhere-dense]
proof_strategy: direct
sources:
  references:
    - title: "Stephen Smale, An Infinite Dimensional Version of Sard's Theorem, Theorem (1.3)"
      url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let
$P:\mathcal X\to\mathcal Y$ be a $C^h$ Fredholm map of fixed index $m$ between
Hausdorff second-countable real Banach manifolds, in the sense of
[[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]]. If $h$
is a positive integer or $\infty$ and $h>\max\{m,0\}$, its regular values form
a residual subset of $\mathcal Y$. A value is regular when every point of its
fibre has surjective derivative, including vacuously when the fibre is empty.

## Facts & Assumptions

**Given:** The Axiom of Choice and such a $C^h$ Fredholm map $P$ with
$h>\max\{m,0\}$.

[F1] Fredholmness and regular values have the conventions in
[[def-fredholm-maps-and-regular-values-on-countable-banach-manifolds]].

[F2] The source is covered by countably many sets closed relative to
normal-form neighbourhoods, whose restrictions of $P$ are proper into
target charts ([[lem-fredholm-maps-have-countable-proper-local-restrictions]]).

[F3] The critical image on each such proper local restriction is closed
relative to its target chart and nowhere dense in $\mathcal Y$ at the
displayed differentiability threshold
([[lem-critical-images-of-proper-local-fredholm-restrictions-are-nowhere-dense]]).

[F4] A set is residual when its complement is meagre
([[def-nowhere-dense-meagre-and-residual-subsets]]).

## Proof

**Proof technique:** direct.

1.1 Let $\operatorname{Crit}(P)$ be the set where $DP$ is not surjective. By [F2], choose sets $(C_j)_{j\in J}$, with $J\subseteq\mathbb N$, whose interiors cover $\mathcal X$, such that each $C_j$ is closed relative to a normal-form neighbourhood $W_j$ and $P|_{C_j}:C_j\to V_j$ is proper into a target chart $V_j$. In particular $\mathcal X=\bigcup_{j\in J}C_j$. For empty $\mathcal X$ take $J=\varnothing$. [F1, F2, given]

2.1 Put $B_j=P(C_j\cap\operatorname{Crit}(P))$. The fixed-index and differentiability hypotheses of [F3] hold, so each $B_j$ is closed relative to $V_j$ and nowhere dense in $\mathcal Y$. Global closedness is unnecessary for meagreness. [F3, step 1.1, given]

3.1 A value is nonregular exactly when it is the image of a critical point. Every critical point belongs to some $C_j$, and every point of $B_j$ is a critical value. Hence the nonregular values are exactly $\bigcup_jB_j$, a meagre subset of $\mathcal Y$. [F1, step 1.1, step 2.1, algebra]

4.1 By [F4], the complement of that meagre set is residual, and by step 3.1 it is precisely the set of regular values. This also covers $\mathcal X=\varnothing$ and values outside $P(\mathcal X)$, whose fibres are empty and hence regular. [F1, F4, step 3.1] ∎
