---
id: lem-c1-local-diffeomorphisms-preserve-null-sets-locally
kind: lemma
title: "$C^1$ local diffeomorphisms preserve null sets locally"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets,
       thm-lipschitz-images-of-null-sets-in-rn-are-null,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       def-null-and-content-zero-in-rn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (lem-c1-local-diffeomorphisms-preserve-null-sets-locally). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $F:M\to N$ be a $C^1$ local diffeomorphism. For every $p\in M$
there are coordinate neighbourhoods $(U,\varphi)$ of $p$ and
$(V,\psi)$ of $F(p)$ such that $F|_U:U\to V$ is a diffeomorphism and,
for every $A\subseteq U$, using the closed-cube nullity of [[def-null-and-content-zero-in-rn]],

$$\varphi(A)\text{ is null in }\mathbb R^n \iff \psi(F(A))\text{ is null in }\mathbb R^n.$$

For $n=0$, “null” means empty.

## Facts & Assumptions

**Given:** A $C^1$ local diffeomorphism $F:M\to N$ and $p\in M$.

[F1] A local diffeomorphism restricts near $p$ to a diffeomorphism onto an open neighbourhood of $F(p)$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]).

[F2] In dimension zero, the nullity convention in the Statement means emptiness.

[L1] A $C^1$ coordinate map has bounded derivative on a compact cube lying in its domain, hence is Lipschitz there ([[lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets]]).

[L2] Global Lipschitz maps of $\mathbb R^n$ preserve closed-cube null sets ([[thm-lipschitz-images-of-null-sets-in-rn-are-null]]).


## Proof

**Proof technique:** direct.

1.1 By [F1], shrink around $p$ so that $F|_U:U\to V$ is a diffeomorphism and both $U$ and $V$ are chart domains. The coordinate map $T=\psi\circ F\circ\varphi^{-1}$ is a $C^1$ diffeomorphism between open subsets $D=\varphi(U)$ and $E=\psi(V)$ of $\mathbb R^n$. [F1, given, choose]

2.1 If $n=0$, $T$ is bijective between subsets of the one-point space $\mathbb R^0$, so a set is empty exactly when its image is empty. This gives the claim in dimension zero. [F2, step 1.1]

2.2 Suppose $n>0$. Choose a closed coordinate cube $Q\subseteq D$ around $\varphi(p)$ and a closed coordinate cube $R\subseteq E$ around $T(\varphi(p))$, both with interiors containing those points. Shrink $U$ to the preimage of $\operatorname{int}Q\cap T^{-1}(\operatorname{int}R)$ and set $V=F(U)$. The continuous derivatives of $T$ on $Q$ and $T^{-1}$ on $R$ are bounded; the mean-value inequality on these convex cubes makes the restrictions Lipschitz, as in [L1]. [L1, step 1.1, construct]

3.1 The coordinatewise clamps $r_Q:\mathbb R^n\to Q$ and $r_R:\mathbb R^n\to R$ are $1$-Lipschitz. Thus $T\circ r_Q$ and $T^{-1}\circ r_R$ are global Lipschitz maps; the first agrees with $T$ on $\varphi(U)\subseteq Q$, and the second agrees with $T^{-1}$ on $\psi(V)\subseteq R$. Apply [L2] to each. For every $B\subseteq\varphi(U)$, $B$ is null if and only if $T(B)$ is null. Taking $B=\varphi(A)$ and including step 2.1 proves the claim. [L2, step 2.1, step 2.2] ∎
