---
id: lem-standard-complementary-pair-fills-an-n-ball
kind: lemma
title: "The standard complementary pair fills a ball"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps: [def-attaching-a-smooth-handle-with-corner-rounding, lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism, def-k-handle-core-cocore-attaching-region-and-belt-sphere, def-smooth-embedding, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, thm-smooth-inverse-function-theorem-on-manifolds, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Lemma 5.4.2, §5.4, printed pp. 144-146 (confocal coordinates, corner rounding, identification of the attaching map)"
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes; complete author PDF)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Example 1.11, Ch. 1 §1.1, printed pp. 6-7 (standard cancelling model as a boundary connected sum with a disc)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $0\le k\le n-1$ and let $1\times\varphi_0:S^k\times D^{n-k-1}\to S^k\times D^{n-k}$ be the standard hemisphere attaching embedding, where $\varphi_0:D^{n-k-1}\to\partial D^{n-k}$ is the stereographic embedding of $D^{n-k-1}$ onto the upper hemisphere of $\partial D^{n-k}$. Then: (i) $(S^k\times D^{n-k})\cup_{1\times\varphi_0}(D^{k+1}\times D^{n-k-1})\cong D^n$ after rounding the corner along $S^k\times S^{n-k-2}$; (ii) for the standard equatorial embedding $\sigma:S^{k-1}\times D^{n-k}\to\partial D^n$ one has $D^n\cup_\sigma(D^k\times D^{n-k})\cong S^k\times D^{n-k}$; moreover the two diffeomorphisms may be chosen compatibly, so that the $n$-disc with a standard $k$-handle followed by the standard $(k+1)$-handle is again an $n$-disc.

## Facts & Assumptions

**Given:** Integers $0\le k\le n-1$, the standard $k$-handle $D^k\times D^{n-k}$ and $(k+1)$-handle $D^{k+1}\times D^{n-k-1}$, the stereographic embedding $\varphi_0:D^{n-k-1}\to\partial D^{n-k}$ onto the upper hemisphere of $S^{n-k-1}=\partial D^{n-k}$, and the standard equatorial embedding $\sigma:S^{k-1}\times D^{n-k}\to\partial D^n$.

[F1] [[def-attaching-a-smooth-handle-with-corner-rounding]] and [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]: attaching means gluing along the attaching region $S^{k'-1}\times D^{n-k'}$ by the given embedding and rounding the corner; the outgoing region is $D^{k'}\times S^{n-k'-1}$ and the belt sphere is $\{0\}\times S^{n-k'-1}$; there is no corner if $k'=0$ or $k'=n$.

[F2] [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]: two compatible roundings of the same attachment data are diffeomorphic by an isotopy supported in the collar, so the diffeomorphism class of the rounded attachment does not depend on the rounding chosen.


[F4] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is assumed; it is used by the corner-rounding and collar suppliers cited in [F1] and [F2].

## Proof

**Proof technique:** direct.

1.1 For (ii), use the rounded product $D^k\times D^{n-k}$ as the standard $n$-disc and attach a second copy along $S^{k-1}\times D^{n-k}$. The first factors glue as two hemispheres of $S^k$, with a smooth seam in their collar coordinates. Taking the product with $D^{n-k}$ and rounding the remaining corners gives $S^k\times D^{n-k}$; the lower handle's belt sphere becomes $\{p\}\times S^{n-k-1}$, for a point $p$ in its core hemisphere. For $k=0$ the seam is empty and this says that adding a disjoint disc gives $S^0\times D^n$. [F1, F2, given]

1.2 Put $p=n-k-1\ge0$. Model the disk factor $D^{p+1}$ by $D^p\times[0,1]$, rounding its bottom and side corners, and retain the top face $D^p\times\{1\}$ as the attaching hemisphere. This is the usual disk with a corner introduced along the equator: in meridian coordinates a smooth monotone rounding identifies it with $D^{p+1}$, carrying the top face onto the upper hemisphere. Its disk parametrization is chosen to be $\varphi_0$. The same product charts on the attaching seam are used on the handle side. Thus the rounded attachment in (i) is represented by the rounded product $$\bigl((S^k\times[0,1])\cup_{S^k\times\{1\}}D^{k+1}\bigr)\times D^p.$$ For $p=0$ the disk factor is simply an interval and the attaching hemisphere is one endpoint. [F1, F2, construct]

2.1 The first factor of step 1.2 is a disk with an extra boundary collar. Identify its cap with the unit disk in $\mathbb R^{k+1}$ and send $(u,t)\in S^k\times[0,1]$ to $(2-t)u$. The cap boundary and $t=1$ have the same radial collar coordinate, so this is a smooth identification, across the seam, with the disk of radius $2$. Consequently the product in step 1.2 is a product of disks, whose compatible rounding is a standard $n$-disc (round the convex product boundary and use its smooth radial parametrization). The rounding-independence supplier makes this conclusion independent of the compatible profiles. This proves (i), including $k=0$ and $k=n-1$. [F1, F2, step 1.2, construct]

3.1 In the two-hemisphere identification of step 1.1 choose the disk-factor hemisphere and its framing exactly as in step 1.2. The standard $(k+1)$-handle is then attached by $1\times\varphi_0$, so step 2.1 returns an $n$-disc. These are the required compatible identifications for the consecutive standard pair; Countable Choice is inherited only from the attachment and rounding conventions. [F1, F2, F4, step 1.1, step 2.1] ∎