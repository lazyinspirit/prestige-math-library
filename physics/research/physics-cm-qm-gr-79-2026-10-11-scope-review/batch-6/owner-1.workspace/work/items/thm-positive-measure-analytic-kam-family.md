---
id: thm-positive-measure-analytic-kam-family
kind: theorem
title: "Positive-measure families of invariant Lagrangian tori for nondegenerate real analytic Hamiltonians: persistence for $\\varepsilon\\le c\\alpha^2$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 11
deps: [def-countable-choice, def-holomorphic-kam-domain-and-diophantine-labels, lem-kam-parameter-sequences-satisfy-all-step-hypotheses, lem-kam-generator-flow-and-remainder-bound, lem-frequency-reparametrization-by-contraction, lem-truncated-homological-equation-with-conservative-loss, lem-kam-affine-taylor-fourier-truncation, lem-kam-composed-map-and-derivative-convergence, thm-parameter-kam-torus-invariance-and-lagrangianity, lem-kam-limit-is-an-embedding, lem-nondegenerate-frequency-reduction-and-alpha-square-smallness, lem-diophantine-resonance-slab-measure, lem-kam-conjugation-symmetry-of-the-construction, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-cm-phase-domain-and-standard-symplectic-two-form, thm-real-analytic-inverse-and-implicit-function-theorems, def-metric-ball]
dependency_roles:
  def-countable-choice: mathematical-premise
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

Assume the Axiom of Countable Choice ([[def-countable-choice]]), as required by the Lebesgue-measure frequency-set supplier. Let $n\ge2$, $\tau>n-1$, $\mu:=\tau+3n+2$, $s_0>0$ and
$0<\sigma_0\le\min(1,s_0/24)$. Let the following real analytic data be fixed.

1. An open set $U\subseteq\mathbb C^n$, a compact set $K\subseteq U\cap\mathbb R^n$, a radius $0<r_0\le1$ with $\{J\in\mathbb C^n:\operatorname{dist}_\infty(J,K)<2r_0\}\subseteq U$, and a holomorphic, conjugation-symmetric function $h:U\to\mathbb C$ (so $h$ is real on the real points) with $h(K)\subseteq\mathbb R$.
2. A nonempty open set $\Omega\subseteq\mathbb R^n$, a conjugation-invariant open complex neighbourhood $\Omega'\subseteq\mathbb C^n$ containing $\Omega$ and a holomorphic, conjugation-symmetric map $b:\Omega'\to U$ with $Dh(b(\nu))=\nu$ on $\Omega'$ and $b(\Omega)+(B_{r_0}\cap\mathbb R^n)\subseteq K$ (in the applications $b=(Dh)^{-1}$ on a regular frequency patch, supplied by [[thm-real-analytic-inverse-and-implicit-function-theorems]] when $\det D^2h\ne0$).
3. A constant $M_2\ge1$ with $|I^{\mathsf T}D^2h(J)I|\le M_2|I|_\infty^2$ for all $I\in\mathbb C^n$ and all $J\in U$ with $\operatorname{dist}_\infty(J,K)<2r_0$.
4. A holomorphic, conjugation-symmetric, $2\pi$-periodic in $\vartheta$ function $F$ on $\{J:\operatorname{dist}_\infty(J,K)<2r_0\}\times S_{s_0}$ with $|F|\le\varepsilon$, where $\varepsilon>0$ is the perturbation size of the statement, and a compact cube $C^*$ with positive side length and $\overline{C^*}\subseteq\Omega$ and $\operatorname{dist}_\infty(\overline{C^*},\partial\Omega)>0$.

Then there exists a constant $c=c(n,\tau,s_0,\sigma_0,r_0,M_2,U,K,\Omega,h,b,C^*)>0$, and for every $0<\alpha$ with $\alpha<c$ and every perturbation size
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
3. **Closeness and regularity.** Writing $\Psi_\infty(0,\vartheta,\nu)=(b(\nu)+\Phi_I(0,\vartheta,\nu),\vartheta+w(\vartheta,\nu))$, one has the bounds $|\Phi_I(0,\vartheta,\nu)|\le2C_{\mathrm{phys}}rE_0$ and $|w(\vartheta,\nu)|\le2C_{\mathrm{phys}}\sigma_0E_0$ with $r=\sqrt{\varepsilon/M_2}$ and $E_0=2\sqrt{\varepsilon M_2}/(\alpha\sigma_0^{\mu})$, and the total action correction $\Phi_I$ includes the frequency-retraction change of its centre. Here $C_{\mathrm{phys}}$ is a fixed finite constant depending on the stated analytic data, including a bound for $Db$ near $C^*$. The family $\nu\mapsto\Psi_\infty(0,\vartheta,\nu)$ is Lipschitz on $\Omega_{\alpha,\tau}$ with a finite constant at most $C_{\mathrm{phys}}[1+(r+\sigma_0)E_0/h_0]$, where $h_0=\alpha/(2K_0^{\tau+1})$ is the initial frequency width chosen in the proof. The constant term retains the variation of the unperturbed centre $b(\nu)$.

