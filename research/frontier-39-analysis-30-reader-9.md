# Reader 9 — frontier-39-analysis-30, batch 9

Independent Step 5a review. No judgments or certifications were issued.

## Opened inventory

Pages: `library/pde/rellich-kondrachov-and-sobolev-compactness.md` (A) and `library/pde/rellich-kondrachov-and-sobolev-compactness-examples.md` (B).

All 37 assigned items were read in the following supplier-before-consumer order:

- `items/def-compactly-embedded-normed-spaces.md`
- `items/lem-translation-estimate-for-w-one-p-functions.md`
- `items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md`
- `items/lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic.md`
- `items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md`
- `items/thm-rellich-compactness-from-w-one-p-zero-to-lp.md`
- `items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md`
- `items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md`
- `items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md`
- `items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md`
- `items/thm-rellich-kondrachov-for-p-less-than-n.md`
- `items/thm-rellich-kondrachov-at-the-critical-source-exponent.md`
- `items/thm-morrey-rellich-compactness-for-p-greater-than-n.md`
- `items/thm-higher-order-rellich-kondrachov.md`
- `items/cor-bounded-sobolev-sequences-have-strongly-convergent-subsequences.md`
- `items/cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence.md`
- `items/rem-rellich-is-a-strictly-subcritical-theorem.md`
- `items/lem-fractional-level-set-kernel-measure-estimate.md`
- `items/lem-dyadic-level-set-summability-estimate.md`
- `items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md`
- `items/thm-fractional-sobolev-inequality-on-euclidean-space.md`
- `items/lem-slobodeckij-mollification-approximation-rates.md`
- `items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md`
- `items/thm-subcritical-compactness-of-the-sobolev-trace.md`
- `items/cor-strong-lq-convergence-implies-strong-convergence-of-subcritical-powers.md`
- `items/cor-bounded-map-into-h-one-zero-followed-by-rellich-is-compact-on-ltwo.md`
- `items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md`
- `items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md`
- `items/cex-critical-sobolev-embedding-is-not-compact.md`
- `items/cex-rellich-fails-on-rn-by-translations.md`
- `items/cex-rellich-fails-without-uniform-tail-control.md`
- `items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md`
- `items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md`
- `items/cex-high-frequency-oscillations-violate-uniform-translation-control.md`
- `items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md`
- `items/cex-critical-trace-compactness-fails-by-tangential-dilation.md`
- `items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md`

## Repairs and evidence

