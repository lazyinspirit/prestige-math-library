---
id: lem-nondegenerate-frequency-reduction-and-alpha-square-smallness
kind: lemma
title: "Nondegenerate frequency reduction: translating the action variable by the inverse frequency map and the $\\varepsilon\\le c\\alpha^2$ smallness"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 10
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-kam-generator-flow-and-remainder-bound, thm-parameter-kam-torus-invariance-and-lagrangianity, prop-cm-canonical-map-tests-and-hamiltonian-transport, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-cm-phase-domain-and-standard-symplectic-two-form, thm-chain-rule-for-total-derivatives, thm-ftc-second-part, def-directional-and-partial-derivatives, def-metric-ball, def-interval]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-kam-generator-flow-and-remainder-bound: mathematical-premise
  thm-parameter-kam-torus-invariance-and-lagrangianity: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §1, §5 and Appendix A (nondegeneracy of the integrable part via the frequency map and the implicit function theorem; the reduction of the perturbation size to the form $\\varepsilon\\le c\\alpha^2$ on a fixed analytic domain), PDF pp. 5-6 and 23-30."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §6.1-§6.2 (elimination of the parameters by the frequency map and the resulting $\\alpha^2$-smallness of the mechanical perturbation), printed pp. 92-106."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, $\tau>n-1$, $\mu:=\tau+3n+2$, $\alpha>0$, $s_0>0$,
$0<\sigma_0\le\min(1,s_0/24)$, and let $c_1\in(0,1]$ be the one-step smallness
constant (the constant $c$ of the estimates of
[[lem-kam-generator-flow-and-remainder-bound]]). Let the following
data be given.

1. An open set $U\subseteq\mathbb C^n$, a compact set $K\subseteq U\cap\mathbb R^n$, a radius $0<r_0\le1$ with $\{J\in\mathbb C^n:\operatorname{dist}_\infty(J,K)<2r_0\}\subseteq U$, a nonempty set $\Omega\subseteq\mathbb R^n$ and a conjugation-invariant open complex neighbourhood $\Omega'\subseteq\mathbb C^n$ containing $\Omega$; and a holomorphic map $b:\Omega'\to U$ with $Dh(b(\nu))=\nu$ for every $\nu\in\Omega'$, where $h:U\to\mathbb C$ is holomorphic and $b(\Omega)+(B_{r_0}\cap\mathbb R^n)\subseteq K$. (In the applications $b=(Dh)^{-1}$ on a regular frequency patch, supplied by the real analytic inverse function theorem; here it is part of the data.)
2. A constant $M_2\ge1$ with $|I^{\mathsf T}D^2h(J)\,I|\le M_2|I|_\infty^2$ for all $I\in\mathbb C^n$ and all $J\in\{J':\operatorname{dist}_\infty(J',K)<2r_0\}$.
3. A holomorphic function $F$ on $\{J:\operatorname{dist}_\infty(J,K)<2r_0\}\times S_{s_0}$, $2\pi$-periodic in $\vartheta$, with $|F|\le\varepsilon$.

Put $r:=\sqrt{\varepsilon/M_2}$ and assume $0<r\le r_0$. Then:

