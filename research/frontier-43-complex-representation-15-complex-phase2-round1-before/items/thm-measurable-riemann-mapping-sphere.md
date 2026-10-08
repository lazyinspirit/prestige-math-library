---
id: thm-measurable-riemann-mapping-sphere
kind: theorem
title: "The measurable Riemann mapping theorem on the sphere"
status: draft
origin: pipeline
deps:
  - def-measurable-beltrami-coefficient
  - def-weak-solution-beltrami-equation
  - lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions
  - lem-area-and-l2-derivative-bounds-for-quasiconformal-maps
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-beltrami-coefficient-and-maximal-dilatation
  - def-geometric-quasiconformal-homeomorphism
  - thm-composition-and-inverse-quasiconformal
  - thm-one-quasiconformal-is-conformal
  - thm-geometric-and-analytic-quasiconformality-equivalent
  - thm-normalized-quasiconformal-compactness
  - def-mobius-transformation
  - thm-three-point-transitivity-mobius-transformations
  - thm-biholomorphic-self-maps-riemann-sphere-are-mobius
  - thm-mobius-transformations-biholomorphic-sphere
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
  - thm-one-point-compactification-properties
  - thm-chordal-metric-induces-sphere-topology
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-extreme-value-metric
  - lem-three-simply-connected-models-are-inequivalent
  - def-riemann-surface-and-holomorphic-atlas
  - def-holomorphic-and-meromorphic-map-of-riemann-surfaces
  - def-smooth-atlas
  - def-smooth-manifold
  - thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas
  - def-smooth-partition-of-unity-subordinate-to-an-open-cover
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - lem-smooth-bump-between-concentric-euclidean-balls
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
  - thm-linear-change-of-variables-for-lebesgue-measure
  - lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets
  - thm-dominated-convergence
  - thm-hk-is-a-hilbert-space
  - cor-hilbert-spaces-are-reflexive
  - cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence
  - cor-cauchy-schwarz-inequality-for-l-two
  - thm-countable-union-of-null-is-null
  - def-countable-choice
  - def-axiom-of-choice
  - thm-ultrafilter-lemma
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-hahn-banach-dominated-extension
  - lem-analytic-quasiconformality-implies-modulus-distortion
  - def-chordal-metric-riemann-sphere
  - thm-heine-borel-rn
  - thm-continuous-image-of-a-compact-space-is-compact
dependency_level: 11
proof_strategy: direct
axiom_use: >-
  Assume AC. It is required by the ACL/Sobolev, composition, geometric/analytic,
  smooth-coefficient and normalized-compactness interfaces; it also selects the
  countable family of smooth approximating solutions. AC supplies Countable
  Choice for partition, mollification, differentiation and Hilbert-space
  interfaces, and supplies the ultrafilter lemma, Dependent Choice and real
  Hahn–Banach used in the weak-subsequence input. The finite chart cover and
  three-point Möbius maps are determined by the cited constructions.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §§14.1–14.5, printed pp. 195–198: uniqueness by the conformal factor, local-to-global uniformization, smooth approximation and the weak-limit argument for passing the Beltrami equation to a limit; read in full."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 3 §2, printed pp. 85–88, and §6, Theorem 6.1, printed pp. 103–105: mapping-theorem outline and weak convergence of dilatations; the printed proof of Theorem 2.1 is blank, Theorem 2.11 has a sign typo in K, and Theorem 6.1 uses an unproved nonvanishing-derivative input, so these passages are context rather than proof for the open steps recorded below."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $\mu$ be a Beltrami coefficient on the Riemann sphere with $\|\mu\|_\infty\le k<1$ ([[def-measurable-beltrami-coefficient]]), and let $0,1,\infty$ denote the standard points in the finite and infinity charts ([[def-riemann-sphere-holomorphic-charts]], [[rem-riemann-sphere-one-point-compactification]]). Then:

(i) **Existence.** There is an orientation-preserving quasiconformal homeomorphism $f:\widehat{\mathbb C}\to\widehat{\mathbb C}$ whose Beltrami coefficient is $\mu$ almost everywhere ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-geometric-quasiconformal-homeomorphism]], [[def-beltrami-coefficient-and-maximal-dilatation]]); equivalently, $f$ is a weak solution of $f_{\bar z}=\mu f_z$ ([[def-weak-solution-beltrami-equation]]). Its maximal dilatation is $K_f=K(\mu)\le(1+k)/(1-k)$.

(ii) **Uniqueness up to Möbius maps.** If $f$ and $g$ are two such solutions, then $g\circ f^{-1}$ is a Möbius transformation of $\widehat{\mathbb C}$ ([[def-mobius-transformation]]). Thus the solutions are exactly $\{M\circ f:M\text{ is Möbius}\}$, and there is a unique solution fixing $0,1,\infty$.

(iii) **Any normalization.** For every ordered triple $(a,b,c)$ of distinct sphere points, there is exactly one solution with $f(0)=a$, $f(1)=b$, and $f(\infty)=c$ ([[thm-three-point-transitivity-mobius-transformations]]). In particular the solution normalized by $f(0)=0$, $f(1)=1$, $f(\infty)=\infty$ is unique; denote it by $f^\mu$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a Beltrami coefficient $\mu$ on $\widehat{\mathbb C}$ with $\|\mu\|_\infty\le k<1$.

[F1] Sphere coefficients are chartwise a.e. classes with the holomorphic pullback law, which has modulus-one factor; weak solutions are chart-independent and in the finite chart satisfy $f_{\bar z}=\mu f_z$ ([[def-measurable-beltrami-coefficient]], [[def-weak-solution-beltrami-equation]]).

[F2] The composition and inverse formulas hold almost everywhere for analytic quasiconformal homeomorphisms. A composition with two equal coefficients cancels to coefficient zero; a conformal postcomposition preserves the coefficient ([[thm-composition-and-inverse-quasiconformal]]). This in-run supplier is provisional because its chain-rule proof uses open area and exceptional-set transport inputs.

[F3] A 1-quasiconformal homeomorphism of plane domains is conformal; a map of Riemann surfaces is biholomorphic when it and its inverse are holomorphic in charts; and a biholomorphic self-map of the sphere is Möbius ([[thm-one-quasiconformal-is-conformal]], [[def-holomorphic-and-meromorphic-map-of-riemann-surfaces]], [[thm-biholomorphic-self-maps-riemann-sphere-are-mobius]]). The first in-run supplier depends on the open geometric/analytic equivalence item.

[F4] A Möbius map can carry any ordered triple of distinct sphere points to any other; it is biholomorphic in the standard sphere charts ([[thm-three-point-transitivity-mobius-transformations]], [[thm-mobius-transformations-biholomorphic-sphere]], [[def-mobius-transformation]]).

[F5] Smooth chartwise coefficients on the sphere with essential norm at most $k<1$ have orientation-preserving quasiconformal solutions by the authored local-to-global uniformization theorem ([[lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions]]). That supplier remains provisional until its two batch-12 definitions are reconciled.

[F6] The standard sphere with its usual topology and charts is a Riemann surface. Their transition is smooth, so they form a smooth atlas on the underlying topological sphere; a smooth atlas generates a smooth structure and hence a smooth manifold ([[lem-three-simply-connected-models-are-inequivalent]], [[def-riemann-surface-and-holomorphic-atlas]], [[def-riemann-sphere-holomorphic-charts]], [[def-smooth-atlas]], [[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]], [[def-smooth-manifold]]).

[F7] Under Countable Choice, every open cover of a smooth manifold has a subordinate smooth partition of unity; subordinate means the supports lie in the assigned chart domains and the functions sum to one ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

