# Step 3b authoring report — `affine-group-schemes-hopf-algebras-and-rational-representations`

- Run: `frontier-40-geometry-braids-rep-27` (batch 13, orders 873/874, category `scheme-theory`).
- Pair: A `affine-group-schemes-hopf-algebras-and-rational-representations` /
  B `affine-group-schemes-hopf-algebras-and-rational-representations-examples`
  (A: 13 items, B: 2 items; 15 owned IDs in total).
- Role: alpha-high Step 3b scaffold auditor and item author for this pair only.
  Shared batch files are edited only in this pair's own rows.

## Owned IDs and entry obligations

Authoring order (dispatch order; level ties by page order and item ID):

| order | level | item | status |
|---:|---:|---|---|
| 1 | 0 | `def-commutative-hopf-algebra-over-a-field` | authored, checked, accepted |
| 2 | 0 | `lem-affine-finite-type-scheme-coordinate-ring-finitely-generated` | authored, checked, accepted |
| 3 | 0 | `lem-general-linear-group-scheme-and-its-coordinate-ring` | authored, checked, accepted |
| 4 | 0 | `lem-quotient-spectrum-map-is-a-closed-immersion` | authored, checked, accepted |
| 5 | 1 | `def-coordinate-hopf-algebra-of-affine-group-scheme` | authored, checked, accepted |
| 6 | 1 | `lem-hopf-ideal-kernels-and-quotients` | authored, checked, accepted |
| 7 | 2 | `def-rational-representation-and-comodule-of-an-affine-group-scheme` | authored, checked, accepted |
| 8 | 2 | `lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra` | authored, checked, accepted |
| 9 | 3 | `lem-finite-dimensional-subcomodules-contain-elements` | authored, checked, accepted |
| 10 | 3 | `lem-representations-of-affine-group-schemes-are-comodules` | authored, checked, accepted |
| 11 | 3 | `thm-affine-group-schemes-hopf-algebra-antiequivalence` | authored, checked, accepted |
| 12 | 3 | `ex-hopf-algebra-of-a-split-torus` | authored, checked, accepted |
| 13 | 4 | `thm-affine-group-scheme-faithful-finite-dimensional-representation` | authored, checked, accepted |
| 14 | 4 | `thm-closed-subgroup-schemes-correspond-to-hopf-ideals` | authored, checked, accepted |
| 15 | 4 | `ex-rational-representation-from-a-comodule` | authored, checked, accepted |

Entry obligations recorded at dispatch:

1. All 15 IDs are immutable pre-author scaffold IDs, so each needs an ordinary
   Step 3b item decision after authoring and checks.
2. Author the two B-page items only after their A-page suppliers; register the
   pair's pages, items, contracts and dependency levels in the shared batch
   files without disturbing siblings.
3. Recheck the Step 3a non-blocking observations (published
   `lem-affine-algebraic-group-faithful-rational-representation` choice claim;
   B-homed `GL_n` supplier; coverage granularity) against current inputs and
   report; do not repair published or sibling content.
4. The pair has no in-run prerequisite pairs outside itself (dispatch); all 48
   published suppliers resolve at HEAD.

## Checkpoint log

This section is appended item by item as authoring proceeds. It records, per
item: exact claim, source locators, dependencies, checks run, open gaps.

1. `def-commutative-hopf-algebra-over-a-field` (level 0) — authored verbatim
   from the scaffold; Milne Def. 3.3/3.4 (pp. 65-66) and Swanson Def. 14
   (pp. 4-5) read in full; deps unchanged (all published). precheck: n/a
   (definition, no phase body); rendercheck OK. No open gap.