1. **Taylor decomposition.** For every $\nu\in\Omega$ and $|I|_\infty\le r$,
$$h(b(\nu)+I)=h(b(\nu))+\nu\cdot I+P_h(I,\nu),\qquad |P_h(I,\nu)|\le M_2|I|_\infty^2 .$$
2. **Effective perturbation.** The function
$$G(I,\vartheta,\nu):=h(b(\nu)+I)-h(b(\nu))-\nu\cdot I+F(b(\nu)+I,\vartheta)$$
is holomorphic on $D_{r,s_0,h_0'}(\Omega)$ whenever $O_{h_0'}(\Omega)\subseteq\Omega'$ and $b(O_{h_0'}(\Omega))+B_r\subseteq\{J:\operatorname{dist}_\infty(J,K)<2r_0\}$, $2\pi$-periodic in $\vartheta$, and satisfies
$$|G|\le M_2r^2+\varepsilon=2\varepsilon .$$
3. **$\alpha^2$-smallness.** If
$$\varepsilon\le\frac{c_1^2}{4}\cdot\frac{\alpha^2\sigma_0^{2\mu}}{M_2},$$
then $|G|\le c_1\alpha r\sigma_0^{\mu}$; equivalently the relative smallness $E:=|G|/(\alpha r\sigma_0^{\mu})$ satisfies $E\le c_1$.
4. **Transfer to the physical Hamiltonian.** Let $H(p,\vartheta):=h(p)+F(p,\vartheta)$ and suppose that the parameter Hamiltonian
$$H_{\mathrm{par}}(I,\vartheta,\nu):=h(b(\nu))+\nu\cdot I+G(I,\vartheta,\nu)$$
satisfies the hypotheses of [[thm-parameter-kam-torus-invariance-and-lagrangianity]] on $D_{r,s_0,h_0'}(\Omega_{\alpha,\tau})$ (same sequences, same one-step construction, with $P_0:=G$), with limit phase family $\Phi_\infty=(\Phi_I,\Phi_\vartheta)$ and limit original-parameter map $\chi_\infty$. Then for every $\nu\in\Omega_{\alpha,\tau}$ the physical family
$$\Psi_\nu(\vartheta):=\bigl(b(\chi_\infty(\nu))+\Phi_I(0,\vartheta,\nu),\ \Phi_\vartheta(0,\vartheta,\nu)\bigr)$$
satisfies
$$X_H\bigl(\Psi_\nu(\vartheta)\bigr)=\sum_{j=1}^n\nu_j\,\partial_{\vartheta_j}\Psi_\nu(\vartheta),\qquad \Psi_\nu^*\omega=0,$$
where $\omega=\sum_jd\vartheta_j\wedge dI_j$ and $X_H=(-H_\vartheta,H_I)$ is taken in the action-angle coordinates $(p,\vartheta)$; that is, the image is an invariant Lagrangian torus of the physical Hamiltonian $H$ with frequency $\nu$.


## Facts & Assumptions

**Given:** The data of clauses 1-3, the constant $c_1$, and in clause 4 the hypotheses of [[thm-parameter-kam-torus-invariance-and-lagrangianity]] for $H_{\mathrm{par}}$ with $P_0=G$.

[F1] Domain and norm notation $D_{r,s,h}(\Omega)$, $B_r$, $S_s$, $O_h(\Omega)$, holomorphy and sup-norms; the $(\alpha,\tau)$-label set $\Omega_{\alpha,\tau}$ ([[def-holomorphic-kam-domain-and-diophantine-labels]], [[def-metric-ball]]).

[F2] Calculus: the chain rule gives $\frac{d}{dt}h(b(\nu)+tI)=Dh(b(\nu)+tI)\,I$ and $\frac{d^2}{dt^2}h(b(\nu)+tI)=I^{\mathsf T}D^2h(b(\nu)+tI)\,I$; the second-order Taylor formula with integral remainder is $u(1)-u(0)-u'(0)=\int_0^1(1-t)u''(t)\,dt$ ([[thm-chain-rule-for-total-derivatives]], [[thm-ftc-second-part]], [[def-directional-and-partial-derivatives]], [[def-interval]]).

[F3] Hamiltonian conventions: $X_f=J_{\mathrm{act}}\nabla f=(-f_\vartheta,f_I)$ with $J_{\mathrm{act}}:=\begin{pmatrix}0&-I_n\\I_n&0\end{pmatrix}$ in the action-first order $(I,\vartheta)$ and $\omega=\sum_jd\vartheta_j\wedge dI_j$ ([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]); a $C^1$ map $C$ is canonical iff $DC^{\mathsf T}J_{\mathrm{act}}\,DC=J_{\mathrm{act}}$, which holds for translations because $DC=I_{2n}$ ([[prop-cm-canonical-map-tests-and-hamiltonian-transport]] clause 1).

[F4] The conclusions of [[thm-parameter-kam-torus-invariance-and-lagrangianity]]: for the parameter Hamiltonian of its statement, $X_H(\Psi_\infty(0,\vartheta,\nu);\chi_\infty(\nu))=\sum_j\nu_j\partial_{\vartheta_j}\Psi_\infty(0,\vartheta,\nu)$ on the real slice, and the pullback of $\omega$ along the real slice vanishes.

## Proof

**Proof technique:** direct; expand the integrable part to second order along the action segment, bound by the Hessian constant, choose $r$ to balance the two error terms, and translate the parameter family back to the physical variables.

1.1 *Taylor decomposition.* Fix $\nu\in\Omega$, $|I|_\infty\le r$ and put $u(t):=h(b(\nu)+tI)$ for $t\in[0,1]$; by [F2] $u$ is $C^2$ with $u'(0)=Dh(b(\nu))I=\nu\cdot I$ and $u''(t)=I^{\mathsf T}D^2h(b(\nu)+tI)I$, so the integral remainder formula and the Hessian hypothesis give $h(b(\nu)+I)-h(b(\nu))-\nu\cdot I=\int_0^1(1-t)u''(t)\,dt$ with $|u''(t)|\le M_2|I|_\infty^2\le M_2r^2$, hence $|P_h(I,\nu)|\le\frac12M_2r^2\le M_2r^2$. This is clause 1. [given, F1, F2, algebra]

2.1 *The effective perturbation.* $G$ is a sum of compositions of holomorphic maps ($b$, $h$, $F$) and hence holomorphic on $D_{r,s_0,h_0'}(\Omega)$, and it is $2\pi$-periodic in $\vartheta$ because $F$ is; for each complex $\nu\in O_{h_0\prime}(\Omega)$ the containment hypothesis puts the whole Taylor segment $b(\nu)+tI$ in the Hessian-control tube. Repeating the integral remainder argument of step 1.1 there gives the same bound, so with $|F|\le\varepsilon$, $|G|\le M_2r^2+\varepsilon=2\varepsilon$ since $r^2=\varepsilon/M_2$. This is clause 2. [step 1.1, given, F1, algebra]

3.1 *The $\alpha^2$-smallness.* Since all quantities are positive, $2\varepsilon\le c_1\alpha r\sigma_0^{\mu}$ is equivalent to $4\varepsilon^2\le c_1^2\alpha^2\sigma_0^{2\mu}\varepsilon/M_2$, i.e. to $\varepsilon\le\frac{c_1^2}{4}\alpha^2\sigma_0^{2\mu}/M_2$; under that hypothesis $|G|\le2\varepsilon\le c_1\alpha r\sigma_0^{\mu}$, i.e. $E\le c_1$. This is clause 3. [step 2.1, given, algebra]

3.2 *Transfer of the invariance.* Put $T_\nu(I,\vartheta):=(b(\chi_\infty(\nu))+I,\vartheta)$ and $H_{\mathrm{par}}(\,\cdot\,,\,\cdot\,,\chi_\infty(\nu))=H\circ T_\nu$ by the definitions of $H$ and $H_{\mathrm{par}}$; for the fixed original parameter $\chi_\infty(\nu)$, $T_\nu$ is a translation, $DH_{\mathrm{par}}=DH\circ DT_\nu=(DH)\circ T_\nu$ and $X_H(T_\nu z)=X_{H_{\mathrm{par}}}(z;\chi_\infty(\nu))$ for every $z$ in the domain, while $T_\nu$ is canonical by [F3] ($DT_\nu=I_{2n}$). Writing $\Psi_\nu=T_\nu\circ\Phi_\infty(0,\,\cdot\,,\nu)$ and using [F4], $X_H(\Psi_\nu(\vartheta))=X_{H_{\mathrm{par}}}(\Phi_\infty(0,\vartheta,\nu);\chi_\infty(\nu))=\sum_j\nu_j\partial_{\vartheta_j}\Phi_\infty(0,\vartheta,\nu)=\sum_j\nu_j\partial_{\vartheta_j}\Psi_\nu(\vartheta)$. [step 2.1, given, F3, F4, algebra]

4.1 *Lagrangian character and conclusion.* By [F3] and [F4] the pullback satisfies $\Psi_\nu^*\omega=\Phi_\infty(0,\,\cdot\,,\nu)^*(T_\nu^*\omega)=\Phi_\infty(0,\,\cdot\,,\nu)^*\omega=0$ on the real slice; with step 3.2 this says that the image of $\Psi_\nu$ is an invariant Lagrangian torus of $H$ with frequency $\nu$, which is clause 4. [step 3.2, F3, F4, algebra] ∎

## Remarks

- **Where nondegeneracy enters.** Only through the existence of the inverse frequency map $b$ and through the Hessian bound $M_2$; no convexity or Legendre-Fenchel duality is used, and $h$ need not be convex.
- **The threshold.** The reduction produces the classical condition $\varepsilon\le c\alpha^2$ on a fixed analytic domain: $\sigma_0$ and $M_2$ are fixed once the domain and the integrable part are fixed, so the factor $\alpha^2\sigma_0^{2\mu}/M_2$ is exactly a constant times $\alpha^2$. No statement is made about optimality of the constant.
