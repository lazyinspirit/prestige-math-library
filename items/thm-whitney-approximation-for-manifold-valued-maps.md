---
id: thm-whitney-approximation-for-manifold-valued-maps
kind: theorem
title: "Whitney approximation for manifold-valued maps"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space, prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold, def-normal-addition-map-for-a-euclidean-submanifold, lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section, def-complete-ordered-field, lem-distance-to-set-is-lipschitz, thm-whitney-approximation-for-euclidean-valued-maps, prop-identity-maps-and-composites-of-smooth-maps-are-smooth, prop-smooth-maps-are-continuous, prop-smoothness-is-local-on-the-source, def-homotopy-relative-and-path-homotopy]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-10
    scope: "Owner-authorized local capped-radius tube and ball-homotopy repair under countable choice; no independent judge"
    delegated_by: owner
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Theorem 6.24, Proposition 6.25 and Theorem 6.26, pp.139-141"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$. Let $F:M\to N$ be a continuous map between smooth manifolds. Then there exists a smooth map $\widetilde F:M\to N$ homotopic to $F$.

## Facts & Assumptions

**Given:** Countable choice and a continuous map $F:M\to N$ between smooth manifolds.

[A1] Countable choice is [[def-countable-choice]]. It licenses the finite-dimensional embedding and Euclidean approximation below, as well as their smooth-manifold bundle interfaces.

[L1] Under [A1], every smooth manifold has a proper smooth embedding into some finite-dimensional Euclidean space ([[thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space]]). The image of a smooth embedding is an embedded submanifold, and the corestriction is a diffeomorphism ([[prop-the-image-of-a-smooth-embedding-is-an-embedded-submanifold]]).

[L2] For an embedded $S\subseteq\mathbb R^k$, its orthogonal normal bundle consists of pairs $(p,v)$ with $v\perp T_pS$, its projection $\pi(p,v)=p$ is smooth, and normal addition $E(p,v)=p+v$ is smooth ([[def-normal-addition-map-for-a-euclidean-submanifold]]). Its bundle topology is the subspace topology in $S\times\mathbb R^k$: local normal frames express vectors as linear combinations with smooth coefficients and continuous inverse coefficient maps.

[L3] Normal addition is a local diffeomorphism at every $(p,0)$ ([[lem-normal-addition-is-a-local-diffeomorphism-along-the-zero-section]]).

[L4] Every nonempty bounded-above set of real numbers has a supremum ([[def-complete-ordered-field]]). Distance to a fixed NONEMPTY set is a finite nonnegative $1$-Lipschitz function ([[lem-distance-to-set-is-lipschitz]]).

[L5] Under [A1], a continuous Euclidean-valued map admits a smooth approximation with any prescribed positive continuous pointwise error ([[thm-whitney-approximation-for-euclidean-valued-maps]]).

[L6] Composites of smooth maps are smooth, smooth maps are continuous, and smoothness is local on the source ([[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]], [[prop-smooth-maps-are-continuous]], [[prop-smoothness-is-local-on-the-source]]).

