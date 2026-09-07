---
id: thm-strong-maximum-principle-for-classical-subharmonic-functions
kind: theorem
title: "Strong maximum principle for classical subharmonic functions"
status: draft
origin: pipeline
deps: [lem-classical-subharmonic-mean-value-inequalities, def-connected-space]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hunter, Notes on Partial Differential Equations"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorem 2.13, p.26"
---

## Statement

Assume countable choice for the mean-inequality input. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a domain, and let $u\in C^2(\Omega)$ satisfy $\Delta u\ge0$. If there is $a\in\Omega$ with $u(x)\le u(a)$ for every $x\in\Omega$, then $u$ is constant.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Under countable choice, classical subharmonic functions lie below their ball averages on compactly contained balls. ([[lem-classical-subharmonic-mean-value-inequalities]]).

[F2] A connected space admits no partition into two nonempty disjoint open subsets. ([[def-connected-space]]).

## Proof

**Proof technique:** direct.

1.1 Put $M=u(a)$ and $E=\{x\in\Omega:u(x)=M\}$. This is nonempty and relatively closed by continuity. [given]

2.1 For $x\in E$ choose $r>0$ with $\overline B_r(x)\subset\Omega$. The ball mean inequality gives $\int_{B_r(x)}(M-u)\le0$, while the integrand is nonnegative. If it were positive at a point, continuity would give a positive lower bound on a smaller ball of positive volume, contradicting that integral inequality. Thus $u=M$ throughout $B_r(x)$, and $E$ is open. [F1, step 1.1]

3.1 If $\Omega\setminus E$ were nonempty, it and $E$ would separate $\Omega$ into disjoint nonempty relatively open sets. Connectedness therefore gives $E=\Omega$. [F2, step 2.1] ∎

## Remarks

The alternative Hopf argument is recorded with its proof after the boundary-point lemma. The present proof uses only the mean inequality and connectedness.
