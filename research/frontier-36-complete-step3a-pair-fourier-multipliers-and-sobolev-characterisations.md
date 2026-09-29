# Step 3a scope review — Fourier multipliers and Sobolev characterisations

- Run: `frontier-36-complete` (role: alpha; batch 13; this pair only)
- A page: `fourier-multipliers-and-sobolev-characterisations` (plan order 458.02601)
- B page: `fourier-multipliers-and-sobolev-characterisations-examples` (plan order 458.02602)
- Scope decision: **sufficient**, recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/frontier-36-complete-step3a-review-fourier-multipliers-and-sobolev-characterisations.json`
- Scope is judged here, not proof correctness. No scaffold item, plan, page, engine state or
  owner record was edited. Nothing below is an item approval.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-36-complete-batch-13.pages.json` | Current A inventory (12 items, dependency levels 0–7) and B inventory (5 items, levels 2–7); A `requires` is exactly the four current plan-spec edges, B `requires` is A only; companion pairing and orders match `research/plan-spec.json` |
| `research/frontier-36-complete-batch-13.coverage.json` | 6 source treatments on one page entry, 33 harvested rows (15 `included`, 6 `inline`, 6 `deferred`, 6 `out-of-scope`); fetch stamps with byte counts, page counts and SHA-256 prefixes |
| `research/frontier-36-complete-batch-13.notes.md` | Scaffolder construction record: design control, exact PDE-11 escalation, the corrected jump-multiplier remark, choice audit, preset checks |
| `research/frontier-36-complete-batch-13.cross-batch-dependencies.json` | 13 consumer→supplier rows, all `open`: 8 to PDE-14F (7 item + 1 page) and 5 to PDE-11 (4 item + 1 page); suppliers scaffold-only at Step 1 |
| `research/plan-fourier-analysis-track.md` lines 36, 67, 607–665 | Binding prose design: FR-6 role row (36), prereq table row (67), A table (624–635), B table (641–647), hard proof/boundary obligations (647–665), sources read (618–621) |
| `research/plan-fourier-analysis-track.md` lines 1296–1298, 1346, 1367 | Track-level source harvest: G §2.5/§6.2.3 and W §6.2 destinations (deep Mihlin theorem, Littlewood–Paley `cex` items assigned to later FR pages); L ch. 13 owns both Hausdorff–Young items |
| `research/plan-measure-theory-track.md` lines 385–391 | MT-CA-1 endpoint pair is the declared supplier of both new Hausdorff–Young items; “those staged pages must require the appropriate new MT A page” |
| `research/plan-pde-track.md` lines 1540, 2531, 2539 | PDE-14F defers the integer-order comparisons to FR-6; FR-6 requires PDE-11 and PDE-14F separately for the comparison |
| `research/frontier-36-complete-alpha-step1-drift.md` (FR-6 entry) and `research/frontier-36-complete-drift-evidence.json` item 9 | Step-1 verdict `no-drift`; 183-page closure contains schwartz, tempered, MT-17, MT-16c, PDE-11, PDE-14F and both interpolation/Parseval pages |
| `research/frontier-36-complete-owner-authoring-direction.md` | Owner direction: batch 30 supplies PDE-11; “the Fourier-multiplier A page directly requires PDE-11, and its integer-order comparison must use the proved Sobolev interface” |
| `research/plan-spec.json` vs `git show HEAD:research/plan-spec.json` | Current FR-6 `requires` (4 edges) differs from the committed 7-edge table row; see Observation 4 |
| `items/*.md` dependency resolution (script) | 78 declared dependency occurrences over 40 distinct items: 24 published (all `status: published`, all files present) and 16 in-run (this pair, PDE-11, PDE-14F); 0 unresolved, 0 forward page references |

## Role in the library

