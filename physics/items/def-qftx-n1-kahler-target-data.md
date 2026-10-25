---
id: def-qftx-n1-kahler-target-data
kind: definition
title: Kähler coordinate-patch data for a rigid $N=1$ chiral model
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-n1-superspace-and-actions
deps:
  - def-complex-numbers-and-arithmetic
  - thm-complex-numbers-form-a-field
dependency_roles:
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
physical_scope: "A local coordinate-patch definition of the classical scalar target data used by a rigid four-dimensional N=1 chiral model; it asserts no quantum or empirical claim."
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Adel Bilal, Introduction to Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0101055"
      locator: "§7.1, printed pp. 43–46: Kähler potentials, the Hermitian metric, and the chiral sigma-model action."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Let $n$ be a positive integer. Give $\mathbb C^n$ the Euclidean topology transported from $\mathbb R^{2n}$ by the real coordinates $z^i=x^i+i y^i$, where $x^i,y^i\in\mathbb R$. Let $U\subseteq\mathbb C^n$ be open in this topology and contain $0$. Each complex number has its unique real decomposition $a+ib$ with $a,b\in\mathbb R$; write $\overline{a+ib}=a-ib$. A function on $U$ is smooth if all of its partial derivatives of every finite order in the real coordinates $(x^1,y^1,\ldots,x^n,y^n)$ exist and are continuous. Define the Wirtinger derivatives by $\partial_i=\tfrac12(\partial_{x^i}-i\partial_{y^i})$ and $\partial_{\bar i}=\tfrac12(\partial_{x^i}+i\partial_{y^i})$.

A **Kähler coordinate-patch datum** is such a pair $(U,K)$ with a smooth real-valued function $K:U\to\mathbb R$ for which the matrix $g_{i\bar j}(z,\bar z):=\partial_i\partial_{\bar j}K(z,\bar z)$ satisfies $g_{i\bar j}=\overline{g_{j\bar i}}$ and is positive definite: for every $z\in U$ and every nonzero $v=(v^1,\ldots,v^n)\in\mathbb C^n$, $\bar v^{\bar j}g_{i\bar j}(z,\bar z)v^i>0$. This smooth Hermitian matrix is the Kähler metric specified by the potential $K$. In natural units $\hbar=c=1$, mass dimensions are powers of mass; assign $[z^i]=1$, $[K]=2$, and $[g_{i\bar j}]=0$.

## Definition references

[[def-complex-numbers-and-arithmetic]]

[[thm-complex-numbers-form-a-field]]

[Adel Bilal, *Introduction to Supersymmetry*, §7.1](https://arxiv.org/pdf/hep-th/0101055).
