---
id: cex-cm15-momentum-alone-does-not-fix-the-impact
kind: counterexample
title: "Reciprocal impulses do not determine a collinear impact: the same incoming data admit the sticking outcome $v^+=0$ and the elastic outcome $(v_1^+,v_2^+)=(-3,1)\\,\\mathrm{m\\,s^{-1}}$ with different impulses and energies"
status: published
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
physical_scope: "A refutation of the claim that the reciprocal impulse equations alone determine a collinear impact: with masses $2$ and $6\\,\\mathrm{kg}$ and incoming velocities $3$ and $-1\\,\\mathrm{m\\,s^{-1}}$, both the sticking outcome and the elastic outcome satisfy the equal-and-opposite momentum jumps with impulses $-6\\,\\mathrm{N\\,s}$ and $-12\\,\\mathrm{N\\,s}$ respectively and total momentum $0$, while velocities and kinetic-energy changes differ. Hence the contact law fixing the impulse (or the coefficient of restitution) is an independent model datum. The witness uses declared model data and asserts no measurement, no determination of any real coefficient and no observation."
sources:
  references:
    - title: "Jacob Moore and Contributors, Mechanics Map (Pennsylvania State University, 2nd ed.), Engineering LibreTexts, §11.5 'Particle Collisions in One Dimension': conservation of momentum as the first equation and an independent second relation (energy or restitution) as the second, the structure the witness exploits"
      url: "https://eng.libretexts.org/Bookshelves/Mechanical_Engineering/Mechanics_Map_(Moore_2nd_Edition)/11%3A_Impulse_and_Momentum_in_Particles/11.05%3A_Particle_Collisions_in_One_Dimension"
    - title: "J. Peraire and S. Widnall, 16.07 Dynamics (MIT OpenCourseWare, Fall 2008/2009), Lecture L14: the discrete mass-loss examples in which the final velocity depends on the adopted ejection rule, the finite version of the underdetermination recorded here"
      url: "https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/98d19cb2b9983c14c6907052499e7a98_MIT16_07F09_Lec14.pdf"
---

## Statement refuted

**False statement.** *In the collinear isolated-impact model of
[[post-cm15-impulse]] clause (i), the reciprocal impulse equations
$m_1(v_1^+-v_1^-)=J$ and $m_2(v_2^+-v_2^-)=-J$, with the impulse $J$
determined by momentum balance of the two labels, fix the post-impact
velocities for given incoming data; no additional contact law is needed.*

[[post-cm15-impulse]] clause (ii) adopts the restitution law as an
*independent* contact assumption, and [[pthm-cm15-impact-balance]] clause 5
records that the impulse equations leave the scalar impulse magnitude free.
The witness exhibits two admissible outcomes for one data set.

## Facts & Assumptions

**Given:** Fix a unit vector $n\in\mathbb R^3$. Take the two-label force model with time window $I_0=\mathbb R$, configuration domain $Q=(\mathbb R^3)^2$, and all external and pair force maps identically zero. Coincident positions are permitted because these forces have no singularity. Let $I=(-1\ \mathrm s,1\ \mathrm s)$ and $t_*=0$. The masses are $m_1=2\ \mathrm{kg}$, $m_2=6\ \mathrm{kg}$ and the incoming velocities are $v_1^-=3n\ \mathrm{m\,s^{-1}}$, $v_2^-=-1n\ \mathrm{m\,s^{-1}}$; the two candidate outcomes are those below.

[L1] Impulse equations ([[post-cm15-impulse]] clause (i), [[pthm-cm15-impact-balance]] clause 1): once a continuous, piecewise-$C^2$ position curve in $Q$ with the regular off-impact dynamics and the required one-sided velocities is supplied, its jump condition is $m_1(v_1^+-v_1^-)=J=-m_2(v_2^+-v_2^-)$. Existence of such a $J$ is equivalent to total-momentum equality for the endpoint velocities; it does not by itself establish the curve conditions. In the collinear case with $J=J_nn$ this endpoint equality is one scalar equation for two outgoing components.

