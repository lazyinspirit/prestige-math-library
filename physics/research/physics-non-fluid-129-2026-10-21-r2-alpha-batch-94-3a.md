# Batch 94 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-94`; original scope group `h` preserved.

The scope routes exactly two touched obligations, no reader/refuter findings and no page obligations. All nine current item raw hashes match the post-reader snapshot. Exact pre-reader bytes for both touched items were recovered in `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-baseline/items/`; their raw SHA256 values match the pre-reader snapshot. The actual differences agree with the reader report. No historical-byte uncertainty is needed.

## Item review and risk dispositions

### `def-csm-frontier-finite-rate-process`

Checked the complete Definition and ten declared supplier statements/status. Finite nonempty E, bounded continuous nonnegative rates and coordinate path events are explicit. H(s,s)=1 and dH/dt=-lambda H normalize the conditional next-jump law; singleton E, zero rates, s=T and T=0 give unit no-jump mass. The process is assumed, not asserted to exist without construction. Countable Choice is carried only for Lebesgue densities. No physical realization is claimed.

### `lem-csm-frontier-finite-jump-path-density`

Checked Proof 1.1, 1.2, 2.1 against the complete first-jump convention and declared measure/expectation statements. Successive conditional factors give the displayed density, including n=0. Removing survival factors and summing next-state rates bounds the n-jump tail by (M delta)^n on each small interval; increasing indicator sums use monotone convergence, then finite partition and finite expectation exclude explosion. Fixed endpoints are null under the continuous jump-time laws. T=0, M=0 and singleton E give no jumps. Countable Choice is explicitly inherited from Lebesgue measure.

### `lem-csm-frontier-finite-jump-feynman-kac`

Checked all three proof steps and exact supplier statements. Finite E and compact time bounds make every weight at most exp(T max||V||). Conditional no-jump, one-jump and at-least-two-jump contributions yield the stated forward weighted equation, with the loss -lambda_y G_y and potential -V_y G_y. Continuity gives both derivative directions and endpoint limits; coefficients are uniformly continuous on the compact interval. Iterated integral uniqueness gives C(Bt)^n/n! tending to zero, including B=0. T=0 is a value-only assertion. No unstated Feynman-Kac theorem is imported.

### `lem-csm-frontier-finite-rate-jump-count-expectation`

Checked Proof 1.1-3.1 against path density, nonexplosion, MCT and Tonelli statements. Nonnegative measurable simplex integrands and finite cube/state measures license each rearrangement. Marking one x-to-y jump factors prefix mass p_x(s), rate kappa_xy(s) and suffix mass one; nonexplosion normalizes the suffix. The bound P(any jump in [s,t])<=M(t-s) proves p continuity and validates Riemann/Lebesgue identification for T>0. T=0 gives zero count and oriented integral; zero-rate edges give zero expectation. No stationarity is used.

### `thm-csm-frontier-finite-rate-forward-equation`

Checked all three steps and declared suppliers. Conditional expansions have uniform remainders over finite E and compact time, with >=2 jumps O(h^2). They establish continuous marginals, both derivatives and p prime=pQ in the stated row convention. The vector 1-norm/maximum absolute row-sum bound is the correct one for dQ. Iterating the integral equation gives D(Bt)^n/n! and uniqueness; pi Q(t)=0 then yields the constant law. T=0 and zero rates are handled explicitly; no irreducibility or existence of a stationary vector is assumed implicitly.

### `def-csm-frontier-stationary-path-entropy`

Independently checked the full current Definition, exact pre-reader archive, reader repair and all four suppliers. Symmetric support alone does not define log(0/0); the revised full-measure set excludes finite sequences using zero-rate edges and infinite jump paths. The countable measurable strata have zero mass by the local path-density lemma; the statistic is assigned zero on their complement and is a measurable real random variable. Positive pi and positive reverse edges suffice for every evaluated logarithm. Empty sums, singleton E, T=0 and zero-rate graphs give zero. Detailed balance implies zero increments. Direct consumer fluctuation Proof 1.2-3.1 and ring Verification 1.2 use only positive-rate strata/almost-sure identities, so require no further repair.

### `thm-csm-frontier-finite-jarzynski`

Checked Proof 1.1-4.1 and every declared supplier statement. Finite C1 energies give strictly positive Z and continuous bounded potential beta E prime. Pairwise instantaneous detailed balance cancels generator terms at C_y=exp(-beta E_y)/Z_0; local weighted-ODE uniqueness identifies C with G and finite summation yields Z_T/Z_0. The work is a piecewise-continuous integrand almost surely. T=0, singleton E, vanishing rates and constant energies are admissible. Common shifts multiply Z_T/Z_0 by exp(-beta delta) and add delta to work/free energy; integral-of-a-derivative follows from the FTC primitive and zero-derivative uniqueness (MVT). Source Jarzynski section II equations (16)-(21) agrees; no empirical or finite-sample claim follows.

