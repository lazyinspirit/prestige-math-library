# Step 3a scope review — Stiefel–Whitney and Euler classes by universal constructions

- Run: `phase-2-remaining-27` — role `alpha`, this pair only (batch 10; the
  batch file holds no other pair).
- A page: `stiefel-whitney-and-euler-classes-by-universal-constructions`
  (order 366.037, `algebraic-topology`, plan section AT-19).
- B page: `stiefel-whitney-and-euler-classes-by-universal-constructions-examples`
  (order 366.038; `requires` only its A companion, as required).
- Scope decision: **sufficient**, recorded with
  `tools/step3-decisions.mjs record-scope` (receipt
  `research/phase-2-remaining-27-step3a-review-stiefel-whitney-and-euler-classes-by-universal-constructions.json`).
- Scope only: no item approval, owner record, scaffold, manifest, coverage,
  plan or ledger edit. One recorded-locator defect is reported below; it is
  not a scope omission and does not make the pair inadequate.

## Artifacts read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-10.pages.json` | Live A inventory (19 items: 6 definitions, 1 lemma, 9 theorems, 3 propositions) and B inventory (4 examples, 2 counterexamples); page `requires` |
| `research/phase-2-remaining-27-batch-10.coverage.json` | Two fetch-verified complete treatments; 30 harvested rows with dispositions |
| `research/phase-2-remaining-27-batch-10.notes.md` | Scaffolder construction, ordering, choice ledger, cross-batch statement |
| `research/phase-2-remaining-27-batch-10.cross-batch-dependencies.json` | `[]` (no same-run supplier owned elsewhere) |
| `research/phase-2-remaining-27-batch-9.cross-batch-dependencies.json` | Consumer side of this pair: 1 page row plus 11 item rows for AT-20, each with per-use evidence |
| `research/plan-algebraic-topology-track.md` | Prose design AT-19 (lines 2210–2259), B subsection (2243 ff.), per-pair source table (2429), harvest dispositions (2524–2525), scope-boundary table (2563, 2573, 2580) |
| `research/phase-2-remaining-27-owner-authoring-direction.md` (AT-19 paragraph, lines 68–73) | Binding construction route for the tautological class and the odd-rank Euler proof |
| `research/plan-spec.json` | Pages 366.037/.038 agree on id, kind, title, category, companion and exact `requires`; item arrays are the pre-scaffold state |
| `research/phase-2-remaining-27-alpha-step1-drift.md` (149–153) | `no-drift`; both declared edges point backward and are closed |
| `research/published-consumer-supplier-ledger.md` | No entry mentioning this pair or its future item ids |
| Authoritative PDFs | Hatcher, *Vector Bundles & K-Theory* (1,563,812 bytes, sha256-16 `04282b30dfa63051`) and Miller, MIT 18.906 notes (1,467,813 bytes, sha256-16 `6fb68a6d53af20b4`), re-downloaded and byte/hash-matched to the coverage stamps; statements read in place |

## Inventory against the prose design

The live manifests carry exactly the designed 25 ids in design order — 19 A
items then 6 B items, verified id-for-id and position-for-position against the
AT-19 section of `research/plan-algebraic-topology-track.md`. Nothing designed
is missing; nothing is added.

The binding owner direction is realized in the scaffold statements and proof
plans: `def-tautological-degree-one-class-on-a-real-projective-bundle` defines
`x_E` by pulling back the fixed generator along a classifying map of `gamma_E`
(no use of `w_1`), the next lemma proves classifying-map independence and the
fiber-generator restriction, and `thm-mod-two-real-projective-bundle-theorem`
invokes Leray–Hirsch only afterwards and defines the coefficients. For odd
rank, `prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion` uses the
orientation-preserving map `-id:(E,o)→(E,-o)` with oriented naturality and the
orientation-sign law, asserts only `2e(E,o)=0`, and no homotopy of fiberwise
`-id` to the identity is claimed. The false unconditional vanishing is blocked
on the B page by `cex-odd-rank-euler-class-need-not-vanish-with-two-torsion-coefficients`.

