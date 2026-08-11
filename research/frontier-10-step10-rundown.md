# `frontier-10` — step 10 rundown, for the owner

Steps 0 to 9 are complete. Every gate is green. **Nothing is published; nothing
can be until you audit.** This is the fatal-error account required by the owner
rule of 2026-07-31, plus the paired-judge comparison required at step 10.

## What was built

| | |
|---|---|
| A/B pairs | **14** (11 new non-topology + 1 enrichment + 2 spliced mid-run) |
| items authored | **584** — 431 on A pages, 153 on B pages |
| source headings harvested and disposed | **887** |
| judge verdicts | 1,182 — both lanes on all 591 items, **zero nulls** |
| judge spend | 14.8M prompt / 6.68M completion tokens over 1,237 calls |

For scale: `frontier-9` shipped 83 items across 20 pages. This run authored 584.

`group-actions-and-cayleys-theorem`, the pair you flagged, goes from **6 + 1
items to 37 + 17** — orbit–stabiliser and its cardinality form, the class
equation, Cauchy, Cauchy–Frobenius, the full p-group chain through
`cor-groups-of-order-p-squared-are-abelian`, conjugacy/centralisers/normalisers,
coset actions and cores, Jordan's derangement theorem, and 16 worked examples
and counterexamples.

## Fatal errors, grouped by defect type

**48 fatal defects total**: 15 families found by the step-6 independent readers,
and 33 confirmed by Alpha from paired-judge rejections at step 8 (across 12
distinct items). All were repaired; **none was dropped or deferred**, and nothing
parked.

### False or overstrong Statement — 3

| item | what was wrong | disposition |
|---|---|---|
| `lem-finite-jordan-cover-sum-bounds` | **The Statement was false.** It constrained $M_i$ only where $E$ meets $E_i$, permitting a negative coefficient on a cover member disjoint from $E$. Reader counterexample: $E=E_1=[0,1]$, $h=0$, $M_1=0$, $E_2=[2,3]$, $M_2=-1$ makes it read $0\le-1$. | Statement restated to require every $M_i\ge0$; proof extends $h$ and the indicators to a common rectangle. Provenance → `ai-altered`. |
| Ramsey exact-value item (batch 6 F1) | **False title** claiming a "first exact Ramsey number". | Title corrected to what the proof gives. |
| `cor-planar-simple-graph-edge-bound` | Equality clause asserted for every triangulation, which the proof does not give. | **Narrowed on provability grounds** to "connected plane triangulation". See the open item below. |

### Invalid or circular inference — 14 (`logic`)

Representative, not exhaustive:

- `thm-linear-images-scale-jordan-content-by-absolute-determinant` — **circular**:
  invoked Cavalieri to prove content preservation *before* proving the shear
  image Jordan measurable, and Cavalieri assumes a bounded Jordan target.
  Repaired by first establishing elementary matrices as Lipschitz homeomorphisms
  and $\partial(E_0F)=E_0(\partial F)$.
- `lem-local-c-one-volume-distortion` — took content of images never shown Jordan
  measurable; the cited near-identity lemma gives containment and injectivity,
  not that conclusion.
- `lem-bv-functions-are-regulated` — built an "open cover" from one-sided
  small-oscillation neighbourhoods, but at a jump no two-sided such neighbourhood
  exists, so Heine–Borel never applied and the finite partition was unlicensed.
- `thm-riemann-stieltjes-existence-bv-no-common-discontinuities` — asserted
  convergence of a Cauchy **net** while the cited theorem covers Cauchy
  **sequences** only.
- Category theory (7 defects at the foundations): an ill-typed large-category
  definition, an over-large functor-category construction, ill-typed slice/coslice
  notation, a set/class domain mismatch, two proofs applying loop-only results to
  arbitrary endpoint paths, and an automorphism-group multiplication reversed by
  the page's own traversal convention.

### Incorrect dependency citation — 16

The largest single class. The recurring shape is an `[L#]` fact restating a cited
Statement as *slightly stronger* than it is, where the proof then leans on the
inflation. Examples: a corollary bounding an already-existing integral cited for
differences of arbitrary sums; `[L1]` dropping a source's $a<c<b$; hypothesis
words silently dropped from a cited Statement.

### Missing hypothesis or domain — 3 (`other`)

`def-jacobian-determinant-of-a-c-one-map` and three companions omitted the
positive-dimension domain.

## Where the defects were, and where they were not

| location | count |
|---|---|
| proof / verification | ~40 |
| Facts & dependencies | 16 |
| title / Statement | 3 |
| page prose / summary | 0 fatal (10 draft scope-denials repaired at step 9) |

**Zero fatal defects** in batches 1, 2, 3, 8 and 9 — symmetric groups, matrices,
finite abelian groups, free products, polynomial rings, the group-actions
enrichment, and determinants. Every fatal defect fell in three areas: category
theory (class hygiene), Jordan content (measurability), and Riemann–Stieltjes
(convergence). That is where first-draft mathematics breaks.

## The paired judges compared

