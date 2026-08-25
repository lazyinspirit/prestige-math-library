# frontier-18 step-8 closure recovery — group a

## Summary

- Exact rows adjudicated: 65
- Outcomes: 64 `confirmed_fatal`, 1 `false_positive`, 0 `confirmed_nonfatal`
- Licensed repairs: 46 item-level repairs across batches 6, 7, and 8
- Cross-group findings raised: none
- Rows belonging to no group: none
- Null/capacity rows excluded from scope by the recomputed join: 1
  `lem-elementary-sets-admit-compact-inner-and-open-outer-approximations` · `deepseek-v4-pro` · `PAYMENT_REQUIRED`
- Direct recomputation against the live ledgers leaves 0 remaining exact group-a rows

## Rows

### cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative
- Repair: `citation-inflated` at `facts-block`
- `deepseek-v4-pro` · `d41043a88b6b2a2f1528a4601678cf67522a360031e7bb67bcef2cdd96ed2bc8` · `confirmed_fatal`
  Step 2.1 invokes the quotient rule, but the cited fact L4 states only the product rule and no listed fact supplies the quotient rule; the derivative computation is unsupported by its cited facts.
- `gpt-5.6-terra` · `d41043a88b6b2a2f1528a4601678cf67522a360031e7bb67bcef2cdd96ed2bc8` · `confirmed_fatal`
  Step 2.1 invokes the quotient rule, but L4 states only the product rule. Its cited facts therefore do not license the derivative calculation used to show the third curl coordinate vanishes.

### cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace
- Repair: `ill-typed-construction` at `definition`
- `gpt-5.6-terra` · `6ce7434cffe4996230c2642f713d0f42ec6a4907f52b984084e71d6afc64a071` · `confirmed_fatal`
  Step 4.1 applies the continuous-image theorem to C without establishing that C is connected. L7 only states C as a union of connected sets; it omits the cited definition's needed conclusion that this union is connected.

### def-complex-chain-and-cycle
- Repair: `ill-typed-construction` at `definition`
- `deepseek-v4-pro` · `4b301782ad9c7588d9cdafe1f74af44712564600ede6efbf5bc80b763fefcf4c` · `confirmed_fatal`
  The boundary definition subtracts two finite sums of integers but cites only finite sums in a commutative monoid and def-integers as a bare set. No cited fact establishes that the integers form an additive group or ring, so the subtraction is unlicensed.
- `gpt-5.6-terra` · `4b301782ad9c7588d9cdafe1f74af44712564600ede6efbf5bc80b763fefcf4c` · `confirmed_fatal`
  The boundary and negation use addition, subtraction, and additive inverses in Z, but the cited integer definition only gives the quotient set. It does not establish the additive commutative monoid required for the cited finite-sum definition, so these operations are not licensed.

### def-continuous-argument-and-holomorphic-logarithm-branches
- Repair: `false-or-overstrong-statement` at `remark`
- `gpt-5.6-terra` · `a88077ba4df6492b353d8fe1a5a8b1102f605c7f10f443625a2f43b6162a479a` · `confirmed_fatal`
  The final remark calls the principal logarithm the normalized holomorphic branch on the slit plane, but its only citation merely defines the principal logarithm and does not establish its holomorphy or exponential identity. That needs the later slit-plane corollary.

### def-lebesgue-measure-and-the-lebesgue-sigma-algebra
- Repair: `false-or-overstrong-title` at `title`
- `gpt-5.6-terra` · `d04d258770b26381ae6def1389c761fa1debee44fe47457732014a107a27894a` · `confirmed_fatal`
  The title calls L(R^n) a sigma-algebra and lambda_n a measure without assuming countable choice, but the definition itself says they are only a family and restricted set function until the cited theorem proves those properties under countable choice.

### def-the-induced-boundary-chain-of-a-c2-surface-patch
- Repair: `false-or-overstrong-statement` at `remark`
- `gpt-5.6-terra` · `7703f2eb1498e070646b996c385aaeaaec3591f4a2d8d6f28fe985d196898218` · `confirmed_fatal`
  The final remark falsely says C2 is used only to exchange mixed partials in the cited lemma. Its step 1.1 also uses C2 to make the parameter derivatives C1, so the pulled-back functions can be differentiated.

