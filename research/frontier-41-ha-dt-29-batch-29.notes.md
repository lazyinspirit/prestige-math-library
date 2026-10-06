# Batch 29 — Graded Eilenberg–Watts and Shift Coherence

## Scope and design reconciliation

Owned pages: A `graded-eilenberg-watts-and-shift-coherence` (order 927) and B
`graded-eilenberg-watts-and-shift-coherence-examples` (order 928). Before
constructing any item I read `CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`,
`WORKFLOW.md`, the generated task `research/frontier-41-ha-dt-29-beta-29.task.md`,
the drift review `research/frontier-41-ha-dt-29-alpha-step1-drift.md` (verdict for
this page: `no-drift`), the owner authoring direction
`research/frontier-41-ha-dt-29-owner-authoring-direction.md`, the HA-29 full-proof
text in `research/plan-homological-algebra-track.md` (P13 at L6049–6123,
P14 at L6125–6141), the B5 witnesses (L6217–6232), the HA-25–HA-29 conventions
(L5405–5483), the source-reading table (L6234–6277), and the binding item
inventory for both pages (L6382–6405). The pair's binding proposal is
`research/eilenberg-watts-expansion/proposed-items.json`.

The two task-listed design locations are the **same** section, not competing
texts: L6382 is the A-page heading of the binding inventory table and L6395 the
B-page heading. The controlling design text is therefore the HA-29 section
around them — P13 (coherent shifts, their 2-category, the graded theorem),
P14 (the bounded-complex boundary), B5 (the grading witnesses) — with the
inventory tables fixing item IDs, kinds, proof-location labels and the
definition's `justified_by` link. I preserved that scope: left modules throughout,
a 1-cell $A\to B$ is a $(B,A)$-bimodule $M$ with functor $M\otimes_A-$, coherent
shift comparisons $\theta_{X,r}$ with unit and cocycle, the equivariance square
on 2-cells, the homogeneous free-presentation proof route, the explicit
restriction of 2-cells against Hazrat's Remark 2.3.4, and the P14 boundary
(supplied inverse complexes only; no classification of abstract triangulated
functors). `research/plan-spec.json` agrees on page IDs, orders, category,
companions and `requires`; its empty item arrays are the pre-splice planning
state.

**Recorded design conflicts.** (1) `proposed-items.json` lists
`lem-evaluation-on-the-regular-module-has-a-commuting-right-action` as a
dependency of the reconstruction lemma and
`thm-natural-transformations-of-tensor-functors-are-bimodule-maps` as a
dependency of the graded theorem. Neither is used by the graded proof route:
the shift-parametrised reconstruction is proved directly from functoriality,
naturality of $\theta$ and the cocycle (the ungraded formula arises only as the
$A_0$-specialisation, not as an input), and the graded transformation
classification follows from the graded comparison of the same item, not from
the ungraded theorem. Both edges were removed and the dependency audit below
records the examined replacement edges. (2) The design says the justification
lemma makes the definition produce "actual Hom categories and a 2-category".
For the *unrestricted* class of coherently shift-compatible functors on large
graded module categories, hom-collections need not be sets, so the local
smallness and 2-category clauses are stated for the locally small subclass of
$k$-linear right exact coproduct-preserving coherent functors that the theorem
and its bicategorical corollary use; this matches the design's own size
convention ("locally small categories") and the ungraded treatment of HA-25,
and it is a sharpening, not a weakening, of the design text. (3) P13 says "this
raises original degrees by $d$": in the manifest this is stated as the
degree-zero map $M\{d\}\to M$, i.e. a homogeneous action of degree $d$ as a map
$M\to M$; the sign convention of the published shift $M\{r\}_d=M_{d-r}$ is used
throughout, and Hazrat's suspension $M(\alpha)$ corresponds to $M\{-\alpha\}$
(Hazrat (1.21)–(1.23) are cited only for the shift-tensor compatibility, which is
invariant under this identification). No page-data conflict exists. One further refinement is recorded: P13 verifies the converse direction ("a graded bimodule tensor functor preserves coproducts and is right exact by the homogeneous balanced presentation") in the local lemma `lem-graded-tensor-functor-…` by transporting the ungraded right-exactness and direct-sum lemmas of batch 25 through the published degreewise exactness criterion; this proves the same two claims (right exactness and coproduct preservation, with no flatness), leaves the presentation machinery for the forward comparison of `lem-homogeneous-free-presentations-prove-the-graded-comparison`, and changes no statement of the design.

