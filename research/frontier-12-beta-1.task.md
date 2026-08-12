## Batch 1 of run `frontier-12` — field theory

Two A/B pairs. You own all four pages, and you author them at step 5.

### Pair A — the D10 pair (NEW, no prose scaffold exists)

| | |
|---|---|
| A page | order **53.2** · `the-field-of-fractions-and-localisation` · "The Field of Fractions and Localisation" · category `abstract-algebra` |
| B page | order **53.4** · `the-field-of-fractions-and-localisation-examples` |
| requires | `polynomial-rings-and-roots` (order 52) — orders 48 and 46 are reachable through it and are citable |

**Why this page exists, and what it must deliver.** Two items are **already
published** and both open by assuming a construction the library has never
built:

- `items/cex-ordered-field-not-archimedean.md` (`kind: counterexample`, homed on
  `foundations-of-the-real-numbers`, order 9) — *"Given: ℝ(t), the field of
  fractions of the polynomial ring ℝ[t], …"*
- `items/ex-rational-function-field-order.md` (an example, homed on
  `equivalent-forms-of-completeness-examples`, order 125) — *"Let ℝ(t) be the
  field of fractions of the polynomial ring …"*

Open both on disk before you scaffold. At **step 9** the orchestrator will wire
them to your page: a load-bearing forward reference from the order-9
counterexample, an ordinary `deps` edge from the order-125 example. For that to
work your scaffold must contain, as **citable items with stable ids**:

1. the field of fractions `Frac(D)` of an integral domain `D` — construction and
   the definition itself, not merely a mention;
2. that it **is** a field, and that `D` embeds in it;
3. its **universal property** (every injective ring map from `D` into a field
   factors uniquely through `Frac(D)`);
4. `ℝ(t) = Frac(ℝ[t])` reachable as a named consequence or example on the **A**
   page — a B-page item cannot be depended on (`b-leaf`).

Do **not** define an order or a positive cone on ℝ(t): the published
counterexample supplies its own `P = {f ≠ 0 : f(x) > 0 for all sufficiently
large real x}` and must keep owning it. Your job is the field, not its ordering.

Beyond that, scaffold the subject properly: localisation `S⁻¹R` at a
multiplicative set, localisation at a prime ideal, the local ring, the universal
property of localisation, exactness where it is in scope, and the standard
counterexamples (what goes wrong when `0 ∈ S`, when `R` is not a domain, when `S`
contains zero divisors). Richness is the owner's stated priority for this run.

### Pair B — splitting fields

| | |
|---|---|
| A page | order **56** · `splitting-fields` · "Splitting Fields and the Existence of Roots" |
| B page | order **57** · `splitting-fields-examples` |
| requires | `field-extensions-and-the-complex-numbers` (order 54) |
| prose scaffold | `research/plan-algebra-track-expansion.md`, `research/plan-algebra-track.md` — read the sections covering splitting fields |

Kronecker's construction, existence and uniqueness up to isomorphism, splitting
field of a polynomial and of a set, degree bounds, normality where it is in
scope, algebraic closure only if you can genuinely close it here.

### A hard constraint between your two pairs

`splitting-fields` (56) does **not** declare `the-field-of-fractions-and-localisation`
(53.2) in its `requires`, and 53.2 is not in its closure. So **no item on
`splitting-fields` may depend on any item on the field-of-fractions page** —
`validate-plan` fails it as `undeclared-prereq`. Keep them independent.

If while scaffolding you conclude that splitting fields genuinely *needs* the
field of fractions, do not work around it and do not edit `plan-spec.json`.
**Record it in your notes as a recommendation**, name the exact result that needs
it, and the orchestrator will decide at step 3 whether to add the `requires`
edge. That is a legal and expected outcome — just not yours to apply.
