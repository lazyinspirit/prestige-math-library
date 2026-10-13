---
id: thm-parameter-kam-torus-invariance-and-lagrangianity
kind: theorem
title: "The parameter KAM limit: invariant quasi-periodic motion with frequency $\\nu$ and Lagrangian images"
status: published
origin: pipeline
domain: mathematics
dependency_level: 9
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-cauchy-fourier-and-lattice-shell-bounds, lem-kam-parameter-sequences-satisfy-all-step-hypotheses, lem-kam-composed-map-and-derivative-convergence, lem-kam-generator-flow-and-remainder-bound, prop-cm-canonical-map-tests-and-hamiltonian-transport, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-cm-phase-domain-and-standard-symplectic-two-form, def-cm-local-flow-of-an-autonomous-system, thm-identity-theorem-in-several-complex-variables, ex-convex-subsets-of-rn-are-path-connected, thm-path-connected-implies-connected, thm-chain-rule-for-total-derivatives, thm-power-series-expansion-in-several-complex-variables, thm-weierstrass-convergence-holomorphic-functions, def-complex-differentiability-holomorphic-and-entire, rem-complex-euclidean-space-dictionary, def-operator-norm, def-metric-ball, def-interval]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  lem-kam-parameter-sequences-satisfy-all-step-hypotheses: mathematical-premise
  lem-kam-composed-map-and-derivative-convergence: mathematical-premise
  lem-kam-generator-flow-and-remainder-bound: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-identity-theorem-in-several-complex-variables: mathematical-premise
  ex-convex-subsets-of-rn-are-path-connected: mathematical-premise
  thm-path-connected-implies-connected: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  rem-complex-euclidean-space-dictionary: mathematical-premise
  def-operator-norm: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §4-§5 (the limit satisfies $X_H\\circ\\Phi=D\\Phi\\cdot X_N$, i.e. invariance with frequency $\\omega$ and Lagrangian images), PDF pp. 20-27."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §6.1-§6.3 (the limiting torus is invariant and carries linear motion; comparison criteria for the Lagrangian character), printed pp. 92-110."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Assume all the data, constants and hypotheses of
[[lem-kam-composed-map-and-derivative-convergence]] (in particular the sequences
of [[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]], the initial
perturbation $P_0$ with $|P_0|\le\varepsilon_0$ and the one-step construction at
every stage), and assume in addition that the fixed data satisfy
$CE_0\le1/16$, where $C$ bounds both the composition constant $A$ and the one-step constant of
[[lem-kam-generator-flow-and-remainder-bound]] (a smallness condition on the
constants, available in the applications by shrinking the step constant). Let
$\Psi_\infty$ be the limiting family of
[[lem-kam-composed-map-and-derivative-convergence]], let
$$H(I,\vartheta,\nu):=e(\nu)+\nu\cdot I+P_0(I,\vartheta,\nu)$$
be the parameter Hamiltonian whose perturbing term is $P_0$, and let
$\omega=\sum_{i=1}^nd\vartheta_i\wedge dI_i$. Then for every
$\nu\in\Omega_{\alpha,\tau}$:

1. **Invariance.** For every real $\vartheta$ in the strip,
$$X_H\bigl(\Psi_\infty(0,\vartheta,\nu);\chi_\infty(\nu)\bigr) =\sum_{j=1}^n\nu_j\,\partial_{\vartheta_j}\Psi_\infty(0,\vartheta,\nu),$$
   and the identity extends to the complex strip
   $|\mathrm{Im}\,\vartheta|_\infty<s_0/4$ by holomorphy of both sides.
   Here the second argument of $X_H$ records the original family parameter after all frequency retractions; the desired rotation frequency remains the target label $\nu$.
2. **Quasi-periodic motion.** For every $\vartheta_0\in\mathbb R^n$ the curve
   $s\mapsto\Psi_\infty(0,\vartheta_0+s\nu,\nu)$ is an integral curve of the
   autonomous vector field $X_H(\,\cdot\,;\chi_\infty(\nu))$ wherever it is defined; that is,
$$\frac{d}{ds}\Psi_\infty(0,\vartheta_0+s\nu,\nu) =X_H\bigl(\Psi_\infty(0,\vartheta_0+s\nu,\nu);\chi_\infty(\nu)\bigr).$$
3. **Lagrangian images.** For every $\nu$ the pullback of $\omega$ along the
   real slice of $\vartheta\mapsto\Psi_\infty(0,\vartheta,\nu)$ vanishes:
