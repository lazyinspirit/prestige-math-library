---
id: def-normalizing-flow
kind: definition
title: "A normalizing flow and its base density"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-c-one-map-and-local-inverse
  - def-measure-with-density
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "George Papamakarios, Eric Nalisnick, Danilo Jimenez Rezende, Shakir Mohamed, and Balaji Lakshminarayanan, Normalizing Flows for Probabilistic Modeling and Inference, arXiv:1912.02762v1"
      url: "https://arxiv.org/pdf/1912.02762v1"
    - title: "Dan Sheldon, COMPSCI 688: Probabilistic Graphical Models, Lecture 23: Normalizing Flows (annotated course notes)"
      url: "https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf"
---

## Definition

Let $d\ge1$, let $U,V\subseteq\mathbb R^d$ be nonempty open sets, and let $T:U\to V$ be a bijection such that both $T$ and $T^{-1}$ are continuously differentiable. Here $C^1$ means totally differentiable at every point with continuous derivative matrix. Such a map is a **global $C^1$ diffeomorphism**. A finite composition $T=T_K\circ\cdots\circ T_1$ of global $C^1$ diffeomorphisms between open subsets of $\mathbb R^d$ is a **normalizing flow**.

A **base density** on $U$ is a Lebesgue-measurable function $p_U:U\to[0,\infty]$ with $\int_U p_U\,d\lambda_d=1$. It defines the probability measure $\mu_U(A)=\int_Ap_U\,d\lambda_d$ for Lebesgue-measurable $A\subseteq U$. The model measure on $V$ is $\mu_X(B)=\mu_U(T^{-1}(B))$ for Borel $B\subseteq V$. When this measure has a Lebesgue density, that density is the model density.

## Definition references

[[def-c-one-map-and-local-inverse]] — Total differentiability, continuous derivative matrices, and local diffeomorphisms.

[[def-measure-with-density]] — The measure defined by integrating a nonnegative measurable density.

[Papamakarios et al., §2.1, PDF pp. 2–3](https://arxiv.org/pdf/1912.02762v1)

[Sheldon, COMPSCI 688 Lecture 23, PDF pp. 1–5](https://people.cs.umass.edu/~sheldon/teaching/cs688/lec/lec23-annotated.pdf)
