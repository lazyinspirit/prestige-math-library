# Frontier 33 — group f Step 6b adjudication

Run: `frontier-33`  
Role: group Alpha  
Owned batches: 14, 15

## Outcome

Group f has written exactly one decision for each of its 42 routed obligations:
5 `accepted_repair`, 35 `amended_repair`, and 2
`confirmed_fatal`. The exact obligation, carrier id, evidence, unique ledger
reference, and task-stamped `subject_sha256` are in
`research/frontier-33-alpha-f-6b-decisions.json`. All 42 closed rows were
appended through `tools/defect-ledger.mjs`; their source file is
`research/frontier-33-alpha-f-6b-ledger-rows.json`.

No mathematical defect was confirmed in an owned proof. The only reader/refuter
finding is the batch-14 examples-page title failure, and it is confirmed fatal:
the frozen gate repair replaced literal `\\u2014` in a double-quoted YAML
scalar with an actual em dash. The current carrier
`library/lie-theory/category-o-finiteness-duality-and-blocks-examples.md`
retains the same eight-example inventory and passes focused render validation.

## Frozen carrier reconciliation

The post-reader to pre-6b comparison creates 35 obligations not already present
in the original route: 32 batch-14 proof-contract carriers, two batch-15
proof-contract carriers, and the batch-14 examples page.

The 32 batch-14 contract repairs replace repeated boundary prose with
item-specific evidence tied to actual proof steps. Four moderate-risk carriers
still exactly equal their pre-6b snapshots and are accepted:

- `lem-enveloping-algebra-is-left-and-right-noetherian`
- `lem-finite-b-stable-generators-and-weight-flags-in-category-o`
- `thm-category-o-decomposes-by-generalized-central-character`
- `cex-an-infinite-direct-sum-of-verma-modules-is-not-in-category-o`

The other 28 are amended only because this adjudication added their mandatory
mathematical `risk_review` records. Their underlying gate repairs are retained:

- `prop-verma-and-finite-dimensional-modules-lie-in-category-o`
- `thm-category-o-is-abelian-and-extension-closed`
- `lem-n-plus-invariants-exist-in-every-nonzero-o-module`
- `thm-simple-objects-of-category-o-are-highest-weight-modules`
- `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation`
- `lem-the-center-has-finite-dimensional-image-on-an-o-object`
- `lem-generalized-central-character-submodules-are-direct-summands`
- `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`
- `thm-every-category-o-object-has-finite-length`
- `prop-hom-spaces-in-category-o-are-finite-dimensional`
- `lem-simple-highest-weight-modules-are-restricted-self-dual`
- `prop-restricted-duality-is-an-exact-involution-on-category-o`
- `prop-costandard-objects-have-simple-socles`
- `lem-integral-reflection-orbits-are-linkage-equivalence-classes`
- `lem-extensions-between-distinct-o-linkage-classes-split`
- `lem-o-modules-split-across-separated-simple-classes`
- `thm-central-character-summands-split-into-linkage-blocks`
- `cor-restricted-duality-preserves-linkage-blocks`
- `lem-verma-self-extensions-in-category-o-split`
- `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o`
- `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`
- `ex-the-regular-integral-sl2-block-of-category-o`
- `ex-a-generic-sl2-block-is-semisimple`
- `ex-a-singular-a2-central-character-summand`
- `cex-the-full-algebraic-dual-of-a-verma-module-is-not-in-o`
- `cex-a-weight-module-with-unbounded-upward-support-is-not-in-o`
- `cex-category-o-is-not-extension-closed-in-all-g-modules`
- `cex-tensor-products-of-two-verma-modules-need-not-lie-in-o`

The two batch-15 gate repairs are likewise retained and amended only by required
risk records:

- `thm-clifford-homogeneous-restriction-formula`: lying over `theta`
  supplies a constituent, hence a nonempty conjugacy orbit.
- `lem-induction-from-the-inertia-group-recovers-the-module`: `G/I`
  contains the identity coset, hence every transversal is nonempty.

The item-specific boundary records for all 34 carriers were compared with the
current proofs and the audit evidence in
`research/frontier-33-alpha-contract-audit.md`. Empty, zero, one, degenerate,
endpoint, choice, and both iff axes are now faithful to the claims.

## Batch 14 mathematical review

All 29 HIGH/CRITICAL contracts have complete reviews by
`group-alpha-f` in
`research/frontier-33-batch-14.proof-contracts.json`. In addition to the 28
routed carriers above, this includes
`prop-equivalent-support-description-of-category-o`.

The review checked the complete Category O chain: PBW support cones and finite
weight spaces; abelian and extension closure within the explicitly stated
weight-module ambient category; maximal-weight vectors; Verma filtrations;
finite central image and Artinian idempotent decomposition; dot-orbit
detectors and finite length; restricted duality; integral-reflection linkage
and Ext splitting; tensoring by a finite-dimensional module; and the simple
and standard Grothendieck bases. It also checked the regular, generic, and
singular examples and all four counterexample mechanisms.

The exact risk and resolution for each id are recorded in its `risk_review`.
In particular, the reviews retain the zero object and empty-list conventions,
the middle-term weight hypothesis for extension closure, singular fixed
points, finite versus full algebraic duals, the `n=0` sl2 endpoint, and the
difference between finite weight multiplicities and finite generation.

