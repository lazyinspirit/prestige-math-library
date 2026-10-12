---
id: pthm-nrqm-light-matter-first-order-emission-and-absorption-coefficients
aliases: [nrqm-light-matter-first-order-emission-and-absorption-coefficients]
kind: physics-theorem
domain: physics
title: "First-order emission and absorption amplitudes of the cutoff dipole model, and the exact model probability of the one-photon level-b projection up to the Dyson tail"
status: draft
origin: pipeline
dependency_level: 16
deps: [def-nrqm-light-matter-framework-finite-level-coupled-model, def-nrqm-light-matter-framework-spectral-transition-and-detection, lem-nrqm-light-matter-first-order-photon-energy-law, thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence, thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound, thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity, thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian, thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-ideal-conditional-measurement, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-measurement-framework-declared-measurements-and-instruments, def-nrqm-framework-quantities-and-units, def-hilbert-space, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-operator-norm, def-bounded-linear-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-countable-choice, def-axiom-of-choice, post-nrqm-framework-preparation-and-apparatus, lem-nrqm-fock-and-equilibrium-fock-sector-projections]
dependency_roles:
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  def-nrqm-light-matter-framework-spectral-transition-and-detection: formulation-prerequisite
  lem-nrqm-light-matter-first-order-photon-energy-law: mathematical-premise
  thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence: mathematical-premise
  thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound: mathematical-premise
  thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity: mathematical-premise
  thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian: mathematical-premise
  thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-operator-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
empirical_premises: []
physical_scope: "The first-order Dyson amplitudes of the declared finite-level cutoff dipole model between a declared upward level pair and the one-photon sector, with the exact model probability of the level-b one-photon projection controlled by the explicit Dyson tail, and the exact mirror relation between the single-vertex emission amplitude into a unit one-photon vector and the single-vertex absorption amplitude from it. The theorem is conditional on the model data, on the cited mathematics and on the finite time interval; it asserts no rate, no decay, no linewidth, no measurement record, no environment and no empirical result, and it does not identify the model's amplitudes with laboratory transition rates."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.2 printed pages 215-218 (PDF pages 223-226): the first-order transition amplitude induced by a classical wave, the squared dipole matrix element, and stimulated emission and absorption at equal rates"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Chapter 13 Sections 13.5-13.9 pp. 175-190 (the Dyson expansion, first-order amplitudes and spontaneous-emission coefficient)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; Internet Archive snapshot of 2024-04-21), Chapter 14 Section 14.3 printed page 221: coupling to a classical current that does not change state, contrasted with emission by an atom that changes state"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Statement

Adopt the model of
[[def-nrqm-light-matter-framework-finite-level-coupled-model]] with its data
$d$, $H_{a}$, $D^{W}_{j}$, $\Lambda$, $g_{j}$, $\eta_{0}$, and a declared upward
level pair $(a,b)$ with transition energy $\Delta=E_{a}-E_{b}>0$ and page
coefficients $c_{j}=\langle v_{b},D^{W}_{j}v_{a}\rangle$, mode vector $M$ and
photon density $\nu_{b}$ of
[[def-nrqm-light-matter-framework-spectral-transition-and-detection]] clauses
(b),(c). Write $H_{0}:=H_{a}\otimes I+I\otimes H_{f}$ and
$B:=\eta_{0}\sum_{j}D^{W}_{j}\otimes\phi(g_{j})$, so that $H_{\mathrm{LM}}=H_{0}+B$
on $\mathbb C^{d}\otimes D(H_{f})$. Assume the Axioms of Countable Choice and
of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Fix $T>0$,
put
$$C:=\frac{2}{\hbar}\sum_{j=1}^{J}\|D^{W}_{j}\|\,\|g_{j}\|_{\mathfrak h}, \qquad \varepsilon_{2}(t):=\sum_{n\ge2}\frac{(|\eta_{0}|Ct)^{n}}{\sqrt{n!}}\qquad(0\le t\le T),$$
and let $\Psi_{0}:=v_{a}\otimes\Omega$. For $t\ge0$ let $\Psi_{1}(t)$ denote the
first interaction-picture Dyson term of the model with initial vector
$\Psi_{0}$, as in
[[thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence]] clause (b).
Then:

