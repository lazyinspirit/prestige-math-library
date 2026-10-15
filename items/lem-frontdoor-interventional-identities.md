---
id: lem-frontdoor-interventional-identities
kind: lemma
title: "Counterfactual identities under the front-door conditions"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-recursive-structural-causal-model-and-dag
  - def-d-separation-in-a-dag
  - lem-recursive-scm-topological-kernel-factorization
  - thm-dag-factorization-implies-d-separation-conditional-independence
  - def-independent-random-elements
  - thm-independent-random-elements-have-product-joint-law
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Assume AC for the conditional-independence statement. The exogenous-coordinate separation uses finite sets and no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §3-2, pp. 675–676"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Technical Point 7.4, p. 101"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume AC and a finite Markovian recursive SCM on a full DAG with pairwise
distinct observed vertices $A,M,Y$ and any number of latent vertices.
Suppose: (i) every
directed path from $A$ to $Y$ contains $M$; (ii) $A$ and $M$ are
d-separated by the empty set in $G_{\underline A}$; and (iii) $A$
d-separates $M$ and $Y$ in $G_{\underline M}$. For each supplied value
$a\in S_A$, let $M^a$ be the response under $do(A=a)$. Define
$$I_M=\operatorname{An}_{G_{\overline A}}(M)\setminus\{A\},\qquad I_Y=\operatorname{An}_{G_{\overline M}}(Y)\setminus\{M\},$$
where ancestry includes the vertex itself and $U_I$ is the finite vector of
exogenous coordinates $(U_v)_{v\in I}$. Then $M^a$ is measurable with
respect to $\sigma(U_{I_M})$, each response $Y^m$ is measurable with
respect to $\sigma(U_{I_Y})$, and
$$M^a\perp\!\!\!\perp A,\qquad I_M\cap I_Y=\varnothing,\qquad M^a\perp\!\!\!\perp U_{I_Y},\qquad M\perp\!\!\!\perp U_{I_Y}\mid A.$$
The recursive responses also satisfy $Y^a=Y^{M^a}$ almost surely. The
conditional independence is for the factual law; it supplies a genuine
conditional product law for the exogenous coordinates used by the outcome
response.

## Facts & Assumptions

**Given:** The Markovian recursive SCM, its finite full DAG, and the three graph conditions in the statement.

[F1] Under intervention, recursion makes each response a measurable function of the exogenous coordinates at its nonintervened ancestors. The full law factors over a DAG after independent exogenous coordinates are added as roots. [[def-recursive-structural-causal-model-and-dag]], [[lem-recursive-scm-topological-kernel-factorization]]

[F2] D-separation in a finite DAG-kernel factorization implies conditional independence. [[thm-dag-factorization-implies-d-separation-conditional-independence]]

[F3] Disjoint subfamilies of a finite mutually independent exogenous family are independent. [[def-independent-random-elements]], [[thm-independent-random-elements-have-product-joint-law]]

[F4] Conditional independence has the bounded-function factorization meaning under the stated AC assumption. [[def-conditional-independence-given-a-sigma-algebra]], [[def-axiom-of-choice]]

## Proof

**Proof technique:** identify the exogenous coordinates used by each intervention, separate those coordinates with the front-door path conditions, and apply the global Markov implication to the factual mediator and the outcome-side roots.

**Given:** The hypotheses in the statement.

1.1 Let $I_A=\operatorname{An}_G(A)$, including $A$. By recursive substitution, $A$ is measurable with respect to $U_{I_A}$; under $do(A=a)$, the equation at $A$ is replaced, so $M^a$ is measurable with respect to $U_{I_M}$. Under $do(M=m)$, the equation at $M$ is replaced, so $Y^m$ is measurable with respect to $U_{I_Y}$. These claims follow by induction in the finite topological order: an endogenous value depends only on the exogenous coordinates at vertices with directed paths to it in the relevant mutilated graph. [F1, given, induction]

1.2 Suppose $v\in I_M\cap I_A$. Since $v\ne A$, there are directed paths $v\to\cdots\to A$ in $G$ and $v\to\cdots\to M$ in $G_{\overline A}$; the latter avoids $A$. Take the last common vertex $w$ of these paths in a topological ordering. Their suffixes are disjoint, so they form a simple fork path $A\leftarrow\cdots\leftarrow w\to\cdots\to M$ with no internal collider. It is retained in $G_{\underline A}$, because the path uses no arrow out of its endpoint $A$, and is active given the empty set. This contradicts (ii), so $I_M\cap I_A=\varnothing$. [given, construct]

