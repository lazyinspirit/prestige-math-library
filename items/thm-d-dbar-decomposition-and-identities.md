---
id: thm-d-dbar-decomposition-and-identities
kind: theorem
title: The d, partial and dbar identities
status: draft
origin: pipeline
deps:
  - def-bigraded-complex-differential-forms
  - thm-the-exterior-derivative-squares-to-zero
  - thm-the-exterior-derivative-is-a-graded-derivation
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lebl, Tasty Bits of Several Complex Variables, v4.4, Chapter 4 §4.4"
      url: https://www.jirka.org/scv/scv.pdf
      locator: "Definition 4.4.1 and Exercises 4.4.1–4.4.2, printed p. 137; the identities below are proved from the library's earlier exterior-derivative results."
    - title: "Jabbari, Notes for Analysis and Geometry of Several Complex Variables, §3.2"
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
    - title: "Guillemin and Campbell, MIT 18.117 Lecture Notes, Lectures 1–4"
      url: https://ocw.mit.edu/courses/18-117-topics-in-several-complex-variables-spring-2005/3e8b0c3499d6226959485ace042cdaab_18117notes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $U\subseteq\mathbb C^n$ be open and let all forms below be smooth and
complex-valued. Then
$$d=\partial+\bar\partial,\qquad \partial^2=0,\qquad \bar\partial^2=0,\qquad \partial\bar\partial+\bar\partial\partial=0.$$
For $\eta\in\Omega^{p,q}(U)$ and $\theta\in\Omega^{r,s}(U)$,
$$\partial(\eta\wedge\theta)=\partial\eta\wedge\theta+(-1)^{p+q}\eta\wedge\partial\theta,\qquad \bar\partial(\eta\wedge\theta)=\bar\partial\eta\wedge\theta+(-1)^{p+q}\eta\wedge\bar\partial\theta.$$
The identities hold at bidegree endpoints as well, with components outside
$0\le p,q\le n$ interpreted as zero.

## Facts & Assumptions

**Given:** The open set $U\subseteq\mathbb C^n$ and smooth complex-valued
forms on $U$.

[F1] Complex forms decompose uniquely by bidegree, and $\partial$ and
$\bar\partial$ are the two bidegree components of $d$
([[def-bigraded-complex-differential-forms]]).

[F2] The published exterior derivative satisfies $d^2=0$ on smooth
differential forms ([[thm-the-exterior-derivative-squares-to-zero]]).

[F3] For homogeneous real forms, the published exterior derivative obeys the
graded product rule
([[thm-the-exterior-derivative-is-a-graded-derivation]]).

## Proof

**Proof technique:** direct.

1.1 Write a complex form $\xi=\xi_1+i\xi_2$ with real forms $\xi_1,\xi_2$. The coordinate formula defining $d$ on complex coefficients is the complex-linear extension of the real exterior derivative, so $d^2\xi=d^2\xi_1+i\,d^2\xi_2=0$ by [F2]. [F1, F2, given, algebra]

1.2 The real graded product rule [F3] extends to complex forms: write each complex form as real part plus $i$ times imaginary part, expand the wedge product by complex bilinearity, and apply [F3] to each real pair. The coordinate definition of $d$ in [F1] is complex-linear, so the resulting identity is the same signed rule for complex forms. [F1, F3, given, algebra]

2.1 For a pure type form $\eta\in\Omega^{p,q}(U)$, [F1] gives $d\eta=\partial\eta+\bar\partial\eta$ and hence $0=d^2\eta=\partial^2\eta+(\partial\bar\partial+\bar\partial\partial)\eta+\bar\partial^2\eta$ by step 1.1. These three terms have respective bidegrees $(p+2,q)$, $(p+1,q+1)$, and $(p,q+2)$; the direct sum uniqueness in [F1] forces each component to vanish, including when an endpoint component is zero by convention. [F1, step 1.1, given, algebra]

2.2 Let $\eta\in\Omega^{p,q}(U)$ and $\theta\in\Omega^{r,s}(U)$. Wedge products add the two bidegrees (and vanish if a repeated differential occurs). In the complex graded-derivation identity from step 1.2, the terms involving $\partial$ have bidegree $(p+r+1,q+s)$ and those involving $\bar\partial$ have bidegree $(p+r,q+s+1)$. Projecting onto these distinct summands yields the two displayed Leibniz identities. [F1, step 1.2, given, algebra]

3.1 Every smooth complex form is a finite sum of its bidegree components, and both operators and wedge product are additive. Applying step 2.2 componentwise proves the graded Leibniz rules for all homogeneous forms; applying step 2.1 componentwise proves all three square and anticommutation identities for arbitrary forms. [F1, step 2.1, step 2.2, given, algebra] ∎