(a) (single-vertex emission vector) the component of $\Psi_{1}(t)$ in the
one-photon sector at level $b$ is
$$v_{b}\otimes A_{b}(\cdot,t),$$
with $A_{b}(\cdot,t)$ the single-vertex emission vector of
[[def-nrqm-light-matter-framework-spectral-transition-and-detection]] clause
(d) and
[[lem-nrqm-light-matter-first-order-photon-energy-law]]; consequently the
single-vertex emission coefficient of the model is
$$\gamma_{b}(t)=\eta_{0}^{2}\,t\int_{\mathbb R}K_{t}(E-\Delta)\,d\nu_{b}(E) \qquad(t>0);$$

(b) (exact model probability up to the Dyson tail) let
$Q_{b}:=|v_{b}\rangle\langle v_{b}|\otimes\Pi_{1}$ and let
$$p_{b}(t):=\|Q_{b}\,e^{-itH_{\mathrm{LM}}/\hbar}\Psi_{0}\|^{2}$$
be the model's probability of the spectral value $1$ of the assigned sharp
observable $(Q_{b},1)$ in the evolved preparation of $\Psi_{0}$ at time $t$
(the reading of P2, [[post-nrqm-framework-observable-and-probability]],
[[def-nrqm-observables-framework-observable-and-outcome-law]]). Then for
$0\le t\le T$,
$$\bigl|p_{b}(t)-\gamma_{b}(t)\bigr|\le \varepsilon_{2}(t)\bigl(2\|A_{b}(\cdot,t)\|_{\mathfrak h}+\varepsilon_{2}(t)\bigr);$$
in particular the exact probability equals the single-vertex coefficient up to
the explicit Dyson tail, which is not asserted to be small;

(c) (absorption mirror) let $g\in\mathfrak h$ be a unit vector, let
$\Psi_{1}^{g}(t)$ denote the first interaction-picture Dyson term of the model
with initial vector $\Phi_{0}:=v_{b}\otimes g$, and define
$$\alpha_{\mathrm{em}}(t):=\bigl\langle v_{b}\otimes g,\Psi_{1}(t)\bigr\rangle, \qquad \alpha_{\mathrm{abs}}(t):=\bigl\langle v_{a}\otimes\Omega,\Psi_{1}^{g}(t)\bigr\rangle .$$
Then for every $t\ge0$
$$\alpha_{\mathrm{em}}(t)=-\frac{i\eta_{0}}{\hbar}\int_{0}^{t} e^{-i\Delta s/\hbar}\,\overline{\bigl\langle M,\,e^{-is\varepsilon/\hbar}g\bigr\rangle_{\mathfrak h}}\,ds, \qquad \alpha_{\mathrm{abs}}(t)=-\frac{i\eta_{0}}{\hbar}\int_{0}^{t} e^{+i\Delta s/\hbar}\,\overline{\bigl\langle M,\,e^{-is\varepsilon/\hbar}g\bigr\rangle_{\mathfrak h}}\,ds,$$
so that $\alpha_{\mathrm{abs}}(t)$ is obtained from
$\alpha_{\mathrm{em}}(t)$ by the replacement $\Delta\mapsto-\Delta$; in
particular $|\alpha_{\mathrm{abs}}(t)|$ at detuning $\Delta$ equals
$|\alpha_{\mathrm{em}}(t)|$ at detuning $-\Delta$ for the same unit vector $g$;

(d) (scope) clauses (a)-(c) are statements about the model's first-order Dyson
terms and about one projection probability of the exact model evolution. No
rate, exponential decay, linewidth, environment, sampling model or measurement
record is asserted; the identification of a laboratory preparation with
$\Psi_{0}$ and of a laboratory detector with the observable $Q_{b}$ is a tested
identification with uncertainty under P7
([[post-nrqm-framework-preparation-and-apparatus]]); and no value of
$\eta_{0}$, $D^{W}_{j}$, $g_{j}$ or $\Lambda$ is asserted.

