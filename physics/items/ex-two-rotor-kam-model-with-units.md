---
id: ex-two-rotor-kam-model-with-units
kind: example
title: "A two-rotor model with units: dimensionless normalisation, Diophantine measure and the conditional KAM family"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 12
deps: [def-countable-choice, thm-positive-measure-analytic-kam-family, lem-diophantine-resonance-slab-measure, def-holomorphic-kam-domain-and-diophantine-labels, thm-chain-rule-for-total-derivatives, thm-sine-and-cosine-derivatives, thm-sine-cosine-zero-sets-and-fundamental-period, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-geometric-series, def-first-order-ode-initial-value-problem-and-solution, def-metric-ball]
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-positive-measure-analytic-kam-family: mathematical-premise
  lem-diophantine-resonance-slab-measure: mathematical-premise
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §1 and §5 (the general perturbation form $H=h(p)+f_\\varepsilon(p,q)$, $f_\\varepsilon=\\epsilon f_*(p,q,\\epsilon)$, real analytic, with the standard symplectic structure; and the $\\alpha^2$ smallness of the iteration); the concrete two-rotor specialisation is constructed in this example, PDF pp. 5-6 and 23-30."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §2.1-§2.2 (model examples of perturbation theory) and §3.3 (Diophantine frequencies and the measure of the resonant set), printed pp. 7-23 and 32-36."
      url: "https://www.johndcook.com/KAM.pdf"
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]), inherited from the positive-measure supplier.

**The dimensionless model.** On the phase space $\mathbb R^2\times\mathbb T^2$ with
angular variables $\theta_1,\theta_2$ read modulo $2\pi$, consider the Hamiltonian
$$H(I,\theta):=\tfrac12(I_1^2+I_2^2)+\varepsilon\cos\theta_1\cos\theta_2,\qquad I=(I_1,I_2)\in\mathbb R^2,$$
so that $h(I)=\tfrac12|I|^2$ and $F(I,\theta)=\varepsilon\cos\theta_1\cos\theta_2$.
This is the standard dimensionless two-rotor (two decoupled rigid rotors with a
cosine coupling) and is a worked instance of
[[thm-positive-measure-analytic-kam-family]]. The example is conditional
mathematics: nothing below asserts that any physical rotor is governed by this
model, and no empirical quantity, measurement or statistical inference occurs.

**The physical reading with units.** Let $E_0$ be a chosen energy unit and let a
physical two-rotor have common moment of inertia $\mathcal I>0$ and coupling
energy $\lambda>0$ (both measured in their own units), with Hamiltonian
$$H_{\mathrm{phys}}(p,q)=\frac{p_1^2+p_2^2}{2\mathcal I}+\lambda\cos q_1\cos q_2 .$$
With the action unit $J_0:=(\mathcal I E_0)^{1/2}$ and the time unit
$t_0:=\mathcal I/J_0$ (so that $\mathcal I=J_0^2/E_0=J_0t_0$), the substitutions
$p=J_0I$, $t=t_0\tau$, $\lambda=\varepsilon E_0$ identify $H_{\mathrm{phys}}/E_0$
with the dimensionless $H$ above, and the frequency $\nu$ of a torus of $H$
corresponds to the physical angular velocities $\nu_j/t_0=\nu_jJ_0/\mathcal I$.

**Data.** Take $K:=[1,2]^2\subseteq\mathbb R^2$, $U:=\mathbb C^2$,
$r_0:=1/10$, $\Omega:=(1.1,1.9)^2$, $C^*:=[1.2,1.8]^2$ and strip width $s_0>0$ with
$0<\sigma_0\le\min(1,s_0/24)$. Then $Dh(I)=I$ is the identity, so the inverse
frequency map is $b(\nu)=\nu$, $K$ is the closed square of side $1$ and
$C^*+(B_{r_0}\cap\mathbb R^2)\subseteq K$; the Hessian is $D^2h=I_2$, so $M_2=2$. The perturbation
has complex sup-norm $|F|=\varepsilon\cosh(s_0)^2$ on the strip of width
$s_0$ if $F(I,\theta)=\varepsilon\cos\theta_1\cos\theta_2$ is evaluated
there.


## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the dimensionless Hamiltonian $H=\tfrac12(I_1^2+I_2^2)+\varepsilon\cos\theta_1\cos\theta_2$, the data $K,U,r_0,\Omega,C^*,s_0,\sigma_0$ of the example, and the physical data $E_0,\mathcal I,\lambda$.

[L1] The KAM theorem [[thm-positive-measure-analytic-kam-family]]: for its data there is $c>0$ such that for $\alpha<c$ and $\varepsilon\le c\alpha^2$ the Diophantine set $\Omega_{\alpha,\tau}$ in $C^*$ has positive measure and every $\nu\in\Omega_{\alpha,\tau}$ carries an invariant Lagrangian torus of $H$ with frequency $\nu$, with the closeness bounds of its clause 3.

[L2] The slab estimate [[lem-diophantine-resonance-slab-measure]]: for $n=2$, $\tau=2$ and the cube of half-width $R$ the resonant set has measure at most $2^{2}2^{1}4^{2}\,R\,\alpha\sum_{m\ge1}m^{-2}$, and $\sum_{m\ge1}m^{-2}\le2$ because $m^{-2}\le 1/(m(m-1))$ for $m\ge2$ and $\sum_{m\ge2}1/(m(m-1))=1$ telescopes ([[thm-geometric-series]]).

