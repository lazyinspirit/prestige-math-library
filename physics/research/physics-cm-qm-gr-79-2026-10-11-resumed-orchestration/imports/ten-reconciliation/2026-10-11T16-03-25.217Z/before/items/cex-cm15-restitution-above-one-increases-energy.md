---
id: cex-cm15-restitution-above-one-increases-energy
kind: counterexample
title: "A coefficient of restitution above $1$ manufactures kinetic energy: $e=2$ on $m_1=m_2=1\\,\\mathrm{kg}$ with velocities $\\pm1\\,\\mathrm{m\\,s^{-1}}$ raises the kinetic energy by $3\\,\\mathrm{J}$ while the configuration is unchanged"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [post-cm15-impulse,
       pthm-cm15-impact-balance,
       thm-cm-impulse-restitution-and-energy-loss,
       thm-cm-center-of-mass-and-kinetic-splitting,
       post-cm05-central-model,
       def-cm01-units,
       def-interval,
       def-euclidean-inner-product,
       def-cm03-centre-of-mass-and-momenta]
dependency_roles:
  post-cm15-impulse: physical-assumption
  pthm-cm15-impact-balance: physical-result
  thm-cm-impulse-restitution-and-energy-loss: mathematical-premise
  thm-cm-center-of-mass-and-kinetic-splitting: mathematical-premise
  post-cm05-central-model: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation of the claim that every real coefficient of restitution is admissible in the adopted isolated-impact model: with the collinear restitution law and $e=2$ on declared data, the kinetic energy rises by $3\\,\\mathrm{J}$ across an impact while the configuration is instantaneously unchanged, so the total mechanical energy of a conservative two-label model is not conserved; values $e>1$ therefore signal an omitted internal energy reservoir and are excluded from the conservative contact model of this page, which restricts $e$ to $[0,1]$. The witness uses declared model data and asserts no measurement."
sources:
  references:
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State University, 2nd ed.), Engineering LibreTexts, §11.4: the coefficient of restitution between 0 and 1, with the remark that values above 1 would describe a superelastic collision in which additional stored energy is released"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.04%3A_Surface_Collisions_and_the_Coefficient_of_Restitution"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.5, Eqs. (368)-(396): the elastic two-body collision with kinetic energy preserved, the conservative case against which the superelastic witness is contrasted"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node52.html"
---

## Statement refuted

**False statement.** *In the collinear isolated-impact model of
[[post-cm15-impulse]] clauses (i)-(ii) for two fixed masses, launched
through a static central pair potential (so that away from the impact the
total mechanical energy $K+U$ with $U(x)=u(\lvert x_1-x_2\rvert)$ is
constant along the motion), every real value of the coefficient of
restitution $e$ yields a contact law under which the total mechanical energy
is conserved across the isolated impact.*

[[post-cm15-impulse]] clause (ii) restricts $e$ to $[0,1]$, and
[[pthm-cm15-impact-balance]] clause 4 computes the energy change of the
restricted law. The witness below shows that the restriction is not
decorative: an admissible-looking contact law with $e>1$ is incompatible
with the energy account, because the impact instantaneously changes only the
velocities while the positions — hence the potential energy — are
continuous.

## Facts & Assumptions

**Given:** The collinear isolated-impact model with two labels, masses $m_1=m_2=1\ \mathrm{kg}$, incoming velocities $v_1^-=+1\,n\ \mathrm{m\,s^{-1}}$, $v_2^-=-1\,n\ \mathrm{m\,s^{-1}}$ along the contact direction, and the restitution law with $e=2$; the potential energy $U(x)=u(\lvert x_1-x_2\rvert)$ of a static central pair potential, continuous on the collision-excluded domain and therefore continuous in time across the impact.