$$\Psi_\infty(\,\cdot\,,\nu)^*\omega=0\qquad\text{on the real slice, i.e.}\qquad \sum_{i=1}^nd(\Psi_\infty)_i^\vartheta\wedge d(\Psi_\infty)_i^I=0 .$$

## Facts & Assumptions

**Given:** The sequences and constants of [[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]], the initial perturbation $P_0$, the one-step construction, the limit family $\Psi_\infty$, and the Hamiltonian $H$ of the statement, with $CE_0\le1/16$.

[F1] The conclusions of [[lem-kam-composed-map-and-derivative-convergence]]: $\Psi_j\to\Psi_\infty$ uniformly on $\mathcal L=\{0\}\times S_{s_0/4}\times\Omega_{\alpha,\tau}$ with all $\vartheta$-derivatives; $\chi_j\to\chi_\infty$ uniformly with $|\chi_\infty-\mathrm{id}|\le AB_0$ in the original parameter domain, and each $\Psi_j$ is holomorphic on $D_j$, canonical on real points, and $T_j(D_{j+1})\subseteq D_j$, $\Psi_j(D_j)\subseteq D_0$; $H(\Psi_j(I,\vartheta,\nu);\chi_j(\nu))=e_j(\nu)+\nu\cdot I+P_j(I,\vartheta,\nu)$ with $|P_j|\le\varepsilon_j$; and the size bounds $|b|\le2Cr_0E_0$, $|w|\le2C\sigma_0E_0$, $|\partial_{\vartheta_i}w|\le2CE_0$, $|\partial_{\vartheta_i}b|\le Cr_0E_0/\sigma_0$ of clause 4, where $\Psi_\infty(0,\vartheta,\nu)=(b(\vartheta,\nu),\vartheta+w(\vartheta,\nu))$.

[F2] Hamiltonian calculus: with the convention $X_h=J_{\mathrm{act}}\nabla h=(-h_\vartheta,h_I)$ with $J_{\mathrm{act}}:=\begin{pmatrix}0&-I_n\\I_n&0\end{pmatrix}$ in the action-first order $(I,\vartheta)$ for $\omega=\sum_jd\vartheta_j\wedge dI_j$ one has $X_{f+g}=X_f+X_g$ and $X_{\nu\cdot I}=(0,\nu)$ ([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]); if $C:U\to V$ is a $C^2$ canonical diffeomorphism of phase domains and $H\in C^2(V)$, then $DC(z)X_{H\circ C}(z)=X_H(C(z))$ ([[prop-cm-canonical-map-tests-and-hamiltonian-transport]] clause 3); the chain rule is [[thm-chain-rule-for-total-derivatives]].

[F3] $\Psi_j$ and its first $\vartheta$-derivatives converge uniformly on $\mathcal L$ to those of $\Psi_\infty$, and for each fixed $\nu$ the map $\vartheta\mapsto\Psi_\infty(0,\vartheta,\nu)$ is holomorphic on $S_{s_0/4}$, as a locally uniform limit of holomorphic maps ([[thm-weierstrass-convergence-holomorphic-functions]], [[thm-power-series-expansion-in-several-complex-variables]], [[def-complex-differentiability-holomorphic-and-entire]], [[rem-complex-euclidean-space-dictionary]]).

[F4] Cauchy bounds for the retained perturbations: since $P_j$ is holomorphic on $D_{r_j,s_j,h_j}(\Omega_{\alpha,\tau})$ with $|P_j|\le\varepsilon_j$, the estimates of [[lem-cauchy-fourier-and-lattice-shell-bounds]] clause 2 with action margin $r_j/2$ and angle margin $8\sigma_j$ give, on $D_j=B_{r_j/2}\times S_{s_j-8\sigma_j}\times O_{h_{j+1}}$, $|\partial_{I_i}P_j|\le2\varepsilon_j/r_j$ and $|\partial_{\vartheta_i}P_j|\le\varepsilon_j/(8\sigma_j)$ for all $i$; hence $|W_jX_{P_j}|_\infty\le\max\bigl(r_j^{-1}|\partial_\vartheta P_j|_\infty,\ \sigma_j^{-1}|\partial_IP_j|_\infty\bigr)\le2\varepsilon_j/(r_j\sigma_j)$, where $W_j=\operatorname{diag}(r_j^{-1}I_n,\sigma_j^{-1}I_n)$ and $|v|_{(W_0)}:=|W_0v|_\infty$ ([[lem-kam-generator-flow-and-remainder-bound]], [[def-operator-norm]], [[def-metric-ball]]).

