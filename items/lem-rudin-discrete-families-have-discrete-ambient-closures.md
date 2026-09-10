---
id: lem-rudin-discrete-families-have-discrete-ambient-closures
kind: lemma
title: Discrete Rudin families have discrete ambient closures
status: draft
origin: pipeline
deps: [lem-rudin-bounded-cofinality-hull-transfer, lem-rudin-box-space-basic-neighborhoods-and-p-space, def-axiom-of-choice, prop-cumulative-hierarchy-transitivity-and-growth]
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
    - title: "K. P. Hart, Set-Theoretic Methods in General Topology, Chapter 6 section 2, Exercises 4–8, printed p. 37; indexed discreteness argument expanded here"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf
---

## Statement

Assume AC. If $(F_j)_{j\in J}$ is an indexed discrete family of closed subsets of $X_R(B)$, then $(\overline{F_j}^{\,Y_B})_{j\in J}$ is indexed discrete in $Y_B$. Here indexed discreteness means that every point has an open neighborhood meeting $F_j$ for at most one index $j$; the same convention applies to the ambient closures. In particular, the conclusion is stronger than pairwise disjointness of the closures. Empty members and an empty index set are allowed.

## Facts & Assumptions

**Given:** The stated indexed discrete family. Write $X=X_R(B)$ and $Y=Y_B$.

[F1] For $x\in Y$, $\kappa=\aleph_m$, $m\ge1$, and any finite list of set parameters, there are an elementary $M\prec V_\theta$ containing them and $x$, and $\widehat x\in X$, with $\widehat x\le x$. Every $v<\widehat x$ admits $z\in M\cap P_B$ with $v<z<\widehat x$. If $u\in M\cap P_B$, $u\le x$ and all its coordinate cofinalities are at most $\kappa$, then $u\le\widehat x$ ([[lem-rudin-bounded-cofinality-hull-transfer]]).

[F2] The boxes $(a,h]_X$ and $(a,h]_Y$ give local bases at their respective points, arbitrary relative half-open boxes are open, and $Y$ is a P-space: countable intersections of open sets are open ([[lem-rudin-box-space-basic-neighborhoods-and-p-space]]).

[F3] Each $V_\theta$ is transitive ([[prop-cumulative-hierarchy-transitivity-and-growth]]).

[A1] AC is available for the hull construction and for countable choices of neighborhoods ([[def-axiom-of-choice]]).

## Proof

1.1 For $m\ge1$ set $X_m=\{u\in X:(\forall n\in B)\operatorname{cf}(u(n))\le\aleph_m\}$ and $F_{j,m}=F_j\cap X_m$. These strata increase with $m$, and their union is $X$, since the defining uniform finite-aleph bound for any point of $X$ is also a non-strict bound at some finite positive aleph. Thus $F_j=\bigcup_{m\ge1}F_{j,m}$. Fix $m$ and $x\in Y$. Apply F1 with $J$, the indexed family $F$, $X_m$, $X$, $B$ and $P_B$ as the finite list of parameters. All these sets, including the function coding $F$, belong to the resulting $M$ and to the sufficiently large $V_\theta$. Discreteness of $F$ at $\widehat x$ gives an open neighborhood meeting at most one $F_j$; F2 supplies $v<\widehat x$ with $(v,\widehat x]_X$ inside it. F1 then gives $z\in M\cap P_B$ with $v<z<\widehat x\le x$. [F1, F2, A1]

2.1 The neighborhood $W=(z,x]_Y$ meets at most one $F_{j,m}$. Otherwise there are distinct $j,l\in J$ and $u\in F_j\cap X_m$, $w\in F_l\cap X_m$ with $z<u\le x$ and $z<w\le x$. Express this as an existential formula with parameters $J,F,X_m,B,z,x$, using function evaluation and bounded coordinate comparisons. This formula is true in $V_\theta$: all its witnesses are members of the named sets, and hence in $V_\theta$ by F3. Its matrix is absolute, since equality and membership are actual equality and membership and each quantifier bounded by one of these sets ranges over all its actual members. Function evaluation can be expressed by membership of ordered pairs, whose components and finite set codes are in this sufficiently large transitive rank level. Elementarity from F1 supplies such witnesses $j,l,u,w$ in $M$, with the same actual properties. In particular $u,w\in M\cap P_B$, $u,w\le x$, and membership in the named external stratum $X_m$ gives the actual cofinality bounds. No internal computation of cofinality is used. F1 implies $u,w\le\widehat x$. As $v<z<u,w$, both belong to $(v,\widehat x]_X$, contradicting its choice in step 1.1. Hence $W$ has the asserted property. It is open by F2 and contains $x$, because $z<\widehat x\le x$. [step 1.1, F1, F2, F3]

3.1 Put $C_{j,m}=\overline{F_{j,m}}^{\,Y}$. An open set that meets $C_{j,m}$ also meets $F_{j,m}$: at a point of intersection it is a neighborhood, and the definition of closure forces a point of $F_{j,m}$ in it. Thus the $W$ from step 2.1 meets at most one $C_{j,m}$. Since $x$ was arbitrary, $(C_{j,m})_{j\in J}$ is indexed discrete for each fixed $m$. In particular, two distinct such closures cannot contain the same point: every neighborhood of that point would meet both, contradicting the neighborhood just constructed. [step 2.1]

4.1 In any P-space, for a countable sequence of subsets $A_m$, one has $\overline{\bigcup_m A_m}=\bigcup_m\overline{A_m}$. The inclusion from right to left follows because a neighborhood meeting $A_m$ meets the union. Conversely, if a point avoids every $\overline{A_m}$, the intersection of the open sets $Y\setminus\overline{A_m}$ is an open neighborhood of that point by F2 and misses the union. It therefore avoids its closure. Apply this identity and step 1.1 to get $C_j:=\overline{F_j}^{\,Y}=\bigcup_{m\ge1}C_{j,m}$. If $x\in C_j\cap C_l$, there are $m,n$ with $x\in C_{j,m}\cap C_{l,n}$. Monotonicity of strata puts $x$ in both closures at level $\max(m,n)$. Step 3.1 forces $j=l$. Thus distinct full closures are disjoint. [step 1.1, step 3.1, F2]

5.1 Fix $x\in Y$. For each $m\ge1$, choose by A1 an open neighborhood $W_m$ of $x$ meeting at most one $C_{j,m}$, using step 3.1. Then $W=\bigcap_{m\ge1}W_m$ is an open neighborhood by F2. Let $K_m=\{j\in J:W\cap C_{j,m}\ne\varnothing\}$. Each $K_m$ has at most one member. The set $K=\{j:W\cap C_j\ne\varnothing\}$ equals $\bigcup_m K_m$ by step 4.1. It is countable: assigning each $j\in K$ the least $m$ with $j\in K_m$ is an injection into the positive integers. By step 4.1 at most one $C_j$ contains $x$. Remove all the other possible closures by putting

$$W'=W\cap\bigcap_{\substack{j\in K\\x\notin C_j}}(Y\setminus C_j).$$

This is a countable intersection of open sets, so F2 makes it open; every intersected set contains $x$, so it is a neighborhood of $x$. If $W'$ meets $C_j$, then $j\in K$ and the complement of $C_j$ was not used; hence $x\in C_j$. There is at most one such index. Empty $K$ gives $W'=W$, and an empty removal family uses the whole space as its intersection. This proves indexed discreteness of the ambient closures, including the empty family and empty members. QED. [step 3.1, step 4.1, F2, A1]
