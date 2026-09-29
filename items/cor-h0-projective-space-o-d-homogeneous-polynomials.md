---
id: cor-h0-projective-space-o-d-homogeneous-polynomials
kind: corollary
title: "Global sections of projective twists"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-commutative-ring
  - def-graded-ring-and-graded-module
  - def-relative-projective-space-standard-charts
  - def-twisting-sheaf-proj
  - thm-cohomology-projective-space-twisting-sheaves
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.8.2 (Tag 01XV)"
      url: "https://stacks.math.columbia.edu/tag/01XV"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Section 19.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice as inherited from the cited theorem
([[def-axiom-of-choice]]). Let $A$ be a commutative ring with $1$
([[def-commutative-ring]]), let $n\ge0$ and $d\in\mathbb Z$, and let
$\mathcal O_X(d)$ be the twisting sheaf on $X=\mathbb P^n_A$
([[def-relative-projective-space-standard-charts]], [[def-twisting-sheaf-proj]]).
Then for $n>0$,
$$H^0(X,\mathcal O_X(d))\cong A[x_0,\dots,x_n]_d\ \ (d\ge0),\qquad H^0(X,\mathcal O_X(d))=0\ \ (d<0),$$
where $A[x_0,\dots,x_n]_d$ is the degree-$d$ graded piece of the polynomial
ring ([[def-graded-ring-and-graded-module]]), and for $n=0$,
$$H^0(\mathbb P^0_A,\mathcal O(d))\cong A\qquad\text{for every }d\in\mathbb Z.$$
The zero ring $A=0$ is allowed, in which case $X=\varnothing$ and both sides are
zero.

## Facts & Assumptions

**Given:** The Axiom of Choice as inherited, a commutative ring $A$ with $1$, integers $n\ge0$ and $d$, and the twisting sheaf $\mathcal O(d)$ on $\mathbb P^n_A$.

[F1] Cohomology of twists on projective space: for every commutative ring $A$,
every $n\ge0$ and every $d\in\mathbb Z$, $H^q(\mathbb P^n_A,\mathcal O(d))=0$
unless $q=0$ or $q=n$; if $n>0$ then
$H^0(\mathbb P^n_A,\mathcal O(d))\cong A[x_0,\dots,x_n]_d$ for $d\ge0$ and
$H^0(\mathbb P^n_A,\mathcal O(d))=0$ for $d<0$; and for $n=0$,
$\mathbb P^0_A=\operatorname{Spec}A$ with
$H^0(\mathbb P^0_A,\mathcal O(d))\cong A$ for every $d$ and all higher groups
zero, with $A=0$ allowed.
([[thm-cohomology-projective-space-twisting-sheaves]])

## Proof

**Proof technique:** direct: read the degree-zero part off the full computation of the cohomology of twists.

1.1 Apply [F1] to $A$, $n$ and $d$. In degree $q=0$ it states exactly the three assertions: for $n>0$ the group $H^0(\mathbb P^n_A,\mathcal O(d))$ is $A[x_0,\dots,x_n]_d$ when $d\ge0$ and $0$ when $d<0$, while for $n=0$ it is $A$ for every $d$; in the case $A=0$ the theorem records that $\mathbb P^n_A=\varnothing$ and all groups vanish, matching $A[x_0,\dots,x_n]_d=0$. [F1]

2.1 Boundaries and choice accounting. The case $d=0$ is included and gives $H^0\cong A$ for $n\ge0$: for $n>0$ the degree-zero piece $A[x_0,\dots,x_n]_0$ consists of the constant polynomials, and for $n=0$ the theorem gives $A$ directly. The case $n=0$ is not deduced from the $n>0$ formula, which would give $A$ only for $d\ge0$, but taken from the theorem's separate clause for every sign of $d$. The Axiom of Choice is inherited from [F1] and nothing further is selected. [F1] ∎
