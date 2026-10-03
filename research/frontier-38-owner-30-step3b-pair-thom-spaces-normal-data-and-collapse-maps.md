# Step 3b author report — `thom-spaces-normal-data-and-collapse-maps`

- Run: `frontier-38-owner-30`; role alpha-high; label
  `step3b-pair-thom-spaces-normal-data-and-collapse-maps-86a3fdf834c9fd6c`.
- Pair: A `thom-spaces-normal-data-and-collapse-maps` (order 547) / B
  `thom-spaces-normal-data-and-collapse-maps-examples` (order 548),
  differential topology, batch 14. Owned pair only.
- Inputs read before entry: `CLAUDE.md`, `SCHEMA.md`, `briefs/group-author.md`,
  `briefs/tasks/frontier-dependency-ledger.md`, design `research/plan-differential-topology-track.md`
  §DT-16 (L928–972), owner direction `research/frontier-38-owner-30-owner-authoring-direction.md`
  L84–89, Step 3a report/receipt for this pair, batch-14 manifest / coverage /
  notes / `local-prereq-547` packet, `research/frontier-38-owner-30-step3-auditor-baseline.json`,
  and the current 20 draft item files.

## Owned IDs and open obligations

Author order (dependency level, then dispatch order):

| # | level | id | page | kind |
|---|---|---|---|---|
| 1 | 0 | `def-disk-bundle-sphere-bundle-and-thom-space` | A | definition |
| 2 | 0 | `def-stable-normal-bundle-of-a-compact-smooth-manifold` | A | definition |
| 3 | 0 | `def-thom-class-and-thom-isomorphism-interface` | A | definition |
| 4 | 1 | `def-pontryagin-thom-collapse-of-an-embedded-submanifold` | A | definition |
| 5 | 1 | `lem-stabilizing-a-normal-bundle-suspends-its-thom-space` | A | lemma |
| 6 | 1 | `lem-thom-space-is-independent-of-the-bundle-metric-up-to-canonical-homeomorphism` | A | lemma |
| 7 | 1 | `prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product` | A | proposition |
| 8 | 1 | `prop-transverse-preimage-carries-a-pulled-back-normal-structure` | A | proposition |
| 9 | 1 | `thm-stable-normal-bundle-is-independent-of-the-embedding` | A | theorem |
| 10 | 1 | `ex-thom-space-of-the-mobius-line-bundle` | B | example |
| 11 | 1 | `ex-zero-section-pulls-back-the-thom-class-to-the-euler-class` | B | example |
| 12 | 2 | `lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms` | A | lemma |
| 13 | 2 | `lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint` | A | lemma |
| 14 | 2 | `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual` | A | proposition |
| 15 | 2 | `rem-thom-space-empty-and-rank-zero-conventions` | A | remark |
| 16 | 2 | `rem-thom-spectrum-construction-is-not-minted-in-dt` | A | remark |
| 17 | 2 | `cex-different-unstabilized-normal-bundles-can-have-nonisomorphic-thom-data` | B | counterexample |
| 18 | 2 | `ex-collapse-map-of-an-equatorial-sphere` | B | example |
| 19 | 2 | `ex-thom-space-of-a-trivial-line-bundle` | B | example |
| 20 | 3 | `lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy` | A | lemma |

Open obligations at entry:

- Author both library pages (`library/differential-topology/<A>.md`,
  `library/differential-topology/<B>.md`) and the batch proof contracts
  (`research/frontier-38-owner-30-batch-14.proof-contracts.json`).
- **Step 3a flagged prerequisite (licensing gap).** The definition
  `def-pontryagin-thom-collapse-of-an-embedded-submanifold` asserts that the
  published tubular theorem supplies charts inducing *exactly* the specified
  normal identification $\alpha$; the published
  `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold` states only
  $\Phi(0_p)=i(p)$. Decision recorded below after re-checking the published
  proof.
