---
id: cor-there-is-no-set-of-all-sets
kind: corollary
title: "There is no set $U$ with $y \\in U$ for every set $y$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-russells-paradox, def-axiom-schema-of-separation, def-subset-and-proper-subset]
justified_by: []
aliases: [cor-no-universal-set]
landmark: false
short: "no set of all sets"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Theorem 3"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Russell's paradox (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Russell%27s_paradox"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Statement

There is no set $U$ such that $y \in U$ for every set $y$.

## Facts & Assumptions

**Given:** nothing beyond the axioms cited below.

[L1] For any parameters $\bar p$ and any set $x$, there is a set $y$ whose elements are exactly the elements $z$ of $x$ for which $\varphi(z,\bar p)$ holds ([[def-axiom-schema-of-separation]]).

[L2] The separated set is written $\{\, z \in x : \varphi(z,\bar p) \,\}$ ([[def-subset-and-proper-subset]]).

[L3] There is no set $R$ such that, for every set $x$, $x \in R$ holds if and only if $x \notin x$ ([[thm-russells-paradox]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $U$ is a set with $y \in U$ for every set $y$. [assume-contra]

2.1 Separation applied to $U$ with the formula $\varphi(x) := x \notin x$ gives the set $R := \{\, x \in U : x \notin x \,\}$, whose elements are exactly the $x \in U$ with $x \notin x$. [L1, L2, step 1.1]

3.1 Every set $x$ satisfies $x \in U$, so for every set $x$ the condition "$x \in U$ and $x \notin x$" reduces to $x \notin x$; hence $x \in R$ holds if and only if $x \notin x$, for every set $x$. [step 1.1, step 2.1]

4.1 Step 3.1 produces exactly the set that cannot exist, so the supposition is untenable and no such $U$ exists. [L3, step 3.1, discharge-contradiction] ∎

## Remarks

- **The class of all sets is not a set.** The formula $x = x$ has a class abbreviation, and this corollary says that abbreviation is not a set; that is why a complement is always taken relative to a set $X$ in [[def-set-difference-and-symmetric-difference]] rather than absolutely.
