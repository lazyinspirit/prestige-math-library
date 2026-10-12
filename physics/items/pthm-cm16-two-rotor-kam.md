---
id: pthm-cm16-two-rotor-kam
kind: physics-theorem
title: "The two-rotor model: a positive-measure family of invariant Lagrangian tori with Diophantine frequencies for sufficiently small coupling, with the explicit units and the stated scope"
status: draft
origin: session
domain: physics
dependency_level: 12
deps: [def-countable-choice, thm-positive-measure-analytic-kam-family,
       lem-kam-composed-map-and-derivative-convergence,
       def-holomorphic-kam-domain-and-diophantine-labels,
       lem-diophantine-resonance-slab-measure,
       def-cm01-units,
       def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-positive-measure-analytic-kam-family: mathematical-premise
  lem-kam-composed-map-and-derivative-convergence: mathematical-premise
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-diophantine-resonance-slab-measure: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The conditional KAM statement for the adopted two-rotor model: two ideal fixed-axis rotors of equal positive moment of inertia with the smooth interaction potential E0 epsilon cos theta1 cos theta2. For every Diophantine exponent tau>1 there is a constant c>0 determined by the declared dimensionless data such that for 0<alpha<c and 0<epsilon<=c alpha^2 the set of frequencies satisfying the Diophantine bound has positive Lebesgue measure in the declared action cube, and for every such frequency the model has a C1 invariant Lagrangian embedding whose image carries quasi-periodic motion with angular frequencies omega0 nu_i. The item asserts nothing about the complement of that frequency set (resonant or non-Diophantine labels), nothing about all initial data, no chaos or diffusion statement, no measured value of any parameter and no empirical realization; epsilon<=c alpha^2 is a model-data smallness condition."
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem (version 1.3, 2009; arXiv:0908.2234), §§1-5 and Appendices A-B: the analytic KAM theorem, its nondegeneracy, Diophantine and smallness hypotheses and the positive-measure persistence statement"
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (expanded version of the Seattle 1999 lectures; complete text), §3.3 pp. 32-36 and §6.1 pp. 92-100: Diophantine sets and the measure of the resonant slabs"
      url: "https://www.johndcook.com/KAM.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §4.6: the explicit statement that SICM does not prove KAM and the requirement of regularity, twist and smallness hypotheses"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]), inherited from the analytic KAM suppliers. Adopt the **two-rotor model**: two ideal rotors with fixed axes, equal moments
of inertia $\mathcal I>0$, angular coordinates $\theta_1,\theta_2$ in
$\mathbb R/2\pi\mathbb Z$ (radians, dimensionless), conjugate angular momenta
$\Pi_1,\Pi_2$, the physical Hamiltonian
$$H_{\mathrm{phys}}(\theta,\Pi)=\frac{\Pi_1^2}{2\mathcal I}+\frac{\Pi_2^2}{2\mathcal I} +E_0\varepsilon\cos\theta_1\cos\theta_2$$
on the phase domain $(\mathbb R/2\pi\mathbb Z)^2\times\mathbb R^2$, with the
canonical two-form $d\theta_1\wedge d\Pi_1+d\theta_2\wedge d\Pi_2$ and
Hamilton equations $\theta'=\partial_\Pi H_{\mathrm{phys}}$,
$\Pi'=-\partial_\theta H_{\mathrm{phys}}$; here $E_0>0$ is an energy scale
and $\varepsilon\ge0$ a dimensionless coupling. All quantities are model data;
$[H_{\mathrm{phys}}]=\mu\ell^2\tau^{-2}$, $[\Pi_i]=\mu\ell^2\tau^{-1}$,
$[\mathcal I]=\mu\ell^2$ ([[def-cm01-units]]). Put
$$J_0:=\sqrt{\mathcal I E_0},\qquad t_0:=\frac{J_0}{E_0}=\sqrt{\frac{\mathcal I}{E_0}},\qquad \omega_0:=\frac1{t_0}=\sqrt{\frac{E_0}{\mathcal I}},$$
and read the **dimensionless model** through $I_i:=\Pi_i/J_0$ and the
dimensionless time $s:=t/t_0$,
$$H(I,\vartheta)=\tfrac12\bigl(I_1^2+I_2^2\bigr)+\varepsilon\cos\vartheta_1\cos\vartheta_2.$$
Let $C^*:=\{\nu\in\mathbb R^2:\lvert\nu\rvert_\infty\le\tfrac1{16}\}$ be the
declared frequency cube and, for $\tau>1$ and $\alpha>0$, let
$$\Omega_{\alpha,\tau}:=\Bigl\{\nu\in C^*:\lvert k\cdot\nu\rvert\ge\alpha\lvert k\rvert_1^{-\tau} \ \text{for all }k\in\mathbb Z^2\setminus\{0\}\Bigr\}$$
be its $(\alpha,\tau)$-Diophantine subset
([[def-holomorphic-kam-domain-and-diophantine-labels]]). Then for every
$\tau>1$ there is a constant $c>0$, depending only on the fixed
dimensionless analytic data (the action cube, the strip width $s_0$, the
exponent $\tau$, $M_2=2$, and the normalized perturbation profile
$g(\vartheta)=\cos\vartheta_1\cos\vartheta_2$ with strip bound
$\lvert g\rvert\le\cosh^2(s_0)$), and uniform in $\alpha$ and the amplitude
$\varepsilon$, such that for every $0<\alpha<c$ and every $\varepsilon>0$ with
$\varepsilon\le c\,\alpha^2$:

1. **(Positive measure of frequencies.)** The Diophantine set has positive
   Lebesgue measure, with
   $$\lvert\Omega_{\alpha,\tau}\rvert\ge\lvert C^*\rvert-C_{2,\tau}\, (\operatorname{diam}C^*)\,\alpha=\frac1{64}-\frac{C_{2,\tau}}{8}\,\alpha,$$
   where $C_{2,\tau}$ is the lattice constant of
   [[lem-diophantine-resonance-slab-measure]].
2. **(Invariant Lagrangian tori.)** For every $\nu\in\Omega_{\alpha,\tau}$
   there is a $C^1$ embedding
   $\widehat\Psi_\nu:\mathbb T^2\to(\mathbb R^2)\times\mathbb T^2$ (a
   $C^1$ injective immersion that is a homeomorphism onto its image), and it
   is Lagrangian
   ($\widehat\Psi_\nu^*\omega=0$ for the two-form $\omega$ of the
   dimensionless model), and satisfies
   $$X_H\bigl(\widehat\Psi_\nu(\vartheta)\bigr)=\sum_{j=1}^2\nu_j\, \partial_{\vartheta_j}\widehat\Psi_\nu(\vartheta);$$
   consequently a torus parameter phase follows $\varphi(s)=\varphi_0+\nu s$,
   and its dimensionless phase-space trajectory is $\widehat\Psi_\nu(\varphi_0+\nu s)$.
   At physical time $t$ it is the scaled image of
   $\widehat\Psi_\nu(\varphi_0+\omega_0\nu t)$: the physical angle is the
   angular component of this embedding, not generally the linear parameter phase.
   Thus the torus carries quasi-periodic motion with fundamental angular
   frequencies $\omega_0\nu_1,\omega_0\nu_2$. The
   parametrisation is close to the unperturbed one and Lipschitz in $\nu$ with
   the bounds of [[thm-positive-measure-analytic-kam-family]] clause 3.
3. **(Scope.)** Nothing is asserted about the complement of
   $\Omega_{\alpha,\tau}$ (resonant or non-Diophantine labels), about tori
   surviving outside the smallness threshold, about all initial data, about
   diffusive or chaotic behaviour of the complement, or about any laboratory
   rotor: the smallness condition $\varepsilon\le c\alpha^2$ is a model-data
   condition, the constant $c$ is not computed numerically here, and no
   measured value of $\mathcal I$, $E_0$ or $\varepsilon$ is used or implied.

## Facts & Assumptions

**Given:** the two-rotor model data $\mathcal I,E_0,\varepsilon$, the scaling
constants $J_0,t_0,\omega_0$, the dimensionless Hamiltonian
$H(I,\vartheta)=\tfrac12(I_1^2+I_2^2)+\varepsilon\cos\vartheta_1\cos\vartheta_2$
and the frequency cube $C^*$ of the Statement.

[L1] The analytic KAM theorem ([[thm-positive-measure-analytic-kam-family]], whose notation and hypotheses are those of [[def-holomorphic-kam-domain-and-diophantine-labels]]): for $n\ge2$, $\tau>n-1$, data $h,U,K,r_0,\Omega,b,M_2,F,\varepsilon,s_0,\sigma_0$ and a compact cube $C^*$ satisfying the listed analyticity, nondegeneracy ($Dh(b(\nu))=\nu$), boundedness ($M_2$) and smallness conditions, there is $c>0$ such that for $0<\alpha<c$ and $0<\varepsilon\le c\alpha^2$ the set $\Omega_{\alpha,\tau}$ has the stated positive measure with the lattice constant of [[lem-diophantine-resonance-slab-measure]], and for every $\nu\in\Omega_{\alpha,\tau}$ there is an invariant Lagrangian torus with $X_H(\widehat\Psi_\nu(\vartheta))=\sum_j\nu_j\partial_{\vartheta_j}\widehat\Psi_\nu(\vartheta)$ and the closeness and Lipschitz bounds of clause 3.

