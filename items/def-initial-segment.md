---
id: def-initial-segment
kind: definition
title: "Initial segment of a well-order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-well-order]
justified_by: []
aliases: [def-initial-segment-of-well-order]
landmark: false
short: "downward closed subset; $W_{<a}=\\{x:x<a\\}$"
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
    - title: "Initial segment (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Initial_segment"
    - title: "Well-order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-order"
    - title: "A. Marks, Set Theory"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
    - title: "Formalization of the Axiom of Choice and its Equivalent Theorems"
      url: "https://arxiv.org/abs/1906.03930"
pipeline_run: null
---

## Definition

Let $(W, <)$ be a well-order ([[def-well-order]]).

A subset $I \subseteq W$ is an **initial segment** of $W$ when it is downward
closed: if $x \in I$ and $y < x$ then $y \in I$. It is a **proper** initial
segment when $I \ne W$.

For $a \in W$ write

$$W_{<a} := \{x \in W : x < a\}, \qquad W_{\le a} := \{x \in W : x \le a\} = W_{<a} \cup \{a\},$$

and call $W_{<a}$ the **initial segment determined by $a$**.

Every initial segment $I$, carrying the order inherited from $W$, is itself a
well-order: the inherited order is total, and a nonempty subset of $I$ is a
nonempty subset of $W$, so it has a least element, which lies in $I$.

## Remarks

- $\emptyset$ and $W$ are initial segments of $W$; each $W_{<a}$ is a proper
  initial segment, since $a \notin W_{<a}$ by irreflexivity; and each
  $W_{\le a}$ is an initial segment.
- **Every proper initial segment is $W_{<a}$ for exactly one $a$.** Let
  $I \subsetneq W$ be an initial segment and put $a = \min(W \setminus I)$,
  which exists because $W \setminus I$ is a nonempty subset of the well-order
  $W$ ([[def-well-order]]). If $x < a$ then $x \notin W \setminus I$ by
  minimality of $a$, so $x \in I$; hence $W_{<a} \subseteq I$. Conversely let
  $x \in I$. Then $x \ne a$, because $a \notin I$, and $a < x$ is impossible,
  because downward closure would then put $a \in I$; so $x < a$ by trichotomy,
  and $I \subseteq W_{<a}$. Therefore $I = W_{<a}$. For uniqueness, suppose
  $W_{<a} = W_{<b}$ with $a \ne b$, say $a < b$; then $a \in W_{<b} = W_{<a}$,
  that is $a < a$, which is impossible.
- **Nesting.** If $b < a$ then $(W_{<a})_{<b} = W_{<b}$, so an initial segment
  of an initial segment of $W$ is an initial segment of $W$. This is used
  whenever two well-orders are compared.
- The initial segments of $W$ are therefore exactly the sets $W_{<a}$ for
  $a \in W$, together with $W$ itself, and inclusion orders them in the same
  shape as $W$ with one extra element added on top.
- The corresponding notion for a general poset would be a downward closed set,
  or "lower set". Nothing on this page needs it outside the well-ordered case,
  so the definition is stated only there, where the second clause above makes
  the family of initial segments completely explicit.
