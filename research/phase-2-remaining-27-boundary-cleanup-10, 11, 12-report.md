# Boundary-row cleanup — batches 10, 11, 12

Run: `phase-2-remaining-27`. Label: `step3b-boundary-10-12`.
Scope: `boundaries` rows of
`research/phase-2-remaining-27-batch-{10,11,12}.proof-contracts.json`.
No item, page, manifest, coverage or merged-file content was edited; batch 10
needed no change.

## 1. Flagged inventory

The run gate
(`node tools/boundary-audit.mjs research/phase-2-remaining-27-proof-contracts.json
--fail-on-contradicted --fail-on-template --json`) reported 122 template clusters
(2,426 rows) and 114 contradicted candidates run-wide. Restricted to my batches:

| file | template clusters | rows in clusters | contradicted candidates |
|---|---|---|---|
| batch 10 | 0 | 0 | 0 |
| batch 11 | 4 | 42 | 10 |
| batch 12 | 9 | 72 | 0 |

124 flagged rows over 86 distinct items (34 items in batch 11, 52 in batch 12).
I re-ran the auditor on the merged run file and filtered to my item ids: no
further flagged row belongs to batches 10–12, and every cluster containing one
of my items consists only of my items (so each was mine to fix).

## 2. What changed

Only `boundaries` rows were rewritten: 52 rows in batch 11 and 73 in batch 12
(batch 10 untouched). Of these, 124 are the flagged rows; the one extra
batch-12 row is `def-continuous-and-unitary-representation-of-a-compact-lie-group`
[iff-forward], whose unflagged reason was sharpened so that it explicitly
addresses the definition's "says exactly" unpacking of unitarity (it stays
`not_applicable`). A structural diff against pre-edit copies confirms
`citations`, `derivations`, `routine_steps`, `scope`, item key order and boundary
row order are unchanged, and that no other item's rows were modified.

### 2.1 `iff-forward` / `iff-reverse`

* Batch 11 (28 rows). Sixteen `checked` rows sat on items whose claims contain no
  biconditional at all (one-way implications, or lists of independent
  properties). These are now `not_applicable` with reasons naming the actual
  claim shape (see the status-change list). The five genuinely two-way items
  keep `checked`, with the exact direction and discharging step:
  * `thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras` — "maximal toral ⇒ Cartan" is step 1.1 via [L1]; "Cartan ⇒ maximal toral" runs steps 1.1–4.1 (2.1 abelian, 1.3 + 3.1 semisimple, 4.1 maximality via `C_g(h) ⊆ N_g(h) = h`);
  * `prop-centralizer-dimension-from-vanishing-roots` — both directions in step 2.1 (regularity removes the `α(H) = 0` summand; the dimension count forces its absence);
  * `cor-regular-elements-form-a-dense-zariski-open-subset-of-a-cartan-subalgebra` — both directions in the count of step 3.1;
  * `ex-cartan-subalgebras-of-a-direct-sum` — "decomposition ⇒ Cartan" is step 1.1, "Cartan ⇒ decomposition" is steps 1.2–2.1;
  * `ex-regular-and-singular-diagonal-elements-of-sl-n` — both directions in steps 1.1/3.1/4.1.
* Batch 12 (59 rows). 48 `iff-reverse` reasons and 11 `iff-forward` reasons were
  rewritten so that each names what the item does assert instead of a converse:
  existence-and-uniqueness of Haar measure, existence and containment of maximal
  tori, conjugacy of maximal tori, rank well-definedness, density/orthonormality
  statements, the identity `A_ρ χ_λ = A_{λ+ρ}`, the quotient formula for `χ_λ`,
  the two-sided `L^2(SU(2))` decomposition, concrete computations in the `ex-`
  items, definitions of vocabulary for the `def-` items, and single-witness
  refutations for the `fs-`/`cex-` items. All remain `not_applicable` except one
  case: `def-weyl-jacobian-on-a-maximal-torus` does assert an `exactly`
  characterization (`J(t) = 0` exactly where some root is trivial), so both of
  its iff rows are now `checked`, each half discharged factorwise
  (a factor vanishes exactly when its root is trivial; a product of nonnegative
  factors is zero only if a factor vanishes).
* One contradicted pair, `prop-finite-type-cartan-matrix-properties`
  (`iff-forward`, `iff-reverse`), states a real biconditional (`a_{ij} = 0` iff
  `a_{ji} = 0`, clause 2); both rows are now `checked`, crediting step 1.2 for
  each half.

### 2.2 `nonempty-choice`

19 rows (16 in batch 11, 3 in batch 12) are `checked`; each evidence was rewritten
to name the item's declared choice assumption and its exact point of use, e.g.:

