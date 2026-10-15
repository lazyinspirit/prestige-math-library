---
id: lem-recursive-scm-topological-kernel-factorization
kind: lemma
title: "A Markovian recursive SCM has a topological kernel factorization"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-recursive-structural-causal-model-and-dag
  - def-measure-kernel-and-probability-kernel
  - thm-measurability-of-integration-against-a-kernel
  - def-composition-of-probability-kernels
  - lem-kernel-composition-is-well-defined-and-associative
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
proof_strategy: direct
axiom_use: "No choice axiom is used. The exogenous family is finite; its product law, the structural kernels and their finite composition are supplied by the stated choice-free suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §2-2, pp. 672–674"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Technical Points 6.1–6.3, pp. 72–74"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
---

## Statement

Let a finite Markovian recursive SCM be as in
[[def-recursive-structural-causal-model-and-dag]], with topological order
$v_1,\ldots,v_n$. For each $v$, let $\nu_v$ be the law of $U_v$ and define
$$K_v(x_{\operatorname{pa}(v)},B) :=\nu_v\{u:f_v(x_{\operatorname{pa}(v)},u)\in B\},\qquad B\in\mathcal S_v.$$
Then $K_v$ is a probability kernel from the parent-coordinate product to
$(S_v,\mathcal S_v)$, and the full-joint law is the iterated topological
composition
$$\mu(dx_{v_1},\ldots,dx_{v_n}) :=K_{v_1}(dx_{v_1})\prod_{r=2}^n K_{v_r}(x_{\operatorname{pa}(v_r)},dx_{v_r}).$$
For an intervention $do(X_I=a)$ the same formula holds with the factor
$K_v$ replaced by the point mass $\delta_{a_v}$ for each $v\in I$; all other
factors are unchanged. Marginalizing latent coordinates means taking the
pushforward to $\prod_{v\in O}S_v$ and does not in general produce a
factorization on the observed-only induced graph.

## Facts & Assumptions

**Given:** The Markovian recursive SCM and its finite topological ordering.

[F1] Independent finite families of random elements have the finite product
joint law. [[thm-independent-random-elements-have-product-joint-law]]

[F2] Integration of a nonnegative product-measurable function against a
probability kernel is measurable. [[thm-measurability-of-integration-against-a-kernel]]

[F3] Composition of specified probability kernels is a probability kernel
and finite composition is associative.
[[def-composition-of-probability-kernels]], [[lem-kernel-composition-is-well-defined-and-associative]]

[F4] Fubini's theorem permits iterated integration for integrable functions
on finite product probability spaces.
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

## Proof
**Proof technique:** construct each structural kernel and identify successive conditional laws by product integration.

**Given:** The hypotheses in the statement.

1.1 For fixed parent values $x_{\operatorname{pa}(v)}$, the map $u\mapsto f_v(x_{\operatorname{pa}(v)},u)$ is measurable, so its pushforward of $\nu_v$ is a probability measure. For each measurable $B\subseteq S_v$, $K_v(x,B)$ is the integral of the jointly measurable indicator $1_B(f_v(x,u))$ against the constant probability kernel $x\mapsto\nu_v$; [F2] makes this evaluation measurable in $x$. Hence $K_v$ is a probability kernel, including when the parent set is empty. [given, F2]

1.2 By [F1], the joint law of the finite exogenous vector is $\bigotimes_{r=1}^n\nu_{v_r}$. Fix a bounded measurable function $g$ of $X_{v_1},\ldots,X_{v_{r-1}}$ and a measurable set $B\subseteq S_{v_r}$. The recursive construction makes the earlier coordinates functions only of $U_{v_1},\ldots,U_{v_{r-1}}$. Applying Fubini to the bounded indicator integrand and integrating first in $u_{v_r}$ gives $E[g\,1_{\{X_{v_r}\in B\}}] =E[g\,K_{v_r}(X_{\operatorname{pa}(v_r)},B)].$ Thus the conditional law of $X_{v_r}$ given the preceding endogenous vector is the stated kernel; its parent coordinates are among that vector by the topological order. [F1, F4, algebra]

2.1 Starting with $v_1$, whose parent set is empty, apply step 1.2 successively for $r=2,\ldots,n$. At each stage the joint law of the first $r$ endogenous coordinates is the composition of the previous joint law with $K_{v_r}$. Associativity and normalization in [F3] make this a probability kernel at each finite stage. Induction therefore gives exactly the displayed topological product for the full vector. [step 1.1, step 1.2, F3, construct]

3.1 Under $do(X_I=a)$, the coordinates in $I$ are constants and their conditional kernels are $\delta_{a_v}$; every other equation still uses the same independent exogenous coordinate and the same parent values, with an intervened parent replaced by its fixed constant. Repeating step 1.2 with these kernels proves the interventional product. The observed law is the pushforward under coordinate projection; integrating out the latent coordinates is marginalization and creates no asserted observed-only DAG factorization. [given, step 1.2, F3, construct] ∎
