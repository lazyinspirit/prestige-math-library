---
id: rem-suslin-line-non-ccc-square-unverified
kind: remark
title: "Does a Suslin line have a non-ccc square? (unverified here)"
status: draft
origin: session
proved_here: false
deps: [rem-suslin-hypothesis-independent]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "UNVERIFIED in our sources: the claim that L Suslin implies L × L is not ccc"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Suslin's problem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Suslin%27s_problem"
    - title: "Countable chain condition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_chain_condition"
    - title: "K. Kunen, Set Theory: An Introduction to Independence Proofs, North-Holland 1980 (the reference to be checked)"
      url: "https://en.wikipedia.org/wiki/Kenneth_Kunen"
pipeline_run: null
---

## Statement

A **Suslin line** is a linearly ordered set whose order topology satisfies the
countable chain condition (every family of pairwise disjoint nonempty open
intervals is countable) but which is not separable.

**The claim recorded here.** If $L$ is a Suslin line then the product $L \times L$
fails the countable chain condition, so that the countable chain condition is not
a productive property.

**Not to be confused with the partial-order form, which IS recorded as
established.** [[rem-suslin-hypothesis-independent]] states, with citations, that a Suslin
line yields a ccc *partial order* whose square is not ccc, so that the countable
chain condition is not productive. That is the Suslin tree viewed as a forcing.
What is left open here is the narrower topological claim about the square of the
**line itself**, which is what this library's working notes flagged.

**Status: unverified in this library's sources.** This item does **not** assert
the claim. It records that the claim was encountered, that it was flagged for
checking against a source, and that the check has not been carried out. It is
therefore in a different status from everything else on this page: not open, not
settled-but-out-of-reach, but simply not verified here. Nothing anywhere in this
library depends on it.

## Remarks

**Not proved in this library, and deliberately not asserted.** The distinction
matters. An open problem is one nobody has solved; a deferred result is one this
library cannot reach; an unverified claim is one this library has not checked and
must not repeat as though it had. This item is the third kind, and it is on the
page precisely so that the claim is not quietly absorbed into the library's
working assumptions.

**What is known, and what would settle it.** The reference to check is Kunen,
*Set Theory: An Introduction to Independence Proofs*, chapter II, where the
productivity of the countable chain condition is treated alongside Suslin lines
and Martin's Axiom. Two further points are worth having on record while the check
is outstanding. First, the existence of a Suslin line is itself independent of
ZFC: the consistency of Suslin's Hypothesis, that no Suslin line exists, is due to
Solovay and Tennenbaum (1971) by iterated ccc forcing, while $\diamondsuit$
implies a Suslin line exists, so one exists in the constructible universe. Second,
there is a ZFC-provable substitute for the weaker statement that the countable
chain condition does not imply separability, namely the Cantor cube
$\{0,1\}^{\kappa}$ for $\kappa$ larger than the continuum, which is ccc and not
separable and needs no independence result at all. Any page that wants a
counterexample about the countable chain condition should use the Cantor cube and
leave the Suslin line to this item.

**Why it matters here.** Ccc arguments will appear in the library's topology
material, and productivity of the countable chain condition is exactly the point
at which a plausible-sounding claim silently imports an independence result.
Recording the claim as unverified, rather than as a fact or as an omission, is the
only presentation that stays honest about what has and has not been checked.
