---
id: def-trace-form-of-a-finite-extension
kind: definition
title: "The trace form $(x,y)\\mapsto \\operatorname{Tr}_{K/F}(xy)$ of a finite extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-norm-and-trace, def-bilinear-symmetric-skew-and-alternating-forms]
aliases: []
landmark: false
verification:
  audited: 2026-08-26
sources:
  scraped: []
  references:
    - title: "B. Conrad, Norm and trace, Section 2"
      url: "https://virtualmath1.stanford.edu/~conrad/248APage/handouts/normtrace.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 5"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a finite field extension. The **trace form** of $K/F$ is the
function

$$T_{K/F}\colon K\times K\to F,\qquad T_{K/F}(x,y):=\operatorname{Tr}_{K/F}(xy),$$

where $\operatorname{Tr}_{K/F}$ is the field trace
([[def-field-norm-and-trace]]).

Because multiplication in $K$ is commutative and the trace is $F$-linear in its
argument, the trace form is a symmetric bilinear form on the $F$-vector space
$K$ in the sense of
[[def-bilinear-symmetric-skew-and-alternating-forms]]. The later theorem on this
page identifies exactly when it is nondegenerate.
