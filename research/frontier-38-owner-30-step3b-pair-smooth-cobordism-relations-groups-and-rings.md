# Step 3b — authoring log and handoff, pair `smooth-cobordism-relations-groups-and-rings`

- Run: `frontier-38-owner-30`, batch 13, pages 545–546 (differential topology).
- Dispatch label: `step3b-pair-smooth-cobordism-relations-groups-and-rings-237b172453e70156`.
- Scope carrier: `research/frontier-38-owner-30-batch-13.pages.json` (A page 19
  items + B page 5 items = 24). Step-3a review and owner `proceed` receipt are
  current (`research/frontier-38-owner-30-step3a-{pair,review,owner}-smooth-cobordism-relations-groups-and-rings*`);
  the owner's Step-4 `requires` edge to
  `chern-weil-theory-and-characteristic-forms` is present in both the batch
  manifest and `research/plan-spec.json` order 545.
- Direct in-run prerequisite pairs to inspect: none (dispatch); batch 13's
  cross-batch input is and remains `[]`. No unfinished-supplier flag was
  needed: every consumed supplier is published or an earlier item of this pair.

## Conventions fixed for the pair

- Induced boundary orientation: **outward-normal-first**, as published
  (`def-induced-boundary-orientation`,
  `prop-boundary-orientation-is-independent-of-the-outward-vector-field`,
  `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary`).
- Oriented bordism: incoming face induced orientation `-o_0`, outgoing face
  `o_1`; equivalently the collars are orientation-preserving for the
  interval-first product orientations (`def-oriented-smooth-cobordism`).
- Product orientation: ordered, first factor first (`def-product-orientation`);
  the transposition sign is `(-1)^{mn}`.
- All oriented sign statements of the pair were **recomputed** from these
  conventions (interval `[0,1]`, disk, cylinder with the product-boundary
  proposition, product of bordisms, transposition). The published chain-level
  convention in `lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class`
  (`(-1)^n` tangent-then-inward) was checked against the geometric convention on
  the interval and the disk and found consistent; no defect is reported.
- Choice: AC is declared and used only in the two number definitions and the
  two boundary-vanishing propositions, through the characteristic-class
  construction and its admissibility lemma; `AC_omega` is declared in the
  stable-tangent splitting. Every other item of the pair is choice-free, and
  the two zero-dimensional arguments use only finite choice (a ZF theorem).

## Item log (dependency-level order; one item at a time)

