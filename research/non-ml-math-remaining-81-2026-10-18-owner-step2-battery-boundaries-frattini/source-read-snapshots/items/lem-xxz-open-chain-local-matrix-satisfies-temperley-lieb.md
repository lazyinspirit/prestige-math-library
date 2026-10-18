---
id: lem-xxz-open-chain-local-matrix-satisfies-temperley-lieb
kind: lemma
title: "The open XXZ local 4-by-4 matrix satisfies the Temperley–Lieb relations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-xxz-open-chain-temperley-lieb-representation
  - def-temperley-lieb-generator-presentation
justified_by: []
aliases: []
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb Algebra and its Generalizations in the Potts and XXZ Models"
      url: "https://arxiv.org/pdf/hep-th/0509069"
      locator: "§2.1.1, equations (2.2)–(2.3), PDF p. 4: local XXZ matrix and its open-chain convention; the matrix checks are supplied here."
    - title: "Vaughan F. R. Jones, Planar Algebras, I"
      url: "https://arxiv.org/pdf/math/9909027"
      locator: "§2.1, printed pp. 27–29: diagram/presentation normalization."
---

## Statement

For every $q=e^{i\gamma}\ne0$, put $\delta=q+q^{-1}$ and let $U(q)$ be the local matrix defined in [[def-xxz-open-chain-temperley-lieb-representation]]. Its embeddings $e_i$ on $(\mathbb C^2)^{\otimes L}$ satisfy $e_i^2=\delta e_i$, $e_i e_{i+1}e_i=e_i=e_{i+1}e_i e_{i+1}$, and $e_i e_j=e_j e_i$ when $|i-j|>1$. Thus they define a representation of the presented open Temperley–Lieb algebra, including at values where $\delta=0$.

## Facts & Assumptions

**Given:** $q=e^{i\gamma}$ and the ordered spin basis and matrix $U(q)$ from [[def-xxz-open-chain-temperley-lieb-representation]].

[F1] On the two mixed-spin basis vectors, $U(q)$ has block $A=\begin{pmatrix}q^{-1}&-1\\-1&q\end{pmatrix}$ and is zero on $\uparrow\uparrow,\downarrow\downarrow$. ([[def-xxz-open-chain-temperley-lieb-representation]])

[F2] The presented Temperley–Lieb relations are the square relation with loop parameter $\delta$, the two adjacent triple relations, and distant commutation. ([[def-temperley-lieb-generator-presentation]])

## Proof

**Given:** The matrix and relations in [F1]–[F2].

1.1 Multiplying the nonzero block gives $A^2=\begin{pmatrix}q^{-2}+1&-(q+q^{-1})\\-(q+q^{-1})&q^2+1\end{pmatrix}=(q+q^{-1})A=\delta A$, because $q^{-2}+1=\delta q^{-1}$ and $q^2+1=\delta q$. The zero subspace remains zero, so $U(q)^2=\delta U(q)$, including when $\delta=0$. [F1, algebra]

1.2 On the three-spin subspace with one down spin, in the ordered basis $\downarrow\uparrow\uparrow,\uparrow\downarrow\uparrow,\uparrow\uparrow\downarrow$, the two embedded operators are $A_1=\begin{pmatrix}q&-1&0\\-1&q^{-1}&0\\0&0&0\end{pmatrix}$ and $A_2=\begin{pmatrix}0&0&0\\0&q&-1\\0&-1&q^{-1}\end{pmatrix}$. Multiplication gives $A_1A_2=\begin{pmatrix}0&-q&1\\0&1&-q^{-1}\\0&0&0\end{pmatrix}$ and $(A_1A_2)A_1=A_1$; likewise $A_2A_1=\begin{pmatrix}0&0&0\\-q&1&0\\1&-q^{-1}&0\end{pmatrix}$ and $(A_2A_1)A_2=A_2$. The two-down-spin subspace has the same pair of matrices in reverse order, so both triple identities hold there as well. On the all-up and all-down vectors both operators vanish. These four invariant subspaces exhaust the three-spin space, proving both adjacent relations. [F1, algebra]

2.1 If $|i-j|>1$, the operators act on disjoint tensor factors. For elementary tensors, applying the two operators in either order changes separate tensor coordinates and yields the same vector; linearity gives $e_i e_j=e_j e_i$. This verifies all relations in [F2] for every chain length. [F1, F2, step 1.1, step 1.2, algebra] ∎
