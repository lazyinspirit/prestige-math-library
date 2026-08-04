# Wave 4 — A9, scope-denial re-grep and published-claim decay

Run 2026-08-05 by the orchestrator over every file this wave materially changed.

## Dispatch check

The dispatch is correct and its prerequisites are on disk: A0 scope
(`wave4-A0.md`, the three `.pages.json` manifests), A2 registers (three
`.findings.md`, three `.provenance.jsonl`), the A3 receipt (`wave4-A3.md`), the
A6/A8 Alpha report (`wave4-alpha.md`), the A8 adjudication ledger
(`wave4-judge-adjudications.jsonl`), `wave4-a8-impact-audit.json`, and the
repair record `wave4-published-repairs.md`. A9 proceeds.

One state note, recorded because A10 will need it: `wave4-run-state.json` was
last written at A9 `step-begin` on 2026-08-04T16:57Z and still carries the stale
A8 halt `gate-failed / missing research/audit/wave4-spine-audit.json`. The A8
work that halt was blocking was completed afterwards in session (Alpha report
02:18Z, adjudications 02:33Z, impact audit 02:38Z, repairs 02:57Z) without the
driver rewriting the state file. **The spine-audit receipt is still absent**, so
that gate is unsatisfied, not resolved. It is not an A9 finding and I have not
touched it — it belongs to the A10 gate rundown.

## Universe

62 files: the 61 items `audit-split.mjs` classifies as **material** against
`HEAD` (recomputed at A9 rather than reusing the A6-era `wave4-split.json`,
which predates the five A8 repairs and the orchestrator citation repair — 57
material then, 61 now), plus the one changed page
`library/topology/compactness.md`. The other 30 changed items are pure retags:
their prose is byte-identical, so there is no claim in them to decay.

## Mechanical half

`prosecheck.mjs` — **exit 0, "no positional claim contradicts the spec"**. The
decidable class (a "later"/"earlier" phrase whose linked target's page order
contradicts it) is clean corpus-wide. 576 heuristic warnings, of which
`library-scope-denial` is 221; those are the entry point below, not a result.

## The sweep proper

Grep is the entry point, never the sweep. Phrase classes searched: `neither`,
`no item`, `no other item`, `lacks`, `absent from`, `silent on`, `nowhere`,
`does not exist`, `not developed`, `no such`, `only place`, `the only`,
`not proved`, `no page`, `not yet`, `does not appear`, `no result`,
`not available`, `unproved`, `this library`, `these pages`, `no theorem`,
`no definition`, `no lemma`, `nothing here/in this`, `not established`,
`not treated`, `not covered`, `beyond scope`, `out of scope`, `deferred`,
`later page`, `earlier page`, `only item`.

**77 hits across 40 of the 62 files. Every hit was read in place.**

