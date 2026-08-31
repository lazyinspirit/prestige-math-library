---
id: ex-ell-infinity-is-a-banach-space
kind: example
title: "$\\ell^\\infty$ is Banach for the supremum norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-banach-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-27
---

## Example

Let $\ell^\infty$ be the space of bounded scalar sequences
$x=(x_n)_{n\ge 0}$ with norm
$$\|x\|_\infty:=\sup_{n\ge 0}|x_n|.$$
Then $\ell^\infty$ is a Banach space.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x^{(m)})$ in $\ell^\infty$ for the supremum norm, with coordinates $x^{(m)}=(x^{(m)}_n)_{n\ge 0}$.

[L1] A Banach space is a normed space complete for its norm metric ([[def-banach-space]]).

## Verification

**Proof technique:** direct.

1.1 For each fixed coordinate $n$, the scalar sequence $(x^{(m)}_n)_m$ is Cauchy because $|x^{(m)}_n-x^{(\ell)}_n|\le \|x^{(m)}-x^{(\ell)}\|_\infty$. Let $x_n:=\lim_m x^{(m)}_n$. [given]

2.1 Since $(x^{(m)})$ is Cauchy, choose $M$ with $\|x^{(m)}-x^{(\ell)}\|_\infty<1$ for $m,\ell\ge M$. Fixing $\ell=M$ and letting $m\to\infty$ coordinatewise gives $|x_n|\le \|x^{(M)}\|_\infty+1$ for every $n$, so $x=(x_n)$ is bounded and lies in $\ell^\infty$. [step 1.1, given]

2.2 Given $\varepsilon>0$, choose $M$ with $\|x^{(m)}-x^{(\ell)}\|_\infty<\varepsilon$ for $m,\ell\ge M$. Letting $\ell\to\infty$ coordinatewise yields $|x^{(m)}_n-x_n|\le \varepsilon$ for every $n$, so $\|x^{(m)}-x\|_\infty\le \varepsilon$ for $m\ge M$. [step 1.1, given]

3.1 Thus every supremum-norm Cauchy sequence in $\ell^\infty$ converges in $\ell^\infty$, so $\ell^\infty$ is Banach by [L1]. [step 2.1, step 2.2, L1] ∎
