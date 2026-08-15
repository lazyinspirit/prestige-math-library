# frontier-14 — group Alpha **a**, step-3 re-check before the step-4 splice

Re-check of the Beta fix pass for batches 1, 2, 3 against
`research/frontier-14-alpha-a-step3-scaffold-review.md`. Written by build Alpha
(Claude Opus 5, `xhigh`, 1M window) per
`research/frontier-14-alpha-a-recheck.task.md`.

**No finding is renumbered.** The eighteen stable ids `A1`–`A4`, `B1`–`B3`,
`C1`–`C4`, `D1`, `E1`–`E3`, `F1`–`F3`, `G1`–`G3` keep the meanings the review
gave them. Two *new* observations found by this re-check are numbered `R1`, `R2`
in a fresh namespace, so nothing above them shifts.

---

## Method — and why "the notes claim a fix the file does not carry" was mechanically decidable here

The batch scaffolds were last committed at **02:31** (`c16a144b`), the review was
written at **03:15**, and the fix dispatches ran **03:38–03:49** and are still
uncommitted. So `git diff HEAD -- research/frontier-14-batch-{1,2,3}.*` is
**exactly** the step-3 fix pass and nothing else. I read that diff before reading
any claim in the notes, so an `applied` entry that changed nothing would show up
as an absent hunk rather than as a judgement call.

Everything below was then confirmed against the file as it now stands, and every
mathematical claim against the item on disk.

---

## Per-finding dispositions

### Batch 1 — `complex-power-series-and-analytic-functions` (305) / `contour-integration` (307)

**A1 — confirmed.** `thm-complex-sine-and-cosine-are-unbounded` is on the **A**
page 305 at index 24, immediately after
`cor-complex-trigonometric-and-hyperbolic-addition-formulas`, exactly where the
finding asked. Its four `deps` are real, published, in 305's closure, and each is
load-bearing for a step the strategy actually takes — I opened all four:

| dep | what it supplies |
|---|---|
| `thm-complex-trigonometric-hyperbolic-dictionary` | `$\sinh z=-i\sin(iz)$`, `$\cosh z=\cos(iz)$` → at real `$y$`, `$\sin(iy)=i\sinh y$` and `$\cos(iy)=\cosh y$` in one substitution |
| `def-complex-trigonometric-and-hyperbolic-functions` | `$\sinh z=(\exp z-\exp(-z))/2$`, `$\cosh z=(\exp z+\exp(-z))/2$` |
| `thm-complex-exponential-addition-and-real-extension` | *"For real $x$, the complex value $\exp(x+0i)$ equals the published real exponential $e^x$"* — the bridge |
| `thm-exponential-limits-and-range` | `$\exp(x)\to+\infty$` as `$x\to+\infty$`, `$\exp(x)\to0$` as `$x\to-\infty$` |

The real/complex exponential ambiguity I would have watched for at step 5 is
closed **in the scaffold** by the explicit real-extension dependency rather than
by an unstated identification. A matching proof contract with eight anchored
boundary rows exists. The Stein–Shakarchi harvest row is present as
`included`.

**A2 — confirmed, and one part answered better than the finding asked.** Both new
B items are on page 306: `fs-complex-sine-and-cosine-are-bounded` (deps: the new
A1 theorem) and `ex-harmonic-complex-power-series-on-the-unit-circle`. The third
item — the worked `$\sin(iy)=i\sinh y$` — was **not** minted, because the Beta
found it already published. I checked: `ex-complex-sine-is-unbounded-on-the-imaginary-axis`
reads, verbatim from disk, *"1.1 The dictionary gives $\sin(it)=i\sinh t$."*
It is a B-page leaf, so recording it `already-published` and not citing it is the
correct disposition and better than duplicating it.

The middle boundary case is now genuinely present: the new example is titled
*"…diverges at 1 and converges conditionally at every other point of the unit
circle"*, which is the case CA-2 asked for and the one the scaffold lacked. Its
strategy is correct — the finite geometric identity bounds the partial sums of
`$\sum z^n$` by `$2/|1-z|$`, Abel summation against the decreasing weights `$1/n$`
closes it, `$z=1$` is the harmonic series, and `$|z^n/n|=1/n$` makes every other
boundary convergence conditional. `lem-abel-summation-for-complex-series` is
homed on 305, its own A page, so the citation is legal.

