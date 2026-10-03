# Step 3b — pair `hilbert-functors-and-projective-hilbert-schemes`

- Run: `frontier-38-owner-30`, batch 29, role alpha-high.
- A page: `hilbert-functors-and-projective-hilbert-schemes` (order 905,
  `scheme-theory`). B page:
  `hilbert-functors-and-projective-hilbert-schemes-examples` (order 906).
- Owned items (26): 22 A + 4 B, exactly the batch-29 manifest inventory.
- Scope receipt:
  `research/frontier-38-owner-30-step3a-review-hilbert-functors-and-projective-hilbert-schemes.json`
  (`sufficient`, bound to the current A+B manifest hash).

## Entry obligations

1. Audit every owned item scaffold for authoring readiness (hypotheses,
   sources, direct suppliers, proof route) and repair local gaps.
2. Author the A and B pages `library/scheme-theory/<id>.md` (not yet on disk).
3. Write the batch-29 proof contracts and pass `tools/proof-contract.mjs --strict`.
4. Run explicit-path precheck, rendercheck, proof-layout, content policy,
   dependency-level checks and `validate-plan` for batch 29.
5. Record Step-3 item decisions with `tools/step3-decisions.mjs record-item`.
6. Reconcile every flagged supplier against its actual proof use; escalate
   anything unresolved.

## Checkpoint log

- [entry] Report created. Items and pages to be audited in the dispatch's
  dependency-level order (level 0 first, ties by page order and item ID).
- Known blocker to verify: `proof-layout` fails to start against the sibling
  `prestige-intelligence/web` checkout (raw JSX under Node 22.22.1). The
  packet used `PRESTIGE_APP_DIR=/tmp/ag885-render-app` as a read-only renderer
  workaround; the same will be recorded on every renderer run actually made.

## Audit record, in dispatch dependency order

Every item was read in full, together with the published statements of all of
its declared suppliers, and each inference, hypothesis, quantifier and
well-definedness condition was checked against those statements. The item
files were authored by the owner-authorized local prerequisite packet
(`research/frontier-38-owner-30-local-prereq-905.md`) before this dispatch;
this Step-3b pass audited them independently and did not assume their
completeness.

Level 0: `def-castelnuovo-mumford-regularity` (definition, twist and zero
cases checked); `def-projective-morphism-coherent-bundle-convention`
(**repaired**, see below); `lem-hilbert-euler-polynomial-for-ample-
polarization` (induction on support dimension, consecutive very ample powers,
all-integer antiderivative, uniqueness, equivalence of formulations);
`lem-hilbert-family-vanishing-locus` (perfect complex, `Hom(Q,B)` identity,
zero locus of the section, gluing); `lem-hilbert-polynomial-finite-scheme-
length` (Artinian decomposition, rank-one local factors, affine vanishing,
constant `d` for every integer twist); `lem-hilbert-proper-relative-ample-
projectivity` (finite affine cover, common Veronese multiple, chart
surjectivity, properness gives closed image); `lem-hilbert-rank-flattening-
finite-module` (open `dim<=e` locus, Nakayama presentation, `D_T=0`
criterion, gluing, closedness with nilpotents).

Level 1: `def-hilbert-functor-of-flat-projective-subschemes` (test category,
finite presentation, flatness, fibrewise eventual membership, permitted
per-fibre cutoff); `lem-hilbert-regularity-propagation` (faithful-flat
descent, associated-points hyperplane, induction on `n` and on the twist,
multiplication square, iterated multiplication and global generation);
`lem-hilbert-relative-grassmannian-quotients` (matrix charts, Plücker closed
immersion, coherent-source relation cut, `P(V)` for coherent `V`,
base change).

Level 2: `lem-hilbert-families-fpqc-descent` (Amitsur equalizer, ideal
descent, finite presentation and flatness descent, polynomial loci open and
closed); `lem-hilbert-relative-regularity-and-base-change` (perfect-complex
splitting, Nakayama surjectivity of evaluation, rank = fibre polynomial,
exact-sequence clause); `lem-hilbert-uniform-regularity-fixed-polynomial`
(recursive `R(n,p,Q)`, `h^1` decreases strictly while positive, ambient term
`p*binom(n+a,n)` cancels, fixed-sum generalization).

Level 3: `lem-hilbert-regularity-independent-of-ambient-dimension`
(recursion `a=b(Delta P)`, `b(P)=a+max(0,P(a))+1`, ambient term cancels
exactly); `lem-hilbert-uniform-sections-after-flat-pullback` (**repaired**,
see below); `lem-hilbert-valuative-flat-closure` (finite freeness over a
valuation ring, saturation over residue fields, Nakayama generation of the
ideal tail, flat chart rings, uniqueness by torsion-freeness).