2. `lem-affine-finite-type-scheme-coordinate-ring-finitely-generated` (level 0)
   — authored; added the published supplier
   `lem-distinguished-open-refinement-at-a-point` to deps (needed for the
   principal-open refinement; not in the scaffold list but appears in the
   scaffold's own strategy). Milne Conventions p. 3/§1.19 p. 12 and Swanson
   Def. 115 read. AC declared; its single use is the unit-ideal relation from a
   finite distinguished-open cover. precheck PASS (direct); rendercheck OK.
3. `lem-general-linear-group-scheme-and-its-coordinate-ring` (level 0) —
   authored; the comorphisms are constructed by the localisation universal
   property and the seven group/Hopf identities are checked on generators
   (Milne pp. 39-41, Swanson Ex. 31(2)-(3)). Deps added beyond scaffold:
   `thm-universal-property-of-localisation`, `def-principal-localisation`,
   `def-determinant-of-a-square-matrix`, `def-ring-homomorphism`,
   `thm-adjugate-identity-over-a-commutative-ring`,
   `cor-square-matrix-invertible-iff-determinant-is-a-unit`,
   `cor-affine-scheme-quasi-compact`,
   `def-locally-finite-type-and-finite-type-morphism`. precheck PASS (direct);
   rendercheck OK. **Calibration note (open, reported in §Published concerns):**
   the finite-type conclusion cites the published
   `cor-affine-scheme-quasi-compact`, whose own proof chain passes through the
   AC-declaring `lem-basic-opens-quasi-compact`/`thm-prime-spectrum-is-compact`;
   the scaffold's "No choice principle is used" sentence is preserved verbatim,
   and this item's own proof adds no choice beyond that citation.
4. `lem-quotient-spectrum-map-is-a-closed-immersion` (level 0) — authored
   choice-free: underlying homeomorphism from the quotient-spectrum bijection
   + closedness, sheaf surjectivity by stalk computation (inside $V(I)$: the
   localization of the surjection; outside: the target stalk is zero). Milne
   A.24/A.26 pp. 574-575, Swanson Def. 34 p. 11 read; the published
   `lem-closed-immersion-affine-quotient-and-base-change` step 5.2 was read for
   comparison and is AC-carrying, which is exactly why this choice-free local
   version exists. precheck PASS (direct); rendercheck OK.
5. `def-coordinate-hopf-algebra-of-affine-group-scheme` (level 1) — authored
   as the scaffold's definition record with the evaluation formulas of Milne
   display (16) and Swanson Rmk 30; `justified_by`
   `lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra` retained.
   rendercheck OK; no phase body.
6. `lem-hopf-ideal-kernels-and-quotients` (level 1) — authored. The scaffold's
   AC-avoiding strategy is made complete: rather than Milne's
   complement-choosing proof, step 1.1 proves the coefficient criterion by a
   finite-dimensional reduction (a finite relation in a tensor product is
   witnessed inside finitely generated subspaces, where finite bases exist),
   step 2.1 computes $\ker(f\otimes f)=A\otimes K+K\otimes A$, and steps 1.2,
   3.1, 4.1 give the quotient/ideal/factorization statements. precheck PASS
   (direct); rendercheck OK.
7. `def-rational-representation-and-comodule-of-an-affine-group-scheme`
   (level 2) — authored as the scaffold definition (functor-of-points and
   comodule descriptions, regular representation, faithfulness);
   `justified_by` `lem-representations-of-affine-group-schemes-are-comodules`.
   rendercheck OK; no phase body.
8. `lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra` (level 2) —
   authored as the diagram-reversal proof (Milne Prop. 3.1/3.6, diagrams
   (17)-(18); Swanson Thm 19). precheck PASS (direct); rendercheck OK.
9. `lem-finite-dimensional-subcomodules-contain-elements` (level 3) —
   authored choice-free, with the coefficient criterion re-proved inline
   (step 1.1) and the kernel computation folded into step 2.1 so that no basis
   of $A$ and no complement is chosen. precheck PASS (direct); rendercheck OK.
10. `lem-representations-of-affine-group-schemes-are-comodules` (level 3) —
    authored: the two constructions in both directions (Yoneda + base change,
    universal points $p_1\ast p_2=\Delta$), mutual inverses and naturality,
    the subobject correspondence, and the matrix-coefficient/comorphism
    statements. precheck PASS (direct); rendercheck OK.
11. `thm-affine-group-schemes-hopf-algebra-antiequivalence` (level 3) —
    authored; AC declared and confined to the finite-generation input
    `lem-affine-finite-type-scheme-coordinate-ring-finitely-generated`.
    precheck PASS (direct); rendercheck OK.
12. `ex-hopf-algebra-of-a-split-torus` (level 3, B page) — authored. Two local
    repairs to the scaffold: the AC-declaring published
    `lem-closed-subgroup-scheme-valued-point-criterion` was replaced by the
    choice-free route (Hopf ideal + quotient Hopf algebra +
    `lem-quotient-spectrum-map-is-a-closed-immersion`), and the torus Hopf
    structure is justified through
    `lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra`. The
    characteristic-$p$ statement cites the published
    `prop-p-power-roots-of-unity-in-characteristic-p` (A-homed). precheck PASS
    (direct); rendercheck OK.
13. `thm-affine-group-scheme-faithful-finite-dimensional-representation`
    (level 4) — authored; the closed immersion is produced from finite
    generation, a finite-dimensional subcomodule of the regular representation,
    and the surjectivity of $\Phi\colon\mathcal O(\mathrm{GL}_n)\to A$. The
    group-morphism property is discharged by the Yoneda full faithfulness of
    the functor of points. precheck PASS (direct); rendercheck OK.
14. `thm-closed-subgroup-schemes-correspond-to-hopf-ideals` (level 4) —
    authored; AC declared for the quotient presentation of closed subschemes
    (Milne Prop. 3.15), with the choice-free Hopf-ideal calculus and the
    antiequivalence supplying the rest. precheck PASS (direct); rendercheck OK.
15. `ex-rational-representation-from-a-comodule` (level 4, B page) — authored;
    both directions of the weight decomposition/comodule/representation
    dictionary, with the coefficient extraction over the explicit monomial
    basis. precheck PASS (direct); rendercheck OK.

Pages: `library/scheme-theory/affine-group-schemes-hopf-algebras-and-rational-representations.md`
and `...-examples.md` created with the manifest's page metadata, item lists and
prose; rendercheck OK on both.

## Completion status

**All 15 owned items are authored, checked, and accepted.** Item decisions were
recorded with `node tools/step3-decisions.mjs record-item --decision accept
--confidence 1` after the final edits; `check --phase final` shows none of the
15 in `work` and the pair's Step 3a scope decision is current (unmodified
manifest statements).

