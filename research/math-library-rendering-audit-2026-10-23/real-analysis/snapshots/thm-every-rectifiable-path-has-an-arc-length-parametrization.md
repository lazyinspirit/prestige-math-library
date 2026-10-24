---
id: thm-every-rectifiable-path-has-an-arc-length-parametrization
kind: theorem
title: "Every rectifiable path factors through its arc-length function as a unit-speed path on $[0,L]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-arc-length-function, lem-arc-length-function-is-continuous-and-nondecreasing, thm-arc-length-is-additive-over-subintervals, thm-arc-length-is-invariant-under-monotone-reparametrization, cor-chord-length-is-at-most-arc-length]
justified_by: []
aliases: []
landmark: true
proof_strategy: factorization
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "U. Lang, Differential Geometry I, Lemma 1.1"
      url: "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[a,b]\to\mathbb R^n$ be rectifiable, put $L=L(\gamma)$, and let $s=s_\gamma$. There is a unique map $\bar\gamma:[0,L]\to\mathbb R^n$ such that

$$\gamma=\bar\gamma\circ s.$$

It is $1$-Lipschitz and, for every $0\le r\le q\le L$,

$$L_{[r,q]}(\bar\gamma|_{[r,q]})=q-r.$$

Thus $\bar\gamma$ has metric unit speed. If $L=0$, its domain is a singleton and the formula reads $0=0$.

## Facts & Assumptions

**Given:** The rectifiable path, length $L$, and arc-length function $s$.

[L1] The function $s$ is continuous and nondecreasing, maps $a$ to $0$ and $b$ to $L$, and $s(v)-s(u)$ is the length on $[u,v]$ ([[def-arc-length-function]], [[lem-arc-length-function-is-continuous-and-nondecreasing]]).

[L2] Every chord is at most the length of the corresponding subpath; in particular, a path of zero length is constant ([[cor-chord-length-is-at-most-arc-length]]).

[L3] Length is invariant under a continuous surjective monotone reparametrization ([[thm-arc-length-is-invariant-under-monotone-reparametrization]]).

## Proof

**Proof technique:** factorization.

1.1 By continuity and the endpoint values in [L1], $s([a,b])=[0,L]$. If $s(u)=s(v)$ with $u\le v$, [L1] makes the intervening length zero and [L2] gives $\gamma(u)=\gamma(v)$. [given, L1, L2]

2.1 For $r\in[0,L]$, define $\bar\gamma(r)$ to be the unique common value $\gamma(t)$ of all $t$ with $s(t)=r$. Existence follows from surjectivity and well-definedness from step 1.1. This definition immediately gives $\gamma=\bar\gamma\circ s$ and uniqueness. [step 1.1, construct]

3.1 For $r<q$, take $u\le v$ with $s(u)=r$ and $s(v)=q$. The chord bound and [L1] give $\lVert\bar\gamma(q)-\bar\gamma(r)\rVert_2\le L_{[u,v]}(\gamma)=q-r$. Hence $\bar\gamma$ is $1$-Lipschitz and continuous. [step 2.1, L1, L2]

4.1 The restriction $s|_{[u,v]}$ is a continuous surjective nondecreasing map onto $[r,q]$, and $\gamma|_{[u,v]}=\bar\gamma|_{[r,q]}\circ s|_{[u,v]}$. By [L3], $L(\bar\gamma|_{[r,q]})=L(\gamma|_{[u,v]})=q-r$. [step 2.1, step 3.1, L1, L3]

5.1 If $L=0$, [L2] makes $\gamma$ constant, $s$ has singleton image, and the construction gives the unique constant map on $[0,0]$; the subinterval formula is $0=0$. [given, L1, L2] ∎
