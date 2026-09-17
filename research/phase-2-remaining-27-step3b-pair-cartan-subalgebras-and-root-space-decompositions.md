# Step 3b — scaffold audit, repair and authoring: `cartan-subalgebras-and-root-space-decompositions`

Run `phase-2-remaining-27`, batch 11, pair DG-30 (A page
`cartan-subalgebras-and-root-space-decompositions`, B page
`cartan-subalgebras-and-root-space-decompositions-examples`). The sibling pair
DG-31 in the shared batch files was left byte-unchanged.

## Outcome

All 54 scaffolded items of the pair are authored as draft items with complete
proofs or verifications, and the two A/B pages are written:

| Class | Count | IDs |
|---|---|---|
| A items (scaffolded) | 43 | as in the batch manifest, items 1–43 of the manifest order |
| A items (added by this dispatch) | 2 | `lem-generalized-weight-space-decomposition-for-a-nilpotent-subalgebra`, `def-special-linear-lie-algebra-sl-two` |
| B items | 11 | the design's B inventory verbatim |

Every original item ID and promised claim is retained. The two additions are
fully authored local suppliers required by the completed proofs; they are
registered in the batch manifest (inserted before their consumers), the batch
coverage file (both `included` with their source locators), the batch proof
contracts, and the two A/B pages, and they are the only items of the pair that
carry no Step-3 item receipt by design (they are certified mechanically by the
engine's `auditor-created-certifications` gate).

## Repairs made to the scaffold (all documented, none silent)

1. **Dependency arrays refreshed to the suppliers actually used.** The
   scaffold's `deps` arrays were treated as audited claims, not as proof
   licence. For 46 of the 54 items the array was extended with the published
   suppliers the completed argument actually cites (`def-derivation-of-a-lie-algebra`,
   `prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal`,
   `thm-engels-theorem`, `prop-nilpotent-lie-algebras-are-solvable`, `thm-lies-theorem`,
   `thm-primary-decomposition-for-an-endomorphism`, `def-simple-semisimple-and-reductive-lie-algebras`,
   `thm-trace-of-ab-equals-trace-of-ba`, the Lie-group/exponential items
   `thm-lie-third-fundamental-theorem`, `thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup`,
   `prop-adjoint-exponential-identity`, `thm-the-differential-of-adjoint-is-ad`,
   `prop-adjoint-is-a-smooth-lie-group-representation`, `def-smooth-left-action-of-a-lie-group`,
   `def-orbit-stabilizer-and-orbit-map-of-a-smooth-action`, `cor-local-normal-form-for-submersions`,
   `cor-every-submersion-is-an-open-map`, `def-immersion-submersion-and-constant-rank-map`,
   `def-countable-choice`, and the finite-dimensional suppliers
   `thm-primary-decomposition-for-an-endomorphism`, `lem-commuting-endomorphisms-preserve-eigenspaces`,
   `cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue`).
   The manifest's `deps` rows were synchronised with the item files.
2. **Item 11 (existence of Cartan subalgebras) — statement strengthened.** The
   maximal-toral argument proves the stronger fact that *every* maximal toral
   subalgebra is Cartan; the statement now records it, and item 12 consumes it.
3. **Item 12 (Cartan = maximal toral) — proof route replaced.** The scaffold
   strategy ("Lie triangularization and nilpotence show ...") was carried out
   as the two-direction argument: `h = g_0(h)` via `N_g(h) = h` and Lie's
   theorem; abelianness via the trace identities on the generalized weight
   decomposition and Cartan's criterion; semisimplicity of the elements via the
   Jordan parts; maximality by centralizer comparison.
4. **Item 13 (conjugacy) — proof rebuilt and statement's rank clause
   re-worded.** The proof is the orbit-openness argument: the strongly regular
   locus `{d_ρ ≠ 0}` is a nonempty connected polynomial complement; the orbit
   of the regular part of a Cartan under the connected adjoint group
   `Ad(G)` (G the simply connected group with Lie algebra `g`, from Lie's third
   theorem) is open by the submersion normal form; every element of the
   strongly regular locus is semisimple with Cartan centralizer; the conjugacy
   classes are therefore disjoint nonempty open subsets of a connected set.
   The scaffold's clause "hence rank is independent of the chosen Cartan
   subalgebra" is stated as "in particular all Cartan subalgebras have the same
   dimension"; see the open qualification below.
5. **Item 33 (dimension formula) — stated for an arbitrary Cartan
   subalgebra.** It now reads `dim g = dim h + |Φ|` for every Cartan `h`, with
   the independence of `h` cited to item 13; see the open qualification below
   for the identification with the minimum of centralizer dimensions.
6. **Item 24 (sl_2 modules) — proof route made local.** The statement now
   defines the copy of `sl_2` through the new definition item, proves
   semisimplicity of `sl_2` by the explicit Killing-form computation, and
   classifies the irreducible modules by the highest-weight string argument;
   complete reducibility is taken from the published Weyl theorem.
7. **Items 25, 27, 28 (strings, one-dimensionality, reducedness) — arranged so
   that no step assumes what it proves.** The string interval property is
   proved by decomposing the `α`-string module into irreducible summands with
   concentric index intervals (no one-dimensionality used); one-dimensionality
   is proved by the trace computation on `Ce ⊕ Ch_α ⊕ ⊕_{k<0} g_{kα}` with the
   root `sl_2` triple; reducedness then uses integrality of Cartan integers and
   the absence of proper multiples.
8. **Item 31 (reflections are inner) — proof made explicit.** The inner
   automorphism `Ad_{exp e}Ad_{exp(−f)}Ad_{exp e}` is computed with the
   linear-ODE exponential identity `Ad_{exp X} = e^{ad X}`, giving
   `τ(h_α) = −h_α`, `τ|ker α = id`, and hence `τ(g_β) = g_{s_α(β)}`.
9. **False statements 38–43 — witnesses supplied.** 38 and 42 use the
   two-dimensional algebra `CX ⊕ CY`, `[X,Y]=Y`; 39, 41, 42 the explicit root
   vector `e ∈ sl_2` and the reducedness of the root set; 43 the witness pair
   `sl_2(R)` and `su_2` with common complexification `sl_2(C)` and the
   nilpotent-element invariant that separates them.

## Axiom-of-choice bookkeeping

* Items 1, 4, 5, 11, 12, 13, 15 and 32 declare the Axiom of Choice and name
  the exact use: `rem-additive-jordan-chevalley-is-supplied-by-x-two` records
  the published operator theorem's AC hypothesis; items 4 and 5 use it only
  through that theorem; items 11/12/13/15 inherit it through the internal
  Jordan decomposition; item 13 additionally derives the countable choice
  used by Lie's third theorem and the immersed-image theorem from AC by the
  trivial instance (a countable family is a family), and declares
  `def-countable-choice`.
* Everything else is choice-free as authored: the generalized weight space
  lemma, the sl_2 representation theorem, the root-space and Killing-form
  theory, the string/one-dimensionality/reducedness block, the reflection
  block, the root-system theorem, and the consequences 33–37 are ZF arguments
  (finite-dimensional linear algebra, Lie's theorem, trace identities, and
  explicit constructions). The regular-semisimple centralizer theorem (item
  10) and the sl_2 module theorem are ZF, as the scaffold announced.
* `def-axiom-of-choice` appears in the manifest dependency arrays exactly for
  the AC-declaring items; no item that declares ZF depends on an item that
  carries AC.

## Open qualifications and escalations

1. **Rank conventions (owner-relevant, not a defect of this page).** Item 9
   defines `rank(g)` as the minimum of `dim ker(ad x)` over `x ∈ g`, while
   items 33–37 use the common Cartan dimension `dim h`. Item 13 proves that all
   Cartan subalgebras have the same dimension, so `dim g = dim h + |Φ|` is
   independent of `h`; but the *identification* of `dim h` with the minimum of
   centralizer dimensions — the classical inequality `dim C_g(x) ≥ rank` for
   all `x` — is not proved on this page (its standard proofs use the
   Jacobson–Morozov theory of nilpotent elements or algebraic-group
   centralizer dimensions, neither of which is available in this frontier).
   Item 33 therefore states the formula in the `dim h` form and records the
   conditional identification explicitly; no item asserts the unproved
   equality. Proposed remedy: a successor lemma on a later page proving
   `dim C_g(x) ≥ rank` via the sl_2-triple machinery once it is available, or
   an owner decision to define `rank` as the common Cartan dimension.
2. **Abstract root-system axioms.** Item 32 states the conclusion in expanded
   form (finite, spanning, reduced, reflection-stable, integral Cartan
   integers, only `±α` per line) and does not assert the abstract Euclidean
   axioms, which are DG-31's business; the Euclidean positive-definite form on
   the real span is likewise not claimed here.
3. **Classical matrix models.** The B-page item on `B_2` and `C_2` fixes its
   matrix models (`so_5`, `sp_4`, their diagonal Cartans, the bracket formula
   `[H,E_{ab}] = (H_{aa}−H_{bb})E_{ab}`) inline, as the Step-3a review judged
   necessary; no item outside the pair consumes them. If the owner later adds
   complex classical matrix Lie algebras to DG-31, this example can be
   re-pointed at them, but it does not consume them now.

## Published-item concerns for the canonical ledger

These are recorded for the serial reconciler; none was used as a proof
supplier on this page.

1. `thm-additive-jordan-chevalley-decomposition` is published with "Assume the
   Axiom of Choice" in its statement but without `def-axiom-of-choice` in its
   published `deps`. This page declares the assumption locally, declares
   `def-axiom-of-choice`, and records the metadata defect here and in the
   remark `rem-additive-jordan-chevalley-is-supplied-by-x-two`.
2. `thm-root-space-decomposition-relative-to-a-cartan-subalgebra`,
   `thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra`,
   `lem-regular-elements-form-a-connected-dense-open-subset`,
   `lem-regular-semisimple-elements-form-a-dense-open-subset`,
   `thm-the-root-set-is-a-reduced-crystallographic-root-system` and the
   published Killing-dual/opposite-bracket chain are the Phase-3 repair
   targets whose designated supplier is this page's inventory (the Step-1
   notes list the same items). They were read for orientation only; no
   authored item depends on them.
