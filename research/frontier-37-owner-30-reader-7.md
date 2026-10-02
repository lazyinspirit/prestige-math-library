# Step 5a reader report — batch 7

Run: `frontier-37-owner-30`  
Role: reader  
Scope: batch `7`

## Opened inventory

Opened both assigned pages:

- `library/scheme-theory/riemann-roch-for-curves-via-euler-characteristics.md` (A)
- `library/scheme-theory/riemann-roch-for-curves-via-euler-characteristics-examples.md` (B)

Opened every item in the manifest.

**A-page items (34):** `def-little-l-divisor`, `lem-riemann-roch-space-finite-dimensional`, `lem-divisor-order-monotonicity-sections`, `lem-add-one-point-exact-sequence-line-bundle`, `lem-add-one-point-euler-characteristic`, `lem-divisor-decomposition-positive-negative-points`, `thm-euler-characteristic-degree-shift-curve`, `def-genus-euler-characteristic-curve`, `thm-riemann-roch-euler-characteristic-curve`, `cor-riemann-inequality-divisor-sections`, `cor-negative-degree-no-sections-rr`, `lem-h1-stabilizes-downward-point-removal`, `cor-existence-rational-function-bounded-pole`, `cor-smooth-proper-curve-finite-map-projective-line`, `thm-h1-line-bundle-vanishes-sufficiently-high-degree`, `cor-riemann-theorem-large-degree`, `thm-genus-zero-point-implies-projective-line`, `lem-projective-line-divisors-classified-by-degree`, `cor-picard-projective-line-integers`, `lem-smooth-curve-coherent-torsion-free-locally-free`, `lem-nonzero-map-invertible-to-locally-free-injective`, `lem-vector-bundle-p1-has-maximal-degree-line-subbundle`, `lem-vector-bundle-p1-maximal-line-quotient-locally-free`, `lem-vector-bundle-p1-extension-splits`, `thm-birkhoff-grothendieck-vector-bundles-p1`, `lem-degree-zero-effective-divisor-empty`, `cor-degree-zero-line-bundle-section-trivial`, `cor-nontrivial-degree-zero-line-bundle-no-sections`, `def-index-speciality-divisor`, `thm-riemann-roch-as-l-minus-index`, `def-nonspecial-divisor`, `lem-large-positive-divisors-nonspecial`, `cor-dimension-complete-linear-system`, `rem-sharp-degree-thresholds-wait-for-duality`.

**B-page items (10):** `ex-riemann-roch-projective-line-divisor`, `ex-genus-zero-conic-with-rational-point`, `cex-genus-zero-without-rational-point-not-p1`, `ex-adding-point-section-dimension-jump`, `cex-riemann-inequality-not-equality-special-divisor`, `ex-degree-zero-principal-divisor`, `ex-linear-system-poles-at-one-point`, `ex-nonspecial-large-divisor`, `cex-negative-degree-rr-right-side-negative`, `ex-empty-divisor-euler-characteristic`.

