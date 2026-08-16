## Your assignment — batch 6, the A page: Goursat, primitives, Cauchy's theorem and the integral formula

Run `frontier-15`, batch 6. The pair is
`library/complex-analysis/goursat-and-cauchys-theorem-in-a-convex-domain.md` (A page,
17 items) and `library/complex-analysis/goursat-and-cauchys-theorem-in-a-convex-domain-examples.md`
(B page, 8 items). All items are at `items/<id>.md`, `status: draft`. The batch proof
contract is `research/frontier-15-batch-6.proof-contracts.json`.

Read these items in full, every numbered step against every cited item on disk:

- def-oriented-complex-triangle-and-boundary
- rem-plane-star-shaped-and-convex-dictionary
- lem-goursat-four-triangle-boundary-cancellation
- lem-goursat-nested-triangle-selection
- thm-goursat-triangle-theorem
- cor-goursat-rectangle-theorem
- thm-goursat-theorem-one-exceptional-point
- prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain
- thm-holomorphic-primitive-on-star-shaped-domain
- cor-cauchy-theorem-star-shaped-domain
- cor-cauchy-theorem-convex-domain
- thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain
- lem-cauchy-difference-quotient-exceptional-extension
- thm-cauchy-integral-formula-circle
- lem-differentiating-cauchy-integrals
- thm-cauchy-integral-formula-higher-derivatives
- cor-cauchy-inequalities

**Focus for this group. This is a single load-bearing chain — Goursat → primitive on a
star-shaped domain → Cauchy's theorem → the integral formula → the higher-derivative
formula → the Cauchy inequalities — and a defect anywhere in it invalidates everything
after it. Trace the chain end to end and say where, if anywhere, it breaks.**

1. **Goursat.** `lem-goursat-nested-triangle-selection` bisects a triangle into four,
   picks a child with `|\int| \ge \frac14|\int_{\text{parent}}|` (check the constant and
   the inequality direction), and iterates. Check: diameter and perimeter both **halve**
   at each step (so `d_n = 2^{-n}d_0`, `L_n = 2^{-n}L_0`); the nested compact sets have
   a **nonempty** intersection, which needs completeness/compactness and the diameters
   going to zero for the intersection to be a **single point** — check both are argued.
   Then `thm-goursat-triangle-theorem`: the estimate at the limit point uses
   differentiability at that point to write `f(z) = f(z_0) + f'(z_0)(z-z_0) +
   \varepsilon(z)(z-z_0)` with `\varepsilon\to0`, and needs that **affine functions have
   primitives** so their contour integrals over a closed triangle vanish. Check that
   sub-result is cited to an item on disk and not assumed. Check the final estimate's
   arithmetic: `|\int_{T_n}f| \le \varepsilon d_n L_n = \varepsilon 4^{-n} d_0L_0`
   against `|\int_T f| \le 4^n|\int_{T_n}f|`, so the bound is `\varepsilon d_0L_0`.
   A dropped factor of `4^n` here makes the proof vacuous.
2. **Degenerate triangles.** Instantiate a triangle with two equal vertices and three
   collinear vertices in `lem-goursat-four-triangle-boundary-cancellation`,
   `lem-goursat-nested-triangle-selection` and `thm-goursat-triangle-theorem`. State
   whether the results hold and whether the proofs cover those cases.
3. **The exceptional-point versions.** `thm-goursat-theorem-one-exceptional-point`
   assumes `f` continuous on the domain and holomorphic **except** at one point `p`.
   Check the proof's case split (`p` a vertex, `p` on an edge, `p` interior) is complete,
   and that the small-triangle-around-`p` estimate uses **continuity** (hence local
   boundedness) of `f` near `p` — if it uses holomorphy at `p`, the theorem is circular.
   Check `thm-cauchy-theorem-one-exceptional-point-on-a-star-shaped-domain` inherits the
   right hypotheses.
4. **The primitive.** `prop-triangle-integrals-give-a-primitive-on-a-star-shaped-domain`
   defines `F(z) = \int_{[a,z]}f` along segments from the star centre. This is where the
   star-shaped hypothesis is genuinely needed: the triangle with vertices `a, z, z+h`
   must lie **inside the domain**, which star-shapedness alone does **not** give in
   general — the standard fix is to use convexity, or star-shapedness plus a small disc
   around `z`. **Check exactly which hypothesis the proof uses and whether the Statement
   supplies it.** If the proof needs the whole triangle `a,z,z+h` in the domain and only
   star-shapedness about `a` is assumed, that is a missing hypothesis and it is fatal.
5. **The integral formula.** `thm-cauchy-integral-formula-circle`: check the hypotheses
   (`f` holomorphic on `D(a,R)`, `0<r<R`, `|z-a|<r`), the contour, and the standard
   argument via the difference quotient `g(w) = (f(w)-f(z))/(w-z)` extended
   continuously at `w=z` — that extension is `lem-cauchy-difference-quotient-exceptional-
   extension`; check the extension is **continuous** at `z` and that the exceptional-point
   Cauchy theorem, not the ordinary one, is what licenses `\oint g = 0`. Then check
   `\oint (w-z)^{-1}dw = 2\pi i` for `z` inside the circle is proved or cited — for `z`
   **not** the centre this is not the elementary computation, and asserting it from the
   centre case is an unlicensed inference.
6. **Higher derivatives and the inequalities.** `lem-differentiating-cauchy-integrals`
   differentiates under the integral sign; check the uniform bound / limit interchange is
   justified, and check the induction in `thm-cauchy-integral-formula-higher-derivatives`
   has a correct base case and the factorial `n!/(2\pi i)` with the exponent `n+1`.
   Then `cor-cauchy-inequalities`: `|f^{(n)}(a)| \le n!M/r^n`. Check the exponent is `r^n`
   and not `r^{n+1}`, and that `M` is the sup on the **circle** of radius `r`.
7. **The Remark.** `rem-plane-star-shaped-and-convex-dictionary` is prose identifying
   `\mathbb C` with `\mathbb R^2`. Read it with a numbered step's suspicion: check every
   asserted equivalence (convex ⟹ star-shaped about every point; star-shaped ⟹
   connected; the topology transported is the same one the cited published items carry).
