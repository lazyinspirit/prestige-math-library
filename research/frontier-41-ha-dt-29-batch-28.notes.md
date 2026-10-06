# Batch 28 — Deligne Products and Categorical Eilenberg–Watts

## Scope and design reconciliation

Owned pages: A `deligne-products-and-categorical-eilenberg-watts` (order 925), B
`deligne-products-and-categorical-eilenberg-watts-examples` (order 926). I read `CLAUDE.md`,
`AGENTS.md`, `SCHEMA.md`, `WORKFLOW.md`, the generated batch task, the owner authoring direction
`research/frontier-41-ha-dt-29-owner-authoring-direction.md` (binding: it fixes the HA-25–HA-29
statements and complete local proof contracts to `research/plan-homological-algebra-track.md`
plus `research/eilenberg-watts-expansion/proposed-items.json`, and requires them to pass normal
authoring and proof review), the drift evidence, the HA-25–HA-29 conventions (L5405–L5475), the
HA-28 design section (P10 L5862–L5934, P11 L5935–L6006, P12 L6007–L6040, B4 L6195–L6215, source
table L6245–L6276), and the binding inventory tables L6356–L6370 (A) and L6373–L6381 (B).

The two task-listed design locations do **not** compete: L6356 is the heading of the A-page table
of the binding item inventory and L6373 is the heading of the B-page table of the same inventory.
The controlling design text is the HA-28 full-local-proof section (P10 Deligne existence and
uniqueness through tensor-product algebras, P11 categorical triangle and explicit end/coend
universal maps, P12 Nakayama definitions and their justification, B4 the witnesses), read
together with the HA-25–HA-29 conventions (left-module handedness, `1`-cells as $(B,A)$-bimodules,
$T_M=M\otimes_A-$; no commutativity of rings; finite categories with supplied universal-object
data; no choice in the Eilenberg–Watts machinery) and the binding inventory tables that fix the
item IDs. `research/plan-spec.json` agrees with the design on page IDs, orders, category,
companions and `requires`; its empty `items` arrays are the pre-splice planning state, not a
conflict. There is **no page-data conflict**; the design-internal dependency conflicts are
itemised below and the plan's control settled them in favour of the corrected local closure.

The manifest has 12 A items and 4 B items, exactly the binding inventory (nine P10 items, three
P11 items, four P12 items, four B4 witnesses); the complete local closure fitted without a
local addition, the A page is far below the 100-item cap, and no split is required. No B item is
a supplier of anything else. Every item carries an explicit `deps` array and a recomputed
`dependency_level`; the readiness records were written in nondecreasing level order.

## Dependency and proof audit

Levels run 0–11. Level 0: the finite-copower lemma. Level 1: the Deligne-product definition.
Level 2: the two-variable determination lemma. Level 4: the existence theorem (it also consumes
the batch-27 model theorem). Level 5: the opposite-Deligne-product identification and the
$\mathbf{vect}$ example. Level 6: the categorical triangle and the non-external-kernel
counterexample. Level 7: the explicit end/coend lemma. Level 8: kernel composition and the
Nakayama definition. Level 9: the Nakayama computation/adjunction lemma. Level 10: the two
Nakayama propositions. Level 11: the two B-page Nakayama witnesses.

In-run suppliers are used only from batches 25, 26 and 27 (batch 24 is another pair and batch 29,
the graded pair, is not needed): 17 item edges and 1 page edge, all recorded as `verified` in
`research/frontier-41-ha-dt-29-batch-28.cross-batch-dependencies.json` after reading the supplier
statements and proof strategies on disk. The page edge is to
`finite-abelian-categories-and-eilenberg-watts` (batch 27); the load-bearing item edges are the
two finite classification theorems, `lem-finite-module-duality-is-exact-with-commuting-bimodule-actions`,
`prop-finite-dimensional-module-categories-are-intrinsically-finite`,
`thm-finite-abelian-categories-are-finite-dimensional-module-categories`,
`lem-tensor-hom-adjunction-for-bimodules`, `thm-natural-transformations-of-tensor-functors-are-bimodule-maps`,
`lem-finite-projective-dual-basis-gives-tensor-hom-isomorphism`, and the Morita bicategory
coherence items. Every dependency is a published item or an in-run item of batches 25–27; no
target is a B-homed published item, a `proved_here: false` item, a Recorded result, or a forward
reference. The `deps` graph is acyclic; the only forward edge anywhere in the pair is the
definition's `justified_by` link to its construction theorem, which SCHEMA excludes from `deps`.

