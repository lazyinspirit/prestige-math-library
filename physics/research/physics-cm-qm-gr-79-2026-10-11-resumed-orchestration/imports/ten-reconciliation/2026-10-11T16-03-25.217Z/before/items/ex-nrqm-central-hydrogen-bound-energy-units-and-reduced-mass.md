---
id: ex-nrqm-central-hydrogen-bound-energy-units-and-reduced-mass
aliases: [nrqm-central-hydrogen-bound-energy-units-and-reduced-mass]
kind: example
domain: physics
title: "Bound-energy parametrisations of the Coulomb model: exact identities, units and the reduced-mass factor"
status: draft
origin: session
dependency_level: 17
deps: [def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum, def-nrqm-framework-quantities-and-units, pthm-nrqm-kinematics-spin-s-outcome-laws, post-nrqm-framework-preparation-and-apparatus, thm-nrqm-coulomb-ground-radial-probability-and-units, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum: physical-result
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  thm-nrqm-coulomb-ground-radial-probability-and-units: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "An exact algebraic and dimensional verification in the declared one-centre and two-body Coulomb models: the equivalence of the bound-energy parametrisations in terms of (m, kappa), (hbar, m, a_kappa), (m, alpha, c) and the fixed-nucleus reference, the reduced-mass factor mu/m_1 = 1/(1+m_1/m_2), the identification of the continuum threshold of the two-body operator, and the dimensional consistency of each displayed identity in the reference units of the framework. The example assigns no numerical value, reports no measurement and makes no empirical identification; a numerical evaluation would require measured constants as qualified empirical premises and is explicitly deferred."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1, printed pages 184-186 (equations (8.25)-(8.27): E = -Z^2 mu e^4/(2 n^2 (4 pi eps_0 hbar)^2), the Rydberg constant R = (1/2) mu (e^2/(4 pi eps_0 hbar))^2 and E = -R/n^2)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.3.1, printed pages 114-116 (equations (4.30) and (4.31): the energy spectrum and the Bohr radius, and the fine-structure-constant rewriting E = -alpha^2 m_e c^2/(2n^2))"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Example

Adopt the declared one-centre Coulomb model
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a)-(c) with
parameters $\hbar>0$, $m>0$, coupling $\kappa>0$ and length scale
$a_{\kappa}=\hbar^{2}/(m\kappa)$, the bound-energy result
[[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] and the two-body
reading [[pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum]]
with masses $m_{1},m_{2}>0$ and reduced mass
$\mu=m_{1}m_{2}/(m_{1}+m_{2})$. Let the charge parameter be $q>0$ with
$\kappa=q^{2}/(4\pi\varepsilon_{0})$, let $c$ be the speed of light of the SI
conventions of [[def-nrqm-framework-quantities-and-units]] clause (c), and put
$$\alpha:=\frac{q^{2}}{4\pi\varepsilon_{0}\hbar c}=\frac{\kappa}{\hbar c},$$
the dimensionless coupling of the model. Then the following identities hold
exactly for the declared parameters:

(a) $E_{n}:=-\dfrac{m\kappa^{2}}{2\hbar^{2}n^{2}}=-\dfrac{\hbar^{2}}{2ma_{\kappa}^{2}n^{2}}$
for every $n\ge1$, so
$\dfrac{m\kappa^{2}}{2\hbar^{2}}=\dfrac{\hbar^{2}}{2ma_{\kappa}^{2}}$ and
$E_{1}=-\dfrac{\hbar^{2}}{2ma_{\kappa}^{2}}$;

(b) $\kappa=\alpha\hbar c$, hence
$E_{n}=-\dfrac{m\alpha^{2}c^{2}}{2n^{2}}$ and
$a_{\kappa}=\dfrac{\hbar}{m\alpha c}$;

(c) the relative bound energies of the two-body model are
$\mathcal E_{n}=-\dfrac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}
=\dfrac{\mu}{m_{1}}\Bigl(-\dfrac{m_{1}\kappa^{2}}{2\hbar^{2}n^{2}}\Bigr)$
with
$\dfrac{\mu}{m_{1}}=\dfrac{1}{1+m_{1}/m_{2}}\in(0,1)$;

