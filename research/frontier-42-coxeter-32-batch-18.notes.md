# Batch 18 Step 1 scaffold — Finite Reflection Length and Orthogonal Moved Spaces

Run: `frontier-42-coxeter-32` · pair `finite-reflection-length-and-orthogonal-moved-spaces`
(A order 1752, B order 1753, `coxeter-groups`, design label CG-21). Outputs:
`research/frontier-42-coxeter-32-batch-18.pages.json` (4 A + 3 B items), this note,
`research/frontier-42-coxeter-32-batch-18.coverage.json` (29 harvested rows),
`research/frontier-42-coxeter-32-batch-18.cross-batch-dependencies.json` (44 reviewed consumer edges:
43 item + 1 page) and seven item-readiness records
`research/frontier-42-coxeter-32-step1-<id>.json`. Attempt 1 of the batch.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md` (read first; binding),
  the design `research/plan-coxeter-groups-track.md` §CG-21 (lines 355–367), the machine inventory
  `research/coxeter-scaffold/inventory.json` (CG-21), `definition-justifications.json` (the definition's
  justifier is exactly `thm-cg-carter-reflection-length-and-absolute-order`), the native A/B prose
  (`library/coxeter-groups/finite-reflection-length-and-orthogonal-moved-spaces{,-examples}.md`), the
  independent audit `research/coxeter-scaffold/independent-audit.md` (its only CG-21-relevant line places
  finite reflection length after finite chamber geometry and before invariant degrees, which this batch
  satisfies) and the source report `research/coxeter-scaffold/combinatorial-source-report.md`
  §"Reflection length, absolute order, noncrossing partitions and Cambrian scope". The drift review
  (`research/frontier-42-coxeter-32-alpha-step1-drift.md`, §`finite-reflection-length-and-orthogonal-moved-spaces`)
  records **VERDICT: no-drift**: "No prerequisite gap. The Wall-form and shortening proofs remain draft
  obligations." No plan edge or ordering amendment applies to this pair.
- **Preserved contracts.** The four designed local supplier contracts keep their exact ids, kinds and relative
  order: `def-cg-reflection-length-absolute-order-and-moved-space`,
  `lem-cg-orthogonal-wall-form-and-subspace-restriction`,
  `lem-cg-reflection-factorizations-and-independent-normals`,
  `thm-cg-carter-reflection-length-and-absolute-order`, with the definition justifier exactly
  `thm-cg-carter-reflection-length-and-absolute-order` as recorded in `definition-justifications.json`.
  Their design warnings are kept: the restriction element $A_U$ need not lie in $W$ (exhibited in the
  plane-rotation example); the rigidity converse is claimed only under a common upper bound (exhibited as
  not removable in the $I_2(4)$ model); the identification $V\cong V^*$ is used only through the batch-17
  arrangement page.
- **B companion (3 items).** Exact ids: `ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5`,
  `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation`,
  `ex-cg-moved-space-intersection-is-not-a-meet-in-a3`. They realise the design's three B checks (compare
  the two lengths of a long transposition in $S_5$; the Wall form of a plane rotation; arbitrary subspace
  intersection does not produce the noncrossing meet). The plane-rotation example additionally carries the
  explicit $I_2(4)$ witness $A,A^2$ showing that the theorem's common-upper-bound hypothesis is not
  removable; that witness is a mathematically necessary local addition supporting the design's own warning
  ("the common-upper-bound hypothesis is indispensable") and is not a new supplier contract.

## Plan-spec comparison and recorded conflicts

`research/plan-spec.json` agrees with the task and design on the pair ids, orders 1752/1753, category
`coxeter-groups`, companion ids and the A page's `requires`
(`finite-reflection-arrangements-and-spherical-coxeter-complexes`). Its item arrays for these two pages are
empty, exactly as for every new page of this run, so no item-level plan text can conflict; the design's
local supplier contracts are the item-level authority, and no plan text was edited.
**No design-versus-plan conflict exists.**

### Inventory edges dropped, rerouted or added (with reasons)

The inventory attaches the same page-level `depends_on` list
(`thm-cg-finite-parabolic-longest-element-and-opposition`) to all four contracts.

- **Dropped:** `thm-cg-finite-parabolic-longest-element-and-opposition` (batch 17) from all four items.
  No item of this batch consumes it: the shortening argument of the factorization lemma uses the batch-17
  tiling theorem's point-stabiliser clause $\operatorname{Stab}_W(x)=wW_Iw^{-1}$ and the Wall restriction
  lemma, and the theorem's rigidity uses those two again; the longest-element theorem is neither cited nor
  needed, exactly as the page-level inheritance artifact recorded by batch 15 for its own dropped edges.
  The **page-level** `requires` edge to `finite-reflection-arrangements-and-spherical-coxeter-complexes` is
  preserved in the manifest (it is a reading-order prerequisite of the plan, and it stays).
- **Rerouted through the arrangement page:** the chamber, face, root-hyperplane and finiteness data used by
  the factorization lemma are consumed from `def-cg-finite-reflection-arrangement-and-spherical-chambers`
  and `thm-cg-finite-chamber-tiling-and-coset-face-identification` (batch 17), not re-minted here.
- **Added (transitive closure of the proof route, all already scaffolded or published):** the batch-7
  root–reflection dictionary and faithfulness (`thm-cg-root-inversion-formulas-and-strong-exchange`,
  `thm-cg-root-length-criterion-and-faithfulness`), the batch-4 rank-two and conjugation lemmas, the
  published finite-dimensional linear-algebra suppliers (orthogonal decomposition, orthogonal projection,
  adjoints, isometry characterisation, double orthogonal complement, rank–nullity, the finite-union of
  proper subspaces lemma) and the published poset suppliers (`def-partial-order`,
  `def-graded-poset-and-rank`). No promise was weakened and no item was added beyond the four designed
  contracts plus the three companion examples.

## Dependency levels (in-run only)

Computed with `tools/item-dependency-levels.mjs`; published suppliers do not raise a level.
`node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` reports **no cycle, dependency or
label error naming any batch-18 item** (the errors it reports are `empty scaffold inventory` for the pairs
of batches 23 and 25–32, and other in-flight units, which are outside this batch's scope). The labels
written into the manifest are:

| level | item |
|---|---|
| 14 | `def-cg-reflection-length-absolute-order-and-moved-space` |
| 15 | `lem-cg-orthogonal-wall-form-and-subspace-restriction` |
| 16 | `lem-cg-reflection-factorizations-and-independent-normals` |
| 17 | `thm-cg-carter-reflection-length-and-absolute-order` |
| 18 | `ex-cg-simple-and-reflection-length-of-a-long-transposition-in-s5` |
| 18 | `ex-cg-wall-form-and-line-restrictions-of-a-plane-rotation` |
| 18 | `ex-cg-moved-space-intersection-is-not-a-meet-in-a3` |

No item depends on a later item of this page or of another page of the run (the definition's `justified_by`
target is its own consumer and is part of its audit closure by design; both records share one hash).

## Dependency verification (examined, not assumed)

Every declared `deps` target was checked to exist on disk or as an in-run scaffold contract, and its
statement was read for adequacy (hypotheses, direction, conventions and axiom strength):

- **Batch 2** — `def-hh-coxeter-matrix-word-group-and-length`: the presented group $W$, its universal
  property, the length function $\ell$ as a least word length and $W_J$; the generation by $S$ used for the
  existence of $\ell_T$, and `thm-hh-parabolic-minimal-representatives-and-length-additivity` (4): the type
  $A$ identification $s_i\mapsto(i\ i+1)$ with $\ell=$ inversion number, consumed by the two type-$A$
  examples.
- **Batch 4** — `def-cg-real-coxeter-form-and-reflection` ($V=\mathbb R^S$, $B$, the reflections $r_a$ and
  the reflection formula), `def-cg-canonical-reflection-homomorphism` ($\rho$, $\Phi$, $T$),
  `lem-cg-reflection-representation-descends-and-root-norms` (2) and (4) ($\rho$ preserves $B$;
  $\rho(wsw^{-1})=r_{\rho(w)e_s}$), `lem-cg-reflection-form-invariance-and-rank-two-orders` (2) and (3)
  (linear involutions with fixed hyperplane; the rank-two matrix, trace $2\cos(2\pi/m)$ and order $m$).
- **Batch 7** — `thm-cg-root-inversion-formulas-and-strong-exchange` (1) (the root–reflection dictionary
  $t_\alpha\leftrightarrow\alpha$ with $\rho(t_\alpha)=r_\alpha$) and
  `thm-cg-root-length-criterion-and-faithfulness` (3) (faithfulness of $\rho$), used to move between roots
  and elements of $T$ and to conclude $w=1$ from $\rho(w)=\mathrm{id}$.
- **Batch 13** — `def-cg-coxeter-diagram-components-and-finite-type` (finite type) and
  `thm-cg-finite-type-positive-definite-criterion` (1)–(2) ($W$ finite $\iff B$ positive definite; the
  isomorphism $b$), the source of positive definiteness throughout the page.
- **Batch 17** — `def-cg-finite-reflection-arrangement-and-spherical-chambers` (the transferred chamber
  system, the open faces $wC_I$, the root hyperplanes $H_\alpha$ and finiteness of the arrangement) and
  `thm-cg-finite-chamber-tiling-and-coset-face-identification` (1) and (3) ($V$ is the union of the closed
  chambers; the open faces partition $V$ and $\operatorname{Stab}_W(x)=wW_Iw^{-1}$). The defective
  infinite-$m$ union sentence of `lem-cg-dual-action-and-chamber-faces-exist` (3)(ii) is **not** consumed
  here (this page is finite type throughout and uses the finite face identification).
- **Published suppliers** — statements read for the interfaces actually consumed: orthogonal decomposition
  and orthogonal projection, adjoints and their algebra, the finite-dimensional isometry characterisations
  ($T^*T=I$), double orthogonal complement and dimensions, rank–nullity, the finite-union of proper
  subspaces lemma, partial order and graded poset, linear independence and subspaces, and inversions/
  inversion number for type $A$.

### Proof-route re-derivations done at scaffold time (no gaps left to Step 3)

- **The restriction theorem** (the "main result of [7]" quoted by Brady–Watt) is proved locally, as the
  design requires, by a finite-dimensional computation: $M(A)=F(A)^\perp$; $\chi_A+\chi_A^T=-B$ from
  $(A-\mathrm{id})^{-1}+(A^{-1}-\mathrm{id})^{-1}=-\mathrm{id}$; $A_U=\mathrm{id}+H_U^{-1}\Pi_U$ orthogonal
  because $H_U+H_U^*=-\mathrm{id}_U$; $\operatorname{rank}(A-A_U)=\dim M(A)-\dim U$ by the explicit kernel
  $S_AH_U^{-1}U\oplus F(A)$; uniqueness by writing $M(A)=M(B)\oplus M(B^{-1}A)$ for $B\le_{\mathrm O}A$ and
  the identity $\chi_A|_{M(B)}=\chi_B$; transitivity $(A_{U'})_U=A_U$ by composing the restriction formula.
- **The shortening argument** is re-derived inside $W$: a generic point of $F(w)$ (finite-union lemma) has
  nontrivial stabiliser, which by the batch-17 point-stabiliser clause supplies a root normal in $M(w)$;
  the restriction lemma then gives the rank drop $1$, and induction on $\dim M(w)$ gives the factorization
  and Carter's equality $\ell_T=\dim M$ without importing an unproved shortening theorem.
- **The rigidity** is assembled exactly at the point the design indicates ("using restriction of
  $\chi_\delta$"): for $\alpha,\beta\le_T\delta$, both elements are the restrictions of $\delta$ to their
  moved spaces, and $M(\alpha)\subseteq M(\beta)$ makes $\alpha$ the restriction of $\beta$ to $M(\alpha)$.
- **The common-upper-bound warning is made concrete:** in $W=I_2(4)$, $A$ (rotation by $\pi/2$) and
  $A^2=-\mathrm{id}$ have $M=V$ both, yet neither is below the other and they have no common upper bound, so
  $M(\alpha)\subseteq M(\beta)\Rightarrow\alpha\le_T\beta$ fails without the hypothesis.

## Recorded defects, deferrals and carried findings

1. **Carried in-run scaffold defect (batch 17, not consumed here).**
   `lem-cg-dual-action-and-chamber-faces-exist` (batch 4) clause (3)(ii) states the wrong union for the
   infinite-$m$ chambers (the correct union is $\{\Delta>0\}\cup\{0\}$); the finding, evidence and planned
   repair are recorded in the batch-17 notes and remain with the owner/canonical ledger. This batch
   consumes only the finite-type chamber data of batch 17 and the finite clause (3) of the tiling theorem,
   so nothing here depends on the defective sentence; no new evidence was found.
2. **Non-blocking source note.** Brady–Watt attribute the restriction/uniqueness theorem to their
   reference [7] (T. Brady, C. Watt, *A partial order on the orthogonal group*, Comm. Algebra 30 (2002)
   3749–3754). That standalone paper was not retrieved (the publisher page answered HTTP 403 on the single
   attempt), and **no proof text from it is claimed**. The scaffold instead proves the restriction theorem
   completely and locally inside `lem-cg-orthogonal-wall-form-and-subspace-restriction`, following the
   design instruction that a Wall-form proof must construct $B$ explicitly and prove uniqueness; the
   citation is retained only as provenance for the statement, which Brady–Watt's full text states.
3. **Deferred material with a valid destination.** Brady–Watt §3 (Steinberg's bipartite root ordering, the
   $\rho_i$ ordering, the $\mu$-vectors, Theorem 3.2, Corollary 3.3, Note 3.5 and Theorem 3.7) is deferred
   to **`bipartite-coxeter-elements-and-ordered-root-complexes`** (a resolvable plan-spec page, order
   1754, which requires this page); it is the next pair's Coxeter-element/Petrie-polygon input and is not
   needed for reflection length or the moved-space order.
4. **No missing prerequisite and no page-split pressure:** the four contracts close locally on one A page
   (4 items) with three companion examples; the 100-item cap is nowhere near binding.

## Sources (full-text verified)

- R. W. Carter, *Conjugacy classes in the Weyl group*, Compositio Mathematica 25 (1972) 1–59, Numdam full
  text, `https://www.numdam.org/item/CM_1972__25_1_1_0.pdf` — `fetch_verified` 2026-10-07: 3 962 781 bytes,
  sha256_16 `9906164332f45299`, 60 pages. Read for this batch: Introduction and §2 "Products of
  reflections", printed pp. 1–5, including the root-system setup and Lemmas 1–3 with proofs and Lemmas 4–5.
