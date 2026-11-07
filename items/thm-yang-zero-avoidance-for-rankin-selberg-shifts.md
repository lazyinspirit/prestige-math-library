---
dependency_level: 4
id: thm-yang-zero-avoidance-for-rankin-selberg-shifts
kind: theorem
title: "Yang Zero-Avoidance Shift for Rankin–Selberg Values"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-pure-isobaric-automorphic-sum
  - def-standard-and-rankin-selberg-l-functions-on-gln
  - thm-global-rankin-selberg-continuation-for-arbitrary-rank-pairs
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), Lemma 5.6 and proof"
      url: "https://arxiv.org/pdf/2309.07534v2"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $n\geq2$, let $\Pi=\pi_1\boxplus\cdots\boxplus\pi_m$ with $m\geq2$ be unitary pure isobaric on $\mathrm{GL}_{n+1}(\mathbb A_\mathbb Q)$, and let $\pi'$ be a fixed unitary cuspidal generic representation of $\mathrm{GL}_n(\mathbb A_\mathbb Q)$. Let $M\geq1$ be the level parameter and $T\geq1$ the uniform archimedean parameter scale from the amplified setup. Define

$$c_j=2^{-j}\quad(1\leq j<m),\qquad c_m=-\sum_{j<m}2^{-j},\qquad \Pi_{itc}=\boxplus_{j=1}^m\pi_j|\det|^{itc_j}.$$

For real $t$, set $L(s,\Pi_{itc}\times\pi')=\prod_{j=1}^mL(s+itc_j,\pi_j\times\pi')$ and write $\Pi_\mu=\Pi_{it_\mu c}$.

If $|L(1/2,\Pi\times\pi')|\geq2$, then for every $\varepsilon>0$ there is a real $t_\mu=\exp(-O_{\Pi,\pi'}(\sqrt{\log(MT)}))$ such that, for $\mu=it_\mu c$, the coordinates $\mu_j$ are distinct, $|\mu_j|\leq1$, and

$$|L(1/2,\Pi\times\pi')|\ll_{\Pi,\pi',\varepsilon}(MT)^\varepsilon|L(1/2,\Pi_\mu\times\pi')|.$$

## Statement references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, Lemma 5.6 and proof of Theorem 5.1, §5.5](https://arxiv.org/pdf/2309.07534v2)

## Proof status

The source proof applies Jensen's zero count and Borel–Carathéodory to the product of the shifted constituent Rankin–Selberg functions, after choosing a small radius that avoids all zeros in a short disk. That argument has not been reconstructed here with complete control of the quotient polynomial bounds. Its convexity input also requires the unresolved arbitrary-rank global Rankin–Selberg continuation and growth interface. Step 1 is escalated.