| # | level | item | state | notes |
|---:|---:|---|---|---|
| 1 | 0 | `def-pontryagin-number-of-a-closed-oriented-manifold` | authored (repaired) | Definition from Milnor–Stasheff §16 pp.185–187 (read) and Ranicki §6.3 p.117. Componentwise convention for disconnected `M` made explicit; deps repaired to the actual suppliers (naturality/stability, fundamental class, orientation reversal, component and local-path-connectedness items); AC declared with its exact class-construction use. `precheck` n/a; `rendercheck` clean. |
| 2 | 0 | `def-stiefel-whitney-number-of-a-closed-manifold` | authored (repaired) | Definition from MS §4 pp.50–51 (read: `w_1^{r_1}…w_n^{r_n}[M]`, total degree `n`, diffeomorphism invariance); canonical mod-two fundamental class; componentwise convention; deps repaired. `precheck` n/a; `rendercheck` clean. |
| 3 | 0 | `def-unoriented-smooth-cobordism-of-closed-manifolds` | authored (repaired) | Freed Definition 1.19 with (1.20)–(1.21) (read, printed pp.8–9) and Wall Ch. 8 conventions. Scaffold had `deps: []`; added the six published vocabulary suppliers actually used. `precheck` n/a; `rendercheck` clean. |
| 4 | 0 | `lem-boundary-stable-tangent-splits-off-a-trivial-line` | authored | As scaffolded; `Phi(v,t)=di(v)+tX`, fibrewise bijectivity from the hyperplane/inwardness, bundle isomorphism, global existence under `AC_omega` with its exact use. `precheck` pass; `rendercheck` clean. |
| 5 | 0 | `lem-fundamental-class-of-a-boundary-pushes-forward-to-zero` | authored | As scaffolded; `\partial[W,M]=[M]`, exactness, Kronecker naturality, degenerate cases. Canonical layered numbering adopted. `precheck` pass; `rendercheck` clean. |
| 6 | 0 | `lem-product-boundary-formula-for-oriented-manifolds` | authored (repaired) | Corner-free restatement of the published product-boundary proposition, closed case from finite-product compactness, corner case excluded; deps repaired. `precheck` pass; `rendercheck` clean. |
| 7 | 1 | `def-oriented-smooth-cobordism` | authored (repaired) | The two formulations proved equivalent inline by the inward/outward interval-derivative signs; `-M` and the empty manifold recorded; deps repaired. `precheck` n/a; `rendercheck` clean. |
| 8 | 2 | `lem-cylinders-give-reflexivity-of-cobordism` | authored (**sign repair**) | Scaffold sign defect: with the published conventions `o\otimes dt` induces `(-1)^{n+1}o` on `M×{0}` and `(-1)^n o` on `M×{1}`, so the product orientation is a bordism `(M,o)→(M,o)` only for even `n`. Repaired: `W` is oriented by `(-1)^n(o\otimes dt)`, giving the required signs for every `n`; reflexivity and the oriented cylinder bordism are preserved. `precheck` pass; `rendercheck` clean. |
| 9 | 2 | `lem-reversing-a-cobordism-gives-symmetry` | authored (repaired) | Dual bordism with swapped parts/collars; oriented dual with reversed orientation, faces `-M_1` incoming and `M_0` outgoing; canonical numbering adopted; deps repaired. `precheck` pass; `rendercheck` clean. |
| 10 | 2 | `lem-collar-gluing-and-corner-smoothing-give-transitivity` | authored (repaired) | Quotient and bi-collar homeomorphism, seam-chart atlas, boundary/outer collars, orientation gluing, canonicity via the double construction, compact Hausdorff second-countable assembly; deps repaired. Computed level 2 (was labelled 3). `precheck` pass; `rendercheck` clean. |
| 11 | 3 | `thm-smooth-cobordism-is-an-equivalence-relation` | authored | Assembled from the three lemmas; no classification claim; no choice. Computed level 3 (was 4). `precheck` pass; `rendercheck` clean. |
| 12 | 4 | `def-null-cobordant-closed-manifold` | authored (repaired) | Translation cobordant-to-empty ↔ whole boundary with a collar proved; oriented sign discussion; class dependence by transitivity; deps repaired. Computed level 4 (was 5). `precheck` n/a; `rendercheck` clean. |
| 13 | 5 | `def-unoriented-and-oriented-bordism-groups` | authored (repaired) | Class sets, operation with well-definedness from disjoint unions of bordisms and the canonical smooth structure, empty zero, deferred axioms, forgetful map; deps repaired. Computed level 5. `precheck` n/a; `rendercheck` clean. |
| 14 | 6 | `ex-a-circle-is-the-boundary-of-a-disk` | authored (repaired) | Explicit disk model, induced counterclockwise boundary orientation, both null-cobordisms, inverse equation `W=(-D^2)\sqcup D^2`. The closed-ball chart is now proved locally from A-page suppliers (open-subset smooth structure, inverse function theorem, half-space charts, boundary-defining function) instead of the banned examples-page leaf; the group-definition dependency declared. Computed level 6. `precheck` pass; `rendercheck` clean. |
| 15 | 5 | `prop-boundaries-have-zero-stiefel-whitney-numbers` | authored (repaired) | `w(TM)=i^*w(TW)` from the stable splitting, naturality and Whitney stability; vanishing from the boundary pushforward; null-cobordism consequence; deps repaired (admissibility, pairing). Computed level 5 (was 7). `precheck` pass; `rendercheck` clean. |
| 16 | 5 | `prop-oriented-boundaries-have-zero-pontryagin-numbers` | authored (repaired) | Integral analogue with the induced-boundary sign absorbed by the null-cobordism convention; no signature/Hirzebruch input; deps repaired. Computed level 5 (was 7). `precheck` pass; `rendercheck` clean. |
| 17 | 6 | `rem-bordism-groups-here-are-geometric-not-generalized-homology-constructions` | authored | Seam remark as scaffolded; no spectra or homology axioms asserted; the identifications deferred with the three sources. Computed level 6 (was 7). `precheck` n/a; `rendercheck` clean. |
| 18 | 6 | `thm-disjoint-union-makes-bordism-classes-abelian-groups` | authored (repaired) | All axioms with explicit constructions: canonical diffeomorphisms of finite disjoint unions; unoriented inverse `M\sqcup M=\partial(M×[0,1])` with an explicit collar; oriented inverse `M\sqcup(-M)` on the oriented cylinder; group axioms from `def-group`. Computed level 6 (was 7). `precheck` pass; `rendercheck` clean. |
| 19 | 7 | `prop-zero-dimensional-bordism-groups` | authored (repaired) | Choice-free computation: explicit `H_0` description (Z case from `prop-zero-th-...`, F2 case by the finite augmentation argument), signed-count/parity invariance from the boundary pushforward, explicit interval null-cobordisms, both group isomorphisms. The interval/ball chart is supplied by A-page items (no examples-page leaf); finite choice only. Computed level 7 (was 8). `precheck` pass; `rendercheck` clean. |
| 20 | 7 | `thm-cartesian-product-makes-bordism-a-graded-ring` | authored (repaired) | Well-definedness by gluing `(W_1×N_0)\cup_{M_1×N_0}(M_1×W_2)` with opposite induced orientations (transitivity lemma); biadditivity, associativity, unit; transposition sign `(-1)^{mn}`; forgetful ring map. Statement presented as: `\Omega_*^O` a graded commutative ring, `\Omega_*^{SO}` graded-commutative (Koszul rule); the library's `def-graded-ring-and-graded-module` requires an ungraded commutative ring, so the oriented structure is not a commutative ring on the nose. Computed level 7 (was 8). `precheck` pass; `rendercheck` clean. |
| 21 | 6 | `cex-real-projective-two-space-is-not-unoriented-null-cobordant` | authored (repaired) | `H^*(RP^2;F_2)=F_2[x]/(x^3)`, `w_1(T RP^2)≠0` via the orientability classification (including the tangent-determinant-lines/manifold-orientability equivalence and non-orientability of `RP^2`), `w_1=x`, and `w_1^2[RP^2]=1` by perfect mod-two Poincaré duality; contradicts boundary vanishing. Computed level 6 (was 8). `precheck` pass; `rendercheck` clean. |
| 22 | 7 | `ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles` | authored (**geometry repair**) | Scaffold defect: unit disks centred at `(\pm1,0)` inside the radius-2 disk are tangent to each other at the origin and to the outer circle, so the region has cusps and is not a manifold with boundary. Repaired to radius-`1/2` removed disks; disjointness/containment proved, outer circle counterclockwise, inner circles clockwise, explicit radial collars; realizes `[C_1]+[C_2]=[C_0]` with all classes zero. Computed level 7 (was 8). `precheck` pass; `rendercheck` clean. |
| 23 | 8 | `ex-signed-points-give-the-oriented-zero-bordism-invariant` | authored (repaired) | Explicit oriented interval null-cobordism of a positive and a negative point; signed-count isomorphism; injectivity. The interval boundary orientation now cites `prop-boundary-orientation-is-independent-of-the-outward-vector-field` and the ball chart is a local A-page argument; both examples-page leaves removed. Computed level 8. `precheck` pass; `rendercheck` clean. |
| 24 | 8 | `ex-two-unoriented-points-bound-an-interval` | authored (repaired) | Interval collar realizing the two-point boundary; single point obstructed by parity; generator conclusion. Ball chart from A-page suppliers. Computed level 8. `precheck` pass; `rendercheck` clean. |

