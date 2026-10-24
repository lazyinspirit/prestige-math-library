---
id: lem-bem-smooth-trace-and-helmholtz-layer-extension
kind: lemma
title: Smooth-boundary trace lifts and Sobolev Helmholtz layer extensions
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  [
    def-bem-smooth-helmholtz-combined-field-operator,
    lem-bem-half-order-bessel-slobodeckij-equivalence,
    thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms,
    thm-fourier-inversion-on-schwartz-space,
    thm-lax-milgram,
    def-axiom-of-choice,
    def-countable-choice,
    thm-polar-coordinates-formula-for-lebesgue-measure,
    lem-euclidean-chart-measure-agrees-with-polar-surface-measure,
    thm-complex-exponential-is-entire-with-derivative-itself,
    lem-na-lipschitz-scalar-h1-h2-extension,
    thm-l-one-approximate-identities-converge-in-l-p,
    thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign,
    prop-mollifier-families-are-l-one-approximate-identities,
    lem-weak-leibniz-rule-with-a-smooth-factor,
    thm-riesz-representation-for-hilbert-space,
    thm-sine-and-cosine-derivatives,
    thm-ftc-second-part,
    cor-complex-exponential-cartesian-form-modulus-and-eulers-identity,
    def-bem-lipschitz-polyhedral-boundary-and-trace-spaces,
    thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions,
    thm-chain-rule-for-total-derivatives,
    thm-euclidean-inverse-function-theorem
  ]
justified_by: []
proof_strategy: direct
axiom_use: "The Axiom of Choice is assumed; it supplies Countable Choice for
  Fourier, variational and harmonic regularity suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sayas, First Steps in the Boundary Element Method; local proof of the C2
        extension below"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. For the $C^2$ boundary and orientation of [[def-bem-smooth-helmholtz-combined-field-operator]], there are bounded traces from either side of a bounded collar into $H^{1/2}(\Gamma)$, bounded trace lifts into $H^1(\Omega^-)$ and into compactly supported $H^1(\mathbb R^3)$, and bounded extensions of the classical layers
$$S_k:H^{-1/2}(\Gamma)\longrightarrow H^1_{\rm loc}(\mathbb R^3),\qquad D_k:H^{1/2}(\Gamma)\longrightarrow H^1(\Omega^-)\oplus H^1_{\rm loc}(\overline{\Omega^+}).$$
Here the exterior local space means $H^1$ on each bounded exterior collar/domain truncation, including its boundary. Both restrictions solve $(\Delta+k^2)u=0$ weakly and have bounded weak conormals in $H^{-1/2}(\Gamma)$. With the fixed normal $n$, they obey Green's identity, with duality linear in the conormal and conjugate-linear in the trace. Their exterior restrictions are smooth away from $\Gamma$ and satisfy the uniform Sommerfeld condition $\sup_\omega|r(\partial_r-ik)u(r\omega)|\to0$. Bounds are at fixed $k$ and fixed bounded neighborhoods. The single layer has one trace across $\Gamma$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a fixed $k>0$, and the domain, kernels and complex chart spaces in the cited definition. Smooth boundary densities below mean restrictions of smooth ambient functions; their density is established in step 1.1.

[F1] Tangential Plancherel and Fourier inversion hold with the $2\pi$ convention ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], [[thm-fourier-inversion-on-schwartz-space]]); the Bessel and Slobodeckij half-order norms agree up to constants ([[lem-bem-half-order-bessel-slobodeckij-equivalence]]).

[F2] A bounded coercive sesquilinear form on a complex Hilbert space has its bounded variational inverse under Countable Choice ([[thm-lax-milgram]], [[def-countable-choice]], [[def-axiom-of-choice]]).

[F90] Polar integration uses the published radial formula, not a linear substitution: $dx=r^{n-1}dr\,d\sigma(\omega)$. The sphere measure agrees with graph-chart surface measure and scales by $R^{n-1}$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

[F91] The complex exponential is entire with derivative itself; composing with the affine parameter $r\mapsto ikr$ gives $\frac d{dr}e^{ikr}=ik e^{ikr}$ (subtract the exponential difference quotient and multiply by $ik$). Iteration gives all higher radial derivatives, and $|e^{ikr}|=1$ for real $k,r$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. ([[thm-complex-exponential-is-entire-with-derivative-itself]])

