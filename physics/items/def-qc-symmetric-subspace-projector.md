---
id: def-qc-symmetric-subspace-projector
kind: definition
title: "Symmetric Subspace Projector"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps: ["def-qc-tensor-register-and-permutation"]
justified_by: ["lem-qc-symmetric-subspace-average-is-projector"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§7.1.1, Proposition 7.1, symmetric-subspace projector."
---

## Definition

Let $H$ be a finite-dimensional complex Hilbert space, let $k\ge1$, and let $H^{\otimes k}$ use the ordered tensor product register and factor permutation convention of [[def-qc-tensor-register-and-permutation]]. For $\pi\in S_k$, let $U_\pi$ be the resulting unitary that permutes the $k$ tensor factors according to $\pi$. Define
$$\Pi_{\mathrm{sym},k}:=\frac1{k!}\sum_{\pi\in S_k}U_\pi.$$
The **symmetric subspace** is $\operatorname{Sym}^k(H):=\{v\in H^{\otimes k}:U_\tau v=v\text{ for every }\tau\in S_k\}$. For $k=0$, the tensor unit is one-dimensional and $\Pi_{\mathrm{sym},0}:=I$.

The permutation average is the orthogonal projector onto $\operatorname{Sym}^k(H)$ by [[lem-qc-symmetric-subspace-average-is-projector]].
