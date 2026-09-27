---
id: lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family
kind: lemma
title: "A tubular target produces a submersive finite-dimensional perturbation family"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, thm-weak-whitney-proper-embedding-theorem, thm-euclidean-tubular-neighbourhood-theorem, thm-smooth-partitions-of-unity-exist-on-manifolds, def-smooth-family-of-maps-and-evaluation-map,
       cor-a-submersion-is-transverse-to-every-embedded-submanifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10, Corollary 3.27"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $f:M\to N$ be smooth. Then there exist an open ball
$$ B\subseteq\mathbb R^m $$
containing $0$ and a smooth family of maps
$$ \mathcal F:M\times B\to N $$
such that $\mathcal F_0=f$ and, for every $p\in M$, the parameter map
$$ \mathcal F_p:B\to N,\qquad a\longmapsto \mathcal F(p,a), $$
is a submersion. In particular, the evaluation map $\mathcal F$ is a
submersion, so it is transverse to every closed embedded submanifold
$Z\subseteq N$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth map $f:M\to N$ between smooth boundaryless manifolds.

[L1] Under $\mathrm{AC}_\omega$, the target $N$ admits a proper smooth Euclidean embedding $e:N\hookrightarrow\mathbb R^d$ ([[thm-weak-whitney-proper-embedding-theorem]]).

[L2] Under $\mathrm{AC}_\omega$, an embedded Euclidean submanifold has a smooth tubular neighbourhood; the normal-addition diffeomorphism makes its bundle projection a smooth submersion ([[thm-euclidean-tubular-neighbourhood-theorem]]).

[L3] Under $\mathrm{AC}_\omega$, a smooth partition of unity subordinate to any indexed open cover exists ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F1] A smooth family is its evaluation map on the product ([[def-smooth-family-of-maps-and-evaluation-map]]), and a submersion is transverse to every embedded submanifold ([[cor-a-submersion-is-transverse-to-every-embedded-submanifold]]).

## Proof
**Proof technique:** direct.

1.1 If $M=\varnothing$, take the singleton open ball $B=\mathbb R^0$ and the unique empty map $\mathcal F:M\times B\to N$; all assertions are vacuous. Otherwise $N\ne\varnothing$. Choose a proper embedding $e:N\hookrightarrow\mathbb R^d$ by [L1]. Let $U\subseteq\mathbb R^d$ be the open tubular neighbourhood of $e(N)$ from [L2]. The normal-addition diffeomorphism and bundle projection give a smooth retraction $r:U\to N$ with $r\circ e=\operatorname{id}_N$. Because the normal-bundle projection is a submersion, $r$ is a submersion at every point of $U$. [L1, L2, given]

2.1 If $U=\mathbb R^d$, put $D(p)=1$ for every $p\in M$; otherwise set $D(p)=\operatorname{dist}(e(f(p)),\mathbb R^d\setminus U)$. The complement is closed and $e(f(p))\in U$, so $D:M\to(0,\infty)$ is continuous. For each integer $k\ge1$ put $V_k=\{p:D(p)>1/k\}$. These open sets cover $M$. Apply [L3] to obtain a locally finite subordinate partition $(\phi_k)_{k\ge1}$, and set $\varepsilon(p)=\sum_{k\ge1}\phi_k(p)/(2k)$. It is smooth and positive because the partition is locally finite and sums to one. If $\phi_k(p)>0$, then $p\in V_k$, so $1/k<D(p)$; hence $0<\varepsilon(p)<D(p)/2$. [L3, step 1.1]

3.1 Take the open unit ball $B\subseteq\mathbb R^d$ and define $\mathcal F(p,a)=r(e(f(p))+\varepsilon(p)a)$. For $|a|<1$, the perturbation has norm less than $D(p)/2$, so its argument lies in $U$; when $U=\mathbb R^d$ this is automatic. Thus $\mathcal F$ is smooth on all of $M\times B$, and $\mathcal F(p,0)=r(e(f(p)))=f(p)$. At every $(p,a)$ the derivative in the parameter direction is $\varepsilon(p)\,dr_{e(f(p))+\varepsilon(p)a}$, which is surjective because $\varepsilon(p)>0$ and $r$ is a submersion. Hence each parameter map $\mathcal F_p$ and the evaluation map $\mathcal F$ are submersions. [F1, step 1.1, step 2.1]

4.1 By [F1], the evaluation map is transverse to every embedded $Z\subseteq N$, in particular every closed embedded $Z$. This proves the stated family, including the empty-source case. [F1, step 1.1, step 3.1] ∎
