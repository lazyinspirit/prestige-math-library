# frontier-37-owner-30 — batch 18 Step 1 notes

Owned pair: `perfect-complexes-and-triangulated-grothendieck-groups` (A,
order 723) and its `-examples` B page (order 724), both in homological
algebra. The assigned task, HA-21 design, current `research/plan-spec.json`,
planning notes, drift review and batch evidence were read. The run-local owner
authoring-direction file does not exist. The plan and HA-21 agree on page IDs,
order, category, pair membership and the two A-page requirements; **no
design-versus-plan conflict** was found. The plan's item lists for this pair
were empty before construction. HA-21 names eight A items and three B items;
one necessary local closure lemma was added before the K0 comparison. No
selected pair, shared plan, published item, engine state or verdict was edited.

## Inventory and mathematical route

All 12 IDs were unused before this batch, have explicit `deps`, and were
scaffolded in prerequisite order. Each item received its own current `ready`
record with `node tools/step1-decisions.mjs record` before construction moved
to the next item. The added lemma is needed because the triangle presentation
of K0 requires `D_perf(A)` itself to be essentially small and triangulated;
bounded finite-projective representatives and the finite no-roof argument
establish that without a global-dimension assumption.

**A inventory (9, manifest order):**

1. `def-perfect-complex-over-a-ring`
2. `lem-perfect-complexes-form-a-triangulated-subcategory` (local addition)
3. `def-triangulated-grothendieck-group`
4. `lem-triangulated-k-zero-shifts-and-exact-functors`
5. `lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant`
6. `thm-perfect-complex-k-zero-agrees-with-projective-k-zero`
7. `thm-abelian-k-zero-agrees-with-bounded-derived-k-zero`
8. `thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories`
9. `thm-graded-tensor-equivalences-induce-laurent-linear-k-zero-actions`

**B inventory (3, manifest order):**

1. `ex-homological-and-internal-shifts-on-k-zero`
2. `ex-dual-numbers-simple-is-not-perfect`
3. `ex-euler-class-of-a-two-term-cone`

The first comparison is between split classes of finitely generated projective
left modules and triangle classes of perfect complexes over any ring. An
acyclic bounded finite-projective complex splits from an endpoint, so its
Euler sum vanishes; cone terms give quasi-isomorphism and triangle additivity.
Brutal-truncation triangles give the inverse to degree-zero inclusion. The
second comparison is `G0(C) ≅ K0(D^b(C))` for an essentially small abelian
category, using finite long-exact-cohomology cancellation and canonical
truncation triangles. It needs no projectives or finite global dimension.
Only the subsequent category-equivalence theorem identifies these two groups
with each other under a **left Noetherian ring of finite left global
dimension**. The published
`thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` is the
noncommutative left-module kernel supplier; the similarly titled commutative
lemma is not used. The published positive-index syzygy theorem is applied
with `n=max(1,d)`, including `d=0`.

The no-roof proof for a **bounded** projective complex makes only finitely
many descending lifts and is choice-free. The published **bounded-above**
replacement and K-projectivity theorems used in the finite-global-dimension
comparison explicitly require DC. Item 8 therefore states AC, declares
`def-axiom-of-choice` and the published AC→DC implication, and identifies
the choice use as those two replacement theorems. The periodic resolution
and tensor-homology calculation in B item 2 are choice-free; that example
states AC only to invoke the published DC-qualified balanced Tor and
derived-Tor comparison. Other owned items are choice-free. No claim consumes
a Recorded result or crosses an incompatible axiom branch.

The graded action requires finite-dimensional graded algebras and bounded
two-sided projective bimodule complexes with **supplied** inverse homotopies.
Those hypotheses keep finite-dimensional modules finite after tensoring and
give exact equivalences on both perfect/projective K0 and bounded-derived
G0. Internal `{1}` gives the independent Laurent variable, while cochain
`[1]` gives the minus sign. Natural-isomorphism relations descend to equal
matrices; the scaffold does not claim a coherent categorical action. For a
noncommutative ring, the two-term cone example specifies **right**
multiplication `x↦xa` on the left regular module so that its map is left
linear.