[L2] Kinetic identity ([[thm-cm-center-of-mass-and-kinetic-splitting]], [[def-cm03-centre-of-mass-and-momenta]], [[def-euclidean-inner-product]]): with $V=\frac{m_1v_1+m_2v_2}{M}$ and $\mu=\frac{m_1m_2}{M}$, $K=\frac{M}{2}\lVert V\rVert_2^2+\frac{\mu}{2}\lVert v_2-v_1\rVert_2^2$; with momentum continuous, $V$ is the same on both sides and $\Delta K=\frac{\mu}{2}\bigl(\lVert v_2^+-v_1^+\rVert_2^2-\lVert v_2^--v_1^-\rVert_2^2\bigr)$.

## Counterexample

**Proof technique:** direct.

1.1 Common data: $M=8$, $\mu=\frac32$, $V=\frac{2\cdot3+6\cdot(-1)}{8}=0$, $d^-=-4n$, $\lVert d^-\rVert_2^2=16$, $K^-=12\ \mathrm{J}$. [given, L2, algebra]

1.2 For each candidate outgoing pair below, define $x_i(t)=t v_i^-$ for $t\le0$ and $x_i(t)=t v_i^+$ for $t>0$. Both position curves are continuous on $I$, affine and hence $C^2$ on either side of $0$, and take values in the declared full domain $Q$. They have precisely the specified one-sided velocities, and $m_ix_i''=0=F_i(t,x,x')$ away from $0$. Thus all trajectory conditions of the isolated reciprocal impulse model hold for both candidates; only the reciprocal jumps remain to check. Moreover $\langle v_2^--v_1^-,n\rangle=-4\ \mathrm{m\,s^{-1}}<0$, so the common incoming data approach along $n$. [given, L1, construct]

2.1 Outcome (a), sticking: $v_1^+=v_2^+=0$. Then $m_1(v_1^+-v_1^-)=2(0-3)n=-6n$ and $m_2(v_2^+-v_2^-)=6(0+1)n=+6n$; the impulse is $J=-6n\ \mathrm{N\,s}$ and the total momentum is $0=P^-$. [step 1.1, L1, algebra]

2.2 Outcome (b), elastic: $v_1^+=-3n$, $v_2^+=+1n$. Then $m_1(v_1^+-v_1^-)=2(-6)n=-12n$ and $m_2(v_2^+-v_2^-)=6(+2)n=+12n$; the impulse is $J=-12n\ \mathrm{N\,s}$ and the total momentum is $0=P^-$. [step 1.1, L1, algebra]

3.1 Together with the curves of step 1.2, steps 2.1 and 2.2 establish two complete runs of clause (i), with the same incoming data and different impulses ($-6n$ versus $-12n$) and outgoing velocities ($0$ versus $-3n$ and $+1n$). The first also satisfies restitution with $e=0$, and the second with $e=1$. Hence reciprocal impulse accounting alone does not fix the outgoing velocities, and the false statement fails. [step 1.2, step 2.1, step 2.2, L1, algebra]

4.1 Energy: by [L2] the changes are $\Delta K_{(a)}=\frac32\cdot\frac12(0-16)=-12\ \mathrm{J}$ and $\Delta K_{(b)}=\frac32\cdot\frac12(16-16)=0$; the outcomes are therefore also distinguished by their energy accounting, so no choice of impulse can be recovered from the momentum data and the two outcomes are genuinely different model histories. [step 3.1, L2, algebra]

5.1 Consequence: in the collinear isolated-impact model the contact law of [[post-cm15-impulse]] clause (ii) (equivalently, the coefficient $e$, or a dynamical contact model producing the impulse) is an independent model datum; the reciprocal impulse equations constrain only the *sum* $m_1\Delta v_1+m_2\Delta v_2=0$. The same conclusion is recorded as clause 5 of [[pthm-cm15-impact-balance]]. [given, L1] ∎

## Remarks

- **Consistency with the page's model.** The witness does not show that both outcomes occur in one physical contact; it shows that the momentum balance of the model is compatible with both, so an additional assumption is required to select one. The page selects the restitution family $0\le e\le1$, with $e$ left as model data.

- **Declared data.** All masses, velocities and impulses are declared model data; nothing here is measured or inferred from an experiment.
