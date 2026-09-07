---
id: "cor-unstable-disk-is-the-handle-core"
kind: "corollary"
title: "Unstable disk is the handle core"
deps: ["thm-one-critical-point-handle-attachment", "lem-adapted-descending-field-near-a-compact-morse-band", "lem-gradient-flow-identifies-the-local-and-global-attaching-regions"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf"
      title: "Benedetti, Lectures on Differential Topology"
    - url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      title: "Nicolaescu, An Invitation to Morse Theory"
status: published
origin: "pipeline"
proof_strategy: "local unstable disk and transport"
---

## Statement

Assume $\mathrm{AC}_\omega$ and the one-critical-point compact-band hypotheses. For the adapted descending field used in the handle construction, the disk consisting of $p$ and its outgoing trajectories down to $M_a$ is the handle core; its boundary is the attaching sphere. Here the disk is defined by the local backward limit to $p$ and continuation down to $a$. No assertion about a global unstable-set closure is made.

## Facts & Assumptions

[F1] [[thm-one-critical-point-handle-attachment]]: Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless $n$-manifold and let $a<b$ be regular values. If $f^{-1}([a,b])$ is compact and has exactly one critical point $p$, nondegenerate of index $k$, then $M^b$ is diffeomorphic to $M^a$ with one $k$-handle attached and corners rounded. No orientation or Morse–Smale hypothesis is required.

[F2] [[lem-adapted-descending-field-near-a-compact-morse-band]]: Assume $\mathrm{AC}_\omega$. Suppose the compact closed band of a smooth function on a boundaryless manifold has only finitely many critical points, all nondegenerate. There is a smooth field $X$ with $df(X)<0$ at every noncritical point of the band and $X=(2u,-2v)$ in smaller disjoint Morse charts $f=f(p)-|u|^2+|v|^2$. It can be chosen compactly supported on $M$ and hence complete.

[F3] [[lem-gradient-flow-identifies-the-local-and-global-attaching-regions]]: Assume $\mathrm{AC}_\omega$. Let $f^{-1}([a,b])$ be compact, with regular endpoints and exactly one critical point of value $c$. For the local Morse attaching embedding on $M_{c-\varepsilon}$, where $a<c-\varepsilon<c$, descending flow transports its entire thickening to $M_a$ as an embedded framed attaching region, provided there is no intervening critical value. The regular regions outside the local critical model are identified by collars.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 In the adapted chart the equations are $u(t)=e^{2t}u(0)$ and $v(t)=e^{-2t}v(0)$. A trajectory that stays in this chart for all sufficiently negative time converges to $p$ if and only if $v=0$. On this plane $f=c-|u|^2$, so the closed disk $|u|\le\sqrt\varepsilon$ ends at $M_{c-\varepsilon}$. This is the local core of the constructed handle. [F1, F2, algebra]

2.1 Continue its boundary to $M_a$ using the regular descending flow. The flow tube is an embedded sphere times an interval and attaches smoothly to the local disk because it uses the same field, with only a positive time reparametrization. Adding this collar to a disk gives a disk; its last sphere is exactly the transported attaching sphere. At $k=0$ this says that the core is the point $p$ and has empty boundary; at $k=n$ it is the full-dimensional core. [F3, step 1.1] ∎