- Every numbered step needs a current proof-contract entry (citations with
  exact quotes, derivation/routine-step rows for each step, eight boundary
  cases) before the strict-contract gate can pass.
- Cross-batch input row: verify/report the unchanged `[]` input for batch 14
  after any dependency edit.
- Record ordinary Step 3b item decisions (accept/repaired) for the 20 original
  scaffold IDs; additions are engine-certified and receive no self-review.

## Checkpoint log

### Entry decision on the flagged prerequisite

Re-read the published `thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold`
(statement gives only $\Phi(0_p)=i(p)$; its proof computes
$dF_{(p,0)}(u,w)=di_p(u)+w$ and sets $\Phi=F\circ Q^{-1}$). The collapse
definition's existence assertion is therefore not licensed at statement level.
I created the same-page prerequisite
`lem-tubular-charts-realize-a-prescribed-normal-identification` (level 0),
proved it by precomposing one published chart with the bundle automorphism
$\beta_0^{-1}\circ\alpha$ (so it does **not** depend on the internals of the
published proof beyond its statement), registered it in the A manifest before
its consumer, and made
`def-pontryagin-thom-collapse-of-an-embedded-submanifold` depend on it. This is
the Step-3b-authorized local-supplier addition; it is absent from the
pre-author baseline (`research/frontier-38-owner-30-step3-auditor-baseline.json`)
and receives engine certification, not a self-review.

### Items 1–4 (level 0, plus the licensed consumer)

- `def-disk-bundle-sphere-bundle-and-thom-space` — replaced the vague "radial
  expansion" with the explicit diffeomorphism $e(v)=v/\sqrt{1+\|v\|_h^2}$
  (smooth, inverse smooth on the open disk), and made the complement-of-basepoint
  argument a one-sentence saturation argument. No choice.
- `def-stable-normal-bundle-of-a-compact-smooth-manifold` — stated the
  boundary case separately (published ambient-metric proposition is for
  boundaryless submanifolds; the half-space form is what the theorem uses) and
  proved the stable-equivalence relation is transitive. AC_ω declared.
- `def-thom-class-and-thom-isomorphism-interface` — made the
  $H^r(D,S)\cong\widetilde H^r(\mathrm{Th})$ identification explicit and
  sourced (excision/LES pattern of
  `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient`, applied to
  cohomology; rank-zero read-off), and stated the exact AT hypotheses
  (numerable, CW/CW-type base, AC). Deps updated; level still 0.
- `lem-tubular-charts-realize-a-prescribed-normal-identification` — new
  level-0 lemma described above; `dh`-free proof via the induced normal map
  $\beta_0$ of one tubular chart.
- `def-pontryagin-thom-collapse-of-an-embedded-submanifold` — now depends on
  the lemma; states that $E$ and $\alpha$ are smooth of rank $r$; collapse
  formula kept, well-definedness and the compactly-supported form made explicit.

### Items 5–9 (level 1, A page)

- `lem-stabilizing-a-normal-bundle-suspends-its-thom-space` — added the
  explicit radial pair homeomorphism $\chi$ between the sum and max norms and
  the (compactly generated) product-quotient identification.
- `lem-thom-space-is-independent-of-the-bundle-metric-...` — continuity at the
  zero section now proved from $\|r_{h,k}v\|_k=\|v\|_h$; exact composition law
  displayed; cites the published radial map instead of re-deriving it.
- `prop-thom-space-of-a-trivial-rank-r-...` — recorded as the DT restatement of
  the published `prop-thom-space-of-zero-and-trivial-bundles` with the
  $r=0,1$ and empty-base read-offs.
- `prop-transverse-preimage-carries-a-pulled-back-normal-structure` — repaired:
  the compactness clause was false in rank zero (counterexample
  $X=[0,1]$, $B=\mathrm{pt}$), so (iv) now asserts closedness/compactness for
  $r\ge1$ and states the rank-zero exception explicitly; the boundary clause is
  now proved by the half-space normal form plus transversality of the boundary
  restriction (no longer asserted); the normal-bundle isomorphism is derived by
  transition-matrix gluing; new published deps recorded.
