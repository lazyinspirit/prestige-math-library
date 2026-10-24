---
id: ex-ma-model-null-meagre-additivity-equals-continuum
kind: example
title: In the MA model the additivity of null and meagre equals the continuum
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-omega-two-iteration-forces-ma-and-not-ch, thm-ma-small-unions-of-null-sets, thm-ma-small-unions-of-meagre-sets, def-null-and-meagre-cardinal-invariants, lem-basic-ideal-cardinal-inequalities, def-aleph-and-beth-hierarchies, def-cardinal-arithmetic, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszynski, Invariants of Measure and Category, Section 4 (MA and the additivity of the ideals), printed pp.8-9"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $\mathbb P_{\omega_2}$ be the $\omega_2$-length finite-support bookkeeping
iteration over a ground model of ZFC+GCH and let $G$ be generic for it
([[thm-omega-two-iteration-forces-ma-and-not-ch]]). In the resulting model
Martin's Axiom holds and $\mathfrak c=2^{\aleph_0}=\aleph_2$, and there the
additivities of the two ideals of [[def-null-and-meagre-cardinal-invariants]]
are both equal to the continuum:

$$\operatorname{add}(\mathcal N)=\aleph_2=\operatorname{add}(\mathcal M).$$

## Facts & Assumptions

**Given:** The $\omega_2$-length bookkeeping iteration over a ZFC+GCH ground model, with generic $G$, and the resulting model of ZFC, in which the Axiom of Choice holds.

[F1] Over a ZFC+GCH ground model the $\omega_2$ bookkeeping iteration is ccc and forces MA together with $2^{\aleph_0}=\aleph_2$, hence not CH. ([[thm-omega-two-iteration-forces-ma-and-not-ch]])

[F2] In ZFC+MA the union of fewer than $2^{\aleph_0}$ Lebesgue-null subsets of the real line is null; in particular every set of reals of cardinality below the continuum is null. ([[thm-ma-small-unions-of-null-sets]])

[F3] In ZFC+MA the union of fewer than $2^{\aleph_0}$ meagre subsets of the real line is meagre; in particular every set of reals of cardinality below the continuum is meagre. ([[thm-ma-small-unions-of-meagre-sets]])

[F4] $\operatorname{add}(\mathcal I)$ for $\mathcal I=\mathcal N,\mathcal M$ is the least cardinality of a subfamily of $\mathcal I$ whose union is not in $\mathcal I$, the minimum being attained, and $\operatorname{add}(\mathcal I)\le\operatorname{cof}(\mathcal I)\le\mathfrak c=2^{\aleph_0}$. ([[def-null-and-meagre-cardinal-invariants]], [[lem-basic-ideal-cardinal-inequalities]])

[F5] $\aleph_2$ is a cardinal and $\aleph_2=2^{\aleph_0}$ in the model of [F1]; cardinalities are cardinals under the Axiom of Choice. ([[def-aleph-and-beth-hierarchies]], [[def-cardinal-arithmetic]], [[def-axiom-of-choice]])

## Proof

**Proof technique:** direct.

1.1 In the model of the given iteration, MA holds and $\mathfrak c=2^{\aleph_0}=\aleph_2$ by [F1]; in particular the continuum is the cardinal $\aleph_2>0$, so the phrase "fewer than $2^{\aleph_0}$" in [F2] and [F3] means "of cardinality below $\aleph_2$". [given, F1, F5]

2.1 $\operatorname{add}(\mathcal N)\le\aleph_2$ and $\operatorname{add}(\mathcal M)\le\aleph_2$: by [F4] the additivity is at most the continuum, which is $\aleph_2$ by step 1.1. [step 1.1, F4]

2.2 $\operatorname{add}(\mathcal N)\ge\aleph_2$: let $\mathcal A\subseteq\mathcal N$ with $\lvert\mathcal A\rvert<\aleph_2$; by step 1.1 the family has fewer than $2^{\aleph_0}$ members, so [F2] makes $\bigcup\mathcal A$ null, that is, $\bigcup\mathcal A\in\mathcal N$. Hence no subfamily of $\mathcal N$ of size below $\aleph_2$ witnesses the additivity, and the minimum clause of [F4] gives $\operatorname{add}(\mathcal N)\ge\aleph_2$. [step 1.1, F2, F4]

2.3 $\operatorname{add}(\mathcal M)\ge\aleph_2$: the same argument with [F3] in place of [F2] gives that every subfamily of $\mathcal M$ of size below $\aleph_2$ has its union in $\mathcal M$, hence $\operatorname{add}(\mathcal M)\ge\aleph_2$ by the minimum clause of [F4]. [step 1.1, F3, F4]

3.1 Combining step 2.1 with steps 2.2 and 2.3 gives $\operatorname{add}(\mathcal N)=\aleph_2=\operatorname{add}(\mathcal M)$, and $\aleph_2=\mathfrak c$ by step 1.1; the Axiom of Choice is used in the iteration and in reading the cardinalities of [F4] as cardinals. ∎ [step 1.1, step 2.1, step 2.2, step 2.3, F5]
