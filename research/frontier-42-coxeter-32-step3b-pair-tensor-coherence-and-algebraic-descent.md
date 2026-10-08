# Step 3b scaffold audit and authoring — A/B pair `tensor-coherence-and-algebraic-descent`

Run `frontier-42-coxeter-32` · role alpha-high · pair dispatch label
`step3b-pair-tensor-coherence-and-algebraic-descent-25c59a9ad4a0d1f9` · batch 1 ·
design label HH-1 · orders 1688/1689 · written 2026-10-07 (attempt 3; earlier
attempts under labels `...-aaacd33d301b3325` and `...-a73b7914f8ad23be` wrote
items and contracts, not this report).

- A page: `tensor-coherence-and-algebraic-descent` (category `hopf-hecke-algebras`).
- B page: `tensor-coherence-and-algebraic-descent-examples`.
- Scope decision: `sufficient`. The Step 3a receipt
  (`research/frontier-42-coxeter-32-step3a-review-tensor-coherence-and-algebraic-descent.json`,
  sha256 `9a7bfc73…d223f2`) was refreshed at Step 3b after the two local
  Statement repairs below invalidated its statement-sensitive scope hash; the
  current receipt has sha256 `9ae5ff788e67716ba13f284920409f076fa85929e03f8e809204b63ba10e3342`
  and re-certifies the pair with the same ids, kinds, titles, requires and
  sources, the repairs being inside the approved claim set.

## Inputs read for this attempt

`CLAUDE.md`, `SCHEMA.md`, `briefs/group-author.md`,
`briefs/tasks/frontier-dependency-ledger.md`, the batch-1 manifest
(`research/frontier-42-coxeter-32-batch-1.pages.json`), coverage, notes and
cross-batch input, the batch-1 proof contracts, the Step 3a pair review, the
owner authoring direction (`research/frontier-42-coxeter-32-owner-authoring-direction.md`),
the canonical page prose, the current `research/plan-spec.json` HH-1 rows, the
sibling pages being authored in this run (`generic-coxeter-hecke-algebras-and-the-standard-basis`,
`coxeter-presentations-exchange-and-reduced-word-theorems`), all 15 owned item
files and the published suppliers cited in their Facts and contracts (statement
and quoted excerpt, with the proof paragraph read where the use is load-bearing).
The three harvested sources carry Step-1 `fetch_verified` stamps (Bergman
2947784 B / `6ed40cf344338e66` / 555 pp.; Conrad 660555 B / `c8dd0b6347fc984a` /
60 pp.; CRing 1759062 B / `b5a383bcaacdab54` / 355 pp.), and the Step-3a review
records a 2026-10-07 re-download reproducing them; this attempt relied on those
recorded fetches and did not re-download (the Step-1 scratch copies under
`/tmp/hh1/src` are gone).

## Owned IDs, authoring order and state at handoff

| # | ID | level | kind | home | state |
|---|---|---|---|---|---|
| 1 | `def-hh-scalar-and-tensor-conventions` | 0 | definition | A | authored |
| 2 | `lem-hh-finite-matrix-and-module-preliminaries` | 0 | lemma | A | authored |
| 3 | `lem-hh-finite-polynomial-and-localization-constructions` | 0 | lemma | A | authored |
| 4 | `lem-hh-free-associative-ring-and-relations-descent` | 0 | lemma | A | authored |
| 5 | `lem-hh-regular-module-detects-linear-and-tensor-identities` | 0 | lemma | A | authored |
| 6 | `lem-hh-finite-tensor-duality-and-canonical-coevaluation` | 1 | lemma | A | authored (repaired here) |
| 7 | `lem-hh-tensor-coherence-on-elementary-tensors` | 1 | lemma | A | authored (repaired here) |
| 8 | `lem-hh-tensor-injections-quotients-and-kernels-over-a-field` | 1 | lemma | A | authored |
| 9 | `lem-hh-universal-presentations-and-base-change` | 1 | lemma | A | authored |
| 10 | `ex-hh-elementary-tensor-presentations-and-invariant-contractions` | 1 | example | B | authored |
| 11 | `lem-hh-coefficient-extension-and-finite-tensor-separation` | 2 | lemma | A | authored |
| 12 | `cex-hh-infinite-dimensional-tensor-dual-identification-fails` | 2 | counterexample | B | authored |
| 13 | `ex-hh-finite-coevaluation-in-two-bases` | 2 | example | B | authored |
| 14 | `ex-hh-pentagon-on-four-named-vectors` | 2 | example | B | authored |
| 15 | `ex-hh-tensor-quotient-by-a-one-dimensional-subspace` | 2 | example | B | authored |

