---
id: lem-strong-rrqr-column-swap-volume-ratio
kind: lemma
title: "A strong RRQR column swap multiplies selected volume by its score"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-strong-rank-revealing-qr-with-finite-swaps]
dependency_level: 1
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Ming Gu and Stanley C. Eisenstat, Efficient Algorithms for Computing a Strong Rank-Revealing QR Factorization, Lemma 3.1"
      url: "https://math.berkeley.edu/~mgu/MA273/Strong_RRQR.pdf"
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §3.2.2"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Statement

Let $A\in\mathbb F^{m\times n}$ have full column rank, $m\ge n$, and let $A\Pi=Q\begin{bmatrix}R_{11}&R_{12}\\0&R_{22}\end{bmatrix}$ be a QR factorization with nonsingular $R_{11}\in\mathbb F^{k\times k}$, $1\le k<n$. Write $X=R_{11}^{-1}R_{12}$, $\omega_i=\|e_i^*R_{11}^{-1}\|_2$, and $\gamma_j=\|R_{22}(:,j)\|_2$. Let $J$ be the selected set of $k$ columns and define its volume by $\operatorname{vol}(A(:,J))=\det(A(:,J)^*A(:,J))^{1/2}$. Replacing selected column $i$ by trailing column $j$ changes this volume by the factor
$$\frac{\operatorname{vol}(A(:,(J\setminus\{i\})\cup\{j\}))}{\operatorname{vol}(A(:,J))}=\bigl(|X_{ij}|^2+(\omega_i\gamma_j)^2\bigr)^{1/2}.$$

## Facts & Assumptions

**Given:** A full-column-rank matrix, its partitioned QR factorization, and indices $i,j$ as above.

[F1] [[alg-strong-rank-revealing-qr-with-finite-swaps]] defines $X$, $\omega_i$, $\gamma_j$, and the score used to select a swap.

## Proof

1.1 Apply $Q^*$ to the selected columns and the candidate trailing column. The selected matrix becomes $C=R_{11}$ in the top $k$ rows. After replacing column $i$, the top block is $C'=R_{11}S$, where $S$ is the identity with column $i$ replaced by column $j$ of $X$; the lower block has only column $i$ nonzero, equal to $c=R_{22}(:,j)$. Hence the replaced Gram matrix is $(C')^*C'+\|c\|_2^2 e_ie_i^*$. If $X_{ij}\ne0$, then $S$ is nonsingular, $\det S=X_{ij}$, and row $i$ of $(C')^{-1}=S^{-1}R_{11}^{-1}$ is row $i$ of $R_{11}^{-1}$ divided by $X_{ij}$. [F1, construct]

2.1 For any nonsingular Gram matrix $G$ and vector $u$, factor $G+uu^*=G(I+G^{-1}uu^*)$. Multilinearity of the determinant gives $\det(I+ab^*)=1+b^*a$: terms choosing two updated columns vanish because both are proportional to $a$. Hence $\det(G+uu^*)=\det(G)(1+u^*G^{-1}u)$. Apply this identity to the Gram matrix in step 1.1 with $G=(C')^*C'$ and $u=\|c\|_2e_i$. Since $(C')^{-1}$ has row $i$ equal to row $i$ of $R_{11}^{-1}$ divided by $X_{ij}$, $e_i^*G^{-1}e_i=\omega_i^2/|X_{ij}|^2$. The determinant is therefore $|\det R_{11}|^2|X_{ij}|^2\left(1+\|c\|_2^2\omega_i^2/|X_{ij}|^2\right)=|\det R_{11}|^2\left(|X_{ij}|^2+(\omega_i\gamma_j)^2\right)$. The original selected volume squared is $|\det R_{11}|^2$, so taking the nonnegative square root gives the formula when $X_{ij}\ne0$. [step 1.1, algebra]

3.1 Both squared volumes and the right-hand side in step 2.1 are continuous in $X_{ij}$. Perturbing $X_{ij}$ to nonzero values and taking a limit proves the same identity when $X_{ij}=0$. [step 2.1, algebra] ∎