- `def-compactly-embedded-normed-spaces`: Definition sequential-form reverse implication now approximates points of the closure explicitly; finite-dimensional observation is justified by coordinates and Heine–Borel; removed the unsupported claim that the recorded choice upper bound is exact. Baseline raw SHA-256: `e6440a0cdf600b7efadfd2b14e16f7c8ccfa0fa95e0ff253e480d27f3e260a80`.
- `lem-translation-estimate-for-w-one-p-functions`: Statement, F2 and steps 1.1–1.2 now use the cited definition tau_h u=u(.-h). F4 supplies the elementary vector-gradient norm comparison used in the density limit. Baseline raw SHA-256: `1ae6d7b8bdb65f40197756b1902fe654e9f787e76bc20de423dbd8ecbdd78505`.
- `lem-relative-compactness-implies-uniform-translation-continuity-in-lp`: F3 translation convention corrected to the opened published definition; estimates are unchanged. Baseline raw SHA-256: `fe5d461c746532b0ed7327c5af61d1bea45aeb28c9a9fa8163b284fe3e289ef6`.
- `thm-frechet-kolmogorov-compactness-criterion-in-lp`: Removed false source caveat: n times an indicator of a nonempty bounded open set does not have uniform translation continuity. Hunter Theorem 1.15 explicitly supplies boundedness. Step 2.1 uses |y|<delta; step 4.1 moves finite-net centres into the family, as the published definition requires. Baseline raw SHA-256: `aa02bfecf05a1fe8b8ea062d2afeb84ec7ae35924f0c70a98590f588d08a7ff7`.
- `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets`: Added explicit Lq completeness and the empty-domain branch. Interpolation is confined to strict intermediate exponents. Baseline raw SHA-256: `a768c0575b396096a9a8d2043109f00b26ef739306fc368f2974e7fc458182dd`.
- `thm-rellich-kondrachov-for-p-less-than-n`: Added explicit Lq completeness and the empty-domain branch. Interpolation is confined to strict intermediate exponents. Baseline raw SHA-256: `11b8e62e4c7545691f6f273fbfaa4b4ca8a22ecc714474a5d91f663e89d0e092`.
- `thm-rellich-kondrachov-at-the-critical-source-exponent`: Added explicit Lq completeness and the empty-domain branch. F2 now uses the k=1,p=n clause of higher-order Sobolev embedding, whose compact-support extension proof needs only the W^{1,n} extension supplied here; the former critical supplier requires extension operators at all lower exponents. Removed the claim of a nonexistent companion p=n witness. Baseline raw SHA-256: `370a37b2f2a291931c7659f7bba0628414ec47e218c61705d8c94fe239b642da`.
- `thm-local-lp-compactness-of-w-one-p-bounded-sequences`: F5 now cites the theorem supplying ambient finite subcovers, rather than the intrinsic definition alone. Step 3.1 explains gluing the weak derivatives with a finite smooth partition to obtain membership on every relatively compact open subset. Baseline raw SHA-256: `a87b4894ca98b647ea1ea2044e3939f3ef0de58d123ce70ad6dc4b74a6341155`.
- `thm-higher-order-rellich-kondrachov`: Step 1.1 extends the original W^{k,p} sequence once, cuts it off, and extracts the derivative sequences on a smooth ambient ball. This supplies the previously unestablished W^{1,p} extension hypothesis needed by F2 and the lower-order extension hypotheses needed in F3, without strengthening the original domain assumption. Baseline raw SHA-256: `dd404541ca755be56de020b9078d8592bd5c33c71ad5ea2080d3a449c5819b29`.
- `thm-morrey-rellich-compactness-for-p-greater-than-n`: The empty domain is handled before Arzela–Ascoli. Step 3.1 proves the uniform limit retains the alpha seminorm bound and applies interpolation to the difference with that limit, avoiding an unstated completeness theorem for Hölder spaces. Baseline raw SHA-256: `503556b11a9b6c1dbf133174f0e4f5c2cfa819c3af7d47abddab945d579d4ddf`.
- `rem-rellich-is-a-strictly-subcritical-theorem`: Remark opening no longer promises a companion witness for the p=n L-infinity exclusion, which this batch does not supply. Baseline raw SHA-256: `617d542a6582a5e5394bccc84c255c55470d8b172ed85f9edb5eaf73f9fae3d7`.
- `lem-fractional-level-set-kernel-measure-estimate`: Step 3.1 polar normalization corrected: the unit-ball integral is omega=sigma(S^{d-1})/d, not d omega=sigma(S^{d-1}). The final constant is preserved. Full Lemma 6.1 was read in Di Nezza–Palatucci–Valdinoci, printed pp. 39–40. Baseline raw SHA-256: `4a67e89d648b0d1cc9a39c56eaebaf4c3e7eaed5f66ea9c49160edf7a1f7493f`.
- `lem-slobodeckij-seminorm-controls-dyadic-level-sets`: Step 2.1 now separates infinite energy before subtracting sums and proves finiteness of the auxiliary geometric sums. The proof correctly includes the zero band, unlike the source’s displayed (6.8); that feature was retained after reading full source Lemma 6.3, pp. 41–45. Baseline raw SHA-256: `c1775988ad3c85578328e68e712121f924dae412ca6f95d8c67d92c35bbfdad8`.
- `thm-fractional-sobolev-inequality-on-euclidean-space`: F5 now gives the elementary 1-Lipschitz truncation proof instead of attributing it to a definition; it no longer incorrectly says seminorm finiteness alone characterizes W^{theta,p}. Step 1.1 partitions the nonzero set, not the topological support. The finite-energy and infinite-energy cases are explicit; full source Theorem 6.5 and Lemma 6.4 were read. Baseline raw SHA-256: `7b3d980f7f1851076bb338d84b92eb52c02f1bddb36532a3625e737df23997d3`.
- `thm-fractional-rellich-kondrachov-compactness-on-bounded-sets`: Rebuilt proof with the mollification rate and first-order Lp Rellich on a support ball, then direct legal interpolation for q>p and finite-measure inclusion for q<p. This removes illegal q-prime interpolation below p, an incorrect seminorm constant, undefined S, moving support-volume bounds, and ambient net-centre/completeness gaps. Complex extension of the real fractional inequality is now explicit. Baseline raw SHA-256: `76f5201323a5dccf93b980ffcfe193564e8bc5008d61de1f94d7eb4567aa3c61`.
- `thm-subcritical-compactness-of-the-sobolev-trace`: Step 2.1 now uses a countable cofinal family of target exponents and nested subsequences before asserting one subsequence works for every q. Step 3.1 corrects the critical trace order at p=n to theta=1-1/n=d/p. Baseline raw SHA-256: `c4f9bae652c45726b2b0b2f1027062dd9c14d964a9a23acef6ad4cb7a270ab2e`.
- `lem-strong-lp-closed-constraints-pass-through-rellich-limits`: F2 only asserts and proves the choice-free direction used: closed sets contain sequential limits. The cited closure characterization does not state the stronger sequential iff originally attributed to it. Baseline raw SHA-256: `043175ee75787749723ac60923203683cc8ce8ad576f5c5f03221fae1f8992b1`.
- `ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval`: The example statement now carries AC already required by its Given/representative supplier. Removed the inaccurate locator invoking Hunter Theorem 3.45 in dimension one, where its stated 1<=p<n range is empty; the local interval proof supplies the claim. Baseline raw SHA-256: `e404b1577fdcbe3ded03d5e9fb048b36a196edfb87b2f43d4c26690a87e5da13`.
- `cex-rellich-fails-on-rn-by-translations`: Added the Countable Choice used by the opened smooth weak-derivative supplier. Step 3.1 applies separation to each arbitrary subsequence: non-Cauchyness of the original sequence alone would not exclude a convergent subsequence. Baseline raw SHA-256: `a9bc09a0a54d107638db52afe7fe79fc55e51445a47e5ffb7d45b2d204be681c`.
- `cex-rellich-fails-without-uniform-tail-control`: Step 1.2 uses a radius about the origin containing the bump support. Its diameter alone does not control its position relative to the origin (e.g. a bump far in the negative e1 direction). Baseline raw SHA-256: `2f592072024d855a639530db6b3147ee298f21b0e42b16b20bab5817c932d2f6`.
- `cex-morrey-compactness-loses-the-endpoint-holder-exponent`: Replaced the unjustified equality between the seminorm over k Omega and the global seminorm by the explicit pair (0,e1/k), giving a uniform lower bound 1, sufficient for the same endpoint noncompactness conclusion. Baseline raw SHA-256: `b3457082caa410ba88abd6805078f661bcfa4f870ad42cafc1141e186737a6a3`.
- `ex-strong-ltwo-convergence-preserves-a-normalisation-constraint`: F2 now derives the reverse inequality for arbitrary norms from the triangle inequality. The former cited item proves only a scalar ordered-field absolute-value inequality, not the asserted norm statement. Baseline raw SHA-256: `c6940cb749819f0949f8f245cd9103027617d18d35e25f7c4d251e7eb2603e83`.
- `cex-high-frequency-oscillations-violate-uniform-translation-control`: Given now states Countable Choice required by F1 and F3. The overlap interval and shift computation match the published minus-sign translation convention; the lower bound is preserved. Baseline raw SHA-256: `1c754e353c8fed3cd03e1ff57dd0aec71160b365079f2763baa820f60fbb2c82`.
- `ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star`: Step 1.1 corrects the critical norm scaling exponent to (n-p)p*/p=n; the former j^(n-p) j^(-n) equals j^(-p). Step 3.1 proves weak-limit uniqueness here by a separating dual test and replaces an unspecified assertion about subcritical powers with the exact subcritical Lq scaling. Baseline raw SHA-256: `2b76b8caa16002fb8421698f4a05f26fad1a32f99f4f6c9215a07fbd9af3a80e`.
- `cex-critical-trace-compactness-fails-by-tangential-dilation`: The refuted statement now specifies n>=2 and 1<p<n. Given constructs a bounded smooth domain with a flat patch explicitly by a triangular diffeomorphism of a ball, replacing an unproved rounded-cube existence assertion. The supplied bulk and boundary scaling argument remains unchanged. Baseline raw SHA-256: `0b5f258e758bc5ad69b6f28ba42528e98150d74c12294f94084256ab41d32e4a`.
- `cex-dilations-can-destroy-tightness-on-an-unbounded-domain`: Added Countable Choice required by the scaling and completed-product suppliers, and cited smooth-to-weak derivative identification. Step 1.1 corrects pointwise-everywhere to almost-everywhere convergence of shrinking-ball indicators. Step 1.2 now uses the published minus-sign translation convention. Baseline raw SHA-256: `822d0f2eaea26cd3de5d97e7e7b55a12dabf998b334c1179d64b00a7aab1f2db`.
- Assigned A-page Notes: corrected the choice ledger: Fréchet–Kolmogorov uses CC+DC; its stronger AC wording was inaccurate. Distinguished the choice-free compact-operator definition from its sequential form.
- `cex-rellich-fails-without-uniform-tail-control`: Corrected the proof’s choice accounting and a delimiter introduced while changing the support bound.
- `def-compactly-embedded-normed-spaces`: Removed unused additional dependencies from the closure-approximation repair.
- `thm-poincare-wirtinger-on-bounded-connected-extension-domains`: Step 1.1 corrects the dimension-dependent bound for the component Sobolev norm: a bound on the Euclidean gradient does not give norm at most 2 in arbitrary dimension. Explicitly records the choice needed to select the violating sequence and starts indices at 1.
- `cex-critical-sobolev-embedding-is-not-compact`: F2 now establishes |x| in W^{1,p} by smooth radial approximation and passage of weak test identities. A scalar Sobolev chain rule alone cannot supply Sobolev membership of its input radial norm. The trace-kernel argument for the cone remains valid, including k=1.
- `lem-fractional-level-set-kernel-measure-estimate`: F5 preserves the supplier’s zero-scalar convention for extended integrals instead of forming the undefined product 0 times infinity.
- `lem-dyadic-level-set-summability-estimate`: F1 now matches the finite-norm Hölder statement actually cited; step 1.1 already establishes its hypotheses.
- `thm-higher-order-rellich-kondrachov`: Step 3.1 identifies convergence to the constructed uniform derivative limits directly, avoiding an unstated completeness result for C^{m,beta}.
- `thm-fractional-rellich-kondrachov-compactness-on-bounded-sets`: Declared the opened complex Hölder/Minkowski supplier for the explicit real-and-imaginary-parts extension of the fractional embedding.
- `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain`: F2 uses a fixed containing ball instead of distance to the possibly empty closure, so the extension-cutoff argument also covers Omega empty.

- Proof contracts: refreshed all exact supplier quotes (the former clauses often stopped before the asserted inequality), current numbered-step claims and input maps. Corrected stale boundary evidence, including p=1 norm/scaling assumptions, Poincare violating-sequence choice, fractional interpolation, the critical-source supplier, the p=1 critical exponent n/(n−1), and the empty-constraint case. These are proof-obligation records, not independent certification.

## Focused validation

