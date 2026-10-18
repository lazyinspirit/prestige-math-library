---
page: rate-distortion-and-lossy-source-coding
title: "Rate Distortion and Lossy Source Coding"
status: draft
requires:
  - gaussian-orthogonal-decomposition-and-quadratic-forms
  - stationary-ergodic-sources-and-universal-coding
items:
  - def-it-general-mutual-information
  - def-it-single-letter-distortion-and-block-distortion
  - lem-it-finite-vector-gaussian-water-level-allocation
  - def-it-general-rate-distortion-function
  - def-it-operational-rate-distortion-function
  - lem-it-finite-rate-distortion-minimum-attained
  - def-it-information-rate-distortion-function
  - def-it-stationary-finite-block-information-rdf
  - lem-it-gaussian-reference-kernel-information-lower-bound
  - lem-it-rate-distortion-convexity-and-monotonicity
  - thm-it-binary-hamming-rate-distortion
  - alg-it-finite-alphabet-blahut-arimoto
  - lem-it-stationary-block-rdf-limit-and-endpoint-continuity
  - thm-it-finite-alphabet-rate-distortion-coding-theorem
  - thm-it-gaussian-squared-error-rate-distortion
  - thm-it-gaussian-vector-squared-error-rate-distortion
  - lem-it-random-cut-ergodic-block-channel-approximation
  - thm-it-blahut-arimoto-certified-gap-termination
  - thm-it-stationary-ergodic-rate-distortion-bounded-distortion
examples: []
---

The page distinguishes joint-law mutual information from operational code rates, and expected distortion from excess-distortion probability. Finite-alphabet quantities are in bits; general mutual information is first defined in nats and converted by \(\ln2\). The Gaussian results use standard-Borel KL and explicitly retain their Axiom of Choice assumptions. The finite memoryless theorem covers deterministic fixed-length codes for expected distortion and every positive excess-distortion slack. The stationary-ergodic theorem uses bounded finite-alphabet distortion and does not claim exact-threshold excess convergence at minimum distortion. The Blahut–Arimoto carrier gives an exact-real recurrence and a log-\(\gamma\) gap certificate; its interval stopping rule assumes rational input data and makes no bit-complexity claim.

The vector Gaussian result uses a relative-entropy reference-kernel proof so the converse applies to reconstructions without densities. Reverse water-filling includes zero modes and both total-distortion endpoints. No pair-specific design section was found. The canonical IT06 plan row governs the pair; older research-page metadata is recorded as a conflict in the batch-11 notes.

## Source trail

- **MIT OpenCourseWare 6.441, Chapters 23, 24, and 25** ([Chapter 23](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/880c39878ba7dc35a5fbb35758d42a69_MIT6_441S16_chapter_23.pdf), [Chapter 24](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/aaa8d18ddecde45f97134d3f3dcee4a3_MIT6_441S16_chapter_24.pdf), [Chapter 25](https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5721b7df786b416dadad7c7bb3364d00_MIT6_441S16_chapter_25.pdf)), §§23.2–23.3, 24.1–24.3, 25.1–25.2: finite rate-distortion, random coding, stationary sources, and Gaussian formulas.
- **Robert M. Gray, Source Coding Theory, first edition** ([full text](https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf)), Ch. 2 §2.6; Ch. 3 §§3.2–3.4; Ch. 4 §§4.1, 4.4–4.7: general mutual information; finite and stationary coding; Blahut–Arimoto iteration; Gaussian lower bounds. Gray §4.3 is a discrete Shannon lower bound, not the vector Gaussian result.
- **Robert M. Gray, Entropy and Information Theory, corrected first edition** ([full text](https://ee.stanford.edu/~gray/it.pdf)), Ch. 5 §§5.3, 5.5 and Ch. 10 §10.6: standard-Borel KL chain rule, general mutual information, and the stationary block rate-distortion argument.
- **Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed.** ([full text](https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf)), §10.3.3, Theorem 10.3.3, printed pp. 312–314: vector Gaussian reverse water-filling. The local vector converse is proved with KL to cover singular reconstruction laws.
- **Gray, Source Coding Theory** §4.4, printed pp. 96–97, gives the finite Blahut iteration and explicitly leaves convergence unproved; the local certificate and termination argument is proved on this page.
- **MIT OpenCourseWare 6.441, Chapter 25** §25.2, PDF pp. 4–5 / printed pp. 258–259, gives the parametric optimization framing and notes iterative algorithms. The local proof supplies all convergence and certified-gap steps.
