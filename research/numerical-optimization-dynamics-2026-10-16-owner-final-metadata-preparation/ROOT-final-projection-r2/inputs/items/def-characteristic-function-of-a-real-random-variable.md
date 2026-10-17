---
id: "def-characteristic-function-of-a-real-random-variable"
kind: "definition"
title: "Characteristic function of a real random variable"
deps: ["thm-change-of-variables-for-expectation", "def-integrable-real-and-complex-functions-and-their-integrals", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-integral-triangle-inequality"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
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

## Definition

For a real random variable $X$ on $(\Omega,\mathcal F,\mathbb P)$, its **characteristic function** is
$$\varphi_X(t)=\mathbb E[e^{itX}]=\int_{\mathbb R}e^{itx}\,\mathbb P_X(dx),\qquad t\in\mathbb R.$$
For a specified Borel probability measure $\mu$ on $\mathbb R$, write $\varphi_\mu(t)=\int e^{itx}\,\mu(dx)$.

The complex integral means the sum of the real integral and $i$ times the imaginary integral, as in [[def-integrable-real-and-complex-functions-and-their-integrals]]. Euler's formula in [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives $e^{itx}=\cos(tx)+i\sin(tx)$, a continuous function of $x$ with modulus one. Its components are bounded and measurable, hence integrable against a probability measure. [[thm-change-of-variables-for-expectation]] therefore applies to this bounded Borel function and proves the displayed identity. [[thm-integral-triangle-inequality]] gives $|\varphi_\mu(t)|\le\int1\,d\mu=1$.

No moment assumption is imposed. In particular $X=0$ gives $\varphi_X\equiv1$ and a constant $X=c$ gives $\varphi_X(t)=e^{itc}$. These definitions require no choice of representatives or new use of AC.