**A3 — confirmed.** The `already-published` row for
`cex-smooth-function-not-equal-to-its-maclaurin-series` exists with a note
recording both its B-leaf status and its home outside 305's closure.

**A4 — confirmed.** Both rows carry the annotation; neither item is cited by
anything in the batch.

**B1 — confirmed, and it discharges the reason the finding mattered.**
`ex-exponential-over-z-unit-circle-integral-by-series` is on page 308. I re-ran
the consumer sweep: `thm-uniform-limit-interchanges-complex-line-integrals` now
has **exactly one** consumer in the pair, this example — it was zero. The
mathematics is right (the `$n=0$` term gives `$\int dz/z=2\pi i$`, every `$n\ge1$`
term gives `$0$`), and the finding's constraint is respected: neither
`def-complex-exponential` nor `lem-complex-exponential-series-converges-everywhere`
is homed on 305 — both are on `the-complex-exponential-and-eulers-formula` — so
the example takes **no** dependency on page 305. Ahlfors §1.3 and
Howell–Mathews §6.2 rows both present.

**B2 — confirmed.** `cex-graph-of-x-sin-one-over-x-is-not-rectifiable` recorded
`already-published` with the note that its examples-page home makes it uncitable.
No duplicate construction was minted. The judgement call I explicitly left to the
orchestrator (whether to restate the point as a fresh B-page remark) was resolved
the conservative way, which is within the Beta's authority and fine.

**B3 — confirmed as recorded.** The finding asked for **no scaffold edit**, and
none was made. The four `line-integrals-and-the-gradient-theorem` edges are still
present and the step-5 obligation is written into the notes in the exact form the
finding stated: each edge must occur in a numbered proof step or leave `deps`;
comparison-only mention does not count.

### Batch 2 — `ascoli-arzela` (285) / `stone-weierstrass-general` (287)

**C1 — confirmed, and the harvest is faithful.** Munkres, *Topology*, 2nd ed.,
Chapter 7 §§45–47 is added as a **textbook** source with a page-anchored locator
and **26 harvested headings** — the batch's coverage went 47 → 74 rows. The
landmark now has an independent treatment: Munkres **Theorem 47.1** →
`thm-ascoli-arzela-general`, **Theorem 46.10** →
`thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain`, **§46
compact-open definition** → `def-compact-open-topology-for-topological-domains`.
That is the core of the finding: the page's landmark theorem is no longer
single-treatment.

I verified the §45 harvest is a real harvest, not a transcribed contents list, by
extracting an independent authoritative transcription of Munkres §45 and comparing
heading by heading. The coverage's ten §45 rows — totally bounded definition,
Examples 1 and 2, Theorem 45.1, equicontinuity definition, Lemmas 45.2 and 45.3,
pointwise bounded definition, Theorem 45.4, Corollary 45.5 — are Munkres's own
headings in Munkres's own order, complete over the claimed range. Corollary 45.5's
row even names the **sup-bounded** wording, which is the C4 quantifier trap, so
the harvest caught it rather than smoothing it over.

Five of the eight items I listed as BBT-only remain BBT-only
(`thm-pointwise-compactness-criterion-for-function-families`,
`lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family`,
`lem-pointwise-closure-preserves-equicontinuity`,
`prop-compact-open-is-uniform-on-a-compact-metric-domain`, and the general
equicontinuity definition — see **R1**). That is **not** a failure to apply C1:
Munkres proves Theorem 47.1 through compact convergence and total boundedness,
BBT proves it through pointwise closure, so the two routes have different
intermediate lemmas by construction. What C1 asked for — an independent check on
the landmark and the general definitions — is delivered. See **R1** for the one
row where it is delivered but not recorded.

