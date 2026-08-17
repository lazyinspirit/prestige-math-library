---
id: lem-goursat-nested-triangle-selection
kind: lemma
title: "Goursat bisection selects nested triangles retaining one quarter of the boundary-integral magnitude, with halving diameters and a one-point intersection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-oriented-complex-triangle-and-boundary, lem-goursat-four-triangle-boundary-cancellation, thm-cantor-intersection-metric, thm-complex-plane-is-complete, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, thm-recursion, thm-well-ordering-principle, thm-induction-principle, lem-geometric-sequence-null, lem-complex-conjugation-and-modulus-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 1.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open, let $f:U\to\mathbb C$ be continuous, and let $T_0=\Delta[a,b,c]\subseteq U$. There is a sequence $(T_n)_{n\in\mathbb N}$ of filled triangles such that $T_{n+1}$ is one of the four midpoint subtriangles of $T_n$ and, for every $n\in\mathbb N$,

$$T_{n+1}\subseteq T_n,\qquad |I_f(T_n)|\ge4^{-n}|I_f(T_0)|,$$

$$P(T_n)=2^{-n}P(T_0),\qquad \operatorname{diam}(T_n)=2^{-n}\operatorname{diam}(T_0).$$

Every $T_n$ is nonempty, compact, closed, and bounded, and there is a unique $z_*\in\mathbb C$ with

$$\bigcap_{n\in\mathbb N}T_n=\{z_*\}.$$

Here $I_f(T)$ denotes the integral over the oriented boundary prescribed by [[def-oriented-complex-triangle-and-boundary]].

## Facts & Assumptions

**Given:** An open set $U$, a continuous $f:U\to\mathbb C$, and a filled triangle $T_0\subseteq U$.

[L1] The four midpoint subtriangle boundary integrals sum to the parent boundary integral ([[lem-goursat-four-triangle-boundary-cancellation]]).

[L2] A nested sequence of nonempty closed bounded subsets of a complete metric space whose diameters tend to zero has intersection consisting of exactly one point ([[thm-cantor-intersection-metric]]).

[L3] The complex plane with its usual metric is complete ([[thm-complex-plane-is-complete]]).

[L4] The unit square in $\mathbb R^2$ is compact, a continuous image of a compact metric space is compact, and a compact subset of a metric space is closed and bounded ([[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-compact-subset-is-closed-and-bounded]]).

[L5] Recursion constructs a sequence from an initial value and a self-map; every nonempty set of natural numbers has a least element; induction proves a statement for all natural indices ([[thm-recursion]], [[thm-well-ordering-principle]], [[thm-induction-principle]]).

[L6] If $0<r<1$, then the real sequence $(r^n)$ tends to zero ([[lem-geometric-sequence-null]]).

[L7] The complex modulus satisfies the triangle inequality $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 For any parent triangle, [L1] and [L7] imply that at least one of its four indexed midpoint children has integral modulus at least one quarter of the parent's: otherwise the modulus of their sum would be strictly smaller than the parent modulus. Choose the least qualifying index, which also works when the parent integral is zero. [L1, L5, L7]

1.2 If $T_n=\Delta[u,v,w]$, the continuous map $\Phi(s,t)=u+s((1-t)(v-u)+t(w-u))$ takes the compact square $[0,1]^2$ onto $T_n$: its coefficients are nonnegative and sum to one, and conversely a barycentric point with coefficients $(\alpha,\beta,\gamma)$ is obtained by $s=\beta+\gamma$ and, when $s>0$, $t=\gamma/s$, while $s=0$ gives $u$. Thus [L4] makes $T_n$ compact, closed, and bounded; it is nonempty because it contains $u$. [L4, algebra]

2.1 The least-index rule is a function of the ordered parent triangle, so recursion gives $(T_n)$; direct midpoint geometry shows every child is contained in its parent and is the image of it under a similarity of ratio $1/2$, hence its perimeter and diameter are half those of the parent. [step 1.1, L5, algebra]

3.1 Induction applied to step 2.1 and the retained one-quarter estimate gives, including at $n=0$, $|I_f(T_n)|\ge4^{-n}|I_f(T_0)|$, $P(T_n)=2^{-n}P(T_0)$, and $\operatorname{diam}(T_n)=2^{-n}\operatorname{diam}(T_0)$. [step 1.1, step 2.1, L5]

4.1 By [L6] and step 3.1, the diameters tend to zero, even when the initial diameter is zero. Steps 2.1 and 1.2 give a nested sequence of nonempty closed bounded subsets of the complete complex plane, so [L2] and [L3] give a unique common point $z_*$. [step 2.1, step 3.1, step 1.2, L2, L3, L6] ∎
