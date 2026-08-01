---
id: thm-second-derivative-test
kind: theorem
title: "The second-derivative test for strict local extrema"
status: published
origin: session
deps: [def-higher-derivatives-and-smoothness, thm-monotonicity-from-the-derivative, def-continuity-real, def-derivative]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Statement

Suppose $f'(c)=0$ and $f''$ exists and is continuous near $c$. If $f''(c)>0$, then $c$ is a strict local minimum; if $f''(c)<0$, then $c$ is a strict local maximum.

## Facts & Assumptions

**Given:** The hypotheses at $c$.

[L1] Continuity preserves a strict sign on a sufficiently small neighbourhood ([[def-continuity-real]]).

[L2] A positive derivative gives strict increase and a negative derivative gives strict decrease ([[thm-monotonicity-from-the-derivative]]).

## Proof

**Proof technique:** cases.

1.1 If $f''(c)>0$, [L1] gives an interval about $c$ on which $f''>0$. Hence $f'$ is strictly increasing there; since $f'(c)=0$, $f'<0$ to the left and $f'>0$ to the right.  [assume-case positive, L1, L2]

1.2 If $f''(c)<0$, apply the preceding argument to $-f$; this gives a strict local maximum.  [assume-case negative, L1, L2]

2.1 Applying [L2] to $f$, it decreases toward $c$ from the left and increases away from $c$ on the right, so $c$ is a strict local minimum.  [step 1.1, L2]

3.1 The two stated sign cases are exhausted.  [step 2.1, step 1.2, cases-exhaustive] ∎
