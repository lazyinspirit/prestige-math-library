## Batch 1 of run `frontier-14` — the complex-analysis foundation

Two A/B pairs. You own all four pages, and you author them at step 5.

**These two pages are the base of a 26-page complex-analysis track.** Everything
from Goursat and Cauchy through the residue theorem, Riemann mapping and the
zeta function waits on what you scaffold here — 24 of the 26 unbuilt pairs sit
transitively above these two. A missing definition here is not repaired later;
it is worked around by every page above it.

### Pair A — complex power series and analytic functions

| | |
|---|---|
| A page | `complex-power-series-and-analytic-functions` · order **305** · category `complex-analysis` |
| B page | `complex-power-series-and-analytic-functions-examples` · order **306** |
| requires | `complex-differentiability-and-cauchy-riemann` (published), `power-series-and-real-analytic-functions`, `absolute-convergence-and-rearrangement`, `uniform-convergence-of-functions` — all published |
| prose scaffold | `research/plan-complex-analysis-track.md` §**CA-2**, from line ~826 |

The design names its sources with harvestable locators: Ahlfors Ch. 2 §§2.1–2.5
("Sequences" through "Abel's Limit Theorem"); Stein–Shakarchi Ch. 1 ("Holomorphic
functions", "Power series"); Weber Ch. 1. It proposes 20 A-page items. Treat
that inventory as a floor to harvest against, not a ceiling.

The load-bearing results: radius of convergence and the Hadamard formula,
term-by-term differentiability of a power series inside its disc, a power series
is infinitely differentiable and its coefficients are its Taylor coefficients,
analytic ⇒ holomorphic, and Abel's limit theorem. **The identity theorem is NOT
yours** — it is CA-5, order 313, and it needs Cauchy. Do not reach for it.

### Pair B — contour integration

| | |
|---|---|
| A page | `contour-integration` · order **307** · category `complex-analysis` |
| B page | `contour-integration-examples` · order **308** |
| requires | `complex-differentiability-and-cauchy-riemann`, `properties-of-the-integral-and-the-working-ftc`, `arc-length-and-rectifiable-curves`, `bounded-variation-and-riemann-stieltjes` — all published |
| prose scaffold | `research/plan-complex-analysis-track.md` §**CA-3**, from line ~922 |

Sources: Ahlfors Ch. 4 §§1.1–1.3 ("Line Integrals", "Rectifiable Arcs", "Line
Integrals as Functions of Arcs"); Stein–Shakarchi Ch. 1 ("Integration along
curves"); Howell–Mathews Ch. 6 §§6.1–6.2. 20 items proposed.

`bounded-variation-and-riemann-stieltjes` is in your closure and that is
deliberate — the integral over a **rectifiable** curve is a Riemann–Stieltjes
integral, and the design put that page in `requires` so you can define it
honestly rather than assuming piecewise-smooth throughout. Open that page before
you decide which generality to carry, and say in your notes which you chose.

The load-bearing results: the contour integral and its elementary properties,
parametrisation-independence, the ML estimate, the fundamental theorem for
contour integrals over a primitive, and the winding number of a circle around
its centre if you can close it here without the global Cauchy theorem.

### The hard constraint between your two pairs

Neither page is in the other's `requires` closure, so **no item on either may
depend on an item on the other** — `validate-plan` fails it as
`undeclared-prereq`. They share a Beta because Ahlfors and Stein–Shakarchi serve
both, not for citation freedom.

If you conclude one genuinely needs the other — a live possibility here, since a
power-series page often wants the integral and vice versa — **do not work around
it and do not edit `plan-spec.json`.** Record it in your notes as a
recommendation naming the exact result that needs the edge; the orchestrator
decides at step 3. `contour-integration` at 307 sits above 305, so the edge
307 → 305 would be legal and backward. The reverse would not be.
