# Batch 32 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-32`.

Routed obligations: reader:32:1 and refuter:32:1 only; pre/post snapshots are identical and no reader edit was made.

## def-gr-fx-adm-end

Reviewed the complete Definition, scope and TikZ radial section and the published normal-decomposition Statement/proof 1.1–5.1. Positive C2 h and C1 K, uniform Cartesian O_k bounds, Euclidean sphere measure/normal, fixed chart and time normalization are explicit. c^4/G_N times a length has joule units; no constraints, chart invariance, positivity or empirical conclusion follows. The excluded disk, R>R0 and outward arrow agree with the three-dimensional definition. No choice or existence theorem is asserted by the conditional definition. Source formula Gourgoulhon (7.15) and Jaramillo et al. (2) checked; the latter is narrower than this adopted class.

Risk review complete; no routed carrier decision owed and no edit required.

## prop-gr-fx-compact-change-adm

Reviewed both proof steps against the complete ADM definition. A nonempty compact C has bounded radius; empty C is handled by R_C=R0. Equality on the open complement supplies equality of first derivatives, so all sufficiently large sphere integrals agree with the same normal, measure and prefactor. Both limits are expressly assumed. No scalar-curvature, completeness, constraint or coordinate-invariance conclusion is used. No AC use or unmet prerequisite found.

Risk review complete; no routed carrier decision owed and no edit required.

## prop-gr-fx-conformal-adm-value

Reviewed all four proof steps and the full definition. Product-rule O2 bounds give a_ij=2m delta_ij and epsilon=1; positivity is assumed even for negative m. The integrand is -8u^3 partial_r u=4m/R^2+O(R^-3), uniformly in angle. The sphere Gram determinant gives R^2 sin(theta), area 4pi R^2 and integrated error O(R^-1), hence limit 16pi m including m=0. Multiplication gives c^4m/G_N with joule units. No chart invariance, energy condition, completeness or empirical conclusion. Gourgoulhon (7.15) and Bernuzzi (7.6c) support the convention.

Risk review complete; no routed carrier decision owed and no edit required.

## ex-gr-fx04-2

Reviewed all three Verification steps, four supplier interfaces and proofs, reader/refuter findings, and source conventions. The bump support is the closed ball centered at (3R0,0,0), hence 2R0<=r<=4R0 inside E. Smooth extension follows from q^-N exp(-1/q)->0; u>=1 ensures a positive smooth metric. Repaired step 2.1 explicitly transfers limit existence using equality on the open region r>4R0 before F4; both end remainders vanish there. The center Hessian is -2e^-1 delta_ij/R0^2, giving Laplacian -6e^-1/R0^2 and scalar curvature 48 epsilon e^-1/[R0^2(1+epsilon e^-1)^5]>0. At epsilon=0 the difference vanishes, excluded by the claim; R0=0 is excluded and the support boundary is smooth. The curvature lemma contracts the stated Riemann convention correctly and cancels gradient-square terms. No AC, constraints, completeness, positivity theorem or empirical evidence is invoked. Both findings describe one nonfatal missing premise, now closed.

Both `reader:32:1` and `refuter:32:1`: **confirmed_nonfatal**, one shared defect. Repair confidence: 1. Only Verification 2.1 changed; Example, dependencies, physical scope, provenance classifications and manifest remain unchanged. No judge stamp was present to invalidate. No consumer interface propagation is triggered.

Current pre-edit raw SHA256 `8cc51b2892cf72dc23972f921737f74d57f686f2d702fa04e17a87fd86b1e179` exactly matches both native snapshots. Reports independently identify the same F4 premise gap. The routed observed hash `3a35ce96a07683c0736323372b4cc3f876efedb0eb3633b93d779568ab0f7b31` is retained as supplied; no claim that it is the raw-byte hash is made.

## Source checks and limits

Independently retrieved the PDFs and checked Gourgoulhon, https://arxiv.org/pdf/gr-qc/0703035, §7.3.1, (7.14)–(7.15), PDF page index 105; Bernuzzi, https://www.ias.edu/sites/default/files/NR_notes.pdf, §6.3 (6.17), PDF page index 26, and §7.2 (7.6b)–(7.6c), PDF page index 33; Jaramillo–Valiente Kroon–Gourgoulhon, https://arxiv.org/pdf/0712.2332, §2.1 (2), PDF page index 8. Page indices here are zero-based; equation and section locators identify the inspected statements. Web PDF screenshots for Gourgoulhon page index 104 and Jaramillo index 7 returned cache misses; parsed equation passages were available. No whole-source audit or independent source-proof certification is claimed. Local ADM and curvature deductions were checked directly; the compact bump construction is verified locally rather than asserted to be a sourced observation.

No published defect found in the supplier use; no published content changed. The normal-decomposition theorem supplies only its explicit induced-connection and curvature convention here, with its current proof inspected. No empirical premise or statistical assertion occurs. The only diagram is the correctly oriented radial sketch in the ADM definition; no missing proof diagram is required.

## Dependency maintenance and remaining owner context

The batch cross-batch input has one pre-existing open page edge: `gr-fx04-asymptotic-ends-and-adm` → `gr-fx01-hypersurface-and-null-geometry`, awaiting the owner-side batch-29 readiness check for `lem-gr-fx-null-normal-plane-and-screen`. No assigned proof uses that null-plane result; it is not a blocker to the two local adjudications. This administrative hold is preserved, not cleared by the present review. No in-run item edge, statement/definition interface, manifest or withdrawal changed. No outside repair is requested.

## Local checks

`risk-report` before edits: six items routed, four HIGH/CRITICAL, zero errors. All four required risk reviews now contain item-specific checks. `risk-report --require-reviewed`: six items, zero errors. Scoped reflow: unchanged; normative precheck: 1 checked, 0 failing; proof-layout: 1 item, 3 steps, 0 defects; rendercheck: 1 file, clean YAML and KaTeX. No judge cycle, stamping, certification or engine gate battery was initiated.

Shared closed defect ID: `physics-non-fluid-129-2026-10-21-r2-3a-batch-32-adm-limit-existence`. The two owed findings reference this single defect; no extra touched/page decisions are invented.

Final bookkeeping checks: strict proof-contract on `ex-gr-fx04-2` reports 0 errors, 0 warnings, 1/1 checked; final `risk-report --require-reviewed` reports 0 errors. The ledger append succeeded with one fixed row; decisions cover exactly the two routed obligations and both reference that row. The existing cross-batch page readiness hold remains for owner disposition. Local adjudication is complete; engine-owned hashes and gate battery remain pending.
