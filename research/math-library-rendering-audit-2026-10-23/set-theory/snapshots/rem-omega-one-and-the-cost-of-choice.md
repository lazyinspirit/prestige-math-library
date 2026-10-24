---
id: rem-omega-one-and-the-cost-of-choice
kind: remark
title: "Choice ledger for this page: $\\omega_1$ exists in ZF, and the boundedness theorem does not"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-first-uncountable-ordinal, thm-hartogs, thm-omega-one-is-the-least-uncountable-ordinal, thm-countable-subsets-of-omega-one-are-bounded, def-countable-choice, thm-countable-union-of-countable, rem-choice-ledger]
justified_by: []
aliases: []
landmark: false
short: "what this page costs in choice, item by item"
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
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "Hartogs number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hartogs_number"
    - title: "A. Karagila, Forcing course notes (2023)"
      url: "https://karagila.org/files/Forcing-2023.pdf"
pipeline_run: null
---

## Remark

This item is bookkeeping, in the manner of [[rem-choice-ledger]]: it records
what each result on this page costs, so that a later page quoting one of them
knows what it is inheriting. Nothing is proved here that is not proved
elsewhere.

**Free: everything about ordinal arithmetic.** Ordinal $+$, $\cdot$ and
$\alpha^{\beta}$ are defined by transfinite recursion along the ordinals, and
recursion spends Replacement and no choice; the values are unique at every
stage, so nothing is ever selected. Monotonicity, associativity, left
distributivity, subtraction, division with remainder, the exponent laws, the
Cantor normal form and the agreement with the Peano operations on $\omega$ are
all theorems of ZF.

**Free: the existence of $\omega_1$.** This is worth stating loudly, because it
is the point at which readers most often expect a choice principle to appear.
$\omega_1$ is defined as the Hartogs number $\aleph(\omega)$
([[def-first-uncountable-ordinal]]), and **[[thm-hartogs]] is a theorem of ZF**.
Its construction collects the order types of the well-ordered *subsets* of
$\mathbb{N}$; the well-ordering arrives as part of each datum rather than being
chosen for each subset, and the passage from that class to a set of ordinals is
Replacement. Consequently
[[thm-omega-one-is-the-least-uncountable-ordinal]] — that $\omega_1$ is
uncountable, that every ordinal below it is at most countable, that it is a
cardinal and that it is a limit ordinal — is choice free in full.

**Not free: boundedness of at most countable subsets of $\omega_1$.**
[[thm-countable-subsets-of-omega-one-are-bounded]] takes the Axiom of Countable
Choice ([[def-countable-choice]]) as a standing hypothesis, and spends it at
exactly one step: the appeal to [[thm-countable-union-of-countable]], which
selects one enumeration of each of countably many at most countable sets at
once. Every consequence of the boundedness theorem inherits that cost, including
the statement that no at most countable subset of $\omega_1$ is cofinal in it.
The exact $\mathrm{AC}_\omega$ hypothesis is therefore part of those results
and may not be silently replaced by “choice-free” or by full AC. The local
ledger [[rem-choice-ledger]] makes no unproved reverse-implication claim.

**A standing warning for later pages.** Any argument that builds a counterexample
on the ordinal space below $\omega_1$ and uses "a countable family of ordinals
below $\omega_1$ has a bound below $\omega_1$" is spending
$\mathrm{AC}_\omega$, whether or not it says so. Pages that use the boundedness
theorem must carry the hypothesis forward into their own statements.
