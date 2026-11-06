---
id: lem-gts-weighted-holder-poisson-isomorphism-and-mongeampere-openness
kind: lemma
title: Weighted Hölder Poisson inversion and openness of the normalized volume equation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-calabi-yau-metrics-holonomy
proof_strategy: direct
deps:
  - def-gts-kahler-class-canonical-bundle-and-ricci-form
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-general-stokes-theorem
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - thm-interior-schauder-estimate-for-uniformly-elliptic-equations
  - def-holder-spaces-c-k-alpha-and-their-scaled-norms
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - cor-real-and-euclidean-vector-valued-ascoli-arzela
  - thm-implicit-function-theorem-for-banach-spaces
dependency_roles:
  def-gts-kahler-class-canonical-bundle-and-ricci-form: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-choice-implies-dependent-implies-countable-choice: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  thm-interior-schauder-estimate-for-uniformly-elliptic-equations: mathematical-premise
  def-holder-spaces-c-k-alpha-and-their-scaled-norms: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  cor-real-and-euclidean-vector-valued-ascoli-arzela: mathematical-premise
  thm-implicit-function-theorem-for-banach-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ved V. Datar, Lecture Notes on Calabi's Conjectures and Kähler–Einstein Metrics
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/Calabi_Yau.pdf
      locator: "PDF pp.8–9, Corollary2.19 and Theorem2.17 (stated linear results); pp.12–14, complete proof of Proposition3.3. The Hölder inversion and fixed-reference normalization are reconstructed here."
    - title: Zbigniew Błocki, The Complex Monge–Ampère Equation in Kähler Geometry
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/cetr.pdf
      locator: "Section8, printed pp.125–126 (PDF31–32), normalized density continuity method; the derivative here includes its density factor explicitly."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 1
---

## Statement

Assume the Axiom of Choice. Let $X$ be a compact connected Kähler manifold of complex dimension $n\ge1$, with smooth Kähler forms $\omega_0$ and $\omega_1$. Put $dV_a=\omega_a^n$, $\rho=dV_1/dV_0$, and $\Delta_1u=\operatorname{tr}_{\omega_1}(i\partial\bar\partial u)$. Fix an integer $k\ge0$ and $0<\alpha<1$. Define $C^{k,\alpha}(X,\mathbb R)$ by any finite smooth precompact atlas and the sum of the usual derivative suprema and top-derivative Hölder seminorms on compact inner charts; equivalent choices give equivalent norms. Let $C^{k,\alpha}_0$ be the closed subspace of functions with $\int_Xu\,dV_0=0$. Then
$$L=\rho\Delta_1:C^{k+2,\alpha}_0\longrightarrow C^{k,\alpha}_0$$
is a bounded linear bijection with bounded inverse. In particular the mean-zero subspaces in this assertion both use the fixed reference volume $dV_0$, even though the Poisson equation is solved for $\omega_1$.

The unweighted equation has the global estimate $\|u\|_{C^{k+2,\alpha}}\le C(\|\Delta_1u\|_{C^{k,\alpha}}+\|u\|_{C^0})$ for smooth real $u$. If $\rho_t$ is a smooth positive density path of constant total volume $\int_X\rho_t dV_0=\int_XdV_0$, then the parameters admitting a smooth normalized solution of $(\omega_0+i\partial\bar\partial\phi)^n=\rho_t dV_0$ with positive form constitute a relatively open set. The inverse and openness claims include complex dimension one.

## Statement references

