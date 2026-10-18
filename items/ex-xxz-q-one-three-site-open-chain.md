---
id: ex-xxz-q-one-three-site-open-chain
kind: example
title: "The q = 1 three-site open XXZ chain has loop value 2"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-xxz-open-chain-temperley-lieb-representation
  - lem-xxz-open-chain-local-matrix-satisfies-temperley-lieb
  - thm-xxz-open-chain-hamiltonian-and-boundary-field
justified_by: []
aliases: []
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. Nichols, The Temperley-Lieb Algebra and its Generalizations in the Potts and XXZ Models"
      url: "https://arxiv.org/pdf/hep-th/0509069"
      locator: "§2.1.1, equations (2.2)–(2.3), PDF p. 4: the XXZ local matrix, q=1 loop value and open Hamiltonian convention."
    - title: "Vaughan F. R. Jones, Planar Algebras, I"
      url: "https://arxiv.org/pdf/math/9909027"
      locator: "§2.1, printed pp. 27–29: Temperley–Lieb diagram generators and loop convention."
---

## Statement

At $q=1$ and $L=3$, the loop value is $\delta=2$. In the mixed-spin sector of each adjacent pair the local block is $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$; the embedded generators satisfy the TL relations, and in the ordered three-site basis grouped by number of down spins the open Hamiltonian is $\operatorname{diag}(0,-K,-K,0)$ with $K=\begin{pmatrix}1&-1&0\\-1&2&-1\\0&-1&1\end{pmatrix}$.

## Facts & Assumptions

**Given:** The XXZ matrix and Hamiltonian convention at $q=1$.

[F1] $U(1)$ has zero action on equal-spin pairs and block $\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$ on mixed-spin pairs; $H_3=-e_1-e_2$. ([[def-xxz-open-chain-temperley-lieb-representation]])

[F2] These local matrices satisfy $e_i^2=2e_i$ and the adjacent triple relations. ([[lem-xxz-open-chain-local-matrix-satisfies-temperley-lieb]])

[F3] The declared open Hamiltonian has the Pauli bulk terms and endpoint contribution established in the XXZ expansion theorem. ([[thm-xxz-open-chain-hamiltonian-and-boundary-field]])

## Proof

**Given:** $L=3$ and $q=1$.

1.1 Substituting $q=1$ in $\delta=q+q^{-1}$ gives $\delta=2$, and the mixed-spin block in [F1] becomes $B=\begin{pmatrix}1&-1\\-1&1\end{pmatrix}$. In the one-down basis $(\downarrow\uparrow\uparrow,\uparrow\downarrow\uparrow,\uparrow\uparrow\downarrow)$, $e_1=\begin{pmatrix}1&-1&0\\-1&1&0\\0&0&0\end{pmatrix}$ and $e_2=\begin{pmatrix}0&0&0\\0&1&-1\\0&-1&1\end{pmatrix}$. Their sum is $K$. The two-down sector gives the same sum with $e_1,e_2$ interchanged, while the all-up and all-down vectors are annihilated. [F1, given, algebra]

2.1 On the one-down sector, direct multiplication gives $e_1e_2e_1=e_1$ and $e_2e_1e_2=e_2$; on the two-down sector the same two matrices are interchanged, so both identities still hold. The square identity follows from $B^2=2B$, and the distant commutation condition is vacuous for two generators. This agrees with [F2]. [F1, F2, step 1.1, algebra]

3.1 Negating the two embedded generators therefore gives $H_3=\operatorname{diag}(0,-K,-K,0)$ in the stated ordered number-of-down-spins blocks. Equivalently, [F3] gives $H_3=\tfrac12(X_1X_2+Y_1Y_2+X_2X_3+Y_2Y_3+Z_1Z_2+Z_2Z_3-2I)$, with no bond $(3,1)$. Here $q=1$ gives $\cos\gamma=1$ and $\sin\gamma=0$, so the endpoint contribution in [F3] vanishes. [F1, F3, step 1.1, step 2.1, algebra] ∎
