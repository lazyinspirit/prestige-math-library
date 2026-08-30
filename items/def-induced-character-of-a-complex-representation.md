---
id: def-induced-character-of-a-complex-representation
kind: definition
title: "The induced character $\\operatorname{Ind}_H^G\\chi$ of a complex character"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-character-of-a-complex-representation, def-induced-r-linear-g-module-by-h-covariant-functions]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 4.3.5"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 4.32"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
verification:
  audited: 2026-08-30
  precheck: n/a
---

## Definition

Let $G$ be a finite group, let $H\le G$, and let $W$ be a finite-dimensional
complex representation of $H$ with character $\chi_W$
([[def-character-of-a-complex-representation]]).

The **induced character** of $\chi_W$ is the character of the induced
representation:

$$ \operatorname{Ind}_H^G\chi_W := \chi_{\operatorname{Ind}_H^G W}. $$

When the representation affording $\chi_W$ is denoted simply by $W$, one also
writes $\chi_{\operatorname{Ind}_H^G W}$.

## Remarks

- The notation depends only on the character, not on a chosen model of the
  representation: equivalent $H$-representations induce equivalent
  $G$-representations by postcomposing every induced function with the
  intertwiner.

- The explicit value formula for $\operatorname{Ind}_H^G\chi$ is proved in
  [[thm-frobenius-formula-for-induced-characters]].
