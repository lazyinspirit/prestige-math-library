# Batch 23 Step 1 scaffold — Weak Order, Inversions, and Lattice Operations

Run: `frontier-42-coxeter-32` · pair `weak-order-inversions-and-lattice-operations`
(A order 1762, B order 1763, `coxeter-groups`, design label CG-18). Outputs:
`research/frontier-42-coxeter-32-batch-23.pages.json` (6 A + 3 B items), this note,
`research/frontier-42-coxeter-32-batch-23.coverage.json` (3 sources, 36 harvested rows),
`research/frontier-42-coxeter-32-batch-23.cross-batch-dependencies.json` (50 item/page rows,
all reviewed) and nine item-readiness records
`research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (read first; binding) — richest sound claims, exact local proofs, no citations as
  substitutes, definitions justified before use. Design section CG-18 of
  `research/plan-coxeter-groups-track.md` (lines 434–448): the four local supplier
  contracts `def-cg-left-right-weak-order-and-descents`,
  `lem-cg-weak-order-is-a-graded-partial-order`, `lem-cg-bounded-weak-order-join-construction`,
  `thm-cg-weak-order-meet-semilattice-and-finite-lattice`, with the B companion
  "compute all meets and joins in S3 and a bounded interval in infinite dihedral type;
  explain why two incomparable simple reflections in infinite dihedral type have no common
  upper bound; compare root-set union with the actual join closure".
- **Machine inputs.** `research/coxeter-scaffold/inventory.json` (CG-18),
  `definition-justifications.json` (the single CG-18 definition is justified by
  `lem-cg-weak-order-is-a-graded-partial-order`), the native A/B prose
  (`library/coxeter-groups/weak-order-inversions-and-lattice-operations{,-examples}.md`),
  and `research/coxeter-scaffold/combinatorial-source-report.md` §C3 ("Weak order,
  reflection inversion sets, and lattice structure"), which fixes the selected proof
  route: prefix criterion, correctly oriented inversion inclusion, BB §3.2 closure route,
  finite-W lattice with `w_0`, infinite dihedral no-join, and the warning that the meet is
  not the literal intersection of inversion sets.
- **Drift review** `research/frontier-42-coxeter-32-alpha-step1-drift.md` §
  `weak-order-inversions-and-lattice-operations` — **VERDICT: no-drift**: "The inversion
  criterion and exchange argument use parabolic/root/chamber suppliers; finite meets and
  bounded joins are proved with finite lower intervals and the existing finite-poset
  framework. Each is declared directly or transitively. … No prerequisite gap. The
  weak-meet and bounded-join proofs remain draft obligations."
- **Independent audit** `research/coxeter-scaffold/independent-audit.md`: the seam
  "Weak-meet maximal lower bound had a compressed extension step" was repaired at the
  design level; the present batch carries the repair into the item strategy (exact
  deletion-position exchange argument for common atoms) and repairs a further compressed
  step that the audit text did not name (see §Dependency verification).

## Plan-spec comparison and recorded conflicts

`research/plan-spec.json` agrees with the task and the design on the pair ids, orders
1762/1763, category, companion, the A page's four `requires`, and the B page's
`requires: [weak-order-inversions-and-lattice-operations]`. Its item arrays for these two
pages are empty, exactly as for every other new page of this run, so no item-level plan
text can conflict; the design's local supplier contracts are the item-level authority and
no plan text was edited. **No design-versus-plan conflict exists.** The only additions
beyond the design's literal text are recorded below as strengthenings with named consumers.

## Inventory changes (additions and strengthened clauses only; nothing weakened or removed)

The four designed contracts keep their exact ids, kinds and relative order. Beyond them:

1. **`lem-cg-weak-order-prefix-property-and-left-translation` (lemma, new).** Length
   identity, prefix property, left translation (**) of BB 3.1.2(vi), and interval
   translation [u,v]_R ≅ [e,u^{-1}v]_R of BB 3.1.6. **Why it is required:** the gradedness
   lemma needs the prefix property and the left translation before it can derive the
   inversion criterion and the cover characterization; the meet lemma needs the prefix
   property to write x = z x′ and y = z y′; the B examples compute intervals through the
   interval translation. All four clauses are used.
2. **`lem-cg-full-descent-element-characterizes-finite-type` (lemma, new).** If
   D_L(x) = S then ρ(x^{-1})Φ₊ = Φ₋, Φ is finite, W is finite and x = w₀; plus the
   parabolic instantiation at (W_J, J). **Why it is required:** the theorem's parabolic
   join clause (BB Lemma 3.2.3) needs exactly this criterion. BB prove it through the
   *Bruhat* lifting property (BB 2.3.1(ii)); this batch instead proves the same statement
   root-theoretically (root signs, linearity, faithfulness, uniqueness of w₀), so the page
   does not acquire an undeclared dependency on the Bruhat page of batch 12.
3. **B items (3).** `ex-cg-s3-weak-order-meets-and-joins` (complete table, left/right
   asymmetry, all six inversion sets and the criterion on all 36 pairs),
   `ex-cg-infinite-dihedral-bounded-interval-and-missing-join` (unique alternating reduced
   expressions, lower intervals are chains, {s,t} unbounded) and
   `cex-cg-inversion-sets-do-not-compute-meets-and-joins` (the A₂ union and intersection
   failures; the corrected containment formulation). These are the design's three B
   checks, with the "root-set union versus join" comparison made into an explicit
   counterexample so that the false equality has a precise refutation.

**Theorem clause added (strengthening with a consumer).** `thm-cg-weak-order-meet-semilattice-and-finite-lattice`
clause (3) states BB Lemma 3.2.3: the join of J ⊆ S exists iff W_J is finite, and then it
is w₀(J); this is proved with the page's declared prerequisites (longest elements of
parabolic subgroups from batch 17 and the unique coset factorization of batch 10) and is
what makes the infinite-dihedral obstruction in clause (4) a corollary of a general
criterion rather than an isolated computation. The design's own summary sentence
("For infinite W assert joins only for bounded sets and prove the obstruction in infinite
dihedral type") is preserved verbatim in scope.

**Inventory `depends_on` edges dropped (with reasons).** The inventory attaches the page's
declared prerequisites to every CG-18 contract; each item records its actual use set
instead. Dropped from the definition item: `thm-cg-double-coset-unique-minimum-and-normal-form`
and `thm-cg-finite-parabolic-longest-element-and-opposition` (neither is used by a
definition whose bounds are conditional). Kept where used: the longest-element theorem is
a genuine dependency of the criterion lemma and of the theorem; the double-coset and
parabolic-quotient items are used through the descent sets and the coset factorization.
No promised claim was weakened and no inventory padding was added: every added clause is
consumed by a named item, as detailed in §Cross-batch dependencies.

## Dependency levels (in-run only)

Computed with the shared `item-dependency-levels.mjs` logic over the current run manifests and
written into the manifest; the check reports no cycle, no dependency error and no label
mismatch naming any batch-23 item.

| level | item |
|---|---|
| 11 | `def-cg-left-right-weak-order-and-descents` |
| 12 | `lem-cg-weak-order-prefix-property-and-left-translation` |
| 13 | `lem-cg-weak-order-is-a-graded-partial-order` |
| 14 | `lem-cg-bounded-weak-order-join-construction` |
| 17 | `lem-cg-full-descent-element-characterizes-finite-type` |
| 18 | `thm-cg-weak-order-meet-semilattice-and-finite-lattice` |
| 19 | `ex-cg-s3-weak-order-meets-and-joins` |
| 19 | `ex-cg-infinite-dihedral-bounded-interval-and-missing-join` |
| 20 | `cex-cg-inversion-sets-do-not-compute-meets-and-joins` |

No item depends on a later item of this page or of another page of the run; the definition's
`justified_by` target (`lem-cg-weak-order-is-a-graded-partial-order`) depends on it through
`deps`.

## Dependency verification (examined, not assumed)

Every declared `deps` target was checked against the supplier's actual statement in its
current manifest (or published item file), for hypothesis, direction, convention and axiom
strength. Suppliers read in the current manifests:

- **batch 2** — `def-hh-coxeter-matrix-word-group-and-length` (the presented group, ℓ as
  minimal word length, reduced expressions); `thm-hh-coxeter-exchange-deletion-and-faithfulness`
  (length parity ℓ(sw),ℓ(ws) ∈ {ℓ(w)±1}, Tits exchange, two-letter deletion);
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` (support, intrinsic
  parabolics, ℓ(w) = ℓ(w⁻¹), the type-A identification);
  `lem-hh-dihedral-root-recurrence-and-root-sign` (exact order of st, the rank-two root
  action, ambient reducedness of alternating dihedral words).
