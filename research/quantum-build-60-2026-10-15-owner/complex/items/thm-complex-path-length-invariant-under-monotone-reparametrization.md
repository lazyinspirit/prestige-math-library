---
id: thm-complex-path-length-invariant-under-monotone-reparametrization
kind: theorem
title: Complex path length is invariant under monotone surjective reparametrization
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- def-complex-path-polygonal-length-and-rectifiability
- thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed
- thm-arc-length-is-invariant-under-monotone-reparametrization
- def-monotone-function
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
  - title: U. Lang, Differential Geometry I, Section 1.1
    url: https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf
---

## Statement

Let $\gamma:[a,b]\to\mathbb C$ be continuous and let $\varphi:[c,d]\to[a,b]$ be continuous, surjective, and either nondecreasing or nonincreasing. Then

$$L_{\mathbb C}(\gamma\circ\varphi)=L_{\mathbb C}(\gamma).$$

This holds for finite and infinite length, pauses, reversal, and singleton intervals. For continuous bijections, the increasing case preserves orientation and the decreasing case reverses it. A constant path has no nontrivial orientation to distinguish.

## Facts & Assumptions

**Given:** The path and reparametrization, with the monotonicity terminology of [[def-monotone-function]].

[F1] Coordinate length equals complex length, including singleton intervals ([[def-complex-path-polygonal-length-and-rectifiability]], [[thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed]]).

[F2] A continuous surjective monotone reparametrization preserves Euclidean path length, including pauses, reversal and singleton intervals ([[thm-arc-length-is-invariant-under-monotone-reparametrization]]).

## Proof

1.1 Put $\Gamma=\Phi\circ\gamma$, a continuous Euclidean path by [F1]. Its reparametrization is $\Gamma\circ\varphi=\Phi\circ(\gamma\circ\varphi)$. By [F2], these Euclidean paths have equal length. [given, F1, F2]

2.1 Apply [F1] to both paths in step 1.1 to obtain the stated equality. If either parameter interval is a singleton, surjectivity makes the image interval a singleton when necessary, and both paths have length zero; this is also covered by [F1] and [F2]. Orientation here records the increasing or decreasing direction of the parameter bijection. [step 1.1, F1, F2, given] ∎
