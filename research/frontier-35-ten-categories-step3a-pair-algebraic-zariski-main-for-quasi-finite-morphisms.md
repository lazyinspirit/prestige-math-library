# Step 3a scope review — `algebraic-zariski-main-for-quasi-finite-morphisms`

- Run: `frontier-35-ten-categories`; role alpha; label
  `step3a-pair-algebraic-zariski-main-for-quasi-finite-morphisms-cfd1f9534b59a2e2`.
- Pair: A `algebraic-zariski-main-for-quasi-finite-morphisms` / B
  `algebraic-zariski-main-for-quasi-finite-morphisms-examples` (batch 4, orders
  366.0603 / 366.0604). Owned pair only; no scaffold, item or owner record
  edited. Reviewed 2026-09-24.
- Decision: **sufficient** for the intended subject as designed. No omitted
  topic, result or example of the CA-20 subject was found; no merge or
  enrichment is proposed.

## Evidence read

- Prose design: `research/plan-commutative-algebra-track.md` §11.4 CA-20
  (L4528–4610): A inventory L4538–4581, B leaf L4586–4597, and the interface
  sentence L4578–4580 ("This is the algebraic factorization supplied to AV-7;
  the open-immersion and gluing translation remains owned by Algebraic
  Geometry"). Role/impact: L4678–4683 (no published consumers), supplier table
  L2719. Consumer contract: `research/plan-algebraic-geometry-track.md` AV-7
  (L566–605), especially L595
  `thm-zariski-main-open-immersion-factorization-classical`, and the supplier
  table L2719. Canonical ledger: `research/published-consumer-supplier-ledger.md`
  L10021–10022 and L10030–10043.
- Manifests: `research/frontier-35-ten-categories-batch-4.pages.json` (A 15
  items, `requires` = `zariski-topology-on-prime-spectra`,
  `integral-extensions-and-going-up`,
  `morphisms-local-rings-and-rational-maps-of-affine-varieties`; B 3 items,
  `requires` = A only). All three prerequisite pages are published
  (`library/commutative-algebra/…`, `library/algebraic-geometry/…`), and their
  item contents carry the used suppliers (`thm-lying-over`,
  `thm-going-down-over-normal-domains`, `thm-prime-spectrum-is-compact`, …).
- Owner decisions: `research/frontier-35-ten-categories-owner-authoring-direction.md`
  contains no pair-specific instruction (batch-8 pair and the Easton
  pseudointersection item only); `…-deferred-pairs.json` does not list this
  pair; no step-3a owner receipt or scope amendment exists for this page.
- Coverage: `research/frontier-35-ten-categories-batch-4.coverage.json`, this A
  page entry: 3 sources, 23 dispositions (16 `included`, 7 `inline`, 0
  errors/low-yield): Stacks §10.37 (tag 037B, Lemmas 10.37.4–8) → the
  polynomial-normality supplier; Stacks §10.123 (tag 00PI, Lemmas
  10.123.1–14 + Definition 10.123.7) → the whole reduction chain, theorem,
  openness and factorization; Milne, *A Primer of Commutative Algebra* §17
  (Definition 17.3 through Lemmas 17.14–17.17) → definition, transfer lemmas,
  Theorem 17.10, Corollaries 17.11–12, Proposition 17.13. Re-ran
  `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-4.coverage.json`
  → 2 pages, 46 dispositions, 0 errors (the single low-yield warning is on the
  sibling CA-19 page, not this pair) and
  `node tools/source-fetch-check.mjs --coverage research/frontier-35-ten-categories-batch-4.coverage.json`
  → 9/9 fetch-verified, 0 documented drops.
- Sources re-read directly (2026-09-24), not only via the bundle: Stacks
  §10.123 full text (Lemmas 10.123.1–14 incl. tag 00Q9 = Theorem 10.123.12),
  the §10.122 supply used inside its proofs (Definition 10.122.3, Lemmas
  10.122.2/5/7/9), and Milne *CA* v4.03 §17 printed pp. 77–84 (Propositions
  17.1–17.2, Definition 17.3, Propositions 17.4–17.5, Example 17.6, Lemmas
  17.7–17.8, Aside 17.9, Theorem 17.10, Corollaries 17.11–17.12, Proposition
  17.13, Lemmas 17.14–17.17).

## Inventory against the design

- A: all 11 CA-20 design items are present in the design's proof order:
  `def-quasi-finite-at-a-prime-for-finite-type-algebras`,
  `lem-zmt-polynomial-relation-leading-coefficient-is-integral`,
  `lem-zmt-one-variable-integral-correction`,
  `def-strongly-transcendental-element`,
  `lem-strong-transcendence-descends-to-minimal-prime-quotients`,
  `lem-strongly-transcendental-finite-one-variable-algebra-is-nowhere-quasi-finite`,
  `lem-zmt-one-generator-local-integrality`,
  `thm-algebraic-zariski-main-localization`,
  `cor-quasi-finite-locus-open-finite-type-algebra`,
  `thm-quasi-finite-algebra-open-finite-factorization`,
  `cor-quasi-finite-algebra-is-source-locally-a-localization-of-a-finite-algebra`.
  Four further items are local suppliers added by Step 1 (11 → 15), each
  required by a design item and inside the subject, none a topic extension:
  `def-integral-subalgebra-of-an-arbitrary-ring-map` (the S′ used by the
  theorem; distinct from the published domain normalization), the polynomial
  normality supplier `lem-zmt-polynomial-rings-over-normal-domains-are-normal`
  (going down inside a normal base, Stacks §10.37),
  `lem-zmt-quasi-finite-transfer-through-intermediate-rings` (Stacks
  10.122.2/6/7/10 and Milne 17.7–8 transfers used by the induction), and
  `lem-zmt-conductor-radical-coefficients` (Stacks 10.123.5–6, the conductor
  step of the n=1 case). Statements track Stacks 00PI and Milne §17; the
  factorization item carries the finite principal-open cover plus the
  localization clause that AV-7 needs for the open-immersion translation, and
  the pointwise corollary keeps the design's ban on the overstrong
  one-localization-of-the-base claim.
- B: exactly the three design leaves, in order:
  `ex-zariski-main-open-immersion-punctured-affine-line`,
  `ex-zariski-main-finite-morphism-factorization`,
  `cex-quasi-finite-morphism-need-not-be-finite`. They illustrate,
  respectively, the open piece D(t) with a finite factor, the trivially finite
  case, and the false global-finiteness converse the design asks the leaf to
  distinguish; the counterexample ring R×R[t⁻¹] is finite over R×R with open
  image, matching the factorization item's shape.
- Hygiene checks: all 18 item IDs are new (absent from `items/`), so no
  published item is touched; of the 37 direct dependencies, 22 exist as
  published items and the other 15 are this page's own items; the manifest
  `requires`/companion pointers match plan-spec and the design. No in-run page
  other than the companion B page requires this A page, consistent with the
  ledger's "0 published consumers, first consumer planned AV-7".

## Scope judgement

The intended subject is the algebraic Zariski main theorem for quasi-finite
finite-type ring maps: the quasi-finiteness definition, the Stacks 10.123.1–14
reduction chain through conductor, strong transcendence and nowhere-quasi-finite
arguments, the local theorem S′_g ≅ S_g at a quasi-finite prime, openness of the
quasi-finite locus, the finite/open algebraic factorization with its principal
localization clause, and the pointwise corollary — exactly the CA-20 contract,
verified against both Stacks 00PI and Milne §17 as complete independent
treatments. The classical scheme-level "open immersion followed by finite"
statement is deliberately not on this page (AG track L595 owns it using this
page's algebraic factorization); within the algebraic subject nothing is
missing, and the page makes no geometric overclaim it cannot support.

Uncertainty is limited to the boundary item above and one convention: the
nine AC-bearing items (six A, three B) declare the Axiom of Choice in their
statements and depend on `def-axiom-of-choice`, as required by owner rule 11
for the published
going-down/lying-over and prime-intersection routes; whether a choice-free
route exists is a proof-level question outside this scope review and was not
assessed.

## Minor record notes (not scope-affecting; no owner action required)

1. The Milne coverage support text credits
   `def-quasi-finite-at-a-prime-for-finite-type-algebras` with "Definition 17.3
   and Proposition 17.4 … isolated-point criterion", but the item's statement
   carries only the κ(p)-localized-fibre definition plus the fibre-local-ring
   equivalence. That is all CA-20 item 1 asks for; Proposition 17.4's
   isolated-point form is never used by the scaffold's declared strategies.
2. The Milne locator says "Definition 17.3 through end of proof of Proposition
   17.13" while also listing "Lemmas 17.14–17": 17.14–17.17 are the four
   special cases proving 17.13/17.10 and end §17 on printed p. 84, so the range
   reads correctly as all of §17 from Definition 17.3; §17.1–17.2 (the
   field case feeding 17.4) lie outside the declared range and are unused.
3. `frontier-35-ten-categories-batch-4.coverage.json` still carries
   `status: "in-progress"` (other batch files omit the field or say
   `constructed`); `coverage-checklist` reports 0 errors for both A pages, so
   this is a label inconsistency only.

## Next action

Scope receipt recorded:
`research/frontier-35-ten-categories-step3a-review-algebraic-zariski-main-for-quasi-finite-morphisms.json`
(decision `sufficient`). Owner: no scope amendment needed; Step 3b authoring of
this pair may proceed on the current scaffold, which serves as the item
contract.
