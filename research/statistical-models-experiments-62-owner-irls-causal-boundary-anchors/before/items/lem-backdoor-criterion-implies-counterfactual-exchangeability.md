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
  - def-ancestral-moral-graph-of-a-dag
  - lem-d-separation-ancestral-moral-separation
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

[F5] D-separation is separator separation in the ancestral moral graph. [[def-ancestral-moral-graph-of-a-dag]], [[lem-d-separation-ancestral-moral-separation]]

## Proof

**Proof technique:** partition the ancestral moral graph of finite response copies using the original backdoor separator, then extend from cylinder events.

**Given:** The hypotheses in the statement.

1.1 Fix finitely many intervention values $F$. Build one finite graph $J$ with the factual ancestors of $T\cup C$ and, for each $t\in F$, the equation ancestors needed for $X_W^t$ after replacing every $T$-input by its constant $t$. Omit those constant treatment nodes from the response graph. Share every nondescendant of $T$ across the factual and response systems; copy every remaining nonintervened response vertex separately for each $t$. Sharing is legitimate because nondescendants have no treatment ancestor and hence their equations and values are unchanged by intervention, by topological induction. Add one root $U_v$ per used original equation, shared by all copies of that equation. Every endogenous graph vertex uses its original structural function, with constants substituted for treatment parents in the response system, so deterministic point-mass kernels together with the independent root laws give a topological kernel factorization of the joint factual/response law by [F1]. The graph is acyclic: roots come first and each endogenous copy follows its original topological rank. Restrict to ancestors in $J$ of factual $T,C$ and response $W$; this retains the same endpoint law. [given, F1, construct]

1.2 Write $G'=G_{\underline T}$ and $H=\operatorname{An}_{G'}(T\cup W\cup C)$. Every nonroot vertex retained in $J$ projects to an original vertex in $H$. For a response ancestor, its directed route to $W$ has no treatment vertex, because treatment inputs were constants. For a factual ancestor of $C$, its route has no treatment vertex by the nondescendant hypothesis. For a factual ancestor of $T$, truncate its directed route at the first treatment vertex: this has no outgoing treatment arrow. Each of these gives ancestry in $G'$. Moreover, if a factual retained vertex $v\notin T$ is a descendant of $T$, it cannot be an ancestor of $C$, so there is a directed route from $v$ to a treatment vertex, truncated at its first treatment occurrence. This route lies in $G'$ and avoids $C$, since every vertex on it is a descendant of $T$. Hence $v$ is in a connected component meeting $T$ in the moral graph on $H$ with $C$ deleted. [given, F5, step 1.1, construct]

2.1 By the backdoor hypothesis and [F5], no component of that original moral graph meets both $T$ and $W$. Assign each nonroot vertex of $J$ outside $C$ to the component of its projected original vertex. All parent-child and parent-parent moral edges of $J$ outside $C$ preserve the two sides, as follows. A response family has no treatment parent, so its projected nonroot family is a clique already present in the moral graph of $G'[H]$. A factual family without a treatment parent is likewise such a clique. If a factual family has a treatment parent, its child is a factual descendant of $T$ retained as an ancestor of $T$, hence is in a component meeting $T$ by step 1.2. Every nonconditioned nontreatment parent is joined to that child by an arrow retained in $G'$; every treatment parent is itself in a component meeting $T$. These family vertices therefore all lie on the treatment side (although the treatment components need not be the same). This exhausts skeleton edges and moral edges between nonroot vertices. [given, F5, step 1.2, construct]

2.2 Assign a root $U_v$ with $v\notin C$ to the side of its projected child $v$: all copies of $v$ have that same projection. Its moral neighbors are its equation children and their other parents, and the family analysis in step 2.1 puts every neighbor outside $C$ on the same side. If $v\in C$, the child is a single shared nondescendant node, not copied, and has no treatment parent. Its nonconditioned original parents form a clique in $G'[H]$. Assign $U_v$ to their common component side when there are any such parents, and arbitrarily otherwise; after $C$ is deleted it has no neighbor on the opposite side. There are no root-root moral edges, since each equation uses one exogenous root. Let the left side consist of the components meeting $T$ and roots assigned to that side, and let the right side be everything else outside $C$. Thus deleting $C$ from the full moral graph of the retained graph $J$ leaves no edge between the sides. Factual $T$ is on the left and every response $W$ is on the right. In particular no ancestral moral path connects these endpoint sets, and [F5] gives their d-separation in $J$. By its kernel factorization and [F2], $X_T$ is conditionally independent of the finite vector $(X_w^t)_{w\in W,t\in F}$ given $X_C$. This argument handles shared roots and shared nondescendants through moral families and does not assume that a projected copied path preserves collider status. [F1, F2, F5, step 1.1, step 2.1, construct]

3.1 Fix a bounded nonnegative measurable $f(X_T)$. Response events depending on finitely many coordinates form a pi-system generating $\mathcal R_W^T$. Step 2.2 gives the conditional-product identity for their indicators. The response events for which it holds form a lambda-system: complements subtract the identity for the whole space, and disjoint countable unions follow by summing conditional-expectation versions for the pieces and testing the increasing partial sums over events in $\sigma(X_C)$; ordinary monotone convergence gives a version for the union. Dynkin's theorem [F4] gives the identity for every response event. Simple approximation and monotone convergence extend it to all bounded nonnegative response-measurable functions. Decompose bounded real functions into positive and negative parts to obtain all bounded functions on both sides, hence the claimed independence by [F3]. This cylinder argument applies to any cardinality of the intervention-value set, with no common null set chosen across that set. The fixed-value conclusion is a restriction to one response coordinate vector. [step 2.2, F3, F4, given, algebra] ∎
