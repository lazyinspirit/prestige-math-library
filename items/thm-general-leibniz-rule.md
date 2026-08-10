---
id: thm-general-leibniz-rule
kind: theorem
title: "The general Leibniz rule for the $n$-th derivative of a product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-higher-derivatives-and-smoothness, thm-algebra-of-derivatives, def-binomial-coefficient, thm-pascals-rule, def-factorial-and-falling-factorial, def-finite-sum, lem-finite-sum-laws, def-canonical-natural, lem-of-naturals-positive, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "UTSA Mathematics, Differentiation rules"
      url: "https://mathresearch.utsa.edu/wiki/index.php?title=Differentiation_Rule"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Statement

If $n\in\mathbb N$ and $f,g$ are $n$-times differentiable on an interval $I$, then
$$(fg)^{(n)}=\sum_{j=0}^{n}\iota\!\binom nj\,f^{(j)}g^{(n-j)}.$$

## Facts & Assumptions

**Given:** $n\in\mathbb N$ and functions $f,g$ with all derivatives through order $n$.

[L1] Products satisfy $(uv)'=u'v+uv'$ ([[thm-algebra-of-derivatives]]).

[L2] Pascal's rule says $\binom{k+1}{j}=\binom{k}{j}+\binom{k}{j-1}$, with the boundary values from [[def-binomial-coefficient]] ([[thm-pascals-rule]]).

[L3] Finite sums split and reindex as stated in [[def-finite-sum]] and [[lem-finite-sum-laws]], and the canonical embedding $\iota$ preserves natural addition ([[def-canonical-natural]], [[lem-of-naturals-positive]]).

## Proof

**Proof technique:** induction.

1.1 For $n=0$, the displayed sum is $\iota\binom00 f^{(0)}g^{(0)}=fg=(fg)^{(0)}$.  [base, L2]

1.2 Assume the formula holds at an index $k$, and assume $f,g$ have derivatives through order $k+1$.  [ih, assume-hyp]

2.1 Differentiating the finite sum gives $(fg)^{(k+1)}=\sum_{j=0}^{k}\iota\binom kj\bigl(f^{(j+1)}g^{(k-j)}+f^{(j)}g^{(k-j+1)}\bigr)$.  [step 1.2, L1, L3]

3.1 Shift $j+1$ in the first sum, retain $j$ in the second, and combine the two interior coefficients by Pascal's rule; the two boundary coefficients are $1$. The result is $(fg)^{(k+1)}=\sum_{j=0}^{k+1}\iota\binom{k+1}{j}f^{(j)}g^{(k+1-j)}$.  [step 2.1, L2, L3, algebra]

4.1 Thus the formula holds for every $n\in\mathbb N$.  [step 1.1, step 3.1, discharge-induction] ∎
