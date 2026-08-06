---
id: lem-two-functions-are-equal-exactly-when-they-agree-at-every-point
kind: lemma
title: "Functions $f$ and $g$ are equal if and only if $\\operatorname{dom} f = \\operatorname{dom} g$ and $f(x) = g(x)$ for every $x$ in that common domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function, def-axiom-of-extensionality, def-relation-domain-range-and-field, def-ordered-pair, thm-the-characterising-property-of-ordered-pairs]
justified_by: []
aliases: [lem-function-extensionality]
landmark: false
short: "equality of functions"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), §2.2"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Function (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Function_(mathematics)"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), Def. 2.10"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Statement

Let $f$ and $g$ be functions. Then $f = g$ if and only if
$\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every
$x \in \operatorname{dom} f$.

## Facts & Assumptions

**Given:** functions $f$ and $g$.

[L1] A **function** is a relation $f$ such that $(a,b) \in f$ and $(a,c) \in f$ imply $b = c$ ([[def-function]]).

[L2] $\operatorname{dom} R := \{\, a : \exists b\ (a,b) \in R \,\}$ ([[def-relation-domain-range-and-field]]).

[L3] $(a,b) = (c,d)$ if and only if $a = c$ and $b = d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[L4] If every $z$ satisfies $z \in x$ if and only if $z \in y$, then $x = y$ ([[def-axiom-of-extensionality]]).

[L5] $(a,b) := \{\{a\},\{a,b\}\}$ ([[def-ordered-pair]]).

## Proof

**Proof technique:** direct.

1.1 From left to right: if $f = g$ then the two sets have the same elements, so the defining conditions for the domain and for the value at a point are the same for both. [L1, L2, L4]

1.2 From right to left: assume $\operatorname{dom} f = \operatorname{dom} g$ and $f(x) = g(x)$ for every $x$ in that set. Let $z \in f$. Then $z$ is an ordered pair $(x,y)$ with $x \in \operatorname{dom} f$ and $y = f(x)$; hence $x \in \operatorname{dom} g$ and $y = g(x)$, so $z \in g$. The same argument with $f$ and $g$ exchanged gives the reverse inclusion, so the two sets have the same elements. [L1, L2, L3, L4, L5]

2.1 Both implications hold, which is the statement. [step 1.1, step 1.2] ∎