- `thm-stable-normal-bundle-is-independent-of-the-embedding` — replaced the
  hand-waved smooth-dependence claim by an explicit global patching argument
  for the parameter family, displayed $\dot P=KP-PK$, and replaced the unused
  compact-immersion corollary by the tangent-bundle/frame suppliers actually
  used. Boundary case treated by the half-space form of [F1].

### Items 10–11 (level 1, B page)

- `ex-thom-space-of-the-mobius-line-bundle` — made the annulus/Möbius model and
  the radial-collapse homeomorphism explicit; kept both claimed descriptions.
- `ex-zero-section-pulls-back-the-thom-class-to-the-euler-class` — spelled out
  the unit-section homotopy and pair exactness for the trivial-bundle vanishing,
  and the rank-zero unit-orientation read-off.

### Items 12–14 (level 2, A page)

- `lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms` —
  rewritten. Case (a) (smooth transverse homotopy) is now an application of the
  repaired transverse-preimage proposition on $X\times I$. Case (b) received a
  complete smoothing-and-perturbation proof: relative Whitney smoothing of the
  map into the smooth stratum with a cutoff, a distance estimate confining the
  zeros of the smoothed map, then a cutoff-scaled submersive perturbation family
  with parametric transversality and the density of the complement of the null
  parameter set. Rank $r\ge1$ is now stated explicitly (the rank-zero preimage
  is open and need not be compact); the compact-immersion corollary and the
  relative-transversality proposition are no longer cited and were removed from
  `deps`.
- `lem-collapse-map-is-continuous-and-smooth-away-from-the-basepoint` — clarified
  the vertical derivative computation ($\rho^{-1}\alpha^{-1}$ after identifying
  the normal quotient with $E$ by $\alpha^{-1}$); the cutoff/collar paragraph is
  unchanged and its claims are those of the collapse definition.
- `prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual` — the local
  cap computation now cites `def-fundamental-class-of-a-compact-oriented-manifold`
  for the uniqueness of the class with prescribed local restrictions, instead of
  invoking the internals of the duality theorem. The normal-first orientation,
  front-evaluation convention, mod-two and rank-zero clauses are unchanged and
  match the Stanford Theorems 138–139 statement and its displayed argument.

### Items 15–20 (level 2, plus the level-3 lemma)

- `rem-thom-space-empty-and-rank-zero-conventions`,
  `rem-thom-spectrum-construction-is-not-minted-in-dt` — read against the
  published trivial-bundle proposition and the stabilization lemma; no change
  needed beyond contract registration.
- `cex-different-unstabilized-normal-bundles-can-have-nonisomorphic-thom-data` —
  the deletion-property witness for $S^1\not\cong S^2$ is explicit; no repair.
- `ex-collapse-map-of-an-equatorial-sphere` — verified the band chart has
  normal derivative $(0,1)$ at $t=0$, the radius-$a$ disk of the metric is the
  closed band, and the $n=0$ case; no repair.
- `ex-thom-space-of-a-trivial-line-bundle` — verified against the trivial-rank
  proposition; no repair.
- `lem-collapse-map-is-independent-of-tubular-neighbourhood-and-radius-up-to-based-homotopy` —
  re-checked the Taylor argument ($\partial_vw(x,0)=I$ only), the uniform tube
  from the inverse family, the interpolation of radii and metrics, and the
  reflected-line boundary case; no repair.

## Published concerns (report only; no published file edited)

1. **Declaration-style AC omission (suspicion, not a proof defect; low
   severity).** `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial`
   assumes $\mathrm{AC}_\omega$ in its body and depends on
   `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`,
   but does not list `def-countable-choice` in `deps`. Evidence: the item's
   title/statement and `**Given:**` state the axiom; `deps` names only the four
   result items. Repair strategy: add `def-countable-choice` to its `deps` in a
   later published-consumer sweep (serial reconciler), not in this dispatch.
   This pair's items take the stricter form throughout.