All 24 dependency levels were **recomputed from the actual item `deps`** and
written consistently into the batch manifest; the run-wide check
`item-dependency-levels.mjs check --run frontier-38-owner-30` passes
(816 items across 60 pages). Downgrades relative to the Step-1 labels
(levels 2–8 instead of 3–9 for several items, and the collar lemma from 3 to 2)
are consequences of declaring only the suppliers actually used.

## Checks run (final file set; each re-run after the last edit)

| Check | Actual result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts <24 items>` | 17 checked (proof-bearing), 0 failing; the 7 definitions/remark report not-applicable. |
| `node tools/rendercheck.mjs <24 items + 2 pages>` | OK over 26 files; every math span parses, every frontmatter block parses. |
| `node tools/content-policy.mjs research/frontier-38-owner-30-batch-13.pages.json` | 24 scoped items, 0 errors, 0 warnings. |
| `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-13.proof-contracts.json --strict` | 24/24 items checked, 0 errors, 0 warnings (citations regenerated from the current statement sections; boundary worksheets item-specific for all 8 standard cases). |
| `node tools/tsx-run.mjs tools/author-check.mts frontier-38-owner-30 13` | exit 0; `research/frontier-38-owner-30-author-check-13.json` records precheck, rendercheck, content-policy-items, proof-contract all true. |
| `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-13.pages.json` | 24 items, 0 missing, 0 errors. |
| `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | exit 0; 816 items, 60 pages, no errors. |
| `node tools/proof-layout.mjs <24 changed item paths>` | 24 items, 71 steps, 0 defects (both gates). |
| `node tools/depcheck.mjs` | repo-wide FAIL with 155 errors, **zero touching a batch-13 item** (filtered by all 24 IDs); the foreign debt includes other groups' `page-item-missing`, `b-leaf-content` and `cited-not-in-deps` rows. The eight `b-leaf-content` rows that touched this batch's items (examples-page leaves `ex-the-closed-ball-and-its-sphere-boundary`, `ex-the-boundary-of-an-oriented-interval`) were repaired by local A-page arguments and are gone. |
| `node tools/fwdcheck.mjs` | repo-wide 82 errors, zero touching a batch-13 item or page. |
| `node tools/depsource.mjs` | 0 unresolved; no batch-13 dependency appears among the 415 rows that link to neither a published nor an earlier planned page. |
| `node tools/extcheck.mjs` | OK; no recorded-not-proved statement is introduced by this batch. |
| `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-13.coverage.json --require-destination` | 1 page, 48 harvested results, 0 errors, 0 warnings. |
| `node tools/validate-plan.mjs research/plan-spec.json` | OK; pages 545/546 still carry empty plan item lists (the expected pre-splice state), so this batch introduces no plan edge yet; 289 planned pages remain unspliced run-wide. |
| `node tools/prosecheck.mjs` | no batch-13 item or page appears in its diagnostics. |
| `node tools/dispatch-author-artifacts.mjs` (function call) | 28 expected carriers checked, 0 missing (`ok: true`). |
| `node tools/step3-decisions.mjs record-item …` ×24 | 24 receipts written under `research/frontier-38-owner-30-step3b-review-<item>.json`; 4 `accept`, 20 `repaired`, all confidence 1 with examined dependency IDs and item-specific evidence; `check --phase final` reports **0 open rows for the 24 items**. |

