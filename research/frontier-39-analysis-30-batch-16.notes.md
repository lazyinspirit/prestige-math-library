# Batch 16 construction handoff — frontier-39-analysis-30 (Constrained Variational Problems and Variational Inequalities)

## Scope and readiness

The single commissioned A/B pair was scaffolded from design PDE-22
(`research/plan-pde-track.md` L1991–L2046, read together with the PDE-22
additions table at L3752–L3766 and the source-audit row at L3399). A page:
`constrained-variational-problems-and-variational-inequalities` (order
458.041, `pde`); B page:
`constrained-variational-problems-and-variational-inequalities-examples`
(458.042). Only this batch's artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-16.pages.json` (33 items: 25 on A,
8 on B; the 100-item page cap is respected), the coverage record
`research/frontier-39-analysis-30-batch-16.coverage.json` (2 pages, 63
harvested headings, 14 fetch-stamped source entries), the cross-batch input
`research/frontier-39-analysis-30-batch-16.cross-batch-dependencies.json`
(46 rows: 1 page + 45 item), the 33 Step-1 readiness records
`research/frontier-39-analysis-30-step1-<item>.json`, and this note. No
published item, shared plan, engine state, verdict or other batch was edited.

`research/frontier-39-analysis-30-owner-authoring-direction.md` does not
exist (checked before construction and again before recording), so the
binding materials are the run plan, the design section and the Alpha drift
verdict for this page: **no-drift**, order 458.041
(`research/frontier-39-analysis-30-alpha-step1-drift.md`, section
`constrained-variational-problems-and-variational-inequalities`; its line
anchors 1972–2027/3721–3735 point at the same PDE-22 content — the plan file
has been edited since the drift, and the current anchors are
L1991–L2046/L3752–L3766). The drift's constraints were followed: the
split-surjective Banach implicit theorem and the level-set-curve realisation
are local items (A3, A4) and the published finite-dimensional implicit
theorem is deliberately not used; complementarity and the Lewy–Stampacchia
bound are stated under explicit measure/order regularity, and no distribution
product is formed without hypotheses.

Of the 33 items, 32 are recorded `ready` and 1
(`thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class`) is
recorded `escalated` with its exact uncertainty. All 14 A-page design items
and all seven A additions are present; all five B-page design items and all
three B additions are present. Four further local suppliers were minted
beyond the two tables, each because a design step would otherwise reach
through an unminted or out-of-scope interface:

- `lem-functionals-vanishing-on-the-common-kernel-of-an-independent-family`
  (finite duality: an annihilated common kernel makes a functional a unique
  linear combination) — the explicit linear-algebra supplier for both
  multiplier rules;
- `lem-the-differential-annihilates-the-tangent-kernel-at-a-constrained-extremum`
  — the Fermat half of the design's "missing step" (the design names the
  curve-realisation half);
- `lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive` —
  the contraction property of the projection used by the Stampacchia
  fixed-point map;
- `lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions`
  — the L² sign transfer used by the complementarity corollary.

No design claim was dropped or weakened; the two scope qualifications are
recorded below (the escalated class for the Lewy–Stampacchia bound, and the
`[CV]` absence record).

## Design, plan and published-content reconciliation

1. **Plan requires versus the design prose.** `research/plan-spec.json`
   (orders 458.041/458.042) declares exactly one A-page prerequisite,
   `the-direct-method-and-euler-lagrange-equations` (in-run draft, batch 15),
   and the B page requires its A companion. The design prose additionally
   names PDE-15–PDE-17 and PDE-21, FA-2, FA-5, FA-7–FA-10 and FA-13, and the
   published Banach fixed-point theorem. The plan controls; every additional
   input is consumed at item level and is either published (124 of the 217
   dependency edges land on 51 distinct published items) or an in-run draft
   of batches 4, 9, 10, 11, 14 and 15 (45 edges), all recorded as
   cross-batch rows. **Conflict recorded.**

2. **Design additions all minted.** A: `lem-tangent-space…` (A5),
   `lem-lagrange-multiplier-is-unique…` (A10),
   `lem-hilbert-projection-characterisation-by-a-variational-inequality`
   (A11), `thm-lipschitz-stability…` (A17),
   `thm-lewy-stampacchia-bounds…` (A21, escalated), `lem-absolute-value…`
   (A22), `cor-obstacle-reaction-is-supported…` (A20). B:
   `cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible`,
   `cex-dependent-equality-constraints-have-nonunique-multiplier-vectors`,
   `ex-one-dimensional-obstacle-reaction-is-supported-on-the-contact-set`.

