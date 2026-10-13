---
id: ex-cm05-gravitational-ellipse-and-period-check
kind: example
title: "An elliptic gravitational relative orbit checked on declared model data: $p=10^{6}\\,$m, $e=3/5$, $a=25\\cdot10^{6}/16\\,$m, $b=5\\cdot10^{6}/4\\,$m, $E=-3.2\\cdot10^{17}\\,$J and $T=125\\pi\\cdot10^{9}/32\\,$s, with $T^{2}=4\\pi^{2}a^{3}/(G_{\\mathrm N}M)$"
status: published
origin: session
domain: physics
dependency_level: 18
deps: [post-cm05-central-model, post-cm05-gravity, pthm-cm05-relative-reduction, pthm-cm05-plane-area, pthm-cm05-conic, pthm-cm05-kepler-period, def-cm-central-force-trajectory, def-cm01-units, def-interval, def-countable-choice]
dependency_roles:
  post-cm05-central-model: formulation-prerequisite
  post-cm05-gravity: formulation-prerequisite
  pthm-cm05-relative-reduction: physical-result
  pthm-cm05-plane-area: physical-result
  pthm-cm05-conic: physical-result
  pthm-cm05-kepler-period: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A numerical consistency check of the elliptic-branch formulas of the adopted gravitational two-label model on declared model data: the conic parameter, semiaxes, energy, period by two routes, the third-law form $T^2=4\\pi^2a^3/(G_{\\mathrm N}M)$ under the declared mass identification, the areal rate and the barycentric semiaxes. Every number is a declared model datum or an exact consequence of the cited items; the example asserts no observation, no measurement and no applicability of the model to any real system."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.59)-(3.64b): the elliptic conic, its semiaxes and the period, checked here on declared decimal data"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 32-33 (PDF pp. 38-39): the elliptic branch of the gravitational two-body problem, the reduced mass and the energy classification"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Example

Declare the gravitational two-label model of [[post-cm05-gravity]] clause (i)
with time window $I_0=\mathbb R$ and the following **model data** (decimal numbers declared for this
computation; $G_{\mathrm N}=2.5\times10^{-25}\ \mathrm{m^{3}\,kg^{-1}\,s^{-2}}$
is a declared datum of the example, **not** the measured value of clause
(iii), and the couplings are identified with the inertial masses as in clause
(ii)):
$$m_1=m_2=2\times10^{24}\ \mathrm{kg},\qquad M=4\times10^{24}\ \mathrm{kg},\qquad \mu=\frac{m_1m_2}{M}=10^{24}\ \mathrm{kg},\qquad \kappa=G_{\mathrm N}m_1m_2=10^{24}\ \mathrm{kg\,m^{3}\,s^{-2}}.$$
Suppose a motion $x$ of this model has a relative orbit with angular momentum
magnitude $J=10^{27}\ \mathrm{kg\,m^{2}\,s^{-1}}$, conic parameter
$$p=\frac{J^{2}}{\mu\kappa}=10^{6}\ \mathrm{m},$$
and eccentricity $e=\tfrac35$ (the conic data of
[[pthm-cm05-conic]] clause 1). Assume the Axiom of Countable Choice
([[def-countable-choice]]), as in the cited conic and period items. Then the
cited items predict, as exact consequences of these data:

1. the energy $E=\dfrac{\mu\kappa^{2}}{2J^{2}}\bigl(e^{2}-1\bigr)=-\dfrac{8}{25}\times10^{18}\ \mathrm J=-3.2\times10^{17}\ \mathrm J$, and $E<0$ with $e<1$, consistent with the elliptic branch;
2. the semiaxes $a=\dfrac{p}{1-e^{2}}=\dfrac{25}{16}\times10^{6}\ \mathrm m$ and $b=a\sqrt{1-e^{2}}=\dfrac54\times10^{6}\ \mathrm m$, with $a=-\kappa/(2E)$;
3. the relative period $T=2\pi\sqrt{\dfrac{\mu a^{3}}{\kappa}}=2\pi\dfrac{\mu ab}{J}=\dfrac{125\pi}{32}\times10^{9}\ \mathrm s$, so $T^{2}=\dfrac{4\pi^{2}\mu a^{3}}{\kappa}$;
4. the third-law form $T^{2}=\dfrac{4\pi^{2}a^{3}}{G_{\mathrm N}M}$ of [[pthm-cm05-kepler-period]] clause 2 under the declared identification;
5. the areal rate $J/(2\mu)=500\ \mathrm{m^{2}\,s^{-1}}$ and the identity $\pi ab/T=J/(2\mu)$;
6. both labels trace ellipses with the centre of mass at a focus, the same eccentricity $e$, and semimajor axes $a_1=a_2=\tfrac12a=\dfrac{25}{32}\times10^{6}\ \mathrm m$ (equal masses), each periodic about the centre of mass with period $T$.

