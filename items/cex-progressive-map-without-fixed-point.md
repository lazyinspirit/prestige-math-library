---
id: cex-progressive-map-without-fixed-point
kind: counterexample
title: "A progressive map with no fixed point, on a poset that is not chain-complete"
status: draft
origin: session
deps: [thm-bourbaki-witt, def-chain-complete-poset, def-chain, def-upper-bound, def-nat-order, def-nat-addition, thm-nat-linear-order, lem-nat-successor-neq-self, lem-nat-order-add-compatible, cex-zorn-hypothesis-fails, thm-well-ordering-principle, thm-zorn]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
    - title: "Complete partial order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_partial_order"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the chain-completeness hypothesis of the Bourbaki–Witt fixed
point theorem is decoration, that is every progressive map $f : P \to P$ on a
poset has a fixed point ([[thm-bourbaki-witt]],
[[def-chain-complete-poset]]).

The witness is $(\mathbb{N}, \le)$ ([[def-nat-order]]) with the successor map
$f(n) = \sigma(n) = n + 1$. It is progressive, and it has no fixed point at all.
There is no conflict with Bourbaki–Witt, because $(\mathbb{N}, \le)$ is not
chain-complete: $\mathbb{N}$ is a chain ([[def-chain]]) with no upper bound in
$\mathbb{N}$ ([[cex-zorn-hypothesis-fails]]), hence with no least upper bound
([[def-upper-bound]]).

## Facts & Assumptions

**Given:** $\mathbb{N}$ with the order $m \le n \iff \exists k \in \mathbb{N}\ (m + k = n)$ ([[def-nat-order]]) and addition satisfying $m + 0 = m$ and $m + \sigma(n) = \sigma(m + n)$ ([[def-nat-addition]]), together with the map $f : \mathbb{N} \to \mathbb{N}$ given by $f(n) = \sigma(n)$.

[L1] $\le$ is a linear order on $\mathbb{N}$ ([[thm-nat-linear-order]]).

[L2] $n \ne \sigma(n)$ for every $n \in \mathbb{N}$ ([[lem-nat-successor-neq-self]]).

[L3] A map is progressive when $x \le f(x)$ for every $x$, and a poset is chain-complete when every chain has a least upper bound ([[def-chain-complete-poset]]).

[L4] A least upper bound of $S$ is in particular an upper bound of $S$ ([[def-upper-bound]]).

[L5] $\mathbb{N}$ is a chain of $(\mathbb{N}, \le)$ and it has no upper bound in $\mathbb{N}$ ([[cex-zorn-hypothesis-fails]], [[def-chain]]).

[L6] Bourbaki–Witt: a progressive map on a chain-complete poset has a fixed point ([[thm-bourbaki-witt]]).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is progressive: for every $n$ one has $n + \sigma(0) = \sigma(n + 0) = \sigma(n)$, so $n \le \sigma(n) = f(n)$. [given, L1, L3]

1.2 $f$ has no fixed point: $f(n) = \sigma(n) \ne n$ for every $n \in \mathbb{N}$. [given, L2]

1.3 $(\mathbb{N}, \le)$ is not chain-complete: $\mathbb{N}$ is one of its chains and has no upper bound in $\mathbb{N}$, so it has no least upper bound either, a least upper bound being in particular an upper bound. [L3, L4, L5]

2.1 So a progressive map on a poset can fail to have a fixed point, and the claim is refuted: progressivity alone buys nothing. [step 1.1, step 1.2, L3]

2.2 No conflict with [L6] arises, because by step 1.3 the poset is not chain-complete, so Bourbaki–Witt has nothing to say about $(\mathbb{N}, \le)$. [step 1.3, L6]

3.1 Chain-completeness is therefore exactly what Bourbaki–Witt is buying: drop it and the same theorem's other hypothesis, progressivity, is left standing beside a map with no fixed point. [step 2.1, step 2.2] ∎

## Remarks

- **The failure is sharp, and it is a missing supremum.** Adjoin one element $\infty$ above every natural number. The enlarged poset is chain-complete: a subset containing $\infty$ has supremum $\infty$, a subset of $\mathbb{N}$ with an upper bound in $\mathbb{N}$ has a least one by [[thm-well-ordering-principle]], a subset of $\mathbb{N}$ with none has supremum $\infty$, and the empty chain has supremum $0$. Extending $f$ by $f(\infty) = \infty$ keeps it progressive, and the fixed point Bourbaki-Witt promises is $\infty$, precisely the supremum that was missing. Any progressive map on the enlarged poset must fix $\infty$, since $\infty$ is greatest.

- **Monotonicity is not the issue.** The map $f(n) = \sigma(n)$ is order preserving as well as progressive: $\sigma(m) = m + \sigma(0)$ and $\sigma(n) = n + \sigma(0)$ by the Given, and adding a fixed natural number preserves $\le$ in both directions ([[lem-nat-order-add-compatible]]), so $m \le n$ gives $\sigma(m) \le \sigma(n)$. So this is not a case of a badly behaved map defeating the theorem; a perfectly well behaved map is defeated by the poset. Conversely [[thm-bourbaki-witt]] assumes no monotonicity at all, which is what lets [[thm-zorn]] apply it to a map built from an arbitrary choice function.

- **No iteration argument could have worked.** Starting at $0$ and iterating $f$ walks up $\mathbb{N}$ forever without converging, and the fixed point in Bourbaki-Witt is not reached by iterating: it is the supremum of the smallest set closed under $f$ and under suprema of its chains. When that supremum does not exist there is nothing to reach.

- This is the same defect as in [[cex-zorn-hypothesis-fails]], read one notch higher up the scale of bounds. There the chain $\mathbb{N}$ had no upper bound, which is what [[thm-zorn]] asks of every chain; here the same chain has no *least* upper bound, which is what [[thm-bourbaki-witt]] asks of every chain through chain-completeness. A least upper bound is in particular an upper bound, so the first failure implies the second, and adjoining one top element repairs both at once.
