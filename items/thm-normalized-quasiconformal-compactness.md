---
id: thm-normalized-quasiconformal-compactness
kind: theorem
title: Compactness of the normalized K-quasiconformal self-maps of the sphere
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 8
deps: [def-geometric-quasiconformal-homeomorphism, def-acl-sobolev-quasiconformal-homeomorphism, thm-geometric-and-analytic-quasiconformality-equivalent, lem-inverse-of-a-quasiconformal-map-is-quasiconformal, lem-analytic-quasiconformality-implies-modulus-distortion, lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds, cor-ascoli-arzela-for-compact-metric-domains, thm-metric-compactness-equivalences, def-chordal-metric-riemann-sphere, thm-chordal-metric-induces-sphere-topology, thm-stereographic-projection-riemann-sphere-homeomorphism, rem-riemann-sphere-one-point-compactification, thm-jordan-brouwer-separation, thm-hilbert-spaces-are-reflexive-by-riesz-representation, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous, thm-singular-chain-homotopy-formula, thm-global-sphere-degree-is-the-sum-of-local-degrees, def-countable-choice, def-dependent-choice, def-axiom-of-choice, lem-mollification-commutes-with-weak-derivatives-in-the-interior, thm-l-one-approximate-identities-converge-in-l-p, cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-acl-characterisation-of-w-one-p, lem-l-two-with-the-integral-pairing-is-a-hilbert-space]
axiom_use: The Axiom of Choice is used through the analytic/geometric quasiconformal equivalence and the Arzelà–Ascoli theorem; Countable Choice and Dependent Choice are included for the metric compactness equivalence used to pass from sequential compactness to compactness.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §13.4, Theorem 13.2, printed pp. 191–192: equicontinuity of normalized sphere maps from annular modulus distortion and compactness in the uniform topology. The proof's limit-regularity step is not used here."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §3, Theorems 3.3–3.4, printed pp. 54–55, for modulus-based equicontinuity; Ch. 2 §5, Theorems 5.1–5.2, printed pp. 59–61, for closure under uniform convergence to a homeomorphism and continuity of quadrilateral modulus. Contextual reference only: the present proof uses spherical energy and weak Jacobians, not its conformal-parameter or four-corner argument."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Fix $K\ge1$ and let $\widehat{\mathbb C}$ carry its chordal metric $\chi$ ([[def-chordal-metric-riemann-sphere]], [[thm-chordal-metric-induces-sphere-topology]], [[rem-riemann-sphere-one-point-compactification]]). Let $\mathcal F_K$ be the set of orientation-preserving, $K$-quasiconformal homeomorphisms $f:\widehat{\mathbb C}\to\widehat{\mathbb C}$ satisfying $f(0)=0$, $f(1)=1$, and $f(\infty)=\infty$, where quasiconformality is understood in the geometric sense of [[def-geometric-quasiconformal-homeomorphism]] and equivalently in the analytic sense by [[thm-geometric-and-analytic-quasiconformality-equivalent]]. Then:

(i) $\mathcal F_K$ is equicontinuous in $\chi$: for every $\varepsilon>0$ there is $\delta>0$ such that $\chi(f(z),f(w))<\varepsilon$ whenever $\chi(z,w)<\delta$, for every $f\in\mathcal F_K$.

(ii) Every sequence in $\mathcal F_K$ has a subsequence converging uniformly on $\widehat{\mathbb C}$ to an element of $\mathcal F_K$. Thus $\mathcal F_K$ is compact in the uniform topology.

(iii) If $f_n$ are orientation-preserving quasiconformal sphere homeomorphisms, $f_n\to f$ uniformly in $\chi$, and $f$ is a homeomorphism, then its maximal dilatation, assigned $K_f=+\infty$ when $f$ is not quasiconformal, is lower semicontinuous:
$$K_f\le\liminf_{n\to\infty}K_{f_n}.$$

The normalization is essential: it removes the noncompact Möbius freedom. The compactness and lower-semicontinuity claims apply equally to the equivalent analytic class.

## Facts & Assumptions

**Given:** AC, normalized orientation-preserving sphere homeomorphisms, and a common K when proving compactness.

[F1] Geometric and analytic constants agree; inverses have the same constant. The full area formula gives $\int_EJ_f=|f(E)|$ and its weighted version by simple approximation ([[thm-geometric-and-analytic-quasiconformality-equivalent]], [[lem-inverse-of-a-quasiconformal-map-is-quasiconformal]], [[lem-analytic-quasiconformality-implies-modulus-distortion]]).

[F2] Stereographic coordinates have conformal scale $2/(1+|w|^2)$; this follows by differentiating the explicit map in [[thm-stereographic-projection-riemann-sphere-homeomorphism]]. Its area weight is $4/(1+|w|^2)^2$, whose total planar integral is $4\pi$ by polar coordinates. Chordal distance is the Euclidean distance of the sphere images ([[def-chordal-metric-riemann-sphere]]).

[F3] The core's exceptional-curve argument supplies AC and weighted speed on almost every circular leaf after a smooth polar coordinate change. Jordan separation identifies the small side of a loop lying in a sufficiently small spherical cap ([[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]], [[thm-jordan-brouwer-separation]]).

[F4] Equicontinuous maps between compact metric spaces have uniform subsequences, and sequential compactness is compactness for metric spaces ([[cor-ascoli-arzela-for-compact-metric-domains]], [[thm-metric-compactness-equivalences]]).

