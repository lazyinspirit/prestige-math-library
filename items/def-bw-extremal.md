---
id: def-bw-extremal
kind: definition
title: "Extremal element and its cut (Bourbaki–Witt)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-admissible-set-exists]
justified_by: []
aliases: []
landmark: false
short: "extremal element"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Mathlib, Order.BourbakiWitt"
      url: "https://leanprover-community.github.io/mathlib4_docs/Mathlib/Order/BourbakiWitt.html"
    - title: "Bourbaki-Witt Principle (Menemui Matematik 39(1), 2017)"
      url: "https://persama.org.my/images/Menemui_Matematik/2017/MMv391_8_21.pdf"
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