The manifest has 12 A items and 3 B items: the 8 A and 3 B binding claims plus
four local A-page suppliers required by the proof route
(`lem-graded-degreewise-direct-sums-and-homogeneous-free-covers`,
`lem-internal-shift-endofunctors-and-tensor-compatibility`,
`lem-graded-tensor-functor-is-k-linear-right-exact-coproduct-preserving-and-shift-coherent`,
`lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving`).
No binding claim was dropped or weakened, no inventory was padded, and the A
page is far below the 100-item cap. The B page is a dependency leaf requiring
only its A companion.

## Dependency and proof audit

All 15 items carry explicit `deps` arrays and `dependency_level` labels
recomputed from the whole-run graph (max level 7; levels 0 for
`lem-graded-degreewise-direct-sums-and-homogeneous-free-covers` and the P14
remark). Every external dependency is either a published item on
`graded-bimodules-and-tensor-functors`, `bounded-bimodule-complexes-and-derived-tensor`,
`tensor-and-fusion-categories`, or the published category-theory pages, or an
in-run item of batches 25 and 26 (all declared in their manifests and read
there). No target is a B-page item, a `proved_here: false` item, a Recorded
result, or a forward reference. The four cross-batch item edges and two
whole-page `requires` edges are recorded with exact use locations in
`research/frontier-41-ha-dt-29-batch-29.cross-batch-dependencies.json`; they are
`open` because the suppliers are scaffolded but not yet authored.

Key findings of the audit (published items were read, statements and where
needed proofs):

1. **Shift endofunctor and tensor compatibility.** The published definition
   `def-graded-ring-module-bimodule-and-internal-shift` states $(M\{r\})_d=M_{d-r}$,
   invertibility and $M\{0\}=M$, but not functoriality, the composition identity
   $(X\{r\})\{s\}=X\{r+s\}$ or the shift of a morphism; the cocycle in P13 uses
   all three. `lem-internal-shift-endofunctors-and-tensor-compatibility` supplies
   them together with preservation of the degreewise coproducts/kernels/cokernels
   and cites the published `lem-graded-balanced-tensor-and-shift-isomorphisms`
   part 3 for $M\{r\}\otimes_AN\{s\}\cong(M\otimes_AN)\{r+s\}$. No new sign or
   super convention is introduced.
2. **Coproducts and homogeneous free covers.** The published degreewise lemma
   gives finite biproducts, kernels and cokernels, but the graded module
   category's arbitrary coproducts and the shifted free modules $A\{d\}$ are
   not published in the form the presentation argument needs.
   `lem-graded-degreewise-direct-sums-and-homogeneous-free-covers` constructs
   them from the module direct sum of the homogeneous pieces, indexed by the
   actual homogeneous elements, so no basis, generator or resolution is chosen.
3. **Reconstruction.** P13's right action $m\cdot a=F(r_a)\theta^{-1}_{A,d}(m)$
   is well formed because $r_a:A\{d\}\to A$ is degree-zero left $A$-linear and
   raises degree by $d$; associativity uses $r_{ab}=r_b\circ(r_a\{e\})$,
   naturality of $\theta$ at $r_a$ and the cocycle at $A$; unit uses
   $r_1=\mathrm{id}$ and $\theta_{A,0}=1$; commutation with $B$ uses
   $B$-linearity of $F(r_a)$ and $\theta$. The removed ungraded edge is not
   needed for any of these steps.
4. **Comparison.** Balance of $\beta_X$ uses $\ell_{ax}=\ell_x\circ(r_a\{d\})$
   with the same naturality-plus-cocycle computation as the associativity law;
   naturality in $X$ uses $u\ell_x=\ell_{u(x)}$; shift compatibility is the
   square $\theta^F_{X,r}\tau_{X\{r\}}=(\tau_X\{r\})\theta^M_{X,r}$, checked on
   elementary tensors after unshifting; the free case is $\theta^{-1}_{A,d}$
   under the published unit and shift isomorphisms, coproducts of shifts follow
   from coproduct preservation of both functors, and the general case is the
   cokernel-universality argument of the batch-25 supplier
   `lem-canonical-free-presentation-controls-eilenberg-watts-comparison` with the
   first presentation map explicitly allowed non-monic.
5. **Converse and colimits.** `lem-graded-tensor-functor-…` proves $T_M$ is
   $k$-linear, right exact and coproduct preserving by transporting the ungraded
   batch-25 lemma `lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums`
   through the published degreewise exactness criterion, and proves the
   comparison unit/cocycle and the equivariance of $f\otimes1$ on elementary
   tensors. No flatness of $M$ is assumed: the published exactness theorem for
   graded tensor functors requires right flatness, and only right exactness plus
   coproduct preservation is claimed here.
   `lem-graded-additive-functor-preserves-colimits-iff-right-exact-and-coproduct-preserving`
   supplies the cocontinuity reformulation from the published general
   colimit-from-coproducts-and-cokernels item, so the theorem's object class may
   be read in either form.