[F5] Real $L^2$ is a Hilbert space ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]). The four matrix entries form a finite Hilbert direct sum: its sum-of-squares inner product is complete because each component is complete. Hilbert spaces are reflexive and bounded sequences have weakly convergent subsequences under the stated AC consequences. Convex norm-continuous functionals are weakly lower semicontinuous ([[thm-hilbert-spaces-are-reflexive-by-riesz-representation]], [[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]], [[lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous]]). We apply this to the weighted integral of the squared matrix operator norm on real $L^2$ matrix fields; it is convex and norm-continuous by the matrix norm triangle inequality and Cauchy–Schwarz. Interior mollification and Lp approximate identities give derivative convergence; for continuous functions they converge uniformly on compacta ([[lem-mollification-commutes-with-weak-derivatives-in-the-interior]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]]). The AC fundamental theorem is [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]. The general Sobolev/ACL equivalence is [[thm-acl-characterisation-of-w-one-p]], applied before asserting quasiconformality.

## Proof

**Proof technique:** obtain equicontinuity by weighted spherical energy and short circles, then preserve the exact analytic bound by weak derivatives and distributional Jacobians.

1.1 A normalized map fixes infinity and is a plane homeomorphism on the finite chart. In either of the two bounded stereographic source charts, [F1]–[F2] and $\|Df\|_{\rm op}^2\le KJ_f$ give total weighted energy at most $4\pi K$: integrate the target weight $4/(1+|f|^2)^2$ against $J_f$. For a circle of source radius $r$ centered at x, let L(r) be its spherical image length. Almost every circle is AC by [F3], and Cauchy–Schwarz gives $L(r)^2\le2\pi r\int_{|z-x|=r}4\|Df\|_{\rm op}^2/(1+|f|^2)^2\,ds$. Integrating with dr/r between $\delta$ and $\sqrt\delta$ yields $\int L(r)^2dr/r\le8\pi^2K$. Hence one such circle has $L(r)\le4\pi\sqrt{K/\log(1/\delta)}$, uniformly in f and the center x. [F1, F2, F3, given, algebra]

2.1 The three fixed points have positive minimum pairwise chordal distance c. At each x at least two of them stay a fixed positive distance from x; a uniformly small source disk avoids those two. Use the short circle from step 1.1 surrounding the smaller disk of radius delta. Its image lies in a spherical cap of diameter at most twice its length. For sufficiently small delta this cap cannot contain both avoided fixed points. The complement of the cap is connected, so Jordan separation makes one image complementary component lie inside the cap and the other contain its exterior. The image of the source disk cannot be the latter component, because it would contain at least one of the two fixed points which the source disk avoids. Thus its diameter tends uniformly to zero. Euclidean and chordal distances are uniformly comparable on the two bounded source charts, proving common chordal equicontinuity. The inverse maps are normalized and have the same K by [F1], so the identical argument gives their equicontinuity. [F1, F2, F3, step 1.1, construct]

3.1 Apply [F4] to a sequence and then its inverses on the obtained subsequence. We obtain uniform limits f and g. Uniform convergence and continuity show $g(f(z))=z$ and $f(g(z))=z$, so f is a homeomorphism with inverse g and fixes the three points. It preserves orientation: uniformly close sphere maps are homotopic by normalized straight-line interpolation of their unit-sphere values; homotopy invariance of the sphere degree preserves degree one, and for a homeomorphism this is the positive local orientation sign ([[thm-singular-chain-homotopy-formula]], [[thm-global-sphere-degree-is-the-sum-of-local-degrees]]). [F4, step 2.1, construct]

4.1 We prove closure with the exact K, independently of circular-dilatation or quadrilateral-modulus continuity. On any compact source patch choose a target chart avoiding its compact f-image complement point. Uniform convergence gives bounded finite coordinate values for f_n there for large n. The area formula and distortion bound give a uniform local $L^2$ derivative bound. By [F5], pass to weak $L^2$ derivative limits on a smaller patch; uniform convergence and integration against test functions identify them as Df. Write $f_n=u_n+iv_n$. The distributional identity $J_{f_n}=\partial_x(u_n\partial_yv_n)-\partial_y(u_n\partial_xv_n)$ follows by smooth approximation and commutation of mixed weak derivatives. Uniform convergence of u_n and weak $L^2$ convergence of the derivatives of v_n show that these Jacobians converge distributionally to $J_f$. For every nonnegative smooth compactly supported phi, weak lower semicontinuity and the bound on f_n give $\int\phi\|Df\|_{\rm op}^2\le\liminf\int\phi\|Df_n\|_{\rm op}^2\le K\lim\int\phi J_{f_n}=K\int\phi J_f$. Hence $\|Df\|_{\rm op}^2\le KJ_f$ almost everywhere. If J_f is zero this forces Df zero; otherwise the singular-value ratio is at most K, equivalently the analytic Beltrami bound. The general ACL characterization applies to the resulting W1,2 class, and continuity identifies f pointwise with its ACL representative on almost every line. Thus f is analytically K-QC by its definition and geometrically K-QC by [F1], proving closure. [F1, F5, step 3.1, construct, algebra]

5.1 The subsequential limit is therefore in the normalized family. Sequential compactness and the supremum chordal metric give compactness by [F4]. For general uniformly convergent quasiconformal homeomorphisms with a homeomorphic limit, if $L=\liminf K_{f_n}<\infty$, take a subsequence whose constants tend to L. The local derivative argument in step 4.1 uses the uniformly bounded constants and passes their limit to give $\|Df\|_{\rm op}^2\le LJ_f$. It follows that $K_f\le L$; if L is infinite the inequality is automatic. Orientation is preserved by the same homotopy argument. This proves the full lower-semicontinuity claim without a normalization assumption on that sequence. [F1, F4, F5, step 3.1, step 4.1, algebra] ∎
