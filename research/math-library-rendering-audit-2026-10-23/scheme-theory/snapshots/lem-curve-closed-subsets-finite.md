---
id: lem-curve-closed-subsets-finite
kind: lemma
title: "Proper closed subsets of a curve are finite"
status: published
origin: pipeline
deps:
  - def-locally-finite-type-and-finite-type-morphism
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - thm-noetherian-ring-has-noetherian-spectrum
  - def-noetherian-topological-space
  - def-scheme
  - cor-specialisation-order-is-prime-inclusion
  - def-dimension-noetherian-topological-space
  - def-integral-scheme
  - def-generic-point-irreducible-closed-subset
  - def-irreducible-topological-space-and-subset
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Varieties, Section 33.43 (tag 0A22), where a closed subset of a finite-type k-scheme of dimension at most 1 avoiding the generic point is used as finite"
      url: https://stacks.math.columbia.edu/tag/0A22
    - title: "Milne, Algebraic Geometry, Section 2m (chain dimension of Noetherian spaces)"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $X$ be an integral
$k$-scheme of finite type with generic point $\eta_X$ and underlying space of
chain dimension $1$, so that $\dim X=1$ in the sense of
[[def-dimension-noetherian-topological-space]]. Then the underlying space of
$X$ is Noetherian, and:

1. every proper closed subset $Z\subsetneq X$ is a finite set of closed points
   of $X$;
2. every point $x\neq\eta_X$ is a closed point of $X$, and $X$ has a unique
   generic point.

## Facts & Assumptions

**Given:** A field $k$, an integral finite-type $k$-scheme $X$ with generic point $\eta_X$ and $\dim X=1$, and the Axiom of Choice.

[F1] A morphism is locally of finite type when each point of the source has an affine open neighbourhood $U=\operatorname{Spec}B$ whose image lies in an affine open $\operatorname{Spec}A$ of the base with $A\to B$ of finite type; finite type means locally of finite type and quasi-compact. ([[def-locally-finite-type-and-finite-type-morphism]])

[F2] A commutative algebra of finite type over a Noetherian ring is a Noetherian ring. ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

[F3] Assume AC. The spectrum of a Noetherian commutative ring is a Noetherian topological space. ([[thm-noetherian-ring-has-noetherian-spectrum]])

[F4] A space is Noetherian when every ascending chain of open subsets stabilizes, equivalently when every descending chain of closed subsets stabilizes. ([[def-noetherian-topological-space]])

[F5] A scheme is a locally ringed space in which every point has an open neighbourhood that, with the restricted structure sheaf, is an affine scheme. ([[def-scheme]])

[F6] Assume AC. For a commutative ring $R$ and $\mathfrak p,\mathfrak q\in\operatorname{Spec}(R)$, $\mathfrak q$ is a specialisation of $\mathfrak p$ if and only if $\mathfrak p\subseteq\mathfrak q$. ([[cor-specialisation-order-is-prime-inclusion]])

[F7] Every closed subspace of a Noetherian space is Noetherian: a descending chain of closed subsets of the subspace can be written as intersections with closed subsets of the ambient space; taking successive finite intersections makes those ambient subsets a descending chain, which stabilizes.

[F8] Assume AC. Every closed subset $C$ of a Noetherian space is a finite union of nonempty irreducible closed subsets, with $C=\varnothing$ represented by the empty union. For fixed $C$, consider the closed subsets $D\subseteq C$ that are not such finite unions. If this collection were nonempty, AC and the descending-chain condition would give a minimal member $D$; otherwise dependent choice would produce a strictly descending infinite chain. The set $D$ cannot be empty. If it is irreducible, it is itself a one-term union of the required kind. If it is reducible, it is the union of two proper closed subsets of $D$, each of which has the required finite decomposition by minimality. Both cases contradict the choice of $D$.

[F9] For a Noetherian space $T$, the chain dimension $\dim T$ is the supremum of the lengths of strict chains of nonempty irreducible closed subsets of $T$. ([[def-dimension-noetherian-topological-space]])

[F10] An integral scheme is nonempty, reduced, and irreducible; equivalently, every nonempty affine open is the spectrum of a domain. ([[def-integral-scheme]])


[F12] A point $x$ is a generic point of a closed subset $Z$ when $\overline{\{x\}}=Z$. ([[def-generic-point-irreducible-closed-subset]])

[F13] A space is irreducible when it is nonempty and not the union of two proper closed subsets; a subset is irreducible when it is irreducible as a subspace. ([[def-irreducible-topological-space-and-subset]])

[F14] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct: prove the space is Noetherian and T0, write a proper closed subset as a finite union of nonempty irreducible closed subsets, and show each such subset is a single closed point by the dimension-one bound.

