# Step 5 adjudication — group **a**, run `hopf-hecke-unfinished-15-2026-10-15`

You are the group Alpha for batches 1, 2, 3: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/hopf-hecke-unfinished-15-2026-10-15-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **2**: `research/hopf-hecke-unfinished-15-2026-10-15-batch-2-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **3**: `research/hopf-hecke-unfinished-15-2026-10-15-batch-3-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 1 | `coalgebras-counits-and-the-fundamental-coalgebra-theorem` | A | hopf-hecke-algebras | 1690 | `tensor-coherence-and-algebraic-descent` |
| 1 | `coalgebras-counits-and-the-fundamental-coalgebra-theorem-examples` | B | hopf-hecke-algebras | 1691 | `coalgebras-counits-and-the-fundamental-coalgebra-theorem` |
| 2 | `comodules-matrix-coefficients-and-coalgebra-duality` | A | hopf-hecke-algebras | 1692 | `tensor-coherence-and-algebraic-descent`, `coalgebras-counits-and-the-fundamental-coalgebra-theorem` |
| 2 | `comodules-matrix-coefficients-and-coalgebra-duality-examples` | B | hopf-hecke-algebras | 1693 | `comodules-matrix-coefficients-and-coalgebra-duality` |
| 3 | `bialgebras-convolution-and-antipode-identities` | A | hopf-hecke-algebras | 1694 | `tensor-coherence-and-algebraic-descent`, `coalgebras-counits-and-the-fundamental-coalgebra-theorem`, `comodules-matrix-coefficients-and-coalgebra-duality` |
| 3 | `bialgebras-convolution-and-antipode-identities-examples` | B | hopf-hecke-algebras | 1695 | `bialgebras-convolution-and-antipode-identities` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `coalgebras-counits-and-the-fundamental-coalgebra-theorem` — Coalgebras, Counits, and the Fundamental Coalgebra Theorem (8 item(s))

- `def-hh-coalgebra-and-coalgebra-map` · definition — Coalgebra and coalgebra map over a field
- `lem-hh-finite-spanning-list-contains-a-basis` · lemma — A finite spanning list contains a basis, without choice
- `lem-hh-counit-uniqueness-and-finite-sweedler-calculus` · lemma — Counit uniqueness and finite Sweedler calculus
- `def-hh-subcoalgebras-coideals-and-quotient-coalgebras` · definition — Subcoalgebras, coideals, and quotient coalgebras
- `lem-hh-finite-comatrix-coalgebra-exists` · lemma — Finite comatrix coalgebras exist
- `def-hh-group-like-and-primitive-elements` · definition — Group-like elements and primitives relative to a group-like element
- `thm-hh-coalgebra-quotient-and-kernel-descent` · theorem — Coideal quotients, coalgebra-map kernels, and sums of subcoalgebras
- `thm-hh-fundamental-theorem-of-coalgebras` · theorem — The fundamental theorem of coalgebras

### `coalgebras-counits-and-the-fundamental-coalgebra-theorem-examples` — Coalgebras, Counits, and the Fundamental Coalgebra Theorem — Examples (4 item(s))

- `ex-hh-group-like-elements-in-finite-set-coalgebra` · example — Group-like elements in a finite set coalgebra
- `ex-hh-relative-primitive-elements-in-two-dimensional-coalgebra` · example — Group-like elements and primitives relative to g in a two-dimensional coalgebra
- `ex-hh-counital-coideal-quotient-of-comatrix-coalgebra` · example — A counital coideal quotient of the two-by-two comatrix coalgebra
- `cex-hh-coideal-with-nonzero-counit-does-not-give-quotient-map` · counterexample — A coproduct coideal with nonzero counit does not give a quotient coalgebra map

### `comodules-matrix-coefficients-and-coalgebra-duality` — Comodules, Matrix Coefficients, and Coalgebra Duality (6 item(s))

- `def-hh-right-comodule-and-comodule-morphism` · definition — Right comodules, comodule maps, and subcomodules
- `def-hh-dual-algebra-and-rational-module` · definition — The dual convolution algebra and rational modules
- `lem-hh-comodule-kernels-quotients-and-coefficient-identities` · lemma — Kernels, images, quotients, and matrix coefficients of comodules
- `lem-hh-every-comodule-element-lies-in-a-finite-subcomodule` · lemma — Every comodule element lies in a finite-dimensional subcomodule
- `thm-hh-comodules-and-rational-dual-modules` · theorem — Right comodules are rational modules over the dual algebra
- `thm-hh-finite-algebra-coalgebra-duality` · theorem — Finite-dimensional algebra-coalgebra duality

