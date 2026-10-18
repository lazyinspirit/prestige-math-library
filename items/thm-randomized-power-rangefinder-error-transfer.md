---
id: thm-randomized-power-rangefinder-error-transfer
kind: theorem
title: Power-rangefinder error transfer under finite expected powered error
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [alg-randomized-power-subspace-iteration-with-qr, lem-orthogonal-projector-power-error-inequality, thm-jensen-inequality-for-expectation]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Theorem 9.2"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Lemma 11.8"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

Let $F\in\{\mathbb R,\mathbb C\}$, let $(\Xi,\mathcal A,\mathbb P)$ be a
probability space, let $A\in F^{m\times n}$ be fixed, let $\ell\ge1$ be an
integer, and let $q\ge0$ be an integer. Let $\Omega:\Xi\to F^{n\times\ell}$
be measurable and let $P:\Xi\to F^{m\times m}$ be a measurable orthogonal
projector-valued map whose value $P(\xi)$ projects onto
$\operatorname{Ran}((AA^*)^qA\Omega(\xi))$. For Gaussian sketches this is
the output range of [[alg-randomized-power-subspace-iteration-with-qr]].
Assume
$$\mathbb E\|(I-P)(AA^*)^qA\|_2<\infty,$$
where expectation is with respect to $\mathbb P$. Then
$$\mathbb E\|(I-P)A\|_2\le \left(\mathbb E\|(I-P)(AA^*)^qA\|_2\right)^{1/(2q+1)}.$$
This is a transfer inequality; it assumes the powered error expectation has
already been bounded.

## Facts & Assumptions

**Given:** A fixed finite matrix, a random test matrix, an integer $q\ge0$, and a finite expected powered error.

[F1] The reorthogonalized procedure applies the finite scan to $A\Omega$, then to $A^*Q_{j-1}$ and $A\widetilde Q_j$ at each iteration ([[alg-randomized-power-subspace-iteration-with-qr]]).

[F2] For each orthogonal projector $P$, $\|(I-P)A\|_2\le\|(I-P)(AA^*)^qA\|_2^{1/(2q+1)}$ ([[lem-orthogonal-projector-power-error-inequality]]).

[F3] Jensen's inequality applies to an integrable real random variable when its convex image is integrable or nonnegative ([[thm-jensen-inequality-for-expectation]]).

## Proof

1.1 For a Gaussian draw, write $S_0=\operatorname{Ran}(A\Omega)$. At iteration $j$ of [F1], the intermediate range is $A^*S_{j-1}$ and the next range is $AA^*S_{j-1}$, since replacing a matrix by a basis preserves its range. Induction gives $S_q=\operatorname{Ran}((AA^*)^qA\Omega)$, including empty ranges and $q=0$. Thus the range specified directly in the statement agrees with the algorithm's output range for Gaussian draws. For a general measurable sketch, the statement specifies $P$ directly and requires no Gaussian sampling step. [given, F1, algebra]

2.1 Set $Z=\|(I-P)(AA^*)^qA\|_2$. By [F2], $\|(I-P)A\|_2\le Z^{1/(2q+1)}$ pointwise. Since $Z$ is integrable and $Z^{1/(2q+1)}\le1+Z$, Jensen [F3] applied to the convex function $-t^{1/(2q+1)}$ gives $\mathbb EZ^{1/(2q+1)}\le(\mathbb EZ)^{1/(2q+1)}$. Taking expectations of the pointwise inequality proves the result. [step 1.1, F2, F3, algebra] ∎