* `thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras` — AC spent only through [L1] (`thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra`) at steps 1.1/1.2;
* `thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate` — by [A1] supplies countable choice for [L6]/[L7] at step 2.2; step 7.1 uses the resulting `Ad(G)`-orbits;
* `thm-serre-presentation-theorem` — per [A1], spent through the root-space suppliers of [L4], used at steps 1.2 and 4.1;
* `thm-highest-weight-classification-for-a-compact-connected-lie-group` — [A1] routes it to the covering/integration theory of [L4]/[L5], used at steps 1.2 and 2.1;
* `fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic` — the statement's countable choice is used only through the covering-group supplier of [L1], per step 3.1.

### 2.3 `empty` / `zero` / `endpoints`

* Batch 11, 8 rows. Five contradicted `empty`/`zero` rows were raised to
  `checked` after reading the item, because the case does arise and the text
  handles it: `thm-rank-two-root-system-classification` [zero] (`0 ∉ Φ` makes the
  denominators nonzero; the zero value `n_{αβ}n_{βα} = 0`, angle 90°, is
  enumerated in step 2.1); `thm-simple-roots-form-a-basis-...` [empty]
  (`Δ = ∅` forces `E = 0`; `Δ` is the empty basis and the claims are vacuous);
  `def-height-of-a-root-and-highest-root`, `def-root-lattice-...`,
  `def-open-and-closed-weyl-chambers` [empty] (degenerate `E = 0` instances of
  the definitions, spelled out in each row).
* Batch 12, 10 `endpoints` rows. Each reason now names the concrete objects of
  its item (diagonal maximal tori of `U(n)`/`SU(n)`; the `z`-axis torus and
  half-turn of `SO(3)`; the four coefficients `a, b, −b̄, ā`; normalized counting
  measure on a finite group; `Z/2`; `SU(2)` vs `SO(3)`; the fundamental weight
  `ω` of `A_1`; the orthonormal family `z ↦ z^n`; the reflection `r ∈ O(2)`).
  All remain `not_applicable`.

### 2.4 Rows upheld with `reviewed` (3, all batch 11)

These three contradicted candidates are true as `not_applicable`, but the
detector's regexes cannot see the excluding hypothesis; the auditor's documented
`reviewed.upheld` escape was used, with an item-specific reason on the record:

1. `cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root` [zero] — the only division is by `c·α(H_α)` in step 1.1; `cα ∈ Φ` forces `c ≠ 0` (roots are nonzero) and `α(H_α) ≠ 0` by [L1].
2. `ex-the-root-sl-two-triple-inside-sl-n` [zero] — the root `α = ε_i − ε_j` requires `i ≠ j`, so `n ≥ 2`; `2n` is never zero in the Killing form of step 1.1 or in `H_α = (1/2n)(E_ii − E_jj)` of step 2.1.
3. `def-classical-complex-matrix-lie-algebras` [empty] — the index range is `n ≥ 1` (`gl_n` declared for `n ≥ 1`; the other families use `M_m` with `m = 2n` or `2n+1`), so no empty family occurs; the detector fired on the word "family".

## 3. Status changes (25 rows)

`checked → not_applicable` (16), all on items whose claims are not biconditionals:

* `thm-centralizer-of-a-regular-semisimple-element-is-a-cartan-subalgebra` [iff-forward], [iff-reverse]
* `thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras` [iff-forward], [iff-reverse]
* `lem-generalized-weight-space-decomposition-for-a-nilpotent-subalgebra` [iff-forward], [iff-reverse]
* `thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra` [iff-forward], [iff-reverse]
* `thm-finite-dimensional-representations-of-sl-two` [iff-forward], [iff-reverse]
* `thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system` [iff-forward], [iff-reverse]
* `ex-root-space-brackets-for-matrix-units` [iff-forward], [iff-reverse]
* `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras` [iff-forward], [iff-reverse]

`not_applicable → checked` (9):

* `thm-rank-two-root-system-classification` [zero]
* `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates` [empty]
* `def-height-of-a-root-and-highest-root` [empty]
* `def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice` [empty]
* `def-open-and-closed-weyl-chambers` [empty]
* `prop-finite-type-cartan-matrix-properties` [iff-forward], [iff-reverse]
* `def-weyl-jacobian-on-a-maximal-torus` [iff-forward], [iff-reverse] (batch 12; the item asserts an `exactly` characterization)

## 4. Items whose proofs need a real boundary case

None. No flagged row exposed a boundary case that the item's proof fails to
handle; the three rows that could not be rewritten into a discharging step are
excluded by their hypotheses and are upheld above. No item text was edited.

## 5. Additional findings (draft items, not published — reported, not edited)

