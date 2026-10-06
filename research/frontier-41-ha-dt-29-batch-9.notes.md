# Batch 9 notes — `pontryagin-thom-and-framed-cobordism`

Run `frontier-41-ha-dt-29`, role beta, label batch-9. Owned pair: DT-17
`pontryagin-thom-and-framed-cobordism` (A, order 549) /
`pontryagin-thom-and-framed-cobordism-examples` (B, order 550),
`differential-topology`. Outputs written: this batch's manifest
(`research/frontier-41-ha-dt-29-batch-9.pages.json`), coverage
(`research/frontier-41-ha-dt-29-batch-9.coverage.json`), per-item readiness
records (`research/frontier-41-ha-dt-29-step1-*.json`, 25 items), the URL
liveness and reharvest-plan artifacts for this batch, and this note. No
published content, shared plan, engine state or verdict was edited.

## 1. Design, plan and task comparison

- The task, the scope ledger and `research/plan-spec.json` agree exactly on the
  A/B ids, orders 549/550, category, companion pointers and the A page's
  `requires` array (the exact §12.4 array, seven pages). No conflict to record.
- The design section `research/plan-differential-topology-track.md` L970–1008
  lists the same 15 A rows and 5 B rows and adds the scope sentence
  "Requires: DT-15–DT-16; DG tubes/transversality; `spectra-and-stable-homotopy-groups`
  for the homotopy-group notation only." The plan's (and §12.4's) array is the
  superset actually used (it also names
  `higher-homotopy-groups-and-cofiber-sequences` and
  `hurewicz-whitehead-freudenthal-and-cw-approximation`); the plan controls and
  no mathematical conflict arises, since the added pages supply exactly the
  based-homotopy/approximation interfaces the design's proof route consumes.
- All seven declared prerequisite pages are published at this checkout
  (`smooth-cobordism-relations-groups-and-rings` and
  `thom-spaces-normal-data-and-collapse-maps` from `frontier-38-owner-30`, the
  DG Sard/Whitney pages, and the AT higher-homotopy/spectra/fibration pages), so
  the batch has no in-run consumer dependency and no cross-batch prerequisite
  input to supply. The cross-batch ledger records batch 9 only as a *supplier*
  to batch 10 (`the-hopf-degree-theorem`) and batch 11
  (`characteristic-numbers-and-cobordism-obstructions`) through their page
  `requires`; those are future consumer-side obligations, not batch-9 work.

## 2. Inventory and design deviations (all recorded)

The A page carries the design's 15 rows plus five prerequisite rows added on the
same page; the B page carries the design's 5 rows.

A-page order (20 items): `def-framing-of-a-normal-bundle`,
`def-framed-cobordism-of-embedded-submanifolds`,
`lem-framed-cobordism-is-an-equivalence-relation`,
`prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product`,
`def-pontryagin-thom-map-of-a-framed-submanifold`,
`lem-changing-framed-tube-data-changes-the-pontryagin-thom-map-by-based-homotopy`,
`def-pontryagin-thom-collapse-of-a-framed-neat-cobordism`,
`lem-framed-cobordant-submanifolds-have-homotopic-collapse-maps`,
`def-framed-regular-preimage-of-a-map-to-a-sphere`,
`lem-positively-oriented-bases-are-path-connected`,
`lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages`,
`lem-regular-value-choice-does-not-change-the-framed-cobordism-class`,
`lem-regular-preimage-after-collapse-recovers-the-original-framed-submanifold`,
`lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map`,
`lem-based-and-free-homotopy-classes-of-sphere-maps-agree`,
`thm-pontryagin-thom-correspondence-in-fixed-codimension`,
`def-stabilized-framed-cobordism-colimit`,
`lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map`,
`thm-stable-pontryagin-thom-identifies-framed-bordism-with-stable-stems`,
`rem-normal-framing-stable-normal-framing-and-tangential-framing-are-distinct-data`.

B page (5 items): `ex-framed-zero-manifolds-and-signed-points`,
`ex-pontryagin-thom-map-of-the-standard-framed-equator`,
`ex-framed-links-represent-elements-of-pi-three-of-s-two`,
`cex-changing-a-framing-can-change-the-pontryagin-thom-class`,
`ex-stabilizing-a-framed-submanifold-suspends-its-collapse-map`.

Five prerequisite rows were added, each on the same A page because no published
item supplies it and the design's own steps depend on it:

1. `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism` — the design's
   item 7 ("collapse the framed cobordism in a sphere times an interval") needs
   the boundary version of DT-16's collapse; DT-16 only defines the collapse of
   a compact boundaryless submanifold in a boundaryless ambient.
