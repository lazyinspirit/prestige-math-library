---
id: lem-iterated-cofibers-rotate-with-suspension-reflection
kind: lemma
title: Iterated cofibers rotate with suspension reflection
deps: ["lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient", "def-reduced-cone-suspension-and-cofiber-sequence", "lem-pushouts-and-products-preserve-the-cofibrations-used-here", "lem-interval-exponential-law-and-quotient-homotopies"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 8 §4 second lemma and preceding diagram p.60
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For a based map $f:X\to Y$ of well-pointed CGWH spaces, put $i:Y\to C_f$ and let $j:C_f\to C_i$ be the next cofiber inclusion. The collapse $\psi:C_i\to\Sigma X$ is a based homotopy equivalence with $\psi\circ j=q$, where $q:C_f\to\Sigma X$ collapses $Y$. Under it, the next cofiber map agrees up to based homotopy with $-\Sigma f$. Suspension commutes with cone formation, with the two-coordinate interchange in the quotient map retained.

## Facts & Assumptions

[F1] Cones attach at height zero, and negative suspension reflects the height. [[def-reduced-cone-suspension-and-cofiber-sequence]]

[F2] Product pairs and pushouts preserve cofibrations. [[lem-pushouts-and-products-preserve-the-cofibrations-used-here]]

[F3] Collapsing the cone of a based cofibration is a homotopy equivalence. [[lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]]

[F4] Quotient homotopies descend continuously. [[lem-interval-exponential-law-and-quotient-homotopies]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 The product-pair construction for the well-pointed pair (X,{x0}) and the interval endpoints gives a cofibration of $X\times\partial I\cup\{x_0\}\times I$ into $X\times I$. Collapse the top and basepoint track: pushout HEP gives the based cone-base cofibration $X\to CX$. Its pushout along f makes $i:Y\to C_f$ a cofibration. F3 therefore gives the homotopy equivalence $\psi:C_i\to C_f/Y=\Sigma X$. On the included copy $j(C_f)$ this collapse is literally $q$, so $\psi\circ j=q$. [F1, F2, F3]

1.2 In $\Sigma C_f$, write a point of the cone portion as (x,s,t), with s the cone coordinate and t the suspension coordinate. Sending it to (x,t,s) in $C(\Sigma f)$, and [y,t] to [y,t] on the target part, respects every collapsed subset and the attaching relation. The same coordinate interchange is its continuous inverse by F4. The resulting final quotient on $\Sigma^2X$ interchanges its two suspension coordinates, rather than acting identically. [F1, F4]

2.1 Identify $C_i$ with $CX\cup_f CY$. On CX set $H([x,s],t)=[f(x),t-st]$ in $\Sigma Y$, and on CY set $H([y,s],t)=[y,s+t-st]$. At s=0 the two values agree via f. At the CX tip s=1 the value is [f(x),0]=*; at the CY tip it is [y,1]=*. The basepoint tracks are constant. F4 descends these continuous formulas. At t=0 the map collapses CX and is the usual quotient of CY; at t=1 it is $-\Sigma f$ after ψ on CX and is constant on CY. This proves the claimed reflected next arrow. [F1, F4, step 1.1]

3.1 To identify the interchange sign explicitly, model $I^2/\partial I^2$ by the one-point compactification of $\mathbb R^2$ using the same increasing coordinate homeomorphism in each variable. Swap is the linear map T(v1,v2)=(v2,v1), and first-coordinate reflection is R(v1,v2)=(-v1,v2). The matrix $R^{-1}T$ is a quarter-turn rotation. A path of rotations from it to the identity gives a path of invertible matrices from T to R. These matrices are orthogonal, so they preserve norms uniformly and extend to a homotopy fixing infinity. Keeping X as a parameter and collapsing its basepoint gives interchange homotopic to single-coordinate reflection on $\Sigma^2X$. Thus iteration preserves exactly the reflection sign in the cofiber convention. [F1, F4, step 1.2] ∎
