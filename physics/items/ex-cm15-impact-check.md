---
id: ex-cm15-impact-check
kind: example
title: "A declared-data impact check: $m_1=2\\,\\mathrm{kg}$, $m_2=6\\,\\mathrm{kg}$, $v_1^-=3\\,\\mathrm{m\\,s^{-1}}$, $v_2^-=-1\\,\\mathrm{m\\,s^{-1}}$, with elastic, semi-elastic and sticking outcomes"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [post-cm15-impulse,
       pthm-cm15-impact-balance,
       thm-cm-impulse-restitution-and-energy-loss,
       thm-cm-center-of-mass-and-kinetic-splitting,
       def-cm01-units,
       def-interval,
       def-euclidean-inner-product,
       def-cm03-centre-of-mass-and-momenta]
dependency_roles:
  post-cm15-impulse: physical-assumption
  pthm-cm15-impact-balance: physical-result
  thm-cm-impulse-restitution-and-energy-loss: mathematical-premise
  thm-cm-center-of-mass-and-kinetic-splitting: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-data check of the adopted collinear impact model: masses $2$ and $6\\,\\mathrm{kg}$ with one-dimensional velocities $3$ and $-1\\,\\mathrm{m\\,s^{-1}}$ along the contact direction, for coefficients of restitution $e=1,\\frac12,0$; the example verifies total momentum continuity, the impulse $J=-9\\,\\mathrm{N\\,s}$ at $e=\\frac12$, the post-impact velocities, and the kinetic-energy changes $0,-9,-12\\,\\mathrm{J}$, all in SI units. Every number is declared model data substituted into the model formulas; the example reports no measurement and no empirical comparison."
sources:
  references:
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State University, 2nd ed.), Engineering LibreTexts, §§11.3-11.5: the impulse-momentum principle, momentum conservation and the coefficient-of-restitution treatment of one-dimensional particle collisions"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.05%3A_Particle_Collisions_in_One_Dimension"
    - title: "Richard Fitzpatrick, Newtonian Dynamics (University of Texas at Austin), 'Non-Isolated Systems', Eqs. (38)-(44): the momentum and external-force accounting that the impulse model extends to an isolated contact"
      url: "https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node12.html"
---

## Example

**Declared model data.** Adopt a collinear impact of two labels of the
contact model of [[post-cm15-impulse]] clauses (i)-(ii) along the contact
direction $n$, with masses and incoming velocities
$$m_1=2\ \mathrm{kg},\qquad m_2=6\ \mathrm{kg},\qquad v_1^-=3\,n\ \mathrm{m\,s^{-1}},\qquad v_2^-=-1\,n\ \mathrm{m\,s^{-1}} .$$
Thus $M=8\ \mathrm{kg}$, $\mu=\frac{2\cdot6}{8}=\frac32\ \mathrm{kg}$,
$V=\frac{2\cdot3+6\cdot(-1)}{8}=0$, and the relative velocity is
$d^-:=v_2^--v_1^-=-4\,n\ \mathrm{m\,s^{-1}}$.

**Assertions to check.** For $e=1$ (elastic): $v_1^+=-3n$,
$v_2^+=+1n$, $\Delta K=0$. For $e=\frac12$: $v_1^+=-\frac32n$,
$v_2^+=+\frac12n$, impulse $J=-9n\ \mathrm{N\,s}$,
$\Delta K=-9\ \mathrm{J}$. For $e=0$ (sticking): $v_1^+=v_2^+=0$,
$\Delta K=-12\ \mathrm{J}$. In every case the total momentum $P=0$ is
continuous across the impact, as [[pthm-cm15-impact-balance]] clause 1
requires, and the energy changes are those of its clause 4.

## Facts & Assumptions

**Given:** The declared masses, incoming velocities and contact direction; the collinear impact model of [[post-cm15-impulse]] with coefficients $e\in\{0,\frac12,1\}$; the vocabulary and units of [[def-cm01-units]] and [[def-cm03-centre-of-mass-and-momenta]].

[L1] Impact consequences ([[pthm-cm15-impact-balance]] clauses 1, 3, 4, [[thm-cm-impulse-restitution-and-energy-loss]] clauses a-c): in the collinear model, $m_1(v_1^+-v_1^-)=J=-m_2(v_2^+-v_2^-)$ with total momentum continuous across the impact; $v_1^+=V+\frac{m_2}{M}e\,d^-$, $v_2^+=V-\frac{m_1}{M}e\,d^-$; and $\Delta K=-\frac{1-e^2}{2}\mu\lVert d^-\rVert_2^2$.

