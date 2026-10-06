# Batch 17 Step 5a adjudication

Run: `frontier-39-analysis-30`; group: `batch-17`; owned batch: 17. The generated order is followed, including the read-only batch-11 producer obligation. These are local mathematical reviews and checks; the engine owns hash stamping and gates.

The pre/post snapshots and reader/refuter reports were opened. All 43 current item raw hashes initially match the post-reader snapshot. Four item bodies are unchanged and owe audit-enrichment decisions because their contracts changed. Historical source bytes for reader:17:1 remain unbound; its immutable routing evidence will be preserved.

Sources used below: Schnaubelt, *Evolution Equations*, March 19, 2026, https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf (verified online and read via /tmp/reader17-schnaubelt.txt); Engel–Nagel, author-hosted monograph, local complete text /tmp/reader17-en.txt. Exact sections and additional supplier interfaces are recorded per item. Reading an interface does not claim a foundational transitive audit.

Initial `node tools/risk-report.mjs research/frontier-39-analysis-30-batch-17.proof-contracts.json`: exit 0; 43 items routed. HIGH/CRITICAL reviews are written before advancing above each item.

## `def-dissipative-operator`

Verdict: `amended_repair`. Reviewed every paragraph of the norm, Hilbert and HB-duality formulations and their suppliers. The scaling alpha=1/lambda, injectivity and inverse bound use lambda>0. Squaring the Hilbert inequality and taking lambda to infinity proves necessity; expansion proves sufficiency. For x=0 use the zero functional. For x nonzero, lexicographic minimization on the compact finite real coordinate set canonically defines norming functionals on span{x,Ax}; Bolzano–Weierstrass gives a subsequential limit and one HB extension supplies the ambient functional. The complex extension G(u)-iG(iu) is complex linear and norm-controlled by conjugate phase multiplication. No countable simultaneous HB choice is hidden. Checked exact interfaces def-hahn-banach-extension-principle-relative, cor-relative-hahn-banach-dual-norming, thm-heine-borel-rn, cor-bolzano-weierstrass-in-rn, def-hilbert-space and the operator vocabulary. Schnaubelt Definition 1.31 and complete Proposition 1.32 proof, pp. 24–25, corroborate the equivalence; the local canonical-selection refinement accounts for the weaker HB assumption. No routed reader/refuter finding applies.

Pre item SHA256: `ee541abce5826821fcc1f8a6e474fbaf274404eaf6a6c02dcd92398b2cec421d`; post-reader: `b0b1d8e2314b4abb663a8045d78c0ef752129e39aa45719755455fee06507cfd`. Reader delta is retained except for explicit amendments recorded here.

## `def-resolvent-of-a-closed-operator`

Verdict: `amended_repair`. The bounded-inverse definition, range/domain identities and AR=lambda R-I are valid for both fields and the zero space. Reviewed the Banach-space graph homeomorphism and coordinate swap proving a bijective inverse closed; thm-closed-graph-theorem assumes DC and supplies boundedness only under that assumption. Exact published Hilbert resolvent vocabulary also requires bounded inverse. Schnaubelt p. 10, resolvent definition and Remark 1.16(a)–(c), checked against the full source. Amended the final spectrum description to include a bijective shift with unbounded inverse, while explicitly recording its exclusion under DC. The principal Definition was already correct; this is a nonfatal caveat correction in the explanatory identities, with no supplier claim change and no consumer mathematical impact. No prior judge record is present. Contract citation quotes will be synchronized for assigned consumers; outside consumers need no argument repair.

Pre item SHA256: `9b704e6f3159786563323d064ac8a9097ebf90c6a65689ac7c7de93afa1c7a70`; post-reader: `5f51e3a2570de80d2909e8555faec233bf3094ef8aec95975b0d440cd4be6db0`. Reader delta is retained except for explicit amendments recorded here.

## `def-strongly-continuous-semigroup`

Verdict: `reviewed_no_defect`; change kind: `metadata`. Definition 1.1 of Schnaubelt p. 1 and the current Banach/operator/scalar/norm interfaces agree: identity at zero, semigroup law and each orbit continuous on the whole half-line. Norm continuity is not asserted, and the group convention replaces the half-line by R. Zero-space identity remains the unique operator. The reader only added the cited operator-norm dependency; this is metadata normalization.

Pre item SHA256: `f10524e9f059d0ce0d7670565ef4356cbcecbb26c0a45e098440b4a02ccaab41`; post-reader: `3d5edef936249949951969a9fee8a9c9ee2cec39535afa2a659a250baf4b1d8e`. Reader delta is retained except for explicit amendments recorded here.

## `lem-exponential-series-of-a-bounded-operator`

Verdict: `reviewed_no_defect`; change kind: `audit_enrichment`. Every series and derivative step checked against the operator-space completeness, composition inequality, Banach series criterion and scalar exponential interfaces. Absolute domination is uniform on |t|<=R. The Cauchy-product comparison with rectangular sums bounds the omitted tails and supplies the group law for positive or negative t,s. The binomial remainder proves the derivative without an unproved termwise differentiation theorem; repeated bounded multiplication yields all derivatives. Quadratic remainder proves the generator limit. X={0} and A=0 satisfy every inequality, since ||I||<=1. Schnaubelt Example 1.3, pp. 2–3, corroborates this route. Item bytes are identical in pre/post snapshots; the changed contract corrects the zero-space boundary accounting and proof/citation evidence.

Pre item SHA256: `a32475d90336fd606f90c38b11ccdd7bc40471c84cbe29cb69d60f7b2babcd77`; post-reader: `a32475d90336fd606f90c38b11ccdd7bc40471c84cbe29cb69d60f7b2babcd77`. Item bytes unchanged; contract enrichment reviewed.

## `lem-linearity-of-the-bochner-integral`

Verdict: `amended_repair`. Reviewed the current Bochner definition, integrability criterion, simple-integral linearity and normed-space operations. The repaired proof uses separate pointwise simple approximants for strong measurability, while the defining L1 approximants supply convergence of integrals; neither is asserted to be the other. Finite combinations and restriction to any measurable E retain measurability and integrable norm by domination. The norm error tends to zero, simple integrals are linear and their limits pass through scalar multiplication and addition. Arbitrary measure spaces, null E and zero scalars/functions are included. All six authored steps are justified by the exact cited interfaces; no choice beyond the supplied sequences is used.

Pre item SHA256: `8d47f2b2d50549cb4f9a41735eb3038b99b3500d1433047c9134a15952198f65`; post-reader: `628f3e5c66c269dd4b4aa84492974e64454d92bd49435fae6d42da5d4f2f1445`. Reader delta is retained except for explicit amendments recorded here.

## `lem-mean-value-inequality-for-a-differentiable-banach-valued-curve`

