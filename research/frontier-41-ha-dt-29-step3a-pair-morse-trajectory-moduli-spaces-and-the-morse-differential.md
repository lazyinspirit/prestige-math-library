# Step 3a scope review — `morse-trajectory-moduli-spaces-and-the-morse-differential`

- Run `frontier-41-ha-dt-29`; role alpha; label
  `step3a-pair-morse-trajectory-moduli-spaces-and-the-morse-differential-383d424f68e90e12`.
- A page `morse-trajectory-moduli-spaces-and-the-morse-differential` (order 537, batch 5,
  differential-topology); B page `morse-trajectory-moduli-spaces-and-the-morse-differential-examples`
  (order 538, companion). Scope review only; no scaffold, manifest, coverage, plan or item file was edited.
- Inputs read: DT-9 prose design `research/plan-differential-topology-track.md` L637–677, §8 source
  matrix L1659, §12.4 requires L2227, §12.6 disposition L2442, §12.5 DT-4 row L2256–2268;
  `research/plan-spec.json` pages 537/538; `research/frontier-41-ha-dt-29-batch-5.pages.json`
  (17 A + 5 B items), `…-batch-5.coverage.json`, `…-batch-5.notes.md`,
  `…-batch-5.cross-batch-dependencies.json` (`[]`); `research/frontier-41-ha-dt-29-scope-ledger.json`;
  `research/frontier-41-ha-dt-29-owner-authoring-direction.md`; the 22 `step1-*` readiness records
  (all `ready`); the 63 distinct published dependency items; the batch-6 consumer manifest; the
  published-consumer-supplier ledger and the published `def-parametrized-morse-trajectory-space`.
  Current run state: Step 3a attempt 1 in flight; no prior owner/review scope receipt exists for this
  page (`tools/step3-decisions.mjs check --phase scope` reports "current scope review required").

## Verdict

`sufficient` for `morse-trajectory-moduli-spaces-and-the-morse-differential`. The 17 A and 5 B
manifest items realize the design's 17 A rows and 5 B rows with the design ids unchanged; the two
recorded construction differences (gluing lemma ordered before its consumer, compactness theorem
strengthened with the metrizability/second-countability/openness clauses its consumers need) are
within the design's content and are documented in the batch-5 notes §2. All 179 dependency edges of
the pair resolve (0 unresolved; 63 distinct published dependencies all `status: published`; all 15
distinct in-run dependencies are inside batch 5), and every `[[link]]` in a statement or strategy is
declared in that item's `deps`. No prerequisite required by any scaffolded claim is absent from both
the published library and the current scaffold, so no scaffold addition is needed to reach the
design's scope. Three non-blocking findings are recorded below for Step 3b/owner routing: choice
hypothesis declarations, one undisposed design source range, and two published-content items.

## Design → scaffold mapping (scope, not proof)