(d) in the reference units of [[def-nrqm-framework-quantities-and-units]]
clause (b), $[\hbar]=\mathrm{kg\,m^{2}\,s^{-1}}$,
$[\kappa]=\mathrm{kg\,m^{3}\,s^{-2}}$,
$[a_{\kappa}]=\mathrm m$,
$[E_{n}]=\mathrm{kg\,m^{2}\,s^{-2}}=\mathrm J$ and $[\alpha]=1$, so every
displayed identity is dimensionally consistent;

(e) the bottom of the continuous spectrum of the total two-body operator is
$\mathcal E_{1}=-\dfrac{\mu\kappa^{2}}{2\hbar^{2}}$, which coincides with the
relative ground energy, and the total operator has no eigenvalue there.

The identities are conditional model computations in terms of declared
parameters; no numerical value of any parameter is assigned, and no measured
quantity is reported. A numerical evaluation of $E_{1}$ requires measured
values of constants such as $\alpha$ and of the mass ratio $m_{1}/m_{2}$ as
qualified empirical premises; it is not performed here.

## Verification

**Given:** The declared Coulomb and two-body model with $\hbar,m,m_{1},m_{2},\kappa,q,\varepsilon_{0},c>0$; $\alpha=\kappa/(\hbar c)$; $a_{\kappa}=\hbar^{2}/(m\kappa)$; $\mu=m_{1}m_{2}/(m_{1}+m_{2})$; the bound-energy and two-body results of the cited items.