[F92] Under the already assumed AC, every bounded Lipschitz domain $B$ has a bounded $H^1$ extension $E_B$ to $\mathbb R^3$, including graph-chart pieces and bounded annuli. For $v\in H^1(B)$, multiply $E_Bv$ by a fixed smooth cutoff equal to one near $\overline B$ and convolve with a unit-mass smooth approximate identity. The weak product rule and derivative commutation give $D^\alpha(\rho_\epsilon*(\zeta E_Bv))=\rho_\epsilon*D^\alpha(\zeta E_Bv)$ for $|\alpha|\le1$; approximate-identity convergence in $L^2$ for each of these four functions gives convergence in $H^1(B)$. Thus restrictions of ambient smooth functions are dense in $H^1(B)$, with the convergence of every weak derivative supplied rather than inferred from pointwise smoothing. The same argument on a bounded flat half-box or its even reflection supplies the flat-chart approximation. ([[lem-na-lipschitz-scalar-h1-h2-extension]], [[lem-weak-leibniz-rule-with-a-smooth-factor]], [[prop-mollifier-families-are-l-one-approximate-identities]], [[thm-l-one-approximate-identities-converge-in-l-p]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]])

[F93] The real/complex Hilbert chart spaces and the $L^2$ realization use [[def-bem-lipschitz-polyhedral-boundary-and-trace-spaces]]. In a distributional source identity, write $\lambda(v):=\langle\lambda,\overline{\gamma v}\rangle$ so that the test action is complex-bilinear; weak Green identities retain $\langle q,g\rangle$ linear in $q$ and conjugate-linear in $g$. Hilbert duality and the annihilator argument use [[thm-riesz-representation-for-hilbert-space]].