### def-wirtinger-operators-in-several-complex-variables
- Repair: `ill-typed-construction` at `definition`
- `gpt-5.6-terra` · `c456b4263328de456d32865c0d6447ba6c3ff7591dd7d524be05efeb7b677ef7` · `confirmed_fatal`
  In the displayed hypothesis for the differential identity, the summation scopes only the x term; the y term is outside the sum and contains a free k. Thus the asserted formula for the derivative is ill-formed as written.

### ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes
- Repair: `citation-inflated` at `facts-block`
- `deepseek-v4-pro` · `4854b852d4491c515e9990cc920bc9012fef5d0a271137ce33191c81ef451a55` · `confirmed_fatal`
  [L5] states FTC as if G'=f on [a,b] alone gives integral equal to G(b)-G(a), but thm-ftc-second-part requires a<b and f integrable; the fact is stronger than its cited source.
- `gpt-5.6-terra` · `4854b852d4491c515e9990cc920bc9012fef5d0a271137ce33191c81ef451a55` · `confirmed_fatal`
  L5 misstates its FTC citation: the cited theorem also requires a<b and that f be integrable, whereas L5 asserts the conclusion merely from G prime equals f on an interval.

### ex-cauchy-estimates-computed-on-a-bidisc
- Repair: `citation-inflated` at `facts-block`
- `deepseek-v4-pro` · `341813204945ca3b04f18e88c8e8b5e33d5fab44018da5e3a42bfad6f2b38c32` · `confirmed_fatal`
  Reject: Step 2.1 invokes the Cauchy estimates theorem via fact L1, but L1 drops the theorem's hypothesis that f be holomorphic on a polydisc with r<rho; no cited fact establishes exp(z0+z1) is holomorphic, so the bound is unlicensed.
- `gpt-5.6-terra` · `341813204945ca3b04f18e88c8e8b5e33d5fab44018da5e3a42bfad6f2b38c32` · `confirmed_fatal`
  Step 3.1 infers the mixed derivative from the coefficient using L2, but L2 states only the power-series expansion and its coefficients, not the coefficient-derivative formula. No cited fact licenses that inference.

### ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc
- Repair: `invalid-inference` at `proof-step`
- `deepseek-v4-pro` · `b968b7bdfb7dc3158ac20452c2cde82c015f00dd8200bfbaf3b4cfdf14df1d8e` · `confirmed_fatal`
  [L1] asserts coordinate functions are holomorphic with their derivatives and cites prop-algebra, but that item only covers sums/products/quotients of holomorphic functions and constants, not coordinate projections. Step 1.1 uses unsupported derivatives of z0 and z1, so the Jacobian computation is unlicensed.
- `gpt-5.6-terra` · `b968b7bdfb7dc3158ac20452c2cde82c015f00dd8200bfbaf3b4cfdf14df1d8e` · `confirmed_fatal`
  L1 inaccurately attributes holomorphy of coordinate functions to the cited algebra proposition. That proposition only preserves holomorphy of functions already known holomorphic, so it does not license step 1.1's use of coordinate holomorphy.

### ex-continuous-argument-along-a-spiralling-contour
- Repair: `citation-inflated` at `facts-block`
- `deepseek-v4-pro` · `95c16c58c8a2d49257d22c3af263120a4fb1892bedde94ef55b6436c13ccb4fb` · `confirmed_fatal`
  Step 3.1 asserts gamma(1)=2 by using exp(2 pi i)=1, but [L6] as stated omits exp(i pi)+1=0 from the cited cor and no cited fact gives cos(2 pi), sin(2 pi), or exp(2 pi i)=1, so the non-closedness endpoint comparison is unsupported.
- `gpt-5.6-terra` · `95c16c58c8a2d49257d22c3af263120a4fb1892bedde94ef55b6436c13ccb4fb` · `confirmed_fatal`
  Step 3.1 infers gamma(1)=2 from L6, but L6 does not establish exp(2 pi i)=1 or the needed sine and cosine values. Thus the claimed nonclosedness is not justified by the cited facts.

### ex-dixon-gluing-traced-on-an-annulus-cycle
- Repair: `false-or-overstrong-statement` at `statement`
- `gpt-5.6-terra` · `f0df3cee5a628b1748b6d49a870d49904756db3370fe0298b82fbd5c16a29500` · `confirmed_fatal`
  L5 states the chain index formula without requiring the point to lie off the trace. The cited definition defines the index only for points outside the trace, so L5 is an overstrong restatement.

### ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin
- Repair: `false-or-overstrong-statement` at `statement`
- `deepseek-v4-pro` · `2a2bbe4f41f62c46eb2ad77b705187b9d6df3b81482e01d40792ebf69955fab6` · `confirmed_fatal`
  The cited fact [L5] asserts sin phi > 0 on (0, pi), but the supplied statement of thm-sine-cosine-signs-monotonicity-and-ranges gives only monotonicity intervals and range, not sign positivity. The proof needs this for nonzero and outward normal, so step 1.1 is unsupported.
- `gpt-5.6-terra` · `2a2bbe4f41f62c46eb2ad77b705187b9d6df3b81482e01d40792ebf69955fab6` · `confirmed_fatal`
  L5 claims sine is positive on the interval from 0 to pi, but its cited theorem states only monotonicity intervals and ranges, not that sign conclusion. Step 1.1 relies on L5 to establish regularity.

### ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin
- Repair: `false-or-overstrong-statement` at `statement`
- `deepseek-v4-pro` · `845de79db3771a8f1201f96f19150ea8229578b3f02e1e385f0187e1adad2f4f` · `confirmed_fatal`
  The statement asserts zero flux through every sphere bounding a ball that misses the origin, but the proof only treats the specific translated unit ball B. No arbitrary radius or centre is introduced and no scaling or translation argument establishes the general case.
- `gpt-5.6-terra` · `845de79db3771a8f1201f96f19150ea8229578b3f02e1e385f0187e1adad2f4f` · `confirmed_fatal`
  The statement and title claim every sphere whose ball misses the origin, but the proof fixes only the unit ball centred at (0,0,2) and never introduces an arbitrary centre or radius; it proves zero flux only for that ball.

### ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc
- Repair: `invalid-inference` at `proof-step`
- `gpt-5.6-terra` · `6c1841f682e0c0e80abf1cfb71c9d3cbf1c2427cbd2b2b5431cc2540f55261ac` · `confirmed_fatal`
  Step 2.1 asserts that (1,0) lies on the topological boundary, but cites only step 1.1, which establishes neither that boundary membership nor the topological-boundary description. L2 states only the distinguished boundary.

### ex-periods-of-a-holomorphic-function-on-an-annulus
- Repair: `missing-hypothesis` at `proof-step`
- `gpt-5.6-terra` · `e70f56628b2085841f67164fad57c8518d109e0ad8d5265a0cf6756974769948` · `confirmed_fatal`
  Step 5.1 invokes step 4.1 for f(z)=1/z but provides no cited fact establishing that 1/z is holomorphic on A; L6 only evaluates the circle integral. Thus the required holomorphy hypothesis is unsupported.

### ex-power-series-expansion-of-a-geometric-quotient-in-two-variables
- Repair: `citation-inflated` at `facts-block`
- `deepseek-v4-pro` · `63177d1b00cb9ee315a4789a0e86d4e41784984884a891956bc51daf3c01c2ac` · `confirmed_fatal`
  [L3] misstates thm-power-series-define: it asserts holomorphy for any absolutely convergent multivariable power series on its region of convergence, but the theorem requires a coefficient bound on a polydisc and only concludes holomorphy there.
- `gpt-5.6-terra` · `63177d1b00cb9ee315a4789a0e86d4e41784984884a891956bc51daf3c01c2ac` · `confirmed_fatal`
  Step 2.2 claims convergence exactly when |z1|<1, but L1 states only the convergent direction. It never records or cites the divergence of the nonnegative geometric series when |z1| is at least 1, which is needed for the exact criterion.

### ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum
- Repair: `citation-inflated` at `facts-block`
- `deepseek-v4-pro` · `f7176913178ef04a2ec3eb067f20ba022d5e1765115977dbd16a28d4b8e5f024` · `confirmed_fatal`
  Step 2.1 cites L3, which gives only the diagonal Cauchy product series, not the independent double sum over m and n; equating them requires an uncited rearrangement or Fubini result, so the displayed expansion is not established as written.
- `gpt-5.6-terra` · `f7176913178ef04a2ec3eb067f20ba022d5e1765115977dbd16a28d4b8e5f024` · `confirmed_fatal`
  Step 3.1 misuses L4: uniqueness applies only after two geometrically bounded coefficient families with equal sums on one polydisc are supplied. The proof supplies neither a second family nor the required geometric bound, so L4 does not identify the coefficients.

### ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc
- Repair: `citation-inflated` at `facts-block`
- `gpt-5.6-terra` · `c04c66a4f49e55e77d64b10b97dbc33737a0662327a187e3ffded36758aa0461` · `confirmed_fatal`
  Step 3.1 invokes L1, which requires f to be continuous and separately holomorphic on a polydisc. The item neither proves nor cites any fact establishing those hypotheses for z0 z1; merely asserting that f is holomorphic does not license L1 as cited.

### ex-stokes-on-two-patches-spanning-the-same-circle
- Repair: `citation-inflated` at `facts-block`
- `gpt-5.6-terra` · `3472b6f09d99f63776291982effbfd53d8b204ffd18234e1b1323901f002ecfa` · `confirmed_fatal`
  Steps 1.2 and 1.3 assert regularity without proving it. F3 only states a consequence of regularity, not a criterion, and no cited step establishes the required injectivity and regular-patch hypotheses before Stokes is applied.

### ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes
- Repair: `ill-typed-construction` at `definition`
- `deepseek-v4-pro` · `c2555efc5465f7bf22d8106c7111a721f27131b0b5003e319732f70f8f919b77` · `confirmed_fatal`
  Step 2.1 applies L1, Green's identity for finite gluings, to the unit box, but L2 only establishes it is an elementary solid region; no one-piece finite gluing data or citation to the gluing definition is supplied, so the step is unlicensed.
- `gpt-5.6-terra` · `c2555efc5465f7bf22d8106c7111a721f27131b0b5003e319732f70f8f919b77` · `confirmed_fatal`
  Fact L5 misstates its citation: the FTC source also requires a<b and integrability of f; L5 asserts the conclusion from G'=f alone.

### ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation
- Repair: `citation-inflated` at `facts-block`
- `deepseek-v4-pro` · `b1d25b88134c92c08b89da5514f6705a602681d2df0ebfae8f10657f64585aeb` · `confirmed_fatal`
  Step 3.1 invokes strict monotonicity of cosine on (0,pi), but [L4] as stated records only signs and range and omits the monotonicity clauses of its cited theorem, so the injectivity argument is not licensed by the fact it cites.
- `gpt-5.6-terra` · `b1d25b88134c92c08b89da5514f6705a602681d2df0ebfae8f10657f64585aeb` · `confirmed_fatal`
  Step 3.1 invokes strict monotonicity of cosine, but L4 states only signs and ranges. Thus its injectivity argument is not licensed by the fact it cites.

### ex-the-divergence-theorem-on-the-closed-unit-box
- Repair: `citation-inflated` at `facts-block`
- `gpt-5.6-terra` · `edb0702c361369b51e9167ebf38d698a6338ef6c6201b4d817895dc61cc73baf` · `confirmed_fatal`
  Step 2.2 invokes F4 to conclude that the content of the unit square is 1, but F4 only equates the integral of 1 with content. No cited fact computes that content, so the numerical face fluxes are not licensed.

### ex-the-mobius-band-presented-by-two-regular-patches
- Repair: `citation-inflated` at `facts-block`
- `gpt-5.6-terra` · `6eb17eff0a82967ae4827edcdcaba31752b299732bb6d46cca008972dfcf2bc3` · `confirmed_fatal`
  Step 4.2 infers opposite oriented area vectors from det Dh=-1 and Psi2 composed with h=Psi1, but none of its cited facts supplies the needed chain-rule reparametrization rule. F2 concerns compatible presentations and cannot license this inference.

### ex-the-planar-divergence-theorem-on-a-rectangle
- Repair: `citation-inflated` at `facts-block`
- `gpt-5.6-terra` · `0e4d10bda2e8e2bd19fec412f240f33be27b55b4aee1cbea3f6135f688ec1e45` · `confirmed_fatal`
  [L1] misstates its cited corollary by omitting its hypotheses: the region must be a positively oriented finite elementary Green region and the field must be C1 on an open neighbourhood. The proof invokes [L1] without establishing the latter.

### ex-the-right-circular-cylinder-is-an-elementary-solid-region
- Repair: `invalid-inference` at `proof-step`
- `deepseek-v4-pro` · `47b556a3f4751d06c7d5f358b3dc4ca9de1cdcd3d6917c7c16a1f28488916858` · `confirmed_fatal`
  Step 4.1 says the projected interiors of the polar caps are the open disc; each actually misses the centre of the base disc, so the omitted set is not just the boundary circle and the coverage clause is not discharged.
