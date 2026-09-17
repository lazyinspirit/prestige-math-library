---
id: lem-weak-and-strong-additivity-of-orthogonal-projections
kind: lemma
title: Weak and strong additivity of orthogonal projections
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-projection-valued-measure, lem-orthogonal-projection-is-linear-self-adjoint-contractive, thm-cauchy-schwarz-in-an-inner-product-space, def-real-and-complex-inner-product-space, thm-hilbert-adjoint-properties, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Definition 5.72 and §5.6.1, printed pp.273–277"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Definition 5.1 and Lemma 5.3, pp.15–16"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume Countable Choice. Let $(X,\Sigma)$ be a measurable space, let $H$ be a
complex Hilbert space, and let $E:\Sigma\to\mathcal B(H)$ take values in
orthogonal projections and satisfy $E(\varnothing)=0$ and
$E(B\cap C)=E(B)E(C)$ for all $B,C\in\Sigma$. Then the following two properties
are equivalent:

1. **(weak countable additivity)** for every pairwise disjoint sequence
   $(B_n)_{n\in\mathbb N}$ in $\Sigma$ with union $B$ and all $x,y\in H$,
   $$\langle E(B)x,y\rangle=\sum_{n=1}^{\infty}\langle E(B_n)x,y\rangle ;$$
2. **(strong countable additivity)** for every such sequence and every $x\in H$,
   $$E(B)x=\sum_{n=1}^{\infty}E(B_n)x$$
   with the series converging in norm.

## Facts & Assumptions

[A1] An orthogonal projection value $P=E(B)$ satisfies $P^2=P=P^*$ and $\langle Px,x\rangle=\|Px\|^2\ge0$, and it is contractive, $\|Pu\|\le\|u\|$ for all $u$ ([[def-projection-valued-measure]], [[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[A2] The Hilbert adjoint satisfies $\langle Su,v\rangle=\langle u,S^*v\rangle$ for all $u,v$, and $\langle S^*u,v\rangle=\langle u,Sv\rangle$; for a self-adjoint $S$ the two pairings with $S$ coincide ([[thm-hilbert-adjoint-properties]]).

[A3] Multiplicativity on intersections and the empty-set value hold: $E(B\cap C)=E(B)E(C)$ and $E(\varnothing)=0$; if $C\subseteq B$ then $E(C)=E(B\cap C)=E(B)E(C)=E(C)E(B)$ ([[def-projection-valued-measure]]).

[A4] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\,\|v\|$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

[A5] The pairing is linear in the first argument and conjugate-linear in the second, and $\|u\|^2=\langle u,u\rangle$ ([[def-real-and-complex-inner-product-space]]).

[A6] Countable Choice is the declared standing hypothesis of this block of the page ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A measurable space $(X,\Sigma)$, a complex Hilbert space $H$, a map $E$ with orthogonal projection values, $E(\varnothing)=0$, $E(B\cap C)=E(B)E(C)$, a pairwise disjoint sequence $(B_n)$ in $\Sigma$ with union $B$, vectors $x,y\in H$, and partial sums $Q_N:=\sum_{n\le N}E(B_n)$.

1.1 Strong implies weak: for every $N$ the difference of the two sides of the weak identity is $\langle E(B)x-Q_Nx,y\rangle$, so by Cauchy–Schwarz $|\langle E(B)x,y\rangle-\sum_{n\le N}\langle E(B_n)x,y\rangle|\le\|E(B)x-Q_Nx\|\,\|y\|$, which tends to $0$ because $E(B)x-Q_Nx\to0$ in norm by hypothesis. [A1, A4, A5]

1.2 Weak implies strong: expanding $\|E(B)x-Q_Nx\|^2=\langle E(B)x-Q_Nx,E(B)x-Q_Nx\rangle$ and using $P^2=P=P^*$ for each projection value gives $\|E(B)x-Q_Nx\|^2=\langle E(B)x,x\rangle-2\sum_{n\le N}\langle E(B_n)x,x\rangle+\sum_{n,m\le N}\langle E(B_m\cap B_n)x,x\rangle$, because $\langle E(B)x,E(B)x\rangle=\langle E(B)^2x,x\rangle$, because $\langle E(B_n)x,E(B)x\rangle=\langle E(B)E(B_n)x,x\rangle$ with $B_n\subseteq B$, and because $\langle E(B_n)x,E(B_m)x\rangle=\langle E(B_m)E(B_n)x,x\rangle=\langle E(B_m\cap B_n)x,x\rangle$. [A1, A2, A3]

2.1 In the last sum the off-diagonal terms are $\langle E(\varnothing)x,x\rangle=0$ and the diagonal terms are $\langle E(B_n)x,x\rangle$, so $\|E(B)x-Q_Nx\|^2=\langle E(B)x,x\rangle-\sum_{n\le N}\langle E(B_n)x,x\rangle$, which tends to $0$ by weak countable additivity applied with $y=x$; hence $Q_Nx\to E(B)x$ in norm. [step 1.2, A3, A5]

3.1 Both implications hold for an arbitrary pairwise disjoint sequence, so weak and strong countable additivity of $E$ are equivalent. [step 1.1, step 2.1, A6] ∎
