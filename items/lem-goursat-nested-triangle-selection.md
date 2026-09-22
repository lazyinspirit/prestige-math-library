---
id: lem-goursat-nested-triangle-selection
kind: lemma
title: "Goursat bisection selects nested triangles retaining one quarter of the boundary-integral magnitude, with halving diameters and a one-point intersection"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-oriented-complex-triangle-and-boundary, lem-goursat-four-triangle-boundary-cancellation, thm-complex-plane-is-complete, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, thm-recursion, thm-well-ordering-principle, thm-induction-principle, lem-geometric-sequence-null, lem-complex-conjugation-and-modulus-laws, def-metric-bounded-diameter, def-cauchy-in-metric, def-metric-convergence, def-metric-topology, def-metric-space]
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

[L2] In a metric space, pairwise distances inside a nonempty bounded set are at most its diameter; Cauchy sequences and convergence are tested by positive real tolerances; the complement of a closed set is open; and distance zero forces equality ([[def-metric-bounded-diameter]], [[def-cauchy-in-metric]], [[def-metric-convergence]], [[def-metric-topology]], [[def-metric-space]]).

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

4.1 By [L6] and step 3.1, the diameters tend to zero, even when the initial diameter is zero. Write $v_n$ for the first listed vertex of the ordered triangle $T_n$; this is determined by the recursive construction and makes no choice. If $m,n\ge N$, then $v_m,v_n\in T_N$ by nestedness, so $|v_m-v_n|\le\operatorname{diam}(T_N)$. Thus $(v_n)$ is Cauchy and [L3] gives a limit $z_*\in\mathbb C$. For fixed $N$, the tail $(v_n)_{n\ge N}$ lies in the closed set $T_N$. If $z_*\notin T_N$, its open complement would contain a ball about $z_*$, contradicting convergence of that tail; hence $z_*\in T_N$. Therefore $z_*$ lies in every $T_N$. If $w$ is another common point, then $w,z_*\in T_N$ gives $|w-z_*|\le\operatorname{diam}(T_N)$ for every $N$; since these diameters tend to zero, $|w-z_*|=0$ and $w=z_*$. Hence the intersection is exactly $\{z_*\}$. [step 2.1, step 3.1, step 1.2, L2, L3, L6] ∎
