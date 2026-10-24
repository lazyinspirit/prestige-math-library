---
id: lem-inverse-of-a-quasiconformal-map-is-quasiconformal
kind: lemma
title: The inverse of a quasiconformal map is quasiconformal with the same dilatation
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 6
deps: [def-acl-sobolev-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, def-geometric-quasiconformal-homeomorphism, lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds, thm-geometric-and-analytic-quasiconformality-equivalent, lem-mollification-commutes-with-weak-derivatives-in-the-interior, thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign, thm-morse-sard-for-smooth-manifolds, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-naturality-of-the-long-exact-sequence-of-a-pair, thm-excision-for-singular-homology, prop-the-first-hurewicz-map-in-degree-one-is-abelianization, thm-winding-number-equals-circle-degree, cor-winding-number-classifies-loops-in-the-punctured-plane, def-wirtinger-derivatives, thm-wirtinger-chain-rule-for-real-differentiable-maps, thm-chain-rule-for-total-derivatives, thm-determinant-sign-detects-orientation-change, prop-relative-homology-is-functorial-for-maps-of-pairs, def-countable-choice, def-axiom-of-choice, thm-l-one-approximate-identities-converge-in-l-p, cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, lem-c-one-stokes-for-complex-euclidean-domains, thm-measure-uniqueness-on-a-sigma-finite-pi-system, lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]
axiom_use: The Axiom of Choice is inherited from the ACL/Sobolev definition; Countable Choice is included for the completed-product ACL interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §12.5, printed p. 188, Proposition 12.15; §12.2–12.4 for the circular-dilatation and quasisymmetry route; §11.1 for the inverse Beltrami formula."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §1, printed pp. 49–51: the real-linear inverse dilatation and the Beltrami chain identity, specialized to $g=f^{-1}$."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Sources

- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §12.5, printed p. 188, Proposition 12.15, for inverse and composition quasiconformality; These earlier source sections are contextual; the present proof obtains inverse regularity from the independent quadrilateral equivalence, then proves its area and chain-rule interfaces locally.
- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 2 §1, printed pp. 49–51, for the real-linear inverse dilatation and the Beltrami chain identity.

## Statement

Assume the Axiom of Choice. Let $f:\Omega\to\Omega'$ be an analytically $K$-quasiconformal homeomorphism ([[def-acl-sobolev-quasiconformal-homeomorphism]]) with Beltrami coefficient $\mu_f$ ([[def-beltrami-coefficient-and-maximal-dilatation]]). Then $g=f^{-1}:\Omega'\to\Omega$ is analytically $K$-quasiconformal, $K_g=K_f$, and
$$\mu_g(f(z))=-\mu_f(z)\,\frac{f_z(z)}{\overline{f_z(z)}}\quad\text{for almost every }z\in\Omega.$$
Consequently $|\mu_g|\circ f=|\mu_f|$ almost everywhere, and $f$ is analytically quasiconformal exactly when $f^{-1}$ is, with the same maximal dilatation.

## Facts & Assumptions

**Given:** The Axiom of Choice, complex domains $\Omega,\Omega'$, and an analytic $K$-quasiconformal homeomorphism $f:\Omega\to\Omega'$.

[F1] Analytic and geometric quasiconformality agree with the same constant. The inverse geometric bounds follow by rearrangement and its orientation sign is the inverse positive local-homology map; hence the inverse is independently analytically K-quasiconformal ([[thm-geometric-and-analytic-quasiconformality-equivalent]], [[def-geometric-quasiconformal-homeomorphism]]).

[F2] The earlier core gives total differentiability a.e. and the lower area inequality, without assuming inverse regularity ([[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]], Remark). The mollifications are smooth ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]). Smooth Sard and ordinary nonnegative change of variables apply to its smooth approximants ([[thm-morse-sard-for-smooth-manifolds]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]). The complete reverse area argument is supplied below, separately for each already-regular inverse. Interior mollification and Lp approximate identities give derivative convergence; for continuous functions they converge uniformly on compacta ([[lem-mollification-commutes-with-weak-derivatives-in-the-interior]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions]]). The AC fundamental theorem is [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]].

