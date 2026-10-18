---
id: ex-su2-ell-four-modular-data
kind: example
title: "The sl2 modular data at ell=4"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 11
deps: [thm-su2-root-unity-ribbon-category-is-modular, lem-su2-hopf-link-sine-data-from-truncated-fusion, cor-rt-torus-and-state-dimension-formula, def-axiom-of-choice, def-countable-choice, thm-weighted-rt-tqft-and-factorization]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §3.3"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity, §3.3"
      url: "https://arxiv.org/pdf/math/0308281"
---

## Statement

For the established standard $\ell=4$ root-of-unity ribbon quotient, the labels are $0,1,2$, the dimensions are $(1,\sqrt2,1)$, and

$$S=\begin{pmatrix}\frac12&\frac1{\sqrt2}&\frac12\\[2pt]\frac1{\sqrt2}&0&-\frac1{\sqrt2}\\[2pt]\frac12&-\frac1{\sqrt2}&\frac12\end{pmatrix}, \quad(\theta_0,\theta_1,\theta_2)=(1,e^{3\pi i/8},-1).$$

The fusion products are $1\otimes1=0\oplus2$, $1\otimes2=1$, and $2\otimes2=0$; the torus state dimension is $3$.

## Facts & Assumptions

**Given:** $\ell=4$, $q=e^{\pi i/4}$, and the positive-trace convention.

[F1] The sine theorem gives $d_a=\sin((a+1)\pi/4)/\sin(\pi/4)$, $\theta_a=q^{a(a+2)/2}$, and $S_{ab}=\sqrt{1/2}\sin((a+1)(b+1)\pi/4)$ ([[lem-su2-hopf-link-sine-data-from-truncated-fusion]]).

[F2] The truncated fusion rule is the displayed rule in [[lem-su2-hopf-link-sine-data-from-truncated-fusion]].

[F3] The torus state dimension is $|I|$ under the proved TQFT factorization theorem ([[cor-rt-torus-and-state-dimension-formula]]).

[A1] The actual tilting quotient and full weighted RT functor are established by their exact suppliers ([[thm-su2-root-unity-ribbon-category-is-modular]], [[thm-weighted-rt-tqft-and-factorization]]).

## Proof

1.1 Evaluate the sine dimension formula at $a=0,1,2$: it gives $1,\sqrt2,1$. The twist exponents $a(a+2)/2$ are $0,3/2,4$, so $\theta=(1,e^{3\pi i/8},e^{\pi i})=(1,e^{3\pi i/8},-1)$. Substitution into the sine matrix formula gives the displayed entries. [F1, given, algebra]

2.1 The truncated fusion rule gives $1\otimes1$ outputs $0,2$, $1\otimes2$ output $1$, and $2\otimes2$ output $0$, each with multiplicity one. Since there are three simple labels, [F3] gives torus dimension $3$. [F2, F3, A1, step 1.1, algebra] ∎
