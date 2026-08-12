## Batch 7 of run `frontier-12` — limits and colimits

**One A/B pair, deliberately.** 14 unscaffolded A pages sit downstream, including
the whole adjunctions / monads / abelian-categories chain. You have a whole
Beta's attention for one subject.

| | |
|---|---|
| A page | order **363** · `limits-and-colimits` · "Limits and Colimits" · `category-theory` |
| B page | order **364** · `limits-and-colimits-examples` |
| requires | `universal-properties-and-the-yoneda-lemma` (361), `cardinal-arithmetic-and-cofinality` (247) |
| prose scaffold | `research/plan-combinatorics-and-categories.md` |

### Scope

Diagrams and cones, the limit of a diagram and its universal property,
uniqueness up to unique isomorphism, colimits by duality — and say plainly what
"by duality" licenses, since a dual proof is a real proof only when the dual
statement is the exact formal dual. Then the concrete shapes: products and
coproducts, equalisers and coequalisers, pullbacks and pushouts, initial and
terminal objects, the pasting lemma for pullbacks.

The structural theorems are the point of the page: **limits from products and
equalisers**, completeness and cocompleteness, finite versus small versus large
limits, preservation, reflection and creation of limits, **representable functors
preserve limits**, `Hom(X,−)` continuity, and limits computed pointwise in
functor categories.

`cardinal-arithmetic-and-cofinality` (247) is in your `requires` for a reason:
"small" is a size condition and this library has the cardinal machinery to say it
precisely. Use it. State exactly what smallness hypothesis each theorem needs
rather than writing "small" as a decorative adjective, and be explicit about the
size distinction that makes a *complete small* category a preorder — that is the
kind of trap this page should close rather than step into.

`universal-properties-and-the-yoneda-lemma` (361) is published and is 21+14
items — open it on disk and cite it exactly. Yoneda is what makes the
representable-functor results provable here rather than asserted.

### Watch the abstraction level

Category theory is the easiest place in this library to write prose that sounds
right and proves nothing. Every universal property gets an existence claim **and**
a uniqueness claim, each proved. Every "the reader may check" is a missing item.
Diagram-chasing arguments must name the diagram and the commuting squares they
use, not gesture at them.

### Split ceiling

If the page exceeds **60 items** (`validate-plan` error `size`), propose a split
in your step-2 notes with proposed ids and the exact cut rather than trimming.
The natural seam is general limits/colimits versus the special shapes and their
calculus.