| | DeepSeek V4 Pro | GPT 5.6 Terra |
|---|---|---|
| items judged | 591 | 591 |
| rejections | 143 (24%) | 295 (50%) |
| nulls | 3, all replayed to a verdict | 0 |

- **322 items drew a rejection from at least one lane; only 116 from both.**
- **Terra rejects at roughly twice DeepSeek's rate.** Terra shares the GPT family
  with the authoring Betas; DeepSeek is the only cross-family screen. The
  asymmetry is a stricter citation-precision bar, not twice the mathematics found:
  of 460 adjudications, **419 were `confirmed_nonfatal`** and only 8 were outright
  `false_positive`.
- **Both-lane agreement was the reliable signal.** Every item both lanes rejected
  after a repair turned out to carry a genuine fatal defect. Single-lane
  rejections closed as nonfatal far more often.
- The judges earned their cost: 33 fatal defects surfaced **after** nine reader
  audits and two refuter waves had already run.

## R1 held under pressure

438 model-rejections; **21 edits, every one licensed** by a `confirmed_fatal`
recorded against the pre-edit hash. `step8-guard` verified this at each of three
rounds (12/12, 7/7, 2/2). Convergence: 322 → 12 → 8 → 2 → 0, with nothing parked.

Without R1, each of the 419 nonfatal rejections would have triggered a rewrite,
voided its verdict and bought two more judge calls.

## Open items for your decision

1. **One word that R1 blocked.** `prop-maximally-planar-edge-characterisation`'s
   `[L1]` reads "with equality for a triangulation" where its source says
   "**connected** plane triangulation" — the same hypothesis-dropping class
   confirmed fatal twice elsewhere, and **caused by Alpha's own step-8 edit**. Its
   *use* is fully licensed (the step has just called the graph two-connected), the
   item cleared both lanes, and no rejection licensed touching it. Alpha escalated
   rather than making an unlicensed edit.
2. **A root fix R1 also withheld.** `lem-plane-face-handshake-by-girth` exports
   only $g|F|\le2|E|$ while proving $\sum_f\ell(f)=2|E|$ internally, and states
   itself for connected graphs while consumers restate it without that word — so
   every consumer needing equality improvises. Recording the identity in that
   lemma's Statement fixes several consumers at once. No rejection licensed the
   edit, so it belongs to the next unfrozen moment.
3. **33 published files need scope-denial edits in the publishing commit.** Six
   were falsified directly by this run; the rest are inherited stale denials the
   corpus-wide read exposed. Listed in
   `research/frontier-10-step9-scope-denial.md`. Not mutated.
4. **`cor-planar-simple-graph-edge-bound` was narrowed**, not proved: a plane
   triangulation of order ≥ 3 *is* connected, but proving it needs a new lemma.

## What publishing requires

Nothing is published. The publishing commit must, together:

- flip 584 items from `status: draft` to `published` with `verification.audited`;
- apply `research/frontier-10-published-amendments.md` — the staged additions to
  the two **published** group-actions pages, which were deliberately never edited;
- apply the 33 published scope-denial edits from step 9.

The finite-sum re-home is **already applied** (both `library/` pages and
`plan-spec.json`) — it left the amendments file's scope when it went in at step 4,
because both its endpoints were published and deferring it broke the gate.

## Mechanism changes this run made

Committed as they were found, each with its measurement:

- `coverage-checklist.mjs` — the omission gate (steps 2 and 6).
- `validate-plan.mjs` — 60-item A-page ceiling, WARN → ERROR.
- `content-policy.mjs` — `notation-iota-applied`; and its B-leaf rule fixed, which
  had been stricter than `depcheck`'s and blocked six legitimate scaffolds.
- `gates.mjs` — the contract trio now runs at **step 8**, a gap Alpha found: a
  fatal repair edits proof text, which is exactly what invalidates a contract.
- Alpha now reviews scaffold breadth at **step 3**, not step 4.
- `dispatch.mjs` — `web: true` on the `beta` and `reader` lanes.

## Post-pause addendum — step8-guard window correction

Verified before re-baselining, so the evidence is not erased by the new snapshot.

`step8-guard --baseline pre-step8d` reported **3 changed, 2 licensed**:

- `cor-planar-simple-graph-edge-bound` — licensed, `confirmed_fatal`
- `rem-riemann-stieltjes-conventions-and-scope` — licensed, `confirmed_fatal`
- `rem-real-exponents-deferred` — **`nonfatal-edit`, and correctly so**

The third is the orchestrator's own P15 title edit, applied under the owner's
item-3 approval of all 33 published scope-denial edits. It is licensed by that
approval, not by R1, which governs judge-rejection repairs only. It tripped the
guard because I took the `pre-step8d` baseline and *then* applied P15, putting a
non-step-8 edit inside step 8's window. Sequencing error on my part; the guard
behaved exactly as designed.

Both of Alpha's step-8d repairs are properly licensed. The baseline is retaken as
`pre-verify` so the gate measures the window it is meant to.
