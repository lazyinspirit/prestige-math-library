---
id: ex-nrqm-many-body-two-site-bond-thermal-ensemble
aliases: [ nrqm-many-body-two-site-bond-thermal-ensemble ]
kind: example
domain: physics
title: "The two-site bond model: exact canonical weights, mean energy, entropy
  and free energy of one particle on two sites"
status: published
origin: pipeline
dependency_level: 13
deps:
  [
    def-nrqm-many-body-framework-declared-fixed-n-model,
    thm-complex-spectral-theorem-for-normal-endomorphisms,
    def-nrqm-many-body-framework-entropy-and-free-energy,
    post-nrqm-many-body-canonical-equilibrium-ensemble,
    lem-nrqm-many-body-two-level-thermal-formulas,
    def-nrqm-observables-framework-observable-and-outcome-law,
    pthm-nrqm-observables-preparation-moments,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-preparation-and-apparatus,
    def-hilbert-space,
    def-countable-choice
  ]
dependency_roles:
  def-nrqm-many-body-framework-declared-fixed-n-model: formulation-prerequisite
  thm-complex-spectral-theorem-for-normal-endomorphisms: mathematical-premise
  def-nrqm-many-body-framework-entropy-and-free-energy: formulation-prerequisite
  post-nrqm-many-body-canonical-equilibrium-ensemble: physical-assumption
  lem-nrqm-many-body-two-level-thermal-formulas: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-observables-preparation-moments: physical-result
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite exact computation in the declared one-particle
  two-site (bond) model of the finite-mode many-body realization: the hopping
  Hamiltonian on two sites, its two exact one-particle levels, the canonical
  preparation at assigned temperature, and the exact mean energy, entropy and
  free energy. The example is a model computation in a declared two-dimensional
  idealization; it asserts no physical molecule, no measured energy, no
  transition and no thermodynamic limit."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 5.2
        printed pages 79-81 (PDF pages 87-89): the double square well, the even
        and odd parity combinations and their splitting, with the two-level
        thermal reading following Section 6.4 printed pages 129-131"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "I. Burmistrov and A. Lunkin, Lecture Notes on Statistical Mechanics
        (HSE, January 10, 2023), Section 1.1.2 printed page 13 and Section 1.1.5
        printed page 15: the canonical partition function and free energy of a
        finite-level system"
      url: "http://home.itp.ac.ru/~burmi/HSE/Lectures-StatPhys-temp.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2, P4 and P7 in the readings of
[[def-nrqm-observables-framework-observable-and-outcome-law]] and
[[def-nrqm-many-body-framework-entropy-and-free-energy]], and work in the
finite-mode realization of the declared fixed-$N$ model of
[[def-nrqm-many-body-framework-declared-fixed-n-model]] with:
one-particle space $K=\mathbb C^2$, declared sites $|1\rangle,|2\rangle$ an
orthonormal basis of $K$, particle number $N=1$, single site-occupation
sector, and the declared one-particle operator (the **bond Hamiltonian**)
$$h:=-t\bigl(T_{|1\rangle,|2\rangle}+T_{|2\rangle,|1\rangle}\bigr),\qquad t>0\ \text{in joules}.$$
Adopt the canonical equilibrium postulate
[[post-nrqm-many-body-canonical-equilibrium-ensemble]] at assigned
temperature $T>0$ and inverse temperature $\beta=1/(k_BT)$, and read
$\varepsilon:=2t$ as the tunnelling splitting. Then:

(a) $h$ has the orthonormal eigenbasis
$$u_-:=\frac{|1\rangle+|2\rangle}{\sqrt2},\qquad u_+:=\frac{|1\rangle-|2\rangle}{\sqrt2},\qquad h u_\mp=\mp t\,u_\mp,$$
so its eigenvalues are $-t$ and $+t$; equivalently $h+t\,\mathrm{id}$ is the
two-level Hamiltonian of
[[lem-nrqm-many-body-two-level-thermal-formulas]] with levels $0$ and
$\varepsilon=2t$ and eigenvectors $u_-,u_+$;

(b) the canonical preparation of $h+t\,\mathrm{id}$ and hence of $h$ is
$$\rho_\beta=\frac{T_{u_-,u_-}+e^{-2\beta t}\,T_{u_+,u_+}}{1+e^{-2\beta t}},$$
with shifted partition sum $Z_0=1+e^{-2\beta t}$ and physical partition trace $Z_h=\operatorname{tr}e^{-\beta h}=e^{\beta t}Z_0$;

(c) the exact means, entropy and free energy are
$$\langle h\rangle_\beta=\frac{2t}{e^{2\beta t}+1}-t=-t\tanh(\beta t),\qquad s(\rho_\beta)=\log\bigl(1+e^{-2\beta t}\bigr)+\frac{2\beta te^{-2\beta t}}{1+e^{-2\beta t}},\qquad F=-\frac1\beta\log\bigl(1+e^{-2\beta t}\bigr)-t,$$
and for every $\beta>0$ one has $-t<\langle h\rangle_\beta<0$ and
$0\le s(\rho_\beta)<\log2$;

