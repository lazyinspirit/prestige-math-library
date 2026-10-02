# Linear-system map repair route

Audit date: 2026-10-01 UTC. Scope: `def-base-point-linear-system` and
`thm-base-point-free-linear-system-morphism`, with their current direct
supplier bodies. This records proof repairs and dependency mapping only; it is
not an item certification, receipt, or batch-wide audit.

## Findings and repairs

### Base points and evaluation

The vanishing condition on the section corresponding to a nonzero
`f ∈ L(D)` is exactly `ord_x(f) + n_x ≥ 1`. The old sentence said its test
differed from `ord_x(f) ≥ 1` only when `n_x > 0`; negative coefficients also
change the threshold. The definition now records the threshold `1 − n_x` and
explains both signs: positive `n_x` permits the section to vanish even when
`f` is regular and nonzero at `x`, while negative `n_x` requires a higher-order
zero.

The finite-basis formulation now names its actual route. Under AC,
`lem-riemann-roch-space-finite-dimensional` makes `L(D)` finite-dimensional,
so each `V ⊆ L(D)` has a finite basis. For `m = dim V`, the evaluation map is
`O_C^m → O_C(D)`, with the empty basis and zero source when `m = 0`. That map
is not surjective because the target has rank one on the nonempty curve.
Thus the zero space remains non-base-point-free and every closed point is
vacuously a base point.

At a closed point, the evaluation map is surjective exactly when some basis
section has nonzero residue in the one-dimensional fibre: in a local frame,
the coefficients generate the local ring exactly when one is a unit. To
justify sheaf-surjectivity from the closed-point test, the current
`lem-curve-closed-subsets-finite` interface says every point of this integral
one-dimensional curve is closed or generic. If `m > 0`, a basis element is a
nonzero element of `L(D) ⊂ k(C)`, so its section has nonzero generic value.
The evaluation map is therefore surjective at the generic point as well.
This establishes the stated equivalence at every stalk. The complete-system
clause uses `m = dim L(D)` and keeps the zero-space case explicit.

The old “not yet authored” supplier note is stale. The current body of
`thm-cartier-weil-divisors-curves-agree` identifies the curve divisor as
Cartier; `def-invertible-sheaf-of-cartier-divisor` constructs `O_C(D)`;
`def-riemann-roch-space-of-divisor` identifies `L(D)` with
`H^0(C,O_C(D))` inside `k(C)`; and `thm-line-bundle-rational-section-cartier-divisor`
identifies the divisor of the corresponding section. The definition’s direct
dependencies now name these uses, the finite-dimensionality lemma, AC, and
AC⇒DC. The pointwise inequalities are unchanged as claims.

### Morphism and hyperplane divisors

The theorem already assumed AC for its projective-space route. Its current
proof also uses the AC-qualified finite-dimensionality and curve
closed-point suppliers, and the Cartier/Weil route’s DC premise. The statement
and direct dependencies now make that route explicit. Step 1.1 chooses the
basis only after citing the current `L(D)` finite-dimensionality supplier.

The converse claims that `V_φ` is the image of the pullback on all global
sections of `O(1)`, not merely the span of selected coordinates. The current
`cor-h0-projective-space-o-d-homogeneous-polynomials` proves that
`H^0(P^r_k,O(1))` is spanned by `x_0,…,x_r`; its separate `r = 0` clause and
the chart frame show that `x_0` is the basis in that case. This supplier is
now named in [F9] and in the theorem’s direct dependencies.

The previous chart claim was false when the only nonzero coefficient of a
linear form was `λ_j`: on `U_j` its equation is the unit `λ_j`, so the
intersection is empty. [F5] now gives the equation
`λ_j + Σ_{i ≠ j} λ_i x_i^(j)` and identifies its scheme-theoretic zero
subscheme; it may be empty on a chart. Each chart equation is a unit or a
nonzero element of the polynomial domain, so the hyperplane is an effective
Cartier divisor. For `r = 0`, the sole equation is a unit, and the hyperplane
is the empty effective Cartier divisor.