[L2] Kinetic split ([[thm-cm-center-of-mass-and-kinetic-splitting]], [[def-euclidean-inner-product]]): $K^\pm=\frac{M}{2}\lVert V\rVert_2^2+\frac{\mu}{2}\lVert d^\pm\rVert_2^2$ on the respective sides of impact, where $d^\pm=v_2^\pm-v_1^\pm$, with $V$ unchanged across the impact.

## Verification

**Proof technique:** direct.

1.1 Common data: $M=8$, $\mu=\frac32$, $V=0$ and $d^-=-4n$, so $\lVert d^-\rVert_2^2=16$ and $\frac{\mu}{2}\lVert d^-\rVert_2^2=12\ \mathrm{J}$; the initial kinetic energy is $\frac12\cdot2\cdot9+\frac12\cdot6\cdot1=9+3=12\ \mathrm{J}$; the incoming relative speed is $4\ \mathrm{m\,s^{-1}}$. [given, L1, L2, algebra]

2.1 Elastic case $e=1$: [L1] gives $v_1^+=V+\frac{m_2}{M}d^-=\frac68(-4)n=-3n$ and $v_2^+=V-\frac{m_1}{M}d^-=-\frac28(-4)n=+1n$, so each velocity is reversed and the total momentum is $2(-3)+6(1)=0=P^-$; $\Delta K=-\frac{1-1}{2}\mu\lVert d^-\rVert_2^2=0$, and directly $K^+=\frac12\cdot2\cdot9+\frac12\cdot6\cdot1=12\ \mathrm{J}=K^-$. [step 1.1, L1, L2, algebra]

2.2 Semi-elastic case $e=\frac12$: $v_1^+=\frac68\cdot\frac12\cdot(-4)n=-\frac32n$, $v_2^+=-\frac28\cdot\frac12\cdot(-4)n=+\frac12n$; the impulse is $J=m_1(v_1^+-v_1^-)=2(-\frac32-3)n=-9n\ \mathrm{N\,s}$, and indeed $m_2(v_2^+-v_2^-)=6(\frac12+1)n=9n=-J$; the total momentum is $2(-\frac32)+6(\frac12)=0=P^-$; $\Delta K=-\frac{1-\frac14}{2}\cdot\frac32\cdot16=-\frac{3}{4}\cdot12=-9\ \mathrm{J}$, and directly $K^+=\frac12\cdot2\cdot\frac94+\frac12\cdot6\cdot\frac14=\frac94+\frac34=3\ \mathrm{J}=12-9$. [step 1.1, L1, L2, algebra]

2.3 Sticking case $e=0$: $v_1^+=v_2^+=V=0$; the total momentum is $0=P^-$; $\Delta K=-\frac12\cdot\frac32\cdot16=-12\ \mathrm{J}$, so $K^+=0$; the impulse is $J=2(0-3)n=-6n\ \mathrm{N\,s}$, consistent with $m_2(0+1)n=6n=-J$. [step 1.1, L1, L2, algebra]

3.1 Reading: all three outcomes satisfy the reciprocal impulse equations with different impulses and different energy changes; the momentum data alone ($P=0$) are compatible with all of them, illustrating clause 5 of [[pthm-cm15-impact-balance]]: the coefficient $e$ is model data and must be supplied by the contact law. Every number above is a declared model datum substituted into the model formulas; no measurement, uncertainty or empirical inference is involved. [step 2.1, step 2.2, step 2.3, given, L1] ∎

## Remarks

- **Units.** $[P]=\mathrm{kg\,m\,s^{-1}}=\mu\ell\tau^{-1}$, $[J]=\mathrm{N\,s}=\mu\ell\tau^{-1}$, $[K]=\mathrm{J}=\mu\ell^2\tau^{-2}$ ([[def-cm01-units]]); the impulse values displayed are the model's impulse vector components along $n$.

- **Frame reading.** The one-sided centre-of-mass velocities at the impact are both zero. Thus the centre-of-mass kinetic energy is zero on both sides of that instant: the elastic case reverses the relative velocity, and the inelastic cases decrease its kinetic energy only. The supplied data do not imply rest at other times; external forces can accelerate the centre of mass away from the impact.
