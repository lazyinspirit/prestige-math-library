# Step 3a scope review — Normalization Finiteness for Affine Domains

- Run: `frontier-35-ten-categories` (role alpha, this pair only; batch 4)
- A page: `normalization-finiteness-for-affine-domains` (order 366.0601, commutative-algebra)
- B page: `normalization-finiteness-for-affine-domains-examples` (order 366.0602)
- Scope decision: **sufficient**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories --page normalization-finiteness-for-affine-domains --decision sufficient --reason "<reason with this report path>"`.
- This report judges scope only: whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item contract, plan entry or owner record.

## Pair reviewed

| page | kind | items | decision |
| --- | --- | ---: | --- |
| `normalization-finiteness-for-affine-domains` | A | 11 | **sufficient** |
| `normalization-finiteness-for-affine-domains-examples` | B | 3 | companion, covered by the A decision |

A inventory in page order:
`lem-integral-closure-unchanged-across-an-integral-intermediate-domain`,
`lem-finite-purely-inseparable-rational-extension-envelope`,
`lem-polynomial-algebras-over-fields-are-integrally-closed`,
`lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct`,
`lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct`,
`lem-integral-closure-in-a-purely-inseparable-rational-envelope-is-finite`,
`lem-normal-extension-separable-over-maximal-purely-inseparable-subextension`,
`thm-polynomial-algebras-over-fields-have-finite-integral-closures`,
`thm-integral-closure-finite-finite-type-domain-over-field`,
`cor-affine-normalization-is-finite`,
`lem-finite-normalization-compatible-with-principal-opens`.

B inventory in page order:
`ex-integral-closure-cusp-semigroup-affine-domain`,
`ex-normalization-nodal-coordinate-domain`,
`ex-integral-closure-monomial-curve-t3-t4-t5`.

## Design reconciliation

The controlling prose is `research/plan-commutative-algebra-track.md`
CA-19, lines 4460–4527 (orders, page ids, `requires`, the eight-item A proof
order, the three-item B leaf, and the B dependency table). Its A items 1–8 are
all present in the manifest in the same order
(`lem-integral-closure-unchanged-across-an-integral-intermediate-domain`,
`lem-finite-purely-inseparable-rational-extension-envelope`,
`lem-integral-closure-in-a-purely-inseparable-rational-envelope-is-finite`,
`lem-normal-extension-separable-over-maximal-purely-inseparable-subextension`,
`thm-polynomial-algebras-over-fields-have-finite-integral-closures`,
`thm-integral-closure-finite-finite-type-domain-over-field`,
`cor-affine-normalization-is-finite`,
`lem-finite-normalization-compatible-with-principal-opens`), and two of the
design's instructions are observed: no duplicate
`def-integral-closure-in-field-extension` was minted, and
`cor-affine-normalization-is-finite` adds no smoothness or projectivity
conclusion. Three local suppliers precede their consumers —
`lem-polynomial-algebras-over-fields-are-integrally-closed`,
`lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct`,
`lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct` —
giving 11 A items; the batch-4 construction notes
(`research/frontier-35-ten-categories-batch-4.notes.md`, "Plan and design
reconciliation") record them as the supply needed by the design's own route.
The B leaf contains exactly the design's three examples in the design's order;
no planned ID was dropped, no page was split, and companion, category and
order match `research/plan-spec.json`. The only literal metadata divergence is
punctuation of the B title (plan-spec and manifest use
"Normalization Finiteness for Affine Domains: Examples"; the CA/AG track
tables print an em dash) — bookkeeping, not scope.

## Evidence read

| Artifact | Use |
| --- | --- |
| `research/frontier-35-ten-categories-batch-4.pages.json` | Current A inventory (11 items, strict order), B inventory (3 items), page `requires`, companion, and every item statement, dep list, and source reference |
| `research/frontier-35-ten-categories-batch-4.coverage.json` | Page source record: 6 sources, 23 disposition rows (9 `included`, 7 `inline`, 5 `out-of-scope`, 2 `already-published`), fetch stamps |
| `research/frontier-35-ten-categories-batch-4.notes.md` | Step-1 construction record: inventory rationale, axiom ledger, published-dependency debt list, gate results |
| `research/frontier-35-ten-categories-batch-4.cross-batch-dependencies.json` | `[]` — the pair declares no cross-batch edge |
| `research/frontier-35-ten-categories-cross-batch-dependencies.json` | Contains no row mentioning this pair: no in-run consumer |
| `research/frontier-35-ten-categories-scope-ledger.json` | Both pages owed, batch 4; `allow_in_run_dependencies: false` |
| `research/frontier-35-ten-categories-drift-evidence.json` (page row) | `declaredRequires` = the manifest `requires`; 67-page closure; design locators |
| `research/frontier-35-ten-categories-alpha-step1-drift.md` L29–35 | Verdict `no-drift` for this page: "no later geometric normalization page is needed"; the normal-extension decomposition is a local proof obligation |
| `research/plan-commutative-algebra-track.md` CA-19 L4460–4527 and L4677, L4871 | Prose design, published-consumer counts (`0`/`0`), the mandatory planned gate before Scheme AV-23 |
| `research/plan-algebraic-geometry-track.md` L2718, L2748–2775, L3591 | Pair's intended consumer: AV-7 A "normalization existence/finite morphism and chart gluing"; exact future `requires` values; the planned seam |
| `research/published-consumer-supplier-ledger.md` L10021 and L15607 | Zero direct and zero transitive published consumers of every CA-19 A item; planned-only seam |
| `research/frontier-35-ten-categories-owner-authoring-direction.md`, `…-step1-owner-resolution.md`, `…-deferred-items.json` | No owner amendment, resolution or deferral touches this pair |

## Source coverage verification

All six sources for this page were re-fetched today and their recorded stamps
reproduced byte-for-byte and hash-for-hash:

- Stacks [030M](https://stacks.math.columbia.edu/tag/030M), 15 112 bytes,
  `sha256_16 4e733ee60ee94ab8` — Lemma 9.27.3 confirmed: clause (2) is exactly
  `F ⊂ E_insep` purely inseparable with `E_insep ⊂ E` Galois, the orientation
  `lem-normal-extension-separable-over-maximal-purely-inseparable-subextension`
  needs.
- Stacks [032N](https://stacks.math.columbia.edu/tag/032N), 14 864 bytes,
  `006c9c4fb36aae28` — Lemma 10.161.12, the purely-inseparable reduction.
- Stacks [032O](https://stacks.math.columbia.edu/tag/032O), 14 993 bytes,
  `64c40bc5a0bf1acb` — Lemma 10.161.13; its `L ⊂ L'(x^{1/q})` step is indeed
  "some details omitted", which the scaffold's envelope lemma supplies.
