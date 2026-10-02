# Step 5a reader report — Batch 27

Run: `frontier-37-owner-30`  
Role: reader  
Scope: batch `27`

## Opened inventory

Pages:

- `library/complex-analysis/elliptic-functions-and-complex-tori.md` (A)
- `library/complex-analysis/elliptic-functions-and-complex-tori-examples.md` (B)

All 25 manifest items were opened:

- A: `def-complex-lattice-and-complex-torus`, `thm-complex-torus-quotient-is-well-defined`, `def-weierstrass-elliptic-p-function`, `def-elliptic-function-for-a-lattice`, `def-weierstrass-zeta-and-sigma-functions`, `thm-weierstrass-p-normal-convergence-and-periodicity`, `thm-elliptic-function-divisor-laws`, `thm-weierstrass-zeta-sigma-quasi-periodicity`, `thm-weierstrass-p-differential-equation`, `lem-weierstrass-p-degree-two-and-half-periods`, `thm-weierstrass-p-addition-formula`, `thm-field-of-elliptic-functions-is-generated-by-p-and-p-prime`, `thm-weierstrass-lattice-discriminant-is-nonzero`, `thm-complex-torus-weierstrass-cubic-isomorphism`, `thm-elliptic-cubic-chord-tangent-group-law`.
- B: `ex-oriented-lattice-bases-and-sl2z`, `ex-boundary-free-fundamental-parallelogram`, `ex-square-and-hexagonal-lattice-invariants`, `ex-half-period-values-and-branching`, `ex-weierstrass-addition-and-duplication`, `ex-sigma-simple-lattice-zero`, `ex-singular-cubic-degeneration`, `ex-rectangular-weierstrass-function-and-elliptic-integral`, `ex-rank-one-cotangent-uniformization`, `ex-canonical-basis-of-complex-lattice`.

I also opened the external dependency statements needed for the degree, divisor/residue, rationality, and product-convergence checks: `thm-proper-holomorphic-map-riemann-surfaces-has-degree`, `thm-argument-principle-null-homologous-cycle`, `thm-residue-theorem-null-homologous-cycle`, `lem-index-of-graph-bounded-region-boundary`, `thm-meromorphic-functions-riemann-sphere-are-rational`, and `lem-unit-disc-estimate-for-weierstrass-elementary-factors`. The core Weierstrass dependencies are themselves assigned items listed above.

## Edits

1. In `thm-elliptic-function-divisor-laws`, proof steps 1.5 and 2.4 had the left vertical edge translated in the wrong direction. I changed `delta_2` to `gamma_2 - omega_1`, so it is the path `a + t omega_2` and its reversal is `gamma_4`. Step 2.4 now writes the corresponding integral and uses periodicity to identify it with the integral along `gamma_2`.
2. In `lem-weierstrass-p-degree-two-and-half-periods`, proof step 1.5 called the identity coordinate at the target value `wp(z)` a centered chart, while subtracting `wp(z)` in its chart expression. I replaced it with the actual centered target coordinate `xi -> xi - wp(z)`.

I updated the affected derivations in both `research/frontier-37-owner-30-batch-27.proof-contracts.json` and `research/frontier-37-owner-30-proof-contracts.json`. Neither edited item contained a `verification.judge` record. Reflow and precheck passed for both items:

- `thm-elliptic-function-divisor-laws`: reflowed; precheck PASS (1 checked, 0 failing).
- `lem-weierstrass-p-degree-two-and-half-periods`: reflowed; precheck PASS (1 checked, 0 failing).

No page prose was edited.

## Uneditable findings