[L2] Diophantine resonance slabs ([[lem-diophantine-resonance-slab-measure]]): the resonance slabs inside a bounded frequency cube have total measure at most $C_{n,\tau}(\operatorname{diam}C^*)^{n-1}\alpha$ for the stated lattice constant, so the Diophantine set has the complementary lower bound.

[L3] Angular regularity of the limiting embedding ([[lem-kam-composed-map-and-derivative-convergence]]): the composed KAM maps converge uniformly together with their first angular derivatives; for each fixed frequency label, the limit is holomorphic in the angular variables on a complex strip. Its real torus map is therefore $C^1$ (indeed real analytic). The derivative bounds and smallness $2AE_0\le1/2$ in the two-dimensional application of [[thm-positive-measure-analytic-kam-family]] give $\lVert D_\vartheta w\rVert<1$ for the periodic angular correction in $\widehat\Psi_\nu(\vartheta)=(b(\vartheta,\nu),\vartheta+w(\vartheta,\nu))$; hence its angular component has invertible derivative and the full map is an immersion. The pullback of the canonical two-form is defined.

## Proof

**Proof technique:** direct.

1.1 Verification of the analytic data for [L1], part 1: take $n:=2$, the open set $U:=\{J\in\mathbb C^2:\operatorname{dist}_\infty(J,K)<\tfrac14\}$ with $K:=\{J\in\mathbb R^2:\lvert J\rvert_\infty\le\tfrac34\}$ and $r_0:=\tfrac18$; then $\{J:\operatorname{dist}_\infty(J,K)<2r_0\}\subseteq U$ and $h(J):=\tfrac12(J_1^2+J_2^2)$ is holomorphic and conjugation-symmetric on $U$ with $h(K)\subseteq\mathbb R$. Take $\Omega:=\{\nu\in\mathbb R^2:\lvert\nu\rvert_\infty<\tfrac18\}$, $\Omega':=\{\nu\in\mathbb C^2:\lvert\nu\rvert_\infty<\tfrac14\}$ and $b:=\mathrm{id}_{\Omega'}$; then $Dh(b(\nu))=\nu$ on $\Omega'$, and $b(\Omega)+(B_{r_0}\cap\mathbb R^2)\subseteq K$ because $\lvert\nu\rvert_\infty+\lvert\xi\rvert_\infty\le\tfrac18+\tfrac18=\tfrac14\le\tfrac34$. The Hessian bound holds with $M_2:=2$, since $|I^{\mathsf T}D^2h(J)I|=|I_1^2+I_2^2|\le|I_1|^2+|I_2|^2\le2\lvert I\rvert_\infty^2$ for every $I\in\mathbb C^2$ and $J\in U$. [given, L1, algebra]

1.2 Angular regularity and embedding: for each fixed $\nu\in\Omega_{\alpha,\tau}$, the angular parametrization of the torus in [L1] is the quotient of the limiting KAM map in [L3]. Uniform convergence of the maps and their first angular derivatives makes that limit $C^1$ on the real torus; holomorphic convergence gives real-analytic regularity. The angular derivative block is $I+D_\vartheta w$, which is invertible because $\lVert D_\vartheta w\rVert<1$ by [L3]; thus $\widehat\Psi_\nu$ is an immersion. Injectivity and the homeomorphism onto its image are supplied by [L1], so it is a $C^1$ embedding and $\widehat\Psi_\nu^*\omega$ is defined. [given, L1, L3]

2.1 Verification of the analytic data for [L1], part 2: fix $s_0:=1$, $\sigma_0:=\tfrac1{24}=\min(1,s_0/24)$ and $F(J,\vartheta):=\varepsilon\cos\vartheta_1\cos\vartheta_2$, which is holomorphic, conjugation-symmetric and $2\pi$-periodic in $\vartheta$; on the strip $\lvert\operatorname{Im}\vartheta\rvert_\infty\le s_0$ one has $\lvert\cos\vartheta_j\rvert\le\cosh s_0$, hence $\lvert F\rvert\le\varepsilon\cosh^2(s_0)=:\varepsilon_1$ on the declared domain. Take the compact cube $C^*=\{\lvert\nu\rvert_\infty\le\tfrac1{16}\}$, whose closure satisfies $\overline{C^*}\subseteq\Omega$ with $\operatorname{dist}_\infty(\overline{C^*},\partial\Omega)=\tfrac1{16}>0$. All the hypotheses of [L1] are therefore satisfied with the perturbation size $\varepsilon_1=\varepsilon\cosh^2 s_0$ in place of $\varepsilon$. [given, L1, step 1.1, algebra]

