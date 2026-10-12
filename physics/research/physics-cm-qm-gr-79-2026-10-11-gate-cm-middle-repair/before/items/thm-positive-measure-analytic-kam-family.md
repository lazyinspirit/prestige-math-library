---
id: thm-positive-measure-analytic-kam-family
kind: theorem
title: "Positive-measure families of invariant Lagrangian tori for nondegenerate real analytic Hamiltonians: persistence for $\\varepsilon\\le c\\alpha^2$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 11
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-kam-parameter-sequences-satisfy-all-step-hypotheses, lem-kam-generator-flow-and-remainder-bound, lem-frequency-reparametrization-by-contraction, lem-truncated-homological-equation-with-conservative-loss, lem-kam-affine-taylor-fourier-truncation, lem-kam-composed-map-and-derivative-convergence, thm-parameter-kam-torus-invariance-and-lagrangianity, lem-kam-limit-is-an-embedding, lem-nondegenerate-frequency-reduction-and-alpha-square-smallness, lem-diophantine-resonance-slab-measure, lem-kam-conjugation-symmetry-of-the-construction, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-cm-phase-domain-and-standard-symplectic-two-form, thm-real-analytic-inverse-and-implicit-function-theorems, def-metric-ball]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-kam-parameter-sequences-satisfy-all-step-hypotheses: mathematical-premise
  lem-kam-generator-flow-and-remainder-bound: mathematical-premise
  lem-frequency-reparametrization-by-contraction: mathematical-premise
  lem-truncated-homological-equation-with-conservative-loss: mathematical-premise
  lem-kam-affine-taylor-fourier-truncation: mathematical-premise
  lem-kam-composed-map-and-derivative-convergence: mathematical-premise
  thm-parameter-kam-torus-invariance-and-lagrangianity: mathematical-premise
  lem-kam-limit-is-an-embedding: mathematical-premise
  lem-nondegenerate-frequency-reduction-and-alpha-square-smallness: mathematical-premise
  lem-diophantine-resonance-slab-measure: mathematical-premise
  lem-kam-conjugation-symmetry-of-the-construction: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  thm-real-analytic-inverse-and-implicit-function-theorems: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §1, §5 and Appendices A-B (the classical KAM theorem for real analytic nondegenerate Hamiltonians, the $\\varepsilon\\le c\\alpha^2$ smallness and the positive measure $\\mathrm{mes}(\\mathcal D_\\alpha\\cap B)=\\mathrm{mes}(B)-O(\\alpha)$ of the surviving frequencies), PDF pp. 1-7, 23-30 and 31-33."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §6.1-§6.4 (the invariant tori of the perturbed mechanical system, their Lagrangian character, and the measure of the persistence set), printed pp. 92-118."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge2$, $\tau>n-1$, $\mu:=\tau+3n+2$, $s_0>0$ and
$0<\sigma_0\le\min(1,s_0/24)$. Let the following real analytic data be fixed.

1. An open set $U\subseteq\mathbb C^n$, a compact set $K\subseteq U\cap\mathbb R^n$, a radius $0<r_0\le1$ with $\{J\in\mathbb C^n:\operatorname{dist}_\infty(J,K)<2r_0\}\subseteq U$, and a holomorphic, conjugation-symmetric function $h:U\to\mathbb C$ (so $h$ is real on the real points) with $h(K)\subseteq\mathbb R$.
2. A nonempty open set $\Omega\subseteq\mathbb R^n$, an open neighbourhood $\Omega'\supseteq\Omega$ and a holomorphic, conjugation-symmetric map $b:\Omega'\to U$ with $Dh(b(\nu))=\nu$ on $\Omega'$ and $b(\Omega)+B_{r_0}\subseteq K$ (in the applications $b=(Dh)^{-1}$ on a regular frequency patch, supplied by [[thm-real-analytic-inverse-and-implicit-function-theorems]] when $\det D^2h\ne0$).
3. A constant $M_2\ge1$ with $|I^{\mathsf T}D^2h(J)I|\le M_2|I|_\infty^2$ for all $I\in\mathbb C^n$ and all $J\in U$ with $\operatorname{dist}_\infty(J,K)<2r_0$.
4. A holomorphic, conjugation-symmetric, $2\pi$-periodic in $\vartheta$ function $F$ on $\{J:\operatorname{dist}_\infty(J,K)<2r_0\}\times S_{s_0}$ with $|F|\le\varepsilon$, where $\varepsilon>0$ is the perturbation size of the statement, and a compact cube $C^*$ with $\overline{C^*}\subseteq\Omega$ and $\operatorname{dist}_\infty(\overline{C^*},\partial\Omega)>0$.