[L1] **One-centre bound energies.** The eigenvalues of $H_{\kappa}$ are exactly $E_{n}=-\frac{m\kappa^{2}}{2\hbar^{2}n^{2}}=-\frac{\hbar^{2}}{2ma_{\kappa}^{2}n^{2}}$, $n\ge1$ ([[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] clauses (a), (b), [[thm-nrqm-coulomb-ground-radial-probability-and-units]] clause (e)).

[L2] **Two-body energies and threshold.** The relative bound energies are $\mathcal E_{n}=-\frac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}$, the reduced mass is $\mu=\frac{m_{1}m_{2}}{m_{1}+m_{2}}=\frac{m_{1}}{1+m_{1}/m_{2}}$, and the bottom of the continuous spectrum of the total operator is $-\frac{\mu\kappa^{2}}{2\hbar^{2}}$, each $\mathcal E_{n}$ being a threshold and not an eigenvalue ([[pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum]] clauses (b), (c), (e), [[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clause (d)).

[L3] **Units and conventions.** The reference units are m, s, kg, C; the dimension map assigns $[\hbar]=\mathrm{kg\,m^{2}\,s^{-1}}$, energy $[\cdot]=\mathrm{kg\,m^{2}\,s^{-2}}$, length $[\cdot]=\mathrm m$ and charge $[q]=\mathrm C$, with $c$ in $\mathrm{m\,s^{-1}}$ and $\varepsilon_{0}=(\mu_{0}c^{2})^{-1}$, so $[\kappa]=[\frac{q^{2}}{\varepsilon_{0}}]=\mathrm{kg\,m^{3}\,s^{-2}}$ and $[\alpha]=1$; numerical values of the measured constants are not fixed ([[def-nrqm-framework-quantities-and-units]] clauses (b), (c), (d)).

**Proof technique:** direct; substitute the definitions of $a_{\kappa}$, $\alpha$ and $\mu$ into the model's bound-energy formulae and check the units by the dimension map.

**Given:** The data of the statement and [L1]-[L3].

1.1 [Length-scale identity] By definition $a_{\kappa}=\frac{\hbar^{2}}{m\kappa}$, so $a_{\kappa}^{2}=\frac{\hbar^{4}}{m^{2}\kappa^{2}}$ and $\frac{\hbar^{2}}{2ma_{\kappa}^{2}}=\frac{\hbar^{2}}{2m}\cdot\frac{m^{2}\kappa^{2}}{\hbar^{4}}=\frac{m\kappa^{2}}{2\hbar^{2}}$; multiplying by $n^{-2}$ gives the equality of the two expressions for $E_{n}$ in (a), and $n=1$ gives $E_{1}=-\frac{m\kappa^{2}}{2\hbar^{2}}=-\frac{\hbar^{2}}{2ma_{\kappa}^{2}}$. [given, L1, algebra]

1.2 [Fine-structure parametrisation] By definition $\alpha=\frac{\kappa}{\hbar c}$, hence $\kappa=\alpha\hbar c$ and $\kappa^{2}=\alpha^{2}\hbar^{2}c^{2}$; substituting into $E_{n}=-\frac{m\kappa^{2}}{2\hbar^{2}n^{2}}$ gives $E_{n}=-\frac{m\alpha^{2}c^{2}}{2n^{2}}$, and substituting into $a_{\kappa}=\frac{\hbar^{2}}{m\kappa}$ gives $a_{\kappa}=\frac{\hbar^{2}}{m\alpha\hbar c}=\frac{\hbar}{m\alpha c}$; this is (b). [given, L1, algebra]

1.3 [Reduced-mass factor] By [L2], $\mathcal E_{n}=-\frac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}$ and $\mu=\frac{m_{1}}{1+m_{1}/m_{2}}$, so $\mu=\frac{\mu}{m_{1}}\cdot m_{1}$ gives $\mathcal E_{n}=\frac{\mu}{m_{1}}\bigl(-\frac{m_{1}\kappa^{2}}{2\hbar^{2}n^{2}}\bigr)$, where the bracket is the fixed-nucleus energy of the one-centre model with mass parameter $m_{1}$; since $m_{1},m_{2}>0$ one has $0<\frac{1}{1+m_{1}/m_{2}}<1$, so the relative binding magnitudes are strictly smaller than the fixed-nucleus ones. This is (c). [given, L1, L2, algebra]

1.4 [Dimensions] Using [L3]: $[a_{\kappa}]=\frac{[\hbar]^{2}}{[m][\kappa]}=\frac{(\mathrm{kg\,m^{2}\,s^{-1}})^{2}}{\mathrm{kg}\cdot\mathrm{kg\,m^{3}\,s^{-2}}}=\mathrm m$; $[\frac{m\kappa^{2}}{\hbar^{2}}]=\frac{\mathrm{kg}\cdot(\mathrm{kg\,m^{3}\,s^{-2}})^{2}}{(\mathrm{kg\,m^{2}\,s^{-1}})^{2}}=\mathrm{kg\,m^{2}\,s^{-2}}=\mathrm J$; $[\frac{\hbar}{m\alpha c}]=\frac{\mathrm{kg\,m^{2}\,s^{-1}}}{\mathrm{kg}\cdot 1\cdot\mathrm{m\,s^{-1}}}=\mathrm m$; and $[\alpha]=\frac{[\kappa]}{[\hbar][c]}=\frac{\mathrm{kg\,m^{3}\,s^{-2}}}{\mathrm{kg\,m^{2}\,s^{-1}}\cdot\mathrm{m\,s^{-1}}}=1$. Hence the identities of (a) and (b) are dimensionally consistent, which is (d). [given, L3, algebra]

2.1 [Threshold and assembly] By [L2] the bottom of the continuous spectrum of the total operator is $-\frac{\mu\kappa^{2}}{2\hbar^{2}}=\mathcal E_{1}$, and the relative ground energy is a threshold and not an eigenvalue of the total operator, which is (e). Steps 1.1, 1.2, 1.3 and 1.4 give (a)-(d); no numerical value of any parameter was used, so the example is conditional as recorded. [step 1.1, step 1.2, step 1.3, step 1.4, L2] ∎

## Remarks

- **Why no numbers appear.** Evaluating $E_{1}$ in electronvolts would
  require measured inputs such as the fine-structure constant and the
  electron-to-proton mass ratio; the model's own parameters are not measured
  by this page, and the empirical premises, their uncertainties and the
  comparison with observed spectra belong to a dedicated experiment item,
  which does not yet exist.
- **Fixed-nucleus reference.** The bracket in (c) is the fixed-nucleus energy
  of the one-centre model with mass parameter $m_{1}$; it is a reference
  quantity of the declared limiting reading and not a measured quantity, and
  the limit $m_{2}\to\infty$ is a declared reading, not an operator
  convergence theorem.
