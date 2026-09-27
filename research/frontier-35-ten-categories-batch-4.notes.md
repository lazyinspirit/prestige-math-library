# Frontier 35, batch 4 — Step 1 construction notes

Run `frontier-35-ten-categories`; role beta. Owned output is
`research/frontier-35-ten-categories-batch-4.pages.json`, with the two assigned
commutative-algebra A/B pairs at orders 366.0601–366.0604. The owner-authoring
direction file was absent when construction and final checks ran. No published
item, shared plan, verdict, or engine state was edited.

## Plan and design reconciliation

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the dispatch, the current
  `research/plan-spec.json`, the CA-19 and CA-20 sections of
  `research/plan-commutative-algebra-track.md`, and the cited AG-track location.
  The AG track explicitly delegates these inventories and proofs to the CA
  track; CA-19 and CA-20 therefore control the mathematical design. The
  current plan controls page identity, order, category, companion, requires,
  and titles.
- The plan and CA design agree on all four page IDs, orders, categories,
  companions, and prerequisite pages. Their only literal page-field conflict
  is the B title punctuation: the CA/AG order tables use an em dash before
  “Examples”; `plan-spec.json` uses a colon. The manifests use the plan titles.
  The plan has empty item arrays for these pages, so it does not contradict
  the CA item inventory.
- The canonical eight CA-19 A items, three CA-19 B examples, eleven CA-20 A
  items, and three CA-20 B examples remain in the specified order. Seven
  needed local suppliers precede their consumers: CA-19 polynomial normality,
  direct finite-generator Hilbert basis, and direct finite-module submodule
  lemmas; CA-20 arbitrary-ring integral subalgebra, polynomial normality,
  quasi-finite transfer, and conductor-radical coefficient lemmas. Thus the
  actual inventory is 11/3 and 15/3. No selected pair or useful claim was
  dropped, and no page split is needed.
- CA-19 design item 2 suggests the published
  `thm-purely-inseparable-extension-characterizations`; its transitive
  dependency reaches AC although this finite construction needs only the
  definition. Design item 5 suggests the published
  `thm-finite-integral-closure-in-a-finite-separable-extension`; its proof
  metadata also reaches AC. The scaffold gives the finite Frobenius and
  trace-dual arguments directly, preserving the unconditional theorem.
  Similarly, the B table's general A-theorem dependencies are replaced by
  exact normal-polynomial and closure-definition dependencies: each example
  proves its ring calculation directly and is choice-free.
- CA-20 design item 7 calls items 2–6 its “required reduction.” In the full
  Stacks proof, the one-generator quotient lemma uses the leading-coefficient
  lemma directly; strong transcendence, going down, and the conductor belong
  to the general theorem's one-variable finite-algebra case. The scaffold
  preserves every named result in proof order and records the actual edges.
  The finite/open factorization includes the full principal-open localization
  assertion of Stacks Lemma 10.123.14.

## Mathematical construction and axioms

- CA-19 uses Noether normalization, then proves that polynomial rings over
  **any** field have finite integral closure in every finite fraction-field
  extension. It constructs a finite normal overfield by taking a splitting
  field of finitely many minimal polynomials over the given extension, so no
  ambient algebraic closure is presupposed. In positive characteristic a finite purely inseparable extension
  of `K(x_i)` enters `K'(x_i^(1/q))` for a **finite purely inseparable constant
  extension** `K'/K`. Its closure is `K'[x_i^(1/q)]`, with an explicit finite
  monomial spanning list. A finite normal overfield splits over its purely
  inseparable fixed field; the remaining finite separable closure is trapped
  by an explicit finite Vandermonde trace-dual lattice. The direct
  finite-generator and submodule lemmas supply exactly the Noetherian steps.
  This algebraic route, including characteristic zero and dimension zero, is
  choice-free. The affine-variety translation
  `cor-affine-normalization-is-finite` states AC and depends on
  `def-axiom-of-choice`, because the published classical coordinate dictionary
  and Nullstellensatz use it. The cusp, nodal (characteristic not 2), and
  `t^3,t^4,t^5` examples are direct calculations.
