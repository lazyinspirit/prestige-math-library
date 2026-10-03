# Step 3b authoring report — `the-artin-action-on-a-free-group`

- Run: `frontier-38-owner-30`; role `alpha-high`; label
  `step3b-pair-the-artin-action-on-a-free-group-8d36e452b43427d9`.
- Pair: A `the-artin-action-on-a-free-group` (order 743, braid-groups) /
  B `the-artin-action-on-a-free-group-examples` (order 744), batch 15.
- Owned inputs: the 27 batch-15 manifest rows of this pair only. Sibling pairs in
  batch 15 (`lawrence-krammer-bigelow-and-linearity`) and the other 29 pairs are
  preserved untouched; shared files are not edited outside this pair's rows.

## Owned IDs and open obligations at entry

A page (23): `def-standard-meridians-of-a-punctured-disk`,
`lem-smooth-relative-isotopy-extension-for-disk-arcs-with-puncture-endpoints`,
`def-peripheral-boundary-preserving-automorphism-of-f-n`,
`lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints`,
`lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis`,
`lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk`,
`lem-a-based-self-map-of-the-punctured-disk-inducing-the-identity-on-pi-one-is-based-homotopic-to-the-identity`,
`lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians`,
`thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians`,
`def-artin-automorphisms-of-the-free-group`,
`lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy`,
`lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy`,
`lem-artin-automorphisms-satisfy-the-braid-relations`,
`lem-artins-product-cancellation-dichotomy`,
`def-the-artin-representation-on-a-free-group`,
`lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-is-isotopic-to-the-identity`,
`lem-an-extremal-cancellation-shortens-an-artin-substitution`,
`lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word`,
`prop-the-geometric-action-on-meridians-is-the-artin-representation`,
`thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism`,
`thm-the-artin-representation-is-faithful`,
`cor-the-artin-action-solves-the-braid-word-problem`,
`thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n`.

B page (4): `ex-the-artin-action-of-the-b-three-generators`,
`ex-the-full-twist-acts-by-boundary-conjugation`,
`cex-the-induced-permutation-does-not-determine-a-braid`,
`cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin`.

Entry obligations: (1) author the 27 missing item files; (2) create both library
pages on the A and B page ids; (3) create
`research/frontier-38-owner-30-batch-15.proof-contracts.json` covering all 27;
(4) record current `accept`/`repaired` item decisions for all 27 with the examined
dependency IDs after final edits; (5) run explicit-path precheck, rendercheck,
content-policy item mode, strict proof contracts, dependency-level checks and
`validate-plan`; (6) run `proof-layout.mjs` once over every changed item path.

No supplier in the closure is unauthored: every out-of-run dependency is a
published item on disk (verified individually), and every in-run dependency is a
manifest item of this same pair. No escalation is opened at entry.

## Authoring order and checkpoints

Authoring follows the dispatch's ascending `dependency_level` order, ties broken
by page order then item ID. Each checkpoint below was re-verified against disk.