## Open obligations, escalations and published concerns

- **Pre-splice findings.** No `research/frontier-38-owner-30-pre-splice-plan-findings.json`
  exists for this run (only the frontier-37 file is present), so there is no
  pre-splice finding for this pair to recheck against current inputs.
- **Foreign in-run defect observed while refreshing the cross-batch ledger.**
  `items/thm-mod-two-intersection-number-is-homotopy-invariant.md` (batch 12,
  pair `oriented-and-mod-two-intersection-numbers`, a sibling still being
  authored) has unparsable frontmatter: the double-quoted `sources.references`
  locator on line 22 contains `$\#f^{-1}(y)+\#g^{-1}(y)$`, and `\#` is not a
  legal YAML escape. `node tools/rendercheck.mjs` reports
  `frontmatter-unparsable` for that file, and
  `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  now aborts on it before reaching this batch. Confidence: confirmed (the
  parser error is reproducible); repair: escape as `\\#` or rephrase the
  locator, owned by the batch-12 writer. Not edited here (foreign file); batch
  13's own input remains `[]` and valid.

- **No unresolved item or supplier obligation.** Every consumed supplier is
  published or an earlier same-pair item; every completed item was decided
  `accept`/`repaired` with confidence 1; no `escalate` row exists for this pair.
- **Scaffold repairs recorded (local, pre-publication).** (a) the cylinder sign
  fix; (b) the pair-of-pants degeneracy fix; (c) the componentwise
  clarifications in the two number definitions; (d) the presentation of
  `\Omega_*^{SO}` as graded-commutative rather than a commutative graded ring;
  (e) dependency-level recomputations. Promised claims, IDs and page scope are
  preserved in every case.