[F5] The one-step weighted bound and the contraction factors: on $B_{r_j/2}\times S_{s_j-8\sigma_j}\times O_{h_j}$ one has $\|W_j(D\Phi_j-I_{2n})W_j^{-1}\|\le CE_j$ ([[lem-kam-generator-flow-and-remainder-bound]] clause 2, part of the one-step construction), and $\eta_j\le1/2$, $r_{j+1}=\eta_jr_j$, $\sigma_{j+1}=\sigma_j/2$ ([[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]] clauses (a) and (b) and its definitions); moreover $CE_j\le CE_0\le1$.

[F6] Identity theorem for several complex variables and connectivity: $S_{s_0/4}$ is convex, hence path-connected and connected ([[ex-convex-subsets-of-rn-are-path-connected]], [[thm-path-connected-implies-connected]], [[rem-complex-euclidean-space-dictionary]]); if $f$ is holomorphic on a nonempty connected open $U\subseteq\mathbb C^n$ and vanishes on a nonempty open subset of $U$, then $f\equiv0$ on $U$ ([[thm-identity-theorem-in-several-complex-variables]]); and a holomorphic function has a local power-series expansion at every point of its domain.

## Proof

**Proof technique:** direct; transport the finite-step normal forms through the limit using the vanishing weighted Cauchy residuals and the convergence of the composed maps.

1.1 *Finite-step residual.* Fix $j\ge0$ and $\nu\in\Omega_{\alpha,\tau}$. By [F1], on the real points of $D_j$ one has $H(\Psi_j(I,\vartheta,\nu);\chi_j(\nu))=e_j(\nu)+\nu\cdot I+P_j(I,\vartheta,\nu)$ with $\Psi_j$ canonical in the phase variables for each fixed target $\nu$. Define $H_j^*(z):=H(z;\chi_j(\nu))$; since $\chi_j$ does not depend on $z$, the ordinary phase transport identity applies, so the transport identity of [F2] applied to $\Psi_j$ gives $D\Psi_j\,X_{H_j^*\circ\Psi_j}=X_H(\Psi_j;\chi_j(\nu))$; by [F2] and linearity of the gradient, $X_{H_j^*\circ\Psi_j}=X_{e_j+\nu\cdot I}+X_{P_j}=(0,\nu)+X_{P_j}$; hence $X_H(\Psi_j;\chi_j(\nu))-D\Psi_j(0,\nu)=D\Psi_jX_{P_j}$ on the real points of $D_j$. [given, F1, F2, algebra]

1.2 *Weighted phase Jacobian product bound.* For $x_j=(z,\nu)\in D_j$, recursively put $x_i=(z_i,\lambda_i):=T_i(x_{i+1})$ for $i=j-1,\ldots,0$, with $T_i$ the extended maps of [F1]'s composition supplier; thus $x_i\in D_i$ and $\lambda_i=\phi_i(\lambda_{i+1})$. Parameters are independent of the input phase, so $D_z\Psi_j=M_0\cdots M_{j-1}$, where $M_i:=D_z\widetilde\Phi_i(z_{i+1},\lambda_i)$. The supplier's domain inclusions put these evaluations in [F5]'s one-step domain. Since $W_iW_{i+1}^{-1}=\operatorname{diag}(\eta_iI_n,\tfrac12I_n)$, $\|W_iM_iW_{i+1}^{-1}\|\le(1+CE_i)/2\le1$. Insert adjacent weights in the product to obtain $\|W_0D_z\Psi_jW_j^{-1}\|\le1$, including the identity product at $j=0$. [F1, F5, algebra]

2.1 *The transported residual tends to zero.* By [F4] and step 1.2, on the real points of $D_j$, $$\bigl|X_H(\Psi_j;\chi_j(\nu))-D\Psi_j(0,\nu)\bigr|_{(W_0)}=\bigl|D\Psi_jX_{P_j}\bigr|_{(W_0)}\le\|W_0D\Psi_jW_j^{-1}\|\,\bigl|W_jX_{P_j}\bigr|\le\frac{2\varepsilon_j}{r_j\sigma_j}=2\alpha E_j\sigma_j^{\mu-1},$$ and by [F1] $E_j\le4^{-j}E_0$ while $\sigma_j=\sigma_02^{-j}$, so $2\alpha E_j\sigma_j^{\mu-1}\le2\alpha E_0\sigma_0^{\mu-1}4^{-j}2^{-(\mu-1)j}\to0$ as $j\to\infty$. [step 1.1, step 1.2, F1, F4, algebra]