**Given:** the model data $d,H_{a},D^{W}_{j},\Lambda,g_{j},\eta_{0}$, the upward level pair $(a,b)$ with $\Delta>0$ and the page coefficients $c_{j},M,\nu_{b}$, the operators $H_{0},B,H_{\mathrm{LM}}$, the interval $[0,T]$, the constant $C$, the tail $\varepsilon_{2}(\cdot)$, the initial vectors $\Psi_{0}=v_{a}\otimes\Omega$ and $\Phi_{0}=v_{b}\otimes g$, and the projections $Q_{b}$ and $\Pi_{1}$.

[F1] **Self-adjointness and Dyson hypotheses.** $H_{0}$ is self-adjoint on $\mathbb C^{d}\otimes D(H_{f})$ (the case $\eta_{0}=0$ of [[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]] clause (c)); $B$ is symmetric on that domain with $H_{0}$-bound zero, and $H_{\mathrm{LM}}$ is self-adjoint there and bounded below ([[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]] clauses (a)-(c)); $\phi(g)=A_{-}(g)+A_{+}(g)$ with $A_{+}(g)=A_{-}(g)^{*}$, and $\phi(g)\Omega=g$ ([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]] clauses (a),(d), [[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]]).

[F2] **Dyson expansion and tail.** With $V(t):=e^{itH_{0}/\hbar}Be^{-itH_{0}/\hbar}$ and the iterated integrals $\Psi_{n}(t)$ of [[thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence]] clause (b), the series $\sum_{n\ge0}\Psi_{n}(t)$ converges in the graph norm of $H_{f}$ uniformly for $t$ in compact sets, $e^{-itH_{0}/\hbar}\sum_{n\ge0}\Psi_{n}(t)=e^{-itH_{\mathrm{LM}}t/\hbar}\Psi_{0}$ for every $t\ge0$, and for $0\le t\le T$, $N\ge1$, $$\Bigl\|e^{-itH_{\mathrm{LM}}/\hbar}\Psi_{0}-e^{-itH_{0}/\hbar}\sum_{n=0}^{N-1}\Psi_{n}(t)\Bigr\|\le\sum_{n\ge N}\frac{(|\eta_{0}|Ct)^{n}}{\sqrt{n!}}$$ ([[thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence]] clauses (b)-(d)); in particular, applying $e^{itH_{0}/\hbar}$ and taking $N=2$, $\bigl\|\Psi(t)-(\Psi_{0}+\Psi_{1}(t))\bigr\|\le\varepsilon_{2}(t)$ for $0\le t\le T$, where $\Psi(t):=e^{itH_{0}/\hbar}e^{-itH_{\mathrm{LM}}/\hbar}\Psi_{0}$.

