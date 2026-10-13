---
id: lem-nrqm-oscillator-diagonal-eigenspaces
aliases: [nrqm-oscillator-diagonal-eigenspaces]
kind: lemma
domain: mathematics
title: "Eigenspaces of the diagonal operator"
status: published
origin: pipeline
dependency_level: 1
deps: [lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-hilbert-space, def-countable-choice]
dependency_roles:
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §2.4 pp. 73-74 (eigenvalues, eigenspaces and the multiplication-operator example)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', §1 pp. 1-9 (non-degeneracy of the oscillator ground state and the ladder spectrum)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a complex Hilbert space ([[def-hilbert-space]]), let $(e_n)_{n\in\mathbb N}$ be a complete orthonormal family of $H$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]), let $(\lambda_n)_{n\in\mathbb N}\subseteq\mathbb R$, and let $A$ be the self-adjoint diagonal operator of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]]:
$$D(A)=\Bigl\{x\in H:\sum_n\lambda_n^2|\langle x,e_n\rangle|^2<\infty\Bigr\},\qquad Ax=\sum_n\lambda_n\langle x,e_n\rangle e_n .$$
Then:

(a) for every $\lambda\in\mathbb R$ the eigenspace of $A$ at $\lambda$ is the closed linear span of the basis vectors carrying the eigenvalue $\lambda$:
$$\ker(A-\lambda I)=\overline{\operatorname{span}}\{e_n:\lambda_n=\lambda\};$$
in particular $\lambda$ is an eigenvalue of $A$ exactly when $\lambda=\lambda_n$ for some $n$;

(b) if $\lambda_m\ne\lambda_n$ whenever $m\ne n$, then $\ker(A-\lambda_nI)=\mathbb Ce_n$ for every $n$: every eigenspace is one-dimensional with eigenvector $e_n$, the eigenspaces are pairwise orthogonal, and every nonzero eigenvector of $A$ is a nonzero multiple of some $e_n$;

(c) in the situation of (b) the linear span of all eigenspaces of $A$ is $\operatorname{span}\{e_n:n\in\mathbb N\}$, which is dense in $H$.

## Facts & Assumptions

**Given:** a complex Hilbert space $H$; a complete orthonormal family $(e_n)_{n\in\mathbb N}$ of $H$; real numbers $\lambda_n$; the diagonal operator $A$ displayed in the Statement; a real number $\lambda$.

[F1] $D(A)$ and $A$ are as displayed, $A$ is self-adjoint, $Ae_n=\lambda_ne_n$ for every $n$, and the algebraic span $D_0=\operatorname{span}\{e_n:n\in\mathbb N\}$ is a core for $A$ ([[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] clauses (b), (d), (e)).

[F2] $\langle e_i,e_j\rangle=\delta_{ij}$; a series $\sum_na_ne_n$ converges in $H$ exactly when $\sum_n|a_n|^2<\infty$, and then $\bigl\|\sum_na_ne_n\bigr\|^2=\sum_n|a_n|^2$; every $x\in H$ satisfies $x=\sum_n\langle x,e_n\rangle e_n$ and $\sum_n|\langle x,e_n\rangle|^2=\|x\|^2$; and the coefficients of a convergent expansion in the family are unique ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]]).

## Proof

**Given:** the Hilbert space $H$, the complete orthonormal family $(e_n)$, the real numbers $\lambda_n$, the diagonal operator $A$ of [F1], and a real number $\lambda$.

1.1 [One inclusion] Let $x\in D(A)$ with coefficients $c_n=\langle x,e_n\rangle$ satisfy $Ax=\lambda x$. By [F1] both series $\sum_n\lambda_nc_ne_n$ and $\sum_n\lambda c_ne_n$ converge, so their difference $\sum_n(\lambda_n-\lambda)c_ne_n=0$ converges; its coefficients in the orthonormal family are $(\lambda_n-\lambda)c_n$, and by the uniqueness of coefficients in [F2] all of them vanish. Hence $c_n=0$ whenever $\lambda_n\ne\lambda$, so $x=\sum_{n:\lambda_n=\lambda}c_ne_n$ lies in the closed linear span of $\{e_n:\lambda_n=\lambda\}$. [given, F1, F2]

1.2 [The converse inclusion] Conversely let $I:=\{n:\lambda_n=\lambda\}$ and let $x=\sum_{n\in I}c_ne_n$ be an element of the closed linear span of $\{e_n:n\in I\}$, so that $\sum_{n\in I}|c_n|^2<\infty$ and the series converges by [F2]. Then $\sum_n\lambda_n^2|\langle x,e_n\rangle|^2=\sum_{n\in I}\lambda^2|c_n|^2<\infty$, so $x\in D(A)$ by [F1], and $Ax=\sum_{n\in I}\lambda c_ne_n=\lambda x$. [given, F1, F2, algebra]

2.1 [Clause (a)] Steps 1.1 and 1.2 give $\ker(A-\lambda I)=\overline{\operatorname{span}}\{e_n:\lambda_n=\lambda\}$ for every real $\lambda$, and this span is nonzero exactly when $\lambda\in\{\lambda_n:n\in\mathbb N\}$ because $e_n\ne0$. [step 1.1, step 1.2, given]

3.1 [Clause (b)] Assume the $\lambda_n$ are pairwise distinct and let $\lambda=\lambda_k$. Then $\{n:\lambda_n=\lambda\}=\{k\}$, so step 2.1 gives $\ker(A-\lambda_kI)=\mathbb Ce_k$; every such eigenspace is one-dimensional with eigenvector $e_k\ne0$, and distinct eigenspaces are orthogonal because $\langle e_m,e_k\rangle=0$ for $m\ne k$ by [F2]. If $x\ne0$ satisfies $Ax=\lambda x$, then $\lambda=\lambda_k$ for some $k$ by step 2.1 and $x\in\mathbb Ce_k$; conversely every nonzero multiple of $e_k$ is an eigenvector by [F1]. [step 2.1, F1, F2]

4.1 [Clause (c)] The span of the union of the eigenspaces contains every $e_n$, hence contains $D_0=\operatorname{span}\{e_n\}$, which is dense in $H$ by [F1]; therefore the span of the eigenspaces is dense. [step 3.1, F1] ∎
