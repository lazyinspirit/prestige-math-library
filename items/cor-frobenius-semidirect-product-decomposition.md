---
id: cor-frobenius-semidirect-product-decomposition
kind: corollary
title: "Frobenius semidirect product decomposition"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-frobenius-kernel-theorem, lem-frobenius-kernel-cardinality, def-frobenius-kernel-set, def-internal-semidirect-product, def-normal-subgroup, thm-lagrange, lem-product-with-normal-subgroup, thm-second-isomorphism-theorem-groups, def-subgroup]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite Frobenius group with complement $H$ and kernel set
$N=\big(G\setminus\bigcup_{x\in G}xHx^{-1}\big)\cup\{1\}$. Then $G$ is the
internal semidirect product $G=N\rtimes H$, that is $N\mathrel{\trianglelefteq}G$,
$G=NH$ and $N\cap H=\{1\}$; moreover $|N|=[G:H]$, and $N$ is the unique normal
subgroup $M\mathrel{\trianglelefteq}G$ with $MH=G$ and $M\cap H=\{1\}$.

## Facts & Assumptions

**Given:** A finite group $G$ with Frobenius complement $\{1\}<H<G$, and the kernel set $N$ of [[def-frobenius-kernel-set]].

[F1] $N\mathrel{\trianglelefteq}G$ ([[thm-frobenius-kernel-theorem]]).

[F2] $|N|=[G:H]$ and $N\cap H=\{1\}$ ([[lem-frobenius-kernel-cardinality]]).

[F3] $N$ consists of $1$ and the elements lying in no conjugate of $H$ ([[def-frobenius-kernel-set]]).

[F4] If $H\le G$ and $N\mathrel{\trianglelefteq}G$ then $HN$ is a subgroup of $G$ ([[lem-product-with-normal-subgroup]]).

[F5] If $N\mathrel{\trianglelefteq}G$ and $H\le G$ then $H/(H\cap N)\cong HN/N$, hence $|HN|\,|H\cap N|=|H|\,|N|$ ([[thm-second-isomorphism-theorem-groups]], [[thm-lagrange]]).

[F6] $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[F7] $G$ is the internal semidirect product of $N$ by $H$ exactly when $N\mathrel{\trianglelefteq}G$, $G=NH$ and $N\cap H=\{1\}$ ([[def-internal-semidirect-product]]).

[F8] If $M\mathrel{\trianglelefteq}G$ then $xMx^{-1}=M$ for every $x\in G$, so $M\cap xHx^{-1}=x\bigl(x^{-1}Mx\cap H\bigr)x^{-1}=x(M\cap H)x^{-1}$ ([[def-normal-subgroup]]).

[F9] If $M\mathrel{\trianglelefteq}G$, $MH=G$ and $M\cap H=\{1\}$ then every $g\in G$ has a unique expression $g=mh$ with $m\in M$, $h\in H$: from $mh=m'h'$ one gets $m'^{-1}m=h'h^{-1}\in M\cap H=\{1\}$ ([[def-subgroup]]).



## Proof

**Proof technique:** direct.

1.1 $NH$ is a subgroup of $G$, since $N\mathrel{\trianglelefteq}G$ and $H\le G$; its order satisfies $|NH|\,|N\cap H|=|N|\,|H|$ by the second isomorphism theorem together with Lagrange. [F1, F4, F5]

1.2 For uniqueness, let $M\mathrel{\trianglelefteq}G$ satisfy $MH=G$ and $M\cap H=\{1\}$. By [F8], $M\cap xHx^{-1}=x(M\cap H)x^{-1}=\{1\}$ for every $x\in G$, so no nonidentity element of $M$ lies in a conjugate of $H$; hence $M\subseteq N$ by the description [F3] of $N$. [F3, F8, assume-hyp]

2.1 Since $N\cap H=\{1\}$, step 1.1 gives $|NH|=|N|\,|H|=[G:H]\,|H|=|G|$ by [F2] and [F6]; as $NH\subseteq G$ is a subgroup with as many elements as $G$, it equals $G$. [F2, F6, step 1.1, algebra]

3.1 Together with $N\mathrel{\trianglelefteq}G$ of [F1] and $N\cap H=\{1\}$ of [F2], step 2.1 exhibits $G$ as the internal semidirect product $N\rtimes H$ in the sense of [F7], and $|N|=[G:H]$ is [F2]. [F1, F2, F7, step 2.1]

4.1 Since $M\cap H=\{1\}$ and $MH=G$, the uniqueness of the expression $g=mh$ of [F9] applies with $M$ in place of $N$ and gives $|G|=|M|\,|H|$, so $|M|=|G|/|H|=[G:H]=|N|$ by [F2] and [F6]; with $M\subseteq N$ from step 1.2 this forces $M=N$. ∎ [F2, F6, F9, step 1.2, algebra]
