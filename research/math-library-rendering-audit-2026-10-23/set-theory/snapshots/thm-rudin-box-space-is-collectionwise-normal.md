---
id: thm-rudin-box-space-is-collectionwise-normal
kind: theorem
title: Rudin spaces are collectionwise normal
status: published
origin: pipeline
deps: [lem-rudin-box-space-basic-neighborhoods-and-p-space, lem-rudin-disjoint-box-refinement, lem-rudin-discrete-families-have-discrete-ambient-closures, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 2, Exercise 8, printed p. 37"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. For every infinite $B\subseteq\omega\setminus\{0,1\}$, $X_R(B)$ is Hausdorff and collectionwise normal: for every indexed discrete family $(F_j)_{j\in J}$ of closed subsets there are pairwise disjoint open sets $(U_j)_{j\in J}$ with $F_j\subseteq U_j$. Here indexed discreteness means each point has a neighborhood meeting at most one indexed member. In particular $X_R(B)$ is normal. Empty members may receive empty neighborhoods.

## Facts & Assumptions

**Given:** The Rudin space $X=X_R(B)$, ambient space $Y=Y_B$, and AC.

[F1] Relative half-open boxes are clopen and give the local bases at Rudin and ambient points ([[lem-rudin-box-space-basic-neighborhoods-and-p-space]]).

[F2] Every open cover of $Y$ has a partition refinement into nonempty open boxes ([[lem-rudin-disjoint-box-refinement]]).

[F3] The ambient closures of an indexed discrete family of closed subsets of $X$ form an indexed discrete family in $Y$ ([[lem-rudin-discrete-families-have-discrete-ambient-closures]]).

[A1] AC is assumed, as required for the ambient refinement and closure-transfer constructions ([[def-axiom-of-choice]]).

## Proof

1.1 If $h,k\in X$ are distinct, choose a coordinate $n$ at which they differ, interchanging their names so $h(n)<k(n)$. Set $a(n)=h(n)$ and $a(i)=0$ for $i\ne n$. Every point-coordinate is positive, so $a<k$. The clopen box $V=(a,k]_X$ contains $k$ and excludes $h$, since membership would require $h(n)>a(n)=h(n)$. Its open complement contains $h$ and is disjoint from $V$. Thus $X$ is Hausdorff. [F1]

1.2 Let $(F_j)_{j\in J}$ be an indexed discrete closed family in $X$ and put $C_j=\overline{F_j}^{\,Y}$. By F3 and A1, each point of $Y$ has an open neighborhood meeting at most one $C_j$. Let $\mathcal O$ be the set of all open subsets of $Y$ with that property. It is an open cover by the preceding existence statement. F2 and A1 give a partition $\mathcal V$ of $Y$ into nonempty open boxes refining $\mathcal O$. Every cell meets at most one indexed $C_j$, since it is contained in a member of $\mathcal O$. [F2, F3, A1]

2.1 For each $j\in J$ define $V_j=\bigcup\{V\in\mathcal V:V\cap C_j\ne\varnothing\}$ and $U_j=V_j\cap X$. Each $V_j$ is open in $Y$, so $U_j$ is open in its subspace $X$. If $p\in F_j$, the unique partition cell through $p$ meets $C_j$ because $F_j\subseteq C_j$, and therefore $p\in U_j$. If $p\in V_j\cap V_l$, two partition cells assigned to $j$ and $l$ contain $p$. They are the same cell by disjointness of the partition. Step 1.2 then gives $j=l$. Thus the $V_j$, and consequently the $U_j$, are pairwise disjoint. For $F_j=\varnothing$, also $C_j=\varnothing$, so the displayed union gives $U_j=\varnothing$. An empty index set produces the empty family. [step 1.2]

3.1 Steps 1.1 and 2.1 give Hausdorffness and the stated collectionwise separation property. If $A,D$ are disjoint closed subsets of $X$, their two-member indexed family is discrete: at a point of $A$ the open complement of $D$ meets at most $A$, at a point of $D$ use the complement of $A$, and elsewhere the intersection of both complements meets neither. Applying step 2.1 gives disjoint open neighborhoods of $A,D$. Together with Hausdorffness this proves normality. QED. [step 1.1, step 2.1]
