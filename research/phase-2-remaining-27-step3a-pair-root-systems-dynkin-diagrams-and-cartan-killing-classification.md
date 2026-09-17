# Step 3a scope review — `root-systems-dynkin-diagrams-and-cartan-killing-classification` (batch 11)

- **Run:** `phase-2-remaining-27`; role alpha (scope), dispatch
  `step3a-pair-root-systems-dynkin-diagrams-and-cartan-killing-classification-8fcdb62db76e1d70`.
- **A page:** `root-systems-dynkin-diagrams-and-cartan-killing-classification`
  (47 items), **B page:** `...-examples` (12 items), order 503/504, category
  `differential-geometry`, single A→B companion edge.
- **Design owner:** DG-31 of `research/plan-differential-geometry-track.md`
  lines 7783–8010 (the `## DG-31` section; the second dispatched locator, line
  7940, is the later "Sources and exact locators" subsection of the same
  section, not a competing design). Manifests:
  `research/phase-2-remaining-27-batch-11.pages.json`; coverage:
  `research/phase-2-remaining-27-batch-11.coverage.json`; Step-1 notes:
  `research/phase-2-remaining-27-batch-11.notes.md`.
- **Binding owner direction read:** `research/phase-2-remaining-27-owner-authoring-direction.md`
  ("Differential geometry and Lie theory": no restricted-root material on
  DG-30/DG-31; the nonreduced `BC_n` example lives only on DG-34 B). The
  manifest and coverage honour that direction.

## Decision

**Insufficient.** The pair's abstract programme is complete and soundly
sourced, but two scope-critical omissions stop it from delivering its
declared subject matter. Both are inventory/reading-range omissions, not
proof errors; no scaffold content was edited.

## What is covered adequately (evidence)

1. **Every design A item is manifested.** All 39 design items (A) map onto
   the 47 manifested items one-to-one, plus 8 `fs-` items; the B page carries
   exactly the design's 12 examples/counterexamples. Ordering is linear and
   acyclic, matching the design's dependency order, and the same-batch DG-30
   suppliers (`thm-root-sl-two-triple`, `thm-root-string-property`,
   `thm-finite-dimensional-representations-of-sl-two`,
   `prop-dimension-formula-from-roots`, …) all precede DG-31.
2. **Abstract root systems and Weyl theory are fully scaffolded.**
   Definitions, finiteness/faithfulness, unique irreducible decomposition,
   rank-two classification, bases and signed integral coordinates, chambers
   and simple transitivity, length/longest element, and highest-root
   existence/uniqueness are all present as proof-bearing items.
3. **The Dynkin classification is complete in both directions.**
   Cartan-matrix properties (row-coroot convention `a_ij=(α_j,α_i^∨)` with
   the arrow pointing toward the shorter root, per design item 19), the tree
   lemma, the exact list with recorded low-rank coincidences
   (`B₁=C₁=A₁`, `B₂=C₂`, `D₂=A₁⊔A₁`, `D₃=A₃`), the coordinate-model
   existence result, and the duality proposition are present. I checked the
   exceptional dimension bookkeeping: the strategy's root counts
   12, 48, 72, 126, 240 plus ranks 2, 4, 6, 7, 8 give 14, 52, 78, 133, 248
   as stated in `prop-dimensions-of-the-exceptional-simple-lie-algebras`.
4. **The Serre half is complete.** Free Lie algebra → universal property →
   presented algebra → Serre algebra → Serre presentation → isomorphism →
   existence → Cartan–Killing classification → semisimple corollary is
   scaffolded with declared published suppliers (`thm-poincare-birkhoff-witt`,
   `thm-universal-property-of-the-tensor-algebra`,
   `def-quotient-lie-algebra`,
   `lem-lie-algebra-quotient-bracket-is-well-defined`,
   `thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals`)
   that I verified are `published`.
5. **AC handling is honest and declared.** The scaffold marks the
   algebraic-development items `ZF` and the Jordan–Chevalley-seam consumers
   `ZFC` with `def-axiom-of-choice`, matching the batch-11 notes' conflict
   report about the published supplier. This is a contract, not a scope
   omission. I note it here only so the owner does not mistake it for the
   blocker.

## Omission 1 (blocking) — the classical types have no declared suppliers