Dependency levels were recomputed from the current in-run edges and match the
item frontmatter and manifest rows. The five level-0 items are
`def-hh-scalar-and-tensor-conventions`,
`lem-hh-finite-matrix-and-module-preliminaries`,
`lem-hh-finite-polynomial-and-localization-constructions`,
`lem-hh-free-associative-ring-and-relations-descent` and
`lem-hh-regular-module-detects-linear-and-tensor-identities`; the level-1 items
are `lem-hh-finite-tensor-duality-and-canonical-coevaluation`,
`lem-hh-tensor-coherence-on-elementary-tensors`,
`lem-hh-tensor-injections-quotients-and-kernels-over-a-field`,
`lem-hh-universal-presentations-and-base-change` and
`ex-hh-elementary-tensor-presentations-and-invariant-contractions`; the level-2
items are `lem-hh-coefficient-extension-and-finite-tensor-separation`,
`cex-hh-infinite-dimensional-tensor-dual-identification-fails`,
`ex-hh-finite-coevaluation-in-two-bases`,
`ex-hh-pentagon-on-four-named-vectors` and
`ex-hh-tensor-quotient-by-a-one-dimensional-subspace`. The run-wide
`tools/item-dependency-levels.mjs check` currently stops on a non-owned pair
item (`ex-cg-reducible-semidefinite-forms-are-factorwise`, computed 16 vs stored
15), so the levels were verified independently against the in-run edge set.

## Open obligations at entry and their resolution

1. *Author all 15 items and both pages.* Done: all 15 item files carry complete
   Statements, Facts and proof/verification sections (the definition carries the
   conventions text), and both page files now register their items/examples and
   carry authored prose.
2. *In-pair suppliers.* None is unfinished. The current in-pair edges are:
   `lem-hh-tensor-coherence-on-elementary-tensors` ← the conventions definition;
   `lem-hh-tensor-injections-quotients-and-kernels-over-a-field` ← the
   conventions definition; `lem-hh-finite-tensor-duality-and-canonical-coevaluation`
   ← the conventions definition; `lem-hh-universal-presentations-and-base-change`
   ← `lem-hh-free-associative-ring-and-relations-descent`;
   `lem-hh-coefficient-extension-and-finite-tensor-separation` ← the
   conventions definition and the injection lemma;
   `ex-hh-elementary-tensor-presentations-and-invariant-contractions` ← the
   conventions definition; `ex-hh-pentagon-on-four-named-vectors` ← the
   conventions definition and the coherence lemma;
   `ex-hh-tensor-quotient-by-a-one-dimensional-subspace` ← the conventions
   definition and the injection lemma;
   `ex-hh-finite-coevaluation-in-two-bases` and
   `cex-hh-infinite-dimensional-tensor-dual-identification-fails` ← the
   conventions definition and the duality lemma. Every supplier precedes its
   consumer and is authored and checked. No outside-pair in-run supplier is
   used; the cross-batch input
   `research/frontier-42-coxeter-32-batch-1.cross-batch-dependencies.json`
   remains `[]` and was refreshed with `tools/frontier-dependency-ledger.mjs`.
3. *AC boundary.* Only `lem-hh-tensor-injections-quotients-and-kernels-over-a-field`
   and `lem-hh-coefficient-extension-and-finite-tensor-separation` depend on
   `def-axiom-of-choice`; both state AC in the Statement and carry `axiom_use`
   naming the single use through `cor-a-linear-subspace-has-a-complement`. The
   finite-dimensional clause of the coefficient-separation lemma is choice-free;
   `lem-hh-finite-matrix-and-module-preliminaries` now records the mirror note
   that its selections are finite (added at authoring, mirrored from its
   manifest row). The `ex-hh-tensor-quotient-by-a-one-dimensional-subspace` example cites the
   AC lemma only as a prediction and proves its equality by an explicit product-basis computation.
4. *Proof contracts.* `research/frontier-42-coxeter-32-batch-1.proof-contracts.json`
   covers all 15 items with per-step derivations, exact source excerpts with use
   sites, and all eight boundary rows; it was regenerated against the final
   arguments in this attempt where the items changed.
5. *Scope declines.* The four coverage declines of the A page were confirmed and
   recorded as `stands` in `research/frontier-42-coxeter-32-alpha-a-scope-decisions.json`
   (see Checks).

## Repairs made in this attempt