Verdict: `reviewed_no_defect`; change kind: `audit_enrichment`. Reviewed the real Frechet-derivative definition and reverse-triangle/continuous-operations interfaces. The complex Banach space is explicitly differentiated via its real structure. For Ctilde>C, the maximum tau0 of the closed sublevel set exists in [r,b]. If tau0=r or r<tau0<b, the forward differentiability remainder gives a strictly negative increment and contradicts maximality; endpoint differentiability is never required. Taking explicit r approaching a and then Ctilde down to C gives the bound and the C=0 constant-curve case. No HB or Countable Choice is used. Item bytes are unchanged; the altered contract sharpens source-section and proof-step evidence.

Pre item SHA256: `2f5c25ac13da8295aab49e843f83cd94f8685e46484970865a6aa4ebe333bd33`; post-reader: `2f5c25ac13da8295aab49e843f83cd94f8685e46484970865a6aa4ebe333bd33`. Item bytes unchanged; contract enrichment reviewed.

## `thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class`

Verdict: `amended_repair`. Checked every moment reduction against the exact scalar substitution, Countable-Choice Riemann/Lebesgue comparison, Weierstrass approximation and real/complex L1 interfaces. Choose lambda0>max(sigma,0); F=e^(-lambda0 t)f decays at rate delta>0, so g(x)=F(-log x) extends continuously with g(0)=0. Compact substitution yields all polynomial moments of g; explicit tail bounds justify both improper limits. Uniform polynomial density annihilates every continuous test, and a signed bump, including relative endpoint bumps at x=1, forces g=0. Real and imaginary parts are treated separately. C=0, f(0) and arbitrary signed sigma are covered. No additional choice is hidden beyond the stated measure-interface assumption. The original nonnegative-only restriction citation has been repaired with the exact real/complex integral definition. All authored steps now close locally.

Pre item SHA256: `2ab2e17cd26e04f4e8eb588334d2bbda46d4c66cd56bbf4709f9e242338e8497`; post-reader: `213b6c79a9ce39749a8d687631269606a32ac0007f06e9534bfed4fb610b163e`. Reader delta is retained except for explicit amendments recorded here.

## `def-infinitesimal-generator-of-a-c-zero-semigroup`

Verdict: `amended_repair`. Checked the extended Banach graph vocabulary against the Hilbert-only supplier definitions and def-normed-subspace. Coordinate Cauchy limits prove product completeness; a closed graph and the graph-norm isometry give domain completeness. Countable Choice is explicitly limited to converting closure points to sequences. The one-sided generator quotient is unique, D(A) contains zero and is linear by finite linear combinations of limits; no density, closedness or boundedness is assumed. Schnaubelt Definition 1.1/Remark 1.2, pp. 1–2, agree. The forward mention of the later closedness theorem is explanatory and not a proof input. The reader repair removes the previous circular definition and supplies the Banach extension.

Pre item SHA256: `f55688a81cb73b7168d5cae9b5bb823df7849eea7800f20514d51afe747ba91f`; post-reader: `5f0c70e68ad4016ec36cf89494215a0663a8dc92db7ea9a1ac9378c372a86a74`. Reader delta is retained except for explicit amendments recorded here.

## `lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval`

Verdict: `reviewed_no_defect`; change kind: `audit_enrichment`. All six steps reviewed against the precise DC uniform boundedness interface and operator composition inequality. Failure of a bounded right neighbourhood produces t_n<=1/n with ||T(t_n)||>=n, using AC_omega implied by DC. Each vector sequence converges at zero, hence is bounded; uniform boundedness contradicts the norm growth. Write t=n delta+s and iterate with M=max(1,M0); n is bounded for each compact interval. This includes t0=0 and the zero space, without assuming ||I||=1. Schnaubelt Lemma 1.4, p. 3, gives the same local-boundedness contradiction under ordinary choice conventions. Item bytes did not change; the contract enrichment repairs the identity-norm boundary and exact step accounting.

Pre item SHA256: `5ade3c27e44c78a0801199a6e7e62d04d9e9269815268c6ec823e1b4d74f621a`; post-reader: `5ade3c27e44c78a0801199a6e7e62d04d9e9269815268c6ec823e1b4d74f621a`. Item bytes unchanged; contract enrichment reviewed.

## `lem-average-convergence-of-a-continuous-banach-valued-function`

Verdict: `amended_repair`. All eight steps checked using the Bochner definition/linearity/norm inequality, metric continuity, Heine–Borel and Heine–Cantor interfaces. Explicit left-endpoint sampled partitions, with the final cell including b, give uniform and pointwise simple approximation and L1 convergence; no selection is involved. For forward and backward averages subtract the constant and bound by local oscillation. Endpoint a uses only the forward average, endpoint b only the backward average. The merely pointwise-continuous version retains local integrability as an essential hypothesis. Countable Choice is declared for the measure interfaces. Backward averaging is now proved directly, avoiding any missing vector substitution result.

Pre item SHA256: `d681aba5d94151a872e424d2717477f44e2eec189054793c285af3d63d67aa2e`; post-reader: `26454767545222f007f5d685b3c4270e06d01cb78cd1c8fa53a751c28cc96002`. Reader delta is retained except for explicit amendments recorded here.

## `cex-translation-semigroup-is-not-strongly-continuous-on-linfinity`

Verdict: `amended_repair`. Checked the Lp quotient, essential supremum and translation-sign interfaces, with Countable Choice retained for Banach completeness. T(t)=tau_{-t} preserves classes and isometry by Lebesgue translation invariance; the algebraic semigroup law is direct. For indicator (-infinity,0], T(t)f-f=-1 on (-t,0], a positive-measure interval for every t>0, so the essential supremum is exactly one. Strong continuity at zero therefore fails. The repaired sign and the requirement of all orbit times agree with the actual definition. The witness does not rely on pointwise endpoint values in an equivalence class.

Pre item SHA256: `a5f0fc42a50ce8f25a807955d2f4991d6a2185cf76e81573736c702432368275`; post-reader: `a0bd9aa96fa9ac398feab8871bfe93eb438b025e7d447bf71f8db6d0482bc9a7`. Reader delta is retained except for explicit amendments recorded here.

## `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves`

Verdict: `amended_repair`. Six proof steps reviewed against the completed average lemma, Bochner linearity, real derivative definition and choice-free mean-value inequality. Forward/backward quotient limits yield G prime=f on the interior and the appropriate one-sided endpoints; these also prove continuity of G. For a derivative extending continuously to the closed interval, subtract its primitive and apply the zero-derivative constant-curve result. a<b is now explicit and complex differentiation uses the real structure. Restriction to compact half-line intervals uses no new hypothesis. Schnaubelt Remark 1.15(f) and its calculus proof, pp. 8–9, agree; the present integral is Bochner via the explicit approximation supplier.