1.1 Since $X$ is of finite type over $k$ it is locally of finite type and quasi-compact [F1], so the affine opens $U=\operatorname{Spec}A$ of $X$ with $k\to A$ of finite type form an open cover of $X$ by [F1] and contain a finite subcover $U_1=\operatorname{Spec}A_1,\ldots,U_r=\operatorname{Spec}A_r$. Each $A_i$ is a finite type $k$-algebra, hence a Noetherian ring by [F2] with $k$ a field, so each $U_i$ is a Noetherian topological space by [F3]. A finite union of Noetherian subspaces is Noetherian: for a descending chain $F_0\supseteq F_1\supseteq\cdots$ of closed subsets of $X$ the traces $F_m\cap U_i$ form a descending chain of closed subsets of $U_i$, which stabilizes from some index $m_i$ on, and then $F_m$ is constant for $m\ge\max_im_i$ because the finitely many $U_i$ cover $X$. Hence the underlying space of $X$ is Noetherian in the sense of [F4]. [F1, F2, F3, F4]

1.2 Distinct points of $X$ have distinct closures. Suppose $x\ne y$ with $\overline{\{x\}}=\overline{\{y\}}$. By [F5] choose an affine open $U=\operatorname{Spec}A$ containing $x$. For an open $V\subseteq X$ and a subset $S\subseteq X$ one has $\overline{S}\cap V=\overline{S\cap V}^{\,V}$, where the second closure is taken in $V$: the inclusion $\supseteq$ is clear, and a point of $\overline{S}\cap V$ has every open neighbourhood in $V$ meeting $S$. Since $x\in\overline{\{y\}}$, this gives $x\in\overline{\{y\}\cap U}^{\,U}$; were $y\notin U$ the right side would be empty, so $y\in U$. Writing $\mathfrak p_x,\mathfrak p_y$ for the primes of $A$ corresponding to $x,y$, the two membership statements $x\in\overline{\{y\}}$ and $y\in\overline{\{x\}}$ translate by [F6] into $\mathfrak p_x\supseteq\mathfrak p_y$ and $\mathfrak p_y\supseteq\mathfrak p_x$, so $\mathfrak p_x=\mathfrak p_y$ and $x=y$, a contradiction. [F5, F6]

2.1 By [F10] the scheme $X$ is nonempty and irreducible, and $\eta_X$ is its generic point by hypothesis; if $x$ is any generic point of $X$ then $\overline{\{x\}}=X=\overline{\{\eta_X\}}$, so $x=\eta_X$ by step 1.2. Thus $X$ has a unique generic point. The same argument, applied to the closed subset $\overline{\{x\}}$, shows that every irreducible closed subset of $X$ has at most one generic point in the sense of [F12]. [given, F10, F12, step 1.2]

2.2 Let $Z\subsetneq X$ be closed and nonempty. By step 1.1 and [F7] the subspace $Z$ is Noetherian, so by [F8] it is a finite union $Z=W_1\cup\cdots\cup W_m$ of nonempty irreducible closed subsets of $Z$. Each $W_j$ is closed in $X$ because $Z$ is closed in $X$, and $W_j\subsetneq X$ because $W_j\subseteq Z\subsetneq X$. [F7, F8, step 1.1]

3.1 Each $W_j$ has chain dimension $0$. Otherwise $\dim W_j\ge1$, so by [F9] there are nonempty irreducible closed subsets $Z_0\subsetneq Z_1$ of $W_j$; these are closed in $X$ because $W_j$ is closed in $X$, and $Z_1\subsetneq X$ by step 2.2, so $Z_0\subsetneq Z_1\subsetneq X$ is a strict chain of length two of nonempty irreducible closed subsets of $X$, contradicting $\dim X=1$. [F9, step 2.2]

4.1 Each $W_j$ is a single point. For $w\in W_j$, the closure of $\{w\}$ in $W_j$ is a nonempty irreducible closed subset by [F13]; if it were proper, it and $W_j$ would form a strict chain of length one of nonempty irreducible closed subsets, contrary to $\dim W_j=0$ by [F9]. Hence every point of $W_j$ is generic for $W_j$. Since $W_j$ is closed in $X$, any two such points have the same closure in $X$ and therefore coincide by step 1.2. Thus $W_j=\{w_j\}$ for a single point $w_j$. [F9, F13, step 1.2, step 3.1]

5.1 By steps 2.2 and 4.1 the proper closed subset $Z$ is the finite set $\{w_1,\ldots,w_m\}$, and each $w_j$ is a closed point of $X$ because $W_j=\{w_j\}$ is closed in $X$ by step 2.2. For $Z=\varnothing$ the same conclusion is vacuous, and $m=0$ is allowed in the displayed union. This proves claim 1. [step 2.2, step 4.1]

6.1 Let $x\ne\eta_X$. If $\overline{\{x\}}=X$ then $x$ is a generic point of $X$, so $x=\eta_X$ by step 2.1; hence $\overline{\{x\}}$ is a proper closed subset of $X$, and step 5.1 applied to it shows that its points, in particular $x$, are closed points of $X$. This is claim 2, the uniqueness of the generic point having been shown in step 2.1. [step 2.1, step 5.1]

7.1 The Axiom of Choice [F14] enters exactly where the cited suppliers assume it: at step 1.1 through [F3], at step 1.2 through [F6], and at step 2.2 through the minimal-counterexample argument in [F8]. The chain-dimension reasoning of steps 3.1–6.1 and the remaining topological arguments are choice-free. The empty proper closed subset, represented by $m=0$, is covered by step 5.1; dimensions $0$ and $\ge2$ for $X$ are excluded by the hypothesis $\dim X=1$. ∎ [F1, F14, step 1.1, step 2.2]
