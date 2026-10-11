---
id: lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions
kind: lemma
title: "Relative tubular neighborhoods preserve a chain of submersions"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-axiom-of-choice,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-constant-rank-theorem-for-manifolds,
       thm-euclidean-tubular-neighbourhood-theorem,
       thm-smooth-dependence-of-ode-solutions-on-parameters,
       thm-smooth-partitions-of-unity-exist-on-manifolds]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Mather, Notes on Topological Stability"
      url: "https://doi.org/10.1090/S0273-0979-2012-01383-6"
      locator: "control-data construction (relative tubular neighbourhoods)"
---

## Statement

Assume AC. Let $S\subseteq\mathbb R^N$ be an embedded smooth manifold and let
$F_i:U_i\to B_i$ be a finite family of smooth submersions such that
$F_i|_{S\cap U_i}$ is a submersion. Prescribe closed subsets
$C_i\subseteq S\cap U_i$, closed relative to $S$. Suppose the maps relevant at
each $s\in S$ form a chain: on a neighborhood of $s$, every $F_i$ with
$s\in C_i$ factors smoothly through a single maximal such map $F_j$. Then a
tubular retraction $\pi:T\to S$ can be chosen so that
$$F_i(x)=F_i(\pi(x))$$
whenever $\pi(x)\in C_i$ and $x$ lies sufficiently close to its zero-section
point in the chosen tube. Its tube map is a smooth embedding from a
variable-radius neighborhood of the normal quotient bundle. Additional
prescribed positive pointwise size bounds can be imposed on its displacement
and fiber radius. No convex average of manifold-valued retractions is used.

## Facts & Assumptions

**Given:** AC, an embedded smooth manifold $S\subseteq\mathbb R^N$, a finite family of smooth submersions $F_i:U_i\to B_i$ with each $F_i|_{S\cap U_i}$ submersive, relatively closed subsets $C_i\subseteq S\cap U_i$, and the local chain factorization condition.

[F1] A smooth map of constant rank $r$ near a point has smooth charts near the point and near its image in which it is the standard projection $(u,v)\mapsto(u,0)$ ([[thm-constant-rank-theorem-for-manifolds]]).

[F2] Assuming the Axiom of Countable Choice, every open cover of a smooth manifold admits a smooth subordinate partition of unity ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F3] A jointly smooth time-dependent vector field depending smoothly on finitely many parameters has local solution maps that are smooth in the initial condition and in the parameters ([[thm-smooth-dependence-of-ode-solutions-on-parameters]]).

[F4] Assuming countable choice, an embedded smooth submanifold $S\subseteq\mathbb R^N$ has a Euclidean normal tube: a positive smooth radius $\delta$ such that normal addition is a diffeomorphism from $\{(s,v)\in N^\perp S:\|v\|<\delta(s)\}$ onto an open neighbourhood of $S$ ([[thm-euclidean-tubular-neighbourhood-theorem]]).

[A1] AC implies DC implies $\mathrm{AC}_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]]), which supplies the countable-choice hypotheses of [F2] and [F4]; the ODE and constant-rank arguments are choice-free beyond that. This is the full choice use ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix $s\in S$ and put $I(s)=\{i:s\in C_i\}$, a finite set. Since the $C_i$ with $i\notin I(s)$ are closed in $S$ and avoid $s$, and the $U_i$ with $i\in I(s)$ are open, choose a source neighbourhood $V_s\subseteq S$ that avoids every $C_i$ with $i\notin I(s)$ and lies in every $U_i$ with $i\in I(s)$; shrink it so that the active maps factor smoothly through a single maximal map $F_j$. Since $F_j|_S$ is a submersion, there are ambient coordinates $(b,u,z)$ on a neighbourhood of $s$ with $S=\{z=0\}$ and $F_j=b$: straighten $S$, use [F1] on $F_j|_S$ for coordinates $(b,u)$, and then apply [F1] in the full-rank case to the map $(b,u,z)\mapsto(F_j(b,u,z),u,z)$, whose differential at $s$ is invertible because $\partial F_j/\partial b$ is the identity at $z=0$. If $I(s)$ is empty, ordinary straightened coordinates suffice. [F1, F4, A1, construct]

