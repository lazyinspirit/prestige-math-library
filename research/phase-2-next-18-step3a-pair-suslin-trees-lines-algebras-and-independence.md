# Step 3a scope review — Suslin trees, lines, algebras, and independence

Run: `phase-2-next-18`  
A page: `suslin-trees-lines-algebras-and-independence`  
B page: `suslin-trees-lines-algebras-and-independence-examples`

## Decision

**Insufficient.** The pair is broad enough for the principal Kurepa and
independence story, but it omits two explicit SET-17 proof obligations. The
owner should enrich this pair before recording `proceed`; no pair merger is
needed.

## Exact omissions and required owner action

The controlling prose in
`research/plan-set-theory-completion-track.md:640-659` requires, before the
equivalence, both:

- the theorem that every countable linear order embeds order-isomorphically
  into `Q`; and
- the converse rational-specialization construction: from a countable
  antichain cover of a tree, construct a strictly order-increasing map into
  `Q`, thereby proving the full equivalence between rational specialization
  and being a countable union of antichains.

Neither result occurs among the 22 A-page items or the five B-page items in
`research/phase-2-next-18-batch-6.pages.json`. The published
`def-aronszajn-suslin-and-special-tree` deliberately proves only that a
strictly increasing rational labeling implies specialness and explicitly says
that the converse is not asserted. Its natural-valued antichain-cover
definition, the ccc theorem for the finite specialization forcing, and the
dense-domain union lemma do not supply a monotone rational labeling.

This is not merely an optional source extension. The earlier current-library
coverage record `research/frontier-34-batch-17.coverage.json:580-591` deferred
Monk Lemma 9.36 and Proposition 9.37 specifically to this page, and
`research/phase-2-set-blocker-resolution-2026-09-08.md:162-170` records the
corrected finite-support binary-sequence construction needed for the converse.
By contrast, the live batch-6 coverage skips 9.36-9.37: its Monk locator jumps
from 9.12-9.18 to Chapter 15, and none of its source dispositions or canonical
rows owns these results.

The owner should add two A-page contracts in prerequisite order: first the
countable-linear-order embedding lemma, then the full special-tree equivalence
with the corrected antichain-cover-to-rational-label proof; update pair source
coverage to include complete Monk 9.36-9.37 with the local correction; obtain
fresh Step-1 readiness records; and only then record `proceed` for the enriched
scope. The complete relevant source argument was checked in J. D. Monk,
*Set theory following Jech*, printed pp. 86-87: 9.36 inserts each newly
enumerated point into a rational gap, while 9.37 disjointifies the antichain
cover, lexicographically orders the resulting finite-support predecessor-color
codes, and applies 9.36. The repository's blocker-resolution note supplies the
missing bound in the printed converse.

## Scope otherwise present

The current A inventory does cover the remaining designed spine: the strong
Suslin-line and Suslin-algebra conventions; normal/splitting reduction;
tree-to-line and line-to-tree constructions with completion and the
nowhere-separable quotient; both Boolean-algebra directions; nonproductive
ccc; `MA(aleph_1)` and `MA+not CH`; forcing and specializing a Suslin tree;
finite-support killing of named trees; both formal consistency branches; and
the conditional independence summary. The B page supplies concrete branch
ordering, nested intervals, antichain sealing, specialization, and the false
SH/CH equivalence. These strengths do not cure the two binding omissions.

The pair also supplies the Kurepa and MA results consumed by the later PFA page
in the same batch. Page metadata agrees with the current plan and drift review,
and the batch records no outgoing cross-batch dependency for this pair. No
current owner scope decision was found.

One secondary coverage inconsistency should be resolved when enriching:
`research/phase-2-next-18-batch-9.coverage.json:435-439` defers “PID implies no
Suslin trees” to this page, but that result is absent from both the SET-17 prose
and the live SET-17 manifest, while PID is introduced on the later SET-27 PFA
page. The owner should either reroute that disposition to SET-27 and add the
appropriate contract there, or mark it explicitly outside the selected scope;
it is not the basis of this insufficient decision.

This is a scope determination only. It does not approve or reject any item
proof.