3. **Deliberate overlap, recorded for Step 3.**
   `lem-hilbert-projection-characterisation-by-a-variational-inequality`
   restates the published `thm-hilbert-projection-variational-characterization`
   with the page-local sign convention ⟨u−x, v−u⟩ ≥ 0 (the published item
   writes Re⟨x−u, v−u⟩ ≤ 0) and with the projection notation consumed by
   `thm-stampacchia-variational-inequality` and
   `lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive`.
   The overlap and its reason are in the item strategy and in the Step-1
   record; it is a convention-local copy, not a weakening, and no Recorded
   result is consumed to prove a replacement.

4. **Source re-sourcing.** The design's source-audit row ([T] Ch. 13 §3;
   [E] §§8.3–8.4; [CV] Ch. 7; [LS] Ch. 9) was followed where obtainable:
   [T] Chapter 13 §§1–3 (pp. 293–305) and [LS] Chapter 9 (pp. 51–56,
   arXiv:1203.2344). [CV] Chapter 7 was read in full (pp. 67–71) and contains
   finite-dimensional multipliers and the spectral variational
   characterisation but **no obstacle problem and no variational
   inequality**; that absence is recorded as a disposition, and the
   obstacle/Stampacchia material is sourced to [AN], [OK], [YK], [BRE],
   [NA], [OU] and [GT]. [E] §§8.3–8.4 and [ACM] Chapter 1 were not obtained
   from this environment (no full text retrieved; not cited); the replacement
   treatments cover the same results. The design's [B]
   "convex-projection/variational material" is re-sourced to [BRE] Theorem
   5.6 and [OK] §§1.2–1.3.

5. **Design warnings preserved.** The unit sphere is explicitly *not* used
   as a weakly closed set: its failure is the B-page counterexample
   `cex-the-ltwo-unit-sphere-is-not-weakly-closed-in-an-infinite-dimensional-hilbert-space`
   and the repair (strong L² compactness preserving the normalisation) is A2.
   The obstacle constraint is never differentiated: its first-order
   information is the variational inequality, and complementarity is carried
   by the reaction distribution/measure (A14, A19, A21, A23). Nonemptiness of
   the obstacle set is a theorem hypothesis, stress-tested by
   `cex-obstacle-admissible-set-can-be-empty-when-trace-and-obstacle-are-incompatible`.
   Well-definedness (a.e. order, representative independence) is recorded in
   the definition item A9.

## Sources and harvest

Fourteen source entries — 10 on the A page, 4 on the B page; **all 14
fetch-verified** (`source-fetch-check --stamp` stamps in the coverage file),
11 distinct URLs live under `url-sweep` (11/11, 0 failed, 0 recoverable).
Locators read include:

- [T] Teschl, *Partial Differential Equations* (392-page archived text):
  Ch. 13 §§1–3, printed pp. 293–305 (Lemma 13.5, Theorem 13.6, Example 13.9,
  the unit-sphere discussion).
- [CV] Cristoferi, *Calculus of Variations* lecture notes: Ch. 7, printed
  pp. 67–71 (read in full; absence record as above).
- [LS] Laugesen, *Spectral Theory of PDE*, arXiv:1203.2344: Ch. 9, printed
  pp. 51–56 (Rayleigh and Poincaré minimax principles).
- [SID] Sideris, *ODE and Dynamical Systems*: Theorem 5.7 and its contraction
  proof, printed pp. 82–85.
- [YK] Yen–Kim, *Acta Math. Vietnam.* 26 (2001) 407–417: Theorems 2.1–2.3
  and estimate (2.4), printed pp. 408–409.
- [OK] Oden–Kikuchi, *Int. J. Eng. Sci.* 18 (1980) 1173–1284: Ch. 1
  §§1.2–1.5, printed pp. 1180–1189.
- [AN] Andersson, *The Obstacle Problem* (KTH notes): §3.1 pp. 26–28, §4.2
  pp. 36–38, Ch. 5 Lemma 5.3 pp. 45–47.
- [OU] Ouaro–Traore, *Port. Math.* 5 (2009) 127–152: Theorem 2.5 and display
  (2.10), printed pp. 131–132.
