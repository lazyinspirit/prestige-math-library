# Batch 13 notes — `affine-group-schemes-hopf-algebras-and-rational-representations`

Run `frontier-40-geometry-braids-rep-27`, batch 13 (beta, Step 1 scaffold).
Pair orders 873/874, category `scheme-theory`.
Owned outputs written: the populated manifest, the coverage record, 14
item-readiness records and the consumer-batch dependency input. No published
content, shared plan, engine state or verdict was edited.

## What was read before construction

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`; the engine task for this batch.
- `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  (binding: 27 selected pairs, in-run lower-order dependencies allowed,
  publication and pushing stay owner actions).
- The design section: `research/plan-algebraic-geometry-expansion-track.md`,
  section **AG-GS-2** (line 203), whose page row is the L30 id mention, plus
  the survival report `research/algebraic-geometry-expansion-2026-09-30/source-milne-groups.md`.
- Current plan: `research/plan-spec.json` row order 873/874; the run scope
  ledger, `drift-evidence.json` and the Alpha drift report entry for this page
  ("no-drift", with the Hopf/comodule source gate recorded as an authoring
  obligation).

## Design versus plan

No conflict found. The plan row reproduces the design's pair ID, category,
companion and required pages; its item lists are the empty planning shells this
batch fills. The design's A inventory
(`def-coordinate-hopf-algebra-of-affine-group-scheme`,
`thm-affine-group-schemes-hopf-algebra-antiequivalence`,
`thm-closed-subgroup-schemes-correspond-to-hopf-ideals`,
`thm-affine-group-scheme-faithful-finite-dimensional-representation`) and B
inventory (`ex-hopf-algebra-of-a-split-torus`,
`ex-rational-representation-from-a-comodule`) are preserved exactly, with the
same IDs. The design's "use arbitrary field and characteristic exactly as
stated" is respected: every item is over an arbitrary field and none assumes
reducedness, smoothness or characteristic zero.

One structural constraint had to be resolved locally. The only published item
that constructs `GL_n` and `G_m` as group schemes with their comorphisms,
`ex-additive-multiplicative-and-general-linear-group-schemes`, is homed on the
B/examples page `group-schemes-of-finite-type-over-a-field-examples`, and
SCHEMA forbids using an item homed only on a B page as another page's
dependency (`b-leaf-content`, a fatal depcheck rule). Rather than depend on it,
this batch builds the minimal local prerequisite
`lem-general-linear-group-scheme-and-its-coordinate-ring` on the A page (for
`GL_n`, its coordinate ring, and its `GL_1 = G_m` special case). This is a
scaffold decision for owner reconciliation: the owner may prefer to give the
published example an A-page home, or to keep the local prerequisite.

Notes on the design text that are not conflicts:

- The design requires "AG-GS-1 and published affine anti-equivalence"; the plan
  additionally lists the classical affine interface page for reading order.
  All three required pages are published at HEAD
  (`group-schemes-of-finite-type-over-a-field` is a frontier-38 publication,
  so it is an out-of-run supplier and raises no in-run dependency level).
- The design's open source gate ("no exact Stacks Hopf/comodule equivalence
  proof was verified; second-source gate remains") is closed by the independent
  full lecture-note treatment recorded below. No Stacks claim is used.
- The design's warning that the published complex item
  `lem-affine-algebraic-group-faithful-rational-representation` is over `C` and
  "is not this general supplier" is preserved: nothing in this pair depends on
  it, and the arbitrary-field statements are proved from the sources below.

## Sources (full text fetched, extracted and read)

1. J. S. Milne, *Algebraic Groups* (corrected 2022 printing, CUP),
   <https://www.jmilne.org/math/Books/iAG2022.pdf>. Full text downloaded
   (4,838,013 bytes, SHA-256 `f2ddd8fa…f21f40`, 659 PDF pages) and read over
   Ch. 3 §§3(a)–(e), printed pp. 64–68 (Hopf algebra definition, diagram
   reversal, Hopf ideals, closed subgroup/Hopf ideal correspondence) and
   Ch. 4 §§4(a),(c)–(d), printed pp. 83–88 (representations and comodules,
   finite-dimensional subcomodules, linearity of affine groups), with
   Conventions p. 3, §1.19 p. 12 and Appendix A.24/A.26 pp. 574–575.
2. J. Swanson (notes), J. Pevtsova (lecturer), *Algebraic Groups Lecture
   Notes*, University of Washington, Fall 2014,
   <https://www.jpswanson.org/notes/alggroups.pdf>. Full text downloaded
   (594,273 bytes, SHA-256 `da33863b…df40ec`, 55 PDF pages) and read over the
   lectures of September 24–October 3 (printed pp. 2–13: Hopf algebras, the
   antiequivalence and its proof, closed subgroup schemes and Hopf ideals) and
   October 20–29 (printed pp. 23–30: rational representations and comodules,
   local finiteness, linearity). The notes follow Waterhouse, *Introduction to
   Affine Group Schemes* (GTM 66); they are the second, independent treatment
   and close the design's second-source gate.

