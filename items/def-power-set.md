---
id: def-power-set
kind: definition
title: "The power set $\\mathcal{P}(x) = \\{\\, z : z \\subseteq x \\,\\}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [lem-the-power-set-of-a-set-is-a-set, def-subset-and-proper-subset]
justified_by: []
aliases: [def-powerset]
landmark: true
short: "power set"
verification:
  precheck: n/a
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 6"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "C. Wilson, A Brief Introduction to ZFC (Chicago REU 2016), §2.3"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Wilson.pdf"
pipeline_run: null
---

## Definition

Let $x$ be a set. By [[lem-the-power-set-of-a-set-is-a-set]] there is exactly one
set whose elements are precisely the subsets of $x$
([[def-subset-and-proper-subset]]); it is the **power set** of $x$, written
$\mathcal{P}(x)$. Thus $z \in \mathcal{P}(x)$ holds if and only if
$z \subseteq x$, and in the class notation of the page,

$$\mathcal{P}(x) = \{\, z : z \subseteq x \,\}.$$

## Remarks

- **Two axioms, not one.** The elements of $\mathcal{P}(x)$ are pinned down by
  [[def-axiom-of-power-set]] together with
  [[def-axiom-schema-of-separation]], because the axiom is assumed here only in
  its implication form. [[rem-which-axiom-each-construction-uses]] keeps that
  cost visible.

- **The power set is never empty.** $\varnothing \subseteq x$ always holds, so
  $\varnothing \in \mathcal{P}(x)$ for every $x$; in particular
  $\mathcal{P}(\varnothing) = \{\varnothing\}$ rather than $\varnothing$. That
  and the other basic identities are
  [[prop-basic-properties-of-the-power-set]].