- **batch 4** — `def-cg-real-coxeter-form-and-reflection`,
  `def-cg-canonical-reflection-homomorphism` (ρ, Φ, T; ρ is a group homomorphism).
- **batch 7** — `def-cg-geometric-inversion-set` (N(w) and the two right-multiplication
  recursions, clause (2)); `thm-cg-root-inversion-formulas-and-strong-exchange` (the
  root-reflection dictionary, |N(w)| = ℓ(w) and the prefix/suffix-root formula);
  `thm-cg-root-length-criterion-and-faithfulness` (the criterion ℓ(ws) < ℓ(w) ⟺
  ρ(w)e_s ∈ Φ₋ and faithfulness); `thm-cg-root-sign-and-simple-reflection-positivity`
  (V₊ as nonnegative coordinate cone, Φ = Φ₊ ⊔ Φ₋, Φ₋ = −Φ₊).
- **batch 10** — `def-cg-parabolic-quotient-and-two-sided-minima` (clause (2): the descent
  sets D_L, D_R exactly as quoted, and the unique length-additive factorizations w = u d,
  w = d v); `thm-cg-parabolic-intersections-and-coset-factorization` (clause (2): the
  parabolic root subsystem Φ_I = Φ ∩ V_I = Φ_I⁺ ⊔ Φ_I⁻ and ρ(W_I)V_I = V_I).