- Milne, *A Primer of Commutative Algebra* (`xnotes/CA.pdf`), 969 570 bytes,
  `1839ca7a488ab05c` — Prop 6.4 (transitivity), Thm 6.5 (integral elements form
  a subalgebra), Def 6.6 (integral closure) verified at source.
- Milne, *Algebraic Geometry* (`CourseNotes/AG.pdf`), 2 833 201 bytes,
  `8222dff2574a5afc` — Prop 8.3 (finite normalization), Cor 8.4 (normality is
  a principal-open-local condition), Prop 8.5 (nonaffine normalization),
  Ex 8.6(a)/(b) all read at pp. 177–178; the cusp `t ↦ (t²,t³)` and node
  `t ↦ (t²−1,t³−t)` parametrizations match the two B examples.
- Milne, *Fields and Galois Theory* (`Books/FT0.pdf`), 1 781 028 bytes,
  `ccf970256a2d0468` — Thms 3.4/3.10 supply the fixed-field bounds.

The `coverage-low-yield` warning for this page (9/23 harvested results
scaffolded) was checked row by row. Every decline is legitimate for this
pair's declared subject: 030M clauses (1) and (3) are the opposite
separable/purely-inseparable orientation and the tensor-compositum
identification, neither used by the CA-19 route; Milne CA Prop 6.4 is used
inside item 1 and Thm 6.5 / Def 6.6 are the already-published
`cor-integral-elements-form-a-subring` and
`def-integral-closure-and-integrally-closed-domain`; Milne AG Props 1.40,
1.44, Lemma 1.50 and Prop 1.51 are absorbed into the self-contained
Vandermonde/trace-dual step of `thm-polynomial-algebras-over-fields-have-finite-integral-closures`;
Milne AG Cor 8.4 (openness of the normal locus) and Prop 8.5 (nonaffine
normalization) are geometric statements whose affine ingredients this pair
does supply and whose gluing/openness belongs to the AV-7 consumer (Milne §8
is that page's source); Milne FT Cor 3.5 (automorphism-group equality) is not
used. Nothing required by the design is unbacked or only encyclopedic.

## Dependencies, consumers and role

- The 14 items carry 53 dependency edges; all 53 resolve (16 to items of this
  new A page, 37 to published `items/` files) with 0 unknown or unpublished
  ids. The 28 distinct published prerequisites are homed in pages inside the
  declared 67-page requires closure (`integral-extensions-and-going-up`,
  `algebraic-closure-embeddings-and-separability`,
  `algebraic-extensions-degree-and-finite-fields`, `splitting-fields`,
  `the-galois-correspondence`, `polynomial-rings-and-roots`,
  `noetherian-rings-and-hilbert-basis`,
  `noether-normalisation-and-nullstellensatz`,
  `affine-algebraic-sets-and-coordinate-rings`, set-theory pages), and the
  four declared `requires` pages are published in `library/`.
- No published item references any of the 14 planned IDs (checked by scanning
  `items/`), and `plan-commutative-algebra-track.md` L4677 records `0`/`0`
  published consumers for the page. The pair is therefore a supplier leaf in
  this run, with no published-consumer debt and no in-run consumer.
- Its role is the planned one: `plan-algebraic-geometry-track.md` L2718 makes
  the pair AV-7 A's supplier ("normalization existence/finite morphism and
  chart gluing"), AV-7 owns the classical gluing step, and
  `plan-commutative-algebra-track.md` L4871 records the page as a mandatory
  planned gate before Scheme AV-23. The pair's `cor-affine-normalization-is-finite`
  plus `lem-finite-normalization-compatible-with-principal-opens` are exactly
  the affine finiteness and principal-open compatibility that gluing needs;
  the nonaffine/gluing statement itself is correctly declined to AV-7.

## Why the scope is sufficient

The design's declared subject is finite normalization for affine domains over
a field. The A inventory covers every block of it:

- *Integral closure bookkeeping.* Item 1 is the design's item 1 with the
  design's exact dependency pair; it is what lets the closure in the target
  field be read over an integral intermediate ring.
- *Positive characteristic.* The envelope lemma (design item 2) turns a finite
  purely inseparable extension of `K(x₁,…,x_d)` into a finite constant
  extension and a uniform `q = p^e`; the envelope-closure lemma (design item 3)
  identifies the closure of `K[x_i]` in `K′(x_i^{1/q})` as `K′[x_i^{1/q}]`
  with an explicit finite monomial spanning set, and makes the closure in any
  intermediate field finite, using the three local suppliers
  (polynomial normality, Noetherian polynomial rings, Noetherian submodules).
- *Separable/normal decomposition and the separable closure step.* Item 7
  (design item 4) isolates the finite normal extension's purely inseparable
  fixed field with `M/E` finite Galois exactly as Stacks 030M clause (2); the
  trace-dual argument inside item 8 then traps the closure in a finite
  `C`-module, so design item 5's conclusion holds for every finite
  `L/K(x₁,…,x_d)`, in characteristic zero and dimension zero included.
- *Finite-type reduction and affine translation.* Item 9 (design item 6) uses
  Noether normalization plus items 1 and 8 to give module-finite normalization
  of every finite-type domain over a field; item 10 (design item 7) states the
  affine-variety normalization with finite `k[Y]` over `k[X]` and no
  smoothness/projectivity claim; item 11 (design item 8) is the
  principal-open compatibility.
- *Examples.* The B leaf's cusp `k[t²,t³]`, node `k[x,y]/(y²−x²(x+1))` in
  characteristic ≠ 2, and monomial curve `k[t³,t⁴,t⁵]` are the design's three
  named examples, each with a finiteness observation written into its strategy
  ({1,t}, A+At, {1,t,t²}), and each depending only on this A page and
  published algebra, so the B page is a genuine leaf under its A companion.

Source coverage is adequate: two independent full treatments (Stacks 10.161.12–13
and Milne AG §8) plus Milne CA for the module/Noetherian steps and Milne FT for
the Galois decomposition, all fetch-verified and one gap in the sources
(032O's omitted containment; Milne AG's imperfect-field paragraph per the
batch notes) explicitly repaired rather than assumed. The pair therefore
covers its intended subject, serves its planned AV-7 consumer, and omits no
designed result.

## Observations and residual uncertainty (non-blocking)

1. `cor-affine-normalization-is-finite` speaks of a map `ν : Y → X` and calls
   it birational, but the morphism/rational-map dictionary (in particular
   `thm-affine-morphisms-coordinate-ring-anti-equivalence` and
   `def-birational-equivalence-varieties`) is homed on the published page
   `morphisms-local-rings-and-rational-maps-of-affine-varieties`
   (library/algebraic-geometry, order 366.043), which is not among this page's
   four declared `requires`; the declared coordinate-rings page explicitly
   "defers the morphism half to the next page". No gate blocks this: the
   items are published and earlier in reading order, and `validate-plan`'s
   `undeclared-prereq` rule binds only planned items (verified at
   `tools/validate-plan.mjs` checks 1/15). The Step-3b author should declare
   the specific published dependencies when authoring the corollary; the
   owner may alternatively record the extra page in `requires` if the rendered
   prerequisite list must be complete. No definition of "normalization of a
   variety" is published, so the term must be introduced in-item or expressed
   through `def-integral-closure-and-integrally-closed-domain`.
2. The design's suggested published suppliers
   (`thm-purely-inseparable-extension-characterizations` for item 2 and
   `thm-finite-integral-closure-in-a-finite-separable-extension` for item 5)
   were replaced by direct local arguments to keep this route choice-free
   (`batch-4.notes.md`, "Mathematical construction and axioms"); both published
   items exist and could be cited as cross-references, but the design's
   conclusions are unaffected.
3. Milne AG Prop 8.3 is slightly more general than the stated item 9: the
   same items 1+8+9 machinery yields finiteness of the integral closure of a
   finite-type domain in *every* finite extension of its fraction field, while
   only the fraction-field case is stated. Candidate enrichment (or an AV-7
   remark) only; nothing in the design or the planned consumer requires it.
4. The B items declare `lem-polynomial-algebras-over-fields-are-integrally-closed`
   plus the closure definition rather than the design table's
   `thm-integral-closure-finite-finite-type-domain-over-field` /
   `cor-affine-normalization-is-finite` entries. Both choices stay inside the
   A page and the strategies exhibit the explicit finite spanning sets; the
   examples remain instances of the pair's theorem even though they verify
   their computations directly.
5. `dedekind-domains-and-ideal-classes` is in the page's declared `requires`
   (adding four pages to the 67-page closure) but no declared dependency of any
   item in this pair is homed there. It is retained as designed background;
   flagged so the owner can decide whether it stays.
6. The prose design's tag list for normalization includes
   [0BXR](https://stacks.math.columbia.edu/tag/0BXR) (Stacks 33.27.1,
   finiteness of the normalization morphism for locally algebraic schemes) and
   [032L](https://stacks.math.columbia.edu/tag/032L) (Stacks 10.161.8, finite
   separable closure over a Noetherian normal domain). 0BXR is exactly the
   geometric statement assigned to AV-7 by the AG reconciliation, and 032L's
   content is re-proved inside item 8 (Milne AG 1.50/1.51 are the recorded
   inline rows), so neither is an omission from this pair's coverage.

Honesty boundary: this review verified scope, source statements, fetch stamps,
dependency resolution and the consumer interface. It did not audit proofs or
re-derive the recorded arguments beyond the source statements quoted above;
that is Step 3b's and Step 5a's work. Unresolved uncertainty affecting the
scope decision: none.

## Recorded decision

`node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories
--page normalization-finiteness-for-affine-domains --decision sufficient
--reason "CA-19 design (plan-commutative-algebra-track.md L4460-4527) fully
scaffolded: 11 A items (8 designed + 3 declared local suppliers) and the 3
designed B examples; 6 sources re-fetch-verified today with stamps reproduced;
53 dependency edges resolved; zero published and zero in-run consumers; coverage declines
confirmed; report research/frontier-35-ten-categories-step3a-pair-normalization-finiteness-for-affine-domains.md"`.
Receipt: `research/frontier-35-ten-categories-step3a-review-normalization-finiteness-for-affine-domains.json`
(scope-bound `sha256 9c14c9b8d2cebbb93ae4c9b132ca19677a4f12c0aaf9bd0bf36d47350691dc2d`, recorded
2026-09-24T03:30:40.201Z); the pair no longer appears in
`node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase scope`.
The B page `normalization-finiteness-for-affine-domains-examples` is its A
page's companion and is covered by this single A-page scope decision.
