# frontier-18 step-8 adjudication — group a

## Summary

- Rejection rows adjudicated this round: 51
- Outcomes: 49 confirmed fatal, 2 false positive, 0 confirmed nonfatal
- Distinct repaired items: 33
- False-positive-only items: ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation, ex-the-mobius-band-presented-by-two-regular-patches
- Cross-group findings raised: none

## Gates

- `precheck` on the touched proof-bearing items: pass
- `rendercheck` on the touched items: pass
- `depcheck` repo-wide: pass with pre-existing warnings only
- `proof-contract --strict` on the merged group-a batch contracts: pass
- `boundary-audit --fail-on-contradicted` across batches 6/7/8: pass
- `citation-fidelity --fail-on-missing-quote` across batches 6/7/8: pass
- `finite-smoke` on the carried obligation: pass
- `risk-report --require-reviewed` on the touched proof-bearing items: pass
- `step8-guard` from `pre-step8`: pass
- `step8-scope check --run frontier-18`: pass

## Adjudications

### cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (logic) · d5ad2b7a83337ab7cbf8598fba92d30702cd51cb804cea2ff3ec4a94c023c077
  Step 4.1 asserts that U is connected, a required hypothesis of the false statement, but gives no argument or cited fact establishing connectedness; its reflection argument proves only that U is not star-shaped.

### def-complex-chain-and-cycle
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (other) · 6081f0c12ce30a9f15b50232fe752924486d38cf69715b331e6fefe74ce4f096
  The remark claiming two contours between the same pair of distinct points with coefficients +1 and -1 form a cycle is false as stated when the contours have opposite orientation: the boundary is -2 at one endpoint and 2 at the other.
- gpt-5.6-terra · confirmed_fatal (other) · 6081f0c12ce30a9f15b50232fe752924486d38cf69715b331e6fefe74ce4f096
  The remark on cycles is false without an orientation condition: a contour from 0 to 1 with coefficient 1 and one from 1 to 0 with coefficient -1 run between the same pair, but the boundary has values -2 at 0 and 2 at 1.

### def-the-induced-boundary-chain-of-a-c2-surface-patch
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (other) · f5d941d6b9bd43a4037cf274f7385a5c84d64d83b4b7810fb3cf5b102c31ec6b
  The final remark claims C2 regularity of phi makes P-star and Q-star differentiable. But the definition permits F to be merely continuous, for which these pullbacks need not be differentiable; F must be C1.

### def-wirtinger-operators-in-several-complex-variables
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (other) · 3d604c9bf877cf8a82d16e1d957f61ca9ca7b1afa5de45c1fbd6c0b2773d03ad
  The definition never introduces a point a in U. Its differential clause nonetheless writes Df(a) and evaluates partials at a, so a is out of scope; the preceding unnamed point does not bind it.

### ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · b84de96ae5565bb52ac6edf22fc0c1c15447bfa22c9c6392dfbe105a2be478fd
  F2 is not a faithful statement of the cited definition: it omits compactness and the supplied simple descriptions in all three directions, stating only a one-way consequence. Step 1.1 then uses it as a converse to certify the pieces elementary.

### ex-cauchy-estimates-computed-on-a-bidisc
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · 87ea107653c0811be22b052acff2468017b0e7720b1a7dffda007eeec9fba8ce
  Fact L1 omits the alpha-factorial factor in the cited Cauchy estimate. Step 2.1 then derives a bound containing that factor from L1, so its cited fact does not state the inequality it is used to justify.

### ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · 551f74b082f3191237bc4487ca4b2d0230cf58fd3b519155eff40a4ed41ad384
  L4 overstates its citation: the cited corollary requires equidimensional holomorphic maps, whereas L4 asserts determinant multiplicativity for any composite. Determinants of the individual Jacobians need not exist for a general holomorphic composite.

### ex-continuous-argument-along-a-spiralling-contour
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · 555909f3357bc7eff2d6f3e117955086a43e6fda579568840739545bd671c635
  Step 3.1 cites [L4] for log 2 nonzero, but [L4] only states continuity and log 1 = 0, omitting strict increasing from thm-natural-logarithm-laws. The claim that log 2 + 2 pi i is not in 2 pi i Z is therefore unlicensed.

### ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · 25ef90fa93c1e6c5571cde887567fba21bf006914dc511201ff9253086e1af6d
  [L5] attributes sin 0 = 0 to its two cited items, but neither states that value; it appears only in the separately cited sine-derivatives theorem.

### ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (logic) · 926ba5ae62afbdaa007aa8516c70c73a7ce9af5bacadd3849d90d69cb2d9576d
  Step 2.2 asserts that F is C1 near B without establishing it. Step 1.1 computes only the three diagonal partial derivatives, so it neither proves all component partials nor their continuity; therefore the C1 hypotheses needed to define divergence and apply L1 or L5 are unmet.

### ex-periods-of-a-holomorphic-function-on-an-annulus
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · c3faa46716403c4f61d28617d707205c4d945ab48e49963b0b28ce5f6d8a8521
  Fact [L4] states a chain repeated with integer coefficients has proportional index and integral, but thm-winding-number-chain-laws only proves additivity and negation; this stronger claim is unsupported and step 4.1 uses it for the last equality.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · c3faa46716403c4f61d28617d707205c4d945ab48e49963b0b28ce5f6d8a8521
  Step 1.2 does not establish that kC is a cycle. L4 only preserves cyclicity under sums and negation, and L7 gives only integration and index definitions; neither says the one-term chain C is a cycle. L3 omits its cited theorem's closedness conclusion.

### ex-power-series-expansion-of-a-geometric-quotient-in-two-variables
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · 62911d5abb3f3dda3d9e87485e28b82376c236148625c0d023efbf4333a12dff
  L1 states the complex geometric series but cites thm-geometric-series, which is only for real r, so it strengthens the cited fact. Step 3.1 also uses L2 to call z0/(1-z1) holomorphic without establishing holomorphy of its numerator and denominator.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · 62911d5abb3f3dda3d9e87485e28b82376c236148625c0d023efbf4333a12dff
  L1 misstates its sources: thm-geometric-series and lem-geometric-sequence-null are stated only for real inputs, but L1 asserts the complex geometric-series criterion and complex limit for every w. No cited item states that extension.

### ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (logic) · 1d8935c789e03d2d7e243ea9e1c3fd4b133b499cbd9ebec3604d5aa6aa75c52b
  Step 2.1 equates the Cauchy product with the iterated double sum over m,n, but L3 only gives Cauchy product and L4 is the binomial theorem; no rearrangement or Fubini fact is cited to license the reindexing. The binomial coefficient closed form is also used uncited.
- gpt-5.6-terra · confirmed_fatal (logic) · 1d8935c789e03d2d7e243ea9e1c3fd4b133b499cbd9ebec3604d5aa6aa75c52b
  Step 2.1 invokes the factorial formula for binomial coefficients, but neither L3 nor L4 states it; L4 only gives the binomial theorem. Thus the conversion of Cauchy-product coefficients to 1 divided by m factorial times n factorial is uncited.

### ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · cdf9212a1640effd036a93798ad07aaa9689175dfed6b417b0a491a181fa7e63
  Step 3.1 cites [L3] for the claim that displayed coefficients match derivatives and are the power-series coefficients, but [L3] states only smoothness and omits the coefficient formula; uniqueness needed for 'the' expansion is never cited.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · cdf9212a1640effd036a93798ad07aaa9689175dfed6b417b0a491a181fa7e63
  Step 3.1 cites L3 for the assertion that derivatives determine the displayed coefficients, but L3 only says holomorphic functions are smooth; it contains no coefficient formula. The cited fact does not license that comparison.

### ex-stokes-on-two-patches-spanning-the-same-circle
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · a2d41a2c854e28515faa11a4c7aa8f5481b7d3a2a9fe0e4f89c17c2b42917497
  Step 1.3 asserts sin phi > 0 on (0,pi/2) using only L2,L3,L4, but those facts give derivatives, the Pythagorean identity, and endpoint values, none of which imply positivity. So the hemisphere cross product nonzero and injectivity claims are unlicensed.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · a2d41a2c854e28515faa11a4c7aa8f5481b7d3a2a9fe0e4f89c17c2b42917497
  Step 1.3 claims that the third coordinate cos phi fixes phi, but its cited facts give only derivatives, an identity, and endpoint values; none establishes cosine is injective on the stated interval. The required injectivity is therefore not licensed.

### ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · c14a4b1ae16297dc6c8b46a6a5b52451b99cbc4bd8e28ec571231d4d0fe965f6
  Fact L4 inaccurately restates its cited Fubini theorem: it omits the bounded Jordan domain, integrability, and almost-everywhere section hypotheses, claiming unconditionally that it computes a multiple integral by iterated sections.

### ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · false_positive · 78b2805a0a74264f1084af90fdacfe5ede6fb7d88f13f65f053f7fee7d5df111
  Step 3.3 assigns upper and lower x sublists by sign of cos theta in all four azimuth quarters citing L4, but L4 states only cosine decreasing on [0,pi], not its increasing behaviour on [pi,2pi]; step 3.2 also needs cos pi over 2 equals zero from uncited L5. The classifications are not licensed by the cited facts.
- gpt-5.6-terra · confirmed_fatal (other) · 78b2805a0a74264f1084af90fdacfe5ede6fb7d88f13f65f053f7fee7d5df111
  Step 6.1 uses F1 backwards. F1 says an elementary solid has such a presentation, not that a set with one is elementary; it omits the cited definition's compactness and three simple-description requirements.

### ex-the-divergence-theorem-on-the-closed-unit-box
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · 774a40c62ef6fa39a525cde182bc85d86e6dbabf203a8fd4a3dedd2d59ba0647
  Step 2.2 converts the integral over S to an iterated integral citing only L4 and L5, which are one-variable facts and do not justify Fubini; the missing citation is L3.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · 774a40c62ef6fa39a525cde182bc85d86e6dbabf203a8fd4a3dedd2d59ba0647
  Step 2.2 rewrites the integral over the two-dimensional square S as an iterated integral, but its tag cites only L4 and L5. That move requires the Fubini result L3, which the step does not cite.

### ex-the-mobius-band-presented-by-two-regular-patches
- Disposition: false positive; no content change.
- gpt-5.6-terra · false_positive · 1ba74e6e8cb46bb750b3128f0e7f7f6028bed53061c48d5f8faa4c4222c3bbb1
  Step 4.1 claims induced normals agree on all of the closed K1 overlap, but on its endpoint strips one parameter lies on a patch boundary, where F4 defines no induced normal. The title makes the same unqualified claim.

### ex-the-right-circular-cylinder-is-an-elementary-solid-region
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (logic) · 9c49404ddb8d59e018ce54b8e5372326be514bb4eb51526a7cf7af838aa8ef26
  Step 4.1 falsely says the bottom cap's projected interior misses the positive x-axis; since kappa minus has seam theta=0 mapping to (0,r), it misses the positive y-axis. The omitted set is still content zero, but the stated identification is false.
- gpt-5.6-terra · confirmed_fatal (logic) · 9c49404ddb8d59e018ce54b8e5372326be514bb4eb51526a7cf7af838aa8ef26
  Step 2.2 proves only the overlap condition. It never verifies that the six maps are regular patches or that their images cover the cylinder boundary, both required for a compatible finite patch presentation; thus step 5.1 cannot apply F1.

### ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (logic) · 5a999c006b4ea52257b24477e43f491e07b052c652ef578b670e7cf238690872
  Step 2.1 integrates the continuous integrand R cubed sine phi over an octant but cites only Fubini, FTC, and derivative facts; none of these establishes Riemann integrability of a continuous function on a compact Jordan set, so the flux integral is unjustified.
- gpt-5.6-terra · confirmed_fatal (logic) · 5a999c006b4ea52257b24477e43f491e07b052c652ef578b670e7cf238690872
  Step 2.1 computes only one octant and then multiplies by eight. F3 only permits summing patch fluxes; no cited fact or calculation establishes that the other seven patch fluxes equal the computed one.

### fs-every-lebesgue-measurable-set-is-a-borel-set
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · a3e5de0a8498b25666bd0f3f3a34ce79bbd1a67f98ab62c041f23f32cf10b23f
  Fact F2 omits the cited theorem's restriction that n is at least 1. As written it applies at n equals 0, where the Borel sigma algebra of R to the 0th power has one member, not continuum.

### lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · a28397c469dd6bbe4d9a06138f473cb278e8fcde227a1cbf874314613ef66adb
  Step 1.2 asserts the map zeta to (zeta-z)^-n is holomorphic and hence continuous, but cites only the power definition and differentiability-implies-continuity; it never cites the product or reciprocal rule, so the integrand continuity needed for the chain integral is unlicensed.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · a28397c469dd6bbe4d9a06138f473cb278e8fcde227a1cbf874314613ef66adb
  Step 1.2 claims the kernel is holomorphic by products and nonvanishing quotients, but its tag cites no fact establishing those derivative rules. L6 and L9 only concern powers being defined and differentiability implying continuity.

### lem-complex-linear-real-differential-criterion
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · b3a3f0144cf91b3787098743900793db6da6c982aea76e4b1312a4b9ec0e8e9e
  Fact [L4] asserts finite sums in C may be regrouped and scaled termwise, but the cited definition only defines a finite sum and proves independence of enumeration; neither it nor the complex-field theorem states those laws, so the finite-sum algebra in steps 2.1 and 3.1-3.2 is unlicensed.

### lem-dixon-entire-gluing
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (logic) · ea0cffd154b341d88c4b5ec7601798a6044778d60cdf558dba541a07089ca3f2
  Step 2.3 uses h1(z) for every point with |z|>R0, but h1 was defined only on Omega0. R0 only bounds the trace and does not ensure such a z is in Omega0; the extended Cauchy transform was not named there.

### lem-elementary-sets-admit-compact-inner-and-open-outer-approximations
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · 05ee387a4ed80d39b95e20f1cc60c62d0b3fb0a33744919d6466091a591fdb3c
  F12 restates only the plus-infinity clause of def-extended-reals, omitting minus-infinity addition, yet step 1.2 uses a_i+s_i when a_i is minus infinity. The translation formula for boxes with lower parameter minus infinity is therefore unlicensed.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · 1304a4941527311a5567415178a0392ecf260fd5cb1375db120ad7e8afa9869c
  Step 1.2 uses extended addition for minus-infinity lower endpoints but cites only F12, which defines addition only in the plus-infinity cases; the translate identity for boxes is therefore unlicensed for such parameters.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · 1304a4941527311a5567415178a0392ecf260fd5cb1375db120ad7e8afa9869c
  Step 1.2 handles boxes with a negative-infinity endpoint, but [F12] only gives an addition clause for positive infinity. It never defines or licenses negative infinity plus a real, so the translated-box formula is unsupported for unbounded boxes.

### lem-integral-additivity-over-a-content-zero-almost-partition
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (logic) · 5e89bda3031e1a22909d94f03c64737b1ee2f5476f8db2f4bb048b5a22af650b
  Step 1.1 cites L5 to show each face of Q has content zero, but for m=1 a face is a singleton and L5 requires a nondegenerate rectangle in R^0, which it does not cover. Step 2.1 also uses sup_A|f| without ruling out A empty.
- gpt-5.6-terra · confirmed_fatal (logic) · 5e89bda3031e1a22909d94f03c64737b1ee2f5476f8db2f4bb048b5a22af650b
  Step 1.1 uses L5 to make every face of Q content zero, but for m=1 the faces are points and L5 applies only to graphs over rectangles in positive-dimensional space. Thus L5 is overstated and the proof never establishes that Q is Jordan measurable in the stated m=1 case.

### lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (dependency_citation) · 77a670b8be0bb6aabb75ebcfeab444c79935cefdbd9ea8b865af45801c8733e8
  Step 1.3 concludes each A_k is Borel citing [F5], but [F5] only defines open/closed sets and finite intersections of open sets; it never mentions the Borel sigma-algebra. Thus the later claim that T[A_k] is Borel is unsupported.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · 77a670b8be0bb6aabb75ebcfeab444c79935cefdbd9ea8b865af45801c8733e8
  Step 1.3 claims the unit cube and the sets A_k are Borel, but F5 only defines open and closed sets and finite intersections; no cited fact states that open or closed sets are Borel. Later Borel-image and measurability uses are therefore unsupported.

### thm-componentwise-holomorphy-in-several-complex-variables
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · edb88b9d63177634af63182778ac67e841f56d52ca3f40b98f58d6bed1207650
  L3 overstates its citations: their componentwise limit result applies only to functions with domain a subset of the real line, but L3 asserts it for maps generally. Step 2.1 then cites L3 for a limit as h tends to zero in complex m-space.

### thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (logic) · 0da6ab6b57b29e3636f4f170b87fead45288532ad73cb41cb127cc87a13dcbe7
  Step 3.1 cites [L7], the contour concatenation additivity fact, to justify telescoping a finite complex sum, but [L7] does not license that algebraic move. Step 4.1 also cites [L8] for a singleton zero convention that [L8] does not state.
- gpt-5.6-terra · confirmed_fatal (logic) · 0da6ab6b57b29e3636f4f170b87fead45288532ad73cb41cb127cc87a13dcbe7
  Step 4.1 mis-cites L8: that theorem only asserts existence of the integral, not a singleton zero-integral convention, so it does not justify the claimed value when a=b.

### thm-elementary-volume-is-well-defined
- Disposition: repaired under confirmed-fatal rows.
- deepseek-v4-pro · confirmed_fatal (logic) · 13645f38e269f96072a8cfdb675de262ee355480330a9a93f3245fcb7bd13945
  Step 1.2's monotonicity argument is false: it says the successor step adds the same nonnegative extended number to two comparable partial sums, but the termwise numbers a_k and b_k need not be equal, so the induction as written does not prove monotonicity.
- gpt-5.6-terra · confirmed_fatal (logic) · 13645f38e269f96072a8cfdb675de262ee355480330a9a93f3245fcb7bd13945
  Step 1.2 does not establish its claimed finite-sum algebra: its induction for additivity needs associativity and commutativity of extended-real addition, and monotonicity needs order compatibility. F1-F4 state none of these, yet step 3.1 relies on them to interchange sums.

### thm-global-cauchy-integral-formula-homology
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · d5eca87c232936df05e7fc46e8583067ab81b61f76db1ee46998de12efd5d3ab
  Step 1.3 forms and splits the chain integral of f(zeta)/(zeta-z), which requires f to be continuous on the trace. It uses holomorphic-implies-continuous but neither cites nor states that fact; L3 and L5 do not supply it.

### thm-homological-simple-connectivity-equivalences
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (dependency_citation) · 5f93f6b92bea99062ab2812994a9da1356f7e515a962b3c29a0612a5ada1496a
  Fact L9 states the chain-rule formula without the open-domain and differentiability hypotheses required by its cited theorem, so it is not a faithful restatement of that dependency.

### thm-lebesgue-measure-under-dilations-and-reflections
- Disposition: repaired under confirmed-fatal rows.
- gpt-5.6-terra · confirmed_fatal (logic) · 22966c138a280a691b29b0248350de5fc6d168cc48c05d2706cdc9361e781771
  Step 2.1 says dilation scales partial sums and the total cover cost, but its cited F2 only gives a finite product law. No cited fact establishes scaling of finite sums or nonnegative extended series, so the equality of the cover-cost infima is unsupported.

## Changed Items

- cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative
- def-complex-chain-and-cycle
- def-the-induced-boundary-chain-of-a-c2-surface-patch
- def-wirtinger-operators-in-several-complex-variables
- ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes
- ex-cauchy-estimates-computed-on-a-bidisc
- ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc
- ex-continuous-argument-along-a-spiralling-contour
- ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin
- ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin
- ex-periods-of-a-holomorphic-function-on-an-annulus
- ex-power-series-expansion-of-a-geometric-quotient-in-two-variables
- ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum
- ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc
- ex-stokes-on-two-patches-spanning-the-same-circle
- ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes
- ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation
- ex-the-divergence-theorem-on-the-closed-unit-box
- ex-the-right-circular-cylinder-is-an-elementary-solid-region
- ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field
- fs-every-lebesgue-measurable-set-is-a-borel-set
- lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace
- lem-complex-linear-real-differential-criterion
- lem-dixon-entire-gluing
- lem-elementary-sets-admit-compact-inner-and-open-outer-approximations
- lem-integral-additivity-over-a-content-zero-almost-partition
- lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one
- thm-componentwise-holomorphy-in-several-complex-variables
- thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment
- thm-elementary-volume-is-well-defined
- thm-global-cauchy-integral-formula-homology
- thm-homological-simple-connectivity-equivalences
- thm-lebesgue-measure-under-dilations-and-reflections

## Remaining Gaps

- None inside group a step-8 scope.