3.1 *Passing to the limit.* By [F3] the maps $\Psi_j$ and their first $\vartheta$-derivatives converge uniformly on $\mathcal L$ to those of $\Psi_\infty$, and $\chi_j\to\chi_\infty$ uniformly with the phase-parameter images in the original domain by [F1]. Since $X_H$ is continuous there, $X_H(\Psi_j;\chi_j(\nu))\to X_H(\Psi_\infty;\chi_\infty(\nu))$ and $D\Psi_j(0,\nu)=\sum_k\nu_k\partial_{\vartheta_k}\Psi_j\to\sum_k\nu_k\partial_{\vartheta_k}\Psi_\infty$ for each fixed label and real angle, while $X_H(\Psi_j;\chi_j(\nu))-D\Psi_j(0,\nu)=D\Psi_jX_{P_j}\to0$ in the $W_0$-norm by step 2.1; therefore $X_H(\Psi_\infty(0,\vartheta,\nu);\chi_\infty(\nu))=\sum_k\nu_k\partial_{\vartheta_k}\Psi_\infty(0,\vartheta,\nu)$ at every real $\vartheta$, which is the real-slice part of clause 1. [step 2.1, F1, F2, F3, algebra]

4.1 *Extension to the complex strip.* Both sides of the identity of step 3.1 are holomorphic in $\vartheta$ on $S_{s_0/4}$ for fixed $\nu$: the right side by [F3], and the left side because $H$ is holomorphic on the open domain and $\Psi_\infty$ maps $\{0\}\times S_{s_0/4}\times\Omega_{\alpha,\tau}$ into its interior (by [F1]'s size bounds and $CE_0\le1/16$, $|b|\le2Cr_0E_0\le r_0/8$ and $|w|\le2C\sigma_0E_0\le\sigma_0/8$); their difference $f$ vanishes on $\mathbb R^n$, so at every real $\vartheta_0$ all mixed complex derivatives of $f$ vanish (induction on the order: $\partial_{\vartheta_i}f$ is holomorphic and vanishes on the real slice, since the difference quotient is taken along real directions), the power series of $f$ at $\vartheta_0$ has all coefficients zero, and $f=0$ on a polydisc around $\vartheta_0$; [F6] applied to the connected open set $S_{s_0/4}$ gives $f\equiv0$ there. This proves the extension assertion of clause 1. [step 3.1, F1, F3, F6, algebra]

4.2 *Quasi-periodic motion.* By [F3] the map $\vartheta\mapsto\Psi_\infty(0,\vartheta,\nu)$ is holomorphic, hence $C^1$ on the real slice, and the chain rule gives $\frac{d}{ds}\Psi_\infty(0,\vartheta_0+s\nu,\nu)=\sum_j\nu_j\partial_{\vartheta_j}\Psi_\infty(0,\vartheta_0+s\nu,\nu)$, which equals $X_H(\Psi_\infty(0,\vartheta_0+s\nu,\nu);\chi_\infty(\nu))$ by the real-slice identity of step 3.1; this is clause 2. [step 3.1, F2, F3, algebra]

5.1 *Lagrangian images.* The unperturbed parametrisation $\iota_0(\vartheta):=(0,\vartheta)$ satisfies $\iota_0^*\omega=0$ because each term $d\vartheta_i\wedge dI_i$ pulls back to zero along $I\equiv0$; each $\Psi_j$ is canonical on real points by [F1], so $(\Psi_j\circ\iota_0)^*\omega=\iota_0^*\Psi_j^*\omega=0$; the maps $\Psi_j\circ\iota_0$ and their first $\vartheta$-derivatives converge uniformly to $\Psi_\infty\circ\iota_0$ and its derivatives on the real slice by [F3], so the coefficient functions of the pullback two-forms converge and the limit pullback $\Psi_\infty(\,\cdot\,,\nu)^*\omega$ vanishes; this is clause 3. [F1, F2, F3, algebra] ∎

## Remarks

- **Canonicity in the limit.** Only canonicity of the individual maps on real points is used; the limit identity is a closed statement about $\Psi_\infty$ and needs no differentiable structure beyond the $C^1$ convergence supplied by the composed-map item.
- **No dynamical assertion beyond the identity.** Clause 2 says that the image torus is invariant with frequency $\nu$; it does not assert stability in any sense, the survival of resonant tori, or that these are all invariant tori.
- **The extra smallness $CE_0\le1/16$.** It is used only to keep the weighted Jacobian product below $1$ (step 1.2) and the limiting image inside the open domain of $H$ (step 4.1); shrinking the step constant of the one-step estimates preserves every other conclusion and only lowers the final smallness threshold.
