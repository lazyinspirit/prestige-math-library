# Step 3b — pair audit and authoring: rouquier-complexes-and-categorical-braid-relations

- Run: `frontier-40-geometry-braids-rep-27` (batch 9, role `alpha-high`, label
  `step3b-pair-rouquier-complexes-and-categorical-braid-relations-ad78bbdf860e57d2`).
- A page: `rouquier-complexes-and-categorical-braid-relations` (order 761,
  `braid-groups`, 15 items); B page:
  `rouquier-complexes-and-categorical-braid-relations-examples` (order 762, 4 items).
- Scope review: `...-step3a-pair-rouquier-complexes-and-categorical-braid-relations.md`
  recorded `sufficient`; manifest statements, titles and kinds preserved.
- Both page files under `library/braid-groups/` are written (status `draft`) and
  list the 15 A items / 4 B examples respectively.

## Owned IDs, final status, decisions

| level | item | page | decision | notes |
|---|---|---|---|---|
| 0 | def-positive-and-negative-rouquier-generator-complexes | A | accept | |
| 0 | def-rouquier-canonical-comparisons-between-standard-graph-tensors | A | accept | |
| 0 | lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative | A | accept | |
| 1 | def-coherent-action-of-a-group-on-a-category | A | **escalate** | supplier `def-weak-action-of-a-group-on-a-category` absent |
| 1 | def-rouquier-complex-of-a-braid-word | A | accept | |
| 1 | lem-opposite-rouquier-generator-complexes-are-homotopy-inverse | A | accept | |
| 1 | lem-rouquier-complexes-satisfy-far-commutativity | A | accept | |
| 1 | lem-rouquier-complexes-satisfy-the-three-term-braid-relation | A | accept | |
| 1 | lem-rouquier-generator-complexes-have-canonical-derived-graph-models | A | accept | |
| 2 | lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps | A | repaired | statement clause and proof route corrected |
| 2 | ex-the-rouquier-complex-of-a-positive-three-strand-braid | B | accept | |
| 2 | ex-the-three-term-rouquier-braid-equivalence-in-type-a-two | B | repaired | missing dep added |
| 3 | lem-rouquier-normalized-comparison-isomorphisms-are-transitive | A | repaired | missing dep added |
| 4 | thm-rouquier-complexes-form-a-coherent-braid-group-action | A | accept | step 4.1 reference to a non-existent step corrected to 1.1/2.1/3.1/3.2 |
| 4 | ex-normalized-comparison-maps-around-a-relation-loop | B | accept | |
| 5 | thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence | A | accept | |
| 5 | thm-rouquiers-two-braid-category-is-strict-rigid-monoidal | A | repaired | statement pointer to later proposition unlinked (claim unchanged) |
| 6 | prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator | A | accept | |
| 7 | cex-isomorphic-hecke-classes-do-not-by-themselves-prove-homotopy-equivalent-complexes | B | repaired | malformed scaffold restructured |

All 19 decisions are recorded with `tools/step3-decisions.mjs record-item`
(`accept`/`repaired` at confidence 1 with examined dependency lists; `escalate`
for `def-coherent-action-of-a-group-on-a-category`). No `--owner` flag was used.
Dependency levels were recomputed with
`node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`;
at a run when the global check passed, all 894 items matched; the current
global run fails only on 45 rows belonging to other, concurrently edited
batches, and none of this pair's items is among them.

## Repairs made during this session (evidence)

1. `lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps`:
   the scaffold phrasing "the internal-degree-zero part of Hom is
   one-dimensional and all other internal degrees vanish" is false for the
   library's graded Hom (the graded endomorphism object of the unit is the
   polynomial ring $R$, so nonzero even internal degrees exist). The statement
   now asserts, correctly, that the Hom space of degree-zero morphisms is
   one-dimensional with a generator in internal degree zero, matching Rouquier
   §3.3.1. The unsupported "$K$-projectivity of word complexes" step was
   removed (their terms are free on each side, not over $R^e$); the proof now
   routes through the standard equivalence property of an invertible object
   using the published items
   `thm-every-equivalence-can-be-made-an-adjoint-equivalence`,
   `prop-an-adjoint-equivalence-is-an-adjunction-with-invertible-unit-and-counit`
   and `thm-equivalent-encodings-of-an-adjunction`, together with the
   associativity/unit coherence of
   `thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility`.
2. `cex-isomorphic-hecke-classes-...`: had no `**Given:**`, nested wikilinks
   inside tag brackets, and no `proof_strategy`; restructured to
   `Statement refuted` / `Facts & Assumptions` / `Counterexample` (steps under
   the Counterexample heading, as `proof-layout` requires) with valid tags.
3. `thm-rouquier-complexes-form-a-coherent-braid-group-action`: step 4.1
   referenced "steps 1.1-2.2", where 2.2 does not exist; corrected to the
   existing steps (1.1, 2.1, 3.1, 3.2).
