# frontier-14 — orchestrator decisions

Step-3 decisions belong to the orchestrator (owner, 2026-07-30): verify each
recommendation from disk, then approve or decline on best judgment. Priority is
(1) mathematical and citational accuracy, then (2) minimise forward references
and nonfatal defects, then (3) preserve mathematical richness.

## D1 — add the backward `requires` edge `ascoli-arzela` → `compactness` (step 0)

**Approved.** `plan-topology-track.md` T10 calls for "ASCOLI-ARZELA in the
metric and the general forms", but the spec gave the page only
`function-space-topologies` and `approximation-and-compactness-in-ck`. Its
design-block sibling `stone-weierstrass-general` already declared `compactness`.

T10 states the metric-only restriction is "forced, not stylistic" because
"General topological compactness is page 255, unbuilt". 255 is now published, so
the forcing constraint is gone and the spec edge was simply stale. Order 255 <
285, so the edge points backward, adds no cycle and changes no `order`.

The edge does **not** license stretching a metric-domain citation over a general
domain; `function-space-topologies` is published with a metric-domain
foundation. Routed to batch 2's Beta as a constraint and to group Alpha a as a
check.

## D2 — Mac Lane CWM recovered from the archive rather than re-sourced (step 2)

**Applied.** `url-sweep --recover --fail-on-dead` reported 20/21 live for this
run; the failure was Mac Lane, *Categories for the Working Mathematician*, 2nd
ed. at `pages.jh.edu/rrynasi1/...`, returning **403**. A snapshot of
2025-11-04 was found and the citation was swapped to it in
`research/frontier-14-batch-6.coverage.json` and the batch notes. Gate re-run
green.

Recovery, not replacement, is the owner's rule (2026-08-15) and the reason is
cost: re-sourcing forces a re-harvest and rewrites the provenance of every item
the source backed. Mac Lane backs the MA-2 scaffold broadly, so a swap to a
different text would have invalidated much of batch 6's harvest for a link that
is merely access-blocked.

Noted for the step-5 author: the archived URL is now the citation of record and
must appear in `sources.references`, not the dead original.

## D3 — batch 5's two unminted NT-2 design ids (step 2)

**Approved as `already-published`.** The scaffold omits
`thm-power-residue-criterion-modulo-prime` and
`cor-number-of-nth-roots-modulo-prime`, both enumerated by NT-2. The Beta
dispositioned both `already-published` against
`thm-eulers-criterion-for-binomial-congruences` and
`cor-number-of-solutions-of-a-binomial-congruence`.

Verified from disk: both are `status: published`, both are homed on
`primitive-roots-and-unit-groups-modulo-n` which **is** in this page's declared
closure, and both state the stronger general form — every modulus admitting a
primitive root, exponent $\gcd(m,\varphi(n))$ — rather than the prime-only form
NT-2 proposed. Re-minting a weaker version of a published stronger result is
duplication, not richness.

What remains open and is routed to group Alpha b: whether every NT-2 use of the
prime-only version is correctly served by the general one *including
hypotheses*. That is a per-use check, not a per-item one.

## D4 — batch 5 declines `lem-integer-part` for the second supplement (step 2)

**Approved.** The Beta records that `lem-integer-part` is published but homed on
`library/real-analysis/limits-of-real-functions.md`, outside this page's
declared closure, and therefore proves the parity of the crossing count directly
from the division algorithm instead.

Verified: the item is published, and its home page is **not** in the closure of
`quadratic-residues-and-the-legendre-symbol`. The decline is correct.

This is worth recording because it is the exact inverse of a `frontier-13`
failure, where a decline claimed `lem-integer-part` was unavailable when it *was*
in closure, and four items had to be built at step 9. The distinction is
"published" versus "published **and in this page's closure**", and only the
second licenses a citation. Batch 5's Beta checked disk; the earlier one did not.

Group Alpha b checks the replacement argument is complete, since it is now
load-bearing for `thm-second-supplement-to-quadratic-reciprocity`.
