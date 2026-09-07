---
id: "prop-simultaneous-attachment-at-a-morse-critical-value"
kind: "proposition"
title: "Simultaneous attachment at a morse critical value"
deps: ["lem-adapted-descending-field-near-a-compact-morse-band", "lem-local-morse-sublevel-pair-is-a-handle-pair", "lem-local-critical-value-lowering-preserves-the-upper-sublevel", "thm-regular-interval-diffeomorphism", "lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
    - url: "https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf"
      title: "Benedetti, Lectures on Differential Topology"
status: "draft"
origin: "pipeline"
proof_strategy: "disjoint local modifications"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $f$ be smooth on a boundaryless manifold and let $a<b$ be regular values. Suppose the closed band is compact and its critical points are finitely many nondegenerate points $p_1,\ldots,p_m$, all at the same value $c\in(a,b)$. Then $M^b$ is obtained from $M^a$, up to diffeomorphism and corner rounding, by attaching disjoint handles of indices $\operatorname{ind}(p_j)$. If $m=0$, no handles are attached and the regular-band conclusion applies.

## Facts & Assumptions

[F1] [[lem-adapted-descending-field-near-a-compact-morse-band]]: Assume $\mathrm{AC}_\omega$. Suppose the compact closed band of a smooth function on a boundaryless manifold has only finitely many critical points, all nondegenerate. There is a smooth field $X$ with $df(X)<0$ at every noncritical point of the band and $X=(2u,-2v)$ in smaller disjoint Morse charts $f=f(p)-|u|^2+|v|^2$. It can be chosen compactly supported on $M$ and hence complete.

[F2] [[lem-local-morse-sublevel-pair-is-a-handle-pair]]: Assume $\mathrm{AC}_\omega$. In a sufficiently small Morse chart $f=c-|u|^2+|v|^2$, with $u\in\mathbb R^k$ and $v\in\mathbb R^{n-k}$, the change across $c$ is a rounded index-$k$ handle: a compact product piece attaches along $S^{k-1}\times D^{n-k}$ on $f=c-\varepsilon$, its core is $v=0$, and after a local modification the remaining region up to $c+\varepsilon$ is a regular collar. The modification agrees with $f$ off a compact subset of the chart. The collar assertion is made inside a compact band having no other critical point.

[F3] [[lem-local-critical-value-lowering-preserves-the-upper-sublevel]]: Assume $\mathrm{AC}_\omega$. In a Morse chart $f=c-|u|^2+|v|^2$ containing the closed ball $|u|^2+|v|^2\le2\varepsilon$, choose a smooth $\mu:[0,\infty)\to[0,\infty)$ supported in $[0,2\varepsilon)$ with $\mu(0)>\varepsilon$ and $-1<\mu^{\prime}\le0$. Set $F=f-\mu(|u|^2+2|v|^2)$ in the chart and $F=f$ outside. This is smooth, has the same critical points as $f$, lowers $p$ below $c-\varepsilon$, and satisfies $\{F\le c+\varepsilon\}=\{f\le c+\varepsilon\}$. If $f^{-1}([c-\varepsilon,c+\varepsilon])$ is compact with only the critical point $p$, the corresponding closed band of $F$ is compact and regular.

[F4] [[thm-regular-interval-diffeomorphism]]: Assume $\mathrm{AC}_\omega$. If $a<b$ and the closed band $K=f^{-1}([a,b])$ of a smooth function on a boundaryless manifold is compact and critical-point-free, its normalized flow gives a level-preserving diffeomorphism $T:M_a\times[a,b]\to K$, $T(x,t)=\Phi_{t-a}(x)$.

[F5] [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]: For fixed attaching and product-collar data, two compatible smooth monotone roundings of a handle attachment are diffeomorphic by an isotopy supported in that collar. The diffeomorphism is the identity outside the collar.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 For $m>0$, take disjoint Morse charts and the common adapted descending field. Choose one positive $\varepsilon$ sufficiently small for all the local models and lying strictly inside $(a,b)$. In these finitely many charts perform the lowering modifications and product-handle constructions with disjoint supports. [F1, F2, F3, given]

2.1 The combined modified function has no critical point in the remaining closed band: each $p_j$ is lowered below its lower endpoint and outside the charts the function is unchanged. The union of the finitely many chart supports is compact, and the disjoint lowering modifications preserve the common upper sublevel. The regular-interval diffeomorphism therefore supplies the complementary product collar and identifies the union of the rounded local attachments with the upper sublevel. The proof is simultaneous and assigns no artificial order to equal critical values. [F2, F3, F4, step 1.1]

3.1 The original lower band $f^{-1}([a,c-\varepsilon])$ is compact and critical-point-free. Its regular-interval diffeomorphism transports every attaching tube from $M_{c-\varepsilon}$ to $M_a$ simultaneously. A diffeomorphism preserves disjointness and the transported framings. Absorb the outer collars and use compatible rounding independence. If $m=0$, apply the same regular-interval theorem to the entire band, with no local modification. Empty attaching faces at minima add disjoint disks. [F4, F5, step 2.1] ∎
