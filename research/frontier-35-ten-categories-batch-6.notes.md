# Frontier 35, batch 6 — Step 1 scaffold notes

Run `frontier-35-ten-categories`; beta batch 6. The owned A/B pairs are `diagonals-separated-morphisms-and-valuative-uniqueness` (orders 366.067–366.068; 27 A and 8 B items) and `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` (orders 366.071–366.072; 32 A and 9 B items). All 76 items have current Step-1 `ready` records. This is scaffold readiness, not independent mathematical approval or publication.

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned task, the complete AV-14 and AV-16 design sections of `research/plan-algebraic-geometry-track.md`, the current `research/plan-spec.json` rows, batch-3 supplier manifest/notes, and the existing run evidence before construction. `research/frontier-35-ten-categories-owner-authoring-direction.md` did not exist before construction or at final checking. No published content, shared plan, engine state, or verdict was edited.

## Plan and design reconciliation

The current plan agrees with the task on both A/B IDs, titles, category, orders, and page prerequisites. AV-14's `AV-12`, `AV-13`, and valuation-ring requirements match its three plan suppliers. AV-16's `AV-10`–`AV-13`, tensor/exactness, and conormal-algebra interface match its six plan suppliers, including the batch-3 `algebraic-differentials-separability-and-smooth-local-presentations` page. Thus there is no conflicting plan edge to amend. The plan's item lists for these pages are still empty; the owned manifests supply the Step-1 inventories without changing the shared plan.

The design inventories needed local prerequisites before their designed consumers. AV-14 adds `lem-separated-implies-valuative-uniqueness`, `lem-quasi-compact-immersion-boundary-specialization`, `lem-local-domain-dominated-by-valuation-overring`, and `def-relative-projective-space-standard-charts`. AV-16 adds `lem-differentials-diagonal-ideal-square` and `lem-finite-type-field-zero-differentials-finite-separable`. The designed AV-16 B label `cex-frobenius-differential-zero-not-etale` is represented by `cex-frobenius-zero-tangent-map-not-formally-etale`: it computes the absolute zero differential and the nonzero relative module, while the later AV-17 page owns the unqualified étale/smooth equivalence. The design's smooth-relative-dimension wording is recorded only as a differential-rank definition here; flatness and fibre conditions remain at AV-17. These are design-scope refinements, not changes to the plan's selected pairs or prerequisites. No page split or new pair is required.

The design's Vakil chapter/page numbers refer to a different pagination than the accessible 29 August 2022 author-hosted draft. The verified current locators are in the source table below. The B-page non-Hausdorff example is stated for every field (the generic and a closed point already suffice), rather than only infinite fields as the design suggested.

## Mathematical dependency review

I checked the statements of the direct published suppliers and read the load-bearing proof bodies, including affine fibre-product and closed-immersion constructions, gluing, valuation rings, lying over, Zorn/maximal ideals, Nakayama/determinant trick, Hilbert basis, finite minimal-prime theorem, Chinese remainder theorem, Nullstellensatz, algebraic closure, sheaf pullback/exactness, and tensor-product results. I also checked the seven batch-3 scaffold items in the transitive chain, including the separable-residue cotangent proof. A traversal from the 76 owned items reaches 877 declared items and 3,818 dependency edges: 794 published items, 76 owned items, and seven unpublished ready batch-3 items. There are zero missing, non-ready/unpublished external items, Recorded items, cycles, or forward edges. Every mapped direct and transitive supplier lies in the consumer page's plan prerequisite closure. No owned Foundations path reaches `deferred-set-theory-beyond-choice`.

