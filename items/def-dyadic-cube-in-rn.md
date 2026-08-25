---
id: def-dyadic-cube-in-rn
kind: definition
title: "Dyadic cubes of generation $k$ in $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-half-open-box, def-integer-power, def-integers]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.1.14"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
pipeline_run: null
---

## Definition

Fix $n \ge 1$. For $k \in \mathbb{N}$ and a function $m : n \to \mathbb{Z}$
([[def-integers]]), whose values are read inside $\mathbb{R}$ along the canonical
embedding, the **dyadic cube of generation $k$ and index $m$** is the half-open
box ([[def-half-open-box]])

$$Q_{k,m} \;:=\; B(a,b), \qquad a_i := m_i 2^{-k}, \quad b_i := (m_i+1)2^{-k} \quad (i<n),$$

that is $Q_{k,m} = \{\, x \in \mathbb{R}^n : m_i 2^{-k} < x_i \le (m_i+1)2^{-k} \text{ for every } i<n \,\}$,
the powers being the integer powers of [[def-integer-power]]. A **dyadic cube**
is a set of this form for some $k$ and $m$; its **generation** is $k$ and its
**side length** is $2^{-k}$.

Every dyadic cube is nonempty, since $m_i2^{-k} < (m_i+1)2^{-k}$ for every $i$,
so by [[def-half-open-box]] its parameters are determined by the set; the
generation and the index are therefore determined by the cube as well. At $k=0$
the cubes are the translates of the unit cube $(0,1]^n$ by integer vectors, and
$Q_{0,\mathbf{0}} = (0,1]^n$.

## Remarks

- **The half-open convention is what makes the family a tiling.** The cubes of a
  fixed generation are pairwise disjoint and cover $\mathbb{R}^n$
  ([[lem-dyadic-cubes-of-one-generation-partition-rn]]), which would fail for
  closed cubes, whose faces overlap, and for open cubes, which miss the grid
  points.

- **Generations are natural numbers here**, so the side lengths $2^{-k}$ are at
  most $1$ and there is a coarsest generation. Nothing below needs cubes larger
  than the unit cube, and bounding the generations below is what makes the
  maximal-cube selection of
  [[thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes]] work.
