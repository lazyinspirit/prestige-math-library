---
id: def-bayes-and-minimax-risk
kind: definition
title: Bayes risk and minimax risk
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-loss-function-and-risk
  - def-measurable-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - def-extended-reals
  - def-borel-sigma-algebra-on-the-extended-real-line
  - lem-extended-reals-complete
  - def-randomized-procedure-as-a-markov-kernel
  - def-parameter-measurable-statistical-model-as-markov-kernel
  - thm-measurability-of-integration-against-a-kernel
  - def-probability-measure
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §§5.3.1–5.3.2, PDF pp. 104–110"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §5, PDF pp. 11–12"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Definition

Let $(\Theta,\mathcal T)$ and $(\mathcal X,\mathcal A)$ be measurable
parameter and data spaces, with $\Theta$ nonempty, and let
$K:\Theta\times\mathcal A\to[0,1]$ be a probability kernel, writing
$P_\theta=K(\theta,\cdot)$ for the sampling law
([[def-parameter-measurable-statistical-model-as-markov-kernel]]). Let
$(\mathsf D,\mathcal G)$ be a nonempty measurable action space
([[def-measurable-space]]). Let $L:\Theta\times\mathsf D\to\overline{\mathbb R}$
be measurable from the product measurable space with sigma-algebra
$\mathcal T\otimes\mathcal G$ to the extended real line with its Borel
sigma-algebra, and assume $L(\theta,a)\geq0$ for all $(\theta,a)$
([[def-product-sigma-algebra-and-finite-product-sigma-algebras]],
[[def-measurable-function-between-measurable-spaces]], [[def-extended-reals]],
[[def-borel-sigma-algebra-on-the-extended-real-line]]). A **prior** $\pi$ is a
probability measure on $\Theta$. The risk function $\theta\mapsto R(\theta,\delta)$ is measurable
under these hypotheses by kernel integration
([[def-parameter-measurable-statistical-model-as-markov-kernel]],
[[thm-measurability-of-integration-against-a-kernel]]). The **Bayes risk** of
$\delta$ under $\pi$ is
$$r_\pi(\delta)=\int_\Theta R(\theta,\delta)\,\pi(d\theta)\in[0,+\infty].$$
Its **worst-case risk** is
$$R^*(\delta)=\sup_{\theta\in\Theta}R(\theta,\delta)\in[0,+\infty],$$
and the **minimax value** is
$$V_{\rm mm}=\inf\{R^*(\delta):\delta\text{ is a measurable randomized rule from data to actions}\}\in[0,+\infty].$$
These suprema and infima are taken in the extended order on $\overline{\mathbb R}$
([[def-extended-reals]]); they exist by
[[lem-extended-reals-complete]]. The parameter set is nonempty and the rule
class is nonempty under the action-space hypothesis, so these are suprema and
infima of nonempty sets of nonnegative extended risks.
A rule is minimax if its worst-case risk equals this infimum. These definitions
make no assertion that a minimizer exists. Nonemptiness of $\mathsf D$ ensures
the rule class is nonempty: fixing any $a_0\in\mathsf D$ gives the constant
point-mass rule $x\mapsto\delta_{a_0}$.
