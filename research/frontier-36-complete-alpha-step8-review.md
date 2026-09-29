# Step 8 scope-denial delta review — `frontier-36-complete`

**Dispatch:** `alpha`, `step8-lead`, all groups. **Freeze:** Step 7 complete before this review. **Optional supervising mathematical task:** `research/frontier-36-complete-step8-mathematical-review.task.md` is absent, so no supervising repair or recertification claim is made. No published item, page, reading order, judge record, or stamp was changed.

## Scope decisions

I used the frozen `research/frontier-36-complete-step8-scope-delta.json` as the review set: 137 rows had `prior_decision: null`; 82 current rows carried an exact `stands` decision. I checked the pending rows against their cited source locators, current batch manifests, current published files, the closure, and plan order. The owning group decision files contain row-level source, inventory, use, and destination evidence. Of the 137 pending rows, **126 stand** and **11 require an owner decision**. The full current register is 208 `stands` and 11 `owner-decision` across 219 declines. I did not rewrite the Step 8 delta, which records the pre-review set for the engine's render step.

| Group | Newly checked | Stands | Owner decision |
| --- | ---: | ---: | ---: |
| a | 7 | 6 | 1 |
| b | 1 | 1 | 0 |
| c | 57 | 49 | 8 |
| d | 10 | 10 | 0 |
| e | 14 | 14 | 0 |
| f | 3 | 3 | 0 |
| g | 13 | 12 | 1 |
| h | 15 | 14 | 1 |
| i | 7 | 7 | 0 |
| j | 10 | 10 | 0 |

The owner decisions are exact decline IDs, not new item IDs:

