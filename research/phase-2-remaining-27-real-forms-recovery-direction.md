# Operator direction — finish the `real-forms-and-real-semisimple-lie-algebras` pair

Run `phase-2-remaining-27`, batch 13, pair `real-forms-and-real-semisimple-lie-algebras`
(A page + B page). Written 2026-09-17 after the pair's first dispatch ended with an
incomplete handoff (15 of 63 items authored, no decisions recorded). Binding for
this pair only; do not touch other pairs or batches.

## Keep and re-verify what exists

- The 15 items written on 2026-09-17 are on disk and pass `precheck`; do not rewrite
  their verified text. Read each, confirm its proof is complete at the dispatch
  standard, then record its decision (`accept`, or `repaired` with the exact fix).
- The verified compact-real-form construction of `thm-existence-of-a-compact-real-form`
  (coroot normalization `[e_α,f_α]=H_α`, `α(H_α)=2`, rescaled root vectors with
  `B(e_α,f_α)=1`, real span of `{iH_α, e_α−f_α, i(e_α+f_α)}`) is the recorded,
  re-verified version; keep it and its sign convention.

## Author the remaining items

- Author the remaining 48 manifest items in manifest order: A-page #17–#51 and
  B-page #1–#12. "Textbook-scale" is not a reason to skip an item: complete each
  item's proof and record its decision before moving on.
- Use the pair's declared sources; if an item needs a result beyond them, extend the
  coverage row with the exact locator and keep the proof inside the item.
- If a single item genuinely cannot be completed, record `escalate` for that item
  with its exact locator and the precise gap, and continue with the rest.

## Repair the three sketched proofs

- `thm-conjugacy-of-compact-real-forms`: step 3.2's finite-iteration termination is
  unjustified. Replace it with Knapp Cor 6.20's structure or prove the convergence
  lemma locally.
- `thm-existence-of-a-cartan-involution`: step 2.1's positive-definite form of θ is a
  sketch. Re-derive it from Knapp Thm 6.16 after fixing the commuting-conjugation
  normalization.
- `thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group`:
  steps 2.1 (surjectivity of `K × 𝔭_0 → G`) and 3.1 (smoothness of the inverse) are
  sketches. Re-derive them from Knapp Thm 6.31.

## Apply the three Step-3a obligations

- Extend the Satake locators for items #40/#41 to Knapp Ch. VI §11–§12 plus §12
  Problem 7 (p. 427).
- Item #17's maximal-compact conjugacy half: use the local displacement-function
  route or Knapp Historical Notes p. 766.
- Item #44 must cite `prop-classical-types-correspond-to-sl-so-and-sp` together with
  the batch-11 replacement items.

## Reporting

- Record a decision for every item; update the batch-13 manifest, proof contracts,
  coverage, notes and cross-batch dependency input; rerun the pair's author checks
  (`precheck`, `rendercheck`, `manifest-deps`, `coverage-checklist`, `depcheck`).
- Report completed IDs, checks actually run, and every open obligation in
  `research/phase-2-remaining-27-step3b-pair-real-forms-and-real-semisimple-lie-algebras-report.md`.
- Never mark an item complete that you have not proved; escalate with the exact gap.

## Partition — 2026-09-17 (five parallel slices)

After the second single-lane dispatch wrote A #1–#22 and stopped, the remaining
work is split across five lanes that never write the same file. Each lane owns
its items' `items/<id>.md` files and those items' decision records only; the
batch manifest, coverage, proof contracts, notes and the pair report are merged
by the orchestrator afterwards. Slice task template:
`research/phase-2-remaining-27-real-forms-slice.task.md`.

- Slice 1 — restricted roots, restricted Weyl group, nilpotent 𝔫, Iwasawa (A #23–#31).
- Slice 2 — θ-stable Cartan subalgebras, Cayley transforms, Vogan diagrams (A #32–#39).
- Slice 3 — Satake diagrams, classification of real forms, classical real forms,
  remarks and false statements (A #40–#51).
- Slice 4 — the B page: examples and counterexamples (B #1–#12).
- Slice 5 — audit and certify A #1–#22, and fully re-derive the three sketch-level
  proofs `thm-conjugacy-of-compact-real-forms` (#8),
  `thm-existence-of-a-cartan-involution` (#12) and
  `thm-global-cartan-decomposition-…` (#16) from Knapp Cor 6.20, Thm 6.16 and Thm 6.31.
