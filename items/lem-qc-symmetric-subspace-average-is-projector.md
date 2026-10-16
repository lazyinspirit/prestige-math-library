---
id: lem-qc-symmetric-subspace-average-is-projector
kind: lemma
title: "The permutation average is the symmetric-subspace projector"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps: ["def-qc-symmetric-subspace-projector", "def-qc-tensor-register-and-permutation"]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "§7.1.1, Proposition 7.1, permutation average and symmetric subspace."
---

## Statement

Let $H$ be finite-dimensional and let $k\ge1$. The average $\Pi_{\mathrm{sym},k}=\frac1{k!}\sum_{\pi\in S_k}U_\pi$ is self-adjoint and idempotent, with range exactly $\operatorname{Sym}^k(H)=\{v:U_\tau v=v\ \forall\tau\in S_k\}$. For $k=0$ on the tensor unit, $\Pi_{\mathrm{sym},0}=I$ and its range is the full tensor unit.

## Facts & Assumptions

**Given:** A finite-dimensional complex Hilbert space $H$, an integer $k\ge0$, and the tensor-factor permutation representation $\pi\mapsto U_\pi$.

[L1] [[def-qc-tensor-register-and-permutation]] defines each factor permutation by reordering the product basis. In equal factors this is a basis permutation, hence unitary; under the stated output-order convention, $U_\pi^*=U_{\pi^{-1}}$ and $U_\pi U_\sigma=U_{\sigma\circ\pi}$ for ordinary right-to-left composition of permutations.

[F1] $S_k$ is the finite group of permutations of a $k$-element set, with $k!$ elements. Inversion and left or right multiplication by a fixed element are bijections; for each $\tau\in S_k$, exactly $k!$ pairs $(\pi,\sigma)$ satisfy $\sigma\circ\pi=\tau$, since every $\pi$ determines the unique $\sigma=\tau\circ\pi^{-1}$.

## Proof


1.1 For $k\ge1$, $\Pi^*=\frac1{k!}\sum_\pi U_\pi^*=\frac1{k!}\sum_\pi U_{\pi^{-1}}=\Pi$ by [L1] and reindexing by inversion. Also $$\Pi^2=\frac1{(k!)^2}\sum_{\pi,\sigma}U_{\sigma\circ\pi}=\frac1{(k!)^2}\sum_{\tau\in S_k}k!U_\tau=\Pi,$$ using [F1]. Thus $\Pi$ is an orthogonal projection. [given, L1, F1, algebra]

2.1 For every $\tau\in S_k$, $U_\tau\Pi=\frac1{k!}\sum_\pi U_{\pi\circ\tau}=\Pi$ by [L1] and reindexing by right multiplication. Hence every vector in $\operatorname{ran}\Pi$ is invariant. Conversely, if $U_\pi v=v$ for all $\pi$, then $\Pi v=\frac1{k!}\sum_\pi v=v$. Therefore $\operatorname{ran}\Pi=\operatorname{Sym}^k(H)$. [step 1.1, L1, F1, algebra]

3.1 For $k=0$, $S_0$ has one element and the defining empty tensor power is the one-dimensional tensor unit, so the stated average is $I$ and its range is the whole space. [given, algebra] ∎

