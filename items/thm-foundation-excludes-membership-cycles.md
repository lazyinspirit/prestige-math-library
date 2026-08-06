---
id: thm-foundation-excludes-membership-cycles
kind: theorem
title: "Under Foundation, $x \\notin x$ for every set $x$, there are no sets with $x \\in y \\in x$, and there are no sets with $x \\in y \\in z \\in x$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-axiom-of-foundation, def-unordered-pair-and-singleton, def-union-of-a-set-and-binary-union, lem-unions-and-intersections-of-small-families]
justified_by: []
aliases: []
landmark: false
short: "no short membership cycles"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Theorem 11 and Exercise 24"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of regularity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_regularity"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Statement

Assume the Axiom of Foundation. Then:

- (i) $x \notin x$ for every set $x$;
- (ii) there are no sets $x$ and $y$ with $x \in y$ and $y \in x$;
- (iii) there are no sets $x$, $y$ and $z$ with $x \in y$, $y \in z$ and $z \in x$.

Cycles of length greater than three are not treated here: stating "there is no
membership cycle of any finite length" needs a finite sequence, that is a
function on a natural number, and neither notion is available at this point in
the reading order.

## Facts & Assumptions

**Given:** the Axiom of Foundation.

[L1] Every set with at least one member has a member $s$ that shares no member with it ([[def-axiom-of-foundation]]).

[L2] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L3] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose the statement fails, so that at least one of the following holds: there is a set $x$ with $x \in x$; there are sets $x$ and $y$ with $x \in y$ and $y \in x$; there are sets $x$, $y$ and $z$ with $x \in y$, $y \in z$ and $z \in x$. [assume-contra]

2.1 Suppose $x \in x$ and put $S := \{x\}$. Its only member is $x$, so $S$ has a member and Foundation applies; the member it supplies must be $x$, so $x$ shares no member with $S$. But $x \in x$ and $x \in S$, so $x$ is a member of both. [L1, L2, step 1.1]

2.2 Suppose $x \in y$ and $y \in x$, and put $S := \{x,y\}$. Foundation supplies a member of $S$ sharing no member with $S$, and that member is $x$ or $y$. If it is $x$, then $y \in x$ and $y \in S$ make $y$ a member of both; if it is $y$, then $x \in y$ and $x \in S$ make $x$ a member of both. [L1, L2, step 1.1]

2.3 Suppose $x \in y$, $y \in z$ and $z \in x$, and put $S := \{x,y\} \cup \{z\}$, whose members are exactly $x$, $y$ and $z$. Foundation supplies a member of $S$ sharing no member with $S$. If it is $x$, then $z \in x$ and $z \in S$; if it is $y$, then $x \in y$ and $x \in S$; if it is $z$, then $y \in z$ and $y \in S$. In each case that member shares a member with $S$. [L1, L2, L3, L4, step 1.1]

3.1 Each of the three suppositions contradicts the member Foundation supplies, so none of them holds: $x \notin x$ for every $x$, no sets satisfy $x \in y \in x$, and no sets satisfy $x \in y \in z \in x$. [step 2.1, step 2.2, step 2.3, discharge-contradiction] ∎
