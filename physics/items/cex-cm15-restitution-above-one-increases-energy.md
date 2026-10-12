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
  post-cm15-impulse: formulation-prerequisite
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
physical_scope: "A hypothetical extension of the adopted impact model, replacing only its restitution range by arbitrary real e; a refutation of the claim that every real coefficient of restitution is admissible in the adopted isolated-impact model: with the collinear restitution law and $e=2$ on declared data, the kinetic energy rises by $3\\,\\mathrm{J}$ across an impact while the configuration is instantaneously unchanged, so the total mechanical energy of a conservative two-label model is not conserved; values $e>1$ therefore signal an omitted internal energy reservoir and are excluded from the conservative contact model of this page, which restricts $e$ to $[0,1]$. The witness uses declared model data and asserts no measurement."
sources:
  references:
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State University, 2nd ed.), Engineering LibreTexts, §11.4: the coefficient of restitution between 0 and 1, with the remark that values above 1 would describe a superelastic collision in which additional stored energy is released"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.04%3A_Surface_Collisions_and_the_Coefficient_of_Restitution"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), §6.5, Eqs. (368)-(396): the elastic two-body collision with kinetic energy preserved, the conservative case against which the superelastic witness is contrasted"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node52.html"
---

## Statement refuted

**False statement.** If the collinear reciprocal-impulse equations of
[[post-cm15-impulse]] clause (i) are retained but its clause (ii) is
**hypothetically extended** to allow every real restitution coefficient $e$,
then momentum conservation and $v_2^+-v_1^+=-e(v_2^--v_1^-)$ guarantee
conservation of total mechanical energy across the impact in a static
central-potential model.

The adopted postulate restricts $e$ to $[0,1]$, as do the restitution and
energy clauses of [[pthm-cm15-impact-balance]] and
[[thm-cm-impulse-restitution-and-energy-loss]]. Those clauses are not
applied at $e=2$ here. The extension is a separate hypothetical law, and the
post-impact velocities and energy difference below are derived locally from
its equations. Only the elastic case $e=1$ guarantees kinetic-energy
conservation for nonzero relative velocity within the adopted range.

## Facts & Assumptions

**Given:** A unit vector $n\in\mathbb R^3$; two labels with declared masses
$m_1=m_2=1\,\mathrm{kg}$; incoming velocities
$v_1^-=n\,\mathrm{m\,s^{-1}}$, $v_2^-=-n\,\mathrm{m\,s^{-1}}$;
the hypothetical momentum and restitution equations
$m_1v_1^++m_2v_2^+=m_1v_1^-+m_2v_2^-$ and
$v_2^+-v_1^+=-e(v_2^--v_1^-)$ with $e=2$; and continuous positions
across the contact. Take a static central pair potential $u\equiv0$, so
$U(x)=u(|x_1-x_2|)=0$ and free motions away from the impact have constant
mechanical energy. This is declared model data, not a measured collision.

[L1] For positive masses and $M=m_1+m_2$, $\mu=m_1m_2/M$, the two-body kinetic identity is $m_1|v_1|^2+m_2|v_2|^2=M|V|^2+\mu|v_2-v_1|^2$ with $V=(m_1v_1+m_2v_2)/M$. This is an algebraic identity for all real vectors, independent of any restitution range. ([[thm-cm-center-of-mass-and-kinetic-splitting]], [[def-euclidean-inner-product]], [[def-cm03-centre-of-mass-and-momenta]])

[L2] A static central pair model permits the declared smooth potential $u\equiv0$; the units of velocity and energy are metres per second and joules, respectively. ([[post-cm05-central-model]], [[def-cm01-units]], [[def-interval]])

## Counterexample

**Proof technique:** direct.

1.1 In numerical SI coordinates, $M=2$, $\mu=1/2$, $V=0$, $d^-:=v_2^--v_1^-=-2n$, and $|d^-|^2=4$, since $|n|=1$. The incoming kinetic energy is $K^-=(|n|^2+|-n|^2)/2=1\,\mathrm J$. [given, L1, algebra]

2.1 For any real $e$, put $d^+=-ed^-$. The momentum equation gives $m_1v_1^++m_2v_2^+=MV$ and the restitution equation gives $v_2^+=v_1^++d^+$. Substitution yields $Mv_1^++m_2d^+=MV$, hence $v_1^+=V+(m_2/M)ed^-$ and $v_2^+=V-(m_1/M)ed^-$. These vectors satisfy both equations, so they are the unique outcome of the hypothetical law. At $e=2$ they are $v_1^+=-2n$ and $v_2^+=2n$ in metres per second; their total momentum is zero, and $J=m_1(v_1^+-v_1^-)=-3n=-m_2(v_2^+-v_2^-)$ in kilogram metres per second. [given, step 1.1, algebra]

3.1 Directly $K^+=(4|n|^2+4|n|^2)/2=4\,\mathrm J$, so $\Delta K=3\,\mathrm J$. More generally, [L1] for the incoming and outgoing pairs and the equations of step 2.1 give $\Delta K=\mu(|d^+|^2-|d^-|^2)/2=\mu(e^2-1)|d^-|^2/2$ for every real $e$: the common center-of-mass term cancels and $|ed^-|^2=e^2|d^-|^2$ by the Euclidean coordinate formula. This is a local derivation, not an application of a restricted impact theorem outside its hypotheses. [step 1.1, step 2.1, L1, algebra]

4.1 The declared potential is identically zero, hence unchanged across the continuous configuration. Consequently $\Delta(K+U)=3\,\mathrm J>0$, which refutes the universal across-impact conservation assertion. To realize the endpoint data by free paths, in numerical metres and seconds take $t_*=0$, $I=(-1/4,1/4)$, $x_1(t)=tn$ for $t<0$ and $x_1(t)=-2tn$ for $t\ge0$, and $x_2(t)=(1-t)n$ for $t<0$ and $x_2(t)=(1+2t)n$ for $t\ge0$. Both positions are continuous, their derivatives are the stated velocities, their accelerations vanish off zero, and the separation is $1-2t>0$ before zero and $1+4t>0$ after zero. Thus the zero-potential free dynamics away from the impulse are consistent with the hypothetical endpoint law on a collision-excluded domain. [given, step 2.1, step 3.1, L2, algebra]

5.1 For the adopted range $0\le e\le1$, the locally derived formula in step 3.1 is nonpositive and vanishes precisely when $e=1$ or $d^-=0$. At $e=2$, it is strictly positive for the nonzero incoming relative velocity of step 1.1. Therefore allowing every real $e$ does not give a conservative contact law for the two-label mechanical-energy account; it requires an additional energy input if conservation of an enlarged account is imposed. The example asserts no empirical energy reservoir or measured restitution coefficient. [step 1.1, step 3.1, step 4.1, algebra] ∎

## Remarks

The hypothetical extension preserves the reciprocal momentum account but
changes the adopted restitution range. Its energy gain comes from an
explicit local computation. It does not claim that the adopted postulate
admits $e>1$, or apply its restricted theorems at such values.