| Design row (L637–677) | Realization in the batch-5 manifest |
|---|---|
| 1 `def-mod-two-morse-chain-group` | same id; free $\mathbb Z/2$-module on $\operatorname{Crit}_k(f)$, finite basis from the published `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points` |
| 2 `def-broken-morse-trajectory` | same id; finite strings of nonconstant components through strictly descending critical points, with $\overline{\mathcal M}(p,q)$ |
| 3 `def-geometric-convergence-to-a-broken-morse-trajectory` | same id; independent time shifts + $C^\infty_{\mathrm{loc}}$ convergence, with the $W(v,U^-,U^+)$ neighbourhood basis and quotient topology on $\mathcal M(p,q)$ |
| 4 `thm-morse-trajectory-compactness-up-to-breaking` | same id; subsequential geometric convergence, plus the metrizable/second-countable/open-dense/height-homeomorphism clauses consumed by rows 6, 9, 10 (design "load-bearing finiteness theorem") |
| 5 `lem-breaking-length-is-bounded-by-index-drop` | same id; index strictly drops at every break, $r\le\lambda(p)-\lambda(q)$, finite product stratification, drop-two unique-intermediate-corner case; cites the published DT-4 lemma instead of re-minting it |
| 6 `cor-index-one-trajectory-moduli-spaces-are-finite` | same id; $\mathcal M(p,q)$ finite for index drop one, making differential coefficients finite |
| 7 `def-mod-two-morse-differential` | same id; $\partial_k p=\sum_q \#\mathcal M(p,q)\bmod 2$, finite sums, order-independent |
| 8 `thm-index-two-compactification-is-a-compact-one-manifold-with-boundary` | same id; compact metrizable second-countable smooth 1-manifold with boundary, interior $\mathcal M(p,q)$, boundary the finite union of once-broken products |
| 9 `lem-gluing-broken-index-two-trajectories-gives-collar-ends` | same id; one-sided collar charts $\psi:[0,\delta)\to\overline{\mathcal M}(p,q)$ with eventual containment (ordered before row 8, the recorded design-order correction) |
| 10 `thm-mod-two-morse-differential-squares-to-zero` | same id; even boundary parity of the compactified 1-manifolds |
| 11 `def-orientation-line-of-a-morse-critical-point` | same id; $o_p=\det T_pW^u(p)$, no ambient orientation |
| 12 `lem-unstable-orientations-induce-trajectory-moduli-orientations` | same id; co-orientation transport, oriented transverse intersections, comparison sign $\epsilon(\gamma)$, flow-first orientation of $\mathcal M(x,y)$ |
| 13 `def-signed-morse-differential-over-the-integers` | same id; free $\mathbb Z$-module on $\operatorname{Crit}_k$, $\partial_k p=\sum_q(\sum_\gamma\epsilon(\gamma))q$ |
| 14 `lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli` | same id; outward-normal-first boundary sign $=\epsilon(\gamma_1)\epsilon(\gamma_2)$ on each broken end, matching DG `def-induced-boundary-orientation` |
| 15 `thm-integral-morse-differential-squares-to-zero` | same id; oriented boundary cancellation, integral chain complex |
| 16 `rem-morse-homology-over-the-integers-does-not-require-orientability-of-m` | same id; orientation lines replace an ambient orientation |
| 17 `rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package` | same id; records the three uses of closedness and the noncompact properness package |
| B1–B5 | `ex-morse-complex-of-the-circle`, `ex-morse-complex-of-the-two-sphere`, `ex-broken-trajectories-in-an-index-two-torus-moduli-space`, `ex-changing-an-unstable-orientation-changes-two-basis-signs`, `cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero` — identical ids to the design; the counterexample realizes design row 5's "shows item 12 is essential" and is consumed by no later item |

No design item was dropped, narrowed or replaced, and no item outside the design's A/B inventory was
added. The plan's own boundary is respected: DT-4's closure note (L463) states that the compactness
and boundary descriptions of the index-one/two spaces belong to DT-9, and DT-9 supplies exactly
those (rows 4, 6, 8, 9) while leaving independence, continuation and singular comparison to DT-10.

## Source coverage

- A page, six full-text sources with `fetch_verified` hashes: Audin–Damian, *Morse Theory and Floer
  Homology*, Ch. 3 §§3.1–3.4, printed pp. 55–78 (whole 628-page book, `e162409dc3c24e7b`);
  Ritter, *Morse Homology*, Lectures 17–19, PDF pp. 76–91 (`cb69c17956ad7b25`); Nicolaescu,
  *An Invitation to Morse Theory*, §2.5, pp. 60–66 (`c599a63debd5e6e6`); Cohen, *Bundles, Manifolds,
  and Homotopy*, Ch. 13.3–13.4 + App. A §1–2, pp. 507–534 (`3bd16984e16b22e8`); Fowdar,
  *A Functional Analytic Approach to Morse Homology*, §§5–8, pp. 35–75 (`acda87fd14a8216f`);
  Abbondandolo–Majer, *Lectures on the Morse Complex*, §2.8, pp. 69–73 (`f213f283987b78bd`).
  B page additionally anchors Audin–Damian pp. 58–59/70–71, Ritter PDF pp. 76–78/86–88 and Cohen
  pp. 522–523.
- `coverage-checklist --require-destination` reports 2 pages, 55 harvested result rows, 0 errors,
  0 warnings; every non-`included` row names a reason and, where deferred, a destination
  (Audin–Damian §3.1.c/§3.4, Nicolaescu Cor. 2.5.2 and Fowdar §8 → DT-10; the cornered-boundary
  and framed-flow rows are `out-of-scope` with stated consumers elsewhere). Two independent full
  treatments plus a monograph and a third textbook back every A-page item; the two hardest items
  (compactness/gluing; the boundary sign) each carry a further analytic treatment. The boundary-sign
  computation that Audin–Damian §3.4 explicitly leaves to the reader is supplied by Fowdar §7
  Thm. 7.5 and Abbondandolo–Majer §2.8 (rows `included`, item-linked).