3.1 Application of [L1]: its threshold $c_1>0$ depends on the fixed action and analytic domains, $M_2$, the exponent $\tau$ and the normalized profile $g$, but is uniform in the perturbation-size bound and $\alpha$. By step 2.1 the actual perturbation has bound $\varepsilon_1=\varepsilon\cosh^2(s_0)$, so [L1] applies whenever $0<\alpha<c_1$ and $0<\varepsilon_1\le c_1\alpha^2$. Put $c:=c_1/\cosh^2(s_0)$; then these conditions follow from $0<\alpha<c$ and $0<\varepsilon\le c\alpha^2$. For such $\alpha,\varepsilon$, clause 1 of [L1] and [L2] give $\lvert\Omega_{\alpha,\tau}\rvert\ge\lvert C^*\rvert-C_{2,\tau}(\operatorname{diam}C^*)\alpha$, which is the displayed bound because $\lvert C^*\rvert=(1/8)^2=1/64$ and $\operatorname{diam}C^*=\tfrac18$ in the supremum metric; clause 2 of [L1] gives, for every $\nu\in\Omega_{\alpha,\tau}$, the injective Lagrangian torus parametrisation with $X_H(\widehat\Psi_\nu(\vartheta))=\sum_j\nu_j\partial_{\vartheta_j}\widehat\Psi_\nu(\vartheta)$; step 1.2 supplies its $C^1$ regularity, and clause 3 of [L1] supplies its closeness and Lipschitz bounds. [step 1.1, step 1.2, step 2.1, L1, L2, L3, algebra]

4.1 Physical reading: the scaling $\Pi_i=J_0I_i$, $t=t_0s$ is a canonical scaling of the phase coordinates because $d\theta_i\wedge d\Pi_i=J_0\,d\theta_i\wedge dI_i$ is a nonzero constant multiple of the dimensionless two-form, and it preserves the form of Hamilton's equations: from $\theta_i'=I_i$ and $I_i'=\varepsilon\sin\vartheta_i\cos\vartheta_{3-i}$ (the dimensionless equations) one obtains $\dot\theta_i=\Pi_i/\mathcal I$ and $\dot\Pi_i=E_0\varepsilon\sin\theta_i\cos\theta_{3-i}=-\partial_{\theta_i}U_{\mathrm{phys}}$ by the identities $J_0^2=\mathcal I E_0$ and $J_0t_0=\mathcal I$; hence the dimensionless and physical systems correspond under this scaling of solutions, and an invariant torus of the dimensionless model is an invariant torus of the physical model whose physical trajectory is the scaled embedding evaluated at parameter phase $\varphi_0+\omega_0\nu t$. The identity $J_0t_0=\mathcal I$ follows from $t_0=J_0/E_0$ and $J_0^2=\mathcal I E_0$. [step 3.1, given, algebra]

5.1 Clause 3 (scope): no clause of [L1] or [L2] contains a statement about the complement of $\Omega_{\alpha,\tau}$, about other frequencies, about tori outside the smallness threshold or about empirical realizations, and no step above produced such a statement; the constant $c=c_1/\cosh^2(s_0)$ is not numerically evaluated in this item. [step 3.1, step 4.1, L1, L2] ∎

## Remarks

- **What is and is not proved.** The theorem is a conditional persistence statement: for the adopted potential and sufficiently small coupling, the union of the surviving Diophantine tori has positive measure in the declared frequency cube. It does not assert that non-Diophantine or resonant labels fail, that the complementary motion is chaotic, or that every trajectory is quasi-periodic. The mathematical core is entirely the supplier [L1]; this item performs the rotor-specific verification of its hypotheses and the unit restoration.

- **Interaction with the horseshoe result.** [[pthm-cm16-separatrix-splitting-and-horseshoe]] establishes a chaotic invariant set for a different, explicitly driven full three-dimensional force model whose pulsed one-coordinate dynamics lies on an invariant axis and whose two transverse coordinates have adopted inverted-oscillator forces. The two results are about different model classes and are not contradictory: KAM persistence concerns invariant tori of a nearly integrable two-frequency autonomous two-rotor model, while the horseshoe concerns the pulsed model and its invariant set.

- **Units.** $\omega_0=\sqrt{E_0/\mathcal I}$ has dimension $\tau^{-1}$; the frequencies $\nu$ are dimensionless labels in the action cube $C^*$, so the physical angular frequencies $\omega_0\nu_i$ have the right dimension ([[def-cm01-units]]). The measure bound concerns the dimensionless frequency cube, and no probability, sampling or frequency-of-occurrence interpretation is attached to it.
