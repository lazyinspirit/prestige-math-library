---
id: cor-finite-range-comparison-for-arbitrary-target
kind: corollary
title: "Finite-range comparison with an arbitrary simply connected target"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison
  - thm-cw-approximation-of-an-arbitrary-space
  - lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice
  - def-weak-homotopy-equivalence
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf"
      locator: "Proposition 4.13 and Theorem 4.32/Corollary 4.33; source-preserving CW extension uses the local published approximation construction"
verification:
  precheck: pass
---

## Statement

Assume AC. Let N≥2, X be a nonempty path-connected simply connected CW complex, Y an arbitrary nonempty path-connected simply connected space, and f:(X,x₀)→(Y,y₀) a based continuous map. If its integral homology maps are isomorphisms for 0≤i<N and surjective at N, its based homotopy maps are isomorphisms for 1≤i<N and surjective at N. No CW-type or ordinary product-CW hypothesis is required on Y.

## Facts & Assumptions

**Given:** AC; an integer $N\ge2$; a nonempty path-connected simply connected CW complex $X$; an arbitrary nonempty path-connected simply connected space $Y$; and a based continuous map $f:X\to Y$ whose integral homology map is an isomorphism for $0\le i<N$ and a surjection for $i=N$.

[F1] The relative CW-approximation theorem produces a CW complex $Z$ containing $X$ as a subcomplex and a weak equivalence $Q:Z\to Y$ restricting to a prescribed map on $X$ ([[thm-cw-approximation-of-an-arbitrary-space]], [[def-weak-homotopy-equivalence]]).

[F2] A weak equivalence induces an isomorphism in integral singular homology ([[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]]) and isomorphisms of all based homotopy groups, with a bijection on path components ([[def-weak-homotopy-equivalence]]).

[F3] The preceding CW comparison theorem applies to a based map of nonempty path-connected simply connected CW complexes with the stated homology hypotheses ([[thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison]]).

[F4] AC is inherited from the CW comparison theorem [F3]; the relative CW approximation in [F1] assumes no choice principle ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Apply the relative clause of `thm-cw-approximation-of-an-arbitrary-space` directly to $f:X\to Y$. It gives a CW complex $Z$ containing $X$ as a subcomplex and a weak equivalence $Q:Z\to Y$ whose restriction to $X$ is exactly $f$. The weak-equivalence homology supplier makes $Q_*$ an integral homology isomorphism, while the definition of weak equivalence makes it an isomorphism on all based homotopy groups and a bijection on components. Thus $Z$ is path connected and simply connected, and the inclusion $j:X\to Z$ has precisely the required homology hypotheses, since $Q_*j_*=f_*$. [given, F1, F2]

2.1 Apply the preceding lemma to $j$ and compose with $Q_*$. This avoids assuming that an ordinary finite product of arbitrary CW complexes has its naive product topology as a CW topology. No lift of $f$ through an unrelated CW approximation is asserted. [step 1.1, F2, F3, F4] ∎