- The plan's §7 design source line names `N §§2.5 and 4.4--4.5`. §2.5 was harvested; N §§4.4–4.5
  was left without any disposition in the coverage record (batch-5 notes §2 says it "was not needed
  by any item statement"). I downloaded the same PDF (1,821,860 bytes, matching the recorded
  `fetch_verified`) and read §4.4, pp. 183–186: Proposition 4.4.2 (M̄(p,q) compact — proof left to
  the reader as an exercise), Proposition 4.4.3 (the tunneling space is homeomorphic to a smooth
  manifold of dimension $\lambda(p)-\lambda(q)-1$), and Example 4.4.4 (the tilted torus, whose
  $\mathcal M(p,v)$ is four disjoint line segments — the B3 picture). Because the plan's §8 source
  matrix for DT-9 (L1659) lists only Audin–Damian, Ritter and Cohen, and the scaffold's A–D
  Thm. 3.2.2/3.2.7 + Ritter 17–18 + Cohen App. A + Fowdar cover the same results, this is a
  record-keeping gap, not a mathematical omission. Recommended (non-blocking): record a disposition
  for N pp. 183–200 (superseded by the item-linked rows) when the coverage is next touched.

## Prerequisite findings (unmet-prerequisite check)

- **Resolution (confirmed).** 179 dependency edges: 56 to in-run items (15 distinct ids, all inside
  batch 5 — the cross-batch input file is `[]`), 123 to published items (63 distinct ids, every one
  `status: published`); 0 unresolved. 137 distinct `[[…]]` links across statements and strategies
  all resolve and are declared in the consuming item's `deps`. The four plan `requires`
  (`gradient-like-vector-fields-and-morse-trajectories`, `stable-unstable-manifolds-and-morse-smale-transversality`,
  `connections-levi-civita-and-parallel-transport`, `manifolds-with-boundary-collars-and-orientations`)
  are published and match plan §12.4 L2227 exactly. All 22 step-1 readiness records are `ready`, and
  the manifest carries no `source_resolution` or escalation row. **No prerequisite claim needed by
  any scaffolded item is absent from both the published library and the current scaffold.**