6. **Local smallness and classification.** The hom-collection argument
   determines $\eta_X$ from $\eta_A$ through the canonical homogeneous free
   cover (right exactness makes $F(q_X),G(q_X)$ epic, coproduct preservation
   and the equivariance square determine the components on shifts). This is the
   graded analogue of the published HA-25 local-smallness lemma and is what
   makes the target category used by the equivalence and by the bicategorical
   corollary locally small.
7. **Bicategorical corollary.** The graded associators and unitors of
   `lem-graded-balanced-tensor-and-shift-isomorphisms` are degree-zero natural
   isomorphisms, and the pentagon/triangle are transported from the batch-26
   item `lem-bimodule-tensor-associators-and-unitors-satisfy-bicategory-coherence`
   because the graded balanced tensor is the ordinary balanced tensor with an
   induced grading and the coherence maps are the same underlying maps; the
   bicategory/pseudofunctor/biequivalence language is the batch-26 definition.
   Both edges are recorded as cross-batch inputs.
8. **Axiom of choice and size.** No item uses the Axiom of Choice or any
   incompatible axiom. All presentations are canonical (indexed by elements or
   homogeneous elements), all coproducts are genuine set-indexed colimits, and
   no resolution or class-wide inverse is chosen. No Foundations item is
   reachable and no Recorded result is consumed. `def-axiom-of-choice` is not a
   dependency of any item here.
9. **Published defects.** None found. The published suppliers used
   (`def-graded-ring-module-bimodule-and-internal-shift`,
   `lem-graded-module-kernels-cokernels-and-biproducts-are-degreewise`,
   `def-graded-balanced-tensor-product-and-homogeneous-hom`,
   `lem-graded-balanced-tensor-and-shift-isomorphisms`,
   `thm-finite-graded-projectives-…`, `thm-bimodule-tensor-exactness-…`,
   `thm-graded-bimodule-tensor-hom-adjunction`,
   `prop-restriction-and-extension-…`, and the bounded-complex items) state the
   hypotheses actually used (commutative ground ring, left-module handedness,
   degree-zero maps, no super signs, boundedness/projectivity for the derived
   remark). Hazrat's Theorem 2.3.7 is the graded-equivalence special case; the
   general right exact graded statement and the 2-cell classification are the
   local content of P13, as the design records.

## Sources and reading

`research/frontier-41-ha-dt-29-batch-29.coverage.json` records 28 harvest rows
over five sources, each with an exact locator and disposition; full text was
fetched and stamped by `tools/source-fetch-check.mjs --stamp` (5/5 resolved,
0 drops):

1. Roozbeh Hazrat, *Graded Rings and Graded Grothendieck Groups*,
   <https://arxiv.org/pdf/1405.5071>, 239 PDF pages, SHA-256
   `92672b9d6a23e0a5…`. Read §1.2.2 shift of modules (1.16) printed p.34,
   §1.2.4/1.2.9 graded free modules pp.36–41 and 47–53, §1.2.6 graded tensor
   (1.21)–(1.23) pp.40–41, and §2.3 pp.118–123 in full: Definition 2.3.3,
   Remark 2.3.4, the proof of Theorem 2.3.7, Theorem 2.3.8, Example 2.3.9 and
   Remark 2.3.10. Monograph-level backing for the page; Theorem 2.3.7 is
   recorded as the independently checked equivalence-special case and
   Remark 2.3.4 as the source of the 2-cell restriction that B5 witnesses as
   necessary.
2. Fuchs–Schaumann–Schweigert, *Eilenberg–Watts calculus for finite categories
   and a bimodule Radford $S^4$ theorem*, <https://arxiv.org/pdf/1612.04561v3>,
   41 PDF pages, SHA-256 `a9e7d26bf24dabb3…`. Read the introduction’s classical
   unital-ring statement (PDF pp.1–5), §2.1 Lemmas 2.1–2.2 and Corollary 2.3
   (pp.5–7), §2.10–2.11 Corollary 2.10 (p.13) and §3.1 Definition 3.1/Theorem
   3.2 opening (pp.13–15). The classical statement and the finite-categorical
   triangle are deferred to the in-run HA-25 and HA-27/28 pages; §4 (Radford
   $S^4$) is out of scope, as the design states.
