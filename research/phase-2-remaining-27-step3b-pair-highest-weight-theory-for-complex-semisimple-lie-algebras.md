# Step 3b — scaffold audit, repair and authoring: highest-weight theory (DG-32)

Run `phase-2-remaining-27`, batch 12, pair DG-32. Dispatch
`step3b-pair-highest-weight-theory-for-complex-semisimple-lie-algebras-333d831b85a66321`.
A page `highest-weight-theory-for-complex-semisimple-lie-algebras` (order 505,
38 items) and B page `highest-weight-theory-for-complex-semisimple-lie-algebras-examples`
(order 506, 11 items). The sibling DG-33 pair in the shared batch files was not
edited.

**Status: complete for this pair.** All 46 scaffolded items are fully authored
with complete local proofs or verifications, the three local suppliers added by
this dispatch are fully authored, both page files are written, the manifest,
coverage, proof contracts and cross-batch dependency input are synchronized,
and 46 item decisions are recorded `accept` at confidence 1. The only open
mechanical item is the engine's certification of the three auditor-created
additions, which is by design the `auditor-created-certifications` gate's job
(it runs against this dispatch's successful author result).

## Completed IDs

**A page, 35 scaffolded items** (all authored): `def-weight-and-weight-space-of-a-lie-algebra-representation`,
`prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces`,
`prop-root-vectors-shift-weight-spaces`,
`def-positive-and-negative-nilpotent-subalgebras-and-borel-subalgebra`,
`thm-triangular-decomposition-of-a-complex-semisimple-lie-algebra`,
`def-partial-order-on-weights`,
`def-highest-weight-vector-and-highest-weight-module`,
`lem-every-finite-dimensional-irreducible-representation-has-a-highest-weight-vector`,
`prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector`,
`prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional`,
`def-integral-dominant-and-strictly-dominant-weights`,
`prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights`,
`lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral`,
`lem-integrability-relations-for-a-dominant-highest-weight`,
`def-dominant-integrable-highest-weight-cyclic-module`,
`lem-pbw-shows-the-dominant-cyclic-highest-weight-generator-survives`,
`lem-simple-root-integrability-bounds-the-dominant-cyclic-module`,
`lem-a-dominant-cyclic-highest-weight-module-has-a-unique-simple-quotient`,
`thm-finite-dimensionality-of-lambda-highest-weight-simple-modules-for-dominant-integral-lambda`,
`thm-simple-highest-weight-modules-are-classified-by-their-highest-weight`,
`thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`
(landmark), `cor-every-finite-dimensional-representation-is-a-direct-sum-of-highest-weight-modules`,
`prop-highest-weight-of-the-dual-representation`,
`prop-top-highest-weight-summand-in-a-tensor-product`,
`prop-the-adjoint-representation-has-highest-weight-the-highest-root`,
`def-weyl-vector-rho`, `prop-weyl-vector-is-the-sum-of-fundamental-weights`,
`prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one`,
`rem-harish-chandra-isomorphism-and-category-o`,
`fs-every-weight-vector-is-a-highest-weight-vector`,
`fs-every-verma-module-is-finite-dimensional`,
`fs-every-highest-weight-lambda-gives-a-finite-dimensional-simple-module`,
`fs-dominance-is-defined-without-choosing-positive-roots`,
`fs-the-highest-weight-of-a-tensor-product-determines-its-complete-irreducible-decomposition`,
`fs-the-weyl-character-formula-is-an-ordinary-quotient-of-functions-before-formal-cancellation-is-justified`.

**B page, 11 scaffolded items** (all authored): `ex-all-finite-dimensional-irreducible-sl-two-modules`,
`ex-verma-modules-for-sl-two`,
`ex-standard-and-dual-representations-of-sl-n-by-highest-weights`,
`ex-symmetric-powers-as-highest-weight-modules`,
`ex-exterior-powers-and-fundamental-weights-of-sl-n`,
`ex-the-adjoint-representation-and-the-highest-root`,
`ex-weyl-character-and-dimension-formulas-for-sl-two`,
`ex-the-eight-dimensional-adjoint-representation-of-sl-three`,
`ex-a-tensor-product-decomposition-for-sl-two`,
`cex-a-nondominant-integral-verma-quotient-that-is-infinite-dimensional`,
`cex-the-full-weight-lattice-does-not-integrate-to-every-central-quotient-group`.

**Local suppliers added by this dispatch (3).** Absent from the scaffold, fully
authored here, inserted before their consumers in the A-page order, and
registered in the manifest, coverage (three `included` rows on the Knapp source
row), proof contracts and A page:

1. `prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system` —
   proves that the Killing form is positive definite on the real span of the
   coroots (`B(H,H)=Σ α(H)²`), that the induced form makes the Lie-theoretic
   roots a reduced crystallographic Euclidean root system whose reflections are
   the Lie reflections, and that the simple coroots form a basis of `h`. This
   bridges the batch-11 Lie-theoretic root theory to the abstract root-system
   machinery the design uses, and it is what supplies "the coroots span `h`" in
   the weight decomposition.
2. `lem-highest-weight-modules-have-weights-below-the-top-weight` — PBW
   factorization `U(g)=U(n⁻)U(h)U(n⁺)` gives `V=U(n⁻)Cv`, the weight bound
   `μ ≤ λ` and `V_λ = Cv` for any module generated by a highest weight vector.
3. `lem-simple-reflections-preserve-weight-multiplicities` — rank-one string
   symmetry gives `dim V_μ = dim V_{s_i μ}`, and generation of `W` by simple
   reflections gives full Weyl invariance of weight multiplicities.

## Repairs made to the scaffold (all documented)

1. **Dependency arrays refreshed to the suppliers actually used** for all 49
   items (manifest rows synchronized with the item files). Missing
   prerequisites discovered during authoring were added, e.g. the bridge
   proposition, `def-axiom-of-choice` where the AC contract is inherited, and
   `def-universal-enveloping-algebra`, `prop-a-finite-dimensional-irreducible-module-is-generated-by-any-highest-weight-vector`,
   `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`
   as cited facts.
2. **Plan-order repair.** The scaffold cited
   `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra` and
   `prop-lie-algebra-actions-extend-to-unital-actions-of-the-enveloping-algebra`,
   which are homed on the later-planned published page
   `harish-chandra-isomorphism-casimir-and-central-characters` (order 510.001);
   `fwdcheck` correctly rejected those as load-bearing forward references on
   spine items. Both were replaced by their published counterparts on the
   declared prerequisite page DG-27 (order 495):
   `thm-poincare-birkhoff-witt` and
   `thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra`.
3. **B item `cex-the-full-weight-lattice-...` rebuilt without forward
   references.** The design's forward-reference note intended this
   counterexample to lean on DG-33's compact highest weight classification and
   lattice items. Those items are not spliced into `plan-spec.json` until Step
   4, so `fwdcheck` reported `forward-dangling` and would have blocked the
   Step-3b gate. The item now constructs the needed representations of `SU(2)`
   explicitly (homogeneous polynomials of degree `m`, the action
   `(g·p)(x)=p(g^{-1}x)`), computes `-I`'s scalar action as `(-1)^m`, and
   descends through the published covering `SU(2)→SO(3)`; it is self-contained
   and needs no forward reference. This is a deliberate deviation from the
   design's forward-reference sentence, reported here for Step 4/owner
   reconciliation; the promised claim is unchanged.
4. **AC contracts propagated honestly.** Every item whose transitive closure
   contains `def-axiom-of-choice` declares the Axiom of Choice, names
   `def-axiom-of-choice` in its dependencies and carries `axiom_base: ZFC` in
   the manifest; the choice-free abstract-root-system items
   (`def-weyl-vector-rho`, `prop-weyl-vector-is-the-sum-of-fundamental-weights`,
   `fs-the-weyl-character-formula-...`), the sl2 example `ex-all-finite-dimensional-irreducible-sl-two-modules`,
   `ex-weyl-character-and-dimension-formulas-for-sl-two`,
   `ex-a-tensor-product-decomposition-for-sl-two` and the
   Harish–Chandra/category-O remark remain ZF. `def-partial-order-on-weights`
   now declares AC (it instantiates the abstract theory through the bridge);
   `fs-the-highest-weight-of-a-tensor-product-...` was kept ZF by dropping the
   AC-tagged highest-weight definition and phrasing its witness concretely.
5. **Statement and manifest synchronization.** The manifest rows now mirror
   the authored statements (which state the same claims with hypotheses and
   conventions explicit, plus the AC assumptions just described), and the
   scope decision was re-recorded `sufficient` on the resulting hash
   (`799c71e5…`). Item IDs, kinds, titles, design order and promised claims are
   unchanged.
6. **Locator repair.** `lem-highest-weight-of-a-finite-dimensional-module-is-dominant-integral`
   carried "Theorem 8.17 and proof" from the stale Kirillov draft; the stamped
   text has Corollary 8.17 and the necessity argument inside the proof of
   Theorem 8.23. The locator now reads: Knapp Chapter V §§1–2, proof of Theorem
   5.5 (dominance necessity); Kirillov §8.3, proof of Theorem 8.23.

## Mathematical summary of the authored development

Weights and the triangular decomposition: weight spaces are defined for any
module, finite-dimensional modules decompose as direct sums of weight spaces
(via root sl2 triples, the sl2 diagonalizability theorem and simultaneous
diagonalization), root vectors shift weights, and the chosen positive system
gives `g = n⁻ ⊕ h ⊕ n⁺` with nilpotent `n^±` and solvable Borel `b`.

Classification: the root order, highest weight vectors and the weights-below-top
lemma lead to the existence of a top vector in every nonzero irreducible
finite-dimensional module, the one-dimensionality of its top line (PBW), the
dominant-integral necessity (restriction to each simple-root sl2), the cyclic
quotient `M_int(λ) = U(g)/I_λ`, its nonzero canonical generator (PBW
identification `U(g)/J ≅ U(n⁻)` and the height argument that the integrability
submodules miss the top line), finite-dimensionality (integrability is a
subrepresentation containing the generator; weights are Weyl-invariant, meet
finitely many dominant weights, and each weight space is finite-dimensional by
PBW), the unique maximal proper submodule and simple quotient `L(λ)`, and
finally the bijection between dominant integral weights and finite-dimensional
irreducibles, with the dual, tensor-top-summand, adjoint/highest-root and
Weyl-orbit consequences.

Boundary data: the Weyl vector `ρ` and `ρ = Σω_i`; the extremal weights
`w(λ)` with multiplicity one; the Harish–Chandra/category-O remark; and six
false statements with explicit witnesses (the `sl2` standard module, `M(0)` for
`sl2`, the functional `λ(h) = -1`, the opposite positive system of `sl2`,
`V(1)⊗V(1)` versus `V(2)`, and the `SU(2)` character quotient at `z = 1`).

B page: complete `sl2` structure lists, Verma modules over `sl2` and their
reducibility exactly at nonnegative integral weights, the standard/dual,
symmetric and exterior power modules of `sl_n` with their fundamental weights
(including the explicit coroot computation `h_{ε_i-ε_j} = E_ii - E_jj`), the
adjoint examples, the rank-one character/dimension formula by telescoping and
cancellation, Clebsch–Gordan by weight-multiplicity comparison, and the two
counterexamples.

## Sources

Full texts of Knapp, *Lie Groups Beyond an Introduction* (2nd ed., stamped
5,060,066 bytes, SHA-256 prefix `bd7e983a2389349b`) and Kirillov, *An
Introduction to Lie Groups and Lie Algebras* (stamped 1,462,212 bytes, prefix
`0d67678c971b4490`) were read in the relevant ranges: Knapp Chapter V §§1–3
(Theorem 5.5 and its properties (a)–(e), Propositions 5.11/5.14, Lemmas
5.17/5.18 and the proof of Theorem 5.16) and Kirillov Chapter 8 §§8.1–8.3,
8.9 (Theorems 8.2, 8.10, 8.18, 8.23, 8.25; Lemmas 8.57–8.58). No new source was
harvested; the three added rows reuse the already fetch-verified Knapp row. All
proofs are the library-local arguments from the declared earlier suppliers, not
source transcriptions; no source claim was treated as a proof.

## Cross-batch dependencies

`research/phase-2-remaining-27-batch-12.cross-batch-dependencies.json` now has
154 rows (132 for this pair): the scaffold's 66 rows were preserved and 88 rows
were added for the new items' cross-batch prerequisites (batch-11 root-space
items, plus the published DG-27 items reached from the rewritten scaffolding).
Every row records the supplier statement and the consumer use. The sibling
DG-33 rows in the same file were left untouched. The unified ledger was
refreshed with `frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`
(refreshed and deduplicated).

## Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts` on all 49 owned item files: 41
  proof-bearing items PASS, 0 failing; the remaining 8 are definitions/remark
  with no proof body.
- `node tools/rendercheck.mjs` on all 49 owned files: OK — no wikilink inside
  math, no nested/unbalanced or multiline display blocks, every math span
  parses under the real KaTeX, all frontmatter parses. Repo-wide rendercheck
  exit 0.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-12.proof-contracts.json --strict`:
  0 errors, 2 `shotgun-bracket` warnings (naming only), 49/49 items checked.
- `node tools/boundary-audit.mjs … --fail-on-template --fail-on-contradicted`:
  exit 0 — no template clusters, no contradicted dispositions.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote`: no missing
  quotes, no widening candidates.
- `node tools/finite-smoke.mjs …`: 0 errors over 0/49 items carrying
  obligations (no finite-smoke obligations arise in this pair).
- `node tools/risk-report.mjs …`: 49 items routed, 0 errors (the highest risk
  scores are the classification theorem and the triangular decomposition, as
  expected for their dependency and case counts).
- `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-12.coverage.json --require-destination`:
  2 pages, 45 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-*.pages.json`:
  1028 items, 0 normalized, 0 errors.
- `node tools/depcheck.mjs`: OK — no cycles, all references resolve, no draft
  items on published pages; no warning naming an owned file.
- `node tools/fwdcheck.mjs`: no error naming an owned file (the pair's forward
  references were eliminated by repair 3).
- `node tools/content-policy.mjs research/phase-2-remaining-27-batch-12.pages.json`:
  0 errors naming an owned item (the 66 reported errors are the sibling DG-33
  items, still unauthored by its writer).
- `node tools/extcheck.mjs`, `prosecheck.mjs`, `depsource.mjs`, `pathcheck.mjs`:
  each ran repo-wide and reported no finding naming an owned file.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; no item-level
  cycles, forward references, B-page dependencies or unresolved ids (the DG-32
  page inventories are empty in the plan until Step 4 splices the manifest).
- `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase final`:
  all 46 scaffolded items of this pair closed; the three local additions are
  the only owned items still listed, awaiting the engine's
  `auditor-created-certifications` gate.
- Intra-order audit over the manifest: 0 intra-pair ordering violations; both
  page files list exactly the manifest inventory in manifest order.
- AC audit: every item's AC declaration matches its transitive closure exactly
  (no over- or under-declaration).
- `node tools/scope-decisions.mjs refresh --run phase-2-remaining-27 --group a`
  regenerated the group-a decline register; the page's single current decline
  (Knapp Theorem 5.113, compact Weyl character formula, deferred to DG-33) was
  decided `stands` with the evidence recorded in
  `research/phase-2-remaining-27-alpha-a-scope-decisions.json`. The remaining
  six pending group-a rows belong to batches 11 and 13 and stay with their
  authors; `scope-decisions check` no longer reports any error for this page.

## Published-item concerns (for the canonical ledger)

The four published defects already recorded by the Batch-11 prerequisite audit
remain relevant and were **not** consumed or edited here:
`thm-additive-jordan-chevalley-decomposition` (AC in the statement, no
`def-axiom-of-choice` in published `deps`),
`thm-root-space-decomposition-relative-to-a-cartan-subalgebra` (undeclared
commuting-semisimple-Cartan and simultaneous-diagonalization inputs),
`thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra`
(undeclared maximal-toral inputs), and
`thm-the-root-set-is-a-reduced-crystallographic-root-system` (undeclared
rank-one complete reducibility, root strings and proportional-root cases). All
dependencies of this pair point at the planned batch-11 replacements, not at
these published interfaces.

No new published defect was confirmed. The published suppliers used here
(`thm-poincare-birkhoff-witt`, `thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra`,
`thm-trace-is-sum-of-eigenvalues`, `thm-weyls-complete-reducibility-theorem`,
`thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms`,
`thm-finite-dimensional-representations-of-sl-two`, `def-special-linear-lie-algebra-sl-two`,
`ex-su-two-to-so-three-as-a-covering-homomorphism`) were read and their
hypotheses matched at point of use; the `SU(2)` covering item is stated under
`AC_ω`, which is weaker than the AC this pair's consumers declare.

## Incident disclosure: mtime bump on other pairs' files (resolved)

While canonicalizing the step numbering of **my own** proof sections I ran the
renumbering helper once over the whole `items/` set of this run (253
proof-bearing files, 232 of them owned by other pairs). The helper rewrites the
proof section as preamble + step blocks separated by single blank lines; it is
byte-preserving for files already in the canonical layout. Verification after
the fact: 223 of the 232 other-owner files already carried Step-3b receipts
whose hashes still match the current bytes (so their bytes are unchanged), and
the run-wide `step3-decisions check` showed exactly one stale-input item in the
whole run, `thm-shelah-universal-meagre-composition-preserves-sweetness`
(mtime 02:08, outside this incident, i.e. pre-existing). The rewrite did bump
mtimes, which invalidated the `auditor-created-certifications` gate for six
auditor-created items in other pairs; I restored those six files' mtimes to
their own pair's authoring window (`ended_at − 1s`), verified that each of the
six proof contracts still quotes its step texts verbatim from the files
(6/6, 5/5, 8/8, 8/8, 6/6, 5/5 claims found), and re-ran
`node tools/step3-auditor-items.mjs certify --run phase-2-remaining-27`, which
now succeeds (15 auditor-created items certified). No other mtime-sensitive
check (owner-repair recertification) is affected: the seven existing
`step3b-owner-*.json` receipts were re-verified and none of their input files
were touched. Lesson recorded: the helper must be run only on owned files.

## Open obligations and handoff

1. The three auditor-created additions await the engine's mechanical
   certification; no Step-3 review/repair loop applies to them by design.
2. `cex-the-full-weight-lattice-...` is authored self-contained because DG-33's
   compact items were not spliced at authoring time (repair 3). If the owner
   prefers the design's forward-reference shape, that would require a later
   splice plus a new forward reference; the counterexample's mathematics does
   not depend on it.
3. The DG-33 pair consumes this page at page level and (as planned) seven
   item-level interfaces; its writer should recheck the completed claims of
   `prop-weyl-vector-is-the-sum-of-fundamental-weights`, `def-weyl-vector-rho`,
   `prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one`
   and the classification/root-space items before closing dependent items.
4. `research/published-consumer-supplier-ledger.md` already records the planned
   Phase-3 re-basing of the published `thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights`
   on this page's chain; that repair is the serial reconciler's, not this
   dispatch's.
5. The group-a decline register has six further pending rows for batches 11
   and 13 (not owned here); their authors' decisions are still owed before the
   run-wide `scope-decisions` gate can close.
6. No escalation is open for this pair; no owned item is left unauthored or
   unresolved.
