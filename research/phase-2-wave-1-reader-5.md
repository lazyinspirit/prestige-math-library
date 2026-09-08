# Step 6A independent reader report — batch 5

Run: `phase-2-wave-1`  
Batch: `5`  
Reader: `reader-5`

## Scope opened

Pages read in full:

- `library/functional-analysis/norming-and-separation-under-hahn-banach.md` (A)
- `library/functional-analysis/norming-and-separation-under-hahn-banach-examples.md` (B)

Assigned items read in full:

- `def-hahn-banach-extension-principle-relative`
- `thm-relative-hahn-banach-dominated-extension`
- `thm-relative-hahn-banach-norm-preserving-extension`
- `cor-relative-hahn-banach-dual-norming`
- `lem-relative-bidual-evaluation-is-a-contraction`
- `cor-relative-hahn-banach-bidual-isometry`
- `def-relative-normed-convexity-and-separation`
- `def-relative-open-convex-gauge`
- `lem-relative-open-convex-gauge-properties`
- `lem-relative-hahn-banach-separates-an-open-convex-set-from-a-point`
- `lem-relative-compact-closed-sets-have-a-positive-distance-gap`
- `thm-relative-hahn-banach-geometric-separation`
- `ex-relative-norming-in-a-finite-dimensional-space`
- `ex-relative-separation-of-a-ball-and-an-exterior-point`

The direct prerequisite statements opened to check the cited facts and conventions were `def-sublinear-functional`, `def-linear-subspace`, `def-algebraic-dual-and-linear-functional`, `def-dual-space-of-a-normed-space`, `lem-real-part-determines-a-complex-linear-functional`, `lem-span-is-the-set-of-linear-combinations`, `lem-operator-norm-is-a-norm`, `rem-real-and-complex-normed-space-convention`, `def-metric-interior-closure-boundary`, `def-metric-topology`, `def-metric-compactness`, `lem-finite-choice`, `lem-finite-set-has-max`, `lem-inf-epsilon`, `lem-sup-epsilon`, `thm-infimum-property`, and `thm-well-ordering-principle`. Their prerequisite definitions were followed only where needed to type-check the uses (norm, dual, real/complex scalar convention, open/compact, finite choice, and infimum/supremum).

Source sections opened:

- Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential Equations*, Theorem 1.1, Corollaries 1.2–1.4, Lemma 1.3, and Theorems 1.6–1.7 (printed pp. 1–8; online PDF locations P15–P22).
- Teschl, *Topics in Real and Functional Analysis*, Theorem 4.13 and the geometric Hahn–Banach material, Theorems 5.2–5.3 and Corollary 5.4 (online PDF locations P124–P125 and P150–P152).

## Mathematical reading

The HB definition is explicitly conditional over ZF and is not presented as a ZF proof. The dominated-extension result correctly obtains the lower bound by applying the upper bound at `-x`.

The real and complex norm-preserving extension proof correctly handles `M={0}`, uses the real restriction of scalars in the complex case, reconstructs the complex functional from its real part, and uses a pointwise explicit phase rather than an unlicensed simultaneous choice. The dual-norming, bidual contraction, and isometry consequences preserve the fixed-vector quantifiers; the zero-vector cases and the lack of a surjectivity claim are handled correctly.

For the separation branch, the gauge proof establishes finiteness, sublinearity, the exact identity `U={p_U<1}`, and the asymmetric Lipschitz estimate without assuming symmetry. The exterior-point proof uses both signed domination bounds before asserting continuity. The compact/closed proof obtains its finite cover before using finite choice, and its radius minimum supplies a genuine positive uniform gap. The final separation proof checks the open-side and compact/closed hypotheses separately; thickening by half the gap and the open-ball supremum calculation yield the advertised uniform margin. The explicit maximum-norm and ball examples have valid phases, boundary cases, and computations.

The stated source locators support the corresponding standard results. In particular, Brezis's Lemma 1.3 uses the translated gauge and the one-dimensional dominated functional, and Teschl's Theorems 5.2–5.3 give the stated real/complex open convex separation; neither source was used as a substitute for reading the local argument.

## Verdicts

| Page | Verdict | Basis |
| --- | --- | --- |
| `norming-and-separation-under-hahn-banach` | pass | Summary agrees with the conditional-HB proof chain, the fixed-vector norming qualification, and the separate open versus uniform separation hypotheses. |
| `norming-and-separation-under-hahn-banach-examples` | pass | Summary agrees with both examples, including the zero-radius ball case and the displayed real numerical instance. |

No confirmed defect remains in an assigned in-flight item or A-page prose. No repair was made; consequently no proof-contract update, judge-record removal, or reflow run was applicable.

## Checks and blockers

- `node tools/tsx-run.mjs tools/precheck.mts` on all eleven proof/verification-bearing assigned items: pass (11 checked, 0 failing). The three definitions have no proof-like section and were still read in full.
- `node tools/rendercheck.mjs` on both assigned pages: pass.
- `node tools/depcheck.mjs --quiet`: failed with pre-existing repository-wide diagnostics in unrelated items/pages (including other in-flight batches); it reports no batch-5-specific failure in the checked output. This is a global-check blocker only, not an uneditable mathematical finding for this batch.

Uneditable findings: none. Proposed withdrawals: none.
