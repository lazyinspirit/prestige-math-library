# frontier-33 — Alpha group `e` — Step 3 scaffold review

Group `e` covers batches `9` and `10`: AV-5
`dimension-constructible-images-and-dimensions-of-fibres` and AV-13
`fibre-products-base-change-and-scheme-theoretic-fibres`, together with
their companion pages.

I read the current root `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and
`CLAUDE.md`; both pairs' manifests, coverage files, and notes; the complete
AV-5 and AV-13 design sections; and the four live records in
`research/plan-spec.json`. I checked the claims as written against the
complete relevant source sections and against exact dependency statements,
including empty fibres, zero-dimensional fibres, reducible sources and
targets, arbitrary base change, residue-field extensions, and the distinction
between topological inverse image and scheme-theoretic pullback.

Both pairs are sufficient for authoring after the two narrow scaffold repairs
recorded below.

| A page | batch | A items | B items | harvested/canonical rows | declines | verdict |
|---|---:|---:|---:|---:|---:|---|
| `dimension-constructible-images-and-dimensions-of-fibres` | 9 | 46 | 10 | 86 | 25 | **sufficient** |
| `fibre-products-base-change-and-scheme-theoretic-fibres` | 10 | 42 | 11 | 194 | 35 | **sufficient** |

The machine-readable verdicts are in
`research/frontier-33-alpha-e-step3-verdicts.json`.

## Direct repairs applied

- Batch 9 item `def-projective-morphism-classical` named Vakil Class 38 but
  linked to Milne's notes. I corrected the manifest and item checkpoint to the
  exact harvested Vakil source,
  `https://math.stanford.edu/~vakil/0708-216/216class38.pdf`, §3, proof of
  Theorem 3.1. The definition, dependencies, and authoring route did not
  change.
- Batch 10 item `lem-base-change-open-closed-immersions` described a locally
  closed immersion with a misleading parenthetical factorization. I replaced
  it, consistently in the manifest, canonical coverage row, and item
  checkpoint, by “immersions (equivalently, locally closed immersions).” The
  proof strategy still factors an immersion locally as a closed immersion into
  an open subscheme and applies stability of open and closed immersions under
  base change. The ideal statement remains the precise image-ideal statement,
  avoiding the false suggestion that tensoring an ideal inclusion must stay
  injective.

No item id, page, page prerequisite, reading-order edge, published content, or
other group's artifact was changed.

## Batch 9 — AV-5

### Route and pair scope

The A page at order `366.049` contains 46 items and the companion at
`366.05` contains 10 examples or counterexamples. The pair follows AV-5:
dimension and codimension conventions; affine and projective intersection
bounds; constructible sets and Chevalley's theorem; dominant images containing
an open set; generic and local fibre-dimension bounds; projective upper
semicontinuity; and the closed-surjective, irreducible-equal-dimensional-fibre
criterion. The companion supplies the planned sharp examples and guardrails,
including failures of unrestricted closed jump loci and common false
strengthenings.

The plan's direct A-page prerequisite is
`products-segre-and-veronese-embeddings-and-grassmannians-examples`; the B
page requires only its A page. The manifest's item edges resolve into the
published or earlier plan closure or within the pair. In particular, the
dimension arguments use the declared height/normalization and projective
intersection interfaces, the constructibility route uses the declared
quasi-finite and denominator-clearing lemmas, and projective
semicontinuity uses the separately declared projective-projection-closed and
linear-avoidance results. No proof depends on a foreign B-page item or an
undeclared unbuilt page.

### Mathematical and source check

Milne v6.10, the complete assigned §§5j–m, 6p–q, 7c, 8c, and 9a–b passages,
supports the dimension, projective intersection, closed projection,
constructibility, and fibre-dimension routes. Arapura §4.2 supplies an
independent generic/local fibre-dimension treatment. Vakil's 2024 *Rising Sea*
passages supply the scheme-aware comparison and qualification checks, while
Vakil Class 38 §3 and Exercise 3.B carry the projective definition and the
upper-semicontinuity argument. All four declared sources have current complete
reader evidence and fetch receipts.

The quantifiers and boundary cases are authorable as scaffolded:

- fibre dimensions use the declared empty-fibre convention, so the
  `r <= 0`, `1 <= r <= N`, and `r > N` cases in the projective jump-locus
  proof are separated;
- the generic dimension formula retains irreducibility and dominance where
  required, while the projective upper-semicontinuity theorem expressly does
  not add them;
- reducible and nonclosed-image counterexamples remain in the companion
  rather than silently weakening the A-page theorems;
- the closed-surjective theorem keeps both irreducibility and fixed fibre
  dimension, so neither conclusion is inferred from equidimensional fibres
  alone.

After the source-link repair, no missing result, source, witness, or backward
prerequisite remains.

**Verdict:** sufficient.

## Batch 10 — AV-13

### Route and pair scope

