# Step 3b helper report — lane D

- Run `frontier-38-owner-30`, pair `blowups-exceptional-divisors-and-strict-transforms`
  (A) / `-examples` (B), batch 2, role: Step-3b pair-authoring helper (lane D).
- Scope: dependency levels 4–5 (13 items), then levels 8–9 on follow-up. I write only
  those item files, this report, and `research/frontier-38-owner-30-step3b-contracts-d.json`.
- Entry note: my session began without the original spawn message text; I recovered the
  lane-D item list from the lead's plan and the pair task file and rescaled to exactly
  the 13 level-4/5 IDs. No other pair's files were touched.

## Round 1 — levels 4–5

Checkpoints below are a log, not evidence; every claim was re-read from the manifest row
and the cited suppliers before writing.

1. `cor-exceptional-divisor-smooth-center-normal-bundle` (corollary, level 4, A).
   Claim: `E = P_Z(I/I^2)` for a regular immersion; `E = P^1_{kappa(p)}` for a closed
   point of a regular surface. Conventions: quotient convention for `Proj` of
   `Sym`; regular immersion unpacked as locally a regular sequence (assumption [A1]).
   Suppliers: `lem-regular-sequence-associated-graded-polynomial`,
   `thm-exceptional-divisor-normal-cone-proj`, `thm-associated-graded-ring-of-a-regular-local-ring`,
   `def-projective-bundle-scheme`, `lem-embedding-dimension-is-minimal-maximal-ideal-generator-number`.
   Steps 1.1–6.1 chained by dependency layer; 6 steps. Checks: precheck PASS (direct),
   rendercheck OK, proof-layout OK. Open: quotes for the two in-pair suppliers pending.

2. `def-total-transform-divisor` (definition, level 4, A).
   Claim/conventions: total transform = pullback `pi^*D`; line bundle
   `O(pi^*D) = pi^*O(D)`; notation `pi^*D = D' + mE` recorded but not proved here.
   Suppliers: `def-pullback-cartier-divisor`, `lem-pullback-cartier-divisor-line-bundle`,
   `def-effective-cartier-divisor`, `def-blowup-scheme-along-ideal`. Checks: precheck n/a
   per definition convention; rendercheck OK; contract with 8 boundary rows.

3. `thm-blowup-regular-surface-closed-point-regular` (theorem, level 4, A).
   Claim: all clauses of the frozen statement (regularity and purity of `S'`, `E = P^1_kappa`,
   `O_E(E) = O(-1)`, chart list, generic/closed point dimensions, smoothness in the
   smooth k-rational case, the kappa-structure disclaimer). Local computations after flat
   base change to `A = O_{S,p}`; the canonical-order pass moved the dimension clause to
   step 8.2 (layer 8) and the smoothness step to 9.1 (layer 9), matching dependency-layer
   numbering. 10 steps. Checks: precheck PASS after adopting the canonical numbering,
   rendercheck OK, proof-layout OK.

4. `thm-blowup-universal-property` (theorem, level 4, A).
   Claim: every `X`-scheme with `f^{-1}(Z)` effective Cartier admits a unique `X`-morphism
   to `Bl`; final-object reformulation. Proof by affine charts, the chart universal
   property, gluing (`lem-morphism-schemes-local-on-source-target`), and a local
   uniqueness argument on `V_{u_i}`. 5 steps. Checks: precheck PASS, rendercheck OK,
   proof-layout OK. Removed one unused fact (def-exceptional-divisor-blowup) rather than
   citing it gratuitously.

5. `ex-blowup-affine-plane-origin-two-charts` (example, level 4, B page).
   Charts, gluing `TU=1`, `E` cut by `x`/`y` and `E = P^1_k`, projection identity off `E`
   and contraction of `E`, total transform of a line `= L' + E` (finite and infinite
   slope). 5 verification steps. Checks: precheck PASS, rendercheck OK, proof-layout OK.

6. `ex-blowup-ideal-power-same-proj` (example, level 4, B page).
   `R(I^2) = R(I)^{(2)}`, Veronese invariance, chart identity `A[x,T]`, minors/conic
   description with `XZ = Y^2`. 3 verification steps. Checks: precheck PASS, rendercheck OK,
   proof-layout OK.

7. `cor-blowup-unique-up-to-unique-isomorphism` (corollary, level 5, A).
   Uniqueness of models via two applications of the universal property. Added
   `thm-pullback-center-ideal-invertible` to deps (used to show the blowup itself is an
   admissible object). 3 steps. Checks: precheck PASS, rendercheck OK, proof-layout OK.

8. `cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup` (corollary, level 5, A).
   Local base-ideal model up to fractional rescaling (explicit degree-wise isomorphism of
   Rees algebras), division of pulled-back sections by a local generator of `I O_Bl`,
   generation, morphism to `P^n` by the line-bundle theorem, and factorization via the
   blowup universal property. Added `thm-pullback-center-ideal-invertible` to deps. 5 steps.
   Checks: precheck PASS (after removing a self-citation), rendercheck OK, proof-layout OK.

9. `lem-blowup-isomorphism-off-center` (lemma, level 5, A).
   Chartwise `(A[I/f_i])_{f_i} = A_{f_i}`, gluing of inverses, characterization of the
   inverse by the universal property, `E` as the complement. Added
   `def-effective-cartier-divisor` to deps (empty divisor is effective). 5 steps. Checks:
   precheck PASS, rendercheck OK, proof-layout OK.

10. `lem-blowup-point-pushforward-vanishing` (lemma, level 5, A).
    Locality of higher direct images, reduction to the affine local computation, Leray
    degeneration for composites. 3 steps. Checks: precheck PASS, rendercheck OK,
    proof-layout OK.

