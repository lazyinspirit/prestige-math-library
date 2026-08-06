---
id: fs-every-property-defines-a-set
kind: false-statement
title: "FALSE: for every formula $\\varphi$ of the language of set theory there is a set $\\{\\, x : \\varphi(x) \\,\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-russells-paradox, cor-there-is-no-set-of-all-sets, def-axiom-schema-of-separation, def-language-of-set-theory]
justified_by: []
aliases: [fs-unrestricted-comprehension]
landmark: false
short: "unrestricted comprehension (false)"
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
    - title: "Russell's paradox (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Russell%27s_paradox"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
    - title: "B. Kaya, MATH 320 Set Theory (METU), §1.1"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

**False statement.** For every formula $\varphi(x)$ of the language of set theory
([[def-language-of-set-theory]]) there is a set whose elements are exactly the
sets satisfying $\varphi$; that is, every instance of

$$\exists y\,\forall x\,\bigl(x \in y \leftrightarrow \varphi(x)\bigr)$$

holds. This is the unrestricted comprehension schema, and it is the principle
[[def-axiom-schema-of-separation]] deliberately weakens.

## Facts & Assumptions

**Given:** the claim above, asserted for every formula of the language ([[def-language-of-set-theory]]).

[L1] There is no set $R$ such that, for every set $x$, $x \in R$ holds if and only if $x \notin x$ ([[thm-russells-paradox]]).

[L2] There is no set $U$ such that $y \in U$ for every set $y$ ([[cor-there-is-no-set-of-all-sets]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the schema holds for every formula of the language. [assume-contra]

2.1 Instantiate it at the formula $\varphi(x) := x \notin x$: there is a set $R$ such that, for every set $x$, $x \in R$ holds if and only if $x \notin x$. [step 1.1]

3.1 No such set exists, so the supposition fails and the schema is false. Instantiating instead at $\varphi(x) := x = x$ produces a set with every set as an element, which is impossible for the same underlying reason. [L1, L2, step 2.1, discharge-contradiction] ∎

## Remarks

- **What survives.** Restricting the schema so that the separated elements are drawn from a set already in hand gives [[def-axiom-schema-of-separation]], which is consistent as far as anything on this page can tell and is what every construction here uses. [[rem-why-separation-replaces-unrestricted-comprehension]] runs Russell's argument against the restricted schema and obtains a theorem instead of a contradiction.