- T. Brady and C. Watt, *Lattices in finite real reflection groups*, `https://arxiv.org/pdf/math/0501502` —
  `fetch_verified` 2026-10-07: 532 448 bytes, sha256_16 `cbb25cebbc62ec8f`, 29 pages. Read: Introduction
  and §2 (printed pp. 1–3), the opening of §3 through Note 3.5 (printed pp. 3–6), and the opening
  paragraphs of §4 (printed pp. 8–9) with the $A_3$ intersection example.
- A. Björner and F. Brenti, *Combinatorics of Coxeter Groups*, Springer GTM 231 (2005), author/class-hosted
  complete PDF, `https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf` —
  `fetch_verified` 2026-10-07: 4 320 702 bytes, sha256_16 `ad1e7d9260127bb2`, 370 pages. Read: Exercise
  2.36 on printed p. 61 with its index entry (printed pp. 61, 234–235).
- Harvest dispositions: 29 rows in the coverage file — 17 `included` (6 Brady–Watt, 3 Carter, 1 Björner–
  Brenti, 7 canonical design/B-companion rows), 2 `inline` (Carter Lemma 1; the main result of [7]),
  1 `deferred` (§3 to the bipartite page) and 9 `out-of-scope` with reasons. There is no source drop and no
  source-resolution record: all three URLs resolved and were fully fetched.

