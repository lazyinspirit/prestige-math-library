# Batch 27 — Finite Abelian Categories and Eilenberg–Watts

## Scope and design reconciliation

Owned pages: A `finite-abelian-categories-and-eilenberg-watts` (order 923), B
`finite-abelian-categories-and-eilenberg-watts-examples` (order 924). I read `CLAUDE.md`,
`AGENTS.md`, `SCHEMA.md`, `WORKFLOW.md`, the generated batch task, the owner authoring
direction `research/frontier-41-ha-dt-29-owner-authoring-direction.md` (binding: it fixes the
HA-25–HA-29 statements to `research/plan-homological-algebra-track.md` plus
`research/eilenberg-watts-expansion/proposed-items.json` and requires them to pass normal
authoring and proof review), the drift review, and the relevant design text: the HA-25–HA-29
conventions (L5405–5466), HA-27 P8 (L5750–5803) and P9 (L5804–5859), B3 (L6181–6194), and the
binding inventories at L6334–6354.

The two task-listed design locations are **not** competing texts: L6334 is the A-page heading
of the binding inventory table and L6348 is the B-page heading of the same table. The
controlling design text is the HA-27 section around them — the HA-25–HA-29 conventions, the
full local proofs P8/P9 and the witnesses B3 — with the inventory tables fixing the item IDs.
I preserved its scope (intrinsic finite categories, the finite projective generator, the
module-model realization, finite right/left exact Eilenberg–Watts with the dual-bimodule
kernel, the adjoint and exactness characterizations, three B witnesses), its left-module
handedness, its "no commutativity, no choice" convention, its warnings (the intrinsic
definition is not "finite length and finite Hom"; projectivity enters through projective
epimorphisms; the Lex/Rex equivalence is not the inclusion of exact functors and does not
respect identities), and its proof route (P8: covers of simples → finite generator → finite
presentations → module equivalence; P9: comparison before presentations, duality, then the
adjoint and exactness characterizations).

`research/plan-spec.json` agrees with the design on page IDs, orders, category, companions and
`requires`; its empty item arrays are the pre-splice planning state, not a conflict. The drift
review recorded `no-drift` for this page. There is **no design–plan conflict for page data**.
There are four **dependency conflicts inside the design text**, recorded under "Dependency and
proof audit" below; the plan controls other design conflicts, so the local closure was adjusted
and each change is itemised.

