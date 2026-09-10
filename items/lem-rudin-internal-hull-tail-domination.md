---
id: lem-rudin-internal-hull-tail-domination
kind: lemma
title: Internally increasing hulls dominate countable tail bounds
status: draft
origin: pipeline
deps: [def-rudin-ordinal-box-space, def-rudin-ambient-ordinal-box-space, lem-rudin-bounded-cofinality-hull-transfer, thm-regularity-of-the-alephs, def-axiom-of-choice, prop-cumulative-hierarchy-transitivity-and-growth]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 3, Exercises 3–4, printed p. 38; obtained from the proved bounded-cofinality hull construction"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. Let $2\le k<\omega$, $\kappa=\aleph_k$, and let $A$ be a finite set of parameters including $B,P_B,X_R(B)$ and $t:n\mapsto\aleph_n$ on $B$. For every sufficiently large regular cardinal $\theta>\kappa$ there is $M\prec(V_\theta,\in)$ with $A\subseteq M$, $\kappa\subseteq M$ and $|M|=\kappa$ such that, on defining

$$x(n)=\begin{cases}\aleph_n,&n\le k,\\\sup(M\cap\aleph_n),&n>k,\end{cases}$$

one has $\operatorname{cf}(x(n))=\kappa$ and $x(n)<\aleph_n$ for every $n>k$ in $B$. Moreover $x\in F_k:=\{h\in X_R(B):h(n)=\aleph_n\text{ for all }n\in B\text{ with }n\le k\}$. Every $b\in P_B$ with $b<x$ has an interpolant $z\in M\cap P_B$ with $b<z<x$. Finally, if $u\in M\cap P_B$, $n\in B$, $n>k$ and $u(n)<\aleph_n$, then $u(n)<x(n)$, without any bound on the cofinalities of $u$.

## Facts & Assumptions

**Given:** The stated parameters and AC; all inequalities between functions are pointwise.

[F1] $P_B$ uses inclusive top coordinates $\aleph_n$, and membership in $X_R(B)$ requires uncountable coordinate cofinalities below one finite aleph ([[def-rudin-ordinal-box-space]]).

[F2] $Y_B$ imposes only uncountability of the coordinate cofinalities ([[def-rudin-ambient-ordinal-box-space]]).

[F3] Under AC $\operatorname{cf}(\aleph_n)=\aleph_n$ for each finite positive $n$ ([[thm-regularity-of-the-alephs]]).

[F4] At any point of $Y_B$ and cutoff $\aleph_k$, the bounded-cofinality hull construction gives $M\prec V_\theta$ containing prescribed parameters and every ordinal below $\aleph_k$, with size $\aleph_k$. Its hull point keeps the low-cofinality coordinates and replaces each higher one by $\sup(M\cap t(n))$, strictly below $t(n)$ with cofinality $\aleph_k$. It also gives strict internal interpolation below that hull point ([[lem-rudin-bounded-cofinality-hull-transfer]]).

[F5] $V_\theta$ is transitive ([[prop-cumulative-hierarchy-transitivity-and-growth]]).

[A1] AC is assumed for regularity and the hull construction ([[def-axiom-of-choice]]).

## Proof

1.1 The top function $t$ belongs to $Y_B$: by F3 and A1, $\operatorname{cf}(t(n))=\aleph_n>\omega$ for every $n\in B$, so F2 applies. Its coordinates with cofinality at most $\kappa$ are exactly those with $n\le k$, since the finite alephs strictly increase. Apply F4 at $t$, with cutoff $\aleph_k$ and the parameters in $A$. It supplies $M$ as stated; its hull point is exactly the displayed $x$. In particular every tail coordinate has cofinality $\kappa$ and lies strictly below its top. [F2, F3, F4, A1]

2.1 At an initial coordinate $n\le k$ the value $x(n)=\aleph_n$ has uncountable cofinality at most $\aleph_k$ by F3. On the tail the same upper cofinality bound follows from step 1.1. Therefore all coordinate cofinalities lie strictly between $\omega$ and $\aleph_{k+1}$, and F1 gives $x\in X_R(B)$. Its initial values give $x\in F_k$ by the displayed definition. This includes the possibility that $B$ has no coordinates at most $k$. The strict interpolation assertion follows from F4, applied to this very hull point: for each $b\in P_B$ with $b<x$, it returns $z\in M\cap P_B$ with $b<z<x$. [step 1.1, F1, F3, F4]

3.1 Fix $u\in M\cap P_B$ and $n>k$ in $B$ with $u(n)<\aleph_n$. Since $n<\omega<\kappa$ and $\kappa\subseteq M$, $n\in M$. Elementarity puts the unique value $u(n)$ and its ordinal successor in $M$. These operations agree with the actual operations in $V_\theta$: their defining formulas are membership in the function and $s=u(n)\cup\{u(n)\}$, and all the function entries and these finite-rank codes are in the sufficiently large rank level. The infinite cardinal $\aleph_n$ is a limit ordinal, so $u(n)+1<\aleph_n$. Consequently $u(n)+1\in M\cap\aleph_n$ and $u(n)<u(n)+1\le\sup(M\cap\aleph_n)=x(n)$. Transitivity F5 ensures that the bounded membership formulas just used range over the actual function entries and ordinal members. This uses only the strict coordinate bound on $u(n)$, and applies also to zero and successor values. QED. [step 1.1, F4, F5]
