# Batch 25 — Eilenberg–Watts theorem and natural transformations

## Scope and design reconciliation

Owned pages: A `eilenberg-watts-theorem-and-natural-transformations` (order 919), B
`eilenberg-watts-theorem-and-natural-transformations-examples` (order 920). I read
`CLAUDE.md`, `AGENTS.md`, `SCHEMA.md`, `WORKFLOW.md`, the generated batch task, the owner
authoring direction `research/frontier-41-ha-dt-29-owner-authoring-direction.md`, the drift
review, and the relevant design text in `research/plan-homological-algebra-track.md`: the
HA-25–HA-29 conventions (L5405–5483), HA-25 P1–P4 (L5484–5579) and B1 in full, the
source-reading and local-closure table (L6234–6277), and the binding item inventories at
L6278–6320. The neighbouring HA-26–HA-29 full-proof sections (L5580–6233) were inspected for
cross-pair scope and deferred-result destinations only.

The two task-listed design locations are **not** competing texts: L6284 is the A-page heading
of the binding inventory table and L6300 is the B-page heading of the same table. The
controlling design text is the HA-25 section around them — conventions (L5405–5483), full
local proofs P1–P4 (L5484–5579), and B1 — with the inventory tables fixing the item IDs and
`justified_by` links. I preserved that scope (arbitrary unital rings, canonical comparison,
transformation classification, adjoints, flatness criterion; four B examples/counterexamples),
its left-module handedness, its "no commutativity, no choice" convention, and its proof route
(comparison before presentations, canonical free presentations, cokernel universality rather
than a five-lemma shortcut).

`research/plan-spec.json` agrees with the design on page IDs, orders, category, companions and
`requires`; its empty item arrays are the pre-splice planning state, not a conflict. The drift
review recorded `no-drift` for this page and verified the six declared `requires` pages. There
is **no design–plan conflict for page data**. There is one **dependency conflict inside the
design text**, recorded below under "Dependency and proof audit": three published suppliers
quoted by P3/P4 are stated only for commutative rings and cannot carry the design's
arbitrary-ring proof; the plan controls, so local suppliers were added and the inadequate
edges were replaced. This is a design-text correction, not a defect of any published item.

The manifest has 13 A items and 4 B items: all 11 A and all 4 B proposed claims of the
binding inventory, plus two required local suppliers on the A page
(`lem-tensoring-with-a-right-module-is-additive-right-exact-and-preserves-direct-sums`,
`lem-tensor-hom-adjunction-for-bimodules`). No pair, claim, or proof stage was dropped; the A
page is far below the 100-item cap, so no page split is needed. The B page requires only its A
companion and its items depend only on this pair's A items and published suppliers, so it
remains a dependency leaf; no B item is a supplier of anything else.

## Dependency and proof audit

All 17 items carry explicit `deps` arrays and `dependency_level` labels recomputed from the
graph (max level 4; 4 items at level 0). Every external dependency is a published item on one
of the declared `requires` pages or on the published category-theory pages reachable from
them; no target is a B-page item, a `proved_here: false` item, a Recorded result, or a
forward reference. There is no cycle and no in-run supplier outside this pair, so
`research/frontier-41-ha-dt-29-batch-25.cross-batch-dependencies.json` is `[]`; the only
ledger edges touching this batch are the page-level `requires` edges from batches 26 and 29
(consumers of this page), which belong to those consumer batches.

I read the statements (and where needed the proofs) of every examined dependency. Key
findings:

1. **Claimed published suppliers that assume commutativity.** The design's P3 says "Tensor is
   right exact by the existing library theorem", and its proposed deps for
   `lem-canonical-free-presentation-controls-eilenberg-watts-comparison` name
   `thm-right-exactness-of-tensor-products` and
   `thm-tensor-products-commute-with-arbitrary-direct-sums`. Both are published, but their
   statements begin "Let $R$ be a commutative ring" (they are theorems about $R$-modules
   under a commutative $R$), so neither applies to $M\otimes_A-$ with $A$ an arbitrary unital
   ring and $M$ a one-sided right $A$-module. Likewise P4's "published Hom–tensor adjunction"
   names `thm-hom-tensor-adjunction-for-modules`, whose statement begins "Let $R$ be a
   commutative ring" and whose right-hand side is the internal Hom of
   `def-internal-hom-module-over-a-commutative-ring`; it does not give
   $T_M\dashv\operatorname{Hom}_B(M,-)$ with the left $A$-action $(a\varphi)(m)=\varphi(ma)$
   for a $(B,A)$-bimodule $M$. These published items are correct in their stated scope; the
   defect is in the design's dependency choice for an arbitrary-ring proof. I replaced those
   edges with two new local lemmas proved from the arbitrary-ring universal properties:
   additivity, cokernel preservation and direct-sum preservation of $M\otimes_A-$ (N1), and
   the bimodule tensor–Hom adjunction with its left $A$-action (N2). Kamensky §5.1 and
   Nyman–Smith §2–§3 give independent treatments of both facts, and the published
   arbitrary-ring items `thm-universal-property-of-module-tensor-products`,
   `prop-functoriality-of-module-tensor-products`, `thm-unit-isomorphisms-for-module-tensor-products`,
   `thm-bimodule-actions-induced-on-tensor-products`, `def-direct-sum-of-a-family-of-modules`
   and `thm-universal-property-of-module-direct-sums` supply all the general-ring machinery
   used.
2. **Missing hypotheses on P1's equivalence.** The design's P1 asserts "preservation of all
   small colimits is equivalent to preservation of coproducts and cokernels" and that these
   functors "form a category". The published `def-preservation-reflection-creation-continuity-and-cocontinuity`
   defines cocontinuity, but the equivalence additionally needs
   `thm-small-colimits-from-coproducts-and-coequalizers`,
   `cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference`
   (to identify the coequalizer used with the cokernel of a difference, a finite colimit
   preserved by right exactness), and `thm-an-additive-functor-preserves-finite-biproducts`
   (finite coproducts are automatic for additive functors). Local smallness of the restricted
   functor category needs `cor-every-module-is-a-quotient-of-a-free-module` and
   `thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms`
   for the "component at $A$ determines every component" argument. These edges were added.
3. **Well-definedness order.** The P2 comparison is constructed before any presentation is
   chosen, exactly as the design requires; the added dependency
   `thm-bimodule-actions-induced-on-tensor-products` supplies the left $B$-module structure on
   $M\otimes_AX$ so that $\tau_X$ is a map of left $B$-modules, and
   `lem-evaluation-on-the-regular-module-has-a-commuting-right-action` proves that $F(A)$ is a
   $(B,A)$-bimodule (functoriality and additivity of $F$ give the right-module laws and
   commutation with the $B$-action). The free-presentation lemma additionally needs
   `thm-unit-isomorphisms-for-module-tensor-products` for $\tau_A$ and the direct-sum lemma
   for $\tau$ on free modules; the presentation's first map is explicitly allowed to be
   non-monic, and cokernel universality — not the five lemma — produces $\tau_X$.
4. **Flatness corollary.** The design's phrase "the published HA-18 theorem" was replaced by
   the explicit inputs: `def-left-and-right-flat-modules-over-an-arbitrary-ring` is exactly
   exactness of $M\otimes_A-$, and kernels/cokernels in $B\text{-Mod}$ are computed on the
   underlying abelian groups (`def-module-homomorphism-kernel-image-and-cokernel`,
   `thm-modules-over-a-ring-form-an-abelian-category`,
   `thm-abelian-groups-form-an-abelian-category`), so exactness of the $B$-module-valued
   functor coincides with the abelian-group exactness in the flatness definition. No
   left-side projectivity claim is made.
5. **Extension of scalars.** The published `def-restriction-and-extension-of-scalars` is
   stated for a unital homomorphism of **commutative** rings. The example is therefore stated
   in that scope, where the $(S,R)$-bimodule ${}_SS_R$ of the definition is available; the
   unit isomorphism $S\otimes_RR\cong S$ and the P2 right action $s\cdot r=sf(r)$ match the
   published right action exactly, and the functor is cocontinuous because extension of
   scalars is left adjoint to restriction. The final sentence notes that the same bimodule
   and computation work for arbitrary unital ring homomorphisms, but the published definition
   does not cover them; no claim depends on that sentence.
