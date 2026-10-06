---
id: lem-finite-dimensional-subcomodules-contain-elements
kind: lemma
title: Every element of a comodule lies in a finite-dimensional subcomodule
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 3
deps:
  - def-commutative-hopf-algebra-over-a-field
  - def-field
  - def-linear-combination-and-span
  - def-linear-independence
  - def-linear-map
  - def-linear-subspace
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - def-tensor-product-of-modules-by-generators-and-relations
  - def-vector-space
  - thm-right-exactness-of-tensor-products
  - thm-universal-property-of-module-tensor-products
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: "Ch. 4 §4(c), Proposition 4.7 and Corollary 4.8, printed p. 86 (PDF 97)."
    - title: J. Swanson (notes), J. Pevtsova (lecturer), Algebraic Groups Lecture Notes, University of Washington, Fall 2014
      url: https://www.jpswanson.org/notes/alggroups.pdf
      locator: "October 27th lecture, Definition 110, Theorem 111 and Remark 112, printed pp. 28-29."
proof_strategy: direct
---

## Statement

Let $k$ be a field, let $A$ be a commutative Hopf algebra over $k$ ([[def-commutative-hopf-algebra-over-a-field]]) and let $(M,\rho)$ be an $A$-comodule ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]). For every finite subset $S\subseteq M$ there is a finite-dimensional subcomodule $N\subseteq M$ with $S\subseteq N$. Consequently $M$ is the directed union of its finite-dimensional subcomodules. No basis of $A$ and no choice principle is used.

## Facts & Assumptions

[F1] The coaction satisfies $(\rho\otimes\operatorname{id}_A)\rho=(\operatorname{id}_M\otimes\Delta)\rho$ and $(\operatorname{id}_M\otimes\varepsilon)\rho=\operatorname{id}_M$, and a subcomodule is a subspace $N$ with $\rho(N)\subseteq N\otimes_kA$. ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]], [[def-commutative-hopf-algebra-over-a-field]])

[F2] For $k$-vector spaces $X,H$, the tensor product is also the quotient of the free $k$-module on $X\times H$ by the $k$-span of the two additivity relations and $e_{(cx,h)}-c e_{(x,h)}$, $e_{(x,ch)}-c e_{(x,h)}$. Indeed this quotient has the bilinear universal property: extend a bilinear map by finite linear sums, which kill those relations. The resulting maps to and from the tensor product are inverse on spanning generators. ([[def-tensor-product-of-modules-by-generators-and-relations]], [[thm-universal-property-of-module-tensor-products]])

[F3] A finite spanning list yields a finite basis: if it is dependent, solve a nontrivial relation for a vector with nonzero coefficient and delete that vector, preserving the span; the length strictly decreases. A given independent list can be extended in the same finite span by appending a spanning-list vector only when it is outside the current span. ([[def-linear-combination-and-span]], [[def-linear-independence]], [[def-linear-subspace]])

## Proof

**Given:** A field $k$, a commutative Hopf algebra $A$ over $k$, an $A$-comodule $(M,\rho)$ and a finite subset $S\subseteq M$.

1.1 (Coefficient criterion.) If $h_1,\dots,h_n\in A$ are linearly independent and $x_1,\dots,x_n$ lie in a $k$-vector space $X$ with $\sum_ix_i\otimes h_i=0$ in $X\otimes_kA$, then $x_1=\cdots=x_n=0$. Indeed, by [F2] the element $\sum_ie_{(x_i,h_i)}$ of the free module on $X\times A$ is a finite $k$-linear combination of finitely many bilinearity generators; the spans $X_0\subseteq X$ and $A_0\subseteq A$ of the initial $x_i,h_i$ together with all vectors occurring in that finite witness are finite-dimensional and the same combination exhibits $\sum_ix_i\otimes h_i=0$ in $X_0\otimes_kA_0$. Extend $h_1,\dots,h_n$ to a finite basis $v_1,\dots,v_N$ of $A_0$ with $v_i=h_i$ for $i\le n$, choose a finite basis $u_1,\dots,u_M$ of $X_0$, and use the universal property [F2] to identify $X_0\otimes_kA_0$ with the matrices $k^{M\times N}$ by $u_a\otimes v_b\mapsto E_{ab}$; the element $\sum_ix_i\otimes h_i$ becomes the matrix whose $i$-th column is the coordinate vector of $x_i$ for $i\le n$ and whose remaining columns vanish, so this matrix is zero and every $x_i$ is zero. The same argument shows that $U\otimes_kH\to X\otimes_kH$ is injective for any inclusion $U\subseteq X$: take a finite witness of a zero relation, extend a basis of the span of its original first factors in $U$ to a basis of the finite ambient first-factor space, and compare the resulting tensor coordinates. Thus the subspace notation $U\otimes_kH\subseteq X\otimes_kH$ is legitimate. [F2, F3]

1.2 Let $m\in M$ and write $\rho(m)=\sum_{i=1}^{n}m_i\otimes a_i$ with $a_1,\dots,a_n$ linearly independent; such a representation exists by deleting redundant terms from a finite tensor expression, and then $m=(\operatorname{id}_M\otimes\varepsilon)\rho(m)=\sum_i\varepsilon(a_i)m_i$ by [F1]. Put $N=\operatorname{span}(m,m_1,\dots,m_n)$, a finite-dimensional subspace of $M$ containing $m$. [F1, F3]

2.1 In the situation of step 1.2, let $q\colon M\to M/N$ be the quotient map. Applying $q\otimes\operatorname{id}_A\otimes\operatorname{id}_A$ to the coassociativity identity [F1] for $m$ gives $\sum_i(q\otimes\operatorname{id}_A)\rho(m_i)\otimes a_i=\sum_i(qm_i)\otimes\Delta(a_i)=0$, because $m_i\in N$; since the $a_i$ are linearly independent, step 1.1 yields $(q\otimes\operatorname{id}_A)\rho(m_i)=0$ for every $i$. The kernel of $q\otimes\operatorname{id}_A$ is $N\otimes_kA$: one inclusion is clear, and if a finite sum $\sum_jx_j\otimes b_j$ with linearly independent $b_j$ lies in that kernel, then $\sum_j(qx_j)\otimes b_j=0$, so step 1.1 gives $qx_j=0$ and $x_j\in N$ for every $j$. Hence $\rho(m_i)\in N\otimes_kA$ for all $i$, and since $m_i\in N$ one also has $\rho(m)=\sum_im_i\otimes a_i\in N\otimes_kA$; therefore $\rho(N)\subseteq N\otimes_kA$ and $N$ is a finite-dimensional subcomodule containing $m$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 For a finite set $S=\{s_1,\dots,s_r\}$, apply step 2.1 to each $s_j$ to obtain finite-dimensional subcomodules $N_j\ni s_j$. The sum $N=N_1+\dots+N_r$ is finite-dimensional and contains $S$, and it is a subcomodule because $\rho(N_j)\subseteq N_j\otimes_kA$ for each $j$ gives $\rho(N)\subseteq\sum_jN_j\otimes_kA\subseteq N\otimes_kA$. [step 2.1, F1, algebra]

4.1 Consequently every element of $M$ lies in a finite-dimensional subcomodule, and for two such subcomodules $N_1,N_2$ their sum contains both, so the finite-dimensional subcomodules of $M$ form a directed family under inclusion whose union is $M$. [step 3.1, F1] ∎