Both URLs are full-text stamped by `source-fetch-check --stamp` (4/4 sources
resolved; stamps with bytes, page counts and hashes are in the coverage file).
The coverage record disposes 52 headings of the two sources over the ranges
read; the only declines are the (ε,S)-automaticity paragraph of Milne 3.4, the
scheme-theoretic kernel functor of Swanson, the directed-union-of-Hopf-
subalgebras fact, and Milne §4(c)–(d)/Swanson Theorem 111 on the B page — each
with its specific reason. Milne works with max-spectra and builds finite
generation into his category of algebras (Conventions p. 3); the scaffold
instead proves the corresponding scheme-theoretic bridge locally, as an
explicit item.

## Inventory (13 A + 2 B items, built once in prerequisite order)

| level | item | kind | role |
|---:|---|---|---|
| 0 | `def-commutative-hopf-algebra-over-a-field` | definition | target category of the antiequivalence |
| 0 | `lem-affine-finite-type-scheme-coordinate-ring-finitely-generated` | lemma | finite type ⟹ finitely generated coordinate ring (declares AC) |
| 0 | `lem-quotient-spectrum-map-is-a-closed-immersion` | lemma | surjective ring map gives a choice-free closed immersion |
| 0 | `lem-general-linear-group-scheme-and-its-coordinate-ring` | lemma | local `GL_n`/`G_m` supplier (the published version is B-homed and unusable as a dependency) |
| 1 | `def-coordinate-hopf-algebra-of-affine-group-scheme` | definition | design item: Δ, ε, S read off the group operations |
| 1 | `lem-hopf-ideal-kernels-and-quotients` | lemma | Hopf ideals, kernels, quotient Hopf structure, factorization |
| 2 | `lem-coordinate-ring-of-affine-group-scheme-is-a-hopf-algebra` | lemma | design proof route: diagram reversal forward direction |
| 2 | `def-rational-representation-and-comodule-of-an-affine-group-scheme` | definition | rational representations, comodules, regular representation |
| 3 | `thm-affine-group-schemes-hopf-algebra-antiequivalence` | theorem | design item: the categorical antiequivalence |
| 3 | `lem-representations-of-affine-group-schemes-are-comodules` | lemma | representation ↔ comodule dictionary and matrix coefficients |
| 3 | `lem-finite-dimensional-subcomodules-contain-elements` | lemma | local finiteness of comodules, choice-free |
| 4 | `thm-closed-subgroup-schemes-correspond-to-hopf-ideals` | theorem | design item: closed subgroups ↔ Hopf ideals (declares AC) |
| 4 | `thm-affine-group-scheme-faithful-finite-dimensional-representation` | theorem | design item: closed immersion into GLₙ |
| 3 | `ex-hopf-algebra-of-a-split-torus` | example | design B item: the split-torus Hopf algebra and μᵣ subgroups |
| 4 | `ex-rational-representation-from-a-comodule` | example | design B item: grading ↔ comodule ↔ representation |

The additions beyond the design's four A items are local prerequisites without
which the design's claims cannot be stated or proved soundly (the general
linear group scheme, the Hopf algebra definition, the finite-type/finite-
generation bridge, the Hopf-ideal lemma, the representation–comodule
dictionary, comodule local finiteness, the choice-free closed-immersion
recognition lemma, and the diagram-reversal lemma). No declared claim was
weakened and no inventory was padded: each added item is consumed by a listed
item.

## Dependencies, well-definedness and choice

- Every `deps` target resolves to a published item at HEAD; the key suppliers
  read for hypotheses, direction and conventions are
  `def-group-scheme-over-a-field`, `def-morphism-and-closed-subgroup-scheme`,
  `lem-closed-subgroup-scheme-valued-point-criterion`,
  `thm-affine-scheme-ring-anti-equivalence`,
  `thm-affine-fibre-product-tensor-ring`,
  `thm-affine-closed-immersions-quotient-rings`,
  `lem-spectrum-compactness-open-cover-to-unit-ideal`,
  `thm-right-exactness-of-tensor-products`,
  `thm-first-isomorphism-theorem-rings`,
  `ex-additive-multiplicative-and-general-linear-group-schemes` and the
  vector-space/tensor items listed on each item.
- Dependency levels were computed with `dependencyLevels` over this batch:
  0,0,0 / 1,1 / 2,2 / 3,3,3 / 4,4 for the A page and 3,4 for the B page,
  matching every `dependency_level` label. No cycle, no forward edge, no
  B-page supplier for any A item; the B items depend only backwards on the A
  page.
- Axiom of Choice: `lem-affine-finite-type-scheme-coordinate-ring-finitely-generated`
  declares AC for exactly one step (a finite distinguished-open cover forces a
  unit-ideal relation, via
  `lem-spectrum-compactness-open-cover-to-unit-ideal`);
  `thm-affine-group-schemes-hopf-algebra-antiequivalence` inherits it for the
  finite-generation statement only;
  `thm-closed-subgroup-schemes-correspond-to-hopf-ideals` inherits it for the
  identification of closed subschemes with quotient spectra. Every other item
  of the pair — including the diagram reversal, the Hopf-ideal lemma, comodule
  local finiteness, the representation–comodule dictionary and the
  faithful-representation theorem in its finitely generated form — is
  choice-free and is scoped that way.