2. `lem-positively-oriented-bases-are-path-connected` — Milnor's Lemma 1 input
   for the design's item 9 (change of positive basis). The library has no
   published connectedness statement for $\mathrm{GL}^+(k,\mathbb R)$.
3. `lem-based-and-free-homotopy-classes-of-sphere-maps-agree` — needed to state
   the design's item 13 with $\pi_n(S^k)$ (based) rather than only free homotopy
   classes; Freed's Lemma 4.16 supplies the argument.
4. `def-stabilized-framed-cobordism-colimit` — the design's item 14 uses
   $\Omega^{\mathrm{fr}}_d$ without a home in the library; this row defines the
   stabilization colimit that the sources use (Ranicki Def. 6.16, Freed
   Prop. 5.21) and records its group structure.
5. `lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map`
   — the compatibility of equatorial stabilization with the suspension
   homomorphism that item 14 needs; the design only promised it inside the
   stable theorem and in a B example, and B-page items cannot be A-page
   dependencies.

Recorded deviations from the design text, with the reason in each case:

- **Design item 9 ("regular-value choice") is stated with its proof route
  reordered**: the homotopy-with-common-regular-value lemma
  (`lem-homotopic-maps-...`, the design's item 10) is proved first. Milnor's
  Lemma 2 (nearby regular values) is then absorbed into the rotation argument
  exactly as in Milnor's proof of Theorem A; no claim is lost.
- **Boundary signs are fixed by collar-decorated data.** The design's item 2
  says the definition "fixes the equivalence relation and boundary signs". The
  row therefore follows DT-15's Definition 1.19 style and makes the end collars
  part of the framed-cobordism data, so that the framing restriction at an end
  is literal and no inwards-normal sign is implicit.
- **Design item 13 is stated for $n\ge k\ge1$.** For $k>n$ both sides degenerate
  (no $(n-k)$-dimensional closed submanifolds versus the trivial group); the
  restriction loses nothing for the stable theorem, where $n=d+k$ and $d\ge0$.
- **Design B item 2 ("standard framed equator — obtain the suspension
  generator") is restated after checking the mathematics.** The canonical
  equatorial framing is the outward normal of the northern hemisphere and the
  framed equator is *null-cobordant* (Freed, Exercise 5.34: the normally framed
  equatorial sphere bounds the ball); its Pontryagin–Thom map is therefore
  nullhomotopic, and the suspension generator of $\pi_m(S^m)$ is realized by a
  positively framed *point* (B1), not by the equator. The example keeps the
  design's "suspension" content by verifying the $\sigma\leftrightarrow E$
  compatibility on the canonical equators and records the generator contrast;
  no true claim was weakened and no false "generator" claim was scaffolded.
- **Design B item 3 uses the fibration long exact sequence rather than Hopf
  invariant theory**, as the design asks. The computation
  $\pi_3(S^2)\cong\pi_3(S^3)\cong\mathbb Z$ uses only published A-page suppliers
  (numerable-bundle Hurewicz, the fibration LES, $\pi_k(S^1)=0$ for $k\ge2$,
  lower-dimensional sphere nullhomotopy, degree classification). The published
  `ex-hopf-circle-fibration` is homed on an examples page and is therefore not
  used as a dependency; the same argument is repeated locally.
- **Design B item 4 is scaffolded as a counterexample to framing-independence**
  of the underlying submanifold (`cex-` kind), with the null-cobordant framing
  versus the Hopf framing of the standard unknot as the two framings; this
  matches the design's "shows the framing is load-bearing".

## 3. Source record

Full texts used, all fetched and stamped by
`node tools/source-fetch-check.mjs --coverage research/frontier-41-ha-dt-29-batch-9.coverage.json --stamp`
(4/4 fetch-verified, first attempt for every URL, no retries and no drops; the
coverage file holds the `fetch_verified` stamps):

1. Daniel S. Freed, *Bordism: Old and New* —
   `https://people.math.harvard.edu/~dafr/bordism.pdf` (lecture-notes).
   Lectures 2–3 pp. 15–28 (Definitions 2.31, (2.32), (2.34), Theorem 2.35,
   Definition 3.8, Theorem 3.9, Lemma 3.12, Exercises 3.14–3.16); Lecture 4
   pp. 32–36 (Lemma 4.16, (4.42)–(4.43), Theorem 4.44); Lecture 5 pp. 40–43
   ((5.15)–(5.22), (5.25)–(5.26), (5.30)–(5.35)).
2. John Milnor, *Topology from the Differentiable Viewpoint* —
   `https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf`
   (monograph). Chapter 7, printed pp. 42–51: framing and framed cobordism
   definitions, Pontryagin manifold, Theorems A–C, Lemmas 1–4, the Product
   Neighborhood Theorem, the boundary and Hopf remarks, Problem 17.
3. Andrew Ranicki, *Algebraic and Geometric Surgery* —
   `https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro` (monograph).
   Chapter 6 §§6.1–6.2, electronic pp. 109–118: Definitions 6.1/6.11/6.14/6.16,
   Proposition 6.13, Examples 6.7/6.9/6.12/6.20, construction 6.8, 6.10,
   Theorem 6.17, Proposition 6.18, Remark 6.19.
4. John Milnor and James Munkres, *Differential Topology* —
   `https://www.maths.ed.ac.uk/~v1ranick/papers/difftop.pdf` (textbook).
   Chapter III §§3.1–3.16, PDF pp. 22–28: cobordism and the cobordism groups,
   tubular neighbourhood and Thom space, approximation on closed sets, and the
   well-definedness/surjectivity/injectivity of the Thom map λ.

Source-depth note: the design's DT-17 matrix names "MM Ch. III §§3.1–3.17"; the
fetched scan was read through §3.16 and the coverage locator says so. §3.17
begins the characteristic-number computation, which is DT-19's subject and is
not used by this pair. The coverage file gives a disposition for every heading
read (63 rows: included/inline/already-published/deferred/out-of-scope); the
only deferrals are the Hopf degree theorem (destination
`the-hopf-degree-theorem`, a planned in-run page) and the sharp stable range
(destination `hurewicz-whitehead-freudenthal-and-cw-approximation`).

## 4. Dependency verification

- Every declared dependency resolves to a published item file on disk or to an
  earlier item of this batch; no B-page-homed item outside this batch is used;
  no `proved_here: false` or Recorded result is consumed; no forward or
  circular edge exists. Checked with `tools/content-policy.mjs --manifest-only`
  (0 errors), `tools/manifest-deps.mjs` (25 items, 0 missing), and the run-wide
  `tools/validate-plan.mjs research/plan-spec.json` (no item-level cycle,
  forward reference, B-page dependency or unresolved id among the 1420 pages
  that currently carry item lists).
- Actual supplier interfaces were read in full, not inferred from ids:
  DT-16's collapse definition and its continuity/tube-independence lemmas, the
  transverse-preimage proposition (all four clauses), the neat-homotopy lemma,
  the trivial-bundle Thom proposition, the metric-independence lemma, the
  stabilization-of-Thom-space lemma and the stable-normal-bundle definition and
  independence theorem (all `frontier-38-owner-30`, `judge` pass; the two DT-16
  items whose judge stamps exist were checked against their proofs);
  DT-15's bordism, group and disjoint-union items; the DG Sard and Whitney
  approximation/tubular items; and the AT higher-homotopy, fibration and spectra
  items used in items 15 and 19. Hypotheses, directions (negative-gradient
  conventions are irrelevant here), coefficient choices (none; all integral are
  used only as $\mathbb Z$-gradings of homotopy groups) and axiom strength were
  checked: the countable-choice hypothesis $\mathrm{AC}_\omega$ enters exactly
  through the smooth normal-bundle structure and the compatible-chart lemma
  (DT-16), and every item that uses it declares it and says where.
- Two implicit uses were found in the strategy audit and given explicit
  published dependencies: the rotation family used for regular-value change and
  for based/free classes now declares
  `cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus`
  (`inner-product-spaces-and-orthogonality`), and the normal-form step of the
  collapse-after-preimage lemma now declares
  `thm-smooth-inverse-function-theorem-on-manifolds`
  (`rank-theorems-and-embedded-submanifolds`). Both pages are published A pages.
  The 13 readiness records whose transitive closure includes those three items
  were re-recorded against the current manifest (all re-recorded `ready`; the
  other 12 records were left intact).
- The two dependency invariants were checked: `dependency_level` is 0 exactly
  for the four items with no in-run dependencies and is otherwise
  one plus the maximum in-run dependency level (the B page's items are levels
  6–8 through their A-page suppliers). `node tools/item-dependency-levels.mjs
  check --run frontier-41-ha-dt-29` reports no error for any batch-9 item; its
  only errors are `empty scaffold inventory` for the batches that other Betas
  are still filling.
- Ready records: all 25 items recorded `ready` through
  `tools/step1-decisions.mjs record`, each with the examined dependency IDs;
  after the dependency refinement 13 records were re-recorded against the
  current manifest. `tools/step1-decisions.mjs check --run frontier-41-ha-dt-29`
  reports 148 items, 133 ready, with no batch-9 item outstanding; the run is not
  closed only because other batches still owe records or carry open items.

## 5. Published material findings (for the canonical ledger)

No mathematical defect was found in any actual prerequisite read for this
pair. One evidence-state finding is recorded for the owner, since these items
are actual prerequisites of batch-9 rows:

- **Publication-evidence gap (class `published-unaudited`).** The following
  declared prerequisites carry `status: published` but no
  `verification.audited` or `verification.verified` marker (most carry only a
  `judge` stamp; one carries neither judge nor audit):
  `lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms`
  (`verification: {precheck: pass}` only, no judge marker; used by
  `def-pontryagin-thom-collapse-of-a-framed-neat-cobordism` and
  `lem-homotopic-maps-with-a-common-regular-value-have-framed-cobordant-preimages`),
  and, with judge stamps only, `def-disk-bundle-sphere-bundle-and-thom-space`,
  `def-pontryagin-thom-collapse-of-an-embedded-submanifold`,
  `def-stable-normal-bundle-of-a-compact-smooth-manifold`,
  `def-unoriented-smooth-cobordism-of-closed-manifolds`,
  `lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint`,
  `lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy`,
  `lem-collar-gluing-and-corner-smoothing-give-transitivity`,
  `lem-cylinders-give-reflexivity-of-cobordism`,
  `lem-reversing-a-cobordism-gives-symmetry`,
  `lem-stabilizing-a-normal-bundle-suspends-its-thom-space`,
  `lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism`,
  `lem-tubular-charts-realize-a-prescribed-normal-identification`,
  `prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product`,
  `prop-transverse-preimage-carries-a-pulled-back-normal-structure`,
  `thm-disjoint-union-makes-bordism-classes-abelian-groups`,
  `thm-stable-normal-bundle-is-independent-of-the-embedding`.
  Evidence: `node tools/depcheck.mjs` at this checkout (833 repo-wide
  `published-unaudited` rows; all listed items belong to `frontier-38-owner-30`
  and were inherited as published at preflight). Planned repair: an owner audit
  or delegated `verification.verified` marker recording the already-completed
  frontier-38 Step-5 review of these items; no statement or proof change is
  proposed here. This is a publication-evidence gap and not a mathematical
  defect, and it does not block this batch's readiness records.

No other published defect, missing supplier or hypothesis mismatch was found in
the transitive closure actually used.

## 6. Checks run (actual results) and unresolved findings

| check | command | result |
|---|---|---|
| manifest items explicit | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-9.pages.json` | 25 items, 0 missing, 0 errors |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-9.pages.json` | 25 scoped items, 0 errors, 0 warnings |
| scope | `node tools/manifest-integrity.mjs --run frontier-41-ha-dt-29` | 58 pages owed, 58 present, no drift |
| coverage | `node tools/coverage-checklist.mjs <coverage> --require-destination` | 1 page, 63 harvested results, 0 errors, 0 warnings |
| full text | `node tools/source-fetch-check.mjs --coverage <coverage> --stamp` | 4/4 sources fetch-verified, 0 drops |
| URL liveness | `node tools/url-sweep.mjs --coverage <coverage> --out <batch liveness> --recover --fail-on-dead` | 4/4 live, 0 failed |
| source backing | `node tools/source-backing.mjs --coverage <coverage> --liveness <batch liveness> --reharvest-plan <batch plan>` | 20 authored results, every one backed |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | page order acyclic; no item cycle/forward/B-page/unresolved id among pages with item lists |
| external refs | `node tools/extcheck.mjs` | OK (no new findings) |
| forward refs | `node tools/fwdcheck.mjs` | OK (no new findings) |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | no batch-9 error; failures only for batches still holding empty shells |
| readiness records | `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` | run items grew as other batches scaffolded; final pass 148 items, 133 ready, no batch-9 item open; the run stays open only for other batches |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` | refreshed; batch 9 appears only as supplier to batches 10/11 |
| repo dependency spot-check | `node tools/depcheck.mjs` | pre-existing `published-unaudited` class, including the 17 items above; recorded, not batch-9-introduced |

Unresolved findings: none blocking this batch. The run-wide stage gates cannot
close while other batches hold empty manifests or missing readiness records;
that is visible above and belongs to those batches. The B2 design restatement
and the `published-unaudited` evidence class are the only recorded deviations,
and both are noted for the owner/operator reconciliation. Step-3 authoring,
review and the engine gate follow; none of the readiness records here is an
independent mathematical approval.
