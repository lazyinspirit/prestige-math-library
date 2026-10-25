---
id: lem-distinct-characters-are-linearly-independent
kind: lemma
title: Distinct characters are linearly independent and eigenspace sums are direct
dependency_level: 3
deps:
  - def-affine-scheme
  - def-diagonalizable-group-and-character-module
  - def-linear-subspace
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Corollary 4.24 and Theorem 4.25, printed pp. 93-94
---
## Statement

Let $k$ be a field and let $G=D_k(M)$ be a diagonalizable group over $k$ with coordinate ring $O(G)=k[M]$ and character group $M$ ([[def-diagonalizable-group-and-character-module]]). Distinct characters of $G$ are linearly independent as functions on $G$: if $\chi_1,\dots,\chi_r\in M$ are pairwise distinct and $c_1,\dots,c_r\in k$ satisfy $\sum_ic_i\chi_i=0$ as elements of $k[M]$, then $c_1=\dots=c_r=0$.

Consequently, if a rational representation $V$ of an affine algebraic group $G$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]) over $k$ is written as a sum $V=\sum_\chi V_\chi$ of eigenspaces for pairwise distinct characters $\chi$, where $V_\chi=\{v\in V:r_R(g)(v\otimes1)=\chi_R(g)(v\otimes1)\text{ for every }R\text{ and }g\in G(R)\}$, then the sum is direct: every family $(v_\chi)$ with $v_\chi\in V_\chi$ and $\sum_\chi v_\chi=0$ has $v_\chi=0$ for all $\chi$.

## Facts & Assumptions

**Given:** A field $k$, a diagonalizable group $G=D_k(M)$ with $O(G)=k[M]$, and pairwise distinct characters $\chi_1,\dots,\chi_r\in M$.

[F1] For an abelian group $M$ the group algebra $k[M]$ has $k$-basis the elements $e_m$ for $m\in M$, with $e_me_n=e_{m+n}$, unit $e_0$, and Hopf maps $\Delta(e_m)=e_m\otimes e_m$, $\varepsilon(e_m)=1$, $S(e_m)=e_{-m}$; the character group of $D_k(M)$ is identified with $M$ via $m\leftrightarrow e_m$, and $D_k(M)(R)=\operatorname{Hom}(M,R^\times)$ for every $k$-algebra $R$. ([[def-diagonalizable-group-and-character-module]])

[F2] A rational representation of an affine algebraic group $G$ is a $k$-vector space $V$ with a linear action of $G$, equivalently a comodule structure; for a character $\chi$ the eigenspace $V_\chi$ is the set of $v$ with $g\cdot v=\chi(g)v$ for all $R$-points $g$ and all $R$. ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]])

[F3] A sum $\sum_\chi V_\chi$ inside $V$ is direct exactly when every relation $\sum_\chi v_\chi=0$ with $v_\chi\in V_\chi$ forces all $v_\chi=0$. ([[def-linear-subspace]])

## Proof

**Given:** A field $k$, a diagonalizable group $D_k(M)$ with character group $M$, pairwise distinct characters $\chi_1,\dots,\chi_r\in M$, and coefficients $c_1,\dots,c_r\in k$.

1.1 By [F1] each $\chi_i$ corresponds to the group-like element $e_{\chi_i}\in k[M]$: its comultiplication is $\Delta(e_{\chi_i})=e_{\chi_i}\otimes e_{\chi_i}$ and its counit is $\varepsilon(e_{\chi_i})=1$, and the map $M\to k[M]$, $m\mapsto e_m$, is injective because the $e_m$ form a $k$-basis indexed by $M$. [F1]

1.2 I claim that distinct group-like elements of a $k$-coalgebra are linearly independent. Suppose not; choose a shortest relation $\sum_{i\in S}c_ie_i=0$ with all $c_i\ne0$, the $e_i$ group-like and pairwise distinct, and $|S|\ge2$ minimal. Applying $\Delta$ and subtracting the tensor product of the relation with $e_s$ for a fixed $s\in S$ gives $\sum_{i\in S\setminus\{s\}}c_i\,e_i\otimes(e_i-e_s)=0$. By minimality of $|S|$, the elements $e_i$ for $i\ne s$ are linearly independent, so each $e_i-e_s=0$, contradicting distinctness. Hence $r\le1$, and then $c_1e_1=0$ gives $c_1=0$ because $e_1\ne0$. [F1, algebra]

2.1 By [step 1.1] the characters $\chi_1,\dots,\chi_r$ are distinct group-like elements of $k[M]=O(G)$, so the relation $\sum_ic_i\chi_i=0$ is a linear relation among distinct group-like elements and forces $c_1=\dots=c_r=0$ by [step 1.2]. This proves the independence statement. [step 1.1, step 1.2]

3.1 For the second assertion, let $G$ now be any affine algebraic group and let $\sum_{i=1}^r v_i=0$ be a finite relation with $v_i\in V_{\chi_i}$ and distinct characters. Applying the coaction gives $\sum_i v_i\otimes\chi_i=0$ in $V\otimes O(G)$. Each character is group-like in $O(G)$, so step 1.2 makes the $\chi_i$ linearly independent. Finite tensor coefficient comparison therefore gives $v_i=0$ for every $i$: the character span has basis $(\chi_i)$, and the coefficient equations can be checked in finite-dimensional spans of the vectors involved in a tensor relation. This uses no separation by the dual of an arbitrary-dimensional space. By [F3] the eigenspace sum is direct. [F2, F3, step 1.2, algebra] ∎