[L1] Impact algebra ([[pthm-cm15-impact-balance]] clauses 1, 3, 4, [[thm-cm-impulse-restitution-and-energy-loss]] clauses a-c, [[thm-cm-center-of-mass-and-kinetic-splitting]], [[def-cm03-centre-of-mass-and-momenta]], [[def-euclidean-inner-product]]): the post-impact velocities are $v_1^+=V+\frac{m_2}{M}e\,d^-$, $v_2^+=V-\frac{m_1}{M}e\,d^-$ with $V=\frac{m_1v_1^-+m_2v_2^-}{M}$, $d^-=v_2^--v_1^-$; the total momentum is continuous across the impact; and $\Delta K=-\frac{1-e^2}{2}\mu\lVert d^-\rVert_2^2$.

[L2] Configurational continuity ([[post-cm05-central-model]] clause (i), [[def-cm01-units]], [[def-interval]]): the impact is instantaneous and the positions are continuous, so $\lvert x_1-x_2\rvert$ and hence $U=u(\lvert x_1-x_2\rvert)$ are unchanged across the impact; the masses and $u$ are model data.

## Counterexample

**Proof technique:** direct.

1.1 Data: $M=2$, $\mu=\frac12$, $V=\frac{1\cdot1+1\cdot(-1)}{2}=0$, $d^-=-2n$, so $\lVert d^-\rVert_2^2=4$ and the incoming kinetic energy is $K^-=\frac12(1)+\frac12(1)=1\ \mathrm{J}$. [given, L1, algebra]

2.1 Impact outcome: the restitution law gives $v_2^+-v_1^+=-2\,d^-=+4n$, and [L1] gives $v_1^+=V+\frac{m_2}{M}e\,d^-=0+\frac12\cdot2\cdot(-2)n=-2n$, $v_2^+=V-\frac{m_1}{M}e\,d^-=+2n$. The total momentum is $(-2)+(+2)=0$, continuous across the impact, so the momentum account of the model is satisfied. [step 1.1, L1, algebra]

3.1 Energy: the post-impact kinetic energy is $K^+=\frac12(4)+\frac12(4)=4\ \mathrm{J}$, so $\Delta K=+3\ \mathrm{J}$, in agreement with the formula $\Delta K=-\frac{1-e^2}{2}\mu\lVert d^-\rVert_2^2=-\frac{1-4}{2}\cdot\frac12\cdot4=+3\ \mathrm{J}$. [step 2.1, L1, algebra]

4.1 Potential energy: by [L2] the configuration, hence $U$, is unchanged across the instant of the impact: $U(t_*^+)=U(t_*^-)$. Therefore the total mechanical energy jumps by $\Delta(K+U)=\Delta K=+3\ \mathrm{J}>0$ across the impact. [step 3.1, L2, algebra]

5.1 Failure of the false statement: along a motion that is conservative away from the impact (constant $K+U$ on each of $I\cap(-\infty,t_*)$ and $I\cap(t_*,+\infty)$), the total mechanical energy cannot increase across the impact; the witness with $e=2$ and $d^-\ne0$ does increase it, so the asserted universal admissibility of real $e$ fails. Equivalently, a rule with $e>1$ requires an internal energy reservoir that is released during the contact (as the cited engineering source describes for superelastic collisions): the two-label mechanical account is then incomplete, and such a rule is not a conservative contact law of the restricted model. [step 4.1, given, L1, L2]

6.1 Restriction: for $0\le e\le1$ the same formula gives $\Delta K=-\frac{1-e^2}{2}\mu\lVert d^-\rVert_2^2\le0$, with equality exactly at $e=1$ (or $d^-=0$); hence within the page's model the conservative case is $e=1$ and the dissipative contact laws are $0\le e<1$, exactly the restriction adopted in [[post-cm15-impulse]] clause (ii). [given, L1, algebra] ∎

## Remarks

- **What the witness isolates.** The obstruction is not the momentum account — the exhibited outcome conserves total momentum — but the energy account: an instantaneous contact leaves the configuration, hence $U$, unchanged, so any kinetic-energy gain is a total-energy gain. The same computation shows that the page's model cannot represent superelastic contacts without extending the model by an internal-energy term.

- **Model data.** The masses, velocities and $e=2$ are declared model data; the computation is a finite check inside the model, not a measurement of any pair of bodies. Empirically reported coefficients near or above unity for engineered structures concern apparatus-specific energy storage and require a separate model and experiment item.