`prop-classical-types-correspond-to-sl-so-and-sp` asserts
`A_n=sl_{n+1}(C)`, `B_n=so_{2n+1}(C)`, `C_n=sp_{2n}(C)`,
`D_n=so_{2n}(C)` with the low-rank coincidences reconciled. Neither that
item's declared dependencies
(`thm-cartan-killing-classification-of-complex-simple-lie-algebras`,
`thm-existence-of-each-classified-root-system`) nor any other manifested item
supplies the material its own strategy requires ("standard diagonal Cartans
and matrix-unit eigenvectors"). Concretely, the pair lacks:

- a definition of the complex symplectic Lie algebra `sp_{2n}(C)` (or `sp_{2n}(k)`);
  the run defines only the *real* group `Sp(2n,R)`/`sp(2n,R)` in the
  published `ex-the-real-symplectic-matrix-group` and the abstract symplectic
  form `def-symplectic-form-and-symplectic-manifold`;
- the split (diagonal-form) Cartan subalgebras of `sl_{n+1}`, `so_{2n+1}`,
  `sp_{2n}`, `so_{2n}` and the computation of their root sets;
- proofs that those algebras are semisimple/simple with the stated types,
  which is what makes the identification non-circular.

Library search evidence: `grep -rl 'sp_' items/` returns only
`items/thm-legendre-continued-fraction-criterion.md`; the phrases
`sp_{2n}`, `mathfrak{sp}`, `so_{2n}` occur in no item except the two
already-cited examples (`ex-classical-simple-lie-algebras-and-their-killing-forms`
states the root sets but proves only the Killing forms;
`ex-standard-representations-of-classical-matrix-lie-algebras` proves
representations, not root data). Downstream DG-33 item
`prop-classical-real-forms-of-the-classical-complex-lie-algebras` declares
this DG-31 proposition as a dependency, so the gap propagates.

**Source support exists and is one lecture outside the declared range.**
Etingof, MIT 18.745, Lecture 20.3 "Root systems of classical Lie algebras",
Examples 20.12–20.14 (full text lines 5773–5903 of the official combined PDF;
printed pp. 110–111, immediately before Lecture 21 which begins at line
5904) computes exactly these Cartan subalgebras and root sets and states
"This is the root system of type `C_n`/`D_n`/`B_n`". The page's coverage row
for Etingof declares only "Lectures 21–24 in full" and "Lectures 19–24"
locators, so this section is neither in the declared reading range nor
dispositioned in `batch-11.coverage.json` (whose Etingof contents rows start
at Lecture 21). The design's original source list is wider still
(Kirillov, Humphreys; neither is a declared coverage row).

**Recommended owner action (either is sufficient):**

1. Extend the Etingof source row's locator and re-harvest to include Lecture
   20.3 Examples 20.12–20.14 with an explicit disposition, then enrich the A
   page with the necessary local definitions and results — for example
   `def-classical-complex-matrix-lie-algebras` (sl/so/sp),
   `prop-classical-matrix-lie-algebras-have-split-cartan-subalgebras`, and
   `prop-root-systems-of-the-classical-complex-lie-algebras` — before
   `prop-classical-types-correspond-to-sl-so-and-sp`, which then reduces to
   the abstract classification plus these computations; or
2. Declare the missing definitions/root-set computations as out-of-scope and
   drop or narrow `prop-classical-types-correspond-to-sl-so-and-sp`, accepting
   that DG-33 must then carry the classical real-form identification itself.

Route any new concrete root-set examples (Cartan matrix of `sp_4`, `so_5`,
…) to the B page, keeping the companion inventory consistent.

## Omission 2 (secondary) — the existence theorem's exceptional half is thin

`thm-existence-of-each-classified-root-system` depends only on the
classification theorem and the Dynkin-diagram definition, while its strategy
constructs F₄ from ±e_i, ±e_i±e_j and half-sums, E₈ from the D₈ roots plus
even-sign half-sums, and obtains E₇, E₆ "by orthogonal sections". The design
(line 7926 region) asks to "construct the classical systems in Euclidean
coordinates and exceptional systems from their Cartan/Gram matrices, then
verify the axioms". No scaffolded item supplies: the section construction
itself (the DG-29 theory covers hyperplane sections only for *roots of a Lie
algebra*), the verification that the sections are closed/reduced/spanning
with the intended connected diagram, or the E-series saturation count. This is
authorable from Knapp Chapter II §§5–7/§11 and Etingof Lecture 24 (both
declared and fetch-verified), so it need not expand the source list — but the
pair should either name the missing local steps (a section lemma plus the
diagram verification) or state explicitly that the verification is carried
inside the item's proof.

## Non-issues checked and cleared

- **Nonreduced/`BC_n` material** is correctly absent from DG-30/DG-31 and
  dispositioned `out-of-scope` with the binding DG-34 reason. No scope loss.
- **Milne citations** on `rem-dynkin-diagrams-do-not-classify-global-lie-groups`
  and the two global-group `fs-` items are orientation-only and use the
  locator "relevant sections"; a literal `library search` finds no Milne
  mention among the pairs' coverage rows. Because those are remarks/false
  statements backed by classification results already present, this is a
  locator-quality defect to record, not a scope omission. Worth tightening or
  replacing with in-range Knapp/Etingof locators.
- **B-page coverage:** the B page consumes only its A companion and its
  items are downstream of A items; each has a concrete statement and declared
  dependencies. Its `A₁`, rank-two, coordinate-model, Weyl-group, duality,
  low-rank, Serre-`A₂`, `G₂`-roots, cycle-graph and `SL₂`/`PGL₂` entries match
  the design list. The `ex-root-systems-a-two-b-two-and-g-two` and
  `ex-low-rank-dynkin-coincidences` items are abstract and remain valid
  without Omission 1.
- **Prerequisite edges** to `inner-product-spaces-and-orthogonality`,
  `trees-forests-and-spanning-trees`, DG-27/DG-29/DG-30 match the design and
  the manifest's `requires`; `thm-tree-characterisations` is published.

## Uncertainty / unresolved

- I did not verify the classical-type identifications against Knapp directly
  (only against Etingof 20.3, which is unambiguous). If the owner prefers
  Knapp's Chapter II formulation — Knapp covers the classical matrix algebras
  via the compact/real route and the abstract classification — the harvested
  locators should be extended and re-checked with
  `node tools/coverage-checklist.mjs` and `node tools/source-fetch-check.mjs`.
- I did not attempt to reconstruct the exceptional-E-series verification
  myself; I only established that no scaffolded item currently supplies it.
  A Step-3 author may be able to close Omission 2 inside the existing item,
  which is why it is recorded second.
- I recorded scope only. No item-level approval, proof verdict, or owner
  record was written. The review receipt is
  `research/phase-2-remaining-27-step3a-review-root-systems-dynkin-diagrams-and-cartan-killing-classification.json`
  (`decision: insufficient`, scope hash
  `425e847b764eea29013733b7f2446863b4e01bf4629bba5593a2f9fcb4a2db40`,
  2026-09-16T15:14:40Z).