## Facts & Assumptions

**Given:** The declared model data $m_1=m_2=2\times10^{24}$, $M=4\times10^{24}$, $\mu=10^{24}$, $G_{\mathrm N}=2.5\times10^{-25}$, $\kappa=10^{24}$, $J=10^{27}$, $p=10^{6}$ and $e=\frac35$. Bare numbers in the arithmetic below are numerical values in the SI units declared in the Example; explicitly unit-bearing equalities are equalities of quantities.

[A1] The Axiom of Countable Choice is assumed ([[def-countable-choice]]).

[L1] Model and conic data ([[post-cm05-gravity]] clauses (i)-(ii), [[post-cm05-central-model]] clauses (i)-(ii), [[pthm-cm05-conic]] clauses 1 and 3, [[def-cm-central-force-trajectory]]): with the identification $m_i^{g}=m_i$, $\kappa=G_{\mathrm N}m_1m_2$, $\mu=m_1m_2/M$; for a motion with the stated conic data, $E=(\mu\kappa^{2}/2J^{2})(e^{2}-1)$, $a=p/(1-e^{2})=-\kappa/(2E)$, $b=a\sqrt{1-e^{2}}$, and each label's orbit about the centre of mass is the scaled conic with parameters $p_i=\frac{m_j}{M}p$ and $a_i=\frac{m_j}{M}a$ and the same eccentricity.

[L2] Period and third law ([[pthm-cm05-kepler-period]] clauses 1-2, [[pthm-cm05-plane-area]] clauses 2-3): $T=2\pi\mu ab/J=2\pi\sqrt{\mu/\kappa}\,a^{3/2}$, $T^{2}=4\pi^{2}\mu a^{3}/\kappa$, and with the identification $T^{2}=4\pi^{2}a^{3}/(G_{\mathrm N}M)$; the areal rate is $J/(2\mu)$.

[L3] Arithmetic: decimal multiplication and powers; $\bigl(\tfrac{25}{16}\bigr)^{3}=\tfrac{15625}{4096}$, $\bigl(\tfrac54\bigr)^{2}=\tfrac{25}{16}$, $\sqrt{1-\tfrac{9}{25}}=\tfrac45$, $\tfrac{25}{16}\cdot\tfrac54=\tfrac{125}{64}$ and $\tfrac{125}{64}\cdot\tfrac{32}{125}=\tfrac12$; exact fractions are used throughout ([[def-interval]] for the real-arithmetic conventions, [[def-cm01-units]] for the SI reading of the dimensions).

## Verification

**Proof technique:** direct.

1.1 Energy: the coefficient is $\mu\kappa^{2}/(2J^{2})=\frac{(10^{24})(10^{48})}{2\times10^{54}}\ \mathrm J=\tfrac12\times10^{18}\ \mathrm J$; $e^{2}-1=\tfrac{9}{25}-1=-\tfrac{16}{25}$, so $E=-\tfrac{8}{25}\times10^{18}\ \mathrm J=-3.2\times10^{17}\ \mathrm J$, and $e<1$ corresponds to $E<0$ as [[pthm-cm05-conic]] clause 1 states. [given, A1, L1, L3, algebra]