[F3] **Spectral block of the free evolution.** $H_{0}(v_{a}\otimes\Omega)=E_{a}(v_{a}\otimes\Omega)$, and for $u\in\mathbb C^{d}$, $h\in\mathfrak h$, $j$ and real $s$, $$e^{isH_{0}/\hbar}(D^{W}_{j}u\otimes g_{j})=e^{isH_{a}/\hbar}D^{W}_{j}u\otimes e^{is\varepsilon/\hbar}g_{j};$$ moreover $\langle v_{b},e^{isH_{a}/\hbar}D^{W}_{j}v_{a}\rangle=e^{isE_{b}/\hbar}c_{j}$ and $\langle v_{a},e^{isH_{a}/\hbar}D^{W}_{j}v_{b}\rangle=e^{isE_{a}/\hbar}\overline{c_{j}}$, because $H_{a}v_{a}=E_{a}v_{a}$, $H_{a}v_{b}=E_{b}v_{b}$ and $D^{W}_{j}$ is Hermitian ([[def-nrqm-light-matter-framework-finite-level-coupled-model]] clauses (b),(d), [[def-inner-product-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F4] **One-photon sector and pairing.** $\Pi_{1}$ is the orthogonal projection of $F(\mathfrak h)$ onto the one-photon sector, the one-photon sector at level $d$ in $\mathbb C^{d}\otimes F(\mathfrak h)$ is $\mathbb C^{d}\otimes\operatorname{ran}\Pi_{1}$, whose level-$b$ part is $\mathbb C v_{b}\otimes\mathfrak h$; a vector $v_{b}\otimes f$ with $f\in\mathfrak h$ is paired by $\langle v_{b}\otimes f,v_{b}\otimes f'\rangle=\langle f,f'\rangle_{\mathfrak h}$ ([[lem-nrqm-fock-and-equilibrium-fock-sector-projections]], [[def-hilbert-space]], [[def-inner-product-space]]).

[F5] **Kernel and coefficient.** $\gamma_{b}(t)=\|A_{b}(\cdot,t)\|_{\mathfrak h}^{2}=\eta_{0}^{2}t\int K_{t}(E-\Delta)d\nu_{b}(E)$ for $t>0$ and $A_{b}(\cdot,t)\in\mathfrak h$ ([[lem-nrqm-light-matter-first-order-photon-energy-law]] clause (a), [[thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity]] clauses (ii),(iii)).

[F6] **Projection probability comparison.** For unit vectors $\psi,\varphi$ of a complex Hilbert space and an orthogonal projection $P$, $\bigl|\|P\psi\|^{2}-\|P\varphi\|^{2}\bigr|\le\|P(\psi-\varphi)\|\,\bigl(\|P\psi\|+\|P\varphi\|\bigr)\le\|\psi-\varphi\|\bigl(\|P\psi\|+\|P\varphi\|\bigr)$; and the model reads the probability of the spectral value $1$ of $(Q_{b},1)$ in a unit vector $\psi$ as $\|Q_{b}\psi\|^{2}$ ([[post-nrqm-framework-observable-and-probability]], [[def-nrqm-observables-framework-observable-and-outcome-law]], [[def-nrqm-measurement-framework-declared-measurements-and-instruments]], [[def-inner-product-space]]).

[F7] **Framework readings.** Times and energies are read in seconds and joules as in [[def-nrqm-framework-quantities-and-units]]; $u\mapsto e^{is\varepsilon/\hbar}u$ is the unitary multiplication action of the one-particle energy on $\mathfrak h$ ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]], [[def-bounded-linear-operator]], [[def-operator-norm]]).



## Facts & Assumptions

**Given:** the model data $d,H_{a},D^{W}_{j},\Lambda,g_{j},\eta_{0}$, the upward level pair $(a,b)$ with $\Delta>0$ and the page coefficients $c_{j},M,\nu_{b}$, the operators $H_{0},B,H_{\mathrm{LM}}$, the interval $[0,T]$, the constant $C$, the tail $\varepsilon_{2}(\cdot)$, the initial vectors $\Psi_{0}=v_{a}\otimes\Omega$ and $\Phi_{0}=v_{b}\otimes g$, and the projections $Q_{b}$ and $\Pi_{1}$.

[F1] **Self-adjointness and Dyson hypotheses.** $H_{0}$ is self-adjoint on $\mathbb C^{d}\otimes D(H_{f})$ (the case $\eta_{0}=0$ of [[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]] clause (c)); $B$ is symmetric on that domain with $H_{0}$-bound zero, and $H_{\mathrm{LM}}$ is self-adjoint there and bounded below ([[thm-nrqm-fock-and-equilibrium-cutoff-dipole-relative-bound]] clauses (a)-(c)); $\phi(g)=A_{-}(g)+A_{+}(g)$ with $A_{+}(g)=A_{-}(g)^{*}$, and $\phi(g)\Omega=g$ ([[thm-nrqm-fock-and-equilibrium-closed-adjoint-sector-domains]] clauses (a),(d), [[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]]).

