---
id: lem-flat-fp-fibre-dimension-lower-semicont
kind: lemma
title: "Lower semicontinuity of flat finitely presented fibre dimension"
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-scheme-theoretic-fibre
  - lem-flat-fp-relative-dimension-strata
  - thm-flat-finite-presentation-is-open
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, More on Morphisms, Section 37.30, Lemma 37.30.5"
      url: https://stacks.math.columbia.edu/tag/05F6
---

## Statement

Assume the Axiom of Choice. Let $f:X\to S$ be flat and of finite
presentation. For $s\in S$, let $X_s$ be the scheme-theoretic fibre
([[def-scheme-theoretic-fibre]]), with $\dim\varnothing=-\infty$. Then, for
every integer $n\ge0$, the set
$$D_n=\{s\in S:\dim X_s\ge n\}$$
is open in $S$. Thus the fibre-dimension function is lower semicontinuous.


## Facts & Assumptions

**Given:** The morphism and conventions in the Statement.

[F1] Assuming AC, for a flat locally finitely presented morphism there is an
open subset $W\subseteq X$, dense in every nonempty fibre, partitioned into
pairwise disjoint open subsets $W_d$ for $d\ge0$, such that every point of
$W_d$ has local fibre dimension $d$ and
$\sup\{d:W_d\cap X_s\ne\varnothing\}=\dim X_s$ for every nonempty fibre.
The openness and dimension-supremum properties are proved in [[lem-flat-fp-relative-dimension-strata]].

[F2] A flat morphism locally of finite presentation is universally open, in
particular open ([[thm-flat-finite-presentation-is-open]]).

[F3] The fibre $X_s$ is $X\times_S\operatorname{Spec}\kappa(s)$; an empty
fibre has dimension $-\infty$ ([[def-scheme-theoretic-fibre]]).

[F4] AC states that every family of nonempty sets admits a choice function
([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to $f$; finite presentation implies local finite presentation. If $X_s\ne\varnothing$, the supremum formula of [F1] gives $$\dim X_s\ge n\quad\Longleftrightarrow\quad W_d\cap X_s\ne\varnothing\text{ for some integer }d\ge n.$$ Indeed, the dimensions appearing on the right are nonnegative integers, so a supremum at least the integer $n$ is attained at or above $n$ even if the supremum is infinite. For an empty fibre both sides are false by [F3]. [F1, F3]

2.1 A fibre meets $W_d$ exactly when its base point lies in $f(W_d)$. Consequently step 1.1 gives the exact set equality $$D_n=\bigcup_{d\ge n}f(W_d).$$ Every $W_d$ is open in $X$ by [F1], and $f$ is open by [F2], so every $f(W_d)$ is open in $S$. Their union $D_n$ is open. This proves the claim unconditionally under the hypotheses of the Statement. [F1, F2, step 1.1]

3.1 When $X=\varnothing$ the union in step 2.1 is empty for every $n$. When a fibre has dimension zero it occurs only in $D_0$; a positive or unbounded fibre dimension is handled by the integer-supremum argument of step 1.1. AC is assumed through [F1] and [F2], with no further choice in the set identity. The proof uses the forward direction of the equivalence in step 1.1 to include points in $D_n$ and the reverse direction to exclude all other points. [F1, F2, F3, F4, step 1.1, step 2.1] ∎