2.1 Put $Q=T\mathbb R^N|_S/TS$ and identify it with the Euclidean orthogonal normal bundle. The $z$-directions of the adapted charts give smooth local splittings $j_s:Q\to T\mathbb R^N|_S$ of the quotient map whose images are vertical for every active map. Choose a locally finite smooth partition of unity $\theta_\alpha$ on $S$ subordinate to the neighbourhoods of step 1.1. Near each chart extend its vertical coordinate fields to the ambient chart. For a parameter $(s,v)\in Q$ let $W_\alpha(s,v;x)$ be the linear combination of these fields with the $Q$-coordinates of $v$ at $s$, multiplied by a smooth local cutoff in $(s,x)$ equal to one near the diagonal over the support of $\theta_\alpha$, and set $W(s,v;x)=\sum_\alpha\theta_\alpha(s)W_\alpha(s,v;x)$. The sum is locally finite in $s$, smooth in all variables, and linear in $v$; at $x=s$ it equals $j_s(v)=\sum_\alpha\theta_\alpha(s)j_\alpha(s)(v)$, whose quotient is $v$ because every summand splits the quotient map. Whenever $s\in C_i$, every summand of nonzero weight lies in a neighbourhood carrying that constraint, so $W(s,v;\cdot)$ is vertical for $F_i$ near $x=s$. [F1, F2, F4, A1, step 1.1, construct]

3.1 Let $E(s,v)$ be the time-one endpoint of the flow of $x\mapsto W(s,v;x)$ starting at $s$. By [F3] applied to the jointly smooth field $W$ this is defined and smooth on an open neighbourhood of the zero section: for small $v$ the field is small, and rescaling the parameter or restricting a common short-time interval gives the time-one solution. It satisfies $E(s,0)=s$ and $d_vE(s,0)=j_s$, because the field vanishes at $v=0$ and its first parameter derivative is the constant initial vector $j_s(v)$; moreover $d_sE(s,0)$ is the identity, so the differential of $E$ at the zero section is the isomorphism $(a,v)\mapsto a+j_s(v)$. Hence $E$ is a local diffeomorphism at every point of the zero section. If $s\in C_i$, a sufficiently small parameter keeps the whole trajectory in the region where $W$ is vertical for $F_i$, so $F_i(E(s,v))=F_i(s)$ there by the chain rule. All radius requirements so far are positive local requirements on $s$. [F1, F3, step 2.1, algebra]

4.1 For $s\in S$ let $r(s)$ be the supremum of $a\in(0,1]$ such that $E$ is defined and injective on $D_a(s)=\{(t,v):t\in S,\ \|t-s\|<a,\ \|v\|<a\}$. It is positive: $E$ is a local diffeomorphism at each point of the zero section, and on a closed ball around $(s,0)$ in the total space a finite cover by injectivity neighbourhoods gives a uniform injectivity radius. If $a<r(s)$ then $D_a(s)$ is eligible by restriction, and $D_{a-\|s-t\|}(t)\subseteq D_a(s)$ shows $r(t)\ge r(s)-\|s-t\|$; exchanging $s$ and $t$ makes $r$ 1-Lipschitz. Choose a positive smooth radius $\delta(s)$ with $\delta(s)<r(s)/16$, with $\|E(s,v)-s\|<r(s)/16$ whenever $\|v\|<\delta(s)$, and with any prescribed positive size bounds enforced; such a smooth minorant exists by [F2], summing suitably small positive constants with a subordinate partition of unity on a locally finite cover on which the finitely many required bounds have positive lower bounds. [F2, A1, step 3.1, construct]

5.1 Suppose $E(s,v)=E(t,w)$ with $d=\|s-t\|$ inside this radius domain. Then $d<(r(s)+r(t))/16\le(2r(s)+d)/16$, so $d<2r(s)/15$; also $\|v\|<r(s)/16$ and $\|w\|<r(t)/16<(17/240)r(s)$. Both parameter points therefore lie in the eligible domain $D_{r(s)/2}(s)$, on which $E$ is injective, so $(s,v)=(t,w)$. After shrinking the radius further to stay inside the local-diffeomorphism locus, $E$ is an injective local diffeomorphism on its full variable-radius domain, hence a diffeomorphism onto an open neighbourhood $T$ of $S$; its inverse composed with the projection of $Q$ onto $S$ defines $\pi:T\to S$, the tube map is exactly $E$, and step 3.1 gives $F_i(x)=F_i(\pi(x))$ whenever $\pi(x)\in C_i$ and $x$ lies close enough to its zero-section point. The prescribed displacement and fiber-radius bounds were built into $\delta$ in step 4.1. [step 3.1, step 4.1, algebra] ∎

## Remarks

- The retraction is produced by integrating an explicit normal field, not by averaging manifold-valued retractions, and the construction is relative to the prescribed closed subsets: the identity $F_i(x)=F_i(\pi(x))$ is imposed only over points of $C_i$, which is exactly what the chain condition makes consistent.
