---
id: ex-singular-data-support-limitation
kind: example
title: "A full-dimensional flow cannot represent a line-supported law exactly"
status: draft
dependency_level: 2
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-normalizing-flow
  - thm-change-of-variables-density-for-diffeomorphic-flow
  - def-countable-choice
  - def-measure-with-density
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-continuous-preimages-of-borel-sets-are-borel
  - prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null
  - cor-integral-over-a-null-set-vanishes
aliases: []
sources:
  references:
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference, arXiv:1912.02762v1"
      url: "https://arxiv.org/pdf/1912.02762v1"
    - title: "Dan Sheldon, COMPSCI 688: Probabilistic Graphical Models, Lecture 23: Normalizing Flows (annotated course notes)"
      url: "https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf"
---

## Example

Assume the Axiom of Countable Choice. Let $\nu$ be the probability measure on $[0,1]$ with density $1$ relative to one-dimensional Lebesgue measure, let $i:[0,1]\to\mathbb R^2$ be $i(t)=(t,0)$, and define a measure on Borel sets $B\subseteq\mathbb R^2$ by
$$\mu(B)=\nu(i^{-1}(B)).$$
This probability measure is concentrated on the line segment $M=[0,1]\times\{0\}$ and satisfies $\mu(M)=1$. It is not the output of any normalizing flow $T:\mathbb R^2\to\mathbb R^2$ whose base measure has a Lebesgue density.

## Example references

[Papamakarios et al., §§5.4–5.5, PDF pp. 35–38](https://arxiv.org/pdf/1912.02762v1)

[Sheldon, COMPSCI 688 Lecture 23, PDF pp. 2–4](https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the interval probability measure $\nu$, the continuous embedding $i(t)=(t,0)$, and its image measure $\mu$.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$, asserts that every sequence of nonempty sets has a choice function. [[def-countable-choice]]

[F1] A nonnegative measurable density $f$ defines a measure by $A\mapsto\int_A f\,d\lambda$. [[def-measure-with-density]]

[F2] A flow from a Lebesgue density through a global $C^1$ diffeomorphism has density $p_U\circ T^{-1}|\det D(T^{-1})|$. [[thm-change-of-variables-density-for-diffeomorphic-flow]]

[F3] A continuous map has Borel preimages of Borel sets. [[thm-continuous-preimages-of-borel-sets-are-borel]]

[F4] Every closed box $[a,b]$ in $\mathbb R^n$ is Borel and Lebesgue measurable; its measure is $\prod_{i<n}(b_i-a_i)$, so $[0,1]$ has one-dimensional Lebesgue measure $1$. [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F5] A rectangle with a degenerate side is Lebesgue null under Countable Choice. [[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]

[F6] A nonnegative measurable density integrates to zero over a measurable null set. [[cor-integral-over-a-null-set-vanishes]]

[F7] A normalizing flow is a finite composition of global $C^1$ diffeomorphisms between open equal-dimensional Euclidean domains; its output measure is obtained by taking preimages under the flow. [[def-normalizing-flow]]

## Verification

**Given:** Countable Choice, the image measure $\mu$ of $\nu$ under $i$, and an arbitrary normalizing flow $T:\mathbb R^2\to\mathbb R^2$ with Lebesgue base density.

1.1 The function $i$ is continuous, so [F3] makes $i^{-1}(B)$ Borel for every Borel $B\subseteq\mathbb R^2$. For pairwise disjoint Borel sets $B_n$, their preimages are pairwise disjoint and $i^{-1}(\bigcup_nB_n)=\bigcup_ni^{-1}(B_n)$; countable additivity of $\nu$ therefore makes $\mu$ a measure. By [F1] and [F4], $\nu([0,1])=\int_{[0,1]}1\,d\lambda_1=\lambda_1([0,1])=1$, whence $\mu(\mathbb R^2)=1$ and $\mu(M)=\nu([0,1])=1$. [given, A1, F1, F3, F4]

1.2 The set $M=[0,1]\times\{0\}=[0,1]\times[0,0]$ is a closed box, hence Borel by [F4]. Its second side is degenerate, so [F5] gives $\lambda_2(M)=0$. [given, A1, F4, F5]

1.3 By [F7] and [F2], the flow output has a nonnegative Lebesgue density $q$ on $\mathbb R^2$. Applying [F1] and [F6] to the null set $M$ gives $\mu_X(M)=\int_Mq\,d\lambda_2=0$. [given, A1, F1, F2, F6, F7]

2.1 The target measure satisfies $\mu(M)=1$ by step 1.1, whereas every such flow output satisfies $\mu_X(M)=0$ by step 1.3. Therefore $\mu_X\ne\mu$, so no full-dimensional flow in the stated class represents this target law exactly. [given, step 1.1, step 1.3] ∎
