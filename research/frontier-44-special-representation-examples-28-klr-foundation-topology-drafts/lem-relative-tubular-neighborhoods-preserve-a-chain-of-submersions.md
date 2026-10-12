---
id: lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions
kind: lemma
title: Relative tubular neighborhoods preserve a chain of submersions
status: draft
origin: session
deps: [thm-constant-rank-theorem-for-manifolds, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-smooth-dependence-of-ode-solutions-on-parameters, thm-euclidean-tubular-neighbourhood-theorem, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: John Mather, Notes on topological stability, control-data construction
      url: https://doi.org/10.1090/S0273-0979-2012-01383-6
---

## Statement

Assume AC. Let $S\subseteq\mathbb R^N$ be an embedded smooth manifold and let $F_i:U_i\to B_i$ be a finite family of smooth submersions such that $F_i|_{S\cap U_i}$ is a submersion. Prescribe closed subsets $C_i\subseteq S\cap U_i$, closed relative to $S$. Suppose the maps relevant at each $s\in S$ form a chain: on a neighborhood of $s$, every $F_i$ with $s\in C_i$ factors smoothly through a single maximal such map $F_j$. Then a tubular retraction $\pi:T\to S$ can be chosen so that
$$F_i(x)=F_i(\pi(x))$$
whenever $\pi(x)\in C_i$ and $x$ lies sufficiently close to its zero-section point in the chosen tube. Its tube map is a smooth embedding from a variable-radius neighborhood of the normal quotient bundle. Additional prescribed positive pointwise size bounds can be imposed on its displacement and fiber radius. No convex average of manifold-valued retractions is used.

## Facts & Assumptions

**Given:** AC, $S$, the maps $F_i$, the closed constraint subsets $C_i$, and the local chain factorization condition.

[F1] Smooth submersions have projection coordinate normal forms ([[thm-constant-rank-theorem-for-manifolds]]).

[F2] Smooth manifolds have locally finite smooth subordinate partitions under countable choice, hence under AC ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F3] Smooth vector fields with smooth finite-dimensional parameters have smooth local solution maps ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F4] A smooth embedded manifold has ordinary Euclidean normal tubes, including smooth quotient-bundle coordinates ([[thm-euclidean-tubular-neighbourhood-theorem]]).

[A1] AC supplies countable choice in [F2],[F4] ([[def-axiom-of-choice]]).

## Proof

1.1 At $s\in S$ let $I(s)=\{i:s\in C_i\}$. Since these are finitely many relatively closed subsets, choose a source neighborhood $V_s$ avoiding every $C_i$ with $i\notin I(s)$ and lying in every $U_i$ with $i\in I(s)$. Shrink it into a neighborhood where the active maps factor through their maximal map $F_j$. Because $F_j|_S$ is a submersion, there are adapted ambient coordinates $(b,u,z)$ with $S=\{z=0\}$ and $F_j=b$. To obtain them, first straighten $S$ and use [F1] on its restricted map for coordinates $(b,u)$; then replace the ambient $b$ coordinates by $F_j(b,u,z)$, whose differential is invertible at $z=0$. [F1] in full rank gives its local smooth inverse. If $I(s)$ is empty, ordinary straightened coordinates suffice. [F1, F4, construct]

2.1 Put $Q= T\mathbb R^N|_S/TS$ and give it the norm from its canonical identification with the Euclidean orthogonal normal bundle. The $z$ directions in each adapted chart give a smooth splitting $j_s:Q\to T\mathbb R^N|_S$ of the quotient map whose image is vertical for every active $F_i$. Choose a locally finite smooth partition $\theta_\alpha$ on $S$ subordinate to the neighborhoods of step 1.1. Near each chart extend its vertical $z$ coordinate fields to the ambient chart. For a parameter $(s,v)\in Q$, let $W_\alpha(s,v;x)$ be the linear combination of these fields with the $Q$-coordinate coefficients of $v$ at $s$, multiplied by a smooth local cutoff in $(s,x)$ equal to one near the diagonal $x=s$ over the support of $\theta_\alpha$. Set $W(s,v;x)=\sum_\alpha\theta_\alpha(s)W_\alpha(s,v;x)$. The sum is locally finite in $s$, smooth in all variables, linear in $v$, and $W(s,v;s)=j_s(v)$ with $j_s=\sum_\alpha\theta_\alpha(s)j_\alpha(s)$. The quotient of $j_s(v)$ is $v$, since every summand is a splitting. If $s\in C_i$, every summand with nonzero weight was chosen in a neighborhood carrying that constraint, so it is vertical for $F_i$ near $x=s$. [F1, F2, F4, step 1.1, construct]

3.1 Let $E(s,v)$ be the time-one endpoint of the field $x\mapsto W(s,v;x)$ starting at $s$. [F3] gives it on an open neighborhood of the zero section: for small $v$, the field is small, and the local solution exists to time one by rescaling the parameter or the common short-time solution interval. It satisfies $E(s,0)=s$ and $d_vE(s,0)=j_s$, because the field at $v=0$ is zero and its first parameter derivative is the constant initial vector $j_s(v)$. Its differential at the zero section is $(a,v)\mapsto a+j_s(v)$, an isomorphism. Thus $E$ is a local diffeomorphism there. When $s\in C_i$, a sufficiently small parameter keeps the trajectory inside the region where every summand is vertical for $F_i$, so $F_i(E(s,v))=F_i(s)$ by the chain rule. All these radius requirements are positive local requirements on $s$. [F1, F3, step 2.1, algebra]

4.1 Here is the global injectivity shrinking. For $s\in S$, let $r(s)$ be the supremum of $a\in(0,1]$ for which $E$ is defined and injective on $D_a(s)=\{(t,v):t\in S,\ \|t-s\|<a,\ \|v\|<a\}$. It is positive by step 3.1 and the bundle topology. If $a<r(s)$, $D_a(s)$ is eligible by restriction. The inclusion $D_{a-\|s-t\|}(t)\subseteq D_a(s)$ shows $r(t)\ge r(s)-\|s-t\|$; exchanging $s,t$ shows that $r$ is 1-Lipschitz. Choose a positive smooth radius $\delta(s)$ such that $\delta(s)<r(s)/16$, and such that $\|E(s,v)-s\|<r(s)/16$ when $\|v\|<\delta(s)$, while also enforcing step 3.1's control and any prescribed positive size bounds. Such a smooth minorant follows from [F2]: on a locally finite cover where each finitely many required bounds has a positive lower bound, choose a smaller positive constant and sum the constants with a subordinate partition. [F2, step 3.1, construct]

5.1 If $E(s,v)=E(t,w)$ in this radius domain and $d=\|s-t\|$, then $d<(r(s)+r(t))/16\le(2r(s)+d)/16$, hence $d<2r(s)/15$. Also $\|v\|<r(s)/16$ and $\|w\|<r(t)/16<(17/240)r(s)$. Thus both parameter points lie in the eligible $D_{r(s)/2}(s)$, on which $E$ is injective. They are equal. After shrinking the radius further to stay inside its local-diffeomorphism locus, $E$ is therefore an injective local diffeomorphism on its entire variable-radius domain. It is open and has agreeing smooth local inverses, hence is a diffeomorphism onto an open neighborhood $T$ of $S$. Define $\pi(E(s,v))=s$. Step 3.1 gives every stated control equality on the prescribed base subsets, and the quantitative size choices in step 4.1 remain available. [step 3.1, step 4.1, algebra] ∎
