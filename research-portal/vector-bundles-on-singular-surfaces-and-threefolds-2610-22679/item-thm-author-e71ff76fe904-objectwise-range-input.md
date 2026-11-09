---
title: Exact objectwise cofiber bound for the canonical source composite
status: draft
research_item: thm-author-e71ff76fe904-objectwise-range-input
dependency_level: 1
---

PDF p. 5: Prime-to-characteristic comparison

## Prerequisites

- [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input)

## Statement
Let $F=\mathbb Q$ or $\mathbb F_p$, let $j$ be a nonnegative integer and let $n\geq1$ be an integer invertible in $F$. With the preceding source data, the composite
$$M_j/n\longrightarrow\mathbb Z(j)_{\mathrm{cdh}}/n\xrightarrow{\theta_j}L_{\mathrm{cdh}}\tau^{\leq j}B_j\xrightarrow{\epsilon_j}B_j$$
is the natural comparison of EM Theorem4.33(1). At every qcqs $F$-scheme its cofiber has zero cohomology in every degree at most $j$.

## External input
Use the explicit cofiber assertion of Theorem 4.33(1), arXiv:2309.08463v1, printed p. 31 (zero-based PDF page 30). Its short proof calls the last cofiber a fiber. The two differ by a shift; that printed fiber sentence is not used as a local proof of the theorem.

This is the substantial established source range theorem, imported with its actual comparison map. All five local prerequisites isolate the site, source restriction, quotient, map composition and truncation applications; they do not purport to reconstruct the deep theorem.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the displayed construction or conclusion with its actual maps.

[F1] The exact theorem in External input, with the same factorization data as [thm-author-e71ff76fe904-cdh-factorization-input](item-thm-author-e71ff76fe904-cdh-factorization-input).

## Proof
1.1 Import the actual map and objectwise cofiber statement of EM Theorem4.33(1), with its exact factorization given in the complete proof on p.31. [F1]

2.1 Its $n$ is any positive integer invertible in the prime field, so composite coefficients are included. The explicit source statement is in terms of the cofiber and is the assertion used here. We do not infer it from a sheafified equivalence or replace it by an unverified objectwise exactness claim about localization. [F1, step 1.1] ∎