Subject coverage. The intended subject is the real pair of families built from
universal constructions, stopping at bundle-level obstruction statements
(design lines 2217–2218). The scaffold plans: the universal-natural definition of a
characteristic class; real projectivization and the tautological line; the
degree-one class and its fiber normalization; the mod-two projective-bundle
theorem with unique monic coefficients; the Stiefel–Whitney definition,
naturality, flag bundle, injective splitting principle, Whitney product and
uniqueness from normalization/naturality/multiplicativity; the mod-two
cohomology of `BO(n)`; `w_1` and orientability with line classification; the
Thom-zero-section Euler class with rank-zero unit; Euler naturality,
orientation sign and ordered Whitney product; mod-two Euler = top
Stiefel–Whitney; the necessary section-vanishing direction (no converse);
odd-rank two-torsion; and Thom's identity `Sq(u_E)=w(E)u_E`. The B page carries
the designed normalization, symmetric-polynomial, oriented-two-plane,
degenerate-rank and two counterexamples. Adjacent material is deliberately
owned elsewhere and therefore not an omission: Chern and Pontryagin classes
(AT-20, batch 9), obstruction calculations and tangent/normal-bundle
applications (DT; plan lines 2563, 2573), Wu classes and characteristic
numbers (out of scope per coverage), and the false converse (plan line 2580,
proved false only through the B counterexample).

## Source coverage

Two independent complete treatments back the pair, and both were re-fetched
during this review with byte counts and sha256-16 prefixes identical to the
coverage stamps. Core statements were read in place:

- Hatcher, Chapter 3: Theorem 3.1 with axioms (a)–(d), the projective-bundle
  relation `x^n+w_1x^{n-1}+⋯+w_n=0`, naturality by the pullback square and the
  Whitney product by the relative-cohomology argument on `P(E_1⊕E_2)`
  (printed pp.78–80, matching the scaffold's proof plan); Proposition 3.3
  splitting principle with injective `p^*` (pp.80–83); Theorem 3.9
  `H^*(G_n;Z_2)=Z_2[w_1,…,w_n]` on the universal bundle (statement at the foot
  of printed p.84; proofs pp.84–90); Proposition 3.10 `w_1` classification and
  Proposition 3.11 orientability (printed pp.86–87); the Thom/zero-section
  Euler class (pp.90–91); Proposition 3.13(a)–(e) — naturality, product,
  `ρ_2e=w_n`, odd-rank two-torsion, nowhere-zero-section vanishing — with the
  recorded lettering confirmed (pp.91–92); and the obstruction viewpoint, in
  the Chapter 3 introduction (printed p.76: "there is then a well-defined first
  obstruction to a section of unit vectors, and this is exactly the Euler class
  `e(E)`", with the mod-two obstruction equal to `w_n`) and in §3.3
  "Characteristic Classes as Obstructions" (printed pp.99–106).
- Miller, Lectures 33–37: Theorem 33.6 (unique Stiefel–Whitney family),
  projective-bundle/flag constructions, the Thom class and its coincidence
  with the Euler class (Lemma 35.3), Euler multiplicativity and Whitney
  product (Proposition 35.4), the `BO(n)`/`BSO(n)` and `w_1` orientation
  discussion, and the Steenrod-square development (Theorem 37.1 ff.).

All 30 harvested rows are disposed (21 `included`, 4 `inline`, 3 `deferred` to
the in-run AT-20 pages, 2 `out-of-scope` with reasons); `coverage-checklist
--require-destination` reports 2 pages, 55 harvested results, 0 errors,
0 warnings; `source-fetch-check` reports 4/4 fetch-verified and 4/4 resolved
with 0 documented drops.

One recorded-locator defect (reported, not a scope omission). The coverage row
and the item's `sources.references` for `thm-thom-identity-for-stiefel-whitney-classes`
cite Hatcher "§§3.1–3.2, pp.77–94" and Miller "Lectures 35–37, pp.129–142".
Neither range contains the identity: Hatcher's VBKT never introduces Steenrod
squares (its only occurrence of "Steenrod" is a bibliography entry), and in
Miller the identity is Proposition 39.10, Lecture 39, printed pp.151–152
("`Sq^iU = w_i ∪ U`"), which I read in the official PDF
(sha256-16 `6fb68a6d53af20b4`). The result itself is standard and the design's
own locator (Milnor–Stasheff §§4 and 7–10; §8 "Existence of Stiefel–Whitney
Classes" defines `w_i` exactly by Thom's identity
`w_i(ξ)=φ^{-1}Sq^iφ(1)`) covers it, so the pair's source coverage is adequate
while the recorded locator is wrong. Recommendation for Step 3b (or a
coverage-record correction): restate that item's source locator as
Milnor–Stasheff §8 and/or Miller Lecture 39, Proposition 39.10, pp.151–152.
The scope hash covers statements, not sources, so the correction needs no
scope refresh. (Secondary, one-page nit in the same coverage page: the
Theorem 3.9 row says "printed pp.85–90"; the statement itself sits at the foot
of printed p.84, with its proofs running pp.84–85 and, in the §3.2 Gysin
version, pp.86–90. Similarly the Proposition 3.10 row says "pp.87–88" while
the statement is on p.86, the orientability result is Proposition 3.11 on
p.87, and the chapter-introduction obstruction sentence quoted for the
counterexample row is on p.76, with §3.3 itself at pp.99–106. These are
locator-precision nits: every quoted statement is present in the cited
source.)

## Role in the library

- Prerequisites are published with nonempty inventories:
  `bocksteins-steenrod-squares-and-cohomology-operations` (order 366.017) and
  `leray-hirsch-thom-isomorphism-and-gysin-sequences` (order 366.035); the
  Step-1 drift report is `no-drift` for this page.
- All 66 declared dependencies of the 25 items resolve: 49 to items on disk
  (published) and 17 inside the pair. None is unresolved, planned-only, or
  owned by another in-run batch.
- In-run consumer: the AT-20 pair (batch 9, orders 366.039/.040) records a page
  edge plus 11 item edges to this pair in
  `phase-2-remaining-27-batch-9.cross-batch-dependencies.json`, each with a
  concrete use (projective splitting, `w(λ)=1+u`, Whitney products, Euler
  normalization/sign/product, mod-two Euler comparison, odd-rank rational
  vanishing). Every named supplier item exists in this scaffold.
- No published consumer is currently blocked on this pair: the canonical
  Phase-3 ledger has no entry for it, and no published item references an
  unauthored id of this pair.
- Later planned page-level consumers (DT orders 531, 545, 547, 553, 555, 571,
  577, 579; DG order 516.1) need exactly the standard interface this scaffold
  plans: naturality, Whitney product, `w_1` orientability, splitting,
  `H^*(BO(n);Z_2)`, Euler naturality/product and `ρ_2e=w_n`.
- The B page is consumed only inside the pair, consistent with the B-leaf rule;
  no authored dependency outside the pair reaches its examples.

## Boundary observations for Step 3b (not item approvals)

1. Locator correction above for `thm-thom-identity-for-stiefel-whitney-classes`.
2. `def-euler-class-by-zero-section-pullback-of-the-thom-class` is the typed
   alias/normalization bridge to the already published
   `def-thom-euler-class-of-an-oriented-vector-bundle` (recorded in the batch
   notes). Step 3b should keep `e(E)=s^*j^*u_E`, the rank-zero unit and the
   `Z`/`Z_2` coefficient conventions identical to the published property.
3. The Thom identity consumes the prerequisite page's Steenrod-square
   normalization/top-square and Cartan items; the author should keep the
   total-square notation and mod-two coefficients exactly as published on that
   page. This is a naming/consistency matter, not a scope gap.
4. The pair intentionally omits the primary-obstruction theorem for the Euler
   class (and Hopf-invariant/Poincaré–Hopf consequences). The plan assigns
   those to DT (lines 2563, 2573) and the untwisted/simple obstruction theory
   is on the published obstruction-theory page; the design's boundary
   "necessary direction only" is therefore intended. A later consumer needing
   the full primary-obstruction statement would be an enrichment request, not
   a defect of this design.

## Checks run

- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-10.pages.json`
  → 25 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs …batch-10.pages.json --manifest-only`
  → 25 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs …batch-10.coverage.json --require-destination`
  → 2 pages, 55 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage …batch-10.coverage.json`
  → 4/4 fetch-verified, 4/4 resolved, 0 documented drops.
- Independent re-download of both source PDFs (Hatcher and Miller) with
  matching byte counts and sha256-16 prefixes; targeted full-text reads of the
  passages listed above.
- Dependency resolution over the 25 items: 66 dependencies, 0 unresolved.
- Step-1 receipts: 25/25 owned items carry current non-owner `ready` records
  (`decision: ready`, checked per item).
- `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase scope`
  → this page was open as "current scope review required" before this review;
  no owner scope receipt exists on it.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0; declared
  order acyclic and consistent over 1138 itemized pages (481 planned pages
  still carry empty item arrays).

## Limits of this review

This is a scope determination. It does not audit item proofs, statement
precision, choice accounting, proof-plan adequacy or the source-pulling
mechanics of Step 2 (those remain Step 3b and Step 5 work), and it does not
certify any published item. The source check was a targeted read of the
passages named above, not a re-reading of both books; the one locator defect
is reported with the exact evidence and the exact replacement reference.

## Decision

`sufficient`: the scaffold realizes the AT-19 design and the binding owner
direction item-for-item and in order, its two complete treatments are
fetch-verified and byte/hash-matched, all harvested rows are disposed, all 66
declared dependencies resolve to published or intra-pair items, and every
declared in-run consumer interface (AT-20's 11 item edges) and later planned
page-level need is supplied. The single recording defect — the wrong source
locator for the Thom identity, whose statement is standard and present in the
design's Milnor–Stasheff locator and in Miller Proposition 39.10 — is an
authoring/record correction carried into Step 3b, not a scope omission.
