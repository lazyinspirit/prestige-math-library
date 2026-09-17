---
id: thm-hilbert-space-fourier-expansion
kind: theorem
title: Fourier expansion in a Hilbert space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-parseval-equivalences-for-a-complete-orthonormal-family, lem-only-countably-many-fourier-coefficients-are-nonzero, def-countable-choice, lem-finite-bessel-inequality, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-cauchy-schwarz-in-an-inner-product-space, def-square-summable-family-on-an-arbitrary-index-set, lem-countable-iff-surjection-from-n, lem-reverse-triangle-inequality-in-a-normed-space, lem-pythagorean-theorem-and-finite-orthogonal-sums]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §2.1, pp.49–50, Theorem 2.2"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, printed pp.72–80"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$(e_i)_{i\in I}$ be a complete orthonormal family in a real or complex Hilbert
space $H$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]) and
let $x\in H$, with partial sums
$P_Fx=\sum_{i\in F}\langle x,e_i\rangle e_i$ over finite $F\subseteq I$. Then:

1. $x$ is the norm limit of the finite-subset net $(P_Fx)$, that is
   $$x=\sum_{i\in I}\langle x,e_i\rangle e_i$$
   in the sense of convergence of the net of finite subsums;
2. **the coefficients are unique**: if $(a_i)_{i\in I}$ is a family in
   $\mathbb F$ whose finite-subset net $\sum_{i\in F}a_ie_i$ converges to $x$,
   then $a_i=\langle x,e_i\rangle$ for every $i\in I$;
3. the support $\{i : \langle x,e_i\rangle\ne0\}$ is at most countable, and the
   expansion does not depend on an ordering: if $(i_k)_{k\in\mathbb N}$ is a
   sequence of pairwise distinct elements of $I$ whose image contains the
   support, then the sequence of partial sums
   $\sum_{k<n}\langle x,e_{i_k}\rangle e_{i_k}$ also converges to $x$.

Claim 3 is the sense in which the expansion is **unconditional**: the sum is
independent of any ordering, because the finite-subset net converges and any
enumeration of a set containing the support by pairwise distinct indices is
cofinal in the squared mass.

## Facts & Assumptions

[A1] For a complete orthonormal family, the finite-subset net $(P_Fx)$ converges to $x$ for every $x$, since completeness is equivalent to net convergence ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

[A2] If $z_F\to z$ in $H$ then $\langle z_F,v\rangle\to\langle z,v\rangle$ for every $v\in H$, because $|\langle z_F-z,v\rangle|\le\|z_F-z\|\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A3] The support of the coefficient family is at most countable ([[lem-only-countably-many-fourier-coefficients-are-nonzero]], [[def-countable-choice]]).

[A5] For every finite $F\subseteq I$, $\|x-P_Fx\|^2=\sum_{i\in I\setminus F}|\langle x,e_i\rangle|^2$, and if $F\subseteq G$ then $\|P_Gx-P_Fx\|^2=\sum_{i\in G\setminus F}|\langle x,e_i\rangle|^2$ ([[lem-finite-bessel-inequality]], [[lem-pythagorean-theorem-and-finite-orthogonal-sums]]).

[A6] If $\sum_{i\in I}|a_i|^2<+\infty$ then for every real $\varepsilon>0$ there is a finite $F\subseteq I$ with $\sum_{i\in I\setminus F}|a_i|^2<\varepsilon$ ([[def-square-summable-family-on-an-arbitrary-index-set]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a complete orthonormal family $(e_i)_{i\in I}$ in $H$, a vector $x\in H$, and the coefficients $a_i:=\langle x,e_i\rangle$.

1.1 By completeness the finite-subset net $(P_Fx)$ converges to $x$, which is claim 1. [A1]

1.2 For claim 2, let $(b_i)_{i\in I}$ be a family whose finite-subset net $Q_F:=\sum_{i\in F}b_ie_i$ converges to $x$. Fix $j\in I$; for every finite $F\ni j$ the orthonormality gives $\langle Q_F,e_j\rangle=b_j$, and $Q_F\to x$ implies $\langle Q_F,e_j\rangle\to\langle x,e_j\rangle$, so the constant net of values $b_j$ converges to $\langle x,e_j\rangle$, that is $b_j=\langle x,e_j\rangle$. [A2]

1.3 The support of $(a_i)$ is at most countable by the support lemma. [A3]

2.1 For claim 3, let $(i_k)_{k\in\mathbb N}$ be a sequence of pairwise distinct elements of $I$ whose image contains the support $S$ of $(a_i)$, let $E_n:=\{i_k:k<n\}$ and put $s_n:=\sum_{k<n}a_{i_k}e_{i_k}=P_{E_n}x$, so each $E_n$ is a finite set of $n$ distinct indices. Given a real $\varepsilon>0$, [A5] with $F=\varnothing$ gives $\sum_{i\in I}|a_i|^2=\|x\|^2<+\infty$, so [A6] supplies a finite $F_0\subseteq I$ with $\sum_{i\in I\setminus F_0}|a_i|^2<\varepsilon^2$; since every element of the finite set $F_0\cap S$ occurs among the $i_k$, choose $n_0$ with $F_0\cap S\subseteq E_{n_0}$. For $n\ge n_0$ we have $F_0\cap S\subseteq E_n$, and since $a_i=0$ off $S$, an index outside $E_n$ is either not in $S$ or a support index outside $E_n$, hence in either case outside $F_0$; therefore $\sum_{i\in I\setminus E_n}|a_i|^2\le\sum_{i\in I\setminus F_0}|a_i|^2<\varepsilon^2$, and [A5] gives $\|x-s_n\|^2=\|x-P_{E_n}x\|^2=\sum_{i\in I\setminus E_n}|a_i|^2<\varepsilon^2$. Hence $\|x-s_n\|<\varepsilon$ for every $n\ge n_0$, that is, $s_n\to x$. [step 1.3, A5, A6]

3.1 Claims 1, 2 and 3 are established by steps 1.1, 1.2 and 2.1, so a complete orthonormal family expands every vector uniquely and unconditionally in norm. [step 1.1, step 1.2, step 2.1] ∎