## Checks actually run (results as of 2026-10-07)

| check | command (abbreviated) | result |
|---|---|---|
| readiness | `node tools/step1-decisions.mjs record/check --run frontier-42-coxeter-32` | 7 records written (re-recorded after the final statement edits); no outstanding work naming any batch-18 item (204 items at the snapshot; the remaining unclosed work is other units') |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | no cycle/label error naming a batch-18 item; labels recomputed and written |
| cross-batch ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | refreshed; batch 18 reviewed; 44 owned edges, 0 without a review, 0 orphaned rows. The stage gate form `--require-reviewed` still fails **run-wide** because batches 16, 19, 20, 23 and 25–32 have not yet supplied their inputs; nothing in that failure names batch 18 |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-18.coverage.json --require-destination` | 1 page, 29 harvested rows, 0 errors, 0 warnings |
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | 183 items at the time of the run, 0 missing, 0 errors |
| manifest policy | `node tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | 183 scoped items, 0 errors, 0 warnings |
| plan | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0; page order acyclic and consistent, no item-level cycles, forward references, B-page dependencies or unresolved ids (warnings concern other pages' redundant prereqs) |
| scope | `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | 64 pages owed, 64 in the manifests; no scope drift |
| drift | `node tools/drift-review-check.mjs --run frontier-42-coxeter-32` | 32 pages reviewed, 0 blocked edges, no spec edits |
| URL liveness | `node tools/url-sweep.mjs --coverage research/frontier-42-coxeter-32-batch-*.coverage.json --out research/frontier-42-coxeter-32-url-liveness.json --recover --fail-on-dead` | 38/38 live, 0 failed, 0 recoverable, 0 suspect; 38 citation decisions; exit 0 |
| source backing | `node tools/source-backing.mjs --coverage <all coverage files> --liveness research/frontier-42-coxeter-32-url-liveness.json --reharvest-plan research/frontier-42-coxeter-32-reharvest-plan.json` | 117 authored results across 20 files, every one still backed; exit 0 |
| fetch stamps | `node tools/source-fetch-check.mjs --coverage <all coverage files>` | 78/78 fetch-verified, 0 drops, exit 0 |

`extcheck`/`depsource`/`rendercheck` are authoring-stage checks: item carriers do not exist at Step 1
(the engine's own gate comment says to run them after authoring), and the manifest-only policy pass above
is the scaffold-stage external-record check. Unresolved finding carried forward: **none for this pair**;
the two defect notes above are out-of-batch, owned by the owner/reconciliation.

## Completion statement

All seven items were built once, in prerequisite order, and each has a complete proof strategy with met
in-run prerequisites and a `ready` step-1 record. Engine artifacts for this unit all exist and check clean:
`research/frontier-42-coxeter-32-batch-18.pages.json`, `...-batch-18.coverage.json`, `...-batch-18.notes.md`,
the seven `research/frontier-42-coxeter-32-step1-<id>.json` records, and the reviewed consumer input
`research/frontier-42-coxeter-32-batch-18.cross-batch-dependencies.json` (43 item + 1 page rows). This record
is a scaffold readiness statement, not independent mathematical approval; Step 3 authoring and review follow.