[F3] For a real-differentiable homeomorphism $f$ at $z$ with invertible derivative, differentiability of $g=f^{-1}$ at $f(z)$ gives $Dg(f(z))=(Df(z))^{-1}$. In Wirtinger form, the real chain rule is
$$\begin{aligned} (g\circ f)_z&=(g_w\circ f)f_z+(g_{\bar w}\circ f)\overline{f_{\bar z}},\\ (g\circ f)_{\bar z}&=(g_w\circ f)f_{\bar z}+(g_{\bar w}\circ f)\overline{f_z}, \end{aligned}$$
and the Wirtinger coefficients uniquely determine a real-linear map ([[thm-chain-rule-for-total-derivatives]], [[thm-wirtinger-chain-rule-for-real-differentiable-maps]], [[def-wirtinger-derivatives]]). The Beltrami coefficient and least-dilatation conventions are those of [[def-beltrami-coefficient-and-maximal-dilatation]].

[F4] The local-homology multiplier of an invertible smooth derivative is its determinant sign ([[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]]); the connecting-map identification in step 2.1 translates that multiplier into local winding. Smooth Euclidean inverse branches are supplied by [[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]]. Stokes holds for C1 complex forms on bounded C1 Euclidean domains under AC ([[lem-c-one-stokes-for-complex-euclidean-domains]]); rounding finitely many rectangle corners and then letting their radii shrink gives the rectangle-with-disks formula below. Measure uniqueness applies on a generating pi-system with a finite-measure exhaustion ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]).

## Proof

**Proof technique:** obtain inverse regularity from the quadrilateral equivalence, establish the area formula for both maps, and then differentiate on a common full-measure set.

1.1 By [F1], $g=f^{-1}$ is analytically K-quasiconformal independently of any area equality or inverse-null assumption. Both maps are orientation-preserving, belong locally to $W^{1,2}$, and are differentiable almost everywhere by [F2]. [F1, F2, given]

2.1 We prove area equality for either map $u$. On an interior rectangle, choose countable dense sets of good ACL horizontal and vertical levels. Their subrectangles form a basis with rectifiable Jordan image boundaries. These image boundaries have area zero: divide each finite-length arc into pieces of length at most $\delta$, cover by squares of side $2\delta$, and let the total cost $C\delta(\operatorname{length}+\delta)$ tend to zero. Let $D$ be such a closed rectangle and $T\Subset u(D^\circ)$. Smooth mollifications $u_n$ converge uniformly on a neighborhood of $D$, with derivatives converging in $L^2$; determinants $J_n$ converge to $J_u$ in $L^1$, and since $J_u\ge0$, the integrals of $(J_n)_-$ tend to zero. Uniform convergence makes the straight homotopy of the boundary images avoid every $y\in T$ for large $n$. The positively oriented rectifiable Jordan contour $u(\partial D)$ has winding one at $y$: triangulate $D$ into a singular2-chain, transport it by $u$, and apply naturality of the pair boundary map to its positive local orientation class. Excision identifies that class with the positive generator of $H_2(\mathbb R^2,\mathbb R^2\setminus\{y\})$; the connector is an isomorphism because $\mathbb R^2$ is contractible, giving the positive punctured-plane H1 generator. Degree-one Hurewicz and the winding/degree identification give analytic winding one. This uses [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-naturality-of-the-long-exact-sequence-of-a-pair]], [[thm-excision-for-singular-homology]], [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]], [[thm-winding-number-equals-circle-degree]], [[cor-winding-number-classifies-loops-in-the-punctured-plane]]; translating by $-y$ and a nonzero complex scaling normalizes the contour basepoint to1 without changing its integral. Thus $u_n(\partial D)$ also has winding one about $T$. [F1, F2, step 1.1, construct]