No probability, frequency-of-occurrence or empirical claim is made; the
conclusion is a statement about the Lebesgue measure of a set of frequencies.

## Facts & Assumptions

**Given:** The data of clauses 1-4 and the two constants $\alpha,\varepsilon$ of the statement.

[F1] Domains, norms, Fourier calculus and the label set $\Omega_{\alpha,\tau}$: [[def-holomorphic-kam-domain-and-diophantine-labels]].

[F2] The one-step and iteration suppliers [[lem-kam-affine-taylor-fourier-truncation]], [[lem-truncated-homological-equation-with-conservative-loss]], [[lem-kam-generator-flow-and-remainder-bound]], [[lem-frequency-reparametrization-by-contraction]] and [[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]] provide the shrinking-domain remainder, inverse frequency retractions and the complete parameter estimates with $h_j=h_04^{-\mu j}$, angular loss $8\sigma_j$, and $E_j\le4^{-(\mu+1)j}E_0$. The latter lemma gives simultaneous initial feasibility uniformly for $0<\alpha\le1$.

[F3] The parameter theorem and its companions: the conclusions of [[lem-kam-composed-map-and-derivative-convergence]] (convergence, size bounds, frequency-Lipschitz bound), [[thm-parameter-kam-torus-invariance-and-lagrangianity]] (invariance identity and Lagrangian pullback), [[lem-kam-limit-is-an-embedding]] (embedding, under the smallness $4nCE_0\le1$ with $C\ge A$) and [[lem-kam-conjugation-symmetry-of-the-construction]] (reality, under conjugation symmetry of the perturbation).

[F4] The frequency reduction of [[lem-nondegenerate-frequency-reduction-and-alpha-square-smallness]]: with $r=\sqrt{\varepsilon/M_2}$, the function $G(I,\vartheta,\nu):=h(b(\nu)+I)-h(b(\nu))-\nu\cdot I+F(b(\nu)+I,\vartheta)$ is holomorphic on the stated frequency neighbourhood satisfying the geometric containment $b(O_h)+B_r\subseteq\{\operatorname{dist}_\infty(J,K)<2r_0\}$, $2\pi$-periodic and conjugation-symmetric with $|G|\le2\varepsilon=:\varepsilon_0$, and for $\varepsilon\le\frac{c_1^2}{4}\alpha^2\sigma_0^{2\mu}/M_2$ one has $E_0:=\varepsilon_0/(\alpha r\sigma_0^{\mu})\le c_1$, where $c_1$ is the one-step constant of [F2].

[F5] The measure estimate of [[lem-diophantine-resonance-slab-measure]]: for $\tau>n-1$, the resonant set inside a cube of centre $z$ and half-width $R$ has measure at most $C_{n,\tau}R^{n-1}\alpha$, so the set of Diophantine frequencies in that cube has measure at least $(2R)^n-C_{n,\tau}R^{n-1}\alpha$.

[F6] Hamiltonian conventions and translation canonicity: [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]; the inverse frequency map exists under the nondegeneracy hypothesis by [[thm-real-analytic-inverse-and-implicit-function-theorems]].

## Proof

**Proof technique:** direct; choose the actual iteration widths, retain the original-parameter map, transfer the invariant limit to the physical Hamiltonian, and sharpen its action displacement by averaging the angular equation.

**Given:** The analytic data of the Statement and facts [F1]-[F6]. Write $\sigma:=\min(\sigma_0,s_0/32)$, so $\sigma\ge3\sigma_0/4$, First fix a one-step bound $C_s$ and composition bounds $A,C_L$ valid for it. Choose $C\ge\max(C_s,A)$ as a further upper bound for the sequence and invariance estimates, and choose $c_1,C_*$ sufficient for the one-step and parameter-sequence suppliers.

