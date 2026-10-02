# Step 3b authoring report — punctured-disks-mapping-classes-and-point-pushing

- Run: `frontier-37-owner-30`; role alpha-high; batch 20; pair owned: A page
  `punctured-disks-mapping-classes-and-point-pushing` (order 735) and B page
  `punctured-disks-mapping-classes-and-point-pushing-examples` (order 736),
  category `braid-groups`. This file is also the per-item checkpoint.
- Scope decision: `sufficient`, recorded in
  `research/frontier-37-owner-30-step3a-review-punctured-disks-mapping-classes-and-point-pushing.json`;
  scope report `research/frontier-37-owner-30-step3a-pair-punctured-disks-mapping-classes-and-point-pushing.md`.
  `research/frontier-37-owner-30-owner-authoring-direction.md` does not exist.
- Authoring order: the dispatch order (dependency level ascending, then page
  order, then item ID). Each item was scaffold-audited and authored before
  advancing to the next level; the order was not recomputed because no local
  repair or new supplier changed any dependency (no item was added or dropped).
- Written: 18 items under `items/`, the two page files under
  `library/braid-groups/`, `research/frontier-37-owner-30-batch-20.proof-contracts.json`,
  and 18 Step-3b decisions (`accept`, confidence 1, examined dependency IDs,
  concrete evidence reasons). The manifest
  `research/frontier-37-owner-30-batch-20.pages.json` was not edited: IDs, kinds,
  titles, statements, deps, `dependency_level`, order and `requires` are the
  Step-1 values. Coverage and the cross-batch input (`[]`) are unchanged.

## Checkpoint log