(Entry checkpoint 2026-10-03: read `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, the
batch-15 notes/coverage/manifest/cross-batch file, the Step 3a pair report and
scope receipt, the owner authoring direction, the BG-8 design section, the plan
entries 743/744, and the load-bearing published suppliers named in the batch
notes. The scaffold is authoring-ready; one mathematical convention defect was
found and is recorded first below.)

## Finding 1 (convention repair, forced by the geometric read-off)

The scaffold froze two mutually inconsistent conventions:

- `def-elementary-geometric-half-twist` (published) fixes the library's positive
  half twist as the **anticlockwise** rotation of the pair about its midpoint,
  and `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`
  (published) identifies $\Psi(\varphi_n(\sigma_i))$ with exactly that
  homeomorphism $H_i$.
- The scaffold's `def-artin-automorphisms-of-the-free-group` imported from
  Gonzalez-Meneses (and Artin (14)) the substitution
  $\rho(\sigma_i)(x_i)=x_{i+1}$, $\rho(\sigma_i)(x_{i+1})=x_{i+1}^{-1}x_ix_{i+1}$
  and `prop-the-geometric-action-on-meridians-is-the-artin-representation`
  claims the geometric action *equals* $\rho$.

The geometric read-off was computed directly under the library's frozen
conventions (straight stems from $d=(0,1)$, positive $=$ counterclockwise
meridians, the anticlockwise supported half rotation $H_i$): pulling back the
standard meridians through $H_i$ gives
$$(H_i)_*(x_i)=x_ix_{i+1}x_i^{-1},\qquad (H_i)_*(x_{i+1})=x_i,\qquad
(H_i)_*(x_j)=x_j\ (j\notin\{i,i+1\}),$$
the **inverse** of the imported substitution; the mirror (clockwise) half
rotation realizes the imported formulas. The read-off is confirmed by: (a) the
action fixes $x_j$ for $j\notin\{i,i+1\}$ (the stem $s_j$ avoids the closed disk
of radius $h$ about $m_i$ on which the moving punctures' tracks live); (b)
$H_*$ fixes $x_1\cdots x_n$ because $H$ fixes $\partial D^2$ pointwise and
$[\partial]=x_1\cdots x_n$; (c) $H_*(x_i)$ is a conjugate of $x_{i+1}$ and
$H_*(x_{i+1})$ a conjugate of $x_i$ (lassos with positive circles); (d) an
explicit crossing-word computation in the twice-punctured disk (crossings read
against the slits, calibrated on $x_1,x_2$, on the boundary loop and on products,
stable under the choice of circle radius, and confirming
$(H_*)^2=\mathrm{Inn}(\delta)$ with $\delta=x_1x_2$).

Repair (authorized by the scaffold note "the display is adjusted only if the
geometric read-off forces it (the algebraic convention then propagates)"):
`def-artin-automorphisms-of-the-free-group` freezes the library's geometric
convention
$$\rho(\sigma_i)(x_i)=x_ix_{i+1}x_i^{-1},\qquad \rho(\sigma_i)(x_{i+1})=x_i,$$
with inverse $\rho(\sigma_i)^{-1}(x_i)=x_{i+1}$,
$\rho(\sigma_i)^{-1}(x_{i+1})=x_{i+1}^{-1}x_ix_{i+1}$, and every downstream
algebraic item is re-derived with this convention. This is Artin's (14)/(15)
with the letter and its inverse interchanged: with the library's stacking
convention the positive half twist realizes the inverse of the substitution
Artin attaches to the same letter. Every page-level promised claim (geometric
action $=\rho$, faithfulness, characterization of the image, word problem, both
B-page counterexamples, $B_3$ table, full twist) is preserved in substance; the
subgroup $\operatorname{im}\rho\le\operatorname{Aut}(F_n)$ is unchanged. The
repair is recorded here for Step 4/5 attention.

## Finding 2 (missing declaration, non-blocking)

The Step 3a review's note is confirmed and repaired in authoring:
`cor-the-artin-action-solves-the-braid-word-problem` declares the published
`thm-word-problem-for-free-groups` among its dependencies (reduced words are
effectively computable).

## Finding 3 (source-check obligations discharged in the items)

The three Step-3 obligations recorded by the batch notes are discharged inside
the authored proofs rather than by citation only: the geometric read-off prints
the comparison at the support disc $U_i$ (Finding 1); the end-continuity of the
tracked puncture is proved in
`lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy`;
the smooth/topological arc-isotopy comparison is proved in
`lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy`;
the F-M arc bigon criterion and the Jordan-Schönflies input are reproduced at
the level of the statements used in their consuming items.

## Checkpoints at authoring (per item, in dependency order)

All 27 files were authored and then made mechanically clean in this order
(levels recomputed from the final dependency graph; the four definitions have
no numbered steps):

- **Level 0–1 (geometry spine).** `def-standard-meridians-of-a-punctured-disk`;
  `lem-smooth-relative-isotopy-extension-for-disk-arcs-with-puncture-endpoints`
  (level 1 after the audit added `def-standard-meridians-of-a-punctured-disk`
  to its deps, see below); `def-peripheral-boundary-preserving-automorphism-of-f-n`;
  `lem-homotopic-simple-proper-arcs-in-the-punctured-disk-are-isotopic-relative-to-their-endpoints`
  (the missing use of its source's homotopy-to-isotopy clause was supplied by
  citing [F2] in step 1.1); `lem-the-standard-flower-...`;
  `lem-the-standard-stem-system-cuts-the-punctured-disk-open-to-a-disk`.
- **Level 2–3.** `thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians`
  (the n=0 paragraph was moved before the comparison step so the proof is
  strictly dependency-layered); `lem-the-oriented-boundary-loop-...`;
  `lem-a-based-self-map-...`; `def-artin-automorphisms-of-the-free-group`;
  `lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy`.
- **Level 4–5.** `lem-a-standard-stem-arc-system-can-be-straightened-...`
  (induction tags base/IH/discharge added, citation layers renumbered);
  `lem-artin-automorphisms-satisfy-the-braid-relations`; `lem-artins-product-cancellation-dichotomy`;
  `def-the-artin-representation-on-a-free-group`;
  `lem-a-boundary-fixed-punctured-disk-map-acting-trivially-on-pi-one-...`;
  `lem-an-extremal-cancellation-shortens-an-artin-substitution`.
- **Level 6.** `lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word`;
  `prop-the-geometric-action-on-meridians-is-the-artin-representation`;
  `thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism`;
  `ex-the-artin-action-of-the-b-three-generators`;
  `ex-the-full-twist-acts-by-boundary-conjugation`;
  `cex-the-induced-permutation-does-not-determine-a-braid`.
- **Level 7–8.** `thm-the-artin-representation-is-faithful`;
  `cex-permuting-meridian-conjugacy-classes-without-fixing-the-boundary-word-is-not-artin`;
  `cor-the-artin-action-solves-the-braid-word-problem`;
  `thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n`.

Every numbered step was rewritten onto one physical line with its trailing
tags (required by the precheck's tag detector) and every display block was
folded to a single source line (required by rendercheck); internal step
references were renumbered to the canonical citation layering and audited for
stale targets. The four definitions carry no proof section and are
precheck-`n/a`.

## Independent verification of the convention repair (Finding 1)

The read-off was verified independently of the written proof by tracing the
explicit half rotation of `def-elementary-geometric-half-twist` /
`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`
step 1.3 on the standard meridian polygons and reading the resulting free-group
words against a calibrated slit system (read-off calibrated by recovering
`read(x_j)=x_j` and `read(∂)=x_1⋯x_n` for n=2,3,4,5). Results, uniform in
n∈{2,3,4} and every adjacent index i:
`(H_i)_*(x_i)=x_ix_{i+1}x_i^{-1}`, `(H_i)_*(x_{i+1})=x_i`,
`(H_i)_*(x_j)=x_j` for j∉{i,i+1}. The full twist was verified symbolically by
the induction of `ex-the-full-twist-acts-by-boundary-conjugation` for n=2..6:
`ρ((σ_1⋯σ_{n-1})^n)(x_i)=δx_iδ^{-1}`. This is exactly the repaired
convention, and it is the inverse of the scaffold's imported Artin
substitution; equivalently the mirror (clockwise) half rotation realizes the
scaffold's display.

## Checks actually run (all on current content)

| check | command (paths abbreviated to `items/<27 owned>`) | result |
|---|---|---|
| precheck | `node tools/tsx-run.mjs tools/precheck.mts items/<27>` | 23 checked, 0 failing (4 definitions `n/a`) |
| rendercheck | `node tools/rendercheck.mjs items/<27> library/braid-groups/the-artin-action-on-a-free-group{,-examples}.md` | OK, 29 files |
| proof-layout (final, single batched command) | `node tools/proof-layout.mjs items/<27>` | 27 items, 116 steps, 0 defects |
| content policy (item mode) | `node tools/content-policy.mjs /tmp/f38/batch15-manifest.json` (exact copy of this batch's two manifest pages) | 27 scoped items, 0 errors, 0 warnings |
| strict proof contracts | `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-15.proof-contracts.json --strict` | 0 errors, 0 warnings, 27/27 items |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` | 816 items / 60 pages consistent; max level 16 |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-15.pages.json` | 27 items, 0 errors |
| depcheck (scoped) | `node tools/depcheck.mjs --items-file /tmp/f38/our-ids.json --quiet` | no errors or warnings naming any of the 27 owned items; the remaining corpus errors are pre-existing and unrelated (scheme-theory `page-item-missing`, unrelated `b-leaf-content`, a `page-cycle`) |
| validate-plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; 289 planned pages still item-less (this pair is one of them pre-splice, re-run after splice) |
| step-3 decisions | `node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase final` | no open work for this pair; 27/27 accepted, run-wide 495/816 (other batches in flight) |
| fwdcheck / extcheck (scoped) | `node tools/fwdcheck.mjs|extcheck.mjs --items-file /tmp/f38/our-ids.json --quiet` | no findings for the 27 owned items (only unrelated pre-existing corpus findings) |
| pathcheck | `node tools/pathcheck.mjs` | 0 errors, 30 warnings, none naming this pair's pages |

Item decisions were recorded with `node tools/step3-decisions.mjs record-item`
(no `--owner`, no judge or audit stamps): 19 `accept`, 8 `repaired`
(`def-artin-automorphisms-of-the-free-group`,
`lem-an-extremal-cancellation-shortens-an-artin-substitution`,
`lem-artin-automorphisms-permute-meridian-conjugacy-classes-and-fix-the-boundary-word`,
`prop-the-geometric-action-on-meridians-is-the-artin-representation`,
`cor-the-artin-action-solves-the-braid-word-problem`,
`ex-the-artin-action-of-the-b-three-generators`,
`ex-the-full-twist-acts-by-boundary-conjugation`,
`cex-the-induced-permutation-does-not-determine-a-braid`), all with
confidence 1, the examined dependency ID list, and check evidence.

## Dependencies added or refreshed; manifest sync

- `cor-the-artin-action-solves-the-braid-word-problem` gained the published
  supplier `thm-word-problem-for-free-groups` (Finding 2; the effective
  decidability of reduced-word comparison). This is the only added item
  dependency that is a supplier outside the pair.
- `lem-smooth-relative-isotopy-extension-for-disk-arcs-with-puncture-endpoints`
  gained `def-standard-meridians-of-a-punctured-disk` (its [F3] genuinely uses
  the straight-stem construction). Its computed `dependency_level` is therefore
  **1**, not the scaffold's 0; the frontmatter and the manifest row were both
  updated, and the level check confirms consistency. The dispatch's authoring
  order was already satisfied and its other level labels are unchanged.
- `lem-a-standard-stem-arc-system-can-be-straightened-...` and
  `lem-a-boundary-fixed-punctured-disk-map-acting-trivially-...` gained
  `def-standard-meridians-of-a-punctured-disk`, and
  `lem-the-standard-flower-...` gained `def-homeomorphism-and-open-maps`;
  `lem-homotopic-simple-proper-arcs-...` dropped a marginal
  `def-homeomorphism-and-open-maps` citation/link. No level changed.
- All deps/justified_by rows of this pair were synced to the authored files in
  both frontmatter and `research/frontier-38-owner-30-batch-15.pages.json`;
  sibling pairs and other batches were not touched. No statement, title, kind,
  id, or page metadata in the manifest was changed (the Step-3a scope hash is
  preserved).

## Step-4 splice mismatches (frozen manifest statement vs verified content)

The manifest statements are scaffold-frozen and were **not** edited; under the
repaired convention the following inherited displays are the inverse of (or
inconsistent with) the verified content and must be reconciled by the Step-4
splice, with the item file's version as the checked one:

1. `def-artin-automorphisms-of-the-free-group`: the manifest assigns
   `ρ(σ_i)(x_i)=x_{i+1}`, `ρ(σ_i)(x_{i+1})=x_{i+1}^{-1}x_ix_{i+1}`; the item
   freezes `ρ(σ_i)(x_i)=x_ix_{i+1}x_i^{-1}`, `ρ(σ_i)(x_{i+1})=x_i` with inverse
   `ρ(σ_i)^{-1}(x_i)=x_{i+1}`,
   `ρ(σ_i)^{-1}(x_{i+1})=x_{i+1}^{-1}x_ix_{i+1}`. The scaffold's display is
   Artin's (14)/(15) with σᵢ interchanged with σᵢ⁻¹ and is realized by the
   mirror half rotation.
2. `lem-an-extremal-cancellation-shortens-an-artin-substitution`: the manifest
   says `A':=A∘ρ(σ_i)^{-1}` in the left-factor alternative and prints
   `ρ(σ_i)^{-1}(x_i)=x_ix_{i+1}x_i^{-1}`, `ρ(σ_i)^{-1}(x_{i+1})=x_i`, which
   are the values of `ρ(σ_i)`, not of its inverse; the item says
   `A':=A∘ρ(σ_i)` in that alternative with the correct inverse display
   (Artin's case (a) `Bσ_i^{-1}` corresponds to post-composing with our
   `ρ(σ_i)`).
3. `ex-the-artin-action-of-the-b-three-generators`: the manifest table uses
   Artin's values `x_1↦x_2`, `x_2↦x_2^{-1}x_1x_2`; the item tabulates the
   frozen values `x_1↦x_1x_2x_1^{-1}`, `x_2↦x_1` and verifies the braid
   relation with them.
4. `ex-the-full-twist-acts-by-boundary-conjugation`: the manifest says
   `ρ(Δ²)(x_i)=δ^{-1}x_iδ`; the verified formula is
   `ρ(Δ²)(x_i)=δx_iδ^{-1}` (conjugation by the boundary word).
5. `cex-the-induced-permutation-does-not-determine-a-braid`: the manifest says
   `ρ(σ_1²)(x_1)=x_2^{-1}x_1x_2`; the verified value is
   `ρ(σ_1²)(x_1)=x_1x_2x_1x_2^{-1}x_1^{-1}` (the item proves it in step 1.1).

`prop-the-geometric-action-on-meridians-is-the-artin-representation`'s
statement is convention-neutral and needs no splice change, but its scaffold
`proof_strategy` text displays the inverse direction; the authored item's
read-off (steps 2.1–4.1) and Finding 1 supersede it. All other 21 owned items'
statements are semantically as scaffolded (wording expanded).

## Published concerns

No published defect was found. The convention defect of Finding 1 lived in
this run's scaffold only: the published items
`def-elementary-geometric-half-twist` and
`thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`
(parts 1–2) are mutually consistent and force the repaired read-off, and the
published suppliers (`thm-the-artin-presentation-is-complete-for-geometric-braids`,
`prop-the-artin-presentation-surjects-onto-geometric-braids`,
`thm-word-problem-for-free-groups`, the free-group and choice items) were read
at their statements before use. No suspicion is recorded against any published
item; no ledger update is made here (left to the serial reconciler).

## Open obligations and audit pointers

- No open obligation remains inside this pair: every assigned item file, both
  library pages, the batch proof-contract file, and all Step-3 gates are
  current, and the 27 item decisions are recorded. The pair's Step-3a scope
  decision was already closed (`sufficient`); run-wide scope work still open
  belongs to `thom-spaces-normal-data-and-collapse-maps` (another owner).
- Pointers for the independent Steps 5–8 audit (flagged, not defects): the
  read-off steps 2.1–4.1 of
  `prop-the-geometric-action-on-meridians-is-the-artin-representation` are a
  picture computation (independently verified here as described above, but the
  written proof remains a read-off); step 2.1 of
  `lem-a-standard-stem-arc-system-can-be-straightened-...` constructs the
  relative isotopy inside the cut-open disk and its avoidance of the growing
  closed set `C_k` deserves an independent check; step 3.1 of
  `lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy`
  uses an endpoint-track argument whose stages must be checked to preserve `Q_n`
  pointwise; `lem-a-based-self-map-...` and
  `lem-a-boundary-fixed-...` inherit the aciclicity of the flower retraction
  and the Alexander contraction, both choice-inputs recorded in place.
- Step 4 must mechanically splice the five statement displays listed above
  (item file wins) and re-run `validate-plan` after the splice; this pair's
  pages are among the 289 planned pages still reported item-less by
  `validate-plan`.