1.1 Choose $h_{\mathrm{geom}}>0$ such that its closed frequency neighbourhood of $C^*$ is contained in $\Omega'$ and $b$ maps it into the complex tube $\operatorname{dist}_\infty(J,K)<r_0/2$. This is possible by compactness, continuity, and $b(C^*)\subseteq K$. Let $M_b$ be a finite bound for the operator norm of $Db$ on a slightly smaller such neighbourhood. Fix an initial error threshold $e_*>0$ below $\min(c_1^2,c_1,\sigma^2,1/64,4^{-2(\mu+1)}/C_*^2)$ and small enough for the initial feasibility assertion of [F2], the composition bounds $nAe_*\le1/2$, the embedding smallness $4nCe_*\le1$, and the invariance smallness $Ce_*\le1/16$ after enlarging $C\ge A$. All these constants depend only on fixed data. Set $c>0$ no larger than $1$, $h_{\mathrm{geom}}/2$, $M_2r_0^2$, $e_*^2\sigma^{2\mu}/(4M_2)$, and the positive-measure threshold $|C^*|/[2C_{n,\tau}(\operatorname{diam}C^*)^{n-1}]$. For $0<\varepsilon\le c\alpha^2$, put $r=\sqrt{\varepsilon/M_2}$ and $E:=2\sqrt{\varepsilon M_2}/(\alpha\sigma^\mu)\le e_*$. Choose the explicit cutoff $K_0=\lceil\max(1,2L)/\sigma\rceil$ of the sequence lemma and $h_0=\alpha/(2K_0^{\tau+1})$. By [F2] its lower width condition holds once $e_*$ is sufficiently small; $\alpha<c\le1$ makes the upper cap one automatic. Also $h_0\le\alpha/2<h_{\mathrm{geom}}/4$. [given, F2, F5, choose, algebra]

2.1 For $\lambda\in O_{h_0}(\Omega_{\alpha,\tau})$ the base point $b(\lambda)$ is within $r_0/2$ of $K$, and the action segment $b(\lambda)+tI$, $|I|_\infty<r\le r_0$, remains in the Hessian-control tube. Hence [F4] applies and the function $G=h(b(\lambda)+I)-h(b(\lambda))-\lambda\cdot I+F(b(\lambda)+I,\vartheta)$ is holomorphic, periodic, real on real points and bounded by $2\varepsilon$. With $e_0(\lambda)=h(b(\lambda))$, the identity $H_0(I,\vartheta,\lambda):=e_0(\lambda)+\lambda\cdot I+G(I,\vartheta,\lambda)=H(b(\lambda)+I,\vartheta)$ is exact. The relative error for this perturbation is $E$ of step 1.1. The strict strip margin is valid because $\sigma\le s_0/32$. [step 1.1, F1, F4, algebra]

3.1 Apply [F2] inductively to $P_0=G$. At stage $j$, the parameter lemma verifies every one-step hypothesis, including $E_j\le c_1\eta_j$, the finite-cutoff divisor bound, the full remainder estimate on action radius $\eta_jr_j$, and the frequency shift bound $B_j=C\varepsilon_j/r_j\le h_{j+1}/(16n)$. The inverse retraction solves $\phi_j+v_j\circ\phi_j=\mathrm{id}$. Thus the transformed Hamiltonian is $H_{j+1}=e_{j+1}(\nu)+\nu\cdot I+P_{j+1}$ on the widths $r_{j+1}=\eta_jr_j$, $s_{j+1}=s_j-8\sigma_j$, $h_{j+1}$, with $|P_{j+1}|\le\varepsilon_{j+1}$ by the actual remainder budget $\varepsilon_{j+1}=C_*2^{-\mu}E_j\varepsilon_j\ge3CE_j\varepsilon_j$. The canonical phase map and parameter retraction form the extended step. Therefore the hypotheses of [[lem-kam-composed-map-and-derivative-convergence]] are met, with its exact identity $H_0(\Psi_j,\chi_j)=e_j+\nu\cdot I+P_j$. Its limits have the form $\Psi_\infty=(a,\vartheta+w)$ and $\lambda=\chi_\infty(\nu)$, with $|a|\le ArE$, $|w|\le A\sigma E$, $\|D_\vartheta w\|\le nAE\le1/2$, and $|\lambda-\nu|\le AB_0$. The last bound and the initial-width estimates keep the original parameter inside the fixed geometric neighbourhood. [step 2.1, F2, F3, algebra]

4.1 The invariance supplier [F3] applies to this extended identity and gives $X_{H_0}(\Psi_\infty;\chi_\infty(\nu))=D_\vartheta\Psi_\infty\,\nu$ and vanishing pullback of the canonical two-form. Translating the actions by the fixed vector $b(\chi_\infty(\nu))$ is canonical, and $H_0(z,\lambda)=H(b(\lambda)+I,\vartheta)$ by step 2.1. Consequently the physical lift $\Psi^{\mathrm{phys}}_\nu(\vartheta)=(b(\chi_\infty(\nu))+a(\vartheta,\nu),\vartheta+w(\vartheta,\nu))$ obeys $X_H(\Psi^{\mathrm{phys}}_\nu)=D_\vartheta\Psi^{\mathrm{phys}}_\nu\,\nu$ and has zero pullback of the two-form. Reality and angular equivariance follow from the real one-step construction. The lift descends to the quotient torus. To prove injectivity, for fixed real $\nu$ solve $\vartheta=q-w(\vartheta,\nu)$ on $\mathbb R^n$ by contraction with constant at most $1/2$; the bounded periodic correction gives a unique inverse for every $q$. Equivariance makes this inverse descend modulo $2\pi$. Hence equality of physical angular components forces equality of parameter angles on the torus; the physical phase map is injective and, by compactness of the torus, a homeomorphism onto its image. This establishes the invariant Lagrangian tori of clause 2, with motion obtained by evaluating the embedding at parameter phase $\vartheta_0+s\nu$. [step 2.1, step 3.1, F3, F4, F6, algebra]

