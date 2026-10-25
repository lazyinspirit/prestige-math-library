---
id: ex-the-smallest-sets-and-their-power-sets
kind: example
title: "$\\mathcal{P}(\\varnothing) = \\{\\varnothing\\}$, $\\mathcal{P}(\\{\\varnothing\\}) = \\{\\varnothing,\\{\\varnothing\\}\\}$, and $\\mathcal{P}(\\{\\varnothing,\\{\\varnothing\\}\\})$ listed in full"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-power-set, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, prop-basic-properties-of-the-power-set, def-axiom-of-extensionality, def-subset-and-proper-subset, def-union-of-a-set-and-binary-union, lem-unions-and-intersections-of-small-families]
justified_by: []
aliases: []
landmark: false
short: "the smallest power sets"
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
    - title: "Power set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Power_set"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.3"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Example

Write $A := \{\varnothing,\{\varnothing\}\}$, and abbreviate
$\{x,y,z,w\} := \{x,y\} \cup \{z,w\}$. Then

$$\mathcal{P}(\varnothing) = \{\varnothing\}, \qquad \mathcal{P}(\{\varnothing\}) = \{\varnothing,\{\varnothing\}\}, \qquad \mathcal{P}(A) = \{\varnothing,\{\varnothing\},\{\{\varnothing\}\},A\},$$

and the four sets listed in $\mathcal{P}(A)$ are pairwise distinct.

## Facts & Assumptions

**Given:** $A := \{\varnothing,\{\varnothing\}\}$ and the abbreviation $\{x,y,z,w\} := \{x,y\} \cup \{z,w\}$.

[L1] $\mathcal{P}(\varnothing) = \{\varnothing\}$ ([[prop-basic-properties-of-the-power-set]]).

[L2] $z \in \mathcal{P}(x)$ holds if and only if $z \subseteq x$ ([[def-power-set]]).

[L3] $x \subseteq y$ means that every element of $x$ is an element of $y$ ([[def-subset-and-proper-subset]]).

[L4] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L5] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L6] There is exactly one set with no elements ([[thm-the-empty-set-exists-and-is-unique]]).

[L7] $z \in a \cup b$ holds if and only if $z \in a$ or $z \in b$ ([[lem-unions-and-intersections-of-small-families]]).

[L8] $a \cup b := \bigcup\{a,b\}$ ([[def-union-of-a-set-and-binary-union]]).

## Verification

**Proof technique:** direct.

1.1 $\mathcal{P}(\varnothing) = \{\varnothing\}$ is the general identity applied at $\varnothing$. [L1]

1.2 A set $z$ satisfies $z \subseteq \{\varnothing\}$ exactly when every element of $z$ equals $\varnothing$, that is, exactly when $z$ has no element or $\varnothing$ is its only element; those two sets are $\varnothing$ and $\{\varnothing\}$, and both are indeed included in $\{\varnothing\}$. Hence $\mathcal{P}(\{\varnothing\}) = \{\varnothing,\{\varnothing\}\}$. [L2, L3, L4, L5, L6]

1.3 A set $z$ satisfies $z \subseteq A$ exactly when every element of $z$ is $\varnothing$ or $\{\varnothing\}$, so $z$ is determined by whether it has $\varnothing$ as an element and whether it has $\{\varnothing\}$ as an element; the four resulting sets are $\varnothing$, $\{\varnothing\}$, $\{\{\varnothing\}\}$ and $A$, and each is included in $A$. Hence $\mathcal{P}(A) = \{\varnothing,\{\varnothing\},\{\{\varnothing\}\},A\}$. [L2, L3, L4, L5, L6, L7, L8]

1.4 The four are pairwise distinct: $\varnothing$ has no element, $\{\varnothing\}$ has $\varnothing$ as its only element, $\{\{\varnothing\}\}$ has $\{\varnothing\}$ as its only element, and $A$ has both; moreover $\varnothing \neq \{\varnothing\}$, since the second has an element and the first does not. [L4, L5, L6]

2.1 The three power sets are computed and the four members of $\mathcal{P}(A)$ are distinct, which is the example. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
