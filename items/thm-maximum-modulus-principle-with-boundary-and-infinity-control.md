---
id: thm-maximum-modulus-principle-with-boundary-and-infinity-control
kind: theorem
title: "Maximum modulus principle with boundary and infinity control"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-maximum-modulus-principle, thm-heine-borel-rn, thm-extreme-value-metric, def-metric-interior-closure-boundary, cor-complex-differentiability-implies-continuity, cor-rn-is-polygonally-connected-and-locally-path-connected, rem-complex-plane-euclidean-dictionary]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Boundary and infinity control bound the modulus"
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 3.3.19"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Boundary control together with control at infinity bounds the modulus throughout an unbounded complex domain.

In full, let $\Omega$ be a complex domain, let $f:\Omega\to\mathbb C$ be holomorphic, and let $M\ge0$. Suppose that for every $\varepsilon>0$:

- for every $\zeta\in\partial\Omega$, some neighbourhood $V_\zeta$ satisfies $|f(z)|<M+\varepsilon$ for all $z\in V_\zeta\cap\Omega$;
- if $\Omega$ is unbounded, some $R>0$ satisfies $|f(z)|<M+\varepsilon$ whenever $z\in\Omega$ and $|z|>R$.

Then $|f(z)|\le M$ for every $z\in\Omega$. For bounded $\Omega$, only the finite-boundary clause is required.

## Facts & Assumptions

**Given:** A complex domain $\Omega$, a holomorphic function $f$ on it, a real $M\ge0$, and the two stated control hypotheses. The complex and Euclidean plane topologies agree ([[rem-complex-plane-euclidean-dictionary]]), and closure and boundary have the meanings of [[def-metric-interior-closure-boundary]].

[L1] If the modulus of a holomorphic function on a complex domain has an interior local maximum, then the function is constant ([[thm-local-maximum-modulus-principle]]).

[L2] A closed bounded subset of the Euclidean plane is compact ([[thm-heine-borel-rn]]).

[L3] A continuous real-valued function on a nonempty compact metric space attains a maximum ([[thm-extreme-value-metric]]).

[L4] The Euclidean plane $\mathbb R^2$ is connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

[L5] A complex differentiable function is continuous at every point of complex differentiability ([[cor-complex-differentiability-implies-continuity]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\varepsilon>0$ and form the superlevel set $K_\varepsilon:=\{z\in\Omega:|f(z)|\ge M+\varepsilon\}$. [given]

2.1 By [L5] and the reverse triangle inequality, $|f|$ is continuous, so $K_\varepsilon$ is relatively closed in $\Omega$: at a point where $|f|<M+\varepsilon$, that strict inequality persists on a neighbourhood. Boundary control excludes every point of $\partial\Omega$ from the closure of $K_\varepsilon$, so $K_\varepsilon$ is closed in the plane. It is bounded because $\Omega$ is bounded or, in the unbounded case, because infinity control excludes all points with sufficiently large modulus. Thus [L2] makes $K_\varepsilon$ compact and it lies entirely inside $\Omega$. [step 1.1, L2, L5, given, algebra]

3.1 If $K_\varepsilon$ were nonempty, [L3] would give a maximizer of $|f|$ on it. Outside $K_\varepsilon$ the modulus is smaller than $M+\varepsilon$, so this is also an interior global maximum on $\Omega$; [L1] makes $f$ constant. When $\Omega$ is bounded, its boundary is nonempty because otherwise it would be a nonempty clopen subset of the connected plane [L4] and hence the whole unbounded plane, so the constant contradicts finite-boundary control. When $\Omega$ is unbounded, it contradicts infinity control. Hence $K_\varepsilon$ is empty. [step 2.1, L3, L1, L4]

4.1 The set $K_\varepsilon$ is empty for every $\varepsilon>0$. If some $z$ had $|f(z)|>M$, taking $\varepsilon=(|f(z)|-M)/2$ would put $z$ in $K_\varepsilon$, a contradiction; therefore $|f|\le M$ on $\Omega$. [step 3.1, algebra] ∎
