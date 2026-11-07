---
id: ex-yang-standard-gl2-t-aspect-specialization
kind: example
title: "The Standard GL2 t-Aspect Specialization"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - cor-yang-standard-gln-t-aspect-subconvexity
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), arXiv:2309.07534v2, §1.1 Corollary 1.2"
      url: "https://arxiv.org/pdf/2309.07534v2"
---

## Example

Let $\pi'$ be a unitary cuspidal automorphic representation of $\mathrm{GL}_2(\mathbb A_{\mathbb Q})$. For every $t\in\mathbb R$ and every $\varepsilon>0$, its finite standard $L$-function satisfies

$$L\!\left(\frac12+it,\pi'\right)\ll_{\pi',\varepsilon}(1+|t|)^{29/60+\varepsilon},$$

where the archimedean factor is omitted.

## Example references

[[cor-yang-standard-gln-t-aspect-subconvexity|the general standard GL(n) estimate]]

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, arXiv:2309.07534v2, §1.1 Corollary 1.2](https://arxiv.org/pdf/2309.07534v2)

## Facts & Assumptions

**Given:** A unitary cuspidal automorphic representation $\pi'$ of $\mathrm{GL}_2(\mathbb A_{\mathbb Q})$, a real $t$, and $\varepsilon>0$. Verify the displayed bound.

[F1] [[cor-yang-standard-gln-t-aspect-subconvexity]]: For every $n\ge1$ and every unitary cuspidal automorphic representation $\pi'$ of $\mathrm{GL}_n(\mathbb A_{\mathbb Q})$, set $\delta_n=1/[n(n+1)(3n-1)]$; then $L(1/2+it,\pi')\ll_{\pi',\varepsilon}(1+|t|)^{(1-\delta_n)n/4+\varepsilon}$ for every real $t$ and every $\varepsilon>0$.

## Verification

1.1 By the definition of $\delta_n$ in [F1], substituting $n=2$ gives $\delta_2=1/(2\cdot3\cdot5)=1/30$. [given, F1, algebra]

2.1 Therefore $(1-\delta_2)2/4=(29/30)(2/4)=29/60$. Applying [F1] with $n=2$ gives the displayed estimate for every real $t$ and every $\varepsilon>0$. [given, F1, step 1.1, algebra] ∎
