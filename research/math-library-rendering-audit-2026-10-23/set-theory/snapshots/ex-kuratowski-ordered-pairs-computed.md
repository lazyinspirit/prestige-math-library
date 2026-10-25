---
id: ex-kuratowski-ordered-pairs-computed
kind: example
title: "$(\\varnothing,\\varnothing) = \\{\\{\\varnothing\\}\\}$ and $(\\varnothing,\\{\\varnothing\\}) = \\{\\{\\varnothing\\},\\{\\varnothing,\\{\\varnothing\\}\\}\\}$, with the characterising property checked on them"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-pair, thm-the-characterising-property-of-ordered-pairs, def-unordered-pair-and-singleton, thm-the-empty-set-exists-and-is-unique, def-axiom-of-extensionality]
justified_by: []
aliases: []
landmark: false
short: "ordered pairs computed"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Def. 1 and Lemma 1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.6"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Example

Unfolding the Kuratowski definition at the two smallest sets gives

$$(\varnothing,\varnothing) = \{\{\varnothing\}\}, \qquad (\varnothing,\{\varnothing\}) = \{\{\varnothing\},\{\varnothing,\{\varnothing\}\}\},$$

and these two sets are distinct, as the characterising property requires, since
$\varnothing \neq \{\varnothing\}$.

## Facts & Assumptions

**Given:** the sets $\varnothing$ and $\{\varnothing\}$.

[L1] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

[L2] $\{x,y\}$ is the set whose elements are exactly $x$ and $y$, and $\{x\} := \{x,x\}$ ([[def-unordered-pair-and-singleton]]).

[L3] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L4] There is exactly one set with no elements ([[thm-the-empty-set-exists-and-is-unique]]).

[L5] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

## Verification

**Proof technique:** direct.

1.1 $\varnothing \neq \{\varnothing\}$, because $\{\varnothing\}$ has $\varnothing$ as an element and the empty set has none. [L2, L4]

1.2 $(\varnothing,\varnothing) = \{\{\varnothing\},\{\varnothing,\varnothing\}\}$ by the definition, and $\{\varnothing,\varnothing\} = \{\varnothing\}$, so both members of the outer pair are $\{\varnothing\}$ and the outer pair is $\{\{\varnothing\}\}$. [L1, L2, L5]

1.3 $(\varnothing,\{\varnothing\}) = \{\{\varnothing\},\{\varnothing,\{\varnothing\}\}\}$ directly by the definition, with no collapse, since $\varnothing \neq \{\varnothing\}$ keeps the inner pair a set with two elements. [L1, L2]

2.1 The two pairs are distinct: their first coordinates agree but their second coordinates are $\varnothing$ and $\{\varnothing\}$, which differ, so the characterising property forbids equality. This is visible in the computed sets as well, since $\{\varnothing,\{\varnothing\}\}$ is an element of the second and not of the first. [L3, L5, step 1.1, step 1.2, step 1.3] ∎