Pre item SHA256: `487d0410e9dbc111c7f4b5a7dff3d43ac728b5e0828f7b7a974ac337537b770d`; post-reader: `0f0807cd2a4550543981eabfe67c49b41e7a505e684ecdf10bae571553c9c696`. Reader delta is retained except for explicit amendments recorded here.

## `lem-integrated-semigroup-orbits-belong-to-the-generator-domain`

Verdict: `amended_repair`. All seven steps checked against the generator definition, orbit continuity, completed averaging/linearity/norm lemmas, bounded maps commuting with Bochner integration and exact Lebesgue translation invariance. The shift identity is proved first for simple functions, then scalar norm errors and defining Bochner approximants; it is not assumed as an unstated vector substitution. Semigroup algebra reduces the difference quotient to the averages at t and 0, with limit T(t)x-x. At t=0 both sides are zero. Countable Choice is retained for the measure interface; no generator closedness or density is assumed. The proof supplies its claimed prerequisite directly.

Pre item SHA256: `8773519d43225486879998e0d49140978864504383309bb2a2d9053158ec5d71`; post-reader: `c720eaa6993162784bc466d7204b45da8fed138ee8e31b55a22d15fa072d7596`. Reader delta is retained except for explicit amendments recorded here.

## `lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity`

Verdict: `amended_repair`. Checked the inverse algebra with ranges in D(A) before each unbounded shift. The difference sign is (mu-lambda)R(lambda)R(mu). Interchanging parameters proves commutation when lambda differs from mu, and equality is trivial when they coincide. Works for any closed operator, real or complex, and empty resolvent set is vacuous. The reader generalization is sound and supplies commutation before generation without circularly citing an existing semigroup. Schnaubelt Remark 1.16(c), equation (1.7), p. 10, corroborates it. The bounded-resolvent main definition and identities are unaffected by the local explanatory spectrum correction.

Pre item SHA256: `ee85f59b688ee606d8a023d6cc95a530061c174856759f9b535c64b78da4ad12`; post-reader: `fbd0761a26d7e9e6ec60898b2d0e300e226caa99811bd73e26062325b32a8b30`. Reader delta is retained except for explicit amendments recorded here.

## `lem-strong-continuity-at-zero-implies-orbit-continuity`

Verdict: `amended_repair`. All steps use the precise earlier compact-time bound under DC. Right differences factor through fixed T(t0); left differences factor through T(t0-h) and the uniform bound on [0,t0]. Only right continuity is needed at t0=0. At each positive t0 the two limits match. No inference of operator-norm continuity is made; the reader DC addition matches the actual supplier.

Pre item SHA256: `ac137b2339a8cc55521b55bbc0d1202a9580af408c56e93055a3e34db3aa688a`; post-reader: `b57cd8be3234c8002a35c72bb36ce86516ed2ede8d6be4e416a47f7bf876a956`. Reader delta is retained except for explicit amendments recorded here.

## `thm-exponential-bound-for-a-c-zero-semigroup`

Verdict: `amended_repair`. Checked four proof steps and explicit constants against compact-time boundedness under DC, submultiplicative norm, semigroup law and real exponential addition/bijectivity. On nonzero X, M=sup_[0,1]||T(s)||>=||I||=1; n=floor(t), t=n+s gives ||T(t)||<=M^(n+1)<=M exp(t log M). On X={0}, choose M=1, omega=0 independently; all norms vanish and no log zero is taken. t=0 only requires an inequality, not equality. Schnaubelt Lemma 1.4, p. 3, verifies the general exponential-bound argument. The reader zero-space and DC repairs are complete.

Pre item SHA256: `fc5f4b4d223a8efbfd6e751ab306afe067056c07dfadafc631d5a2a414b1f318`; post-reader: `da20e689f83614b84e0a087ec9c2e3e14697ed62f2bc3d5eb1bfdc71ecafa9ca`. Reader delta is retained except for explicit amendments recorded here.

## `ex-bounded-operator-exponential-semigroup`

Verdict: `reviewed_no_defect`; change kind: `audit_enrichment`. Every verification step follows from the reviewed exponential-series lemma and the generator definition. The norm difference quotient converges to A for every vector, so D(A)=X. The real-time group law gives inverse E(-t); classical uniqueness follows by differentiating E(-t)u(t), whose derivative cancels because E commutes with A. Zero X and A=0 are included. Uniform continuity is used in the conventional semigroup sense of norm continuity at zero. Item bytes are unchanged; the contract audit enrichment accurately records these implications.

Pre item SHA256: `213999cf8f08430254860920022a030665d33e70a6a3788d8b70147ef6831675`; post-reader: `213999cf8f08430254860920022a030665d33e70a6a3788d8b70147ef6831675`. Item bytes unchanged; contract enrichment reviewed.

## `ex-multiplication-semigroup-and-its-generator`

Verdict: `amended_repair`. All six verification steps and their exact Lp completeness, dominated-convergence, distribution-injectivity and generator interfaces checked. Contractivity follows from e^(-ts)<=1; DCT applies at any t0>=0, so continuity on the whole half-line also follows directly from the same bound. For sf in Lp the quotient is dominated by 2s|f|; the converse is proved with compactly supported tests and local L1 integrability, valid also at p=1 using p-prime=infinity. Normalized bumps on [n,n+1] prove unboundedness. The explicit s^(-1-1/p) indicator_(1,infinity) proves the domain proper independently, since its p-power has finite integral while that of sf is s^(-1). Countable Choice is inherited by the real/complex Lp and distribution suppliers. The reader removed the unjustified general equivalence of proper domain and unboundedness.

Pre item SHA256: `e98e0e2729a74470e0e04ecb792d46fc568a6542aafef42aed3bf4b6729e357f`; post-reader: `63882b06dbbf8a42835e555145d7f90d1e21ac968497a942fe840ec180df93e3`. Reader delta is retained except for explicit amendments recorded here.

## `ex-right-translation-semigroup-on-lp`

Verdict: `amended_repair`. All six steps checked against the exact finite-p translation-continuity statement, real/complex Lp completeness, Sobolev/weak-derivative definitions, conjugate exponents including p=1, Holder applied to absolute values in the complex case, scalar Fubini on sigma-finite Lebesgue spaces and distribution injectivity under Countable Choice. T(t)=tau_{-t}; difference quotients are averages of tau_{-u} f-prime. All test integrands are absolutely integrable by compact support and local Holder; Fubini and the weak identity establish the average formula. The converse pairs norm limits with tests and dominates shifted test differences on one fixed compact interval. Translation at an arbitrary time reduces to the published translation-continuity theorem with parameter differences, so only Countable Choice is needed, not DC. Both domain inclusions hold on the whole line, with no boundary condition. The corrected negative translation sign and Banach input are valid.

