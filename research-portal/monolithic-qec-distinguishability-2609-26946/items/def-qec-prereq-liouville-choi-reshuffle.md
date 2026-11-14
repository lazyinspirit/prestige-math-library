---
id: def-qec-prereq-liouville-choi-reshuffle
kind: definition
domain: mathematics
title: Liouville matrix and Choi reshuffling conventions
status: published
origin: session
deps:
  - math:def-qc-choi-matrix
  - math:def-qc-tensor-register-and-permutation
  - math:def-qc-tensor-map
  - math:def-linear-map
  - math:thm-unique-coordinates-with-respect-to-an-ordered-basis
  - math:lem-exponential-series-of-a-bounded-operator
  - math:def-banach-space
  - math:def-bounded-linear-operator
  - math:def-operator-norm
  - math:thm-coordinate-map-for-a-finite-dimensional-normed-space
  - math:def-matrix-product-and-identity-matrix
dependency_roles:
  math:def-qc-choi-matrix: mathematical-premise
  math:def-qc-tensor-register-and-permutation: mathematical-premise
  math:def-qc-tensor-map: mathematical-premise
  math:def-linear-map: mathematical-premise
  math:thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
  math:lem-exponential-series-of-a-bounded-operator: mathematical-premise
  math:def-banach-space: mathematical-premise
  math:def-bounded-linear-operator: mathematical-premise
  math:def-operator-norm: mathematical-premise
  math:thm-coordinate-map-for-a-finite-dimensional-normed-space: mathematical-premise
  math:def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
formulation_deps:
  - math:def-qc-choi-matrix
  - math:def-qc-tensor-register-and-permutation
  - math:def-qc-tensor-map
  - math:def-linear-map
  - math:thm-unique-coordinates-with-respect-to-an-ordered-basis
  - math:lem-exponential-series-of-a-bounded-operator
  - math:def-banach-space
  - math:def-bounded-linear-operator
  - math:def-matrix-product-and-identity-matrix
argument_deps:
  - math:def-qc-choi-matrix
  - math:def-qc-tensor-register-and-permutation
  - math:def-qc-tensor-map
  - math:def-linear-map
  - math:thm-unique-coordinates-with-respect-to-an-ordered-basis
  - math:lem-exponential-series-of-a-bounded-operator
  - math:def-banach-space
  - math:def-bounded-linear-operator
  - math:def-operator-norm
  - math:thm-coordinate-map-for-a-finite-dimensional-normed-space
  - math:def-matrix-product-and-identity-matrix
proof_strategy: direct
---

## Definition

Let $H_{\mathrm{in}}$ and $H_{\mathrm{out}}$ be finite-dimensional complex inner-product spaces with ordered orthonormal bases $(e_i)_{i<n}$ and $(f_k)_{k<m}$. Use the convention that the inner product is linear in its first argument. Write $\mathcal L(H)$ for the complex-linear endomorphisms of $H$. Define input matrix units $E_{ij}x=\langle x,e_j\rangle e_i$ and output matrix units $F_{kl}y=\langle y,f_l\rangle f_k$. A superoperator here means a complex-linear map $\mathcal N:\mathcal L(H_{\mathrm{in}})\to\mathcal L(H_{\mathrm{out}})$.

The **Liouville matrix** of $\mathcal N$ in these ordered matrix-unit bases is the $m^2\times n^2$ matrix $S$ whose entries satisfy $\mathcal N(E_{ij})=\sum_{k,l<m}S_{(k,l),(i,j)}F_{kl}$. Pairs are ordered lexicographically. The **input-first Choi matrix** is $J=\sum_{i,j<n}E_{ij}\otimes\mathcal N(E_{ij})$, represented in the ordered product basis $(e_i\otimes f_k)_{(i,k)}$. Its entries obey $J_{(i,k),(j,l)}=S_{(k,l),(i,j)}$. This exchange of index groupings is called **reshuffling**; the two matrices generally have different shapes and represent different linear maps.

If $H_{\mathrm{in}}=H_{\mathrm{out}}=H$ with the same ordered basis and $X=\mathcal L(H)$ is equipped with a Banach-space norm for which a linear endomorphism $\mathcal G:X\to X$ is bounded, write $L$ for the Liouville matrix of $\mathcal G$. For real $t$, the Liouville matrix of $e^{t\mathcal G}=\sum_{r=0}^{\infty}t^r\mathcal G^r/r!$ is $S=e^{tL}=\sum_{r=0}^{\infty}t^rL^r/r!$. Reshuffling this $S$ gives the Choi matrix of $e^{t\mathcal G}$.

