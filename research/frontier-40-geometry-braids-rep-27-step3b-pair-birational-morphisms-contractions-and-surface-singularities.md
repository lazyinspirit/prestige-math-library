# Step 3b — pair `birational-morphisms-contractions-and-surface-singularities` (dispatch report)

- Run: `frontier-40-geometry-braids-rep-27`
- Dispatch label: `step3b-pair-birational-morphisms-contractions-and-surface-singularities-4052508f2bd19e63`
- Role: alpha-high scaffold auditor and item author
- A page: `birational-morphisms-contractions-and-surface-singularities` (order 913, category `algebraic-geometry`, 86 items)
- B page: `birational-morphisms-contractions-and-surface-singularities-examples` (order 914, 2 items)
- Batch: 25 only (this pair is the sole pair of batch 25; batch 26 is the sibling
  `higher-dimensional-resolution-of-singularities` pair, which is being built concurrently
  and is not touched here)
- Report path (this file): `research/frontier-40-geometry-braids-rep-27-step3b-pair-birational-morphisms-contractions-and-surface-singularities.md`

## Owned IDs and entry obligations

All 88 manifest rows of batch 25 are owned: the 86 A-page items and the 2 B-page items
(`cex-normalization-is-not-a-blowup`, `ex-blowup-of-a-smooth-point`). No item file existed at
entry; every owned item is newly authored this dispatch. Open obligations at entry:

1. Author all 88 items in the dispatch's dependency-level order, then author both page files.
2. Sibling suppliers: `higher-dimensional-resolution-of-singularities` (batch 26) is the only
   in-run consumer of this pair; no owned item depends on an unfinished sibling item — every
   external dependency of the manifest resolves to an already-published item file (805 declared
   edges checked at entry). Re-verify at handoff.
3. Register the pair in manifests (already present as scaffold), coverage (present),
   proof contracts (to be created), and pages (to be created).

Checkpoints appear below in dependency order as each item is authored and checked.

## Checkpoint 1 (items 1-3, dependency 0)