4. Two items cited suppliers absent from their `deps`
   (`def-positive-and-negative-rouquier-generator-complexes` in the type-$A_2$
   example; `def-rouquier-complex-of-a-braid-word` in the transitive-system
   lemma); both deps were added and the manifest resynced.
5. `thm-rouquiers-two-braid-category-is-strict-rigid-monoidal`: its statement's
   final pointer to the later decategorification proposition was converted to
   prose (the spine may not rest on a later item); the claim is unchanged.
6. Frontmatter YAML escapes (`\cdots`, `\kappa`, `\sigma`, `T_\beta`) were
   doubled, and two multi-line `$$` displays were collapsed to one source line;
   `rendercheck` is clean for all 21 files.

## Flagged supplier (escalation, open)

- Supplier: `def-weak-action-of-a-group-on-a-category` (sibling pair
  `categorical-braid-actions-and-decategorification`, batch 8, order 757).
- Consumer: `def-coherent-action-of-a-group-on-a-category` (this pair, A page,
  level 1), consuming passage: the "Relation to a weak action" paragraph of the
  definition.
- Status: at handoff `items/def-weak-action-of-a-group-on-a-category.md` still
  does not exist on disk (the sibling page lists the id; no file). The consumer
  is fully authored and passes all local gates; its decision stays `escalate`
  and the batch-9 cross-batch row stays open. Remedy: author the supplier, then
  verify that the weak-versus-coherent clause matches the consumer text and
  re-record the decision.

## Checks actually run (all on the final input state unless noted)

- `node tools/tsx-run.mjs tools/precheck.mts <19 item paths>` — 15 proof-bearing
  items PASS (canonical step layering), 4 definitions not applicable.
- `node tools/rendercheck.mjs <19 items + 2 pages>` — OK: no wikilink in math,
  no nested/unbalanced delimiters, no multi-line display, KaTeX parses every
  span, YAML parses every frontmatter.
- `node tools/proof-layout.mjs <19 item paths>` — 19 items, 68 steps, 0 defects.
- `node tools/content-policy.mjs research/frontier-40-geometry-braids-rep-27-batch-9.pages.json`
  — 19 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-40-geometry-braids-rep-27-batch-9.proof-contracts.json --strict`
  — 0 errors over 19/19 items (contract file created this session; boundaries
  and citations regenerated with `tools/regen-contract-entries.mjs`).
- `node tools/boundary-audit.mjs <batch-9 contracts> --fail-on-contradicted --fail-on-template`
  — 152 rows, no template clusters, no contradicted dispositions.
- `node tools/citation-fidelity.mjs <batch-9 contracts> --fail-on-missing-quote`
  — 95 citations, every quote found, no widening candidates.
- `node tools/depcheck.mjs --items-file <this pair's 19 ids>` — no findings for
  this pair (no `cited-not-in-deps`, no unresolved links/cycles). The remaining
  two hard errors in that focused run are `b-leaf-content` findings in other
  batches (`lem-finite-etale-lifting-over-complete-dvr`,
  `lem-blowup-charts-of-the-quadric-cone`).
- `node tools/validate-plan.mjs research/plan-spec.json` — page order acyclic
  and consistent; only pre-existing redundant-prereq warnings elsewhere.
- `node tools/splice-plan.mjs --run frontier-40-geometry-braids-rep-27 --verify`
  — pre-splice drift only: every batch manifest (including batch 9) carries
  items where the plan records 0, i.e. the plan has not yet been spliced with
  item lists. This is the expected Step 4 reconciliation input; no batch-9
  statement/kind/title mismatch was found.
- `node tools/step3-decisions.mjs check --run frontier-40-geometry-braids-rep-27 --phase scope`
  — closed; `--phase final` records the pair's only open item as the escalated
  `def-coherent-action-of-a-group-on-a-category`.

## Cross-pair observations (not owned here; for the serial reconciler)

- `items/def-termwise-hochschild-homology-complex-of-a-rouquier-complex.md`
  cites `def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization`
  in Statement/Facts without a `deps` entry.
- `items/thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology.md`
  cites `def-khovanovs-hhh-rouquier-generator-complexes` in Statement/Facts
  without a `deps` entry.
- `node tools/fwdcheck.mjs` and `node tools/extcheck.mjs` currently fail on
  other batches' items (forward references and an unused external_refs row);
  none of those findings names an item of this pair.

## Open obligations at handoff

1. The escalated supplier above (`def-weak-action-of-a-group-on-a-category`);
   the consumer is authored but its decision must not be cleared before the
   supplier exists and the clause is re-verified.
2. Run-wide pre-splice plan drift (all manifests vs plan item lists) is
   reported here for Step 4; batch 9's items are otherwise consistent.
3. No published-content defect was confirmed by this session; no published
   library item was edited.

## No Choice

No item of this pair uses a choice principle; all constructions are termwise
canonical, the only choices (a representative word per braid) are absorbed by
the canonical comparison system, and the categorical equivalence-to-adjunction
conversion used in the repaired lemma is the constructive published theorem.
