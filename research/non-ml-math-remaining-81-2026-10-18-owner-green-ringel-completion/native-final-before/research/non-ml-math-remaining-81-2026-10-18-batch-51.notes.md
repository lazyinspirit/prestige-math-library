# Batch 51 — Euler-twisted Hall products, Green coproducts, and quantum groups

## Inventory and dependency order

The assigned inventory now has 25 A-page items and 3 B-page examples. Two
local suppliers were added before their consumers: the zero-splice Yoneda
factorization item and the acyclic-quiver hereditary Hall-category item. The
scoped item graph including Batch 50 has 44 items, no cycles, and Batch 51
levels 0–12. Level 0 contains the positive Borel presentation, Gaussian
alternating-sum lemma, and statement-only zero-splice factor. Level 1 contains
the Yoneda exactness statement and finite-field category definition. Level 2
contains the acyclic-quiver proof, Euler additivity, Hall sequence count, and
cross-square count. The Green completion is level 5 after its explicit finite
twisted-product prerequisite was added; the final Ringel embedding and
finite-Dynkin criterion is level 12. These are item dependency levels; the
autopilot scheduling input assigns Batch 51 batch level 2 with prerequisite
Batch 50 and input hash
`825ada459eb8a44f2bca9b180e0d40e43ed62d08f26d224468ce63c38b792042`.

## Plan and design comparison

The complete PA-20 design section in
`research/physics-algebras-planning-2026-10-17/dossiers/06-other-physics-algebras.md`,
its entry in `proposed-pages.json`, the definition/diagram contracts, and the
prerequisite dossier were inspected. The design requires the finite-field
Euler twist, Green’s completed coproduct with coefficientwise convergence,
the full cross/square count, the extended Cartan torus, a Ringel map onto the
simple-generated composition subalgebra, and the finite-Dynkin/full-Hall
boundary. It explicitly separates the ordinary Hall product, KLR flag
convolution, positive half, extended positive Borel, composition subalgebra,
and full Hall algebra. Those distinctions remain in the pages and carriers.

There is one page-requirement conflict. The controlling `plan-spec.json` row
and generated Batch 51 scaffold require both
`finitary-ringel-hall-algebras` and
`bialgebras-convolution-and-antipode-identities`; the historical PA-20 entry
in `proposed-pages.json` listed only `finitary-ringel-hall-algebras`. The
active plan controls, so both requirements remain in the A-page frontmatter.
The historical proposal and shared plan were not edited.

## Supplier review and convention findings

- Current Batch 50 carriers `def-hall-finitary-abelian-category`,
  `def-untwisted-hall-algebra`, `lem-untwisted-hall-product-finiteness`, and
  `thm-untwisted-hall-algebra-is-associative-and-unital` were read with their
  actual statements and proofs. Their current Step 1 records are ready. The
  direct cross-batch edges and exact endpoint conventions are recorded in
  `batch-51.cross-batch-dependencies.json`.
- The local finite-field definition uses Yoneda Ext directly. The acyclic
  quiver proof constructs a finite path resolution, proves
  `YExt^2=0` inside that category, derives `K_0=Z^{Q_0}`, and computes the
  object-level Euler formula from arrow-matrix extensions. It does not use
  dependent choice or a global choice of bases.
- The current repository Drinfeld–Jimbo coproduct is
  `Delta(E_i)=E_i tensor K_i^{-1}+1 tensor E_i`. The extended coproduct
  `Delta_-` is defined by bosonizing the completed Green map with
  `x tensor y -> x tensor k_{-deg x} y`; on a simple it gives
  `[S_i] tensor k_i^{-1}+1 tensor [S_i]`. This matches the repository
  convention directly. Schiffmann’s alternative extended convention with
  `[S_i] tensor 1+k_i tensor [S_i]` is recorded separately and is not
  silently identified with `Delta_-`.
- The earlier scaffold argument that torally dressing a generator preserves
  the symmetric Serre sum was not used: normal-ordering the A2 middle word
  introduces a `nu^2` factor, so that termwise argument does not prove the
  claimed relation. The local Ringel assignment is instead written on the
  generator whose coproduct and symmetric Serre relation are actually
  checked by the Hall flag count.
- The KLR/quiver-flag convolution theorem is a different construction and is
  not used as a Hall supplier. The general Green target is coefficientwise
  completed; no algebra structure on its full completion is asserted.

## Escalations and affected claims