[F94] The parametrization $(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$ has surface Jacobian $\sin\theta$ off the surface-null poles and meridian. Thus $|S^2|=2\pi\int_0^\pi\sin\theta\,d\theta=4\pi$ and $|\partial B_r|=4\pi r^2$ by [F90]. ([[thm-sine-and-cosine-derivatives]], [[thm-ftc-second-part]])

## Proof

1.1 Write $a(\xi)=(1+4\pi^2|\xi|^2)^{1/2}$. For a compactly supported smooth flat-space function $v$, Fourier inversion in the last coordinate and Cauchy–Schwarz give $|\widehat{v(\cdot,0)}(\xi)|^2\le C a(\xi)^{-1}\int(a(\xi)^2+4\pi^2\tau^2)|\widehat v(\xi,\tau)|^2d\tau$. Integration in $\xi$ proves the flat $H^1\to H^{1/2}$ trace estimate. The lift $\widehat{Lg}(\xi,t)=\widehat g(\xi)e^{-a(\xi)|t|}\chi(t)$, with $\chi=1$ near zero and compactly supported, has trace $g$ and $H^1$ norm bounded by $C\|g\|_{H^{1/2}}$, by integrating $e^{-2a|t|}$. In a $C^2$ graph chart $x=(z,t+\psi(z))$, the change of variables has determinant one and bounded derivative and inverse derivative; the chain rule bounds the two $H^1$ norms. Graph and chart distances and surface Jacobians are uniformly comparable, so the Slobodeckij double integral gives the corresponding $H^{1/2}$ norm comparison. A finite partition of unity and smaller chart cutoffs therefore transport the flat trace and lifts to the surface. For each bounded physical chart piece and flat half-box use [F92]. A $C^2$ graph map has bounded derivative, inverse derivative and Jacobian, so the classical chain rule and change of variables bound composition on smooth approximants; passing their functions and derivatives in $L^2$ gives the weak composition formula and $H^1$ convergence for all inputs. This proves the one-sided trace/extension passage without assuming smoothness of an arbitrary Sobolev representative. For the normal-coordinate identity, smooth approximants from [F92] satisfy the classical one-variable FTC. Their traces converge by the flat trace estimate, and their normal-derivative integrals converge in tangential $L^2$, uniformly over a bounded normal interval, by Cauchy–Schwarz. Taking these limits supplies the $L^2$ slice representative and its integral identity for every normal parameter. A zero-trace $H^1$ function then has zero-extension in $H^1$ (the distributional boundary derivative is its trace times $n$, which vanishes), and the kernel of the trace is $H^1_0$: in a flat half-chart a zero-trace function satisfies $v(z,t)=\int_0^t\partial_tv(z,s)ds$, whence $\epsilon^{-2}\int_{0<t<2\epsilon}|v|^2\le C\int_{0<t<2\epsilon}|\partial_tv|^2\to0$. Cutting it off for $t<\epsilon$ therefore changes its $H^1$ norm by a quantity tending to zero; convolution of each resulting interior-supported function proves the claim. Transport this construction by the graph maps and sum the partition. For the trace interpretation, in a flattened half-collar, first for smooth functions and then by $H^1$ approximation, the fundamental theorem of calculus and Cauchy–Schwarz give $\|v(\cdot,t)-\gamma v\|_{L^2}^2\le t\int_0^t\|\partial_sv(\cdot,s)\|_{L^2}^2ds$. In a $C^2$ graph chart, the map $(z,t)\mapsto\Phi(z)+tn_{\Phi(z)}$ is $C^1$ and at $t=0$ its tangent columns and unit-normal column are linearly independent. The Euclidean inverse-function theorem gives a local normal collar with bounded derivative, inverse derivative and Jacobian after shrinking to a compact subchart; a finite cover provides the required fixed bounds; transporting this estimate proves $L^2$ convergence of the normal slices to the Sobolev trace from either side. These arguments apply to $C^2$ charts directly and do not import any polyhedral trace theorem. To verify density of the declared ambient smooth densities in $H^{1/2}(\Gamma)$, lift any chart datum by the constructed compactly supported global $H^1$ lift, mollify that lift in $H^1$ as in [F92], and apply the bounded trace estimate: the traces of the smooth approximants converge in the chart norm. They are also dense in $L^2(\Gamma)$ by chart cutoffs and ordinary mollification. Their density in $H^{-1/2}$ follows by Hilbert duality: an annihilator in $H^{1/2}$ would have zero $L^2$ pairing with every such density and hence be zero; Riesz identifies the dual of the negative space with the positive space. [F1, F92, F93, given, algebra, construct]

2.1 Put $P_k=-\Delta-k^2$ and $G_k(x)=e^{ik|x|}/(4\pi|x|)$. Radial differentiation gives $P_kG_k=0$ for $x\ne0$. On a punctured test-function support, integration by parts gives the inner boundary contribution $\int_{|x|=\epsilon}(G_k\partial_r v-v\partial_rG_k)dS\to v(0)$, since $G_k=O(\epsilon^{-1})$ and $\partial_rG_k=-1/(4\pi\epsilon^2)+O(1)$. Thus $P_kG_k=\delta_0$ distributionally. Choose $\zeta\in C_c^\infty(\mathbb R^3)$ equal to one on a ball larger than every difference $x-y$ needed for the fixed bounded target and source sets. The function $g=\zeta G_k$ is in $L^1$ and $P_kg=\delta_0+h$ with smooth compactly supported $h$ supported away from zero. Hence $(4\pi^2|\xi|^2-k^2)\widehat g(\xi)=1+\widehat h(\xi)$. For large $|\xi|$ this gives $|\widehat g|\le C(1+|\xi|^2)^{-1}$; for bounded $\xi$ the same estimate follows from $g\in L^1$ with a larger constant. Plancherel now proves $g*:H^{-1}(\mathbb R^3)\to H^1(\mathbb R^3)$ and $g*:L^2\to H^2$. For distributions of bounded support these coincide on the chosen target set with $G_k*$, since the kernels agree on all differences there. [F1, F90, F91, F94, step 1.1, given, algebra]

3.1 For $\lambda\in H^{-1/2}(\Gamma)$, the distribution $T_\lambda$ defined by $T_\lambda(v)=\lambda(v|_\Gamma)$ (using the complex-bilinear distributional convention) is supported on $\Gamma$ and is in $H^{-1}(\mathbb R^3)$ by step 1.1. Thus $S_k\lambda=G_k*T_\lambda$ is globally $H^1$ near the surface by step 2.1; it has a common trace and solves $P_kS_k\lambda=0$ off $\Gamma$. For smooth $\lambda$, Fubini identifies the convolution with the classical single-layer integral, because $1/|x-y|$ is locally integrable in three dimensions. [step 1.1, step 2.1, given, construct]

4.1 Given $\phi\in H^{1/2}(\Gamma)$, take a bounded interior lift $F_0$ from step 1.1. On $H^1_0(\Omega^-)$ apply [F2] to $b(v,w)=\int(\nabla v\cdot\overline{\nabla w}+v\bar w)$ and the functional $-b(F_0,w)$. This produces $F=F_0+v$ with trace $\phi$, $(-\Delta+1)F=0$, and $\|F\|_{H^1}\le C\|\phi\|_{H^{1/2}}$. Define $q\in H^{-1/2}(\Gamma)$ by $\langle q,g\rangle=b(F,Lg)$ for an interior lift $Lg$. Independence follows since differences of lifts are in $H^1_0$, and boundedness follows from step 1.1. For $f=F1_{\Omega^-}$ and any smooth compactly supported test $v$, two weak integrations by parts give $P_kf(v)=-(1+k^2)\int_{\Omega^-}Fv+q(v|_\Gamma)-\int_\Gamma\phi\partial_nv$. In distributions, the last term is minus the source of the classical double layer. Convolving this equality with $G_k$ is legitimate because $f$ has compact support, and $G_k*P_kf=(P_kG_k)*f=f$. Consequently define $D_k\phi=S_kq-(1+k^2)G_k*f-f.$ For smooth $\phi$, the differentiated fundamental-solution identity and distributional convolution identify this expression away from $\Gamma$ with $\int_\Gamma\partial_{n_y}G_k(x-y)\phi(y)dS_y$. The first term is $H^1$ near $\Gamma$, the second is $H^2$ by step 2.1, and $f$ restricts to $F$ and zero on the two sides. This proves the asserted bounded piecewise $H^1$ extension and its uniqueness by density. It also shows its trace jump is $-\phi$. [F2, step 1.1, step 2.1, step 3.1, given, construct, algebra]

5.1 Each layer solves $P_ku=0$ on either side by its source identity. For any such interior restriction define $\langle q^-,g\rangle=\int_{\Omega^-}(\nabla u\cdot\overline{\nabla Lg}-k^2u\overline{Lg})$. Differences of lifts are in $H^1_0$, so the weak PDE proves independence; step 1.1 gives $\|q^-\|_{H^{-1/2}}\le C\|u\|_{H^1}$. For the exterior choose a compactly supported lift in a bounded collar and use minus this integral, because the exterior's outward normal on $\Gamma$ is $-n$. This gives $q^+$ with the same bound. They give Green's identity for every interior $H^1$ test and every exterior $H^1$ test supported in a bounded collar and vanishing on its artificial outer boundary. More generally, on a bounded truncation $U=B_R\setminus\overline{\Omega^-}$ with the sphere separated from $\Gamma$, subtract such a compact inner trace lift from a test $v\in H^1(U)$. The remaining test has zero trace on $\Gamma$, and integration by parts near the smooth outer sphere, together with the weak PDE for zero-trace tests, gives $\int_U(\nabla u\cdot\overline{\nabla v}-k^2u\bar v)=\int_{\partial B_R}\partial_ru\bar v\,dS-\langle q^+,\gamma^+v\rangle$ whenever $u$ is smooth near that sphere. Approximation gives the same identity with a weak outer conormal if necessary. No boundary term at infinity is discarded. All these identities use the declared sesquilinear convention. [step 1.1, step 3.1, step 4.1, given, algebra]

6.1 Away from $\Gamma$, the kernel $G_k(x-y)$ and every target derivative are smooth in the ambient source variable $y$; after restriction to the $C^2$ surface they have uniformly bounded $H^{1/2}$ norms on compact target sets. The source normal in $D_k$ is $C^1$, which suffices for its integral against $\phi\in L^2$. Thus all target derivatives can be passed through these pairings and integrals, proving smoothness in $x$ there. Uniformly for bounded $y$ and $r\to\infty$, $G_k(r\omega-y)=O(r^{-1})$ and $(\partial_r-ik)G_k(r\omega-y)=O(r^{-2})$ together with any fixed finite number of $y$ derivatives; these follow by differentiating $|r\omega-y|=r-\omega\cdot y+O(r^{-1})$. The same estimates hold after one source normal derivative. The $H^{1/2}(\Gamma)$ norm of the first remainder is $O(r^{-2})$ by its uniform value and first source derivative bounds, so pairing with $\lambda\in H^{-1/2}$ proves the single-layer radiation condition. The double-layer radiation condition follows by integration against $\phi\in L^2(\Gamma)$ and the source normal derivative remainder bound. This proves all assertions. [F91, step 3.1, step 4.1, step 5.1, given, algebra] ∎