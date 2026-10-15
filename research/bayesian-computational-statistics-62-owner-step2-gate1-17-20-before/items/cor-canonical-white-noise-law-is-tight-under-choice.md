---
id: cor-canonical-white-noise-law-is-tight-under-choice
kind: corollary
title: The canonical white-noise law is tight under the Axiom of Choice
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-negative-sobolev-space-for-white-noise
  - def-polish-space
  - lem-white-noise-is-borel-gaussian-on-negative-sobolev-space
  - def-axiom-of-choice
  - thm-prokhorov-tightness-theorem-on-polish-spaces
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, §1.2, printed pp. 2005–2006"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §7.3.4, printed pp. 594–595"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Assume AC. For $\delta>1/2$, the canonical white-noise law $N$ on the Polish space $H(\delta)$ from [[lem-white-noise-is-borel-gaussian-on-negative-sobolev-space]] is tight.

## Facts & Assumptions

[F1] [[lem-white-noise-is-borel-gaussian-on-negative-sobolev-space]]: The white-noise coefficient series defines a Borel probability law $N$ on $H(\delta)$ for $\delta>1/2$.

[F2] [[thm-prokhorov-tightness-theorem-on-polish-spaces]]: Assume AC. A family of Borel probabilities on a Polish space is tight if and only if it is relatively sequentially compact for weak convergence.

[F3] [[def-polish-space]]: A Polish space is separable and completely metrizable.

[F4] [[def-negative-sobolev-space-for-white-noise]]: $H(\delta)$ is separable and complete with its weighted coefficient norm.

[A1] [[def-axiom-of-choice]]: AC is used exactly in applying Prokhorov's theorem in step 2.1.

**Given:** AC, $\delta>1/2$, and the Borel probability $N$ on $H(\delta)$.

## Proof

1.1 By [F4], $H(\delta)$ is separable and complete; the definition of Polish space [F3] therefore makes it Polish. [F1, F3, F4, given]

2.1 Every sequence in the singleton family $\{N\}$ is constant and therefore converges weakly to $N$; thus $\{N\}$ is relatively sequentially compact. Applying [F2] under [A1] proves that $\{N\}$, and hence the law $N$, is tight. [A1, F2, given, step 1.1] ∎
