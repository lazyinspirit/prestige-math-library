---
id: lem-bem-polyhedral-edge-kernel-representation
kind: lemma
title: Finite-energy transmission pairs have the double-layer kernel
  representation across polyhedral edges
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  [
    def-bem-lipschitz-polyhedral-boundary-and-trace-spaces,
    lem-bem-lipschitz-trace-and-lifting,
    def-bem-laplace-layer-potentials-and-energy-spaces,
    def-bem-newtonian-kernel-in-three-dimensions,
    lem-bem-newtonian-kernel-is-fundamental-solution,
    lem-bem-plane-poisson-kernel-fourier-transform,
    thm-gagliardo-nirenberg-sobolev-inequality,
    thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces,
    thm-holder-inequality-for-integrals,
    thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign,
    prop-mollifier-families-are-l-one-approximate-identities,
    thm-l-one-approximate-identities-converge-in-l-p,
    thm-divergence-theorem-for-bounded-c-one-euclidean-domains,
    def-axiom-of-choice,
    def-countable-choice,
    thm-polar-coordinates-formula-for-lebesgue-measure,
    lem-euclidean-chart-measure-agrees-with-polar-surface-measure,
    thm-sine-and-cosine-derivatives,
    thm-ftc-second-part
  ]
justified_by: []
proof_strategy: direct
axiom_use: The Axiom of Choice is inherited through homogeneous Sobolev
  embedding; Countable Choice through the trace, integration, and mollifier
  suppliers.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains:
        Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "Printed pp. 617–621, Green representation (3.4), weak representation
        Lemma 3.4(iii), and distributional double-layer identity (4.7). The
        proof here supplies the homogeneous-energy uniqueness at infinity
        directly."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Printed pp. 23–28, §§2.1–2.2: double-layer kernel, smooth-point signed
        limits, Green representation; pp. 40–46, §§3.1–3.3: transmission and
        energy interpretation. These notes motivate the conventions rather than
        supply a proved Sobolev extension."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and Countable Choice, and the polyhedral geometry and normal $n$ of [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]]. Let $\phi\in H^{1/2}(\Gamma)$ and let $(u^-,u^+)\in H^1(\Omega^-)\times E^+(\Omega^+)$ satisfy
$$\gamma^-u^- -\gamma^+u^+=-\phi,$$
$$\int_{\Omega^-}\nabla u^-\cdot\nabla v+\int_{\Omega^+}\nabla u^+\cdot\nabla v=0\qquad(v\in C_c^\infty(\mathbb R^3)).$$
Then, with smooth representatives off $\Gamma$,
$$u^\pm(x)=\int_\Gamma\partial_{n_y}G_3(x,y)\phi(y)\,dS_y,\qquad x\in\Omega^\pm.$$
The integral is absolutely convergent for each $x\notin\Gamma$, and equality holds without any vanishing condition at edges or vertices.

If additionally the restriction of $\phi$ to each closed face extends to a $C^1$ function on a planar neighborhood of that face, define, at a face-interior point $x$,
$$K_{\rm ker}\phi(x)=\int_\Gamma\partial_{n_y}G_3(x,y)\phi(y)\,dS_y.$$
This integral is absolutely convergent (the same-face integrand is zero away from $y=x$), and the interior/exterior normal limits are $K_{\rm ker}\phi(x)\mp\phi(x)/2$. Thus their Sobolev trace average agrees almost everywhere with $K_{\rm ker}\phi$; equivalently this is its principal-value realization. All assertions about values at edges and vertices themselves remain Sobolev trace assertions, not a pointwise half-jump formula there. In particular the statement includes facewise smooth densities agreeing across shared edges and taking nonzero values there.

## Facts & Assumptions

**Given:** The axioms, geometry, density, transmission pair, trace jump, and global smooth-test stationarity in the Statement. Write $U=u^-1_{\Omega^-}+u^+1_{\Omega^+}$, assigning any values on $\Gamma$.

[F1] Interior extension, bounded traces, and smooth approximation in flattened polyhedral charts are available from [[lem-bem-lipschitz-trace-and-lifting]]. The exterior energy space is defined in [[def-bem-laplace-layer-potentials-and-energy-spaces]]. The homogeneous Sobolev inequality supplies the $L^6$ interior representative ([[thm-gagliardo-nirenberg-sobolev-inequality]]).

