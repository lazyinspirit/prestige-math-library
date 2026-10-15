---
id: "thm-uniqueness-of-a-law-from-its-characteristic-function"
kind: "theorem"
title: "Uniqueness of a law from its characteristic function"
deps: ["def-characteristic-function-of-a-real-random-variable", "rem-characteristic-function-fourier-stieltjes-convention", "cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms", "def-axiom-of-choice", "lem-basic-properties-of-characteristic-functions", "lem-characteristic-functions-under-affine-maps-and-independent-sums"]
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

## Statement

Assume AC. Two Borel probability laws on $\mathbb R$ with equal characteristic functions are equal. In particular a real random variable has a real-valued characteristic function if and only if its law is symmetric under $x\mapsto-x$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Probability and Fourier conventions correspond by an invertible frequency change. [[rem-characteristic-function-fourier-stieltjes-convention]].

[F2] Under AC finite complex Borel measures with equal transforms are equal. [[cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms]].

[F3] AC supplies the choices in the Fourier uniqueness proof. [[def-axiom-of-choice]].

[F4] Reflection conjugates a characteristic function. [[lem-basic-properties-of-characteristic-functions]].

[F5] The reflected law has characteristic function phi(-t). [[lem-characteristic-functions-under-affine-maps-and-independent-sums]].

## Proof

**Proof technique:** direct.

1.1 Let $\mu,\nu$ be the two laws. For every real $\xi$, F1 gives $\widehat\mu(\xi)=\varphi_\mu(-2\pi\xi)=\varphi_\nu(-2\pi\xi)=\widehat\nu(\xi)$. Each positive probability law, regarded as a complex measure, has total variation one: every measurable partition has sum of absolute masses equal to its total mass. Thus the finite-variation hypotheses of Fourier uniqueness hold. [F1]

2.1 Apply F2 in dimension one to obtain $\mu=\nu$. AC is inherited from that proof: it supplies the Hahn/Jordan and Radon–Nikodym selections used in Gaussian smoothing and covers its regularity argument. No inversion result from this page is used. [step 1.1, F2, F3]

3.1 For the final equivalence, F5 with $a=-1,b=0$ and F4 give $\varphi_{-X}(t)=\varphi_X(-t)=\overline{\varphi_X(t)}$. If $\varphi_X$ is real-valued, the two characteristic functions agree and step 2.1 proves symmetry of the law. Conversely, symmetry means the two laws, hence their defining integrals, agree; the displayed identity then forces $\varphi_X(t)=\overline{\varphi_X(t)}$, so every value is real. [step 2.1, F4, F5] ∎