Design-versus-reality findings, all resolved locally and recorded rather than papered over:

1. **The copower lemma does not need a module tensor product.** The proposed dep
   `thm-universal-property-of-module-tensor-products` does not occur in the proof: representability
   of $Z\mapsto\operatorname{Hom}_k(V,\mathcal C(Y,Z))$ is the biproduct matrix calculus
   `thm-morphisms-between-finite-biproducts-correspond-to-matrices` plus uniqueness of representing
   objects and the Yoneda assignment. The dep was dropped.
2. **The batch-25 canonical-comparison lemma cannot carry the two-variable determination.**
   `lem-canonical-eilenberg-watts-comparison-is-balanced-and-natural` is stated for functors into
   a module category $B\text{-Mod}$, and its comparison map is a morphism of $A$-modules; the
   target $\mathcal E$ of the bifunctor $H$ is an arbitrary $k$-linear abelian category, so the
   lemma is not an instance. The determination is proved directly: finite free presentations over
   $T=R\otimes_kS$, the two successive cokernels of the presenting matrices acting on copies of
   $W=H(R,S)$ by the commuting right actions, cokernel universality in $\mathcal E$, and the
   identification with the finite $T$-presentation of $X\otimes_kY$. This keeps the design's proof
   route (construct $\bar H$ from $W$ by presentations; compare by successive cokernels; recover
   transformations from their component at $(R,S)$) while making the presentation-independence
   justification sound for arbitrary $\mathcal E$. The internal-Hom/Yoneda phrasing of the design
   is only available when $\mathcal E$ is a module category and is not used.
3. **The published Hom–tensor adjunction is commutative-ring only.** The proposed dep
   `thm-hom-tensor-adjunction-for-modules` cannot serve $N^r\dashv N^l$ for a noncommutative
   finite-dimensional algebra $A$; it was replaced by the batch-25 arbitrary-ring
   `lem-tensor-hom-adjunction-for-bimodules`, the same correction batch 27 recorded for its
   adjoint characterizations. In the projective Nakayama proposition the batch-25 adjunction is
   also used for the $k$-target currying $D(M\otimes_AX)\cong\operatorname{Hom}_A(X,M^*)$.
4. **The Set-valued ninja-Yoneda lemma is not the k-linear tensor coend.** The proposed dep
   `thm-the-ninja-yoneda-lemma-in-coend-form` states a Set-valued coend against a representable;
   the coend needed here is $\int^a F(a)\otimes_ka^*\cong M$ of finite-dimensional modules, which
   is the finite-linear co-Yoneda calculation (FSS Proposition 2.8 with $G=\operatorname{Hom}_R(U,-)$).
   The dep was dropped and the instance proved locally with its universal cowedge and wedge, which
   is exactly what the consumers $\Psi^l,\Psi^r$ need.
5. **Finiteness of the (co)ends is not completeness.** The design's warning is kept: the index
   category has finitely many objects but (when $k$ is infinite) infinitely many morphisms, so
   neither the finite module category's finite (co)limits nor a general completeness theorem gives
   the (co)end; the local proof uses the finite-dimensional Hom spaces and the explicit universal
   maps. FSS Corollary 2.10 supplies existence at the source level, and the local lemma additionally
   supplies the universal maps and the identifications $\Psi\Phi\cong1$.
6. **Dropped or re-scoped non-load-bearing declarations.** The definition A2 cites the copower
   lemma for the finite vector-space action in which bilinearity is expressed (the design's dep is
   kept for that reason), and A5 no longer names the two-variable determination (which it does not
   use, since it consumes the existence theorem). A12 dropped declarations it does not cite
   (`def-left-and-right-modules`); A1, A4, A5, A6, A7 had unused citations removed in the same
   pass. No useful claim, hypothesis or witness was weakened or dropped; the dep lists are exactly
   the items cited in the statements and proof strategies (verified mechanically).

Other points examined:

- **Well-definedness order.** $\bar H$ is defined on a presentation before any independence claim
  is made; independence is proved by comparing two presentations through a common refinement and
  cokernel universality, so the construction is acyclic and choice-free beyond finite
  presentations.
