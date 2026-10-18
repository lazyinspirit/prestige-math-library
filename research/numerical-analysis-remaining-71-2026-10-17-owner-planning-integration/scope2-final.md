# Scope 2 final-review prerequisite repairs

Run: `numerical-analysis-remaining-71-2026-10-17`. Read the full actual final finding `research/numerical-analysis-remaining-71-2026-10-17-scope-review/batch-2/review-1.json`, both complete current target carriers and the complete published `lem-complex-integration-by-parts-on-intervals-and-decaying-lines`, including its hypotheses and proof. Re-read CLAUDE.md. The two reported omissions are confirmed; the old real Riemann integration-by-parts citation in the Schwartz proof did not itself supply the complex Lebesgue bridge.

Exact byte preimages are `research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/scope2-before/lem-matern-spectral-integral-and-normalization.md` and `research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/scope2-before/lem-schwartz-dense-in-fourier-bessel-potential-space.md`.

The published complex supplier proves the finite-interval identity by expanding two complex C1 factors into real and imaginary parts, applying the real integration-by-parts identity to four pairs, and transferring the resulting continuous Riemann integrals to Lebesgue integrals under CC. Its whole-line identity then follows by dominated convergence from integrable derivative products and vanishing boundary products. It does not require the factors themselves both to be integrable. Thus it applies to a decaying factor paired with a bounded Fourier exponential. Both repaired lemmas already carry the needed choice hypothesis (CC in the spectral calculation; full AC with explicitly declared CC in Schwartz density), so no assumption propagation or Statement change is needed.

## Source repairs

- `lem-matern-spectral-integral-and-normalization`: added the exact complex integration-by-parts dependency and [F8]. Proof 1.2 now names u(xi)=exp(-4 pi^2 t xi^2), v(xi)=exp(2 pi i z xi), verifies C1 regularity, integrability of u'v and uv', and uv tending to zero at both ends, and cites [F8]. The explicit identity -8 pi^2 t integral(xi uv)=-2 pi i z I_t(z) gives exactly I_t'(z)=-z I_t(z)/(2t). No Gaussian constant, Fourier sign or normalization changes.
- `lem-schwartz-dense-in-fourier-bessel-potential-space`: replaced the real Riemann dependency and [F7] by the exact complex Lebesgue supplier. Proof 1.2 now verifies rapid decay and integrability of every polynomial multiple/derivative used, justifies frequency differentiation by dominated convergence, applies the whole-line identity on each coordinate line, and uses absolute Fubini to assemble the identities. Proof 3.1 similarly verifies compact support, integrability of the two derivative products and zero boundary product for the smooth frequency factors and all their derivatives before repeated coordinate integration by parts. The coefficient (-1)^|beta|(2 pi i)^(-|beta|) and inverse-transform convention are unchanged.

Both Statement sections were compared with the exact preimages and are byte-identical. The weighted norm, complex field, s>d/2, Fourier convention, CC/full-AC declarations and every conclusion are preserved. No other source, example, page, native report, metadata artifact or runtime file was edited.

## Focused consumer uses

Read the current weighted-Fourier Hilbert/injectivity carrier completely, the Fourier Bessel-potential and Schwartz definitions completely, and the actual relevant consumer premise/use text. This is focused use checking, not an unrelated proof audit.

- `lem-matern-weighted-fourier-space-is-hilbert-and-injective` uses the preserved Gaussian Fourier identity and unit-mass Gaussian for its approximate-identity/injectivity proof. Its complex Hilbert representation and inherited AC remain unchanged.
- `lem-schwartz-dense-in-fourier-bessel-potential-space` itself consumes that Gaussian identity in its regularized inversion step; the repaired spectral argument supplies the exact same identity.
- `def-normalized-matern-spectral-kernel` retains the same normalization/well-definedness justification. `def-bessel-potential-space-and-restriction-quotient` retains the same Schwartz-density justification and complex inverse-Fourier representation.
- `lem-matern-native-space-fourier-identity-and-positive-definiteness` uses the preserved positive integrable unit-mass spectral density, inverse-Fourier representation and Hilbert setup. No consumed interface changes.
- `thm-native-interpolation-projection-and-power-function` uses the preserved k(0)=1 and positive-definite kernel interface. `lem-separated-sites-matern-gram-bound` uses the same spectral quadratic form, positivity, normalization and real-even kernel; its q^(2 nu) and condition-number estimates are unchanged.
- The carried repaired `ex-smooth-scattered-surface-matern-rate` uses Schwartz membership in H^s and the existing interpolation theorem; its h^nu/grid-rate claim is unchanged. `ex-small-fill-distance-can-have-poor-rbf-conditioning` uses kernel continuity and k(0)=1; its carried near-duplicate family and divergent conditioning are unchanged. No example repair was made or needed for these proof-only premise additions.

No Statement/Definition change occurred, so no consumer interface propagation or outside write was needed. Root owns metadata, hashes, contracts, levels, readiness and any page prerequisite integration.

After the final edits, `node tools/proof-layout.mjs items/lem-matern-spectral-integral-and-normalization.md items/lem-schwartz-dense-in-fourier-bessel-potential-space.md` exited 0 with `proof-layout: 2 items, 13 steps, 0 defects`. No tests, full validators, gates, native controls or native reports were run or edited. These focused repairs do not claim native re-review, acceptance or gate credit.
