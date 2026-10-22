---
id: lem-ip-tv-l2-cutoff-approximation
kind: lemma
title: Compactly supported BV cutoffs for finite-variation L² functions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-tv-functional-on-l2-distributional-variation
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-tv-l2-finite-variation-has-radon-derivative
  - lem-smooth-bump-between-concentric-euclidean-balls
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems, §1.1"
      url: "https://arxiv.org/pdf/1711.06495"
      locator: "§1.1, full-plane L² TV and cutoff approximation"
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6, §7.4"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
      locator: "§7.4, distributional product rule and variation estimate"
---

## Statement

Assume Countable Choice. If $u\in L^2(\mathbb R^2;\mathbb R)$ and $TV_2(u;\mathbb R^2)<\infty$, there exist smooth cutoffs $\chi_k$ with $0\le\chi_k\le1$, $\chi_k=1$ on $B(0,k)$, support in $B(0,2k)$, and $\sup_{k\ge1}k\|\nabla\chi_k\|_\infty<\infty$. For every family satisfying these four conditions, $v_k:=\chi_ku$ belongs to $BV(\mathbb R^2)\cap L^1(\mathbb R^2)$, has support in $B(0,2k)$, converges to $u$ in $L^2(\mathbb R^2)$, and
$$\limsup_{k\to\infty}TV(v_k;\mathbb R^2)\le TV_2(u;\mathbb R^2).$$

## Statement references

[[def-ip-tv-functional-on-l2-distributional-variation|Finite L² TV is the global mass of the distributional derivative.]]

[[lem-ip-tv-l2-finite-variation-has-radon-derivative|Finite L² distributional variation is represented by a finite vector Radon measure.]]

## Facts & Assumptions

**Given:** Countable Choice and $u\in L^2(\mathbb R^2;\mathbb R)$ with finite $TV_2(u;\mathbb R^2)$.

[A1] Countable Choice is the axiom used to obtain the finite Radon derivative from the test-field bound. ([[def-countable-choice]])

[F1] [[def-ip-tv-functional-on-l2-distributional-variation]] and [[lem-ip-tv-l2-finite-variation-has-radon-derivative]]: $Du$ is a finite vector Radon measure and $|Du|(\mathbb R^2)=TV_2(u;\mathbb R^2)$.

[F2] [[lem-smooth-bump-between-concentric-euclidean-balls]]: a smooth cutoff exists that equals one on the unit ball and is supported in the ball of radius two; rescaling by $R$ bounds its gradient by a fixed constant times $R^{-1}$.

## Proof

1.1 By [F2], choose $\chi\in C_c^\infty(\mathbb R^2)$ with $0\le\chi\le1$, $\chi=1$ on $B(0,1)$, $\operatorname{supp}\chi\subset B(0,2)$, and let $\chi_R(x)=\chi(x/R)$ for integers $R\ge1$. This proves existence of a family with $\sup_R R\|\nabla\chi_R\|_\infty<\infty$. Now fix any family satisfying all four conditions in the statement, write $C=\sup_R R\|\nabla\chi_R\|_\infty$, and put $v_R=\chi_Ru$. Then $v_R\in L^2$ has compact support, hence is in $L^1$, and $v_R\to u$ in $L^2$ because $\chi_R=1$ on $B(0,R)$ and $u\in L^2$. [A1, F2, given, choose, construct]

2.1 For every scalar $\psi\in C_c^\infty(\mathbb R^2)$, local integrability of $u$ and the definition of distributional derivative give $$-\int \chi_Ru\,\partial_i\psi=-\int u\,\partial_i(\chi_R\psi)+\int u\psi\,\partial_i\chi_R=\int\chi_R\psi\,dD_i u+\int u\psi\,\partial_i\chi_R.$$ Thus $D v_R=\chi_RDu+u\nabla\chi_R\,dx$. The variation of the first term is at most $|Du|(\mathbb R^2)$, and the second has variation at most $$\frac CR\int_{B(0,2R)\setminus B(0,R)}|u|\,dx\le C'\|u\|_{L^2(\mathbb R^2\setminus B(0,R))},$$ by Cauchy–Schwarz and the annulus area bound $|B(0,2R)\setminus B(0,R)|^{1/2}\le C''R$. This error tends to zero. Since $v_R\in L^1$ and its derivative is a finite vector Radon measure, $v_R\in BV(\mathbb R^2)$, and [F1] yields $\limsup_R TV(v_R;\mathbb R^2)\le |Du|(\mathbb R^2)=TV_2(u;\mathbb R^2)$. The estimate applies to the arbitrary controlled family fixed in step 1.1 and proves the statement. [A1, F1, step 1.1, algebra] ∎
