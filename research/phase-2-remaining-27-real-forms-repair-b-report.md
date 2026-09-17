# Step 3b repair B report — classification block, `real-forms-and-real-semisimple-lie-algebras`

Run `phase-2-remaining-27`, batch 13, label `step3b-repair-b-real-forms`.
All four assigned items were repaired, fully authored and recorded as
`repaired` with confidence 1. Statements were kept verbatim. No other pair,
item, page, manifest, coverage or contract file was edited.

## Items completed

1. `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications`
2. `thm-classification-of-real-semisimple-lie-algebras`
3. `prop-classical-real-forms-of-the-classical-complex-lie-algebras`
4. `cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group`

## Source locators read (in full, from the cached Knapp PDF)

- Chapter VI §1: Lemma 6.4 (p. 351), Theorem 6.6 and its proof (pp. 351-353), the split real form (6.9) and Corollary 6.10 (p. 353), the compact real form (6.12) and Theorem 6.11's proof (pp. 353-354).
- Chapter VI §7: the definition of Cayley transforms and Proposition 6.72 with its proof (pp. 393-394), including both string cases (β ± α not roots: compactness preserved; β ± α roots: compactness reversed).
- Chapter VI §8: Example 1 (§8, p. 398, su(p,q)) and Example 2 (pp. 398-399, sl(2n,R)); Theorem 6.74 and proof (pp. 399-400); Theorem 6.88 with its full proof (pp. 403-406), including the normalized root vectors of Theorem 6.6, the constants a_α with a_αa_{-α}=1, the induction giving a_α = ±1, the invariance θ(u_0) = u_0, the real form g_0 = k_0 ⊕ p_0 and the identification of the Vogan diagram.
- Chapter VI §9: Theorem 6.94 (pp. 406-408).
- Chapter VI §10: Theorem 6.96 with Lemmas 6.97 and 6.98 and their proofs (pp. 409-412); the classical case analysis and Figure 6.1 (pp. 413-415); the exceptional computations for E6, E7, E8, F4, G2 and Figures 6.2 and 6.3 (pp. 416-420); Proposition 6.104 (pp. 420-421); Theorem 6.105 (pp. 421-422).
- Chapter VI §11: restricted roots in the classification, tables (6.107) and (6.108), and the low-dimensional isomorphisms (6.110) (pp. 422-426).
- Chapter VI §3: Theorem 6.31(b),(c) and the Historical Notes 2 pointer (print p. 766 to Borel 1998, pp. 128-133) for item 4's context.

Borel 1998 was not fetched; item 4 is proved locally and does not depend on it.

## Changes by item

### 1. `thm-vogan-and-satake-diagrams-give-equivalent-real-form-classifications`

The missing converse is now proved. The Satake decoration determines the
restricted-root system Σ, the multiplicity function m and the real rank
(steps 1.4-1.5; the black vertices and the multiplicativity rules of Knapp
Prop 6.72 as used in §11 give the compactness of the imaginary roots and hence
the multiplicities). The triple (Σ, m, dim a_0) determines the simple real form
up to isomorphism directly from the source's classification tables (steps 3.1,
5.1), so equivalent Satake diagrams force isomorphic real forms; combined with
Vogan well-definedness/injectivity this yields both the iff and the bijection
of assertion 2 (steps 6.1-9.1). The previous open-obligation remark and the
"escalated" records were removed and the Remarks rewritten.

**Cycle broken.** The first draft used
`thm-classification-of-real-semisimple-lie-algebras` (item 2) for the
uniqueness of the invariants, which created a cycle because item 2 consumes
this item. The proof now cites the source's classification (Theorem 6.105 with
tables (6.107)/(6.108)) directly, and the dependency on item 2 was removed.
`tools/depcheck.mjs` reports no cycles.

### 2. `thm-classification-of-real-semisimple-lie-algebras`

Both gaps are filled:

- Realization (steps 1.3-2.3): from an abstract Vogan diagram, the complex
  semisimple algebra with the given Dynkin diagram is built, normalized root
  vectors with real structure constants are chosen (supplied by
  `lem-chevalley-basis-and-real-structure-constants`, read in full), the
  diagram automorphism is lifted to θ with θ² = id and θ(u_0) = u_0, the
  Cartan involution θ defines the real form g_0 = k_0 ⊕ p_0 with maximally
  compact Cartan subalgebra h_0, and the Vogan diagram of the triple is
  identified with the given abstract diagram.
- Enumeration and completeness (steps 2.4-3.3 and 4.1-7.1): the
  Borel-de Siebenthal normal form (Theorem 6.96 with Lemmas 6.97-6.98) reduces
  every abstract diagram to at most one painted root; the classical and
  exceptional cases are enumerated with the source's case analysis and
  Figures 6.1-6.3; irredundancy follows from Vogan injectivity.

Remarks now state where the case analysis enters; the open-obligation remarks
were removed.

### 3. `prop-classical-real-forms-of-the-classical-complex-lie-algebras`