Seventy-four fall into the three clean classes wave 3 recorded — ordinary
mathematics ("$\mathbb{Q}$ is neither open nor closed in $\mathbb{R}$"; "no such
$\mathcal{U}$ exists"; "$0$ and $1$, neither of which is an infinite cardinal"),
properly scoped page-local claims, and claims already repaired this wave. Three
are defects. All three are **false about the library as written**, and none was
caught by A2, A3, A6, A7 or A8.

Spot-verified as **true** rather than assumed, because each is the kind of claim
that reads like a defect and is not:

- `thm-closed-subspace-of-a-compact-space-is-compact` — "the metric statement
  does not appear among its dependencies": `deps` confirmed to exclude
  `lem-closed-subset-of-a-compact-space-is-compact`.
- `thm-compactness-under-continuous-maps` — "Neither is used above": neither
  metric special case appears in its 21-entry `deps`.
- `lem-compactness-of-a-subspace-is-ambient` — "Neither statement is used in the
  proof of the other": checked both ways; `lem-compactness-is-intrinsic` does not
  cite it either.
- `lem-the-order-topology-on-an-ordinal` — "the finer separation axioms are not
  available at this point in the reading order": the corpus has only
  `def-hausdorff-space` and `def-t0-and-t1-spaces`, both at or below Hausdorff;
  no regularity or normality definition exists anywhere.
- The four real-analysis reading-order Remarks ("not available at this point in
  the reading order … the next page of this track, *Monotone Sequences,
  Bolzano-Weierstrass, and Cauchy Completeness*") in
  `fs-bounded-implies-convergent`, `lem-convergent-implies-bounded`,
  `lem-convergent-implies-cauchy`, `lem-subsequence-inherits-limit`,
  `fs-subsequence-convergence-implies-convergence` and
  `rem-sequence-conventions`: that page exists
  (`library/real-analysis/monotone-sequences-and-cauchy-completeness.md`), and
  `prosecheck` confirms the positional claim. These Remarks are also careful in
  the way the class demands — each names `thm-reals-cauchy-complete` as the one
  exception already in hand.
- `rem-compactness-conventions-and-choice-ledger` — "no item on this page claims
  that a choice principle is *necessary* … this library proves none": the
  independence material (`rem-baire-category-choice-strength`,
  `rem-schechter-kelley-tychonoff`) is `proved_here: false` in both cases, and
  the ZF equivalences the library does prove (`thm-tarski-square`,
  `thm-cardinal-comparability-iff-ac`) are equivalences, not independence
  results. The claim holds exactly as written.

---

## Finding 1 — `def-baire-space` line 66-72: false, and falsified by its own dependency

**Text on disk:**

> **Why the meager formulation is not given here.** … This page does not state
> it, because the notions of nowhere dense and meager available to it are
> [[def-nowhere-dense-meager]], which is stated for subsets of $\mathbb{R}$ and
> not for subsets of an arbitrary topological space; restating them here in
> general would create a second notion under the same name.

**Evidence.** `def-dense-top` is titled "Dense, **nowhere dense** and codense
subsets of **a topological space**, and the criterion by basic open sets", and
its Definition reads "$A$ is **nowhere dense** in $X$ if
$\operatorname{int}(\overline{A}) = \varnothing$" — for an arbitrary space, the
same formula. `def-baire-space` lists `def-dense-top` in its own `deps`, and
cites it in the very next sentence ("stated in terms of denseness alone, which
[[def-dense-top]] does define for an arbitrary space"). So the general notion of
nowhere dense is not merely available to the page; it is one of the page's five
declared dependencies.

**What survives.** The conclusion is sound: `def-dense-top` defines dense,
nowhere dense and codense and **not** meager (verified — no occurrence of
"meager", "first category" or "residual" in it), so *meager* genuinely is
$\mathbb{R}$-only and the page is right not to state the meager formulation.
The **reason given** is what is false, for one of the two notions it names.

**Not decay — false when written.** `def-dense-top` was authored 2026-07-27
(commit `7e2696e`), with the nowhere-dense clause present at creation;
`def-baire-space` was authored 2026-07-29 (commit `0a5df01`). The claim was
already false two days before it was written.

**Disposition: recorded for A10, no edit.** See "Why nothing was repaired here".

## Finding 2 — `def-cofinality` line 78: a corpus uniqueness claim two items falsify

**Text on disk:**

> **Only one notion of "cofinal" exists in this library.**

**Evidence.** Two other published items name a notion under that word:

- `def-subnet`, titled "Subnet via an eventually cofinal index map", which
  *defines* it: "The displayed condition says that $\phi$ is **eventually
  cofinal**." That is a condition on an index map between directed sets, not on
  a subset of an ordinal, and three published items cite it as such
  (`thm-net-cluster-point-iff-convergent-subnet`,
  `lem-every-net-has-a-universal-subnet`,
  `fs-every-subnet-of-a-sequence-is-a-subsequence`).
- `def-archimedean-field`: "Equivalently, the canonical naturals
  $(n \cdot 1_F)_{n \ge 1}$ are **cofinal**: no single element of $F$ is an
  upper bound for all of them" — bolded as a named notion, in an ordered field.

**What survives.** The paragraph under the heading is correct and is a
*page-local* argument: `def-cofinal-subset-of-an-ordinal` introduces cofinal
subsets and expressly defers the cofinality function and the regular/singular
vocabulary ("**What is not defined at this point in the reading order.** The
**cofinality** $\operatorname{cf}(\alpha)$ … are not introduced here"), this item
supplies them in that item's terms, and so no second notion *of cofinal subset of
an ordinal* is created. The bold heading overstates that into a corpus-wide
uniqueness claim. This is the "heading asserts more than the text gives" class —
the class `LEVELS.md` step 6 calls fatal because a judge reads Statements and
cannot see a false title.

**Both failure modes at once.** `def-archimedean-field` (2026-07-25) predates
`def-cofinality` (2026-07-29), so the heading was already false when written.
`def-subnet` (2026-07-31, commit `9a5f5c6`) then falsified it a second time and
independently — **that half is textbook published-claim decay**, a claim no gate
can see, found only by reading the corpus level by level.

**Disposition: recorded for A10, no edit.**

## Finding 3 — `ex-the-cardinality-of-the-continuum` line 110: "the one constraint" undercounts

**Text on disk:**

> **What is still not decided.** Nothing here says which aleph $2^{\aleph_0}$
> is. **The one constraint proved in this development** is that its cofinality
> is uncountable ([[cor-cofinality-of-a-cardinal-power]]) …

**Evidence.** `ex-aleph-one-is-at-most-the-continuum` sits on the same page
(`library/foundations/cardinal-arithmetic-and-cofinality-examples.md`, adjacent
entries in its item list), was authored in the same commit (`0a5df01`,
2026-07-29), and cites this very item. Its Example states
$\aleph_0 < \aleph_1 \le 2^{\aleph_0}$ and then, in exactly the terms of the
sentence above, "Moreover $2^{\aleph_0} = \aleph_\alpha$ for exactly one ordinal
$\alpha$, and that $\alpha$ satisfies $1 \le \alpha$". That is a second
constraint on which aleph $2^{\aleph_0}$ is, proved in the same development,
under the same AC hypothesis this item's clause (b) already assumes.

So the count is wrong: there are two constraints, $\alpha \ge 1$ and
$\operatorname{cf}(2^{\aleph_0}) > \omega$. The surrounding sentences — that
nothing here decides *which* aleph, and that equality with $\aleph_1$ is CH —
are both correct and unaffected.

**Same class as A8-4**, `ex-compactness-in-the-standard-topologies`'s "Every
theorem on the companion page … carries a Hausdorff hypothesis", which Alpha
confirmed fatal this wave and repaired: a universal/uniqueness claim about the
library falsified by the companion page it is describing. Finding 3 is the same
defect one page over, and the A8 sweep did not reach it because no judge lane
rejected this item.

**Disposition: recorded for A10, no edit.**

---

## Why nothing was repaired here

A9 is a sweep with no repair authority, and in this wave three separate
mechanisms say the same thing:

1. **A8 is fatal-only and closed (R1).** A repair needs a `confirmed_fatal`
   adjudication row recorded against the pre-edit text. A8 is complete — five
   licensed repairs, `step8-guard` reporting 5/5 — and there is no row for any of
   these three. Editing now would be an unlicensed mutation of exactly the kind
   R1 was built to stop.
2. **The stamps are already written on final text.** `def-baire-space` carries
   `verification.verified` (`gpt-5.6-sol-codex-subscription`, `certify`,
   2026-08-05, `scope: published-audit`). An edit voids that stamp and forces a
   targeted paired rejudge and a fresh certifier receipt, with no adjudication
   licensing the round.
3. **No author certifies its own repair.** All three are prose restatements I
   would be authoring, and A9 has no independent certifier lane attached to it.

The correct route is an Alpha adjudication with an exact-hash row, which is an
A10 owner decision about whether to reopen A8 for three non-mathematical prose
defects or to carry them to wave 5. **All three leave every Statement, proof and
dependency edge intact** — the mathematics is unaffected in each case, and only
the surrounding claim about what the library contains is wrong.

## Published-claim decay noticed in passing

- **`def-cofinality`** (Finding 2, `def-subnet` half) — the one true decay
  instance this wave: a corpus-uniqueness heading falsified 2026-07-31 by a page
  built two days after it.
- Findings 1 and 3 are **not** decay. Both were false on the day they were
  written, against material that already existed — Finding 1 against a
  dependency the item itself declares. Worth separating in the A10 report,
  because they indict authoring-time verification rather than the corpus moving
  underneath a true claim.
- Also recorded: the two decay-class defects this wave already repaired at A8 —
  `thm-locally-compact-hausdorff-basics` A8-3 ("claim 4 is what the one-point
  compactification uses", when that sibling uses claim 1) and
  `ex-compactness-in-the-standard-topologies` A8-4. Listed so the sweep's
  coverage is visible; both are closed.

## Carry-list for A10

| # | item | defect | class |
|---|---|---|---|
| 1 | `def-baire-space` | reason for omitting the meager formulation is false for *nowhere dense*; the general definition is a declared dependency | false-when-written |
| 2 | `def-cofinality` | "Only one notion of 'cofinal' exists in this library" — `def-subnet`, `def-archimedean-field` | decay + false-when-written |
| 3 | `ex-the-cardinality-of-the-continuum` | "the one constraint" — a second is on the same page in the same commit | false-when-written |

Plus the state-file item under "Dispatch check": `wave4-spine-audit.json` is
still missing and `wave4-run-state.json` still records the A8 halt.
