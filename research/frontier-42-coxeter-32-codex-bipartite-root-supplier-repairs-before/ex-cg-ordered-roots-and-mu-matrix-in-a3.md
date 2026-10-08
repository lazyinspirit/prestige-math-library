---
id: ex-cg-ordered-roots-and-mu-matrix-in-a3
kind: example
title: "Ordered roots and the mu-dot-root matrix in A3"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 21
deps: [def-cg-bipartite-coxeter-element-and-root-recursion, lem-cg-steinberg-bipartite-root-enumeration, lem-cg-ordered-root-pairings-and-simple-systems, def-cg-real-coxeter-form-and-reflection, lem-cg-reflection-representation-descends-and-root-norms, def-cg-reflection-length-absolute-order-and-moved-space, thm-hh-parabolic-minimal-representatives-and-length-additivity, lem-cg-ordered-root-complex-is-geometric-simplicial]
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Thomas Brady and Colum Watt, Lattices in finite real reflection groups (arXiv:math/0501502, 29-page PDF)"
      url: "https://arxiv.org/pdf/math/0501502"
      locator: "Section 3, printed pp. 4-7, for the general prefix-root and dual-vertex recursions; Example 6.14, printed pp. 19-20, was checked as a comparison only: it uses c=(1 2 3 4) and a different simple-system order/global root order from this example. All displayed A3 data here are recomputed in the stated bipartite order."
    - title: "Robert Steinberg, Finite reflection groups, Transactions of the American Mathematical Society 91 (1959) 493-504 (AMS free digital archive, 10-page PDF)"
      url: "https://www.ams.org/journals/tran/1959-091-03/S0002-9947-1959-0106428-2/S0002-9947-1959-0106428-2.pdf"
      locator: "Corollary 4.6 and Theorem 5.1, printed pp. 497-499, for the general positive-root enumeration and longest-word conventions"
    - title: "Bill Casselman, Essays on Coxeter groups: Coxeter elements in finite Coxeter groups (author-hosted PDF, 12 pages)"
      url: "https://www.math.ubc.ca/~cass/research/pdf/Element.pdf"
      locator: "Sections 3.1-3.7 and 4, printed pp. 6-10, for the Coxeter-plane conventions; the present A3 permutation and root calculations are independent"
    - title: "Sergey Fomin and Nathan Reading, Root systems and generalized associahedra, IAS/Park City Mathematics Series lecture notes (arXiv:math/0505518)"
      url: "https://arxiv.org/pdf/math/0505518"
      locator: "Example 2.17 and Figure 2.6 in Section 2.5, printed pp. 22-23, for the A3 Coxeter-plane context, not the root order used here"
verification:
  precheck: pass
---

## Example

Work in the standard realization of $A_3=S_4$. Let $E_1,\dots,E_4$ be the coordinate vectors, put $V_0:=\{x\in\mathbb R^4:\sum_i x_i=0\}$, and use $B(x,y):=\tfrac12\sum_i x_i y_i$. Put $\sigma_1:=E_1-E_2$, $\sigma_2:=E_3-E_4$, $\sigma_3:=E_2-E_3$ and let $s_1=(1\ 2)$, $s_2=(3\ 4)$, $s_3=(2\ 3)$ be their reflections. Thus $J=\{s_1,s_2\}$, $K=\{s_3\}$, and $c=s_1s_2s_3$. For $i<j$, write $(i\ j)$ for the positive root $E_i-E_j$. Multiplication of permutations is right to left. Let $\ell$ be Coxeter word length and $\ell_T$ reflection length. Then:

**(i) Ordered roots.** One has $c=(1\ 2\ 4\ 3)$, $h=4$, and
$$\rho_1=(1\ 2),\quad \rho_2=(3\ 4),\quad \rho_3=(1\ 4),\quad \rho_4=(2\ 4),\quad \rho_5=(1\ 3),\quad \rho_6=(2\ 3).$$
In the simple-root basis these are $\sigma_1,\sigma_2,\sigma_1+\sigma_2+\sigma_3,\sigma_2+\sigma_3,\sigma_1+\sigma_3,\sigma_3$. Hence $\Phi_+=\{\rho_1,\dots,\rho_6\}$, $|\Phi_+|=\ell(w_0)=nh/2=6$, and $\rho_{i+3}=C_V\rho_i$ for $i\ge1$, where $C_V=\rho(c)$.

**(ii) The $\mu$-root matrix.** The matrix $(B(\mu_i,\rho_j))_{1\le i,j\le6}$ is
$$\begin{pmatrix}1&0&1&0&1&0\\0&1&1&1&0&0\\0&0&1&1&1&1\\-1&0&0&1&0&1\\0&-1&0&0&1&1\\-1&-1&-1&0&0&1\end{pmatrix}.$$
Its diagonal and upper-triangular entries are nonnegative, its strictly lower-triangular entries are nonpositive, and the first two subdiagonals vanish, as in [[lem-cg-ordered-root-pairings-and-simple-systems]] (2)(b)-(d).

**(iii) The longest word and the second half.** The longest element is $w_0=c^2=(1\ 4)(2\ 3)$ and $(s_1s_2s_3)^2$ is a reduced expression of length $6=nh/2$, with prefix roots $\rho_1,\dots,\rho_6$. The prefix roots of $(s_1s_2s_3)^4$ are $\rho_1,\dots,\rho_{12}$, and
$$\rho_7,\dots,\rho_{12}=-\rho_2,-\rho_1,-\rho_3,-\rho_5,-\rho_4,-\rho_6,$$
so the second half is $-\Phi_+$.

**(iv) One factorization-criterion instance.** For the pair $(\rho_1,\rho_2)$,
$$\ell_T\bigl(R(\rho_1)R(\rho_2)c\bigr)=1=n-2\quad\Longleftrightarrow\quad B(\mu(\rho_2),\rho_1)=0.$$

No Choice is used.

## Facts & Assumptions

**Given:** The type-$A_3$ coordinate model and the bipartite data just specified, together with the conventions of the cited root and reflection items.

