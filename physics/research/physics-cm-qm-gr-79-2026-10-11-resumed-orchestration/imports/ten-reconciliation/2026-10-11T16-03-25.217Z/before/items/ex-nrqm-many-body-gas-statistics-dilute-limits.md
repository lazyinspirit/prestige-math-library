---
id: ex-nrqm-many-body-gas-statistics-dilute-limits
aliases: [nrqm-many-body-gas-statistics-dilute-limits]
kind: example
domain: physics
title: "Free-mode statistics at low occupation: exact dilute identities, a finite arithmetic check and two convergence examples"
status: draft
origin: pipeline
dependency_level: 13
deps: [pthm-nrqm-many-body-thermal-occupation-predictions, post-nrqm-many-body-canonical-equilibrium-ensemble, def-nrqm-many-body-framework-entropy-and-free-energy, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-identical-particles-and-spin, thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas, thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion, thm-geometric-series, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  pthm-nrqm-many-body-thermal-occupation-predictions: physical-result
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas: mathematical-premise
  thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion: mathematical-premise
  thm-geometric-series: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite check of the declared free-mode thermal occupation formulas at low occupation q = e^{-beta epsilon}: the exact Bose and Fermi means, their dilute remainders, an exact rational evaluation at q = 1/10, and the product convergence for geometrically spaced and for constant free-mode energies. The example is a model computation at assigned temperature and chemical potential; it asserts no measured occupation, no dilute gas, no thermodynamic limit and no condensation."
sources:
  references:
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics (HSE, January 10, 2023), Sections 1.3.1 and 1.4.1 printed pages 24-27 and 33-34: the Fermi-Dirac and Bose-Einstein occupation factors and their low-occupation expansions"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1 printed pages 226-230 (PDF pages 234-238): counting of symmetric and antisymmetric mode configurations behind the two statistics"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

Adopt the mode models and thermal readings of
[[pthm-nrqm-many-body-thermal-occupation-predictions]] at assigned
temperature $T>0$ with $\beta=1/(k_BT)$, and put $x:=\beta\varepsilon>0$ and
$q:=e^{-x}\in(0,1)$ for a single mode of energy $\varepsilon>0$ (or, in the
grand-canonical reading, $x=\beta(\varepsilon-\mu)$ with $q=e^{-\beta(\varepsilon-\mu)}$).
Then:

(a) the exact single-mode means and their dilute identities are
$$\langle N\rangle_{\mathrm B}=\frac{q}{1-q}=q+\frac{q^2}{1-q},\qquad \langle N\rangle_{\mathrm F}=\frac{q}{1+q}=q-\frac{q^2}{1+q},$$
so the bosonic mean exceeds $q$ by $q^2/(1-q)$ and the fermionic mean falls
below $q$ by $q^2/(1+q)$ exactly;

(b) at $q=1/10$ the exact means are $\langle N\rangle_{\mathrm B}=1/9$ and
$\langle N\rangle_{\mathrm F}=1/11$, and the exact identities
$1/9=1/10+1/90$ and $1/11=1/10-1/110$ verify the two remainder formulas;

(c) for the free-mode energies $\varepsilon_j=j\varepsilon$,
$j\ge1$, the sums $\sum_je^{-\beta\varepsilon_j}=e^{-\beta\varepsilon}/(1-e^{-\beta\varepsilon})$
converge, so the bosonic and fermionic product partitions are finite
(bosonic case with $\mu<\varepsilon$); for the constant energies
$\varepsilon_j\equiv\varepsilon$ the sum $\sum_je^{-\beta\varepsilon_j}=+\infty$
diverges, so both product partitions diverge;

(d) *scope*: the identities and the check are exact statements about the
declared mode models at the assigned temperature and, where stated, chemical
potential; no measured occupation, dilute gas, thermodynamic limit or
condensation is asserted.

## Verification

[L1] **Supplied occupation formulas.** For a single bosonic mode of energy
$\varepsilon>0$ the canonical mean occupancy is $1/(e^{\beta\varepsilon}-1)$,
for a single fermionic orbital with parameters $\varepsilon_1,\mu$ it is
$1/(e^{\beta(\varepsilon_1-\mu)}+1)$, and the dilute identities and remainder
bounds of clause (d) of the cited theorem hold with $q=e^{-\beta(\varepsilon-\mu)}$
([[pthm-nrqm-many-body-thermal-occupation-predictions]] clauses (a), (b), (d),
[[thm-nrqm-fock-and-equilibrium-fermion-and-dilute-grand-canonical-formulas]] clause (c)).

[L2] **Supplied product criterion.** Countably many free modes with energies
$\varepsilon_j>0$ have finite bosonic product partition exactly when
$\sum_je^{-\beta\varepsilon_j}<\infty$ and $\mu<\inf_j\varepsilon_j$, and
finite fermionic product partition exactly when
$\sum_je^{-\beta\varepsilon_j}<\infty$
([[thm-nrqm-fock-and-equilibrium-countable-mode-product-criterion]] clauses (d), (e), [[pthm-nrqm-many-body-thermal-occupation-predictions]] clause (c)); the geometric series gives $\sum_{j\ge1}r^j=r/(1-r)$ for $0<r<1$ ([[thm-geometric-series]]).

**Proof technique:** direct; substitute $q=e^{-x}$ in the supplied means, evaluate the rational identities at $q=1/10$ in exact fractions, and apply the product criterion to the two energy sequences.

**Given:** the declared single-mode model with energy $\varepsilon>0$, assigned $\beta>0$, $q=e^{-\beta\varepsilon}$, the energy sequences $\varepsilon_j=j\varepsilon$ and $\varepsilon_j\equiv\varepsilon$, and [L1], [L2].

1.1 [Dilute identities] With $q=e^{-\beta\varepsilon}\in(0,1)$ the bosonic mean of [L1] is $1/(e^{\beta\varepsilon}-1)=q/(1-q)$ and the fermionic mean is $1/(e^{\beta\varepsilon}+1)=q/(1+q)$; the algebraic identities $q/(1-q)=q+q^2/(1-q)$ and $q/(1+q)=q-q^2/(1+q)$ are exact for every $q\in(0,1)$, and the remainders $q^2/(1-q)$, $q^2/(1+q)$ are positive. This proves (a). [L1, algebra]

1.2 [The finite check at $q=1/10$] At $q=1/10$ the bosonic mean is $(1/10)/(9/10)=1/9$ and the fermionic mean is $(1/10)/(11/10)=1/11$; the remainders are $q^2/(1-q)=(1/100)/(9/10)=1/90$ and $q^2/(1+q)=(1/100)/(11/10)=1/110$, so the exact identities $1/9=1/10+1/90=10/90+1/90$ and $1/11=1/10-1/110=11/110-1/110$ hold. This proves (b). [L1, algebra]

1.3 [The two convergence examples] For $\varepsilon_j=j\varepsilon$ the sum is $\sum_{j\ge1}(e^{-\beta\varepsilon})^j=e^{-\beta\varepsilon}/(1-e^{-\beta\varepsilon})<\infty$ by [L2], and for the bosonic product one needs in addition $\mu<\inf_j\varepsilon_j=\varepsilon$; for $\varepsilon_j\equiv\varepsilon$ every term of the sum equals $e^{-\beta\varepsilon}>0$, so the sum diverges and [L2] makes both product partitions infinite. This proves (c). [L2, algebra]

2.1 [Checks and scope] Steps 1.1-1.3 give the exact identities, the exact rational check, and the two convergence outcomes; every quantity is computed in the declared mode models at the assigned temperature, and no measured occupation, dilute gas, thermodynamic limit or condensation entered, which is (d). [L1, L2, step 1.1, step 1.2, step 1.3, algebra] ∎

## Remarks

- **What the check tests.** The check confirms the two remainder identities in exact arithmetic at a fixed value of $q$; it is a finite verification of algebraic identities, not an empirical test and not a statement about any gas.
- **Two ways to fail convergence.** Constant free-mode energies have divergent product partition because infinitely many modes share the same positive weight; linearly increasing energies have geometrically decaying weights and finite product partition. The bosonic criterion additionally requires the chemical potential below the ground-mode energy.