Level 4: `lem-hilbert-universal-scheme-theoretic-flattening` (**repaired**,
see below).

Level 5: `lem-hilbert-projective-space-construction` (uniform degree,
section sequence of vector bundles, Grassmannian reconstruction, two-sided
inverse); `cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-
family` (**repaired**, see below).

Level 6: `lem-hilbert-coherent-projective-bundle-construction` (local
embeddings at one degree, factorization through `(Sym^r E)_T`, gluing of
local flattening strata, valuative properness, closed immersions);
`lem-hilbert-noetherian-base-fixed-polarization` (substituted polynomial
`P(dt)`, vanishing locus cutting `X_U`, valuative closure in `X_R`,
determinant of the section bundle as Plücker restriction).

Level 7: `thm-hilbert-scheme-represents-projective-flat-families` (global
ambient representative, coproduct over `M`, open and closed `L`-stratum,
local identification with the Noetherian representative, global coherent
projective-bundle embedding into `P_S(E')`, H-projectivity clause,
arbitrary base change).

Levels 8-9: `lem-universal-family-and-hilbert-polynomial-strata`, four B
items (finite points on `P^1`, dual-number nonflat counterexample, flat
fat-point base change, non-quasi-compactness of the full `P^1` functor).

## Repairs made in this pass

1. `lem-hilbert-universal-scheme-theoretic-flattening` — the proof's
   common-tail argument for the nonflat family needed the uniform regularity
   bound and the local constancy of the polynomial in a flat family. Added
   the two now-cited suppliers to `[F1]` and to `deps`
   (`lem-hilbert-uniform-regularity-fixed-polynomial`,
   `cor-euler-characteristic-locally-constant-flat-proper-family`), and
   step 4.1 now names `[F1]` for local constancy. Both added deps are already
   transitive dependencies, so the `dependency_level` (4) is unchanged.
2. `def-projective-morphism-coherent-bundle-convention` — the relatively
   ample polarization mentioned in the Definition is now linked
   `[[def-relatively-ample-invertible-sheaf]]` and that published definition
   was added to `deps` (Step-1 note 3). Level stays 0.
3. `lem-hilbert-uniform-sections-after-flat-pullback` — Step-1 note 1
   repaired: the filtered-colimit step now writes `B` as a filtered colimit
   of finitely generated **Z**-subalgebras carrying a descended
   finite-presentation model, matching the exact hypothesis of
   `lem-filtered-colimit-flat-fp-sheaf-stage` (a finitely generated
   `A`-subalgebra of a non-finitely-generated Noetherian `A` need not be
   finitely generated over `Z`). Statement unchanged.
4. `cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family`
   — the two labelled facts were moved from the Counterexample preamble into
   a `## Facts & Assumptions` section so the parseable facts grammar (and the
   strict contract) sees them; mathematics unchanged.

Step-1 note 2 (`lem-hilbert-regularity-propagation` steps 2.1/3.1 read as one
induction on `n`) was rechecked and needs no repair: 2.1 proves `F_H`
`m`-regular, and 3.1 then applies the full `(n-1)`-statement to `F_H`.

## Steps, contracts and checks actually run

- `PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs <the 26
  owned item paths>` — `proof-layout: 26 items, 66 steps, 0 defects`, exit 0
  (the workaround is required because the configured sibling web checkout
  fails to load raw JSX under Node 22.22.1; no mathematical pass is inferred
  from the failure of the default path).
- `node tools/tsx-run.mjs tools/precheck.mts <26 paths>` — 23 proof-bearing
  items checked, 0 failing.
- `node tools/rendercheck.mjs <26 items + the 2 new pages>` — OK, 28 files.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-29.pages.json`
  and `--manifest-only` — 26 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-29.proof-contracts.json
  --strict` — 26/26 items, 0 errors, 0 warnings. The new
  `research/frontier-38-owner-30-batch-29.proof-contracts.json` records every
  fact→source citation with an exact quote and its consuming steps, every
  numbered step with claim and inputs, and all eight standard boundary
  dispositions per item.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-29.pages.json`
  — 26 items, 0 errors; item front-matter deps equal manifest deps for all 26
  (checked mechanically).
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` —
  0 errors; all 26 manifest `dependency_level`s equal the computed levels;
  the level-0 repairs do not change any level.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0.