1. `lem-yext-zero-splice-factorization` and
   `lem-yext-exact-sequences-in-both-variables` retain the choice-free Yoneda
   exactness statements, but their local proof is not supplied. Mitchell,
   Chapter VII, Lemma 4.1 and Theorem 5.1, printed pp. 175–179, were read in
   full. The unresolved step is the switch-induction construction turning a
   fixed-end equivalence to a split two-fold extension into the required
   pullback/pushout factorization. No projective/injective resolution or
   derived-Ext identification is substituted. A complete local proof or
   owner-supplied local intermediate result is required.
2. `lem-hall-euler-form-is-additive`, and hence the bilinear K0 Euler form
   used in twisted associativity and the Green exponent comparison, depends
   on that unproved low-degree Yoneda exactness interface. The dependent
   twisted-associativity, Green coassociativity, and Green bialgebra-map
   carriers retain their full statements and drafted arguments but are
   escalated, not ready. The cross-square identity is independent of Euler
   additivity; its separate cardinality argument still depends on the
   unresolved Yoneda exactness supplier for the fiber-size calculation.
3. `lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary`
   retains the cyclic nilpotent-representation claim statement-only. The
   acyclic branch is proved separately. For cycles, ordinary path-algebra
   projectives are generally not finite-dimensional nilpotent objects; the
   missing check is a Serre-subcategory/Yoneda-Ext-squared argument or a
   direct construction. The dependent full-quiver Ringel map is escalated.
4. `thm-ringel-map-embedding-and-finite-dynkin-criterion` retains the full
   embedding and iff statement without a Proof section. Its missing local
   suppliers are `thm-kac-quiver-indec-root-classification` and
   `thm-specialized-positive-quantum-pairing-nondegenerate-v-greater-one`.
   The generic pairing theorem does not by itself prove nondegeneracy at
   fixed `nu=sqrt(q)>1`; the finite-type dimension comparison also needs the
   Kac indecomposable/root classification.

The independent A2 products/Serre computation, finite-vector-space square,
Kronecker orbit count, acyclic-category theorem, Gaussian identity, and
endpoint automorphism count are authored locally. Completion records and
source fetches are authoring evidence only, not independent approval.

## Source retrieval and disposition

The full relevant source locators, supported item IDs, dispositions, and
fetch stamps are in `batch-51.coverage.json`; concise author-reading records
are in `batch-51.source-evidence.json`. Full text was inspected for
Schiffmann, Ringel’s E.L.A.M. notes, Ringel’s 1990 paper, Young, Weibel,
Mitchell, and the JKK coproduct convention. There were no retrieval failures
for the Batch 51 source URLs, so no source is dropped and no
`source_resolution` recovery history is fabricated.

## Validation status

Final scoped checks passed: `proof-layout` covered 28 items and 86 steps with
0 defects; `precheck` passed all 19 proof-bearing items; `rendercheck` passed
all 28 carriers and both pages; focused `depcheck` covered 28 items with 0
errors and 0 warnings; `content-policy` covered 28 items with 0 errors and 0
warnings; strict proof contracts covered all 19 arguments with 0 errors and 0
warnings; scoped proof-contract coverage found 19/19 supplied arguments; the
coverage checklist passed for both pages and 20 harvested results; and
`source-fetch-check --stamp` verified 9/9 source entries, 9/9 resolved, with
0 new stamps and 0 drops. The scoped Batch 50/51 dependency and page-placement
check covers 44 items, has no cycles or metadata mismatches, and has maximum
item level 12.

Step 1 records were created with `node tools/step1-decisions.mjs record` for
all 28 assigned items: 14 ready and 14 escalated. The full run contains the
unrelated duplicate item `lem-3-manifold-boundary-kernel-is-lagrangian`, so
records were generated from a scoped copy of the active manifests that removed
only its duplicate declaration while retaining the current plan and Batch
50/51 item-dependency closure. The 14 ready records are hash-closed against
that scoped snapshot; the 14 escalation records remain open. No owner flag
was used.

The run-wide `item-dependency-levels.mjs check --run ...` still reports empty
inventories and stale labels in unrelated batches, including
`finite-blocklength-and-reliability` and other non-Batch-51 pages. The
run-wide `batch-dependency-levels.mjs check --run ...` stops at the duplicate
item above, and full-run `step1-decisions check --run ...` stops before item
checks on that same duplicate. Full-run proof-contract coverage stops at the
unrelated empty inventory `finite-blocklength-and-reliability`. These shared run-wide files
and other batches were left unchanged; the Batch 50/51 scoped graph and
contract checks pass.