FR-6 is the FA track’s “multiplier language” page: domain-qualified Fourier multipliers on the
Schwartz core, the exact $L^2$ bound, the $L^p$-multiplier definition and norm, the Mihlin symbol
class, and the Fourier descriptions of the PDE-owned Sobolev spaces $W^{k,2}$ and $H^s$; the pair
also carries the library’s first proved Hausdorff–Young theorems (the published
`rem-hausdorff-young-and-interpolation` is orientation only and asserts no intermediate-exponent
theorem). The FA plan makes FR-6 A a prerequisite of the later FR-7, FR-8, FR-11, FR-13, FR-14 and
FR-15 pages (lines 68–76); FR-8’s item 19 (`thm-mihlin-fourier-multiplier-theorem`, plan line 731)
consumes “FR-6’s $L^2$ bound” and its Mihlin symbol class. Inside this frontier the only in-run
consumer is the B page: a scan of all 60 pages and 897 manifests items found no other item whose
deps reference an FR-6 item, and no page other than the B page requires FR-6 A. The pair consumes
two staged in-run pages (PDE-11, PDE-14F) and published items from schwartz/tempered,
$L^p$-convention, Parseval/Fourier-coefficient and MT-CA-1 endpoint pages; the PDE plan records the
FR-6-to-PDE-11/PDE-14F comparison explicitly, so the pair is a designed reconciler, not a duplicate
of either PDE page.

## Inventory against the prose design

The manifest matches the FR-6 design item-for-item and in order: 12 A items
(`def-translation-invariant-fourier-multiplier-on-schwartz-space` … `cor-sobolev-duality-from-the-fourier-pairing`)
and the 5 B leaves (`ex-heat-and-poisson-semigroups-as-fourier-multipliers`,
`ex-translation-and-differentiation-multiplier-symbols`,
`rem-fefferman-ball-multiplier-obstruction`,
`rem-jump-multipliers-can-be-bounded-outside-mihlin`,
`ex-negative-sobolev-order-containing-a-dirac-mass`). An ID-level diff against lines 624–647 found
17 of 17 design IDs present, none extra, with A order equal to the design prefix and B order equal
to the design suffix. The two recorded remarks are `proved_here: false`; both carry primary or
secondary sources and supply no proof. No B item is a dependency target, the page caps (100) are far
from binding, and the A page’s enrichment over the one-line design rows stays inside the designed
subject: the shift lemma absorbs Dyatlov’s order-inclusion and derivative-mapping properties
(coverage rows marked `inline`), and the fractional item is the PDE-14F re-export rather than a new
definition.

The declared subject is covered: multiplier definitions with an honest partial domain and the
$p=\infty$ non-uniqueness caveat; the exact essential-supremum $L^2$ norm; the $L^p$ norm definition;
the Mihlin derivative count $\lfloor n/2\rfloor+1$ with the value at $0$ declared irrelevant;
Hausdorff–Young on $\mathbb T$ and on $\mathbb R^n$ for $1\le p\le2$ with endpoint readings; the
polynomial-multiplier form of distributional derivatives; the integer $W^{k,2}=H^k$ comparison with
both the bracket and $1+4\pi^2|\xi|^2$ weights and an explicit non-identity warning; the real-order
weighted-distribution characterisation with its defining norm; the bracket/Bessel-potential operator
definition with the two distinct symbols; the order-shift isometry; and the $H^{-s}$ conjugate-dual
corollary with an explicit pairing. The $L^p$ Mihlin theorem itself, the Littlewood–Paley
$W^{s,p}$ square-function characterisation, homogeneous $\dot H^s$ variants, and the
$M_p$-Banach-algebra completeness are assigned by the design to later pages or marked out-of-scope
with reasons; no in-run item asserts any of them.

## Source coverage, independently re-checked

- **Grafakos, *Classical Fourier Analysis*, 3rd ed.** I did not re-download the 647-page PDF
  (record: 5,349,812 B, `38c219d3c9013a85`, 647 pp.). I retrieved the book text at the recorded URL
  through the web tool and read the passage on Theorem 6.2.7: the multiplier may be singular only at
  the origin, is assumed $C^{[n/2]+1}$, and the theorem covers $1<p<\infty$ with weak $(1,1)$; the
  neighbouring comparison with condition (6.2.9) confirms the “almost half the differentiability”
  count the manifest adopts. This verifies the load-bearing derivative count and the §2.5 Lp/norm
  framework; I did not line-verify the §2.5.4–2.5.5 locators themselves.