1.3 Suppose $v\in I_M\cap I_Y$. There are directed paths $v\to\cdots\to M$ in $G_{\overline A}$ and $v\to\cdots\to Y$ in $G_{\overline M}$. The first path avoids $A$. The second avoids $M$; it also avoids $A$, since otherwise its segment $A\to\cdots\to Y$ would be a directed $A$-to-$Y$ path avoiding $M$, contrary to (i). Take the last common vertex $w$ of the paths. Their suffixes form a simple fork path $M\leftarrow\cdots\leftarrow w\to\cdots\to Y$ with no internal collider and no internal $A$. It lies in $G_{\underline M}$ and is active given $\{A\}$, contradicting (iii). Thus $I_M\cap I_Y=\varnothing$. [given, construct]

1.4 Fix $v\in I_Y$. There is a directed path $q$ from $v$ to $Y$ in $G_{\overline M}$. It avoids $M$ by definition and avoids $A$, because an occurrence of $A$ would leave a directed $A$-to-$Y$ suffix avoiding $M$, contrary to (i). Thus $q$ is retained in $G_{\underline M}$. If an active path $p$ from $M$ to $v$ given $\{A\}$ existed there, choose the last vertex $w$ of $p$ that also lies on $q$ when $q$ is traversed from $v$ to $Y$. Keep the prefix of $p$ from $M$ to $w$ and append the directed suffix of $q$ from $w$ to $Y$. The suffix after $w$ is disjoint from the prefix by the choice of $w$, so this is a path. Its old internal vertices remain active; $w\notin A$ and the outgoing directed edge makes it a noncollider; all new internal vertices are noncolliders outside $A$. This would be an active path from $M$ to $Y$ given $A$, contradicting (iii). Hence $A$ d-separates $M$ and $v$ in $G_{\underline M}$. In the expanded graph each added root has only one skeleton neighbor, its own equation vertex, so a simple path cannot contain a root internally. An active path ending at $U_v$ would therefore have penultimate vertex $v$; deleting its last edge leaves an active path from $M$ to $v$ (or $v=M$). The latter case is excluded by $M\notin I_Y$, and the former was just excluded. Adding roots does not create new directed descendants of endogenous vertices, so the remaining collider-activity tests are unchanged. Thus $A$ also d-separates $M$ and the whole root set $U_{I_Y}$ in the expanded graph with arrows out of $M$ deleted. [given, F2, construct]

2.1 By [F3], the disjoint exogenous vectors $U_{I_M}$ and $U_{I_A}$ are independent. Step 1.1 makes $M^a$ and factual $A$ measurable functions of these respective vectors, so $M^a\perp A$. [F3, step 1.1, step 1.2]

2.2 The finite vectors $U_{I_M}$ and $U_{I_Y}$ are independent by [F3]. By step 1.1, $M^a$ and the response family $(Y^m)_{m\in S_M}$ are measurable functions of these disjoint vectors; in particular $M^a\perp U_{I_Y}$. [F3, step 1.1, step 1.3]

2.3 Adjoin all exogenous coordinates as independent root vertices. In the factual law, no strict descendant of $M$ is an ancestor of $(M,A,U_{I_Y})$: it cannot be an ancestor of an exogenous root, and if it were an ancestor of $A$, the directed path from $M$ to $A$ would remain in $G_{\underline A}$ and contradict (ii). Reverse-topological integration therefore marginalizes all other vertices and leaves the joint law of $(M,A,U_{I_Y})$ factored on its ancestral subgraph, which has no outgoing edge from $M$. This is a subgraph of the expanded mutilated graph in step 1.4, so the separation there still holds. The global Markov implication [F2], interpreted by the conditional-independence definition [F4], gives $M\perp U_{I_Y}\mid A$. [F1, F2, F4, step 1.4, given]

3.1 In $G_{\overline M}$ there is no directed path from $A$ to $Y$, since every directed $A$-to-$Y$ path in $G$ contains $M$ and arrows into $M$ were deleted. With $M$ fixed, changing the equation at $A$ therefore cannot change $Y$ by recursive substitution: any directed route by which $A$ could affect $Y$ would have to reach the fixed node $M$. Under $do(A=a)$, the mediator equals $M^a$. Replacing the mediator equation by that same realized value leaves every other equation unchanged; the no-directed-path argument shows that leaving $A$ factual has no further effect on $Y$. Thus $Y^a=Y^{M^a}$. [F1, given, induction] ∎
