---
id: fs-set-difference-is-associative
kind: false-statement
title: "FALSE: $(a \\setminus b) \\setminus c = a \\setminus (b \\setminus c)$ for all sets $a$, $b$, $c$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-set-difference-and-symmetric-difference, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "difference is not associative (false)"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Complement (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complement_(set_theory)"
    - title: "Algebra of sets (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Algebra_of_sets"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 4"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

**False statement.** Set difference is associative: for all sets $a$, $b$, $c$,

$$(a \setminus b) \setminus c = a \setminus (b \setminus c).$$

## Facts & Assumptions

**Given:** the claim above, and the sets $a = b = c := \{\varnothing\}$.

[L1] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L2] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L3] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L4] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Refutation

**Proof technique:** direct.

1.1 Take $a = b = c := \{\varnothing\}$. [given]

2.1 $a \setminus b$ has no elements, since $z \in a \setminus b$ requires $z \in a$ and $z \notin b$ while $a$ and $b$ are the same set; so $a \setminus b = \varnothing$, and $(a \setminus b) \setminus c$ likewise has no elements and equals $\varnothing$. [L1, L3, L4, step 1.1]

2.2 By the same computation $b \setminus c = \varnothing$, and $z \in a \setminus \varnothing$ requires only $z \in a$, so $a \setminus (b \setminus c) = a = \{\varnothing\}$. [L1, L3, L4, step 1.1]

3.1 The two sides are $\varnothing$ and $\{\varnothing\}$, which differ because the second has an element and the first has none; the claim is therefore false. [L2, L3, step 2.1, step 2.2] ∎

## Remarks

- **Where the two sides part company here.** On the left, removing $b$ from $a$ already empties it, so the outer difference can only be empty. On the right, $b \setminus c$ is empty, so nothing at all is removed from $a$. One nonempty set playing all three roles makes both collapses happen at once.