[F1] A homotopy is a jointly continuous map on $M\times[0,1]$ with the specified endpoint maps ([[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 If $M$ is empty, the empty smooth map and empty homotopy prove the claim. Otherwise $N$ is nonempty because $F$ exists. Choose by [L1] a proper smooth embedding $j:N\to\mathbb R^k$ and put $S=j(N)$. Its corestriction $j:N\to S$ has smooth inverse. Set $f=j\circ F$, which is continuous. Only some finite $k$ is needed, not the dimension-optimal Whitney embedding theorem. [A1, L1, L6, given, choose]

2.1 We construct the needed Euclidean neighbourhood directly. On the normal bundle of $S$, for $p\in S$ and $a>0$ set $$V_a(p)=\{(q,v):\|q-p\|<a,\ \|v\|<a\}.$$ These open sets form a neighbourhood basis at $(p,0)$ by [L2]. Thus [L3] makes $$A_p=\{a\in(0,1]:E|_{V_a(p)}\text{ is a diffeomorphism onto an open image}\}$$ nonempty. It is bounded above by one. Define $r(p)=\sup A_p\in(0,1]$ by [L4]. The cap is inside the set before the supremum, and no family of local radii is selected. [L2, L3, L4, step 1.1, construct]

3.1 For $0<a<r(p)$ there is $b\in A_p$ with $a<b$, so restriction to $V_a(p)$ shows $a\in A_p$. Any two points of $V_{r(p)}(p)$ lie in a common $V_a(p)$ for some $a<r(p)$, by taking $a$ above their finitely many strict distance bounds. Hence $E$ is injective on $V_{r(p)}(p)$. Each point there also lies in one such open $V_a(p)$, where $E$ is a local diffeomorphism. The image of $V_{r(p)}(p)$ is therefore open, and its local smooth inverses agree by injectivity. Thus $E$ is a diffeomorphism on this whole supremum-endpoint domain. [L6, step 2.1, algebra]

4.1 For $p,q\in S$ and $0<a<r(p)-\|p-q\|$, the triangle inequality gives $V_a(q)\subseteq V_{r(p)}(p)$ and $a<1$. Step 3.1 implies $a\in A_q$. If $r(p)-\|p-q\|>0$, taking the supremum over such $a$ gives $r(q)\ge r(p)-\|p-q\|$; otherwise this inequality is automatic from positivity. Interchanging $p,q$ gives $$|r(p)-r(q)|\le\|p-q\|.$$ In particular $r$ is positive and continuous. [L4, step 2.1, step 3.1, algebra]

5.1 The set $$\Omega=\{(p,v)\in N^\perp S:\|v\|<r(p)/2\}$$ is open, contains the zero section, and at every point $E|_\Omega$ is a local diffeomorphism: $(p,v)$ lies in $V_{r(p)}(p)$, where step 3.1 applies. If $E(p,v)=E(q,w)$ with both pairs in $\Omega$, arrange $r(q)\le r(p)$. Then $$\|p-q\|=\|w-v\|\le\|v\|+\|w\|<\frac{r(p)+r(q)}2\le r(p).$$ Both vector lengths are also less than $r(p)$, so both pairs lie in $V_{r(p)}(p)$ and step 3.1 makes them equal. This proves injectivity on $\Omega$. [L2, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 Consequently $U=E(\Omega)$ is open and contains $S$. The bijection $E:\Omega\to U$ has smooth inverse: every point admits a local smooth inverse by step 5.1, and these agree with the global inverse. Define $$R:U\longrightarrow S,\qquad R=\pi\circ(E|_\Omega)^{-1}.$$ This is smooth, and $R(p)=p$ on $S$ because $E(p,0)=p$. This construction needs only the continuous radius $r/2$, not a smooth minorant, a partition of unity, or a general ambient tubular-neighbourhood theorem. [L2, L6, step 5.1, construct]

7.1 Put $C=\mathbb R^k\setminus U$. If $C$ is empty, set $\varepsilon\equiv1$ on $M$. Otherwise put $$\varepsilon(x)=\min\{1,\tfrac12 d(f(x),C)\}.$$ By [L4] and continuity of $f$, this is finite and continuous; the minimum operation is continuous since $|\min(1,a)-\min(1,b)|\le|a-b|$. It is positive: openness of $U$ gives, at each $f(x)$ separately, a ball of some positive radius in $U$, so every point of $C$ is at least that far from $f(x)$. No simultaneous choice of these radii is required. In either case the entire open ball $B(f(x),\varepsilon(x))$ lies in $U$, since a point in $C$ would have distance from $f(x)$ at least $d(f(x),C)>\varepsilon(x)$. The empty-complement case has this inclusion trivially. [L4, step 1.1, step 6.1, construct, algebra]

8.1 Apply [L5] to obtain a smooth $H:M\to\mathbb R^k$ with $\|H(x)-f(x)\|<\varepsilon(x)$ for all $x$. Its image lies in $U$ by step 7.1, and as a map into this open subset it is smooth in the same coordinates. Therefore $$\widetilde F=j^{-1}\circ R\circ H:M\to N$$ is smooth by [L1] and [L6]. [A1, L1, L5, L6, step 1.1, step 6.1, step 7.1, choose]

9.1 For $x\in M$ and $t\in[0,1]$ let $z(x,t)=(1-t)f(x)+tH(x)$. The estimate $$\|z(x,t)-f(x)\|=t\|H(x)-f(x)\|<\varepsilon(x)$$ holds also at $t=0$, since $\varepsilon(x)>0$. Thus every segment point lies in the same ball from step 7.1 and hence in $U$. The map $z$ is jointly continuous on the product: each of its finitely many coordinates is a sum of products of continuous coordinate functions pulled back from the two factors. Consequently $$\mathcal H(x,t)=j^{-1}\bigl(R(z(x,t))\bigr)$$ is jointly continuous by [L6] and the subspace topology of $U$. Since $R$ fixes $S$, its endpoints are $\mathcal H(x,0)=F(x)$ and $\mathcal H(x,1)=\widetilde F(x)$. This is the homotopy required by [F1], completing the proof including the empty case. [F1, L1, L6, step 1.1, step 6.1, step 7.1, step 8.1, construct, algebra] ∎
