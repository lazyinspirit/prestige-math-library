---
id: def-hochschild-chain-complex-of-a-bimodule
kind: definition
title: Hochschild chains and Hochschild homology with coefficients
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-enveloping-algebra-and-bimodule-module-dictionary, cor-finite-iterated-tensor-products-represent-multilinear-maps, thm-unit-isomorphisms-for-module-tensor-products, lem-bar-differential-and-augmentation-form-a-complex, def-homology-object-of-a-chain-complex]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9: Hochschild and Cyclic Homology, §9.1.1"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  audited: 2026-09-30
---

## Definition

Let $k$ be a field, $A$ a unital associative $k$-algebra, and $M$ a
$k$-central $A$-bimodule ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).
For $n\geq1$ put

$$C_n(A,M):=M\otimes_k A^{\otimes_k n},$$

and put $C_0(A,M):=M$, using the canonical tensor-unit identification
$M\otimes_k k\cong M$. For $n\geq1$ and $0\leq i\leq n$, define the faces
on elementary tensors by

$$\delta_i^{(n)}(m\otimes a_1\otimes\cdots\otimes a_n)=\begin{cases}(ma_1)\otimes a_2\otimes\cdots\otimes a_n,&i=0,\\m\otimes a_1\otimes\cdots\otimes(a_i a_{i+1})\otimes\cdots\otimes a_n,&0<i<n,\\(a_n m)\otimes a_1\otimes\cdots\otimes a_{n-1},&i=n.\end{cases}$$

These are well-defined $k$-linear maps by the multilinear universal property
of the finite tensor product. Set $C_{-1}(A,M)=0$ and $b_0=0$. The
**Hochschild boundary** is

$$b_n:=\sum_{i=0}^n(-1)^i\delta_i^{(n)}:C_n(A,M)\longrightarrow C_{n-1}(A,M)\qquad(n\geq1).$$

In particular, $b_1(m\otimes a)=ma-am$. For $n\geq2$ the faces satisfy

$$\delta_i^{(n-1)}\delta_j^{(n)}=\delta_{j-1}^{(n-1)}\delta_i^{(n)}\qquad(0\leq i<j\leq n),$$

so the alternating-sum boundaries satisfy $b_{n-1}b_n=0$ for $n\geq2$;
$b_0b_1=0$ because $b_0=0$. Thus $C_\bullet(A,M)$ is a chain complex of
$k$-modules. Its $n$th homology
object is the **Hochschild homology with coefficients in $M$**,

$$HH_n(A,M):=H_n(C_\bullet(A,M)).$$

## Facts & Assumptions

**Given:** A field $k$, a unital associative $k$-algebra $A$, and a $k$-central $A$-bimodule $M$.

[F1] The left and right $A$-actions on $M$ commute, and their scalar actions agree because $M$ is $k$-central ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F2] A finite tensor product over a commutative ring represents multilinear maps into a module, so a multilinear face formula induces a unique linear map on the tensor product ([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[F3] The canonical map $M\otimes_k k\to M$, $m\otimes\lambda\mapsto m\lambda$, is an isomorphism with inverse $m\mapsto m\otimes1$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F4] Disjoint adjacent multiplication faces satisfy the reindexed face identity ([[lem-bar-differential-and-augmentation-form-a-complex]]).

[F5] Overlapping adjacent multiplication faces satisfy the face identity by associativity ([[lem-bar-differential-and-augmentation-form-a-complex]]).

[F6] The homology object $H_n(C)$ is defined when $C_\bullet$ is a chain complex ([[def-homology-object-of-a-chain-complex]]).

## Proof

**Proof technique:** direct.

1.1 Each endpoint formula is multilinear because the bimodule actions are $k$-bilinear, and each interior formula is multilinear because multiplication in $A$ is $k$-bilinear; hence [F2] induces the displayed $k$-linear face maps and every face sends a zero input to zero. The tensor-unit isomorphism [F3] identifies the degree-zero term with $M$. [F2, F3, given, algebra]

1.2 The degree-zero boundary is zero by definition, while in degree one the two faces are $\delta_0^{(1)}(m\otimes a)=ma$ and $\delta_1^{(1)}(m\otimes a)=am$, so $b_1(m\otimes a)=ma-am$ and $b_0b_1=0$. [given, algebra]

1.3 If $1\leq i<j\leq n-1$, both faces are internal adjacent multiplications among the $A$-slots. For disjoint slots their operations commute and reindex as in [F4]; for overlapping slots the two composites multiply the same triple, and associativity gives [F5]. Thus $\delta_i^{(n-1)}\delta_j^{(n)}=\delta_{j-1}^{(n-1)}\delta_i^{(n)}$ for all such internal pairs. [F4, F5, given, algebra]

1.4 For the adjacent first pair $i=0,j=1$, the two composites have first coefficients $(ma_1)a_2$ and $m(a_1a_2)$, which agree by the right module law. For $i=n-1,j=n$, they have first coefficients $a_{n-1}(a_nm)$ and $(a_{n-1}a_n)m$, which agree by the left module law. For the pair $i=0,j=n$, they have first coefficients $(a_nm)a_1$ and $a_n(ma_1)$, which agree because the left and right actions commute by [F1]. The untouched slots agree in their original order in all three cases. [F1, given, algebra]

1.5 The remaining pairs with one endpoint face and one internal face act on disjoint data: for $i=0$ and $2\leq j<n$, the first face acts on $m,a_1$ while the other multiplies $a_j,a_{j+1}$; for $1\leq i<n-1$ and $j=n$, the internal face multiplies $a_i,a_{i+1}$ while the last face acts by $a_n$ on $m$. In either order the same multiplication/action is applied to each of these disjoint slots, with the same remaining tensor factors and order, proving the face identity. Together with 1.3 and 1.4 this covers every $0\leq i<j\leq n$. [given, algebra]

1.6 In the degenerate case $A=k$, the canonical tensor-unit identifications turn each face into the identity on $M$; hence $b_n=\sum_{i=0}^n(-1)^i\operatorname{id}_M$, which is the identity for even $n$ and zero for odd $n$. Consecutive composites therefore vanish in this case too. [F2, F3, given, algebra]

2.1 Expand $b_{n-1}b_n$ as the sum of terms $(-1)^{i+j}\delta_i^{(n-1)}\delta_j^{(n)}$. For every $i<j$, the face identity from 1.3--1.5 pairs this term with the term indexed by $(j-1,i)$; their composites agree and their signs are opposite because $(-1)^{i+j}=-(-1)^{(j-1)+i}$. Every term with first index $r\geq s$ is uniquely such a partner, obtained from $i=s,j=r+1$; thus every term occurs in exactly one pair. Hence $b_{n-1}b_n=0$ for $n\geq2$; the case $n=1$ was checked in 1.2. [step 1.3, step 1.4, step 1.5, algebra]

3.1 The maps are $k$-linear by 1.1 and their consecutive composites vanish by 1.2 and 2.1, so they form a chain complex. The definition of homology applies by [F6], giving $HH_n(A,M)=H_n(C_\bullet(A,M))$. [step 1.1, step 1.2, step 2.1, F6] ∎