- **R1 — ill-typed first symmetry hexagon (`lem-hh-tensor-coherence-on-elementary-tensors`).**
  `lem-hh-tensor-coherence-on-elementary-tensors` stated claim 4 as
  `α_{L,N,M}(σ_{N,L}⊗id_M)α^{-1}_{N,L,M}σ_{L⊗M,N}α_{L,M,N} = (id_L⊗σ_{M,N})α_{L,M,N}`,
  which is not well typed: the rightmost `α_{L,M,N}` ends in `L⊗(M⊗N)`, so the
  next factor `σ_{L⊗M,N}` (domain `(L⊗M)⊗N`) cannot be applied. The redundant
  trailing factor is removed; the corrected identity
  `α_{L,N,M}(σ_{N,L}⊗id_M)α^{-1}_{N,L,M}σ_{L⊗M,N} = (id_L⊗σ_{M,N})α_{L,M,N}`
  is well typed on `((L⊗M)⊗N) → L⊗(N⊗M)` and is true: both sides send the
  spanning element `(l⊗m)⊗n` to `l⊗(n⊗m)` (step 1.5 recomputed accordingly;
  the two leading associators of the old proof text cancelled, which is why the
  old proof's element sequence was right while the displayed formula was not).
  The manifest statement mirror and the step-1.5 contract derivation were
  updated, and the `ex-hh-pentagon-on-four-named-vectors` contract citation
  quote was re-cut to the current Statement.
- **R2 — undeclared forward reference (`lem-hh-finite-tensor-duality-and-canonical-coevaluation`).**
  `lem-hh-finite-tensor-duality-and-canonical-coevaluation` carried an
  infinite-dimensional caveat as a wikilink to the B-page counterexample inside
  its Statement; `fwdcheck` failed it (`forward-undeclared`; the lemma kind may
  not rest on later material). The caveat sentence was moved from the Statement
  into a new `## Remarks` section as orientation-only prose and
  `forward_refs: [cex-hh-infinite-dimensional-tensor-dual-identification-fails]`
  was declared, which is the repository's sanctioned pattern (cf. the published
  `thm-algebra-of-continuous-functions`). `fwdcheck` and `depcheck` are now
  clean on the whole owned scope (this also removed the single
  `cited-not-in-deps` warning). The statement mirror and the two contract
  citation quotes that referenced the old Statement were updated.
- **R3 — manifest mirrors.** The batch-1 manifest was synchronized to the final
  item files for all 15 rows (statement, deps, level, kind, title, provenance,
  sources); ten rows had drifted (five statements and several dep lists), and
  every row now mirrors its item byte-for-byte on those fields.
