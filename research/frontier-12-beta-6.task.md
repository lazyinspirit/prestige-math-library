## Batch 6 of run `frontier-12` — complex differentiability

**One A/B pair, deliberately.** 26 unscaffolded A pages sit downstream, and this
page **opens a new category**. You have a whole Beta's attention for one subject.

| | |
|---|---|
| A page | order **303** · `complex-differentiability-and-cauchy-riemann` · "Complex Differentiability and the Cauchy–Riemann Equations" · category **`complex-analysis`** |
| B page | order **304** · `complex-differentiability-and-cauchy-riemann-examples` |
| requires | `the-complex-exponential-and-eulers-formula` (189), `field-extensions-and-the-complex-numbers` (54), `the-total-derivative` (229), `the-topology-of-euclidean-space` (257) |
| prose scaffold | `research/plan-complex-analysis-track.md` |

### You are founding a category

`library/complex-analysis/` **does not exist yet** — there is no such directory,
and `complex-analysis` carries 54 planned pages, the largest untouched subject in
the plan. Everything you establish here about notation and conventions is what 53
later pages will inherit. Two consequences:

1. **Conventions are load-bearing.** Fix and state them explicitly: `ℂ` as
   already constructed by `field-extensions-and-the-complex-numbers` (open it —
   this library builds ℂ as `ℝ[x]/(x²+1)`, and your page must agree with the
   construction actually on disk, not with a remembered one); open sets and
   domains via `the-topology-of-euclidean-space`; the identification of ℂ with ℝ²
   and exactly which structure that identification does and does not preserve.
2. **Presentation is FROZEN.** A new category directory is content, not styling.
   It renders with the neutral fallback in the app repo's
   `web/lib/library-categories.ts`, exactly as `topology` and `category-theory`
   already do. Do **not** add an accent, edit anything in the app repo, or touch
   any renderer file. Adding content is always fine; restyling is not.

### Mathematical scope

Complex differentiability at a point, the derivative as a limit of difference
quotients over ℂ, why this is strictly stronger than real differentiability in
two variables, holomorphic on an open set, the algebra of derivatives (sum,
product, quotient, chain rule), the Cauchy–Riemann equations as a necessary
condition, the **converse** with its correct hypothesis (continuous partials, or
real differentiability plus CR — state exactly which you prove and cite the
source for that exact form), Wirtinger derivatives if you use them, conformality
and the geometric meaning of a nonzero derivative, harmonic functions and
harmonic conjugates as far as you can honestly reach, and the standard
counterexamples: `z ↦ z̄`, `z ↦ |z|²`, functions satisfying CR at a point without
being differentiable in any neighbourhood, and the classical example that
satisfies CR at the origin yet fails to be complex differentiable there.

`the-total-derivative` (229) is your bridge from real multivariable
differentiability — open it and cite it exactly rather than restating it.

### Split ceiling

If the page exceeds **60 items** (`validate-plan` error `size`), propose a split
in your step-2 notes with proposed ids and the exact cut, rather than trimming.
The natural seam is differentiability-and-CR versus conformality-and-harmonic.