| # | Item | Level | Status | Notes |
|---|---|---|---|---|
| 1 | `def-boundary-fixed-mapping-class-group-of-a-punctured-disk` | 0 | authored, precheck n/a | Definition of `Homeo^+(D^2,∂D^2)`, its setwise stabiliser, `Mod(D^2,Q_n;∂D^2)=π_0`; compact-open = uniform; composition and inversion continuous; deps trimmed to the four scaffold deps plus the cited `def-homeomorphism-and-open-maps`. |
| 2 | `lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points` | 0 | authored, precheck PASS | AC_ω; track is an embedded surface in `R×R^2`; vector-field extension along it; cut-off; compactly supported flow; steps 1.1/2.1/2.2/3.1/4.1. |
| 3 | `lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections` | 0 | authored, precheck PASS | Choice-free; Lipschitz cut-offs + Banach fixed point for small displacements; covering local order; surjectivity via a finite partition of a path in `F_n`; continuous local sections. |
| 4 | `lem-configuration-loops-admit-smooth-separated-point-motion-representatives` | 0 | authored, precheck PASS | Choice-free; unique ordered lift; positive collision/boundary margin; Weierstrass approximation with fixed endpoints; smooth time change from the standard step; straight-line relative homotopy. |
| 5 | `lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies` | 0 | authored, precheck PASS | AC_ω; disjoint bumps around the tracks; `X_t(x)=Σρ(x−z_i(t))z_i'(t)`; global flow; uniqueness makes the tracks exact. |
| 6 | `thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group` | 0 | authored, precheck PASS | Choice-free; Alexander deformation `H_s(h)(x)=s h(x/s)` for `|x|≤s` and `x` outside; uniform estimates give joint continuity; contraction `F(t,h)=H_{1−t}(h)`. |
| 7 | `def-pure-mapping-class-group-of-a-punctured-disk` | 1 | authored; precheck n/a (no phase body) | `PMod(D^2,Q_n;∂D^2)`: classes with representatives fixing every marked point; the setwise and pointwise isotopy conventions coincide because the induced permutation is locally constant along a setwise-preserving path. |
| 8 | `lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration` | 1 | authored; precheck PASS | Assumes AC (declares `def-axiom-of-choice`; uses AC⇒DC for the metric partition theorem). Local product charts from the level-0 sections; the finite-permutation quotient is metrizable, so subordinate partitions of unity make the bundle numerable; the published numerable-bundle theorem makes `ev` a Hurewicz fibration. |
| 9 | `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes` | 2 | authored; precheck n/a (no phase body) | `δ([α])=[h^{-1}]` for the endpoint `h` of the evaluation lift of `α` from `id`; the inverse endpoint is fixed so that `δ` is the connecting map of the library's first-loop-then-second fibration LES. |
| 10 | `lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism` | 3 | authored; precheck PASS | Well-definedness: homotopic loops compared by square homotopy lifting; two lifts in the same class differ by a loop in one fibre, which lies in the identity component. Homomorphism: a concatenated lift ends at `b_1a_1`, and the inverse-endpoint convention turns the reversal into `δ(αβ)=δ(α)δ(β)`. |
| 11 | `thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk` | 4 | authored; precheck PASS | Low-degree LES `π_1(E)→π_1(B)→δ→π_0(F)→π_0(E)` with `E` contractible (`π_1(E)=1`, `π_0(E)` one point); exactness makes `δ` injective with image the kernel of the constant map, hence bijective, for every `n≥0`. AC declared; the fibration fact is the cited `[L1]`. |
| 12 | `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk` | 5 | authored; precheck PASS | `G_n ≅ Mod(D^2,Q_n;∂D^2)` by composing `δ` with the inverse of the published inverse-slicing isomorphism `Φ` and the published open-to-closed configuration equivalence; the two loop/endpoint inversions cancel on geometric braids; the standard half twist maps to the explicit supported boundary-fixed half rotation. AC. |
| 13 | `cor-pure-braids-are-pure-punctured-disk-mapping-classes` | 6 | authored; precheck PASS | Both sides are kernels of the endpoint-permutation homomorphism to `S_n`; compared through the published covering-monodromy sign convention. AC. No injectivity of point pushing is used. |
| 14 | `cex-fixing-the-boundary-only-setwise-changes-the-disk-mapping-class-group` | 6 (B) | authored; precheck PASS | Witness: a rigid `2π` rotation of the disk is a nontrivial class when isotopies may move `∂D^2` setwise (endpoint identity) and trivial when the boundary is fixed pointwise; detected by `u({x,y})=((x−y)/|x−y|)^2`, well defined on the unordered quotient, with image loop of degree 2. States AC where it consumes the identification. |
| 15 | `ex-a-half-twist-as-a-punctured-disk-homeomorphism` | 6 (B) | authored; precheck PASS | Explicit angular half rotation about the midpoint `m_i`, tapered across `U_i`, is a boundary-fixed orientation-preserving homeomorphism exchanging `q_i,q_{i+1}`; the induced motion is braid-isotopic to the published diamond half twist, so the class is `Ψ([σ_i])`. Choice-free apart from the identification it consumes. |
| 16 | `def-point-pushing-homomorphism-for-a-puncture` | 7 | authored; precheck n/a (no phase body) | For `n≥1`: `Push_n([γ])=δ([γ̄])` for the ordered loop `γ̄` holding `q_1,…,q_{n-1}` fixed and moving `q_n` along a based loop of `Y_n=int D^2∖{q_1,…,q_{n-1}}`; values are pure; no injectivity is asserted (deferred by design). |
| 17 | `cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group` | 7 (B) | authored; precheck PASS | Witness: the supported positive half twist preserves `Q_n` setwise but exchanges `q_i,q_{i+1}`, and the induced discrete permutation is unchanged by any isotopy through setwise-preserving homeomorphisms, so it is nonpure for `n≥2`. AC where the identification is consumed. |
| 18 | `ex-point-pushing-one-puncture-around-another` | 8 (B) | authored; precheck PASS | `n=2`, `h=1/12`, `q_1=−1/12`, `q_2=1/12`: the clockwise loop `γ(t)=q_1+2h u(t)`, `u(t)=cos2πt−i sin2πt`, is homotoped rel endpoints to the rigid rotation loop `[u(t)q_1,u(t)q_2]`; an explicit interpolation identifies the inverse square of the raw slice of `σ_1` with it, so `δ` sends it to `Ψ([σ_1]^2)=[H_1]^2` (clockwise = positive full twist). No injectivity asserted or used. |

## Scaffold audit, repairs and additions

