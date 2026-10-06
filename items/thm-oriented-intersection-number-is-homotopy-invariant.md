---
id: thm-oriented-intersection-number-is-homotopy-invariant
kind: theorem
title: "The oriented intersection number is homotopy invariant"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-boundary-of-a-compact-one-manifold-has-even-cardinality, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, def-oriented-intersection-number, lem-preimage-orientation-agrees-with-the-local-intersection-sign, lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs, thm-transverse-preimage-for-manifolds-with-boundary, def-smooth-family-of-maps-and-evaluation-map, thm-transversality-homotopy-theorem, def-countable-choice, thm-mod-two-intersection-number-is-homotopy-invariant]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading, followed by recorded Step 7 current repair argument acceptance. The repair receipt records local author review; no independent repair audit is claimed. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-12.md"
      - "research/frontier-38-owner-30-alpha-batch-12-5a.md"
      - "research/frontier-38-owner-30-step7-v2/step7-v2-initial-r1-u12.json"
    content_sha256: "e0a1d0b392f0e5d2d0aa27b94681072f118a8e790e0370d940d8141cf65701b1"
  precheck: pass
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §3, printed p. 108 (homotopic maps have equal oriented intersection numbers, via the boundary of a compact oriented 1-manifold)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§5, printed pp. 28–29 (Lemma 1 and its use for homotopy invariance of degree)"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $X$ be a compact oriented smooth manifold without boundary, $M$ an oriented smooth $n$-manifold without boundary, and $Z\subseteq M$ a closed oriented embedded submanifold with $\dim X+\dim Z=n$. Let $F:[0,1]\times X\to M$ be a smooth family transverse to $Z$, including on the boundary faces. Then the endpoint slice maps $F_0,F_1$ are transverse to $Z$ and $$I(F_0,Z)=I(F_1,Z),$$ with the oriented intersection number of [[def-oriented-intersection-number]]. Consequently $I(\cdot,Z)$ is well defined on homotopy classes of smooth maps $X\to M$: any two transverse maps in the same homotopy class give the same number, and the definition extends to all smooth maps. Compactness of the source and closedness of $Z$ ensure a compact trace; compactness of $M$ is unnecessary; the safe proper extension is recorded in the remark on properness later on this page.

## Facts & Assumptions

**Given:** Oriented $X,M,Z$ with $\dim X+\dim Z=\dim M$, a smooth family $F:[0,1]\times X\to M$ transverse to $Z$ including on the faces, and $\mathrm{AC}_\omega$ for the extension clause.

[F1] $W:=F^{-1}(Z)$ is a compact oriented $1$-manifold with boundary $F_0^{-1}(Z)\sqcup F_1^{-1}(Z)$, neat in $[0,1]\times X$, and the slices $F_0,F_1$ are transverse to $Z$ ([[thm-transverse-preimage-for-manifolds-with-boundary]], [[def-smooth-family-of-maps-and-evaluation-map]]).

[F2] With the preimage orientation, the boundary signs of $W$ satisfy $\sum_{p\in\partial W}\varepsilon_W(p)=I(F_1,Z)-I(F_0,Z)$ ([[lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs]], [[lem-preimage-orientation-agrees-with-the-local-intersection-sign]]).

[F3] The signed boundary sum of a compact oriented $1$-manifold vanishes ([[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]); its boundary also has even cardinality ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]).

[F4] $I(f,Z)$ is the finite sum of the local signs over a transverse representative, and the definition on arbitrary smooth maps uses a transverse homotopic representative ([[def-oriented-intersection-number]]).

[F5] Under $\mathrm{AC}_\omega$, a smooth map is homotopic to a transverse one ([[thm-transversality-homotopy-theorem]]). A homotopy between transverse endpoints can be smoothed and made transverse with its endpoints fixed by the end-collar construction in step 3.1 of [[thm-mod-two-intersection-number-is-homotopy-invariant]], and its explicit parameter-cutoff argument ([[def-countable-choice]]).

## Proof

**Proof technique:** direct; the trace's signed boundary count is computed twice.

1.1 By [F1] the trace $W$ is a compact oriented $1$-manifold with boundary the disjoint union of the finite sets $F_0^{-1}(Z)$ and $F_1^{-1}(Z)$, and the endpoint slice maps $F_0,F_1$ are transverse to $Z$, so $I(F_0,Z)$ and $I(F_1,Z)$ are defined by [F4]. [F1, F4, given]

2.1 By [F2] the sum of the outward-normal-first boundary signs of $W$ equals $I(F_1,Z)-I(F_0,Z)$; by [F3] that sum vanishes, because $W$ is a compact oriented $1$-manifold. Hence $I(F_1,Z)=I(F_0,Z)$. [F2, F3, step 1.1, algebra]

3.1 For the extension to arbitrary smooth maps, let $g_0,g_1:X\to M$ be transverse and homotopic; use the end-collar construction of [F5] to obtain a transverse homotopy fixed at those endpoints. Applying 2.1 to that trace gives $I(g_0,Z)=I(g_1,Z)$ whenever both are transverse; for an arbitrary smooth map one chooses a transverse representative by [F5], and the value is independent of the choice by the previous sentence, so the definition of [F4] is well posed on homotopy classes. Countable Choice is inherited through the classification and used for the approximation suppliers; the finite determinant and sum computations add no choice. [F2, F3, F4, F5, step 2.1, choose] ∎
