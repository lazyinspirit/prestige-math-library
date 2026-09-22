---
id: lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces
kind: lemma
title: Maximal orthogonal family of cyclic reducing subspaces
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cyclic-vector-and-cyclic-normal-operator, thm-orthogonal-decomposition-by-a-closed-subspace, thm-zorn, def-orthogonality-and-orthogonal-complement, def-hilbert-orthogonal-projection, def-self-adjoint-positive-unitary-and-normal-operator, def-separable-space, def-dense-top, def-hilbert-space, def-complete-metric-space, def-axiom-of-choice, def-hilbert-space-adjoint, lem-orthogonal-complement-is-closed, lem-orthogonal-projection-is-linear-self-adjoint-contractive, thm-double-orthogonal-complement-is-closure, thm-bounded-linear-operator-equivalences, thm-hilbert-adjoint-properties]
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
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $T$ be a bounded normal operator on a nonzero complex Hilbert
space $H$. Then:

1. there is a family $(H_j)_{j\in J}$ of pairwise orthogonal nonzero closed
   subspaces of $H$, each reducing $T$ and cyclic for $T|_{H_j}$, whose Hilbert
   sum is all of $H$: the closed span of $\bigcup_jH_j$ equals $H$;
2. if in addition $H$ is separable and $(v_n)_{n\ge0}$ is a dense sequence in $H$, put $S_n=H_0\oplus\cdots\oplus H_{n-1}$ with $S_0=\{0\}$. Project $v_n$ onto $S_n^\perp$ to obtain $x_n$, and take $H_n$ to be its cyclic subspace for the original operator $T$ on $H$. The $H_n$ are closed and reducing, zero summands are allowed, and the nonzero summands are cyclic for their restrictions. Their closed span is $H$, denoted $H=\bigoplus_{n\ge0}H_n$. After discarding zero summands this is a finite or countable family with the properties in claim 1.

## Facts & Assumptions

[A1] A closed subspace reduces $T$ if it is invariant under $T$ and $T^*$. For every $y\in H$ the ambient cyclic subspace $H_y$ is closed, reducing and contains $y$; it is the closed span of the unital polynomial orbit in $T,T^*$ ([[def-cyclic-vector-and-cyclic-normal-operator]]). If $y=0$ it is $\{0\}$. On a nonzero reducing subspace $M$, the restriction of $T^*$ is the adjoint of $T|_M$ by the defining pairing, so $T|_M$ is normal. A closed subspace is complete because Cauchy sequences converge in $H$ and their limits stay in the subspace. For nonzero $y$, restricting the same polynomial orbit to $H_y$ shows $y$ is cyclic for $T|_{H_y}$. No spectrum or calculus on a zero space is used. The adjoint pairing and involution are supplied by [[def-hilbert-space-adjoint]] and [[thm-hilbert-adjoint-properties]], and bounded operators are continuous by [[thm-bounded-linear-operator-equivalences]].

[A2] If $M$ reduces $T$, then $M^\perp$ reduces $T$: for $y\in M^\perp$ and $m\in M$ one has $\langle Ty,m\rangle=\langle y,T^*m\rangle=0$ and $\langle T^*y,m\rangle=\langle y,Tm\rangle=0$, since $T^*M\subseteq M$ and $TM\subseteq M$ ([[def-orthogonality-and-orthogonal-complement]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[A3] Orthogonal decompositions: for a closed subspace $M$ one has $H=M\oplus M^\perp$, and the orthogonal complement of a closed subspace is closed; a vector orthogonal to a closed subspace $N$ lies in $N^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[lem-orthogonal-complement-is-closed]], [[def-orthogonality-and-orthogonal-complement]]).

[A4] Zorn's lemma: a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]], [[def-axiom-of-choice]]).

[A5] If a closed linear subspace $L$ has $L^\perp=\{0\}$, then $H=L\oplus L^\perp=L$. Equivalently, double orthogonal complementation of any linear subspace gives its closure ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[thm-double-orthogonal-complement-is-closure]]). A closed set containing a dense subset is the whole space ([[def-dense-top]]).

