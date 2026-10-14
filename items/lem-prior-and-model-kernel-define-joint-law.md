---
id: lem-prior-and-model-kernel-define-joint-law
kind: lemma
title: A prior and model kernel define a joint law
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-sections-of-product-measurable-functions-are-measurable
  - thm-measurability-of-integration-against-a-kernel
  - def-probability-measure
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §§5.1 and 5.3.1, PDF pp. 100–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§4–5, PDF pp. 7–13"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Statement

Let $(\Theta,\mathcal T)$ and $(\mathcal X,\mathcal A)$ be measurable spaces,
let $\pi$ be a probability measure on $(\Theta,\mathcal T)$, and let
$K:\Theta\times\mathcal A\to[0,1]$ be a probability kernel. For
$C\in\mathcal T\otimes\mathcal A$, write
$C_\theta=\{x\in\mathcal X:(\theta,x)\in C\}$ and set
$$J(C)=\int_\Theta K(\theta,C_\theta)\,\pi(d\theta).$$
Then $J$ is a probability measure on the product sigma-algebra, and for every
nonnegative product-measurable $h$,
$$\int_{\Theta\times\mathcal X}h(\theta,x)\,J(d\theta,dx)=\int_\Theta\left(\int_\mathcal Xh(\theta,x)\,K(\theta,dx)\right)\pi(d\theta).$$
In particular, $J(A\times B)=\int_AK(\theta,B)\,\pi(d\theta)$ for
$A\in\mathcal T$ and $B\in\mathcal A$.

## Facts & Assumptions

**Given:** The measurable spaces, prior, and probability kernel in the statement.

[F1] The parameter-measurable model is a probability kernel, so every section is a probability and every event evaluation is measurable ([[def-parameter-measurable-statistical-model-as-markov-kernel]]).

[F2] Sections of a product-measurable set are measurable ([[thm-sections-of-product-measurable-functions-are-measurable]]).

[F3] Integrating a nonnegative product-measurable function against a kernel gives a measurable function ([[thm-measurability-of-integration-against-a-kernel]]).

[F4] Nonnegative functions admit increasing simple approximations and increasing limits pass through integrals ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-monotone-convergence-for-the-integral]]).

[F5] A probability measure has total mass one and is countably additive ([[def-probability-measure]]).

[F6] The nonnegative integral is additive on finite sums and homogeneous under nonnegative scalars ([[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** direct.

1.1 For each $C\in\mathcal T\otimes\mathcal A$, [F2] makes $C_\theta$ measurable and [F3], applied to $1_C$, makes $\theta\mapsto K(\theta,C_\theta)$ measurable. Thus $J(C)$ is defined. The empty set has $J$-mass zero, while $(\Theta\times\mathcal X)_\theta=\mathcal X$ and [F1], [F5] give $J(\Theta\times\mathcal X)=1$. [F1, F2, F3, F5]

2.1 If $(C_n)_{n\geq0}$ are pairwise disjoint product-measurable sets, their sections are pairwise disjoint. Countable additivity of each $K(\theta,\cdot)$ gives $K(\theta,(\bigcup_n C_n)_\theta)=\lim_N\sum_{n=0}^N K(\theta,(C_n)_\theta)$. The partial sums increase; [F4] passes this limit through the $\pi$-integral and yields $J(\bigcup_nC_n)=\sum_nJ(C_n)$. Therefore $J$ is a probability measure. [F1, F4, F5, step 1.1]

3.1 For a rectangle $A\times B$, its section is $B$ on $A$ and empty off $A$, so the definition gives $J(A\times B)=\int_AK(\theta,B)\,\pi(d\theta)$. For a nonnegative simple function $h=\sum_{i=1}^m c_i1_{C_i}$ with disjoint measurable sets and $c_i\geq0$, the set formula for $J$ and [F6] give the displayed iterated-integral identity by finite addition and homogeneity. [F1, F3, F6, step 1.1, step 2.1]

4.1 For general nonnegative product-measurable $h$, take the increasing simple approximants of [F4]. Apply monotone convergence first under $J$, then sectionwise under each $K(\theta,\cdot)$, and finally under $\pi$. The identity for the simple functions from step 3.1 passes to the limit, including when either side is $+\infty$. [F2, F3, F4, step 3.1] ∎