- `node tools/tsx-run.mjs tools/reflow.mts items/def-compactly-embedded-normed-spaces.md`: exit 0. unchanged items/def-compactly-embedded-normed-spaces.md
- `node tools/tsx-run.mjs tools/precheck.mts items/def-compactly-embedded-normed-spaces.md`: exit 0. 0 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-translation-estimate-for-w-one-p-functions.md`: exit 0. reflowed items/lem-translation-estimate-for-w-one-p-functions.md
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-translation-estimate-for-w-one-p-functions.md`: exit 0. PASS items/lem-translation-estimate-for-w-one-p-functions.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md`: exit 0. reflowed items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md`: exit 0. PASS items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md`: exit 0. reflowed items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md`: exit 0. PASS items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md`: exit 0. reflowed items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md`: exit 0. PASS items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-rellich-kondrachov-for-p-less-than-n.md`: exit 0. reflowed items/thm-rellich-kondrachov-for-p-less-than-n.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-rellich-kondrachov-for-p-less-than-n.md`: exit 0. PASS items/thm-rellich-kondrachov-for-p-less-than-n.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-rellich-kondrachov-at-the-critical-source-exponent.md`: exit 0. reflowed items/thm-rellich-kondrachov-at-the-critical-source-exponent.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-rellich-kondrachov-at-the-critical-source-exponent.md`: exit 0. PASS items/thm-rellich-kondrachov-at-the-critical-source-exponent.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md`: exit 0. reflowed items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md`: exit 0. PASS items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-higher-order-rellich-kondrachov.md`: exit 0. reflowed items/thm-higher-order-rellich-kondrachov.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-higher-order-rellich-kondrachov.md`: exit 0. PASS items/thm-higher-order-rellich-kondrachov.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-morrey-rellich-compactness-for-p-greater-than-n.md`: exit 0. reflowed items/thm-morrey-rellich-compactness-for-p-greater-than-n.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-morrey-rellich-compactness-for-p-greater-than-n.md`: exit 0. PASS items/thm-morrey-rellich-compactness-for-p-greater-than-n.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/rem-rellich-is-a-strictly-subcritical-theorem.md`: exit 0. unchanged items/rem-rellich-is-a-strictly-subcritical-theorem.md
- `node tools/tsx-run.mjs tools/precheck.mts items/rem-rellich-is-a-strictly-subcritical-theorem.md`: exit 0. 0 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-fractional-level-set-kernel-measure-estimate.md`: exit 0. reflowed items/lem-fractional-level-set-kernel-measure-estimate.md
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-fractional-level-set-kernel-measure-estimate.md`: exit 0. PASS items/lem-fractional-level-set-kernel-measure-estimate.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md`: exit 0. reflowed items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md`: exit 0. PASS items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-fractional-sobolev-inequality-on-euclidean-space.md`: exit 0. reflowed items/thm-fractional-sobolev-inequality-on-euclidean-space.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-fractional-sobolev-inequality-on-euclidean-space.md`: exit 0. PASS items/thm-fractional-sobolev-inequality-on-euclidean-space.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md`: exit 0. reflowed items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md`: exit 0. PASS items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-subcritical-compactness-of-the-sobolev-trace.md`: exit 0. reflowed items/thm-subcritical-compactness-of-the-sobolev-trace.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-subcritical-compactness-of-the-sobolev-trace.md`: exit 0. PASS items/thm-subcritical-compactness-of-the-sobolev-trace.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md`: exit 0. reflowed items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md`: exit 0. PASS items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md`: exit 0. reflowed items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md`: exit 0. PASS items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/cex-rellich-fails-on-rn-by-translations.md`: exit 0. reflowed items/cex-rellich-fails-on-rn-by-translations.md
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-rellich-fails-on-rn-by-translations.md`: exit 0. PASS items/cex-rellich-fails-on-rn-by-translations.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/cex-rellich-fails-without-uniform-tail-control.md`: exit 0. reflowed items/cex-rellich-fails-without-uniform-tail-control.md
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-rellich-fails-without-uniform-tail-control.md`: exit 0. PASS items/cex-rellich-fails-without-uniform-tail-control.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md`: exit 0. reflowed items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md`: exit 0. PASS items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md`: exit 0. reflowed items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md`: exit 0. PASS items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/cex-high-frequency-oscillations-violate-uniform-translation-control.md`: exit 0. reflowed items/cex-high-frequency-oscillations-violate-uniform-translation-control.md
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-high-frequency-oscillations-violate-uniform-translation-control.md`: exit 0. PASS items/cex-high-frequency-oscillations-violate-uniform-translation-control.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md`: exit 0. reflowed items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md`: exit 0. PASS items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/cex-critical-trace-compactness-fails-by-tangential-dilation.md`: exit 0. reflowed items/cex-critical-trace-compactness-fails-by-tangential-dilation.md
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-critical-trace-compactness-fails-by-tangential-dilation.md`: exit 0. PASS items/cex-critical-trace-compactness-fails-by-tangential-dilation.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md`: exit 0. reflowed items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md`: exit 0. PASS items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md`: exit 0. reflowed items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md`: exit 0. PASS items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md (contradiction) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/cex-critical-sobolev-embedding-is-not-compact.md`: exit 0. reflowed items/cex-critical-sobolev-embedding-is-not-compact.md
- `node tools/tsx-run.mjs tools/precheck.mts items/cex-critical-sobolev-embedding-is-not-compact.md`: exit 0. PASS items/cex-critical-sobolev-embedding-is-not-compact.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/lem-dyadic-level-set-summability-estimate.md`: exit 0. reflowed items/lem-dyadic-level-set-summability-estimate.md
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-dyadic-level-set-summability-estimate.md`: exit 0. PASS items/lem-dyadic-level-set-summability-estimate.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md`: exit 0. reflowed items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md`: exit 0. PASS items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md (direct) |  | 1 checked, 0 failing — all clean
- `thm-morrey-rellich-compactness-for-p-greater-than-n`: Source metadata: removed Grigoryan reference. Grigoryan Theorem 2.33 is Fredholm stability, not a Sobolev/minimization theorem; its cited Theorem 1.34 was not present.
- `cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence`: Source metadata: removed Grigoryan reference; Laugesen: Corollary 3.28(ii), printed p. 77, and Exercise 3.26, printed p. 79; the whole-sequence conclusion is proved locally by compact extraction and indicator tests.. Grigoryan Theorem 2.33 is Fredholm stability, not a Sobolev/minimization theorem; its cited Theorem 1.34 was not present.
- `ex-strong-ltwo-convergence-preserves-a-normalisation-constraint`: Source metadata: removed Grigoryan reference; Laugesen: Corollary 3.28(ii), printed p. 77, and Exercise 3.26, printed p. 79, supply the compactness and weak-convergence context; normalization preservation is derived locally from the norm triangle inequality. Exercise 3.23, printed p. 78, concerns convergence to zero, not unit normalization.. Grigoryan Theorem 2.33 is Fredholm stability, not a Sobolev/minimization theorem; its cited Theorem 1.34 was not present.
- `thm-higher-order-rellich-kondrachov`: Source metadata: Kinnunen: Theorem 3.44 and its first-order compactness proof, printed pp. 85-89; the higher-order derivative-family and Holder-limit argument is derived locally, rather than quoted from a higher-order iteration remark.. Grigoryan Theorem 2.33 is Fredholm stability, not a Sobolev/minimization theorem; its cited Theorem 1.34 was not present.
- `thm-poincare-wirtinger-on-bounded-connected-extension-domains`: Source metadata: Laugesen: Theorem 3.29 and its full compactness proof, printed pp. 78-79; the extension-domain generality is derived here using the local Rellich and published zero-gradient constancy results.; Kinnunen: Theorem 3.47 and its compactness-based Poincare-Sobolev proof, printed pp. 90-91, for 1<p<n; the present proof also includes p=1 via its named suppliers.. Grigoryan Theorem 2.33 is Fredholm stability, not a Sobolev/minimization theorem; its cited Theorem 1.34 was not present.
- `lem-slobodeckij-mollification-approximation-rates`: Source metadata: Kinnunen: Theorem 3.44 proof steps (2)-(3), printed pp. 86-88, provide the integer-order mollification model; the fractional delta^theta and delta^(theta-1) rates are proved locally from the translation representation of the Slobodeckij seminorm.; Di Nezza: Section 7, Theorem 7.1 proof, printed pp. 49-53, gives fractional averaging estimates. The translation-modulus and mollification rates in this item are derived locally.. Grigoryan Theorem 2.33 is Fredholm stability, not a Sobolev/minimization theorem; its cited Theorem 1.34 was not present.
- `thm-fractional-rellich-kondrachov-compactness-on-bounded-sets`: Source metadata: Di Nezza: Theorem 7.1 and Corollary 7.2 with their complete proofs, printed pp. 49-54, give bounded-domain fractional compactness and the subcritical interpolation range; this item proves its fixed whole-space-support version locally using mollification and first-order Rellich.. Grigoryan Theorem 2.33 is Fredholm stability, not a Sobolev/minimization theorem; its cited Theorem 1.34 was not present.
- `thm-subcritical-compactness-of-the-sobolev-trace`: Source metadata: removed Kinnunen reference; Di Nezza: Theorem 7.1 and Corollary 7.2, printed pp. 49-54, supply the fractional compactness model. The trace result here is derived by composing the named published sharp trace theorem with compactness in finitely many boundary charts.. Grigoryan Theorem 2.33 is Fredholm stability, not a Sobolev/minimization theorem; its cited Theorem 1.34 was not present.
- `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets`: F2 supplies the p=1 critical continuous estimate locally by smooth whole-space endpoint inequality, W^{1,1} density, L^{n/(n−1)} completeness and identification of the limit by almost-everywhere subsequences. This closes the supplier range gap for this assigned consumer; the defective batch-4 suppliers are still reported.
- `thm-rellich-kondrachov-for-p-less-than-n`: F2 supplies the p=1 critical continuous estimate locally by smooth whole-space endpoint inequality, W^{1,1} density, L^{n/(n−1)} completeness and identification of the limit by almost-everywhere subsequences. This closes the supplier range gap for this assigned consumer; the defective batch-4 suppliers are still reported.