[F2] **Dyson expansion and tail.** With $V(t):=e^{itH_{0}/\hbar}Be^{-itH_{0}/\hbar}$ and the iterated integrals $\Psi_{n}(t)$ of [[thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence]] clause (b), the series $\sum_{n\ge0}\Psi_{n}(t)$ converges in the graph norm of $H_{f}$ uniformly for $t$ in compact sets, $e^{-itH_{0}/\hbar}\sum_{n\ge0}\Psi_{n}(t)=e^{-itH_{\mathrm{LM}}/\hbar}\Psi_{0}$ for every $t\ge0$, and for $0\le t\le T$, $N\ge1$, $$\Bigl\|e^{-itH_{\mathrm{LM}}/\hbar}\Psi_{0}-e^{-itH_{0}/\hbar}\sum_{n=0}^{N-1}\Psi_{n}(t)\Bigr\|\le\sum_{n\ge N}\frac{(|\eta_{0}|Ct)^{n}}{\sqrt{n!}}$$ ([[thm-nrqm-fock-and-equilibrium-vacuum-emission-dyson-convergence]] clauses (b)-(d)); in particular, applying $e^{itH_{0}/\hbar}$ and taking $N=2$, $\|\Psi(t)-(\Psi_{0}+\Psi_{1}(t))\|\le\varepsilon_{2}(t)$ for $0\le t\le T$, where $\Psi(t):=e^{itH_{0}/\hbar}e^{-itH_{\mathrm{LM}}/\hbar}\Psi_{0}$.