- CA-20 works for finite-type maps of arbitrary commutative rings, including
  noninjective maps, zero divisors, and nilpotents. Its `S'` is the integral
  subalgebra **inside S**, never a domain normalization in a fraction field.
  The strongly-transcendental condition retains the annihilator multiplier.
  The conductor proof leads to the local element `g in S' minus q`; finite
  generation and a finite principal-open cover, justified by the published
  `thm-prime-spectrum-is-compact`, give the finite/open algebraic
  factorization. No base-principal or global finiteness conclusion is made.
  AC is explicit in `lem-strong-transcendence-descends-to-minimal-prime-quotients`,
  `lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite`,
  `thm-algebraic-zariski-main-localization`, and every general-theorem
  descendant: the actual published going-down, lying-over, and
  prime-intersection routes reach `def-axiom-of-choice`. Direct calculation
  in the B examples is weaker in axiom cost, but their cited general claims
  retain that declaration.
- An independent `deps`-only walk of all 32 new items and actual published
  `items/*.md` prerequisites reached 611 IDs: zero unknown, unpublished,
  `proved_here: false`, or deferred-set-theory items, and zero dependency
  cycles. Ten roots reach AC as stated above (one CA-19 affine translation,
  nine CA-20 items); none reaches dependent choice or
  `deferred-set-theory-beyond-choice`. The direct dependency validator accepted
  all 589 run items present at the recorded check. The 43 dependencies between the 32
  owned items have no self or forward edge. This dependency result is a scaffold
  check, not the later Step 3 mathematical verdict.

## Source evidence and dispositions