Opened the dependency items needed for the audited arguments, including the current curve/divisor/degree/order and Riemann–Roch-space definitions; the Cartier–Weil, rational-section, line-bundle, and principal-divisor interfaces; proper cohomology finiteness and Noetherian-dimension vanishing; projective-line cohomology; the local DVR, proper-curve rational-map and finite-fibre-degree results; base-point-free linear systems; plane-curve arithmetic genus and weighted Bézout; birationality of smooth proper curves; curve closed-subset finiteness; Serre vanishing; ample powers; and finite pullback of ampleness. This included `def-algebraic-curve-over-field`, `def-divisor-smooth-proper-curve`, `def-degree-divisor-proper-curve`, `def-order-codimension-one-rational-function`, `def-divisor-support-positive-negative-parts`, `def-riemann-roch-space-of-divisor`, `def-invertible-sheaf-of-cartier-divisor`, `thm-line-bundle-rational-section-cartier-divisor`, `thm-cartier-weil-divisors-curves-agree`, `lem-cartier-divisor-addition-tensor`, `thm-cartier-divisors-mod-principal-to-picard`, `cor-degree-descends-picard-curve`, `lem-degree-effective-divisor-nonnegative`, `lem-effective-divisors-sections-mod-scalars`, `thm-principal-divisor-degree-zero-proper-curve`, `thm-local-ring-smooth-curve-dvr`, `cor-projective-cohomology-finite-dimensional-field`, `thm-noetherian-topological-space-dimension-vanishing`, `thm-h0-structure-sheaf-proper-curve`, `cor-h0-projective-space-o-d-homogeneous-polynomials`, `cor-top-cohomology-projective-space-o-d`, `lem-curve-closed-subsets-finite`, `lem-proper-normal-curve-rational-function-map`, `lem-finite-flat-curve-fibre-degree`, `lem-function-with-poles-defines-map-p1`, `def-base-point-linear-system`, `thm-base-point-free-linear-system-morphism`, `thm-plane-curve-arithmetic-genus`, `cor-projective-plane-bezout-length-form`, `cor-birational-smooth-proper-curves-isomorphic`, `thm-serre-vanishing`, `thm-ample-powers-very-ample-proper-base`, `lem-ample-pullback-finite-morphism`, `def-pullback-cartier-divisor`, and `lem-pullback-cartier-divisor-line-bundle`.

## Audit and edit

The current item proofs for the Euler-characteristic shift, Riemann–Roch in `l-i` form, the inequality, negative-degree vanishing, point addition, fixed-direction vanishing, the genus-zero criterion, projective-line divisor/Picard classification, the vector-bundle splitting chain, degree-zero line bundles, and the complete-linear-system dimension calculation are mathematically sound under their stated hypotheses. The companion examples' computations and caveats are also sound, except for the B-page summary defect recorded below.

Edited the assigned A-page prose at `library/scheme-theory/riemann-roch-for-curves-via-euler-characteristics.md:122`: changed the complete-linear-system dimension sentence to say **when `|D|` is nonempty** before giving `dim_k|D|=l(D)-1=deg_k(D)-g+i(D)`. Evidence: `cor-dimension-complete-linear-system` states the formula only when `|D|` is nonempty and separately says `|D|` is empty exactly when `l(D)=0`; for example, the projective-line divisor `- [∞]` has no sections. No item file changed, so no proof contract or item `verification.judge` record required updating, and no item reflow/precheck was required or run.

## Uneditable defect

The B-page summary at `library/scheme-theory/riemann-roch-for-curves-via-euler-characteristics-examples.md:52` says that `l(D+p)-l(D)` is “either zero or the residue degree of `p`.” This is false: the current assigned item `ex-adding-point-section-dimension-jump`, case (iv), takes `k=R`, `D=-2[∞]`, and `p=V(t²+1)` and computes `l(D)=0`, `l(D+p)=1`, while `[κ(p):k]=2`. Thus the jump is `1`, strictly between the two claimed values. The companion B-page prose is outside this reader's edit authority; it is reported as an uneditable page finding.

## Page verdicts and blocker

- `riemann-roch-for-curves-via-euler-characteristics` (A): **passes after the prose repair** above. The current item `cor-dimension-complete-linear-system` already has the correct nonempty qualification.
- `riemann-roch-for-curves-via-euler-characteristics-examples` (B): **does not pass** because its point-addition summary makes the false claim above. The underlying assigned point-addition example is correct.
- Blocker: none for the assigned audit. I did not edit the B page.

## Coverage limitation

All 44 assigned items and both assigned pages were opened and audited. I inadvertently opened `lem-h1-stabilizes-downward-point-removal` a second time in a later dependency batch. I opened the direct dependency statements and proof sections needed for the checks listed above, but did not recursively audit every transitive dependency in every contract. I found no unresolved mathematical uncertainty requiring an external-source search.