### `thm-csm-frontier-finite-path-fluctuation`

Checked every proof step and all fifteen dependency statements, including determinant-one change of variables and integral invariance. On positive-rate strata holding exponents cancel, pi ratios telescope and f/f_reversed=exp(S). Symmetric support makes zero-density strata null in both directions. Reversal is an affine involution with absolute determinant one on each time simplex, negates S and transports B to -B; summing nonnegative density integrals yields the stated sign and E exp(-S)=1 without assuming a density for S. Finite edge increments and integrable jump count give E|S| finite. The proved z-1-log z inequality gives E S>=0. T=0, n=0 and the one-state case work. The entropy null convention does not alter these integrals. No long-time asymptotic theorem is substituted for this finite-time proof.

### `ex-csm-frontier-biased-ring-entropy`

Checked all five Verification steps, eight suppliers, exact pre-reader archive and reader edits. N>=3 ensures the two neighbors are distinct, including N=3. Uniform inflow equals outflow (a+b)/N. On positive-rate paths each clockwise increment is log(a/b) and each reverse increment its negative; the new almost-sure qualification handles null forbidden-transition paths. Directed-count identities sum to aT and bT; logarithm monotonicity proves nonnegativity. Detailed balance forces a=b and conversely holds on every edge and nonedge. Positive rates connect the ring and give symmetric support, meeting every fluctuation-theorem hypothesis. T=0 and a=b give zero entropy and the measure identity still holds. No empirical observation or universal finite-sample claim appears.

## Routed decisions and consumer closure

`touched:94:def-csm-frontier-stationary-path-entropy`: **accepted_repair**, `repair_confidence: 1`, defect `physics-non-fluid-129-2026-10-21-r2-3a-b94-entropy-null-domain`. Exact pre-reader archive matches SHA256 662844f1949ac5b3b6d699256968bb50a5d87235ff15897fb919acc13f55593a; current item matches post-reader 7bc1f9cbce1d2c6fa53ead24ecff7025232b28e1055026c883a43bffb8224828. Independently checked all four suppliers and current Definition. Symmetric support permits zero rates in both directions, so the original blanket logarithm claim did not define the statistic on finite forbidden-transition paths. The reader now uses the density lemma to exclude countably many zero-mass strata, defines the sum only on the full-probability positive-edge finite paths and assigns zero elsewhere. Measurability and the no-jump boundary follow. Consumer thm-csm-frontier-finite-path-fluctuation Proof 1.2-3.1 already ignores zero-density sequences; ex-csm-frontier-biased-ring-entropy explicitly carries the almost-sure restriction. Search of current items/library found no outside item consumer. Accept the complete reader repair with no further item edit.

`touched:94:ex-csm-frontier-biased-ring-entropy`: **accepted_repair**, `repair_confidence: 1`, defect `physics-non-fluid-129-2026-10-21-r2-3a-b94-ring-as-qualification`. Exact pre-reader archive matches SHA256 877f727fe43ac07783c836789fd13e770bbc1da68b7bf90db014c132c870157c; current item matches post-reader ead588b7a263244f1b48df118ea11615944d8e88fa9abba350755d96008ff6e5. Checked all Verification steps and eight supplier statements. The almost-sure qualifier in the Example and Verification 1.2 correctly restricts the formula to paths using the two positive ring edges. Uniform stationary flow, N>=3 distinct neighbors, directed-count means aT and bT, both directions of detailed balance iff a=b, and every finite-time fluctuation hypothesis hold. Zero duration and equal rates give zero entropy. The clarification preserves the expectation and fluctuation identities; there are no item consumers of this example. Accept the reader repair unchanged.

The entropy null-domain issue is fatal to the original total definition, now repaired. The ring qualification is nonfatal explicitness about a random-variable identity, not a failure of its mean or fluctuation result. A null forbidden path (for example on a four-state ring, 0 to 2 followed by 2 to 3 when a differs from b) need not satisfy the displayed count formula under the entropy-zero convention, which explains the explicit almost-sure wording.

No outside item consumer, published supplier defect, withdrawal, in-run item edge, missing lemma or unresolved mathematical blocker was found. The only in-run cross-batch dependency is the unchanged A-page requirement on batch 88. The large-deviation page was inspected as contextual page inventory, not certified as an input to the finite-time proof. No TikZ/tikzcd diagrams occur; these density computations require no diagram.

## Source reading and limits

