---
id: thm-orthogonal-decomposition-by-a-closed-subspace
kind: theorem
title: Orthogonal decomposition by a closed subspace
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-projection-onto-a-nonempty-closed-convex-set, thm-hilbert-projection-variational-characterization, def-linear-subspace, def-orthogonality-and-orthogonal-complement, def-real-and-complex-inner-product-space, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Lemma 5.37, p.238"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Theorem 180"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Bruce Blackadar, Ilijas Farah and Asaf Karagila, Hilbert spaces without the Countable Axiom of Choice, Corollary 2.0.5"
      url: "https://eprints.whiterose.ac.uk/216587/1/Hilbert%20spaces%20without%20the.pdf"
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Countable Choice. Let $M$ be a closed linear subspace of a real or complex Hilbert space $H$. Then every $x\in H$ has a unique decomposition

$$x=m+n,\qquad m\in M,\quad n\in M^\perp ,$$

so that $H=M\oplus M^\perp$ as a direct sum of the subspace $M$ and its orthogonal complement.

## Facts & Assumptions

[A1] A linear subspace is convex and contains $0$, and the nearest point of a nonempty closed convex subset of a Hilbert space exists and is unique ([[def-linear-subspace]], [[thm-projection-onto-a-nonempty-closed-convex-set]]).

[A2] A point $p$ is the nearest point of a closed convex set $C$ to $x$ exactly when $\operatorname{Re}\langle x-p,y-p\rangle\le0$ for every $y\in C$ ([[thm-hilbert-projection-variational-characterization]]).

[A3] The pairing is linear in the first argument and conjugate-linear in the second, $S^\perp=\{v:\langle v,s\rangle=0\ \forall s\in S\}$ is a linear subspace, and $v\in S^\perp\cap S^{\perp\perp}$ with $\langle v,v\rangle=0$ forces $v=0$ ([[def-orthogonality-and-orthogonal-complement]], [[def-real-and-complex-inner-product-space]]).

[A4] Countable Choice is the selection principle consumed by the nearest-point theorem ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Countable Choice, a Hilbert space $H$, a closed linear subspace $M\subseteq H$ and a vector $x\in H$.

1.1 Since $M$ is a nonempty closed convex set, $x$ has a unique nearest point $p$ in $M$. [A1, A4]

2.1 The variational inequality gives $\operatorname{Re}\langle x-p,w-p\rangle\le0$ for every $w\in M$. For $u\in M$, take $w=p+u$ and $w=p-u$ to obtain $\operatorname{Re}\langle x-p,u\rangle=0$. Over $\mathbb R$ the pairing is real-valued, so this already gives $\langle x-p,u\rangle=0$. Over $\mathbb C$, also $iu\in M$, and the same real-part conclusion applied to $iu$ gives $0=\operatorname{Re}\langle x-p,iu\rangle=\operatorname{Re}(-i\langle x-p,u\rangle)=\operatorname{Im}\langle x-p,u\rangle$. Thus in either scalar field $\langle x-p,u\rangle=0$ for every $u\in M$, that is $x-p\in M^\perp$. [step 1.1, A1, A2, A3, algebra]

3.1 Setting $m=p$ and $n=x-p$ gives a decomposition $x=m+n$ with $m\in M$ and $n\in M^\perp$. [step 2.1, A3]

4.1 If $x=m_1+n_1=m_2+n_2$ are two such decompositions, then $v=m_1-m_2=n_2-n_1$ lies in $M\cap M^\perp$, since both $M$ and $M^\perp$ are linear subspaces, so $\langle v,v\rangle=0$ and $v=0$; hence $m_1=m_2$, $n_1=n_2$, and the decomposition is unique. [step 3.1, A3, algebra] ∎
