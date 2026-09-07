---
id: thm-strong-maximum-principle-for-harmonic-functions
kind: theorem
title: "Strong maximum principle for harmonic functions"
status: published
origin: pipeline
deps: [cor-ball-mean-value-property-for-harmonic-functions, def-connected-space]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorem 2.15, pp.26–27"
---

## Statement

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a domain, and let $u\in C^2(\Omega)$ be harmonic. If $u$ attains a global maximum or a global minimum at a point of $\Omega$, it is constant.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A classical harmonic function equals its ball average on each compactly contained ball. ([[cor-ball-mean-value-property-for-harmonic-functions]]).

[F2] A connected space has no separation into two nonempty disjoint open sets. ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 For an attained global maximum $M$, the set $E=\{u=M\}$ is nonempty and relatively closed. For $x\in E$ take $\overline B_r(x)\subset\Omega$. The ball mean property makes $\int_{B_r(x)}(M-u)=0$. [F1, given]

2.1 The integrand is nonnegative and continuous. A positive value would make its integral positive on a small ball; hence it vanishes everywhere on this ball. Thus $E$ is open, and connectedness gives $E=\Omega$. [F2, step 1.1]

3.1 If the attained extremum is a minimum, apply the preceding argument to the harmonic function $-u$. Constancy of $-u$ is constancy of $u$. [step 2.1, algebra] ∎
