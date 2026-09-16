---
id: lem-only-countably-many-fourier-coefficients-are-nonzero
kind: lemma
title: Only countably many coefficients of a square-summable family are nonzero
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-square-summable-family-on-an-arbitrary-index-set, thm-bessel-inequality-for-an-arbitrary-orthonormal-family, thm-countable-union-of-countable, def-countable-choice, cor-archimedean-reciprocal, lem-subset-of-countable, def-countable, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, p.48, threshold argument after (2.4)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, printed pp.72–80"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

1. If $a=(a_i)_{i\in I}\in\ell^2(I,\mathbb F)$
   ([[def-square-summable-family-on-an-arbitrary-index-set]]), then its support
   $$\{i\in I : a_i\ne0\}$$
   is at most countable ([[def-countable]]).
2. If $(e_i)_{i\in I}$ is an orthonormal family in a real or complex
   inner-product space $H$ and $x\in H$, then the set
   $\{i\in I : \langle x,e_i\rangle\ne0\}$ of nonzero coefficients of $x$ is at
   most countable.

**The hypothesis is not decoration.** The countable-union step below selects one
surjection of $\mathbb{N}$ onto each of the countable sets in a countable
family, which is exactly the Axiom of Countable Choice; the threshold sets
themselves and their finiteness are ZF.

## Facts & Assumptions

[A1] $\ell^2(I,\mathbb F)$ consists of the families with finite square sum $S=\sum_{i\in I}|a_i|^2$, the sum being the supremum of the finite subsums; if $S<+\infty$ then for every real $\varepsilon>0$ there is a finite tail-control set $F$ with $\sum_{i\in I\setminus F}|a_i|^2<\varepsilon$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

[A2] For every real $\varepsilon>0$ there is a natural $m\ge1$ with $1/m<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[A3] A subset of an at most countable set is at most countable, and finite sets are at most countable ([[lem-subset-of-countable]], [[def-countable]]).

[A4] Under the Axiom of Countable Choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]]).

[A5] For $x\in H$ and an orthonormal family $(e_i)_{i\in I}$, the square sum $\sum_{i\in I}|\langle x,e_i\rangle|^2$ is finite ([[thm-bessel-inequality-for-an-arbitrary-orthonormal-family]]).

[A6] A family belongs to $\ell^2$ exactly when its square sum is finite ([[def-square-summable-family-on-an-arbitrary-index-set]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, and first a family $a\in\ell^2(I,\mathbb F)$ with $S=\sum_{i\in I}|a_i|^2<+\infty$; for the second claim an orthonormal family $(e_i)_{i\in I}$ in $H$ and $x\in H$.

1.1 For each natural $m\ge1$ put $A_m:=\{i\in I : |a_i|\ge 1/m\}$. Since $S$ is finite, choose a finite tail-control set $F_m\subseteq I$ with $\sum_{i\in I\setminus F_m}|a_i|^2<1/m^2$; then $A_m\subseteq F_m$, because $i\notin F_m$ would give $1/m^2\le|a_i|^2\le\sum_{j\in I\setminus F_m}|a_j|^2<1/m^2$, a contradiction. [A1, algebra]

2.1 Each $A_m$ is a subset of the finite set $F_m$, hence is at most countable, and the support of $a$ satisfies $\{i : a_i\ne0\}=\bigcup_{m\ge1}A_m$: if $a_i\ne0$ then $|a_i|>0$ and [A2] provides $m\ge1$ with $1/m<|a_i|$, that is $i\in A_m$; the reverse inclusion is immediate from the definition of $A_m$. [step 1.1, A2, A3]

3.1 The union $\{i : a_i\ne0\}=\bigcup_{m\ge1}A_m$ is a countable union of at most countable sets, indexed by the natural numbers $m\ge1$, so it is at most countable by [A4]; this proves the first claim. [step 2.1, A4]

4.1 For the second claim, apply the Bessel inequality to the coefficient family of $x$: its square sum is finite, so that family lies in $\ell^2(I,\mathbb F)$ by [A6], and the first claim now shows that the set of indices with $\langle x,e_i\rangle\ne0$ is at most countable. [step 3.1, A5, A6] ∎
