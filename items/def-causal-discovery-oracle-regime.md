---
id: def-causal-discovery-oracle-regime
kind: definition
title: "Causally sufficient perfect-oracle discovery regime"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-recursive-structural-causal-model-and-dag
  - def-independent-random-elements
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measure-kernel-and-probability-kernel
  - thm-dag-factorization-implies-d-separation-conditional-independence
  - def-faithfulness-of-a-dag-model
  - def-conditional-independence-given-a-sigma-algebra
  - def-d-separation-in-a-dag
  - def-axiom-of-choice
proof_strategy: definition
axiom_use: "Assume AC for the supplied conditional-independence and recursive-model probability interfaces. The graph algorithm itself uses only finite, choice-free operations."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Kalisch and Bühlmann, Estimating High-Dimensional Directed Acyclic Graphs with the PC-Algorithm, §§2.1–2.2"
      url: "https://www.jmlr.org/papers/volume8/kalisch07a/kalisch07a.pdf"
    - title: "Meek, Causal Inference and Causal Explanation with Background Knowledge, §1.1"
      url: "https://arxiv.org/pdf/1302.4972"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $V$ be a finite set of observed vertices, let $G$ be a directed acyclic graph
on $V$, and let $(X_v)_{v\in V}$ be the endogenous variables of a finite
recursive structural causal model whose observed set is all of $V$ and whose
latent set is empty. The model is Markovian: its exogenous random elements are
mutually independent. Require that the full-joint law $P$ of $(X_v)_{v\in V}$
has a topological probability-kernel factorization: for a topological order
$v_1,\ldots,v_p$, its joint law is formed by composing probability kernels
$K_{v_r}(x_{\operatorname{pa}(v_r)},dx_{v_r})$ that depend only on the parents
of $v_r$. Also require that $P$ is faithful to $G$, meaning its conditional
independences among vertex subvectors are exactly the d-separations in $G$.
Assume AC for these probability interfaces.

A **perfect conditional-independence oracle** for this regime accepts any
pairwise disjoint $A,B,S\subseteq V$ and returns “independent” exactly when
$\sigma(X_A)$ and $\sigma(X_B)$ are conditionally independent given
$\sigma(X_S)$. The **causally sufficient perfect-oracle regime** consists of
the finite observed DAG, its Markovian recursive model and full-joint law, the
faithfulness condition, and this exact oracle. No latent vertex is omitted
from the graph supplied to the oracle.

## Definition references

[[def-recursive-structural-causal-model-and-dag]]

[[def-independent-random-elements]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[[def-measure-kernel-and-probability-kernel]]

[[thm-dag-factorization-implies-d-separation-conditional-independence]]

[[def-faithfulness-of-a-dag-model]]

[[def-conditional-independence-given-a-sigma-algebra]]

[[def-d-separation-in-a-dag]]

[[def-axiom-of-choice]]