[L3] Trigonometric and exponential calculus: $\cos$ and $\sin$ are $2\pi$-periodic with $\cos'=-\sin$, $\sin'=\cos$, and the addition formula gives $|\cos(x+iy)|^2=\cos^2x\,\cosh^2y+\sin^2x\,\sinh^2y\le\cosh^2y$ for real $x,y$ ([[thm-sine-and-cosine-derivatives]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L4] Rescaling of an autonomous system: if $t=t_0\tau$ and $p=J_0I$ then $\frac{d}{d\tau}=\frac{dt}{d\tau}\frac{d}{dt}=t_0\frac{d}{dt}$ by the chain rule, and $q\mapsto q$ ([[thm-chain-rule-for-total-derivatives]], [[def-first-order-ode-initial-value-problem-and-solution]]).

[L5] Notation of the KAM framework: $B_r$, $S_s$, $O_h$, $D_{r,s,h}$, the label set $\Omega_{\alpha,\tau}$ and the sup-norms ([[def-holomorphic-kam-domain-and-diophantine-labels]], [[def-metric-ball]]).

## Proof

**Proof technique:** direct; write the dimensionless normalisation, check the data of the KAM theorem with explicit constants, estimate the Diophantine measure arithmetically, and translate the conclusion back to physical units.

1.1 *Data check.* For $h(I)=\tfrac12|I|^2$ one has $Dh(I)=I$, $D^2h=I_2$, so $b(\nu)=\nu$ on $\Omega'=\mathbb C^2$ and $|I^{\mathsf T}D^2h I|\le2|I|_\infty^2$, hence $M_2=2$ on $U=\mathbb C^2$, and $C^*+(B_{r_0}\cap\mathbb R^2)\subseteq(11/10,19/10)^2\subseteq K=[1,2]^2$; the perturbation $F(I,\theta)=\varepsilon\cos\theta_1\cos\theta_2$ is holomorphic and $2\pi$-periodic, is conjugation-symmetric because $\cos$ is real on the real axis, and by [L3] its sup-norm on the strip of width $s_0$ is at most $\varepsilon\cosh(s_0)^2$; hence the data of [L1] are met with perturbation size $\varepsilon\cosh(s_0)^2$. [given, L3, L5, algebra]

2.1 *Diophantine measure with explicit constants.* For $n=2$, $\tau=2$ and the square $C^*$ of side $3/5$ (half-width $R=3/10$), [L2] bounds the resonant set in $C^*$ by $2^{2}2^{1}4^{2}\cdot(3/10)\cdot2\,\alpha=8\cdot16\cdot(3/5)\,\alpha=(384/5)\alpha$, since $\sum_mm^{-2}\le2$; the square has measure $9/25$, so the Diophantine set in $C^*$ has measure at least $9/25-(384/5)\alpha>0$ whenever $\alpha<(9/25)\cdot(5/384)=3/640$. [step 1.1, L2, algebra]

3.1 *Conditional KAM conclusion.* By [L1] with the data of step 1.1 there is a constant $c>0$ (depending on $\sigma_0,s_0$ and the fixed square $C^*$ through the theorem) such that if $\alpha<\min(c,3/640)$ and $\varepsilon\cosh(s_0)^2\le c\alpha^2$, then the Diophantine set of step 2.1 has positive measure and each of its frequencies $\nu$ carries an invariant Lagrangian torus of $H$ with frequency $\nu$, with the closeness bounds of [L1]; in particular this is a positive-measure family, and the action and angle bounds of clause 3 show the perturbed tori remain close to the unperturbed tori $I=\nu$. [step 2.1, L1, algebra]

4.1 *Units restored.* Let the physical data $E_0,\mathcal I,\lambda$ be given and put $J_0=(\mathcal I E_0)^{1/2}$, $t_0=\mathcal I/J_0$; with $p=J_0I$, $t=t_0\tau$ and $\varepsilon=\lambda/E_0$ the equations $p_j'=-\partial_{q_j}H_{\mathrm{phys}}$, $q_j'=\partial_{p_j}H_{\mathrm{phys}}$ become the dimensionless Hamilton equations for $H$ (by [L4] and the identities $t_0J_0/\mathcal I=1$, $t_0\lambda/J_0=\lambda/E_0=\varepsilon$), and $H_{\mathrm{phys}}/E_0=H$; hence the conditional conclusion of step 3.1 holds whenever $\lambda\le E_0c\alpha^2/\cosh(s_0)^2$, and the torus with frequency $\nu$ then has linear parameter phase with frequencies $\nu_j/t_0=\nu_jJ_0/\mathcal I$; its physical angles are obtained from that phase by the torus embedding. [step 3.1, L4, algebra] ∎

## Remarks

- **What the example does and does not show.** It exhibits the standard two-rotor model, verifies the hypotheses of the measure theorem with explicit constants, and restores units. It produces no dynamical measurement, no numerical integration and no claim of physical applicability; the tightness or sharpness of the constants is not asserted.
- **The complex sup-norm.** The factor $\cosh(s_0)^2$ records that the theorem's hypotheses are sup-norms over the complex strip, not over the real torus; absorbing it into the threshold changes a constant and nothing else.