- **Williams, *Notes on Harmonic Analysis*** — re-downloaded; byte count 736,373 and SHA-256 prefix
  `05c37240004db213` match the record exactly. Read in the extracted text: Definition 3.11 (Lp
  multiplier; bounded symbols are L2 multipliers; Hilbert transform is an Lp but not L1 multiplier),
  Remark 3.12 (“the characteristic function of the unit disk is not an Lp multiplier on $\mathbb R^n$
  when $n>1$ and $p\neq2$”), Theorem 3.13 (Mihlin with $|\alpha|\le d+2$ derivatives, weak $(1,1)$
  and strong $(p,p)$), §3.1 (Hilbert transform $=$ multiplier $-i\,\mathrm{sgn}\,\xi$), and Corollary
  2.11 with the Poisson kernel $P(x)=c_n(1+|x|^2)^{-(n+1)/2}$. The manifest’s distinction between
  Williams’ stronger $d+2$ count and the adopted Grafakos count is accurate, and the heat/Poisson
  example’s Williams locator is real.
- **Laugesen, *Harmonic Analysis Lecture Notes*** — re-downloaded; 887,135 B and prefix
  `b1ef00490b91e492` match. Chapter 13 states the circle Hausdorff–Young theorem
  $\widehat{\cdot}:L^p(\mathbb T)\to\ell^{p'}$, $1\le p\le2$, proves it by Riesz–Thorin between the
  $L^1\to\ell^\infty$ and $L^2\to\ell^2$ endpoints, and records failure for $p>2$; Theorem 17.4
  states and proves the Euclidean version from the $L^1$ and $L^2$ endpoint bounds. Both manifest
  items’ claims and the published-endpoint-corollary route check out.
- **Dyatlov, 18.155 notes** — re-downloaded; 4,008,136 B and prefix `c9723c57a1e2b770` match.
  Proposition 12.1 gives the integer equivalence with $(1+|\xi|^2)^{k/2}\widehat u\in L^2$;
  Definition 12.3 defines $H^s$ by $\langle\xi\rangle^s\widehat u\in L^2$ with the displayed norm;
  properties (1)–(5) supply Hilbert structure, the inclusion $H^s\subset H^t$ for $s\ge t$, integer
  norm equivalence and $H^0=L^2$, Schwartz density, and $\partial_{x_j}:H^{s+1}\to H^s$ bounded. The
  manifest’s fractional item, shift lemma (with the $2\pi$ conversion giving bound $2\pi$) and
  Dirac endorsement all track the source.
- **Fefferman (1971)** and **Melrose Ch. 3** were not re-downloaded here. I read Fefferman’s Theorem 1
  from a public scan: “T is bounded only on $L^2$ ($n>1$)”, with the reduction to $p>2$ and duality
  for $p<2$, matching the B remark’s strict range. Melrose is a secondary route for the integer
  characterisation whose load-bearing content is independently covered by Dyatlov Proposition 12.1.

## Checks re-run on current disk

| Check | Result |
|---|---|
| `node tools/coverage-checklist.mjs research/frontier-36-complete-batch-13.coverage.json --require-destination` | 1 page, 33 harvested results, 0 errors, 0 warnings |
| `node tools/item-dependency-levels.mjs check --run frontier-36-complete` | 897 items across 60 pages, consistent (max level 18) |
| Dependency resolution script over all 17 owned items | 78 occurrences over 40 distinct dependencies: 24 published (all `status: published`), 16 in-run, 0 unresolved; no item depends on a B-page item; no page-order forward reference |
| Whole-run reverse-dependency scan | FR-6 has exactly one in-run consumer page (its B companion) and no other in-run item references |
| Design/manifest ID diff and plan-spec order check | 17/17 IDs, order A 458.02601 < B 458.02602, requires = B→A only |

(`node tools/audit-manifest.mjs` reports 17 `missing-source` rows because none of the 17 items is
authored yet — expected at Step 3a, not a scope finding.)

## Observations for the owner and the Step 3b author (not item approvals)

1. **Mihlin $L^p$ theorem is a designed forward seam, not a gap here.** FR-6 defines the symbol class
   and proves the $L^2$ bound only; FR-8 owns `thm-mihlin-fourier-multiplier-theorem` (plan line 731)
   and both FR-6 remarks say so and are `proved_here: false`. The Step 3b author should keep
   the two remarks strictly non-load-bearing so no in-run proof acquires an unbuilt FR-8 premise.
2. **Design correction to the jump remark is mathematically right.** The old design sentence claimed
   the unshifted $\mathrm{sgn}\,\xi$ fails the punctured Mihlin condition; it does not (it is constant
   on each component and its only jump is the excluded origin). The scaffold’s $\mathrm{sgn}(\xi-1)$
   has the intended nonzero-frequency jump, and the modulation-conjugacy claim matches Williams §3.1
   plus Grafakos §2.5.5 frequency-translation invariance. No scope change is needed.
3. **Hausdorff–Young is stated only for $1\le p\le2$, and the source’s $p>2$ failure is not an
   item.** Laugesen records the failure; the design’s boundary note says Hausdorff–Young “is not
   reversed past 2”. This is a deliberate sharpness omission, not an unstated converse — but if the
   owner wants the boundary visible on the page, a one-line B remark would be the natural carrier.
   I did not treat it as an omission of the intended subject.
4. **`requires` prose and current edges differ; the current edges are an owner-tracked amendment.**
   The binding plan table row (line 67, matching the committed `plan-spec.json`) lists seven
   prerequisites; the current `plan-spec.json` and batch-13 manifest list four:
   PDE-11, PDE-14F, MT-CA-1 and `orthonormal-bases-parseval-and-fourier-series`. The four dropped
   pages are published and appear in the Step-1 drift closure; three of them are still consumed at
   item level (schwartz, tempered and MT-16c items are direct deps — MT-17 has no declared edge and
   looks like a stale design-order row); the added Parseval/Fourier-coefficient page is
   required by the periodic Hausdorff–Young item’s direct deps. Scheduling and item resolution are
   sound; the plan prose (2026-09-22) and `plan-spec.json` are now out of step, and Step 4 splicing
   should reconcile the prose row with the on-disk edges.
5. **Coverage-record nuance.** Five items have no source row pointing at them by name
   (`def-translation-invariant-fourier-multiplier-on-schwartz-space`,
   `lem-weak-derivatives-are-polynomial-fourier-multipliers`,
   `def-japanese-bracket-bessel-potential-operator`,
   `ex-heat-and-poisson-semigroups-as-fourier-multipliers`,
   `ex-negative-sobolev-order-containing-a-dirac-mass`); they sit on locators shared with other
   rows or on published suppliers (the tempered-transform differentiation identity) and on local
   calculations. I verified the Williams Poisson/heat backing and the Dyatlov bracket/definition
   backing; the Step 3b author should carry the exact locators into the item `sources` blocks and
   keep the Grafakos §2.1/§2.2 heat-convention claim honest.
6. **No published duplication found.** No published item states Hausdorff–Young at intermediate
   exponents, the Lp-multiplier norm definition, the Mihlin symbol class, or the Fourier
   characterisations of $H^s$; the published `rem-hausdorff-young-and-interpolation`,
   `ex-hausdorff-young-endpoint-exponent-arithmetic` and
   `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space` are orientation/endpoint/def
   companions, not duplicates.

## Limits of this review

- I verified inventory, ordering, dependency resolution, source identity (three exact hash-prefix
  matches), the load-bearing source statements, and the design/manifest correspondence. I did not
  verify item proofs, choice accounting, the scaffolders’ reading of every cited range, or the
  `inline`/`out-of-scope` dispositions row by row; those are Step 3b/5 duties.
- I did not re-fetch the Grafakos PDF or the Melrose chapter or Fefferman’s scan; my Fefferman
  reading used a public copy of the paper, and the Grafakos check used the recorded URL’s indexed
  text for Theorem 6.2.7. My Williams/Laugesen/Dyatlov downloads are byte- and hash-identical to
  the record, so the coverage’s source claims for those three stand on evidence I read directly.
- The plan-prose versus plan-spec `requires` difference in Observation 4 is reported as observed on
  disk; I did not adjudicate which document the owner intends to bind, and I made no edit.
- No owner scope receipt existed for this pair, and the second Step 3a task file for it
  (`…-a791aef1fc3cac25.task.md`) is byte-identical to the dispatched one (verified by `diff`).

## Decision

`sufficient`: the planned definitions, results and examples cover the intended subject —
domain-qualified Fourier multipliers, the exact $L^2$ bound, the $L^p$ multiplier and its norm, the
Mihlin symbol convention, Hausdorff–Young on the circle and on $\mathbb R^n$ in its true range, and
the Fourier characterisations of the PDE-owned Sobolev spaces including the integer comparison, the
real-order characterisation, the Bessel-potential shift and the duality corollary — backed by six
source treatments whose load-bearing claims I re-read against hash-matched or directly fetched
texts, with every declared dependency resolving to a published or in-run supplier and no in-run
consumer left unsatisfied. No enrichment or pair merger is requested.
