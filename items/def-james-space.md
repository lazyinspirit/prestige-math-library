---
id: def-james-space
kind: definition
title: "James space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-c-zero-and-ell-infinity]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-09-14
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Definition 2.75, printed pp.94-95"
pipeline_run: phase-2-next-18
---

## Definition

Let $c_0=c_0(\mathbb N;\mathbb R)$ as in
[[def-c-zero-and-ell-infinity]], and use positive labels for its coordinates:
if $\widetilde x:\mathbb N\to\mathbb R$ is the underlying sequence, then
$x_n$ below means $\widetilde x_{n-1}$ for $n\ge1$. Likewise $e_n$ denotes
the canonical vector supported at the underlying coordinate $n-1$. If
$p=(1\le p_1<\cdots<p_k)$ is a nonempty finite increasing tuple, define
$q_p(x)=0$ for $k=1$, and for $k\ge2$ define

$$q_p(x)^2:=\frac12\left( \sum_{j=1}^{k-1}|x_{p_j}-x_{p_{j+1}}|^2 +|x_{p_k}-x_{p_1}|^2\right).$$

The **James space** is the real vector space

$$J:=\{x\in c_0:\sup_pq_p(x)<\infty\},$$

equipped with $\|x\|_J:=\sup_pq_p(x)$. The cyclic closing term and the factor
$1/2$ are part of this fixed norm; later equivalent James norms are not being
identified with it isometrically.
