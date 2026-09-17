# Step 3b repair B — classification block, `real-forms-and-real-semisimple-lie-algebras`

Run `phase-2-remaining-27`, batch 13. Four escalated items of the pair were
reopened by the owner after the declared Knapp coverage was extended (Prop 6.72
pp. 393–394; Thm 6.88; Thm 6.96 with Lemmas 6.97–6.98 pp. 409–412; the §10 case
analysis pp. 413–421; Chapter II Theorems 2.108/2.111) and the local supplier
`lem-chevalley-basis-and-real-structure-constants` was added to the manifest.
Repair exactly the four items below; touch nothing else.

## Items

1. `items/thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications.md`
   — the missing converse (Satake injectivity: reconstruction of the maximally
   compact painting from the maximally split datum) is Knapp VI Prop 6.72
   (pp. 393–394) as used in §11 (pp. 422–425), now inside the declared coverage.
2. `items/thm-classification-of-real-semisimple-lie-algebras.md` — fill both
   gaps: (1) enumeration/completeness from Knapp Thm 6.96 with Lemmas 6.97–6.98
   (pp. 409–412) and the §10 Weyl-group case analysis (pp. 413–421, Figures
   6.1–6.3); (2) realization of every abstract Vogan diagram from Knapp Thm 6.88
   with the normalized root-vector system of Thm 6.6/Lemma 6.4
   (`lem-chevalley-basis-and-real-structure-constants`, now in the manifest).
3. `items/prop-classical-real-forms-of-the-classical-complex-lie-algebras.md` —
   the exhaustion obligation: every real form of a classical complex simple Lie
   algebra appears in the displayed list, via item 2's classification.
4. `items/cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group.md`
   — the conjugacy half. The item has been moved after the symmetric-space items
   `def-riemannian-symmetric-pair-of-noncompact-type`,
   `prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k`
   and
   `thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space`,
   so the local displacement-function route is available; use it, or Knapp's
   Historical Notes p. 766 pointer together with Borel 1998, pp. 128–133, if you
   extend the coverage row for that source. Keep the manifest statement.

## Rules

- Complete proofs at the dispatch standard; keep each manifest statement.
- Update each item's frontmatter `deps`; do not edit the batch manifest — the
  orchestrator re-syncs it after both repair lanes finish.
- Run `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` (adopt the
  canonical form if it reports REPAIR) and `node tools/rendercheck.mjs` per item.
- Record each decision: `node tools/step3-decisions.mjs record-item --run
  phase-2-remaining-27 --item <id> --decision repaired --confidence 1
  --dependencies '<json>' --reason '<evidence>'`.
- Report to `research/phase-2-remaining-27-real-forms-repair-b-report.md` with
  locators read, changes, checks, and any exact gap.
- Mathematical integrity: never claim a step you have not proved; escalate with
  the exact locator instead.