Then there exists a constant $c=c(n,\tau,s_0,\sigma_0,r_0,M_2,U,K,\Omega)>0$, and for every $0<\alpha$ with $\alpha<c$ and every perturbation size
$$0<\varepsilon\le c\,\alpha^2,$$
the following hold for the Hamiltonian $H(p,\vartheta):=h(p)+F(p,\vartheta)$ on the phase domain $U\cap\mathbb R^n\times\mathbb T^n$ with the two-form $\omega=\sum_jd\vartheta_j\wedge dI_j$:

1. **Positive-measure frequency set.** The set
$$\Omega_{\alpha,\tau}:=\{\nu\in\overline{C^*}:|k\cdot\nu|\ge\alpha|k|_1^{-\tau}\ \text{for all }k\in\mathbb Z^n\setminus\{0\}\}$$
   has positive Lebesgue measure, with $|\Omega_{\alpha,\tau}|\ge|\overline{C^*}|-C_{n,\tau}\,(\operatorname{diam}C^*)^{n-1}\alpha$ for the constant $C_{n,\tau}$ of [[lem-diophantine-resonance-slab-measure]].
2. **Invariant Lagrangian tori.** For every $\nu\in\Omega_{\alpha,\tau}$ there is a continuous injective map
$$\widehat\Psi_\nu:\mathbb T^n\longrightarrow\bigl(U\cap\mathbb R^n\bigr)\times\mathbb T^n,\qquad \widehat\Psi_\nu\circ\pi=\Pi\circ\Psi_\infty(0,\,\cdot\,,\nu),$$
   which is a homeomorphism onto its image and satisfies
$$X_H\bigl(\widehat\Psi_\nu(\vartheta)\bigr)=\sum_{j=1}^n\nu_j\,\partial_{\vartheta_j}\widehat\Psi_\nu(\vartheta),\qquad \widehat\Psi_\nu^*\omega=0 ;$$
   the parametrisation is read in the lifts, and $\pi,\Pi$ are the quotient maps of the angle variables.
3. **Closeness and regularity.** Writing $\Psi_\infty(0,\vartheta,\nu)=(b(\nu)+\Phi_I(0,\vartheta,\nu),\vartheta+w(\vartheta,\nu))$, one has the bounds $|\Phi_I(0,\vartheta,\nu)|\le2CrE_0$ and $|w(\vartheta,\nu)|\le2C\sigma_0E_0$ with $r=\sqrt{\varepsilon/M_2}$ and $E_0=2\sqrt{\varepsilon M_2}/(\alpha\sigma_0^{\mu})$, and the family $\nu\mapsto\Psi_\infty(0,\vartheta,\nu)$ is Lipschitz on $\Omega_{\alpha,\tau}$ with the constant of [[lem-kam-composed-map-and-derivative-convergence]] clause 3.

No probability, frequency-of-occurrence or empirical claim is made; the
conclusion is a statement about the Lebesgue measure of a set of frequencies.

## Facts & Assumptions

**Given:** The data of clauses 1-4 and the two constants $\alpha,\varepsilon$ of the statement.

[F1] Domains, norms, Fourier calculus and the label set $\Omega_{\alpha,\tau}$: [[def-holomorphic-kam-domain-and-diophantine-labels]].