[Datar, Proposition3.3](https://math.iisc.ac.in/~vvdatar/Lecture_Notes/Calabi_Yau.pdf)

[Błocki, Section8](https://gamma.im.uj.edu.pl/~blocki/publ/ln/cetr.pdf)

## Facts & Assumptions

**Given:** $X$, the two Kähler forms, $k$, $\alpha$, and AC.

[F1] [[def-gts-kahler-class-canonical-bundle-and-ricci-form]] fixes $\omega=i g_{a\bar b}dz^a\wedge d\bar z^b$. The scalar trace Laplacian is $g^{a\bar b}\partial_a\partial_{\bar b}$; it is nonpositive in the integral pairing by [[thm-general-stokes-theorem]].

[F2] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] supplies the bounded Green inverse $G:L^2\to H^2$ for a smooth formally symmetric positive-symbol Laplace-type operator on a compact boundaryless manifold, on the orthogonal complement of its smooth kernel. It preserves smooth data. No Hölder regularity is imported through this fact.

[F3] [[thm-interior-schauder-estimate-for-uniformly-elliptic-equations]] applies on real balls of dimension at least two to a bounded $C^2$ solution of a scalar nondivergence elliptic equation with $C^{0,\alpha}$ coefficients and source. It proves the actual $C^{2,\alpha}$ regularity and estimate, with explicit dependence on ellipticity, coefficient norms and nested-ball radii.

[F4] [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]] gives the coordinate norms. [[thm-smooth-partitions-of-unity-exist-on-manifolds]] supplies smooth subordinate cutoffs; on this compact manifold finitely many precompact charts suffice. [[cor-real-and-euclidean-vector-valued-ascoli-arzela]] gives a uniformly convergent subsequence for each bounded equicontinuous finite derivative-array sequence on each nonempty compact coordinate ball, with values in a finite-dimensional real Euclidean space.

[F5] [[thm-implicit-function-theorem-for-banach-spaces]] applies to a continuously Fréchet differentiable map between real Banach spaces whose derivative in the unknown is a bounded linear isomorphism.

[A1] [[def-axiom-of-choice]] supplies the countable/dependent choice of these analytic suppliers by [[thm-choice-implies-dependent-implies-countable-choice]].

## Proof

**Given:** [F1]–[F5] and [A1].

1.1 We first specify the function-space facts needed below. Choose finitely many coordinate balls with larger concentric balls still in the charts and compact inner balls covering $X$. Changes of coordinates and their derivatives are bounded on these finitely many compact overlaps, so the chain rule and $[ab]_\alpha\le\|a\|_\infty[b]_\alpha+\|b\|_\infty[a]_\alpha$ compare any two such norms. If a sequence is Cauchy in $C^{r,\alpha}$, every derivative through order $r$ converges uniformly on each compact ball. Integration on coordinate segments shows that these limits are the successive derivatives of the limiting function. The top-order difference quotients obey the Cauchy bounds on passage to the limit, proving convergence in the full norm. Overlap identities pass uniformly, so these limits define one function on $X$. Thus the global spaces are Banach. Integration against a fixed smooth density is continuous, so the indicated mean-zero subspaces are closed and Banach. Repeated Leibniz and the displayed product estimate make multiplication a continuous bilinear map on each $C^{r,\alpha}$. Smooth coefficients act boundedly. [F4, A1, construct, algebra]

2.1 The real principal matrix of $\Delta_1$ is positive definite on every compact chart, and its coefficients are smooth. Applying [F3] on finitely many inner/outer balls gives $\|u\|_{C^{2,\alpha}}\le C(\|\Delta_1u\|_{C^{0,\alpha}}+\|u\|_\infty)$ for smooth $u$. Higher orders follow without assuming a new higher-order estimate: for $L_0=a^{ij}\partial_{ij}+b^i\partial_i$ and a coordinate derivative $D^\beta$, the equation for $D^\beta u$ is $L_0D^\beta u=D^\beta(L_0u)-\sum_{0<\gamma\le\beta}\binom\beta\gamma(D^\gamma a^{ij})D^{\beta-\gamma}\partial_{ij}u-\sum_{0<\gamma\le\beta}\binom\beta\gamma(D^\gamma b^i)D^{\beta-\gamma}\partial_i u$. Every commutator term contains at most $|\beta|+1$ derivatives of $u$. Inductively use the already obtained $C^{|\beta|+1,\alpha}$ estimate on intermediate balls, and [F3] on smaller balls, to obtain the claimed $C^{k+2,\alpha}$ estimate, with a constant depending on finitely many coefficient norms and on the chosen fixed nested radii. For every fixed $k$ these balls can be chosen in the original atlas and their innermost subballs still cover $X$. This proves the unweighted global estimate in the Statement. [F3, F4, step 1.1, algebra, induction]