The exhaustion obligation is discharged (steps 2.3-3.1): every real form of a
classical complex simple Lie algebra has a class in the classification theorem
(item 2) and the source's identification of its classical entries with
su(p,q), so(p,q), sp(p,q), sp(2n,R), so*(2n), sl(n,R), sl(m,H) (Figure 6.1,
tables (6.107) and (6.110)). The constructions of steps 1.1-1.4 exhibit each
displayed entry as a real form, and the admissible ranges account for all
classes; the remark was rewritten.

### 4. `cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group`

The conjugacy half is now proved by the local displacement-function route:

- K is compact (1.1) and maximal compact (1.2-2.1, the max-norm argument on
  exp p_0 using compactness of Ad(K_1) and triviality of the center).
- For a compact subgroup L, the displacement function
  f(x) = sup_{g in L} d(x, gx) on X = G/K is finite, continuous,
  L-invariant (2.2) and satisfies the midpoint inequality coming from the
  nonpositive curvature of the invariant metric (1.6).
- f attains its minimum D (3.1); at a minimizer x_0, every g in L must fix
  x_0, because the midpoint m of the geodesic from x_0 to gx_0 satisfies
  f(m)² ≤ D² − d(x_0,gx_0)²/4, contradicting minimality unless
  d(x_0,gx_0) = 0 (3.2).
- Hence L lies in a conjugate hKh^{-1} of K (4.1), and the maximal compact
  subgroups are exactly the conjugates of K (5.1, 6.1).

The statement is kept verbatim. The earlier "not proved here" remark was
replaced by a remark explaining the local route and the Borel pointer.

## Checks run

- `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` — PASS for all four
  items (canonical numbering adopted where the checker required it).
- `node tools/rendercheck.mjs` on all four items — OK (YAML, KaTeX, no wikilink
  in math, no unbalanced delimiters).
- `node tools/depcheck.mjs --quiet` — no cycles, all references resolve; the
  only output is the pre-existing library-wide `cited-not-in-deps` warnings for
  other unrelated items.
- `node tools/validate-plan.mjs research/plan-spec.json` — OK (acyclic page
  order, no item-level cycles or unresolved ids).
- `node tools/extcheck.mjs research/plan-spec.json` — OK for the recorded
  boundary; no owned item is a new consequence.
- `node tools/manifest-integrity.mjs --run phase-2-remaining-27 --json` — no
  missing or added page.
- `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-13.coverage.json --require-destination` — 2 pages, 30 harvested results, 0 errors.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-remaining-27-batch-13.coverage.json` — 4/4 sources fetch-verified.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-13.proof-contracts.json --strict --items <the four ids>` — 0 items checked: the batch-13 contract file's scope (47 DG-37 items) does not contain any DG-34 item (see gap below).
- `node tools/step3-decisions.mjs record-item` — recorded `repaired`, confidence
  1, for all four items with the examined dependency lists.

## Exact gaps and unresolved obligations

1. **Proof-contract coverage gap (for the orchestrator / Step 4, not a
   mathematical gap).** No proof-contract file in `research/` covers this pair:
   `research/phase-2-remaining-27-batch-13.proof-contracts.json` is scoped to
   the 47 DG-37 symplectic items, and the merged
   `research/phase-2-remaining-27-proof-contracts.json` (796 entries) contains
   none of the DG-34 items either. This is a pre-existing planned-carrier gap,
   not introduced by this repair; the strict proof-contract gate therefore
   cannot be run on these four items. The four items do carry complete
   item-specific numbered arguments, exact source locators, dependency lists
   and boundary discussion in their proof text.
2. **Item 4's midpoint inequality.** Step 1.6 uses the standard convexity
   inequality for distance functions on a simply connected complete manifold of
   nonpositive curvature (the deficiency term d(γ(0),γ(1))²/4). The curvature
   input is proved in the pair
   (`prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k`),
   but the general convexity comparison itself is stated as a fact [L7] with
   the local pointer `thm-existence-of-geodesically-convex-neighborhoods`
   rather than proved from Jacobi fields in this item. If a Step-5 reader
   demands a fully local proof of that comparison, it should be added as a
   local lemma on an assigned A page or supplied by a later repair; no claim
   here depends on any other unproved statement.
3. **Potential published defects observed while reading (for the ledger; not
   edited here).** None new for this pair. The four published defects already
   reported in `research/phase-2-remaining-27-batch-13.notes.md`
   (`thm-additive-jordan-chevalley-decomposition` missing AC dependency,
   `thm-root-space-decomposition-relative-to-a-cartan-subalgebra`,
   `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra`,
   `thm-the-root-set-is-a-reduced-crystallographic-root-system`) remain as
   recorded there; this repair consumed the planned replacements, not the
   published interfaces.

## Content-policy state of the batch (pre-existing, not caused by this repair)

`node tools/content-policy.mjs --manifest-only research/phase-2-remaining-27-batch-13.pages.json`
currently reports 119 errors of the categories `batch-item-already-exists`
(the manifest's future-batch inventory lists items whose files the scaffold
has already minted) and `batch-b-leaf-target` / `batch-b-leaf-forward`
(B-page ordering entries). None is in the four repaired items and none was
introduced here; they are manifest/inventory bookkeeping for the shared batch
and belong to the orchestrator's post-repair re-sync. The four repaired items
themselves pass precheck, rendercheck, depcheck and the policy-relevant
provenance and source checks.
