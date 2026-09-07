---
id: cex-strong-maximum-principle-needs-connectedness
kind: counterexample
title: "Strong maximum principle needs connectedness"
status: published
origin: pipeline
deps: [thm-strong-maximum-principle-for-harmonic-functions]
provenance:
  statement: ai-altered
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
      locator: "Discussion after Theorem 2.13, p.26"
---

## Statement refuted

For $n\ge2$, the connectedness hypothesis cannot be omitted from the strong harmonic maximum principle. Let $\Omega=B_1(0)\cup B_1(3e_1)$, and set $u=1$ on the first ball and $u=0$ on the second. It attains an interior global maximum without being globally constant.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted.

[F1] A harmonic function on a connected nonempty open set attaining an interior global extremum is constant. ([[thm-strong-maximum-principle-for-harmonic-functions]]).

## Counterexample

**Proof technique:** direct.

1.1 The two open balls are disjoint, since their centers are distance three apart. Every point has a neighborhood on which $u$ is constant; consequently $u$ is smooth with $\Delta u=0$ everywhere in $\Omega$. [given, algebra]

2.1 Every point of the first ball attains the global maximum $1$, whereas every point of the second has value $0$. Thus $u$ is not constant on $\Omega$, which is disconnected. This is precisely the hypothesis absent from the strong theorem. [F1, step 1.1] ∎
