# Same cycle1 foundation refinement

Root requested this completion before native integration. It is part of the first owner cycle, not a second review cycle. No canonical or control carrier, hash, validator, test, readiness or gate was written or run.

The actual complete bodies of `thm-algebra-of-derivatives`, `thm-chain-rule`, `thm-sine-and-cosine-derivatives`, `thm-termwise-differentiation-of-a-real-power-series`, `lem-derived-and-integrated-power-series-have-the-same-radius`, `lem-sine-and-cosine-series-converge-everywhere`, `thm-eulers-formula`, `lem-cauchy-product-of-absolutely-convergent-complex-series`, `lem-binomial-theorem-over-complex-numbers` and `thm-ratio-test` were inspected. The published compact-subinterval power-series uniform-convergence statement and proof were inspected. The actual complex exponential entire-derivative theorem and Cartesian-form corollary were also read, but the proposal uses the smaller Euler/componentwise route instead of importing holomorphy machinery.

`thm-algebra-of-derivatives` and `thm-chain-rule` are explicitly real-valued. They are now used exactly within that domain. For complex-valued functions of real z, define f'=u'+iv', expand products into their two real components, and apply the real derivative rules to those components. Euler's formula plus the proved sine/cosine derivatives then gives (exp(iz))'=i exp(iz) directly. This avoids silently applying a real-valued theorem to a complex-valued function.

The relocated radial lemma has these additional explicit deps and Facts:

- `thm-sine-and-cosine-derivatives` and `thm-eulers-formula`: exact real-parameter derivatives, including exp(iz) by components; Facts F3.
- `thm-termwise-differentiation-of-a-real-power-series` and `thm-power-series-uniform-on-compact-subintervals`: repeated finite differentiation inside infinite radius and control of the remaining origin-series tail; Facts F4.
- `thm-ratio-test`: each intermediate D^r(sin z/z) series has infinite radius. Step2.1 now gives its full coefficient formula and nonzero consecutive-term ratio, removes zero initial terms before applying the actual nonzero-term ratio-test contract, and handles z=0 directly.

The new enclosure theorem has these additional explicit deps and Facts:

- `thm-sine-and-cosine-derivatives`, `thm-eulers-formula`: new F4, with the real-component product-rule argument and the existing real derivative deps.
- `lem-cauchy-product-of-absolutely-convergent-complex-series` and `lem-binomial-theorem-over-complex-numbers`: new F5. Step1.1 now invokes the actual product theorem and finite binomial theorem for exp(-iz) exp(iz)=1.
- `thm-ratio-test`: new F6, used for the uniformly finite positive absolute-series bound C_B in step2.2. No missing value-at-zero ratio is invoked.

The algorithm's stage order is now explicit: obtain the fixed box or call I_q first, reject/skip nonpositive represented-point boxes, set a and b from that actual box, and only then choose M=max(q,ceil(2b)) and p=q. This changes no domain or method; it removes a forward reference in the procedural description.

All original Statements, Definition sections of the two relocated symbolic carriers, and both consumer defining sections remain unchanged. The numerical algorithm's operational wording is clarified only in the research proposal before native authoring. Complete revised typed carriers remain in `proposed/items/`. This adds no new item or pair beyond the same three proposed new IDs.

`dependency-inspection.json` was refreshed from the final proposed deps. `declared-dependency-closure-map.json` now supplies every explicit edge in the relevant projected batch25 closure for root integration. It still has 1,078 items, no read/missing-source errors and no residual batch55-owned supplier after the two-ID rehome. The new published deps were already within the prior transitive closure. These are read-only source dependency observations, not validation or certification.