| Group / decline ID | Current evidence and owner action |
| --- | --- |
| a / `f69c3d4513fd7b3e20fb650aa95ce1b77d20edaf07e5dbb19dfbe313c69863cf` | [Stacks Lemma 29.45.11](https://stacks.math.columbia.edu/tag/01WN) states finite **iff** affine and proper. The recorded later destination has `thm-proper-quasi-finite-is-finite`, which proves only proper plus quasi-finite implies finite. The batch-5 and batch-6 inventories have no full biconditional. Owner must locate or scope the exact result and resolve order/dependencies. |
| c / `285ddaa2` | [Milne AG10 §10.72](https://www.jmilne.org/math/CourseNotes/AG10.pdf) uses the general Noetherian-local equality `dim(gr_m R)=dim R`; the selected tangent-cone result covers the regular case. The recorded destination was already `owner-decision`; adding general support needs owner placement. |
| c / `4e4b2e08` | [Vakil §§3.5–3.8](https://virtualmath1.stanford.edu/~vakil/0506-216/216class5152.pdf) develops group-action Kleiman transversality. The selected page proves linear-system incidence/Bertini but has no transversality pair. Owner must choose a destination. |
| c / `8ab9ddfe` | [Arapura Exercise 5.2.5](https://www.math.purdue.edu/~arapura/preprints/algeom.pdf) includes fixed-rank matrices and Grassmannian homogeneity. The recorded published destination has a Grassmannian example but no fixed-rank-matrix item. Owner must reconcile the incomplete destination; this review did not expand a published page. |
| c / `94663166` | [Milne AG Proposition 4.20](https://www.jmilne.org/math/CourseNotes/AG.pdf) asserts that a one-dimensional regular local ring is a PID. The recorded valuation page gives DVR ⇒ PID, while the exact stronger result already exists as `thm-one-dimensional-regular-local-rings-are-dvrs` on `regular-local-rings-and-homological-dimension`. Owner should correct the destination/reason; no duplicate theorem is needed. |
| c / `a6c4d4e0` | [Milne AG10 Aside 10.66](https://www.jmilne.org/math/CourseNotes/AG10.pdf) gives the smoothness/square-zero affine lifting equivalence. The published Kähler page defines local formal smoothness and explicitly defers equivalence with finite-presentation smoothness. Owner must place the missing iff, with the source's scope intact. |
| c / `bf4f08f1` | [Stacks Lemma 30.14.2](https://stacks.math.columbia.edu/tag/0AG6) includes coherent cohomology finiteness, large-twist vanishing, and finite graded sections for degree-one Proj. The recorded Proj destination has 38 drafted framework items and no combined theorem; related results live on the batch-9 cohomology page. Owner must reconcile the destination and proof ownership. |
| c / `cd2a1ff2` | [Milne AG Exercise 4-6](https://www.jmilne.org/math/CourseNotes/AG.pdf) asks for symplectic tangent matrices **and** the dimension of the symplectic group. `ex-orthogonal-and-symplectic-tangent-matrices` computes the tangent condition but does not establish global dimension through regularity/reducedness. The existing `owner-decision` destination is appropriate. |
| c / `de1f4bae` | [Milne AG10 §10.63](https://www.jmilne.org/math/CourseNotes/AG10.pdf) calls for an intrinsic singular closed subscheme and base-change behavior. The published Kähler page has no such construction; the tangent page gives only a singular locus as a set. Owner must place the stronger construction. |
| g / `26db2fd9` | [Hunter §3.2 Example 3.5](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf) is already represented by `cex-cantor-function-is-not-w-one-one-despite-being-absolutely-continuous-off-a-null-set` in the selected batch-30 page. Its statement proves the singular Cantor derivative and failure of `W^{1,1}(0,1)`. The out-of-scope decline is stale; owner should reconcile coverage using this existing ID. |
| h / `7f3afdef` | [Lee Corollaries 9.8–9.9](https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf) include genus and fundamental-group classification. The recorded earlier classification page proves genus/Euler characteristic, but has no fundamental-group classification item. Owner must decide where to put that consequence. |

These decisions do not authorize a new page, forward dependency, published-page expansion, or reading-order change. No in-scope result was added by this lead.

## Frontier dependency ledger

I first ran `node tools/frontier-dependency-ledger.mjs refresh --run frontier-36-complete` and read `research/frontier-36-complete-cross-batch-dependencies.json` before the scope review. It had 30 reviewed batches, no unreviewed batches or orphaned reviews, and 625 edges: 48 `open` reviews and 13 declared edges lacking reviews. I checked the current supplier statement/definition against each affected consumer's stated use and updated the **same** rows in the seven consumer-batch inputs (batches 6, 7, 8, 9, 13, 16, and 28). The input row evidence gives the exact consumer locator, supplier claim/hypotheses, and current declaration; these are edge-interface checks, not whole-proof certificates.

Of those 61 rows, 58 now have `verified` reviews; two historical findings are `removed` because neither a declaration nor a body use remains; one page row stays `open` with an explicit owner question. The removed rows are:

- `item:lem-elementary-etale-neighbourhood-finite-decomposition → def-quasi-finite-morphism-schemes` (batch 6).
- `item:lem-integral-quasicoherent-algebra-finite-subalgebra-filtration → thm-affine-quasi-coherent-equivalence` (batch 6).

The deferred row is `page:quasi-coherent-and-coherent-sheaves-and-vector-bundles → flat-smooth-and-etale-morphisms` (batch 7). The current manifest and page frontmatter declare it, with order 366.073 before 366.075, but none of the 40 selected batch-7 items declares a batch-6 item dependency and the current page prose names no flat/smooth/étale use. The page owner should confirm the curricular prerequisite or remove the declaration through the authorized reading-order protocol. I left the plan and page unchanged.

After input edits I reran `node tools/frontier-dependency-ledger.mjs refresh --run frontier-36-complete --require-reviewed`, which rendered the unified ledger from the inputs. It now has **625 edges: 589 verified, 35 removed, one open; 30 reviewed batches, zero missing reviews, zero orphaned reviews**. The 33 previously removed rows still have no current declaration or body wikilink. This ledger is a dependency record, not Step-5 or Step-8 certification.

## Run defect ledger and checks

`research/defect-ledger.jsonl` has 233 rows for this run: 231 `fixed`, two `false-positive`, **zero open**. There was therefore no open canonical defect row to close or defer, and I made no JSONL edit or defect-ledger render. I did not create a defect for an unapproved owner scope decision.

- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-36-complete --require-reviewed` — passed; all declared cross-batch edges reviewed.
- `node tools/scope-decisions.mjs refresh --run frontier-36-complete --all` — 219 current declines, zero pending in the refreshed group decision files.
- `node tools/scope-decisions.mjs check --run frontier-36-complete` — passed, 219 current declines, zero errors.

The engine still owns Step-8 scope rendering, recertification, routing, and gates. I did not run or claim those gates.
