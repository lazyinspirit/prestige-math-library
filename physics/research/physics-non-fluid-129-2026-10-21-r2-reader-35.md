# Step 3a reader report — batch 35

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Scope: batch `35`

## Inventory opened

Assigned pages:

- `gr-fx07-kerr-and-hidden-symmetry` — `library/general-relativity/gr-fx07-kerr-and-hidden-symmetry.md`
- `gr-fx07-kerr-and-hidden-symmetry-examples` — `library/general-relativity/gr-fx07-kerr-and-hidden-symmetry-examples.md`

Assigned items, opened in dependency order:

- `def-gr-fx-kerr-exterior`
- `def-gr-fx-killing-tensor`
- `def-gr-fx-killing-energy-current`
- `lem-gr-fx-kerr-exterior-properties`
- `prop-gr-fx-killing-tensor-conservation`
- `prop-gr-fx-kerr-horizon-generator`
- `lem-gr-fx-kerr-vacuum-verification`
- `thm-gr-fx-kerr-hamilton-jacobi-separation`
- `rem-gr-fx-kerr-units-and-physical-parameters`
- `ex-gr-fx07-1`
- `ex-gr-fx07-2`

The six A-page prerequisite pages were opened: `gr-spherical-vacuum-model`,
`gr-fx01-hypersurface-and-null-geometry`, `gr-connections-and-free-fall`,
`gr-curvature-and-tides`, `gr-einstein-and-matter`, and
`gr-framework-and-geometry`.

The assigned items' declared supplier items were opened as needed: `def-euclidean-spheres-and-closed-balls`, `ex-the-round-metric-on-the-sphere-as-an-induced-metric`, `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`, `def-smooth-manifold`, `def-gr-smooth-covariant-two-tensor-field`, `def-gr-smooth-lorentzian-objects`, `def-smooth-vector-field-as-a-tangent-bundle-section`, `def-countable-choice`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-gr-killing-field`, `def-gr-inverse-metric-and-musical-isomorphisms`, `def-gr-observer-and-rest-space`, `lem-gr-inverse-metric-is-smooth`, `thm-real-power-continuity-and-derivatives`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `def-geodesic-of-an-affine-connection`, `def-covariant-derivative-along-a-curve`, `cor-zero-derivative-implies-constant`, `prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor`, `def-gr-fx-null-screen-geometry`, `lem-gr-fx-null-normal-plane-and-screen`, `cor-primitives-of-a-continuous-function`, `thm-sine-and-cosine-derivatives`, `def-gr-curvature-tensor-and-derived-tensors`, `thm-gr-curvature-tensoriality-and-coordinate-formula`, `def-gr-si-unit-and-coordinate-conventions`, `def-gr-schwarzschild-exterior-model`, `thm-gr-killing-and-on-shell-matter-identities`, `def-gr-scalar-field-matter-model`, `lem-gr-observer-projection-decomposition`, and `prop-gr-scalar-field-stress-energy-conservation`. I also opened `def-manifold-chart-coordinate-domain-and-coordinate-functions` to check the chart convention.

I read the current batch manifest, coverage record, proof contracts, cross-batch dependency record, and `research/math-imports.json` as navigation and evidence. I did not treat their author verdicts as independent review.

## Repairs

1. **`thm-gr-fx-kerr-hamilton-jacobi-separation`, Proof 4.1.** The original line claimed the angular expression equals `Theta + (L-aE)^2`, which is false for the stated `Theta`. With
   `C(theta) = cos^2(theta)[a^2(mu^2-E^2)+L^2/sin^2(theta)]`, direct expansion gives the angular expression as `S_theta'^2 + C(theta) + (L-aE)^2`. Setting `S_theta'^2 + C(theta) = Q` yields the stated angular and radial equations. I recorded the hypotheses as a product of nonempty open coordinate intervals with a local real azimuthal lift, and updated the step-4.1 contract and angular finite check. The assigned consumer `ex-gr-fx07-1` was checked against the corrected statement and needs no repair.

   Source check: Reall, *Black Holes*, §7.5, equations (7.34)–(7.36), PDF pp. 101–102, states the angular separation equation `S_theta'^2 + sin^{-2}(L-aE sin^2)^2 + sigma a^2 cos^2 = Q` and the corresponding radial equation. The local proof specializes its parameter `sigma` to `mu^2` and derives the stated `Theta` and `R` from the displayed inverse metric. Source: <https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf>.

