---
id: thm-dag-factorization-implies-d-separation-conditional-independence
kind: theorem
title: "DAG factorization implies the global Markov property"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-d-separation-in-a-dag
  - def-ancestral-moral-graph-of-a-dag
  - lem-d-separation-ancestral-moral-separation
  - lem-finite-products-of-probability-kernels
  - def-measure-kernel-and-probability-kernel
  - def-composition-of-probability-kernels
  - lem-kernel-composition-is-well-defined-and-associative
  - def-conditional-expectation-given-a-sigma-algebra
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-faithfulness-of-a-dag-model
proof_strategy: direct
axiom_use: "Assume AC for the conditional-expectation and conditional-independence interfaces. The finite graph elimination and kernel construction use no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Judea Pearl, Causal Diagrams for Empirical Research, §2-1, pp. 671–672"
      url: "https://ftp.cs.ucla.edu/pub/stat_ser/R218-B.pdf"
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, Fine Point 6.1, pp. 78–79"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_2jan25.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC. Let $(X_v)_{v\in V}$ be random elements in measurable spaces
whose joint law is generated, in a topological order of the finite DAG $G$,
by probability kernels $K_v(x_{\operatorname{pa}(v)},dx_v)$. For pairwise
disjoint $A,B,C\subseteq V$, if $C$ d-separates $A$ and $B$ in $G$, then
$$\sigma(X_A)\perp\!\!\!\perp\sigma(X_B)\mid\sigma(X_C).$$
This is the global Markov implication. Its converse is the separate
faithfulness condition in [[def-faithfulness-of-a-dag-model]].

## Facts & Assumptions

**Given:** A finite DAG-kernel factorization, measurable vertex spaces, and AC.

[F1] D-separation is equivalent to separation by $C$ in the ancestral moral
graph on $A\cup B\cup C$.
[[lem-d-separation-ancestral-moral-separation]]

[F2] In the moral graph each family $\{v\}\cup\operatorname{pa}(v)$ is a
clique, because every pair of parents of $v$ is joined by a moral edge.
[[def-ancestral-moral-graph-of-a-dag]]

[F3] Finite products of probability kernels with a common source form a
probability kernel with rectangle evaluations given by products.
[[lem-finite-products-of-probability-kernels]]

[F4] Finite kernel composition is normalized and associative.
[[def-composition-of-probability-kernels]],
[[lem-kernel-composition-is-well-defined-and-associative]]

[F5] Conditional expectation is defined by testing integrals over the
conditioning sigma-algebra; conditional independence is its conditional
product identity for bounded functions.
[[def-conditional-expectation-given-a-sigma-algebra]],
[[def-conditional-independence-given-a-sigma-algebra]]

[F6] Fubini permits reordering finitely many probability-kernel
integrations, and probability measures agreeing on a generating rectangle
$\pi$-system agree on the product sigma-algebra.
[[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]],
[[thm-measure-uniqueness-on-a-sigma-finite-pi-system]],
[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

## Proof
**Proof technique:** moralize the ancestor graph and group the factored kernels by the components left after removing the conditioning set.

**Given:** The hypotheses in the statement.

1.1 Put $S=A\cup B\cup C$ and $W=\operatorname{An}_G(S)$. Integrate vertices outside $W$ out of the topological product in reverse topological order. Each such vertex has no descendant in $S$ and its own conditional kernel integrates to one, so the marginal law on $W$ retains the product of the kernels indexed by $W$. This uses normalization and finite iterated kernel composition from [F4]; no observed-only or latent-marginal factorization is inferred. [given, F4, algebra]

2.1 Delete $C$ from the moral graph on $W$ and partition the remaining vertices into connected components. By [F1], no component contains both a vertex of $A$ and a vertex of $B$. For any vertex $v$ in one component, every parent of $v$ is either in that same component or in $C$: a parent is joined to $v$ by a skeleton edge, and two parents of $v$ are joined by [F2]. Thus each component's local factors depend only on its own coordinates and the fixed separator coordinates $x_C$. [F1, F2, step 1.1]

3.1 For each component $D$, compose its local kernels in the inherited topological order, treating $x_C$ as fixed inputs. By [F4] this defines a probability kernel $Q_D(x_C,dx_D)$. By [F3], the finitely many component kernels have a product kernel $Q(x_C,d(x_D)_D)$. Finite Fubini [F6] reorders the component integrations. On measurable rectangles, the conditional joint law of all coordinates in $W\setminus C$ given $X_C=x_C$ therefore equals $Q(x_C,\cdot)$; uniqueness on the generating rectangle pi-system in [F6] extends this identity to the product sigma-algebra. [step 2.1, F3, F4, F6, given, algebra]

4.1 Group the components meeting $A$ into $D_A$, those meeting $B$ into $D_B$, and all other components into $D_0$. The groups $D_A$ and $D_B$ are disjoint by step 2.1. Integrating the $D_0$ kernels gives one, so the conditional law kernel factors as $Q_{D_A}(x_C,dx_{D_A})Q_{D_B}(x_C,dx_{D_B})$. For bounded measurable functions $f(X_A)$ and $g(X_B)$, integrating this factorization shows that $E[f(X_A)g(X_B)\mid\sigma(X_C)]$ equals the product of the two separate conditional expectations. These are versions because testing either one against every event in $\sigma(X_C)$ recovers the corresponding marginal integral by step 3.1. This is exactly conditional independence by [F5]. If $A$ or $B$ is empty, its function is constant and the same identity holds. [step 3.1, F4, F5, F6, algebra] ∎
