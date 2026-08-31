---
id: lem-c1-local-diffeomorphisms-preserve-null-sets-locally
kind: lemma
title: "$C^1$ local diffeomorphisms preserve null sets locally"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets,
       thm-lipschitz-images-of-null-sets-in-rn-are-null,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       def-null-subset-of-a-smooth-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $F:M\to N$ be a $C^1$ local diffeomorphism. For every point $p\in M$ there
is an open neighbourhood $U$ of $p$ such that $F|_U:U\to F(U)$ is a
diffeomorphism and, for every $A\subseteq U$,

$$ A\text{ is null in }M\iff F(A)\text{ is null in }N. $$

## Facts & Assumptions

**Given:** A $C^1$ local diffeomorphism $F:M\to N$ and a point $p\in M$.

[F1] A local diffeomorphism restricts near $p$ to a diffeomorphism onto an open neighbourhood of $F(p)$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F2] On a $0$-manifold, the only null subset is the empty set ([[def-null-subset-of-a-smooth-manifold]]).

[L1] On compact coordinate pieces, a $C^1$ map is locally Lipschitz ([[lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets]]).

[L2] Lipschitz maps send Euclidean null sets to Euclidean null sets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]).

## Proof
**Proof technique:** direct.

1.1 By [F1], shrink around $p$ to a neighbourhood $U_0$ on which $F$ is a diffeomorphism onto an open set $V_0$. [F1, given, choose]

2.1 If $\dim M=0$, then $U_0$ and $V_0$ are $0$-manifolds. [F2, step 1.1, cases, algebra]
By [F2], a subset
of $U_0$ is null exactly when it is empty, and the same holds in $V_0$;
because $F|_{U_0}$ is bijective,
$$ A\subseteq U_0\text{ is null }\iff A=\varnothing \iff F(A)=\varnothing \iff F(A)\text{ is null}. $$
So the claim is proved in this case. Assume henceforth that $\dim M>0$, and
let $A\subseteq U_0$. [F2, step 1.1, cases, algebra]

3.1 Cover $A$ by relatively compact source-chart neighbourhoods $W\subseteq U_0$ whose images lie in target charts on $V_0$. [L1, L2, step 2.1, algebra]
By [L1], the coordinate
representatives of $F|_W$ and $(F|_W)^{-1}$ are Lipschitz on smaller compact
closures. Therefore [L2] implies
$$ B\subseteq W\text{ is null }\iff F(B)\subseteq F(W)\text{ is null} $$
for each such piece $B$. [L1, L2, step 2.1, algebra]

4.1 The manifold definition of nullity checks exactly these chart images, so [step 3.1]
the equivalence in step 3.1 globalizes over $U:=U_0$. Hence $A$ is null in $M$
exactly when $F(A)$ is null in $N$. [step 3.1] ∎
