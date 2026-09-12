---
id: thm-fair-coin-one-sided-shift-is-measure-preserving-and-mixing
kind: theorem
title: The fair-coin one-sided shift preserves measure and is mixing
deps: ["thm-fair-coin-measure-on-binary-sequences", "thm-measure-preservation-on-a-generating-pi-system", "thm-mixing-is-checkable-on-a-generating-pi-system", "prop-measure-preserving-compositions-iterates-and-completions", "thm-mixing-implies-weak-mixing-implies-ergodicity", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Proposition 2.15; Exercise 2.7.9
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice. The one-sided left shift $\sigma:\Omega\to\Omega$, $(\sigma x)_j=x_{j+1}$, preserves the fair-coin probability and its completion, is strongly mixing for both, and hence is ergodic.

## Facts & Assumptions

[F1] A cylinder prescribing k coordinates has mass 2^-k. [[thm-fair-coin-measure-on-binary-sequences]].

[F2] Finite-mass preservation may be checked on cylinders and the whole space. [[thm-measure-preservation-on-a-generating-pi-system]].

[F3] Cylinder correlation limits imply Borel mixing. [[thm-mixing-is-checkable-on-a-generating-pi-system]].

[F4] Preservation extends to the completion under countable choice. [[prop-measure-preserving-compositions-iterates-and-completions]].

[F5] Strong mixing implies ergodicity for probability systems. [[thm-mixing-implies-weak-mixing-implies-ergodicity]].

## Proof

**Given:** Assume countable choice. The one-sided left shift $\sigma:\Omega\to\Omega$, $(\sigma x)_j=x_{j+1}$, preserves the fair-coin probability and its completion, is strongly mixing for both, and hence is ergodic.

1.1 For a cylinder C prescribed on F, $\sigma^{-1}C$ imposes the same values on $F+1$. It is a cylinder with the same number of fixed coordinates and the same mass. Inverse images of prefix cylinders are open, so sigma is continuous and hence Borel measurable. Cylinders together with the empty set form a generating pi-system containing Omega. Since its mass is one, the preservation criterion applies; the completion clause then gives completed preservation. [F1, F2, F4]

2.1 If C and H prescribe finite coordinate sets F and G, then $\sigma^{-n}H$ prescribes G+n. For all sufficiently large n these are disjoint from F, so their intersection is a cylinder prescribing $|F|+|G|$ coordinates. Its mass is $2^{-|F|-|G|}=p(C)p(H)$. Empty sets give zero correlations. The mixing criterion now proves mixing for arbitrary Borel pairs. [step 1.1, F1, F3]

3.1 For two completed sets replace each by a Borel core modulo a Borel null cover, as supplied by the completion construction. The symmetric difference of the intersection and its Borel version lies in the union of the first null cover and the nth pullback of the second. Preservation makes that union null. Correlations and marginal masses therefore agree exactly with their Borel versions for each n, proving completed mixing. Finally the mixing implication proves ergodicity for both probability spaces. Countable choice is inherited from the fair-coin extension and completion; coordinate calculations use only finite counting. [step 1.1, step 2.1, F1, F4, F5] ∎

