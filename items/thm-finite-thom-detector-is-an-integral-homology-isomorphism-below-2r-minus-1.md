---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1.json
  precheck: pass
id: thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1
kind: theorem
title: "The finite Thom detector is an integral homology isomorphism below 2r−1"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - def-finite-thom-classifying-detector-map
  - thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r
  - lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q
  - thm-unoriented-thom-cohomology-away-from-two-below-2r
  - thm-integral-finite-generation-of-mo-and-mso-homology
  - lem-finite-products-and-comparison-cones-have-finite-type
  - thm-finite-generation-cohomological-uct-gives-integral-cone-comparison
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§13, Theorem 13.2, printed pp. 24–25; coefficient and integral-cone upgrades and the strict endpoint are proved locally."
    - title: "John Milnor and James Stasheff, Characteristic Classes"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Chapter 18, §§18.1–18.4: universal Thom spaces and Thom cohomology."

---

## Statement

Assume AC. For $f_r:T_r\to P_r$, $f_{r*}:H_i(T_r;\mathbb Z)\to H_i(P_r;\mathbb Z)$ is an isomorphism for $i<2r-1$ and a surjection for $i=2r-1$. No endpoint injectivity is asserted.

## Facts & Assumptions

**Given:** AC; a rank $r\ge2$; the detector $f_r:T_r\to P_r$; $D=2r-1$; and the integral singular-chain mapping cone $C_f$ of $f_r$.

[F1] The mod-two comparison identifies the mod-two cohomology of source and target through degree $D$ ([[thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r]]), and the away-from-two Thom and $K(\mathbb F_2,q)$ calculations give rational and odd-primary vanishing of both reduced cohomologies below $2r$ ([[thm-unoriented-thom-cohomology-away-from-two-below-2r]], [[lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q]]).

[F2] The source and target have finitely generated integral homology and the cone has finitely generated homology with a degreewise split exact sequence ([[thm-integral-finite-generation-of-mo-and-mso-homology]], [[lem-finite-products-and-comparison-cones-have-finite-type]]); the finite-generation cohomological-UCT comparison converts vanishing field cohomology into vanishing cone homology ([[thm-finite-generation-cohomological-uct-gives-integral-cone-comparison]]); AC underlies the field choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Set $D=2r-1$. The finite-type lemma and the away-from-two Thom theorem prove that for every field $F$ of characteristic different from two, both reduced cohomology groups $\widetilde H^i(T_r;F)$ and $\widetilde H^i(P_r;F)$ vanish for $0<i<2r$. In degree zero both spaces are connected, so the ordinary $H^0$ map is also an isomorphism. The mod-two comparison above proves the $\mathbb F_2$ cohomology isomorphism through every degree $k\le D$. Therefore $f_r^*$ is an isomorphism in ordinary cohomology for $F=\mathbb Q$ and every $\mathbb F_p$, in all degrees $0\le i\le D$. [given, F1]

2.1 Let $C_f$ be the integral singular-chain mapping cone of $f_r$. The integral finite-generation theorem and the finite-product cone lemma prove $H_i(T_r;\mathbb Z)$ and $H_i(P_r;\mathbb Z)$ are finitely generated, so its cone long exact sequence makes $H_i(C_f)$ finitely generated in every degree. The cone is free degreewise as an abelian chain complex. For each field $F$, the degreewise-split cone cochain sequence gives $H^{i-1}(P_r;F)\to H^{i-1}(T_r;F)\to H^i(\operatorname{Hom}(C_f,F))\to H^i(P_r;F)\to H^i(T_r;F)$. The adjacent cohomology isomorphisms force $H^i(\operatorname{Hom}(C_f,F))=0$ for $0\le i\le D$ (with negative groups zero at $i=0$). The cohomological UCT over $\mathbb Z$ surjects this zero group onto $\operatorname{Hom}(H_i(C_f),F)$. Thus $\operatorname{Hom}(H_i(C_f),\mathbb Q)=0$ and $\operatorname{Hom}(H_i(C_f),\mathbb F_p)=0$ for every prime $p$. A finitely generated abelian group with all these $\operatorname{Hom}$ groups zero is zero: $\mathbb Q$ detects any nonzero free summand, and $\mathbb F_p$ detects any nonzero $p$-primary cyclic summand. Therefore $H_i(C_f)=0$ for $i\le D$. The integral cone exact sequence yields the stated isomorphism for $i<D$ and surjection at $D$. [step 1.1, F2]

3.1 $f_{r*}$ is an isomorphism for $i<D=2r-1$, $f_{r*}$ is surjective for $i=D=2r-1$. This is exactly the endpoint needed below. It gives no injectivity assertion at degree $2r-1$ and uses no comparison at or beyond $2r$. The proof is the application of the finite-generation cohomological-UCT comparison; the finite-product cone computation independently records the same strict conclusion. [step 2.1, F2] ∎