- [GT] Guibé–Mokrane–Tahraoui–Vallet, *Adv. Nonlinear Anal.* 9 (2020)
  591–612: Section 3, journal pp. 594–605.
- [BRE] Brezis, *Functional Analysis, Sobolev Spaces and PDE*: Theorem 5.6
  printed pp. 138–141; §§8.3–8.4 and 8.6, printed pp. 217–233.
- [NA] Nagurney, *Variational Inequalities* lecture notes: printed pp. 5–33
  (B page).

Every harvested heading carries a disposition: 63 rows in all
(included/inline/out-of-scope, each decline with its own reason), including
the `[CV]` absence record and two declined exercise rows ([T] Problem 13.7,
[CV] §7.2's C² remark).

**Source recovery ([GT], recover-before-replace).** hal.science now answers
automated readers with an Anubis bot wall: the originally cited record
`https://hal.science/hal-02366483/document` returned a 1,445-character
challenge page on six recorded attempts (preserved in the coverage entry as
`recovery_attempts_on_original_url`; the allowance was not reset). The
reader-facing URL is the Internet Archive snapshot
`https://web.archive.org/web/20240609034644id_/https://hal.science/hal-04312924v1/file/10.1515_anona-2020-0015.pdf`
of the same article's open-access HAL deposit hal-04312924v1 (23 pages,
journal pp. 591–612, DOI 10.1515/anona-2020-0015); the snapshot's extracted
text was compared with the locally inspected copy and agrees. The entry
records `original_url`, a `recovery_note` and the tool's own successful
`recovery_attempts` row (stamp: 684,713 bytes, sha256_16 3e5741fbebd2cbfc,
23 pages); the manifest's reference for the escalated item was updated to the
same recovered URL and the corrected locator. No mathematical content differs
between the two HAL deposits of the article.

## Cross-batch dependencies

`research/frontier-39-analysis-30-batch-16.cross-batch-dependencies.json`
supplies 46 rows (1 page + 45 item), all `status: open`, merged into the run's
unified ledger `research/frontier-39-analysis-30-cross-batch-dependencies.json`
by `frontier-dependency-ledger.mjs refresh` (348 edges run-wide; 46 with
`consumer_batch: 16`). The item rows point at in-run draft suppliers: batch 15
(14 edges — direct method/Euler–Lagrange, truncation, trace, Rellich,
Poincaré), batch 11 (11 — spectral/eigenbasis), batch 10 (12), batch 14 (4),
batch 4 (3), batch 9 (1). The page row records the plan's single `requires`
edge and the design-prose extras. `refresh --require-reviewed` exits 1 with
"Cross-batch review incomplete: supply every batch input and review every
declared edge" because batches 17–20 have no input yet and only 20 review rows
run-wide (of 296 across 348 edges) record a `verified` status — a stage-level residual outside this
batch, reported for the owner, not a batch-16 finding.

## Step-1 decisions

All 33 readiness records were written with `step1-decisions.mjs record` in
prerequisite (dependency-level) order, levels 0–14. The initial dispatch marked
32 `ready` and escalated A21. That escalation is resolved by the direct
variational-inequality truncation proof now recorded in A21's strategy. With
$w=u-\psi\ge0$ and reaction $\Lambda$, VI positivity gives $\Lambda(q)\ge0$
for every nonnegative $q\in H^1_0$ and testing at $\psi$ gives
$\Lambda(w)=0$. For $\theta_\delta=(1-w/\delta)^+$, positivity and
$0\le\varphi(1-\theta_\delta)\le\|\varphi\|_\infty w/\delta$ imply
$\Lambda(\varphi)=\Lambda(\varphi\theta_\delta)$. Expanding the weak form,
the principal truncation term is nonpositive by ellipticity; the principal
cross term, bounded drift and bounded potential terms vanish by dominated
convergence and $Dw=0$ on $\{w=0\}$. The $h=L\psi-f$ term converges to its
contact-set integral, yielding $0\le\Lambda\le h^+$ distributionally. The
statement now explicitly assumes distributional $L\psi\in L^2$, since $H^2$
of $\psi$ alone does not imply this for merely bounded measurable principal
coefficients. The tempting pointwise estimate for penalized reactions was
removed; it is false even for the one-dimensional Laplacian. [OU] Theorem 2.5
remains corroboration for the lower-order-free principal-part case under its
own entropy and obstacle hypotheses, not the proof of the bounded lower-order
extension. All 33 readiness decisions are now `ready`; A21's owner record was
refreshed after the proof repair. No pair was added or removed.