**C2 — confirmed.** The bot-walled `users.math.msu.edu` URL is gone. The coverage
and the source ledger both now carry
`https://web.archive.org/web/20141114064305if_/http://www.mth.msu.edu/~shapiro/pubvit/Downloads/ArzNotes/ArzNotes.pdf`
— byte-identical to the recommended recovery URL. I re-fetched it myself:
**HTTP 200, `application/pdf`, 53,865 bytes, 3 pages.** Recovery, not
re-sourcing, so the existing faithful harvest stands and no re-harvest was spent.

**C3 — confirmed, and disk-checking improved on the finding.** The false strategy
sentence is gone; the replacement records that only the **complex** specialisation
is blocked and names `field-extensions-and-the-complex-numbers` as what blocks it.

The finding asked for a new corollary specialising the proper-target results to
`$\mathbb R$` and `$\mathbb R^n$`. The Beta checked disk and found the real case
is **already published**: `thm-arzela-ascoli-for-real-ck` and
`cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence`, both
homed on `approximation-and-compactness-in-ck`, which is in 285's closure. So
`cor-real-and-euclidean-vector-valued-ascoli-arzela` **cites** the real case
rather than rebuilding it and proves only the genuinely new `$\mathbb R^n$`
clause, via clauses 2–3 of `thm-heine-borel-rn`. That is the right call and a
better outcome than what C3 proposed — a re-mint avoided, in the same spirit as
D1.

**C4 — confirmed.** The uniform-versus-pointwise gap is recorded as an explicit
step-5 obligation and, better, is anchored in `deps`:
`lem-equicontinuity-on-a-compact-domain-is-uniform` and
`lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness` are both
published, both in closure, and both stated for `$\mathcal F\subseteq C(K,\mathbb R)$`
— i.e. the scalar case only. The strategy correctly uses them for the scalar case
and commits to an **inline** finite-subcover argument for the vector case, rather
than stretching a real-valued lemma over `$\mathbb R^n$`. The instruction *"do not
widen its quantifiers"* is written into the strategy text.

**D1 — pushback rejected in part; the decision it names is genuinely open.**

The Beta's factual core is right: the two edges are an orchestrator decision, no
decision is recorded, and it may not edit `plan-spec.json`. Deleting the
re-minted items without an edge really would create undeclared prerequisites.

But the reasoning it used to conclude it could do nothing is **false of this
run**, and its own sibling Betas prove it. A Beta records a *proposed* `requires`
in its own batch manifest; the orchestrator splices it at step 4. Batch 1 did
exactly that for `contour-integration → line-integrals-and-the-gradient-theorem`
and said so in its notes — *"the batch manifest already records it… the
orchestrator must settle that edge before step 4"*. Batch 3 did it for both of
its edges. Batch 2's manifest carries **no** proposed requires change at all, so
`stone-weierstrass-general` is the only page in this group where the orchestrator
has no splice-ready option in front of it.

I re-verified both edges are legal on current disk: `field-extensions-and-the-complex-numbers`
(order 54) and `the-complex-exponential-and-eulers-formula` (order 189) are
published, neither is in 287's closure, and 287 is in neither of *their* closures
— backward and acyclic both ways. All eight published targets exist:
`def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`,
`thm-complex-numbers-are-the-real-coordinate-plane`,
`def-complex-conjugate-real-imaginary-part-and-modulus`,
`lem-complex-conjugation-and-modulus-laws`,
`thm-every-complex-number-has-a-square-root`,
`thm-complex-nth-roots-and-roots-of-unity`, `cor-sum-of-roots-of-unity`.

**What must still change:** either the orchestrator records a decision **declining**
both edges — in which case the scaffold as written is legitimate, I have no
mathematical objection to it, and 287 splices unchanged — or it approves them,
and batch 2 must then add the edge to its manifest and re-point
`def-self-adjoint-complex-function-algebra`,
`lem-real-part-of-a-self-adjoint-complex-function-algebra` and
`cex-disc-algebra-is-not-dense-without-self-adjointness` before the splice. What
is not acceptable is splicing with the decision unrecorded, because after step 4
the re-point is a rewrite and the library keeps a second `$\mathbb C$` by default
rather than by choice.