Pre item SHA256: `42c2f362b43630a011bb8c0fe0d6b74694b3e9aa3d5bb855c09471bacf04d8bb`; post-reader: `b50ceef2c863839d5db5cb0cdf11339411aa672f5d6b3d236ebb3bb463ba96a8`. Reader delta is retained except for explicit amendments recorded here.

## `cor-closed-invariant-subspace-restriction-is-a-c-zero-semigroup`

Verdict: `amended_repair`. The exact closed-subspace Banach and restricted-norm interfaces justify the inherited operator bounds and orbit continuity. Both generator-domain inclusions compare the identical quotients in Y and X; closedness of Y makes the integrals remain in Y. Integrated orbit averages have derivative T(t)y-y in Y and converge to y, proving the final density claim. Y={0} and Y=X are included; no projection or complement is assumed. Countable Choice is retained only for the measure interfaces used in the density addendum.

Pre item SHA256: `36db9e3f989dbfacca27da1e749232c4a3d9e8bdd8a1f66511c83f83fef18b9b`; post-reader: `531bf2a090c1be6847947e56b4e57818ed67d3dd3ea1bdfaed84e516e14cfb57`. Reader delta is retained except for explicit amendments recorded here.

## `lem-semigroup-generator-commutes-with-orbits-on-its-domain`

Verdict: `amended_repair`. Checked the generator quotient and semigroup algebra at every t>=0. Fixed bounded T(t) gives the right derivative and domain invariance. At t>0 the left quotient is T(t-h)v_h, where v_h tends to Ax; the compact-time bound under DC and strong continuity on Ax separately control its two errors. The two derivatives coincide, and at zero only the right derivative is claimed. No operator-norm convergence is used. Schnaubelt Lemma 1.18, p. 11, supplies the matching domain/derivative statement.

Pre item SHA256: `f52b37a23044f90a2727e047d9df5982ebee91fe62b4293ffb494a75742f1efe`; post-reader: `307c821a7f44c3822fac569473674cd6b3a5c67cc931d2e5fb15b3442dcdc843`. Reader delta is retained except for explicit amendments recorded here.

## `lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing`

Verdict: `amended_repair`. Every step checked against strong measurability, Bochner criterion/linearity/norm, absolute continuity of the scalar integral and the given exponential bound. Variable operators applied to simple functions are correctly approximated by finitely many sampled continuous orbit curves; a least sufficient partition integer gives one simple approximation per n without additional choice. Norm domination by K||f|| proves integrability. One L1 simple approximation proves rho(h) tends to zero, and the increment split plus absolute continuity gives both side limits and both endpoints. Negative omega is handled by M_T0=M exp(max(-omega,0)T0); the exponential bound is assumed, so the proof does not need DC to obtain it. f is only defined inside the interval; endpoint representatives affect no integral.

Pre item SHA256: `9e7153a1a784ab09f4cb5f01fdacc9b85055b7cb03012b1aed2570213f6439d1`; post-reader: `b4468aa9acb7da9d5c8c2c5a2a2ffa30af5b9ec9b17d229a11607e72cfe29b8e`. Reader delta is retained except for explicit amendments recorded here.

## `cex-strong-continuity-does-not-imply-operator-norm-continuity`

Verdict: `amended_repair`. The reviewed translation example supplies strong continuity under Countable Choice. For each t>0 the normalized indicator (0,t) has p-norm one; its negative shift has support (-t,0) and the difference has p-norm 2^(1/p). Taking the operator supremum proves the uniform lower bound, including p=1. The witness legitimately varies with t because an operator-norm supremum is taken at each t; endpoint null sets do not affect it.

Pre item SHA256: `a86016a2538767e5ef5412352a1df808f2e072d5756d3866939979389e301a60`; post-reader: `7c9d2f5536bf806e4c5f073e2f555400c01e1852f14369911319c3ed55b12263`. Reader delta is retained except for explicit amendments recorded here.

## `cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero`

Verdict: `amended_repair`. All six proof steps checked against integrated orbits, vector Bochner estimates, operator-space completeness and the precise complex-only Neumann-series interface. The item explicitly supplies the identical geometric/telescoping argument over the real field and handles X={0} separately. Short-time norm continuity yields ||V-tI||<=t/2; V=t(I+K) is invertible, so its range inside D(A) forces D(A)=X. The integrated identity then gives A=(T(t)-I)V^{-1}, an everywhere bounded operator without a closed-graph appeal. Either unboundedness or a proper domain rules out norm continuity; the reader correctly avoids claiming a general domain/boundedness equivalence.

Pre item SHA256: `ce9d5b59473c32947ead4575be56d52f1be80fccc39f75c0494dcd471b02d62e`; post-reader: `2a8caa9481d0b792530dd35fd2dcc0ae76edf13c6371473c37f47df4a8be49fd`. Reader delta is retained except for explicit amendments recorded here.

## `def-classical-strong-and-mild-abstract-cauchy-solutions`

Verdict: `amended_repair`. Reviewed all definition paragraphs and the exact generator/graph, real-derivative, Bochner, convolution-continuity and FTC interfaces. Classical/strong/integral formulations are meaningful for a general linear operator before generation. Classical requires C1 into X, values in D(A) and continuous Au, hence graph continuity; strong is explicitly the graph-continuous integral formulation, with the terminology caveat retained. Equations at endpoints require a continuous extension of forcing, so arbitrary L1 representatives do not acquire invented endpoint values. Mild is defined only after generation and an exponential bound; no differentiability/domain membership is inferred. For continuous forcing strong and classical coincide by FTC. Schnaubelt Definitions 2.11–2.12, pp. 51–52, and Engel–Nagel II.6.3 explain the terminology difference; the mild/integral equivalence remains the later theorem, not a circular proof input.

Pre item SHA256: `7632c015d43cc50737d731ea030e489d72409bf30c1f55b92e15f782595444da`; post-reader: `f40aa65da86572af15a6df30d8318c24657d4fc961bd0cc8fcb9a91ed5a0ea26`. Reader delta is retained except for explicit amendments recorded here.

## `thm-generators-are-closed-and-densely-defined`

Verdict: `amended_repair`. Every step reviewed using completed orbit-integration, averaging, invariance, compact-time bound and Banach FTC suppliers. Density follows from J_t x/t in D(A) tending to x. Given graph convergence x_n to x and Ax_n to y, the orbit identity passes to the limit uniformly on [0,h] via h sup||T|| ||Ax_n-y||, producing the generator quotient tending to y. The final conversion of sequential closedness to graph closedness explicitly uses Countable Choice implied by DC. Zero space and h>0 conventions are valid. Schnaubelt complete Proposition 1.19 proof, pp. 11–12, confirms this route; the reader qualification and graph argument are sound.

Pre item SHA256: `6341f568c2a257e3d2af5f2cbcaf743ffd447fd12e868eecf7459d3bdc1dcf93`; post-reader: `6459fce61a062d72bdad5df0ca099975480deefe07a0db906c39732270fac14e`. Reader delta is retained except for explicit amendments recorded here.