3.1 For a regular value $y$ of $u_n$ away from its boundary, its fibre in $D$ is finite. Delete disjoint small disks around these preimages. Round the four rectangle corners in neighborhoods avoiding its finite fibre, and apply C1 Stokes [F4] to the pulled-back closed angular form $(-v\,du+u\,dv)/(2\pi(u^2+v^2))$, after translating by $y$. This gives boundary winding as the sum of the small-circle windings. The corner-arc integrals tend to zero, since the form is bounded there and their lengths tend to zero; passage to the limit recovers the rectangle formula. Interpolation to the invertible derivative on each small circle makes each term $\operatorname{sgn}J_n$ there. Hence a regular $y\in T$ has signed fibre count1 and at least one positive-Jacobian preimage. Sard [F2] makes the exceptional target values null. Use the smooth local inverse theorem [F4] and a countable rational-basis cover to partition the open set $\{J_n>0\}\cap D^\circ$ into disjoint Borel inverse-branch pieces. Nonnegative change of variables on each branch and countable additivity give $\int_D(J_n)_+\ge|T|$. Therefore $\int_DJ_n\ge|T|-\int_D(J_n)_-$; passage to the limit and compact exhaustion of $u(D^\circ)$ give $\int_{D^\circ}J_u\ge|u(D^\circ)|$. The opposite lower area inequality is [F2]. On each chosen basis rectangle, its subrectangles from the same dense good levels, together with the whole rectangle, form a generating pi-system. Both restricted measures are finite and agree there, so [F4] applies with the constant whole-rectangle exhaustion. Countably many such rectangles cover the domain; disjointizing that cover extends equality to all relatively compact Borel sets. Exhaustion gives the area formula wherever needed. In particular $u$ sends null Borel sets to null sets. Apply this argument to both $f$ and the already-regular $g$. This supplies N and inverse-N without assuming either. [F2, F4, step 2.1, construct, algebra]

4.1 If $f_z$ vanished on a positive-area Borel set $E$ inside a compact exhaustion, the Beltrami inequality would make $J_f=0$ there. Step 3.1 gives $|f(E)|=0$, while the null-set property of $g$ would force $|E|=0$, a contradiction. Thus $f_z\ne0$ a.e. and $Df$ is nonsingular a.e. The non-differentiability set of $g$ has null preimage under $g$ by the same null-set property, so almost every source point is a common differentiability point. At such a point the chain rule [F3] for $g\circ f=\operatorname{id}$ gives $0=(g_w\circ f)f_{\bar z}+(g_{\bar w}\circ f)\overline{f_z}$ and the corresponding z equation equals1. Division yields $\mu_g(f(z))=-f_{\bar z}(z)/\overline{f_z(z)}=-\mu_f(z)f_z(z)/\overline{f_z(z)}$. [F1, F2, F3, step 3.1, algebra]

5.1 The modulus of the unimodular factor in step 4.1 is one. Null-set preservation in both directions transports the coefficient equality and its essential bounds, so $\|\mu_g\|_\infty=\|\mu_f\|_\infty$ and $K_g=K_f$. Step 1.1 already supplies inverse Sobolev regularity, so the coefficient calculation does not circularly assume it. Repeating the result for $g$ proves both directions of the final equivalence. [F1, F3, step 3.1, step 4.1, algebra] ∎

## Remark

The area argument above proves, for every relatively compact Borel set $E$ and either of the independently regular maps $u=f$ or $u=f^{-1}$,
$$|u(E)|=\int_EJ_u\,dA.$$
Consequently each map sends area-null Borel sets to null sets, and $J_f>0$ almost everywhere. The proof first obtains inverse regularity from quadrilateral equivalence, then proves this formula for both maps by ACL-selected rectangles and signed local winding. Neither inverse-null nor a later MRMT result is an input.
