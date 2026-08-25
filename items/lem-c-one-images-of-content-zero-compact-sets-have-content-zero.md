---
id: lem-c-one-images-of-content-zero-compact-sets-have-content-zero
kind: lemma
title: "A $C^1$ map sends a compact set of content zero to a set of content zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-and-content-zero-in-rn, lem-compact-null-iff-content-zero-in-rn, lem-null-sets-in-rn-closed-under-subsets-and-countable-unions, thm-lipschitz-images-of-null-sets-in-rn-are-null, def-lipschitz-holder-contraction, thm-mean-value-inequality, thm-chain-rule-for-total-derivatives, thm-continuous-image-of-a-compact-space-is-compact, thm-heine-borel-rn, def-ck-euclidean-maps-and-diffeomorphisms, thm-extreme-value-metric, def-metric-compactness, thm-total-derivative-computes-directional-and-partial-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, def-euclidean-inner-product]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), ch. 4"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement

Let $m\ge1$. Then if $\psi$ is $C^1$ on an open $W\subseteq\mathbb R^m$ with values in $\mathbb R^m$ and $A\subseteq W$ is compact with content zero, then $\psi[A]$ is compact and has content zero.

Content zero and nullity are those of [[def-null-and-content-zero-in-rn]].

## Facts & Assumptions

**Given:** The integer $m\ge1$, the open set $W\subseteq\mathbb R^m$, the $C^1$ map $\psi:W\to\mathbb R^m$, and the compact set $A\subseteq W$ of content zero.

[F1] A set $E\subseteq\mathbb R^m$ is **null** when, for every $\varepsilon>0$, it is covered by a sequence of closed cubes whose nonnegative volume series converges with sum at most $\varepsilon$; it has content zero when such a cover can be finite ([[def-null-and-content-zero-in-rn]]).

[F2] Padding a finite cover with degenerate zero-volume cubes proves that content zero implies null ([[def-null-and-content-zero-in-rn]]).

[F3] A map $f:X\to Y$ between metric spaces is **Lipschitz** with **constant** $L$, where $L\in\mathbb R$ and $L\ge0$, when $d_Y(f(x),f(x'))\le L\,d_X(x,x')$ for all $x,x'\in X$ ([[def-lipschitz-holder-contraction]]).

[F4] A metric space is **compact** when every open cover of it has a finite subcover ([[def-metric-compactness]]).

[F5] A map $f:U\to\mathbb R^q$ is of class $C^k$ when each component is of class $C^k$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F6] For $x\in\mathbb R^m$, $\lVert x\rVert_2=\sqrt{\sum_{k<m}x_k^2}$ ([[def-euclidean-inner-product]]).

[L1] Every subset of a null subset of $\mathbb R^m$ is null ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

[L2] If $T:\mathbb R^m\to\mathbb R^m$ is Lipschitz and $E$ is null, then $T[E]$ is null ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]).

[L3] If $f:[\alpha,\beta]\to\mathbb R^m$ is continuous and differentiable on $(\alpha,\beta)$ with $\lVert f'(t)\rVert_2\le M$ there, then $\lVert f(\beta)-f(\alpha)\rVert_2\le M(\beta-\alpha)$ ([[thm-mean-value-inequality]]).

[L4] If $f$ is totally differentiable at $a$ and $g$ at $f(a)$, then $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L5] If $f$ is totally differentiable at $a$ then $D_vf(a)$ exists for every $v\in\mathbb R^m$ and equals $Df(a)v$, and the matrix of $Df(a)$ is $Jf(a)$ ([[thm-total-derivative-computes-directional-and-partial-derivatives]]).

[L6] If every partial derivative of $f$ exists on a neighbourhood of $a$ and is continuous at $a$, then $f$ is totally differentiable at $a$ with $Df(a)$ the linear map of matrix $Jf(a)$ ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[L7] For a continuous real-valued $f$ on a nonempty compact metric space, the image $f[X]$ is bounded above and below ([[thm-extreme-value-metric]]).

