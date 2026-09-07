---
id: "thm-one-critical-point-handle-attachment"
kind: "theorem"
title: "One critical point handle attachment"
deps: ["lem-local-morse-sublevel-pair-is-a-handle-pair", "lem-gradient-flow-identifies-the-local-and-global-attaching-regions", "cor-regular-sublevels-are-diffeomorphic", "lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism"]
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
proof_strategy: "local model and global collars"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $f:M\to\mathbb R$ be smooth on a boundaryless $n$-manifold and let $a<b$ be regular values. If $f^{-1}([a,b])$ is compact and has exactly one critical point $p$, nondegenerate of index $k$, then $M^b$ is diffeomorphic to $M^a$ with one $k$-handle attached and corners rounded. No orientation or Morse–Smale hypothesis is required.

## Facts & Assumptions

[F1] [[lem-local-morse-sublevel-pair-is-a-handle-pair]]: Assume $\mathrm{AC}_\omega$. In a sufficiently small Morse chart $f=c-|u|^2+|v|^2$, with $u\in\mathbb R^k$ and $v\in\mathbb R^{n-k}$, the change across $c$ is a rounded index-$k$ handle: a compact product piece attaches along $S^{k-1}\times D^{n-k}$ on $f=c-\varepsilon$, its core is $v=0$, and after a local modification the remaining region up to $c+\varepsilon$ is a regular collar. The modification agrees with $f$ off a compact subset of the chart. The collar assertion is made inside a compact band having no other critical point.

[F2] [[lem-gradient-flow-identifies-the-local-and-global-attaching-regions]]: Assume $\mathrm{AC}_\omega$. Let $f^{-1}([a,b])$ be compact, with regular endpoints and exactly one critical point of value $c$. For the local Morse attaching embedding on $M_{c-\varepsilon}$, where $a<c-\varepsilon<c$, descending flow transports its entire thickening to $M_a$ as an embedded framed attaching region, provided there is no intervening critical value. The regular regions outside the local critical model are identified by collars.

[F3] [[cor-regular-sublevels-are-diffeomorphic]]: Assume $\mathrm{AC}_\omega$. Under the compact regular closed-band hypothesis with $a<b$, the sublevels $M^a$ and $M^b$ are diffeomorphic as manifolds with boundary.

[F4] [[lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism]]: For fixed attaching and product-collar data, two compatible smooth monotone roundings of a handle attachment are diffeomorphic by an isotopy supported in that collar. The diffeomorphism is the identity outside the collar.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Put $c=f(p)$. Regularity of the endpoints gives $a<c<b$. Choose $\varepsilon>0$ with $[c-\varepsilon,c+\varepsilon]\subset(a,b)$ and a sufficiently large relative Morse chart for the local lemma. All closed subbands are compact, and the two outer bands have no critical points. [F1, given]

2.1 The local lemma attaches one compact product handle to $M^{c-\varepsilon}$, rounds it, and identifies the resulting smooth manifold with the modified lower sublevel. Its complement in $M^{c+\varepsilon}$ is the regular modified-function collar. The modification has compact chart support, so all maps glue to the unchanged exterior using the common collars. Absorbing the final collar yields the smooth attachment description of $M^{c+\varepsilon}$. [F1, step 1.1]

3.1 Transport the attaching tube and its framing to $M_a$ along the lower regular band. The lower and upper regular sublevels are diffeomorphic, and their product collars allow the attachments to be glued under these identifications. Hence the same handle attached to $M^a$ gives $M^b$. Compatible corner choices give diffeomorphic answers. [F2, F3, F4, step 2.1]

4.1 For later pair calculations, the comparison can retain a pushed-in copy $A_0$ of the lower sublevel. Indeed all adjustments occur in compact boundary collars or the attaching chart: choose the inner edge of the lower collar below their support, and compress $M^a$ to that inner edge. Both the original lower sublevel and the lower sublevel in the attachment retract to this same copy by collar compression. Thus their inclusions into the compared upper spaces agree up to homotopy of pairs. This does not assert that an ambient diffeomorphism sends the original lower boundary to the attachment seam. Empty lower sublevels and indices $0,n$ are exactly the cases proved in the local lemma. [F1, F2, step 3.1] ∎
