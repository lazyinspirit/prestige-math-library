---
id: fs-the-intersection-of-the-empty-family-is-the-empty-set
kind: false-statement
title: "FALSE: $\\bigcap \\varnothing = \\varnothing$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-the-empty-family-has-no-intersection, def-intersection-of-a-set-and-binary-intersection, thm-the-empty-set-exists-and-is-unique, cor-there-is-no-set-of-all-sets]
justified_by: []
aliases: []
landmark: false
short: "the empty intersection (false)"
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
    - title: "Intersection (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intersection_(set_theory)"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.3"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

**False statement.** The condition defining $\bigcap x$ determines a set at
$x = \varnothing$, and that set is $\varnothing$:

$$\bigcap \varnothing = \varnothing.$$

The claim is tempting because $\bigcup \varnothing = \varnothing$ is true and the
two operations look symmetric. They are not. The condition defining $\bigcup x$
asks for a witness inside $x$, so it fails for every $z$ when $x$ has no
elements; the condition defining $\bigcap x$ is a universal statement about the
elements of $x$, so it holds for every $z$ when $x$ has no elements.

## Facts & Assumptions

**Given:** the claim above.

[L1] There is exactly one set with no elements, written $\varnothing$ ([[thm-the-empty-set-exists-and-is-unique]]).

[L2] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$ ([[def-intersection-of-a-set-and-binary-intersection]]).

[L3] There is no set $y$ such that, for every set $x$, $x \in y$ holds if and only if $x$ belongs to every element of $\varnothing$ ([[cor-the-empty-family-has-no-intersection]]).

[L4] There is no set $U$ such that $y \in U$ for every set $y$ ([[cor-there-is-no-set-of-all-sets]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the condition defining the intersection determines a set at $\varnothing$, and call it $c$. [assume-contra]

2.1 $\varnothing$ has no elements, so every set $x$ satisfies "$x$ belongs to every element of $\varnothing$" vacuously; hence every set is an element of $c$. [L1, L2, step 1.1]

3.1 No set has every set as an element, so no such $c$ exists; in particular the equation of the claim asserts something of an object that is not there. [L3, L4, step 2.1]

4.1 The claim also fails on its own terms: were $c$ equal to $\varnothing$ it would have no elements, while step 2.1 puts $\varnothing$ itself among its elements. Both readings collapse, so $\bigcap \varnothing$ is left undefined rather than assigned the value $\varnothing$. [L1, step 2.1, step 3.1, discharge-contradiction] ∎