- **R4 — Choice note.** `lem-hh-finite-matrix-and-module-preliminaries` gained
  the `axiom_use` note already recorded in its manifest row ("No arbitrary
  Choice: every selection is made from a finite list or by maximal finite
  dimension").
- **R5 — scope declines.** The four `deferred`/`out-of-scope` rows of the A page
  were rechecked against the current items and recorded as `stands` with
  evidence (below).

## Checkpoints (one per item, in authoring order)

**def-hh-scalar-and-tensor-conventions (level 0, definition).** Fixes: `k` a
field, `⊗ = ⊗_k` on vector spaces, left-associated tensor powers with empty
tensor `k`, opposite algebra, finite sums, and the rule that parentheses are
dropped only after the coherence lemma. Claim: every displayed object is a
published construction; the substantive content (k-vector-space structure and
spanning by elementary tensors) is the cited published statement. Source:
Conrad §§1–3 (printed pp. 1–13). Deps: 9 published items; `justified_by`
`lem-hh-tensor-coherence-on-elementary-tensors`, authored here. Checks: rendercheck OK, proof-layout 0 defects,
`content-policy` 0 errors. Decision: `accept`.

**lem-hh-finite-matrix-and-module-preliminaries (level 0).** Five finite facts:
(d1) a spanning `n`-family in a finite free module has coordinate matrix with a
right inverse, unit determinant, hence is a basis (with the `n=0` case excluded
from the determinant clause); (d2) rank invariance under field extension by the
row-space argument; (d3) finite composition series by maximal-dimension
selection; (d4) submodules of a finite direct sum of simple modules split, by
the two-case induction (intersection nonzero or projection injective); (d5) a
nilpotent endomorphism has trace zero via the kernel filtration and an adapted
basis. Uses only `lem-finite-choice` (finite selections; explicit `axiom_use`).
Sources: Conrad §5.11/§5.5; CRing §11.6, §13.2. Checks: all pass. Decision:
`accept`.

**lem-hh-finite-polynomial-and-localization-constructions (level 0).**
Multivariate polynomial ring by iteration (monomial basis, universal property,
domain-ness from the published iteration corollary), Laurent ring as the
finitely supported functions `ℤ^n → R` with convolution (unit monomials,
universal property for units, domain by lexicographic leading terms), and the
fraction field of a domain by numerator/denominator pairs (equivalence,
operations, field axiom, embedding). Sources: Bergman §4.12 (pp. 83–91); CRing
§13.1 (pp. 111–119). Checks: all pass. Decision: `accept`.

**lem-hh-free-associative-ring-and-relations-descent (level 0).** Words as
functions on von Neumann naturals, recursive concatenation and its associativity,
`R⟨S⟩ = R^{(W)}` with the concatenation product (bilinear descent to `F⊗F → F`),
the universal property, the two-sided ideal description of `(E)`, the quotient
universal property, and the identification with the published tensor algebra
when `R = k` is a field. Sources: Bergman §§3.4, 4.2–4.3, 4.10, 4.12, 9.1–9.3;
Conrad §3.3. Checks: all pass. Decision: `accept`.

**lem-hh-regular-module-detects-linear-and-tensor-identities (level 0).**
Regular-module detection (a = b iff a·1 = b·1), the left `A`-module structure
on `A^{⊗n}` for `n ≥ 1` with the single element `1^{⊗n}` detecting equality (the
`n = 0` case is explicitly not claimed), the multilinear-to-linear
correspondence in both directions, and the descent warning for
`A^{⊗n} → (A/I)^{⊗n}`. Sources: Bergman §§9.1–9.3; Conrad §3.3/§5.16. Checks:
all pass. Decision: `accept`.

**lem-hh-finite-tensor-duality-and-canonical-coevaluation (level 1).**
`V^*⊗W^* ≅ (V⊗W)^*` by product dual bases, the basis-independent preimage of
`id_V`, and `ev`/`coev` with both zigzag identities; the statement is now cleanly
finite-dimensional, with the infinite-dimensional failure recorded only as a
`## Remarks` forward pointer to `cex-hh-infinite-dimensional-tensor-dual-identification-fails` (R2). Sources: Conrad §§5.6–5.11. Checks: all
pass after R2. Decision: `repaired`.

**lem-hh-tensor-coherence-on-elementary-tensors (level 1).** Naturality of
`α, σ` and of the unit isomorphisms, the pentagon, the unit triangle and both
symmetry hexagons, each checked on elementary tensors and extended by spanning;
claim 4 repaired for type correctness (R1). Sources: Conrad §§5.1–5.3. Checks:
all pass after R1. Decision: `repaired`.

**lem-hh-tensor-injections-quotients-and-kernels-over-a-field (level 1).**
Under AC: `f ⊗ id_W` injective for injective `f` (complement and left inverse),
and `ker(p⊗q) = U⊗W + V⊗Z` (complements `V = U⊕V_1`, `W = Z⊕W_1`, the
isomorphism `p_1⊗q_1`, and the bilinear expansion of an arbitrary tensor).
`axiom_use` records the exact single use of AC. Sources: Conrad §§5.17–5.18;
CRing §13.4.1–13.4.3. Checks: all pass. Decision: `accept`.

**lem-hh-universal-presentations-and-base-change (level 1).**
`S⊗_R R⟨X⟩ ≅ S⟨X⟩` by explicit mutually inverse generator maps,
`S⊗(R⟨X⟩/I) ≅ (S⊗R⟨X⟩)/im(S⊗I)` by right exactness only (no flatness), and the
transport of a free basis along `R → S`. Sources: Conrad §6; CRing
§13.3.13–13.3.20; Bergman §§4.2–4.3, 9.3. Checks: all pass. Decision: `accept`.

**ex-hh-elementary-tensor-presentations-and-invariant-contractions (level 1,
B).** `u⊗v = u'⊗v'` for `u' = 2u`, `v' = v/2` over characteristic ≠ 2, and the
invariance of every bilinear contraction over all finite presentations
(including the empty presentation, which cannot present a nonzero tensor).
Sources: Conrad §§1–2. Checks: all pass. Decision: `accept`.

**lem-hh-coefficient-extension-and-finite-tensor-separation (level 2).**
Under AC, `Σ v_i⊗w_i = 0` with the `v_i` independent forces all `w_i = 0`
(reduce to `span(v_i)`, then contract by the coordinate functionals); the
finite-dimensional case extends the list to a basis without Choice. `axiom_use`
records the inheritance through the injection lemma. Sources: Conrad §5.16.
Checks: all pass. Decision: `accept`.

**cex-hh-infinite-dimensional-tensor-dual-identification-fails (level 2, B).**
For infinite `I` and `V = k^{(I)}`, the functional `L(e_i⊗e_j) = δ_{ij}` is not a
finite sum of products of functionals: the coordinate functionals `e_j^*` form
an infinite linearly independent family inside a finite-dimensional span. The
refuted statement is the finite-dimensional identification read without its
hypothesis. Sources: Conrad §§5.11–5.13; CRing §13.3.17. Checks: all pass.
Decision: `accept`.

**ex-hh-finite-coevaluation-in-two-bases (level 2, B).** `Σ_i e_i⊗e_i^* = Σ_j b_j⊗b_j^*`
for `b_{1,2} = e_1 ± e_2` over characteristic ≠ 2, with the dual basis computed
and the cross terms cancelled. Sources: Conrad §§5.6–5.11. Checks: all pass.
Decision: `accept`.

**ex-hh-pentagon-on-four-named-vectors (level 2, B).** The pentagon checked on
`((l⊗m)⊗n)⊗x` for the named vectors, by expanding `l⊗m` and following both
composites to `l⊗(m⊗(n⊗x))`. Sources: Conrad §5.2. Checks: all pass after the
R1 statement repair (the example uses the pentagon claim only). Decision:
`accept`.

**ex-hh-tensor-quotient-by-a-one-dimensional-subspace (level 2, B).** For
`U = ke_1`, `Z = kf_2`: `ker(p⊗q) = span{e_1⊗f_1, e_1⊗f_2, e_2⊗f_2} = U⊗W + V⊗Z`,
surjectivity, and the dimension count, computed from the product basis (the AC
lemma is cited only for the predicted formula and its complement argument is not
used). Sources: Conrad §§4.5–4.9. Checks: all pass. Decision: `accept`.

## Pages

- `library/hopf-hecke-algebras/tensor-coherence-and-algebraic-descent.md`:
  `items` now lists the ten A items in manifest (reading) order, `examples: []`;
  the scaffold obligation bullets were replaced by authored summary prose that
  states the conventions, the coherence/duality results with the exact Choice
  boundary, the descent half, and the prerequisite and companion links.
- `library/hopf-hecke-algebras/tensor-coherence-and-algebraic-descent-examples.md`:
  `examples` now lists the five B items; the prose summarizes the invariant
  contraction, the pentagon computation, the quotient kernel, the coevaluation
  in two bases, and the infinite-dimensional failure, and records that the
  companion supplies no theorem to another page.

## Checks actually run (explicit paths)

- `node tools/tsx-run.mjs tools/precheck.mts <15 item paths>` → 14 checked,
  0 failing (the definition has no proof phase).
- `node tools/rendercheck.mjs <15 items + 2 pages>` → OK, 17 files.
- `node tools/proof-layout.mjs <15 item paths>` (single batched command) →
  15 items, 70 steps, 0 defects.
- `node tools/depcheck.mjs --items-file <15 ids>` → OK, 0 warnings.
- `node tools/fwdcheck.mjs --items-file <15 ids> --quiet` → OK (0 errors) after R2.
- `node tools/extcheck.mjs --items-file <15 ids> --quiet` → OK.
- `node tools/prosecheck.mjs <2 pages>` → 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-42-coxeter-32-batch-1.pages.json`
  → 15 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-1.pages.json`
  → 15 items, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-1.coverage.json --require-destination`
  → 1 page, 23 harvested rows, 0 errors, 1 warning (low yield). The 23 rows are
  8 `already-published`, 6 `included`, 5 `inline`, 3 `out-of-scope`, 1
  `deferred`; the four declines were confirmed (see below).
- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-1.proof-contracts.json --strict`
  → 0 errors, 15/15 items (after the R1/R2 contract mirrors).
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template --json`
  → 120 boundary rows, 0 template clusters, 0 contradicted candidates.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote` → 128 citations,
  every recorded quote present, no widening candidates.
- `node tools/finite-smoke.mjs …` → 0 errors, 0/15 items carrying finite-smoke
  obligations (the registry holds no invariant matching this pair's claims; no
  check was invented for it).
- `node tools/risk-report.mjs …` → 0 errors, 15 items routed.
- `node tools/scope-decisions.mjs refresh --group a` then `check --run …`: the
  four owned decline rows are recorded `stands` with evidence (CRing
  13.4.4–13.4.17 flatness/projectivity: no item assumes either, base change uses
  right exactness and the injection lemma uses AC complements; Bergman §9.4:
  no variety/equational-theory claim on the pair; Conrad §7: no component
  conventions anywhere; Conrad §6 torsion/rank: the pair constructs the fraction
  fields but proves no torsion/rank formula, deferred to the planned page
  `hecke-base-change-semisimplicity-and-deformation` at order 1714, which
  requires this page). The run-wide `check` still exits nonzero on other pairs'
  pending decline rows, which are their owners' allocations.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32`
  → refreshed and deduplicated (owned cross-batch input `[]`).
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` →
  fails on `ex-cg-reducible-semidefinite-forms-are-factorwise` (stored 15,
  computed 16), a non-owned pair item; the owned levels were recomputed
  independently and match, and the same module check scoped to the owned batch
  (`dependencyLevels` from `tools/item-dependency-levels.mjs` applied to
  `research/frontier-42-coxeter-32-batch-1.pages.json`) reports no error, with
  the computed levels 0/0/0/0/0, 1/1/1/1/1, 2/2/2/2/2 exactly as stored.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32`
  → run still red on other pairs' pages (e.g.
  `coxeter-descents-poincare-polynomials-and-growth-examples` undeclared
  prerequisites); the owned pair contributes only the pre-existing
  `redundant-prereq` advisories recorded at Step 3a and no error.

