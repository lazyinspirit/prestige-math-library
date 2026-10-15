# Step 5 adjudication — group **b**, run `hopf-hecke-unfinished-15-2026-10-15`

You are the group Alpha for batches 4, 5, 6: 3 A/B pair(s), 6 page(s), 30 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **4**: `research/hopf-hecke-unfinished-15-2026-10-15-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **5**: `research/hopf-hecke-unfinished-15-2026-10-15-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/hopf-hecke-unfinished-15-2026-10-15-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/hopf-hecke-unfinished-15-2026-10-15-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `hopf-ideals-finite-duals-and-basic-constructions` | A | hopf-hecke-algebras | 1696 | `tensor-coherence-and-algebraic-descent`, `coalgebras-counits-and-the-fundamental-coalgebra-theorem`, `comodules-matrix-coefficients-and-coalgebra-duality`, `bialgebras-convolution-and-antipode-identities` |
| 4 | `hopf-ideals-finite-duals-and-basic-constructions-examples` | B | hopf-hecke-algebras | 1697 | `hopf-ideals-finite-duals-and-basic-constructions`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, `artinian-rings-and-length` |
| 5 | `hopf-module-tensor-products-and-rigid-duality` | A | hopf-hecke-algebras | 1698 | `tensor-coherence-and-algebraic-descent`, `comodules-matrix-coefficients-and-coalgebra-duality`, `bialgebras-convolution-and-antipode-identities`, `hopf-ideals-finite-duals-and-basic-constructions` |
| 5 | `hopf-module-tensor-products-and-rigid-duality-examples` | B | hopf-hecke-algebras | 1699 | `hopf-module-tensor-products-and-rigid-duality` |
| 6 | `hopf-modules-coinvariants-and-the-fundamental-theorem` | A | hopf-hecke-algebras | 1700 | `tensor-coherence-and-algebraic-descent`, `comodules-matrix-coefficients-and-coalgebra-duality`, `bialgebras-convolution-and-antipode-identities`, `hopf-module-tensor-products-and-rigid-duality` |
| 6 | `hopf-modules-coinvariants-and-the-fundamental-theorem-examples` | B | hopf-hecke-algebras | 1701 | `hopf-modules-coinvariants-and-the-fundamental-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `hopf-ideals-finite-duals-and-basic-constructions` — Hopf Ideals, Finite Duals, and Basic Constructions (6 item(s))

- `def-hh-finite-dual-of-an-associative-algebra` · definition — The finite dual of an associative algebra
- `def-hh-hopf-ideal-and-hopf-subalgebra` · definition — Hopf ideals and Hopf subalgebras
- `thm-hh-finite-dimensional-dual-hopf-algebra` · theorem — The dual of a finite-dimensional Hopf algebra is a Hopf algebra
- `lem-hh-taft-algebra-pbw-and-hopf-structure` · lemma — The Taft algebra: PBW basis and Hopf structure
- `thm-hh-hopf-quotient-kernel-and-tensor-product-constructions` · theorem — Hopf quotients, kernels of Hopf maps, and tensor products
- `thm-hh-finite-dual-coalgebra-and-hopf-descent` · theorem — The finite dual is a coalgebra and descends through bialgebras and Hopf algebras

### `hopf-ideals-finite-duals-and-basic-constructions-examples` — Hopf Ideals, Finite Duals, and Basic Constructions — Examples (5 item(s))

- `ex-hh-finite-group-dual-hopf-algebra` · example — The dual Hopf algebra of a finite group algebra
- `ex-hh-coideals-ring-ideals-hopf-ideals-and-subbialgebras` · example — Coideals, ring ideals, Hopf ideals, and subbialgebras
- `ex-hh-sweedler-four-dimensional-hopf-algebra` · example — Sweedler's four-dimensional Hopf algebra
- `ex-hh-finite-dual-of-a-polynomial-hopf-algebra` · example — The finite dual of the primitive polynomial Hopf algebra
- `ex-hh-tensor-product-hopf-algebra` · example — A tensor product Hopf algebra from a group and a primitive element

### `hopf-module-tensor-products-and-rigid-duality` — Hopf Module Tensor Products and Rigid Duality (5 item(s))

- `def-hh-module-category-and-tensor-action` · definition — The module category of a bialgebra and its tensor action
- `thm-hh-bialgebra-module-tensor-coherence` · theorem — Bialgebra module tensor actions and their coherence
- `def-hh-left-dual-of-a-finite-hopf-module` · definition — The left dual of a finite-dimensional Hopf module
- `thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities` · theorem — Evaluation, coevaluation, and triangle identities for left duals
- `lem-hh-right-dual-and-bidual-conditions` · lemma — Right duals and the antipode twist on biduals

### `hopf-module-tensor-products-and-rigid-duality-examples` — Hopf Module Tensor Products and Rigid Duality — Examples (3 item(s))

- `ex-hh-bialgebra-tensor-products-without-antipode` · example — Tensor products of modules over a bialgebra without an antipode
- `ex-hh-finite-group-contragredient-and-tensor-dual` · example — The tensor product and contragredient dual of a finite-group module
- `ex-hh-taft-module-dual` · example — A two-dimensional module and its Taft-algebra dual

### `hopf-modules-coinvariants-and-the-fundamental-theorem` — Hopf Modules, Coinvariants, and the Fundamental Theorem (7 item(s))

- `def-hh-right-right-hopf-module-and-coinvariants` · definition — Right-right Hopf modules and coinvariants
- `lem-hh-coinvariants-form-a-subspace` · lemma — The coinvariants of a right-right Hopf module form a subspace
- `lem-hh-free-right-right-hopf-module` · lemma — The free right-right Hopf module on a vector space
- `lem-hh-hopf-module-coinvariant-projection` · lemma — The coinvariant projection of a right-right Hopf module
- `thm-hh-fundamental-theorem-of-hopf-modules` · theorem — The fundamental theorem of right-right Hopf modules
- `lem-hh-coinvariants-of-free-hopf-module` · lemma — Coinvariants of a free right-right Hopf module
- `cor-hh-hopf-module-functor-equivalence` · corollary — Right-right Hopf modules are equivalent to vector spaces

### `hopf-modules-coinvariants-and-the-fundamental-theorem-examples` — Hopf Modules, Coinvariants, and the Fundamental Theorem — Examples (4 item(s))

- `ex-hh-regular-hopf-module-projection` · example — The regular Hopf module and its projection
- `ex-hh-free-hopf-module-over-group-algebra` · example — The free Hopf module over a group algebra
- `ex-hh-free-hopf-module-over-polynomial-hopf-algebra` · example — The free Hopf module over the polynomial Hopf algebra
- `cex-hh-separate-action-and-coaction-fail-hopf-compatibility` · counterexample — A module and comodule need not satisfy Hopf compatibility

## Your seams

Your pages depend on another group's:

- `hopf-ideals-finite-duals-and-basic-constructions` requires `coalgebras-counits-and-the-fundamental-coalgebra-theorem` (group a, batch 1)
- `hopf-ideals-finite-duals-and-basic-constructions` requires `comodules-matrix-coefficients-and-coalgebra-duality` (group a, batch 2)
- `hopf-ideals-finite-duals-and-basic-constructions` requires `bialgebras-convolution-and-antipode-identities` (group a, batch 3)
- `hopf-module-tensor-products-and-rigid-duality` requires `comodules-matrix-coefficients-and-coalgebra-duality` (group a, batch 2)
- `hopf-module-tensor-products-and-rigid-duality` requires `bialgebras-convolution-and-antipode-identities` (group a, batch 3)
- `hopf-modules-coinvariants-and-the-fundamental-theorem` requires `comodules-matrix-coefficients-and-coalgebra-duality` (group a, batch 2)
- `hopf-modules-coinvariants-and-the-fundamental-theorem` requires `bialgebras-convolution-and-antipode-identities` (group a, batch 3)

Another group's pages depend on yours:

- `finite-hopf-integrals-frobenius-duality-and-maschke` (group c) requires your `hopf-ideals-finite-duals-and-basic-constructions`
- `finite-hopf-integrals-frobenius-duality-and-maschke` (group c) requires your `hopf-modules-coinvariants-and-the-fundamental-theorem`
- `quasitriangular-hopf-algebras-and-braided-module-categories` (group c) requires your `hopf-module-tensor-products-and-rigid-duality`
- `drinfeld-doubles-and-yetter-drinfeld-module-constructions` (group c) requires your `hopf-ideals-finite-duals-and-basic-constructions`
- `drinfeld-doubles-and-yetter-drinfeld-module-constructions` (group c) requires your `hopf-module-tensor-products-and-rigid-duality`
- `hecke-symmetries-and-generic-quantum-schur-weyl-duality` (group e) requires your `hopf-module-tensor-products-and-rigid-duality`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/hopf-hecke-unfinished-15-2026-10-15-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `hopf-hecke-unfinished-15-2026-10-15`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