- Proof contracts: refreshed all exact supplier quotes (the former clauses often stopped before the asserted inequality), current numbered-step claims and input maps. Corrected stale boundary evidence, including p=1 norm/scaling assumptions, Poincare violating-sequence choice, fractional interpolation, the critical-source supplier, the p=1 critical exponent n/(n−1), and the empty-constraint case. These are proof-obligation records, not independent certification.
- Final `node tools/tsx-run.mjs tools/reflow.mts items/def-compactly-embedded-normed-spaces.md`: exit 0. unchanged items/def-compactly-embedded-normed-spaces.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/def-compactly-embedded-normed-spaces.md`: exit 0. 0 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/lem-translation-estimate-for-w-one-p-functions.md`: exit 0. unchanged items/lem-translation-estimate-for-w-one-p-functions.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/lem-translation-estimate-for-w-one-p-functions.md`: exit 0. PASS items/lem-translation-estimate-for-w-one-p-functions.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md`: exit 0. unchanged items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md`: exit 0. PASS items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md`: exit 0. unchanged items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md`: exit 0. PASS items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md`: exit 0. unchanged items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md`: exit 0. PASS items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-rellich-kondrachov-for-p-less-than-n.md`: exit 0. unchanged items/thm-rellich-kondrachov-for-p-less-than-n.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-rellich-kondrachov-for-p-less-than-n.md`: exit 0. PASS items/thm-rellich-kondrachov-for-p-less-than-n.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-rellich-kondrachov-at-the-critical-source-exponent.md`: exit 0. unchanged items/thm-rellich-kondrachov-at-the-critical-source-exponent.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-rellich-kondrachov-at-the-critical-source-exponent.md`: exit 0. PASS items/thm-rellich-kondrachov-at-the-critical-source-exponent.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md`: exit 0. unchanged items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md`: exit 0. PASS items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-higher-order-rellich-kondrachov.md`: exit 0. unchanged items/thm-higher-order-rellich-kondrachov.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-higher-order-rellich-kondrachov.md`: exit 0. PASS items/thm-higher-order-rellich-kondrachov.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-morrey-rellich-compactness-for-p-greater-than-n.md`: exit 0. unchanged items/thm-morrey-rellich-compactness-for-p-greater-than-n.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-morrey-rellich-compactness-for-p-greater-than-n.md`: exit 0. PASS items/thm-morrey-rellich-compactness-for-p-greater-than-n.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/rem-rellich-is-a-strictly-subcritical-theorem.md`: exit 0. unchanged items/rem-rellich-is-a-strictly-subcritical-theorem.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/rem-rellich-is-a-strictly-subcritical-theorem.md`: exit 0. 0 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/lem-fractional-level-set-kernel-measure-estimate.md`: exit 0. unchanged items/lem-fractional-level-set-kernel-measure-estimate.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/lem-fractional-level-set-kernel-measure-estimate.md`: exit 0. PASS items/lem-fractional-level-set-kernel-measure-estimate.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md`: exit 0. unchanged items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md`: exit 0. PASS items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-fractional-sobolev-inequality-on-euclidean-space.md`: exit 0. unchanged items/thm-fractional-sobolev-inequality-on-euclidean-space.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-fractional-sobolev-inequality-on-euclidean-space.md`: exit 0. PASS items/thm-fractional-sobolev-inequality-on-euclidean-space.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md`: exit 0. unchanged items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md`: exit 0. PASS items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-subcritical-compactness-of-the-sobolev-trace.md`: exit 0. unchanged items/thm-subcritical-compactness-of-the-sobolev-trace.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-subcritical-compactness-of-the-sobolev-trace.md`: exit 0. PASS items/thm-subcritical-compactness-of-the-sobolev-trace.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md`: exit 0. unchanged items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md`: exit 0. PASS items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md`: exit 0. unchanged items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md`: exit 0. PASS items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/cex-rellich-fails-on-rn-by-translations.md`: exit 0. unchanged items/cex-rellich-fails-on-rn-by-translations.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/cex-rellich-fails-on-rn-by-translations.md`: exit 0. PASS items/cex-rellich-fails-on-rn-by-translations.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/cex-rellich-fails-without-uniform-tail-control.md`: exit 0. unchanged items/cex-rellich-fails-without-uniform-tail-control.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/cex-rellich-fails-without-uniform-tail-control.md`: exit 0. PASS items/cex-rellich-fails-without-uniform-tail-control.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md`: exit 0. unchanged items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md`: exit 0. PASS items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md`: exit 0. unchanged items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md`: exit 0. PASS items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/cex-high-frequency-oscillations-violate-uniform-translation-control.md`: exit 0. unchanged items/cex-high-frequency-oscillations-violate-uniform-translation-control.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/cex-high-frequency-oscillations-violate-uniform-translation-control.md`: exit 0. PASS items/cex-high-frequency-oscillations-violate-uniform-translation-control.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md`: exit 0. unchanged items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md`: exit 0. PASS items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/cex-critical-trace-compactness-fails-by-tangential-dilation.md`: exit 0. unchanged items/cex-critical-trace-compactness-fails-by-tangential-dilation.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/cex-critical-trace-compactness-fails-by-tangential-dilation.md`: exit 0. PASS items/cex-critical-trace-compactness-fails-by-tangential-dilation.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md`: exit 0. unchanged items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md`: exit 0. PASS items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md`: exit 0. unchanged items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md`: exit 0. PASS items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md (contradiction) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/cex-critical-sobolev-embedding-is-not-compact.md`: exit 0. unchanged items/cex-critical-sobolev-embedding-is-not-compact.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/cex-critical-sobolev-embedding-is-not-compact.md`: exit 0. PASS items/cex-critical-sobolev-embedding-is-not-compact.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/lem-dyadic-level-set-summability-estimate.md`: exit 0. unchanged items/lem-dyadic-level-set-summability-estimate.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/lem-dyadic-level-set-summability-estimate.md`: exit 0. PASS items/lem-dyadic-level-set-summability-estimate.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md`: exit 0. unchanged items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md`: exit 0. PASS items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence.md`: exit 0. reflowed items/cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence.md`: exit 0. PASS items/cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence.md (direct) |  | 1 checked, 0 failing — all clean
- Final `node tools/tsx-run.mjs tools/reflow.mts items/lem-slobodeckij-mollification-approximation-rates.md`: exit 0. reflowed items/lem-slobodeckij-mollification-approximation-rates.md
- Final `node tools/tsx-run.mjs tools/precheck.mts items/lem-slobodeckij-mollification-approximation-rates.md`: exit 0. PASS items/lem-slobodeckij-mollification-approximation-rates.md (direct) |  | 1 checked, 0 failing — all clean
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-9.proof-contracts.json --strict`: exit 0. proof-contract: 0 error(s), 0 warning(s), 37/37 item(s) checked
- `node tools/rendercheck.mjs items/def-compactly-embedded-normed-spaces.md items/lem-translation-estimate-for-w-one-p-functions.md items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md items/thm-rellich-kondrachov-for-p-less-than-n.md items/thm-rellich-kondrachov-at-the-critical-source-exponent.md items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md items/thm-higher-order-rellich-kondrachov.md items/thm-morrey-rellich-compactness-for-p-greater-than-n.md items/rem-rellich-is-a-strictly-subcritical-theorem.md items/lem-fractional-level-set-kernel-measure-estimate.md items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md items/thm-fractional-sobolev-inequality-on-euclidean-space.md items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md items/thm-subcritical-compactness-of-the-sobolev-trace.md items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md items/cex-rellich-fails-on-rn-by-translations.md items/cex-rellich-fails-without-uniform-tail-control.md items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md items/cex-high-frequency-oscillations-violate-uniform-translation-control.md items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md items/cex-critical-trace-compactness-fails-by-tangential-dilation.md items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md items/cex-critical-sobolev-embedding-is-not-compact.md items/lem-dyadic-level-set-summability-estimate.md items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md items/cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence.md items/lem-slobodeckij-mollification-approximation-rates.md library/pde/rellich-kondrachov-and-sobolev-compactness.md`: exit 0. OK — 33 file(s): no wikilink inside math, no nested or unbalanced | delimiters, no multiline display block, every math span parses under the real | KaTeX, and every frontmatter block parses under the renderer's YAML parser.
- `node tools/proof-layout.mjs items/def-compactly-embedded-normed-spaces.md items/lem-translation-estimate-for-w-one-p-functions.md items/lem-relative-compactness-implies-uniform-translation-continuity-in-lp.md items/thm-frechet-kolmogorov-compactness-criterion-in-lp.md items/cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets.md items/thm-rellich-kondrachov-for-p-less-than-n.md items/thm-rellich-kondrachov-at-the-critical-source-exponent.md items/thm-local-lp-compactness-of-w-one-p-bounded-sequences.md items/thm-higher-order-rellich-kondrachov.md items/thm-morrey-rellich-compactness-for-p-greater-than-n.md items/rem-rellich-is-a-strictly-subcritical-theorem.md items/lem-fractional-level-set-kernel-measure-estimate.md items/lem-slobodeckij-seminorm-controls-dyadic-level-sets.md items/thm-fractional-sobolev-inequality-on-euclidean-space.md items/thm-fractional-rellich-kondrachov-compactness-on-bounded-sets.md items/thm-subcritical-compactness-of-the-sobolev-trace.md items/lem-strong-lp-closed-constraints-pass-through-rellich-limits.md items/ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval.md items/cex-rellich-fails-on-rn-by-translations.md items/cex-rellich-fails-without-uniform-tail-control.md items/cex-morrey-compactness-loses-the-endpoint-holder-exponent.md items/ex-strong-ltwo-convergence-preserves-a-normalisation-constraint.md items/cex-high-frequency-oscillations-violate-uniform-translation-control.md items/ex-normalised-critical-bubbles-converge-weakly-but-not-strongly-at-p-star.md items/cex-critical-trace-compactness-fails-by-tangential-dilation.md items/cex-dilations-can-destroy-tightness-on-an-unbounded-domain.md items/thm-poincare-wirtinger-on-bounded-connected-extension-domains.md items/cex-critical-sobolev-embedding-is-not-compact.md items/lem-dyadic-level-set-summability-estimate.md items/thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain.md items/cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence.md items/lem-slobodeckij-mollification-approximation-rates.md`: exit 0. proof-layout: 32 items, 91 steps, 0 defects