- **The categorical triangle is a transport, not a new proof.** `thm-finite-eilenberg-watts-for-right-exact-linear-functors`
  and `thm-finite-left-exact-functors-are-hom-functors-with-dual-bimodule-kernels` (batch 27) are
  equivalences including all natural transformations; A5 contributes the identification
  $\mathcal A^{\mathrm{op}}\boxtimes\mathcal B\simeq(\mathcal B,\mathcal A)\text{-}\mathrm{bimod}$.
  The external-object formulas were checked by the finite dualities $M^*\cong a\otimes_kb^*$ and
  $a^*\otimes_AX\cong\operatorname{Hom}_A(X,a)^*$ (FSS (2.1)).
- **Nakayama computations.** $\Psi^l(1)=1(A^*)=A^*$, $\Psi^r(1)=1(A)=A$; hence
  $N^r\cong A^*\otimes_A-$ and $N^l\cong\operatorname{Hom}_A(A^*,-)$, matching FSS (3.50)–(3.58)
  and the Peter–Weyl Corollary 2.9 ($\int_ma\otimes m^*\cong A$, $\int^mm\otimes m^*\cong A^*$).
  The B-page witnesses use the upper triangular algebra from the design's B4; all three computations
  (dimension two vs one, regular not external, regular vs co-regular) were re-derived here and are
  consistent with FSS Proposition 2.8/Corollary 2.9.
- **Axiom of choice.** No item declares `def-axiom-of-choice`, uses DC, or consumes a Recorded
  result; no proof or prerequisite path reaches `deferred-set-theory-beyond-choice`. All
  constructions are finite (finite biproducts, finite-dimensional Hom spaces, finite presentations).
- **The three required pages are connected.** `ends-coends-and-weighted-limits` supplies the
  (co)end machinery used by A7 (definition, wedges, dinaturality, uniqueness, functoriality of
  (co)ends); `enriched-categories` is connected through A1, where the finite copower $V\odot Y$ is
  identified as the tensor of $Y$ by $V$ in the sense of `def-cotensor-and-tensor`; and
  `finite-abelian-categories-and-eilenberg-watts` supplies the batch-27 classification, duality and
  model items listed in the cross-batch input. No required page is left without a consumer.
- **Page size and splits.** 12 A items + 4 B items; no split is required and none was made.
- **Residual authoring risk (for Step 3).** The least standard step is the arbitrary-target
  equivalence of A4 (full faithfulness of restriction along $\boxtimes$ built from A3); the
  successive-cokernel identification of $H(X,Y)$ with $\bar H(X\otimes_kY)$ should be written out
  with the two relation families, and the explicit universal properties in A7 should be rechecked
  against FSS Proposition 2.8. These are flagged, not hidden; the scaffold supplies a complete
  route with adequate prerequisites.

## Sources and reading

The owned coverage file `research/frontier-41-ha-dt-29-batch-28.coverage.json` records 31 harvested
rows over two sources, each with an exact locator and a disposition (13 included, 11 inline, 1
already-published, 3 deferred to plan-spec pages, 3 out-of-scope with specific reasons). Full text
was fetched and stamped by `tools/source-fetch-check.mjs --stamp` (2/2, check mode re-run passes):

1. Etingof–Gelaki–Nikshych–Ostrik, *Tensor Categories*, author final version,
   <https://math.mit.edu/~etingof/egnobookfinal.pdf>, 3 067 397 bytes, 362 PDF pages, SHA-256
   `a40d076197b666d8b3b231ac59748a95f9b311d49ce57f4024c0da8308796db3`. Read Section 1.11
   "Deligne's tensor product of locally finite abelian categories", printed pp.15–16: Definition
   1.11.1 and Proposition 1.11.2(i)–(v) with the proof sketch that realizes the product through
   coalgebras. This is the pair's book/monograph treatment; its sketch is exactly what P10 replaces
   by the finite tensor-product-algebra construction. Section 1.8 (printed pp.9–11) was used only
   as already-published context for finite $k$-linear abelian categories.
2. Fuchs–Schaumann–Schweigert, *Eilenberg–Watts calculus for finite categories and a bimodule
   Radford $S^4$ theorem*, <https://arxiv.org/pdf/1612.04561v3>, 454 533 bytes, 41 PDF pages,
   SHA-256 `a9e7d26bf24dabb35c2faa78daf7c7ecc2916143a69cee2800bd4d939b5b9708`. Read §2.1
   (pp.5–8: (2.1), (2.6), Lemmas 2.1–2.2, Corollary 2.3), §2.2 (pp.10–13: Proposition 2.8,
   Corollaries 2.9–2.10, (2.32)), §§3.1–3.2 (pp.14–18: Definition 3.1, Theorem 3.2, Lemma 3.3,
   Proposition 3.4, Corollaries 3.5–3.7) and §3.5 (pp.22–24: Definition 3.14, Lemmas 3.15–3.16,
   (3.56)–(3.58), Remark 3.17). This is the second independent treatment and the primary source of
   the item shapes: the four Eilenberg–Watts functors, the triangle, the (co)end existence and
   universal maps, the Peter–Weyl identification of the regular and co-regular kernels, and the
   Nakayama calculus. The source's compressed steps (Lemma 2.1 recalls external theorems; Theorem
   3.2(i) invokes Shimizu; end/coend existence runs through Proposition 2.8) are exactly the points
   expanded by the local items. Section 4 was inspected only to place it out of scope.