The initial full Step 1 snapshot had 734 items, 721 closed-ready, and 21
unfinished subjects. It is historical: the A21 escalation was resolved above,
the 11 batch-25 records and the stale batch-15
`cor-minimisers-are-classical-when-elliptic-regularity-applies` record were
refreshed, and a subsequent global scan found only that single batch-15 record
stale before it was recertified. The targeted batch-16 check now reports 33/33
ready. Global `manifest-deps` reports 734 items with no errors, global
`content-policy --manifest-only` reports 734 scoped items with no errors or
warnings, and `item-dependency-levels` reports no label/cycle errors; its only
findings are the eight expected empty page inventories in batches 17–20. The
owner re-armed the scaffold retry at 12:40Z; at that event snapshot the
controller had not yet emitted a batch-17 dispatch or passed the full Step 1
gate.

## Checks run (actual results)

Whole-run manifest dependencies/policy (all 30 batch manifests):

- `manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  → "734 item(s), 0 normalized, 0 error(s)".
- `content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  → "734 scoped item(s), 0 error(s), 0 warning(s)". (The batch-16-only
  invocation reports `batch-dependency-missing` for in-run drafts by design;
  the whole-run form is the meaningful one.)
- `manifest-integrity.mjs --run frontier-39-analysis-30`
  → "60 page(s) owed, 60 in the manifests / no scope drift".
- `validate-plan.mjs research/plan-spec.json`
  → "OK — declared page order is acyclic and consistent; no item-level
  cycles, forward references, B-page dependencies, or unresolved ids among
  the 1420 page(s) with item lists" (247 planned pages still carry no item
  list, as the tool's own note says).
- `item-dependency-levels.mjs check --run frontier-39-analysis-30`
  → exit 1, 8 errors, **all** "empty scaffold inventory" for the 8 pages of
  batches 17–20; no batch-16 error and no cycle anywhere. This is the
  expected whole-run result while batches 17–20 are unscaffolded.