- **batch 17** — `thm-cg-finite-parabolic-longest-element-and-opposition` (clauses (1)(i)–(iv)
  and (2): existence/uniqueness of w₀ with N(w₀⁻¹) = Φ₊, the length formulas
  ℓ(w₀w) = ℓ(ww₀) = ℓ(w₀) − ℓ(w), and the longest elements w₀(J) of finite parabolics with
  ℓ(s·w₀(J)) = ℓ(w₀(J)) − 1).
- **published items** — `def-partial-order`, `def-poset-interval-and-finiteness-conditions`,
  `def-graded-poset-and-rank`, `def-lattice-distributive-lattice-and-order-ideal`,
  `def-antichain-and-poset-covers` (all status `published`, audited 2026-07-31).

Checks actually made: the **orientations** of the inversion criterion (BB's
T_L(u) ⊆ T_L(v) is N(u⁻¹) ⊆ N(v⁻¹) under the root-reflection dictionary t ↔ α, since
T_L(u) = {t_α : α ∈ N(u⁻¹)}; verified by hand on all 36 pairs of A₂); the direction of
ℓ(w₀w) = ℓ(w₀) − ℓ(w) used to conclude w ≤_R w₀ (needs ℓ(w₀) = ℓ(w) + ℓ(w⁻¹w₀), which is
exactly the formula); the hypothesis of the coset factorization (additivity holds for every
u ∈ W_J, not only for the minimum representative); the exact hypothesis of the root-length
criterion (right multiplication, with w⁻¹ substituted for the left descent conversion); the
faithfulness of ρ in the direction needed (injectivity into Sym(Φ)); the sign conventions of
Φ₊, Φ₋ and V₊ (Φ₋ = −Φ₊ and Φ ∩ (−V₊) = Φ₋); and the rank-two facts for m = 3 and m = ∞
(st of order 3 resp. infinite). `def-graded-poset-and-rank` is stated for **finite** posets;
it is applied only to the finite intervals [u,v]_R (finite because there are at most
1 + |S| + ⋯ + |S|^k elements of length ≤ k) with the shifted rank ℓ(x) − ℓ(u); no infinite
poset is claimed to be graded by that definition.

