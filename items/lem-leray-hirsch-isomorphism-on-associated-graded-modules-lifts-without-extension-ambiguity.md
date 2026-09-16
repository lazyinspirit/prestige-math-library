---
id: lem-leray-hirsch-isomorphism-on-associated-graded-modules-lifts-without-extension-ambiguity
kind: lemma
title: The Leray–Hirsch associated-graded isomorphism lifts without extension ambiguity
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-cohomological-serre-spectral-sequence, thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence, lem-finite-and-complete-filtered-isomorphism-lifting, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Miller, MIT 18.906 notes, proof of Theorem 33.5"
      url: "https://ocw.mit.edu/courses/18-906/algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf"
      locator: "Lecture 33, Theorem 33.5 and proof, printed pp.122–123"
---

## Statement

Assume AC.  For
$$\Phi((a_i))=\sum_i p^*a_i\smile e_i,$$
filter the source by base degree and the target by the cohomological Serre
filtration.  If the induced map $\operatorname{gr}\Phi$ is an isomorphism,
then $\Phi$ itself is an isomorphism.  This conclusion does not choose a
splitting of either filtration.

## Facts & Assumptions

**Given:** A Serre fibration over a CW base, a supplied finite homogeneous family $(e_i)$, and the displayed actual cup-product map.

[F1] [[thm-cohomological-serre-spectral-sequence]] gives in each total degree the exhaustive, complete Serre filtration and identifies its associated graded with $E_\infty$, under AC.

[F2] [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]] states that pullback and cup product preserve the filtration and induce the corresponding products on every page.

[F3] [[lem-finite-and-complete-filtered-isomorphism-lifting]] states that a filtered map between the applicable finite complete filtrations is an isomorphism if its associated-graded map is one.

[A1] [[def-axiom-of-choice]] is used only through [F1]–[F2].

## Proof

**Proof technique:** lift the actual filtered map.

1.1 Put a summand $H^{q-|e_i|}(B;R)$ in filtration at least $p$ when its base class has Serre filtration at least $p$.  By [F2], $p^*a_i$ has that filtration and cupping with the fixed class $e_i$ cannot decrease it.  Hence the displayed $\Phi$ is a filtered homomorphism, not merely a map invented on $E_\infty$. [F2]

2.1 Fix total degree $q$.  The first-quadrant bounds make both induced filtrations finite in that degree, while [F1] supplies exhaustivity, completeness, and the identification with the stable page.  Under the hypothesis that $\operatorname{gr}\Phi$ is an isomorphism, [F3] therefore says $\Phi:H^q_{\rm source}\to H^q(E;R)$ is an isomorphism. [F1, F3, step 1.1]

3.1 Applying step 2.1 in every degree proves the graded-module assertion.  The inverse is obtained by the filtered-isomorphism lemma from kernels and cokernels along the finite filtration; no complements or splitting maps are chosen.  Empty summand families and the zero ring give zero maps between zero modules, a one-step filtration reduces to the assumed graded isomorphism, and filtration endpoints are covered by finiteness.  AC is used exactly through [A1] in the cohomological Serre suppliers. [F1, F3, A1, step 2.1] ∎
