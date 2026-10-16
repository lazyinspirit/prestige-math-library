---
id: thm-qc-exact-clifford-t-synthesis-optimality
kind: theorem
title: H-count and T-count optimality of exact Clifford+T synthesis
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - alg-qc-exact-single-qubit-clifford-t-synthesis
  - lem-qc-clifford-t-denominator-descent-and-base
  - def-qc-clifford-t-gate-library
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
---

## Statement

Use the Kliuchnikov–Maslov–Mosca single-qubit gate family
$G=\{H,T,T^\dagger,S,S^\dagger,X,Y,Z\}$, with scalar phase ignored as in
their Appendix B. Count each $H$ as one Hadamard and each $T$ or $T^\dagger$
as one T gate; the Clifford gates contribute no H/T count. For a unitary $U$
with $n=\operatorname{sde}(|U_{00}|^2)\ge4$, the exact synthesis algorithm
produces an H-optimal word with $h(U)=n-1$. The source's T-optimal formula is

$$t(U)=h(U)-1+(\ell\bmod2)+(j\bmod2),$$

where $\ell,j$ are selected so that
$h(HT^\ell U T^jH)=h(U)+2$. Under the source coefficient encoding, the
algorithm uses $O(n_{\rm opt})$ ring operations and
$O(n_{\rm opt}^2)$ bit operations, where $n_{\rm opt}$ is the minimum H/T
word length in this gate family.

## Authoring status

This established source theorem is retained at its stated strength, but a
complete local proof is not supplied. KMM Appendix B explicitly says that
“considering the different possible values of $\ell$ and $j$” completes the
T-optimality argument, then works only the representative case
$(\ell,j)=(3,2)$. It also asserts without publishing the finite base
H-optimal circuit table needed for its first part. The new 208-column table
certifies base state preparation, not that optimality table or the omitted
case analysis. These are the exact unresolved proof obligations; no
optimality claim is marked ready.

## Source notes

KMM arXiv:1206.5236, Appendix B, pp. 21–23. The source defines H/T
optimality up to global phase over the displayed gate family and states the
complexity bounds immediately after Algorithm 1.
