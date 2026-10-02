# Step 5a reader report — batch 5

Run: `frontier-37-owner-30`  
Role: reader (`reader-5`)

## Opened inventory

Read both current page files:

- `library/scheme-theory/cartier-and-weil-divisors-line-bundles-and-picard-groups.md` (A page)
- `library/scheme-theory/cartier-and-weil-divisors-line-bundles-and-picard-groups-examples.md` (B page)

Opened all 36 A-page items:

`def-sheaf-total-quotient-rings`, `def-cartier-divisor`, `lem-cartier-divisor-local-equation-equivalence`, `def-principal-cartier-divisor`, `def-linear-equivalence-cartier-divisors`, `def-effective-cartier-divisor`, `thm-effective-cartier-divisor-closed-immersion`, `def-picard-group-scheme`, `def-invertible-sheaf-of-cartier-divisor`, `lem-cartier-divisor-sheaf-invertible`, `lem-cartier-divisor-addition-tensor`, `def-rational-section-line-bundle`, `thm-line-bundle-rational-section-cartier-divisor`, `thm-cartier-divisors-mod-principal-to-picard`, `lem-global-section-effective-divisor`, `def-weil-divisor-normal-noetherian-scheme`, `def-order-codimension-one-rational-function`, `lem-principal-weil-divisor-locally-finite`, `def-principal-weil-divisor-and-class-group`, `thm-cartier-to-weil-divisor-normal-scheme`, `lem-cartier-to-weil-respects-principal-and-addition`, `lem-cartier-to-weil-injective-normal`, `def-locally-factorial-scheme`, `thm-cartier-weil-isomorphism-locally-factorial`, `def-pullback-cartier-divisor`, `lem-pullback-cartier-divisor-line-bundle`, `def-degree-divisor-proper-curve`, `lem-proper-normal-curve-rational-function-map`, `lem-finite-flat-curve-fibre-degree`, `thm-principal-divisor-degree-zero-proper-curve`, `cor-degree-descends-picard-curve`, `def-divisor-support-positive-negative-parts`, `lem-effective-cartier-divisor-exact-sequence`, `cor-twist-exact-sequence-effective-divisor`, `rem-weil-pullback-not-automatic`, and `rem-regular-locally-noetherian-locally-factorial`.

Opened all 10 B-page items:

`ex-divisor-rational-function-projective-line`, `ex-picard-projective-line-preview`, `ex-effective-cartier-empty-divisor`, `cex-zero-divisor-equation-not-cartier`, `ex-cartier-divisor-hyperplane-projective-space`, `ex-divisor-cusp-normalization-pullback`, `cex-weil-divisor-not-cartier-singular-cone`, `cex-pullback-weil-divisor-undefined`, `ex-principal-divisor-degree-zero-p1`, and `ex-effective-divisor-thickened-points-curve`.

For the repaired closed-immersion argument, I also opened the current statements of `def-scheme`, `def-affine-scheme`, `def-ideal-sheaf`, `def-invertible-sheaf`, `def-closed-immersion-schemes`, `thm-affine-closed-immersions-quotient-rings`, `lem-closed-immersion-local-on-target`, and `thm-gluing-affine-schemes`. For the divisor and valuation claims, I opened `thm-height-one-localisation-of-normal-noetherian-domain-is-dvr`, `thm-equivalent-characterisations-of-a-dvr`, `def-discrete-valuation-ring`, `def-discrete-valuation`, `lem-normal-domain-implies-s-two`, `lem-r-one-s-two-intersection-of-height-one-localisations`, and `thm-normality-is-local-for-domains`.

## Repairs and evidence

