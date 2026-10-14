---
id: lem-statistic-induces-deterministic-procedure
kind: lemma
title: "A statistic induces a deterministic probability kernel"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistic-and-estimator
  - def-randomized-procedure-as-a-markov-kernel
  - def-measure-kernel-and-probability-kernel
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-measurable-function-between-measurable-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
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

Let $T:(\mathcal X,\mathcal A)\to(\mathsf D,\mathcal G)$ be a measurable
statistic, where $\mathcal G$ is a sigma-algebra on the action set
([[def-statistic-and-estimator]]). Then
$$K_T(x,B):=\delta_{T(x)}(B)=\mathbf 1_B(T(x)),\qquad x\in\mathcal X,\ B\in\mathcal G,$$
is a probability kernel and therefore a deterministic randomized procedure.

## Facts & Assumptions

**Given:** A measurable statistic $T$ from the data measurable space to the action measurable space.

[F1] A statistic is a measurable map; hence $T^{-1}(B)\in\mathcal A$ for every $B\in\mathcal G$. ([[def-statistic-and-estimator]])

[F2] For each point $d\in\mathsf D$, the Dirac set function $\delta_d$ is a probability measure on $(\mathsf D,\mathcal G)$. ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]])

[F3] A probability kernel has probability-measure sections and measurable event evaluations. ([[def-measure-kernel-and-probability-kernel]])

## Proof

**Proof technique:** direct.

1.1 For each $x\in\mathcal X$, the section $B\mapsto K_T(x,B)=\delta_{T(x)}(B)$ is the probability measure $\delta_{T(x)}$ by [F2]. [given, F2]

2.1 For each $B\in\mathcal G$, $x\mapsto K_T(x,B)=\mathbf 1_B(T(x))=\mathbf 1_{T^{-1}(B)}(x)$ is $\mathcal A$-measurable by [F1]. Thus both clauses of the kernel definition [F3] hold, so $K_T$ is a probability kernel, hence a deterministic randomized procedure. [F1, F3, step 1.1] ∎