- `gpt-5.6-terra` · `47b556a3f4751d06c7d5f358b3dc4ca9de1cdcd3d6917c7c16a1f28488916858` · `confirmed_fatal`
  [L4] is not faithful: the cited theorem states monotonicity intervals and ranges only, not the claimed positive and negative sign intervals for sine and cosine. Steps 3.2 and 3.3 rely on those unsupported sign claims.

### ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field
- Repair: `citation-inflated` at `facts-block`
- `gpt-5.6-terra` · `75acfaff1261275ca3652414dbc0eab6efbc5c0311a614e90e86dfe23e89f640` · `confirmed_fatal`
  [L1] is not a faithful restatement of its cited example's stated result: that result supplies an outward octant presentation, but does not state the oriented-area-vector formula. The formula appears only inside the cited proof.

### fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface
- Repair: `citation-inflated` at `facts-block`
- `gpt-5.6-terra` · `0f591c11ee8bcfdd8064735b889a96ffef03ca07673e4fa1f1b8eb2486d26ee4` · `confirmed_fatal`
  [F1] misstates its source by defining divergence for an unqualified field. The cited definition defines it only for a C1 vector field on an open set, and that hypothesis is omitted.

### fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure
- Repair: `citation-missing` at `proof-step`
- `deepseek-v4-pro` · `4b41dcf2ea6ed7c6c79af019149a47db4cd968834a2f6d99ac23b37372a1e5d4` · `confirmed_fatal`
  Step 1.1 asserts that counting measure restricted to the Borel sets is translation invariant, but its cited facts only define the counting set function and say it is a measure on the full power set; translation invariance is neither among those facts nor established in the step.
- `gpt-5.6-terra` · `4b41dcf2ea6ed7c6c79af019149a47db4cd968834a2f6d99ac23b37372a1e5d4` · `confirmed_fatal`
  Step 1.1 cites only the definition and measure property of counting measure. Neither fact establishes translation invariance under translations, so its cited facts do not license the asserted translation-invariant measure.

### fs-every-lebesgue-measurable-set-is-a-borel-set
- Repair: `missing-choice-scope` at `facts-block`
- `deepseek-v4-pro` · `f35512997afd95a4cbc946df17d42b4f4e00b75219613c16f722f310f22bb3cd` · `confirmed_fatal`
  [L1] and [L2] state the Cantor-set nullity and Lebesgue completeness unconditionally, but the cited items are proved only under the Axiom of Countable Choice. The item supplies only AC with no derivation of CC, so these facts are stronger than their sources.

### lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace
- Repair: `missing-hypothesis` at `proof-step`
- `gpt-5.6-terra` · `75c01a299db87adeddb00b7eebe909cb31e912835995099d65073419d00d5349` · `confirmed_fatal`
  Step 1.2 asserts the kernel integrand is continuous, but cites only existence of negative powers and the chain-integration definition. Neither establishes continuity of the reciprocal-power function, so its claimed well-definedness is unsupported.

### lem-complex-linear-real-differential-criterion
- Repair: `citation-inflated` at `facts-block`
- `gpt-5.6-terra` · `966dc53de4ab9161cea744df9debf7abdcc57c339d2dfdbf571b660e58ca8cfb` · `confirmed_fatal`
  L4 is stronger than its citations: the cited finite-sum definition only defines sums and proves enumeration independence; it does not state additivity or compatibility with scalar multiplication. Steps 1.1, 2.1, and 3.1 rely on this unstated fact.

### lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant
- Repair: `ill-typed-construction` at `facts-block`
- `gpt-5.6-terra` · `721556a30f0f77f1e82472beb853606dd380e0282438a554965ab00d9bd36f37` · `confirmed_fatal`
  L1 omits the cited theorem's required real endpoints a_i <= b_i and never defines R°, Rbar, a_i, or b_i. It is not a faithful, well-formed restatement, yet step 2.1 relies on it.

### lem-dixon-entire-gluing
- Repair: `invalid-inference` at `proof-step`
- `deepseek-v4-pro` · `a3bfcac60ef5cbeb45c42e26175e61a7264023895c3391d6fa00ceeb089a9ada` · `confirmed_fatal`
  Step 1.3 concludes h0 is holomorphic from L7 and L13, but those only describe the chain integral as a finite sum and algebraic distributivity; neither states finite linear combinations of holomorphic functions are holomorphic. Missing thm-algebra-of-complex-derivatives.
