# PDE-6 Poisson and harmonic-estimate scope repair

## Result and scope

The Step-3a PDE-6 overlay in research/plan-pde-track.md §12.4, lines 3456–3467, promised eight rows missing from batch 9. I added all eight to the batch-9 manifest, corrected its A/B page-require arrays from the item graph, and mapped the rows to full-text sources in coverage. The original claims remain represented; the ball-kernel proof was split into reusable dependencies so the ball Dirichlet theorem does not prove a lemma that it later consumes.

This repair touches only frontier-37-owner-30-batch-9.pages.json, .coverage.json, .notes.md, and this report. The existing cross-batch dependency file remains empty. No shared plan, plan-spec, engine, readiness file, ledger, published item, or other batch was edited. No retry or dispatch was run. The new strategies are a scope repair, not a Step-3 proof verdict; the root integrator owns final integration and certification.

## Added IDs and complete proof routes

| ID | Direct proof route and suppliers |
|---|---|
| lem-ball-poisson-kernel-is-positive-and-normalised | Positivity follows from the in-run formula theorem thm-poisson-kernel-for-a-ball-in-rn. Unit mass follows by applying published thm-green-representation-formula to the constant harmonic function 1 on the in-run ball Green function; lem-sphere-and-ball-measures-scale supplies finite sphere area. It does not use the ball Dirichlet theorem. |
| lem-poisson-kernel-boundary-cap-and-complement-estimate | Split at {|y−p|<δ}. On the cap, positivity and unit mass bound the error by the continuity modulus. Off the cap, |x−y|>δ/2 and the explicit kernel formula bounds the mass by 2ⁿRⁿ⁻²δ⁻ⁿ(R²−|x−a|²). Published sphere compactness and thm-extreme-value-metric make ‖g‖∞ finite; the estimate includes the required factor ‖g‖∞. This row precedes and does not use the Dirichlet theorem. |
| cor-uniform-boundary-convergence-of-ball-poisson-integrals | The ball theorem defines U_g. The cap estimate gives a direction-independent far term for x=a+rθ, p=a+Rθ; published cor-euclidean-closed-balls-and-spheres-are-compact and thm-heine-cantor-metric give a uniform modulus for g. First choose δ, then let r↑R. The corollary is downstream of the ball theorem, while the ball theorem does not depend on it. |
| lem-interior-oscillation-controls-harmonic-gradient | For v=u−u(x), ‖v‖∞ on B_r(x) is at most osc of u. Apply the first-order case of in-run cor-harmonic-cauchy-estimates-in-supremum-norm; the subtracted constant has zero derivative. |
| cor-entire-harmonic-function-of-sublinear-growth-is-constant | For fixed x and R>|x|, apply the in-run supremum Cauchy estimate on B_(R−|x|)(x) inside B_R(0). The derivative bound tends to zero under sup_(B_R)|u|=o(R); integrate along line segments. This is a local argument, not an appeal to bounded Liouville. |
| thm-locally-uniform-harmonic-convergence-is-c-infinity-local | Published thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic first makes the limit harmonic. On a compact neighborhood Kρ, local uniform convergence bounds u_j−u uniformly; apply the in-run Cauchy estimate to that harmonic difference on fixed-radius balls centered on K. This gives uniform convergence of each derivative. Complex-valued functions are handled by their real and imaginary parts. |
| cex-poisson-integral-need-not-recover-discontinuous-data-at-the-jump | On the unit circle, take g=1 on the open upper semicircle, g=0 on the lower semicircle and at p=1. The published disc kernel is invariant under reflection across the real axis and has unit mass, so each semicircle has mass 1/2. Thus U_g(r)=1/2 for every r<1, while g(1)=0. The integral is defined directly for this bounded step datum; the continuous-data Dirichlet theorem is not used outside its hypotheses. |
| cex-exterior-dirichlet-uniqueness-needs-growth-or-decay-control | On |x−a|>R, u(x)=1−(R/|x−a|)ⁿ⁻² is harmonic because |x−a|²⁻ⁿ is a multiple of the published Newtonian fundamental solution away from a. It is bounded, is zero on the sphere and tends to 1 at infinity, giving a second solution with the same trace as zero. The example shows boundedness alone is insufficient; the statement does not claim a complete exterior uniqueness theorem. |

The remaining same-batch consequence, ex-poisson-kernel-concentrates-at-a-boundary-point, is preserved. Its strategy now instantiates the cap estimate with g≡1.

The dependency levels recomputed against the full in-run graph are: formula 2; normalization 3; cap estimate 4; ball Dirichlet theorem 5; uniform radial convergence 6; Cauchy estimate 7; oscillation, sublinear growth and local C∞ convergence 8. Both B counterexamples have level 0 because they use published suppliers only. The whole-run checker confirms there is no cycle or forward same-run dependency.

## Claims preserved and split

- thm-poisson-kernel-for-a-ball-in-rn retains the explicit negative outward normal derivative and continuity. Its original positivity and total-mass claims are carried by lem-ball-poisson-kernel-is-positive-and-normalised.
- thm-dirichlet-problem-on-a-ball-by-the-poisson-integral retains absolute convergence, interior smooth harmonicity, continuous boundary trace and uniqueness. Its boundary step now refers to the separate cap/complement lemma.
- The B kernel-concentration example retains its original quantitative complementary-mass claim and cap-mass limit, now as an application of the new lemma.
- All other original batch-9 rows retain their mathematical statements. The real-analyticity strategy is strengthened to record Simon’s polynomial-growth consequence, deriving it from the already-declared higher derivative estimates.

