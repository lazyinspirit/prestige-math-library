---
id: thm-peano-mixed-partial-theorem
kind: theorem
title: "Peano's mixed-partial theorem from continuity of one mixed partial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-rectangle-second-difference-mean-value-formula]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Mixed partial derivatives (Eremenko)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/mixedpartial.pdf"
pipeline_run: null
---

## Statement

Let $f$ have $f_{xy}$ in a neighbourhood of $(a,b)$, with $f_{xy}$ continuous at $(a,b)$, and let $f_{yx}(a,b)$ exist. Then $f_{xy}(a,b)=f_{yx}(a,b)$.

## Facts & Assumptions

**Given:** The hypotheses in the statement.

[L1] When $f_x$ and $f_{xy}$ exist on a neighbourhood of a rectangle, its rectangular second difference is the product of the side lengths and a value of $f_{xy}$ ([[lem-rectangle-second-difference-mean-value-formula]]).

## Proof

**Proof technique:** direct.

1.1 For sufficiently small nonzero $h,k$, apply [L1] to the rectangle with corners $(a,b)$ and $(a+h,b+k)$. After division by $hk$, continuity of $f_{xy}$ at $(a,b)$ makes the limit, as $h,k\to0$, equal to $f_{xy}(a,b)$. [L1, given, algebra]

2.1 For fixed nonzero $h$, first let $k\to0$ in the same rectangle quotient; it becomes $\bigl(f_y(a+h,b)-f_y(a,b)\bigr)/h$. Letting $h\to0$ gives the defining quotient for $f_{yx}(a,b)$. [step 1.1, given, algebra]

3.1 The two limits are equal, proving $f_{xy}(a,b)=f_{yx}(a,b)$. [step 1.1, step 2.1] ∎