6. **Axiom of choice.** Only
   `cex-right-exact-module-functor-without-coproduct-preservation-is-not-tensor` uses AC. Its
   statement declares the assumption, its `deps` include `def-axiom-of-choice`, and the exact
   use is the coordinatewise lifting of a countable family of surjections making
   $F(V)=\prod_{n\ge0}V$ exact. The counterexample's statement and proof are
   `ai-generated` with `generation.role: counterexample` (the witness is design-authored, not
   harvested from a source). The main theorem, all corollaries, and the other example and
   counterexample are choice-free; the counterexample is not a dependency target. No path in
   this batch reaches `deferred-set-theory-beyond-choice` and no Recorded result is consumed.
7. **Proof strategies.** Every item records a complete proof strategy. The two new lemmas and
   the three items whose dependency sets were repaired (the free-presentation lemma, the
   tensor–Hom corollary, and the flatness corollary) carry the full argument including
   hypotheses, direction, and the exact point where cokernel universality, the unit
   isomorphism, the outer action, or the flatness definition is used. The three corollaries
   record where full faithfulness, essential surjectivity, and local smallness enter.

## Sources and reading

The owned coverage file `research/frontier-41-ha-dt-29-batch-25.coverage.json` records 25
harvested rows over four sources, each with an explicit locator and disposition. Full text
was fetched and stamped by `tools/source-fetch-check.mjs --stamp` (4/4 resolved, no drops):

1. M. Kamensky, *Non-Commutative Algebra* (BGU course notes, Spring 2017),
   <https://mkamensky.github.io/teaching/2017s/noncommutative-algebra/notes.pdf>, 82 PDF
   pages, SHA-256 `889e8c0ac88bcf5514c2d028fefadf4bda83f27dc6818bbca38c90f58e83a39a`.
   Read §5.1 printed pp. 47–57 (categorical preliminaries on (co)limits, Proposition 5.1.40,
   Exercise 5.1.41, Proposition 5.1.44, Lemma 5.1.46, Theorem 5.1.43 with its full proof,
   Corollaries 5.1.48–5.1.49) and §5.2 pp. 57–58. Theorem 5.1.43 is the arbitrary-unital-ring
   theorem in the precise form used here ("commutes with all colimits, equivalently with all
   quotients and direct sums"), and Corollary 5.1.48 states the equivalence of categories and
   the composition law $F_M\circ F_N\cong F_{M\otimes_SN}$ used by the composites example.
   This is the pair's book-level/lecture-note treatment.
2. A. Nyman and S. P. Smith, *A Generalization of Watts's Theorem: Right Exact Functors on
   Module Categories*, <https://arxiv.org/pdf/0806.0832>, 9 PDF pages, SHA-256
   `0474133e45b5a6a8de8510a0ce5191b5e10e72306b7100edf5bbe11a01a44a47`. Read pp. 1–8:
   Theorems 1.1–1.2, Lemma 2.2, Theorem 3.1, Propositions 3.2–3.3, and §3.3–3.4 with
   Lemma 3.4. This is the second independent complete proof of the arbitrary-ring theorem; its
   essential-surjectivity argument (unit at $R$, free modules via direct sums, cokernel of a
   map of free modules) and its component-at-$R$ determination of transformations are the
   design's P3/P4 route. §4 (affine schemes) is recorded out of scope.
3. J. Fuchs, G. Schaumann, C. Schweigert, *Eilenberg–Watts calculus for finite categories and
   a bimodule Radford $S^4$ theorem*, <https://arxiv.org/pdf/1612.04561v3>, 41 PDF pages,
   SHA-256 `a9e7d26bf24dabb35c2faa78daf7c7ecc2916143a69cee2800bd4d939b5b9708`. Read the
   introduction's classical statement for unital rings (the exact arbitrary-ring statement,
   with kernel $F(R_R)$) and inspected §2.1 Lemmas 2.1–2.2, §3.2 Theorem 3.2, §3.5
   Lemmas 3.15–3.16 and (3.56)–(3.58). The finite-dimensional and finite-category results are
   deferred to `finite-abelian-categories-and-eilenberg-watts` and
   `deligne-products-and-categorical-eilenberg-watts`; the introduction's classical statement
   is absorbed inline into the arbitrary-ring theorem.