- `gpt-5.6-terra` · `a3bfcac60ef5cbeb45c42e26175e61a7264023895c3391d6fa00ceeb089a9ada` · `confirmed_fatal`
  Step 2.3 defines M_f as a supremum but cites only compactness and boundedness. Those facts do not establish that this nonempty bounded real set has a supremum; the required least-upper-bound fact is neither cited nor proved.

### lem-elementary-sets-admit-compact-inner-and-open-outer-approximations
- Repair: `invalid-inference` at `proof-step`
- `gpt-5.6-terra` · `05ee387a4ed80d39b95e20f1cc60c62d0b3fb0a33744919d6466091a591fdb3c` · `confirmed_fatal`
  Step 1.4 defines M as a maximum of finitely many endpoint absolute values, but none of its cited facts establishes that this finite nonempty set of reals has a maximum. That uncited existence result is essential to the boundedness conclusion.

### lem-integral-additivity-over-a-content-zero-almost-partition
- Repair: `citation-missing` at `proof-step`
- `deepseek-v4-pro` · `73fd5e09030a47b2598e782789b7be2cf7c0d262e37beac0d9be0cab547425f8` · `false_positive`
  Step 2.1 uses sup_A |f| while the statement permits A to be empty, since the empty set is bounded and Jordan measurable; for empty A this supremum is not a real number, so the claimed bound and the proof are not valid in that admissible case.
- `gpt-5.6-terra` · `73fd5e09030a47b2598e782789b7be2cf7c0d262e37beac0d9be0cab547425f8` · `confirmed_fatal`
  Step 1.1 asserts without proof or supporting fact that the boundary of an arbitrary nondegenerate rectangle has content zero. L4 only converts that assertion to Jordan measurability. This unsupported claim is needed to apply L3 to Q in step 5.1.

### lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one
- Repair: `invalid-inference` at `proof-step`
- `deepseek-v4-pro` · `c691659283550226c5b62ff3ae9af5a03674ca470c036bdc6935cce0638be6c8` · `confirmed_fatal`
  Step 1.3 asserts each A_k is Borel but its tags give only Lipschitz continuity and open/closed definitions; no cited fact makes the half-open cube or open/closed sets Borel, so the later Borel-image and measure-sum steps are unlicensed.

### prop-star-shaped-plane-domains-are-homologically-simply-connected
- Repair: `citation-inflated` at `facts-block`
- `deepseek-v4-pro` · `a7e10f5f6518d6fa9e7dc7094b44eec34bf5e20df018ebb7cb2e8cad91d87d9e` · `confirmed_fatal`
  Step 1.2 uses L5 to call 1/(z-p) holomorphic but L5 omits the algebra theorem's clauses that constants and the identity are differentiable with derivative 0 and 1, so differentiability of z-p is never established and the quotient rule does not license the step.

### thm-componentwise-holomorphy-in-several-complex-variables
- Repair: `citation-inflated` at `facts-block`
- `gpt-5.6-terra` · `daa67cc198313434443e1fc4fd010c1fd6667efb019a468fe0756aa2cf97cb59` · `confirmed_fatal`
  L6 overstates its citations: the finite-sum definition only defines sums and proves enumeration independence, not additivity or termwise scaling. Thus its cited facts do not license the finite-o sum step in 2.2.

### thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment
- Repair: `citation-missing` at `proof-step`
- `deepseek-v4-pro` · `da8de84444635bcaf58000a36b4d0ae574903653b44e8b9dabc917ecbf43778d` · `confirmed_fatal`
  Step 3.1 applies L13 to telescope complex numbers, but the cited lem-finite-sum-laws is stated only for real sequences; no complex finite-sum telescoping fact is cited, so the final equality is unlicensed.
- `gpt-5.6-terra` · `da8de84444635bcaf58000a36b4d0ae574903653b44e8b9dabc917ecbf43778d` · `confirmed_fatal`
  L13 cites a finite-sum lemma stated only for real sequences, but step 3.1 applies it to the complex values lambda(t_i). No cited complex telescoping identity licenses that step.

### thm-elementary-volume-is-well-defined
- Repair: `invalid-inference` at `proof-step`
- `deepseek-v4-pro` · `e21e43cc5caf80f87dd32dc62c2514336f7d7d262c06c03ebc8677f78e1bcb23` · `confirmed_fatal`
  Step 1.2 asserts finite sums in [0,+infinity] are monotone termwise, but its cited facts do not include monotonicity for finite sums, and its claim that in the infinite case both sides of each inequality are +infinity is false when the smaller term is finite. So the step is unjustified.
