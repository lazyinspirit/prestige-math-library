---
id: "ex-characteristic-function-of-the-uniform-law"
kind: "example"
title: "Characteristic function of the uniform law"
deps: ["def-characteristic-function-of-a-real-random-variable", "thm-ftc-second-part", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "def-axiom-of-choice", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "thm-sine-and-cosine-derivatives", "thm-chain-rule", "thm-integration-against-a-density", "lem-basic-properties-of-characteristic-functions"]
provenance:
  statement: ai-altered
  proof: ai-altered
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
proof_strategy: "direct"
---

## Example

Assume AC. For $a<b$, the uniform law with density $1_{[a,b]}/(b-a)$ has characteristic function
$$\varphi(t)=\frac{e^{itb}-e^{ita}}{it(b-a)}\quad(t\ne0),\qquad\varphi(0)=1.$$
The displayed quotient has the indicated continuous extension at zero.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] The transform is the componentwise exponential integral. [[def-characteristic-function-of-a-real-random-variable]].

[F2] A continuous integrable derivative is evaluated by its primitive. [[thm-ftc-second-part]].

[F3] The compact Riemann and Lebesgue integrals agree under countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F4] AC supplies countable choice for the bridge and compact continuous integration. [[def-axiom-of-choice]].

[F5] A nonnegative measurable density defines a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F6] The sine and cosine primitives follow from their derivatives. [[thm-sine-and-cosine-derivatives]].

[F7] Composing with x mapsto tx multiplies a derivative by t. [[thm-chain-rule]].

[F8] A nonnegative test against a density integrates its product. [[thm-integration-against-a-density]].

[F9] The transform is continuous and equals one at zero. [[lem-basic-properties-of-characteristic-functions]].

## Verification

**Proof technique:** direct.

1.1 The nonnegative Borel density defines a measure, and its mass is $(b-a)^{-1}\int_a^b1\,dx=1$. The primitive $x$ and the integral bridge give this normalization. The density integration identity, applied to positive and negative parts of cosine and sine, yields $\varphi(t)=(b-a)^{-1}\int_a^b(\cos(tx)+i\sin(tx))\,dx$; all four parts are integrable because the interval is finite and their absolute values are at most one. [F1, F2, F3, F4, F5, F8]

2.1 For $t\ne0$, the primitives are $\sin(tx)/t$ for cosine and $-\cos(tx)/t$ for sine, by the chain rule. Their derivatives are continuous on $[a,b]$, so FTC and the bridge give $$\varphi(t)=\frac{\sin(tb)-\sin(ta)-i(\cos(tb)-\cos(ta))}{t(b-a)}=\frac{e^{itb}-e^{ita}}{it(b-a)}.$$ At $t=0$ the integral of the constant one equals one. Continuity of characteristic functions then proves the claimed extension. The endpoints of $[a,b]$ have zero density measure, so using an open or half-open interval gives the same law. The hypothesis $a<b$ prevents division by zero; when $a=b$ this density is not defined, though the distinct Dirac law at $a$ has transform $e^{ita}$. The stated AC is spent on the compact integration bridge and its continuous-integrand prerequisites. [step 1.1, F2, F3, F4, F6, F7, F9] ∎