### Batch 3 — `complete-metrizability-and-baire` (277) / `covering-spaces-and-lifting` (293)

**E1 — confirmed.** The coverage carries a structured `planned_overlaps` record
naming `regular-continued-fractions-and-diophantine-approximation`, order
`57.013`, `status: planned-unbuilt`, with all six colliding NT-7 ids mapped to
the three local items that temporarily supply the machinery, and a reason stating
that the eventual duplication is an owner decision. That is exactly the record the
finding asked for, in a machine-readable form I did not ask for.

**E2 — confirmed, with the extra I recommended.** Both declines carry
`license_page: null`. The Kunzinger row now records the specific defect —
*"Its proof invokes Section 7.2.7, whose local-compactness hypothesis is absent
here"* — which is the fairer and more useful framing. The MFF row and its locator
now use the source's Czech labels (`Věta 75`, `Důkaz`) and say so, so a later
reader searching for "Theorem 75" is not misled.

**E3 — confirmed.** `thm-hilbert-cube-universal-for-separable-metrizable-spaces`
now carries `provenance.statement: ai-altered` (was `literature-derived`), with a
rationale recording that Marker's Theorem 1.4 states only the Polish form and
that none of C2–C4 carries the separable-metrizable form in the declared ranges.
No dependency or statement changed.

**F1 — confirmed, including the sync.** Both titles now print the hypotheses their
strategies spend:
`thm-universal-cover-uniqueness-and-dominating-property` → *"For a path-connected
locally path-connected base, …"*; `thm-deck-group-of-a-universal-cover-is-the-fundamental-group`
→ *"For a path-connected locally path-connected semilocally simply connected
base, …"*. Both match their strategy text. The ordered inventory in the notes
(entries 28 and 32) and the proof contracts were updated too, so the three
artifacts agree.

**F2 — confirmed and over-delivered.** I swept **every** decline in all three
batches: batch 2 has 17 and batch 3 has 14, and **all 31 carry a `license_page`
field**, `null` where no planned page licenses the result. Batch 3's eleven
covering deferrals name `classification-of-covering-spaces`, with the mixed
circle row additionally naming `the-fundamental-group-of-the-circle` in an
`additional_license_page` field. The run's coverage files are now uniform on the
one field that distinguishes a licensed deferral from a silent drop.

**F3 — confirmed.** The Hawaiian-earring strategy now proves local
path-connectedness rather than asserting it, in both cases: short arcs away from
the wedge point, and small metric balls at the wedge point that meet each circle
in an arc through the wedge point and contain every sufficiently small circle
whole. That is correct for the shrinking wedge. The proof contract carries a
separate derivation for the title-bearing claim.

---

## New from this re-check — `R1`, `R2`

Both are inside C1's Munkres harvest, both are one-row coverage edits, and
neither existed to be found before the fix pass created the source.

### R1. Munkres's §45 equicontinuity is a **topological**-domain definition; the harvest maps it to the library's metric-domain item

Row: `"§45 Definition, equicontinuity of a family in $C(X,Y)$"` →
`already-published: def-equicontinuity`.

From the extracted §45 text, Munkres's definition reads *"Let $(Y,d)$ be a metric
space. Let $F$ be a subset of the function space $C(X,Y)$…"*, and the two lemmas
that use it both open *"Let $X$ be a **topological space** and let $(Y,d)$ be a
metric space"*. The published `def-equicontinuity` I opened on disk is titled
*"…of a family of maps **between metric spaces**"* and its body opens *"Let
$(X,d_X)$ and $(Y,d_Y)$ be metric spaces"*.

So the row records a general source definition against a strictly narrower
published item, and the consequence is exactly the gap C1 was raised to close:
`def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness`
is still recorded as BBT-only when **Munkres backs it**.

**Fix:** re-point the row to `included` naming
`def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness`,
keeping the metric agreement proposition's relationship to the published
`def-equicontinuity` in a second row or a note. Cost: one coverage row. It
converts a definition from single-treatment to double-treatment.

### R2. The Theorem 47.1 row attaches local compactness to the whole theorem; Munkres attaches it only to the converse (lower)

