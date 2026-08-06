---
id: cor-the-empty-family-has-no-intersection
kind: corollary
title: "There is no set $y$ with $x \\in y \\leftrightarrow \\forall s\\,(s \\in \\varnothing \\to x \\in s)$, so $\\bigcap \\varnothing$ is undefined"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-there-is-no-set-of-all-sets, thm-the-empty-set-exists-and-is-unique, def-intersection-of-a-set-and-binary-intersection]
justified_by: []
aliases: []
landmark: false
short: "the empty family has no intersection"
proof_strategy: contradiction
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.3"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
    - title: "Intersection (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intersection_(set_theory)"
pipeline_run: null
---

## Statement

There is no set $y$ such that, for every set $x$,

$$x \in y \leftrightarrow \forall s\,(s \in \varnothing \to x \in s).$$

The defining condition for $\bigcap x$ therefore determines no set when
$x = \varnothing$, which is why $\bigcap \varnothing$ is left undefined.

## Facts & Assumptions

**Given:** nothing beyond the results cited below.

[L1] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L2] There is no set $U$ such that $y \in U$ for every set $y$ ([[cor-there-is-no-set-of-all-sets]]).

[L3] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose there is a set $y$ such that, for every set $x$, $x \in y$ holds if and only if $x$ belongs to every element of $\varnothing$. [assume-contra]

1.2 $\varnothing$ has no elements, so for every set $x$ the condition "$x$ belongs to every element of $\varnothing$" is satisfied vacuously. [L1]

2.1 Combining, every set $x$ satisfies $x \in y$. [step 1.1, step 1.2]

3.1 A set with every set as an element does not exist, so the supposition fails; the condition defining $\bigcap$ therefore determines no set at $\varnothing$, and $\bigcap \varnothing$ is undefined. [L2, L3, step 2.1, discharge-contradiction] ∎
