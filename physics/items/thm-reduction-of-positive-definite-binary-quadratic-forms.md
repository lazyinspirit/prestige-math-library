---
id: thm-reduction-of-positive-definite-binary-quadratic-forms
kind: theorem
title: "Every positive-definite integral binary quadratic form is properly equivalent to a reduced form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reduced-positive-definite-binary-quadratic-form, lem-gauss-reduction-step-improves-a-positive-definite-form, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, Theorem 9.3.2"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
    - title: "Andrew Granville, Binary Quadratic Forms, Exercise 4.1e"
      url: "https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf"
pipeline_run: null
---

## Statement

Every positive-definite integral binary quadratic form is properly equivalent to
a reduced form.

## Facts & Assumptions

**Given:** A positive-definite integral binary quadratic form $f$.

[F1] A positive-definite form is reduced exactly when it satisfies the inequalities and boundary sign condition of [[def-reduced-positive-definite-binary-quadratic-form]].

[L1] If a positive-definite form is not reduced, then some properly equivalent positive-definite form has strictly smaller reduction measure ([[lem-gauss-reduction-step-improves-a-positive-definite-form]]).

[L2] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** direct.

1.1 Let $S$ be the set of reduction measures of the positive-definite forms properly equivalent to $f$. The set $S$ is nonempty because it contains the measure of $f$, and $S\subseteq\mathbb{N}$. [given, construct]

2.1 By [L2], the set $S$ has a least element. Choose a positive-definite form $g$ properly equivalent to $f$ whose reduction measure is that least element. [step 1.1, L2, choose]

3.1 If $g$ were not reduced, [L1] would produce a properly equivalent positive-definite form $h$ with strictly smaller reduction measure. Since $h$ is properly equivalent to $g$ and $g$ is properly equivalent to $f$, the form $h$ is also properly equivalent to $f$, so its measure lies in $S$, contradicting the choice of $g$. [step 2.1, L1, algebra]

4.1 Therefore $g$ is reduced, and it is properly equivalent to $f$ by construction. [F1, step 2.1, step 3.1] ∎
