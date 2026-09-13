---
id: def-symmetric-and-exterior-powers-over-an-arbitrary-field
kind: definition
title: Symmetric and exterior powers over an arbitrary field
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [cor-finite-iterated-tensor-products-represent-multilinear-maps, def-kth-exterior-power-by-quotient, def-quotient-module]
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §11.2, printed pp. 62–63"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Definition

Let $V$ be a vector space over an arbitrary field $k$ and let $n\geq0$.
Permuting tensor factors gives an action of the symmetric group $S_n$ on
$V^{\otimes n}$. Define

$$S^n(V)=V^{\otimes n}/R_n,$$

where $R_n$ is the linear span of all $t-\pi t$ with
$t\in V^{\otimes n}$ and $\pi\in S_n$. Thus $S^n(V)$ is the quotient by
coinvariance relations, not the subspace of invariant tensors.

The exterior power $\Lambda^n(V)$ is the repeated-vector quotient of
[[def-kth-exterior-power-by-quotient]]: it is $V^{\otimes n}$ modulo the span
of pure tensors in which two inputs are equal.

By convention $V^{\otimes0}=k$, so $S^0(V)=\Lambda^0(V)=k$, while
$S^1(V)=\Lambda^1(V)=V$. These definitions require no division by $n!$ and
therefore apply in every characteristic.