[F2] $-\Delta_xG_3(x,y)=\delta_y$ in distributions ([[lem-bem-newtonian-kernel-is-fundamental-solution]]), with $G_3=(4\pi|x-y|)^{-1}$ ([[def-bem-newtonian-kernel-in-three-dimensions]]).

[F3] Absolutely integrable product integrals may be interchanged, and Holder bounds $L^1$ on bounded sets by $L^6$ ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-holder-inequality-for-integrals]]).

[F4] Mollification of a locally integrable function is smooth, derivatives pass to the bump, and unit-mass smooth bumps form approximate identities converging in $L^1$ ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]]).

[F5] Divergence on smooth balls is available from [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]. The plane Poisson kernel has mass one ([[lem-bem-plane-poisson-kernel-fourier-transform]]).

[F90] Polar integration uses the published radial formula, not a linear substitution: $dx=r^{n-1}dr\,d\sigma(\omega)$. The sphere measure agrees with graph-chart surface measure and scales by $R^{n-1}$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

[F94] The parametrization $(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ has surface Jacobian $\sin\theta$ off the surface-null poles and meridian. Thus $|S^2|=2\pi\int_0^\pi\sin\theta\,d\theta=4\pi$ and $|\partial B_r|=4\pi r^2$ by [F90]. ([[thm-sine-and-cosine-derivatives]], [[thm-ftc-second-part]])

## Proof

1.1 By [F1], extension and a bounded-support cutoff put $u^-$ in $L^6(\Omega^-)$; $u^+\in L^6(\Omega^+)$ by definition. Thus $U\in L^6(\mathbb R^3)$. Both pieces are $H^1$ in bounded boundary collars: on such a collar Holder gives local $L^2$ from $L^6$, and their gradients are already $L^2$. The fixed finite atlas also gives $\phi\in L^2(\Gamma)\subset L^1(\Gamma)$. [F1, F3, given, algebra]

2.1 For a compactly supported smooth $\eta$, integration by parts for one weak derivative gives $\langle\partial_j U,\eta\rangle=\int_{\Omega^-}(\partial_j u^-)\eta+\int_{\Omega^+}(\partial_j u^+)\eta+\int_\Gamma\phi n_j\eta\,dS.$ Here is a polyhedral justification that introduces no hidden edge flux. In a graph chart integrate the vertical derivative by the one-dimensional fundamental theorem; for tangential derivatives use the graph change $x_3=t+\psi(x')$ and its piecewise affine chain rule. The graph boundary contribution is $(u^+-u^-)n_j\,dS$. A chart partition sums these formulas; derivatives of the partition cancel. $H^1$ approximation and bounded trace convergence from [F1] pass this formula from smooth chart functions to the given pieces. Internal planar-sector boundaries cancel because the restrictions of one $H^1$ function have the same interface trace. Only first derivatives are integrated and edges have surface measure zero; no derivative of the discontinuous face normal is taken. The imposed jump makes $u^+-u^-=\phi$. Taking the divergence of the displayed distributional identity, and using stationarity for the smooth global test $\eta$, gives $\langle-\Delta U,\eta\rangle=\int_\Gamma\phi\,\partial_n\eta\,dS.$ [F1, step 1.1, given, algebra]

2.2 Put $P(x)=\int_\Gamma\partial_{n_y}G_3(x,y)\phi(y)dS_y$ off $\Gamma$. Since $|\partial_{n_y}G_3|\le(4\pi)^{-1}|x-y|^{-2}$ and $\int_{B_R(a)}|x-y|^{-2}dx\le CR$ uniformly in $a,y$, [F3] defines $P\in L^1_{\rm loc}(\mathbb R^3)$ and gives $\int_{B_R(a)}|P|\le CR\|\phi\|_{L^1(\Gamma)}.$ For the uniform ball estimate, if $|a-y|\le2R$ enclose the ball in $B_{3R}(y)$ and integrate radially; otherwise $|x-y|\ge|a-y|/2>R/2$, giving the same bound. Off $\Gamma$ all kernel derivatives are uniformly bounded on compact sets, so differentiation under the surface integral proves smoothness and harmonicity. Differentiating [F2] with respect to the source variable gives $\int_{\mathbb R^3}\partial_{n_y}G_3(x,y)(-\Delta\eta(x))dx=\partial_n\eta(y).$ This differentiation is valid distributionally: $|x-y|^{-2}$ is locally volume integrable, and integration by parts outside a ball of radius $\epsilon$ leaves a boundary term $O(\epsilon)$ for the first derivative of $G_3$. Fubini using that same local integrability therefore yields $\langle-\Delta P,\eta\rangle=\int_\Gamma\phi\partial_n\eta\,dS$. [F2, F3, F90, step 1.1, given, construct]

3.1 Set $w=U-P$. Steps 2.1 and 2.2 show $\Delta w=0$ distributionally on the whole space. Choose a nonnegative unit-mass smooth bump $\rho$ supported in $B_1$ and let $w_\epsilon=w*\rho_\epsilon$. By [F4], $w_\epsilon$ is smooth and harmonic everywhere: $\Delta w_\epsilon(x)=\langle w,\Delta\rho_\epsilon(x-\cdot)\rangle=0$. Holder and step 2.2 give, for fixed $\epsilon$, $\int_{B_R(a)}|w_\epsilon|\le C(R+\epsilon)^{5/2}\|U\|_6+C(R+\epsilon)\|\phi\|_1.$ For a smooth harmonic $h$, differentiation of its spherical average gives $\frac{d}{dr}[(4\pi)^{-1}\int_{S^2}h(a+r\omega)d\omega]=(4\pi r^2)^{-1}\int_{B_r(a)}\Delta h=0$ by [F5]. Its limit at zero is $h(a)$, and radial integration gives the ball mean-value formula. Apply this to $h=w_\epsilon$ to obtain $|w_\epsilon(a)|\le |B_R|^{-1}\int_{B_R(a)}|w_\epsilon|\to0$ as $R\to\infty$. Thus $w_\epsilon=0$. Localizing $w$ to a slightly larger bounded set and applying the $L^1$ approximate-identity convergence of [F4] gives $w_\epsilon\to w$ in $L^1$ on every compact set. Hence $U=P$ almost everywhere. The smooth harmonic $P$ supplies the asserted representatives. [F3, F4, F5, F90, F94, step 1.1, step 2.1, step 2.2, algebra]

4.1 Fix a face-interior point $x$ and select a planar smooth cutoff $\chi$ supported in that face and equal to one in a neighborhood of $x$. Split $\phi=\chi\phi+(1-\chi)\phi$. The second density is supported a positive distance from $x$, so its potential extends smoothly through a neighborhood of $x$ and has boundary value its kernel integral. For the first density, choose planar coordinates with outward normal $e_3$. Direct differentiation gives the potential $\frac12P_t*(\chi\phi)$ for $t>0$ and $-\frac12P_{|t|}*(\chi\phi)$ for $t<0$, where $P_t(z)=t/(2\pi(|z|^2+t^2)^{3/2})$. Its mass is one by [F5], while its mass outside each fixed disk tends to zero by direct radial integration. Uniform continuity of the compactly supported $C^1$ density therefore gives the two limits $\pm\phi(x)/2$, locally uniformly in the face interior. The same-face boundary kernel is identically zero, and the complementary integral is nonsingular near $x$, proving the claimed $K_{\rm ker}$ formula. Local uniform convergence also implies local $L^2$ convergence. On a compact tangential set $K$, parametrize either side by its nonnegative normal distance $t$. For $t>0$ the $H^1$ slice identity $\|f(\cdot,t)-\gamma f\|_{L^2(K)}^2\le t\int_0^t\|\partial_s f(\cdot,s)\|_{L^2(K)}^2ds$ follows from the fundamental theorem and approximation in [F1]; hence those same local $L^2$ limits are the Sobolev traces. Exhaust each open face by compact subsets; the finite edge and vertex set has area zero. This proves the almost-everywhere trace-average assertion. [F1, F5, F90, step 2.2, step 3.1, given, algebra]

5.1 Finally, facewise $C^1$ functions agreeing on shared edges are continuous piecewise $C^1$ in each piecewise affine graph chart. Their weak first derivatives are the bounded sectorwise derivatives: integration by parts on the planar sectors cancels all shared-edge boundary terms. After the chart cutoffs they belong to $H^1$ on $\mathbb R^2$, hence to its $H^{1/2}$ Bessel space by the Fourier weight inequality. Thus such densities satisfy the stated $H^{1/2}$ hypothesis even when nonzero at edges and vertices. No face-interior-core density assertion at the critical exponent is needed. [F1, given, algebra] ∎

## Remarks

The kernel agreement holds for the full global trace space. Facewise smooth densities agreeing on shared edges are included even when nonzero at those edges; independently prescribed jumps across edges need not belong to $H^{1/2}(\Gamma)$. Boundary jump identities are Sobolev identities, and do not assert a pointwise half-jump coefficient at an edge or vertex.
