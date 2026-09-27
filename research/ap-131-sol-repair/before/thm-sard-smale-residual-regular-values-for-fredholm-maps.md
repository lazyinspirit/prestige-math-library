---
id: thm-sard-smale-residual-regular-values-for-fredholm-maps
kind: theorem
title: "Sard--Smale residual regular values for Fredholm maps"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-axiom-of-choice, def-fredholm-maps-and-regular-values-on-countable-banach-manifolds, def-nowhere-dense-meagre-and-residual-subsets, rem-fredholm-maps-have-countable-proper-local-restrictions, rem-critical-images-of-proper-local-fredholm-restrictions-are-nowhere-dense]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
  audited: 2026-09-07
sources:
  references:
    - title: "Stephen Smale, An Infinite Dimensional Version of Sard's Theorem, Theorem (1.3)"
      url: "https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf"
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

[F2] Externally, the source is covered by countably many closed subsets on
which $P$ is proper and which lie in Fredholm normal-form neighbourhoods
([[rem-fredholm-maps-have-countable-proper-local-restrictions]]).

[F3] Externally, the critical image on each such proper local restriction is
closed and nowhere dense at the displayed differentiability threshold
([[rem-critical-images-of-proper-local-fredholm-restrictions-are-nowhere-dense]]).

[F4] A set is residual when its complement is meagre
([[def-nowhere-dense-meagre-and-residual-subsets]]).

## Proof

**proof uses external results not yet established in this library**

**Proof technique:** direct.

1.1 Let $\operatorname{Crit}(P)$ be the set where $DP$ is not surjective. By [F2], choose closed sets $(C_j)_{j\in J}$, with $J\subseteq\mathbb N$, whose interiors cover $\mathcal X$, such that each $C_j$ lies in a normal-form neighbourhood and $P|_{C_j}$ is proper. In particular $\mathcal X=\bigcup_{j\in J}C_j$. For empty $\mathcal X$ take $J=\varnothing$. [F1, F2, given]

2.1 Put $B_j=P(C_j\cap\operatorname{Crit}(P))$. The fixed-index and differentiability hypotheses of [F3] hold, so each $B_j$ is closed and nowhere dense in $\mathcal Y$. [F3, step 1.1, given]

3.1 A value is nonregular exactly when it is the image of a critical point. Every critical point belongs to some $C_j$, and every point of $B_j$ is a critical value. Hence the nonregular values are exactly $\bigcup_jB_j$, a meagre subset of $\mathcal Y$. [F1, step 1.1, step 2.1, algebra]

4.1 By [F4], the complement of that meagre set is residual, and by step 3.1 it is precisely the set of regular values. This also covers $\mathcal X=\varnothing$ and values outside $P(\mathcal X)$, whose fibres are empty and hence regular. [F1, F4, step 3.1] ∎
