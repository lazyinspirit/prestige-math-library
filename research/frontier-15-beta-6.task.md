# Batch 6 of run `frontier-15` — Goursat and Cauchy in a convex domain

One A/B pair — CA-4, the engine of the complex-analysis track: everything
from analyticity of holomorphic functions through Liouville, the residue
theorem and Riemann mapping is transitively above it.

| | |
|---|---|
| A page | `goursat-and-cauchys-theorem-in-a-convex-domain` · order **309** · `complex-analysis` |
| B page | `goursat-and-cauchys-theorem-in-a-convex-domain-examples` · order **310** |
| requires | `contour-integration` (CA-3), `complex-power-series-and-analytic-functions` (CA-2) — both published in frontier-14 — and `rn-as-a-normed-space` (published) |
| design | `research/plan-complex-analysis-track.md` §CA-4, line ~1020 |
| estimate | 13 proposed A items, in a printed dependency-ordered table with ids |

Pair sources with exact harvested locators (design, L1024): Ahlfors Ch. 4
§§1.4–2.3; Stein–Shakarchi Ch. 2, "Goursat's theorem" through "Cauchy's
integral formulas"; Howell–Mathews Ch. 6 §§6.3–6.5. Verify liveness, record
your ranges.

## Traps the design states

1. **The interior-edge cancellation in Goursat's bisection is a numbered
   step, not a picture**: `∫_∂T = Σ ∫_∂T_k` needs CA-3's additivity and
   reversal items, cited by id. This is where the proof is usually waved,
   and the design puts the four-triangle drawing on the B page precisely so
   the A-page step stays a computation.
2. **The nested-triangle selection is its own lemma** (quarter of the
   integral magnitude retained, diameters → 0), with completeness cited from
   `equivalent-forms-of-completeness` / `rn-as-a-normed-space` — the
   nested-set principle is not re-proved.
3. **Goursat with one exceptional point is its own item**, not a remark —
   the integral formula consumes exactly it, via the filled difference
   quotient `(f(ζ)−f(z))/(ζ−z)`. No keyhole contour on this page.
4. **Differentiation under the integral is by explicit difference-quotient
   estimate** — the library has no general theorem to cite, so do not cite
   one.
5. Star-shaped and convex come from the published `convexity` /
   `rn-as-a-normed-space` machinery via the dictionary remark — do not
   re-mint plane versions.

## Scope boundary

Analyticity of holomorphic functions, Morera, Liouville are CA-5 (order
311) — the next wave. The CEX row (annulus with `∫_γ f ≠ 0`) uses CA-3's
`fs-` witness for `1/z`; open it and cite, don't rebuild.

**No permission prompts of any kind**, including inside an `&&` chain.
