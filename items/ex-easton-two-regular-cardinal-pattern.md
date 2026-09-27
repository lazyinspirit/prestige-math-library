---
id: ex-easton-two-regular-cardinal-pattern
kind: example
title: A two-coordinate Easton pattern
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-set-easton-product-realizes-regular-pattern, def-easton-function, def-easton-support-product, def-aleph-and-beth-hierarchies, thm-regularity-of-the-alephs, thm-cofinality-basics, def-cofinality, def-axiom-of-choice, def-ordered-field]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "T. Jech, Set Theory, Chapter 15 (the set-sized Easton product and its realization computation), printed pp.233-235"
      url: "https://doi.org/10.1007/978-3-662-22400-7"
verification:
  precheck: pending
---

## Statement

Work over a transitive ground model $M$ of ZFC+GCH. Let $F$ be the function of
set-sized Easton type with $\operatorname{dom}(F)=\{\aleph_0,\aleph_1\}$ and
$F(\aleph_0)=F(\aleph_1)=\aleph_3$
([[def-easton-function]], [[def-aleph-and-beth-hierarchies]]), and let $G$ be
$M$-generic for the set-sized Easton product $P(F)$
([[def-easton-support-product]]). Then $M$ and $M[G]$ have the same ordinals,
the same cofinality function and the same cardinals, and in $M[G]$ the
continuum function takes the prescribed values at both coordinates:

$$(2^{\aleph_0})^{M[G]}=\aleph_3=(2^{\aleph_1})^{M[G]}.$$

The two values coincide, so the pattern is consistent with monotonicity at the
two cardinals; no value at a singular cardinal or at a third coordinate is
asserted.

## Facts & Assumptions

**Given:** A transitive ground model $M$ of ZFC+GCH, the Easton function $F$ with domain $\{\aleph_0,\aleph_1\}$ and constant value $\aleph_3$, and an $M$-generic filter $G\subseteq P(F)$.

[F1] An Easton function has a set (or definable class) domain of infinite regular cardinals, cardinal values, is nondecreasing, and satisfies $\operatorname{cf}(F(\kappa))>\kappa$ at each domain point; a set-sized Easton function has a set domain. ([[def-easton-function]])

[F2] $\aleph_0$ is regular in ZF, and under the Axiom of Choice every successor aleph $\aleph_{\alpha+1}$ is regular; $\aleph_1=\aleph_0^{+}$ is a successor aleph, and $\operatorname{cf}(\mu)\le\mu$ for every ordinal $\mu$. ([[thm-regularity-of-the-alephs]], [[thm-cofinality-basics]], [[def-cofinality]], [[def-axiom-of-choice]])

[F3] Assume GCH, let $M$ be a transitive ground model of ZFC, let $F$ be a set-sized Easton function and let $G$ be $M$-generic for $P(F)$: then $M[G]$ has the same ordinals, cofinalities and cardinals as $M$, and $(2^{\kappa})^{M[G]}=F(\kappa)$ for every $\kappa\in\operatorname{dom}(F)$, the value $F(\kappa)$ being a cardinal of $M[G]$. ([[thm-set-easton-product-realizes-regular-pattern]], [[def-easton-support-product]])

[F4] The alephs are distinct infinite cardinals, so $\aleph_3$ is a cardinal and $\aleph_3>\aleph_1>\aleph_0$. ([[def-aleph-and-beth-hierarchies]])

## Proof

**Proof technique:** direct.

1.1 The domain $\{\aleph_0,\aleph_1\}$ is a set of infinite regular cardinals by [F2], the values $F(\aleph_0)=F(\aleph_1)=\aleph_3$ are cardinals by [F4], and $F$ is nondecreasing because its two values are equal. [F1, F2, F4]

1.2 $\operatorname{cf}(F(\kappa))>\kappa$ holds at both domain points: $\operatorname{cf}(\aleph_3)=\aleph_3$, since $\aleph_3$ is regular by [F2] and [F4], and $\aleph_3>\aleph_1>\aleph_0$ by [F4]. [F2, F4]

2.1 Steps 1.1 and 1.2 verify all four clauses of [F1], so $F$ is a set-sized Easton function; the hypothesis of [F3] is met by the given ground model $M$ of ZFC+GCH and by the $M$-generic $G$. [step 1.1, step 1.2, given, F1, F3]

3.1 Applying [F3] at the two domain points gives $(2^{\aleph_0})^{M[G]}=F(\aleph_0)=\aleph_3$ and $(2^{\aleph_1})^{M[G]}=F(\aleph_1)=\aleph_3$, while clause (a) of [F3] gives that $M[G]$ has the same ordinals, cofinalities and cardinals as $M$. [step 2.1, F3]

4.1 The Axiom of Choice is used in the regularity of $\aleph_1$ and $\aleph_3$ of steps 1.1 and 1.2 and is part of the ZFC ground model on which [F3] is stated; no value at a singular cardinal is asserted, since $F$ is only defined on $\{\aleph_0,\aleph_1\}$. The displayed equalities are exactly the statement. ∎ [step 3.1, F1, F2, F3]
