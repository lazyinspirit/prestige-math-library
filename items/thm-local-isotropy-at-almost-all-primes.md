---
id: thm-local-isotropy-at-almost-all-primes
kind: theorem
title: "Almost all local completions are isotropic in dimension at least three"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-finite-field-quadratic-isotropy-in-dimension-at-least-three, cor-p-adic-simple-root-lifting, def-quadratic-form-and-polar-form, cor-quadratic-forms-diagonalize-in-characteristic-not-two]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11, Theorem 11.11"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.5"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $q$ be a nonzero quadratic form over $\mathbb Q$ of dimension at least $3$.
Then $q$ is isotropic over $\mathbb Q_p$ for all but finitely many primes $p$.

## Facts & Assumptions

**Given:** A quadratic form $q$ over $\mathbb Q$ of dimension $n\ge3$.

[L1] Over characteristic not $2$, the form diagonalizes ([[cor-quadratic-forms-diagonalize-in-characteristic-not-two]]).

[L2] A quadratic form of dimension at least $3$ over an odd finite field is isotropic ([[lem-finite-field-quadratic-isotropy-in-dimension-at-least-three]]).

[L3] A simple root modulo $p$ lifts uniquely to $\mathbb Z_p$ ([[cor-p-adic-simple-root-lifting]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], after scaling we may write $q=a_1X_1^2+\cdots+a_nX_n^2$ with integers $a_i$. If some $a_i=0$, then $q$ already has the rational isotropic vector with $X_i=1$ and every other coordinate $0$, hence it is isotropic over every $\mathbb Q_p$ and there is nothing more to prove. So assume from now on that every $a_i$ is nonzero. Exclude the finite set of primes dividing $2a_1\cdots a_n$. For any remaining odd prime $p$, all $a_i$ are units modulo $p$, so the reduction $\bar q$ over $\mathbb F_p$ still has dimension $n\ge3$. [L1, given, cases]

2.1 By [L2], the reduced form $\bar q$ has a nonzero isotropic vector $\bar x$. Since some coordinate $\bar x_j$ is nonzero and $a_j\not\equiv0\pmod p$, the partial derivative $\partial q/\partial X_j=2a_jX_j$ is nonzero at $\bar x$ modulo $p$. Fix lifts of the other coordinates and view $q$ as a polynomial in $X_j$ alone; then [L3] lifts the simple root $\bar x_j$ to a $p$-adic root. Thus $q$ is isotropic over $\mathbb Q_p$. Since only finitely many primes were excluded in step 1.1, the theorem follows. [L2, L3, step 1.1, algebra] ∎