## Checks actually run (exact results)

- `node tools/tsx-run.mjs tools/precheck.mts <all 15 item paths>` →
  `12 checked, 0 failing — all clean` (the three definitions have no phase
  body).
- `node tools/rendercheck.mjs <all 15 item paths>` → `OK — 15 file(s)`.
  `node tools/rendercheck.mjs <both page paths>` → `OK — 2 file(s)`.
  (The repo-wide `rendercheck items/*.md` currently fails on sibling in-flight
  files, see External observations.)
- `node tools/proof-layout.mjs <all 15 item paths>` → `15 items, 63 steps, 0
  defects` (re-run after the last edits).
- `node tools/content-policy.mjs research/frontier-40-geometry-braids-rep-27-batch-13.pages.json`
  → `15 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/proof-contract.mjs research/frontier-40-geometry-braids-rep-27-batch-13.proof-contracts.json --strict`
  → `0 error(s), 0 warning(s), 15/15 item(s) checked`.
- `node tools/merge-proof-contracts.mjs --level frontier-40-geometry-braids-rep-27
  /tmp/merged13.json <batch file>` → merges 15 items, and
  `proof-contract --strict` on the merged file is again `0 error(s) ... 15/15`.
- `node tools/boundary-audit.mjs <batch file> --fail-on-contradicted
  --fail-on-template --json` → after rewriting duplicated not_applicable rows
  and converting the two flagged `empty` rows to checked dispositions,
  `template_clusters 0, contradicted_candidates 0`, exit 0.
- `node tools/citation-fidelity.mjs <batch file> --fail-on-missing-quote` →
  every one of the 112 recorded quotes appears in its cited item section, no
  widening findings.
