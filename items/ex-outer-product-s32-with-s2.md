---
id: ex-outer-product-s32-with-s2
kind: example
title: "The outer product of $S^{(3,2)}$ and $S^{(2)}$"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
deps:
  - cor-outer-pieri-rules-for-trivial-and-sign-factors
  - def-outer-induction-product-for-symmetric-group-characters
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-young-subgroup-tabloid-and-permutation-module
  - def-partition-young-diagram-and-conjugate-partition
  - def-skew-diagram-and-semistandard-skew-tableau
  - thm-standard-polytabloid-basis
  - def-young-tableau-standard-tableau-and-shape
  - cor-dimension-of-an-induced-finite-dimensional-representation
  - cor-tensor-products-of-finite-free-modules-and-dimension
  - def-finite-symmetric-group-and-permutation-notation
  - def-group-homomorphism
  - def-induced-r-linear-g-module-by-h-covariant-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§14, Example 14.5, printed pp. 52–53: the explicit computation [3,2][2]=[5,2]+[4,3]+[4,2,1]+[3,3,1]+[3,2,2]."
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §5, equations (5.16)–(5.17), printed pp. 73–74: the horizontal-strip Pieri rule used through cor-outer-pieri-rules-for-trivial-and-sign-factors."
---

## Statement

As complex $S_7$-modules,

$$\operatorname{Ind}_{S_5\times S_2}^{S_7}\bigl(S^{(3,2)}\boxtimes S^{(2)}\bigr)\cong S^{(5,2)}\oplus S^{(4,3)}\oplus S^{(4,2,1)}\oplus S^{(3,3,1)}\oplus S^{(3,2,2)}.$$

The five summands are the shapes obtained from $(3,2)$ by adding a horizontal $2$-strip: the added node pairs lie in columns $\{4,5\}$, $\{3,4\}$, $\{1,4\}$, $\{1,3\}$, and $\{1,2\}$, respectively. The dimension check is $[S_7:S_5\times S_2]\cdot\dim S^{(3,2)}\cdot\dim S^{(2)}=21\cdot5\cdot1=105=14+14+35+21+21$. This is the classical computation $[3,2][2]=[5,2]+[4,3]+[4,2,1]+[3,3,1]+[3,2,2]$.

## Facts & Assumptions

**Given:** The partitions $(3,2)$ and $(2)$ and the outer induction product for symmetric-group Specht modules.

[F1] The outer Pieri rule states that induction with the trivial Specht factor $S^{(r)}$ is the multiplicity-one direct sum over horizontal $r$-strips, including the empty-strip case when $r=0$ ([[cor-outer-pieri-rules-for-trivial-and-sign-factors]]).

[F2] The outer product $f\circ g$ is induction from the block subgroup $S_m\times S_n\le S_{m+n}$; in the one-based realization, the second block is $\{m+1,\ldots,m+n\}$ ([[def-outer-induction-product-for-symmetric-group-characters]]).

[F3] Partitions are weakly decreasing row lengths, and $\mu\subseteq\lambda$ means $[\mu]\subseteq[\lambda]$ in the English Young-diagram coordinates ([[def-partition-young-diagram-and-conjugate-partition]]).

[F4] A horizontal strip has at most one added box in each column ([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F5] The global convention is $S_t=\operatorname{Sym}(\{0,\ldots,t-1\})$ with composition acting right to left ([[def-finite-symmetric-group-and-permutation-notation]]).

[F6] A group homomorphism preserves products ([[def-group-homomorphism]]).

[F7] Induced modules are covariant functions satisfying $F(gh)=h^{-1}\cdot F(g)$, with left translation action ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F8] Specht modules are spanned by polytabloids $e_T=\kappa_T\{T\}$ in tabloid modules, with the left permutation action; the tabloid classes form a basis ([[def-column-antisymmetrizer-polytabloid-and-specht-module]], [[def-young-subgroup-tabloid-and-permutation-module]]).

[F9] The standard polytabloids form a basis of $S^\lambda$, so $\dim_{\mathbb C}S^\lambda=f^\lambda$, the number of standard tableaux of shape $\lambda$ ([[thm-standard-polytabloid-basis]]).

[F10] For a finite group $G$, subgroup $H$, and finite-dimensional $H$-module $W$, $\dim\operatorname{Ind}_H^G W=[G:H]\dim W$ ([[cor-dimension-of-an-induced-finite-dimensional-representation]]).

[F11] For finite-dimensional complex vector spaces $V,W$, $\dim(V\otimes_{\mathbb C}W)=(\dim V)(\dim W)$ ([[cor-tensor-products-of-finite-free-modules-and-dimension]]).

[F12] A standard tableau fills $[\lambda]$ bijectively with $1,\ldots,|\lambda|$ and its entries strictly increase along each row and column; $f^\lambda$ denotes their number ([[def-young-tableau-standard-tableau-and-shape]]).

## Proof

**Proof technique:** direct.

