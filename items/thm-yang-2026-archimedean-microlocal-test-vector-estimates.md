---
dependency_level: 4
id: thm-yang-2026-archimedean-microlocal-test-vector-estimates
kind: theorem
title: "Yang Archimedean Microlocal Test-Vector Estimates"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-yang-microlocalized-archimedean-whittaker-vector
  - def-local-rankin-selberg-integral-for-gln-times-glm
  - def-unitary-cuspidal-generic-gln-representation
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), Lemma 5.2, §5.1"
      url: "https://arxiv.org/pdf/2309.07534v2"
    - title: "Paul D. Nelson, Subconvex Bounds for Standard L-Functions on GL(n), Lemmas 8.5–8.6, 10.3, 10.20 and Corollary 10.25"
      url: "https://arxiv.org/pdf/2109.15230v2"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $n\geq2$, let $\pi'$ be a fixed unitary cuspidal generic representation of $\mathrm{GL}_n(\mathbb A_\mathbb Q)$, and let $\Pi=\pi_1\boxplus\cdots\boxplus\pi_m$ be unitary pure isobaric on $\mathrm{GL}_{n+1}(\mathbb A_\mathbb Q)$ with archimedean Langlands parameters $\lambda_j$ satisfying $c_\infty T\leq|\lambda_j|\leq C_\infty T$ for fixed $C_\infty>c_\infty>0$. Let $\mu\in i\mathbb R^m$ satisfy $\sum_j\mu_j=0$ and $|\mu_j|\leq1$, and put $\Pi_\mu=\boxplus_j\pi_j|\det|^{\mu_j}$. Let $W'_{\infty,T}$ be the archimedean Whittaker test function of the preceding definition, and let $\iota(g')=\operatorname{diag}(g',1)$. For every $\varepsilon>0$, there exists a Whittaker function $W_{\mu,\infty}$ of $\Pi_{\mu,\infty}$ such that

$$\int_{N_n(\mathbb R)\backslash\mathrm{GL}_n(\mathbb R)}|W_{\mu,\infty}(\iota(g'))|^2\,dg'\leq1,$$

and

$$T^{-n^2/4-\varepsilon}\ll_{\pi'_\infty,\varepsilon}\left|\int_{N_n(\mathbb R)\backslash\mathrm{GL}_n(\mathbb R)}W_{\mu,\infty}(\iota(g'))W'_{\infty,T}(g')\,dg'\right|\ll_{\pi'_\infty,\varepsilon}T^{-n^2/4+\varepsilon}.$$

Both quotient integrals use the fixed Haar measures in the local Rankin–Selberg integral convention.

## Statement references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, Lemma 5.2, §5.1](https://arxiv.org/pdf/2309.07534v2)

[Paul D. Nelson, *Subconvex Bounds for Standard L-Functions on GL(n)*, Lemmas 8.5–8.6, 10.3, 10.20 and Corollary 10.25](https://arxiv.org/pdf/2109.15230v2)

## Proof status

The source proof combines the rescaled archimedean test-vector construction, Yang's local period comparison, Nelson's rescaling identity, and Nelson's local $L^2$ estimate. The exact local test-vector and norm chain has not been supplied as a complete proof in this library item. Step 1 is escalated; the named Nelson results have been read in the cited v2 source, but citation alone does not discharge the proof.