[A6] Separability means existence of an at most countable dense subset ([[def-separable-space]]). Finite sums of pairwise orthogonal closed subspaces are closed: their orthogonal projections $P_j$ are bounded, are the identity on their own subspace and vanish on the others ([[def-hilbert-orthogonal-projection]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]). Thus $P=\sum_{j<n}P_j$ satisfies $P^2=P$ and has range $S=\sum_{j<n}H_j$, so $S=\ker(I-P)$. This kernel is closed: for $x\notin S$, a ball of radius $\|x-Px\|/(2(1+\|P\|))$ misses it, by $\|(I-P)(y-x)\|\le(1+\|P\|)\|y-x\|$. For $n=0$, $P=0$ and $S=\{0\}$. If each summand reduces $T$, their finite sum does too by linearity. No closedness of an infinite algebraic sum is asserted.

[A7] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A nonzero complex Hilbert space $H$ and a bounded normal operator $T\in\mathcal B(H)$; in the separable case also a dense sequence $(v_n)$.

1.1 Every chain in the poset $\mathcal P\subseteq\mathcal P(\mathcal P(H))$ of sets $\{M_j\}_{j\in J}$ of pairwise orthogonal nonzero closed $T$-reducing subspaces, cyclic for $T|_{M_j}$, ordered by inclusion, has an upper bound (the empty family belongs to this poset): the union of the chain is again such a family, because any two of its members lie in a common family of the chain and are therefore orthogonal, and each is reducing and cyclic by membership. [A1, A4]

1.2 Separable construction: start with $S_0=\{0\}$, $K_0=H$, $x_0=v_0$ and the ambient cyclic subspace $H_0=H_{x_0}$. Recursively, once $H_j$ for $j<n$ are defined, their finite orthogonal sum $S_n$ is closed and reducing by [A6]. Its orthogonal complement $K_n=S_n^\perp$ is closed and reducing by [A2, A3]. Let $x_n=P_{K_n}v_n$ and define $H_n=H_{x_n}$ using the original $T$ on $H$. Since $K_n$ is closed and invariant under $T,T^*$, the whole polynomial orbit of $x_n$ and its closure lie in $K_n$. Thus $H_n$ is closed, reducing and orthogonal to all earlier summands. If $x_n=0$, set $H_n=\{0\}$ with no restriction calculus. [A1, A2, A3, A6]

2.1 By Zorn's lemma $\mathcal P$ has a maximal element $(H_j)_{j\in J}$; its members are pairwise orthogonal, nonzero, $T$-reducing and cyclic for the restrictions. [step 1.1, A4]

2.2 The family $(H_n)$ is pairwise orthogonal and every $H_n$ reduces $T$ and each nonzero $H_n$ is cyclic for the restriction, by construction and by the preceding paragraph; the nonzero members form a pairwise orthogonal family of cyclic reducing subspaces. [step 1.2, A1]

2.3 Spanning in the separable case: each $v_n$ splits as $v_n=p_n+x_n$ with $p_n\in H_0\oplus\dots\oplus H_{n-1}$ and $x_n\in K_n$, and $x_n\in H_n$ by the ambient cyclic-subspace construction, including $x_n=0$; hence $v_n\in H_0\oplus\dots\oplus H_n$ for every $n$, so the closed sum $\bigoplus_nH_n$ contains the dense sequence $(v_n)$ and therefore equals $H$. [step 1.2, A5, A6]

3.1 Maximality forces $K:=(\operatorname{span}\bigcup_jH_j)^\perp=\{0\}$: $K$ is the orthogonal complement of the closed span of a family of cyclic reducing subspaces, hence closed and $T$-reducing: the algebraic span is invariant under $T,T^*$, its closure stays invariant by their continuity, and [A2] applies; if $y\in K$ is nonzero, its ambient cyclic subspace $M:=H_y$ is nonzero, closed and $T$-reducing, and lies in $K$ by invariance of $K$ under the polynomial orbit and orthogonal to every $H_j$, and it is cyclic for $T|_M$, so $(H_j)_{j\in J}\cup\{M\}$ is a strictly larger element of $\mathcal P$, contradicting maximality. [step 2.1, A1, A2, A3]

4.1 Hence no nonzero vector is orthogonal to the closed span of $\bigcup_jH_j$, so [A5] gives that this closed span equals $H$, which is the first assertion. [step 3.1, A3, A5]

5.1 The separable construction therefore yields a finite or countable family of nonzero members of $(H_n)_{n\ge0}$, consisting of pairwise orthogonal cyclic reducing subspaces with $H=\bigoplus_nH_n$, as claimed. [step 2.2, step 2.3, A7] ∎