3. The published `lem-finite-semisimple-cartan-root-and-string-structure`
   (lie-theory track) restates most of this page's content in one lemma with
   a different convention (Cartan = maximal toral). It is not a dependency of
   any item here; its own page is outside this frontier's prerequisite
   closure. Flagged as an overlap for Step 4/Phase 3, not as a defect.
4. Pre-existing repo-wide failures observed while running the gates (not
   caused by this pair): `node tools/depcheck.mjs` reports errors for other
   agents' in-flight items (for example a `b-leaf-content` error for
   `cex-zero-euler-class-does-not-in-general-imply-a-nowhere-zero-section`); the
   batch-11 `content-policy` run reports exactly 62 `scope-item-missing`
   errors, all of them the sibling DG-31 pair's not-yet-authored items, and
   none of this pair's 56 items.

## Checks actually run (all on this pair's files)

| Check | Command | Result |
|---|---|---|
| Proof format, explicit paths | `node tools/tsx-run.mjs tools/precheck.mts` over all 56 item paths | 43 proof-bearing items checked, 0 failing |
| Rendering | `node tools/rendercheck.mjs` over all 56 items and both pages | OK — no wikilink in math, no unbalanced/multiline displays, KaTeX parses, frontmatter parses |
| Content policy | `node tools/content-policy.mjs research/phase-2-remaining-27-batch-11.pages.json` | 62 errors, all of them the sibling pair's pending items; 0 for this pair |
| Manifest dependencies | `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-11.pages.json` | 118 items, 0 errors |
| Plan | `node tools/validate-plan.mjs research/plan-spec.json` | OK, acyclic and consistent, no item-level cycles, no forward refs, no B-page dependencies among the 1138 pages with item lists |
| Coverage | `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-11.coverage.json --require-destination` | 2 pages, 41 harvested results, 0 errors, 0 warnings |
| Sources | `node tools/source-fetch-check.mjs --coverage research/phase-2-remaining-27-batch-11.coverage.json` | 4/4 fetch-verified, 4/4 resolved |
| Proof contracts (strict) | `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-11.proof-contracts.json --strict` | 0 errors, 0 warnings, 56/56 items checked (citations quote the cited statement sections; every numbered step has a claim and its actual inputs; all eight boundary axes dispositioned) |
| Dependency graph | `node tools/depcheck.mjs` | no finding involving any of this pair's ids |
| Recorded/forward references | `node tools/fwdcheck.mjs --quiet`, `node tools/extcheck.mjs` | no finding involving this pair |
| Frontier ledger | `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed; no cross-batch row involves this pair (its only in-run edges are intra-batch), so `research/phase-2-remaining-27-batch-11.cross-batch-dependencies.json` remains `[]` |

## Decisions and handoff

* Scope: a fresh `sufficient` scope decision for the pair was recorded after
  the two documented additions
  (`phase-2-remaining-27-step3a-review-cartan-subalgebras-and-root-space-decompositions.json`
  new hash `db7c5f02…`), as the dispatch requires for local additions; it is a
  refreshed sufficient decision over the preserved inventory, not an
  independent review.
* Item decisions: 54 receipts recorded with `repaired`, confidence 1 and the
  examined dependency IDs (`research/phase-2-remaining-27-step3b-review-<id>.json`),
  one per scaffolded item. The two added items carry no self-review by design
  and are left to the engine's auditor-created certification.
* No `--owner` flag, judge stamp, audit stamp, or published-item edit was made
  anywhere in this dispatch. The sibling DG-31 pages and items in the shared
  batch file are untouched.
* Open obligations: the rank-convention identification (item 1 of the
  qualifications above) and the published-defect entries (published concerns
  1–3). Everything else on this pair is closed and evidenced above.

## Checkpoint (end of dispatch)

* Inventory: 56 item files on disk (`items/…`), both page files
  (`library/differential-geometry/cartan-subalgebras-and-root-space-decompositions.md`
  with 45 items, `…-examples.md` with 11 examples), the batch manifest
  (`research/phase-2-remaining-27-batch-11.pages.json`, 45 + 11 for this pair,
  DG-31 untouched), the coverage file (41 harvested results, 0 errors), and the
  batch proof-contract file (56 scoped entries, strict gate green).
* Current state of the gates that concern this pair: precheck 43/43 pass;
  rendercheck OK on 56 items and both pages; manifest-deps 0 errors;
  validate-plan OK; coverage-checklist 0 errors; source-fetch-check 4/4;
  strict proof contract 0 errors 0 warnings; depcheck/fwdcheck/extcheck no
  finding involving this pair.
* Decisions: 54 `repaired` item receipts with confidence 1 and examined
  dependency IDs; a refreshed pair-level `sufficient` scope decision with hash
  `db7c5f02…`; the two added items deliberately left to the engine's
  auditor-created certification.
* Open gaps: the rank-convention identification, recorded with its proposed
  remedy above; the published-item defects listed for the canonical ledger;
  and the two outstanding engine certifications for the added items, which the
  post-dispatch `auditor-created-certifications` gate issues mechanically.
* Next action after this dispatch: the engine's 3b gate battery certifies the
  two added items and closes the pair's Step-3 item audit; Step 4 then splices
  the pair's 56 item IDs from this batch manifest into `plan-spec.json`. No
  further authoring is owed by this dispatch unless the owner rules on the
  rank-convention question.
