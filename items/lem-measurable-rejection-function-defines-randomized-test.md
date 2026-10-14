---
id: lem-measurable-rejection-function-defines-randomized-test
kind: lemma
title: "Every measurable rejection function defines a randomized test"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistical-experiment
  - def-measurable-function-between-measurable-spaces
  - def-measure-kernel-and-probability-kernel
  - def-randomized-procedure-as-a-markov-kernel
  - def-randomized-test
  - def-sigma-algebra
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.1, PDF pp. 100–102"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§2–4.2, PDF pp. 2–8"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Statement

Let $\mathsf E=((X,\mathcal A),\Theta,(P_\theta)_{\theta\in\Theta})$ be a
statistical experiment ([[def-statistical-experiment]]) and let
$\varphi:X\to[0,1]$ be measurable, where $[0,1]$ has its Borel sigma-algebra.
On the binary action space $\{0,1\}$ with its full sigma-algebra, define
$$K(x,B)=\varphi(x)\mathbf 1_B(1)+(1-\varphi(x))\mathbf 1_B(0)\qquad (B\subseteq\{0,1\}).$$
Then $K$ is a probability kernel and hence a randomized procedure; its
randomized-test function under the convention $1=\mathrm{reject}$ is
$\varphi$.

## Facts & Assumptions

**Given:** A statistical experiment $\mathsf E$ and a measurable function
$\varphi:X\to[0,1]$ on its data space.

[F0] [[def-statistical-experiment]]: an experiment supplies a data measurable space and its parameter-indexed probability laws.

[F1] [[def-measurable-function-between-measurable-spaces]]: measurability means the preimage of every Borel subset of $[0,1]$ belongs to $\mathcal A$.

[F2] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: sums and real scalar multiples of measurable real functions are measurable.

[F3] [[def-measure-kernel-and-probability-kernel]]: a probability kernel has probability-measure sections and measurable event evaluations.

[F4] [[def-sigma-algebra]]: the full collection of subsets of $\{0,1\}$ is a sigma-algebra.

[F5] [[def-randomized-procedure-as-a-markov-kernel]]: for the supplied experiment, a probability kernel from the data space to the action space is a randomized procedure.

[F6] [[def-randomized-test]]: a binary randomized procedure has test function $x\mapsto K(x,\{1\})$.

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$. The two weights $\varphi(x)$ and $1-\varphi(x)$ are nonnegative and sum to one. Thus $K(x,\varnothing)=0$ and $K(x,\{0,1\})=1$. If $(B_j)_{j\ge0}$ are pairwise disjoint subsets of $\{0,1\}$, each action belongs to at most one $B_j$, so $\mathbf 1_{\cup_jB_j}(a)=\sum_j\mathbf 1_{B_j}(a)$ for $a=0,1$. Substitution into the formula for $K$ gives $K(x,\cup_jB_j)=\sum_jK(x,B_j)$; hence $K(x,\cdot)$ is a probability measure on the binary action sigma-algebra. [given, F0, F3, F4, algebra]

2.1 For the four action events, the evaluation functions are $K(x,\varnothing)=0$, $K(x,\{0\})=1-\varphi(x)$, $K(x,\{1\})=\varphi(x)$, and $K(x,\{0,1\})=1$. They are measurable by [F1] and [F2]. Therefore [F3] makes $K$ a probability kernel; [F5] makes it a randomized procedure, and [F6] identifies its test function as $K(x,\{1\})=\varphi(x)$. [F1, F2, F3, F5, F6, step 1.1] ∎