### `comodules-matrix-coefficients-and-coalgebra-duality-examples` — Comodules, Matrix Coefficients, and Coalgebra Duality — Examples (3 item(s))

- `ex-hh-group-graded-spaces-as-comodules` · example — Group-graded vector spaces as comodules over the group-like coalgebra
- `cex-hh-infinite-dual-module-is-not-rational` · counterexample — An infinite-dimensional dual algebra with a nonrational module
- `ex-hh-two-dimensional-comodule-coefficient-matrix` · example — A two-dimensional comodule and its coefficient matrix

### `bialgebras-convolution-and-antipode-identities` — Bialgebras, Convolution, and Antipode Identities (8 item(s))

- `lem-hh-tensor-product-coalgebra` · lemma — The tensor product of two coalgebras is a coalgebra
- `def-hh-bialgebra-and-bialgebra-map` · definition — Bialgebras and bialgebra maps
- `lem-hh-convolution-algebra-associativity-and-unit` · lemma — Convolution of linear maps is associative and unital
- `lem-hh-bialgebra-compatibility-equivalence` · lemma — The two standard bialgebra compatibility formulations are equivalent
- `def-hh-hopf-algebra-and-antipode` · definition — Hopf algebras and antipodes
- `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication` · theorem — Uniqueness and anti-multiplicativity and anti-comultiplicativity of the antipode
- `lem-hh-group-and-polynomial-hopf-algebras-exist` · lemma — Group algebras, finite-group function algebras, and polynomial Hopf algebras
- `lem-hh-commutative-or-cocommutative-antipode-is-involutive` · lemma — A commutative or cocommutative Hopf algebra has involutive antipode

### `bialgebras-convolution-and-antipode-identities-examples` — Bialgebras, Convolution, and Antipode Identities — Examples (3 item(s))

- `ex-hh-group-and-function-algebras-for-s3` · example — Group and function Hopf algebras of the symmetric group on three letters
- `ex-hh-convolution-is-not-composition` · example — A finite calculation separating convolution from composition
- `ex-hh-polynomial-primitives-characteristic` · example — Primitive polynomials depend on the characteristic

## Your seams

Another group's pages depend on yours:

- `hopf-ideals-finite-duals-and-basic-constructions` (group b) requires your `coalgebras-counits-and-the-fundamental-coalgebra-theorem`
- `hopf-ideals-finite-duals-and-basic-constructions` (group b) requires your `comodules-matrix-coefficients-and-coalgebra-duality`
- `hopf-ideals-finite-duals-and-basic-constructions` (group b) requires your `bialgebras-convolution-and-antipode-identities`
- `hopf-module-tensor-products-and-rigid-duality` (group b) requires your `comodules-matrix-coefficients-and-coalgebra-duality`
- `hopf-module-tensor-products-and-rigid-duality` (group b) requires your `bialgebras-convolution-and-antipode-identities`
- `hopf-modules-coinvariants-and-the-fundamental-theorem` (group b) requires your `comodules-matrix-coefficients-and-coalgebra-duality`
- `hopf-modules-coinvariants-and-the-fundamental-theorem` (group b) requires your `bialgebras-convolution-and-antipode-identities`
- `finite-hopf-integrals-frobenius-duality-and-maschke` (group c) requires your `comodules-matrix-coefficients-and-coalgebra-duality`
- `finite-hopf-integrals-frobenius-duality-and-maschke` (group c) requires your `bialgebras-convolution-and-antipode-identities`
- `quasitriangular-hopf-algebras-and-braided-module-categories` (group c) requires your `bialgebras-convolution-and-antipode-identities`
- `drinfeld-doubles-and-yetter-drinfeld-module-constructions` (group c) requires your `comodules-matrix-coefficients-and-coalgebra-duality`
- `drinfeld-doubles-and-yetter-drinfeld-module-constructions` (group c) requires your `bialgebras-convolution-and-antipode-identities`
- `hecke-symmetries-and-generic-quantum-schur-weyl-duality` (group e) requires your `bialgebras-convolution-and-antipode-identities`

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