[F2] The one-step construction: [[lem-kam-affine-taylor-fourier-truncation]], [[lem-truncated-homological-equation-with-conservative-loss]], [[lem-kam-generator-flow-and-remainder-bound]], [[lem-frequency-reparametrization-by-contraction]] supply, at every stage, the maps and estimates listed there whenever the step hypotheses hold; [[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]] verifies all of them for the sequences $(\sigma_j,K_j,h_j,s_j,E_j,\eta_j,r_j,\varepsilon_j)$ as soon as $E_0\le\min(c^2,c,\sigma_0^2,(16C_*^2)^{-1})$ and conditions 2 and 3 there on $K_0,h_0$ hold.

[F3] The parameter theorem and its companions: the conclusions of [[lem-kam-composed-map-and-derivative-convergence]] (convergence, size bounds, frequency-Lipschitz bound), [[thm-parameter-kam-torus-invariance-and-lagrangianity]] (invariance identity and Lagrangian pullback), [[lem-kam-limit-is-an-embedding]] (embedding, under the smallness $4nCE_0\le1$) and [[lem-kam-conjugation-symmetry-of-the-construction]] (reality, under conjugation symmetry of the perturbation).

[F4] The frequency reduction of [[lem-nondegenerate-frequency-reduction-and-alpha-square-smallness]]: with $r=\sqrt{\varepsilon/M_2}$, the function $G(I,\vartheta,\nu):=h(b(\nu)+I)-h(b(\nu))-\nu\cdot I+F(b(\nu)+I,\vartheta)$ is holomorphic, $2\pi$-periodic and conjugation-symmetric with $|G|\le2\varepsilon=:\varepsilon_0$, and for $\varepsilon\le\frac{c_1^2}{4}\alpha^2\sigma_0^{2\mu}/M_2$ one has $E_0:=\varepsilon_0/(\alpha r\sigma_0^{\mu})\le c_1$, where $c_1$ is the one-step constant of [F2].

[F5] The measure estimate of [[lem-diophantine-resonance-slab-measure]]: for $\tau>n-1$, the resonant set inside a cube of centre $z$ and half-width $R$ has measure at most $C_{n,\tau}R^{n-1}\alpha$, so the set of Diophantine frequencies in that cube has measure at least $(2R)^n-C_{n,\tau}R^{n-1}\alpha$.

[F6] Hamiltonian conventions and translation canonicity: [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]; the inverse frequency map exists under the nondegeneracy hypothesis by [[thm-real-analytic-inverse-and-implicit-function-theorems]].

## Proof

**Proof technique:** direct; fix the constants so that the reduction applies with $E_0\le c$, invoke the parameter theory for the reduced perturbation, transfer to the physical Hamiltonian, and estimate the frequency set by the slab lemma.

1.1 *Choosing the constants.* The objects $H$, $\omega$ and $X_H$ and the inverse frequency map are those of [F6]; fix $c:=\min\bigl(c_1^2\sigma_0^{2\mu}/(4M_2),\;M_2r_0^2,\;c_3\bigr)$ where $c_3>0$ is small enough that $\varepsilon\le c_3\alpha^2$ implies $E_0:=2\sqrt{\varepsilon M_2}/(\alpha\sigma_0^{\mu})\le\min(c_1^2,c_1,\sigma_0^2,(16C_*^2)^{-1},1/(4nC))$ and that the intervals in condition 3 of [[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]] are nonempty (possible because $E_0\le2\sqrt{c_3}M_2^{1/2}\sigma_0^{-\mu}$, a fixed small number for $c_3$ small); then pick $K_0$ satisfying condition 2 there and $h_0'$ in the interval of condition 3, so that [F2] provides the one-step construction at every stage with one-step constant $C$. [F2, F4, F6, given, algebra]

2.1 *The reduced perturbation.* With $r:=\sqrt{\varepsilon/M_2}\le r_0$ (because $c\le M_2r_0^2$), [F4] shows that $G(I,\vartheta,\nu)=h(b(\nu)+I)-h(b(\nu))-\nu\cdot I+F(b(\nu)+I,\vartheta)$ is holomorphic, $2\pi$-periodic and conjugation-symmetric on $D_{r,s_0,h_0'}(\Omega_{\alpha,\tau})$ (with $h_0'$ chosen below the distance of $\overline{C^*}$ from $\partial\Omega$) with $|G|\le2\varepsilon=\alpha E_0r\sigma_0^{\mu}$ and $E_0\le c_1$; in particular $P_0:=G$ satisfies the smallness hypothesis of the one-step construction and of [[lem-kam-composed-map-and-derivative-convergence]]. [step 1.1, F1, F4, algebra]

