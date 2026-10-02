# B6 linear and canonical core: current audit

Audit date: 2026-09-30 UTC; follow-up edits: 2026-10-01. Scope: the seven requested B6 targets and the current library bodies of their load-bearing suppliers. This is a mathematical/interface audit, not a gate or receipt. Root released narrow repairs first to `def-complete-linear-system` and `thm-degree-positive-line-bundle-sections-zero-bound`, then a three-item AC/current-dictionary follow-up documented below. The other five targets and all carriers remain untouched by this repair lane.

The Cartier dictionary suppliers are present in the repository and their current group closure is reported as 46/46. The prose in several B6 targets that says those suppliers are “not yet authored” is therefore stale. `def-divisor-smooth-proper-curve` and `def-riemann-roch-space-of-divisor` are still being repaired; I read their current interfaces but make no claim about their final text.

## Findings

| Target | Current mathematical reading | Remaining issue |
| --- | --- | --- |
| `def-complete-linear-system` | The orbit-to-effective-divisor correspondence is supported by the current `lem-effective-divisors-sections-mod-scalars` body; the current `lem-riemann-roch-space-finite-dimensional` supplies coherence and finite-dimensionality. | The initial audit’s false “iff” and missing AC premise were corrected; its direct supplier route now cites the finite-dimensionality lemma and the explicit AC-to-DC bridge. |
| `def-base-point-linear-system` | The vanishing condition `ord_x(f)+n_x >= 1`, its divisor interpretation, and the stalk-evaluation criterion are correct. In particular the zero subspace has every closed point as a base point, so it is not base-point-free. | The text silently takes a finite basis of every `V ⊆ L(D)` and uses the current `L(D)=H^0(C,O_C(D))` dictionary. Those routes have AC in their current supplier interfaces; the definition has no such premise. Its supplier-obligation paragraph is stale. |
| `thm-base-point-free-linear-system-morphism` | The generating-sections construction and converse are supported by the published projective-map/data-equivalence suppliers. The PGL basis-change convention is consistent. | The chart fact [F5] overstates the chart intersection of a hyperplane, and Step 3.1 moves from chart zero loci to equality of divisors without stating the scheme-theoretic Cartier pullback argument. The theorem already states AC. Its supplier-obligation paragraph is stale. |
| `def-canonical-line-bundle-curve` | The arbitrary-field local-frame definition of order is correct, including at inseparable residue points. | The definition asserts finite support and the canonical class/sheaf identifications without the needed explicit Cartier-to-Weil/finite-support route or dependencies. It also omits AC used by the current differential and DVR suppliers. Its “not yet authored” note is stale. |
| `lem-rational-differential-divisor-well-defined-class` | The unique ratio and pointwise order identity are correct; the proof properly uses an arbitrary local frame. | The class/sheaf conclusion depends on the missing canonical-divisor interface above; the direct Cartier-to-Weil/principal-divisor bridge is not listed. Its statement omits AC used by the current differential and DVR suppliers. Its supplier note is stale. |
| `thm-degree-positive-line-bundle-sections-zero-bound` | The effective-divisor degree argument is correct under the stated degree convention and AC. | The initial audit’s malformed [F5] was corrected using distinct representing and section divisors; stale supplier-obligation prose was replaced. |
| `def-gonality-curve` | Under AC the degree set is nonempty, has a positive minimum, and gonality one is equivalent to `C ≅ P^1_k`, using the current function-to-P1 and birational-curve suppliers. | The definition omits AC even though both the construction of the comparison morphism and the degree-one isomorphism route require it in the current suppliers. The prose acknowledges the helper’s choice premise but does not propagate it to the statement. |

## Exact proof repairs

### Complete linear system

For `D' = D + div(h)`, multiplication by `h` does give an isomorphism `L(D') -> L(D)`, but the current explanation ends with a false condition: it says `div(fh)+D = div(f)+D'` is effective exactly when `div(f)+D` is effective. The correct statement is

```text
f ∈ L(D') iff div(f)+D' ≥ 0, and div(hf)+D = div(f)+D'.
```

Conversely, for `g ∈ L(D)`, `g/h ∈ L(D')`. The projective-line map `[f] -> [hf]` therefore identifies the two section spaces, and the associated effective divisor is literally unchanged. This preserves the intended claim that `|D|=|D'|` as sets of effective divisors.

The current `lem-effective-divisors-sections-mod-scalars` proof has the same premise issue at its own interface: its Statement has no AC premise, while its Facts & Assumptions and injectivity proof use `thm-h0-structure-sheaf-proper-curve`, whose Statement assumes AC. The complete-system target should not present that route as unconditional.

### Morphism from a base-point-free system

In [F5], a nonzero linear form does not necessarily cut out an affine hyperplane on every chart: for example, `x_j=0` has empty intersection with `U_j`, where its chart equation is the unit `1`. Say instead that on each `U_j` the equation is `lambda_j + sum_{i != j} lambda_i x_i^(j)`; its vanishing subscheme is the hyperplane intersection, which is empty when that equation is a unit.

