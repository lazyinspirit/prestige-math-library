---
id: lem-qc-single-qubit-ring-unitary-form
kind: lemma
title: Normal form of a single-qubit ring unitary
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - lem-qc-dyadic-cyclotomic-unit-circle
  - lem-qc-clifford-t-entry-ring
  - def-linear-isometry-and-orthogonal-or-unitary-operator
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 11
---

## Statement

If $U=\begin{pmatrix}u&b\\v&d\end{pmatrix}$ is a $2\times2$ unitary with
entries in $D$, then for some $j\in\{0,\ldots,7\}$,

$$U=\begin{pmatrix}u&-\omega^j\bar v\\v&\omega^j\bar u\end{pmatrix},\qquad |u|^2+|v|^2=1.$$

## Facts & Assumptions

**Given:** $U^*U=I$, and $u,v,b,d\in D$.

[F1] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: in finite dimension a unitary operator satisfies $U^*U=UU^*=I$.

[F2] [[lem-qc-dyadic-cyclotomic-unit-circle]]: if $x\in D$ and $x\bar x=1$, then $x=\omega^j$ for some integer $j$.

## Proof


1.1 The first column of $U$ is a unit vector, so $|u|^2+|v|^2=1$. Its orthogonal complement is the one-dimensional span of $(-\bar v,\bar u)$, which is itself a unit vector. Therefore the second column is $\lambda(-\bar v,\bar u)$ for a scalar $\lambda$ with $|\lambda|=1$. [F1, given, algebra]

2.1 The determinant of this displayed matrix is $\lambda(|u|^2+|v|^2)=\lambda$. Because its entries lie in $D$ and $D$ is a ring, $\lambda=ud-vb\in D$. By [F2], $\lambda=\omega^j$ for some $j\in\{0,\ldots,7\}$. Substitution gives the asserted form. [F2, step 1.1, algebra] ∎

## Unresolved supplier checks

The actual QC07 gate, QC09 circuit-semantics, and local entry-ring bodies were
inspected; their matrix and ordered-word conventions match this argument.
The supplier items remain draft and are not accepted by this record.
