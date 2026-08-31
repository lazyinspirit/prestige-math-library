---
id: prop-transversality-is-stable-on-a-compact-source
kind: proposition
title: "Transversality is stable on a compact source"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-a-smooth-map-transverse-to-an-embedded-submanifold,
       lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient,
       thm-embedded-submanifolds-admit-local-defining-submersions,
       cor-the-immersion-and-submersion-loci-are-open]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $M$ be compact, let $Z\subseteq N$ be a closed embedded submanifold, and let
$F:M\to N$ be smooth with $F\pitchfork Z$. Then every smooth map $G:M\to N$
sufficiently close to $F$ in the $C^1$ topology is also transverse to $Z$.

## Facts & Assumptions

**Given:** A compact manifold $M$, a closed embedded submanifold $Z\subseteq N$, and a smooth map $F:M\to N$ with $F\pitchfork Z$.

[F1] Transversality at a point is equivalent to surjectivity of the induced map to the normal quotient ([[lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient]]).

[L1] Embedded submanifolds admit local defining submersions, and the submersion locus is open ([[thm-embedded-submanifolds-admit-local-defining-submersions]], [[cor-the-immersion-and-submersion-loci-are-open]]).

## Proof
**Proof technique:** direct.

1.1 If $F(p)\notin Z$, closedness of $Z$ gives a neighbourhood $V_p$ of $F(p)$ disjoint from $Z$. Shrink to a relatively compact neighbourhood $U_p$ of $p$ with $F(\overline{U_p})\subseteq V_p$. Every map $G$ sufficiently $C^0$-close to $F$ on $\overline{U_p}$ still maps $U_p$ into $V_p$, so transversality there is vacuous. [given, choose]

1.2 If $F(p)\in Z$, choose a neighbourhood $V_p$ of $F(p)$ and a defining submersion $h_p:V_p\to\mathbb R^{c_p}$ for $Z$ by [L1]. Because $F\pitchfork Z$, the composite $h_p\circ F$ is a submersion at $p$ by [F1]. In source and target coordinates, some $c_p\times c_p$ minor of $D(h_p\circ F)$ is nonzero at $p$. Shrink to a relatively compact $U_p$ so that $F(\overline{U_p})\subseteq V_p$ and this minor stays nonzero on $\overline{U_p}$, using the fixed-map openness in [L1]. If $G$ is sufficiently $C^1$-close to $F$ on $\overline{U_p}$, then $G(\overline{U_p})\subseteq V_p$ and the corresponding minor of $D(h_p\circ G)$ remains nonzero. Thus $h_p\circ G$ is a submersion on $U_p$, and $G\pitchfork Z$ there. [F1, L1, given, choose, algebra]

2.1 The sets $U_p$ from steps 1.1 and 1.2 cover the compact manifold $M$, so a finite subcover suffices. Intersect the corresponding finitely many $C^1$ neighbourhoods of $F$. Any $G$ in that intersection is transverse to $Z$ on each $U_p$, hence on all of $M$. [step 1.1, step 1.2, given, choose]

3.1 Therefore transversality is stable on a compact source in the $C^1$ topology. [step 2.1] ∎