2. **`def-gr-fx-kerr-exterior`, Definition.** Reworded the global periodic azimuth description so it no longer calls `(0, pi) x R/(2 pi Z)` an ordinary manifold chart. It now identifies the circle-valued azimuth and specifies that an ordinary chart uses a local real lift to an open interval of length less than `2 pi`. The global tensor definition and coordinate formulas are unchanged. I checked every current direct consumer, including the three consumers in batches 36 and 37; their local coordinate uses remain valid.

3. **`lem-gr-fx-kerr-exterior-properties`, Statement.** Defined the stationary and axial vector fields as product lifts through the explicit tangent map `v -> (dt(v), dr(v), d pi(v))`. This removes the type ambiguity of using the sphere field `xi` as a vector field on the spacetime product. I updated its current proof-contract source excerpt.

4. **`prop-gr-fx-kerr-horizon-generator`, Statement and Proof 2.1/3.1.** Made the same product lifts explicit and defined their ingoing-extension lifts through the product tangent map. The proof now states how the exterior diffeomorphism carries the axial field to the ingoing axial field. The assigned examples, unit remark, and the current-run horizon-mode and modal-flux consumers were checked and remain consistent. I synchronized the current batch's supplier excerpts and derivation claims.

5. **`ex-gr-fx07-2`, Statement.** Removed the undefined term “coercive” and stated the conclusion directly: the exhibited negative value means this multiplier density is not nonnegative on all scalar first-derivative data at the point. The local scalar-field witness and its conditional on-shell conservation claim remain unchanged. I updated its proof-contract derivations.

The Kerr formula and horizon statements were checked against Visser, §5 (Boyer–Lindquist form, PDF pp. 14–16), and Reall, §§7.3–7.4 (Kerr parameters and regular ingoing horizon coordinates, PDF pp. 94–96). The ergoregion calculation agrees with Reall, §7.6, equation (7.37), PDF pp. 102–103, and Visser, §10, PDF pp. 30–31. These sources state the corresponding standard formulas; they do not replace the local proofs in this batch. Visser, §4, PDF p. 12, says the Ricci calculation is a substantial symbolic computation rather than supplying the proof used here.

For `lem-gr-fx-kerr-vacuum-verification`, I inspected and ran the current batch's exact-coordinate worksheet after checking its metric blocks and curvature convention. The command exited successfully and its exact SymPy computation reduced all ten independent Ricci components to zero. This corroborates the explicit local calculation; the worksheet is not treated as a substitute for the written proof.

## Diagram review

`prop-gr-fx-kerr-horizon-generator` contains the only TikZ diagram in the assigned items. Its plotted profile is `r_s/M = 1 + sqrt(1 - 0.64 cos^2(theta))` for `|a|/M = 4/5`, with `r_+/M = 8/5`; the curve meets the horizon at the axis and reaches `2` at the equator. Labels and axes match the claim. The proof is independent of the plot.

## Page verdicts

- **`gr-fx07-kerr-and-hidden-symmetry` (A):** no remaining page defect. Its draft inventory matches the batch manifest: nine assigned items and the six declared page prerequisites. The compact page is frontmatter-only, as expected; its prerequisite pages and their relevant summaries were opened.
- **`gr-fx07-kerr-and-hidden-symmetry-examples` (B):** no remaining page defect. Its two examples match the batch manifest, and its sole page prerequisite is the assigned A page. The compact page is frontmatter-only, as expected.

## Checks and disposition

- Reflow ran on all five changed items. The definition was unchanged by reflow; the other four proof-like items were reflowed.
- Precheck passed for all five changed item paths; the definition had no proof rows to check.
- `node tools/physics-support/proof-layout.mjs items/def-gr-fx-kerr-exterior.md items/lem-gr-fx-kerr-exterior-properties.md items/prop-gr-fx-kerr-horizon-generator.md items/thm-gr-fx-kerr-hamilton-jacobi-separation.md items/ex-gr-fx07-2.md` reported `5 items, 19 steps, 0 defects`.
- No blocker remains. No confirmed defect remains outside the authorized edit scope, so the findings array is empty.

Coverage limit: I read the exact supplier statements and relevant proof sections needed for these claims, not every transitive proof beneath every established supplier. The external source review was limited to the Kerr sections and page locators listed above; I did not read either full source end to end. No empirical observation or statistical inference is used by this batch.
