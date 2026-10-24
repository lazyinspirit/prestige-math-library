---
id: "thm-uniqueness-of-a-law-from-its-characteristic-function"
kind: "theorem"
title: "Uniqueness of a law from its characteristic function"
deps: ["def-characteristic-function-of-a-real-random-variable", "thm-fourier-transform-of-a-finite-complex-measure", "cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms", "def-axiom-of-choice", "lem-basic-properties-of-characteristic-functions", "lem-characteristic-functions-under-affine-maps-and-independent-sums"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  repair: research/numerical-analysis-48-2026-10-16-owner-supplier-thm-uniqueness-of-a-law-from-its-characteristic-function-published-repair.json
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

## Statement

Assume AC. Two Borel probability laws on $\mathbb R$ with equal characteristic functions are equal. In particular a real random variable has a real-valued characteristic function if and only if its law is symmetric under $x\mapsto-x$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] For a Borel probability law $\mu$, the characteristic function is $\varphi_\mu(t)=\int e^{itx}\,d\mu(x)$ ([[def-characteristic-function-of-a-real-random-variable]]). The finite-measure Fourier convention is $\widehat\mu(\xi)=\int e^{-2\pi ix\xi}\,d\mu(x)$ ([[thm-fourier-transform-of-a-finite-complex-measure]]). These bounded integrands are integrable; the latter theorem's countable-choice premise is covered by the stated AC.

[F2] Under AC finite complex Borel measures with equal transforms are equal. [[cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms]].

[F3] AC supplies the choices in the Fourier uniqueness proof. [[def-axiom-of-choice]].

[F4] Reflection conjugates a characteristic function. [[lem-basic-properties-of-characteristic-functions]].

[F5] The reflected law has characteristic function phi(-t). [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

## Proof

**Proof technique:** direct.

1.1 Let $\mu,\nu$ be the two laws. Each positive probability law, regarded as a complex measure, has total variation one: every measurable partition has sum of absolute masses equal to its total mass. Thus [F1] applies in dimension one under the stated AC. For every real $\xi$ and $x$, $e^{i(-2\pi\xi)x}=e^{-2\pi ix\xi}$, so the defining bounded integrands are identical. Integrating this pointwise identity against either law gives $\widehat\mu(\xi)=\varphi_\mu(-2\pi\xi)$ and $\widehat\nu(\xi)=\varphi_\nu(-2\pi\xi)$. Since the characteristic functions agree at every real argument, $\widehat\mu(\xi)=\widehat\nu(\xi)$ for every $\xi$. This also verifies the finite-variation hypotheses of Fourier uniqueness. [F1, F3, given, algebra]

2.1 Apply F2 in dimension one to obtain $\mu=\nu$. AC is inherited from that proof: it supplies the Hahn/Jordan and Radon–Nikodym selections used in Gaussian smoothing and covers its regularity argument. No inversion result from this page is used. [step 1.1, F2, F3]

3.1 For the final equivalence, F5 with $a=-1,b=0$ and F4 give $\varphi_{-X}(t)=\varphi_X(-t)=\overline{\varphi_X(t)}$. If $\varphi_X$ is real-valued, the two characteristic functions agree and step 2.1 proves symmetry of the law. Conversely, symmetry means the two laws, hence their defining integrals, agree; the displayed identity then forces $\varphi_X(t)=\overline{\varphi_X(t)}$, so every value is real. [step 2.1, F4, F5] ∎