No source was dropped and no alternative proof was substituted, so no `source_resolution` record is
needed. Watts's original 1960 paper (AMS challenge) remains unread and no claim in this batch
depends on it; the classical statement is not one of this pair's items.

## Checks at scaffold completion

| Check | Actual result |
|---|---|
| `manifest-deps.mjs` whole run (all manifests) | pass: 422 items, 0 missing, 0 errors |
| `content-policy.mjs --manifest-only` whole run | pass: 422 scoped items, 0 errors, 0 warnings |
| `coverage-checklist.mjs --require-destination` on the owned coverage file | pass: 1 A page, 31 harvested rows, 0 errors, 0 warnings |
| `source-fetch-check.mjs --coverage ... --stamp` | pass: 2/2 newly full-text stamped (362 and 41 PDF pages); check mode re-run: 2/2 resolved, 0 drops |
| `validate-plan.mjs research/plan-spec.json` | exit 0: page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids among pages carrying item lists |
| `manifest-integrity.mjs --run` | pass: 58 pages owed, 58 in the manifests, no scope drift |
| `item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | exit 1: 22 errors, every one an "empty scaffold inventory" for a batch not yet scaffolded; no error involves batch 28 and all 16 labels equal the computed levels |
| `extcheck.mjs --quiet` | exit 0: pre-existing published unproved-dependency warnings outside this batch; no batch-28 path uses a Recorded item |
| `fwdcheck.mjs --quiet` | exit 0: no undeclared forward reference on this pair's pages |
| `frontier-dependency-ledger.mjs refresh --run` | refreshed and deduplicated; batch 28 is in `reviewed_batches` with 18 rows (17 item, 1 page), all `verified`, all declared edges matched |
| `frontier-dependency-ledger.mjs refresh --require-reviewed` | exit 1 as expected: batches 7–9, 12, 14–16, 18–20, 23 and 24 still owe inputs |
| `step1-decisions.mjs check --run` | 422 items, 415 ready; all 16 batch-28 records closed and current against the transitive closure of their contracts and the published files; 29 open rows belong to other batches |

The records were written in prerequisite order (A1, A2, A3, A4, A5, B1, A6, B4, A7, A8, A9, A10,
A11, A12, B2, B3, i.e. nondecreasing dependency level), first at 2026-10-04T14:37–14:38Z and then
refreshed at 2026-10-04T14:40Z after the A1 addendum below, after the manifest was frozen. These mechanical checks and readiness records establish a complete scaffold
route with adequate, examined prerequisites. They are not an authored proof or an independent
mathematical approval; Step 3 must author every item and recheck the arguments against the final
consumer uses, and Steps 5–8 own audit and adjudication.

Addendum (same session, 2026-10-04T14:40Z): A1 gained the citation of `def-cotensor-and-tensor`,
identifying the finite copower as the tensor of the k-linear category by a finite-dimensional
vector space; this connects the required `enriched-categories` page to a real consumer. All 16
readiness records were re-recorded against the corrected manifest (the stale hashes correctly
rejected the old records first), `manifest-deps`, `content-policy --manifest-only` and the
dependency-level check were re-run with the same clean results, and the frontier ledger was
refreshed again.

## Timing and staleness note

Batches 25, 26 and 27 were complete, stable and read from disk before this batch recorded its
decisions; batch 29 was complete as well but is not a supplier here. The step-1 readiness hashes
cover the transitive closure of each batch-28 item's contract, the batch-25/26/27 manifests and
the published item files. If any supplier batch is reworked in a later scaffold-fix round, the
affected batch-28 records become stale and must be refreshed by an authorized writer before the
Step-1 gate is retried. The unified frontier ledger was refreshed after the cross-batch input was
written; other batches' missing inputs are Alpha's to collect, not this batch's.