- CA-19 independent full treatments: [Stacks 10.161.12–13](https://stacks.math.columbia.edu/tag/032N)
  and [Milne, *Algebraic Geometry*, §§1, 8](https://www.jmilne.org/math/CourseNotes/AG.pdf),
  especially Propositions 1.40, 1.44, 1.51, 8.3, and Example 8.6. The full
  [Milne, *A Primer of Commutative Algebra*, §§3, 6](https://www.jmilne.org/math/xnotes/CA.pdf)
  supports the local finite-generator and module lemmas. Stacks
  [9.27.3](https://stacks.math.columbia.edu/tag/030M) supplies the correct
  inseparable/separable orientation. Milne AG Proposition 8.3's imperfect-field
  paragraph omits the required finite constant-field enlargement: for
  `K=F_p(u)`, `K(u^(1/p))(x)` cannot in general fit inside `K(x^(1/q))`.
  Stacks 10.161.13 and the explicit `K'` construction repair this source gap;
  no narrower perfect-field hypothesis was imposed.
- CA-20 independent full treatments: [Stacks §10.123](https://stacks.math.columbia.edu/tag/00PI),
  Lemmas 10.123.1–14, and [Milne, *A Primer of Commutative Algebra*, §17](https://www.jmilne.org/math/xnotes/CA.pdf),
  Definition 17.3 through Proposition 17.13 and its supporting lemmas.
  Stacks [§10.37](https://stacks.math.columbia.edu/tag/037B) supplies
  polynomial normality; the scaffold's finite coefficient-ring proof avoids
  a broad published choice-cost path.
- The coverage file preserves each harvested result with its exact locator,
  item ID or valid destination, and included/inline/deferred/out-of-scope
  reason. All nine unique batch sources have full-text fetch stamps and were
  inspected beyond search snippets. There was no unresolved fetch failure,
  source drop, or `source_resolution` exception. The own coverage check counted
  46 dispositions, zero errors, and one low-yield warning for CA-19 (9/23
  harvested results scaffolded); the other results have explicit dispositions
  in the file. Across the 15 currently present run coverage files, all 84
  source records passed `source-fetch-check`.

## Published dependency debt for the owner ledger

These are **published** prerequisites or design-suggested sources; the named
local suppliers are **Step 1 ready scaffolds, not published**. No published
file was changed.

| Published item and exact evidence | Batch repair / planned supplier |
|---|---|
| `thm-purely-inseparable-extension-characterizations` reaches `thm-algebraic-embedding-extension -> thm-zorn -> def-axiom-of-choice`, although CA-19 needs only a finite p-power envelope. | `lem-finite-purely-inseparable-rational-extension-envelope` proves that finite direction directly from `def-purely-inseparable-extension`; avoid the broad theorem in this proof. |
| `thm-finite-integral-closure-in-a-finite-separable-extension` reaches `lem-trace-pairing-for-a-finite-separable-extension -> thm-trace-form-is-nondegenerate-iff-separable -> thm-field-norm-and-trace-by-embeddings -> thm-purely-inseparable-extension-characterizations -> thm-algebraic-embedding-extension -> thm-zorn -> def-axiom-of-choice`. | `thm-polynomial-algebras-over-fields-have-finite-integral-closures` includes a finite primitive-element Vandermonde/trace-dual proof under its exact hypotheses. A future published repair could factor that finite trace argument into a choice-free lemma. |
| `thm-finite-normal-closures-exist-and-are-finite` is published but **assumes** the finite extension is embedded in an algebraic closure; it alone does not furnish such a closure for an arbitrary field. | `thm-polynomial-algebras-over-fields-have-finite-integral-closures` instead uses published `cor-splitting-fields-exist-for-finite-families` over the given extension and obtains a finite normal overfield directly. This is a prerequisite-scope correction, not a claim that the conditional published theorem is false. |
| `thm-hilbert-basis-theorem` reaches `thm-noetherian-ring-ideal-characterisations -> def-dependent-choice` (and AC) in published metadata. | `lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct` gives the needed finite-generator leading-coefficient proof. A future repair can separate that direction from the chain-condition equivalence. |
| `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` reaches `thm-chain-conditions-in-short-exact-sequences -> lem-finite-choice -> def-axiom-of-choice`. | `lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct` proves the finite-rank induction and quotient argument directly. A future repair can remove the needless broad chain-condition route for this direction. |

These are dependency/axiom-strength findings, not assertions that the published
theorem statements are false. The actual AC-bearing published results used by
CA-19's affine translation and CA-20's going-down/lying-over proof are
declared openly in the manifest. No Recorded result was used to prove a
replacement.

## Cross-batch inputs and final checks

The batch introduces no new prerequisite **page pair** outside its selected
four pages. `research/frontier-35-ten-categories-batch-4.cross-batch-dependencies.json`
is therefore `[]`; `node tools/frontier-dependency-ledger.mjs refresh --run
frontier-35-ten-categories` refreshed the derived
`briefs/tasks/frontier-dependency-ledger.md`. The planned AV-7 consumer of
these CA suppliers remains planned, not published and not a batch-4 item.

| Check | Result at final construction |
|---|---|
| `step1-decisions check` | 32/32 batch items have current `ready` records; zero batch work remains. Whole-run work remains in other batches. |
| `manifest-deps` on all run manifests | 589 items; zero dependency errors. |
| `content-policy --manifest-only` on batch 4 | 32 items; zero errors or warnings. |
| Whole-run `content-policy --manifest-only` | Ten `batch-dependency-missing` errors in other batches, including bounded-projective, graded-bimodule, and scheme suppliers; none is in this batch's dependency closure. |
| `coverage-checklist --require-destination` | Own: 2 A pages, 46 dispositions, zero errors, one low-yield warning; whole run: 26 A pages, 792 dispositions, zero errors, three low-yield warnings. |
| `source-fetch-check --stamp` | Own: 9/9 fully verified; whole currently present coverage files: 84/84 verified. |
| `manifest-integrity --run` | 54 owed pages, 54 present, zero missing or added. |
| `validate-plan` with only batch-4 overlay | Passes. The overlay uses the unchanged current plan and only these four scaffold page items. |
| `validate-plan` with all current run manifests | One unrelated undeclared prerequisite remains: `projective-extensions-and-the-little-group-method` uses `second-cohomology-and-abelian-kernel-extensions` outside its declared page prerequisite closure. |
| `extcheck --quiet` | Twelve pre-existing published-content errors, including `fs-every-subexponential-growth-group-has-polynomial-growth` kind/proof/precheck and `thm-onan-scott-classification-of-finite-primitive-groups` kind. None is reachable from batch 4. |

Readiness records are construction outcomes only. Owner/operator reconciliation
and the later engine and Step 3 gates remain separate reviews.