For a nonzero tuple `λ`, linear independence of the chosen basis gives
`f_λ = Σ λ_i f_i ≠ 0`. The section dictionary gives a nonzero section with
nonzero generic value. Since `C` is integral, every local coefficient is a
nonzerodivisor. Therefore the scheme-theoretic pullback of the hyperplane is
itself an effective Cartier divisor, cut out by the pulled-back section. Its
associated Weil divisor is `div(f_λ) + D` by the rational-section dictionary
and Cartier/Weil compatibility. This proves the claim with vanishing
multiplicities, not only with underlying sets. When `r = 0`, base-point
freeness makes the single section nowhere vanishing; the empty hyperplane
pulls back to the zero divisor, the sole member of `P(V)`.

## Supplier bodies read

I read the current item bodies of `def-base-point-linear-system`,
`thm-base-point-free-linear-system-morphism`,
`def-riemann-roch-space-of-divisor`,
`lem-riemann-roch-space-finite-dimensional`,
`cor-projective-cohomology-finite-dimensional-field`,
`thm-choice-implies-dependent-implies-countable-choice`,
`thm-cartier-weil-divisors-curves-agree`,
`thm-cartier-to-weil-divisor-normal-scheme`,
`thm-cartier-weil-isomorphism-locally-factorial`,
`thm-cartier-divisors-mod-principal-to-picard`,
`def-invertible-sheaf-of-cartier-divisor`,
`thm-line-bundle-rational-section-cartier-divisor`,
`lem-curve-closed-subsets-finite`, `def-algebraic-curve-over-field`,
`def-globally-generated-sheaf`, `thm-line-bundle-sections-define-projective-map`,
`thm-projective-map-line-bundle-data-equivalence`,
`def-relative-projective-space-standard-charts`,
`def-very-ample-invertible-sheaf-relative`,
`cor-h0-projective-space-o-d-homogeneous-polynomials`, and
`thm-h0-structure-sheaf-proper-curve`. The proper-cohomology supplier gives
finite-dimensional `H^0`; the current `L(D)` lemma connects it to the section
space. AC supplies DC through the cited implication result for the current
Cartier/Weil and topological routes. The rational-section theorem itself is
choice-free. I did not independently retrieve the external Stacks, Vakil, or
Fulton texts cited in item frontmatter during this focused repair; no external
source claim is being reported as newly checked.

At supplier level, `thm-cartier-weil-divisors-curves-agree` itself still has a
“not yet authored” obligations paragraph for Cartier dictionary and cycle
inputs, despite the corresponding item files now being present. Its current
proof route for `D` being Cartier is local DVR → PID → UFD → locally factorial
→ `thm-cartier-weil-isomorphism-locally-factorial`; principal compatibility
uses `thm-cartier-to-weil-divisor-normal-scheme`, with AC supplying DC through
the cited implication result. I read these subroute bodies, and the dictionary,
cycle, and Picard supplier items remain draft. The stale paragraph is a
supplier-status/evidence issue outside this exact edit release; this report
does not certify those item contracts. The Cartier, divisor, and
finite-dimensionality items remain current in-run drafts and may still change.
If any supplier body changes, the affected dictionary and basis uses need a
focused reread. No supplier acceptance, contract, manifest, receipt, scope
record, or gate was edited here.

## Local checks

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-base-point-free-linear-system-morphism.md` — passed (1 checked).
- `node tools/rendercheck.mjs items/def-base-point-linear-system.md items/thm-base-point-free-linear-system-morphism.md` — passed YAML, wikilink-in-math, delimiter, and real KaTeX checks (2 files).
- A focused resolver over the two edited items found all direct dependency IDs and wikilinks present (33 direct dependencies and 54 links total).

Item SHA-256 at this handoff:

- `def-base-point-linear-system.md`: `2e168ebd37ea643e07cb8466ecb2a68e6f04c9d2eaac0df2442ef7211aaf1e2d`
- `thm-base-point-free-linear-system-morphism.md`: `187839077111fe7208ac21ed08c507dd2f65fd802d5b020152dc84cccaf029bd`