- **Boundary-audit note (deliberate).** `node tools/boundary-audit.mjs`
  reports 0 template-reuse clusters for this batch and two
  `contradicted-disposition` candidates on
  `def-stiefel-whitney-number-of-a-closed-manifold`: the detector matches the
  definitional sentence "a monomial is of total degree $n$ exactly when it lies
  in $H^n(M;\mathbb F_2)$", which is part of the definition of total degree.
  Both `iff` rows now name that sentence explicitly and explain that no
  mathematical equivalence is claimed. Carried for reviewer visibility, like
  the frontier-37 `shotgun-bracket` note; not a mathematical or contract error
  (strict contract: 0 errors, 0 warnings).
- **Published concerns.** None confirmed. The only observations are: (i) the
  chain-level sign convention recorded in
  `lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class`
  (and quoted by `def-relative-fundamental-class-and-boundary-orientation`) was
  re-derived on the interval and the disk and is consistent with the geometric
  outward-normal-first convention — no defect; (ii) the scaffolded statement of
  this pair's ring theorem used "graded ring" where the library's
  `def-graded-ring-and-graded-module` requires an ungraded commutative ring —
  handled inside the authored item, reported here for Step-4/ledger visibility.
- **Step-4 splice.** `research/plan-spec.json` orders 545/546 still carry empty
  item lists; this batch expects the licensed splice of the 19 A and 5 B items.
  The owner's `requires` edge to `chern-weil-theory-and-characteristic-forms`
  is already present in the plan, so no further plan-prose amendment is
  requested from this pair.
- **Run-wide, foreign.** Repo-wide `depcheck` (155 errors) and `fwdcheck`
  (82 errors) fail on other groups' rows, none naming this pair; the final
  Step-3 decision check is still open only on foreign pairs (including the two
  adjacent batches 12/14 whose scope reviews are not yet current). These are
  owner/serial-reconciler items, not blockers for this pair's handoff.

## Handoff summary

- **Completed IDs (24/24):** `def-pontryagin-number-of-a-closed-oriented-manifold`,
  `def-stiefel-whitney-number-of-a-closed-manifold`,
  `def-unoriented-smooth-cobordism-of-closed-manifolds`,
  `lem-boundary-stable-tangent-splits-off-a-trivial-line`,
  `lem-fundamental-class-of-a-boundary-pushes-forward-to-zero`,
  `lem-product-boundary-formula-for-oriented-manifolds`,
  `def-oriented-smooth-cobordism`,
  `lem-cylinders-give-reflexivity-of-cobordism`,
  `lem-reversing-a-cobordism-gives-symmetry`,
  `lem-collar-gluing-and-corner-smoothing-give-transitivity`,
  `thm-smooth-cobordism-is-an-equivalence-relation`,
  `def-null-cobordant-closed-manifold`,
  `def-unoriented-and-oriented-bordism-groups`,
  `ex-a-circle-is-the-boundary-of-a-disk`,
  `prop-boundaries-have-zero-stiefel-whitney-numbers`,
  `prop-oriented-boundaries-have-zero-pontryagin-numbers`,
  `rem-bordism-groups-here-are-geometric-not-generalized-homology-constructions`,
  `thm-disjoint-union-makes-bordism-classes-abelian-groups`,
  `prop-zero-dimensional-bordism-groups`,
  `thm-cartesian-product-makes-bordism-a-graded-ring`,
  `cex-real-projective-two-space-is-not-unoriented-null-cobordant`,
  `ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles`,
  `ex-signed-points-give-the-oriented-zero-bordism-invariant`,
  `ex-two-unoriented-points-bound-an-interval`; both pages
  (`library/differential-topology/smooth-cobordism-relations-groups-and-rings.md`,
  `...-examples.md`) written and registered in the manifest, coverage and
  contracts. No new IDs were minted; no pair was added; every original ID and
  promised claim is preserved.
- **Suppliers added:** only published A-page items (the full lists are in each
  item's `deps` and in the manifest); no in-run supplier is unfinished and no
  local prerequisite beyond the four Step-3a design prerequisites was needed.
- **Checks actually run:** the table above; the batch `author-check` gate for
  batch 13 passes.
- **Open obligations:** none for the pair before Step 4 beyond the expected
  plan splice; foreign run-wide debt listed above is reported, not repaired.
- **After compaction:** reread this log, the current item file, its `deps`
  statements and the source locators before relying on any summary.