## Opened dependency inventory

All 103 direct external interfaces listed below were opened; key analytic supplier proofs were opened additionally. Reading an interface is distinguished here from auditing its full dependency closure.

- `items/def-compact-linear-operator.md`
- `items/def-norm-and-normed-space.md`
- `items/rem-real-and-complex-normed-space-convention.md`
- `items/def-bounded-linear-operator.md`
- `items/def-metric-compactness.md`
- `items/def-metric-bounded-diameter.md`
- `items/thm-metric-compactness-equivalences.md`
- `items/def-countable-choice.md`
- `items/def-dependent-choice.md`
- `items/cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn.md`
- `items/def-sobolev-space-wkp-and-its-norm.md`
- `items/def-weak-derivative-of-a-locally-integrable-function.md`
- `items/def-l-p-space-as-a-quotient-by-null-functions.md`
- `items/def-translation-of-a-function-on-rn.md`
- `items/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant.md`
- `items/thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions.md`
- `items/thm-minkowski-integral-inequality.md`
- `items/def-axiom-of-choice.md`
- `items/thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity.md`
- `items/thm-compact-implies-complete-and-totally-bounded.md`
- `items/lem-totally-bounded-basic.md`
- `items/def-totally-bounded.md`
- `items/def-metric-ball.md`
- `items/def-measure-null-set-and-almost-everywhere.md`
- `items/thm-nonnegative-integral-zero-iff-zero-almost-everywhere.md`
- `items/def-radial-mollifier-family-in-rn.md`
- `items/thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign.md`
- `items/thm-young-convolution-inequality.md`
- `items/thm-holder-inequality-for-integrals.md`
- `items/lem-equicontinuous-families-have-finite-sup-nets.md`
- `items/thm-arzela-ascoli-for-real-ck.md`
- `items/thm-complete-subspace-iff-closed.md`
- `items/thm-complete-and-totally-bounded-implies-compact.md`
- `items/thm-riesz-fischer-completeness-of-l-p.md`
- `items/lem-zero-extension-from-w-one-p-zero.md`
- `items/def-wkp-zero-as-a-sobolev-closure.md`
- `items/def-sobolev-extension-domain-and-extension-operator.md`
- `items/lem-euclidean-bump-for-a-compact-set-inside-an-open-set.md`
- `items/lem-weak-leibniz-rule-with-a-smooth-factor.md`
- `items/thm-extension-theorem-for-bounded-smooth-domains.md`
- `items/thm-zero-weak-gradient-implies-componentwise-constancy.md`
- `items/lem-rat-embeds-dense.md`
- `items/thm-rationals-countable.md`
- `items/thm-product-of-countable.md`
- `items/thm-heine-borel-rn.md`
- `items/def-weak-convergence-of-nets-and-sequences.md`
- `items/thm-reflexivity-of-lp-for-one-less-p-less-infinity.md`
- `items/cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence.md`
- `items/cor-sobolev-inequality-for-w-one-p-zero.md`
- `items/def-sobolev-conjugate-exponent.md`
- `items/thm-lyapunov-interpolation-inequality-for-l-p-norms.md`
- `items/thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n.md`
- `items/thm-critical-sobolev-embedding-into-every-finite-lq.md`
- `items/thm-morrey-inequality-for-p-greater-than-n.md`
- `items/def-local-holder-and-c-two-alpha-norms-on-euclidean-balls.md`
- `items/lem-weak-partial-derivatives-lower-sobolev-order.md`
- `items/thm-higher-order-sobolev-embedding.md`
- `items/def-ck-and-multi-index-notation-in-several-variables.md`
- `items/def-hk-and-hk-zero-notation.md`
- `items/thm-weak-topology-is-hausdorff.md`
- `items/thm-c-c-is-dense-in-l-p-for-radon-measures.md`
- `items/def-lebesgue-measure-and-the-lebesgue-sigma-algebra.md`
- `items/thm-polar-coordinates-formula-for-lebesgue-measure.md`
- `items/def-polar-surface-measure-on-the-unit-sphere.md`
- `items/lem-euclidean-balls-have-positive-finite-lebesgue-measure.md`
- `items/thm-linear-change-of-variables-for-lebesgue-measure.md`
- `items/lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness.md`
- `items/prop-measure-of-a-set-difference.md`
- `items/cor-additivity-of-the-nonnegative-lebesgue-integral.md`
- `items/prop-order-and-scalar-rules-for-the-nonnegative-integral.md`
- `items/def-fractional-slobodeckij-space-on-euclidean-space.md`
- `items/thm-tonelli-and-fubini-for-completed-product-measures.md`
- `items/thm-finite-and-countable-subadditivity-of-measures.md`
- `items/thm-fatou-lemma.md`
- `items/thm-dominated-convergence.md`
- `items/thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset.md`
- `items/cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives.md`
- `items/thm-sharp-trace-theorem-for-w-one-p.md`
- `items/thm-lp-trace-operator-on-a-bounded-c-one-domain.md`
- `items/def-fractional-sobolev-space-on-a-compact-c-one-boundary.md`
- `items/lem-fractional-boundary-norm-is-independent-of-atlas.md`
- `items/lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts.md`
- `items/lem-sobolev-trace-agrees-with-continuous-boundary-values.md`
- `items/def-surface-integral-on-a-compact-c-one-hypersurface.md`
- `items/def-bounded-c-one-domain-boundary-charts-and-outward-normal.md`
- `items/lem-finite-ambient-partitions-for-euclidean-boundary-integration.md`
- `items/cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences.md`
- `items/cor-mean-value-theorem.md`
- `items/def-metric-topology.md`
- `items/def-topological-space.md`
- `items/thm-metric-closure-characterisation.md`
- `items/def-absolute-continuity-on-almost-every-coordinate-line.md`
- `items/def-continuous-real-functions-on-a-compact-metric-space.md`
- `items/cor-positive-negative-part-and-truncation-calculus-in-w-one-p.md`
- `items/thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions.md`
- `items/thm-kernel-of-the-trace-is-w-one-p-zero.md`
- `items/def-support-and-compactly-supported-riemann-integral-in-rn.md`
- `items/lem-classical-derivatives-are-weak-derivatives.md`
- `items/thm-compact-subset-is-closed-and-bounded.md`
- `items/cor-of-reverse-triangle.md`
- `items/thm-quarter-turn-values-and-shift-formulas.md`
- `items/thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity.md`
- `items/thm-newton-leibniz-with-interior-derivative.md`