- `gpt-5.6-terra` · `e21e43cc5caf80f87dd32dc62c2514336f7d7d262c06c03ebc8677f78e1bcb23` · `confirmed_fatal`
  Step 2.1 widens sums of volumes that may be +infty, but cites F1, which applies only to real sequences. None of its cited facts establish zero-padding or splitting for extended nonnegative sums; step 1.2 would be needed but is not cited.

### thm-global-cauchy-integral-formula-homology
- Repair: `citation-inflated` at `facts-block`
- `gpt-5.6-terra` · `fabd7f83f660f95af74f2e420ec80027f9113cee322340788932e4aa761b9249` · `confirmed_fatal`
  L3 omits the cited definition's required hypothesis that the integrand is continuous on the chain trace, so it asserts the chain integral formula for arbitrary f although the cited item only defines it under that condition.

### thm-holomorphic-logarithms-homologically-simply-connected-domains
- Repair: `citation-missing` at `proof-step`
- `deepseek-v4-pro` · `732a9814eaf3b86ddc0fef827eea41edd370273d9a86a8a7ee17e1620f978b1a` · `confirmed_fatal`
  Step 4.1 uses exp(w0)exp(-w0)=1, but no cited fact provides the exponential's multiplicative inverse property; L3 only states the derivative. The step is unlicensed and the proof does not rigorously establish f=exp(F).
- `gpt-5.6-terra` · `732a9814eaf3b86ddc0fef827eea41edd370273d9a86a8a7ee17e1620f978b1a` · `confirmed_fatal`
  Step 4.1 uses f(z0) times exp(-w0)=1, but its cited facts do not state the exponential addition or inverse law needed for that identity. L3 only gives that exp is entire with derivative exp.

### thm-homological-simple-connectivity-equivalences
- Repair: `citation-missing` at `proof-step`
- `gpt-5.6-terra` · `743667143914f6c01c7b808b7dd1caf4e698fd50aeeec4475aacc24e3b9b4bbf` · `confirmed_fatal`
  Step 1.2 concludes f(z0) exp(-w0)=1 from exp(w0)=f(z0), but no cited fact gives the exponential addition or reciprocal identity needed for exp(w0) exp(-w0)=1. L12 only proves nonvanishing.

### thm-lebesgue-measure-under-dilations-and-reflections
- Repair: `invalid-inference` at `proof-step`
- `gpt-5.6-terra` · `14b56dd54c6c2768cf19f02f2b8606bd62af8143313eea7971feca7eff020fe6` · `confirmed_fatal`
  Step 1.2 asserts that multiplication by a positive real is an order isomorphism of the extended nonnegative reals and carries infima to infima, but F3-F5 do not establish either property. F4 only gives selected multiplication definitions, so this key move is uncited.

### thm-winding-number-of-a-cycle-is-integer
- Repair: `invalid-inference` at `proof-step`
- `gpt-5.6-terra` · `24fd06f375c8261c0e5d338b46567d1137f57b3cbea67cf59e406296af6ede48` · `confirmed_fatal`
  Step 5.1 cancels 2 pi i to conclude n(Gamma,p) is an integer, but its only cited fact L10 says integers form a ring; no cited fact establishes that 2 pi i is nonzero or permits cancellation in C.

## Gates

- `precheck` on the repaired/touched group-a items: pass
- `depcheck` on the repaired/touched group-a items: pass (repo-wide warnings only)
- `rendercheck` on the repaired/touched group-a items: pass
- `proof-contract --strict` on the repaired/touched scoped items in batches 6, 7, 8: pass
- `boundary-audit` across batches 6, 7, 8: pass
- `citation-fidelity --fail-on-missing-quote` across batches 6, 7, 8: pass; one widening candidate remains outside this recovery scope
- `risk-report --require-reviewed` across batches 6, 7, 8: pass
- `finite-smoke` across batches 6, 7, 8: pass
- `step8-guard` from `pre-step8`: pass; every changed item is licensed by a confirmed fatal row
- `step8-scope check --run frontier-18`: pass for partition integrity; the run still reports 1 routed open rejection outside group a
- Whole-level `judge-closure` recomputation via `tools/level-coverage.mjs --judge-only ... --allow-pending-rejudge` did not complete within this turn; the on-disk closure file stayed stale, so group-a closure is recorded from the direct ledger join instead
