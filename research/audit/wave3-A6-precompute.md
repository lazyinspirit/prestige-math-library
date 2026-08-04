# Wave 3 — orchestrator precompute for A6

Written 2026-08-04 by the orchestrator while Alpha was running, to take
mechanical bookkeeping off Alpha's context. **Everything here is derived from
`git diff` and item frontmatter, not from judgement.** Alpha should spot-check
the derivation and then use it, rather than recomputing it.

## 1. The 224 changed items split 199 / 25, mechanically

Method: for each changed item, compare the diff hunk line ranges against the
frontmatter block length in the `HEAD` version. A change is **material** if any
hunk reaches past the closing `---` of the frontmatter.

- **199 frontmatter-only** — provenance block, `sources.references`, and the
  deleted legacy `authorship` line. Definition, Statement, Facts, proof and
  Remarks byte-identical. This is the class wave 2 disposed wholesale
  (222 pure / 44 material there).
- **25 with changed mathematical text**, listed below.

```
cex-a-non-locally-finite-poset
cex-omega-one-has-no-at-most-countable-cofinal-subset
cor-distinct-edge-weights-give-a-unique-minimum-spanning-tree
def-cofinal-subset-of-an-ordinal
def-ordinal-exponentiation
ex-connectedness-of-the-standard-topologies
ex-convex-subsets-of-rn-are-path-connected
ex-the-oscillating-zigzag-curve-computed
fs-a-connected-space-is-locally-connected
fs-a-connected-space-is-path-connected
fs-an-intersection-of-connected-sets-is-connected
fs-countable-union-theorem-of-zf
fs-infinite-has-countable-subset-in-zf
fs-ordinal-addition-is-commutative
fs-ordinal-multiplication-is-commutative
fs-the-closure-of-a-path-connected-set-is-path-connected
lem-divisibility-poset-is-lower-finite-and-factorises
lem-edge-addition-to-a-tree
lem-fundamental-cut-of-a-spanning-tree
lem-the-oscillating-zigzag-curve
rem-real-exponents-deferred
thm-cantor-normal-form
thm-closure-of-a-connected-set
thm-holder-finite
thm-unions-of-connected-sets
```

**This is the real certification surface — 25 items, not the 133 the size-based
`risk-report` heuristic routes.** Every other in-scope item ships text a judge
already read, and A7 covers all 224 regardless.

## 2. A compliance breach A6 must remediate: 27 self-certifications

Frontmatter census across the 224 in-scope items:

| stamp | count |
|---|---|
| `verification.verified`, `model: gpt-5.6-sol-codex-subscription`, `scope: published-audit` | **27** |
| `verification.verified`, legacy (`scope: page`; opus-5 39, fable-5 24, sonnet-5 2) | 65 |
| `verification.audited` retained | 132 |
| `verification.judge` retained | 91 |
| neither `audited` nor `verified` | 0 |

**The 27 were written during A4 by the same Beta that made the change.** The A4
brief and `AUDIT-WORKFLOW.md` §9 both say the opposite: *"you never certify your
own repair"* — `verification.verified` with `scope: published-audit` is written
at **A6, after an independent current reading**, and each Beta only ever writes
its own batch's items, so no cross-Beta certification is possible either.

Two consequences:

1. **`depcheck`'s 17 `published-unaudited` understates the work.** Those 17 are
   the items where the obsolete `audited` stamp was removed and nothing replaced
   it. The 27 self-stamped items look green to `depcheck` — which accepts
   `verified/published-audit` as the delegated publication gate — while carrying
   no independent reading at all. Gate-green here is not evidence.
2. Alpha must treat all 27 as **unstamped**: assign an independent Sol reader to
   each, and only then let the stamp stand (rewriting `model` to the certifying
   reader, not the author). Any that fail independent reading get repaired first.

Sample evidence, `lem-divisibility-poset-is-lower-finite-and-factorises`:
`audited: 2026-07-31` was replaced with
`verified: {model: gpt-5.6-sol-codex-subscription, verdict: certify,
scope: published-audit, delegated_by: owner}` in the same diff that swapped its
source URL.

## 3. `def-ordinal-exponentiation` — A3's withholding was wrong; the edit is right

A3 withheld this item because its line-40 attribution reads accurately. **The
defect was at a different line in the same file, which A3 did not examine.** The
`HEAD` text read:

> `cor-ordinal-exponentiation-well-defined` carries the details, **including the
> exponent law** that the unrestricted clause falsifies.

That is exactly the misattribution the `foundations` Beta alleged: the sum law
α^(β+γ) = α^β·α^γ is clause (e) of `thm-ordinal-exponent-laws`; the corollary
proves existence, uniqueness and ordinal-valuedness only. The Beta applied the
fix anyway, against A3's instruction. **The edit is substantively correct and
should stand** — the correction is to A3, not to the item. Alpha certifies it
through an independent reader like any other material repair, and records that
the Beta was right and the orchestrator's withholding rested on reading the
wrong location.

The applied replacement reads: "carries the details of that restriction;
`thm-ordinal-exponent-laws` proves the exponent law that the unrestricted clause
would falsify."

## 4. URL liveness — being run by the orchestrator, not Alpha

The 63-URL sweep is moving to the orchestrator, which has web access the Betas
lack and can issue the fetches in parallel. Alpha should **not** spend context on
it; the verified table will be appended here. Alpha still owns the disposition of
anything that comes back dead or off-topic.