[F8] A nonnegative smooth bump equal to one on a ball and compactly supported in a larger ball has finite positive integral; normalizing it gives a nonnegative unit-mass mollifier. Convolution of a locally integrable function with this smooth compactly supported mollifier is smooth ([[lem-smooth-bump-between-concentric-euclidean-balls]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[F9] At almost every point of a locally integrable chart representative, convolution with the shrinking nonnegative mollifier converges to that representative; ball areas scale as $r^2$, a C1 coordinate diffeomorphism carries exceptional null sets to null sets, and a countable union of null sets is null ([[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]], [[thm-linear-change-of-variables-for-lebesgue-measure]], [[lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets]], [[thm-countable-union-of-null-is-null]]).

[F10] The geometric and analytic quasiconformal definitions agree; a normalized family of orientation-preserving $K$-quasiconformal sphere maps is equicontinuous in chordal distance and closed under uniform limits ([[thm-geometric-and-analytic-quasiconformality-equivalent]], [[thm-normalized-quasiconformal-compactness]], [[def-geometric-quasiconformal-homeomorphism]], [[def-acl-sobolev-quasiconformal-homeomorphism]], [[def-chordal-metric-riemann-sphere]]). These in-run suppliers remain provisional because the equivalence proof and its circular-dilatation input are open.

[F11] For a normalized sphere map and bounded open $B\Subset\mathbb C$, the area/derivative lemma gives $\int_B|Df|_{HS}^2\le 2(1+k^2)(1-k^2)^{-1}|f(B)|$ ([[lem-area-and-l2-derivative-bounds-for-quasiconformal-maps]]). This same-pair supplier remains escalated: its differentiability input and the scope of its omitted Lusin-N clause are open.

[F12] $L^2(B;\mathbb C)$ is a Hilbert space, Hilbert spaces are reflexive under Countable Choice, and a reflexive Banach space has weakly convergent subsequences for bounded sequences when the ultrafilter lemma, Dependent Choice and Hahn–Banach hold ([[thm-hk-is-a-hilbert-space]], [[cor-hilbert-spaces-are-reflexive]], [[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]]).

[F13] Cauchy–Schwarz bounds products in $L^2$, and dominated convergence applies to the pointwise convergent bounded coefficients times a fixed $L^2$ test function ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-dominated-convergence]]).

[F14] Full AC implies Countable Choice and Dependent Choice, supplies the ultrafilter lemma, and supplies the real Hahn–Banach extension theorem ([[def-axiom-of-choice]], [[def-countable-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-ultrafilter-lemma]], [[thm-hahn-banach-dominated-extension]]).

[F15] The Beltrami coefficient of a Sobolev homeomorphism is $f_{\bar z}/f_z$ where $f_z\ne0$; the in-run analytic-quasiconformality area lemma claims $\operatorname{area}(f(E))=\int_EJ_f$ on relatively compact Borel sets and that $f^{-1}$ maps null Borel sets to null sets ([[def-beltrami-coefficient-and-maximal-dilatation]], [[lem-analytic-quasiconformality-implies-modulus-distortion]]). Its reverse-area and N-property proof is still an open source obligation; it is needed to prove the derivative-nondegeneracy conclusion in step 4.1.

[F16] The sphere is compact as the one-point compactification and its chordal metric gives the same topology; compact images remain compact, closed subsets of compact spaces are compact, continuous real-valued functions on compact metric spaces attain their minimum, and compact subsets of the finite chart are Euclidean bounded ([[rem-riemann-sphere-one-point-compactification]], [[thm-one-point-compactification-properties]], [[def-chordal-metric-riemann-sphere]], [[thm-chordal-metric-induces-sphere-topology]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-closed-subspace-of-a-compact-space-is-compact]], [[thm-extreme-value-metric]], [[thm-heine-borel-rn]]).

## Proof

**Proof technique:** smooth approximation, normalized compactness, and weak convergence of derivatives.

1.1 Let $f,g$ be two solutions and set $h=g\circ f^{-1}$. By [F2], the composition is a 1-quasiconformal homeomorphism and its Beltrami coefficient vanishes almost everywhere. Localize in source and target charts of the sphere and apply [F3]'s one-quasiconformal theorem to each chart expression; both directions are holomorphic, so $h$ is a biholomorphic self-map of the sphere and therefore Möbius. Conversely, postcomposition by a Möbius map leaves the coefficient unchanged by [F2]. If $f,g$ both fix $0,1,\infty$, the Möbius map $g\circ f^{-1}$ fixes three distinct points and is the identity by [F4]. [F1, F2, F3, F4, given]