(d) *scope*: the computation is an exact statement about the declared
two-dimensional bond model at the assigned temperature; it identifies no
physical double-well or molecular system, asserts no measured splitting and
no transition, and the temperature assignment is the tested identification of
P7.

## Verification

[L1] **The supplied two-level formulas.** For a two-dimensional space with
orthonormal basis $(u_0,u_1)$ and $H=\varepsilon T_{u_1,u_1}$, $\varepsilon>0$,
$\beta>0$: $Z=1+e^{-\beta\varepsilon}$, $\rho_\beta$ is the corresponding
mixture, $\operatorname{tr}(\rho_\beta H)=\varepsilon/(e^{\beta\varepsilon}+1)$
with values in $(0,\varepsilon/2)$, and
$s(\rho_\beta)=\log(1+e^{-\beta\varepsilon})+\beta\varepsilon/(e^{\beta\varepsilon}+1)<\log2$,
with $\operatorname{tr}(\rho_\beta H)-\beta^{-1}s(\rho_\beta)=-\beta^{-1}\log Z$
([[lem-nrqm-many-body-two-level-thermal-formulas]] clauses (a)-(c)).

[L2] **The declared model.** The finite-mode realization of
[[def-nrqm-many-body-framework-declared-fixed-n-model]] with $K=\mathbb C^2$,
$N=1$, one-particle operator $h$ and $W=0$ is a declared non-interacting
model; its sector is $K$ itself and the canonical preparation is the Gibbs
operator of the adopted ensemble postulate; the free-energy functional is
$F(\rho)=\operatorname{tr}(\rho h)-k_BT s(\rho)$ by
[[def-nrqm-many-body-framework-entropy-and-free-energy]] clause (e).

**Proof technique:** direct; diagonalise the two-by-two real symmetric matrix
and substitute the supplied two-level formulas with $\varepsilon=2t$ after
the shift by $t\,\mathrm{id}$.

**Given:** the declared bond model with coupling $t>0$, temperature $T>0$, $\beta=1/(k_BT)$, the vectors $u_\mp$, and [L1], [L2].

1.1 [Diagonalisation] In the basis $(|1\rangle,|2\rangle)$ the operator $h$ has the matrix $\begin{pmatrix}0&-t\\-t&0\end{pmatrix}$; the vectors $u_-=(|1\rangle+|2\rangle)/\sqrt2$, $u_+=(|1\rangle-|2\rangle)/\sqrt2$ are orthogonal unit vectors and $h u_\mp=\mp t\,u_\mp$ by direct evaluation, so $\{u_-,u_+\}$ is an orthonormal eigenbasis with eigenvalues $-t$ and $t$ by [[thm-complex-spectral-theorem-for-normal-endomorphisms]]. Hence $h+t\,\mathrm{id}$ has the eigenvalues $0$ on $u_-$ and $2t$ on $u_+$, and it satisfies the hypothesis of [L1] with $\varepsilon=2t$, $u_0=u_-$, $u_1=u_+$. This proves (a). [L1, algebra]

2.1 [Canonical data] Applying [L1] with $\varepsilon=2t$ gives $Z=1+e^{-2\beta t}$ and $\rho_\beta=Z^{-1}(T_{u_-,u_-}+e^{-2\beta t}T_{u_+,u_+})$ for $h+t\,\mathrm{id}$; since $h=(h+t\,\mathrm{id})-t\,\mathrm{id}$ and both operators are functions of the same eigenbasis, the Gibbs operator of $h$ is the same $\rho_\beta$, because the normalized Gibbs weights are unchanged by the shift: $e^{-\beta h}=e^{\beta t}e^{-\beta(h+tI)}$, so its partition trace is $Z_h=e^{\beta t}Z$ and division gives the same density. The mean of $h+t\,\mathrm{id}$ is $2t/(e^{2\beta t}+1)\in(0,t)$, so $\langle h\rangle_\beta=2t/(e^{2\beta t}+1)-t=-t\tanh(\beta t)$, which lies in $(-t,0)$ because $e^{2\beta t}>1$ for $\beta t>0$; the entropy formula is that of [L1] at $\varepsilon=2t$ and satisfies $0\le s<\log2$ by [L1], and $F=-\beta^{-1}\log(1+e^{-2\beta t})-t$ is the free energy of $h$ by [L2] and [L1]. This proves (b) and (c) apart from the scope clause. [L1, L2, step 1.1, algebra]

3.1 [Scope] The computation used only the declared two-dimensional model, its exact diagonalisation and the supplied two-level formulas; no physical double well, measured splitting, transition or thermodynamic limit entered, which is (d). [L1, L2, step 2.1] ∎

## Remarks

- **The shift by $t\,\mathrm{id}$.** Adding a constant to the Hamiltonian
  multiplies $Z$ by an exponential and leaves the canonical preparation and
  the entropy unchanged while shifting the free energy by the same constant;
  the example uses this to instantiate the supplied two-level formulas, whose
  levels are $0$ and $\varepsilon$.
- **Low- and high-temperature values.** The formulas give $s\to0$ and
  $\langle h\rangle_\beta\to-t$ as the exponential factor is suppressed, and
  $s\to\log2$, $\langle h\rangle_\beta\to0$ as it approaches one; the
  example states the exact formulas and the bounds, not a limit theorem.
