---
id: lem-square-summable-sequences-form-a-hilbert-space
kind: lemma
title: The real square-summable sequence space is complete
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
provenance:
  statement: ai-altered
  proof: ai-altered
dependency_level: 0
deps:
  - def-square-summable-family-on-an-arbitrary-index-set
  - thm-reals-cauchy-complete
  - def-hilbert-space
aliases: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017"
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
      locator: Chapter 1, sequence-space completeness and the Hilbert-space example $\ell^2(\mathbb N)$, printed pp. 8–10 and 17–18. Teschl refers to the analogous $\ell^1$ proof; the present item supplies the complete $\ell^2$ argument locally.
---

## Statement

The real sequence space
$$\ell^2(\mathbb N,\mathbb R)=\left\{x=(x_n):\sum_{n\in\mathbb N}|x_n|^2<\infty\right\},$$
with its canonical inner product and norm from
[[def-square-summable-family-on-an-arbitrary-index-set]], is complete and
therefore is a real Hilbert space.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x^{(k)})_{k\in\mathbb N}$ in the canonical
norm on $\ell^2(\mathbb N,\mathbb R)$.

[F1] [[def-square-summable-family-on-an-arbitrary-index-set]]: The norm obeys
$\|x\|_2^2=\sum_n|x_n|^2$, where the nonnegative sum is the supremum of its
finite subsums; the coordinate vectors are well-defined and the space has the
canonical inner product.

[F2] [[thm-reals-cauchy-complete]]: Every Cauchy sequence of reals converges
to a real number.

[F3] [[def-hilbert-space]]: A complete inner-product space is a Hilbert space.

## Proof
1.1 For each fixed $n$, $|x_n^{(k)}-x_n^{(j)}|\le \|x^{(k)}-x^{(j)}\|_2$, so $(x_n^{(k)})_k$ is Cauchy in $\mathbb R$. By [F2] let $x_n=\lim_k x_n^{(k)}$; each coordinate limit is unique, so these values define a sequence $x$. To see $(x^{(k)})$ is bounded, choose $K$ so that $\|x^{(k)}-x^{(j)}\|_2<1$ for all $k,j\ge K$; then $\|x^{(k)}\|_2\le\|x^{(K)}\|_2+1$ for $k\ge K$, and the finitely many earlier norms have a finite maximum. Thus $\|x^{(k)}\|_2\le M$ for some finite $M$. For any finite $F\subset\mathbb N$, $\sum_{n\in F}|x_n|^2=\lim_k\sum_{n\in F}|x_n^{(k)}|^2\le M^2$. Taking the supremum over finite $F$ gives $\sum_n|x_n|^2\le M^2$, hence $x\in\ell^2$. [given, F1, F2, algebra]

2.1 Let $\varepsilon>0$. Choose $K$ such that $\|x^{(k)}-x^{(j)}\|_2<\varepsilon/2$ for all $k,j\ge K$. Fix $k\ge K$. For every finite $F\subset\mathbb N$, coordinate convergence and continuity of finite sums give $\sum_{n\in F}|x_n^{(k)}-x_n|^2 =\lim_{j\to\infty}\sum_{n\in F}|x_n^{(k)}-x_n^{(j)}|^2 \le\varepsilon^2/4$. Taking the supremum over finite $F$ yields $\|x^{(k)}-x\|_2\le\varepsilon/2<\varepsilon$. Thus $x^{(k)}\to x$ in $\ell^2$. Every Cauchy sequence converges, proving completeness and, by [F3], the Hilbert-space claim. [F1, F2, F3, step 1.1, algebra] ∎
