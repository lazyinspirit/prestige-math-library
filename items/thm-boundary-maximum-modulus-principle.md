---
id: thm-boundary-maximum-modulus-principle
kind: theorem
title: "Boundary maximum modulus principle on a bounded domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-maximum-modulus-principle, thm-heine-borel-rn, thm-extreme-value-metric, def-metric-interior-closure-boundary, cor-rn-is-polygonally-connected-and-locally-path-connected, rem-complex-plane-euclidean-dictionary]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "The boundary carries the maximum modulus"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Corollary 3.3.7"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 1.15"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
    - title: "J. A. Tropp, Matrix Analysis, Theorem 7.12"
      url: "https://tropp.caltech.edu/notes/Tro22-Matrix-Analysis-LN.pdf"
pipeline_run: null
---

## Statement

If $\Omega$ is a bounded complex domain and $f$ is continuous on $\overline\Omega$ and holomorphic on $\Omega$, then $|f|$ attains its maximum on $\partial\Omega$.

Equivalently, there is $\zeta\in\partial\Omega$ such that
$$|f(z)|\le|f(\zeta)|\qquad(z\in\overline\Omega).$$

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$ and a continuous function $f:\overline\Omega\to\mathbb C$ whose restriction to $\Omega$ is holomorphic. The complex-plane topology and Euclidean-plane topology agree ([[rem-complex-plane-euclidean-dictionary]]).

[L1] If the modulus of a holomorphic function on a complex domain has an interior local maximum, then the function is constant ([[thm-local-maximum-modulus-principle]]).

[L2] A subset of $\mathbb R^n$ is compact exactly when it is closed and bounded, for $n\ge1$ ([[thm-heine-borel-rn]]).

[L3] A continuous real-valued function on a nonempty compact metric space has a maximum and a minimum ([[thm-extreme-value-metric]]).

[L4] The Euclidean plane $\mathbb R^2$ is connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

## Proof

**Proof technique:** direct.

1.1 The closure $\overline\Omega$ is nonempty, closed, and bounded in the Euclidean plane, hence compact by [L2]. The reverse triangle inequality and continuity of $f$ make $|f|$ continuous there, so [L3] gives a maximizer $z_0\in\overline\Omega$. [L2, L3, given, algebra]

2.1 If $z_0\in\Omega$, then $|f|$ has an interior local maximum, and [L1] makes $f$ constant on $\Omega$. [step 1.1, L1]

3.1 If $z_0\notin\Omega$, then $z_0\in\partial\Omega$. In the remaining branch $f$ is constant on $\Omega$ by step 2.1 and hence on $\overline\Omega$ by continuity. The boundary is nonempty: otherwise the nonempty open set $\Omega$ would also be closed in the connected plane [L4] and therefore equal the unbounded plane. Thus any boundary point has the same modulus as $z_0$. [step 1.1, step 2.1, L4, given]

4.1 In either branch, a point of $\partial\Omega$ carries the global maximum of $|f|$ on $\overline\Omega$. [step 3.1] ∎
