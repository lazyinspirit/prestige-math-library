---
id: def-gr-fx-discrete-holonomy-model
kind: definition
title: Finite SU(2) graph holonomy model
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - prop-gr-fx-su2-compact
  - lem-the-set-of-functions-between-two-sets-is-a-set
  - def-real-and-complex-inner-product-space
  - def-strongly-continuous-unitary-representation
  - def-trace-of-an-endomorphism
dependency_roles:
  prop-gr-fx-su2-compact: mathematical-premise
  lem-the-set-of-functions-between-two-sets-is-a-set: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-strongly-continuous-unitary-representation: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
physical_scope: null
sources:
  references:
    - title: "John C. Baez, Spin Network States in Gauge Theory, arXiv:gr-qc/9411007, §2"
      url: "https://arxiv.org/pdf/gr-qc/9411007"
      locator: "§2, finite directed graph edge variables, vertex gauge action, and gauge-invariant representation data."
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (2025), §§2–3"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory-2025.pdf"
      locator: "The definitions of finite-dimensional complex representations and unitary representations used here."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

A **finite oriented graph** consists of finite vertex and edge sets $V,E$, source and target maps $s,t:E\to V$, and a fixed-point-free involution $e\mapsto\bar e$ with $s(\bar e)=t(e)$ and $t(\bar e)=s(e)$. A **finite SU(2) graph configuration** assigns $g_e\in SU(2)$ to every oriented edge and requires $g_{\bar e}=g_e^{-1}$. A graph path is a finite composable edge word $e_1,\ldots,e_n$; its holonomy is the later-left product $g_{e_n}\cdots g_{e_1}$, and the empty path has holonomy $I_2$.

A vertex gauge assignment is a function $h:V\to SU(2)$. It acts on edge variables by

$$g_e\longmapsto g'_e=h_{t(e)}g_eh_{s(e)}^{-1}.$$

A **finite-dimensional unitary representation** is a group homomorphism $\rho:SU(2)\to U(W)$ on a finite-dimensional complex inner-product space $W$ that is strongly continuous, meaning $g\mapsto\rho(g)w$ is continuous for each $w\in W$. Here

$$U(W):=\{T\in\operatorname{GL}(W):\langle Tv,Tw\rangle=\langle v,w\rangle\text{ for all }v,w\in W\},$$

with the operator-norm topology inherited from $\operatorname{End}(W)$. In finite dimension, strong continuity is equivalent to continuity in this operator norm.

For a closed graph path $\ell=(e_1,\ldots,e_n)$, the associated **Wilson trace** is the basis-independent trace of the endomorphism of $W$ given by

$$\operatorname{Tr}\bigl(\rho(g_{e_n})\cdots\rho(g_{e_1})\bigr).$$

Here the trace of a finite-dimensional endomorphism is the trace of its matrix in any basis.

## Definition references

[[prop-gr-fx-su2-compact]]

[[lem-the-set-of-functions-between-two-sets-is-a-set]]

[[def-real-and-complex-inner-product-space]]

[[def-strongly-continuous-unitary-representation]]

[[def-trace-of-an-endomorphism]]

## Remarks

This definition is a finite graph configuration model. An SU(2) graph is not obtained from a Lorentz connection without an additional reduction choice. This item makes no continuum-limit, Hamiltonian-constraint, physical-Hilbert-space, or empirical-observable claim.