[F3] **Spectral block of the free evolution.** $H_{0}(v_{a}\otimes\Omega)=E_{a}(v_{a}\otimes\Omega)$, and for $u\in\mathbb C^{d}$, $h\in\mathfrak h$, $j$ and real $s$, $e^{isH_{0}/\hbar}(D^{W}_{j}u\otimes g_{j})=e^{isH_{a}/\hbar}D^{W}_{j}u\otimes e^{is\varepsilon/\hbar}g_{j}$; moreover $\langle v_{b},e^{isH_{a}/\hbar}D^{W}_{j}v_{a}\rangle=e^{isE_{b}/\hbar}c_{j}$ and $\langle v_{a},e^{isH_{a}/\hbar}D^{W}_{j}v_{b}\rangle=e^{isE_{a}/\hbar}\overline{c_{j}}$, because $H_{a}v_{a}=E_{a}v_{a}$, $H_{a}v_{b}=E_{b}v_{b}$ and $D^{W}_{j}$ is Hermitian ([[def-nrqm-light-matter-framework-finite-level-coupled-model]] clauses (b),(d), [[def-inner-product-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F4] **One-photon sector and pairing.** $\Pi_{1}$ is the orthogonal projection of $F(\mathfrak h)$ onto the one-photon sector, the one-photon sector at level $d$ in $\mathbb C^{d}\otimes F(\mathfrak h)$ is $\mathbb C^{d}\otimes\operatorname{ran}\Pi_{1}$, whose level-$b$ part is $\mathbb C v_{b}\otimes\mathfrak h$; a vector $v_{b}\otimes f$ with $f\in\mathfrak h$ is paired by $\langle v_{b}\otimes f,v_{b}\otimes f'\rangle=\langle f,f'\rangle_{\mathfrak h}$ ([[lem-nrqm-fock-and-equilibrium-fock-sector-projections]], [[def-hilbert-space]], [[def-inner-product-space]]).

[F5] **Kernel and coefficient.** $\gamma_{b}(t)=\|A_{b}(\cdot,t)\|_{\mathfrak h}^{2}=\eta_{0}^{2}t\int K_{t}(E-\Delta)d\nu_{b}(E)$ for $t>0$ and $A_{b}(\cdot,t)\in\mathfrak h$ ([[lem-nrqm-light-matter-first-order-photon-energy-law]] clause (a), [[thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity]] clauses (ii),(iii)).

[F6] **Projection probability comparison.** For unit vectors $\psi,\varphi$ of a complex Hilbert space and an orthogonal projection $P$, $\bigl|\|P\psi\|^{2}-\|P\varphi\|^{2}\bigr|\le\|P(\psi-\varphi)\|\,(\|P\psi\|+\|P\varphi\|)\le\|\psi-\varphi\|(\|P\psi\|+\|P\varphi\|)$; and the model reads the probability of the spectral value $1$ of $(Q_{b},1)$ in a unit vector $\psi$ as $\|Q_{b}\psi\|^{2}$ ([[post-nrqm-framework-observable-and-probability]], [[def-nrqm-observables-framework-observable-and-outcome-law]], [[def-nrqm-measurement-framework-declared-measurements-and-instruments]], [[def-inner-product-space]]).

[F7] **Framework readings.** Times and energies are read in seconds and joules as in [[def-nrqm-framework-quantities-and-units]]; $u\mapsto e^{is\varepsilon/\hbar}u$ is the unitary multiplication action of the one-particle energy on $\mathfrak h$ ([[thm-nrqm-fock-and-equilibrium-transverse-continuum-free-fock-hamiltonian]], [[def-bounded-linear-operator]], [[def-operator-norm]]).

## Proof

**Proof technique:** direct; evaluate the first interaction-picture Dyson term against the level-$b$ one-photon sector, compare the exact one-photon projection probability with the first-order coefficient through the Dyson tail, and compute the reverse-direction amplitude by the same expansion.

**Given:** The data of the statement and [F1]-[F7].

1.1 [The first Dyson term in the one-photon sector at level $b$] By [F1] and [F2], $\Psi_{1}(t)=-\frac{i}{\hbar}\int_{0}^{t}V(s)\Psi_{0}\,ds$ with $V(s)=e^{isH_{0}/\hbar}Be^{-isH_{0}/\hbar}$, and by [F3] $e^{-isH_{0}/\hbar}\Psi_{0}=e^{-isE_{a}/\hbar}\Psi_{0}$ while $B\Psi_{0}=\eta_{0}\sum_{j}D^{W}_{j}v_{a}\otimes g_{j}$ by [F1]. Hence $V(s)\Psi_{0}=\eta_{0}e^{-isE_{a}/\hbar}\sum_{j}e^{isH_{0}/\hbar}(D^{W}_{j}v_{a}\otimes g_{j})$, and pairing with $v_{b}\otimes f$, $f\in\mathfrak h$, gives by [F3] and [F4] $$\bigl\langle v_{b}\otimes f,V(s)\Psi_{0}\bigr\rangle=\eta_{0}e^{-is\Delta/\hbar}\sum_{j}c_{j}\bigl\langle f,e^{is\varepsilon/\hbar}g_{j}\bigr\rangle_{\mathfrak h}=\eta_{0}e^{-is\Delta/\hbar}\bigl\langle f,e^{is\varepsilon/\hbar}M\bigr\rangle_{\mathfrak h},$$ because the pairing is conjugate-linear in the first argument and $M=\sum_{j}c_{j}g_{j}$. Therefore $$\bigl\langle v_{b}\otimes f,\Psi_{1}(t)\bigr\rangle=-\frac{i\eta_{0}}{\hbar}\int_{0}^{t}e^{-is\Delta/\hbar}\bigl\langle f,e^{is\varepsilon/\hbar}M\bigr\rangle_{\mathfrak h}ds=\bigl\langle f,A_{b}(\cdot,t)\bigr\rangle_{\mathfrak h},$$ the last identity being the definition of $A_{b}(\cdot,t)$ in clause (d) of the model's spectral-transition reading with $t$ in place of $s$; since $f\in\mathfrak h$ was arbitrary, the component in question is $v_{b}\otimes A_{b}(\cdot,t)$. [F1, F3, F4, F7, algebra, F2]

2.1 [The coefficient] Clause (a) of [[lem-nrqm-light-matter-first-order-photon-energy-law]] with $t>0$ gives $\|A_{b}(\cdot,t)\|_{\mathfrak h}^{2}=\eta_{0}^{2}t\int K_{t}(E-\Delta)d\nu_{b}(E)$, which is $\gamma_{b}(t)$. This proves (a). [F5, step 1.1, algebra]

2.2 [Absorption mirror] With $\Phi_{0}=v_{b}\otimes g$, unit $g\in\mathfrak h$, the same computation as in step 1.1 with [F1] gives $B\Phi_{0}=\eta_{0}\sum_{j}D^{W}_{j}v_{b}\otimes\phi(g_{j})g$; pairing the vacuum component $\Omega$ of $\phi(g_{j})g=A_{+}(g_{j})g+A_{-}(g_{j})g$ and using $A_{-}(g_{j})g=\langle g,g_{j}\rangle_{\mathfrak h}\Omega$ ([F1]) yields $$V(s)\Phi_{0}=\eta_{0}e^{-isE_{b}/\hbar}\sum_{j}e^{isH_{0}/\hbar}\bigl(D^{W}_{j}v_{b}\otimes\langle e^{-is\varepsilon/\hbar}g,g_{j}\rangle_{\mathfrak h}\Omega\bigr)+\text{(two-photon terms)},$$ whose inner product with $v_{a}\otimes\Omega$ is $\eta_{0}e^{is\Delta/\hbar}\sum_{j}\overline{c_{j}}\langle e^{-is\varepsilon/\hbar}g,g_{j}\rangle_{\mathfrak h}=\eta_{0}e^{is\Delta/\hbar}\overline{\langle M,e^{-is\varepsilon/\hbar}g\rangle}_{\mathfrak h}$ by [F3] and the identity $\overline{\langle M,h\rangle}_{\mathfrak h}=\sum_{j}c_{j}\overline{\langle g_{j},h\rangle}_{\mathfrak h}=\sum_{j}\overline{c_{j}}\langle h,g_{j}\rangle_{\mathfrak h}$. Integrating against $-\frac{i}{\hbar}$ gives the displayed $\alpha_{\mathrm{abs}}$; step 1.1 with the same $g$ in place of $f$ gives $\alpha_{\mathrm{em}}$. The two integrands differ exactly by $e^{\mp i\Delta s/\hbar}$, which is the replacement $\Delta\mapsto-\Delta$. This proves (c). [F1, F2, F3, F7, step 1.1, algebra]

3.1 [Exact projection probability] Since $H_{0}$ commutes with $Q_{b}$ (both are diagonal in the level basis and $\Pi_{1}$ is the spectral projection of $H_{f}$ for photon number one, [F4]), [F2] gives $Q_{b}e^{-itH_{\mathrm{LM}}/\hbar}\Psi_{0}=Q_{b}e^{-itH_{0}/\hbar}\Psi(t)=e^{-itH_{0}/\hbar}Q_{b}\Psi(t)$, so $\|Q_{b}e^{-itH_{\mathrm{LM}}/\hbar}\Psi_{0}\|=\|Q_{b}\Psi(t)\|$ by unitarity. By [F2], $\|\Psi(t)-(\Psi_{0}+\Psi_{1}(t))\|\le\varepsilon_{2}(t)$, and $Q_{b}\Psi_{0}=0$ because $\Psi_{0}$ has no photons ([F4]), so $\|Q_{b}\Psi(t)-Q_{b}\Psi_{1}(t)\|\le\varepsilon_{2}(t)$. [F6] and step 1.1 then give $$\bigl|p_{b}(t)-\gamma_{b}(t)\bigr|\le\varepsilon_{2}(t)\bigl(2\|A_{b}(\cdot,t)\|_{\mathfrak h}+\varepsilon_{2}(t)\bigr),$$ since $\|Q_{b}\Psi_{1}(t)\|=\|A_{b}(\cdot,t)\|$ and $\|Q_{b}\Psi(t)\|\le\|A_{b}(\cdot,t)\|+\varepsilon_{2}(t)$. This proves (b). [F2, F4, F6, step 1.1, step 2.1, algebra]

4.1 [Scope and assembly] Steps 1.1 and 2.1 prove (a), step 3.1 proves (b) and step 2.2 proves (c). Only the model's first-order Dyson terms, one projection probability and the finite interval $[0,T]$ entered; neither a rate, a decay, a linewidth, an environment nor a sampling model was formed, and no laboratory identification was made, which is (d). [step 1.1, step 2.1, step 2.2, step 3.1] ∎



## Remarks

- **Why the exact probability is not identified with the coefficient.** The projection $Q_{b}$ annihilates the vacuum and every sector of photon number different from one, but the Dyson terms of odd order $n\ge3$ can return to the one-photon sector; clause (b) therefore controls the exact probability by the tail rather than asserting equality. This is the explicit sense in which the single-vertex coefficient is a first-order model quantity.
- **The mirror is an algebraic identity, not a detailed-balance theorem.** Clause (c) relates two first-order amplitudes of the same model that differ by the sign of the detuning; it assumes nothing about populations, temperatures or equilibrium. The equal-modulus statement is a statement about $\alpha_{\mathrm{abs}}$ and $\alpha_{\mathrm{em}}$ on opposite detunings.
