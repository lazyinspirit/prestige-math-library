---
id: def-absolute-and-conditional-convergence
kind: definition
title: "Absolutely convergent and conditionally convergent series, and the general starting index"
status: published
origin: session
deps: [def-series, lem-absolute-convergence-implies-convergence, def-abs-value, lem-of-abs-value, def-real-limit]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Absolute convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Absolute_convergence"
    - title: "Conditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Conditional_convergence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Let $(a_k)$ be a sequence of reals, with series $\sum a_k$ and partial sums
$s_n = \sum_{k<n} a_k$ as in [[def-series]], and let $|x|$ be the absolute value
([[def-abs-value]]).

**Absolute convergence.** The series $\sum a_k$ **converges absolutely** when the
series $\sum |a_k|$ converges ([[def-series]]). Since $|a_k| \ge 0$ for every $k$
([[lem-of-abs-value]]), this is a statement about a series of nonnegative terms.

**Conditional convergence.** The series $\sum a_k$ **converges conditionally**
when it converges ([[def-series]], [[def-real-limit]]) and does *not* converge
absolutely.

So a convergent series is exactly one of the two: absolutely convergent or
conditionally convergent, according as $\sum |a_k|$ converges or not.

**One implication is already proved, and is not reproved anywhere on this page.**
[[lem-absolute-convergence-implies-convergence]] states that if $\sum |a_k|$
converges then $\sum a_k$ converges. That lemma was coined and proved on the
previous page of this track, where the root and ratio tests need it; this page
names it and builds on it. In particular an absolutely convergent series is a
convergent series, so the two words above really do partition the convergent
series, and "conditionally convergent" is not vacuous by accident: the alternating
harmonic series is a witness, and the witness is exhibited in
[[fs-convergent-implies-absolutely-convergent]].

**General starting index.** Let $m \in \mathbb{N}$ and let $(a_k)_{k \ge m}$ be a
family from $m$ ([[def-series]]). The series $\sum_{k \ge m} a_k$ **converges
absolutely** when $\sum_{k \ge m} |a_k|$ converges, and **converges
conditionally** when it converges and does not converge absolutely. By
[[def-series]] both statements are the corresponding statements for the shifted
sequence $j \mapsto a_{j+m}$, so nothing new is being defined and every result
below transfers to a general starting index in the same way, exactly as
[[lem-absolute-convergence-implies-convergence]] already records for the one
implication it proves.

## Remarks

- **Absolute convergence is a condition on the terms, not on the sum.** It says
  the series of absolute values converges, and it says nothing about the value of
  $\sum_{k=0}^{\infty} a_k$. The two sums are in general different, and no
  statement here identifies them.

- **Why the distinction earns a page.** Every result on this page separates the
  two classes. An absolutely convergent series may be reordered at will
  ([[thm-dirichlet-rearrangement]]) and multiplied by another
  ([[thm-mertens]]); a conditionally convergent one may be reordered to any sum
  whatever ([[thm-riemann-series-theorem]]). The difference is not one of degree.

- **A series of nonnegative terms converges absolutely if it converges at all**,
  since then $|a_k| = a_k$. So the distinction is invisible for the comparison,
  condensation, Raabe, Gauss and Kummer tests of the previous page, all of which
  assume terms of one sign. It is not invisible on that page as a whole: the root
  and ratio tests are stated for terms of arbitrary sign and reach convergence of
  $\sum a_k$ precisely through
  [[lem-absolute-convergence-implies-convergence]], which is where the word
  *absolutely convergent* is first used. What that page does not develop, and this
  one does, is everything that separates the two classes rather than the one
  implication those two tests need.