- No item consumes a `proved_here: false` result, and no dependency path
  reaches `deferred-set-theory-beyond-choice`.

## Published observation for the canonical ledger (no repair attempted)

- `lem-affine-algebraic-group-faithful-rational-representation` (published
  2026-09-30, status `published`): its Statement asserts "Nothing here uses the
  Axiom of Choice" (line 52), while its declared `deps` (line 10) include
  `thm-affine-closed-immersions-quotient-rings`, whose own item declares the
  Axiom of Choice in its `deps` and proof note ("AC use: The prime-ideal and
  nilradical assertions in F2 detect the unit ideal and nilpotence…",
  `items/thm-affine-closed-immersions-quotient-rings.md` lines 9 and 38), and
  the lemma uses that supplier at [F3]/line 64 for its closed-immersion step.
  Either the choice-freeness prose is inaccurate or that dependency is
  over-declared. Batch 13 does not depend on the item, so this does not block
  construction; it is recorded for owner reconciliation and the canonical
  ledger. A possible repair, if the owner wants the prose kept, is to replace
  that one dependency with the choice-free direction now scaffolded here as
  `lem-quotient-spectrum-map-is-a-closed-immersion` once it is authored and
  published.
- Placement observation: `ex-additive-multiplicative-and-general-linear-group-schemes`
  (published, `group-schemes-of-finite-type-over-a-field-examples`, the B page
  of the earlier AG-GS-1 pair) is the natural supplier for `GL_n`/`G_m` in this
  pair, but it is homed only on a B page, so it cannot be a dependency of any
  other page. The scaffold therefore rebuilds the needed part locally as
  `lem-general-linear-group-scheme-and-its-coordinate-ring`; the owner may
  prefer to re-home the published example or to author an A-page supplier in
  the AG-GS-1 pair. Evidence: the item appears only in
  `library/scheme-theory/group-schemes-of-finite-type-over-a-field-examples.md`
  (`examples:` list), and five items of this batch would otherwise have had to
  depend on it.
- No other defect was found in this pair's actual prerequisites.

## Cross-batch ledger

`research/frontier-40-geometry-braids-rep-27-batch-13.cross-batch-dependencies.json`
is `[]` and the unified ledger was refreshed: no item or page of this batch
depends on, or is required by, another batch of this run through the frontier
ledger's declared-edge scope. All suppliers are published out-of-run items.

## Checks actually run (exact results at the time of writing)

- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
  → exit 1 at every snapshot taken, reporting only sibling-batch findings
  (initially `empty scaffold inventory` for the 26 batches still in flight);
  no batch-13 page or item ever appears in the errors.
  Focused computation over this batch's manifest: 15 items, 0 errors,
  maximum level 4.
- `node tools/step1-decisions.mjs check --run frontier-40-geometry-braids-rep-27`
  → all 15 batch-13 items close (`ready`); no batch-13 row in `work`.
- `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-13.coverage.json --require-destination`
  → `2 page(s), 52 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-13.pages.json`
  → `15 item(s), 0 normalized, 0 error(s)`; the whole-run variant at the final
  snapshot → `228 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-40-geometry-braids-rep-27-batch-13.pages.json`
  → `15 scoped item(s), 0 error(s), 0 warning(s)`. The whole-run variant at the
  final snapshot reports `228 scoped item(s), 1 error(s)`, and that single error
  is outside this batch's ownership: batch 27's manifest declares the literal
  dependency `AC` on `thm-abelian-variety-dual-and-polarization`; batch 13
  contributes no error to that run. It is left for that batch's owner and the
  engine.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (247 planned
  pages still carry no item list, as expected mid-scaffold).
- `node tools/manifest-integrity.mjs --run frontier-40-geometry-braids-rep-27`
  → `54 page(s) owed, 54 in the manifests`, no scope drift.
- `node tools/source-fetch-check.mjs --coverage research/frontier-40-geometry-braids-rep-27-batch-13.coverage.json --stamp`
  → `4/4 source(s) fetch-verified (4 newly stamped)`; check mode → `4/4
  source(s) resolved`.
- `node tools/extcheck.mjs` → exit 0 ("OK — every recorded-not-proved statement
  is a cited remark with no proof, and every consequence is marked"); no new
  finding attributable to this batch.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27`
  → `refreshed and deduplicated`.

## Escalations and unresolved findings

None for this pair. All 15 items are recorded `ready` with complete proof
strategies and met published prerequisites; no page split is required
(13 + 2 items against the 100-item cap); no new pair or cross-batch
prerequisite is needed. Owner/operator reconciliation and the full engine gate
follow; these readiness records are not independent mathematical approval.