5.1 We retain the stated action closeness about $b(\nu)$, not merely about $b(\chi_\infty(\nu))$. Fix a real label, write $\lambda=\chi_\infty(\nu)$, and average the angular component of the invariance identity over the original periodic parameter angles: since every derivative of the periodic correction has mean zero, $\nu-\lambda=\operatorname{mean}[Dh(b(\lambda)+a)-Dh(b(\lambda))]+\operatorname{mean}F_p(b(\lambda)+a,\vartheta+w)$. Polarization of the Hessian quadratic-form bound gives every Hessian entry bounded by $M_2$, so its induced maximum-norm bound is at most $nM_2$. The coarse displacement bounds already place the real action segment in a fixed inner tube; Cauchy's estimate on action discs of radius $r_0/4$ gives $|F_p|\le4\varepsilon/r_0$. Therefore $|\lambda-\nu|\le nM_2ArE+4\varepsilon/r_0$. Along the segment from $\nu$ to $\lambda$, $|b(\lambda)-b(\nu)|\le M_b|\lambda-\nu|$. Since $\varepsilon/(rE)=\alpha\sigma^\mu/2\le1/2$, the total physical action correction is at most $[A+M_b(nM_2A+2/r_0)]rE$. Finally $E\le(4/3)^\mu E_0$ for the $E_0$ in the Statement. Taking $C_{\mathrm{phys}}$ at least half this fixed coefficient times $(4/3)^\mu$ yields $|\Phi_I|\le2C_{\mathrm{phys}}rE_0$; the same enlargement gives $|w|\le2C_{\mathrm{phys}}\sigma_0E_0$. [step 3.1, step 4.1, F1, F4, F6, algebra]

6.1 The phase-limit Lipschitz estimate in the composition lemma is $2C_L(r+\sigma)E/h_0$, and its parameter limit has Lipschitz constant at most $1+C_LB_0/h_0$. The fixed neighbourhood of the compact cube may be chosen convex; the bound for $Db$ therefore gives the physical-centre Lipschitz constant at most $M_b(1+C_LB_0/h_0)$. Because $B_0=C\alpha E\sigma^\mu\le C\sigma E$, adding the phase and centre bounds and using $E\le(4/3)^\mu E_0$ gives the stated $C_{\mathrm{phys}}[1+(r+\sigma_0)E_0/h_0]$ after increasing the same fixed constant. The constant term is needed even when the perturbation tends to zero, because $b(\nu)$ varies. [step 1.1, step 3.1, step 5.1, F3, algebra]

7.1 The slice proof of the resonance-slab estimate [F5] also applies to a cube of arbitrary centre: after rotation, its projection lies in a translated box of the same side bounds, and every slice of the resonant strip still has length at most $2\alpha|k|_1^{-\tau}/|k|_2$. Thus summing the same lattice shells gives the identical constant for a translated cube. It follows that $|\Omega_{\alpha,\tau}|\ge|C^*|-C_{n,\tau}(\operatorname{diam}C^*)^{n-1}\alpha>0$ by the choice of $c$ in step 1.1. For each such label, steps 4.1, 5.1 and 6.1 give every asserted embedding, invariance, Lagrangian, closeness and Lipschitz conclusion. All parameter choices depend on the fixed analytic data and the prescribed $\alpha,\varepsilon$; the single initial threshold is uniform for $0<\alpha<c$. No numerical value of $c$, probability claim, global regularity assertion or empirical observation is supplied. [step 1.1, step 4.1, step 5.1, step 6.1, F5, algebra] ∎

## Remarks

- **Scope.** The theorem is a positive-measure persistence statement: it produces a family of invariant Lagrangian tori over a set of frequencies of positive measure, not all tori, not a neighbourhood of any torus, and nothing about stability in the sense of Lyapunov or about the dynamics off the tori.
- **Nondegeneracy.** The hypothesis on $h$ enters only through the existence of the inverse frequency map $b$ (clause 2) and the Hessian constant $M_2$; a merely smooth perturbation, a degenerate Hessian, a separatrix, or an arbitrarily large perturbation are all outside the statement.
- **Constants.** The constant $c$ depends on the fixed analytic domains and the integrable part; no quantitative value is asserted, and in particular the theorem does not claim a sharp threshold.
