---
id: cex-both-supports-cannot-be-singletons-when-n-is-greater-than-one
kind: counterexample
title: 'Both finite supports cannot be singletons when $N>1$'
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps:
  - def-integers-modulo-n
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - ex-finite-dft-delta-and-constant-extremisers
  - thm-finite-dft-support-product-uncertainty
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Terence Tao, An Uncertainty Principle for Cyclic Groups of Prime Order, Math. Res. Lett. 12 (2005) 121–127 (arXiv:math/0308286)"
      url: "https://arxiv.org/pdf/math/0308286"
      locator: "Abstract and §1, pp. 1–2 (the classical product bound and its equality case)"
---

## Statement refuted

For every $N\ge1$ there exists a nonzero
$f\in\mathbb C^{\mathbb Z/N\mathbb Z}$ with
$|\operatorname{supp}f|=|\operatorname{supp}\mathcal F_Nf|=1$.

## Facts & Assumptions

**Given:** An integer $N\ge1$ and the unitary discrete Fourier transform
$\mathcal F_N$ of [[def-unitary-discrete-fourier-transform-on-z-mod-n]]
([[def-integers-modulo-n]]).

[F1] For every nonzero $f\in\mathbb C^{\mathbb Z/N\mathbb Z}$ the support product satisfies $|\operatorname{supp}f|\cdot|\operatorname{supp}\mathcal F_Nf|\ge N$
([[thm-finite-dft-support-product-uncertainty]]).

[F2] At $N=1$ there is exactly one class, and the delta $\delta_0$ at it is the constant function $1$; the example [[ex-finite-dft-delta-and-constant-extremisers]] computes $\mathcal F_1\delta_0=\delta_0$, so $|\operatorname{supp}\delta_0|=|\operatorname{supp}\mathcal F_1\delta_0|=1$.

## Counterexample

**Proof technique:** direct.

1.1 Impossibility for $N>1$. Suppose $N>1$ and a nonzero $f$ satisfied $|\operatorname{supp}f|=|\operatorname{supp}\mathcal F_Nf|=1$. Then the left-hand side of the bound [F1] equals $1$, so $1\ge N$, contradicting $N>1$. Hence no such $f$ exists for $N>1$. [F1, given]

1.2 The case $N=1$. At $N=1$ the group $\mathbb Z/1\mathbb Z$ has the single class $[0]$, and by [F2] the delta $\delta_0$ is the constant function $1$ with $\mathcal F_1\delta_0=\delta_0$; both its support and the support of its transform equal the one-element set $\{[0]\}$. [F2, given]

2.1 Conclusion. The universal claim fails already at $N=2$, where [F1] forces a support product of at least $2$; step 1.2 shows that the hypothesis $N>1$ is essential, since the excluded configuration does occur at $N=1$ and the bound of [F1] is exactly attained there. [step 1.1, step 1.2] ∎ 