## `thm-semigroup-orbit-is-right-differentiable-at-zero-if-and-only-if-the-vector-is-in-the-generator-domain`

Verdict: `amended_repair`. Checked both directions directly: the right quotient at any fixed t is precisely (T(h)z-z)/h for z=T(t)x. The generator definition gives the exact domain criterion and derivative AT(t)x, including t=0. For x in D(A), the reviewed invariance supplier supplies T(t)Ax under DC. For x outside D(A) the criterion deliberately allows positive-time smoothing; no false all-times failure is asserted. All four proof steps and exact supplier hypotheses match.

Pre item SHA256: `846fb743efdbe68645cb36f65d3a50550bb85d70ec69b7e772b284d59bcae3e0`; post-reader: `674d02c675867dce7f3b418ecec3e957486fac551bca522ae6f226e08973eec7`. Reader delta is retained except for explicit amendments recorded here.

## `def-yosida-approximants`

Verdict: `amended_repair`. Reviewed the full definition and boundedness/commutation paragraphs. For every real lambda>omega, including negative lambda and lambda=0 when allowed, AR=lambda R-I implies A_lambda=lambda²R-lambda I is bounded on all X. Polynomial expressions in mutually commuting resolvents prove both approximant and resolvent commutation, without requiring prior generation. Closedness/density are explicitly assumed; no approximation convergence is asserted as a definition. The reader removed the circular generator-theorem justification. The revised explanatory spectrum paragraph changes none of these inputs.

Pre item SHA256: `58d58a8035cbc6b793feaa1a23e397dfa36e99633d2863c2cca05627d1e5594b`; post-reader: `cefa6ff85fe574370433bddbc21104366f1b6f42bebfb48b6ea111b73fc0f6a7`. Reader delta is retained except for explicit amendments recorded here.

## `thm-laplace-transform-formula-for-the-semigroup-resolvent`

Verdict: `amended_repair`. All seven proof steps checked against exponential bound, Bochner norm/linearity, domain invariance, generator closedness/density and Banach FTC. For any real lambda>omega, including negative lambda, the tail decays at positive rate lambda-omega. For x in D(A), sampled step functions in the closed graph justify integration through A, and FTC gives (lambda-A)J_Rx=x-e^(-lambda R)T(R)x. Closedness gives the right inverse initially on D(A); the same integration gives the left inverse on D(A). Density under DC then extends the right inverse to every y in X. Both inverse identities and the bound M/(lambda-omega) hold, including X={0}. The corrected bounded-inverse convention agrees with the principal Definition.

Pre item SHA256: `60c35af09afdd02cad027dd8be2bd56435512032a701ae7a3f26a85fc6a08a8f`; post-reader: `a893f2ced78bae564a56191a455934343f9b626af8e2e64ccbec899e188c4b84`. Reader delta is retained except for explicit amendments recorded here.

## `thm-variation-of-constants-formula`

Verdict: `amended_repair`. All seven authored steps and cited Bochner, FTC, invariance, graph integration, compact uniform-continuity and scalar Fubini interfaces independently checked. The variable-vector product rule uses graph continuity of u and a local operator bound; classical u forces f=u-prime-Au to have a continuous representative, justifying FTC in Duhamel rigidity even when initial forcing is only L1. Triangle-grid approximations prove vector integral exchange for simple forcing; defining L1 approximations and generator closedness transfer the integrated identity. Uniqueness differentiates T(t-s) times the graph-continuous primitive of the difference. For f=f(0)+integral g, the exchanged formula for v-prime is continuous by the completed convolution lemma; closedness applied to averaged graph pairs yields all-time domain membership and Au=u-prime-f, including the backward terminal endpoint. x in D(A) is essential. The C1 special case matches Schnaubelt complete Theorem 2.9, pp. 50–51; its source does not justify a Lipschitz-only upgrade. Amended the step 2.1 substitution justification: reflecting equal partitions proves the equality for the continuous integrand, rather than incorrectly attributing time reflection solely to translation invariance. This is nonfatal proof polish, with no Statement or consumer claim change. No judge record is present.

Pre item SHA256: `a7accd8e84de9aa635481d4cd830110d587a9419d1e81adb0d96b6c2ff032bd8`; post-reader: `8112283a81cc4a595cfbebda1d16d29f6ef194b945df0455e70551607fbeb5e1`. Reader delta is retained except for explicit amendments recorded here.

## `cor-resolvent-power-estimates-for-semigroup-generators`

Verdict: `amended_repair`. All six proof steps checked against the reviewed Laplace formula, resolvent identity and Bochner toolkit. Resolvent identity gives norm differentiation; integral differentiation is justified by compact uniform convergence plus tails dominated at a strictly smaller lambda0>omega. Iteration gives -m R^(m+1), so factorial-weighted moments match every power. Integration by parts proves the scalar moment (m-1)!/(lambda-omega)^m and integrability of all needed polynomial-exponential tails. This retains one factor M rather than the weaker M^m. The possible endpoint lambda0=lambda in step 2.1 is not used: step 1.1 fixes a strictly smaller parameter, reiterated in steps 4.1 and 5.1. Negative lambda is valid when lambda>omega; m=1 and zero X are covered. DC carries all supplier hypotheses.

Pre item SHA256: `f1e454f84c3e614143903df84a5d20df87071be892e5b9d4ac1ddadf15484bde`; post-reader: `86c80af72309172345f360bccd532a53f692263a1c0b1e425903f2307c65954c`. Reader delta is retained except for explicit amendments recorded here.

## `lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups`

Verdict: `amended_repair`. Every step reviewed against the exact scalar uniqueness theorem under Countable Choice, generator Laplace formula under DC, bounded maps commuting with Bochner integrals and relative HB norming. Each x-star of the orbit difference is continuous with bound 2M||x-star||||x|| exp(omega t). Its transform vanishes by the common resolvents; scalar uniqueness gives pointwise annihilation, and HB separates one vector at a time without simultaneous functional choice. The same-generator consequence uses a common maximum of the two exponential-bound constants. Zero vectors/dual norms, t=0, both scalar fields and signed omega are covered; DC and HB remain explicitly distinct assumptions.

Pre item SHA256: `e9e6fe1d04b1be79fca90b28ea6d9aa95ed59dee43a2059d535e9b85188c1b93`; post-reader: `29e598f7854b83b591b34380dab166a41745a686659b315b15d8c0e4efe23f53`. Reader delta is retained except for explicit amendments recorded here.

## `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`

