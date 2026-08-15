## Group A of run `frontier-13` — abstract algebra and number theory · **YOU ARE THE LEAD ALPHA**

### Your batches

| batch | A pages |
|---|---|
| 1 | `symmetric-polynomials` (58) · `algebraic-extensions-degree-and-finite-fields` (96) |
| 2 | `primitive-roots-and-unit-groups-modulo-n` (57.001) · `semidirect-products-and-automorphism-groups` (68) |
| 5 | `tensor-products-of-modules` (106) |

Five A/B pairs, ten pages. Read `research/frontier-13-batch-{1,2,5}.*` and the
task files `research/frontier-13-beta-{1,2,5}.task.md` that those Betas received.
**Do not open batches 3, 4, 6 or 7 at step 3 or step 6a/6b** — groups B and C own
them and are working concurrently.

### Being the lead

You are a group Alpha *and* the lead. Do your own group's step 3 first. Later, at
step 4, step 6c and step 8, you act over the **whole run** — those three stages
are single-agent by rule (`briefs/alpha.md` §"Group Alpha or lead Alpha"). At
step 3 you have no lead-specific duty beyond your own three batches, except one:
if you notice a defect in another group's batch while reading shared material,
**record it for the orchestrator** rather than acting on it.

### The named challenges for your batches

**Batch 2 is the run's highest-risk seam.**
`semidirect-products-and-automorphism-groups` needs `Aut(ℤ/n) ≅ (ℤ/n)^×`, and
`primitive-roots-and-unit-groups-modulo-n` — the *other pair in the same batch* —
is where that lives. But order 57.001 is **not** in order 68's `requires`
closure, so an item-level citation between them is a hard `undeclared-prereq`
failure. The legal outcomes were: build the needed unit-group facts locally on
order 68, or record a `requires` recommendation in the notes. **Determine which
happened, and say so explicitly in your verdict.** A silent workaround is a
finding.

**Batch 2's other load-bearing item is cyclicity of `𝔽_p^×`** — existence of
primitive roots mod `p`. The task file required a real proof and named two honest
routes (the published `the-structure-of-finite-abelian-groups`, or the
"at most `d` roots of `x^d − 1` in a field" argument). Check the notes say which
route was taken, and that the route actually closes.

**Batch 1's `algebraic-extensions-degree-and-finite-fields` is two subjects on
one page** — algebraic extensions and degree, then finite fields. Design sized it
A 30 before the harvest rule existed. **Rule explicitly on splitting**, whether or
not the Beta proposed one; the natural cut is named in its task file.

**Batch 5 is a singleton with 35 unbuilt A pages downstream**, and its universal
property is what all of them will cite. Two things the MOD-3 design is emphatic
about, both of which you should verify reached the scaffold:

1. **The guard item** — a well-defined map out of `M ⊗_R N` is produced only by
   the universal property, *with an explicit demonstration that a formula on
   elementary tensors can fail*. MOD-3 calls this "the defect this page exists to
   prevent". If it is missing or demoted to a remark, that is `insufficient`.
2. **The construction and the module structure are two statements, not one.** The
   construction is over arbitrary `R`; the `R`-module structure on the result
   needs commutativity. Conflating them is the error MOD-3 §Traps (ii) names.

Also check batch 5 ruled on **enough injectives** (MOD-3 calls it the hardest
item in the block and says it is not optional) and on the `ℂ ⊗_ℝ ℂ` B-page item,
whose ℝ-algebra structure may not exist on disk.

**Splitting:** batches 1 and 5 are both live split candidates at the 60-item
ceiling. Rule on each by name.
