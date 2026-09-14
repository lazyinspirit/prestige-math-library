---
id: lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws
kind: lemma
title: "Mean and covariance determine Gaussian finite-dimensional laws"
status: draft
origin: pipeline
deps: [def-gaussian-process, def-axiom-of-choice, lem-characteristic-function-of-a-multivariate-normal-law]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Section 6.1"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
---

## Statement

Assume the Axiom of Choice. Two real Gaussian processes on the same index set
that have the same mean function and covariance function have identical
finite-dimensional distributions.

## Facts & Assumptions

**Given:** AC and Gaussian processes $X,Y$ satisfying the two equalities in the Statement.

[F1] Every finite evaluation vector of a Gaussian process has a possibly
singular multivariate normal law. [[def-gaussian-process]]

[F2] Assume AC. The characteristic function of $N_n(m,\Sigma)$ is
$u\mapsto\exp(iu\cdot m-u^T\Sigma u/2)$, and it uniquely determines the law,
including when $\Sigma$ is singular.
[[lem-characteristic-function-of-a-multivariate-normal-law]]

## Proof

**Proof technique:** direct.

1.1 Fix $n\ge1$ and times $t_1,\ldots,t_n\in I$. By [F1], the vectors $$X^{(n)}=(X_{t_1},\ldots,X_{t_n}),\qquad Y^{(n)}=(Y_{t_1},\ldots,Y_{t_n})$$ are multivariate normal. Their mean vectors agree by the first given identity. Their covariance matrices agree entry by entry by the second identity, even if some times repeat and the common matrix is singular. [given, F1]

2.1 Write the common mean vector and covariance matrix as $m$ and $\Sigma$. By [F2], both vector characteristic functions equal $$u\longmapsto \exp(iu\cdot m-u^T\Sigma u/2).$$ The uniqueness clause of [F2] therefore gives $X^{(n)}\overset{d}{=}Y^{(n)}$. Since the finite time list was arbitrary, all finite-dimensional distributions agree. The empty-coordinate law, if included as a convention, is the unique probability law on the singleton empty tuple. AC is used exactly through [F1]–[F2], not to choose a version of either process. [step 1.1, F1, F2] ∎

## Source notes

Sousi, Section 6.1, records that the mean and covariance functions determine a
Gaussian process in law. The proof above supplies the complete singular-law
argument via the library's multivariate characteristic-function theorem.
