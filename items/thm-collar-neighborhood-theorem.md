---
id: thm-collar-neighborhood-theorem
kind: theorem
title: "Collar neighborhood theorem"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary, thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary, thm-fundamental-theorem-on-flows, def-smooth-collar-of-a-manifold-boundary, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-06-receipts.jsonl (thm-collar-neighborhood-theorem). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume $\mathrm{AC}_\omega$. Every smooth manifold with boundary has a smooth collar.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and a smooth manifold $M$ with boundary. Its boundary is a smooth manifold ([[thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]]).

[F1] Under Countable Choice, there is a smooth field $X$ on an open neighbourhood $U$ of $\partial M$ that points strictly inward at every boundary point ([[thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary]]).

[F2] At every boundary point this field has a smooth local forward flow, remaining in $M$ for sufficiently small positive times ([[thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary]]). Local flow solutions are unique and depend smoothly on their initial point and time ([[thm-fundamental-theorem-on-flows]]).

[F3] Under Countable Choice, a countable open cover of $\partial M$ admits a smooth locally finite partition of unity subordinate to it ([[thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary]]).

## Proof

**Proof technique:** direct.

1.1 If $\partial M=\varnothing$, the empty map from $\varnothing\times[0,1)$ is a collar. Otherwise take $X$ on $U$ from [F1]. Write $F(p,t)=\Phi_t(p)$ wherever the local forward solution remains in $U\cap M$. In a boundary chart, extend $X$ smoothly across the face to apply the ordinary local-flow theorem. At $(p,0)$, the differential of $(y,t)\mapsto F(y,t)$ has the $n-1$ face directions and the strictly inward vector $X_p$ as its columns, so it is invertible. The Euclidean inverse function theorem gives a local diffeomorphism of ambient chart neighbourhoods. Since the boundary coordinate of $F(y,t)$ vanishes for $t=0$ and has positive $t$-derivative near $(p,0)$, it has the sign of $t$ there. Thus the restriction to $t\ge0$ is a smooth local collar with image relatively open in $M$. [F1, F2, [[thm-euclidean-inverse-function-theorem]]]

1.2 No positive-time trajectory in $U\cap M$ starting on $\partial M$ can meet $\partial M$ again. If $F(p,\tau)=q\in\partial M$ for $\tau>0$, choose a boundary defining coordinate $r\ge0$ near $q$. Strict inwardness gives $dr(X)>0$ on a smaller neighbourhood. For all sufficiently small $h>0$, the trajectory on $[\tau-h,\tau]$ lies there, so the one-variable mean-value theorem gives $r(F(p,\tau-h))<r(q)=0$, a contradiction. [F1, F2]

2.1 The flow map is injective wherever these forward trajectories are defined in $U\cap M$. If $F(p,t)=F(q,s)$ with $t\ge s$, uniqueness applied backwards along the common terminal segment of length $s$ gives $F(p,t-s)=q$. If $t>s$, this contradicts step 1.2. If $t=s$, uniqueness back to time zero gives $p=q$. This argument uses only uniqueness along already existing trajectories; it does not claim a negative-time flow inside $M$. [F2, step 1.2]

2.2 For $n\ge1$, let $V_n\subseteq\partial M$ be the union of all relatively open boundary sets on which the smooth forward flow exists, stays in $U\cap M$, and is smooth for times in $[0,2/n]$. Smooth dependence and local existence in [F2] make $V_n$ open; as $n$ grows, the $V_n$ cover $\partial M$. Apply [F3] to this countable cover, obtaining a smooth locally finite partition $(\phi_n)_{n\ge1}$ with $\operatorname{supp}\phi_n\subseteq V_n$. Set $\delta(p)=\sum_{n\ge1}\phi_n(p)/(2n)$. It is positive and smooth. At each $p$ only finitely many terms are nonzero. If $n_0$ is the least active index, then $p\in V_{n_0}$ and $0<\delta(p)\le1/(2n_0)<2/n_0$, so $F(p,t)$ exists in $U\cap M$ for every $0\le t<\delta(p)$. No selection from an uncountable family of local widths is used. [F2, F3, step 1.1]

3.1 Put $D=\{(p,t):p\in\partial M,\ 0\le t<\delta(p)\}$. The map $F:D\to M$ is smooth and injective by steps 2.1–2.2. It is a local diffeomorphism at $t=0$ by step 1.1. At $t>0$, follow a sufficiently short initial part of the trajectory from a local collar chart in step 1.1, then use the ordinary local flow near the remaining interior trajectory to transport that chart; uniqueness makes the composition equal to $F$ near $(p,t)$. Hence $F$ is a local diffeomorphism there too. Its image is relatively open in $M$ and contains $\partial M$; the local inverses agree by injectivity, so $F$ is a smooth embedding onto this open neighbourhood. [F2, step 1.1, step 2.1, step 2.2]

4.1 The map $(p,s)\mapsto(p,s\delta(p))$ is a smooth diffeomorphism from $\partial M\times[0,1)$ onto $D$, with inverse $(p,t)\mapsto(p,t/\delta(p))$. Composing it with $F$ gives a smooth embedding $c(p,s)=\Phi_{s\delta(p)}(p)$ with open image and $c(p,0)=p$. By [[def-smooth-collar-of-a-manifold-boundary]], this is a smooth collar. [step 3.1] ∎
