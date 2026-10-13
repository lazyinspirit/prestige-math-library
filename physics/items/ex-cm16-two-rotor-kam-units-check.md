---
id: ex-cm16-two-rotor-kam-units-check
kind: example
title: "Unit restoration and scale checks for the two-rotor KAM statement: the scaling identities at $\\mathcal I=E_0=1$, the physical angular frequencies, the exclusion of rational frequency labels, and the equal-rescaling invariance"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-countable-choice, pthm-cm16-two-rotor-kam,
       def-holomorphic-kam-domain-and-diophantine-labels,
       def-cm01-units]
dependency_roles:
  def-countable-choice: mathematical-premise
  pthm-cm16-two-rotor-kam: physical-result
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-data check of the units and labels in the page's two-rotor KAM theorem: with moment of inertia 1 kg m^2 and energy scale 1 J the scaling constants are J0=1 kg m^2 s^-1, t0=1 s and omega0=1 s^-1; the physical and dimensionless Hamilton equations correspond exactly; a surviving torus with dimensionless label nu carries physical angular frequencies omega0 nu_i; every rational label of the frequency cube is excluded from the Diophantine set; and equal rescaling of inertia and energy leaves the dimensionless model and the threshold unchanged. The constant c in the smallness condition is not numerically evaluated and no measured value is asserted."
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem (version 1.3, 2009; arXiv:0908.2234), §1: the action-angle formulation, the twist condition and the Diophantine frequency condition of the analytic KAM theorem"
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (expanded version of the Seattle 1999 lectures; complete text), §3.3 and §6.1: Diophantine frequency sets, resonant slabs and the standard examples of non-Diophantine labels"
      url: "https://www.johndcook.com/KAM.pdf"
    - title: "Gerald Sussman and Jack Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed., §1.5 and §4.6: dimensions of action-angle data and the requirement of a precise KAM statement"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]), as in the cited two-rotor KAM theorem.

**Declared model data.** Take the two-rotor model of
[[pthm-cm16-two-rotor-kam]] with
$$\mathcal I:=1\ \mathrm{kg\,m^2},\qquad E_0:=1\ \mathrm J,\qquad \varepsilon\ \text{dimensionless},$$
so that $J_0=\sqrt{\mathcal I E_0}=1\ \mathrm{kg\,m^2\,s^{-1}}$,
$t_0=J_0/E_0=1\ \mathrm s$ and $\omega_0=\sqrt{E_0/\mathcal I}=1\ \mathrm{s^{-1}}$.

**Assertions to check.** (i) The dimensions $[H_{\mathrm{phys}}]=\mathrm J$,
$[\Pi_i]=\mathrm{kg\,m^2\,s^{-1}}$, $[\mathcal I]=\mathrm{kg\,m^2}$,
$[\varepsilon]=1$ and $[\omega_0]=\mathrm{s^{-1}}$ ([[def-cm01-units]]).
(ii) With $I_i=\Pi_i/J_0$, $s=t/t_0$ the physical Hamilton equations
$\dot\theta_i=\Pi_i/\mathcal I$, $\dot\Pi_i=E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$
are equivalent to $\theta_i'=I_i$,
$I_i'=\varepsilon\sin\vartheta_i\cos\vartheta_{3-i}$.
(iii) A surviving torus with dimensionless label $\nu$ carries the physical
angular frequencies $\omega_0\nu_i$, here $\nu_i\ \mathrm{s^{-1}}$.
(iv) Every rational label in the cube $C^*$ is excluded from
$\Omega_{\alpha,\tau}$ for every $\alpha>0$ and $\tau>1$.
(v) Replacing $(\mathcal I,E_0)$ by $(\lambda\mathcal I,\lambda E_0)$ with
$\lambda>0$ leaves $\omega_0$, the dimensionless model and the smallness
condition unchanged, while rescaling $J_0$ by $\lambda$.

## Facts & Assumptions

**Given:** the declared data $\mathcal I=1\ \mathrm{kg\,m^2}$, $E_0=1\ \mathrm J$ and the scaling constants $J_0,t_0,\omega_0$; the frequency cube $C^*$ and the Diophantine set $\Omega_{\alpha,\tau}$ of [[pthm-cm16-two-rotor-kam]].

[L1] The two-rotor KAM statement and its scaling ([[pthm-cm16-two-rotor-kam]]): the physical Hamiltonian is $\Pi_1^2/(2\mathcal I)+\Pi_2^2/(2\mathcal I)+E_0\varepsilon\cos\theta_1\cos\theta_2$ with $J_0^2=\mathcal I E_0$ and $t_0=J_0/E_0$; under $I_i=\Pi_i/J_0$, $s=t/t_0$ it becomes $\tfrac12(I_1^2+I_2^2)+\varepsilon\cos\vartheta_1\cos\vartheta_2$, and each surviving torus carries $\varphi(t)=\varphi_0+\omega_0\nu t$ in its torus parameter, with the physical angle given by the embedding.