2.2 Stokes gives $-\int_Xu\Delta_1u\,dV_1=\int_X|\partial u|_{\omega_1}^2dV_1$, so the kernel on smooth real functions consists exactly of the constants, by connectedness. The positive-frequency symbol of $P=-\Delta_1$ is scalar positive definite; $P$ is formally symmetric for $dV_1$. Hence [F2] applies with real trivial line bundle and precisely its $H^2$ domain, in real dimension $2n\ge2$. For a smooth $f$ of zero $dV_0$-mean, put $h=f/\rho$. Its compatibility condition is exactly $\int_Xh\,dV_1=\int_Xf\,dV_0=0$. Let $v=G(-h)$, so $\Delta_1v=h$ and $v$ is smooth of zero $dV_1$-mean. Set $u=v-(\int_Xv\,dV_0)/(\int_XdV_0)$. Then $Lu=f$ and $u$ has the required reference mean zero. The $L^2\to H^2$ Green bound, equivalence of the two smooth positive densities, and Cauchy–Schwarz for this constant correction give $\|u\|_{L^2(dV_0)}\le C\|f\|_{L^2(dV_0)}$. Thus no wrong-volume orthogonality condition has been imposed. [F1, F2, step 1.1, algebra, construct]

3.1 To remove the $C^0$ term from the estimate, a uniform coordinate-ball averaging argument gives, for every $\varepsilon>0$, $\|u\|_\infty\le\varepsilon\|u\|_{C^{k+2,\alpha}}+C_\varepsilon\|u\|_{L^2(dV_0)}$. Indeed at a maximum-modulus point choose one of the inner charts. On a surrounding coordinate ball of radius $r$ lying in its outer chart, the mean value theorem bounds the difference between the central value and the ball average by $Cr\|Du\|_\infty$, while Cauchy–Schwarz bounds the average by $Cr^{-n}\|u\|_2$; coordinate densities are uniformly comparable to Lebesgue measure. Choose $r$ uniformly small so the first coefficient is at most $\varepsilon$. Insert this inequality into step 2.1, using bounded multiplication by $\rho^{-1}$ and then the $L^2$ bound from step 2.2. Absorbing with $\varepsilon$ smaller than the reciprocal of twice the Schauder constant gives $\|u\|_{C^{k+2,\alpha}}\le C\|f\|_{C^{k,\alpha}}$ for the smooth normalized solution. All constants here concern the fixed smooth metrics, not a varying degenerating family. [F3, step 1.1, step 2.1, step 2.2, algebra]

4.1 Now let $f\in C^{k,\alpha}_0$ without a smoothness assumption. Subordinate cutoffs and convolution on the outer charts produce smooth $f_j$ with uniformly bounded $C^{k,\alpha}$ norms and $f_j\to f$ in $C^{k,\beta}$ for every $0<\beta<\alpha$; subtract their $dV_0$ averages. The bounds follow by differentiating convolution and the identity $|\eta_\epsilon*w(x)-\eta_\epsilon*w(y)|\le[w]_\alpha|x-y|^\alpha$ for a nonnegative unit-mass mollifier. Uniform convergence of each derivative through order $k$ follows from continuity on compact supports; the interpolation split into $|x-y|\le\delta$ and $|x-y|>\delta$ then gives convergence at every smaller exponent. We do not assert smooth density in the full $C^{k,\alpha}$ norm. Solve for smooth $u_j$ by step 2.2. Step 3.1 bounds them uniformly in $C^{k+2,\alpha}$. The Euclidean Arzelà–Ascoli supplier in [F4], applied to the finitely many derivative arrays and compact chart balls, gives a subsequence converging in $C^{k+2,\beta}$ to a normalized $u$. Each $\alpha$ difference quotient of each top derivative passes to its limit, so $u\in C^{k+2,\alpha}$ with the same bound. The equation passes in $C^0$, giving $Lu=f$. Uniqueness follows from the kernel argument in step 2.2, which also applies to a $C^{k+2,\alpha}$ function by classical integration by parts. Therefore this solution map is linear and bounded, proving the stated Banach isomorphism. This is the full passage from the $L^2$ Fredholm inverse to the Hölder inverse. [F1, F2, F4, step 1.1, step 2.2, step 3.1, A1, construct, algebra]