2.1 Semiaxes: $1-e^{2}=\tfrac{16}{25}$, so $a=p/(1-e^{2})=10^{6}\cdot\tfrac{25}{16}=\tfrac{25}{16}\times10^{6}$ m and $b=a\sqrt{1-e^{2}}=\tfrac{25}{16}\times10^{6}\cdot\tfrac45=\tfrac54\times10^{6}$ m; and $-\kappa/(2E)=-\tfrac{10^{24}}{-\tfrac{16}{25}\times10^{18}}=\tfrac{25}{16}\times10^{6}$ m, so $a=-\kappa/(2E)$ holds. [step 1.1, L1, L3, algebra]

3.1 Period: $a^{3}=\left(\tfrac{25}{16}\right)^{3}\times10^{18}\ \mathrm{m^{3}}=\tfrac{15625}{4096}\times10^{18}\ \mathrm{m^{3}}$, while $\mu/\kappa=1\ \mathrm{s^{2}\,m^{-3}}$, hence $\mu a^{3}/\kappa=\tfrac{15625}{4096}\times10^{18}\ \mathrm{s^{2}}$. Thus $T=2\pi\sqrt{\mu a^{3}/\kappa}=2\pi\tfrac{125}{64}\times10^{9}\ \mathrm s=\tfrac{125\pi}{32}\times10^{9}\ \mathrm s$. The second route gives $\mu ab/J=\frac{10^{24}\cdot(25/16)10^{6}\cdot(5/4)10^{6}}{10^{27}}\ \mathrm s=\tfrac{125}{64}\times10^{9}\ \mathrm s$, so $T=2\pi\mu ab/J$ and $T^{2}=\tfrac{15625}{1024}\pi^{2}\times10^{18}\ \mathrm{s^{2}}=4\pi^{2}\mu a^{3}/\kappa$. [step 2.1, L2, L3, algebra]

4.1 Third law with the declared identification: $G_{\mathrm N}M=\bigl(\tfrac52\times10^{-25}\ \mathrm{m^{3}\,kg^{-1}\,s^{-2}}\bigr)\bigl(4\times10^{24}\ \mathrm{kg}\bigr)=1\ \mathrm{m^{3}\,s^{-2}}$. Therefore $\frac{4\pi^{2}a^{3}}{G_{\mathrm N}M}=\frac{4\pi^{2}(15625/4096)10^{18}\ \mathrm{m^{3}}}{1\ \mathrm{m^{3}\,s^{-2}}}=\tfrac{15625}{1024}\pi^{2}\times10^{18}\ \mathrm{s^{2}}$, equal to $T^{2}$ from step 3.1. [step 3.1, L2, L3, algebra]

4.2 Areal rate: $J/(2\mu)=\tfrac{10^{27}}{2\times10^{24}}=500\ \mathrm{m^{2}\,s^{-1}}$, and $\dfrac{\pi ab}{T}=\dfrac{\pi\cdot\tfrac{25}{16}\times10^{6}\cdot\tfrac54\times10^{6}}{\tfrac{125\pi}{32}\times10^{9}}=\dfrac{125}{64}\cdot\dfrac{32}{125}\cdot10^{3}=500\ \mathrm{m^{2}\,s^{-1}}$, so $\pi ab/T=J/(2\mu)$. [step 3.1, L2, L3, algebra]

5.1 Barycentric orbits: by [L1] each label's conic has parameter $p_i=\tfrac12 p=5\times10^{5}$ m, eccentricity $e=\tfrac35$ and semimajor axis $a_i=\tfrac12a=\tfrac{25}{32}\times10^{6}$ m; the periods about the centre of mass are $T$ by [[pthm-cm05-kepler-period]] clause 3, and with equal masses both semiaxes are equal. [step 2.1, step 3.1, L1, L2, algebra] ∎

## Remarks

- **Conditional on the existence of the motion.** The check verifies the numerical consequences of the cited items for any motion with these conic data; it does not construct the motion, and the existence of the elliptic branch is not part of the computation.

- **Declared data only.** The numbers $m_1,m_2,J,p,e$ and the declared $G_{\mathrm N}$ are model data chosen for exact arithmetic; no measured constant is used, and no real system is modelled.