**Compressed steps identified and repaired in the strategies** (recorded so Step 3 cannot
silently re-import the unexplained phrasing):

1. **Common atoms (audit seam).** The design's "left exchange cannot delete a letter of the
   z-prefix" is written out with the two deletion positions: if the deleted letter lies in
   z_red then z = s z̃ with ℓ(z̃) ≤ ℓ(z) − 1 and ℓ(sz) ≤ ℓ(z), contradicting the assumed
   one-length rise; otherwise sx = z x″ and x = (sz)x″ is length-additive, so sz is a longer
   common lower bound and z was not maximal. Symmetric in y.
2. **The step "z′ ≤_R sx ⟹ sz′ ≤_R x, y" (not named in the audit).** The design attributes
   this to "left-multiplication interval isomorphisms", but the printed BB argument for it
   tacitly needs s ∈ D_L(z′), which is not known a priori. The strategy instead proves the
   inclusion directly from the inversion criterion: N(z′⁻¹) ⊆ N(x⁻¹s) = s(N(x⁻¹)∖{e_s}),
   and the recursion for N(z′⁻¹s) gives N((sz′)⁻¹) ⊆ {e_s} ∪ sN(z′⁻¹) ⊆ N(x⁻¹) in both
   cases ℓ(sz′) = ℓ(z′) ± 1, using e_s ∈ N(x⁻¹); symmetrically for y.
3. **The final length comparison.** After sz′ ∈ E one has ℓ(sz′) ≤ ℓ(z). The strategy adds
   the missing case exclusion: if ℓ(sz′) = ℓ(z′) − 1 then s ≤_R z′ (as z′ = s·(sz′) with
   additive length), and transitivity with z′ ≤_R sx gives s ≤_R sx, i.e.
   ℓ(sx) = 1 + ℓ(x), contradicting ℓ(sx) = ℓ(x) − 1. Hence ℓ(sz′) = ℓ(z′) + 1 and the
   chain ℓ(z′) = ℓ(sz′) − 1 ≤ ℓ(z) − 1 = ℓ(sz) ≤ ℓ(z′) forces sz = z′.
4. **The full-descent criterion (BB 2.3.1(ii)).** BB prove it through the Bruhat lifting
   property; the strategy replaces that step by the root-theoretic argument (simple roots
   map into Φ₋, positive roots are nonnegative coordinate combinations, ρ(x⁻¹) permutes Φ,
   faithfulness gives W ↪ Sym(Φ), and N(x⁻¹) = Φ₊ identifies x with w₀). This keeps the
   page inside its declared prerequisite closure.
5. **The cover characterization converse.** Instead of importing BB's chain property, the
   strategy proves it from subadditivity plus the lower bound ℓ(us₁⋯s_i) ≥ ℓ(u) + i that
   follows from v = u s₁⋯s_k and length additivity; hence a cover forces k = 1.

No missing, circular, forward or inadequate dependency was found. In particular the
definition lemma is derived from the definition (the criterion is not assumed), and the
meet/join construction never assumes the finite lattice it is used to prove.

## Choice accounting (AC boundary)

No item of this pair declares or uses the Axiom of Choice; `def-axiom-of-choice` is absent
from every `deps` array and from the transitive closure of the page. The meet construction's
recursion chooses at most ℓ(x₀) + 1 elements of nonempty subsets of W (finite choice, a
theorem of ZF), the criterion lemma uses only linear algebra and faithfulness, and the
dihedral computations use the rank-two orders already proved in batch 2. No dependency path
reaches `deferred-set-theory-beyond-choice`.

## Sources (full text fetched, stamped and inspected; reading limits stated)

Three independent treatments back the A page; all three bodies were downloaded and stamped
at harvest time (stamps in the coverage file), and the cited ranges were read from the
extracted text:

1. **A. Björner and F. Brenti, _Combinatorics of Coxeter Groups_** (GTM 231, 2005;
   author-hosted complete PDF, 4 320 702 bytes, 370 pages, sha256-16 `ad1e7d9260127bb2`).
   Used §1.4 (equation (1.20), Corollary 1.4.6, Proposition 1.4.7, Corollary 1.4.8,
   printed pp. 17–18), §2.3 (Propositions 2.3.1–2.3.2 and Corollary 2.3.3, printed
   pp. 36–37) and §§3.1–3.2 in full through Theorem 3.2.7 (printed pp. 65–74), read from
   the extracted text at harvest time. The complete weak-meet proof of Theorem 3.2.1,
   the proof of Proposition 3.1.3 and the proof of Lemma 3.2.3 were read in full; §3.3–3.4
   and the rest of the book were not read.
2. **J. R. Stembridge, _On the fully commutative elements of Coxeter groups_**
   (J. Algebraic Combin. 1 (1992) 105–134; author-hosted preprint). Used §1.3, PDF pp. 5–7:
   the weak order as the transitive closure of the covers w <_R ws, the equivalence with
   x ≤_R xy ⟺ xy reduced, Proposition 1.3 (interval translation, an independent proof of
   the page's clause), and the descent-set conventions. Sections 2–9 were not read.
3. **N. Reading and D. E. Speyer, _Cambrian fans_** (J. Eur. Math. Soc. 11 (2009) 407–447;
   arXiv:math/0606201v2). Used §2, arXiv pp. 5–7: inversion sets I(w) = {t : ℓ(tw) < ℓ(w)},
   the induced-containment description of the weak order, the equivalence with covers and
   prefixes, and the statement that the weak order is a lattice when W is finite. Sections
   3–8 were not read.

**Harvest dispositions.** 36 named results were enumerated over the claimed ranges: 13
scaffolded as items, 10 absorbed inline with named consumers, 13 declined with written
reasons (antiautomorphisms and the ortholattice, interval-growth corollaries, BB 3.2.4–3.2.7,
BB §§3.3–3.4/5–8, Stembridge §§2–9 and the fully commutative ideal, Reading–Speyer's
congruences and fans — each with the destination page of this run where the material
lives). The coverage warning `coverage-low-yield` (13/36) is expected: the declined rows
are source material for other pairs of the run, and this pair promises the weak order and
its lattice operations only.

**Optional treatment not used.** An arrangement-theoretic alternative for the finite
lattice property (Björner–Edelman–Ziegler, _Hyperplane arrangements with a lattice of
regions_) was considered as a fourth source; its only located copies timed out or returned
an HTML page (three attempts: the FU-Berlin archive URL and two TU-Berlin mirrors). No
claim of this batch depends on it, so no source drop or alternative-argument record was
created; the finite-lattice conclusion is proved from BB Theorem 3.2.1 and cross-checked by
Reading–Speyer's statement.

## Cross-batch dependencies

`research/frontier-42-coxeter-32-batch-23.cross-batch-dependencies.json` registers 48 item
rows and 2 page rows — every cross-batch edge of the nine items and of the A page's
`requires` — each with the exact required claim and its use, and each with a review.
`tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` lists all 50
batch-23 edges with reviews and no orphans. The other two declared prerequisites of the A
page (`chains-antichains-sperner-and-dilworth`, `incidence-algebras-and-mobius-inversion`)
are published pages outside the run's batch manifests; their items are used directly
(`def-lattice-distributive-lattice-and-order-ideal`, `def-poset-interval-and-finiteness-conditions`,
`def-graded-poset-and-rank`, `def-antichain-and-poset-covers`) and are therefore Step-3
context, not ledger edges. Downstream note: batch 28 (`heaps-commutation-classes-and-fully-commutative-elements`)
and batch 32 (`sortable-projections-and-finite-cambrian-lattices`) declare this page as a
prerequisite; their writers find here the gradedness, cover, inversion, interval-translation
and lattice-operation results they need. No proposed removals; no change to any supplier's
statement is requested.

## Checks run (actual results)

Whole-run figures were captured on 2026-10-07 around 12:00 AEDT while sibling batches 16,
24 and 26 were being scaffolded concurrently; every batch-23 finding below is stable under
those concurrent writes (no check names a batch-23 item or page as a failure).

| check | command (prefix `node`) | result |
|---|---|---|
| manifest dependency fields | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `211 item(s), 0 normalized, 0 error(s)` |
| scaffold policy (whole run) | `tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | `211 scoped item(s), 0 error(s), 0 warning(s)` |
| manifest integrity / scope | `tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| coverage | `tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-23.coverage.json --require-destination` | `1 page(s), 36 harvested result(s), 0 error(s), 1 warning(s)` — the warning is `coverage-low-yield` (13/36 scaffolded; the remaining rows are inline or declined with reasons) |
| full-text fetch (stamp mode) | `tools/source-fetch-check.mjs --coverage …batch-23.coverage.json --stamp` | `3/3 source(s) fetch-verified (3 newly stamped)` |
| full-text fetch (check mode) | `tools/source-fetch-check.mjs --coverage …batch-23.coverage.json` | `3/3 source(s) fetch-verified`; `3/3 resolved (0 documented drops)` |
| URL liveness | `tools/url-sweep.mjs --coverage …batch-23.coverage.json --out /tmp/b23-url-liveness.json --recover --fail-on-dead` | `3/3 live; 0 failed; 0 suspect; 3 citation decision(s)` |
| source backing | `tools/source-backing.mjs --coverage …batch-23.coverage.json --liveness /tmp/b23-url-liveness.json --reharvest-plan /tmp/b23-reharvest.json` | `5 authored result(s) across 1 file(s), every one still backed`; empty reharvest work list |
| readiness (whole run) | `tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | `items 211, ready 211` at the final pass (mid-pass it stood at 204 ready, the open entries being batch 16's still-unrecorded items); **no open entry at any point named a batch-23 item**, and all nine batch-23 records are current |
| dependency levels (whole run) | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1 with only `empty scaffold inventory` errors for not-yet-scaffolded sibling pages (18 `empty scaffold inventory` errors at both the mid-pass and the final check); **no cycle, dependency or label error ever named a batch-23 item** |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0; 50 batch-23 edges, all reviewed, no orphans |
| external references | `tools/extcheck.mjs` | `25966 items, 0 recorded-not-proved, 0 resting on them`; `OK — no active recorded-not-proved items, external references or external fallback records in the checked scope` |
| forward references | `tools/fwdcheck.mjs` | `0 open forward reference(s)`, 367 closed; none of the batch-23 items declares `forward_refs`, `external_refs`, `external_dependency` or `proved_here` |
| plan | `tools/validate-plan.mjs --run frontier-42-coxeter-32` | exit 2 with `frontier gate selection: Empty frontier page bipartite-coxeter-elements-and-ordered-root-complexes` (batch 19's empty page at check time); **no diagnostic names a batch-23 page** |
| own wikilink/deps audit | (script) every `[[id]]` in the nine item statements and strategies resolves, and every linked in-run item is declared in `deps` or `justified_by` | `0 unresolved links; 0 links outside deps/justified_by` |

## Unresolved findings and escalations

- **No owner escalation is required by this batch**: every item is recorded `ready`, no
  supplier is missing, no source was dropped, and no page split or cross-batch change is
  requested.
- Whole-run, not batch-23: the dependency-level and plan gates remain open on sibling
  batches whose pages are still empty (at check time batches 18, 19, 20, 25, 27–32 and the
  readiness records of batch 16's newly scaffolded items). These are for the engine and
  those batches' Betas.
- The `coverage-low-yield` warning (13/36) is expected for a page whose sources are shared
  with other pairs; Alpha should confirm the declines when reading this page.
- Honesty note: this scaffold certifies a **proof design**, not authored proofs. Every
  item's argument remains Step-3 authoring work. The five repaired steps listed in
  §Dependency verification, the finite-poset caveat on `def-graded-poset-and-rank`, and the
  exact reading limits above are recorded so that Step 3 cannot silently re-import the
  compressed or unstated reasoning.
