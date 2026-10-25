---
id: lem-daha-a1-affine-normal-words-span
kind: lemma
title: "Rank-one DAHA affine normal words span"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-daha-a1-double-affine-hecke-algebra, def-daha-a1-root-datum-and-parameter-conventions]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander A. Kirillov Jr., Lectures on the affine Hecke algebras and Macdonald conjectures"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 4, Theorem 4.2, PDF pp. 21–22: spanning normal words for the DAHA; the local proof supplies the rewriting argument."
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://ocw.mit.edu/courses/18-735-double-affine-hecke-algebras-in-representation-theory-combinatorics-geometry-and-mathematical-physics-fall-2009/c0a79381e5494c4fd0baa1eef2356e89_MIT18_735F09_lec.pdf"
      locator: "§§7.11–7.13, PDF pp. 56–59: the type-A1 affine generator and length-zero relations."
---

## Statement

In the algebra of [[def-daha-a1-double-affine-hecke-algebra]], every element is a finite $K$-linear combination of words

$$
Z^m T_{i_1}\cdots T_{i_r}\pi^\epsilon,
$$

where $m\in\mathbb Z$, $\epsilon\in\{0,1\}$, $r\ge0$, and adjacent indices in the string $i_1,\ldots,i_r\in\{0,1\}$ are distinct. This is a spanning statement only; no linear independence is asserted here.

## Facts & Assumptions

**Given:** The generator-and-relation algebra $\mathcal H_{q,t}(A_1)$, its Bernstein relations, and its length-zero involution.

[F1] [[def-daha-a1-double-affine-hecke-algebra]]: $\pi^2=1$, $\pi T_0\pi=T_1$, $(T_i-t)(T_i+t^{-1})=0$, $\pi Z\pi=q^{-1}Z^{-1}$, and $T_iZ^m-s_i(Z^m)T_i=(t-t^{-1})B_{i,m}(Z)$ for all integers $m$.

## Proof

1.1 From $\pi^2=1$ and $\pi T_0\pi=T_1$ one obtains $\pi T_0=T_1\pi$ and $\pi T_1=T_0\pi$. Repeatedly use these identities to move every occurrence of $\pi$ in an affine word to the right, and then use $\pi^2=1$ to leave at most one $\pi$. The quadratic relation gives $T_i^2=(t-t^{-1})T_i+1$, so induction on affine-word length reduces any word in $T_0,T_1$ to a finite linear combination of alternating strings. This proves the asserted form for words containing no $Z$ letters. [F1, given, algebra]

2.1 From $\pi^2=1$ and $\pi Z\pi=q^{-1}Z^{-1}$, conjugation gives $\pi Z^m\pi=q^{-m}Z^{-m}$ for every integer $m$, hence $\pi Z^m=q^{-m}Z^{-m}\pi$. In a generator word, move each lattice letter left across $\pi$ by this identity and across $T_i$ by $T_iZ^m=s_i(Z^m)T_i+(t-t^{-1})B_{i,m}(Z)$. Use lexicographic induction on (the number of $T_0,T_1$ letters, the number of out-of-order lattice/reflection pairs): a main term decreases the second coordinate, while a correction term is a finite Laurent sum with one fewer Hecke letter and decreases the first. After all lattice letters are on the left, move every $\pi$ right using $\pi T_0=T_1\pi$, $\pi T_1=T_0\pi$ and $\pi^2=1$; each move decreases the number of $\pi$-before-Hecke pairs. Finally apply step 1.1 to reduce the remaining Hecke words to alternating strings. The process terminates and gives the asserted spanning form. [F1, step 1.1, algebra] ∎