3. Alexander Kleshchev, *Representation Theory of Symmetric Groups and Related
   Hecke Algebras*, <https://arxiv.org/pdf/0909.4844>, 66 PDF pages, SHA-256
   `8685199608967fa7…`. Read §2.2 "Graded representation theory" printed
   pp.6–8: the abelian category $H\text{-Mod}$ of graded left modules with
   degree-preserving maps, the shift $M\langle m\rangle$ with
   $M\langle m\rangle_n=M_{n-m}$ (the published $M\{m\}$), and the graded Hom
   $HOM_H(M,N)$. Backs the conventions used by the local lemmas.
4. M. Kamensky, *Non-Commutative Algebra* (BGU course notes),
   <https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf>,
   82 PDF pages, SHA-256 `889e8c0ac88bcf55…`. Read §5.1 printed pp.47–57
   (colimit characterization p.53, Theorem 5.1.43 and proof, Lemma 5.1.46,
   Corollary 5.1.48). The ungraded results are recorded as deferred to the
   in-run HA-25 page, which already scaffolds them; the graded colimit lemma
   here is proved independently from the published category-theory items.
5. M. Khovanov and P. Seidel, *Quivers, Floer Cohomology, and Braid Group
   Actions*, <https://arxiv.org/pdf/math/0006056>, 72 PDF pages, SHA-256
   `34e747083f6229d6…`. Read §2a–2c author pp.9–11: the self-equivalence
   $\{1\}$ shifting the grading, the homotopy category of bounded complexes of
   projectives, and the cochain shift $[k]$ with
   $\partial_{M[k]}=(-1)^k\partial_M$, explicitly declared "quite different"
   from $\{k\}$. Backs the internal-versus-cochain distinction of B5 and P14.

The coverage gate reports one advisory `coverage-low-yield` warning: 2 of 28
harvested results are scaffolded as `included` items, 7 are absorbed `inline`
into the local items (the local items prove the source’s facts in the same or
greater generality), 12 are `deferred` to resolvable in-run or published
destinations, 4 are `out-of-scope` with specific reasons, and 2 are
`already-published`. The warning is surfaced for Alpha rather than papered
over; the two `included` rows are Hazrat’s Theorem 2.3.7 (the graded theorem)
and Khovanov–Seidel’s two-shift distinction (the internal-shift example).

## Checks at scaffold completion

| Check | Actual result |
|---|---|
| `coverage-checklist.mjs … --require-destination` | pass: 1 A page, 28 harvested rows, 0 errors, 1 advisory warning (`coverage-low-yield`) |
| `source-fetch-check.mjs --coverage … --stamp` | pass: 5/5 sources newly full-text stamped (239/41/66/82/72 PDF pages); check mode re-run: 5/5 resolved, 0 drops |
| `manifest-deps.mjs` whole run (29 manifests) | pass: 359 items, 0 missing, 0 errors (whole-run counts move as other batches scaffold concurrently; batch 29 contributes 15) |
| `content-policy.mjs --manifest-only` whole run | pass: 359 scoped items, 0 errors, 0 warnings (single-batch invocation reports the four expected cross-batch “missing” edges that the engine deliberately avoids by running one whole-level join) |
| `item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | exit 1: only empty scaffold inventories of other batches (DT pairs, HA-27/28); no cycle and no label error involves batch 29; max level 7 |
| `step1-decisions.mjs check --run frontier-41-ha-dt-29` | batch 29: all 15 items `ready`, current and closed; whole-run check exit 1 with 96 work rows, none of them a batch-29 item |
| `validate-plan.mjs research/plan-spec.json` | exit 0: page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids |
| `extcheck.mjs --quiet` | exit 0: published-item unproved-dependency warnings outside this batch; no batch-29 path uses a Recorded item |
| `frontier-dependency-ledger.mjs refresh --run …` | refreshed; batch 29 reviewed with 6 rows (2 page, 4 item), 0 orphaned reviews; `--require-reviewed` still exit 1 because other batches have no inputs yet |
| `frontier-dependency-ledger.mjs refresh --require-reviewed` | exit 1 as expected: other batches’ inputs missing; the batch-29 rows are present and syntactically valid |

The six cross-batch edges are `open` because batches 25 and 26 are scaffolded
but not authored; Step 3 must confirm that the authored supplier statements and
proofs match the declared interfaces recorded in the ledger input.

One derived whole-run artifact was refreshed by the ledger tool
(`research/frontier-41-ha-dt-29-cross-batch-dependencies.json`). No published
content, shared plan, engine state or verdict was edited, and no other run’s
namespace was touched.

These readiness records and mechanical checks establish a complete scaffold
route with adequate, examined prerequisites. They are not an authored proof or
an independent mathematical approval; Step 3 must author every item and recheck
these arguments against the final consumer uses, and Steps 5–8 own audit and
adjudication.
