---
id: ex-recovering-the-coordinates-of-an-ordered-pair
kind: example
title: "$\\bigcup \\bigcap (a,b) = a$ for all $a$ and $b$, and $\\bigcup(a,b) = \\{a,b\\}$, so both coordinates are recovered from the pair as a set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordered-pair, def-union-of-a-set-and-binary-union, def-intersection-of-a-set-and-binary-intersection, lem-unions-and-intersections-of-small-families, def-set-difference-and-symmetric-difference, thm-the-characterising-property-of-ordered-pairs, def-unordered-pair-and-singleton, def-axiom-of-extensionality, thm-the-empty-set-exists-and-is-unique]
justified_by: []
aliases: []
landmark: false
short: "recovering coordinates"
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
    - title: "Ordered pair (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_pair"
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.6"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Example

For all sets $a$ and $b$,

$$\bigcap (a,b) = \{a\}, \qquad \bigcup \bigcap (a,b) = a, \qquad \bigcup (a,b) = \{a,b\},$$

and the second coordinate is recovered as well: if
$\bigcup(a,b) \setminus \bigcap(a,b) = \varnothing$ then $b = a$, and otherwise
$b$ is the only element of that difference. Both coordinates are therefore
determined by the pair as a set, by operations of the language alone.

## Facts & Assumptions

**Given:** sets $a$ and $b$.

[L1] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L2] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L3] $\bigcup \{a\} = a$ ([[lem-unions-and-intersections-of-small-families]]).

[L4] $\bigcap \{a,b\} = a \cap b$, and $z \in a \cap b$ holds if and only if $z \in a$ and $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L5] $\bigcup \{a,b\} = a \cup b$, and $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L6] $z \in a \setminus b$ holds exactly when $z \in a$ and $z \notin b$ ([[def-set-difference-and-symmetric-difference]]).

[L7] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L8] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L9] There is exactly one set with no elements ([[thm-the-empty-set-exists-and-is-unique]]).

[L10] $\bigcup x$ is the set whose elements are exactly the elements of the elements of $x$, and $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

[L11] For $x \neq \varnothing$, $\bigcap x$ is the set whose elements are exactly the sets belonging to every element of $x$, and $a \cap b := \bigcap\{a,b\}$ ([[def-intersection-of-a-set-and-binary-intersection]]).

## Verification

**Proof technique:** direct.

1.1 $(a,b)$ is the unordered pair whose members are $\{a\}$ and $\{a,b\}$, so $\bigcap(a,b) = \{a\} \cap \{a,b\}$; and $z$ lies in that intersection exactly when $z = a$, and $z = a$ or $z = b$, which is exactly $z = a$. Hence $\bigcap(a,b) = \{a\}$. [L1, L2, L4, L7, L11]

1.2 Likewise $\bigcup(a,b) = \{a\} \cup \{a,b\}$, and $z$ lies in that union exactly when $z = a$, or $z = a$ or $z = b$, which is exactly $z = a$ or $z = b$. Hence $\bigcup(a,b) = \{a,b\}$. [L1, L2, L5, L7, L10]

2.1 Applying $\bigcup$ to step 1.1 gives $\bigcup\bigcap(a,b) = \bigcup\{a\} = a$, so the first coordinate is recovered. [L3, step 1.1]

2.2 By steps 1.1 and 1.2, $\bigcup(a,b) \setminus \bigcap(a,b) = \{a,b\} \setminus \{a\}$, whose elements are the $z$ with $z = a$ or $z = b$, and $z \neq a$; that is, it is $\varnothing$ when $b = a$ and has $b$ as its only element when $b \neq a$. [L2, L6, L7, L9, step 1.1, step 1.2]

3.1 Both coordinates are therefore determined by the set $(a,b)$, which is the content of the characterising property made explicit. [L8, step 2.1, step 2.2] ∎