1.1 For each $t$, put $G_t^0=\operatorname{Sym}(\{0,\ldots,t-1\})$ and $G_t^1=\operatorname{Sym}(\{1,\ldots,t\})$, and let $\beta_t(i)=i+1$ and $c_t(\sigma)=\beta_t\sigma\beta_t^{-1}$, with the unique empty bijection for $t=0$. The map $c_t$ is a group isomorphism because it is bijective and $c_t(\sigma\tau)=c_t(\sigma)c_t(\tau)$ by [F6]. For $a+b=t$, $c_t^{-1}$ carries the one-based block subgroup in [F2] to the zero-based block subgroup in [F5]. Relabeling every entry of a tableau by $\beta_t$ sends its tabloid to the corresponding tabloid and conjugates its row and column stabilizers; inversion pairs, hence permutation signs, are preserved by the shift. Thus it sends each polytabloid to the relabeled polytabloid by [F8] and intertwines the Specht actions. If $H^1\le G_t^1$ and $H^0=c_t^{-1}(H^1)$, pull an $H^1$-module $W$ back by $h\cdot_0w=c_t(h)\cdot_1w$. The induced-function map $F^1\mapsto F^0$, $F^0(g)=F^1(c_t(g))$, preserves covariance since $F^0(gh)=c_t(h)^{-1}\cdot_1F^0(g)=h^{-1}\cdot_0F^0(g)$, and it intertwines left translation because $c_t(g_0^{-1}g)=c_t(g_0)^{-1}c_t(g)$. Hence the one-based outer-product and Specht-module calculation transports to the global zero-based convention. [F2, F5, F6, F7, F8]

1.2 Let $f^\lambda$ count standard tableaux of shape $\lambda$. In a nonempty standard tableau the largest entry lies in a removable corner: a node with a node to its right or below would have to carry a larger entry by [F12]. Deleting that largest entry gives a bijection with the disjoint union of standard tableaux on the shapes obtained by deleting one removable corner; conversely, appending the largest entry at any removable corner reverses the deletion. Hence $f^\varnothing=1$ and $f^\lambda=\sum_{x\in\operatorname{Rem}(\lambda)}f^{\lambda-x}$. The one-row and one-column shapes each have one standard tableau, and the recurrence gives $f^{(2,1)}=f^{(2)}+f^{(1,1)}=1+1=2$, $f^{(3,1)}=f^{(2,1)}+f^{(3)}=2+1=3$, $f^{(4,1)}=f^{(3,1)}+f^{(4)}=3+1=4$, $f^{(5,1)}=f^{(4,1)}+f^{(5)}=4+1=5$, $f^{(2,2)}=f^{(2,1)}=2$, $f^{(3,2)}=f^{(2,2)}+f^{(3,1)}=2+3=5$, $f^{(4,2)}=f^{(3,2)}+f^{(4,1)}=5+4=9$, $f^{(5,2)}=f^{(4,2)}+f^{(5,1)}=9+5=14$, $f^{(3,3)}=f^{(3,2)}=5$, $f^{(4,3)}=f^{(3,3)}+f^{(4,2)}=5+9=14$, $f^{(1,1,1)}=1$, $f^{(2,1,1)}=f^{(1,1,1)}+f^{(2,1)}=1+2=3$, $f^{(3,1,1)}=f^{(2,1,1)}+f^{(3,1)}=3+3=6$, $f^{(4,1,1)}=f^{(3,1,1)}+f^{(4,1)}=6+4=10$, $f^{(2,2,1)}=f^{(2,1,1)}+f^{(2,2)}=3+2=5$, $f^{(3,2,1)}=f^{(2,2,1)}+f^{(3,1,1)}+f^{(3,2)}=5+6+5=16$, $f^{(2,2,2)}=f^{(2,2,1)}=5$, $f^{(4,2,1)}=f^{(3,2,1)}+f^{(4,1,1)}+f^{(4,2)}=16+10+9=35$, $f^{(3,3,1)}=f^{(3,2,1)}+f^{(3,3)}=16+5=21$, and $f^{(3,2,2)}=f^{(3,2,1)}+f^{(2,2,2)}=16+5=21$. By [F9], the input dimensions are $5$ and $1$, and the five output dimensions are $14,14,35,21,21$. [F3, F9, F12, algebra]

2.1 The second factor $S^{(2)}$ is the trivial Specht module, so the outer Pieri rule [F1], with the block induction convention [F2] and the label bridge in step 1.1, expresses the induced module as the multiplicity-one sum over all partitions $\lambda\vdash7$ containing $(3,2)$ for which $\lambda/(3,2)$ is a horizontal $2$-strip. [F1, F2, step 1.1]

2.2 In the one-based block model of [F2], $H=S_5\times S_2$ stabilizes $B=\{6,7\}$. The map from left cosets $gH$ to two-element subsets $g(B)$ is a bijection: $H$ is exactly the setwise stabilizer of $B$, and permutations act transitively on two-element subsets. Hence $[S_7:H]=\binom72=21$. By [F10] and [F11], the dimension of the induced module is $21\cdot5\cdot1=105$ using the input dimensions from step 1.2; the output dimensions in that step sum to $14+14+35+21+21=105$. [F2, F10, F11, step 1.2]

3.1 If $\lambda\vdash7$ contains $(3,2)$, then $\lambda_1\ge\lambda_2\ge2$ and $\lambda_1\ge3$. The case $\lambda_2\ge4$ is impossible because the first two rows would contain at least eight nodes. If $\lambda_2=3$, the only possibilities are $(4,3)$ and $(3,3,1)$. If $\lambda_2=2$, the remaining nodes give $(5,2)$, $(4,2,1)$, $(3,2,2)$, or $(3,2,1,1)$. The added nodes in these six cases are respectively in columns $\{4,3\}$, $\{3,1\}$, $\{4,5\}$, $\{4,1\}$, $\{1,2\}$, and $\{1,1\}$. By [F4], exactly the last shape fails the horizontal-strip condition. Thus the five valid shapes are precisely $(5,2),(4,3),(4,2,1),(3,3,1),(3,2,2)$, with the column pairs stated. [F3, F4, step 2.1]

4.1 Step 2.1 gives the induction decomposition over horizontal strips, and step 3.1 lists exactly the five such strips, each with multiplicity one. This proves the displayed module isomorphism; step 2.2 verifies its dimension independently and the result agrees with James's classical computation. [F1, step 2.1, step 2.2, step 3.1] ∎
