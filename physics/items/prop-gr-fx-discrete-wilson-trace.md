---
id: prop-gr-fx-discrete-wilson-trace
kind: proposition
title: Wilson traces are invariant under vertex gauge transformations
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-discrete-holonomy-model
dependency_roles:
  def-gr-fx-discrete-holonomy-model: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "John C. Baez, Spin Network States in Gauge Theory, arXiv:gr-qc/9411007, §2"
      url: "https://arxiv.org/pdf/gr-qc/9411007"
      locator: "§2, vertex gauge transformations of graph holonomies and gauge-invariant loop traces."
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (2025), §§2–3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
      locator: "The representation homomorphism law and unitary matrix trace operations used here."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

For every finite SU(2) graph configuration, continuous finite-dimensional unitary representation $\rho$, closed graph path $\ell$, and vertex gauge assignment $h$, the Wilson trace of $\ell$ is unchanged by $g_e\mapsto h_{t(e)}g_eh_{s(e)}^{-1}$.

## Statement references

[[def-gr-fx-discrete-holonomy-model]]

## Facts & Assumptions

**Given:** The edge orientation, path ordering, representation, and vertex action of Definition [[def-gr-fx-discrete-holonomy-model]].

[F1] [[def-gr-fx-discrete-holonomy-model]]: each edge variable transforms as $g'_e=h_{t(e)}g_eh_{s(e)}^{-1}$, and a path product is ordered with later edges on the left.

## Proof

**Proof technique:** direct cancellation.

1.1 The vertex action preserves the reverse-edge condition because $g'_{\bar e}=h_{s(e)}g_e^{-1}h_{t(e)}^{-1}=(h_{t(e)}g_eh_{s(e)}^{-1})^{-1}=(g'_e)^{-1}$. Thus the transformed variables are again a graph configuration. [given, F1, algebra]

1.2 If the path is empty, its product is $I_2$ before and after the gauge action, so its trace is unchanged. For the rest of the proof assume the closed path has $n\ge1$ edges and write it as $e_1:v_0\to v_1,\ldots,e_n:v_{n-1}\to v_n=v_0$. [given, F1, algebra]

2.1 The transformed product is $g'_{e_n}\cdots g'_{e_1}=h_{v_0}g_{e_n}h_{v_{n-1}}^{-1}h_{v_{n-1}}g_{e_{n-1}}\cdots h_{v_1}^{-1}h_{v_1}g_{e_1}h_{v_0}^{-1}=h_{v_0}(g_{e_n}\cdots g_{e_1})h_{v_0}^{-1}$; all adjacent intermediate factors cancel because $h_v^{-1}h_v=I$. [given, F1, algebra, step 1.2]

3.1 Applying the homomorphism $\rho$ carries this conjugation to conjugation by $\rho(h_{v_0})$. For finite matrices, $\operatorname{Tr}(AB)=\sum_{i,j}A_{ij}B_{ji}=\operatorname{Tr}(BA)$; take $A=\rho(h_{v_0})$ and $B=\rho(g_{e_n}\cdots g_{e_1})\rho(h_{v_0})^{-1}$ to obtain the same trace as before. Thus the Wilson trace is invariant. [given, F1, step 2.1, algebra] ∎