- `node tools/finite-smoke.mjs <batch file>` → `0 error(s)`, and
  `node tools/risk-report.mjs <batch file>` → `0 error(s), 15 item(s) routed`
  (informational; routing only).
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
  → `894 item(s) checked across 54 page(s); maximum level 39` (exit 0);
  batch-focused computation: 15 items, 0 errors, levels exactly
  `0,0,0,0 / 1,1 / 2,2 / 3,3,3,3 / 4,4,4` as declared.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (257 planned
  pages still carry no item list; this pair's rows are spliced at Step 4).
- `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-13.pages.json`
  → `15 item(s), 0 normalized, 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-13.coverage.json --require-destination`
  → `2 page(s), 52 harvested result(s), 0 error(s), 0 warning(s)`;
  `source-fetch-check` → `4/4 source(s) resolved`.
- `node tools/depsource.mjs` → `0 unresolved`; `node tools/prosecheck.mjs` →
  `OK — no positional claim contradicts the spec`.
- `node tools/depcheck.mjs`, `node tools/fwdcheck.mjs`, `node tools/extcheck.mjs`
  (repo-wide) currently fail only on sibling in-flight or legacy published
  subjects; no finding names an item or page of this pair.

## Dependencies added beyond the scaffold

Per item (all targets published A-homed items unless noted):

- `lem-affine-finite-type-...-finitely-generated`: +
  `lem-distinguished-open-refinement-at-a-point`, `def-field`; −
  `lem-basic-opens-quasi-compact` (superseded by the direct refinement route).
- `lem-general-linear-group-scheme-...`: +
  `thm-universal-property-of-localisation`, `def-principal-localisation`,
  `def-determinant-of-a-square-matrix`, `def-ring-homomorphism`,
  `thm-adjugate-identity-over-a-commutative-ring`,
  `cor-square-matrix-invertible-iff-determinant-is-a-unit`,
  `cor-affine-scheme-quasi-compact`,
  `def-locally-finite-type-and-finite-type-morphism`; −
  `cor-inverse-matrix-by-adjugate`.
- `lem-quotient-spectrum-map-...`: + `lem-localisation-preserves-surjectivity`;
  − `thm-sections-basic-open-affine-scheme`.
- `lem-hopf-ideal-kernels-and-quotients`: + `def-field`, `def-linear-basis`,
  `def-linear-combination-and-span`, `def-linear-independence`,
  `def-linear-subspace`, `def-tensor-product-of-modules-by-generators-and-relations`.
- `lem-finite-dimensional-subcomodules-...`: + `def-field`,
  `thm-universal-property-of-module-tensor-products`.
- `lem-representations-...-are-comodules`: + `def-vector-space`,
  `cor-square-matrix-invertible-iff-determinant-is-a-unit`,
  `thm-affine-scheme-ring-anti-equivalence`.
- `thm-affine-group-schemes-hopf-algebra-antiequivalence`: +
  `cor-affine-scheme-quasi-compact`, `thm-global-sections-affine-scheme`.
- `ex-hopf-algebra-of-a-split-torus`: +
  `lem-quotient-spectrum-map-is-a-closed-immersion` (this pair, level 0),
  `prop-p-power-roots-of-unity-in-characteristic-p` (published A-homed),
  `thm-affine-scheme-ring-anti-equivalence`,
  `lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra`; −
  `lem-closed-subgroup-scheme-valued-point-criterion` (AC-declaring; replaced
  by the choice-free quotient route). The dependencies on
  `def-morphism-and-closed-subgroup-scheme` and `def-group-scheme-over-a-field`
  are retained for the definition of a closed subgroup scheme.
- `thm-affine-group-scheme-faithful-...`: +
  `cor-square-matrix-invertible-iff-determinant-is-a-unit`,
  `thm-affine-scheme-ring-anti-equivalence`,
  `thm-yoneda-lemma-is-natural-in-both-variables`; −
  `lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra`,
  `thm-ring-matrix-arithmetic-laws`, `thm-determinant-multiplicative`
  (their content is not used by the final argument).
- Cross-batch: none. The batch input
  `research/frontier-40-geometry-braids-rep-27-batch-13.cross-batch-dependencies.json`
  remains `[]` and is correct: every non-pair supplier is a published
  out-of-run item (48 distinct published suppliers checked to resolve at HEAD).

## Published concerns (reported, not repaired)

1. **`lem-affine-algebraic-group-faithful-rational-representation`
   (published, audited 2026-09-30) — choice claim vs. actual use.** Its
   Statement (line 52) says "Nothing here uses the Axiom of Choice", while its
   `deps` include `thm-affine-closed-immersions-quotient-rings` and its [F3]
   cites that theorem, used in step 11.1 for the closed-immersion conclusion.
   That theorem's Facts say "We work with the repository's permitted Axiom of
   Choice" and carry an explicit AC-use paragraph, and its own deps include
   `def-axiom-of-choice`. Confidence: confirmed (current file text read
   directly). This pair does not depend on the item. Repair strategy, owner's
   call: either reword that item's choice-free prose (statement and step 13.1),
   or replace the dependency by the choice-free direction
   `lem-quotient-spectrum-map-is-a-closed-immersion` now authored here.
2. **Affine quasi-compactness is AC-calibrated at its suppliers, but stated
   without AC.** `cor-affine-scheme-quasi-compact` states "Every affine scheme
   is quasi-compact" with no choice hypothesis, yet its deps include
   `lem-basic-opens-quasi-compact`, whose statement begins "Assume the Axiom of
   Choice" and whose proof cites `thm-prime-spectrum-is-compact` ("Assume the
   Axiom of Choice"). Three items of this pair use the corollary:
   `lem-general-linear-group-scheme-and-its-coordinate-ring` (finite type,
   step 4.1), `thm-affine-group-schemes-hopf-algebra-antiequivalence` (part (b)
   finite type, step 1.2) and
   `thm-affine-group-scheme-faithful-finite-dimensional-representation`
   (finitely generated case). The scaffold's statements claim choice-freeness
   for these conclusions (the antiequivalence declares AC only for finite
   generation); taken at face value through the corollary's AC-free statement
   the claims stand, but a chain-accurate accounting would either propagate AC
   or require an AC-free proof of "Spec of a finitely generated algebra is
   quasi-compact". Confidence: the dependency chain is confirmed; whether the
   library intends the corollary as choice-free is an owner calibration
   question. This is the same class of issue as concern 1 and should be
   reconciled before Steps 5-8 certify the pair's choice annotations. No
   statement was changed here: the pair's 3a scope decision covers the current
   statements and only the owner may re-scope them.
3. **Placement duplication of the `GL_n`/`G_m` supplier (3a note 2,
   reconfirmed).** `ex-additive-multiplicative-and-general-linear-group-schemes`
   remains homed only on the AG-GS-1 B page and cannot be a dependency; this
   pair's local `lem-general-linear-group-scheme-and-its-coordinate-ring` is the
   A-page supplier actually used (by five items here and by sibling batches).
   Owner's call whether to re-home the published example; nothing blocks
   Step 4.
4. **Coverage-record granularity (3a note 3, reconfirmed).**
   `coverage-checklist --require-destination` still reports 2 pages / 52
   harvested results / 0 errors / 0 warnings. The heading-level dispositions
   for Milne §4(e) and Swanson Example 31(3)-(6) remain broader than the
   examples consume; bookkeeping only, no reading was skipped.

## External observations (not this pair)

- `items/lem-upper-unitriangular-coordinate-ring-is-coconnected.md` (a sibling
  in-flight item, unipotent/solvable pair) has a frontmatter `title` containing
  an unquoted colon, which makes the YAML parser used by
  `node tools/frontier-dependency-ledger.mjs refresh --run ...` and by the
  repo-wide `rendercheck items/*.md` fail before reaching this pair. Reported
  for that pair's owner; not edited here (out of scope).
- Repo-wide `depcheck`, `fwdcheck` and `extcheck` failures at the time of
  writing trace to legacy published debt and other in-flight pairs; no finding
  names this pair's items or pages.

## Open obligations and handoff

- No open obligation internal to this pair: all 15 items authored, every
  promised claim preserved, all direct suppliers resolve, all Step-3 gates that
  can be run per-item/per-batch are green.
- Steps 4-8 must reconcile concerns 1 and 2 above (choice annotations of
  published suppliers and of this pair's finite-type conclusions) with the
  owner; this report deliberately does not re-scope the pair or edit published
  content.
- Step 4 must splice this batch: the plan rows 873/874 still carry empty item
  lists, while the manifest, the two library pages, the items and
  `research/frontier-40-geometry-braids-rep-27-batch-13.proof-contracts.json`
  now carry the full pair.