Verdict: `amended_repair`. Every authored implication and graph-space lemma reviewed against the current closed-operator convention, DC closed graph theorem, generation properties and the complete Engel–Nagel II.6.6–6.9 arguments, printed pp. 147–151 (/tmp/reader17-en.txt lines 11213–11523). EU constructs linear graph-continuous solution maps; C([0,t],X1) completeness is proved and the map into it has closed graph by passing the homogeneous integral equation and patching its unique solution. The generator on X1 is exactly the part A1 on D(A²), by the constructed primitive and closedness. The similarity is S^{-1}A1S with S=(lambda-A)^{-1}:X to X1, with the domain equality checked. Under (c) take lambda_n above the actual resolvent half-line of A1; an eigenvector is in D(A²), giving injectivity, then closed graph gives bounded inverse. Under (d), sequential continuity yields a uniform local bound using AC_omega; density extends maps and the semigroup, and integrated orbit averages explicitly prove D(A) a core of its generator B. Closedness forces A=B. Both directions of all four equivalences, zero spaces and the necessity of density in (d) were checked. The reader repairs are complete; no Hille–Yosida prerequisite is circularly imported.

Pre item SHA256: `300821d7444cf8e88b6e19ea8fff391e54d5d84f10d8b3b2d0a2c5297dab64dc`; post-reader: `72feb4b477a377366720cb75edc31893bf1651645816e6098f5638d8037da14c`. Reader delta is retained except for explicit amendments recorded here.

## `cex-a-mild-solution-need-not-be-classical`

Verdict: `amended_repair`. Reviewed the translation generator/domain, solution definitions, Duhamel uniqueness and distribution-injectivity interface under DC (hence Countable Choice). If an indicator (0,1) had an Lp weak derivative v, tests on the three complementary open intervals force v=0 a.e.; one smooth test with values 0 at 0 and 1 at 1 contradicts the weak identity. This works at p=1 without shrinking an L-infinity norm. The shifted indicator fails the same domain condition for every t, so the mild orbit is nonclassical and the initial quotient cannot converge. No choice of representatives or pointwise discontinuity alone is used as a substitute for the weak-derivative argument.

Pre item SHA256: `492c40a9810fed785ef19a300385a17459e4ae975da5e7688c26bbe3effaed91`; post-reader: `6665c73975e40f25c9f25f3504e8385ccf3e50c42c65e9870a862c3d883f70a5`. Reader delta is retained except for explicit amendments recorded here.

## `lem-yosida-resolvent-converges-strongly-to-the-identity`

Verdict: `amended_repair`. All four steps checked on the assumed closed densely defined pre-generation operator. On D(A), lambda R y-y=R Ay and the first-power bound gives convergence. Large positive lambda gives ||lambda R||<=2M (or M when omega<=0); take the threshold in the density argument large enough to satisfy that estimate as well as the domain-vector error. The explicit epsilon decomposition extends to every X vector without a selected sequence. Apply the result to Ax to obtain convergence on D(A); no uniform convergence on a domain ball is claimed. Negative parameters are correctly excluded only from the large-parameter bounding step, not from the resolvent hypotheses. The cited semigroup estimate is explicitly motivational; here the bound is a hypothesis.

Pre item SHA256: `cff3f6a0c96f9cb0252a8ae2cfe91540435875daa0f649796aa1b062dbed15a6`; post-reader: `ab0e84059a922b72ae6c1bf3bbf30a7705d05b84ea3a6460b0f118ae45d68467`. Reader delta is retained except for explicit amendments recorded here.

## `lem-yosida-approximants-are-bounded-and-converge-on-the-domain`

Verdict: `amended_repair`. All three steps checked against the exact pre-generation strong-resolvent limit, Yosida definition, norm and inverse identities. ||A_lambda||<=lambda² M/(lambda-omega)+|lambda| is valid for every real lambda>omega, including negative lambda and zero. The old signed-lambda bound fails for A=-I, omega=-1, lambda=-1/2; the repaired bound is nonnegative and follows directly from the triangle inequality and ||I||<=1. On D(A), A_lambda x=lambda R(lambda,A)Ax tends to Ax. Density/closedness and bounds are assumed before generation; no semigroup is used circularly. Zero space and Ax=0 are covered.

Pre item SHA256: `44605267c17e28c79f4c2a55d5655660b2624b2c487bccc5f14c6c341c522552`; post-reader: `ed6ebc016f3c3ccf47f5d1d31b90242a9707a12c7cf56e7184912358dc5244a1`. Reader delta is retained except for explicit amendments recorded here.

## `reader:17:1` — read-only batch-11 producer

Verdict: `confirmed_fatal`; closed ledger row `frontier-39-analysis-30-5a-b11-thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent`. Historical fatal missing bounded-domain hypothesis is confirmed as a mathematical defect in the reported original complex clause: on R take separated compactly supported phi_n; f_n=(-d²/dx²+1)phi_n is L2 bounded, while K_1 f_n=phi_n have mutual distance sqrt(2)||phi||, so K_1 is not compact. The historical observed bytes are unbound and this counterexample does not refute the corrected current carrier. Independently opened the current batch-11 producer, every cited supplier interface, its proof contract and its manifest row. Steps 1.1–2.2 prove shifted bijectivity and self-adjointness using Lax–Milgram and the complex range criterion or the real full-range adjoint argument. Step 3.1 proves componentwise complexification self-adjoint by testing real vectors. Step 4.1 obtains compactness only under boundedness and AC, complexifies the compact real inverse, and uses R-K=(lambda+mu)RK to factor every other resolvent as bounded times compact. The common boundedness/AC scope governs the compactness clauses in both fields; self-adjointness itself remains valid on unbounded open sets. Current exact Lax–Milgram, shift/coercivity, compactness, metric-choice, adjoint and complexification suppliers satisfy their hypotheses. Hunter Section 4.8, pp. 105–106, Theorem 4.23 with proof and Section 4.10, p. 109, Example 4.26 confirm the bounded-domain restriction and unbounded-domain counterexample (https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf). Current proof closes; no outside edit made. The owning heat consumer assumes bounded Omega and AC, so no consumer correction is needed; Step 5b retains this historical producer route.

Historical delta remains unknown. This batch-17 dispatch explicitly authorizes normal disposition of unbound historical findings after independent current producer review. The reader report supplies the original missing-hypothesis account and durable immutable producer pre-snapshot and routing fingerprints; the current proof and actual prerequisites now justify bounded-domain compactness. The original observed bytes were not saved, so their exact historical delta remains unknown and is not inferred from corrected bytes. The decision preserves the immutable producer pre-reader fingerprint, carrier at routing and dependency-path hashes exactly as dispatched. No prior escalation has been erased or reclassified as a false positive.

## `thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup`