- `def-exceptional-curve-and-contraction` — authored (Definition + Remarks). Deps synced:
  added `def-blowup-scheme-along-ideal` (linked in the statement but absent from the scaffold
  row's deps). Contract: 0 citations, 8 boundary rows. precheck n/a (definition);
  rendercheck OK.
- `def-normal-surface-modification-and-normalized-point-blowup` — authored (Definition +
  Remarks). Deps unchanged. Contract: 0 citations, 8 boundary rows. precheck n/a;
  rendercheck OK.
- `lem-cm-local-codimension-and-regular-quotient-ext-concentration` — authored. Deps synced:
  added `lem-cm-local-regular-sequence-dimension-drop`,
  `thm-auslander-buchsbaum-serre-regularity-criterion`,
  `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes` (DC),
  `thm-localisation-of-hom-for-finitely-presented-modules`,
  `cor-localisations-of-regular-local-rings-are-regular`; removed
  `cor-regular-quotient-cohen-macaulay-equivalence` and
  `thm-dimension-and-parameters-for-modules` (not used by the authored proof). Proof steps
  canonically relayered; precheck PASS (direct). Contract: 14 citations, 11 derivations,
  8 boundaries; `proof-contract --strict` 0 errors on the three authored entries,
  `boundary-audit` and `citation-fidelity` clean.
- Tool conventions fixed by these items: steps are written as single source lines (one line
  per numbered step) so the line-based precheck sees the trailing tag; display math stays on
  its own line.
- Open obligations so far: none; the batch manifest dep sync for item 1 and item 3 is
  recorded here and is performed in the single manifest edit pass at the end.

Next action: author `lem-effective-cartier-divisor-has-no-embedded-associated-primes`.

## Checkpoint 2 (items 4-14, dependency 0)

Authored, precheck PASS (direct), rendercheck OK. Contract boundary rows are written at the
end of each item's authoring in the batch contract (see the contracts section at handoff).

- 4 `lem-effective-cartier-divisor-has-no-embedded-associated-primes` — deps synced: added
  `thm-effective-cartier-divisor-closed-immersion`,
  `lem-cm-local-regular-sequence-dimension-drop`,
  `thm-regular-local-rings-are-domains-and-cohen-macaulay`,
  `thm-associated-primes-localise`,
  `lem-ring-detected-at-associated-prime-localizations`; dropped
  `cor-regular-quotient-cohen-macaulay-equivalence`.
- 5 `lem-equicharacteristic-fixed-coordinate-blowup-chain-defines-formal-arc` — deps unchanged.
- 6 `lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces` — deps synced:
  added `cor-closed-points-dense-in-affine-spectra`, `thm-etale-locus-open`,
  `thm-etale-morphisms-open-and-quasi-finite`, `thm-regular-local-rings-are-normal`.
- 7 `lem-finite-birational-algebra-descends-from-a-flat-completion-neighbourhood` — deps
  unchanged.
- 8 `lem-finite-over-projective-noetherian-affine-base-is-projective` — deps unchanged.
- 9 `lem-finite-regular-base-algebra-dualizing-biduality` — deps unchanged.
- 10 `lem-nonzero-section-vanishing-at-a-point-has-positive-degree` — deps unchanged.
- 11 `lem-normal-local-surface-radical-multiple-of-a-principal-divisor` — deps unchanged.
- 12 `lem-rank-one-torsion-free-surface-module-principalized-by-an-ideal-blowup` — deps
  unchanged.
- 13 `lem-regular-surface-reflexive-modules-and-codimension-one-lattices` — deps synced:
  added `thm-auslander-buchsbaum-serre-regularity-criterion`,
  `thm-depth-zero-associated-prime-criterion`.
- 14 `lem-relative-projective-space-regular-local-base-twisted-resolution` — deps unchanged.

Tool conventions: steps are single source lines; each step cites the previous step so the
canonical layering keeps the authored reading order; `[tags] ∎` ends the final step.

Next action: author `lem-surface-completion-base-change-preserves-closed-fibre-local-completions`.

## Checkpoint 3 (items 15-20, completing dependency level 0)

All 20 level-0 items are authored with precheck PASS (direct) and rendercheck OK. Items
15-20 (`lem-surface-completion-base-change-preserves-closed-fibre-local-completions`,
`lem-surface-derivations-and-regular-hypersurfaces`, `lem-surface-finite-completion-factors`,
`lem-surface-flat-base-change-coherent-cohomology-by-cech`,
`lem-surface-geometric-regularity-field-test-and-generic-spread`,
`lem-surface-p-basis-subfield-separation`) have unchanged deps. Open obligations: contract
boundary rows for items 4-20 are written in the final batch-contract pass; no escalations yet.

Next action: dependency level 1, beginning with `lem-blowing-up-a-regular-point-is-a-contraction`.

## Checkpoint 4 (all of dependency level 1, items 21-32)

Authored and checked (precheck PASS `direct`, rendercheck OK; 32 item files total now).

- 21 `lem-blowing-up-a-regular-point-is-a-contraction`, 22
  `lem-universal-property-of-a-contraction`, 23
  `lem-cm-projective-curve-canonical-positive-twist-vanishing-generation`, 24
  `lem-existence-of-a-fibre-cutter`, 25
  `lem-finite-length-duality-over-a-regular-local-base`, 26
  `lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point`, 27
  `lem-proper-surface-regularity-transfers-to-and-from-completion`, 28
  `lem-quadratic-in-a-square-ideal-with-nontrivial-colength-is-a-square`, 29
  `lem-relative-projective-space-derived-duality-regular-local-base`, 30
  `lem-surface-modification-isomorphism-in-codimension-one`, 31
  `lem-surface-non-pth-power-detected-by-derivation`, and the B item 32
  `cex-normalization-is-not-a-blowup` — deps unchanged from the scaffold rows except where
  noted in checkpoints 1-3.
- Authoring mechanics (reusable): per-item spec JSON in `/tmp/f40/specs/`, item generator
  `/tmp/f40/genitem.py` (frontmatter and Statement copied from the batch manifest; facts
  restated from the cited suppliers' own statement sections; steps layered canonically by
  `/tmp/f40/fixsteps.py`), contract generator `/tmp/f40/clib.py`. Scratch files live only under
  `/tmp/f40/` and are not part of the handoff; the durable records are the item files, the
  batch contract, and this report.
- Every generated item's `Statement`/`Definition` body is the batch-manifest statement, with
  `[[`/`]]` inside power-series math rewritten as `[\![`/`]\!]` to satisfy the renderer's
  wikilink-in-math rule (only `lem-surface-p-basis-subfield-separation` is affected).

Next action: dependency level 2, beginning with
`lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces`.

## Checkpoint 5 (all of dependency level 2, items 33-40)

Completed, precheck PASS `direct`, rendercheck OK:
`lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces`,
`lem-local-normal-surface-modification-dimension-and-projective-cohomology`,
`lem-positive-conormal-degree-of-a-fibre-divisor`,
`lem-projective-regular-local-base-coherent-duality-by-embedding`,
`lem-surface-complete-equicharacteristic-finite-integral-closure`,
`lem-surface-generic-power-series-formal-fibres`, `lem-surface-open-regular-locus`,
`ex-blowup-of-a-smooth-point` (B). Deps unchanged.

Editorial note: the earlier "running state / remaining plan" section that stood here was a
mid-authoring resume aid. It is superseded by checkpoints 6-10 and the handoff section below;
its list of unauthored ids and scratch paths is no longer part of the record.

## Checkpoint 6 (levels 3-8 complete, 58 items authored)

Levels 3-8 are done. The item files added since checkpoint 5 (all precheck PASS, rendercheck
OK, deps as in the manifest unless a checkpoint says otherwise):
`lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate`,
`lem-normal-projective-surface-dualizing-module-over-regular-local-base`,
`lem-normal-surface-fibre-divisor-conormal-degree-positive`,
`lem-normal-surface-modification-leray-short-exact-sequence`,
`lem-surface-complete-equicharacteristic-formal-fibres`,
`thm-negativity-for-exceptional-curves-on-smooth-surfaces`,
`lem-surface-completed-polynomial-generic-fibre`, `lem-surface-finite-type-formal-fibres`,
`lem-surface-finite-type-normalization-finite`, `lem-surface-regular-fibres-preserve-normality`,
`lem-finite-normal-surface-cover-completed-local-degree-bound`,
`lem-local-normalized-point-blowup-sequences-spread-at-closed-points`,
`lem-normal-surface-normalization-commutes-with-base-completion`,
`lem-normalized-point-blowups-dominate-local-normal-surface-modifications`,
`lem-projective-normal-surface-modification-h1-injects-off-special-fibre`,
`def-rational-normal-surface-singularity-and-bounded-modification-h1` (definition, with a
justification remark; contract boundary rows still to write),
`lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point`,
`lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme`,
`lem-normal-surface-modification-no-derived-residue-map`,
`lem-normal-surface-modification-uniform-principal-torsion-bound`,
`lem-normalized-surface-point-blowup-resolution-descends-from-completion`,
`lem-contracted-curve-count-decreases-under-a-point-blowup-factorization`.

Next action: remaining level-9 items, then levels 10-22, then pages/contracts/decisions/gates.

## Checkpoint 7 (levels 10-13 remainder, 8 items)

Authored in dispatch order after the compaction point; each item precheck PASS (direct) and
rendercheck OK at the time of writing.

- `lem-regular-base-dualizing-traces-compose-on-rational-modifications` (level 10) — 7 steps.
  Trace defined as the image of the identity of $D_{X'}$ under the evaluation identifications;
  composition, the rational isomorphism and the adjoint evaluations are separated. Deps synced:
  added `lem-surface-modification-isomorphism-in-codimension-one` (codimension-one isomorphism
  used in the rational case).
- `lem-regular-base-surface-cartier-curve-canonical-adjunction` (level 11) — 6 steps. Deps
  synced: added `def-serre-r-k-and-s-k-conditions` and
  `cor-serre-normality-criterion-two-directions`, used to see that the normal surface is
  Cohen--Macaulay and that a Cartier divisor in it is a Cohen--Macaulay curve, so that Serre
  duality identifies the adjunction sheaf as a curve canonical module.
- `lem-regular-surface-point-blowup-canonical-transform` (level 11) — 5 steps; local
  Laurent/Koszul computation on the incidence hypersurface, no singular-centre formula claimed.
- `lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module` (level 12) —
  6 steps; the lattice bound $d-\operatorname{length}(F'/J)\ge-1$ is proved at the exceptional
  DVR and extended by the reflexive criterion.
- `lem-rational-singular-point-blowup-canonical-pullback-surjective` (level 12) — 7 steps;
  $H^1(\omega_X(n))=0$ by downward induction from Serre vanishing with the
  $H^1(\omega_E\otimes L^{n+1})=0$ curve input, then surjectivity of the canonical evaluation by
  Nakayama along $E$ plus the identification away from $E$.
- `lem-rational-normal-surface-reduced-to-invertible-canonical-module` (level 13) — 6 steps.
  Deps synced: added `lem-blowup-of-closed-point-of-regular-surface-is-regular` for deleting
  regular-centre subtrees.
- `lem-complete-regular-surface-degree-p-extension-has-bounded-h1` (level 13) — 7 steps. The
  scaffold statement wrote $k[[u,v]]$ inside math; the item states $k[\![u,v]\!]$ so that the
  renderer does not read a wikilink inside KaTeX (rendercheck enforced). Deps unchanged.
- `lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function` (level 13) — 7 steps;
  $\deg L=2$ from $\chi(L^{-1})=-1$, then $\operatorname{gr}_{\mathfrak m}A\cong
  \kappa[T_1,T_2,T_3]/(q)$ by degreewise dimension comparison.

## Checkpoint 8 (levels 14-17, the four square-conic chart lemmas)

Authored from the owner's exact chart proof
`research/frontier-40-geometry-braids-rep-27-owner-surface-resolution/square-conic-closure.md`
(sections 1 and 2), which is the durable source-exact argument for the omitted Lipman
transition (Lipman, *Rational singularities* (1969), §24, printed pp. 264-268, relations (5)
and (5'); Lipman, *Desingularization of two-dimensional schemes* (1978), printed pp. 171-174,
relation (1.29) and the fixed-coordinate termination argument). No classification diagram is
imported.

- `lem-nonsquare-tangent-conic-rational-surface-blowups-terminate` (level 14) — 8 steps;
  singularity of a point forces the fibre equation into the square of the plane maximal ideal,
  residue degree > 1 would make the quadratic a square, at most one singular successor, and the
  fixed-coordinate arc argument on the normal completion excludes an infinite chain.
- `lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic` (level 15) — 6 steps;
  the controlling cubic $H$ is nonzero by the generic-DVR valuation argument, singular
  successors lie over its zeros, simple zeros give nonsquare successors, and a degree-three $H$
  has at most one multiple closed zero (degree one).
- `lem-double-plus-simple-cubic-rational-surface-branch-terminates` (level 16) — 8 steps; exact
  relation (S) $z^2+axy^2\in z\mathfrak m^2+(x,y)^4$, the full $x$-chart equation (S1), the
  square correction $w=v+\delta x$, equation (S2) and the stable invariant preservation, then
  the fixed-coordinate arc termination.
- `lem-triple-cubic-rational-surface-branch-reduces-in-two-steps` (level 17) — 9 steps;
  relations (T), (T$'$), (T1), (T2), the unit alternative $\rho$ or $\sigma$, the swap that
  recovers (T$'$) with $\rho$ a unit, and the E8-form check. No division by 2 or 3.

All four items have `provenance.proof: ai-altered` with the Lipman sources above; all four pass
precheck (direct) and rendercheck.

## Checkpoint 9 (levels 18-21, 4 items)

- `thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups` (level 18) —
  finite-tree argument: persistence of the Gorenstein/rational/normal-completion hypotheses,
  the conic dichotomy, the two chart branches, finite branching and absence of infinite branches.
- `lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups`
  (level 19) — conversion of a regular proper birational model into a normalized-point sequence,
  with deletion of regular-centre subtrees.
- `thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups`
  (level 20) — strong induction on the fraction-field degree, intermediate-field reduction to a
  strictly smaller completed local cover, and the separable/degree-$p$ boundedness transfers.
- `thm-resolution-of-normal-surface-singularities` (level 21) — completion, descent, and
  local-to-global spreading; regularity over an arbitrary field, smoothness only over a perfect
  field.

## Checkpoint 10 (level 22, the scope remark) and all-items-authored

- `rem-surface-contraction-and-resolution-scope-boundaries` (level 22) — remark,
  `verification.precheck: n/a`, sources as in the scaffold row; records the commissioned claims
  and the four deliberately unclaimed stronger statements.
- All 88 owned item files now exist (86 A + 2 B). `origin: pipeline`,
  `pipeline_run: frontier-40-geometry-braids-rep-27`, `status: draft` throughout.

## Checkpoint 11 (post-authoring reconciliation and repairs)

- **Dangling links in restated facts.** 81 items carried wikilinks inside auto-restated facts to
  items absent from their declared deps (81 × `def-choice-function` from the AC fact, plus
  per-item secondary links copied from supplier statements). Repair: every such link was
  replaced by plain text while the fact's own source link was kept; the check now finds 0
  undeclared links in Statements or Facts, and proof-contract
  `citation-undeclared-dependency` errors fell from 237 to 0.
- **Uncited facts.** 10 items had a fact that no proof step cited. The AC/DC-style facts were
  cited in the final step of the item (truthful: the statement assumes them); 7
  background-definition facts with dangling secondary links had those links removed and remain
  as context. During that edit 17 files temporarily lost their frontmatter delimiters (a writer
  bug in the scratch tooling, not in any shipped content); all 17 were repaired and every one of
  the 88 items was re-verified to have a well-formed frontmatter block with `id`, `kind`,
  `title`, `status: draft`, `deps` and `verification`.
- **Truncation-mangled links.** Four items carried a malformed opening `[[` left by sentence
  truncation of a restated fact: `lem-nonzero-section-vanishing-at-a-point-has-positive-degree`
  (F6), `thm-resolution-of-normal-surface-singularities` (F11), `cex-normalization-is-not-a-blowup`
  (F5) and `ex-blowup-of-a-smooth-point` (F4). Each was repaired to clean prose with a properly
  closed source link; the two facts that thereby gained a declared source link
  (`lem-euler-characteristic-finite-support-twist-invariance`,
  `lem-blowup-intersection-matrix-at-smooth-point`) had their contract entries regenerated
  (citations 901 -> 903). The four items were re-checked and their 21 transitive consumers'
  item receipts were refreshed so that every receipt is bound to the repaired inputs; no
  consumer's content changed. `depcheck` now reports 0 errors and 0 warnings for this pair.
- **Stale step cross-references.** Three items from the earlier authoring pass contained
  references to non-existent steps ("steps 1.1 and 1.2" and "steps 2.1 and 1.4" — multi-number
  references that the canonical relabeler does not rewrite). Corrected to the existing labels
  (2.1 and 4.1 respectively); precheck re-passed.
- **Manifest dependency sync (8 rows).** Additions:
  `def-exceptional-curve-and-contraction` + `def-blowup-scheme-along-ideal`;
  `lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces` +
  `cor-closed-points-dense-in-affine-spectra`, `thm-etale-locus-open`,
  `thm-etale-morphisms-open-and-quasi-finite`, `thm-regular-local-rings-are-normal`;
  `lem-effective-cartier-divisor-has-no-embedded-associated-primes` +
  `thm-effective-cartier-divisor-closed-immersion`,
  `lem-cm-local-regular-sequence-dimension-drop`, `thm-associated-primes-localise`,
  `thm-regular-local-rings-are-domains-and-cohen-macaulay`,
  `lem-ring-detected-at-associated-prime-localizations`, −
  `cor-regular-quotient-cohen-macaulay-equivalence`;
  `lem-cm-local-codimension-and-regular-quotient-ext-concentration` +
  `lem-cm-local-regular-sequence-dimension-drop`,
  `thm-auslander-buchsbaum-serre-regularity-criterion`,
  `thm-projective-dimension-at-most-n-iff-higher-ext-vanishes`,
  `thm-localisation-of-hom-for-finitely-presented-modules`,
  `cor-localisations-of-regular-local-rings-are-regular`, −
  `cor-regular-quotient-cohen-macaulay-equivalence`,
  `thm-dimension-and-parameters-for-modules`;
  `thm-factorization-of-birational-morphisms-of-smooth-surfaces` +
  `def-exceptional-curve-and-contraction`;
  `lem-regular-base-dualizing-traces-compose-on-rational-modifications` +
  `lem-surface-modification-isomorphism-in-codimension-one`;
  `lem-regular-base-surface-cartier-curve-canonical-adjunction` +
  `def-serre-r-k-and-s-k-conditions`, `cor-serre-normality-criterion-two-directions`;
  `lem-rational-normal-surface-reduced-to-invertible-canonical-module` +
  `lem-blowup-of-closed-point-of-regular-surface-is-regular`. Removed edges were scaffold
  suppliers the completed proofs do not use. No sibling-pair item was changed.
- **Batch proof contract.** `research/frontier-40-geometry-braids-rep-27-batch-25.proof-contracts.json`
  created: version 1, scope 88 items, 88 entries, 903 citations, 490 derivations, 704 boundary
  rows (8 per item); the two citations added by the truncation-link repair below are included.
  Boundary evidence is item-specific: each row names real step labels and the
  item's own subject; `iff-forward` is discharged with the actual implication direction for
  every item, and `iff-reverse` is `not_applicable` only for the 86 items whose statements
  assert no biconditional (specific reason per item).
- **Pages.** `library/algebraic-geometry/birational-morphisms-contractions-and-surface-singularities.md`
  (86 items, `status: draft`) and `...-examples.md` (2 examples, `status: draft`) created from the
  batch manifest; rendercheck OK on both.

## Checkpoint 12 (checks actually run) and decisions

Explicit-path checks, all clean for this pair:

- `node tools/proof-layout.mjs <88 changed item paths>` — 88 items, 490 steps, 0 defects (run
  once after the last item edit, batched in one command).
- `node tools/tsx-run.mjs tools/precheck.mts <88 paths>` — 84 checked, 0 failing (4
  definition/remark items have no proof section); `node tools/rendercheck.mjs <88 paths>` — all
  88 OK.
- `node tools/content-policy.mjs research/...-batch-25.pages.json` — 88 scoped items, 0 errors,
  0 warnings.
- `node tools/proof-contract.mjs research/...-batch-25.proof-contracts.json --strict` — 0
  errors, 0 warnings, 88/88 items.
- `node tools/citation-fidelity.mjs <batch contract>` — 903 citations, no missing quote, no
  widening candidate.
- `node tools/boundary-audit.mjs <batch contract> --fail-on-contradicted --fail-on-template` —
  704 rows, no template cluster at or above 3 members, no contradicted disposition.
- `node tools/finite-smoke.mjs <batch contract>` — 0 errors, 0 selected obligations.
- `node tools/manifest-deps.mjs research/...-batch-25.pages.json` — 88 items, 0 missing, 0
  errors; `node tools/audit-manifest.mjs research/...-batch-25.pages.json` — 822 relationships
  over 88 items, 0 defects, all classified published-backward.
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` —
  0 errors for this pair (other batches of the run report their own open level work, untouched
  here); `node tools/depcheck.mjs --json` — 0 errors mentioning this pair's items (repo-wide
  pre-existing published debt elsewhere, left to the reconciler); `fwdcheck`/`extcheck` — 0
  findings for this pair.
- `node tools/coverage-checklist.mjs research/...-batch-25.coverage.json --require-destination`
  — 0 errors, 1 warning: the B page's pre-existing low-yield harvest note (4/11 results
  scaffolded, "confirm the declines with Alpha"). This was present at scaffold and is not
  introduced by authoring; it is flagged for Alpha at the coverage gate.
- `node tools/validate-plan.mjs research/plan-spec.json` — OK, with the standard pre-splice
  NOTE that 257 planned pages carry no item list yet. That NOTE is a Step-4 splice obligation,
  not an item defect.
- `node tools/step3-decisions.mjs record-item` — 88 current review receipts (79 `accept`, 9
  `repaired`, confidence 1, examined dependency IDs supplied, concrete evidence in each reason),
  with 25 of them re-issued after the truncation-link repair so that every receipt hash binds the
  repaired inputs; `check --phase final` reports 0 open rows for this pair's scope decisions,
  items and pages.

## Recheck of the Step-3a pre-splice findings (current inputs)

- Unmet prerequisites: still none. `audit-manifest` reclassifies all 822 declared
  relationships of the authored pair as published-backward, with 0 defects, so nothing in the
  authored proof chain rests on a draft or in-run item.
- The deliberately excluded Castelnuovo existence direction and intersection-matrix negative
  definiteness are still disclosed by [[rem-surface-contraction-and-resolution-scope-boundaries]]
  and are not claimed anywhere else on the pair.
- The B page still carries exactly the two design-inventory items; no worked instance of the
  resolution theorem was added, matching the Step-3a disposition (the sibling AG-RES-1 example
  owns that library-level example).
- Stacks Lemma 54.15.5 coverage row: still `deferred` with no destination item on this pair, and
  no authored item of this pair claims its fuller statement; the substantive decline stands and
  no metadata change was required. (The item that cites 54.15.5,
  `thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface`, belongs to the sibling
  pair.)
- The Step-3a review left proof completeness to Step 3b; that is what the 88 authored items and
  the batch proof contract now supply.

## Handoff

- **Completed IDs (all 88).** A page (86):
  `def-exceptional-curve-and-contraction`, `lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces`,
  `lem-effective-cartier-divisor-has-no-embedded-associated-primes`,
  `lem-nonzero-section-vanishing-at-a-point-has-positive-degree`,
  `lem-surface-completion-base-change-preserves-closed-fibre-local-completions`,
  `lem-finite-regular-base-algebra-dualizing-biduality`,
  `lem-finite-birational-algebra-descends-from-a-flat-completion-neighbourhood`,
  `lem-finite-over-projective-noetherian-affine-base-is-projective`,
  `lem-equicharacteristic-fixed-coordinate-blowup-chain-defines-formal-arc`,
  `def-normal-surface-modification-and-normalized-point-blowup`,
  `lem-cm-local-codimension-and-regular-quotient-ext-concentration`,
  `lem-normal-local-surface-radical-multiple-of-a-principal-divisor`,
  `lem-rank-one-torsion-free-surface-module-principalized-by-an-ideal-blowup`,
  `lem-regular-surface-reflexive-modules-and-codimension-one-lattices`,
  `lem-relative-projective-space-regular-local-base-twisted-resolution`,
  `lem-surface-derivations-and-regular-hypersurfaces`,
  `lem-surface-finite-completion-factors`,
  `lem-surface-flat-base-change-coherent-cohomology-by-cech`,
  `lem-surface-geometric-regularity-field-test-and-generic-spread`,
  `lem-surface-p-basis-subfield-separation`,
  `lem-blowing-up-a-regular-point-is-a-contraction`,
  `lem-cm-projective-curve-canonical-positive-twist-vanishing-generation`,
  `lem-existence-of-a-fibre-cutter`, `lem-finite-length-duality-over-a-regular-local-base`,
  `lem-proper-birational-normal-target-isomorphism-at-quasi-finite-point`,
  `lem-proper-surface-regularity-transfers-to-and-from-completion`,
  `lem-quadratic-in-a-square-ideal-with-nontrivial-colength-is-a-square`,
  `lem-relative-projective-space-derived-duality-regular-local-base`,
  `lem-surface-modification-isomorphism-in-codimension-one`,
  `lem-surface-non-pth-power-detected-by-derivation`,
  `lem-universal-property-of-a-contraction`,
  `lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces`,
  `lem-local-normal-surface-modification-dimension-and-projective-cohomology`,
  `lem-positive-conormal-degree-of-a-fibre-divisor`,
  `lem-projective-regular-local-base-coherent-duality-by-embedding`,
  `lem-surface-complete-equicharacteristic-finite-integral-closure`,
  `lem-surface-generic-power-series-formal-fibres`, `lem-surface-open-regular-locus`,
  `lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate`,
  `lem-normal-projective-surface-dualizing-module-over-regular-local-base`,
  `lem-normal-surface-fibre-divisor-conormal-degree-positive`,
  `lem-normal-surface-modification-leray-short-exact-sequence`,
  `lem-surface-complete-equicharacteristic-formal-fibres`,
  `thm-negativity-for-exceptional-curves-on-smooth-surfaces`,
  `lem-surface-completed-polynomial-generic-fibre`, `lem-surface-finite-type-formal-fibres`,
  `lem-surface-finite-type-normalization-finite`, `lem-surface-regular-fibres-preserve-normality`,
  `lem-finite-normal-surface-cover-completed-local-degree-bound`,
  `lem-local-normalized-point-blowup-sequences-spread-at-closed-points`,
  `lem-normal-surface-normalization-commutes-with-base-completion`,
  `lem-normalized-point-blowups-dominate-local-normal-surface-modifications`,
  `lem-projective-normal-surface-modification-h1-injects-off-special-fibre`,
  `def-rational-normal-surface-singularity-and-bounded-modification-h1`,
  `lem-birational-surface-morphism-factors-through-blowup-at-a-non-isomorphism-point`,
  `lem-finite-domination-of-surface-modifications-via-relative-hilbert-scheme`,
  `lem-normal-surface-modification-no-derived-residue-map`,
  `lem-normal-surface-modification-uniform-principal-torsion-bound`,
  `lem-normalized-surface-point-blowup-resolution-descends-from-completion`,
  `lem-contracted-curve-count-decreases-under-a-point-blowup-factorization`,
  `lem-finite-separable-normal-surface-extension-preserves-bounded-h1`,
  `lem-normal-finite-type-surface-resolution-globalizes-from-complete-local-points`,
  `lem-projective-normal-surface-grauert-riemenschneider-vanishing`,
  `lem-rational-surface-exceptional-ideal-powers-and-sections`,
  `lem-rational-surface-local-rings-propagate-by-point-sequence-spreading`,
  `lem-regular-local-surface-is-rational-by-point-blowup-domination`,
  `lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it`,
  `lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology`,
  `lem-regular-base-dualizing-traces-compose-on-rational-modifications`,
  `thm-factorization-of-birational-morphisms-of-smooth-surfaces`,
  `lem-regular-base-surface-cartier-curve-canonical-adjunction`,
  `lem-regular-surface-point-blowup-canonical-transform`,
  `lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module`,
  `lem-rational-singular-point-blowup-canonical-pullback-surjective`,
  `lem-rational-normal-surface-reduced-to-invertible-canonical-module`,
  `lem-complete-regular-surface-degree-p-extension-has-bounded-h1`,
  `lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function`,
  `lem-nonsquare-tangent-conic-rational-surface-blowups-terminate`,
  `lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic`,
  `lem-double-plus-simple-cubic-rational-surface-branch-terminates`,
  `lem-triple-cubic-rational-surface-branch-reduces-in-two-steps`,
  `thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups`,
  `lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups`,
  `thm-complete-equicharacteristic-normal-surface-resolution-by-normalized-point-blowups`,
  `thm-resolution-of-normal-surface-singularities`,
  `rem-surface-contraction-and-resolution-scope-boundaries`.
  B page (2): `cex-normalization-is-not-a-blowup`, `ex-blowup-of-a-smooth-point`.
- **Added suppliers (recorded edge changes).** The eight manifest additions/removals listed in
  checkpoint 11; all are existing published items, so no new item was created as a supplier and
  no consumer outside this pair is affected by an added edge.
- **Escalations.** None. No owned consumer rests on an unfinished sibling supplier: every
  declared external dependency resolves to a published item (`audit-manifest`: 822
  relationships, 0 defects), and the batch-25 cross-batch dependency file stays empty.
- **Published concerns.** None attributable to this pair. Repo-wide `depcheck` still reports
  pre-existing published debt (841 errors, e.g. `published-unaudited` and one
  `b-leaf-content` edge in other pairs); none involves an item of this pair, and per the
  dispatch it is left to the serial reconciler.
- **Open obligations for Step 4 (splice) and the reconciler.**
  1. The two new library pages are on disk but not yet spliced into pathway/prose records; the
     `validate-plan` NOTE about planned pages without item lists is the matching splice item.
  2. Sibling batch 26 keeps two open cross-batch edges pointing at this pair
     (`higher-dimensional-resolution-of-singularities` page-level requirement and
     `ex-resolution-of-a-surface-singularity` -> `thm-resolution-of-normal-surface-singularities`).
     The supplier is now authored and internally checked, so the reconciler can evaluate them at
     Step 4; this pair declares no reciprocal item dependency.
  3. The B-page coverage low-yield warning (4/11 harvested results scaffolded) predates
     authoring and needs Alpha's confirmation of the declines, per the coverage gate.
  4. Item decisions are author-side records (`accept`/`repaired`) with confidence 1; independent
     mathematical audit, judge and adjudication remain the Step 5-8 duties and are not recorded
     here.