11. `lem-total-transform-strict-plus-exceptional-multiplicity` (lemma, level 5, A).
    `f = x^m g`, `g mod x = f_m(1,T) != 0`, saturation removes exactly `x^m`; symmetric
    chart and unit comparison; intersection cycle cut by the degree-`m` leading form.
    4 steps. Checks: precheck PASS, rendercheck OK, proof-layout OK.

12. `cex-blowup-singular-center-not-smooth` (counterexample, level 5, B page).
    `y^3 - x^5`: chart `k[x,s]/(s^3-x^2)` not regular at the origin (associated graded
    `k[X,S]/(X^2)` is not a polynomial ring), second chart `k[u,u^{-1}]` regular,
    `E = Proj k[X,Y]/(Y^3)` a nonreduced length-three point, hence not smooth. 4 steps.
    Checks: precheck PASS, rendercheck OK, proof-layout OK.

13. `ex-blowup-affine-three-space-origin-exceptional-p2` (example, level 5, B page).
    Three charts `A^3`, minors presentation, `E = P^2_k` from `gr_m k[x,y,z]_0`,
    `O_E(E) = O(-1)` restricted from `O_Bl(-E) = O(1)`. Added
    `thm-pullback-center-ideal-invertible` to deps. 4 verification steps. Checks: precheck
    PASS, rendercheck OK, proof-layout OK.

## Round 2 — levels 8–9

14. `thm-resolution-plane-curves-by-point-blowups` (theorem, level 8, A; landmark).
    Clauses (a) regularization, (b) regular embedded normal-crossing support, (c) the
    delta recurrence. Proof: ambient regularity/projectivity; strictly decreasing
    residue-weighted defect for the singular-point stage; maximal-contact rounds and
    multiple-point blowups with the lexicographic invariant for the crossing stage; the
    recurrence restated from `lem-blowup-multiplicity-euler-characteristic-drop` with the
    finite-birational normalization comparison. 5 steps. Checks: precheck PASS,
    rendercheck OK, proof-layout OK.

15. `cex-normalization-not-blowup-and-blowup-not-normalization` (counterexample, level 8,
    B page). Normalization of the cusp is A^1; the plane blowup is proper, birational and
    not finite with E=P^1 over the origin; the strict transform is the parabola and equals
    the normalization; the y^3-x^5 curve shows a point blowup that does not normalize.
    3 steps after adopting the canonical layer numbering. Checks: precheck PASS,
    rendercheck OK, proof-layout OK.

16. `rem-resolution-higher-dimension-not-claimed` (remark, level 9, A).
    Scope limitation only: no general resolution, no smoothness over imperfect fields, no
    higher-dimensional inference; both limiting features named. No proof steps
    (precheck n/a); all eight boundary rows are not_applicable with item-specific reasons.

## Contract fragment

- `research/frontier-38-owner-30-step3b-contracts-d.json`: version 1, scope = the 16 IDs,
  106 citation entries, 67 step entries (all in `derivations`), 8 boundary rows per item.
- Current `--strict` status: 20 `citation-source-missing` errors, all for suppliers not yet
  on disk: `thm-exceptional-divisor-normal-cone-proj`, `thm-pullback-center-ideal-invertible`,
  `def-strict-transform-closed-subscheme`, `lem-blowup-plane-origin-incidence-equations`,
  `lem-blowup-power-of-ideal-same`, `lem-blowup-independent-ideal-generators`,
  `lem-affine-point-blowup-pushforward-vanishing`, `thm-blowup-projective`,
  `thm-blowup-smooth-surface-point-charts`, `lem-blowup-lowers-contact-order`,
  `lem-blowup-separates-transverse-components`, `lem-blowup-multiplicity-euler-characteristic-drop`,
  `ex-strict-transform-cusp-first-blowup`. Quotes for these suppliers currently use the
  frozen manifest statements as placeholders and must be re-extracted byte-for-byte from the
  supplier item sections once those files land; the citation `uses` lists need no change.
- All other citation checks (fact existence, declared dependency, quote match against
  existing supplier files, step uses, step mapping, boundary shapes) pass.

## Boundary and choice cases

- Choice: all thirteen items carry the AC assumption inherited through the blowup /
  relative-Proj and associated-graded suppliers; no item selects a non-canonical object
  beyond those inheritances. The boundary worksheets record this under `nonempty-choice`.
- Boundary rows are item-specific (indexed to concrete steps); no shared reason text.

## Open obligations

1. Re-extract the thirteen pending supplier quotes when those items land; re-run
   `node tools/proof-contract.mjs research/frontier-38-owner-30-step3b-contracts-d.json --strict`.
2. Dep changes recorded for the lead: `cor-rational-map-...` gained
   `thm-pullback-center-ideal-invertible`; `cor-blowup-unique-...`, `lem-blowup-isomorphism-...`,
   `ex-blowup-affine-three-space-...` gained `thm-pullback-center-ideal-invertible` or
   `def-effective-cartier-divisor` as listed above. Manifest rows for these items must be
   updated by the lead (items with the added dep: `cor-blowup-unique-up-to-unique-isomorphism`,
   `cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup`,
   `lem-blowup-isomorphism-off-center`, `ex-blowup-affine-three-space-origin-exceptional-p2`).
3. Removed unused declared deps nowhere; all remaining deps stay as in the manifest rows.
4. Round 2 (levels 8–9) is complete; no further lane-D items remain on this pair.

## Next item

None: all 16 lane-D items (levels 4–5 and 8–9) are authored and checked.
