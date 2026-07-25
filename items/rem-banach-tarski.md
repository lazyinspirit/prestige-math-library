---
id: rem-banach-tarski
kind: remark
title: "The Banach-Tarski paradox"
status: published
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: [def-axiom-of-choice]
aliases: []
landmark: false
short: "A ball in R^3 splits into finitely many pieces that reassemble into two copies of itself"
verification:
  precheck: n/a
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
sources:
  scraped: []
  references:
    - title: "Banach-Tarski paradox (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox"
    - title: "J. Pawlikowski, The Hahn-Banach theorem implies the Banach-Tarski paradox, Fund. Math. 138 (1991) 21-22"
      url: "https://eudml.org/doc/211871"
    - title: "M. Foreman and F. Wehrung, The Hahn-Banach theorem implies the existence of a non-Lebesgue measurable set, Fund. Math. 138 (1991) 13-19"
      url: "https://eudml.org/doc/211870"
pipeline_run: null
---

## Statement

Let $B \subseteq \mathbb{R}^3$ be a closed ball. There are a partition of $B$
into finitely many pieces $B = A_1 \cup \cdots \cup A_n$ and rigid motions
$g_1, \dots, g_n$ of $\mathbb{R}^3$ such that
$g_1(A_1), \dots, g_n(A_n)$ partition two disjoint balls each congruent to $B$.
Five pieces suffice, and four is impossible. More generally, any two bounded
subsets of $\mathbb{R}^3$ with nonempty interior are equidecomposable.

The pieces are necessarily non-measurable, so the statement contradicts no
theorem about volume; what it refutes is the existence of a finitely additive,
isometry-invariant extension of Lebesgue measure to all subsets of
$\mathbb{R}^3$. In $\mathbb{R}^1$ and $\mathbb{R}^2$ such extensions do exist,
by a Banach construction using the amenability of the isometry groups there, so
the paradox is a fact about $n \ge 3$, where the rotation group contains a free
subgroup of rank two.

**It needs choice beyond ZF + DC.** If ZFC together with "there exists an
inaccessible cardinal" is consistent, then ZF + DC does not prove the paradox: in
Solovay's model of ZF + DC every set of reals is Lebesgue measurable, and the
same holds in $\mathbb{R}^3$, while the pieces above are necessarily
non-measurable, so no such decomposition exists there. That model is built by
collapsing an inaccessible, so the conclusion drawn from it is conditional on
that large-cardinal hypothesis and not merely on the consistency of ZF. The
paradox does not need the full Axiom of Choice either: it follows from the
Hahn-Banach theorem, hence from the Boolean prime ideal theorem, which the Axiom
of Choice implies outright and which, if ZF is consistent, does not imply the
Axiom of Choice in return.

## Remarks

**Not proved in this library.** It is recorded with citations and used in no
proof here.

**What would prove it.** The free group of rank two inside $SO(3)$, its paradoxical
decomposition, transfer of that decomposition to the sphere by choosing one point
from each orbit ([[def-axiom-of-choice]]), the handling of the countably many
fixed points, and the Banach-Schroder-Bernstein theorem for equidecomposability.
The group theory is elementary and reachable; the statement is deferred because
it is about measure, and because its interest is precisely that the pieces are
not measurable ([[rem-lebesgue-measure-and-integral]],
[[rem-vitali-non-measurable-set]]).

**Which page it serves.** The order, Zorn and the Axiom of Choice examples page,
as the most dramatic consequence of choice, and any future measure page as the
reason finite additivity plus isometry invariance cannot be had on all sets in
dimension three. It is also the standard corrective to the belief that choice is
harmless: it is a theorem of ZFC and cannot be blamed on a defect of the measure.

**A frequent misstatement.** The pieces are not "infinitely thin" or "of
measure zero": they have no measure at all, and there are finitely many of them.
The word paradox records a conflict with intuition, not an inconsistency.
