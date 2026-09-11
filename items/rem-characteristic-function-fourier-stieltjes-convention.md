---
id: "rem-characteristic-function-fourier-stieltjes-convention"
kind: "remark"
title: "Characteristic function fourier stieltjes convention"
deps: ["def-characteristic-function-of-a-real-random-variable", "thm-fourier-transform-of-a-finite-complex-measure"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: published
origin: "pipeline"
---

## Remark

[[def-characteristic-function-of-a-real-random-variable]] uses $\varphi_\mu(t)=\int e^{itx}\,\mu(dx)$. The convention in [[thm-fourier-transform-of-a-finite-complex-measure]] is
$$\widehat\mu(\xi)=\int e^{-2\pi ix\xi}\,\mu(dx).$$
For a Borel probability law, substitution of $\xi=-t/(2\pi)$ gives identical integrands and hence
$$\varphi_\mu(t)=\widehat\mu\left(-\frac{t}{2\pi}\right),\qquad \widehat\mu(\xi)=\varphi_\mu(-2\pi\xi).$$
Both integrals exist because the integrand has modulus one and the law has mass one. In particular the substitution is a bijection of the real frequency line; equality of characteristic functions is exactly equality of the transforms in this convention. The identity at zero is $1=1$.

This is an identification of conventions. The finite-complex-measure theorem states countable choice for its total-variation machinery; the displayed probability-law identity uses only the already defined bounded probability integral. Consumers invoking Fourier uniqueness must retain the separate AC hypothesis of that uniqueness theorem.
