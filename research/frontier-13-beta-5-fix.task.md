## Batch 5 fix task — `tensor-products-of-modules` (order 106)

Alpha verdict: **insufficient**. One hard defect, two smaller items.

### F5.1 — OUT-OF-CLOSURE DEPENDENCY (must fix)

`def-tensor-product-of-modules-by-generators-and-relations` declares:

```
deps: [def-balanced-and-bilinear-maps, def-free-abelian-group,
       thm-abelianisation-of-a-free-group-is-free-abelian,
       def-generated-subgroup, def-quotient-group]
```

`def-free-abelian-group` and `thm-abelianisation-of-a-free-group-is-free-abelian`
are both homed on **`free-groups-and-presentations` (order 60), which is NOT in
this page's `requires` closure.** This is a hard `undeclared-prereq` failure and
it is load-bearing: your universal-property contract opens "Let $F$ be the free
abelian group on $M\times N$".

Verified independently by the orchestrator: 662 published dependencies across all
450 items in this run were resolved to their home pages and checked against each
pair's closure. **These two are the only out-of-closure edges in the entire run.**

**The fix** — cite the free-module machinery at $R=\mathbb Z$ instead:

- `def-free-module-on-a-set-and-standard-basis`
- `thm-universal-property-of-free-modules`

Both are homed on **`free-modules-and-exact-sequences`, which IS in your closure**
and is already this page's most-cited prerequisite. The published, judged
`lem-every-abelian-group-embeds-in-a-divisible-group` on that same page uses
exactly this move, so it is an established route in this library rather than a
workaround.

A free $\mathbb Z$-module on a set is a free abelian group on that set; make the
identification explicitly in the construction rather than leaving it implicit, and
adjust the proof contract's stated input map to match. Do **not** add a `requires`
edge to `free-groups-and-presentations` — the orchestrator considered and declined
it, because the free-module route is already available and adding an edge to reach
a result you can already cite is the worse of the two fixes.

### F5.2 — the two deferrals must name their licensing pages

Your `deferred` rows for directed-colimit closure of flat modules and the Tor
formulation give reasons but do not name where the result will live. Alpha
identified them: `subobject-lattices-...` (order 365.017) and
`tor-flatness-and-global-dimension` (order 365.055). Verify those ids against
`research/plan-spec.json` yourself and name the licensing page in each row. A
deferral that names no destination is indistinguishable from a drop.

### F5.3 — proof-contract citations are entirely empty

All 41 of your contracts have an empty `citations` array. Batches 1 and 2
populated all of theirs at scaffold time (212 and 222 disk-checked citations).
Populate yours: for each proof-bearing item, the exact cited source clause and the
steps using each fact. See the brief's table.

### Not in scope

Your `requires` amendments D5.1 (`dual-spaces-bilinear-forms-and-inertia`) and
D5.2 (`field-extensions-and-the-complex-numbers`) were **approved and already
applied** to `plan-spec.json` by the orchestrator. Do not re-apply them. Your
proposed design-document amendments to `research/plan-algebra-track-expansion.md`
are queued for the lead Alpha at step 4 — correct call not to apply them; leave
them alone.

Alpha confirmed your guard item, its failure witness ($q(m\otimes n)=m$ on
$\mathbb Z\otimes_\mathbb Z\mathbb Z$ where $2\otimes1=1\otimes2$), the separation
of construction from module structure, the `already-published` enough-injectives
disposition, and the $\mathbb C\otimes_\mathbb R\mathbb C$ licensing. Leave all of
that as it is.