All 26 direct external mathematical suppliers were opened at their exact Definition/Statement and status; each is published context, not re-audited here. Checked Countable Choice for complete Lebesgue measure and linear volume change; bounded continuous functions satisfy the nondegenerate-interval comparison hypotheses; zero intervals use the oriented integral definition. Tonelli is used only for nonnegative measurable integrands on finite cubes and finite state sums; monotone convergence handles increasing count sums. MVT, logarithm derivative and integral linearity are used with their stated continuity, differentiability and integrability hypotheses.

Opened the primary full PDFs and read the relevant passages: [Seifert 2017](https://arxiv.org/pdf/1707.03759), sections 4.1-4.4, equations (30)-(40), PDF pp. 7-9 (zero-based pages 6-8); [Lebowitz-Spohn](https://arxiv.org/pdf/cond-mat/9811220), sections 2.1-2.2, equations (2.1)-(2.21), PDF pp. 4-7; [Jarzynski](https://arxiv.org/pdf/cond-mat/9707325), section I assumptions (8)-(11) and section II (13)-(21), PDF pp. 4-8. The time-dependent bounded-rate and uniqueness arguments are local; the thermodynamic assumptions in these sources do not establish a physical realization of the mathematical process. The finite-time proof includes the stationary boundary term rather than importing a long-time large-deviation result. Secondary Seifert 2012, Crooks and Touchette PDFs were opened for contextual checks; only the passages explicitly recorded here are claimed as read. No experimental dataset, finite-sample inference, measured parameter or physical entropy identification is asserted by these mathematics-domain items.

## Checks

Initial risk-report: nine HIGH/CRITICAL items, zero tool errors. All nine specific risk reviews are recorded in the owning proof contracts. Final risk-report with `--require-reviewed`: nine routed items, zero errors. No item bodies were edited during adjudication.

- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-94.proof-contracts.json --strict`: 9/9 items, 0 errors, 0 warnings.
- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/def-csm-frontier-stationary-path-entropy.md items/ex-csm-frontier-biased-ring-entropy.md`: one proof-bearing item checked, zero failures; definition has no proof steps.
- `node tools/physics-support/rendercheck.mjs items/def-csm-frontier-stationary-path-entropy.md items/ex-csm-frontier-biased-ring-entropy.md`: two files, YAML and KaTeX clean.
- Final `node tools/physics-support/proof-layout.mjs items/def-csm-frontier-stationary-path-entropy.md items/ex-csm-frontier-biased-ring-entropy.md`: two items, five steps, zero defects.
- Native locked defect-ledger append added the two closed repair rows and regenerated its view. Frontier dependency notes record the exact owned uses; no edge input changed.

An initial command-discovery attempt used nonexistent `proof-contracts.mjs`; the corrected singular tool passed above. This command-path error generated no defect row. A local binding probe initially compared the scope's reader-report hash to the prose report; checking the native implementation confirmed that this field binds `reader-findings-94.json`, whose actual hash matches exactly. The refuter JSON binding also matches. No historical artifact was changed.

No judging, decision stamping, source certification, engine gate battery, publication or commit was performed. No mathematical blocker remains in this dispatch.

## Final carrier currency

- `def-csm-frontier-finite-rate-process`: `4234343243fd7a1d4b9d3929843b78089dc27cc88c4001310813022b4799eda3` (unchanged post-reader bytes).
- `lem-csm-frontier-finite-jump-path-density`: `8815211a7157825751d26ef696ed562b51fd4e2441961b8f9250d153a0cc6516` (unchanged post-reader bytes).
- `thm-csm-frontier-finite-rate-forward-equation`: `0b1338cdc1e1bf58b14a9fe1c55c0fdfd18d290dd94bea36725fc6fbb15533c9` (unchanged post-reader bytes).
- `def-csm-frontier-stationary-path-entropy`: `7bc1f9cbce1d2c6fa53ead24ecff7025232b28e1055026c883a43bffb8224828` (unchanged post-reader bytes).
- `lem-csm-frontier-finite-rate-jump-count-expectation`: `88ff9fb5f1e07c21250cc386e8d6169a1fdbd6567adcb87cfdeff14c9e317555` (unchanged post-reader bytes).
- `lem-csm-frontier-finite-jump-feynman-kac`: `1f9e9c3719b83e26f7d4842c1ae1c997bfa6f89efa96af2d334c542ea3521c1e` (unchanged post-reader bytes).
- `thm-csm-frontier-finite-path-fluctuation`: `6b769baca2fdae1f36e81d1d1fe0d1c6a6ccd97d0428ab4730d4042c8616f1a0` (unchanged post-reader bytes).
- `thm-csm-frontier-finite-jarzynski`: `d34e8a4ebe643548259bf2fbc25979e7e3999efe0432a5f8e1f92d4d8622b413` (unchanged post-reader bytes).
- `ex-csm-frontier-biased-ring-entropy`: `ead588b7a263244f1b48df118ea11615944d8e88fa9abba350755d96008ff6e5` (unchanged post-reader bytes).
