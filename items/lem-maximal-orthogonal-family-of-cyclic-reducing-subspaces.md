---
id: lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces
kind: lemma
title: Maximal orthogonal family of cyclic reducing subspaces
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cyclic-vector-and-cyclic-normal-operator, thm-orthogonal-decomposition-by-a-closed-subspace, thm-zorn, def-orthogonality-and-orthogonal-complement, def-hilbert-orthogonal-projection, def-self-adjoint-positive-unitary-and-normal-operator, def-separable-space, def-dense-top, def-hilbert-space, def-complete-metric-space, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Theorem 5.82 and §5.7, printed pp.293–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Chapter IX §10, printed pp.293–297"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
---

## Statement

Assume AC. Let $T$ be a bounded normal operator on a nonzero complex Hilbert
space $H$. Then:

1. there is a family $(H_j)_{j\in J}$ of pairwise orthogonal nonzero closed
   subspaces of $H$, each reducing $T$ and cyclic for $T|_{H_j}$, whose Hilbert
   sum is all of $H$: the closed span of $\bigcup_jH_j$ equals $H$;
2. if in addition $H$ is separable and $(v_n)$ is a dense sequence in $H$, then
   the orthogonal complements of the partial sums produce a finite or countable
   family $(H_n)$ with the same properties, $H=\bigoplus_nH_n$, where each
   $H_n$ is the cyclic subspace of the orthogonal projection of $v_n$ onto the
   orthogonal complement of $H_1\oplus\dots\oplus H_{n-1}$, and $H_n=\{0\}$ is
   allowed.

## Facts & Assumptions

[A1] A closed subspace $M\subseteq H$ **reduces** $T$ when it is invariant under $T$ and $T^*$; then $T|_M$ is again a bounded normal operator, and for every vector $y\in M$ the cyclic subspace $H_y$ of $T|_M$ is a closed $T|_M$-reducing subspace of $M$ containing $y$, hence a closed $T$-reducing subspace of $H$ ([[def-cyclic-vector-and-cyclic-normal-operator]]).

[A2] If $M$ reduces $T$, then $M^\perp$ reduces $T$: for $y\in M^\perp$ and $m\in M$ one has $\langle Ty,m\rangle=\langle y,T^*m\rangle=0$ and $\langle T^*y,m\rangle=\langle y,Tm\rangle=0$, since $T^*M\subseteq M$ and $TM\subseteq M$ ([[def-orthogonality-and-orthogonal-complement]], [[def-hilbert-orthogonal-projection]]).

[A3] Orthogonal decompositions: for a closed subspace $M$ one has $H=M\oplus M^\perp$, and the orthogonal complement of a closed subspace is closed; a vector orthogonal to a closed subspace $N$ lies in $N^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-orthogonality-and-orthogonal-complement]]).

[A4] Zorn's lemma: a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]], [[def-axiom-of-choice]]).

[A5] A subset of a Hilbert space is dense exactly when every vector orthogonal to it is zero, and a closed subspace containing a dense subset of $H$ is $H$ ([[def-orthogonality-and-orthogonal-complement]], [[def-dense-top]], [[def-hilbert-space]]).

[A6] Separability means the existence of an at most countable dense subset, and every vector of $H$ splits as the sum of its components along a closed subspace and its orthogonal complement; the sum of a countable family of pairwise orthogonal closed subspaces is closed ([[def-separable-space]], [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-complete-metric-space]]).

[A7] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded normal operator $T\in\mathcal B(H)$; in the separable case also a dense sequence $(v_n)$.

1.1 Every chain in the poset $\mathcal P$ of families $\{M_j\}_{j\in J}$ of pairwise orthogonal nonzero closed $T$-reducing subspaces, cyclic for $T|_{M_j}$, ordered by inclusion, has an upper bound: the union of the chain is again such a family, because any two of its members lie in a common family of the chain and are therefore orthogonal, and each is reducing and cyclic by membership. [A1, A4]

1.2 Separable construction: put $K_1:=H$, let $x_1$ be the orthogonal projection of $v_1$ onto $K_1=H$, that is $x_1=v_1$, and let $H_1$ be the cyclic subspace of $x_1$ for $T$; having defined closed reducing subspaces $H_1,\dots,H_{n-1}$, put $K_n:=(H_1\oplus\dots\oplus H_{n-1})^\perp$, which reduces $T$, let $x_n$ be the orthogonal projection of $v_n$ onto $K_n$, and let $H_n$ be the cyclic subspace of $x_n$ for $T|_{K_n}$, which is closed, reducing and contained in $K_n$. [A1, A2, A3, A6]

2.1 By Zorn's lemma $\mathcal P$ has a maximal element $(H_j)_{j\in J}$; its members are pairwise orthogonal, nonzero, $T$-reducing and cyclic for the restrictions. [step 1.1, A4]

2.2 The family $(H_n)$ is pairwise orthogonal and every $H_n$ reduces $T$ and is cyclic for the restriction, by construction and by the preceding paragraph; the nonzero members form a pairwise orthogonal family of cyclic reducing subspaces. [step 1.2, A1]

2.3 Spanning in the separable case: each $v_n$ splits as $v_n=p_n+x_n$ with $p_n\in H_1\oplus\dots\oplus H_{n-1}$ and $x_n\in K_n$, and $x_n\in H_n$ because $H_n$ is the closed span of $\{f(T|_{K_n})x_n\}$ and contains $x_n$; hence $v_n\in H_1\oplus\dots\oplus H_n$ for every $n$, so the closed sum $\bigoplus_nH_n$ contains the dense sequence $(v_n)$ and therefore equals $H$. [step 1.2, A5, A6]

3.1 Maximality forces $K:=(\operatorname{span}\bigcup_jH_j)^\perp=\{0\}$: $K$ is the orthogonal complement of the closed span of a family of cyclic reducing subspaces, hence closed and $T$-reducing; if $y\in K$ is nonzero, its cyclic subspace $M:=H_y$ computed inside $K$ is a nonzero closed $T|_{K}$-reducing subspace of $K$, hence $T$-reducing and orthogonal to every $H_j$, and it is cyclic for $T|_M$, so $(H_j)_{j\in J}\cup\{M\}$ is a strictly larger element of $\mathcal P$, contradicting maximality. [step 2.1, A1, A2, A3]

4.1 Hence no nonzero vector is orthogonal to the closed span of $\bigcup_jH_j$, so that closed span is dense; being closed it equals $H$, which is the first assertion. [step 3.1, A3, A5]

5.1 The separable construction therefore yields a finite or countable family $(H_n)$ of pairwise orthogonal cyclic reducing subspaces with $H=\bigoplus_nH_n$, as claimed. [step 2.2, step 2.3, A7] ∎