The audit checked each scaffold's hypotheses, quantifiers, implicit proof uses
and well-definedness far enough to write the promised argument. The proof route
is the low-degree fibration LES of the evaluation bundle, with the local
suppliers the scaffold already carried; every published interface used was read
at its statement and proof (listed in `research/frontier-37-owner-30-batch-20.notes.md`).
Local repairs made while authoring (all inside this pair's files):

1. `ex-point-pushing-one-puncture-around-another`: adopted the precheck
   canonical layered numbering (`1.1, 1.2, 2.1, 3.1, 4.1, 5.1`), reordered the
   proof blocks to match, and fixed the in-text `step` tokens and final tags.
2. `thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk`:
   the declared fact `[L1]` (Hurewicz fibration) was previously uncited; it is
   now cited in steps 2.1 and 2.2 and listed in their tag lists.
3. `lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism`: removed
   a stray inline `$` that broke rendering.
4. Multiline `$$` display blocks were collapsed to one source line in 8 items
   (rendercheck rule; the renderer mis-parses multi-line display math).
5. `verification.precheck: pending` → `pass` for the 14 proof-bearing items;
   the 4 definitions keep `n/a`.

No item was added or dropped during Step 3b, and no other pair's files were
edited. The only local suppliers are the two smooth-motion lemmas inserted at
Step 1 (`lem-configuration-loops-…`, `lem-smooth-finite-point-motions-…`),
already in the manifest baseline; they are consumed by the braid–mapping-class
theorem and registered in the manifest, coverage and contracts.

## Checks actually run (all on explicit paths)

| Check | Result |
|---|---|
| `node tools/tsx-run.mjs tools/precheck.mts <18 item paths>` | 14 checked, 0 failing (4 definitions have no phase body → n/a) |
| `node tools/rendercheck.mjs <18 items + 2 pages>` | OK — 20 files: no wikilink in math, no unbalanced delimiters, no multiline display block, every math span parses under KaTeX, frontmatter parses |
| `node tools/proof-contract.mjs research/…-batch-20.proof-contracts.json --strict` | 0 errors, 0 warnings, 18/18 items |
| `node tools/boundary-audit.mjs <contracts> --fail-on-contradicted --fail-on-template` | 144 rows over 18 items, 37 `not_applicable` (each with an item-specific reason); no template reuse (≥3), no contradicted dispositions; exit 0 |
| `node tools/citation-fidelity.mjs <contracts> --fail-on-missing-quote` | 135 citations over 18 items; no missing quote, no widening; exit 0 |
| `node tools/content-policy.mjs research/…-batch-20.pages.json` | 18 scoped items, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/…-batch-20.pages.json` | 18 items, 0 normalized, 0 errors |
| `node tools/coverage-checklist.mjs research/…-batch-20.coverage.json --require-destination` | 1 page, 23 harvested results, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage research/…-batch-20.coverage.json` | 3/3 sources fetch-verified and resolved (0 documented drops) |
| `node tools/source-backing.mjs --coverage research/…-batch-20.coverage.json --liveness research/frontier-37-owner-30-url-liveness.json` | 10 authored results, every one still backed by an openable source or documented alternative |
| `node tools/prosecheck.mjs <20 files>` | 20 files, 0 errors, 0 warnings |
| `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | 812 items over 60 pages, maximum level 29; batch-20 labels match the computed levels exactly; exit 0 |
| `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 — page order acyclic, no item-level cycles, forward references, B-page dependencies or unresolved ids |
| `node tools/depcheck.mjs` (repo-wide) | exit 1 on unrelated pre-existing items (algebraic geometry / scheme theory); zero findings on any of the 18 items or the two pages |
| `node tools/fwdcheck.mjs` (repo-wide) | 0 open forward references (433 closed); our items appear only as inherited-consequence rows; none of the 106 unrelated `link-unplanned` errors names a batch-20 item or page |
| `node tools/extcheck.mjs` | exit 0; no batch-20 item recorded as not proved here |
| `node tools/depsource.mjs research/plan-spec.json --page punctured-disks-…` | exit 0, 0 unresolved (the plan carries no item lists for this page yet; the manifest scaffold is checked by `manifest-deps`/`depcheck`) |
| `node tools/finite-smoke.mjs <contracts>` | 0 errors, 0 of 18 items carry finite-smoke obligations |
| `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final` | our pair is not in the 556-entry work list; the whole-run check remains open only for other pairs |
| `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | **fails** on an unrelated sibling defect (below); batch-20's own input file is present with `[]` |

## Pre-splice plan findings (`research/frontier-37-owner-30-pre-splice-plan-findings.json`)

- The one finding naming this page, #62 `undeclared-prereq`: “page
  `punctured-disks-mapping-classes-and-point-pushing` has an item depending on
  `ascoli-arzela`, which is NOT in the closure of its declared requires”, is
  **stale**. Its snapshot is “pre-Step-3a-enrichment overlay checked
  2026-09-30 07:27 UTC”, and the current plan already declares the dependency:
  `research/plan-spec.json` order 735 `requires` contains `ascoli-arzela`, the
  batch-20 manifest and the page frontmatter list it, all 18 items' `deps`
  resolve, and `validate-plan research/plan-spec.json` exits 0. No Step-4 plan
  change is required for this page.
- No other pre-splice finding names this pair.

## Published concerns relayed to the owner (no published file was edited)

1. `cor-metric-spaces-admit-subordinate-partitions-of-unity` (published):
   confirmed declaration gap — its Statement assumes “the Axiom of Choice and
   the Axiom of Dependent Choice”, but its direct deps
   `[thm-stone-metric-spaces-are-paracompact, thm-subordinate-partitions-of-unity-exist, def-metric-space, def-hausdorff-space]`
   omit `def-axiom-of-choice` and `def-dependent-choice`. Evidence that the
   hypotheses are actually supplied transitively (so this is bookkeeping, not a
   mathematical defect): `thm-stone-metric-spaces-are-paracompact` carries
   `def-axiom-of-choice`, `thm-subordinate-partitions-of-unity-exist` carries
   both. Repair strategy: owner adds the two direct axiom dependencies and
   refreshes affected consumer evidence. Confidence: high.
2. `def-time-dependent-vector-field-and-evolution-operator` (published):
   confirmed declaration gap — the Definition assumes `AC_ω`, but its direct
   deps contain only `def-smooth-vector-field-as-a-tangent-bundle-section`, not
   `def-countable-choice`. Repair strategy: owner adds `def-countable-choice`
   directly and audits consumers for an explicit choice-cost statement. Both
   owned lemmas consuming it declare `AC_ω` (`def-countable-choice` in their
   deps); the final theorem declares AC. Confidence: high.
3. Optional (non-blocking, from the scope review): the coverage file gives no
   row naming `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes`,
   `ex-point-pushing-one-puncture-around-another` or
   `cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group`
   (confirmed still unnamed); and FM Proposition 1.11 is printed for simple
   closed curves with arcs treated in §1.2.7, so the design's “explicit arc
   variant” wording is slightly stronger than the printed text. The scaffold's
   arc lemma is a self-contained smooth proof from published vector-field
   interfaces, so neither point is a content gap.
4. Run-wide ledger blocker (routed by batch 9, not this pair):
   `frontier-dependency-ledger refresh --run frontier-37-owner-30` aborts while
   parsing the frontmatter of `items/def-modular-specht-form-and-radical-quotient.md`
   (`Invalid escape sequence \c at line 26, column 170`, in a `sources` title).
   The parser loads every item named by every batch manifest, so this one
   sibling defect blocks the unified cross-batch ledger refresh for the whole
   run. The owner should fix that item's YAML escaping, then rerun the refresh;
   the batch-20 input
   `research/frontier-37-owner-30-batch-20.cross-batch-dependencies.json` is
   already in place with `[]` and needs no further edit.

No potentially defective published item with a mathematically inadequate claim
was found in the examined interfaces.

## Open obligations and deferrals

- No supplier is unfinished: every direct out-of-batch dependency (56 distinct
  targets across the 18 authored `deps` lists) resolves to an existing item
  whose home page is `published`, and `depcheck` reports no unresolved or
  circular dependency on this pair; the batch-20 cross-batch input is `[]` and
  the dispatch lists no in-run prerequisite pair. No decision is escalated.
- By design the pair defines point pushing and proves neither injectivity nor
  the Birman exact sequence; those are the documented deferral to
  `pure-braids-fadell-neuwirth-and-asphericity` (BG-5, batch 21, which requires
  this page). This page's own statements make no injectivity claim, so the
  deferral is not an unmet prerequisite here.
- Pre-existing repo-wide debt outside this pair (depcheck/fwdcheck failures in
  algebraic geometry and scheme theory; the YAML defect above) is reported, not
  fixed or hidden.

## Handoff

Completed and accepted (18/18 `accept`, confidence 1):
`def-boundary-fixed-mapping-class-group-of-a-punctured-disk`,
`lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points`,
`lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections`,
`lem-configuration-loops-admit-smooth-separated-point-motion-representatives`,
`lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies`,
`thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group`,
`def-pure-mapping-class-group-of-a-punctured-disk`,
`lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration`,
`def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes`,
`lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism`,
`thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk`,
`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`,
`cor-pure-braids-are-pure-punctured-disk-mapping-classes`,
`cex-fixing-the-boundary-only-setwise-changes-the-disk-mapping-class-group`,
`ex-a-half-twist-as-a-punctured-disk-homeomorphism`,
`def-point-pushing-homomorphism-for-a-puncture`,
`cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group`,
`ex-point-pushing-one-puncture-around-another`.

Local suppliers added in Step 3b: none. Cross-batch dependency input: `[]`.
Open obligations: the four relayed published concerns above (owner action), the
run-wide ledger refresh (blocked by the batch-9 YAML defect), and the designed
BG-5 deferral. No unmatched scope, item, source, content, dependency or
contract gate remains for this pair.

## Conventions held fixed

- Boundary map uses the inverse endpoint: for a based loop α lifted from the
  identity to `h`, `δ([α])=[h^{-1}]` (matches the published LES convention
  `∂_p[γ]=[e_0]·[γ]^{-1}` with the right action).
- Right composition is the principal-bundle action used for concatenation:
  the lift of the second loop starting at `a_1` is `b_t∘a_1`, so
  `δ(αβ)=δ(α)δ(β)`.
- Choice: the evaluation-bundle lemma and its consumers assume AC and declare
  `def-axiom-of-choice`; the two smooth-motion lemmas assume AC_ω and declare
  `def-countable-choice`; Alexander, local sections and smooth representatives
  are choice-free.
- Base data: `h=1/(4(n+1))`, `q_j=((2j−n−1)h,0)`, `Q_n=(q_1,…,q_n)`,
  support disc `U_i=B(m_i,3h/2)`, `m_i=q_i+(h,0)`.