4. P. Etingof, S. Gelaki, D. Nikshych, V. Ostrik, *Tensor Categories* (author final version),
   <https://math.mit.edu/~etingof/egnobookfinal.pdf>, 362 PDF pages, SHA-256
   `a40d076197b666d8b3b231ac59748a95f9b311d49ce57f4024c0da8308796db3`. Inspected printed
   pp. 9–11 (§1.8, Definitions 1.8.5–1.8.6, Proposition 1.8.10 including its free-presentation
   proof, Corollary 1.8.11) and printed pp. 15–16 (§1.11, Definition 1.11.1,
   Proposition 1.11.2). Proposition 1.8.10 is a genuine book treatment of the
   right-exact-implies-representable argument for finite-dimensional algebras; it is absorbed
   inline into the free-presentation lemma. The finite-category and Deligne results are
   deferred to the two sibling pairs named above. Only the stated sections were read; no
   whole-book reading is claimed.

Watts's original 1960 paper remains unread: the AMS body is served behind a JavaScript/cookie
challenge, and the design's scouting recorded six distinct failed or unusable accesses
(AMS PDF, Google/DuckDuckGo challenges, Bing, a 404 Morita-notes URL, two Stacks searches) in
`research/eilenberg-watts-expansion/source-manifest.json`. No claim in this batch depends on
that paper; it is bibliographic attribution only, and the arbitrary-ring theorem is
independently covered by items 1 and 2 above with a complete local proof. Because no harvested
result in the owned coverage file is backed by it, no `source_resolution` drop record is
created; the attempt history is preserved in the design's source manifest.

The coverage gate reports one advisory `coverage-low-yield` warning: 25 rows harvested, 4
scaffolded as dedicated items, 12 absorbed inline into the local items, and 9 declined (8
deferred with resolvable destinations, 1 out-of-scope with a specific reason). The inline
absorptions are deliberate — the local items
prove the source's propositions in the same or greater generality (for example Kamensky
Theorem 5.1.43, FSS's introduction, and EGNO Proposition 1.8.10 all collapse into the single
arbitrary-ring theorem plus its presentation lemma), so no separate item would add
mathematical content. The warning is surfaced for Alpha rather than papered over.

## Checks at scaffold completion

| Check | Actual result |
|---|---|
| `coverage-checklist.mjs` on the owned coverage file | pass: 1 A page, 25 harvested rows, 0 errors, 1 advisory warning (`coverage-low-yield`), every decline carries a 40+ character reason and a resolvable destination |
| `source-fetch-check.mjs --coverage ... --stamp` | pass: 4/4 sources newly full-text stamped (82/9/41/362 PDF pages); check mode re-run: 4/4 resolved, 0 drops |
| `manifest-deps.mjs` whole run (29 manifests) | pass: 17 items, 0 missing, 0 errors (other batches still empty scaffolds) |
| `content-policy.mjs --manifest-only` whole run | pass: 17 scoped items, 0 errors, 0 warnings |
| Pair-only `dependencyLevels` recomputation on the batch-25 manifest | pass: 17 items, 0 errors, max level 4; every label equals the computed level |
| `item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | exit 1: 28 other batches still have empty scaffold inventories; no cycle and no label error involves batch 25 |
| `validate-plan.mjs research/plan-spec.json` | exit 0: page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids among pages that carry item lists |
| `extcheck.mjs --quiet` | exit 0: 40 published-item unproved-dependency warnings outside this batch; no batch-25 path uses a Recorded item |
| Step-1 decision currency (`step1-decisions.mjs check`) | batch 25: all 17 items `ready`, current and closed; whole-run check exit 1 with 56 work rows, none of them a batch-25 item |
| `frontier-dependency-ledger.mjs refresh --run ... --require-reviewed` | exit 1 as expected: 28 batches have no cross-batch input yet; the refreshed unified ledger lists batch 25 as reviewed with an empty input, and the only edges touching page 919 are the page-level consumer edges from batches 26 and 29 |

One derived whole-run artifact was refreshed by the ledger tool
(`research/frontier-41-ha-dt-29-cross-batch-dependencies.json`); no published content, shared
plan, engine state, or verdict was edited, and no other run's namespace was touched.

These readiness records and mechanical checks establish a complete scaffold route with
adequate, examined prerequisites. They are not an authored proof or an independent
mathematical approval; Step 3 must author every item and recheck these arguments against the
final consumer uses, and Steps 5–8 own audit and adjudication.