1.2 Write $U_0=\widehat{\mathbb C}\setminus\{\infty\}$ and $U_\infty=\widehat{\mathbb C}\setminus\{0\}$. By [F6] the standard sphere is a smooth manifold, so [F7] gives a smooth partition $(\rho_0,\rho_\infty)$ subordinate to these two chart domains. Normalize a nonnegative bump from [F8] to a unit-mass kernel $\varphi$ and set $\varphi_{\epsilon_n}(z)=\epsilon_n^{-2}\varphi(z/\epsilon_n)$ with $\epsilon_n=1/n$. These are fixed chart and kernel choices; no choice of a family is needed here. [F6, F7, F8, F14, given]

1.3 Let $\mu_0$ and $\mu_\infty$ be chart representatives of $\mu$, and define $\nu_{0,n}=\mu_0*\varphi_{\epsilon_n}$ and $\nu_{\infty,n}=\mu_\infty*\varphi_{\epsilon_n}$. Each is smooth by [F8] and satisfies $|\nu_{j,n}|\le k$, since it averages a representative bounded by $k$ against a nonnegative unit-mass kernel. Glue the chartwise sections $\rho_0\nu_{0,n}$ and $\rho_\infty\nu_{\infty,n}$, extending each by zero outside its subordinate chart support, and call the sum $\mu_n$. The pullback law [F1] makes this a smooth sphere coefficient; the weights are nonnegative and sum to one, so $\|\mu_n\|_\infty\le k$. At a Lebesgue point $x$ of a chart representative, $|\nu_{j,n}(x)-\mu_j(x)|\le\|\varphi\|_\infty\epsilon_n^{-2}\int_{B(x,\epsilon_n)}|\mu_j(y)-\mu_j(x)|\,dy\to0$ by [F9]. The inversion transition carries its exceptional null set to a null set, so $\mu_n\to\mu$ almost everywhere in both charts. [F1, F7, F8, F9, algebra]

1.4 For each $n$, choose an orientation-preserving quasiconformal solution $F_n$ for $\mu_n$ by [F5]; Countable Choice, supplied by [F14], permits these countably many selections. The pointwise equation and $|\mu_n|\le k$ give the common analytic bound $K_0=(1+k)/(1-k)$, and [F4] normalizes $F_n$ by postcomposing with a Möbius map to obtain $f_n(0)=0$, $f_n(1)=1$, $f_n(\infty)=\infty$. The composition formula [F2] preserves the coefficient and orientation. By the geometric/analytic equivalence in [thm-geometric-and-analytic-quasiconformality-equivalent], each $f_n$ belongs to the normalized geometric $K_0$-quasiconformal family. This in-run equivalence supplier remains open. [F2, F4, F5, F14, algebra]

1.5 By [F10], pass to a subsequence (still written $f_n$) converging uniformly in chordal distance to a normalized orientation-preserving $K_0$-quasiconformal homeomorphism $f$. Fix a bounded open disk $B\Subset\mathbb C$; its closure is compact by [thm-heine-borel-rn]. By [F16], $f(\overline B)$ is compact in the chordal metric. It avoids $\infty$, since $f$ is injective and fixes $\infty$. The continuous function $w\mapsto\chi(w,\infty)$ therefore has a positive minimum $\delta$ on $f(\overline B)$. The set $C_\delta=\{w\in\widehat{\mathbb C}:\chi(w,\infty)\ge\delta/2\}$ is closed in the compact chordal sphere, hence compact by [F16]; it lies in the finite chart and is Euclidean bounded by [F16]. Uniform chordal convergence and the triangle inequality put every sufficiently late $f_n(\overline B)$ inside $C_\delta$. Each of the finitely many earlier images is compact, avoids $\infty$ because $f_n$ fixes $\infty$, and is therefore Euclidean bounded by [F16]. Thus $\sup_n|f_n(B)|<\infty$. [F10, F16, given]