1. `thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras` (draft):
   the proof text is structurally broken and the contract mirrors it.
   * `items/thm-cartan-subalgebras-exist-in-complex-semisimple-lie-algebras.md` line 57 (step 1.2) quantifies over `x ∈ 𝔩` and uses `h ∈ 𝔱` and "the maximality of `dim 𝔱`", but `𝔱` is introduced only in step 2.1 (line 59) and the symbol `𝔩` is never defined anywhere in the item (it is used again in lines 61, 63, 67, 69, 71).
   * Step 2.1 (line 59) ends "…are simultaneously diagonalisable, so" and line 60 is blank: the displayed weight decomposition that later steps (3.2, 6.1) cite is missing.
   * Contract consequence: the `derivations` entry for step 1.2 declares inputs `[L1, L4, L6, L7, L8]` and omits step 2.1, although the step text depends on `𝔱` and its maximality; steps 2.2–6.1 use the undefined `𝔩`.
   * Confidence: confirmed textual/ordering defect (not a mathematical refutation); repair is local — choose `𝔱` of maximal dimension first, set `𝔩 := 𝔤₀ = C_𝔤(𝔱)`, restore the missing display, move step 1.2 after 2.1, then refresh the affected `derivations` and any invalidated boundary rows. Owner should route this to the item author/Step-4 reconciler; my scope allowed only `boundaries` rows.
2. `def-classical-complex-matrix-lie-algebras` (draft): the closing sentence "Each family is a nonzero proper subspace of `M_m(C)`" (`items/def-classical-complex-matrix-lie-algebras.md` line 56) is inaccurate for `𝔰𝔩_1 = {0}`, since `gl_n` is declared for `n ≥ 1` (line 31). Suggested fix: restrict to `n ≥ 2` or drop "nonzero". Low severity; no boundary disposition depends on it (the row I fixed concerns the index range being bounded below).

Both items are `status: draft` in this run, so no `published-consumer-supplier-ledger` entry is required; they are reported for the owner's routing.

## 6. Checks actually run

* `node tools/boundary-audit.mjs research/phase-2-remaining-27-batch-10.proof-contracts.json research/phase-2-remaining-27-batch-11.proof-contracts.json research/phase-2-remaining-27-batch-12.proof-contracts.json --fail-on-contradicted --fail-on-template` → exit 0 (output in §7).
* `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-11.proof-contracts.json --strict` → 0 errors, 0 warnings, 118/118 items.
* `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-12.proof-contracts.json --strict` → 0 errors, 2 warnings, 115/115 items. Both warnings (`shotgun-bracket` on `lem-highest-weight-modules-have-weights-below-the-top-weight` and `prop-highest-weight-of-the-dual-representation`) pre-date this edit and concern citations, not boundaries.
* JSON re-parse of all three files plus structural diff against pre-edit copies (only `boundaries` rows differ; key order, row order, `citations`, `derivations`, `routine_steps` identical).
* Re-merge into `/tmp/bnd/merged-test3.json` with `tools/merge-proof-contracts.mjs --level phase-2-remaining-27 …` over all 15 current batch files, then audit of that copy: **0** of my batch rows remain in template clusters or contradicted candidates (run-wide on that copy: 50 clusters, 14 contradicted — other batches' remaining work).
* Not run: explicit-path precheck/rendering, content-policy, `validate-plan` — this dispatch edits contract boundary rows only and touched no item/page file.

## 7. Final audit output for my batches (verbatim)

```
$ node tools/boundary-audit.mjs research/phase-2-remaining-27-batch-10.proof-contracts.json research/phase-2-remaining-27-batch-11.proof-contracts.json research/phase-2-remaining-27-batch-12.proof-contracts.json --fail-on-contradicted --fail-on-template
boundary-audit: 2072 rows over 3 contract file(s); 1320 marked not_applicable

TEMPLATE REUSE — none at or above 3 members.

CONTRADICTED DISPOSITIONS — none found by the three detectors.

UPHELD BY REVIEW — 3 row(s) an Alpha read and kept, with reasons on the record:
  cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root  [zero]  by step3b-boundary-10-12: Read the item: def-root-and-root-space-relative-to-a-cartan-subalgebra makes roots nonzero, so the hypothesis c alpha in
  ex-the-root-sl-two-triple-inside-sl-n  [zero]  by step3b-boundary-10-12: The example works with sl_n for an index pair i different from j, impossible unless n is at least 2; hence 2n is nonzero
  def-classical-complex-matrix-lie-algebras  [empty]  by step3b-boundary-10-12: Read the definition: the general linear algebra is declared for n at least 1 and the symplectic and orthogonal families

Every line above is a candidate for a human read, not a verdict.
$ echo $?
0
```

## 8. Note on the merged run-level contract

`research/phase-2-remaining-27-proof-contracts.json` is a generated
concatenation owned by the serial reconciler; I left it untouched as instructed.
It was last regenerated by another agent at 17:25:35, so it already carries most
of my batch-11/12 rows but may lag my final wording tweaks. The engine's
`merge-contracts` gate re-merges the batch files
(`tools/merge-proof-contracts.mjs`) immediately before `boundary-audit`, and the
/tmp re-merge in §6 (all 15 current batch files) shows my batches clear.