## Justification

**Given:** The finite-dimensional spaces, ordered orthonormal bases and linear maps of the Definition, with the stated Banach norm and bounded generator when the exponential is used.

1.1 For any $A\in\mathcal L(H_{\mathrm{in}})$, expand each $Ae_j$ in the input basis. The resulting coefficients give $A=\sum_{i,j}a_{ij}E_{ij}$; evaluating a vanishing such sum at each $e_j$ shows all coefficients vanish. Thus the $E_{ij}$ form a basis, and the same argument gives the output basis $F_{kl}$. Unique coordinates therefore make $S$ well defined. The input-first Choi definition and the tensor-map action give $J(e_j\otimes f_l)=\sum_{i,k}S_{(k,l),(i,j)}e_i\otimes f_k$, establishing the stated entries in the ordered product basis. These arguments also cover an empty basis, with empty sums and the unique zero-space maps. [[math:def-linear-map]] [[math:thm-unique-coordinates-with-respect-to-an-ordered-basis]] [[math:def-qc-choi-matrix]] [[math:def-qc-tensor-map]] [[math:def-qc-tensor-register-and-permutation]]. [given, algebra]

1.2 For endomorphisms $\mathcal P,\mathcal Q$ of $X=\mathcal L(H)$, let $A,B$ be their Liouville matrices and abbreviate a matrix-unit index pair by $\alpha$, $\beta$ or $\gamma$. Linearity gives $(\mathcal P\circ\mathcal Q)(E_\beta)=\sum_\alpha(\sum_\gamma A_{\alpha\gamma}B_{\gamma\beta})E_\alpha$. The inner sum is exactly $(AB)_{\alpha\beta}$ by the matrix-product definition. The identity map has matrix $I_{n^2}$. Thus, defining zeroth powers as these identities, repeated composition gives the matrix $L^r$ for $\mathcal G^r$, and linearity gives $\sum_{r=0}^{N}t^rL^r/r!$ for the partial sum $T_N:=\sum_{r=0}^{N}t^r\mathcal G^r/r!$. This includes $n=0$, where $I_0$ and all matrices concerned are empty. [[math:def-linear-map]] [[math:def-matrix-product-and-identity-matrix]]. [given, step 1.1, algebra]

2.1 Under the stated Banach and boundedness hypotheses the operator exponential converges in operator norm. Write $\|\cdot\|_{\mathrm{op}}$ for the operator norm on bounded endomorphisms of $X$ and $T=e^{t\mathcal G}$. For every matrix unit the operator-norm bound gives $\|(T_N-T)E_\beta\|\leq\|T_N-T\|_{\mathrm{op}}\|E_\beta\|\to0$. Thus evaluation on each fixed matrix unit respects this limit. [[math:def-banach-space]] [[math:def-bounded-linear-operator]] [[math:def-operator-norm]] [[math:lem-exponential-series-of-a-bounded-operator]]. [given, step 1.2]

2.2 The coordinate-map theorem applied to the normed space $X$ and its ordered matrix-unit basis gives a bounded coordinate map $c:X\to\mathbb C^{n^2}$, where the coordinate space has its $\ell^1$ norm. In particular, there is a constant $C\geq0$ such that $\sum_\alpha|c(x)_\alpha|\leq C\|x\|$ for all $x\in X$. For each $\beta$, applying this to $(T_N-T)E_\beta$ and using step 2.1 shows that every matrix entry of $T_N$ converges to the corresponding entry of the Liouville matrix of $T$. By step 1.2 these entries are the partial sums of $\sum_{r=0}^{\infty}t^rL^r/r!$, proving the claimed equality $S=e^{tL}$. The Choi entry identity from step 1.1 then gives the Choi matrix by reshuffling. If $n=0$, both matrix series and the Choi matrix are empty and the same conclusions hold. [[math:thm-coordinate-map-for-a-finite-dimensional-normed-space]] [[math:thm-unique-coordinates-with-respect-to-an-ordered-basis]]. [given, step 1.1, step 1.2, step 2.1] ∎
