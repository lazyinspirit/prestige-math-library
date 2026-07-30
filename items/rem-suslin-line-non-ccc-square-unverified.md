---
id: rem-suslin-line-non-ccc-square-unverified
kind: remark
title: "The square of a Suslin line is not ccc (checked on audit)"
status: published
origin: session
proved_here: false
deps: [rem-suslin-hypothesis-independent]
justified_by: []
forward_refs: [def-separable-space]
aliases: []
landmark: false
short: "Settled: L Suslin implies L x L is not ccc (Kunen 1980, II Lemma 4.3); previously flagged unverified, the check has now been done"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "K. Kunen, Set Theory: An Introduction to Independence Proofs, North-Holland 1980, Ch. II §4, Definition 4.1 and Lemma 4.3 (pp. 66-67)"
      url: "https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/Kunen-1980-Set_Theory.pdf"
    - title: "Suslin's problem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Suslin%27s_problem"
    - title: "Countable chain condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_chain_condition"
pipeline_run: null
---

## Statement

A **Suslin line** is a linearly ordered set whose order topology satisfies the
countable chain condition (every family of pairwise disjoint nonempty open
intervals is countable) but which is not separable.

**The result recorded here.** If $L$ is a Suslin line then the product
$L \times L$ fails the countable chain condition.

**Status: settled, and outside this library's stack.** This is Lemma 4.3 of
Chapter II of Kunen, *Set Theory: An Introduction to Independence Proofs*, stated
there as "if $X$ is a Suslin line, $X^2$ is not c.c.c.", with the definition of a
Suslin line given in Definition 4.1 of the same section exactly as above. It is a
plain ZFC theorem, and it asserts nothing about whether a Suslin line exists: only
what follows if one does. It is not proved here because this library develops
neither order topologies nor recursion of length $\omega_1$, both of which the
argument uses.

**History of this entry, kept deliberately.** Until the audit of 2026-07-26 this
item recorded the statement as **unverified**: the claim had been encountered,
flagged for checking against Kunen, and not checked, and the item accordingly
asserted nothing. The check has now been carried out against exactly that
reference, and the claim is a theorem, in the exact place the note said to look.
The item id still contains the word "unverified" because ids in this library are
immutable; the status above is what holds.

## Remarks

**Not proved in this library.** The result is recorded and cited, not derived,
and no page here may present it as established from anything on these pages.
Nothing in this library depends on it.

**The proof, and why it is out of reach rather than hard.** Kunen's argument is a
recursion of length $\omega_1$: one picks $a_\alpha < b_\alpha < c_\alpha$ in $L$
with both intervals $(a_\alpha, b_\alpha)$ and $(b_\alpha, c_\alpha)$ nonempty
and with $(a_\alpha, c_\alpha)$ avoiding every $b_\xi$ already chosen, which is
possible because $L$ is not separable. The $\omega_1$ many open rectangles
$V_\alpha = (a_\alpha, b_\alpha) \times (b_\alpha, c_\alpha)$ are then nonempty
and pairwise disjoint, so $L^2$ is not ccc. The obstacle here is the setting, not
the difficulty: separability is developed later in [[def-separable-space]], but
this item still records rather than proves Kunen's specialised $\omega_1$-length
recursion.

**Relation to the partial-order form.** [[rem-suslin-hypothesis-independent]]
records, with citations, that a Suslin line yields a ccc *partial order* whose
square is not ccc, which is the Suslin tree viewed as a forcing. The statement
here is the topological one about the square of the **line itself**, and the two
agree: the nonempty open subsets of a ccc space, ordered by inclusion, form a ccc
partial order, so the rectangles above give the partial-order statement too.

**What is still not asserted.** The existence of a Suslin line is independent of
ZFC: the consistency of Suslin's Hypothesis, that no Suslin line exists, is due to
Solovay and Tennenbaum (1971) by iterated ccc forcing, while $\diamondsuit$
implies one exists, so one exists in the constructible universe. Nothing here
asserts that a Suslin line exists, and therefore nothing here asserts outright
that the countable chain condition fails to be productive. That conclusion is
conditional on there being a Suslin line, which is precisely why "the product of
two ccc spaces is ccc" is not decided by ZFC.

**Why it matters here.** Ccc arguments will appear in the library's topology
material, and productivity of the countable chain condition is exactly the point
at which a plausible-sounding claim silently imports an independence result. Any
page wanting an unconditional ZFC counterexample about the countable chain
condition should use the Cantor cube $\{0,1\}^{\kappa}$ for $\kappa$ larger than
the continuum, which is ccc and not separable and needs no independence result at
all, and leave the Suslin line to this item.