The manifest has 12 A items and 3 B items: the nine proposed A claims of the binding inventory,
the three B witnesses, and three required local additions on the A page — the general
projective-cover definition (`def-superfluous-subobject-and-projective-cover-in-an-abelian-category`),
the finite-support-family category supporting the B counterexample
(`lem-finite-support-families-of-finite-dimensional-vector-spaces-are-locally-finite`), and the
converse direction of the definition equivalence
(`prop-finite-dimensional-module-categories-are-intrinsically-finite`), which the design's P8
proves inside L3 ("Conversely finite-dimensional A-modules have finite Hom and finite
length ... This proves all the existing intrinsic hypotheses and closes both directions") and
which is factored out so that the finite Eilenberg–Watts and duality items can use it. No
claim, hypothesis or witness was dropped; the A page is far below the 100-item cap and no page
split is needed. The B page depends only on this pair's A items and published suppliers, and no
B item is a supplier of anything else.

## Dependency and proof audit

All 15 items carry explicit `deps` arrays and `dependency_level` labels recomputed from the
graph (max level 6; three items at level 0). Every dependency is a published item on the
declared `requires` pages or on the published category-theory, linear-algebra, modules or
homological-algebra pages reachable from them, or an in-run item of batches 25 and 26. No
target is a B-homed published item (the B-leaf rule), a `proved_here: false` item, a Recorded
result, or a forward reference. There is no cycle; the two in-batch edges that matter for
closure are A12 → A9 and A11 → A8 plus the batch-26 pseudofunctor lemma.

Dependency-order construction (each item built once, in level order): level 0 — the cover
definition (A1), the duality lemma (A7); level 1 — the family lemma (A2), the converse
finiteness proposition (A3), the covering lemma (A4); level 2 — the finite projective
generator (A5); level 3 — the module realization (A6), finite Eilenberg–Watts (A8); level 4 —
the left exact classification (A9); level 5 — the adjoint characterization (A10), the
biequivalence (A11), the exact-kernel corollary (A12); level 6 — the two B examples. The
counterexample (B2) sits at level 2 on the family lemma.

Key design-versus-reality findings, all resolved locally:

1. **The copower lemma of batch 26 cannot carry the finite realization.** The design's L3 deps
   name `lem-copower-presentation-construction-is-left-adjoint-to-generator-hom` (batch 26).
   That lemma assumes a *cocomplete* locally small abelian category and a *small* projective
   generator, and its construction uses copowers indexed by arbitrary sets. A finite k-linear
   abelian category has only finite (co)limits, so the lemma's hypotheses fail and it is not an
   adequate supplier here. The plan's own P8 route says the representing-map argument of P6 is
   "restricted to these finite presentations"; I therefore proved the finite realization
   locally (A6), using the finite presentations from A4/A5, additivity plus finite biproducts
   in place of coproduct preservation, and cokernel universality. The batch-27 manifest has no
   dependency on that batch-26 lemma.
2. **Commutative-ring suppliers cannot carry noncommutative A.** The design's proposed deps for
   the finite right exact theorem name `thm-right-exactness-of-tensor-products` and (for the
   adjoint corollary) `thm-hom-tensor-adjunction-for-modules`; both are published but stated
   for commutative rings, so neither applies to M ⊗_A - with A an arbitrary finite-dimensional
   (noncommutative) algebra. They were replaced by the batch-25 arbitrary-ring suppliers
   `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums` and
   `lem-tensor-hom-adjunction-for-bimodules` (in-run items, verified in the ledger). This is the
   same design-text correction batch 25 recorded for P3/P4.
3. **The P2 comparison and evaluation lemmas are reused by restriction.** The design's P9 says
   "the action and comparison of P2 still exist" for finite modules. The batch-25 proof of the
   action lemma and of the comparison lemma uses only additivity, functoriality on the maps
   ℓ_x: A → X and r_a: A → A, and the tensor universal property, all of which lie in the finite
   module categories; the consumer proof strategies state this restriction explicitly. The
   ledger rows for these edges are `verified` with that evidence; Step 3 must recheck the
   transport, because the suppliers' statements range over all modules while the consumers are
   functors defined only on finite-dimensional modules.
4. **The design's V* ⊗ W supplier is not used by the duality lemma.** The proposed dep
   `thm-hom-from-a-finite-dimensional-space-as-a-tensor-product` does not occur in any proof of
   the duality lemma: the double-dual isomorphism is proved from the dual basis, exactness from
   the splitting of finite vector-space sequences, and the dual-tensor identity of the left
   exact theorem from the tensor–Hom adjunction plus double duality (equation (2.1) of the
   source). The dep was dropped rather than declared unused. If Step 3 finds a place where the
   tensor-Hom identification `V* ⊗ W ≅ Hom(V,W)` is genuinely used, the item can be added with
   the same level (it is published and level 0 in this run).

Other points examined:

- **Well-definedness order.** The comparison τ is constructed before any presentation is
  chosen (A8(ii)), free modules are handled by finite biproducts, and only then is the finite
  presentation used to upgrade τ to an isomorphism by cokernel universality. No presentation
  independence argument is needed.
- **The finite generator is not the arbitrary-coproduct generator.** A5 proves P = ⊕Q_i
  projective (finite biproduct of projectives, via condition 2 of
  `thm-projective-object-characterisations`), separating (simple quotient of the image plus
  projectivity lifting), with A = End(P)^op finite-dimensional, and uses only that the Q_i are
  projective *epimorphisms* — never superfluity of kernels. The statement records that the
  weaker reading of "enough projectives" therefore gives the same conclusions here, and that
  for the finite module categories the published cover theorem realizes the stronger reading.
- **The converse direction and the definition gap.** A3 proves A-mod is intrinsically finite:
  abelian and k-linear by closure in A-Mod, finite-dimensional hom-spaces, finite length
  (dimension strictly decreases), enough projectives from the published finite-dimensional
  cover theorem, and finitely many simples because every simple is a quotient of the regular
  module A and hence a composition factor of A. The published `def-finite-k-linear-abelian-category`
  uses "projective cover" in an abstract abelian category while the published
  `def-essential-epimorphism-and-projective-cover` is stated for modules; A1 supplies the
  general definition and records the agreement. This is a **published-defect observation for
  the canonical ledger**, not an edit: item `def-finite-k-linear-abelian-category` (page
  `tensor-and-fusion-categories`, published), evidence = its Definition clause "(2) ...
  every simple object has a projective cover", while the only cover definition on disk is
  module-scoped; planned supplier = the local definition A1 on this new A page; repair strategy
  = cross-reference from the published definition to a general definition at a later owner
  action (no published content was edited by this batch).
- **B-leaf policy.** Two published items used in the drafts are homed only on B/examples pages
  (`ex-finite-dimensional-vector-spaces-form-a-fusion-category` on
  `tensor-and-fusion-categories-examples`; `ex-cartan-map-for-the-dual-numbers` on
  `grothendieck-groups-and-graded-cartan-pairings-examples`). SCHEMA forbids another page
  depending on a B-homed item, so both were removed from the manifest: Vect_fd's abelianness is
  proved from k-Mod plus closure under finite (co)limits inside A2, and the dual-number facts
  are cited from the A-homed published item
  `fs-every-finite-k-linear-abelian-category-is-semisimple`, whose Refutation computes exactly
  the single simple module S = A/(ε), the projective cover A → S and the non-split sequence
  0 → S → A → S → 0.
- **B witnesses.** B1 shows A-mod has no countable coproduct of copies of A (a coproduct would
  force Hom(X,S) ≅ k^ℕ infinite-dimensional, while all hom-spaces of finite-dimensional
  modules are finite-dimensional), so the coproduct clause of the arbitrary-ring theorem is
  vacuous in the finite categories, while T_S is right exact with right adjoint Hom_A(S,-) and
  kernel S. B3 computes T_S on 0 → (ε) → A → S → 0: the induced map S → S is zero and the
  next map is an isomorphism, so the middle homology is S ≠ 0 and T_S is right exact but not
  left exact; consistently S is not a projective right A-module. B2 uses the family category to
  show clauses (i)–(iii) of the intrinsic definition do not imply (iv), with no generator.
- **Axiom of choice.** No item uses the Axiom of Choice, dependent choice, or any Recorded
  result; no proof or prerequisite path reaches `deferred-set-theory-beyond-choice`. The
  exactness corollary deliberately uses only the choice-free direction 1 ⇒ 4 of
  `thm-projective-module-characterizations` (projective ⇒ summand of a free module) and proves
  that a direct summand of a *finite* free module is projective by lifting finitely many basis
  vectors, avoiding the AC-dependent direction. The counterexample category and the dual-number
  computations are choice-free.
- **Page size and splits.** 12 A items + 3 B items; no split is required and none was made.

## Sources and reading

The owned coverage file `research/frontier-41-ha-dt-29-batch-27.coverage.json` records 25
harvested rows over two sources, each with an explicit locator and disposition. Full text was
fetched and stamped by `tools/source-fetch-check.mjs --stamp` (2/2 resolved, 0 drops; check mode
re-run passes):

1. P. Etingof, S. Gelaki, D. Nikshych, V. Ostrik, *Tensor Categories* (author final version),
   <https://math.mit.edu/~etingof/egnobookfinal.pdf>, 362 PDF pages, SHA-256
   `a40d076197b666d8b3b231ac59748a95f9b311d49ce57f4024c0da8308796db3` (identical to the copy
   read by batch 25, independently fetched here). Read §1.8 "Locally finite (artinian) and
   finite abelian categories", printed pp. 9–11: Definitions 1.8.1, 1.8.3, 1.8.5, 1.8.6 with the
   proof of their equivalence (P = ⊕P_i, A = End(P)^op, F = Hom(P,-) exact and faithful),
   Remark 1.8.7, Definitions 1.8.8, 1.8.13, 1.8.14, Remarks 1.8.9, 1.8.12, Proposition 1.8.10
   with its free-presentation proof, Corollary 1.8.11 with its duality proof, Proposition
   1.8.15's statement only. This is the pair's book/monograph treatment: it supplies the
   intrinsic finite definition, the right-exact representation theorem (Prop. 1.8.10) and the
   left-exact representability corollary (Cor. 1.8.11), all of which are absorbed inline. The
   source's proofs are compressed at exactly the points the design's P8/P9 expand (presentation
   independence, functoriality, the projective-generator realization, the duality computations),
   which P8/P9 and the local items now supply.
2. J. Fuchs, G. Schaumann, C. Schweigert, *Eilenberg–Watts calculus for finite categories and a
   bimodule Radford S^4 theorem*, <https://arxiv.org/pdf/1612.04561v3>, 41 PDF pages, SHA-256
   `a9e7d26bf24dabb35c2faa78daf7c7ecc2916143a69cee2800bd4d939b5b9708`. Read §2.1
   "Notation and background", pp. 5–8: the standing conventions (all algebras, modules and
   bimodules finite-dimensional; A-mod, mod-A, B-bimod-A), Lemma 2.1 with its (L1)–(L3) and
   (R1)–(R4) equivalences, equation (2.1), Lemma 2.2(i)–(ii), Corollary 2.3. This is the second
   independent, algebra-level treatment and is the primary source of the item shapes: Lemma
   2.1(L3) is the left exact Hom classification with kernel (F(A A*_A))* , Lemma 2.1(R3) is the
   right exact tensor classification with kernel G(A A_A), Lemma 2.2(i) the two equivalences
   with 1-cells, and equation (2.1) the dual-tensor identification. Sections 3.1–3.2
   (Definition 3.1 and Theorem 3.2, the categorical triangle for finite linear categories) and
   Section 3.5 (Nakayama functors, Lemmas 3.15–3.16, (3.56)–(3.58)) were inspected only to
   assign the deferred boundary; they are deferred to the Deligne-product and graded pairs.

Watts's original 1960 paper remains unread (AMS serves a JavaScript/cookie challenge; the
scouting history is in `eilenberg-watts-expansion/source-manifest.json`). No claim in this batch
depends on it; the classical statement is fully covered by the two sources above and by the
in-run batch-25 theorem. The coverage gate reports one advisory `coverage-low-yield` warning
(6 of 25 harvested rows scaffolded as dedicated items; the remaining supported results are
absorbed inline into the local items — for instance EGNO's Prop. 1.8.10 into A8, Cor. 1.8.11
and FSS's Lemma 2.1(L3)/(2.1) into A9 — or deferred to their canonical pages). The warning is
surfaced for Alpha rather than papered over.

## Checks at scaffold completion

| Check | Actual result |
|---|---|
| `coverage-checklist.mjs --require-destination` on the owned coverage file | pass: 1 A page, 25 harvested rows, 0 errors, 1 advisory warning (`coverage-low-yield`) |
| `source-fetch-check.mjs --coverage ... --stamp` | pass: 2/2 sources newly full-text stamped (362 and 41 PDF pages); check mode re-run: 2/2 resolved, 0 drops |
| `manifest-deps.mjs` whole run (all manifests) | pass: 359 items, 0 missing, 0 errors |
| `content-policy.mjs --manifest-only` whole run | pass: 359 scoped items, 0 errors, 0 warnings |
| `item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | exit 1: 28 errors, every one an "empty scaffold inventory" for a batch not yet scaffolded; the 15 batch-27 items have no cycle or label error (also rechecked across batches 25+26+27 alone: 0 errors, labels equal computed levels) |
| `validate-plan.mjs research/plan-spec.json` | exit 0: page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids among pages carrying item lists |
| `manifest-integrity.mjs --run` | pass: 58 pages owed, 58 in the manifests, no scope drift |
| `extcheck.mjs --quiet` | exit 0: 40 pre-existing published unproved-dependency warnings outside this batch; no batch-27 path uses a Recorded item |
| `frontier-dependency-ledger.mjs refresh --run ... --require-reviewed` | exit 1 as expected: other batches still owe inputs; batch 27's input has 15 reviewed edges (14 item, 1 page), all `verified`, and all declared edges are matched |
| Step-1 decision currency (`step1-decisions.mjs check`) | exit 1 whole-run: 95 open rows in other batches (mostly items with no record yet); all 15 batch-27 items are closed, current and backed by `research/frontier-41-ha-dt-29-step1-<item>.json` records with the examined dependency lists |

These readiness records and mechanical checks establish a complete scaffold route with
adequate, examined prerequisites. They are not an authored proof or an independent
mathematical approval; Step 3 must author every item and recheck these arguments against the
final consumer uses, and Steps 5–8 own audit and adjudication.

## Timing and staleness note

Batches 25 and 26 were complete and stable when this scaffold recorded its decisions (the run's
status showed no workers in flight; batch 26's manifest, coverage, notes and ledger input were
written before this batch read them). The step-1 readiness hashes cover the transitive closure
of each item's manifest contract and the published item files; if either supplier batch is
reworked by a later scaffold-fix round, the affected batch-27 records become stale and must be
refreshed by an authorized writer before the Step-1 gate is retried.

## Record-time re-run (2026-10-04T14:18Z)

Immediately after the decisions were recorded the battery was re-run on the live tree (other
batches were scaffolding concurrently): `manifest-deps` 360 items, 0 missing, 0 errors;
`content-policy --manifest-only` 360 scoped items, 0 errors, 0 warnings;
`coverage-checklist --require-destination` on batch 27: 25 rows, 0 errors, 1 advisory
low-yield warning; `source-fetch-check` check mode: 2/2 resolved; `validate-plan` exit 0;
`item-dependency-levels check` exit 1 with 28 errors, all empty inventories of batches not yet
scaffolded, none involving batch 27; `step1-decisions check` exit 1 with 95 rows in other
batches, none involving batch 27. The 15 readiness records were recorded in prerequisite order
(A1, A7, A2, A3, A4, B2, A5, A6, A8, A9, A12, A10, A11, B1, B3, i.e. nondecreasing dependency
level) and each is current against the transitive closure of its manifest contract, the
batch-25/26 manifests and the published item files at that time.

Addendum (same session, 2026-10-04T14:20Z): a literal `\u2013` escape artifact in the B1
statement was corrected to the intended en dash after the first round of records; the item
content is unchanged, and B1's readiness record was re-recorded at 14:20:35Z against the
corrected manifest (the stale hash correctly rejected the old record first). All other records
were unaffected.
