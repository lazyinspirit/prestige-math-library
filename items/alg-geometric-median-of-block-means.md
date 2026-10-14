---
id: alg-geometric-median-of-block-means
kind: algorithm
title: "Geometric median of block means"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-hilbert-space, def-countable-choice, def-separable-space]
justified_by: [lem-measurable-minimum-norm-geometric-median-selection]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Stanislav Minsker, Geometric Median and Robust Estimation in Banach Spaces, Lemma 2.1 and §4.1"
      url: "https://arxiv.org/pdf/1308.1334"
      locator: "PDF pp. 3–8; the geometric-median objective and Hilbert-space mean-of-means construction."
    - title: "Gábor Lugosi, Mean Estimation in High Dimension, §3"
      url: "https://ems.press/content/book-chapter-files/33347?nt=1"
      locator: "PDF pp. 4–5; geometric median of block means and its finite-dimensional role."
---

## Definition

Let $H$ be a separable real Hilbert space, let $n\ge1$, and let $1\le k\le n$ be an integer. Given $(x_1,\ldots,x_n)\in H^n$, put $q=\lfloor n/k\rfloor$ and $r=n-kq$. Form consecutive blocks $B_1,\ldots,B_k$ in index order, with $|B_j|=q+1$ for $j\le r$ and $|B_j|=q$ for $j>r$. Compute the block means $m_j=|B_j|^{-1}\sum_{i\in B_j}x_i$. Return the unique minimum-norm point of
$$
\operatorname*{argmin}_{z\in H}\sum_{j=1}^k\|z-m_j\|.
$$

The objective minimizers are called geometric medians of the block means. The minimum-norm rule makes the output single-valued. Existence, uniqueness of that selected point, and Borel measurability as a function of the input tuple are proved in [[lem-measurable-minimum-norm-geometric-median-selection]].