Row name: `"Theorem 47.1, general Ascoli theorem for locally compact Hausdorff
domains and metric targets"`.

Munkres's Theorem 47.1, verbatim: *"Let $X$ be a topological space and let
$(Y,d)$ be a metric space… **(a)** If $F$ is equicontinuous under $d$ and the set
$F_a$ has compact closure for each $a\in X$, then $F$ is contained in a compact
subspace of $C(X,Y)$. **(b)** The converse holds if $X$ is locally compact
Hausdorff."*

Part (a) needs neither local compactness nor Hausdorff. The row's name asserts a
hypothesis the source does not carry on the forward direction — the §A1
restatement shape, pointing the unusual way (the source is stronger than the
row says). It is not a mathematical defect in the scaffold:
`thm-ascoli-arzela-general` is BBT's LCH-hypothesised form and is correctly
stated. But a step-5 author reading this row would believe Munkres cannot back
the forward half without LCH, and would not think to.

**Fix:** name the row for what Munkres states, splitting (a) and (b). Whether to
widen `thm-ascoli-arzela-general`'s forward direction to match is a scope call I
am not making here; it is worth the orchestrator's glance because it is free
generality from a source already harvested.

---

## Orchestrator-owned items — status on current disk

**G1 — NOT DONE. This is the one thing blocking the splice.**
`research/frontier-14-step3-decisions.md` still ends at **D4** and its mtime is
**02:26**, before the review was written. None of the four `requires` edges is
approved or declined.

I re-ran the check end to end by splicing all six batch manifests into
`plan-spec.json` and running `validate-plan.mjs` on the overlay, twice:

| overlay | result |
|---|---|
| batch items + **plan-spec's current** `requires` | **FAIL — 6 `undeclared-prereq` errors** (`complete-metrizability-and-baire` → `approximation-and-compactness-in-ck`, `monoids-groups-and-subgroups`, `tychonoff-embedding-and-stone-cech`; `complete-metrizability-and-baire-examples` → `approximation-and-compactness-in-ck`; `covering-spaces-and-lifting` → `group-actions-and-cayleys-theorem`; `contour-integration` → `line-integrals-and-the-gradient-theorem`) |
| batch items + the **batch manifests'** `requires` | **OK — 0 errors**, 284 pages with item lists |

(The 6 errors and the review's 23 are the same thing counted differently:
`validate-plan` reports one error per page/target pair, the review counted
individual dependency edges.)

The manifests' proposed `requires` are exactly the §G table and nothing else:
307 `+line-integrals-and-the-gradient-theorem`; 277
`+tychonoff-embedding-and-stone-cech`, `+approximation-and-compactness-in-ck`,
`−compactness-in-metric-spaces`; 293 `+group-actions-and-cayleys-theorem`.

**G1's package rule re-verified on current disk.** Under the proposed requires,
`monoids-groups-and-subgroups`, `compactness-in-metric-spaces` and `compactness`
are all in 277's closure, so dropping `compactness-in-metric-spaces` from the
direct list is safe. The `monoids-groups-and-subgroups` error in the left-hand
column is the independent confirmation that the batch-3 pair must be approved
together: it is reached through the **approximation** edge, not the Stone–Čech
one.

**Batch 2 proposes no edge**, so the D1 decision has no splice-ready form. See D1.

**G2 — re-confirmed, post-fix.** 208 scaffolded ids in batches 1–3 (203 before
the fix, +5 new), 339 across all six batches: **0** duplicates, **0** collisions
with the 4,646 files in `items/`, **0** collisions with any id in
`plan-spec.json`.

**G3 — re-confirmed, non-vacuously, after the edits.**

| gate | batch 1 | batch 2 | batch 3 |
|---|---|---|---|
| `coverage-checklist` | 2 pages, **97** harvested, 0 err | 2 pages, **74** harvested, 0 err | 2 pages, **116** harvested, 0 err |
| `content-policy --manifest-only` | **73** scoped, 0 err | **49** scoped, 0 err | **86** scoped, 0 err |
| `boundary-audit --min-cluster 3` | 0 clusters, 0 contradicted | 0 clusters, 0 contradicted | 0 clusters, 0 contradicted |
| proof contracts | 65/65, all new items covered, 8 axes each | 42/42 | 71/71 |
| `url-sweep --recover --fail-on-dead` | **20/20 live across all three**, 0 dead, 0 recoverable-pending | | |

