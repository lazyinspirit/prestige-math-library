---
id: def-first-uncountable-ordinal
kind: definition
title: "The first uncountable ordinal $\\omega_1 := \\aleph(\\omega)$"
status: published
origin: session
deps: [thm-hartogs, def-ordinal, def-countable, def-natural-numbers, lem-omega-least-limit-ordinal, lem-ordinal-trichotomy]
justified_by: [thm-omega-one-is-the-least-uncountable-ordinal]
aliases: [def-omega-one, def-omega-1]
landmark: true
short: "$\\omega_1$, the Hartogs number of $\\mathbb{N}$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "Hartogs number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hartogs_number"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Definition

The **first uncountable ordinal** is

$$\omega_1 \;:=\; \aleph(\omega),$$

the Hartogs number of $\mathbb{N} = \omega$ ([[thm-hartogs]],
[[def-natural-numbers]]): the least ordinal ([[def-ordinal]]) that admits no
injective function into $\mathbb{N}$. Equivalently, by that theorem,
$\omega_1$ is the set of order types of the well-ordered subsets of
$\mathbb{N}$.

**Existence is a theorem of ZF.** [[thm-hartogs]] is choice free, so $\omega_1$
is available without any choice principle, and its defining property needs
none either.

**"Uncountable" is [[def-countable]]'s word**, meaning "not at most countable",
and it is not redefined here. That $\omega_1$ deserves the name — that it is
uncountable, that every ordinal below it is at most countable, that it is a
cardinal and a limit ordinal — is proved in
[[thm-omega-one-is-the-least-uncountable-ordinal]], which is what discharges the
naming obligation of this definition.

## Remarks

- **Why the Hartogs number and not "the least uncountable ordinal" outright.**
  Taking the least element of the collection of uncountable ordinals presumes
  that collection is nonempty, which is precisely the content of
  [[thm-hartogs]]; and that collection is a proper class, so the least element
  has to be produced by the argument of that theorem rather than by
  [[lem-ordinal-trichotomy]] applied to a set. Defining $\omega_1$ as
  $\aleph(\omega)$ makes the existence explicit and keeps the definition inside
  ZF.

- **$\omega < \omega_1$.** $\omega$ injects into $\mathbb{N}$ by the identity,
  so $\omega \ne \omega_1$; and $\omega_1 \le \omega$ would make $\omega_1$
  inject into $\mathbb{N}$, which [[thm-hartogs]] forbids. So
  $\omega < \omega_1$ by [[lem-ordinal-trichotomy]], and in particular
  $\omega_1$ is strictly above the least limit ordinal
  ([[lem-omega-least-limit-ordinal]]).

- **Notation.** The cardinal notation $\aleph_1$ is **not** used on this page or
  anywhere in this library's ordinal development. It presupposes the aleph
  hierarchy $\alpha \mapsto \aleph_\alpha$, which is not constructed here; every
  statement about the first uncountable ordinal is written $\omega_1$. The
  symbol does occur in remarks elsewhere that record results of cardinal
  arithmetic this library does not develop. The two names denote the same
  ordinal once the hierarchy exists, but nothing on this page needs that.

- **Without a choice principle $\omega_1$ can behave strangely, and it still
  exists.** Its existence never fails, but statements about its cofinal
  structure do need countable choice; the accounting is in
  [[rem-omega-one-and-the-cost-of-choice]].
