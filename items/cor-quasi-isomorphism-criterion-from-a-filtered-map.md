---
id: cor-quasi-isomorphism-criterion-from-a-filtered-map
kind: corollary
title: Quasi isomorphism criterion from a filtered map
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: ["thm-spectral-sequence-comparison-theorem", "thm-a-first-quadrant-filtered-complex-spectral-sequence-converges-to-filtered-homology", "def-filtered-chain-map", "prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences", "def-quasi-isomorphism", "prop-e-one-is-homology-of-the-associated-graded-complex", "thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology", "def-strong-convergence-of-a-spectral-sequence", "def-induced-filtration-on-homology"]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "The Stacks Project, Homological Algebra"
      url: "https://stacks.math.columbia.edu/download/homology.pdf"
---

## Statement

Let $f:C\to D$ be a filtered chain map whose maps on every associated-graded complex are quasi-isomorphisms. If both filtered-complex spectral sequences strongly converge to their actual homology with target filtrations satisfying the finite or complete module hypotheses of the comparison theorem, then $f$ is a quasi-isomorphism. Degreewise finite filtrations on both complexes suffice, without a first-quadrant or uniform-bound hypothesis.

## Facts & Assumptions

[F1] [[def-filtered-chain-map]] and [[prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences]] give the induced spectral morphism. [[prop-e-one-is-homology-of-the-associated-graded-complex]] identifies its first page naturally with graded-complex homology.

[F2] [[def-induced-filtration-on-homology]] is the homology image filtration. The actual-cycle abutment and completeness conventions are in [[def-strong-convergence-of-a-spectral-sequence]].

[F3] [[thm-spectral-sequence-comparison-theorem]] applies to page isomorphisms with compatible filtered target maps under the stated target hypotheses.

[F4] [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]] proves the degreewise finite abutment and stabilization, without a quadrant restriction. [[thm-a-first-quadrant-filtered-complex-spectral-sequence-converges-to-filtered-homology]] gives its first-quadrant specialization with completeness.

[F5] [[def-quasi-isomorphism]] requires isomorphisms on homology in every degree.

## Proof

**Given:** $f$ and the graded quasi-isomorphism hypothesis.

1.1 By [F1] there is a morphism of spectral sequences, whose component at $(p,q)$ on page one identifies with $H_{p+q}(\operatorname{gr}_pf)$. This is an isomorphism by the hypothesis and [F5], for every $p,q$. Thus the required isomorphism is on an entire page, including every zero graded complex. [F1, F5]

1.2 The map $H_n(f)$ preserves the homology image filtration: a cycle coming from $F_pC$ maps to a cycle coming from $F_pD$. On its graded quotient, it sends the class of an actual cycle $c$ to that of $f(c)$. The spectral map does the same on the limiting actual-cycle classes, because it is induced by the filtered chain map. Hence the given strong abutment identifications commute with the maps $H_n(f)$; these are the actual maps required by comparison. [F1, F2]

2.1 Under the conditional strong-convergence and target hypotheses, apply [F3] to steps 1.1–1.2. It makes every $H_n(f)$ an isomorphism, which is exactly the quasi-isomorphism conclusion. This does not claim that completeness of the complexes by itself establishes those convergence hypotheses. [F3, F5, step 1.1, step 1.2]

3.1 If instead both chain filtrations are degreewise finite, [F4] supplies canonical actual-cycle abutments, two-sided stationarity and finite homology filtrations. Each such finite target filtration is exhaustive and separated, and its lower quotient tail is constant equal to the target, so its completion map is an isomorphism by [F2]. Thus strong convergence and the finite comparison hypotheses hold, and step 2.1 applies. This argument uses the unrestricted bounded theorem in [F4], so no first-quadrant assumption is silently added; the first-quadrant theorem is its named special case. Finite bounds may vary with degree, repeated terms and a one-step filtration are allowed, and neither branch introduces AC. [F2, F4, step 2.1] ∎
