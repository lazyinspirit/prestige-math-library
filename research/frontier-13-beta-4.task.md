## Batch 4 of run `frontier-13` — the opening of the Erdős–Hajnal block

Two A/B pairs. You own all four pages, and you author them at step 5.

> **Orders in the prose scaffolds are STALE.** `research/plan-spec.json` is the
> only live source of `order`. Identify everything by **page id**.

These are the first two of the 25 Erdős–Hajnal pairs introduced for
**arXiv:2606.06258v2**. `ERDOS.md` is the persistent build schedule for the whole
block and names these as its opening frontier; read it for what comes after, so
you scaffold definitions the rest of the block can actually reuse.

### Pair A — the Erdős–Hajnal property

| | |
|---|---|
| A page | `erdos-hajnal-property-and-homogeneous-sets` · "The Erdős–Hajnal Property and Homogeneous Sets" · category `combinatorics` · order **395** |
| B page | `erdos-hajnal-property-and-homogeneous-sets-examples` · order **396** |
| requires | `induced-subgraphs-and-hereditary-graph-classes`, `finite-probability-and-the-probabilistic-method` (both published) |
| prose scaffold | `research/plan-combinatorics-and-categories.md` line ~3897; `ERDOS.md` for the block schedule |

Planned coverage: **EH constants, the conjecture, complement invariance,
monotonicity, and the family/single-graph formulations.**

Homogeneous sets (cliques and independent sets), the EH function
`hom(G)`, the property "`𝒞` has the Erdős–Hajnal property with constant `ε`" for
a hereditary class, the **Erdős–Hajnal conjecture** stated for a fixed forbidden
induced subgraph `H`, invariance under complementation, monotonicity in `H`,
equivalence of the single-graph and finite-family formulations, and the
**Erdős–Szekeres / Ramsey baseline** `hom(G) ≥ ½ log₂ n` that makes the
conjecture's polynomial bound the actual content.

The random-graph lower bound — that a general graph has no polynomial-size
homogeneous set — is what makes the whole subject nontrivial, and
`finite-probability-and-the-probabilistic-method` is published precisely so you
can prove it here rather than assert it. Do so.

### Pair B — regular pairs and induced counting

| | |
|---|---|
| A page | `regular-pairs-and-induced-counting` · "Regular Pairs and Induced Counting" · category `combinatorics` · order **399** |
| B page | `regular-pairs-and-induced-counting-examples` · order **400** |
| requires | `induced-subgraphs-and-hereditary-graph-classes`, `finite-probability-and-the-probabilistic-method` (both published) |
| prose scaffold | `research/plan-combinatorics-and-categories.md` line ~3899; `ERDOS.md` |

Planned coverage: **density, regularity, energy increment, slicing, induced
counting and induced removal.**

Edge density between disjoint sets, **`ε`-regular pairs**, the slicing lemma
(regularity is inherited by large subsets, with the density shift bounded), the
**energy/index increment** argument, the **Szemerédi regularity lemma** itself,
the **counting lemma** and its **induced** form, and the **induced removal
lemma**.

This is a demanding page. Two warnings:

1. **The regularity lemma has a real proof and a real tower-type bound.** State
   the bound honestly. Do not state a version stronger than you prove, and do not
   let the title or Statement claim more than the proof gives — that is a fatal
   defect class at step 6.
2. **The induced removal lemma is genuinely harder than the removal lemma.** If
   you cannot close it in scope from what you build here, that is a legitimate
   `deferred` disposition *with a reason naming that specific result and what
   would license it* — but read `LEVELS.md` §"Step 2" first: "build the
   machinery" means a missing lemma you could have written is not a reason to
   drop, and only a whole missing subject area is.

### The hard constraint between your two pairs

The two pairs have **identical** `requires`, and neither declares the other. So
**no item on order 399 may depend on any item on order 395**, and vice versa —
`validate-plan` fails it as `undeclared-prereq`.

`ERDOS.md` schedules them as independent members of the same cycle precisely
because neither needs the other; the later pairs in the block are where they
combine. If your scaffolding contradicts that, **record it in your notes as a
recommendation** naming the exact result, and the orchestrator decides at step 3.
Do not work around it, and do not edit `plan-spec.json`.