Verdict: `amended_repair`. Independently checked all seven construction steps with the current pre-generation resolvent, Yosida, operator exponential, FTC, averaging and generated-resolvent suppliers. Refuter step 1.1 objection is correct: omega=-1,t=1 yields M exp(-lambda/(lambda+1))>M exp(-1), so the claimed below-bound assertion is false, although its limiting conclusion is correct. Replaced the sign split by uniform convergence of the exponent on each finite time interval; this proves both compact uniform bounds and the exact pointwise limsup for every signed omega. The corrected FTC sign in step 2.1 gives the Cauchy estimate on D(A); density and uniform bounds extend the compact-uniform orbit limit to all X and establish continuity before integrating it. Products pass to the limit with the uniform operator bounds; the integrated generator identity yields A contained in B. A common real resolvent point and injectivity of lambda-B then prove domain equality A=B, not merely an extension. Schnaubelt complete Theorem 1.26 construction, pp. 18–19, checked; its shifted omega=0 argument agrees with the direct signed-omega estimate here. t=0, X={0}, M=1 and negative omega all pass. The Statement is unchanged, so no consumer proof repair is needed. No prior judge record is present.

Pre item SHA256: `b7fa0ec43eab6dddfc99ccce025f70e478558e11aebc06142dd30bfcfb611a30`; post-reader: `34f647fb95935ff6cb9d2a3c68cf0280b0d7d847f174c4c4fc3020fb4a11e291`. Reader delta is retained except for explicit amendments recorded here.

Finding `refuter:17:1`: `confirmed_fatal` (false written inequality, even though the limsup conclusion survived); closed row `f39a30-b17-refuter1-yosida-sign`, shared with the amended touched decision.

## `thm-hille-yosida-generation-theorem`

Verdict: `amended_repair`. All four steps and both directions checked against the now-corrected completed Yosida construction, Laplace inverse formula and power-moment estimate. The closed/dense preconditions are explicit and the same M,omega are preserved. Necessity uses one factor M for all powers; sufficiency uses every power as assumed. M=1 alone lets submultiplicativity propagate the first-power bound, with arbitrary omega corresponding to exponential rescaling; no exactly-when restriction or contractivity claim for an arbitrary nonoptimal M is asserted. Signed omega, n=1, X={0} and the strict resolvent boundary lambda>omega are correct. Schnaubelt Theorem 1.26, pp. 18–19, matches the exact general criterion and contraction specialization. No mathematical consumer changes follow from the Yosida proof-only repair.

Pre item SHA256: `b3ef8a7d4ec49f8286605a4dd20e1f18ceaed9aef48c0df001181b095f3c6a01`; post-reader: `42f000b67f6faf0f8c04e5fdb8db89d0e5db3546255fe45dc54a5495569b37cb`. Reader delta is retained except for explicit amendments recorded here.

## `cor-contraction-hille-yosida-theorem`

Verdict: `amended_repair`. Every proof step checked against the completed general criterion, composition norm and the exact complex exponential modulus/derivative interfaces. For real lambda>0, contractivity gives the first estimate and conversely its powers follow with M=1 by submultiplicativity. The complex assertion is proved independently using J_z with a=Re z>0; the tail estimate, derivative identity, closed-graph integration and density give both inverse identities. Real parameter increments at z differentiate the resolvent algebra and the integral; strict domination s^k exp(-a s/2) yields the factorial-weighted powers and a^(-n) estimates. It is not an invalid substitution of z into a real-only theorem. X={0}, n=1 and the excluded Re z=0 boundary are consistent. DC is retained throughout.

Pre item SHA256: `4d9b7a3356db032b93152423fa3c51cb989d4b3984c1cc010edd8c584a33ba71`; post-reader: `da53fccbad38cc487139159f4020dc2f5fb8a0753873f89bc393018ef2f67bdf`. Reader delta is retained except for explicit amendments recorded here.

## `rem-semigroup-sign-and-generator-conventions`

Verdict: `amended_repair`. Reviewed the whole sign dictionary against the generator/resolvent definitions and completed generation criteria. u-prime=Au corresponds to u-prime+B u=0 with B=-A. Opposite resolvent shift at the same parameter gives (A-lambda I)^(-1)=-R(lambda,A), so nth powers differ by (-1)^n with unchanged norms; this is distinct from negating the generator. Heat generator is minus the positive energy-form operator, Delta_D. The M=1 first-power guarantee allows exponential rescaling for arbitrary omega; an M>1 estimate alone does not force contractivity, without falsely excluding semigroups that also have a better bound. DC and the sign conventions match all current suppliers.

Pre item SHA256: `a6ae35f2275d21af435841ab2a69560c2e9339f4acffd067abc71e6f54673ee6`; post-reader: `f517c378491eefe20ddd1d06aa1f083a8b79a3f8eb39fb2deac6c205208dc945`. Reader delta is retained except for explicit amendments recorded here.

## `cex-first-resolvent-estimate-does-not-give-hille-yosida-bound`

Verdict: `amended_repair`. All matrix computations checked with the exact product norm, finite-dimensional completeness, matrix multiplication, exponential-series, e<3 and Hille–Yosida necessity interfaces. For A=-I+4N, N²=0 and the inverse triangular matrix has row sum 1/(lambda+1)+4/(lambda+1)². With x=lambda/(lambda+1), its lambda multiple is 5x-4x²=25/16-4(x-5/8)², so the first bound is sharp for all positive lambda. R(3)² has row sum 3/16=27/144>25/144. The exponential norm at t=1/2 is 3/sqrt(e)>sqrt(3)>25/16. A is closed and densely defined because it is bounded everywhere. The counterexample concerns preserving this specified M, not existence of any semigroup bound, and respects that distinction. DC is only carried for the general generation supplier; the finite calculations need no additional choice.

Pre item SHA256: `7972aa3aa65ed577bfa819459eab31fc8d85b124bc62095c8c7d8dd9426a4a58`; post-reader: `f7669c889c549a1b57e0e29f55ac55e1d1c6dc38cc053425c49e3bb5f06c5d30`. Reader delta is retained except for explicit amendments recorded here.

## `thm-lumer-phillips-generation-theorem`

Verdict: `amended_repair`. All six steps and the factorization recorded in the Facts checked against dissipativity, contraction Hille–Yosida, exact resolvent identities, Neumann series, complete operator space and graph conventions. Dissipativity plus one full range gives a bounded inverse with norm at most 1/lambda0; its closed graph yields A closed without assuming closedness in advance. Q=I+(lambda-lambda0)R0 factors both shifts on their actual domains, so R0 Q^{-1} is a two-sided inverse mapping into D(A). The resolvent neighbourhood covers (0,2lambda0); the explicit sequence (3/2)^k lambda0 extends it to all positive parameters, without an unlicensed infinite selection. Density is the hypothesis needed by the contraction criterion. Any dissipative extension is equal to A by matching a right-hand side through the already surjective shift and using injectivity. The zero space is separated before the nonzero complex Banach-algebra interface; real geometric-series proof is explicitly supplied. Complete Schnaubelt Theorem 1.39 proof, pp. 30–31, agrees with the surjectivity route. No HB is needed for the norm formulation.