- `frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  → "refreshed and deduplicated" (exit 0). With `--require-reviewed`: exit 1,
  "Cross-batch review incomplete…" (see above).
- `extcheck.mjs` → "OK — every recorded-not-proved statement is a cited
  remark with no proof, and every consequence is marked", with the run-wide
  `[unproved-on-published]` listings for already-published remark items
  (e.g. `thm-urysohn-lemma`, `rem-continuum-hypothesis`); none involves this
  batch's items.

Batch artifacts:

- `manifest-deps.mjs research/frontier-39-analysis-30-batch-16.pages.json`
  → "33 item(s), 0 normalized, 0 error(s)".
- `coverage-checklist.mjs research/frontier-39-analysis-30-batch-16.coverage.json --require-destination`
  → "2 page(s), 63 harvested result(s), 0 error(s), 0 warning(s)".
- `source-fetch-check.mjs --coverage …batch-16.coverage.json --stamp`
  → "14/14 source(s) fetch-verified (13 newly stamped, then 1 recovered and
  stamped)"; check mode → "14/14 source(s) fetch-verified".
- `url-sweep.mjs --coverage …batch-16.coverage.json --out /tmp/…/url-liveness.json --recover --fail-on-dead`
  → "11/11 live; 0 failed (0 previously fetched, 0 blocking); 0 recoverable
  from the archive; 0 suspect".
- `source-backing.mjs --coverage …batch-16.coverage.json --liveness … --require-verified`
  → "19 authored result(s) across 1 file(s), every one still backed by an
  openable source or documented alternative argument".

All commands were run against the final on-disk artifacts, after the last
manifest edit and before the Step-1 records were written; the records were
re-verified after the source-recovery edit (`step1-decisions.… check` lists
only the escalation from this batch).

## Published defects

No published defect was found in any item this batch consumes. The published
suppliers exercised here — `thm-hilbert-projection-variational-characterization`,
`cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball`,
`thm-banach-fixed-point`, `thm-riesz-representation-for-hilbert-space`,
`lem-form-to-bounded-operator-by-hilbert-riesz`,
`thm-rellich-compactness-from-w-one-p-zero-to-lp`,
`thm-poincare-inequality-for-w-one-p-zero`,
`cor-positive-negative-part-and-truncation-calculus-in-w-one-p`,
`lem-positive-part-of-a-zero-trace-function-has-zero-trace`,
`thm-lp-trace-operator-on-a-bounded-c-one-domain`,
`cex-lagrange-multiplier-rule-needs-a-regular-constraint`,
`thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`,
`thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue`,
`thm-courant-fischer-minimax-for-elliptic-eigenvalues`, the Banach-derivative
chain rule and the Riesz/finite-dimensional vocabulary — were checked against
the claims consumed here and are usable as stated. The one convention
difference (sign orientation in the projection variational characterisation)
is recorded in item A11's strategy and in §3 above; it is a convention, not a
defect, and the page-local item fixes it explicitly.

## Unresolved findings for owner/operator reconciliation

1. **Escalation (blocking this batch's unit).**
   `thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class` is
   recorded `escalated`; the unit cannot close until the owner re-scopes it
   (for example to a class covered by [OU] or [GT], or with the additional
   continuity/regularity hypotheses the classical proofs use) or supplies the
   missing comparison step. Exact uncertainty and evidence are in the Step-1
   record and the coverage entry's disposition text.
2. **Recovered source ([GT]).** Recorded under the recover-before-replace
   convention with `original_url` and the six preserved attempts; no action is
   required for gating, but Step-3 reading should use the Wayback snapshot
   URL.
3. **[E] and [ACM] not obtained.** §§8.3–8.4 of Evans and Chapter 1 of
   Attouch–Buttazzo–Michaille could not be retrieved as full text from this
   environment; the results they were to back are independently covered by
   the fourteen fetched sources. No source-count shortfall (a pair needs two
   independent treatments; both pages carry lecture-note/textbook/monograph
   treatments).
4. **Whole-run stage residuals outside this batch.** Batches 17–20 have empty
   scaffold inventories (8 `item-dependency-levels` errors and 8
   `step1-decisions` work entries); batch 25 and batch 15 carried stale
   records during this dispatch's final check because their authors were
   editing concurrently. No batch-16 item depends on a stale record; my own
   32 ready records were verified current at handoff.
5. **Cross-batch edge reviews.** All 46 batch-16 rows are `open`; the
   `--require-reviewed` gate also needs the missing batch-17–20 inputs before
   it can pass. Reviewing the edges is an Alpha/Step-3/Step-8 responsibility.


## Owner scope repair integration

The current manifest has 34 items: 26 A and 8 B. The local endpoint trace/truncation lemma supplies the interval obstacle cases; the five direct consumers now distinguish the one-dimensional trace from the existing multidimensional trace route. The B-page Rayleigh example uses the B10 sharp interval inequality rather than sine-basis completeness. The old interval-only B16-to-B14 review edge is marked removed and the new B16-to-B10 helper edge is open for Step 3 review. The historical Step-1 escalation wording in the source coverage has been updated to reflect the resolved owner scope.

## Step 3b closure refresh — 2026-10-05

Dependency-ordered current-hash review closed the three outstanding spectral
items. The stale owner-repaired first-eigenfunction receipt was independently
audited as mathematically sound and refreshed by the owner at hash
`1184c1bcc1fd0c95ab3c0e5619a52db3d685bd233b5e6919757af5079c1cc391`. The
higher-eigenvalue theorem was accepted at
`5cb232025e0abe1fbe9215c82af4115c6ccef5a58f8ab26c06cef87eeff056e1`.

The interval Rayleigh example's Statement and B16 scope remain unchanged. Its
proof now establishes membership in `H^1_0(0,1)` by an explicit sequence of
dilated smooth cutoffs and integration by parts, removing the unnecessary
AC-dependent endpoint-trace dependency while retaining the only-Countable-
Choice computation claim. Its dependency manifest and proof-contract
citations were synchronized, and the example was accepted at
`0dd4cb046924b0504a92e22a288b9d67924500bad5c490527ec71383b1a9fdca`.

Focused checks on these three items: proof-layout reported 3 items, 22 steps,
0 defects; strict proof-contract validation reported 3/3 checked, 0 errors and
0 warnings. All 34 B16 item decisions now resolve current and closed; no
workflow gate or tests were run.