## Decision receipts

- Scope: `research/frontier-42-coxeter-32-step3a-review-tensor-coherence-and-algebraic-descent.json`
  refreshed at Step 3b before item auditing, decision `sufficient`, sha256
  `9ae5ff788e67716ba13f284920409f076fa85929e03f8e809204b63ba10e3342` (the two
  local Statement repairs are inside the approved claim set; the earlier Step
  3a receipt is superseded by this refreshed review).
- Items: 15 receipts `research/frontier-42-coxeter-32-step3b-review-<id>.json`,
  all `owner: false`, `confidence: 1`, with the examined dependency list; 13
  `accept` and 2 `repaired`
  (`lem-hh-tensor-coherence-on-elementary-tensors`,
  `lem-hh-finite-tensor-duality-and-canonical-coevaluation`), each recording the
  claim, source locators, the exact checks run and the open gaps. No `--owner`
  flag, no judge or audit stamp, no escalation.

## Published concerns

- No confirmed published defect was found in a supplier used by this pair. All
  cited published items resolve, carry `status: published`, and their quoted
  excerpts support the recorded uses (read with the relevant proof paragraphs
  where the use is load-bearing).
- Non-blocking observations, for Step 5 (suspicion, not confirmed defects):
  (a) `lem-hh-tensor-injections-quotients-and-kernels-over-a-field` declares
  `thm-tensor-products-commute-with-arbitrary-direct-sums`,
  `thm-unit-isomorphisms-for-module-tensor-products` and
  `thm-second-isomorphism-theorem-modules` without an in-proof use — the final
  kernel route is the bilinear expansion, and the recorded uses of the first two
  live in the design strategy only; declared-but-unlinked dependencies of this
  kind also occur in audited published items, so they were left in place rather
  than trimmed.
  (b) The Step-3a bookkeeping note about coverage locators (CRing 11.6/13.2,
  Conrad 5.1–5.4/5.16 vs the item-level locator granularities) is unchanged and
  remains a record-keeping matter; the coverage rows were not rewritten because
  their row hashes bind the recorded decline decisions.
- The B-page counterexample `cex-hh-infinite-dimensional-tensor-dual-identification-fails`
  refutes the finite-dimensional dual identification read without its
  hypothesis; its home page is the B companion and it is reachable from the
  duality lemma only through the sanctioned `forward_refs` remark.

## Open obligations at handoff

1. Run-wide gates that are not owned by this pair remain red on other pairs'
   subjects: `item-dependency-levels` (see above), `scope-decisions` (other
   groups' pending decline rows), and `validate-plan` (other pages'
   undeclared prerequisites). None of these failures names an owned item or page.
2. The engine's Step-3 gate battery must be run after all Step-3b writers drain;
   this report records the owned-scope results, not a run-level pass.
3. Step 4 must splice the ten A items and five B items into `plan-spec.json` and
   keep the two `requires` lists as planned; the pre-existing
   `redundant-prereq` advisories are proposal material for the owner, not edits
   made here.