- **A-page summary:** scoped the cycle-map injectivity claim to normal Noetherian integral schemes under AC, stated the DC hypothesis for defining the cycle map, scoped the Cartier–Weil/Picard–class-group isomorphism to locally factorial Noetherian integral schemes under AC, and scoped degree zero and descent to normal proper curves over a field under the stated choice hypotheses.
- **`thm-effective-cartier-divisor-closed-immersion`:** removed the false assertion that intersections of affine opens are affine. Its proof now uses only the Cartier datum’s unit ratios on the open overlaps. For independence of the equation datum, it now invokes the opened `lem-cartier-divisor-local-equation-equivalence` instead of attributing cross-datum equivalence to the effective-divisor definition. The overlap quotient schemes are identified from equality of the restricted ideal sheaves. I updated the item dependencies and the affected proof-contract citations and derivations in `research/frontier-37-owner-30-batch-5.proof-contracts.json`.
- **`cex-pullback-weil-divisor-undefined`:** corrected the statement that zero is not meromorphic. The structure-sheaf map sends `t` to the zero meromorphic function in `K_X`; zero is not a meromorphic unit or a regular section, so the morphism does not induce the required pullback map on meromorphic units. The affected derivation and boundary evidence were updated in the proof contract.
- **`ex-divisor-cusp-normalization-pullback`:** replaced the false claim that nonnormality is a property of the punctured neighbourhood. The revised remark states that it is confined to the vertex, with `V(x)` equal to the vertex and `A_x = k[t,t^{-1}]` normal; this does not obstruct the effective Cartier divisor `V(x)`. The proof-contract boundary note was updated.
- **Scope-clarifying titles:** changed `lem-cartier-to-weil-injective-normal` to name normal Noetherian integral schemes and AC; changed `thm-cartier-divisors-mod-principal-to-picard` to state that the quotient computes Picard for integral schemes; changed `thm-cartier-weil-isomorphism-locally-factorial` to name AC; and changed `ex-effective-divisor-thickened-points-curve` to name AC and normal proper curves.
- **Judge records:** no `verification.judge` record was present in any item changed in this read, so there was no stale judge record to remove.
- **Validation:** ran reflow and precheck for all seven changed items. The first precheck of `thm-effective-cartier-divisor-closed-immersion` requested the missing affine-neighbourhood fact and canonical proof-step ordering; I added the cited scheme fact, moved the datum-independence argument before the closed-immersion conclusion, reran reflow and precheck, and obtained `PASS`. The other six changed items also passed precheck after reflow.

## Source checks

- The Stacks Project, [Lemma 31.14.2, tag 01WQ](https://stacks.math.columbia.edu/tag/01WQ), states that an effective Cartier divisor is locally cut out by a nonzerodivisor (and proves the converse local criterion); this supports the effective-divisor conventions used here.
- The Stacks Project, [Lemma 31.26.3, tag 01X5](https://stacks.math.columbia.edu/tag/01X5), parts 1–2, states that on an integral scheme the meromorphic-function sheaf is constant with value the function field and that the meromorphic sections of a quasi-coherent sheaf are constant with value its generic stalk.
- The Stacks Project, [Lemma 31.28.2, tag 02SG](https://stacks.math.columbia.edu/tag/02SG), calls a meromorphic section “regular (i.e. nonzero)”; this confirms the terminology used by the assigned rational-section definition.
- The Stacks Project, [Lemma 15.123.2, tag 0AG0](https://stacks.math.columbia.edu/tag/0AG0), states and proves that every regular local ring is a UFD; this supports the assigned external remark about regular locally Noetherian schemes.

## Uneditable finding

The B-page prose at paragraph 3 says “the effective divisor of thickened points on a curve” without the normal proper integral curve and AC hypotheses of `ex-effective-divisor-thickened-points-curve`. B-page prose is outside this reader’s edit authority, so the scope defect is retained for the 5b lead. It is nonfatal because the assigned item itself states its hypotheses.

## Page verdicts and blocker

- **A page:** pass after correcting the summary’s missing hypotheses.
- **B page:** one nonfatal overstrong-summary finding remains as recorded above.
- **Blocker:** none.

## Coverage note

All 46 assigned items and both pages were opened. A combined item read was truncated, so I used targeted continuation reads to finish several files; this was not a strict single physical read per file. I found no reader-specific rendered evidence bundle in `.autopilot/frontier-37-owner-30` and therefore checked the current files directly. I opened the direct dependencies needed for the repairs and reviewed the cited foundational valuation and normality results listed above, but did not exhaust every transitive dependency in the full manifest closure.