For Step 3.1, treat the hyperplane as the effective Cartier divisor cut out by its local equations. Its pullback under `phi_V` is cut out by the pulled-back local equations, equivalently by the pulled-back section `sum lambda_i s_i`. Since the `f_i` form a basis, this section is nonzero; its section divisor is `div(f_lambda)+D` under the current section/divisor dictionary. This proves the divisor identity with multiplicities, not just equality of underlying zero sets.

### Canonical divisors and differential orders

Keep the current frame-based definition verbatim in substance: choose any local frame `eta_x` of `Omega^1_{C/k}` and set `ord_x(omega)=ord_x(g_x)` from `omega=g_x eta_x`. Replacing `eta_x` by a unit multiple leaves the order unchanged. Do **not** replace this by `d t_x` for a uniformizer: at a closed point with inseparable residue extension, `d t_x` need not be a frame. No field-characteristic restriction is needed.

The finite-sum assertion can be supported by the existing route: `thm-line-bundle-rational-section-cartier-divisor` makes the rational differential a Cartier divisor; `thm-cartier-weil-divisors-curves-agree` maps it to a Weil cycle on this Noetherian curve; quasi-compactness makes the locally finite support finite. This also supplies the principal-divisor compatibility needed to call `div(omega')-div(omega)` linearly equivalent to zero. The current canonical item does not list `def-divisor-smooth-proper-curve`, `def-linear-equivalence-cartier-divisors`, or `thm-cartier-weil-divisors-curves-agree` among its direct dependencies, although its prose uses all three interfaces. The differential lemma likewise needs the explicit Cartier/Weil bridge for the class conclusion.

### Negative degree

In [F5], distinguish a chosen divisor `E` with `L ≅ O_C(E)` from the effective zero divisor of a section. A precise replacement is: under such an isomorphism, a nonzero section corresponds to `f ∈ L(E)`, and its zero divisor is `D_s = div_C(s) = div(f)+E ≥ 0`; independently, the rational-section theorem gives `O_C(D_s) ≅ L`. Then apply the degree convention to `D_s`. The current proof’s Steps 1.1–2.1 already use this latter route, so [F5] can be corrected or removed rather than used to prove the theorem.

## Assumptions and source interfaces

The following current suppliers explicitly assume AC: `cor-projective-cohomology-finite-dimensional-field`; `lem-effective-divisors-sections-mod-scalars` in its facts/proof; `def-riemann-roch-space-of-divisor`; `thm-cartier-weil-divisors-curves-agree` (with DC, supplied from AC); `thm-differentials-smooth-locally-free`; `thm-local-ring-smooth-curve-dvr`; `lem-function-with-poles-defines-map-p1`; and `cor-birational-smooth-proper-curves-isomorphic`. Therefore the current proof routes require AC for the complete-system finite-dimensionality/correspondence, base-point section dictionary and finite-basis evaluation, canonical differential orders, differential divisor class, and gonality nonemptiness/degree-one characterization. `thm-base-point-free-linear-system-morphism` and the negative-degree theorem already state AC; the other listed targets do not. These are formal premise/interface mismatches in the current library route, not claims that the usual theorems fail over arbitrary fields in ordinary set theory.

Suppliers checked against the seven targets:

- The current divisor dictionary definitions `def-effective-cartier-divisor`, `def-linear-equivalence-cartier-divisors`, and `def-invertible-sheaf-of-cartier-divisor` are present. The local convention is `O_C(D)|_{U_i}=f_i^{-1}O_{U_i}`. `thm-line-bundle-rational-section-cartier-divisor` sends the canonical section of `O_C(div(s))` to `s` and supplies the section-divisor identification.
- The current evolving `def-riemann-roch-space-of-divisor` body explicitly promises that `H^0(C,O_C(D))` embeds into `k(C)` with image exactly `L(D)`. The evolving divisor definition uses finite sums on closed points and the residue-degree degree convention. Final wording should be reconciled only after their writer stabilizes.
- `lem-effective-divisors-sections-mod-scalars` proves scalar invariance, injectivity from `H^0(C,O_C)=k`, and surjectivity from linear equivalence; its mathematical bijection is sound under AC, now stated explicitly in the Statement.
- `thm-line-bundle-sections-define-projective-map` and `thm-projective-map-line-bundle-data-equivalence` support the morphism construction and converse. The former does not assert immersion, matching the use here.
- `cor-degree-descends-picard-curve` identifies degree on the Picard class under AC; `lem-degree-effective-divisor-nonnegative` proves nonnegative degree with equality only for the zero effective divisor. Together with the rational-section divisor supplier they support the negative-degree proof.
- `lem-function-with-poles-defines-map-p1` supplies a finite map of degree `[k(C):k(f)]` for a nonconstant `f` under AC; `def-nonconstant-morphism-curves-degree` makes that degree a positive integer; `cor-birational-smooth-proper-curves-isomorphic` supplies the degree-one characterization under AC.