[L8] For continuous $f:X\to Y$ between metric spaces, if $K\subseteq X$ is a compact subset of $X$, then $f[K]$ is a compact subset of $Y$ ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[L9] A closed box in $\mathbb R^m$ is compact, and a subset $K\subseteq\mathbb R^m$ is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[L10] A compact subset of $\mathbb R^m$ is null if and only if it has content zero ([[lem-compact-null-iff-content-zero-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 If $A=\emptyset$ then $\psi[A]=\emptyset$, which is covered by the single degenerate cube $\prod_{j<m}[0,0]$ of volume $0$, so it has content zero by [F1] and the assertion holds. For the rest of the proof assume $A\ne\emptyset$. [given, F1]

1.2 Since $A$ has content zero, [F2] makes $A$ null. [given, F2]

1.3 A $C^1$ map is continuous, since by [F5] and [L6] each component is totally differentiable and hence continuous at every point of $W$. So $\psi[A]$ is a compact subset of $\mathbb R^m$ by [L8]. [given, F5, L6, L8]

2.1 Every point $c\in A$ lies in the open set $W$, so some closed cube $Q$ centred at $c$ with positive edge is contained in $W$, and the interior of $Q$ contains $c$. Those interiors form an open cover of the compact $A$, so by [F4] and [L9] finitely many of them cover $A$: there are closed cubes $Q_1,\ldots,Q_N\subseteq W$ with $N\ge1$ whose union contains $A$. [step 1.1, given, F4, L9]

3.1 Fix $i$ with $1\le i\le N$. The $m^2$ functions $\partial_j\psi_k$ are continuous on $W$ by [F5], and $Q_i$ is a nonempty compact subset of $W$ by [L9], so [L7] bounds each of them on $Q_i$: there is $C\ge0$ with $|\partial_j\psi_k(c)|\le C$ for all $c\in Q_i$ and all $j,k<m$. Put $M:=m^{3/2}C$. For $c\in Q_i$ and $v\in\mathbb R^m$, [L5] and [L6] give $D\psi(c)v=J\psi(c)v$, whose $k$th coordinate is $\sum_{j<m}\partial_j\psi_k(c)v_j$, of absolute value at most $mC\lVert v\rVert_2$ because $|v_j|\le\lVert v\rVert_2$ by [F6]; hence $\lVert D\psi(c)v\rVert_2\le\sqrt m\,mC\lVert v\rVert_2=M\lVert v\rVert_2$, again by [F6]. [step 2.1, L5, L6, L7, L9, F5, F6]

4.1 Let $x,y\in Q_i$. A cube is convex, so $\gamma(t):=x+t(y-x)$ lies in $Q_i\subseteq W$ for $0\le t\le1$. The map $\gamma$ is differentiable with $\gamma'(t)=y-x$, and $\psi$ is totally differentiable on $W$ by [F5] and [L6], so [L4] and [L5] make $t\mapsto\psi(\gamma(t))$ differentiable on $[0,1]$ with derivative $D\psi(\gamma(t))(y-x)$, of norm at most $M\lVert y-x\rVert_2$ by step 3.1. Hence [L3] on $[0,1]$ gives $\lVert\psi(y)-\psi(x)\rVert_2\le M\lVert y-x\rVert_2$, so the restriction $\psi|_{Q_i}$ is Lipschitz with constant $M$ in the sense of [F3]. [step 3.1, L3, L4, L5, L6, F3, F5]

5.1 Write $Q_i=\prod_{j<m}[\alpha_j,\beta_j]$ and let $\rho_i:\mathbb R^m\to Q_i$ be the coordinatewise clamp, $\rho_i(v)_j=\min\{\max\{v_j,\alpha_j\},\beta_j\}$. Each scalar clamp satisfies $|\min\{\max\{s,\alpha\},\beta\}-\min\{\max\{s',\alpha\},\beta\}|\le|s-s'|$, so $\lVert\rho_i(v)-\rho_i(v')\rVert_2\le\lVert v-v'\rVert_2$ by [F6] and $\rho_i$ is Lipschitz with constant $1$; therefore $T_i:=\psi\circ\rho_i$ is defined on all of $\mathbb R^m$, agrees with $\psi$ on $Q_i$ since $\rho_i$ fixes $Q_i$ pointwise, and is Lipschitz with constant $M$ by step 4.1 and [F3]. [step 4.1, F3, F6]

6.1 For each $i$, the set $A\cap Q_i$ is a subset of the null set $A$ of step 1.2, hence null by [L1]; so [L2] applied to the Lipschitz map $T_i$ of step 5.1 makes $T_i[A\cap Q_i]$ null, and that set is $\psi[A\cap Q_i]$ because $T_i$ agrees with $\psi$ on $Q_i$. [step 1.2, step 5.1, L1, L2]

7.1 By step 2.1 the union of the $Q_i$ contains $A$, so $\psi[A]=\bigcup_{i=1}^N\psi[A\cap Q_i]$. Let $\varepsilon>0$. By step 6.1 and [F1] each of the $N$ sets admits a sequence of closed cubes covering it with volume sum at most $\varepsilon/N$; concatenating those $N$ sequences gives one sequence of closed cubes covering $\psi[A]$ with volume sum at most $\varepsilon$, so $\psi[A]$ is null by [F1]. The index set is finite, so only finitely many covers are named and no choice principle is used. [step 2.1, step 6.1, F1]

8.1 The set $\psi[A]$ is compact by step 1.3 and null by step 7.1, so [L10] gives that it has content zero. [step 1.3, step 7.1, L10] ∎

## Remarks

- **Why the published Lipschitz theorem is not enough on its own.** [L2] is stated for a Lipschitz map defined on all of $\mathbb R^m$, and $\psi$ is defined only on $W$ and need not be Lipschitz there — its derivative may be unbounded near $\partial W$. Steps 2.1 to 5.1 exist to manufacture, on each of finitely many cubes, a genuinely global Lipschitz map that agrees with $\psi$ where it matters.

- **Compactness is used twice, for different things.** It supplies the finite subcover in step 2.1, and in step 8.1 it converts nullity back into content zero; a null set need not have content zero without it.