2.1 The area estimate [F11] now gives $\sup_n\int_B|Df_n|_{HS}^2<\infty$, hence both sequences $(f_n)_z$ and $(f_n)_{\bar z}$ are bounded in $L^2(B)$. By [F12] and [F14], take a subsequence weakly convergent for the first sequence and then a subsubsequence weakly convergent for the second. Uniform convergence in the finite chart lets every compactly supported smooth test function pass through the weak-derivative identity, so the weak limits are the distributional derivatives $f_z$ and $f_{\bar z}$ of $f$. Thus $f\in W^{1,2}_{loc}(B)$. [F10, F11, F12, F14, step 1.5]

3.1 For any $\eta\in L^2(B)$, split the weak pairing as $\int_B\eta(\mu_n(f_n)_z-\mu f_z)=\int_B\eta\mu((f_n)_z-f_z)+\int_B\eta(\mu_n-\mu)(f_n)_z$. The first term tends to zero by weak convergence; by [F13], the second is at most $\|\eta(\mu_n-\mu)\|_2\|(f_n)_z\|_2$, which tends to zero by [F9], dominated convergence and the uniform $L^2$ bound. Since $(f_n)_{\bar z}=\mu_n(f_n)_z$, passage to weak limits gives $f_{\bar z}=\mu f_z$ almost everywhere on $B$. Taking the countable exhaustion $B=D(0,m)$, [F9] assembles a global full-measure set in the finite chart; [F1] transports the equation to the infinity chart. Thus $f$ is a sphere weak solution. [F1, F2, F9, F10, F11, F12, F13, step 2.1]

4.1 For each $m$, let $Z_m$ be the Borel set in $D(0,m)$ where a finite Borel representative of $f_z$ vanishes, and let $N$ be a Borel null set outside which the equation from step 3.1 holds. On the relatively compact Borel set $E_m=Z_m\setminus N$ one has $f_{\bar z}=f_z=0$, hence $J_f=0$. If [F15] is discharged, its area formula gives $|f(E_m)|=\int_{E_m}J_f=0$; its inverse N-property then makes $E_m$ null. Countable additivity over $m$, together with $N$ being null, shows $f_z\ne0$ almost everywhere. The definition of $\mu_f$ now gives $\mu_f=\mu$ almost everywhere and $K_f=K(\mu)\le K_0$. This proof use of [F15] is provisional; see the Audit note. [F1, F2, F15, step 3.1, algebra]

5.1 Step 4.1 gives the normalized solution for (i), and step 1.1 proves its uniqueness. For any distinct target triple $(a,b,c)$, [F4] gives the unique Möbius map carrying $(0,1,\infty)$ to $(a,b,c)$; postcomposing the normalized solution preserves its Beltrami coefficient by [F2]. Any other solution with those three values differs by a Möbius map fixing the triple, hence is equal to it. [F2, F4, step 1.1, step 4.1, given] ∎

## Source notes

Lyubich, Ch. 2 §§14.1–14.5, printed pp. 195–198, was read in full. Its §14.5 disk proof supplies the model weak-limit calculation; the item writes the chartwise sphere smoothing, area bound, test-function limit and Möbius normalization explicitly. Bishop, Ch. 3 §2, printed pp. 85–88, and §6 Theorem 6.1, printed pp. 103–105, were also read in full. The printed proof of §3 Theorem 2.1 is blank, Theorem 2.11 prints the incorrect $K=(k+1)/(k-1)$, and Theorem 6.1 invokes $f_z\ne0$ almost everywhere without proving that input there; these passages are not accepted as proof of the open coefficient-equality obligation.

## Audit note

The proof of the weak equation and the normalized quasiconformal limit is explicit above. The claimed almost-everywhere equality $\mu_f=\mu$ additionally needs $f_z\ne0$ almost everywhere. Step 4.1 provisionally invokes `lem-analytic-quasiconformality-implies-modulus-distortion` for the area formula and inverse N-property, but that item's reverse-area/N proof has an open source obligation. Keep this theorem escalated until that supplier and its exact step-4.1 use are verified. Other provisional direct suppliers and exact uses are recorded in the assigned report and cross-batch ledger.
