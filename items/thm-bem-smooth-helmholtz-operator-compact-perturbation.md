---
id: thm-bem-smooth-helmholtz-operator-compact-perturbation
kind: theorem
title: The smooth Helmholtz combined field is a compact perturbation of half the
  identity
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  [
    def-bem-smooth-helmholtz-combined-field-operator,
    lem-bem-smooth-trace-and-helmholtz-layer-extension,
    thm-bem-helmholtz-layer-jumps-match-laplace-jumps,
    lem-bem-half-order-bessel-slobodeckij-equivalence,
    thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms,
    def-axiom-of-choice,
    thm-polar-coordinates-formula-for-lebesgue-measure,
    lem-euclidean-chart-measure-agrees-with-polar-surface-measure,
    thm-complex-exponential-is-entire-with-derivative-itself,
    cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
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
---

## Statement

Assume the Axiom of Choice and the $C^2$ geometry of [[def-bem-smooth-helmholtz-combined-field-operator]]. For each fixed $k>0$ and real $\eta\ne0$, its operator extends boundedly to complex $H^{1/2}(\Gamma)$ and
$$A_{k,\eta}=\tfrac12I+K_k-i\eta V_k,\qquad V_k=\gamma S_k,$$
where both $K_k$ and the restriction $V_k:H^{1/2}(\Gamma)\to H^{1/2}(\Gamma)$ are compact. Thus $2A_{k,\eta}=I-\mathcal K_{k,\eta}$ with compact $\mathcal K_{k,\eta}=-2K_k+2i\eta V_k$. No uniform estimate in $k$ is asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice, fixed $k,\eta$, and the declared $C^2$ boundary.

[F1] The bounded layer extensions and their traces exist by [[lem-bem-smooth-trace-and-helmholtz-layer-extension]].

[F2] For smooth densities, the local trace computation in [[thm-bem-helmholtz-layer-jumps-match-laplace-jumps]] gives $\gamma^+D_k\phi=\tfrac12\phi+K_k\phi$ with the common boundary remainder; the remainder is the surface integral of $\partial_{n_y}G_k(x-y)$ because the curved-surface remainder is integrable.

[F3] Plancherel holds and the chart $H^{1/2}$ norm agrees with its half-order difference norm ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]], [[lem-bem-half-order-bessel-slobodeckij-equivalence]]).

[F90] Polar integration uses the published radial formula, not a linear substitution: $dx=r^{n-1}dr\,d\sigma(\omega)$. The sphere measure agrees with graph-chart surface measure and scales by $R^{n-1}$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]])

[F91] The complex exponential is entire with derivative itself; composing with the affine parameter $r\mapsto ikr$ gives $\frac d{dr}e^{ikr}=ik e^{ikr}$ (subtract the exponential difference quotient and multiply by $ik$). Iteration gives all higher radial derivatives, and $|e^{ikr}|=1$ for real $k,r$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. ([[thm-complex-exponential-is-entire-with-derivative-itself]])

## Proof

1.1 In surface coordinates put $r=|x-y|$. The $C^2$ graph bounds give $|n_y\cdot(x-y)|\le Cr^2$ and $|n_y-n_x|\le Cr$. Therefore both kernels $L_V=G_k(x-y)$ and $L_K=\partial_{n_y}G_k(x-y)$ satisfy $|L(x,y)|\le C/r$. Their first target-coordinate derivatives satisfy $|\partial_xL|\le C/r^2$: for $K$, differentiating the numerator tangentially gives $n_y\cdot t_x=(n_y-n_x)\cdot t_x=O(r)$, and differentiating the radial factors gives at worst $O(r^2)O(r^{-4})$. Fixed $k$ only changes the constants. Localize targets and sources by chart cutoffs; for near-diagonal pieces use a common graph chart and absorb its bounded surface Jacobian into the source kernel. Off-diagonal pieces have bounded first target derivatives. Each resulting chart kernel $l(z,w)$, extended with cutoffs by zero, thus has size $C/|z-w|$ and target derivative size $C/|z-w|^2$. [F1, F2, F91, given, algebra]