## Full-text source audit

The coverage file now holds eight source records and 60 harvested results. The following locators were read from full text:

| Source and retrieval | Verified use |
|---|---|
| Hunter, Notes on Partial Differential Equations, full 242-page PDF | §2.2, printed pp. 23–25: Theorems 2.7–2.10 and Corollary 2.11, including derivative, analyticity and unique-continuation arguments; §2.6.1, p. 33: Newtonian kernel harmonicity off its pole. The cited Hunter range does not contain the ball Poisson kernel. |
| Schmidt, Partial Differential Equations I, full 101-page PDF | §2.8, printed pp. 44–50: Green ball, boundary derivative, Poisson formula, normalization, and the detailed cap/complement proof on pp. 49–50. Schmidt’s ΔF=δ convention is translated to the repository’s −ΔΦ=δ convention. |
| Schikorra, Partial Differential Equations I & II, full 281-page PDF | §2.4.1, printed pp. 33–34, Theorem 2.13 states the ball formula and pointwise boundary limit; it does not give the detailed cap estimate. §2.4 and §§8.1–8.3 support the half-space and local Schauder material. |
| Axler, Bourdon and Ramey, Harmonic Function Theory, full 260-page PDF | Chapter 4, printed pp. 61–63: Kelvin transform, Lemma 4.4, Proposition 4.6 and Theorem 4.7. |
| Oh, Lecture Notes for Math 222A, full 179-page PDF | §4.2, printed pp. 60–61: Theorem 4.4 derivative estimates and Theorem 4.6 bounded Liouville. §4.4, pp. 70–72: Theorem 4.20 representation, Theorem 4.22 half-space formula, Lemma 4.23 image-sphere identity and Theorem 4.24 ball formula. Theorem 4.24 omits its proof. |
| Simon, Lectures on PDE, full 118-page PDF | Lecture 4, printed pp. 36–39, Problems 4.2–4.5: ball formula, radial harmonic classification, derivative estimate and polynomial-growth consequence. The candidate Lecture 13 is the maximum-principles lecture (printed pp. 147 onward), not the cited Poisson/radial material. |
| Jakobsen, An Introduction to Partial Differential Equations, full 226-page PDF | §11.1.4, printed pp. 193–194: half-plane Poisson formula and the Heaviside step extension 1/2+(1/π)arctan(x/y). The source leaves H(0) unspecified; the owned counterexample assigns its jump value as zero. |
| Teschl, Partial Differential Equations: From Classical to Modern, complete 392-page archived author manuscript | The live author PDF https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf returned HTTP 404. The requested Wayback URL returned HTTP 200 and redirected to https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf (2,912,992 bytes; SHA-256 cea9939acea1858e812e7bbd61cd8bf8ad67cd11ca1351cac0a447747030b72f). §5.1, printed p. 111, Lemma 5.8 and Theorem 5.9 give derivative estimates and polynomial-growth Liouville; §5.4, pp. 126–127, Lemma 5.23 gives Poisson-kernel positivity and unit mass; §5.6, pp. 133–134, Theorem 5.25 contains the ball formula and full cap/complement boundary proof. |

The source-role distinctions are deliberate: Schmidt and archived Teschl support the complete cap proof; Oh and Schikorra support the formula and boundary statement but omit that proof; Jakobsen supplies the worked jump example in the half-plane, while the owned disc witness is verified directly. No inaccessible source remains unresolved.

## Page prerequisite amendments for root integration

Rechecking actual item homes and the current plan-spec.json confirms the following direct page requirements:

- A page: keep fundamental-solutions-newtonian-potentials-and-green-functions; add analytic-majorants-and-the-cauchy-kovalevskaya-theorem because thm-harmonic-functions-are-real-analytic depends on its def-real-analytic-germ-in-several-variables; add harmonic-functions-and-the-poisson-integral because rem-two-dimensional-poisson-disc-theory-is-cited-not-repeated depends on thm-poisson-integral-solves-the-disc-dirichlet-problem.
- B page: keep A as a prerequisite and add tempered-distributions-and-the-fourier-transform because the existing plane-wave example depends on thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials.
- The new compactness and local harmonic-limit dependencies do not add page edges: their homes compactness-in-metric-spaces and harmonic-functions-and-mean-values-in-rn are already in the transitive page closure of the existing PDE5 prerequisite. The existing multivariable Taylor supplier is also in the PDE5 closure through mixed-partials-taylor-and-extrema.

The batch manifest requires arrays now reflect these edges. The corresponding shared plan amendments are reported for the root integrator; shared plan prose and plan-spec.json remain untouched here.

## Checks

- node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-9.coverage.json: pass, one A page, 60 harvest records, zero errors and warnings.
- node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-9.pages.json: pass, 29 items, zero normalizations and errors.
- node tools/content-policy.mjs research/frontier-37-owner-30-batch-9.pages.json --manifest-only: pass, 29 scoped items, zero errors and warnings.
- node tools/item-dependency-levels.mjs check --run frontier-37-owner-30: pass, all 802 items across 60 pages, maximum level 31.
- python3 -m json.tool parsed the manifest, coverage and cross-batch dependency JSON successfully.

These gates establish manifest/source structure, declared dependency integrity and whole-run levels. They do not certify the mathematical proofs, and no such verdict is claimed by this scope repair.