2. **Interface gap filled locally (confirmed gap, no defect).** The published
   AT Thom items state $u_\xi\in H^n(D(\xi),S(\xi);R)$ and never state the
   identification with $\widetilde H^n(\operatorname{Th}(\xi);R)$ of the based
   quotient that the DT collapse consumes. This pair supplies the identification
   locally in `def-thom-class-and-thom-isomorphism-interface`, with the
   excision/pair-sequence justification and a pointer to the published
   homology-shape corollary. No published statement is wrong; a later AT page
   may prefer to state it once.
3. **Cohomology good-pair identification is not published.** The library proves
   $H_n(X,A)\cong\widetilde H_n(X/A)$ for good pairs
   (`cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient`) but has no
   cohomology counterpart. The interface item uses the same proof for
   cohomology and says so; if a future AT page wants the general statement, that
   is the missing item.
4. **Sibling-batch YAML defect (confirmed, blocks a tool).**
   `items/thm-mod-two-intersection-number-is-homotopy-invariant.md` line 22 has
   `locator: "§4, … ($\#f^{-1}(y)+\#g^{-1}(y)$ …)"`; `\#` is an invalid escape
   in the renderer's YAML parser. `node tools/frontier-dependency-ledger.mjs
   refresh --run frontier-38-owner-30` currently aborts on this file before
   completing. It belongs to another pair of this run and was not edited here;
   the owning author should replace `\#` with `\\#` or restructure the locator.

## Checks actually run (all on the current files)