2.1 For a target translation $h$, $\delta=|h|<1/4$, consider $l(z+h,w)-l(z,w)$. Where $|z-w|\le2\delta$, integrate each size bound separately (including the ball around $z+h$), obtaining $C\delta$. On the complement the segment from $z$ to $z+h$ stays at distance at least $|z-w|/2$, so the derivative bound and polar integration give $C\delta\int_{2\delta}^{C}r^{-1}dr\le C\delta(1+|\log\delta|)$. This bounds both the supremum over $z$ of its absolute integral in $w$ and the supremum over $w$ of its absolute integral in $z$. Cauchy–Schwarz in the weighted kernel integral then proves the Schur estimate $\|Tf\|_2\le C\|f\|_2$ and $\|(Tf)(\cdot+h)-Tf\|_2\le C\delta(1+|\log\delta|)\|f\|_2.$ Indeed $|\int lf|^2\le(\int|l|)(\int|l||f|^2)$ and integration uses the two bounds. The cutoff support is fixed and bounded. [F90, step 1.1, given, algebra]

3.1 For any $0<s<1$, integrate the square of the last translation bound against $|h|^{-2-2s}dh$ for $|h|<1$; polar coordinates give the finite integral $C\int_0^1r^{1-2s}(1+|\log r|)^2dr$. The $|h|\ge1$ part is bounded by the $L^2$ estimate. Hence each localized $T$ maps $L^2$ boundedly to $H^s$ in the difference norm, in particular for $s=3/4$. To check the equivalent Fourier norm directly, apply Plancherel to differences and Tonelli: the inner integral $\int|e^{2\pi i\xi\cdot h}-1|^2|h|^{-2-2s}dh$ equals $c_s|\xi|^{2s}$ by scaling and rotation, with $0<c_s<\infty$ since near zero the numerator is $O(|h|^2)$ and at infinity it is bounded. This also identifies the half-order norm in [F3]. [F3, F90, step 2.1, given, algebra]

4.1 A bounded family of functions supported in a fixed compact chart and bounded in $H^{3/4}$ is precompact in $H^{1/2}$. Here is a direct verification. For a smooth compactly supported mollifier $\rho_\epsilon$, $|1-\widehat\rho(\epsilon\xi)|\le C\min(\epsilon|\xi|,1)$ and thus $\|f-\rho_\epsilon*f\|_{H^{1/2}}\le C\epsilon^{1/4}\|f\|_{H^{3/4}}$ by the Fourier weights. For fixed $\epsilon$, the convolutions and their first two derivatives are uniformly bounded and have one fixed bounded support, by Cauchy–Schwarz with the fixed derivatives of $\rho_\epsilon$. They are precompact in $C^1$ on a containing rectangle: choose increasingly fine finite grids, take convergent subsequences of the finitely many value and first-derivative samples, and use the uniform first/second derivative bounds to extend sample convergence uniformly. A diagonal subsequence gives convergence of both values and first derivatives. Uniform $C^1$ convergence on a fixed compact support implies $H^{1/2}$ convergence, since the difference-norm integrand near the diagonal is bounded by $\|\nabla f\|_\infty^2|z-w|^{-1}$ and away from the diagonal by a constant times $\|f\|_\infty^2|z-w|^{-3}$. The uniform mollification error now gives finite nets for the original family in $H^{1/2}$, hence compact closure in its complete Hilbert norm. [F3, step 3.1, given, algebra, construct]

5.1 Since $H^{1/2}(\Gamma)$ embeds boundedly in $L^2(\Gamma)$, steps 1.1–4.1 and the finite chart partition make both boundary integrals compact on $H^{1/2}(\Gamma)$. The single-layer integral agrees on smooth densities with $V_k$ of [F1]. For smooth densities, the normal-slice limits computed in [F2] are the Sobolev traces of [F1]: the planar half-Poisson terms have uniformly bounded mass, and the integrable $C/r$ curvature remainders and smooth-density remainders have uniform integral bounds on the compact surface, so the pointwise slice limits also converge in $L^2$ by dominated convergence. The normal-slice estimate proved in [F1] identifies this $L^2$ limit with the weak trace. Consequently [F2] identifies the double-layer exterior trace with $\tfrac12I+K_k$. Boundedness and density extend both identities to every $H^{1/2}$ density. Therefore $A_{k,\eta}=\tfrac12I+K_k-i\eta V_k$, and its displayed compact perturbation follows by addition and scalar multiplication of the compact maps just proved. [F1, F2, step 1.1, step 4.1, given, algebra] ∎