1. `ex-weierstrass-addition-and-duplication`, Example paragraph, sentence beginning “Both identities extend beyond their apparent exceptional points”: the displayed rational duplication expression has denominator `wp'(z)^2`. At a nonzero half-period, `wp'` has a simple zero and `wp''` is nonzero (the half-period lemma gives a simple zero, and `wp'' = (12 e_j^2-g_2)/2` is nonzero because the cubic roots are distinct). Thus the rational expression has a double pole there; it does not extend holomorphically. `wp(2z)` has the same genuine pole because `2z` is a lattice point. Fatal; left for the 5b lead because this is a B item.
2. `ex-singular-cubic-degeneration`, Verification step 2.1: it asserts `phi(-s) = -phi(s)` for `phi(s)=s u(s)` and `u(s)^2=4s-6`. If that oddness held, then for nonzero small `s`, squaring `u(-s)=u(s)` would give `-4s-6=4s-6`, impossible. The two branches are nevertheless correctly given by `y=±phi(s)` and the later inverse-branch argument does not need this assertion. Nonfatal; B item.
3. `ex-rank-one-cotangent-uniformization`, final Remarks paragraph: it says the omitted values `±i pi` are limits of `P` at the real half-periods `±1/2`. In fact `q=e^(2 pi i z)=-1` at either half-period and `P(±1/2)=0`; the omitted Möbius values come from `q=0` and `q=infinity`, approached as the imaginary part tends to the two ends of the cylinder. Nonfatal; B item.
4. `ex-canonical-basis-of-complex-lattice`, Verification step 3.1: it claims only finitely many matrices satisfy the stated imaginary-part bound and, for a fixed `(a,b)`, only finitely many determinant solutions `(c,d)`. This is false: `A_n=[[1,0],[n,1]]` has determinant one and gives `tau_A=tau+n`, so infinitely many such matrices have the same imaginary part. The existence conclusion can be proved by observing that the imaginary part depends only on the finitely many bounded pairs `(a,b)`, but that is not the claim made. Fatal proof defect; B item.
5. `ex-rectangular-weierstrass-function-and-elliptic-integral`, Verification step 3.3: for finite `R`, the image of the real segment `[-R,R]` under `I_k` is not closed: its endpoints approach `iK'` from opposite sides and are distinct. The closed contour for the argument principle is the image of the entire boundary `partial D_R`, including the upper semicircle. The winding calculation as written treats the two nonclosed path pieces as if each had a winding number; it needs a corrected homotopy/count for the full boundary contour. The claimed map and period statements are consistent with the consulted references, but this proof step is false as written. Nonfatal proof defect; B item.

## Source checks

- C. T. McMullen, *Advanced Complex Analysis*, §5.3, Theorems 5.11–5.13 and the period-integral display, printed pp. 115–118: the rectangular-lattice real locus, the conformal map of the half-period rectangle, inverse derivative, root order, and positive-root period integrals.
  URL: `https://quals.dzackgarza.com/attachments/McMullen_-_Advanced_Complex_Analysis.pdf`
- E. M. Stein and R. Shakarchi, *Complex Analysis*, Ch. 8 §4.5, printed p. 247: the inverse elliptic integral maps the upper half-plane to the rectangle; Schwarz reflection extends `sn` meromorphically with periods `4K` and `2iK'`.
  URL: `https://cs.mcgill.ca/~akroit/math/analysis/Stein%20and%20Shakarchi%20Complex%20Analysis.pdf`
- L. V. Ahlfors, *Complex Analysis*, 3rd ed., Ch. 7 §2.3, Theorem 2, printed pp. 268–270: the reduced-ratio conditions, uniqueness, and two/four/six corresponding bases. This confirms the claim in the canonical-basis example, not its finite-matrix argument.
  URL: `https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`
- McMullen, *Advanced Complex Analysis*, §5.4, Theorems 5.22–5.23, printed pp. 120–122: `P` maps `C/Z` onto the sphere minus `±i pi`, with the Möbius map of `q=e^(2 pi i z)` omitting `q=0,infinity`. This resolves the incorrect half-period remark in the rank-one item.

## Page verdicts

- A page: summary and mathematical progression are accurate against the current items. Two in-flight proof defects were repaired as listed above; no A-page prose defect remains.
- B page: page-level summary is accurate as a guide, but the five assigned B examples above contain uneditable false claims or proof defects. No B-page prose was changed.

## Blocker and coverage note

There was no blocker to completing this reader assignment. The recomputed run status did show the separate `5a-collect` blocker: `collect-30` had failed three times at `2026-10-01T10:46:32.155Z`.

All assigned pages and item files were opened, and the direct dependency statements needed for the defects and the main degree/divisor checks were inspected. I did not audit the complete transitive closure of every elementary complex-analysis dependency cited across all 25 items; those remaining base facts were used as stated in the assigned files. The findings JSON contains only defects in B items that this reader was not authorized to edit.