| Check | Command (abridged) | Actual result |
|---|---|---|
| Precheck, explicit paths | `node tools/tsx-run.mjs tools/precheck.mts items/<21 ids>` | exit 0; 15 proof-bearing items checked, 0 failing |
| Rendering, explicit paths | `node tools/rendercheck.mjs items/<21 ids> library/differential-topology/<both pages>` | exit 0; YAML and KaTeX clean |
| Proof layout, batched once | `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs items/<21 ids>` | exit 0; 21 items, 45 steps, 0 defects |
| Content policy (item mode) | `node tools/content-policy.mjs research/frontier-38-owner-30-batch-14.pages.json` | exit 0; 21 scoped items, 0 errors, 0 warnings |
| Manifest deps | `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-14.pages.json` | exit 0; 21 items, 0 missing, 0 errors |
| Dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | exit 0 run-wide; 816 items, 60 pages; batch-14 labels recomputed and consistent |
| Proof contracts (strict) | `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-14.proof-contracts.json --strict` | exit 0; 21/21 items checked, 0 errors, 0 warnings |
| Boundary audit | `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template` | exit 0; no template or contradicted row |
| Citation fidelity | `node tools/citation-fidelity.mjs … --fail-on-missing-quote` | exit 0; every recorded quote occurs in its cited section |
| Finite smoke / risk report | `node tools/finite-smoke.mjs …`; `node tools/risk-report.mjs …` | exit 0; 0 obligations; 21 items routed, 0 errors (risk flags are informational at Step 3) |
| Coverage checklist | `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-14.coverage.json --require-destination` | exit 0; 1 page, 21 harvested results, 0 errors, 1 justified `coverage-low-yield` warning |
| Plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; no undeclared prerequisite from this pair |
| Forward refs | `node tools/fwdcheck.mjs` | exit 1, but 0 open forward references; the failures are `link-unplanned` rows in other batches' in-flight drafts, none in this pair |
| Extcheck | `node tools/extcheck.mjs` | exit 0; the pair introduces no recorded-not-proved dependency |
| Merge contracts | `node tools/merge-proof-contracts.mjs --level frontier-38-owner-30 … batch-*.proof-contracts.json` | exit 0; merged file written over 241 scoped items |
| Cross-batch input | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30` | batch-14 input is `[]` (verified in the unified ledger's `reviewed_batches`); the refresh currently aborts on the sibling YAML defect of concern 4, which touches no edge of this pair |
| Prose positional claims | `node tools/prosecheck.mjs` | exit 0 run-wide; no positional claim contradicts the spec |
| Dependency source resolution | `node tools/depsource.mjs` | exit 0; this page's dependencies resolve to their home page; 0 unresolved |
| Ids, deps, homes, cycles | `node tools/depcheck.mjs` | exit 1 run-wide, but **0 of the 151 errors touch this pair**: all are `dep-unresolved`/`link-unresolved` rows in other batches' in-flight drafts (blowups, Gelfand–Tsetlin, …). No warning or error names any item of this pair. |
| Cross-batch edges | `node` read of `…-cross-batch-dependencies.json` | no unified edge has any item or page of this pair as consumer or supplier |

## Handoff

**Completed.** All 21 items are fully authored and registered: the 20 original
scaffold IDs plus the new supplier
`lem-tubular-charts-realize-a-prescribed-normal-identification`; both library
pages (`library/differential-topology/thom-spaces-normal-data-and-collapse-maps.md`,
`…-examples.md`) and the batch manifest, coverage and proof contracts are in
place. Every check in the table above passed for this batch.

**Added suppliers and dependency changes (for the Step-4 splice).**
- New item and manifest row:
  `lem-tubular-charts-realize-a-prescribed-normal-identification` (A page,
  level 0, before its consumer), consumed by
  `def-pontryagin-thom-collapse-of-an-embedded-submanifold`.
- New `deps` beyond the scaffold's rows: `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`,
  `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient`,
  `thm-transverse-preimage-theorem`,
  `prop-normal-and-conormal-bundles-are-smooth-vector-bundles`,
  `def-smooth-function-on-a-relatively-open-subset-of-a-half-space`,
  `def-neat-submanifold-of-a-manifold-with-boundary`,
  `thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure`,
  `def-smooth-vector-bundle-rank-fibre-and-trivial-bundle`,
  `thm-relative-whitney-approximation-for-euclidean-valued-maps`,
  `lem-manifold-bump-for-a-compact-set-inside-an-open-set`,
  `lem-a-tubular-target-produces-a-submersive-finite-dimensional-perturbation-family`,
  `thm-parametric-transversality`,
  `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`,
  `lem-continuity-is-local-and-pastes`,
  `def-fundamental-class-of-a-compact-oriented-manifold`.
- Removed from `deps` as unused:
  `cor-an-injective-immersion-from-a-compact-manifold-is-an-embedding`,
  `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`.
- Pre-splice plan mismatch (for Step 4): `research/plan-spec.json` order 547
  still lists the 15 pre-authoring items and its rows carry the scaffold `deps`;
  the manifest now has 16 items and the dependency lists above. No `requires`
  edge changed, and no in-run consumer of this pair exists (batch-14
  cross-batch input is `[]`).

**Open obligations.**
1. Ordinary Step-3b item decisions for the 20 original scaffold IDs are owed
   but could not be recorded here: adding the new supplier changes the pair
   scope hash, so `step3-decisions.mjs record-item` refuses until the engine
   writes its auditor-authoring scope and item certifications (the
   `auditor-created-certifications` gate, which runs this addition's successful
   author result). After that certification a follow-up dispatch of this pair
   can record `accept`/`repaired` for the 20 originals with the manifests as
   they now stand. No item-level escalation is open: every item is authored and
   passes the checks above; but I did not and cannot self-record those receipts.
2. The three published concerns above are reported for the serial reconciler /
   owning authors; none is a defect of new content, and none blocks this pair.
3. The two statements changed relative to the scaffold drafts
   (`prop-transverse-preimage…` (iv) rank-zero compactness correction and
   `lem-based-homotopies…` rank hypothesis $r\ge1$) are hypothesis corrections
   recorded here with counterexample/exception evidence; the pair scope hash
   change they and the addition cause is exactly what the engine certification
   covers.