External interfaces and current dependency quotations were checked from the
item Facts blocks and proof contracts. Principal locators include MIT
18.757 §15.1, Definition 15.1 and Lemma 15.3 p.79; Chen Lecture 2 §3,
Lemma 3.3 and Warning 3.4 p.5; Chen Lecture 8 §3, Theorem 3.9 p.5 and
Example 3.17 p.6; and Humphreys §1.13 pp.30–32 and §4.9 pp.83–84.
The corresponding URLs are preserved in the current item frontmatter.
Current internal dependency statements include the PBW theorem, triangular
decomposition, Verma support and universal property, strong linkage, exact
restricted duality, and finite-length splitting lemmas named in each item's
`deps` and exact contract citations.

## Batch 15 mathematical and citation review

All ten HIGH/CRITICAL contracts have complete reviews by
`group-alpha-f` in
`research/frontier-33-batch-15.proof-contracts.json`:

- `thm-clifford-homogeneous-restriction-formula`
- `lem-induction-from-the-inertia-group-recovers-the-module`
- `lem-inducing-an-irreducible-inertia-module-is-irreducible`
- `thm-clifford-correspondence`
- `cor-normal-subgroup-induction-irreducibility-criterion`
- `cor-clifford-ramification-squares-sum-to-inertia-index`
- `lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces`
- `thm-gallagher-correspondence-for-an-extendible-character`
- `ex-clifford-theory-for-s3-over-a3`
- `ex-clifford-boundaries-n-equals-one-and-n-equals-g`

The review checked the left-coset induction convention, translation of
isotypical components, positive multiplicities, the identity coset,
well-defined reconstruction maps, Maschke and Schur uses, both directions of
Clifford correspondence, the Mackey/Frobenius inner-product criterion,
the sum-of-squares formula, the zero multiplicity space, the Gallagher quotient
action and tensor inverse, `S_3/A_3`, and both `N=1` and `N=G`.

All five original touched decisions are amended because the correct reader
locator repairs now coexist with the required risk records:

- `lem-inducing-an-irreducible-inertia-module-is-irreducible` and
  `thm-clifford-correspondence`: Späth Theorem 1.2, not 2.1.
- `thm-gallagher-correspondence-for-an-extendible-character`: Späth
  Theorem 1.3, not 3.1.
- `ex-clifford-theory-for-s3-over-a3`: Späth Theorem 1.3, not 2.2.
- `ex-clifford-boundaries-n-equals-one-and-n-equals-g`: Späth Theorems
  1.1–1.3, not the overbroad 1.1–3.1 range.

The checked source interfaces are Britta Späth, *Reduction theorems for some
global-local conjectures*, Theorems 1.1–1.3 p.2
(`https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf`);
Tammo tom Dieck, *Representation Theory*, Proposition 4.2.3,
Theorem 4.2.4 pp.55–56, and Remark 4.2.5 p.57
(`https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf`);
and Losev, Chapter 0, Corollary 2.16 and Proposition 2.17 p.11 at the archived
URL recorded in the Gallagher item. The live reader report records that the
Losev archive could not be reopened, so the cited use was also checked against
the item's self-contained proof and exact current dependency statements.

## Finding dispositions

- `reader:14:1` — `confirmed_fatal`,
  `f33-6bf-b14-reader01`.
- `refuter:14:1` — `confirmed_fatal`,
  `f33-6bf-b14-refuter01`.

The two reports describe the same carrier failure but use different finding
locations in the frozen scope. The Step-6 decision contract therefore requires
separate unique rows; neither is shared or causally borrowed. The independent
post-reader page obligation has its own row,
`f33-6bf-b14-pr-page01`.

Batch 15 has no reader or refuter finding. No proposed withdrawal exists in
either owned batch.

## Validation

- Risk reports with `--require-reviewed`: batch 14, 29/29 required reviews
  complete; batch 15, 10/10 complete; zero errors.
- Boundary audit: 376 rows, zero template clusters, zero contradicted
  candidates; both detector candidates retain specific upheld reviews.
- Citation fidelity: 165 exact citations checked, zero missing quotes and zero
  widening candidates.
- Strict proof contracts: batch 14, 33/33 with zero errors and one existing
  shotgun-bracket warning on
  `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`; batch 15,
  14/14 with zero errors and warnings.
- Content policy: 56 owned items, zero errors and warnings.
- Focused rendercheck: all 47 proof carriers plus the repaired examples page,
  zero errors.
- Focused precheck: all 47 proof carriers, zero errors.
- Defect ledger: 379 current `frontier-33` rows checked, zero errors; all 42
  group-f rows remain present byte-for-byte as appended.
- `git diff --check` on the owned artifacts and append-only ledger outputs:
  pass.

## Named external blocker

Both owned `step6-scope.mjs check --phase adjudicate` invocations validate
the group-f decisions but exit nonzero on two run-global conditions from the
same foreign repair workflow:

- `published-claim-extra: def-tensor-product-total-complex-of-chain-complexes is not owned by one exact repaired Step-6 finding`.
- `published-repair-extra: reader:6:1 is not one exact repaired Step-6 reader finding`.

That subject is outside batches 14–15 and outside group f. The repo-wide
`depcheck.mjs --quiet` reports the same foreign carrier as a draft item on
the published page
`library/homological-algebra/tor-flatness-and-global-dimension.md`.
Under this dispatch's ownership rule, group f has not modified that claim,
item, or page. The live claim and repair receipt identify group c and
`reader:6:1`; that workflow had not yet published its matching adjudication
decision at the final group-f check. The next action is for its owning
Alpha/lead to complete that reconciliation; group f's decision file can then
be rerun unchanged through the two batch-local adjudication checks.
