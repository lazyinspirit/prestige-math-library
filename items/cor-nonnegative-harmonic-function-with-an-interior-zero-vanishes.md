---
id: cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes
kind: corollary
title: "Nonnegative harmonic function with an interior zero vanishes"
status: draft
origin: pipeline
deps: [thm-strong-maximum-principle-for-harmonic-functions]
provenance:
  statement: literature-derived
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
      locator: "Theorem 2.15, pp.26–27"
---

## Statement

Let $n\ge2$ and let $u\ge0$ be harmonic on a domain $\Omega\subseteq\mathbb R^n$. Then either $u\equiv0$ or $u(x)>0$ for every $x\in\Omega$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A harmonic function on a domain attaining an interior global maximum or minimum is constant. ([[thm-strong-maximum-principle-for-harmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 If $u(a)=0$ at some $a\in\Omega$, it attains its global minimum there. The strong harmonic maximum/minimum principle makes it constant, hence identically zero. [F1, given]

2.1 If there is no such point, nonnegativity forces $u(x)>0$ at every point. These alternatives exhaust the possibilities. [step 1.1, given] ∎
