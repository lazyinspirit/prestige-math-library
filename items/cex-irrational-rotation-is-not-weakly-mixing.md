---
id: cex-irrational-rotation-is-not-weakly-mixing
kind: counterexample
title: Irrational rotation is ergodic but not weakly mixing
deps: ["thm-circle-rotation-is-ergodic-iff-angle-is-irrational", "prop-mixing-correlations-extend-to-l-two", "thm-complex-exponential-addition-and-real-extension", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-sine-and-cosine-derivatives", "prop-circle-rotations-preserve-lebesgue-measure", "thm-integrals-are-invariant-under-measure-preserving-maps", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Example 2.40; Exercise 2.7.7
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Assume countable choice. An irrational rotation $R_\alpha$ of the Lebesgue circle is ergodic but not weakly mixing. The single function $f(x)=e^{2\pi i x}$ has mean zero, and its centered absolute self-correlation equals one at every nonnegative iterate.

## Facts & Assumptions

[F1] Irrational rotations are ergodic for Lebesgue probability. [[thm-circle-rotation-is-ergodic-iff-angle-is-irrational]].

[F2] Weak mixing requires absolute Cesaro convergence to zero of every centered complex $L^2$ correlation. [[prop-mixing-correlations-extend-to-l-two]].

[F3] The complex exponential obeys the addition law. [[thm-complex-exponential-addition-and-real-extension]].

[F4] Purely imaginary exponentials have modulus one and $e^{i\pi}=-1$. [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F5] Sine and cosine are differentiable, hence continuous on the real line. [[thm-sine-and-cosine-derivatives]].

[F6] Rotation by $1/2$ preserves the same Lebesgue probability. [[prop-circle-rotations-preserve-lebesgue-measure]].

[F7] Integrable complex functions have unchanged integrals under measure-preserving composition. [[thm-integrals-are-invariant-under-measure-preserving-maps]].

## Counterexample

**Given:** Assume countable choice. An irrational rotation $R_\alpha$ of the Lebesgue circle is ergodic but not weakly mixing. The single function $f(x)=e^{2\pi i x}$ has mean zero, and its centered absolute self-correlation equals one at every nonnegative iterate.

1.1 By [F3] and [F4], $e^{2\pi i}=(e^{\pi i})^2=1$, and the same holds for every integer multiple of $2\pi i$ by multiplication and inversion. Thus $f(x)=e^{2\pi ix}$ is well defined across the circle cut. By the Cartesian formula [F4], it equals $\cos(2\pi x)+i\sin(2\pi x)$ and is continuous by [F5] (the limit from below at 1 equals its value at 0), has $|f|=1$ by [F4], and belongs to both $L^1(\lambda)$ and $L^2(\lambda)$ because the circle has mass one. The addition law gives $f\circ R_{1/2}=-f$. By [F6] and [F7], if $m=\int f\,d\lambda$ then $m=\int f\circ R_{1/2}\,d\lambda=-m$, so $m=0$. [F3, F4, F5, F6, F7]

2.1 For every $n\ge0$, the addition law and integer-period identity give $f(R_\alpha^n x)=e^{2\pi i n\alpha}f(x)$. Hence $\int(f\circ R_\alpha^n)\overline f\,d\lambda=e^{2\pi i n\alpha}\int|f|^2\,d\lambda=e^{2\pi i n\alpha}$. The centered correlation of [F2] is the same because the mean is zero. Its modulus is one by [F4], so for every $N\ge1$, $N^{-1}\sum_{n=0}^{N-1}|C_n(f,f)|=1$. It cannot tend to zero; the necessary implication in [F2] disproves weak mixing. Irrationality supplies ergodicity by [F1]. Countable choice is inherited from [F1] and [F6]; only the implication from weak mixing to vanishing absolute $L^2$ correlation averages in [F2] is needed. No Fourier-series completeness or spectral theorem is used. [1.1, F1, F2, F3, F4, F6] ∎

