# Step-1 owner repair — `phase-2-remaining-27`

Date: 2026-09-15 (Australia/Sydney)

Stage `1-drift` completed its assigned 27-page review with 27 `no-drift`
verdicts. Its repository-wide `validate-plan` gate then rejected ten
item-to-page dependencies on four later, unassigned Algebraic Geometry and
Scheme Theory A pages. This owner repair changes no run scope, page order,
item statement, or published file.

## Repaired carriers

The owner added the transitive-reduction pair of declared page edges below to
`research/plan-spec.json`:

- `products-segre-and-veronese-embeddings-and-grassmannians` (366.047) now
  additionally requires `limits-and-colimits` (363).
- `sheaf-operations-exactness-ringed-spaces-and-module-pullback` (366.051) now
  additionally requires `exactness-and-the-member-calculus` (365.019).

Every edge is backward. The products B-page dependency on
`subspaces-products-and-quotients` is discharged transitively through its own A
companion. The existing closure from `limits-and-colimits` reaches
`universal-properties-and-the-yoneda-lemma`, category foundations, subspaces,
and topological spaces; the products A/B pair carries it into the presheaf
pair. The existing closure from `exactness-and-the-member-calculus` reaches
`abelian-categories`; the sheaf-operations A/B pair carries both closures into
the affine-scheme page. Thus these two edges cover all ten rejected item
dependencies without a B-to-B edge and without deleting or weakening an item.

## Recertification

After the repair:

```text
node tools/validate-plan.mjs research/plan-spec.json
OK — declared page order is acyclic and consistent; no item-level cycles,
forward references, B-page dependencies, or unresolved ids among the 1134
pages with item lists.
```

The original drift result remains valid because none of its 27 reviewed A
pages or their declared closures changed. Independent owner-side
recertification confirmed the two-edge transitive reduction, its orders,
semantic necessity, closure sufficiency, and absence of cycles before
`autopilot retry` re-arms the same rejecting gate.