- `node tools/manifest-integrity.mjs --run frontier-38-owner-30` — 60/60
  pages, no scope drift.
- `node tools/tsx-run.mjs tools/author-check.mts frontier-38-owner-30 29` —
  ok: precheck, rendercheck, content-policy-items and proof-contract all
  true; receipt `research/frontier-38-owner-30-author-check-29.json`.
- `node tools/depcheck.mjs` — no diagnostic mentions any owned item (the 108
  repository-wide errors are unrelated published debt, e.g.
  `thm-banach-fixed-point`); `extcheck` exit 0; `fwdcheck` errors are
  `link-unplanned` rows in other, still-unauthored batches, none owned here;
  `pathcheck` exit 0 with pre-existing `scheme-theory` category/pathway
  warnings.
- Pages authored: `library/scheme-theory/hilbert-functors-and-projective-
  hilbert-schemes.md` (22 items) and
  `library/scheme-theory/hilbert-functors-and-projective-hilbert-schemes-
  examples.md` (4 items in `examples`), both render.
- Step-3 item decisions: all 26 recorded with `tools/step3-decisions.mjs
  record-item` (`accept` for 23, `repaired` for
  `def-projective-morphism-coherent-bundle-convention`,
  `lem-hilbert-universal-scheme-theoretic-flattening`,
  `lem-hilbert-uniform-sections-after-flat-pullback` and
  `cex-fibrewise-subschemes-without-flatness-do-not-form-a-hilbert-family`),
  confidence 1, examined dependency lists, and concrete evidence.
  `step3-decisions check --phase final` shows no work row for any owned item;
  the 3a scope receipt remains current because no id, title, kind or manifest
  statement changed.

## Added suppliers and dependency changes (for Step 4)

Three batch-manifest item objects changed relative to the pre-author
inventory, so `splice-plan --verify` will report our page until Step 4
re-splices (`splice-plan --run frontier-38-owner-30 --batch 29 --update`):

- `def-projective-morphism-coherent-bundle-convention`: `+def-relatively-
  ample-invertible-sheaf`.
- `lem-hilbert-universal-scheme-theoretic-flattening`: `+cor-euler-
  characteristic-locally-constant-flat-proper-family`,
  `+lem-hilbert-uniform-regularity-fixed-polynomial`.
- `lem-hilbert-uniform-sections-after-flat-pullback`: proof wording only; no
  deps change (the item object still differs from the plan's copy).

All three additions are already-published items, so no in-run supplier is
introduced, the batch cross-batch dependency input stays empty, and no
dependency level changes. `validate-plan` passes on the current plan-spec.

## Published concerns

No published defect was confirmed in any supplier consumed by this pair. The
published statements used as suppliers were opened and checked against their
uses (perfect complex, Euler polynomial, hyperplane vanishing, ample powers,
valuative criterion, projective-bundle line quotients, relative Proj base
change, closed-subscheme saturated ideals, rank strata, generic flatness,
Nakayama, associated primes, choice conventions). Unrelated repository-wide
`depcheck`/`fwdcheck` debt in other batches was recorded above and left
untouched for the serial reconciler.

## Open obligations

1. Step 4 must re-splice batch 29 so the three changed item objects propagate
   into `research/plan-spec.json` (the plan currently holds the pre-repair
   deps and proof wording).
2. `proof-layout` continues to need the read-only renderer checkout of
   `tools/paths.mjs` (configured sibling checkout fails under Node 22.22.1);
   this is an environment limitation, not an item defect, and is recorded
   honestly rather than papered over.
3. Independent Steps 5-8 review follows; no escalation is left open for this
   pair, and every owned item decision is closed on current hashes.

## Outside finding routed to its owner (blocks the shared ledger refresh)

`node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
currently fails with `YAMLParseError: Invalid escape sequence \c` because the
frontmatter of `items/def-local-oriented-intersection-sign.md` (a batch-12
differential-topology item, **not owned here**) contains a double-quoted
`locator` with the raw text `$P\cap Q$`. The refresh parses every manifest
item's frontmatter, so any consumer batch is blocked until the batch-12 owner
quotes or escapes that value. The batch-29 consumer input
`research/frontier-38-owner-30-batch-29.cross-batch-dependencies.json` is a
valid empty array and needs no refresh itself: my three dependency additions
are all already-published items, so no cross-batch edge exists. Four refresh
attempts were made and each failed on the same sibling-frontmatter parse
error; the unified ledger therefore awaits the batch-12 repair and the
serial reconciler.