Every new item carries a contract with eight anchored boundary rows, and I read
the new batch-2 contract's rows: they are item-specific dispositions (the
`$n\ge1$` dimension hypothesis, the `$n=1$` overlap with the real-line clause,
the singleton domain, the explicit Choice charge), with a single justified
`not_applicable` on the endpoints axis. Not templates.

**Blocker 1 from the review addendum is closed.** All three Betas found the
routing table, used the stable ids `A1`–`B3`, `C1`–`D1`, `E1`–`F3`, and
renumbered nothing. Batch 1's superseded "no-match exit" section is left in place
above its real fix pass, which is the right way to record it.

---

## What I could not check, stated plainly

1. **The Munkres copy at the cited URL was not text-extracted.**
   `https://djvu.online/file/7PTGeGhMkCAAK` resolves HTTP 200 to a **1.19 MB HTML
   scan-viewer** titled *"Topology - Munkres J.R. - 2000"*, not to a PDF — so
   `pypdf` cannot reach it and neither can the step-6 faithfulness pass. It is
   live and it does carry the book, so it passes the liveness gate honestly and
   `recover-before-replace` says do not swap it. I verified §45 and Theorem 47.1
   against an **independent authoritative transcription** of Munkres §45 instead,
   which is what R1 and R2 rest on. **The fifteen §46 rows I checked against my
   own knowledge of Munkres 2nd ed., not against extracted text** — they match,
   but that is a weaker check than the one I ran on §45, and step 6 should
   re-do it against a text-extractable copy.
2. **Erdman, Berkeley 205B, Carlen, Peterson, Hatcher/May/Gualtieri,
   Stein–Shakarchi and Howell–Mathews remain un-text-verified**, unchanged from
   the review. The Stein–Shakarchi row added for A1 and the Ahlfors §1.3 /
   Howell–Mathews §6.2 rows added for B1 are new citations I did not extract.
3. **Proofs.** Still none. Every judgement here is about a `strategy` field.
4. **Batch 1 declares no item-level provenance in its manifest**, unchanged; the
   four new items' provenance is in the notes table only. The rule that binds now
   still holds: no `ai-generated` statement is load-bearing. The one new
   `ai-generated` statement, `ex-harmonic-complex-power-series-on-the-unit-circle`,
   is a B-page leaf and nothing cites it.

---

## Per-pair verdict

| pair | verdict |
|---|---|
| `complex-power-series-and-analytic-functions` (305) | **ready for splice** |
| `contour-integration` (307) | **not ready** — G1: the `line-integrals-and-the-gradient-theorem` edge is unrecorded. Scaffold itself is clean; splicing the manifest as written passes `validate-plan`. |
| `ascoli-arzela` (285) | **ready for splice**, with R1 and R2 worth the two coverage rows while they are free |
| `stone-weierstrass-general` (287) | **not ready** — D1 has no recorded decision and no splice-ready alternative in the manifest. Declining D1 makes it ready as-is; approving it requires the manifest edge and three re-points first. |
| `complete-metrizability-and-baire` (277) | **not ready** — G1: the Stone–Čech + approximation package is unrecorded. Must be approved **together** or five deps stay broken. |
| `covering-spaces-and-lifting` (293) | **not ready** — G1: the `group-actions-and-cayleys-theorem` edge is unrecorded. |

**Nothing in the four `not ready` verdicts is Beta work.** All eighteen routed
findings are confirmed on disk; every remaining blocker is a decision that has to
be written into `research/frontier-14-step3-decisions.md`. Order of operations:
record D5 settling the four §G edges (batch 3's two as a package) and a D6
settling D1 → apply R1/R2 and, if D1 is approved, batch 2's re-point → splice.
The re-check after any batch-2 change must come back at **0 broken edges, not
fewer**.