The A page at order `366.065` contains 42 items and the companion at
`366.066` contains 11 examples or counterexamples. The pair follows AV-13:
the universal property and direct gluing construction of fibre products;
affine tensor-product formulas; base change of morphisms and properties;
scheme-theoretic fibres and residue-field descriptions; field-valued points;
geometric fibres; inverse images and intersections of subschemes; and the
affine, finite-type, and finite-presentation base-change interfaces used by
the examples.

The plan's direct A-page prerequisite is
`schemes-subschemes-and-morphisms-locally-of-finite-type-examples`; the B
page requires only its A page. Exact item dependencies resolve backward or
within the pair. The affine tensor calculation, gluing compatibility, local
ring/residue-field interface, quasi-coherent ideal description, and affine
locality statements are all declared before their consumers. The next-page
diagonal/separatedness results are not imported into the current proofs.

### Mathematical and source check

Vakil Chapter 10 §§10.1–10.4 supplies the direct gluing route, base-change
examples, fibres, and geometric-fibre conventions. The eleven declared Stacks
Project sources cover the exact local statements: Schemes §§26.11, 26.13,
26.17–26.19, and 26.21; Morphisms §§29.11, 29.15, and 29.22; and Properties
Lemma 28.28.3. The relevant source sections were read through their complete
statements and proofs rather than inferred from search snippets. All twelve
sources have current fetch receipts.

The sensitive cases are explicit and coherent:

- points of a fibre product retain the common image together with a prime of
  the residue-field tensor product, rather than claiming that pairs of points
  alone determine a point;
- a scheme-theoretic fibre is base change by
  `Spec(kappa(s)) -> S`, and its stalk is the stated residue-field quotient;
- arbitrary base change preserves surjectivity through the nonempty
  residue-field tensor-product argument, with the required choice scope
  confined to selecting a prime;
- geometric-fibre independence asserts an isomorphism only after choosing an
  algebraic-closure isomorphism and does not claim canonicity;
- geometric integrality and irreducibility require nonemptiness, while the
  empty scheme conventions for reducedness and connectedness are stated;
- closed-subscheme pullback uses the image of the pulled-back ideal, and the
  companion counterexample prevents an invalid non-zero-divisor claim without
  flatness.

After the immersion-wording repair, no missing result, source, witness, or
backward prerequisite remains.

**Verdict:** sufficient.

## Deferred and out-of-scope dispositions

The required refresh produced 60 current decline rows. Every row was checked
against the exact source result, the AV-5 or AV-13 scope, the current manifest
route, and the live plan, then resolved as `stands` in
`research/frontier-33-alpha-e-scope-decisions.json`:

- Batch 9: 10 deferred and 15 result-specific out-of-scope rows.
- Batch 10: 19 deferred and 16 result-specific out-of-scope rows.

Every named destination exists in the current plan and is the exact thematic
owner. Some destinations are earlier in reading order because the declined
source result belongs to an already planned supplier page; that does not make
it a prerequisite here because no included proof uses it. The later
destinations cover tangent/smoothness, diagonals/separatedness, finite/proper
morphisms, blowups, and quasi-coherent sheaves. The out-of-scope rows are
alternate proofs or specific arithmetic, descent, factoriality, birational,
or field-test applications not needed by an included claim. No row requires
an `owner-decision`.

Final scope checks:

- `scope-decisions refresh`: 60 declines, 0 pending.
- `scope-decisions check`: 60 current declines, 0 errors.

## Validation record

Focused checks on the final reviewed bytes produced:

- `manifest-deps` over both manifests: 109 items, 0 normalizations, 0
  errors.
- `coverage-checklist --require-destination` over both coverage files: 2
  pages, 280 harvested/canonical results, 0 errors, 0 warnings.
- `content-policy --manifest-only` over both manifests: 109 scoped items, 0
  errors, 0 warnings.
- `source-fetch-check` over both coverage files: 16/16 sources
  fetch-verified.
- `validate-plan research/plan-spec.json --repo . --max-items 60`: exit 0;
  declared order is acyclic and consistent, with no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among pages carrying
  item lists.
- Batch-local dry splices: Batch 9 would splice 2 pages/56 items and Batch 10
  would splice 2 pages/53 items, with no refusal and no write.
- `git diff --check` is recorded after the report and verdict artifacts are
  written.
- The run-wide `scaffold-verdicts --json` reader recognizes 4 of 24 A-page
  verdicts, including both group-`e` rows, and reports no insufficient page.
  It exits nonzero because 20 A pages assigned to other groups do not yet have
  verdicts; that expected concurrent-run state is outside group `e` ownership.

The live plan records intentionally still have empty item lists at Step 3; the
dry-splice results establish that the reviewed manifests fit those records.
The engine retains ownership of the actual splice and all stage transitions.

## Unresolved obligations and next action

There are no group-`e` scaffold blockers or owner decisions. The next action
is the engine-owned Step-3 closure and subsequent mechanical splice; authoring
should preserve the exact hypotheses, empty/zero conventions, source locators,
and proof routes recorded above.