5.1 The local regularity bootstrap used for openness must also start at the regularity the implicit theorem supplies. Here is its needed form. If $u\in C^{2,\alpha}$ solves a scalar uniformly elliptic equation with coefficients and source in $C^{1,\alpha}$, form the coordinate difference quotient $\delta_hu(x)=(u(x+he_a)-u(x))/h$ on a smaller ball. It lies in $C^{2,\alpha}$ for every nonzero $h$. Its equation has source $\delta_hf-(\delta_ha^{ij})(\partial_{ij}u)(x+he_a)-(\delta_hb^i)(\partial_i u)(x+he_a)-(\delta_hc)u(x+he_a)$ for an operator with the unshifted coefficients. Each coefficient difference quotient is bounded in $C^{0,\alpha}$ by the $C^{1,\alpha}$ norm, using $\delta_ha=\int_0^1\partial_aa(x+she_a)\,ds$; the same holds for $f$. The source norm is uniformly bounded, as is $\|\delta_hu\|_\infty\le\|\partial_au\|_\infty$. Thus [F3] bounds $\delta_hu$ uniformly in $C^{2,\alpha}$ on an inner ball. Passing to a subsequence as in step 4.1 shows $\partial_au\in C^{2,\alpha}$. Therefore $u\in C^{3,\alpha}$. Repeating this argument on differentiated equations, with the explicit commutator formula of step 2.1, proves the higher-order regularity and estimates whenever the corresponding coefficient and source derivatives are available. This avoids applying a classical $C^2$ estimate to a derivative known initially only to be $C^1$. [F3, step 1.1, step 2.1, step 4.1, algebra, induction]

6.1 Define $\mathcal V(\phi)=(\omega_0+i\partial\bar\partial\phi)^n/dV_0$ on the open positive cone in $C^{3,\alpha}_0$. It is a polynomial in the coordinate second derivatives of $\phi$ and fixed smooth coefficients, so step 1.1 makes it a smooth Banach-space map to $C^{1,\alpha}$. It has fixed total integral: the difference of the two top forms is $i\partial\bar\partial\phi\wedge\sum_{j=0}^{n-1}\omega_\phi^j\wedge\omega_0^{n-1-j}$, and Stokes makes its integral zero. For $C^{3,\alpha}$ potentials this follows by smooth approximation in $C^2$, preserving positivity, and continuity of the determinants and integrals. At any smooth solution $\phi_*$, determinant differentiation gives $D\mathcal V_{\phi_*}(\psi)=\rho_*\Delta_{\omega_{\phi_*}}\psi$, where $\rho_*=\omega_{\phi_*}^n/dV_0$. This derivative maps exactly the fixed-reference zero-mean spaces and is a bounded isomorphism by step 4.1 with $k=1$. Apply [F5] with the density difference $y$ as a Banach-space parameter to $\mathcal V(\phi)-\rho_*-y$. It gives normalized positive $C^{3,\alpha}$ solutions for all $y$ sufficiently small in the reference-mean-zero $C^{1,\alpha}$ space. Take $y=\rho_t-\rho_*$ for sufficiently close path parameters within the given interval; no parameter extension beyond an endpoint is needed. In a holomorphic chart write $h_{a\bar b}=g_{a\bar b}+\phi_{a\bar b}$. Taking a first coordinate derivative of $\log\det h=\log\det g+\log\rho_t$ shows that $\psi=\partial_c\phi$ satisfies $h^{a\bar b}\psi_{a\bar b}=\partial_c(\log\det g+\log\rho_t)-h^{a\bar b}\partial_cg_{a\bar b}$. The coefficients and source are $C^{1,\alpha}$, while $\psi\in C^{2,\alpha}$; step 5.1 gives $\psi\in C^{3,\alpha}$, hence $\phi\in C^{4,\alpha}$. Iteration gives smoothness. Thus the smooth solvability set is relatively open. [F1, F5, step 1.1, step 4.1, step 5.1, algebra] ∎
