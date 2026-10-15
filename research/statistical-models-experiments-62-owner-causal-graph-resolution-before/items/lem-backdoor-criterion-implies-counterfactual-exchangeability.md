---
id: lem-backdoor-criterion-implies-counterfactual-exchangeability
kind: lemma
title: "The backdoor criterion implies conditional exchangeability"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-recursive-structural-causal-model-and-dag
  - lem-recursive-scm-topological-kernel-factorization
  - def-d-separation-in-a-dag
  - thm-dag-factorization-implies-d-separation-conditional-independence
  - def-conditional-expectation-given-a-sigma-algebra
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
  - thm-dynkin-pi-lambda
  - thm-monotone-convergence-for-the-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
proof_strategy: direct
axiom_use: "Assume AC as required by the conditional-expectation and conditional-independence interfaces. The finite response-copy construction uses no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §3-1, pp. 674–675"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, §7.2 and Technical Point 7.1, pp. 87–88"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC and a finite Markovian recursive SCM on $G$. Let $T,W$ be disjoint
vertex sets and let $C$ be a set of nondescendants of $T$. Define the
response-family sigma-algebra
$$\mathcal R_W^T:=\sigma\{X_w^t:w\in W,\ t\in\prod_{v\in T}S_v\}.$$
If $C$ d-separates $T$ and $W$ in $G_{\underline T}$, then
$$\sigma(X_T)\perp\!\!\!\perp\mathcal R_W^T\mid\sigma(X_C).$$
For each fixed intervention value $t$, this implies
$X_W^t\perp\!\!\!\perp X_T\mid\sigma(X_C)$. No treatment-positivity
condition is needed.

## Facts & Assumptions

**Given:** The SCM, disjoint $T,W,C$, the nondescendant condition, and d-separation in $G_{\underline T}$.

[F1] A Markovian recursive SCM factors over its topological kernels, also
after any supplied intervention.
[[def-recursive-structural-causal-model-and-dag]],
[[lem-recursive-scm-topological-kernel-factorization]]

[F2] D-separation implies conditional independence for every finite
DAG-kernel factorization. [[thm-dag-factorization-implies-d-separation-conditional-independence]]

[F3] Conditional expectation is specified by testing integrals over the
conditioning sigma-algebra, and conditional independence is the associated
conditional-product identity.
[[def-conditional-expectation-given-a-sigma-algebra]],
[[def-conditional-independence-given-a-sigma-algebra]], [[def-axiom-of-choice]]

[F4] Dynkin's theorem extends an identity from a generating pi-system to
its generated sigma-algebra; increasing nonnegative integrals pass to the
limit. [[thm-dynkin-pi-lambda]],
[[thm-monotone-convergence-for-the-integral]],
[[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]

## Proof
**Proof technique:** apply the global Markov implication to finite response-copy graphs, then extend from cylinder events.

**Given:** The hypotheses in the statement.

1.1 Fix a finite set $F\subseteq\prod_{v\in T}S_v$. For each $t\in F$, copy the descendants needed to compute $X_W^t$; retain each nondescendant as its common factual node and replace arrows from $T$ into a response copy by the supplied constants $t$. Regard each exogenous coordinate as a root variable with its given law and attach it to the equation copies where it is used. These roots have their product law by mutual independence, and the resulting finite acyclic graph has a topological kernel factorization [F1]. The variables in $C$ are unchanged. [given, F1, construct]

2.1 Every path from factual $T$ to a response copy of $W$ projects, after identifying copied nondescendants, to a path from $T$ to $W$ in $G_{\underline T}$; no outgoing arrow from factual $T$ enters a response copy because those inputs have been replaced by constants. Conversely, any path in $G_{\underline T}$ that reaches a copied descendant is represented in the response graph with that descendant's response label. Therefore d-separation by $C$ is preserved in this finite graph. Apply [F2] to obtain conditional independence of $X_T$ and the finite response vector $(X_w^t)_{w\in W,t\in F}$ given $X_C$. [given, step 1.1, F2, construct]

3.1 Fix a bounded nonnegative measurable $f(X_T)$. The events depending on finitely many response coordinates form a pi-system generating $\mathcal R_W^T$. By step 2.1 the conditional-product identity holds for their indicators. The class of response events for which it holds is a lambda-system: complements subtract the identity for the whole space, and disjoint countable unions follow by choosing conditional-expectation versions for the disjoint pieces, summing them, and testing the increasing partial sums over each event in $\sigma(X_C)$; ordinary monotone convergence shows that the limit is a version for the union. Dynkin's theorem [F4] therefore gives the identity for every event in $\mathcal R_W^T$. Increasing simple approximation and monotone convergence [F4] extend it to every bounded nonnegative $\mathcal R_W^T$-measurable function. Decomposing bounded real functions into positive and negative parts gives the identity for all bounded functions, which is conditional independence by [F3]. [step 2.1, F3, F4, given, algebra] ∎