I checked the closed-immersion convention behind `thm-affine-closed-immersions-quotient-rings`: its published proof cites [Stacks Lemma 26.10.1](https://stacks.math.columbia.edu/tag/01IN), while `def-closed-immersion-schemes` uses Hartshorne's two-condition scheme-morphism definition. [Stacks Lemma 26.24.2](https://stacks.math.columbia.edu/tag/01LD) proves these conventions agree for morphisms of schemes, and the existing `research/up-1630-review/agent-04-receipts.jsonl` accepts the published quotient classification as source-backed. This resolves the apparent hypothesis mismatch for this batch; it does not present the published proof as a new local derivation.

The separatedness converse is explicitly conditional on AC. Quasi-separatedness makes the diagonal a quasi-compact immersion. The boundary-specialization lemma finds a diagonal point η specializing to a boundary point t; the reduced closure of η gives a local domain inside κ(η), and the valuation-overring lemma gives a valuation ring dominating it. Its two projections contradict valuative uniqueness. The forward equalizer argument is choice-free and is separately available. The doubled-origin example uses the affine-overlap criterion directly. The rank-one valuation ring with value group Q gives a genuine non-Noetherian counterexample to a DVR-only test; the published DVR convention excludes fields. No Recorded result or incompatible axiom branch supplies these proofs.

The differential algebra, conormal and transitivity sequences, sheaf gluing, cotangent at a rational point, and dual-number tangent calculation have direct local proofs and assert no false left injectivity. For the unramified diagonal, the published determinant trick supplies the finite-idempotent-ideal step. The finite-type-field lemma states AC and uses an algebraic closure, Nullstellensatz, Nakayama, Hilbert basis, finite minimal primes, and Chinese remainder explicitly; its finite-type algebra becomes a product of copies of the algebraic closure, forcing finite separability. The residue-extension item is phrased at a point by the exact hypotheses “locally of finite type” and `Ω_{X/S,x}=0`; it uses batch 3's separable-residue cotangent sequence only after finite separability is established, then applies Nakayama. The later étale page is not consumed. The conormal counterexample uses `k[x]`, `I=(x²)`, and the nonzero class `[x³]∈I/I²` in every characteristic.

The A-page plan edge and three item edges to batch 3 are recorded with exact uses in `research/frontier-35-ten-categories-batch-6.cross-batch-dependencies.json`; the unified ledger was refreshed. Batch-3 suppliers are ready scaffolds, **not published items**. No defective actual published prerequisite was found in the examined chains. Unrelated global external-reference findings below do not block these new suppliers.

## Full-text sources and harvest

All six source entries were fetched as complete PDFs with `source-fetch-check --stamp`, and the relevant complete arguments were inspected from the downloaded text. Each A page has two independent full treatments: the Stacks Project and Vakil's author-hosted book draft. A source stamp proves access to full text, not the mathematical claims.

| A page | Treatment and exact inspected locators | Supported claims |
|---|---|---|
| Diagonals | [Stacks, *Schemes*](https://stacks.math.columbia.edu/download/schemes.pdf), printed pp. 35–46, §§26.19.7, 26.20.3–6, 26.21.1–18, 26.22.1–2, 26.23.2–8 | Diagonal immersion, graph/equalizer, separation, overlap and valuative uniqueness |
| Diagonals | [Vakil, *The Rising Sea*](https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf), printed pp. 303–316 §§11.2–11.4 and pp. 381–384 §13.7.1–4 | Independent separatedness, projective charts, and valuative treatment |
| Diagonals | [Stacks, *Commutative Algebra*](https://stacks.math.columbia.edu/download/algebra.pdf), printed p. 117 §10.50.2–5 | Dominating valuation overring, integral closure, inversion characterization |
| Differentials | [Stacks, *Commutative Algebra*](https://stacks.math.columbia.edu/download/algebra.pdf), printed pp. 329–334 §§10.131.1–16, pp. 397–399 §10.148.1–3, pp. 404–407 §10.151.1–8, and p. 431 §10.158.1 | Universal differentials, exact sequences, formal lifting, unramifiedness, finite-type field test |
| Differentials | [Stacks, *Morphisms of Schemes*](https://stacks.math.columbia.edu/download/morphisms.pdf), printed pp. 61–66 §§29.32–33, pp. 68–70 §29.35, and pp. 74–77 §29.36.1–14 | Sheaf differentials, base change, unramified/étale conventions, smoothness warning |
| Differentials | [Vakil, *The Rising Sea*](https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf), printed pp. 575–584 §22.2.2–20 | Independent full conormal/cotangent and affine-to-sheaf arguments |

The coverage file records 156 harvested rows: 78 canonical rows (76 included, two deferred) and 78 source-heading rows (47 included, 25 absorbed inline with item IDs, three deferred to `finite-proper-and-projective-morphisms` or `flat-smooth-and-etale-morphisms`, and three specifically out of scope with reasons). Each harvested heading has a disposition and locator. No source failed retrieval, no source was dropped, and no alternative-proof source waiver was used.

## Checks and unresolved findings

| Check | Final result |
|---|---|
| Owned `coverage-checklist --require-destination` | Two A pages, 156 harvested rows, zero errors/warnings |
| Owned full-text fetch check | Six of six source entries stamped and resolved; zero drops |
| Owned URL sweep and source backing | Four of four distinct URLs live; 36 source-listed authored results backed by open verified sources. The backing tool checks listed source results, not every proof. |
| Whole-run manifest dependencies | 640 items, zero normalized, zero errors |
| Whole-run manifest content policy | Zero errors/warnings |
| `validate-plan.mjs research/plan-spec.json` | Pass; acyclic page order, no declared item cycles/forward references/B-page dependencies/unresolved IDs among 1,188 pages with item lists. 431 plan pages still have empty item lists. |
| Owned Step-1 decisions | 76 current ready records, zero owned work rows; changed records refreshed in prerequisite order and unchanged ready records preserved |
| Consumer-batch dependency ledger | Four reviewed batch-6 edges, all verified against current batch-3 statements; unified refresh succeeded with zero orphaned reviews |

`extcheck.mjs` still exits with 12 **global, unrelated** errors. They concern `fs-every-subexponential-growth-group-has-polynomial-growth`, `thm-onan-scott-classification-of-finite-primitive-groups`, and unset prechecks on `rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem`, `rem-dominated-convergence-theorem`, `rem-hahn-banach-hamel-basis-open`, `rem-martins-axiom`, `rem-nonamenable-groups-without-nonabelian-free-subgroups`, `rem-sierpinski-ultrafilter-not-measurable`, `rem-suslin-line-non-ccc-square-unverified`, and `rem-vitali-non-measurable-set`. None lies in the owned dependency closure. The unified cross-batch ledger also shows another batch still unreviewed; batch 6 has no orphaned or unreviewed edge. These findings are outside this batch's edit authority and do not represent a defective actual prerequisite. Owner/operator reconciliation and Step 3 remain the mathematical approval gates.

---

# Frontier 35, batch 6 — Step 3b authoring notes (pair `diagonals-separated-morphisms-and-valuative-uniqueness`)

Writer: alpha-high, label `step3b-pair-diagonals-separated-morphisms-and-valuative-uniqueness-1aa1e069dac4beda`.
These rows cover the owned pair (366.067 / 366.068) only. The sibling pair
`kahler-differentials-conormal-sequences-and-infinitesimal-lifting` shares this batch and manifest; its Step-1
text above and its own Step-3b rows are its writer's, and the four batch-6 cross-batch input rows in
`research/frontier-35-ten-categories-batch-6.cross-batch-dependencies.json` were preserved unchanged. The owned
pair declares no cross-batch edge: of its 72 distinct declared dependencies, 46 are published items and 26 are
owned items, with zero draft items from other batches.

Inventory after authoring: 29 A items + 8 B items = 37, against 27 + 8 at Step 1. The two additions are the local
suppliers `lem-closed-immersion-local-on-target` and `lem-immersion-with-closed-image`, both placed before their
consumers on the same A page and registered in the batch manifest, the batch coverage file, the batch proof
contracts and the A/B library pages.

## Scaffold repairs made while authoring

1. `def-locally-closed-immersion` — dropped the parenthetical "equivalently, an open immersion followed by a closed
   immersion locally on the target": Stacks *Schemes* Remark 26.10.3 (tag 01IP, printed p.18) and Example 26.21.8
   show a general immersion need not factor that way, while the retained clause matches Stacks Definition 26.10.2(5).
2. `thm-immersion-monomorphism-locally-finite-type` — [F8] repointed from `lem-spectrum-localization-open-immersion`
   to `def-scheme`; new [F9] `thm-affine-closed-immersions-quotient-rings`; the old step 1.3 split into 1.3 (open
   immersions via the open-subscheme clause) and 1.4 (closed immersions via `A -> A/I`); steps 2.2 and 3.1
   re-referenced. Manifest row, `deps` and strategy updated.
3. `lem-graph-closed-separated-target` — added `thm-fibre-products-of-schemes-exist` to `deps` (the Cartesian square
   of the graph must exist); manifest row updated.
4. `cex-dvr-only-test-unsafe-without-hypotheses` — [F9] restated in the element form of
   `lem-spectrum-localization-open-immersion` (`Spec(A_g) = D(g)`); step 1.2 rewritten to deduce `V_g = K`
   directly from the two primes `(0) <= m_V`.
5. Restored the missing `## Proof` / `**Proof technique:** direct.` headings on 16 authored A proof items and added
   `## Remark` to `rem-hausdorff-analogy-limited`.
6. Reference and numbering repairs: `lem-monomorphism-diagonal-isomorphism` step 2.1 gained [F3];
   `ex-affine-line-diagonal-ideal` step 5.1 bracket corrected to `[F1, F3, F4, F5, F6, step 4.1]`;
   `ex-projective-line-diagonal-bihomogeneous-equation` renumbered `2.3 -> 3.1` and `3.1 -> 4.1` with the bracket
   corrected.
7. `lem-diagonal-is-immersion` — step 4.1 restated: composing with the open immersion $Q\hookrightarrow X\times_S X$
   identifies $X$ with the closed subscheme $\Delta_{X/S}(X)$ of $Q$, cut out on the chart $Q_i$ by the kernel of
   the multiplication map $m_i$; the previous wording wrongly identified $X$ with $Q$ itself. Bracket
   `[F2, step 2.1, step 3.1]`.
8. `lem-separated-implies-valuative-uniqueness` — steps 1.3 and 3.1: removed the unsupported sentence that a nonzero
   ideal of $R$ has a prime containing it. The argument now uses only that the generic point $(0)$ of
   $\operatorname{Spec}R$ lies in $e(E)=V(I)$, so $I\subseteq(0)$ and $I=0$; no prime existence is invoked, so the
   item remains choice-free.
9. `cor-morphisms-equal-on-dense-open-reduced-source` — the statement now assumes AC, because the reduced/dense case
   needs a prime of the nonzero localization $A_s$. `deps` extended with `def-axiom-of-choice`,
   `thm-proper-ideal-contained-in-maximal-ideal` and `cor-maximal-ideals-are-prime`; new [F5]; step 4.1 uses
   $A_s\ne0$ (with $A$ reduced and $s\ne0$, hence $s$ not nilpotent) plus [F5] to produce a prime
   $\mathfrak p\subseteq A$ with $s\notin\mathfrak p$, so $D(s)$ is a nonempty open disjoint from $U$. Manifest row
   (statement, strategy, deps) updated to match. No item consumes this corollary, so no assumption had to be
   propagated further.

## Checks actually run for this pair (Step 3b)

| Check | Result |
|---|---|
| `precheck.mts` on the 30 owned proof items (explicit paths) | 30 checked, 0 failing |
| `proof-contract.mjs ... --strict` on the batch-6 contracts (30 owned items, 172 citations, 198 derivations, 240 boundary rows) | 0 errors, 0 warnings, 30/30 |
| `rendercheck.mjs` on both owned library pages | clean (no wikilink in math, no unbalanced or nested delimiters, KaTeX and YAML parse) |
| `content-policy.mjs` on the batch-6 manifest | 0 owned errors; the 41 errors are `scope-item-missing` rows for the sibling pair's not-yet-authored items only |
| `coverage-checklist.mjs` on the owned coverage file with `--require-destination` | 2 pages, 161 harvested rows, 0 errors, 0 warnings |
| `manifest-deps.mjs` on the batch-6 manifest | 78 items, 0 normalized, 0 errors |
| `validate-plan.mjs research/plan-spec.json` | pass (acyclic; no item cycles, forward references, B-page dependencies or unresolved ids); only pre-existing `redundant-prereq` notes |
| `depcheck.mjs --quiet` | neither owned page nor any owned id appears anywhere in the output (global unrelated findings: 333 published-unaudited, 140 multi-home, 116 cited-not-in-deps, 9 b-leaf-content, 1 page-cycle, 1 link-unresolved) |
| `fwdcheck.mjs` | neither owned page nor any owned id appears (global unrelated findings only) |
| `frontier-dependency-ledger.mjs` input | batch-6 rows unchanged: the four verified sibling rows; the owned pair contributes no cross-batch edge |

## Item checkpoints

Rows are in prerequisite order; "deps" is the exact frontmatter dependency list of the authored item; "contract ok"
means the item is inside the strict-checked batch-6 proof contract (172 citations, 198 derivations, 240
boundary rows item by item).

| # | item | page | deps | source locators | checks | notes |
|---|---|---|---|---|---|---|
| 1 | `def-locally-closed-immersion` | A | `def-open-immersion-schemes`, `def-closed-immersion-schemes` | Stacks Schemes, Definition 26.10.2(5) and Section 26.21.2, printed pp.18, 39-40 | n/a (no proof) | Factorization is exhibited, not intrinsic data; repair dropped the unsupported "open-then-closed locally on the target" parenthetical (Stacks *Schemes* Rem. 26.10.3, tag 01IP). |
| 2 | `def-separated-morphism-schemes` | A | `def-diagonal-morphism-scheme`, `def-closed-immersion-schemes`, `def-quasi-compact-and-quasi-separated-morphism` | Stacks Schemes, Definition 26.21.3 (tag 01KK), printed p.40 | n/a (no proof) | Separated = closed-immersion diagonal; quasi-separated = quasi-compact diagonal; scheme separated over S; absolute separatedness over Spec Z. |
| 3 | `lem-closed-immersion-local-on-target` | A | `def-closed-immersion-schemes` | Stacks Schemes, Lemma 26.4.2 (tag 01HL), printed p.5 | precheck pass (direct, 6 steps); contract ok | Local supplier (new). Iff test over an open cover: forward by surjectivity on stalks, converse assembles injectivity, closed image and surjective structure map. |
| 4 | `def-separated-scheme-over-base` | A | `def-separated-morphism-schemes`, `def-scheme-over-base` | Stacks Schemes, Definition 26.21.3 and Lemmas 26.21.13-15, printed pp.40-42 | n/a (no proof) | X separated over S iff the structure morphism is separated; absolutely separated means separated over Spec Z. |
| 5 | `lem-diagonal-is-immersion` | A | `def-diagonal-morphism-scheme`, `def-locally-closed-immersion`, `lem-closed-immersion-local-on-target`, `thm-affine-fibre-product-tensor-ring`, `thm-affine-closed-immersions-quotient-rings`, `lem-fibre-product-open-restriction`, `lem-points-of-scheme-fibre-product-residue-tensors` | Stacks Schemes, Lemmas 26.21.1-2 and Section 26.10, printed pp.35, 18; Vakil Sections 11.3.1-2, printed pp.306-307 | precheck pass (direct, 9 steps); contract ok | Delta is an immersion; a point lies in its image iff both projections agree on it and induce the same residue-field map. Affine-chart computation Q_i = Spec(B_i (x)_{A_i} B_i) with the multiplication map B_i (x) B_i -> B_i. Repair: step 4.1 now says X is identified with the closed subscheme Delta(X) of Q (not with Q itself), cut out on the chart Q_i by the kernel of m_i. |
| 6 | `lem-affine-morphism-separated` | A | `def-affine-morphism-schemes`, `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme`, `thm-affine-fibre-product-tensor-ring`, `thm-affine-closed-immersions-quotient-rings`, `lem-fibre-product-open-restriction`, `lem-closed-immersion-local-on-target` | Stacks Schemes, Lemmas 26.21.1 and 26.21.15, printed pp.35, 42; Vakil Section 11.3.4, printed p.308 | precheck pass (direct, 6 steps); contract ok | Affine morphisms are separated, no finiteness hypotheses; each Q_W is affine and the restricted diagonal is the multiplication surjection. |
| 7 | `cor-affine-schemes-separated` | A | `lem-affine-morphism-separated`, `def-affine-morphism-schemes`, `def-separated-scheme-over-base`, `lem-fibre-product-open-restriction`, `thm-affine-fibre-product-tensor-ring` | Stacks Schemes, Lemma 26.21.15, printed p.42 | precheck pass (direct, 5 steps); contract ok | Every morphism of affine schemes is separated; every affine scheme is absolutely separated; affineness is not inferred from separatedness. |
| 8 | `lem-separated-stable-under-base-change` | A | `def-separated-morphism-schemes`, `def-base-change-morphism-schemes`, `lem-diagonal-base-change-identification`, `lem-base-change-open-closed-immersions` | Stacks Schemes, Lemma 26.21.12, printed p.41; Vakil Section 11.3.3, printed p.308 | precheck pass (direct, 5 steps); contract ok | Base change of separated is separated via X' x_{S'} X' = (X x_S X) x_S S'. |
| 9 | `lem-separated-stable-under-composition` | A | `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme`, `def-closed-immersion-schemes`, `lem-graph-as-pullback-diagonal`, `lem-base-change-open-closed-immersions`, `thm-fibre-products-of-schemes-exist` | Stacks Schemes, Lemmas 26.21.9 and 26.21.12, printed p.41; Vakil Section 11.3.3, printed p.308 | precheck pass (direct, 6 steps); contract ok | Closed immersions compose; Delta_{X/S} = u o Delta_{X/Y} with u the base change of Delta_{Y/S}. |
| 10 | `lem-separated-local-on-base` | A | `def-separated-morphism-schemes`, `lem-diagonal-base-change-identification`, `lem-closed-immersion-local-on-target`, `lem-base-change-open-closed-immersions` | Stacks Schemes, Lemma 26.21.12, printed p.41; Vakil Section 11.3.3, printed p.308 | precheck pass (direct, 7 steps); contract ok | Iff on an open cover of the base, including empty and one-element covers; uses locality of closed immersions (tag 01HL). |
| 11 | `lem-monomorphism-diagonal-isomorphism` | A | `def-diagonal-morphism-scheme`, `def-separated-morphism-schemes`, `def-fibre-product-schemes-universal-property`, `thm-fibre-products-of-schemes-exist`, `lem-immersions-and-localizations-monomorphisms` | Stacks Schemes, Lemmas 26.23.1-3 (tags 01L1-01L4), printed p.47; Vakil Section 11.2.3, printed p.306 | precheck pass (direct, 6 steps); contract ok | j is a monomorphism iff Delta_{X/Y} is an isomorphism; a monomorphism is separated since an isomorphism is a closed immersion. |
| 12 | `lem-graph-closed-separated-target` | A | `def-separated-morphism-schemes`, `def-graph-morphism-over-base`, `lem-graph-as-pullback-diagonal`, `lem-base-change-open-closed-immersions`, `thm-fibre-products-of-schemes-exist` | Stacks Schemes, Lemma 26.21.10, printed p.41; Vakil Section 11.3.6, printed p.309 | precheck pass (direct, 4 steps); contract ok | Graph is a closed immersion when the target is separated; the graph is the base change of the diagonal. Repaired by adding thm-fibre-products-of-schemes-exist to deps. |
| 13 | `thm-morphisms-agree-closed-equalizer-separated-target` | A | `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme`, `def-fibre-product-schemes-universal-property`, `thm-fibre-products-of-schemes-exist`, `lem-base-change-open-closed-immersions`, `lem-immersions-and-localizations-monomorphisms` | Stacks Schemes, Lemma 26.21.5, printed p.40; Vakil Section 11.4.A, printed pp.314-315 | precheck pass (direct, 5 steps); contract ok | Equalizer E -> X is a closed immersion and represents agreement; E is the base change of Delta_{Y/S} along (a,b). |
| 14 | `cor-morphisms-equal-on-dense-open-reduced-source` | A | `thm-morphisms-agree-closed-equalizer-separated-target`, `def-reduction-of-scheme`, `def-reduced-affine-scheme`, `def-closed-immersion-schemes`, `def-axiom-of-choice`, `thm-proper-ideal-contained-in-maximal-ideal`, `cor-maximal-ideals-are-prime` | Stacks Schemes, Lemma 26.21.5, printed p.40; Vakil Section 11.4.2, printed p.315 | precheck pass (direct, 7 steps); contract ok | AC item after repair: agreement on an open U with O_X -> j_*O_U injective forces equality; in the reduced + dense case a nonzero s gives a nonempty basic open D(s) disjoint from U, and producing a prime of the nonzero localization A_s is the exact AC use, cited as [F5] (thm-proper-ideal-contained-in-maximal-ideal + cor-maximal-ideals-are-prime). No item consumes this corollary, so no propagation was needed. |
| 15 | `lem-diagonal-quasi-compact-iff-quasi-separated` | A | `def-quasi-compact-and-quasi-separated-morphism`, `def-quasi-compact-and-quasi-separated-scheme`, `def-scheme`, `thm-affine-fibre-product-tensor-ring`, `lem-fibre-product-open-restriction`, `cor-affine-scheme-quasi-compact`, `def-diagonal-morphism-scheme` | Stacks Schemes, Lemma 26.21.6, printed p.40; Vakil Section 11.2.4, printed p.306 | precheck pass (direct, 8 steps); contract ok | Three equivalent conditions plus finite affine covers of pairwise intersections over a common affine base. |
| 16 | `def-valuative-diagram-separatedness` | A | `def-valuation-ring`, `def-separated-morphism-schemes`, `def-field-of-fractions` | Stacks Schemes, Definition 26.20.3 and Section 26.22, printed pp.37, 44; Vakil Section 13.7.4, printed p.383 | n/a (no proof) | Diagram = valuation ring R in its fraction field K with Spec K -> X and Spec R -> S commuting; lift = compatible Spec R -> X. |
| 17 | `lem-separated-implies-valuative-uniqueness` | A | `def-separated-morphism-schemes`, `def-valuative-diagram-separatedness`, `thm-morphisms-agree-closed-equalizer-separated-target`, `def-valuation-ring`, `thm-affine-closed-immersions-quotient-rings` | Stacks Schemes, Lemma 26.22.1 (tag 01KZ), printed p.44 | precheck pass (direct, 6 steps); contract ok | At most one lift, choice-free: the closed equalizer E = V(I) in Spec R contains the generic point (0) in its image, so I is contained in (0) and I = 0. Repair removed the unsupported sentence about primes containing a nonzero ideal of R; no prime existence is used, so the item stays choice-free. |
| 18 | `lem-quasi-compact-immersion-boundary-specialization` | A | `def-locally-closed-immersion`, `def-quasi-compact-and-quasi-separated-morphism`, `def-quasi-compact-and-quasi-separated-scheme`, `def-scheme`, `def-morphism-affine-schemes-from-ring-map`, `def-principal-distinguished-subset-of-spectrum`, `cor-specialisation-order-is-prime-inclusion`, `cor-affine-scheme-quasi-compact`, `lem-base-change-quasi-compact-morphisms`, `thm-proper-ideal-contained-in-maximal-ideal`, `def-axiom-of-choice` | Stacks Schemes, Lemma 26.19.7 (tag 05JL, printed p.36) and Commutative Algebra, Lemma 10.41.5 (tag 00HY, printed p.96); Stacks Commutative Algebra, printed p.96 | precheck pass (direct, 7 steps); contract ok | AC item: t in closure minus image yields eta <= t. Quasi-compactness gives a finite affine cover; a nonempty localization (colimit) yields a prime over p, the exact use of the AC maximal-ideal theorem. |
| 19 | `lem-local-domain-dominated-by-valuation-overring` | A | `def-valuation-ring`, `def-local-ring`, `def-field-of-fractions`, `def-integral-element-and-algebraic-integer`, `def-axiom-of-choice`, `thm-zorn`, `thm-lying-over` | Stacks Commutative Algebra, Lemmas 10.50.1-10.50.5 (tags 00I9, 00IA, 00IB, 00IC, 052K), printed p.117 | precheck pass (direct, 11 steps); contract ok | AC item: Zorn on local subrings dominating A; a maximal element has fraction field K and is integrally closed; x not in V forces 1 = sum t_i x^i, so x^{-1} is integral over V. |
| 20 | `lem-immersion-with-closed-image` | A | `def-locally-closed-immersion`, `def-closed-immersion-schemes` | Stacks Schemes, Lemma 26.10.4, printed p.18 | precheck pass (direct, 4 steps); contract ok | Local supplier (new). An immersion with closed image is a closed immersion; stalks outside the image are zero and inside factor through the open-immersion stalk isomorphism. |
| 21 | `thm-valuative-criterion-separatedness` | A | `def-valuative-diagram-separatedness`, `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme`, `def-local-ring`, `def-residue-field-scheme-point`, `def-axiom-of-choice`, `lem-diagonal-is-immersion`, `lem-diagonal-quasi-compact-iff-quasi-separated`, `lem-separated-implies-valuative-uniqueness`, `lem-immersion-with-closed-image`, `lem-quasi-compact-immersion-boundary-specialization`, `lem-local-domain-dominated-by-valuation-overring`, `lem-field-valued-points-of-schemes` | Stacks Schemes, Lemma 26.22.2 (tag 01L0), printed p.44; Vakil Section 13.7.4, printed p.383 | precheck pass (direct, 11 steps); contract ok | Main AC theorem: quasi-separated f is separated iff all valuative diagrams over arbitrary valuation rings have at most one lift. Converse: boundary specialization, affine chart, dominating valuation ring V, two distinct projections; AC used exactly in the two AC lemmas. |
| 22 | `thm-immersion-monomorphism-locally-finite-type` | A | `def-locally-closed-immersion`, `def-open-immersion-schemes`, `def-closed-immersion-schemes`, `def-locally-finite-type-and-finite-type-morphism`, `lem-immersions-and-localizations-monomorphisms`, `lem-monomorphism-diagonal-isomorphism`, `lem-finite-type-local-on-source-and-target`, `def-scheme`, `thm-affine-closed-immersions-quotient-rings` | Stacks Morphisms of Schemes, Section 29.15 and Schemes, Section 26.23.8, printed pp.61, 48 | precheck pass (direct, 8 steps); contract ok | Immersion => monomorphism, locally of finite type and separated; finite presentation not claimed. Repaired: [F8] repointed to def-scheme, [F9] thm-affine-closed-immersions-quotient-rings added, step 1.3 split into 1.3 (open) and 1.4 (closed). |
| 23 | `lem-separatedness-of-open-and-closed-immersions` | A | `def-locally-closed-immersion`, `def-open-immersion-schemes`, `def-closed-immersion-schemes`, `def-separated-morphism-schemes`, `lem-immersions-and-localizations-monomorphisms`, `lem-monomorphism-diagonal-isomorphism`, `thm-immersion-monomorphism-locally-finite-type`, `lem-separated-stable-under-composition` | Stacks Schemes, Lemma 26.23.8, printed p.48; Vakil Section 11.3.C, printed p.308 | precheck pass (direct, 3 steps); contract ok | Open, closed and locally closed immersions are separated morphisms; monomorphism route plus composition. |
| 24 | `thm-separatedness-gluing-overlap-criterion` | A | `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme`, `def-scheme`, `thm-affine-fibre-product-tensor-ring`, `thm-affine-closed-immersions-quotient-rings`, `lem-fibre-product-open-restriction`, `lem-closed-immersion-local-on-target` | Stacks Schemes, Lemmas 26.21.7-8 (tags 01KM-01KN), printed p.41; Vakil Sections 11.3.11-12, printed pp.311-312 | precheck pass (direct, 8 steps); contract ok | Affine-overlap criterion: U_ij cap U_ik affine and B_ij (x)_{A_i} B_ik -> Gamma(U_ij cap U_ik) surjective; affineness of intersections alone is not sufficient. |
| 25 | `cor-doubled-origin-not-separated` | A | `thm-separatedness-gluing-overlap-criterion`, `def-quasi-compact-and-quasi-separated-morphism`, `def-discrete-valuation-ring`, `lem-diagonal-quasi-compact-iff-quasi-separated`, `thm-gluing-affine-schemes` | Stacks Schemes, Lemmas 26.21.7-8 and Example 26.22.2, printed pp.41-45; Vakil Sections 11.3.I and 13.7.C, printed pp.309, 382 | precheck pass (direct, 7 steps); contract ok | Doubled origin is quasi-separated but not separated; the k[t]_(t) diagram has two lifts. Re-anchored to the published thm-gluing-affine-schemes for the construction of D. |
| 26 | `def-relative-projective-space-standard-charts` | A | `thm-gluing-affine-schemes`, `thm-fibre-products-of-schemes-exist`, `def-scheme-over-base`, `def-affine-scheme`, `def-open-immersion-schemes` | Vakil Section 11.3.8, printed pp.309-310; Stacks Schemes, Section 26.14.4, printed p.25 | n/a (no proof) | Standard charts U_i = Spec Z[x^(i)] with glueing along D(x^(i)_j); the B-page prerequisite for the P^n diagonal computation. |
| 27 | `lem-projective-space-diagonal-closed` | A | `def-relative-projective-space-standard-charts`, `thm-separatedness-gluing-overlap-criterion`, `lem-separated-local-on-base`, `thm-affine-fibre-product-tensor-ring`, `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme` | Stacks Schemes, Lemma 26.21.8, printed p.41; Vakil Section 11.3.8, printed pp.309-310 | precheck pass (direct, 8 steps); contract ok | Diagonal of P^n_S is a closed immersion; chartwise surjections A[x^(i),y^(j)] -> A[x^(i)]_(x^(i)_j) with explicit kernel; base change reduces to affine S. |
| 28 | `rem-hausdorff-analogy-limited` | A | `def-separated-morphism-schemes`, `cor-affine-schemes-separated` | Vakil Exercise 11.3.B and Section 10.1.2, printed p.308; Stacks Schemes, Section 26.21 introduction, printed pp.39-40 | n/a (no proof) | Separated is not Zariski Hausdorff: the scheme-theoretic fibre product is not the product of point spaces. |
| 29 | `rem-valuative-criterion-quantifies-all-valuation-rings` | A | `thm-valuative-criterion-separatedness`, `def-valuative-diagram-separatedness`, `def-valuation-ring`, `def-discrete-valuation-ring`, `def-axiom-of-choice` | Vakil Theorems 13.7.1 and 13.7.4, printed pp.381-383; Stacks Schemes, Lemmas 26.22.1-2, printed p.44 | n/a (no proof) | The quantifier cannot be narrowed to DVRs without finite-type/locally Noetherian hypotheses; fields are included and never obstruct uniqueness; cites Vakil Thm 13.7.1 for the correct DVR context. |
| 30 | `ex-affine-line-diagonal-ideal` | B | `def-diagonal-morphism-scheme`, `thm-affine-fibre-product-tensor-ring`, `thm-affine-closed-immersions-quotient-rings`, `lem-closed-immersion-local-on-target`, `lem-diagonal-base-change-identification`, `thm-fibre-products-of-schemes-exist` | Stacks Schemes, Lemma 26.21.1 (tag 01KI) and Definition 26.21.3, printed pp.39-40; Vakil Proposition 11.3.1, printed pp.306-307 | precheck pass (direct, 5 steps); contract ok | Delta_{A^1} = V(x-y) ~= A^1 via the surjection A[x,y] -> A[x] with kernel (x-y); relative version over an arbitrary base. |
| 31 | `ex-projective-line-diagonal-bihomogeneous-equation` | B | `lem-projective-space-diagonal-closed`, `def-relative-projective-space-standard-charts`, `thm-affine-fibre-product-tensor-ring` | Stacks Schemes, Example 26.21.8 (tag 01KQ), printed p.41; Vakil Proposition 11.3.8, printed pp.309-310 | precheck pass (direct, 6 steps); contract ok | Bihomogeneous equation x_0 y_1 - x_1 y_0; chartwise reductions y - x = 0 and 1 - xz = 0; steps renumbered 2.3 -> 3.1 and 3.1 -> 4.1 with bracket corrected. |
| 32 | `cex-doubled-origin-diagonal-not-closed` | B | `cor-doubled-origin-not-separated`, `def-diagonal-morphism-scheme`, `thm-affine-fibre-product-tensor-ring` | Stacks Schemes, Lemma 26.21.7 and Example 26.21.8, printed p.41; Vakil Exercise 11.3.I, printed p.309 | precheck pass (counterexample, 6 steps); contract ok | Diagonal image of the doubled origin is dense but not closed in the cross chart U x_k V; witness (0,0). |
| 33 | `cex-doubled-origin-valuative-nonuniqueness` | B | `cor-doubled-origin-not-separated`, `def-valuative-diagram-separatedness`, `def-discrete-valuation-ring`, `def-discrete-valuation`, `def-valuation-on-a-field` | Vakil Exercise 13.7.C, printed p.382; Stacks Schemes, Lemma 26.22.2 and Example 26.22.2, printed p.44 | precheck pass (counterexample, 6 steps); contract ok | Two distinct lifts over the DVR k[t]_(t), so a single DVR diagram already fails uniqueness. |
| 34 | `ex-graph-closed-polynomial-map-scheme` | B | `def-graph-morphism-over-base`, `lem-graph-closed-separated-target`, `lem-affine-morphism-separated`, `thm-affine-fibre-product-tensor-ring`, `thm-affine-closed-immersions-quotient-rings` | Stacks Schemes, Lemma 26.21.10, printed p.42; Vakil Proposition 11.3.6, printed p.309 | precheck pass (direct, 7 steps); contract ok | Graph = V(y_1 - g_1(x), ..., y_n - g_n(x)) is a closed subscheme isomorphic to A^m via the first projection; n = 0 and m = 0 included. |
| 35 | `cex-zariski-space-nonhausdorff-yet-separated-scheme` | B | `cor-affine-schemes-separated`, `rem-hausdorff-analogy-limited` | Vakil Exercise 11.3.B, printed p.308; Stacks Schemes, Section 26.21 introduction, printed pp.39-40 | precheck pass (counterexample, 4 steps); contract ok | Separated does not imply Hausdorff: any two nonempty opens of Spec k[t] meet. |
| 36 | `ex-open-immersion-valuative-uniqueness-not-existence` | B | `lem-separatedness-of-open-and-closed-immersions`, `lem-separated-implies-valuative-uniqueness`, `def-valuative-diagram-separatedness`, `def-discrete-valuation`, `def-discrete-valuation-ring` | Vakil Theorem 13.7.4 and Exercise 13.7.A, printed p.383; Stacks Schemes, Lemma 26.22.1 and Section 26.23, printed pp.44-45 | precheck pass (direct, 6 steps); contract ok | D(t) in A^1: uniqueness holds (open immersions are separated) but the k[t]_(t) diagram has no lift, since t would have to become a unit. |
| 37 | `cex-dvr-only-test-unsafe-without-hypotheses` | B | `def-valuation-ring`, `def-discrete-valuation-ring`, `def-discrete-valuation`, `thm-gluing-affine-schemes`, `thm-separatedness-gluing-overlap-criterion`, `def-valuative-diagram-separatedness`, `def-morphism-of-schemes`, `lem-diagonal-quasi-compact-iff-quasi-separated`, `cor-affine-scheme-quasi-compact`, `lem-spectrum-localization-open-immersion` | Vakil Theorems 13.7.1 and 13.7.4, printed pp.381-383; Stacks Schemes, Lemma 26.21.7 and Lemma 26.22.2, printed pp.41, 44 | precheck pass (counterexample, 11 steps); contract ok | New ai-generated statement: glue Spec V along Spec K, V = union_n k[t^{1/n}]_(t^{1/n}) of value group Q; quasi-separated, non-separated, all DVR diagrams have <= 1 lift, two lifts over V. Repair: [F9] element form of lem-spectrum-localization-open-immersion; step 1.2 derives V_g = K. |

## Open obligations and handoff

- All 37 items carry a Step 3b decision receipt at the current content hash (`decision: accept`, confidence 1,
  `research/frontier-35-ten-categories-step3b-review-<id>.json`), recorded only after the item was written and the
  checks above had run; the pair scope decision was refreshed to `sufficient` for the post-author scope hash.
- Published concerns: no published item depends on anything owned here (an explicit scan found zero consumers), so
  authoring produced no published-consumer event. `thm-affine-closed-immersions-quotient-rings` was inspected for a
  possible convention mismatch and is sound: Stacks Lemma 10.1 (tag 01IN) is stated for closed immersions of
  locally ringed spaces in the two-condition sense used by the published `def-closed-immersion-schemes`, and
  Lemma 24.2 (tag 01LD) proves the two conditions characterize closed immersions of schemes. No defect claimed.
  Global gate findings outside this pair's closure (12 extcheck errors; the brauer/blocks page cycle;
  published-unaudited rows) are unrelated to it.
- Open obligations: none requiring owner action for this pair. `cex-dvr-only-test-unsafe-without-hypotheses` is the
  only item with `provenance.statement: ai-generated`; it has no dependents and its argument was checked by hand
  (value group Q, V not Noetherian, `v_A(t) = n v_A(t^{1/n})` impossible). The AC assumption is declared and
  propagated on the four AC items (`lem-quasi-compact-immersion-boundary-specialization`,
  `lem-local-domain-dominated-by-valuation-overring`, `thm-valuative-criterion-separatedness`,
  `cor-morphisms-equal-on-dense-open-reduced-source`; the last one was added during this dispatch and nothing
  consumes it, so no further propagation is needed);
  `lem-separated-implies-valuative-uniqueness` stays choice-free.
- Next action: none from this pair; hand off to Step 4 (post-author inventory snapshot and plan splice).

## Second-pass audit — attempt 2 (label `step3b-pair-diagonals-separated-morphisms-and-valuative-uniqueness-ea06ccd0fccf0384`)

Attempt 1 (label `1aa1e069dac4beda`) wrote all 37 items, both pages, the manifest, coverage, contracts, notes and the
pair report; scope was `sufficient` and every item `accept` at that content hash. This second pass re-read the pair,
re-verified the closure state, re-read the two published suppliers of the valuative chain and audited every Stacks
tag cited by the 37 owned items, and repaired three defects. Nothing outside the pair was edited: the sibling pair
`kahler-differentials-conormal-sequences-and-infinitesimal-lifting` keeps its 32 A + 9 B manifest rows and all four
`cross-batch-dependencies.json` rows byte-identically, and neither library page was touched.

### Corrections to earlier rows in this file (superseded text)

- Row 19 (`lem-local-domain-dominated-by-valuation-overring`): deps are now nine, adding
  `thm-proper-ideal-contained-in-maximal-ideal` and `cor-maximal-ideals-are-prime`; the source line now reads
  "Definition 10.50.1 and Lemmas 10.50.2-10.50.5 (tags 00I9, 00IA, 00IB, 00IC, 052K)" because Stacks 10.50.1 is a
  definition, not a lemma (tags 00I9/00IA/00IB/00IC/052K re-fetched from stacks.math.columbia.edu on 2026-09-24).
- Row 24 (`thm-separatedness-gluing-overlap-criterion`): the cited tags are `01KP-01KQ`, not `01KM-01KN`
  (01KM is Lemma 26.21.5 and 01KN is Lemma 26.21.15; 01KP = Lemma 26.21.7, 01KQ = Example 26.21.8).

### Repair 1 — `lem-local-domain-dominated-by-valuation-overring` (facts, proof, deps, contract)

Step 5.2 deduced `m_V A' = A'` from "no prime of A' lies over m_V" citing only [F2] and steps 3.1, 4.3; the
inference needs that a proper ideal of the nonzero ring `A' = V[x]` is contained in a maximal ideal, and that a
maximal ideal is prime. Repair: new facts [F7] `thm-proper-ideal-contained-in-maximal-ideal` (AC) and [F8]
`cor-maximal-ideals-are-prime`, cited at step 5.2, plus the explicit equivalence "m' contains m_V A' iff m' lies
over m_V" (the converse uses maximality of m_V in V). Statement unchanged; the item already assumes AC and the new
fact is AC-derived, so no change to the AC declaration or its propagation. Contract: two new citation entries with
exact Statement quotes, step-5.2 derivation inputs [F2, F7, F8, 3.1, 4.3, step 3.1, step 4.3], and the
`nonempty-choice` boundary evidence extended to step 5.2 through [F7]. Manifest row deps and strategy updated.

### Repair 2 — `thm-separatedness-gluing-overlap-criterion` (source locator only)

The reference line cited "tags 01KM-01KN" for Stacks Lemmas 26.21.7-8; the live tags are 01KP (Lemma 26.21.7) and
01KQ (Example 26.21.8). Statement, facts and proof are unchanged. The empty-intersection convention was re-audited
and kept: for `U ∩ V = ∅` the coordinate ring is the zero ring (`Spec 0 = ∅` is affine) and the map
`B ⊗_A C → 0` is surjective, so Stacks' criterion needs no nonemptiness hypothesis; 01KP states the condition for
every pair of affine opens over a common affine open, and its proof writes the closed subscheme as
`Spec((A ⊗_R B)/J)` with `J` the unit ideal exactly when the intersection is empty.

Refuted suspicion (recorded for honesty): the attempt-1 handoff proposed that the criterion needed a
"`U_ij ∩ U_ik ≠ ∅`" hypothesis and offered `Spec k ⊔ Spec k` over `Spec k` as a counterexample. That is wrong:
the zero ring has one element, so every map into it — in particular `k → 0` — is surjective, and the empty scheme
is affine; the separated disjoint union satisfies the criterion as stated. No repair was made for this.

### Repair 3 — `thm-valuative-criterion-separatedness` steps 7.1 and 9.1 (proof wording)

Step 7.1 asserted `V/m_V = κ(t)`; the local homomorphism `O_{P,t} → V` induces only a canonical field map
`κ(t) → V/m_V` (injective, since both sides are fields), and `V/m_V` may be a proper extension of `κ(t)`. The step
now derives "closed point ↦ t" from the [F9] correspondence attached to the local homomorphism of step 6.1 and
states the residue-field map as that injection; the generic-point clause keeps the kernel computation
`ker(O_{P,t} → K) = qR_p` of step 5.1. Step 9.1 now states explicitly that the residue-field maps of `a` and `b`
at the closed point factor as `κ(pr_i(t)) → κ(t) → V/m_V` and that the injective map `κ(t) → V/m_V` makes the two
differing maps `κ(x) → κ(t)` distinguish `a` from `b`. Statement unchanged; the contract derivations for steps 7.1
and 9.1 carry the new claims and inputs.

### Dependent re-examination (dependency freshness only)

None of the three repairs changed a statement or an inventory entry. The receipts of the seven dependent items were
refreshed after rechecking that each cites the repaired items through their statements: `cor-doubled-origin-not-separated`,
`lem-projective-space-diagonal-closed`, `ex-projective-line-diagonal-bihomogeneous-equation`,
`cex-doubled-origin-diagonal-not-closed`, `cex-doubled-origin-valuative-nonuniqueness`,
`cex-dvr-only-test-unsafe-without-hypotheses` and `rem-valuative-criterion-quantifies-all-valuation-rings`; the
three repaired items themselves were recorded `repaired`. All 37 receipts are current at confidence 1 and the pair
scope decision stays `sufficient` (no statement changed, so the scope hash is unchanged).

### Checks actually run (after the repairs)

- `precheck.mts` on the 30 owned proof items (explicit paths): 30 checked, 0 failing.
- `proof-contract.mjs research/frontier-35-ten-categories-batch-6.proof-contracts.json --strict`: 0 errors, 0 warnings, 30/30.
- `rendercheck.mjs` on both owned library pages: OK, 2 files.
- `content-policy.mjs research/frontier-35-ten-categories-batch-6.pages.json`: 41 errors, all `scope-item-missing` for the sibling pair's unauthored items; zero owned rows.
- `coverage-checklist.mjs ...batch-6.coverage.json --require-destination`: 2 pages, 161 rows, 0 errors, 0 warnings.
- `manifest-deps.mjs ...batch-6.pages.json`: 78 items, 0 normalized, 0 errors.
- `validate-plan.mjs research/plan-spec.json`: OK (no cycles, forward references, B-page dependencies or unresolved ids).
- `depcheck.mjs --quiet` and `fwdcheck.mjs`: no owned id or owned page in either output.
- `frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`: unified ledger and the batch-6 input are byte-identical to their pre-refresh state, because both new suppliers are published items outside this run's batches.
- Consumer scan (frontmatter deps/justified_by/forward_refs plus body wikilinks over all `items/*.md`): zero non-owned items reference any owned id; zero library pages outside the two owned pages reference one. No published-consumer event; `research/published-consumer-supplier-ledger.md` was not touched.
- Live source checks on 2026-09-24: tags 01KK, 01KI, 01HL, 01KZ, 01L0, 01L1-01L4, 05JL, 00HY, 00I9, 00IA, 00IB, 00IC, 052K, 01KP, 01KQ, 01KM, 01KN all fetched; every claimed item-tag pair matches except the 01KM-01KN line repaired above. Stacks 26.21.7 (01KP) and 26.21.8 (01KQ) read in full at the statements, and the two published suppliers `lem-field-valued-points-of-schemes` (closed-point convention, proof step 1.1) and `lem-points-of-scheme-fibre-product-residue-tensors` were read and match their uses in `thm-valuative-criterion-separatedness` and `lem-diagonal-is-immersion`.

### Open obligations / next action

- No owner-held escalation and no unresolved item for this pair. The obligations inherited from attempt 1 stand:
  AC is declared on the four AC items (the repaired step-5.2 use is inside an AC item), the only `ai-generated`
  statement has no dependents, and plan rows 366.067/366.068 keep empty item lists for the Step 4 splice.
- Sibling pair untouched; its 41 unauthored items remain its own writer's responsibility.
- Next action: Step 4 post-author inventory snapshot and plan splice; nothing further from this pair.

Plan-closure check for Repair 1: `thm-proper-ideal-contained-in-maximal-ideal` and `cor-maximal-ideals-are-prime`
live on `library/abstract-algebra/ideals-and-quotient-rings.md`, which is inside the A page's plan prerequisite
closure (178 pages reachable from `diagonals-separated-morphisms-and-valuative-uniqueness` in
`research/plan-spec.json`), so the added deps keep the plan order and create no Step 4 mismatch.

## Step 3b authoring — pair `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` (label `step3b-pair-kahler-differentials-conormal-sequences-and-infinitesimal-lifting-d8ded3366d227f40`)

Scope: A page `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` (32 items, order 366.071) and B page
`...-examples` (9 items, order 366.072). Sibling pair `diagonals-separated-morphisms-and-valuative-uniqueness` is not
touched; its manifest rows, coverage rows, contracts and the four `cross-batch-dependencies.json` rows are preserved.

Local supplier added during this dispatch (new item, must be registered in manifest, coverage, contracts and the A page):
`lem-affine-module-sheaf-universal-property` (tilde construction `P_M(U)=M\otimes_B\mathcal O_X(U)`, its universal property
`\operatorname{Hom}(\widetilde M,\mathcal F)\cong\operatorname{Hom}_B(M,\mathcal F(X))`, functoriality and right exactness,
`\Gamma(X,\widetilde B)=B`). Deps: def-sheafification, thm-sheafification-universal-property, def-module-on-ringed-space,
thm-universal-property-of-module-tensor-products, thm-global-sections-affine-scheme, def-affine-scheme-spectrum.

Item checkpoints (all `status: draft`, precheck PASS unless noted):

- `thm-conormal-sequence-closed-immersion` — written; deps extended by def-closed-immersion-schemes, def-ideal-sheaf,
  thm-quasi-coherent-ideal-closed-subscheme-correspondence, def-sheaf-tensor-product, def-kernel-cokernel-image-sheaves,
  thm-sheaf-differentials-universal-property, thm-pullback-pushforward-module-adjunction,
  thm-localisation-of-modules-is-exact, lem-differentials-polynomial-algebra-free. α built from `1⊗\mathrm d t`, β from the
  adjoint of the pullback derivation; exactness by affine charts + stalkwise criterion; non-injectivity witnessed by
  `[x^3]∈(x^2)/(x^4)` mapping to `3x^2\mathrm dx=0` in `k[x]/(x^2)\mathrm dx`. Layers renumbered 4.1→3.3, 5.1→4.1.
- `thm-transitivity-sequence-schemes` — written; γ,δ constructed from the universal properties, exactness by charts and
  `thm-transitivity-exact-sequence-differentials`; non-injectivity of the first arrow in characteristic ≠2 via
  `k\to k[x]\to k[x]/(x^2)`.
- `lem-differentials-commute-base-change-schemes` — written; map `g^*\Omega_{X/S}\to\Omega_{X'/S'}` built by the same
  universal-property route; isomorphism on each affine chart is `lem-differentials-base-change`; layers renumbered.
- `def-relative-cotangent-space` — written (definition, no proof body).
- `thm-cotangent-space-maximal-ideal-quotient` — written; conormal sequence at `(R,\mathfrak m)` gives surjectivity and the
  retraction `D(a)=[a-\varepsilon(a)]` gives injectivity; requires κ(x)=k. Paragraph order fixed after label swap.
- `lem-sheaf-differentials-affine-compatibility` — precheck repair only: layers renumbered 1.3→2.1, 2.1→3.1, 3.1→4.1,
  3.2→5.1.

Checks run so far (`node tools/tsx-run.mjs tools/precheck.mts tools/<id>.md` per item): all listed items PASS individually.
Registration (manifest rows, coverage canonical rows, proof contracts, library pages, decisions) is pending and is done
after all 41 items are authored.

### Final Step 3b checkpoint for this pair (supersedes the stub rows immediately above)

Label `step3b-pair-kahler-differentials-conormal-sequences-and-infinitesimal-lifting-d8ded3366d227f40`; written after all
43 items and both pages were complete, the contracts regenerated, and the checks below run. The stub above stopped before
registration; that registration is now done and is recorded here.

**Inventory and registration.** A page `kahler-differentials-conormal-sequences-and-infinitesimal-lifting` (order 366.071,
category `scheme-theory`) carries 34 items; B page `...-examples` (order 366.072) carries 9. All 43 item files, both pages
and the manifest rows are `status: draft`. 43 = 30 designed A results + 9 designed B results + 4 local A-page prerequisites,
two of which were added by this dispatch: `lem-affine-module-sheaf-universal-property` (the tilde-sheaf universal property
consumed by `lem-sheaf-differentials-affine-compatibility`) and `lem-field-is-noetherian` (added to remove two dependencies
on the B-page item `ex-noetherian-integers-and-fields`, which depcheck flags as `b-leaf-content`); the Step-1 additions
`lem-differentials-diagonal-ideal-square` and `lem-finite-type-field-zero-differentials-finite-separable` keep their role.
Registration: 34 + 9 manifest rows, coverage canonical rows and 5 source-entry groups (167 harvested results, 0 errors),
32 proof-bearing contracts (62 together with the sibling pair), both library pages. The plan rows still carry no item list;
Step 4 splices this post-author inventory. The two supplier additions are extra inventory relative to the plan row and are
reported in the dispatch report.

**Sibling pair preserved.** `diagonals-separated-morphisms-and-valuative-uniqueness` keeps its 29 + 8 manifest rows, its
coverage rows, its 30 contracts and the four pre-existing batch-6 rows of `...batch-6.cross-batch-dependencies.json`
(verified byte-identical across the `frontier-dependency-ledger.mjs refresh`; one fifth row was **added** by this
dispatch for a consumer→supplier edge that was declared in frontmatter but not yet reviewed — see below). No sibling file
or page was edited, and the sibling writer's notes above are untouched.

**Local suppliers (separate class; not sent through a Step 3 self-review loop).**

| item | claim | deps (frontmatter) | sources |
|---|---|---|---|
| `lem-affine-module-sheaf-universal-property` | For `X=Spec B` and a `B`-module `M`, `M~:=aP_M` with `P_M(U)=M⊗_B O_X(U)` satisfies `Hom_{O_X}(M~,F)≅Hom_B(M,F(X))` naturally, is functorial and right exact, and `B~≅O_X`, `Γ(X,B~)=B`; no finiteness | def-sheafification, thm-sheafification-universal-property, def-module-on-ringed-space, thm-universal-property-of-module-tensor-products, thm-global-sections-affine-scheme, def-affine-scheme-spectrum | Stacks Schemes Lemma 26.7.1 (tag 01I7); Stacks Modules Def 17.10.1 (tag 01BE), Lemma 17.10.5 (tag 01BH), Def 17.10.6 (tag 01BI) |
| `lem-field-is-noetherian` | A field's only ideals are `(0)` and `K`, so every ideal is finitely generated and `K` is Noetherian; choice-free | def-field, def-left-right-and-two-sided-ideal, def-generated-and-principal-ideals, def-noetherian-ring-and-module | Stacks Algebra Section 10.31 (tag 00FM) and Lemma 10.31.3 (tag 00FO), fetched 2026-09-24 |

Both were read by hand at the frozen state; the tilde-sheaf inverse is `m⊗a↦a·g(m)|_U` with values on `m⊗1` determining the
map, and the field argument is the two-element ideal list only.

**Dependency shape.** Exact per-item lists live in each item's frontmatter and in the manifest rows (`manifest-deps.mjs`:
80 items, 0 normalized, 0 errors). (a) Algebraic block: `def-derivation-algebra` → `def-kahler-differentials-algebra` →
existence/Jacobian/transitivity/localization/base change. (b) Sheaf block: `def-sheaf-relative-differentials` → universal
property → affine module-sheaf supplier → affine compatibility → conormal sequence of a closed immersion (exactness by
affine charts plus the stalkwise criterion) → transitivity sequence → base change. (c) Cotangent block:
`def-relative-cotangent-space` → cotangent space at a `k`-rational point → dual-number tangent vectors → induced cotangent
map. (d) Infinitesimal block: formally unramified/smooth/étale definitions → diagonal ideal `J/J²≅Ω_{B/A}` → `Ω=0` iff
formally unramified → unramified of finite type iff diagonal open immersion → finite-type field lemma (AC) →
residue-extension lemma (AC). Cross-batch: four item edges and one page edge to batch 3, all `verified` in the run ledger
— the fourth item edge (`lem-etale-residue-extensions-finite-separable` → `def-ag-separating-transcendence-basis`, use:
[F8] plus step 4.1, finite separable ⇒ separably generated via the empty separating transcendence basis) was declared in
the item's frontmatter and in the manifest but had no reviewer row, so the row was added this dispatch. The run ledger
holds 16/16 batches reviewed, 46 declared same-frontier edges, 0 orphaned, and exactly one still-unreviewed edge outside
this pair (batch 17's `def-type-a-standard-graph-bimodules-support-filtrations-and-character` →
`def-graded-ring-module-bimodule-and-internal-shift`, batch 14), which is its consumer owner's obligation.
AC is declared exactly on
`lem-finite-type-field-zero-differentials-finite-separable` and `lem-etale-residue-extensions-finite-separable`, with the
exact uses (algebraic closure, vector-space bases, maximal ideals/Nakayama) written into their statements; every other
owned item is choice-free.

**Item checkpoints** (prerequisite order; “no proof” = definition/remark with no proof body; every listed proof item is
inside the strict-checked batch-6 contract and PASSes explicit-path precheck).

| # | item | page | kind | facts/steps | key deps | source locators |
|---|---|---|---|---|---|---|
| 1 | `def-derivation-algebra` | A | definition | no proof | def-commutative-ring, def-left-and-right-modules | Stacks Algebra 10.131.1; Vakil §22.2.17, p.582 |
| 2 | `def-kahler-differentials-algebra` | A | definition | no proof | def-derivation-algebra | Stacks Algebra 10.131.2–3; Vakil §22.2.17 |
| 3 | `thm-kahler-differentials-existence-presentation` | A | theorem | 3 / 5 | def-kahler-differentials-algebra, def-ag-universal-algebraic-differentials | Stacks Algebra 10.131.2–3; Vakil §22.2.2, p.575 |
| 4 | `cor-derivations-represented-by-differentials` | A | corollary | 3 / 3 | thm-kahler-differentials-existence-presentation | Stacks Algebra 10.131.3; Vakil §22.2.17 |
| 5 | `lem-differentials-polynomial-algebra-free` | A | lemma | 3 / 4 | cor-derivations-represented-by-differentials | Stacks Algebra 10.131.14; Vakil 22.2.3, p.575 |
| 6 | `thm-conormal-exact-sequence-algebra` | A | theorem | 4 / 5 | thm-kahler-differentials-existence-presentation | Stacks Algebra 10.131.9; Vakil 22.2.12, pp.579–580 |
| 7 | `cor-jacobian-presentation-differentials` | A | corollary | 3 / 4 | thm-conormal-exact-sequence-algebra | Stacks Algebra 10.131.9, 14–15; Vakil §22.2.3, §22.2.12 |
| 8 | `thm-transitivity-exact-sequence-differentials` | A | theorem | 3 / 5 | thm-kahler-differentials-existence-presentation | Stacks Algebra 10.131.7; Vakil 22.2.9–11 |
| 9 | `lem-differentials-localization` | A | lemma | 6 / 4 | cor-derivations-represented-by-differentials, def-localisation-of-a-module | Stacks Algebra 10.131.8; Vakil §22.2.L |
| 10 | `lem-differentials-base-change` | A | lemma | 4 / 4 | cor-derivations-represented-by-differentials, thm-universal-property-of-module-tensor-products | Stacks Algebra 10.131.12; Vakil §22.2.K |
| 11 | `def-sheaf-relative-differentials` | A | definition | no proof | def-sheafification, def-module-on-ringed-space, def-kahler-differentials-algebra | Stacks Modules 17.28.4/17.28.10 (08TD/08RT); Stacks Morphisms 29.33.1/29.33.5; Vakil §22.2.20 |
| 12 | `thm-sheaf-differentials-universal-property` | A | theorem | 5 / 4 | def-sheaf-relative-differentials, thm-sheafification-universal-property | Stacks Modules 17.28.4/17.28.10; Stacks Morphisms 29.33.2 (01UR); Vakil §22.2.20 |
| 13 | `lem-affine-module-sheaf-universal-property` | A | lemma (new) | 5 / 4 | def-sheafification, thm-universal-property-of-module-tensor-products | Stacks Schemes 26.7.1 (01I7); Stacks Modules 17.10.1/17.10.5/17.10.6 |
| 14 | `lem-sheaf-differentials-affine-compatibility` | A | lemma | 7 / 6 | lem-affine-module-sheaf-universal-property, lem-differentials-localization, def-localisation-of-a-module | Stacks Morphisms 29.33.3/29.33.5 (01US/01UT); Vakil 22.2.20 |
| 15 | `thm-conormal-sequence-closed-immersion` | A | theorem | 11 / 8 | thm-conormal-exact-sequence-algebra, lem-sheaf-differentials-affine-compatibility, thm-exactness-of-sheaves-stalkwise | Stacks Morphisms 29.33.15 (01UT); Vakil 22.2.12/22.2.15 |
| 16 | `thm-transitivity-sequence-schemes` | A | theorem | 10 / 7 | thm-transitivity-exact-sequence-differentials, thm-exactness-of-sheaves-stalkwise | Stacks Morphisms 29.33.9 (01UX); Vakil 22.2.9–11 |
| 17 | `lem-differentials-commute-base-change-schemes` | A | lemma | 7 / 4 | lem-differentials-base-change, thm-affine-fibre-product-tensor-ring | Stacks Morphisms 29.33.10 (01UY); Vakil §22.2.K |
| 18 | `def-relative-cotangent-space` | A | definition | no proof | def-sheaf-relative-differentials, def-residue-field-scheme-point | Stacks Morphisms 29.33/29.36; Vakil 22.2.18 |
| 19 | `thm-cotangent-space-maximal-ideal-quotient` | A | theorem | 4 / 5 | thm-conormal-exact-sequence-algebra, lem-sheaf-differentials-affine-compatibility, def-relative-cotangent-space | Stacks Algebra 10.131.10 (00RW); Vakil 22.2.18 |
| 20 | `thm-tangent-vectors-dual-numbers` | A | theorem | 6 / 4 | thm-cotangent-space-maximal-ideal-quotient, def-dual-numbers-scheme | Stacks Morphisms §29.33; Stacks Properties of Schemes §28.16; Vakil 22.2.18 |
| 21 | `lem-differential-of-morphism-via-cotangent-map` | A | lemma | 5 / 5 | thm-transitivity-sequence-schemes, def-dual-numbers-scheme | Stacks Morphisms 29.33.8 (01UW); Vakil §22.2.K |
| 22 | `def-formally-unramified-morphism` | A | definition | no proof | def-scheme-over-base, def-closed-immersion-schemes | Stacks Algebra 10.148.1 (00UM); Stacks More on Morphisms §37.6 |
| 23 | `def-formally-smooth-morphism` | A | definition | no proof | def-scheme-over-base, def-ideal-sheaf | Stacks Algebra 10.138.1 (00TH); Stacks More on Morphisms §37.11 |
| 24 | `def-formally-etale-morphism` | A | definition | no proof | def-formally-unramified-morphism, def-formally-smooth-morphism | Stacks Algebra 10.150.1 (00U7); Stacks More on Morphisms §37.7 |
| 25 | `lem-differentials-diagonal-ideal-square` | A | lemma | 3 / 4 | thm-kahler-differentials-existence-presentation, thm-universal-property-of-module-tensor-products | Stacks Algebra 10.131.13 (00RV); Vakil 22.2.20 |
| 26 | `thm-formally-unramified-differentials-zero` | A | theorem | 6 / 3 | lem-differentials-diagonal-ideal-square, def-formally-unramified-morphism, def-closed-immersion-schemes | Stacks Algebra 10.148.3 (00UO); Stacks More on Morphisms 37.6.7 |
| 27 | `def-unramified-morphism-finite-type` | A | definition | no proof | def-formally-unramified-morphism, thm-formally-unramified-differentials-zero | Stacks Morphisms 29.36.1 (02G4)/29.36.2 |
| 28 | `thm-unramified-diagonal-open-immersion` | A | theorem | 7 / 8 | lem-differentials-diagonal-ideal-square, lem-determinant-trick-for-nakayama, lem-idempotent-gives-clopen-spectrum-partition | Stacks Morphisms 29.36.13 (02GE); Stacks Algebra 10.151.4 |
| 29 | `lem-field-is-noetherian` | A | lemma (new) | 4 / 3 | def-field, def-noetherian-ring-and-module | Stacks Algebra §10.31 (00FM), 10.31.3 (00FO) |
| 30 | `lem-finite-type-field-zero-differentials-finite-separable` | A | lemma (AC) | 21 / 22 | lem-field-is-noetherian, thm-existence-of-algebraic-closures, thm-nakayama-lemma, cor-every-vector-space-has-a-basis | Stacks Algebra 10.158.1 (090W), 10.151.5 (00UW) |
| 31 | `lem-etale-residue-extensions-finite-separable` | A | lemma (AC) | 12 / 11 | lem-finite-type-field-zero-differentials-finite-separable, lem-ag-separable-residue-cotangent-sequence (batch 3), thm-nakayama-lemma | Stacks Algebra 10.151.5 (00UW); Stacks Morphisms 29.36.12 (02G8) |
| 32 | `def-smooth-relative-dimension-via-differentials` | A | definition | no proof | def-sheaf-relative-differentials, def-ag-standard-smooth-algebra | Stacks Morphisms 29.35.12–13 (Def 29.35.13 = tag 02G2) and the 29.35.14 warning |
| 33 | `rem-conormal-map-need-not-injective` | A | remark | no proof | thm-conormal-exact-sequence-algebra | Stacks Algebra 10.131.9; Vakil 22.2.12–13 |
| 34 | `rem-differentials-detect-infinitesimals-not-all-singularities-alone` | A | remark | no proof | def-smooth-relative-dimension-via-differentials, thm-formally-unramified-differentials-zero | Stacks Morphisms 29.35.13–14; Stacks Algebra 10.137.1 |
| 35 | `ex-differentials-polynomial-ring` | B | example | 2 / 4 | lem-differentials-polynomial-algebra-free | Stacks Algebra 10.131.14; Vakil 22.2.3 |
| 36 | `ex-differentials-hypersurface` | B | example | 3 / 5 | cor-jacobian-presentation-differentials | Stacks Algebra 10.131.9; Vakil 22.2.12 |
| 37 | `ex-differentials-dual-numbers` | B | example | 3 / 4 | cor-jacobian-presentation-differentials, def-dual-numbers-scheme | Stacks Algebra 10.131.9; Vakil 22.2.7 |
| 38 | `ex-differentials-separable-field-extension-zero` | B | example | 6 / 5 | thm-primitive-element-theorem-for-finite-separable-extensions, cor-irreducible-polynomial-is-separable-iff-derivative-nonzero | Stacks Algebra 10.158.1; Vakil 22.2.F |
| 39 | `cex-differentials-purely-inseparable-field-nonzero` | B | counterexample | 7 / 8 | cor-jacobian-presentation-differentials, thm-polynomial-quotient-is-a-field-iff-irreducible | Stacks Algebra 10.131.9, 10.158.1; Vakil 22.2.F |
| 40 | `cex-conormal-left-map-not-injective` | B | counterexample | 4 / 6 | thm-conormal-exact-sequence-algebra, thm-polynomial-degree-of-a-product-over-a-domain | Stacks Algebra 10.131.9; Vakil 22.2.12–13 |
| 41 | `ex-tangent-vectors-affine-space-dual-numbers` | B | example | 4 / 5 | thm-tangent-vectors-dual-numbers, lem-differentials-polynomial-algebra-free | Stacks Morphisms §29.33; Vakil 22.2.18 |
| 42 | `ex-unramified-closed-point-immersion` | B | example | 10 / 10 | thm-conormal-sequence-closed-immersion, thm-formally-unramified-differentials-zero, thm-affine-closed-immersions-quotient-rings | Stacks Morphisms 29.36.8 |
| 43 | `cex-frobenius-zero-tangent-map-not-formally-etale` | B | counterexample | 5 / 5 | lem-differential-of-morphism-via-cotangent-map, def-formally-etale-morphism, cor-jacobian-presentation-differentials | Stacks Morphisms 29.35.13 warning and §29.33 |

**Repairs made during this dispatch (label `d8ded3366d227f40`).**

1. `thm-conormal-sequence-closed-immersion` step 2.2 now derives `B=P/I` from [F1] and cites [F1, F3, F4, F5, F11, step 1.1, step 1.2].
2. `thm-transitivity-sequence-schemes` step 1.1 cites F3 (pullback) and explains `f^*Ω=O_X⊗_{f^{-1}O_Y}f^{-1}Ω`; step 2.2 cites F3.
3. `thm-cotangent-space-maximal-ideal-quotient` step 2.1 cites F4 (`def-relative-cotangent-space`).
4. `thm-tangent-vectors-dual-numbers` step 3.1 rewritten to cite steps 1.1/2.1 (bare `1.2` tokens removed).
5. `lem-differential-of-morphism-via-cotangent-map` step 3.1 now names steps 2.1/2.2.
6. `thm-formally-unramified-differentials-zero` gained the declared dep `def-closed-immersion-schemes` for its F6 link.
7. `lem-sheaf-differentials-affine-compatibility` gained the declared dep `def-localisation-of-a-module` (frontmatter + manifest row) to clear a `cited-not-in-deps` finding.
8. `lem-finite-type-field-zero-differentials-finite-separable` and `lem-etale-residue-extensions-finite-separable`: replaced `ex-noetherian-integers-and-fields` by `lem-field-is-noetherian` in deps and fact text; the latter also gained `thm-finitely-generated-algebraic-extensions-are-finite`.
9. `cex-differentials-purely-inseparable-field-nonzero`: step 3.1 split into 3.1 (Frobenius identity, [F3,F4]) and 3.2 (divisor argument, [F1,F5]); canonical stratification adopted; downstream reference in 4.1 updated.
10. `ex-unramified-closed-point-immersion`: added `generation: role: example` (content-policy `generated-role`); the overfull general step split into 3.2/4.1/5.1 with canonical stratification; the stale prose reference in the final step corrected to “steps 3.2, 4.1 and 5.1”. Both changes cleared the two strict-contract `shotgun-bracket` warnings.

**Checks actually run at the frozen state.** `precheck.mts` on the 43 explicit owned paths: 32 checked, 0 failing (11
definition/remark items have no proof body). `proof-contract.mjs research/frontier-35-ten-categories-batch-6.proof-contracts.json
--strict`: 0 errors, 0 warnings, 62/62. `rendercheck.mjs` on both owned pages: OK, 2 files. `content-policy.mjs` on the batch
manifest: 80 scoped items, 0 errors, 0 warnings. `coverage-checklist.mjs ... --require-destination`: 2 pages, 167 harvested,
0 errors, 0 warnings. `manifest-deps.mjs`: 80 items, 0 normalized, 0 errors. `validate-plan.mjs research/plan-spec.json`:
OK (acyclic; no item cycles, forward references, B-page dependencies or unresolved ids). `depcheck.mjs --quiet` and
`fwdcheck.mjs`: zero findings on any owned item or page; both still exit FAIL on unrelated global library debt
(e.g. `def-flat-abelian-sheaf` item/page cycle, the brauer/blocks page cycle, 333 published-unaudited rows, 6 pre-existing
`b-leaf-content` rows, 30 forward-undeclared rows elsewhere). `frontier-dependency-ledger.mjs refresh --run
frontier-35-ten-categories`: refreshed; 16/16 batches reviewed, 46 declared edges, 0 orphaned, one unreviewed edge
outside this pair (batch 17 → batch 14, named above); batch-6's own five rows are all `verified`.

**Decisions.** Pair scope decision `sufficient` at the current scope hash (all designed results present in design order
plus the four local prerequisites; no drop, no pair added; `def-smooth-relative-dimension-via-differentials` recorded as a
differential-rank definition only). All 43 item decisions are recorded at their current content hash with confidence 1:
30 `accept`, 11 `repaired` (`lem-sheaf-differentials-affine-compatibility`, `thm-conormal-sequence-closed-immersion`,
`thm-transitivity-sequence-schemes`, `thm-cotangent-space-maximal-ideal-quotient`, `thm-tangent-vectors-dual-numbers`,
`lem-differential-of-morphism-via-cotangent-map`, `thm-formally-unramified-differentials-zero`,
`lem-finite-type-field-zero-differentials-finite-separable`, `lem-etale-residue-extensions-finite-separable`,
`cex-differentials-purely-inseparable-field-nonzero`, `ex-unramified-closed-point-immersion`). Each receipt lists the
examined dependency IDs and a concrete evidence reason. `step3-decisions.mjs check --phase scope` is closed and every owned
item decision is current.

**Open obligations and next action.** No owner-held escalation, no unresolved item, no published-consumer event: a scan of
all `items/*.md` frontmatter and bodies and of every library page found zero non-owned references to any owned id, so
`research/published-consumer-supplier-ledger.md` was not touched (the serial reconciler owns it). Step 4 notes: (a) the
plan/coverage prose for `def-smooth-relative-dimension-via-differentials` should stay precise — Stacks Definition 29.35.13
(tag 02G2, fetched 2026-09-24) defines “smooth of relative dimension `d`” as smooth together with `Ω` finite locally free
of constant rank `d`, so the rank condition lives inside the source's smoothness definition, while this page defines only
the rank condition and defers the flatness/fibre comparison to the smooth-morphism development; (b) the two new suppliers
are inventory additions relative to the plan row; (c) the depcheck/fwdcheck/globalgate failures are outside this pair and
are pre-existing published-library debt. Next action: Step 4 post-author inventory snapshot and plan splice; nothing
further from this pair.
