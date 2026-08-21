---
id: thm-absolute-improper-multiple-integral-by-exhaustion
kind: theorem
title: "Absolute convergence makes signed improper multiple integrals independent of exhaustion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-improper-multiple-integral-and-absolute-convergence, thm-nonnegative-improper-multiple-integral-by-exhaustion, def-riemann-integral-over-a-jordan-set, thm-multidimensional-integral-properties]
justified_by: []
aliases: []
landmark: true
short: "Absolute signed exhaustion independence"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Guillemin, MIT 18.101 Analysis II Lecture Notes, Definition 3.25"
      url: "https://ocw.mit.edu/courses/18-101-analysis-ii-fall-2005/babd982be745679b6d691f78b1c18f53_lectures.pdf"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, Proposition 3.1.18"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

Let $f:D\to\mathbb R$ be locally Riemann integrable. If $\int_D|f|<+\infty$, then for every compact Jordan exhaustion $(K_j)$,

$$\int_Df=\lim_{j\to\infty}\int_{K_j}f,$$

and the value is independent of the exhaustion. Conversely, under the adopted definition, a signed improper multiple integral exists only under this absolute-convergence condition.

## Facts & Assumptions

**Given:** An open set $D$, an absolutely improperly integrable $f:D\to\mathbb R$, and a compact Jordan exhaustion $(K_j)$.

[L1] Every compact Jordan exhaustion computes the nonnegative improper integral, independently of the exhaustion ([[thm-nonnegative-improper-multiple-integral-by-exhaustion]]).

[L2] A locally Riemann-integrable signed function is improperly integrable precisely when the nonnegative improper integral of its absolute value is finite ([[def-improper-multiple-integral-and-absolute-convergence]]).

[L3] On a nondegenerate rectangle, proper multidimensional Riemann integrals are linear and monotone ([[thm-multidimensional-integral-properties]]).

[L4] The integral over a bounded Jordan set is the bounding-rectangle integral of the zero extension ([[def-riemann-integral-over-a-jordan-set]]).

## Proof

**Proof technique:** direct.

1.1 Since $0\le f^+,f^-\le|f|$, extend the restrictions to every compact Jordan set by zero on one bounding rectangle. Monotonicity in [L3], the Jordan-set definition [L4], and the defining suprema in [L2] make both nonnegative improper integrals finite; [L1] then gives $\int_{K_j}f^+\to\int_Df^+$ and $\int_{K_j}f^-\to\int_Df^-$ along every exhaustion. [L1, L2, L3, L4]

2.1 On each compact $K_j$, extend the three restrictions by zero to one bounding rectangle. The identity $f=f^+-f^-$ and linearity in [L3], interpreted through [L4], give $\int_{K_j}f=\int_{K_j}f^+-\int_{K_j}f^-$. [step 1.1, L3, L4]

3.1 Subtracting the two finite limits in step 1.1 and using step 2.1 yields $\int_{K_j}f\to\int_Df^+-\int_Df^-=\int_Df$, independently of the exhaustion; the converse is the defining condition in [L2]. [step 1.1, step 2.1, L2] ∎
