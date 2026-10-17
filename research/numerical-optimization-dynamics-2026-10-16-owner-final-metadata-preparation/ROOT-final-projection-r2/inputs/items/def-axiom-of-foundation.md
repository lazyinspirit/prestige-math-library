---
id: def-axiom-of-foundation
kind: definition
title: "The Axiom of Foundation: $\\forall S\\,(\\exists t\\,(t \\in S) \\to \\exists s\\,(s \\in S \\wedge \\neg\\exists u\\,(u \\in s \\wedge u \\in S)))$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-language-of-set-theory]
justified_by: []
aliases: [def-axiom-of-regularity]
landmark: false
short: "Foundation"
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
    - title: "B. Kaya, MATH 320 Set Theory (METU), Axiom 8"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Axiom of regularity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_regularity"
    - title: "Zermelo-Fraenkel set theory (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zermelo%E2%80%93Fraenkel_set_theory"
pipeline_run: null
---

## Definition

The **Axiom of Foundation**, also called the Axiom of Regularity, is the sentence

$$\forall S\,\Bigl(\exists t\,(t \in S) \to \exists s\,\bigl(s \in S \wedge \neg\exists u\,(u \in s \wedge u \in S)\bigr)\Bigr)$$

of the language of set theory ([[def-language-of-set-theory]]): every set with at
least one member has a member $s$ that shares no member with it.

It is written here without abbreviations, for the same reason as
[[def-axiom-of-infinity]]: the usual statement uses notation introduced later on
this page. In that notation it reads: every nonempty set $S$ has a member $s$
with $s \cap S = \varnothing$. Such an $s$ is called an
$\in$-**minimal** member of $S$.

## Remarks

- **What it rules out.** A set $S$ that had no $\in$-minimal member would let one
  descend forever through membership. The axiom forbids that, and
  [[thm-foundation-excludes-membership-cycles]] draws the consequences that this
  page needs: no set is a member of itself, and there is no membership cycle of
  length two or three.

- **It is used nowhere else on this page.** Every other construction below is
  carried out without it; the ledger at
  [[rem-which-axiom-each-construction-uses]] records exactly which results depend
  on it.
