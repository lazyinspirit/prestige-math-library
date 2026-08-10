---
id: cor-derivatives-have-no-removable-or-jump-discontinuities
kind: corollary
title: "A derivative has neither a removable discontinuity nor a jump discontinuity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-darboux-theorem-for-derivatives, def-classification-of-discontinuities, def-one-sided-limits]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
    - title: "Colgate University MATH 323, Chapter 5 notes"
      url: "https://math.colgate.edu/math323/dlantz/extras/notesC5.pdf"
    - title: "University of Pennsylvania, derivatives and discontinuities"
      url: "https://www2.math.upenn.edu/~ancoop/3600/section-25.html"
pipeline_run: null
---

## Statement

A derivative has neither a removable discontinuity nor a jump discontinuity. Any discontinuity of a derivative is therefore essential in the classification of [[def-classification-of-discontinuities]].

## Facts & Assumptions

**Given:** $g=f'$ on an interval and a discontinuity point $c$.

[L1] The derivative $g$ has the intermediate value property ([[thm-darboux-theorem-for-derivatives]]).

[L2] At a removable discontinuity both finite one-sided limits agree, while at a jump they are finite and unequal ([[def-classification-of-discontinuities]], [[def-one-sided-limits]]).

## Proof

**Proof technique:** contradiction.

1.1 Assume $c$ is removable. Choose a value strictly between the common punctured limit and $g(c)$. On a sufficiently small punctured neighbourhood all values of $g$ lie on the limit side of that value, while the endpoint value lies on the other side, contradicting the intermediate value property on a segment ending at $c$.  [assume-contra, L1, L2, choose]

1.2 Assume $c$ is a jump. The open interval between the unequal one-sided limits contains a value different from $g(c)$; choose such a value. Sufficiently close points on the two sides have values on opposite sides of the chosen value, while neither punctured side nor the point $c$ takes it, again contradicting the intermediate value property.  [assume-contra, L1, L2, choose]

2.1 Thus neither kind of discontinuity can occur.  [step 1.1, step 1.2, discharge-contradiction] ∎
