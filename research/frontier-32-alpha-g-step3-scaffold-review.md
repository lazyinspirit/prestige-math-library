# frontier-32 — Alpha group `g` Step 3 scaffold review

Scope: batch `13`, covering `co-e-free-comb-structure` (A, order 437) and
`co-e-free-comb-structure-examples` (B, order 438).

I read the owned manifest, coverage, notes, the controlling §16.2–16.3 design,
the current `research/plan-spec.json` entries, the published dependency
statements, and the complete relevant source passages. I refreshed and checked
`research/frontier-32-alpha-g-scope-decisions.json` after the scaffold repairs.

## Verdict

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `co-e-free-comb-structure` | 13 | **insufficient** | The repaired scaffold can author the exact special-vertex result of source Lemma 6.4, but that result does not establish the universal structural comb-partition hypothesis required by the declared page route. |

The three B-page examples are concrete and authorable against the corrected
special-vertex theorem. Because the B page requires the A page, they do not
close the pair's missing universal result.

## Blocking mathematical finding

The current published definition `items/def-structural-comb-partition-hypothesis.md`
requires the partition for every comb in every relevant graph, with no special
vertex. This agrees with Huang–Ju–Zhou Lemma 5.1: its hypothesis is quantified
over every comb.

However, Huang–Ju–Zhou Lemma 6.4 assumes an additional vertex

$$
v\notin \{a_i:i\in[\ell]\}\cup\bigcup_i B_i
$$

that is complete to all $B_i$ and anticomplete to all teeth $a_i$. This is not
decorative: Claim 6.4.2 obtains cross-block purity by substituting
$(x,y)=(v,a_i)$, and Claim 6.4.3 begins its quotient-witness descent with the
same pair. The ordinary comb definition supplies no replacement for $v$.

Thus the source does not prove the current universal dependency as written.
The exact missing result is an authoritative proof that every comb in a
co-$E$-free graph, without the additional special vertex, admits the
$\{H_5,\mathrm{co}\text{-}E\}$ partition required by the published structural
hypothesis. The exact cited source is Huang, Ju, and Zhou,
*Erdős–Hajnal beyond the five-vertex path*, Lemmas 5.1 and 6.4 and Claims
6.4.2–6.4.3, [arXiv HTML v2](https://arxiv.org/html/2606.06258v2#S6.SS1).

Resolving this requires either that missing theorem or an owner-authorized
change to the already-published structural-hypothesis/criterion interface.
Changing that published dependency, adding a page, or changing the reading
order is outside this group's Step-3 authority, so the defect remains open.

## In-scope repairs applied

- Restored Claims 6.4.1 and 6.4.2 to their exact general form: an induced path
  or induced $H_5$, nonadjacent $x,y$ complete to it, and
  $u\in N(x)\setminus N(y)$. Their source statements are not restricted to
  vertices in distinct comb blocks.
- Made the special-vertex hypothesis explicit in the Claim 6.4.3 scaffold and
  in `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition`.
  The final theorem now claims exact source Lemma 6.4 rather than the stronger
  universal structural hypothesis.
- Repaired the boundary case in which no vertex of $B_i$ lies in an induced
  $H_5$. Because the repository's blockade definition requires nonempty
  blocks, the scaffold now chooses one vertex of the nonempty $B_i$ as a
  singleton $X_i$; its singleton blockade and one-vertex pattern satisfy the
  relevant clauses, while the remaining $Y_i$ stays $H_5$-free and co-$E$-free.
- Added `def-comb-in-a-graph` to the overlap-relation definition's dependencies
  and clarified that the final B example contains the required outside special
  vertex and uses singleton $X_i$ blocks.
- Added the missing coverage carrier for the terminal-pattern argument in the
  proof of Lemma 6.4 and corrected two coverage labels to retain the special-
  vertex qualification. All established item IDs were preserved.

## Route, source, and scope review

- The manifest and current plan agree mechanically on orders, companions, and
  declared page prerequisites: the A page requires
  `the-structural-criterion-for-property-star` and
  `quotient-blockades-and-mixing-relations`; B requires A. The mathematical
  closure defect above remains despite that mechanical agreement.
- The exact §16.2 design assigns Lemma 6.3, Claims 6.4.1–6.4.3, and Lemma 6.4.
  The repaired 12-item A scaffold covers those statements and exposes the
  overlap, termination, lifting, and empty-case proof obligations needed for
  authoring. The three B items cover both induced co-$E$ witnesses, a finite
  overlap quotient, and a special-vertex comb example.
- Both source records have current durable fetch receipts. The complete arXiv
  source section through the §6.2 boundary was read; the separate Bird route is
  correctly deferred to `co-bird-free-comb-structure` at order 439.
- All six declined Diestel/Bird coverage rows remain `stands`: contraction and
  minors, Euler tours, linear algebra, unnamed exercises, and bibliographic
  notes are unused here; §6.2 is assigned to its exact later page. No new page,
  forward edge, or reading-order change was made.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-32 --group g`
  Result after final coverage edit: `6 decline(s), 0 pending`.
- `node tools/scope-decisions.mjs check --run frontier-32 --group g`
  Result: `6 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-13.coverage.json --require-destination`
  Result: 1 page, 34 harvested results, 0 errors, and the expected low-yield
  warning; all declined rows were individually reviewed in the scope ledger.
- Manifest-to-coverage and dependency scan over batch 13
  Result: 15 items, 0 duplicate IDs, 0 existing-item collisions, 0 unresolved
  dependencies, and 0 uncovered A items.
- `node tools/manifest-deps.mjs research/frontier-32-batch-13.pages.json`
  Result: 15 items, 0 missing dependency arrays, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-32-batch-13.pages.json`
  Result: 15 scoped items, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-13.coverage.json`
  Result: 2/2 sources fetch-verified.
- `node tools/manifest-integrity.mjs --run frontier-32`
  Result: all 46 owed pages remain present; no scope drift.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: passed with no item-level cycles, forward references, B-page
  dependencies, or unresolved IDs among pages whose current plan items are
  populated. The current plan still has empty item arrays for orders 437–438,
  so the focused manifest scan above validates the unspliced batch items.

## Next action

The owner must decide whether to supply a valid universal-comb theorem or amend
the published structural criterion to the special-vertex form. Until then,
batch 13 is source-faithful but not sufficient for its declared downstream
route.