Additional opened targets (interface or relevant proof):

- `items/thm-coordinate-map-for-a-finite-dimensional-normed-space.md`
- `items/lem-compactness-is-intrinsic.md`
- `items/thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space.md`
- `items/lem-sobolev-norm-is-well-defined-and-definite.md`
- `items/thm-complex-holder-minkowski-and-the-quotient-norm.md`
- `items/thm-gagliardo-nirenberg-sobolev-inequality.md`
- `items/thm-gagliardo-nirenberg-sobolev-inequality-for-p-one.md`
- `items/cor-sobolev-embeddings-transfer-from-rn-to-extension-domains.md`
- `items/lem-weak-derivative-linearity-locality-and-commutation.md`
- `items/cor-vector-valued-ftc-and-lipschitz-bound.md`
- `items/thm-tonelli-theorem-for-sigma-finite-product-spaces.md`
- `items/thm-generalized-holder-inequality-for-products.md`
- `items/thm-locally-compact-normed-space-iff-finite-dimensional.md`

Also opened `library/pde/sobolev-poincare-and-morrey-inequalities.md` for its domain/choice conventions, and the exact batch-9 manifest, cross-batch mapping and proof contracts. Existing author decisions were treated as evidence, not approval. The generated evidence bundle for the nonlinear-power corollary was inspected; actual source files determined the review.

## Authoritative source evidence

- Di Nezza–Palatucci–Valdinoci, https://arxiv.org/pdf/1104.4345: complete Lemmas 6.1–6.4 and Theorem 6.5, printed pp. 39–47; complete Theorem 7.1 and Corollary 7.2, pp. 49–54. The original zero-set omission in (6.8) was not copied: the authored dyadic proof includes Z={f=0}.
- Kinnunen, https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf: Theorem 3.44 and full mollification/Arzela–Ascoli proof, pp. 85–89 (its source range is 1<p<n); Example 3.46 and Theorem 3.47 with its complete Poincare proof, pp. 90–91. Higher-order iterations and fractional rates in the assigned items are local derivations, not falsely attributed source theorems.
- Laugesen, https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf: Definition 3.24 and Theorems 3.26–3.27, p. 74; full compactness proofs, pp. 75–77; Corollary 3.28, p. 77; Exercises 3.23–3.24, p. 78; Theorem 3.29 and full compactness Poincare proof, pp. 78–79; Exercise 3.26, p. 79.
- Hunter, https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf: Theorem 1.15 (boundedness, tightness, translation continuity), pp. 6–7; Theorem 3.45 and full proof, pp. 73–74; Examples 3.46–3.47, p. 74; Theorem 3.48 and proof, p. 75; domain localization, p. 75; Theorem 3.49, p. 76.
- Brezis, https://www.math.toronto.edu/almut/Brezis.pdf: Theorem 9.16 and full compactness proof, printed pp. 285–286. Grigoryan https://web.math.ucsb.edu/~grigoryan/246B/lecs/246B.pdf was inspected for the cited theorem numbers: Theorem 2.33 is Fredholm perturbation stability, so the Sobolev/minimization attribution was removed.
- Retrieval limit: the archived Teschl PDF returned a web retrieval error; the official live PDF returned HTTP 404. The official book page says the manuscript is temporarily unavailable during AMS publication. No claim of independently reading the archived theorem locators is made. Accessible sources and local derivations supplied the mathematics reviewed here.

## Defects outside edit authority

All draft suppliers below belong to exact current-run batch 4, confirmed against its manifest; no published carrier was edited or relabelled. The initially observed raw hashes were computed independently after opening the suppliers. Producer edits arrived during review, and every such independently observed hash was then matched against the immutable batch-4 pre-reader fingerprint. Findings therefore bind snapshot `pre`; corrected current bytes are never labelled as the historical defect.