[L2] Diophantine labels ([[def-holomorphic-kam-domain-and-diophantine-labels]]): a frequency $\nu$ is $(\alpha,\tau)$-Diophantine exactly when $\lvert k\cdot\nu\rvert\ge\alpha\lvert k\rvert_1^{-\tau}$ for every nonzero integer vector $k$.

## Verification

**Proof technique:** direct.

1.1 Dimensions: the physical Hamiltonian has $[\Pi_i^2/\mathcal I]=\mathrm{kg^2m^4s^{-2}}/(\mathrm{kg\,m^2})=\mathrm{kg\,m^2\,s^{-2}}=\mathrm J$ and $[E_0\varepsilon]=1\cdot\mathrm J$ with $\varepsilon$ dimensionless; $\omega_0=\sqrt{E_0/\mathcal I}$ has $[\omega_0]=\sqrt{\mathrm{kg\,m^2\,s^{-2}}/(\mathrm{kg\,m^2})}=\mathrm{s^{-1}}$ ([[def-cm01-units]]). With the declared values, $J_0=1\ \mathrm{kg\,m^2\,s^{-1}}$, $t_0=1\ \mathrm s$, $\omega_0=1\ \mathrm{s^{-1}}$. [given, L1, algebra]

1.2 Scaling of the equations, first equation: with $\Pi_i=J_0I_i$ and $t=t_0s$ the chain rule gives $\dot\theta_i=t_0^{-1}\theta_i'$ and $\dot\Pi_i=t_0^{-1}J_0I_i'$; substituting into $\dot\theta_i=\Pi_i/\mathcal I$ and using $J_0t_0=\mathcal I$ yields $t_0^{-1}\theta_i'=J_0I_i/\mathcal I=I_i/t_0$, that is the dimensionless equation $\theta_i'=I_i$. [given, L1, algebra]

1.3 Rational labels are non-Diophantine: let $\nu=(p_1/q,p_2/q)\in C^*$ with integers $p_1,p_2$ and $q\ge1$. If $p_1=p_2=0$, choose $k=(1,0)$; otherwise set $k:=(p_2,-p_1)\ne0$; in either case $k\cdot\nu=0<\alpha\lvert k\rvert_1^{-\tau}$, so $\nu\notin\Omega_{\alpha,\tau}$ by [L2]. Hence the Diophantine set of the theorem contains no rational point of the cube; the positive measure it retains is carried by irrational labels. [given, L2, algebra]

2.1 Scaling of the equations, second equation: substituting into $\dot\Pi_i=E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$ gives $t_0^{-1}J_0I_i'=E_0\varepsilon\sin\theta_i\cos\theta_{3-i}$; since $J_0/t_0=J_0E_0/J_0=E_0$, this is equivalent to $I_i'=\varepsilon\sin\theta_i\cos\theta_{3-i}$, the dimensionless Hamilton equation of the potential $\varepsilon\cos\vartheta_1\cos\vartheta_2$. With the declared values $J_0/t_0=1\ \mathrm J$ and $E_0=1\ \mathrm J$ the substitution is an identity. [step 1.2, given, L1, algebra]

2.2 Physical frequencies: by [L1] a surviving torus with label $\nu$ carries $\varphi(t)=\varphi_0+\omega_0\nu t$ in its torus parameter; the physical angle is its embedded angular component; with $\omega_0=1\ \mathrm{s^{-1}}$ the components $\omega_0\nu_i=\nu_i\ \mathrm{s^{-1}}$ are the physical angular frequencies, of dimension $\mathrm{s^{-1}}$ as in step 1.1. [step 1.1, given, L1, algebra]

3.1 Equal rescaling: replace $(\mathcal I,E_0)$ by $(\lambda\mathcal I,\lambda E_0)$, $\lambda>0$; then $\omega_0=\sqrt{E_0/\mathcal I}$ is unchanged, $J_0=\sqrt{\mathcal I E_0}$ is multiplied by $\lambda$ and $t_0=J_0/E_0$ is unchanged, so the dimensionless Hamiltonian, the frequency cube, the Diophantine set and the smallness condition are all unchanged, while the physical momenta $\Pi_i=J_0I_i$ are rescaled by $\lambda$. The constant $c$ of the theorem is not numerically evaluated in this check; only the exact scaling behaviour is asserted. [step 1.1, step 1.2, given, L1, algebra] ∎

## Remarks

- **What this check does not do.** It verifies dimensions, the scaling correspondence and the exclusion of rational labels; it does not evaluate the KAM constant $c$, does not certify any particular pair $(\alpha,\varepsilon)$ and does not assert that any laboratory rotor realizes the model. Those would require the numerical computation of the theorem's constant and a separate apparatus model.

- **Why rational labels are worth recording.** The frequency cube is full of rational labels, so the positive-measure conclusion of [[pthm-cm16-two-rotor-kam]] concerns an open-ended irrational set; the check makes the Diophantine condition concrete by exhibiting the exact obstruction for rational labels.
