---
id: def-mod-two-intersection-number
kind: definition
title: "The mod 2 intersection number"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-transverse-complementary-dimensional-intersection-set, lem-compact-transverse-complementary-intersections-are-finite, def-transverse-smooth-maps, def-transverse-embedded-submanifolds, thm-transversality-homotopy-theorem, def-smooth-family-of-maps-and-evaluation-map, def-countable-choice, def-integers-modulo-n, prop-the-diagonal-is-an-embedded-submanifold, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]
justified_by: [thm-mod-two-intersection-number-is-homotopy-invariant]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-12.md"
      - "research/frontier-38-owner-30-alpha-batch-12-5a.md"
      - "research/frontier-38-owner-30-step5-hash-12-post-5a.json"
    content_sha256: "4437b28cc996ba48638d1235b0f08c12097d549fe4d82064e44e293e298c010d"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 §4, printed pp. 78–79 (definition of $I_2(f,Z)$, extension by homotopy, submanifold case)"
    - title: "John Milnor, Topology from the Differentiable Viewpoint (Princeton University Press; complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "§4, printed pp. 20–25 (the parity count and its homotopy invariance)"
---

## Definition

Let $X$ be a compact smooth manifold without boundary, $M$ a smooth $n$-manifold, $Z\subseteq M$ a closed embedded submanifold, and let $f:X\to M$ be smooth and transverse to $Z$ with $\dim X+\dim Z=n$ ([[def-transverse-smooth-maps]], [[def-transverse-complementary-dimensional-intersection-set]]). The **mod 2 intersection number** is

$$I_2(f,Z):=\#f^{-1}(Z)\bmod 2\in\mathbb Z/2\mathbb Z,$$

the cardinality of the finite transverse intersection reduced modulo two ([[lem-compact-transverse-complementary-intersections-are-finite]], [[def-integers-modulo-n]]).

For an arbitrary smooth $g:X\to M$ choose a smooth map $f$ homotopic to $g$ with $f\pitchfork Z$ ([[thm-transversality-homotopy-theorem]], under Countable Choice; the homotopy is a smooth family in the sense of [[def-smooth-family-of-maps-and-evaluation-map]]) and define $I_2(g,Z):=I_2(f,Z)$. For compact complementary-dimensional transverse submanifolds $A,B\subseteq M$, where one is compact and the other closed, $I_2(A,B):=I_2(i_A,B)$ with $i_A$ the inclusion ([[def-transverse-embedded-submanifolds]]). No orientability of $X$, $M$ or $Z$ is assumed; the count lives in $\mathbb Z/2\mathbb Z$. Well-definedness of the extension to arbitrary maps is established by [[thm-mod-two-intersection-number-is-homotopy-invariant]], not assumed here. Countable Choice is assumed for selecting transverse representatives and for the classification used to prove independence of that selection; the transverse finite count and the empty case (which contributes $0$) are choice-free.

For compact boundaryless sources $X,Z$ and complementary-dimensional smooth maps $f:X\to M$, $g:Z\to M$, set $I_2(f,g):=I_2(f\times g,\Delta_M)$. The diagonal is a closed embedded $n$-submanifold of $M\times M$ ([[prop-the-diagonal-is-an-embedded-submanifold]]); closedness follows from Hausdorffness. Modulo its tangent diagonal, the differential of $f\times g$ is $(v,w)\mapsto df(v)-dg(w)$, so transversality is exactly that of $f,g$. In the transverse case this number is $\#(X\times_MZ)\bmod2$. Homotopies of either or both maps give product homotopies, hence this number is invariant by the fixed-submanifold homotopy theorem. The arbitrary-map extension is under $\mathrm{AC}_\omega$ as above.