- `cor-sobolev-inequality-for-w-one-p-zero` — ## Statement, opening hypotheses; compare ## Facts & Assumptions, Given; missing-hypothesis, fatal. The Statement starts with domain/exponent hypotheses and omits Axiom of Choice, whereas Facts & Assumptions explicitly gives Axiom of Choice for zero-extension and whole-space Sobolev suppliers. The opened Sobolev/class and supplier interfaces are conditional on choice, and the proof establishes the conclusion only under the displayed Given, not the unconditional Statement. Carry the recorded choice hypothesis into the Statement (or supply a complete argument with weaker hypotheses). The assigned consumer assumes AC; this is a defect in the reusable supplier interface, not a claim that its proof is invalid under its Given. Consumer: cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets. Observed source: {"snapshot": "pre", "item_sha256": "6382a0a6d1c585bde427ef7143841cc37c14d71f2973650cbcba23953820718f"}.
- `thm-gagliardo-nirenberg-sobolev-inequality` — ## Statement, opening hypotheses; compare ## Facts & Assumptions, Given; missing-hypothesis, fatal. The Statement starts with domain/exponent hypotheses and omits Axiom of Choice, whereas Facts & Assumptions explicitly gives Axiom of Choice for smooth density, completeness and almost-everywhere subsequence interfaces. The opened Sobolev/class and supplier interfaces are conditional on choice, and the proof establishes the conclusion only under the displayed Given, not the unconditional Statement. Carry the recorded choice hypothesis into the Statement (or supply a complete argument with weaker hypotheses). The assigned consumer assumes AC; this is a defect in the reusable supplier interface, not a claim that its proof is invalid under its Given. Consumer: cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets. Observed source: {"snapshot": "pre", "item_sha256": "25a0aa250e5dca0584df1f991737d2a06bf6216bf282728463889b3f9fb7c6eb"}.
- `thm-gagliardo-nirenberg-sobolev-inequality-for-p-one` — ## Statement, opening hypotheses; compare ## Facts & Assumptions, Given; missing-hypothesis, fatal. The Statement starts with domain/exponent hypotheses and omits Countable Choice, whereas Facts & Assumptions explicitly gives Countable Choice for the Lebesgue/Sobolev interfaces explicitly assumed in Given and F5. The opened Sobolev/class and supplier interfaces are conditional on choice, and the proof establishes the conclusion only under the displayed Given, not the unconditional Statement. Carry the recorded choice hypothesis into the Statement (or supply a complete argument with weaker hypotheses). The assigned consumer assumes AC; this is a defect in the reusable supplier interface, not a claim that its proof is invalid under its Given. Consumer: cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets. Observed source: {"snapshot": "pre", "item_sha256": "cf5051a82724596c26627c7b687887f78756f4c60eed3f056472d1806654be84"}.
- `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n` — ## Statement, opening hypotheses; compare ## Facts & Assumptions, Given; missing-hypothesis, fatal. The Statement starts with domain/exponent hypotheses and omits Axiom of Choice, whereas Facts & Assumptions explicitly gives Axiom of Choice for extension transfer and Sobolev suppliers. The opened Sobolev/class and supplier interfaces are conditional on choice, and the proof establishes the conclusion only under the displayed Given, not the unconditional Statement. Carry the recorded choice hypothesis into the Statement (or supply a complete argument with weaker hypotheses). The assigned consumer assumes AC; this is a defect in the reusable supplier interface, not a claim that its proof is invalid under its Given. Consumer: thm-rellich-kondrachov-for-p-less-than-n. Observed source: {"snapshot": "pre", "item_sha256": "51a9e4b5d88177ba9ed91f651c5825963ceb2218dfa920f93ae6cc30fe9e1662"}.
- `thm-critical-sobolev-embedding-into-every-finite-lq` — ## Statement, opening hypotheses; compare ## Facts & Assumptions, Given; missing-hypothesis, fatal. The Statement starts with domain/exponent hypotheses and omits Axiom of Choice, whereas Facts & Assumptions explicitly gives Axiom of Choice for lower-exponent extension/Sobolev suppliers. The opened Sobolev/class and supplier interfaces are conditional on choice, and the proof establishes the conclusion only under the displayed Given, not the unconditional Statement. Carry the recorded choice hypothesis into the Statement (or supply a complete argument with weaker hypotheses). The assigned consumer assumes AC; this is a defect in the reusable supplier interface, not a claim that its proof is invalid under its Given. The Statement also permits the empty extension domain but says its embedding constants necessarily blow up as q tends to infinity. On the empty domain all classes are zero and constants can remain 1. Given assumes nonempty Omega; require nonemptiness or restrict the blow-up assertion accordingly. Producer recheck: nonemptiness is now explicit, while AC is still absent from the Statement. The empty-domain objection describes the bound pre-reader version. Consumer: thm-rellich-kondrachov-at-the-critical-source-exponent. Observed source: {"snapshot": "pre", "item_sha256": "f134783176d57308cd1985d548726e15eb127dbff24cffd28999a8e285485589"}.
- `thm-morrey-inequality-for-p-greater-than-n` — ## Statement, opening hypotheses; compare ## Facts & Assumptions, Given; missing-hypothesis, fatal. The Statement starts with domain/exponent hypotheses and omits Axiom of Choice, whereas Facts & Assumptions explicitly gives Axiom of Choice for the ball potential and differentiation interfaces named in Given and F5. The opened Sobolev/class and supplier interfaces are conditional on choice, and the proof establishes the conclusion only under the displayed Given, not the unconditional Statement. Carry the recorded choice hypothesis into the Statement (or supply a complete argument with weaker hypotheses). The assigned consumer assumes AC; this is a defect in the reusable supplier interface, not a claim that its proof is invalid under its Given. Consumer: thm-morrey-rellich-compactness-for-p-greater-than-n. Observed source: {"snapshot": "pre", "item_sha256": "de3550e2e51efa0314b3dac93811cc71fa39702e63246b832a80edcd703d4581"}.
- `lem-weak-partial-derivatives-lower-sobolev-order` — ## Statement, opening hypotheses; compare ## Facts & Assumptions, Given; missing-hypothesis, fatal. The Statement starts with domain/exponent hypotheses and omits Countable Choice, whereas Facts & Assumptions explicitly gives Countable Choice for the weak-derivative representative and uniqueness interfaces. The opened Sobolev/class and supplier interfaces are conditional on choice, and the proof establishes the conclusion only under the displayed Given, not the unconditional Statement. Carry the recorded choice hypothesis into the Statement (or supply a complete argument with weaker hypotheses). The assigned consumer assumes AC; this is a defect in the reusable supplier interface, not a claim that its proof is invalid under its Given. Consumer: thm-higher-order-rellich-kondrachov. Observed source: {"snapshot": "pre", "item_sha256": "7b568f5eecbea18e71422699dcd458ff2310fbc22baf1aa0addf9d162bee6cf3"}.
- `thm-higher-order-sobolev-embedding` — ## Statement, opening hypotheses; compare ## Facts & Assumptions, Given; missing-hypothesis, fatal. The Statement starts with domain/exponent hypotheses and omits Axiom of Choice, whereas Facts & Assumptions explicitly gives Axiom of Choice for extension, smooth density and whole-space embedding suppliers. The opened Sobolev/class and supplier interfaces are conditional on choice, and the proof establishes the conclusion only under the displayed Given, not the unconditional Statement. Carry the recorded choice hypothesis into the Statement (or supply a complete argument with weaker hypotheses). The assigned consumer assumes AC; this is a defect in the reusable supplier interface, not a claim that its proof is invalid under its Given. Consumer: thm-higher-order-rellich-kondrachov. Observed source: {"snapshot": "pre", "item_sha256": "5d8e93061d0119cb23af58047ee70d75de3c235d67b66d608ae3e5f2f1b0c04b"}.
- `cor-sobolev-inequality-for-w-one-p-zero` — Facts & Assumptions F3 and Proof 2.1; citation-inaccurate, fatal. The supplier claims 1<=p<n but F3 applies thm-gagliardo-nirenberg-sobolev-inequality for every p in that range. Its opened Statement requires 1<p<n, so it cannot prove the p=1 case. Add the smooth p=1 endpoint theorem and a W^{1,1} density/completeness passage identifying the critical limit before applying the zero extension. The assigned consumer now supplies this endpoint locally. This is a historical defect in the bound pre-reader bytes: the producer has since added the required p=1 density/completeness passage, which was opened at recheck. Do not read this as an allegation against those corrected current steps. Consumer: cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets. Observed source: {"snapshot": "pre", "item_sha256": "6382a0a6d1c585bde427ef7143841cc37c14d71f2973650cbcba23953820718f"}.
- `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n` — Facts & Assumptions F1 and Proof 1.1; citation-inaccurate, fatal. F1 invokes thm-gagliardo-nirenberg-sobolev-inequality to prove the endpoint p-star embedding for the claimed 1<=p<n. That target Statement excludes p=1. The transfer corollary is conditional on a valid whole-space estimate and supplies no missing p=1 estimate. Add the smooth endpoint theorem, density, completeness and identification of the limit to obtain the whole-space W^{1,1} estimate, then transfer it. The assigned consumer now supplies that passage locally. This is a historical defect in the bound pre-reader bytes: the producer has since added the required p=1 density/completeness passage, which was opened at recheck. Do not read this as an allegation against those corrected current steps. Consumer: thm-rellich-kondrachov-for-p-less-than-n. Observed source: {"snapshot": "pre", "item_sha256": "51a9e4b5d88177ba9ed91f651c5825963ceb2218dfa920f93ae6cc30fe9e1662"}.
- `thm-higher-order-sobolev-embedding` — sources.references, Kinnunen locator; ## Source notes, first sentence; citation-inaccurate, fatal. The item identifies Kinnunen Theorem 3.47, printed pp. 90-91, as a higher-order embedding. The retrieved 2026 notes have Theorem 3.47 on bounded connected extension domains, 1<p<n, giving the mean-zero first-order Poincare-Sobolev estimate. It has no higher-order k or C^{m,alpha} conclusion. Correct the attribution to actual higher-order source material, e.g. Hunter Theorem 3.49, printed p. 76, or identify the higher-order iteration as a local derivation from accurately cited first-order results. Source: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf, PDF pages 93-94. The producer has since replaced the Theorem 3.47 attribution by Remark 3.40 and the first-order Morrey input. This finding binds the actually observed pre-reader attribution, not the corrected current reference. Consumer: thm-higher-order-rellich-kondrachov. Observed source: {"snapshot": "pre", "item_sha256": "5d8e93061d0119cb23af58047ee70d75de3c235d67b66d608ae3e5f2f1b0c04b"}.
- `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n` — sources.references, Kinnunen locator; ## Source notes; citation-inaccurate, fatal. The claimed Kinnunen Theorem 3.47 is the mean-zero Poincare-Sobolev theorem for connected extension domains (1<p<n), not the cited full extension-domain Sobolev embedding. The corresponding full embedding is Theorem 3.43, printed pp. 84-85. Correct the theorem number, connectedness/range attribution and source note; the p=1 proof obligation is recorded separately. Source: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf, Theorems 3.43 and 3.47. The producer has corrected the reference locator to Theorem 3.43, but the current Source notes still say Theorem 3.47. Consumer: thm-rellich-kondrachov-for-p-less-than-n. Observed source: {"snapshot": "pre", "item_sha256": "51a9e4b5d88177ba9ed91f651c5825963ceb2218dfa920f93ae6cc30fe9e1662"}.
- `thm-critical-sobolev-embedding-into-every-finite-lq` — Facts & Assumptions F3, final clause; false-claim, fatal. F3 says the Sobolev norm is the sum of the component L^n norms. The opened def-sobolev-space-wkp-and-its-norm defines it as (sum_{|alpha|<=1} ||D^alpha u||_n^n)^(1/n), not their sum. For n>=2 these are generally different. State the actual norm and the finite-dimensional equivalence used when summing component estimates; the final bound with an unspecified constant can then be retained. This historical error has been corrected by the producer to the ell^n norm in current F3; the finding binds the observed pre-reader bytes. Consumer: thm-rellich-kondrachov-at-the-critical-source-exponent. Observed source: {"snapshot": "pre", "item_sha256": "f134783176d57308cd1985d548726e15eb127dbff24cffd28999a8e285485589"}.
- `rellich-kondrachov-and-sobolev-compactness-examples` — Body, first paragraph, sentence ending "unattainable by rescaled smooth spikes"; overstrong-title-or-statement, fatal. The prose says the endpoint Holder exponent 1-n/p is unattainable. The opened Morrey estimate and the main page Morrey F2 establish continuous embedding at precisely that exponent; the spikes disprove compactness at the endpoint. Replace the sentence with failure of compactness in the endpoint Holder norm while continuous endpoint embedding remains valid. This B-page prose is read-only in this dispatch. Consumer: None. Observed source: null.

