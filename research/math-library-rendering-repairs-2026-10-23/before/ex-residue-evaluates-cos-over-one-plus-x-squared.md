---
id: ex-residue-evaluates-cos-over-one-plus-x-squared
kind: example
title: "The integral of cos x / (1 + x^2) over the real line is pi / e"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-residue-evaluation-rational-fourier-integrals]
justified_by: []
aliases: []
landmark: false
proof_strategy: computation
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3 §2.1"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
pipeline_run: null
---

## Example

$\int_{-\infty}^{\infty}\frac{\cos x}{1+x^2}\,dx=\frac{\pi}{e}.$

## Facts & Assumptions

**Given:** The rational function $R(z)=1/(1+z^2)$.

[L1] For $\lambda>0$, the Fourier integral of $e^{i\lambda x}R(x)$ is the residue sum of $e^{i\lambda z}R(z)$ in the upper half-plane ([[thm-residue-evaluation-rational-fourier-integrals]]).

## Verification

**Proof technique:** computation.

1.1 Apply [L1] with $\lambda=1$. The only upper-half-plane pole is $i$, and $\operatorname{Res}\!\left(\frac{e^{iz}}{1+z^2},i\right) =\frac{e^{ii}}{2i} =\frac{e^{-1}}{2i}.$ [given, L1, algebra]

2.1 Hence $\int_{-\infty}^{\infty}\frac{e^{ix}}{1+x^2}\,dx =2\pi i\cdot\frac{e^{-1}}{2i} =\frac{\pi}{e}.$ The value is real, so taking real parts yields $\int_{-\infty}^{\infty}\frac{\cos x}{1+x^2}\,dx=\frac{\pi}{e}.$ [step 1.1, algebra] ∎