[F1] The Coxeter form and reflection formula are those of [[def-cg-real-coxeter-form-and-reflection]]; the canonical representation preserves the form and identifies root reflections with their orthogonal actions by [[lem-cg-reflection-representation-descends-and-root-norms]]. The ordered simple generators $(s_1,s_3,s_2)$ are the standard type-$A_3$ chain, so the group is $S_4$ and Coxeter word length is permutation inversion number by [[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (4).

[F2] The dual vectors $\beta_i$, prefix-root and dual-vector recursions, and $\rho_{i+3}=C_V\rho_i$, $\mu_{i+3}=C_V\mu_i$ are as in [[def-cg-bipartite-coxeter-element-and-root-recursion]] (2)-(4). For this irreducible rank-three system, [[lem-cg-steinberg-bipartite-root-enumeration]] (3)-(4) gives $\Phi_+=\{\rho_1,\dots,\rho_6\}$, $h=4$, and the longest-word formula.

[F3] For each positive root $a$, $\mu(a)=\mu_i$ when $a=\rho_i$, $B(\mu_i,\rho_i)=1$, and the sign and zero-pairing rules in [[lem-cg-ordered-root-pairings-and-simple-systems]] (1)-(2) apply.

[F4] Reflection length $\ell_T(w)$ is the minimum number of reflections in $T$ whose product is $w$; the empty product represents the identity. [[def-cg-reflection-length-absolute-order-and-moved-space]] (1)

[F5] For an increasing tuple $a_1<\cdots<a_k$, the length equality $\ell_T(R(a_1)\cdots R(a_k)c)=n-k$ is equivalent to $B(\mu(a_i),a_j)=0$ for every $i>j$. [[lem-cg-ordered-root-complex-is-geometric-simplicial]] (1)

## Verification

**Proof technique:** compute in the simple-root basis, with the standard coordinate action fixing all signs and permutation products.

1.1 The Gram matrix of $(\sigma_1,\sigma_2,\sigma_3)$ is $G=\begin{pmatrix}1&0&-1/2\\0&1&-1/2\\-1/2&-1/2&1\end{pmatrix}$, with determinant $1/2>0$; $B$ is positive definite as it is half the Euclidean form on $V_0$. Thus the map from the abstract simple-root basis to $(\sigma_1,\sigma_2,\sigma_3)$ is an isometry. In this basis $C_V=\begin{pmatrix}0&1&-1\\1&0&-1\\1&1&-1\end{pmatrix}$. For any $i<j$, the reflection with normal $E_i-E_j$ sends $x$ to $x-(x_i-x_j)(E_i-E_j)$ and swaps coordinates $i,j$. Thus the generators act as the stated transpositions, $c=(1\ 2\ 4\ 3)$, and its order is $4$. [F1]

2.1 The prefix convention gives $\rho_1=\sigma_1$, $\rho_2=\sigma_2$, and $\rho_3=R(\sigma_1)R(\sigma_2)\sigma_3=E_1-E_4$. Applying $c$ to these roots gives $E_2-E_4$, $E_1-E_3$, $E_2-E_3$, respectively, which are $\rho_4,\rho_5,\rho_6$. The roots of this coordinate realization are exactly $\pm(E_i-E_j)$; the six displayed vectors are exactly the ones with $i<j$, and their listed simple-root coordinates are nonnegative. This verifies the order, positivity, and full positive-root set in (i), while the cyclic recursion gives $\rho_{i+3}=C_V\rho_i$ for all $i\ge1$. [F1, F2, step 1.1]

3.1 Inverting $G$ gives $G^{-1}=\begin{pmatrix}3/2&1/2&1\\1/2&3/2&1\\1&1&2\end{pmatrix}$, so $\beta_1=(3/2,1/2,1)$, $\beta_2=(1/2,3/2,1)$, and $\beta_3=(1,1,2)$ in the simple-root basis. Since $B(\beta_2,\sigma_1)=0$ and $B(\beta_3,\sigma_1)=B(\beta_3,\sigma_2)=0$, the prefix formula gives $\mu_1=\beta_1$, $\mu_2=\beta_2$, and $\mu_3=\beta_3$; the cyclic recursion gives $\mu_4=(-1/2,1/2,1)$, $\mu_5=(1/2,-1/2,1)$, and $\mu_6=(-1,-1,0)$. Taking $B(\mu_i,\rho_j)=\mu_i^{\mathsf T}G\rho_j$ yields exactly the displayed matrix. Reading its entries proves the diagonal, sign, and two-subdiagonal zero assertions. [F2, F3, step 2.1]

3.2 Since $c=(1\ 2\ 4\ 3)$, $c^2=(1\ 4)(2\ 3)$ is the reverse permutation $(4,3,2,1)$ and has six inversions, the maximum possible in $S_4$. Thus $w_0=c^2$ and $\ell(w_0)=6$. The six-letter word $c^2=(s_1s_2s_3)^2$ is therefore reduced. Applying $C_V^2$ to $\rho_1,\dots,\rho_6$ gives $-\rho_2,-\rho_1,-\rho_3,-\rho_5,-\rho_4,-\rho_6$; the period-three prefix recursion then gives the twelve prefix roots of $c^4$, with its second half exactly $-\Phi_+$. [F1, F2, step 2.1]

4.1 The matrix in step 3.1 has $B(\mu_2,\rho_1)=0$. Also, using $R(\rho_1)=(1\ 2)$ and $R(\rho_2)=(3\ 4)$, $R(\rho_1)R(\rho_2)c=(1\ 2)(3\ 4)(1\ 2)(3\ 4)(2\ 3)=(2\ 3)$, a nonidentity reflection. Hence its reflection length is $1=n-2$, so both sides of the stated equivalence hold for this pair. [F4, F5, step 3.1] ∎
