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
  - lem-finite-products-of-probability-kernels
  - def-measure-kernel-and-probability-kernel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-measurability-of-integration-against-a-kernel
  - def-composition-of-probability-kernels
  - lem-kernel-composition-is-well-defined-and-associative
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let a finite Markovian recursive SCM be as in
[[def-recursive-structural-causal-model-and-dag]], with topological order
$v_1,\ldots,v_n$. For each $v$, let $\nu_v$ be the law of $U_v$ and define
$$K_v(x_{\operatorname{pa}(v)},B) :=\nu_v\{u:f_v(x_{\operatorname{pa}(v)},u)\in B\},\qquad B\in\mathcal S_v.$$
Then $K_v$ is a probability kernel from the parent-coordinate product to
$(S_v,\mathcal S_v)$. If $n=0$, the full-joint law (and the only possible
interventional law) is the point mass on the empty-product singleton. For
$n\ge1$, the full-joint law is the iterated topological composition
$$\mu(dx_{v_1},\ldots,dx_{v_n}) :=K_{v_1}(dx_{v_1})\prod_{r=2}^n K_{v_r}(x_{\operatorname{pa}(v_r)},dx_{v_r}).$$
For $n\ge1$ and an intervention $do(X_I=a)$, the same formula holds with the factor
$K_v$ replaced by the point mass $\delta_{a_v}$ for each $v\in I$; all other
factors are unchanged. Marginalizing latent coordinates means taking the
pushforward to $\prod_{v\in O}S_v$ and does not in general produce a
factorization on the observed-only induced graph.

## Facts & Assumptions

**Given:** The Markovian recursive SCM and its finite topological ordering.

[F1] Independent finite families with at least one member have the finite
product joint law. [[thm-independent-random-elements-have-product-joint-law]]

[F2] Integration of a nonnegative product-measurable function against a
probability kernel is measurable. [[thm-measurability-of-integration-against-a-kernel]]

[F3] Composition of specified probability kernels is a probability kernel
and finite composition is associative.
[[def-composition-of-probability-kernels]], [[lem-kernel-composition-is-well-defined-and-associative]]

[F4] Fubini's theorem permits iterated integration for integrable functions
on finite product probability spaces.
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F5] Finite products of probability kernels with a common source are
probability kernels. [[lem-finite-products-of-probability-kernels]]

[F6] Probability measures agreeing on a generating pi-system with a finite
common exhaustion agree everywhere. [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]

[F7] The finite products use the recursive product sigma-algebras and their
measurable coordinate projections.
[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

## Proof
**Proof technique:** construct each structural kernel and identify successive conditional laws by product integration.

**Given:** The hypotheses in the statement.

1.1 For fixed parent values $x_{\operatorname{pa}(v)}$, the map $u\mapsto f_v(x_{\operatorname{pa}(v)},u)$ is measurable, so its pushforward of $\nu_v$ is a probability measure. For each measurable $B\subseteq S_v$, $K_v(x,B)$ is the integral of the jointly measurable indicator $1_B(f_v(x,u))$ against the constant probability kernel $x\mapsto\nu_v$; [F2] makes this evaluation measurable in $x$. Hence $K_v$ is a probability kernel, including when the parent set is empty. [given, F2]

1.2 Suppose $n\ge1$. By [F1], the joint law of the exogenous vector is $\bigotimes_{j=1}^n\nu_{v_j}$. For $1\le r\le n$, let $X_{<r}=(X_{v_1},\ldots,X_{v_{r-1}})$, with $X_{<1}$ the constant empty tuple. Fix a bounded measurable function $g$ of $X_{<r}$ and a measurable set $B\subseteq S_{v_r}$. The recursive construction makes the earlier coordinates functions only of $U_{v_1},\ldots,U_{v_{r-1}}$. The integrand $g(X_{<r})1_{\{X_{v_r}\in B\}}$ does not depend on later exogenous coordinates, whose probability factors integrate to one. The finite product law of the first $r$ exogenous coordinates and Fubini on $(\prod_{j<r}E_{v_j})\times E_{v_r}$ therefore permit integration first in $u_{v_r}$ while fixing the earlier coordinates, giving $$E[g(X_{<r})1_{\{X_{v_r}\in B\}}]=E[g(X_{<r})K_{v_r}(X_{\operatorname{pa}(v_r)},B)].$$ For $r=1$, the earlier product is the singleton and $g$ is constant; the parent tuple is empty. For every $r$, all parent coordinates occur in $X_{<r}$ by the topological order. Thus the displayed identity gives the conditional-law testing identity needed below. [F1, F4, F7, algebra]

2.1 If $n=0$, the endogenous vector is the empty tuple and its law is the point mass on the empty-product singleton, as stated. Suppose $n\ge1$. The law $\mu_1$ of $X_{v_1}$ is $K_{v_1}$, since its parent tuple is empty and step 1.2 applies. Inductively, suppose $\mu_{r-1}$ is the law of $X_{<r}$, for some $2\le r\le n$. Let $\pi_r$ be the coordinate projection from the preceding product to the parent-coordinate product; it is measurable because preimages of measurable rectangles are coordinate cylinders in the recursive finite product sigma-algebra [F7]. Pull back $K_{v_r}$ to the probability kernel $\bar K_r(x,B)=K_{v_r}(\pi_r(x),B)$ on that same source. The identity Dirac kernel $D_r(x,C)=1_C(x)$ and $\bar K_r$ have common source. By [F5] their product is a probability kernel $\widetilde K_r$ into the preceding product times $S_{v_r}$, with rectangle values $\widetilde K_r(x,C\times B)=1_C(x)K_{v_r}(\pi_r(x),B)$. Compose it with $\mu_{r-1}$, regarded as a probability kernel from a singleton, using [F3]; this gives a probability measure $\mu_r$ satisfying $$\mu_r(C\times B)=\int_C K_{v_r}(\pi_r(x),B)\,\mu_{r-1}(dx).$$ By step 1.2, the actual law of $(X_{<r},X_{v_r})$ has these same values on every measurable rectangle. Both are probability measures, and the rectangles form a generating pi-system whose whole-space member gives a finite common exhaustion, so [F6] makes the measures equal. Induction gives the displayed iterated topological composition as the full-joint law. [step 1.1, step 1.2, F3, F5, F6, F7, construct]

3.1 Under $do(X_I=a)$ with $n\ge1$, the coordinates in $I$ are constants and their conditional kernels are $\delta_{a_v}$; every other equation still uses the same independent exogenous coordinate and the same parent values, with an intervened parent replaced by its fixed constant. At an intervened vertex the conditional-law identity is immediate because the coordinate is the fixed value $a_v$; at every other vertex the Fubini calculation of step 1.2 applies with the intervened parent coordinates fixed at their assigned values. Repeating the extension construction of step 2.1 with these kernels proves the interventional product. For $n=0$ the only intervention is empty and the law remains the point mass already described. The observed law is the pushforward under coordinate projection; integrating out the latent coordinates is marginalization and creates no asserted observed-only DAG factorization. [given, step 1.2, step 2.1, F3, F5, construct] ∎