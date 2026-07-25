---
id: def-limit-ordinal
kind: definition
title: "Successor and limit ordinals"
status: published
origin: session
deps: [def-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: [def-successor-ordinal]
landmark: false
short: "$\\alpha=\\beta^{+}$, or nonzero and not a successor"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Limit ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_ordinal"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
pipeline_run: null
---

## Definition

Let $\alpha$ be an ordinal ([[def-ordinal]]).

- $\alpha$ is a **successor ordinal** when $\alpha = \beta^{+} = \beta \cup \{\beta\}$
  for some ordinal $\beta$, which is then an ordinal by [[lem-ordinal-basics]];
- $\alpha$ is a **limit ordinal** when $\alpha \ne 0$ and $\alpha$ is not a
  successor ordinal.

Every ordinal is therefore exactly one of: $0$, a successor ordinal, or a limit
ordinal. The three cases are the three clauses of a definition or a proof by
transfinite recursion or induction over the ordinals.

## Remarks

- **The predecessor of a successor is unique.** If $\alpha = \beta^{+}$ then
  $\beta \in \alpha$ and every $\xi \in \alpha$ satisfies $\xi \le \beta$, so
  $\beta$ is the largest element of $\alpha$ and is determined by $\alpha$. In
  particular $\beta^{+} = \gamma^{+}$ forces $\beta = \gamma$.
- **Union characterisation.** For a nonzero ordinal $\alpha$: $\alpha$ is a limit
  ordinal if and only if $\alpha = \bigcup \alpha$, and $\alpha$ is a successor
  if and only if $\bigcup \alpha \in \alpha$, in which case
  $\alpha = (\bigcup \alpha)^{+}$. For the successor case,
  $\bigcup(\beta \cup \{\beta\}) = (\bigcup \beta) \cup \beta = \beta$, because
  $\bigcup \beta \subseteq \beta$ by transitivity. For the limit case,
  $\bigcup \alpha \subseteq \alpha$ always holds by transitivity, and
  conversely, given $\xi \in \alpha$, the ordinal $\xi^{+}$ satisfies
  $\xi^{+} \in \alpha$: by [[lem-ordinal-trichotomy]] the alternatives are
  $\xi^{+} = \alpha$, excluded because $\alpha$ is not a successor, and
  $\alpha \in \xi^{+}$, which gives $\alpha \in \xi$ or $\alpha = \xi$ and hence
  $\alpha \in \alpha$ using $\xi \in \alpha$ and transitivity, excluded by
  [[lem-ordinal-basics]]; so $\xi \in \xi^{+} \in \alpha$ puts
  $\xi \in \bigcup \alpha$. The hypothesis $\alpha \ne 0$ cannot be dropped,
  since $\bigcup 0 = 0$.
- **Closure under successor.** The previous paragraph says exactly that a nonzero
  ordinal is a limit if and only if it is closed under the successor operation.
  That is the form in which limit ordinals are recognised in practice.
- $0$ is not a limit ordinal here. Some texts include it, so that "limit
  ordinal" means "$\alpha = \bigcup \alpha$" outright. The convention adopted is
  the more widely used one, and it is the one that makes "$0$, successor, limit"
  a genuine three way split.
- The least limit ordinal is $\omega$ ([[lem-omega-least-limit-ordinal]]), so the
  distinction is invisible below $\omega$: every natural number is either $0$ or
  a successor. That is precisely why ordinary induction on $\mathbb{N}$ needs
  only a base case and a successor step, while induction over the ordinals needs
  a limit clause as well.
