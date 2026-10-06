---
id: rem-kolmogorov-block-polynomials-have-large-partial-sum-maxima
kind: remark
title: Kolmogorov polynomial blocks — recorded construction lemma
deps: [def-carleson-maximal-partial-sum-operator]
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: 'Grafakos, Classical Fourier Analysis, third edition'
      url: 'https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf'
      locator: '§4.2.1, Lemmas 4.2.2–4.2.4, pp. 255–259, especially (4.2.6)'
proved_here: false
external_dependency:
  source_url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
  exact_statement: For each integer M>=1 there are a nonnegative trigonometric polynomial g_M with ||g_M||_1=1 and a measurable A_M with m(A_M)>1-2^(-M), such that inf over x in A_M of sup_{N>=1}|S_N g_M(x)|>2^M.
  local_proof_attempt: Read the Kronecker proof, atomic probability measures and finite-maximal truncation followed by Fejer smoothing. This requires its rational-independence construction and uniform phase approximation; the design explicitly withholds this multi-lemma proof. No fabricated short proof or logical edge to an unproved lemma is planned.
  necessity: Required by FR-5’s explicit literature boundary; retained for mathematical scope without making an unproved result a logical prerequisite.
status: published
origin: pipeline
verification:
  sources_checked:
    date: 2026-09-07
    scope: citations
    by: session-audit
  precheck: n/a
---

## Recorded construction lemma

For every integer $M\ge1$ there exist a nonnegative trigonometric polynomial $g_M$ on $\mathbb T=\mathbb R/\mathbb Z$ and a measurable set $A_M\subseteq\mathbb T$ such that, for normalized Haar measure,

$$\|g_M\|_1=1,\qquad m(A_M)>1-2^{-M},\qquad \inf_{x\in A_M}\sup_{N\ge1}|S_Ng_M(x)|>2^M.$$

The supremum is of the same partial sums as [[def-carleson-maximal-partial-sum-operator]]. This is the integer version of Grafakos, Lemma 4.2.4, including nonnegativity from its construction. The proof is not supplied here. “Block” does not mean disjoint frequency support.

## Construction cost in the source

Grafakos's Lemma 4.2.2 aligns phases: if $1,x_1,\ldots,x_n$ are linearly independent over $\mathbb Q$, then for any unimodular $z_j$ and $\varepsilon>0$ some integer $L$ satisfies $|e^{2\pi iLx_j}-z_j|<\varepsilon$ for all $j$. Its Fourier-averaging argument is not established locally.

Lemma 4.2.3 constructs atomic probability measures $\mu_n$ with $\sup_{L\ge1}|D_L*\mu_n|\ge c\log n$ almost everywhere, for an absolute $c>0$. Rational independence supplies simultaneous alignment of the kernel terms. Lemma 4.2.4 then selects a finite maximal truncation and smooths $\mu_n$ with a Fejer kernel. Positivity and mass one survive this smoothing, while the finitely many partial sums remain close enough to preserve the required height. These are descriptions of unproved source machinery, not local facts available as dependencies.