## Sources, suppliers and dispositions

Five complete source bodies were fetched, inspected and stamped; exact
locators, item-level dispositions for all 30 harvested results, read evidence,
URLs, byte counts and hashes are in the owned coverage file. Each URL
succeeded on its initial full-text attempt, so no recovery or source drop was
needed. The independent A treatments are [Stacks, Derived Categories
§13.28](https://stacks.math.columbia.edu/tag/0FCM) and [More on Algebra
§15.121](https://stacks.math.columbia.edu/tag/0FJG), alongside [Weibel,
*The K-book*, Chapter II](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf),
a complete author-hosted textbook chapter. [Stacks §15.76](https://stacks.math.columbia.edu/tag/0656)
supports perfectness and closure; [Khovanov–Seidel §§2c and
2e.1](https://arxiv.org/pdf/math/0006056) supports the separate shifts and
graded decategorification. Stacks' regular-commutative comparison is not
substituted for the stated noncommutative left-Noetherian theorem. Weibel's
Waldhausen K0 argument is translated locally into the exact triangle and
cone presentation rather than cited as a literal presentation identity.

The load-bearing published supplier proofs and interfaces were checked for
statement, direction, side, cochain signs and axiom use, especially the
split/G0 definitions and universal properties, derived cone and truncation
triangles, projective no-roof proposition, bounded-above replacement,
left-Noetherian finite-kernel theorem, syzygy theorem, graded shift and
bimodule-tensor equivalence. A graph walk from the 12 owned items found 658
distinct local/published transitive `deps` nodes: none was missing, Recorded,
cyclic or in another batch of this run, and no out-of-run supplier was
unpublished. No published
defect in an actual prerequisite was confirmed. Published warnings elsewhere
are not used to block this supplier. The manifest's direct uses introduce
no new page prerequisite: a temporary copy of the current plan with both
owned item inventories injected passed `validate-plan` without an
undeclared-prerequisite finding. That copy lives in `/tmp`; the shared plan
was not changed.

The owned consumer-batch dependency input is `[]`: every direct item
dependency is within this pair or is published outside this run; the A/B
page requirements likewise have no in-run cross-batch supplier. The
`frontier-dependency-ledger.mjs refresh` command succeeded after the input
was written. No cross-batch change or new prerequisite pair requires owner
escalation.

## Checks and remaining work

| Check | Observed result |
|---|---|
| Owned coverage with `--require-destination` | Exit 0; 1 A page, 30 disposed harvested results, 0 errors, 1 low-yield warning (`11/30` included). The declined and inline results are individually reasoned in coverage; overlapping Stacks/Weibel/KS treatments account for the warning. |
| Owned `source-fetch-check --stamp` then check mode | Exit 0; 5/5 full-text sources fetched and stamped, 0 drops. |
| Whole-run `manifest-deps` | Exit 0; 528 items, no missing dependency arrays or errors at the observed check. |
| Whole-run `content-policy --manifest-only` | Exit 0; 528 items, 0 errors and 0 warnings. |
| Current-plan `validate-plan` | Exit 0; 319 still-empty planned page inventories elsewhere and pre-existing redundant-prerequisite warnings. |
| Temporary plan with this pair's actual items injected | Exit 0; no undeclared page prerequisite, cycle, forward reference, B-page dependency or unresolved ID. |
| Repository `extcheck --quiet` | Exit 0; 40 warnings concerning already-published items elsewhere, none in the owned dependency path. |
| Whole-run `item-dependency-levels check` | Exit 1 only for 21 empty inventories in other batches at the observed check. All 12 owned labels independently recompute exactly (levels 0–4), with no owned mismatch or cycle. |
| Whole-run `step1-decisions check` | Exit 1 while other batches still have empty pages, escalations and stale records. All 12 owned `ready` records are current by `step1Decision` after the final clarification and supplier-order refresh. |

The Step-1 decisions are scaffold-readiness evidence, not independent
mathematical approval. Step 3 must author and review the complete arguments,
including the finite replacement/truncation proof and the graded
finite-dimensional restriction.
