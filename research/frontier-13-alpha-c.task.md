## Group C of run `frontier-13` — Erdős–Hajnal and category theory

### Your batches

| batch | A pages |
|---|---|
| 4 | `erdos-hajnal-property-and-homogeneous-sets` (395) · `regular-pairs-and-induced-counting` (399) |
| 6 | `adjunctions-units-and-counits` (365.001) |

Three A/B pairs, six pages. Read `research/frontier-13-batch-{4,6}.*` and the
task files `research/frontier-13-beta-{4,6}.task.md` that those Betas received.
**Do not open batches 1, 2, 3, 5 or 7** — groups A and B own them and are working
concurrently.

You are a group Alpha, **not** the lead. You run step 3 and later steps 6a/6b for
your two batches, write namespaced reports, and hand them to the orchestrator.
Step 4 propagation, step 6c cross-batch/cross-level citation audit and step 8
judge adjudication belong to group A (`briefs/alpha.md` §"Group Alpha or lead
Alpha"). If you find something that bears on another group's batch, **record it
for the orchestrator** rather than acting on it.

### Batch 6 is the highest-leverage pair in the plan

**197 unbuilt A pages descend from `adjunctions-units-and-counits.`** The
category-theory spine, the homological-algebra track, the monoidal track and both
representation-theory tracks all rest on it. Give it the reading that deserves.

**Decision D1 amended `plan-spec.json` at step 0 for this page.** Three published
`requires` edges were added — `conjugacy-and-simplicity-in-the-symmetric-groups`,
`free-modules-and-exact-sequences`, `tychonoff-embedding-and-stone-cech` —
because the MA-1 design builds the free-module, abelianisation and Stone–Čech
adjunctions and the spec declared only `limits-and-colimits-examples`. **Verify
the edges were applied and that the scaffold actually uses the room they bought**
(MA-1 items 34, 36, 38). Rationale: `research/frontier-13-step0-batching.md` §5a.

**MA-1 item 40 must have been dropped, and dropped *visibly*.** Restriction of
scalars having both adjoints is CONTINGENT on `tensor-products-of-modules`, which
is batch 5 of this same run and therefore **not** in batch 6's closure. The
instructed disposition was to fall back to the `Hom`-side adjoint alone and
record the drop as a `deferred` coverage row naming the licensing page. If batch
6 cited batch 5 instead, that is a hard `undeclared-prereq` failure and an
`insufficient` verdict. If it dropped the item silently, that is also a finding.

**Two published B-leaves that batch 6 must NOT cite.** MA-1 §Traps names
`ex-free-monoid-universal-property-as-a-representation` and
`ex-function-sets-as-exponential-representing-objects`; both are homed on
examples pages, so depending on them is `validate-plan` `b-leaf` /
`depcheck` `b-leaf-content`. Items 35 and 41 instructed a check for an A-page
home and a local proof if absent. Verify what happened.

**Riehl's 2nd edition renumbered Chapters 3 and 4 — this is your sharpest
harvest-faithfulness test.** The adjoint functor theorems are **§4.7, not §4.6**;
Prop 4.3.7 (mates), §4.5, Thm 4.2.7 and Ex 6.2.15 are new in the 2nd edition. A
first-edition locator carried into the harvest looks entirely plausible and is
wrong. **Open the PDF at the stated locators and check.**

**Three MA-1 requirements that are easy to lose and are not optional:**

1. `rem-why-this-library-takes-unit-counit-as-the-definition` — the library
   deviates from Mac Lane, Riehl and Leinster in taking unit–counit as primitive,
   because the hom-set form presupposes local smallness. An unrecorded
   definitional deviation reads as an error to the next auditor.
2. **RAPL's primary proof must be the unit/counit one** (item 24), with the
   representable proof as a *separate* item (27) carrying its own local-smallness
   hypothesis, reconciled by `rem-rapl-carries-no-size-hypothesis`. Merged into
   one item, the theorem is gratuitously weakened.
3. **The choice care in items 9, 11 and 12** — the word "given" is what keeps a
   proper-class selection from hiding inside `∀d ∃Gd`. Verify it survived.

**The A page is deliberately example-heavy** because the B page is a leaf and the
free–forgetful adjunctions are cited by three downstream pages. Worked
adjunctions exiled to the B page would be a structural defect, not a style
choice.

### Batch 4 — the Erdős–Hajnal opening

These are the first two of 25 pairs for arXiv:2606.06258v2; `ERDOS.md` is the
block schedule. Definitions minted here are reused by the whole block, so check
they are stated in the form the later pairs need.

**Order 395's content is not trivial only because of the random-graph lower
bound.** `finite-probability-and-the-probabilistic-method` is published precisely
so that "a general graph has no polynomial-size homogeneous set" can be *proved*
here rather than asserted. Check it was. Also check the Erdős–Szekeres/Ramsey
baseline `hom(G) ≥ ½ log₂ n` is present — it is what makes the conjecture's
polynomial bound the actual content.

**Order 399 carries two traps.** The **regularity lemma has a real tower-type
bound**: check the Statement and the *title* claim no more than the proof gives —
a title asserting more than the proof is a fatal class at step 6, and the judge
cannot see a false title. And the **induced removal lemma** is genuinely harder
than the removal lemma; if it was deferred, the reason must name that specific
result and what would license it, and you must decide whether that decline is
real under the 2026-08-11 "build the machinery" rule.

**Neither pair in batch 4 may cite the other** — identical `requires`, neither in
the other's closure. `ERDOS.md` schedules them as independent members of one
cycle, so that should be natural; if the scaffold contradicts it, check a
recommendation was recorded rather than a workaround applied.
