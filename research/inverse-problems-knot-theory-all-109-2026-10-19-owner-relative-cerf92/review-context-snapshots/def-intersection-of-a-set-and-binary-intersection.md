---
id: def-intersection-of-a-set-and-binary-intersection
kind: definition
title: "The intersection $\\bigcap x$ of a nonempty set, the binary intersection $a \\cap b := \\bigcap\\{a,b\\}$, and disjointness"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-intersection-of-a-nonempty-set-is-a-set, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: [def-intersection, def-disjoint]
landmark: false
short: "intersection, disjointness"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Intersection (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intersection_(set_theory)"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.3"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

Let $x$ be a set with $x \neq \varnothing$.
[[lem-the-intersection-of-a-nonempty-set-is-a-set]] shows that the sets belonging
to every member of $x$ form a set, and that it does not depend on the member of
$x$ used to build it; it is written $\bigcap x$. Thus for $x \neq \varnothing$,
$\bigcap x$ is the set whose elements are exactly the sets belonging to every
element of $x$, and $a \cap b := \bigcap\{a,b\}$ is the **binary intersection**
of $a$ and $b$:

$$z \in \bigcap x \leftrightarrow \forall s\,(s \in x \to z \in s) \quad (x \neq \varnothing).$$

The binary case is legitimate because $a \in \{a,b\}$, so the unordered pair of
[[def-unordered-pair-and-singleton]] is never empty. Two sets $a$ and $b$ are
**disjoint** when $a \cap b = \varnothing$
([[thm-the-empty-set-exists-and-is-unique]]).

## Remarks

- **The hypothesis $x \neq \varnothing$ is not a convenience.** For
  $x = \varnothing$ the condition "$z$ belongs to every member of $x$" is
  satisfied by every set whatever, and no set has every set as an element:
  [[cor-the-empty-family-has-no-intersection]] proves this. So
  $\bigcap \varnothing$ is left undefined, and every statement below
  about $\bigcap$ of a family carries the nonemptiness hypothesis in its own
  statement.

- **Membership criterion for the binary case.** That $z \in a \cap b$ holds
  exactly when $z \in a$ and $z \in b$ is proved at
  [[lem-unions-and-intersections-of-small-families]], not assumed here.