## Closure assessment

The central arguments of the seven targets are sound once the exact corrections and formal premises above are addressed. The verified canonical-frame route is sound over an arbitrary field, including inseparable residue extensions. The complete-system effectivity transport and negative-degree [F5] have now been corrected. Remaining report-only concerns among the other five targets are the chart-by-chart hyperplane wording/underspecified divisor pullback, canonical finite-support/dependency premises, and missing formal assumption declarations. No manifest, contract, receipt, scope record, or gate was changed by this audit.

## Released repairs

Root released only `def-complete-linear-system` and
`thm-degree-positive-line-bundle-sections-zero-bound` for item edits.

- In the complete-system definition, the correspondence is now oriented from
  the nonzero scalar-orbits in `L(D)` to `|D|`, with inverse sending `D'` to
  its function orbit. For `D'=D+div(h)`, the section-space isomorphism is
  `[f]↦[hf]`, with inverse `[g]↦[g/h]`; `div(hf)+D=div(f)+D'`, so the
  associated effective divisor is preserved. The bijection’s displayed
  direction was corrected along with the false same-`f` effectivity test.
- The set definition remains separate from the projective-structure claims.
  AC is now explicit for the correspondence and finite-dimensionality route,
  and the current direct dependencies route finite-dimensionality through the
  Riemann-Roch-space finiteness lemma. The AC-to-DC bridge is linked
  explicitly. Stale “not yet authored” supplier text was replaced with
  current interfaces.
- In the negative-degree theorem, [F5] now distinguishes a chosen divisor
  `E` with `L ≅ O_C(E)` from the section zero divisor `D_s=div_C(s)=div(f)+E`.
  Its current supplier notes identify the Picard degree, rational-section,
  effectivity, invertible-sheaf, and Cartier-to-Weil interfaces; AC supplies
  the dependent-choice premise of the last. The proof keeps its direct
  `D_s` route and no longer claims the suppliers are unauthored.

The two initial repairs did not change a theorem Statement.

Focused final checks: `precheck.mts` passed the negative-degree theorem (the
definition has no proof-format body); `rendercheck.mjs` passed both changed
items, including YAML and KaTeX parsing. The first rendercheck run found a
multiline display in the newly edited definition; it was fixed before the
passing rendercheck run. No broad gate or receipt was run.

## AC and current-dictionary follow-up

Root released three narrowly scoped item edits: `def-complete-linear-system`,
`thm-degree-positive-line-bundle-sections-zero-bound`, and
`lem-effective-divisors-sections-mod-scalars`.

- The complete-system definition now cites
  `lem-riemann-roch-space-finite-dimensional` for coherence and
  finite-dimensionality, replacing its unsupported direct chain through the
  coherence definition and generic proper-cohomology finiteness. It directly
  links `thm-choice-implies-dependent-implies-countable-choice` wherever its
  AC premise supplies DC for the Cartier-to-Weil interface.
- The negative-degree theorem now links the same AC-to-DC theorem in its
  Statement and [F4], and lists it as a direct dependency. The existing
  proof and distinct divisors `E` and `D_s` are unchanged.
- The section-orbit lemma now states AC in its Statement, adds the direct
  AC-to-DC supplier, and replaces the obsolete “not yet authored” warning in
  the Statement and [F3] with the current Cartier, Cartier-to-Weil,
  Riemann-Roch-space, rational-section, and regular-section interfaces. Its
  proof and the complete orbit-to-divisor bijection, including
  `L(D)=0` iff no effective divisor is linearly equivalent to `D`, are
  retained.
- The other direct item consumers of the section-orbit lemma are
  `cor-negative-degree-no-sections-rr`,
  `thm-genus-zero-point-implies-projective-line`,
  `cex-degree-zero-line-bundle-no-section`, and
  `cor-dimension-complete-linear-system`. Each already states AC, so this
  premise update leaves no direct consumer with an unstated assumption; none
  was edited.

Targeted validation: `precheck.mts` passed the two proof-bearing changed
items (`thm-degree-positive-line-bundle-sections-zero-bound` and
`lem-effective-divisors-sections-mod-scalars`); the definition has no
proof-format body. `rendercheck.mjs` passed all three changed items, including
frontmatter YAML and KaTeX. No broader check or receipt was run.

SHA-256 of the three item files after these edits:

- `def-complete-linear-system.md`: `bd038bb6f6d11cc26260784bd50db8cb3114d37613c3741d1ac3fb1ce72fe462`.
- `thm-degree-positive-line-bundle-sections-zero-bound.md`: `b6706cfa93bd98bb5af1bbba4073a39521478899e598b72571e5d085e6b348ec`.
- `lem-effective-divisors-sections-mod-scalars.md`: `aa6f9ef1cb73bca40e07b4f910e51de2f7de672221502a5a1916e3fc1e19c11b`.
