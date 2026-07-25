---
id: def-bw-extremal
kind: definition
title: "Extremal element and its cut (Bourbaki–Witt)"
status: draft
origin: session
deps: [lem-admissible-set-exists]
justified_by: []
aliases: []
landmark: false
short: "extremal element"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
pipeline_run: null
---

## Definition

Let $(P, \le)$ be a chain-complete poset, $f : P \to P$ progressive, and let $M$
be the smallest $f$-admissible subset of $P$ ([[lem-admissible-set-exists]]).

An element $x \in M$ is **extremal** if
$$\text{for every } y \in M \text{ with } y < x, \quad f(y) \le x.$$

For $x \in M$, the **cut at $x$** is the subset
$$M_x := \{\, y \in M \ : \ y \le x \ \text{ or } \ f(x) \le y \,\} \subseteq M.$$

## Remarks

- Read extremality as: *$x$ cannot be jumped over from below*. If $y$ sits
  strictly below $x$ inside $M$, then applying $f$ to $y$ does not carry it past
  $x$. Nothing in the definition says such $y$ exist; $\bot$ is extremal
  vacuously.
- The cut $M_x$ is the set of elements of $M$ that are *comparable to $x$ in the
  strong sense* of lying at or below $x$, or at or above $f(x)$. It deliberately
  omits anything strictly between $x$ and $f(x)$. The whole Bourbaki–Witt
  argument consists of showing that for extremal $x$ the cut is everything
  ([[lem-extremal-comparability]]) and that every element is extremal
  ([[lem-all-extremal]]), and those two facts together say precisely that $M$ is
  totally ordered ([[lem-admissible-is-chain]]).
- Both notions are relative to $M$ and to $f$, not to $P$. They are scaffolding
  for one proof and are not used after [[thm-bourbaki-witt]].
