---
id: ex-a-reductive-algebra-with-degenerate-killing-form
kind: example
title: A reductive algebra with degenerate Killing form
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-equivalent-characterizations-of-reductive-lie-algebras, def-killing-form-of-a-finite-dimensional-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Theorem 5.49"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§5.7, Theorem 5.49, printed p. 83"
---

## Example

For $n\geq1$ over a characteristic-zero field, $\mathfrak{gl}_n$ is reductive but its Killing form is degenerate:

$$\mathfrak{gl}_n=kI\oplus\mathfrak{sl}_n,\qquad K(I,X)=0\quad(X\in\mathfrak{gl}_n).$$

## Facts & Assumptions

**Given:** The matrix Lie algebra $\mathfrak{gl}_n(k)$, $n\geq1$, over a characteristic-zero field.

[L1] A finite-dimensional Lie algebra is reductive when it is the direct sum of its center and a semisimple ideal ([[thm-equivalent-characterizations-of-reductive-lie-algebras]]).

[L2] Its Killing form is $K(X,Y)=\operatorname{tr}(\operatorname{ad}_X\operatorname{ad}_Y)$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Since $n$ is invertible in $k$, every matrix has the unique decomposition $$X=\frac{\operatorname{tr}X}{n}I+\left(X-\frac{\operatorname{tr}X}{n}I\right),$$ whose second term is traceless. Thus $\mathfrak{gl}_n=kI\oplus\mathfrak{sl}_n$. The first summand is the center and the second is semisimple for $n\geq2$; for $n=1$ it is zero, which is semisimple by convention. Hence [L1] makes $\mathfrak{gl}_n$ reductive for every $n\geq1$. [L1, given, algebra]

2.1 Since $I$ is central, $\operatorname{ad}_I=0$. Therefore [L2] gives $K(I,X)=0$ for every $X$. The nonzero vector $I$ lies in the radical of the form, so it is degenerate; at $n=1$ it is identically zero. The calculation is finite and uses no choice. [L2, step 1.1, algebra] ∎