Pre item SHA256: `e6862e433367734b82fc2cfd25b0bbb455048bd1c3c97dd2fb85dade8d66adac`; post-reader: `241a7edbb1a25f3385900e8ff2ba43303a05ef6c944c5a706c7c48b43c1aad1a`. Reader delta is retained except for explicit amendments recorded here.

## `ex-dirichlet-heat-semigroup-from-the-laplacian`

Verdict: `amended_repair`. All nine verification steps checked against the current batch-11 form, Garding, self-adjoint compact-resolvent and discrete-spectrum interfaces, Poincare, exponential domination and the completed generation/solution suppliers. For identity principal coefficients theta=1,b=c=0 gives beta=1/2, so mu0=1 is admissible; L+1 is bijective, A=-L is densely defined and dissipative, and AC supplies DC for Lumer–Phillips. The spectral basis has nonnegative eigenvalues by the form identity and strictly positive ones by Poincare on the bounded open set. Uniqueness identifies each eigenvector orbit and square-summable coefficients extend the expansion to every f. On [delta,T0], lambda exp(-delta lambda) is uniformly bounded; both spectral graph-coordinate tails vanish uniformly, so generator closedness gives domain membership and graph continuity at each positive time. Starting from u(delta) in D(A) proves classical differentiability locally; only an L2 initial trace is claimed for arbitrary f, while domain data give classical orbits at zero. No H2 identification or boundary regularity is assumed. The reviewed historical producer finding is not a current counterexample to this bounded-domain/AC application. Consumer statements need no repair.

Pre item SHA256: `c909367f6cd9e8a2720807b040cd6bb7a53e1b23b586b0f002c3593efa517f44`; post-reader: `a7bbd66f17939c751fed1bd32192f5e7ea93abd3e8445a73c15c934615cc94bf`. Reader delta is retained except for explicit amendments recorded here.

## Page obligation

Verdict: `accepted_repair`. Read the full A-page list and prose against all 33 reviewed A carriers and the page-order anchor. The summary now explicitly states DC for automatic boundedness and generation, bounded-inverse resolvents with bijectivity equivalence only under DC, HB for dual norming/scalarization, and C1 or Bochner-primitive forcing upgrades. The sign dictionary and integral/solution descriptions agree with the completed proofs. Each owned direct supplier precedes its consumers in the rendered page order. The reader page-prose repair is retained; page bytes and order match the post-reader snapshot. No B-page or published-content edit was made.

## Manifest, ledgers and impact review

All 43 owned manifest rows are synchronized to the current reviewed claim sections, dependencies, provenance, bibliography locators and actual proof technique. The original manifest still contained the false Lipschitz upgrade and other pre-reader claim/choice conventions. This normalization makes retained mathematical reader repairs `amended_repair` as typed carriers, while the five metadata/audit-enrichment dispositions remain `reviewed_no_defect`. The full approved item inventory and page order are preserved. Seven owned resolvent citation quotes are updated, and the two changed theorem derivation worksheets are regenerated.

The generated scope names the refuter obligation `refuter:17:1`, with route `flagged`; the decisions use that exact generated identifier (the dispatch prose calls the same route `flagged:17:1`). Both it and the Yosida touched decision explicitly share one closed refuter defect row. The historical producer finding reuses the producer’s existing closed fatal row rather than duplicating the defect, with an explicit `same_defect_as` link to its batch-11 touched obligation. The earlier independently reviewed historical uncertainty is preserved.

Although the principal resolvent Definition is unchanged, its explanatory paragraph is inside that section. All ten outside direct consumers and reference consumers were inspected at their actual resolvent uses: the sectorial/contour items use bounded inverse, inverse identities, or estimates already implying boundedness. The parabolic-compatibility item only declares the prerequisite and has no body use. No consumer relies on the corrected spectrum paraphrase, so no additional hop or outside proof repair is needed. Assigned consumers were already reviewed above. The Yosida and Duhamel amendments change proofs only. No published defect was confirmed, and published content remains read-only; no published-ledger row is warranted. The owned heat consumer’s frontier-dependency entry is maintained, with no deletion of any proposed withdrawal.

No judge record was present on the three edited items. Local metadata/proof checks follow; no judge cycle, engine stamp, scheduling transition, or self-certification has been initiated.

## Final local checks and handoff

- `node tools/tsx-run.mjs tools/reflow.mts items/def-resolvent-of-a-closed-operator.md items/thm-variation-of-constants-formula.md items/thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup.md`: exit 0; all three unchanged by reflow.

- `node tools/tsx-run.mjs tools/precheck.mts` on those same three paths: exit 0; two proof-bearing items checked, zero failures; the definition has no phase proof.

- `node tools/rendercheck.mjs` on those three paths and the routed A page: exit 0; four files parsed and rendered without errors.

- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-17.proof-contracts.json --strict`: exit 0; 43/43 checked, zero errors and warnings.

- `node tools/risk-report.mjs research/frontier-39-analysis-30-batch-17.proof-contracts.json --require-reviewed`: exit 0; all 43 routed, with complete item-specific reviews for every HIGH/CRITICAL carrier. The initial report without `--require-reviewed` was also run before review.

- Final, single batched layout invocation after all edits and reflow: `node tools/proof-layout.mjs items/def-resolvent-of-a-closed-operator.md items/thm-variation-of-constants-formula.md items/thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup.md`: exit 0; three items, 14 numbered steps, zero defects.

- Local JSON/ledger consistency check: 46 exact generated obligations, no duplicates or extras; each finding has exactly one closed ledger reference and every repair has confidence 1. Forty-two new closed rows were appended through the serialized defect-ledger tool; the historical compactness finding reuses the producer’s existing closed row. This is output consistency, not engine hash sealing or mathematical certification.

Only three owned item files differ from the dispatch post-reader item bytes: the spectrum caveat, the Duhamel reflection justification and the Yosida sign correction. All 43 owned manifest rows and risk records are synchronized, as are affected owned citation quotes and derivations. Current consumer arguments remain sound; no outside carrier or published file was edited.

Source-reading limits: the named Schnaubelt arguments, Engel–Nagel graph-space/well-posedness argument and Hunter compact-resolvent section were read as recorded above, alongside all 72 cited external interfaces and the additional declared prerequisites. This does not claim an exhaustive transitive audit or independent retrieval of every retained Teschl, Brezis, Johnson or other bibliography locator. No unresolved mathematical prerequisite blocks the owned current arguments. The original observed bytes for reader:17:1 remain unavailable; their historical uncertainty and the producer pre-reader/routing fingerprints are durable in its decision. Step 5b owns reconciliation of that cross-batch route.

The engine can now stamp the current decision hashes and run its gates. No judge cycle, engine stamp, stage transition or publication action was performed in this dispatch.
