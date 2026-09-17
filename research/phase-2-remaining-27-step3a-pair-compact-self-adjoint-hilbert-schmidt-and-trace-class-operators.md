# Step 3a scope review — compact self-adjoint, Hilbert–Schmidt, and trace-class operators

Run: `phase-2-remaining-27`

Role: `alpha`

Batch: 3 (pair owned: A `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`,
B `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples`)

Review type: scope only; no item or proof approvals, no owner records.

## Review basis

Binding design read in full for this pair: `research/plan-functional-analysis-track.md`
§5 FA-16 (line 1231) as amended by §14.4 (line 3115) and §14.5 (line 3243),
plus the run-local `research/phase-2-remaining-27-owner-authoring-direction.md`
(FA-16 imports the Hilbert–Schmidt definition, basis independence, compactness
and kernel theorem from the earlier square-kernel pair, retains the
two-sided-ideal theorem, and leaves Lidskii to the later Fredholm-determinant
pair). Current plan metadata: `research/plan-spec.json` rows 288.077/288.078
(exactly two page-level requires; both item arrays still empty, as expected
before authoring). Current manifest: `research/phase-2-remaining-27-batch-3.pages.json`
(21 A items, 8 B items). Coverage ledger: `...-batch-3.coverage.json` and the
batch-3 notes/cross-batch ledger `...-batch-3.cross-batch-dependencies.json`.
Drift record: `research/phase-2-remaining-27-drift-evidence.json` (page entry)
and `...-alpha-step1-drift.md` (verdict `no-drift`; the declared-edge closure
already contains FA-13, FA-14 and the product-measure/L^p suppliers).

Prerequisite interfaces inspected: batch 1 (FA-13/FA-14), batch 2 (FA-15
`compact-operators-and-riesz-schauder-theory` and the square-kernel pair
`square-integrable-kernels-and-hilbert-schmidt-compactness`, including the
imported `def-hilbert-schmidt-operator`, `thm-hilbert-schmidt-norm-is-basis-independent`,
`thm-hilbert-schmidt-operators-are-compact`, `thm-l-two-kernels-give-hilbert-schmidt-operators`).
Consumers: batch 4 (`banach-algebras-spectrum-and-holomorphic-functional-calculus`)
and batch 12 (`compact-lie-groups-maximal-tori-and-peter-weyl-theory`), whose
only item-level use is `thm-spectral-theorem-for-compact-self-adjoint-operators`
by `lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces`;
the planned (not this run) pair `fredholm-determinants-and-the-lidskii-trace-formula`,
plan order 288.0801, is the named Lidskii destination.

Source coverage was re-verified against the run's fetched complete texts:
Gerald Teschl, *Topics in Real and Functional Analysis* (563 pp.) — §1.3
Problems 1.19–1.20 (quadratic-form/polarization bounds), §3.2 Theorems 3.5–3.7
and Corollaries 3.8–3.9 (printed pp. 72–78), §3.5 Theorem 3.17 and Lemma 3.19
(pp. 89–93), §3.6 Lemmas 3.23–3.29 (pp. 93–100), §10.5 Lemma 10.26 and
Theorem 10.27 Mercer (pp. 304–306); Anthony W. Knapp, *Advanced Real Analysis*
— Chapter II Proposition 2.2 and Theorem 2.3 (printed pp. 37–39), II.5
Propositions 2.8–2.9 (pp. 50–52), the trace ideal-norm/cyclicity problems
(II.6 Problems 4–5), and III.8 (pp. 97–99), recorded out of scope. The locators
and the mapped results were confirmed in the cached full texts; the failed
Knapp clickable endpoint is retained as a documented drop with the author's
complete inside edition fetched as the replacement.

## Decision

| A page | Inventory | Decision | Scope rationale |
| --- | ---: | --- | --- |
| `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` | A21 / B8 | `sufficient` | The A inventory matches the binding FA-16 list id-for-id and in order, and the B inventory matches its eight declared items. Together they cover the pair's subject: compact self-adjoint spectral theorem (finite multiplicities, accumulation only at 0, eigenspaces spanning `(ker T)^⊥ = closure(ran T)`, norm expansion, complex-spectrum identification), extremal norm-point eigenvalue, eigenvalue orthogonality and invariant orthogonal complements, the separate-AC eigenbasis corollary, unique compact positive square root, `|T|` and singular values, SVD with exact support indexing and zero-padding discipline, approximation numbers with the compactness criterion for arbitrary bounded Hilbert operators, finite-rank norm density, the imported Hilbert–Schmidt core plus the retained two-sided-ideal theorem, and the complete trace-class chain (definition via `Σ s_n`, product-of-two-Hilbert–Schmidt factorization with norm bound, nuclear-series characterization with norm infimum, Banach ideal, trace definition, absolute convergence and basis independence including the separable-support route for an arbitrary ambient Hilbert space, cyclicity, positive trace equal to the eigenvalue sum, and the explicit Lidskii boundary). The B page supplies the `ℓ²` diagonal class criteria, the Volterra operator (Hilbert–Schmidt, compact, quasinilpotent), rank-one adjoint/norm/trace, the Mercer-type diagonal trace formula under stated positivity hypotheses, the three separating counterexamples (compact ⇏ Hilbert–Schmidt, Hilbert–Schmidt ⇏ trace class, non-cyclic products without summability), and the Schatten-scale orientation remark. Systematic boundaries are explicit rather than accidental: general Lidskii belongs to plan order 288.0801, general Schatten `p` theory is an orientation-only remark by design, and the Hilbert–Schmidt inner-product space structure is neither promised nor consumed. Consumer needs are met by the stated items. |

## Verification notes and uncertainty

- The manifest was compared programmatically with the binding FA-16 prose list:
  A 21/21 and B 8/8 ids, identical order, no extra or missing ids. Titles,
  category, orders, companion links and the two declared page requires agree
  with `research/plan-spec.json`.
- All 29 items carry current Step-1 `ready` receipts, and every declared
  dependency resolves to an in-run manifest item or a published item (41
  in-run, 11 published; none unresolved).
- The plan's broad prose requirement "FA-13–FA-15; planned predecessors MT-11
  and MT-14" is wider than the manifest's two page edges, but §14.4's
  controlling amendment and the current plan metadata use exactly those two
  edges, and the recorded closure reaches FA-13, FA-14, product integration
  and L^p transitively. The Step-1 drift review reached the same conclusion.
  Treated as a resolved planning-text seam, not a scope gap.
- Minor source-mapping imprecisions, not scope-relevant: the coverage maps
  Teschl Lemmas 3.23–3.25 to the retained Hilbert–Schmidt ideal item although
  3.23/3.24 back the basis-independence and triangle results rehomed to the
  square-kernel pair; and it lists the trace ideal-norm/cyclicity problems as
  II.5 where they are II.6 Problems 4–5. In both cases the underlying
  mathematics is present at the cited location.
- Cross-track overlap noted, no action recommended: the published
  measure-theory page `weak-mixing-and-the-chacon-transformation` already
  carries published items on compact self-adjoint positive eigenspaces and
  square-integrable kernel compactness. No item-id collision exists, and the
  FA pair develops its own inventory by binding design.
- No owner scope record for this page existed before this review; nothing in
  this report approves a proof or converts an owner decision.

## Conclusion

`sufficient` for `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`.
No scaffold enrichment and no pair merger are recommended. This verdict covers
scope only; it does not certify any item's proof, dependency proof, or an owner
transition.