## Page verdicts and handoff

- A — `rellich-kondrachov-and-sobolev-compactness`: repaired. Its assigned proofs retain the original exponent ranges and generality, with the p=1 continuous endpoint supplied locally for both interpolation consumers. Batch-4 statement, range and citation defects remain for the Step 5b lead; no withdrawal is proposed. This is a reader verdict, not a judge stamp.
- B — `rellich-kondrachov-and-sobolev-compactness-examples`: item computations and witnesses repaired, including endpoint spikes, critical bubbles and the flat trace domain construction. Its read-only prose still overstates failure at the endpoint Holder exponent and requires the owner/lead to correct the distinction between continuity and compactness.

No unresolved repair blocker remains in an assigned item. Uneditable supplier interfaces and the B-page sentence are routed in the JSON findings. All original IDs are retained; no plan-spec or published content was edited. No judge record was present in the initially opened assigned item carriers; none was introduced. Reflow/precheck, strict contract checks, rendercheck and proof-layout are local format/evidence checks, not mathematical certification.

Coverage limitations: Opened both assigned pages and all 37 assigned items in dependency order, all 103 direct external prerequisite interfaces from the manifest, additional norm/weak-calculus/coordinate/endpoint suppliers listed in the report, and full proofs of the eight flagged batch-4 draft suppliers. Read the complete relevant fractional Sections 6-7, compactness/Poincare arguments in Laugesen, the Kinnunen Rellich proof, Hunter compactness/higher-order statements and Brezis Theorem 9.16. Repaired 32 assigned item carriers and A-page Notes; reflow/precheck passed for each, strict proof contracts passed for all 37, rendercheck passed for 33 changed carriers, and final batched proof-layout passed (91 steps, zero defects). Teschl archived PDF could not be independently retrieved; retained archival locators are not claimed as verified. This is not a full proof audit of the entire transitive published library. The supplier findings bind the actually opened producer pre-reader bytes; current producer corrections are noted explicitly below.

## Producer changes observed before handoff

The batch-4 producer changed all eight flagged supplier carriers during this review. Reopened current statements still omit their recorded AC/CC hypotheses. Current zero-boundary and extension-domain suppliers now give the p=1 approximation/completeness route; both relevant current proof sections were read. Current critical embedding now requires nonempty Omega and has the correct ell^n component norm. Current higher-order source attribution was corrected away from Theorem 3.47; the extension-domain item corrected its reference locator but retained Theorem 3.47 in Source notes. Those historical repairs remain for lead routing against the exact pre-reader observations. No corrected current carrier is presented as the old defect. The independent raw hashes in the earlier tool output match `research/frontier-39-analysis-30-step5-hash-4-pre.json`; the frozen fingerprint alone was not used to infer that a file had been read.

The final batched proof-layout command was run once after all item edits and reflow: **32 items, 91 steps, 0 defects**. No item changed after that check.

Final findings routing check: every supplier subject is in current-run batch 4 and outside the assigned item scope; each consumer is assigned and its dependency closure reaches that exact supplier. All 13 supplier observations bind pre-reader hashes, and the read-only B-page has null observation/consumer fields.