- **Choice-hypothesis accounting (confirmed from disk; for Step 3b repair, not an omitted topic).**
  Several consumers whose statements claim no choice hypothesis cite suppliers that are stated
  under AC or AC_ω, and the library's published convention carries that hypothesis in the consumer
  statement (e.g. `thm-mod-two-intersection-number-is-homotopy-invariant`, "Assume AC_ω"):
  1. `thm-mod-two-morse-differential-squares-to-zero` (statement unconditional; strategy cites
     `lem-boundary-of-a-compact-one-manifold-has-even-cardinality`, whose statement is
     "Assume $\mathrm{AC}_\omega$"; it also depends on the AC-declared `thm-index-two-compactification-…`).
  2. `def-mod-two-morse-differential` and `def-signed-morse-differential-over-the-integers` assert
     finite sums via `cor-index-one-trajectory-moduli-spaces-are-finite` ("Assume the Axiom of
     Choice") while declaring no choice assumption.
  3. `lem-unstable-orientations-induce-trajectory-moduli-orientations` cites
     `prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold`
     ("Assume $\mathrm{AC}_\omega$").
  4. Four of the five B items — `ex-morse-complex-of-the-circle` (AC-declared
     `cor-index-one-trajectory-moduli-spaces-are-finite`),
     `ex-broken-trajectories-in-an-index-two-torus-moduli-space` (AC-declared
     `thm-index-two-compactification-…`), `ex-changing-an-unstable-orientation-changes-two-basis-signs`
     and `cex-a-naive-signed-count-without-the-quotient-orientation-can-fail-d-squared-zero` (both
     AC-declared `thm-integral-morse-differential-squares-to-zero` and the latter also
     `lem-boundary-orientation-…`) — cite AC-hypothesis results, while only
     `ex-morse-complex-of-the-two-sphere` uses no choice-dependent supplier. For examples the
     published practice records the cost in a fact (e.g.
     `ex-latitude-and-meridian-intersections-on-the-torus` [F4], "under $\mathrm{AC}_\omega$").
  5. The six items that do declare AC (compactness, `cor-index-one-…`, gluing, index-two,
     boundary-orientation, integral $d^2=0$) still need the published bridge
     `thm-choice-implies-dependent-implies-countable-choice` (AC ⇒ DC ⇒ AC_ω ⇒ …) in their `deps`
     to discharge the AC_ω/DC hypotheses of `thm-metric-compactness-equivalences` and
     `lem-compact-metric-space-has-a-countable-dense-subset`.
  Recommended owner/Step 3b action: declare the exact hypotheses (AC or AC_ω) on the four items in
  1–3 (plus the cited B examples where the AC-declared results are invoked) and add the bridge
  citation where AC is spent, or supply choice-free arguments locally. If
  instead the owner wants the unconditional versions preserved with no declared hypothesis, a new
  local choice-free finiteness/parity supplier would be a scaffold addition requiring owner
  approval; declaring the existing published hypotheses already closes the gap, so this is recorded
  as an authoring repair, not as an unmet prerequisite blocking scope. *Uncertainty:* a choice-free
  route for the parity/finiteness steps plausibly exists (for a fixed compact 1-manifold the finitely
  many components argument is standard ZF), but the scaffold's stated route does not establish it
  and I did not verify such a route.
- **Published-content items (carried from batch-5 notes §7; owner routing, not scope gaps).**
  (a) `items/def-parametrized-morse-trajectory-space.md` L26 has `p,qquad` (missing backslash);
  the item is published and this pair consumes it. (b) The ledger U-P entry for
  `lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator`
  (`research/published-consumer-supplier-ledger.md` ≈ L1440–1462) appears superseded: the on-disk
  item (verification 2026-09-24) now depends on the published
  `lem-first-order-asymptotically-hyperbolic-operator-is-fredholm`, so the ledger should be
  reconciled. Neither affects the scope verdict.

## Library role and consumers

- The pair is the analytic core of the Morse complex: chain groups, compactness/finiteness of
  trajectory spaces, the mod-two and signed differentials, and $\partial^2=0$ over $\mathbb Z/2$
  and $\mathbb Z$, with the orientation-line convention fixed once. It is the declared supplier of
  DT-10 `morse-homology-continuation-and-comparison` (batch 6, order 539), which consumes 16 of the
  17 A items (all but `rem-morse-homology-over-the-integers-does-not-require-orientability-of-m`),
  and, through DT-10 and later pages, of the surrounding Morse/handle/intersection theory. No other
  batch in the run consumes this pair; no consumer needs a claim the pair does not plan.
- Leaf invariant holds: every B item depends only on this A page's items or on earlier items of the
  same B page; no A item depends on any B item, and no item leaves batch 5 for its run-local
  suppliers. Scope hygiene against DT-10 is clean (independence, continuation and singular-homology
  comparison are deferred with destinations in the coverage record).

## Checks run (actual results)

| check | result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-5.pages.json` | 22 items, 0 errors |
| `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-5.coverage.json --require-destination` | 2 pages, 55 harvested results, 0 errors, 0 warnings |
| `node tools/validate-plan.mjs research/plan-spec.json` | OK — acyclic; no item-level cycles, forward references, B-page dependencies or unresolved ids among the 1420 pages carrying item lists |
| `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope` | 30 pairs; this page "current scope review required" (expected — this is the first receipt) |
| dependency-resolution and link scan (batch 5) | 179 edges, 0 unresolved; 63 distinct published deps all `status: published`; 137 distinct links all resolved and all declared in `deps` |
| step-1 readiness scan (batch 5) | 22/22 records decision `ready`, none escalated |

## Item-level notes for Step 3b / owner (not scope blockers; no edits made)

1. Apply the choice-hypothesis repairs in the Prerequisite findings section (items 1–5 items), or
   record the owner's decision to keep the unconditional statements with a local choice-free
   supplier.
2. Refresh the coverage record with a disposition for Nicolaescu pp. 183–200 and reconcile the §7
   design source line with the §8 matrix row for DT-9.
3. Route the two published-content items (typo; stale U-P ledger entry) through the owner's
   published-defect reconciliation.

## Decision

Record `sufficient` for `morse-trajectory-moduli-spaces-and-the-morse-differential` with this
report as the scope evidence. No owner scope action (proceed/merge/enrich) is required; Step 3b
authoring must close the choice-hypothesis declarations and re-read the final supplier texts.