3.1 *The parameter theorem.* By steps 1.1 and 2.1 the hypotheses of [[lem-kam-composed-map-and-derivative-convergence]] hold with $P_0=G$, so its conclusion produces the limit family $\Phi_\infty$; [[thm-parameter-kam-torus-invariance-and-lagrangianity]] gives the invariance identity and the vanishing pullback for the parameter Hamiltonian $H_{\mathrm{par}}(I,\vartheta,\nu)=h(b(\nu))+\nu\cdot I+G(I,\vartheta,\nu)$; [[lem-kam-limit-is-an-embedding]] turns the limit into an embedding of $\mathbb T^n$ (the extra smallness $4nCE_0\le1$ was included in $c_3$); and [[lem-kam-conjugation-symmetry-of-the-construction]] gives reality, $\Phi_\infty(0,\vartheta,\nu)\in\mathbb R^{2n}$ for real $\vartheta,\nu$. [step 1.1, step 2.1, F2, F3, algebra]

4.1 *Transfer to the physical Hamiltonian.* By clause 4 of [F4] the physical family $\Psi_\nu(\vartheta)=(b(\nu)+\Phi_I(0,\vartheta,\nu),\,\Phi_\vartheta(0,\vartheta,\nu))$ satisfies $X_H(\Psi_\nu(\vartheta))=\sum_j\nu_j\partial_{\vartheta_j}\Psi_\nu(\vartheta)$ and $\Psi_\nu^*\omega=0$ for every $\nu\in\Omega_{\alpha,\tau}$; since $b$ and $\Phi_\infty$ are real on real points, the family takes values in $(U\cap\mathbb R^n)\times\mathbb R^n\subseteq\mathbb R^{2n}$, and the descent of step 3.1 carries over to $\widehat\Psi_\nu$, which is therefore a homeomorphism of $\mathbb T^n$ onto its image; the bounds of clause 3 are clause 4 of [[lem-kam-composed-map-and-derivative-convergence]] and its frequency-Lipschitz bound is clause 3 there. This proves clauses 2 and 3. [step 3.1, F3, F4, algebra]

5.1 *The measure of the frequency set.* The complement of $\Omega_{\alpha,\tau}$ in $\overline{C^*}$ is contained in the resonant set of [F5] for the cube $\overline{C^*}$, whose half-width is at most $\operatorname{diam}(C^*)/2$; hence $|\Omega_{\alpha,\tau}|\ge|\overline{C^*}|-C_{n,\tau}(\operatorname{diam}C^*)^{n-1}\alpha$, which is positive once $\alpha<|\overline{C^*}|/(C_{n,\tau}(\operatorname{diam}C^*)^{n-1})$; this upper bound on $\alpha$ is part of the constant $c$ of clause 1. This proves clause 1. [step 4.1, F5, algebra]

6.1 *Conclusion.* Steps 1.1-5.1 establish all clauses for every $\nu\in\Omega_{\alpha,\tau}$ and every $\varepsilon\le c\alpha^2$ with the single constant $c$ of step 1.1; no step uses more than the stated data, and no probability or empirical claim is involved. [step 4.1, step 5.1, algebra] ∎

## Remarks

- **Scope.** The theorem is a positive-measure persistence statement: it produces a family of invariant Lagrangian tori over a set of frequencies of positive measure, not all tori, not a neighbourhood of any torus, and nothing about stability in the sense of Lyapunov or about the dynamics off the tori.
- **Nondegeneracy.** The hypothesis on $h$ enters only through the existence of the inverse frequency map $b$ (clause 2) and the Hessian constant $M_2$; a merely smooth perturbation, a degenerate Hessian, a separatrix, or an arbitrarily large perturbation are all outside the statement.
- **Constants.** The constant $c$ depends on the fixed analytic domains and the integrable part; no quantitative value is asserted, and in particular the theorem does not claim a sharp threshold.
