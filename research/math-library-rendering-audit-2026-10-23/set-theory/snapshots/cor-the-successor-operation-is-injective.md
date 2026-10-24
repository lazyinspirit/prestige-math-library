---
id: cor-the-successor-operation-is-injective
kind: corollary
title: "If $x \\cup \\{x\\} = y \\cup \\{y\\}$ then $x = y$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-foundation-excludes-membership-cycles, def-union-of-a-set-and-binary-union, def-unordered-pair-and-singleton, lem-unions-and-intersections-of-small-families]
justified_by: []
forward_refs: [thm-omega-is-peano-system]
aliases: []
landmark: false
short: "the successor is injective"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Lemma 13"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of regularity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_regularity"
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
pipeline_run: null
---

## Statement

For all sets $x$ and $y$, if $x \cup \{x\} = y \cup \{y\}$ then $x = y$.

## Facts & Assumptions

**Given:** sets $x$ and $y$ with $x \cup \{x\} = y \cup \{y\}$; the Axiom of Foundation, through the result cited as [L3].

[L1] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L2] $\{x\} := \{x,x\}$, the **singleton** of $x$, is the set whose only element is $x$ ([[def-unordered-pair-and-singleton]]).

[L3] There are no sets $x$ and $y$ with $x \in y$ and $y \in x$ ([[thm-foundation-excludes-membership-cycles]]).

[L4] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Proof

**Proof technique:** direct.

1.1 $x \in \{x\}$, so $x \in x \cup \{x\}$; likewise $y \in y \cup \{y\}$. [L1, L2, L4]

2.1 By hypothesis the two sets are equal, so $x \in y \cup \{y\}$ and $y \in x \cup \{x\}$; hence $x \in y$ or $x = y$, and $y \in x$ or $y = x$. [L1, L2, given, step 1.1]

3.1 If $x \neq y$ then both alternatives $x = y$ and $y = x$ fail, leaving $x \in y$ and $y \in x$, which is impossible; therefore $x = y$. [L3, step 2.1] ∎

## Remarks

- **The general statement, and its special case for $\omega$.** This holds for all sets and is proved from Foundation. The corresponding clause for the natural numbers, that the successor is injective on $\omega$, is part (P2) of [[thm-omega-is-peano-system]], which proves it by a different route that does not use Foundation.
