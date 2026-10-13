---
id: pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy
aliases: [ nrqm-central-coulomb-bound-spectrum-and-degeneracy ]
kind: physics-theorem
domain: physics
title: "The one-centre Coulomb model: bound energies, n^2-degeneracy,
  completeness of the bound states in the negative spectral subspace and the
  continuum"
status: published
origin: session
dependency_level: 14
deps:
  [
    def-nrqm-central-framework-coulomb-and-hydrogen-model,
    pthm-nrqm-central-coulomb-energy-observable-and-flow,
    thm-nrqm-coulomb-angular-radial-unitary-reduction,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    pthm-nrqm-kinematics-spin-s-outcome-laws,
    def-nrqm-state-geometry-framework-state-space,
    lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues,
    thm-nrqm-coulomb-infinitesimal-kinetic-bound,
    thm-nrqm-coulomb-transported-radial-endpoint-realization,
    thm-nrqm-coulomb-laguerre-bound-energy-exhaustion,
    thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy,
    thm-nrqm-coulomb-jost-volterra-solution,
    thm-nrqm-coulomb-continuum-spectral-density,
    thm-nrqm-coulomb-essential-spectrum,
    lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators,
    lem-nrqm-central-positive-scaling-spectral-measure,
    lem-nrqm-central-free-operator-differential-identification,
    def-projection-valued-measure,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-energy-observable-and-flow: physical-result
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-coulomb-transported-radial-endpoint-realization: mathematical-premise
  thm-nrqm-coulomb-laguerre-bound-energy-exhaustion: mathematical-premise
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
  thm-nrqm-coulomb-jost-volterra-solution: mathematical-premise
  thm-nrqm-coulomb-continuum-spectral-density: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators: mathematical-premise
  lem-nrqm-central-positive-scaling-spectral-measure: mathematical-premise
  lem-nrqm-central-free-operator-differential-identification: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of the declared one-centre Coulomb
  model with parameters hbar, m, kappa: the model's bound energies are exactly
  E_n = -m kappa^2/(2 hbar^2 n^2), the level n carrying an n^2-dimensional
  eigenspace spanned by the transported Laguerre solutions, the bound states
  forming a complete orthonormal family of the negative spectral subspace, and
  the nonnegative spectral subspace containing no eigenvectors and being
  infinite dimensional, so the bound states alone do not exhaust the model's
  state space. The item asserts no measured spectral line, no transition rate,
  no photon, no light-matter coupling and no empirical result, and it does not
  assert absolute continuity of the positive spectral subspace of the scaled
  model, which is recorded for the unscaled operator by the cited mathematics."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 10.4 printed pages 229-235 (Theorem 10.9: the bound states
        psi_(n,l,m), the eigenvalues E_n = -(gamma/(2n))^2 and the
        n^2-dimensional eigenspace) and Section 10.4 p. 233 (the non-terminating
        solution is not square integrable)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 8.1,
        printed pages 185-186 (the energy spectrum E = -Z^2 mu e^4/(2 n^2 (4 pi
        eps_0 hbar)^2), the n^2-fold degeneracy and the series limit) and
        Section 8.1.1, printed page 186 (the Lyman, Balmer and Paschen series as
        model consequences)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.3.1,
        printed pages 112-116 (the terminating-series argument, the spectrum
        (4.30), the Bohr radius (4.31), the n^2 degeneracy and the
        fine-structure exclusion)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the framework postulates P1, P2, P4 and P5 and the readings of the
declared one-centre Coulomb model
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (a)-(c) with
parameters $\hbar>0$, $m>0$ and coupling $\kappa>0$, its assigned energy
operator $H_{\kappa}$ with length scale $a_{\kappa}=\hbar^{2}/(m\kappa)$, and
the energy-observable content of
[[pthm-nrqm-central-coulomb-energy-observable-and-flow]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[def-nrqm-observables-framework-observable-and-outcome-law]],
[[def-nrqm-state-geometry-framework-state-space]]). Assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). For integer labels $n\ge1$, $0\le l\le n-1$, $-l\le\bar m\le l$
(the magnetic label $\bar m$ is distinct from the mass $m$), let
$\psi_{nl\bar m}$ be the regular bound solutions of
[[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]] and put
$\Psi_{nl\bar m}:=\psi_{nl\bar m}/\|\psi_{nl\bar m}\|$, and put
$$E_{n}:=-\frac{m\kappa^{2}}{2\hbar^{2}n^{2}}=-\frac{\hbar^{2}}{2ma_{\kappa}^{2}n^{2}}\qquad(n\ge1).$$
Then:

(a) for every label, $\Psi_{nl\bar m}\in D(H_{\kappa})$, $\|\Psi_{nl\bar m}\|=1$,
$H_{\kappa}\Psi_{nl\bar m}=E_{n}\Psi_{nl\bar m}$, and vectors with distinct labels are
orthogonal; the vectors $\Psi_{nl\bar m}$ of fixed $n$ span a subspace of dimension
$\sum_{l=0}^{n-1}(2l+1)=n^{2}$;

(b) the eigenvalues of $H_{\kappa}$ are exactly the numbers $E_{n}$, $n\ge1$;
the eigenspace of $H_{\kappa}$ at $E_{n}$ is exactly
$\operatorname{span}\{\Psi_{nl\bar m}:0\le l\le n-1,\ -l\le\bar m\le l\}$, so the model
assigns to the level $n$ the **model degeneracy** $n^{2}$; in particular
$H_{\kappa}$ has no eigenvalues in $[0,+\infty)$, whose spectral content is
entirely essential spectrum $[0,+\infty)$ in the sense of
[[pthm-nrqm-central-coulomb-energy-observable-and-flow]] (a);

(c) the family
$(\Psi_{nl\bar m})_{n\ge1,\,0\le l\le n-1,\,-l\le\bar m\le l}$ is a complete orthonormal
family of the negative spectral subspace
$E_{H_{\kappa}}((-\infty,0))L^{2}(\mathbb R^{3};\mathbb C)$: their closed
linear span is that subspace, whose unit vectors give exactly the pure
preparations with negative energy outcomes almost surely;

(d) the family is not complete in $L^{2}(\mathbb R^{3};\mathbb C)$: the
nonnegative spectral subspace $E_{H_{\kappa}}([0,+\infty))L^{2}(\mathbb R^{3};\mathbb C)$
is nonzero, indeed infinite dimensional, and every unit vector $\psi$ in it has
$\mu^{H_{\kappa}}_{\psi}(B)=0$ for every Borel $B\subseteq(-\infty,0)$, i.e.
strictly negative energy outcomes have probability zero in such a preparation;
consequently the bound states of the model do not exhaust its state space and
the model possesses continuum states which are not bound states;

(e) *Energy-law reading.* For every unit vector $\psi$ the restriction of the
energy outcome law to the negative half-line is the discrete law
$\sum_{n\ge1}w_{n}\delta_{E_{n}}$ with weights
$w_{n}:=\|E_{H_{\kappa}}(\{E_{n}\})\psi\|^{2}\ge0$ and
$\sum_{n\ge1}w_{n}=\|E_{H_{\kappa}}((-\infty,0))\psi\|^{2}\le1$; for
$\psi=\Psi_{nl\bar m}$ the whole law is the point mass $\delta_{E_{n}}$;

(f) *Scope.* The statement is conditional on P1, P2, P4, P5, the declared
Coulomb model and the cited mathematics. The values $E_{n}$ are model
parameters determined by $\hbar,m,\kappa$; no numerical value, no measured
line, no transition rate, no photon or light-matter coupling and no empirical
result is asserted. The absolute continuity of the positive spectral subspace
is recorded by the cited mathematics for the unscaled operator and is not
restated for the scaled model here.

## Facts & Assumptions


**Given:** The declared one-centre Coulomb model with $\hbar,m,\kappa>0$, $\gamma=2m\kappa/\hbar^{2}$, $c_{0}=\hbar^{2}/2m$, $C_{\gamma}=-\Delta-\gamma/|\cdot|$ on $H^{2}(\mathbb R^{3};\mathbb C)$ and $H_{\kappa}=c_{0}C_{\gamma}$; the bound solutions $\psi_{nl\bar m}$ and their normalisations $\Psi_{nl\bar m}$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] **The model's operator.** $H_{\kappa}$ is self-adjoint on $D(H_{\kappa})=H^{2}(\mathbb R^{3};\mathbb C)=D(C_{\gamma})$, acts by $H_{\kappa}f=-\frac{\hbar^{2}}{2m}\Delta_{w}f-\kappa f/|\cdot|$, has essential spectrum $[0,+\infty)$, and $H_{\kappa}=c_{0}C_{\gamma}$ with $c_{0}>0$ ([[def-nrqm-central-framework-coulomb-and-hydrogen-model]] clauses (b), (c), [[pthm-nrqm-central-coulomb-energy-observable-and-flow]] (a), [[lem-nrqm-central-free-operator-differential-identification]]).

[F2] **Exhausted negative spectrum of the unscaled operator.** The negative eigenvalues of $C_{\gamma}$ are exactly $-\gamma^{2}/(4n^{2})$, $n\ge1$, and each eigenfunction at a negative eigenvalue lies in the closed span of the transported regular solutions; the negative eigenvalues of each radial operator $A_{l}$ are exactly $-\gamma^{2}/(4n^{2})$ with $n\ge l+1$, each with one-dimensional eigenspace spanned by its regular solution; and for real $k>0$ the value $k^{2}$ is not an eigenvalue of $A_{l}$, while $0$ is not an eigenvalue of $A_{l}$ either ([[thm-nrqm-coulomb-laguerre-bound-energy-exhaustion]] clauses (b), (c), (d), [[thm-nrqm-coulomb-jost-volterra-solution]] clause (d), [[thm-nrqm-coulomb-continuum-spectral-density]] clause (d)).

[F3] **Bound states and negative spectral subspace of the unscaled operator.** Each $\psi_{nl\bar m}$ lies in $D(C_{\gamma})$ with $C_{\gamma}\psi_{nl\bar m}=-\frac{\gamma^{2}}{4n^{2}}\psi_{nl\bar m}$; vectors with distinct labels are pairwise orthogonal and the eigenspace at $-\gamma^{2}/(4n^{2})$ is exactly their span, of dimension $n^{2}$; after normalisation the family $(\psi_{nl\bar m}/\|\psi_{nl\bar m}\|)$ is a complete orthonormal family of $E_{C_{\gamma}}((-\infty,0))L^{2}(\mathbb R^{3};\mathbb C)$; and the nonnegative spectral subspace $E_{C_{\gamma}}([0,+\infty))L^{2}$ is nonzero, indeed infinite dimensional, so the family is not complete in $L^{2}$ ([[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]] clauses (a), (b), (c), [[thm-nrqm-coulomb-essential-spectrum]] (c)).

[F4] **Block identity.** Let $U$ be the polar unitary of the angular-radial reduction with coefficient vector $U\psi=(u_{l\bar m})$. For $\psi\in L^{2}(\mathbb R^{3};\mathbb C)$ one has $\psi\in D(C_{\gamma})$ if and only if $u_{l\bar m}\in D(A_{l})$ for every $(l,\bar m)$ and $\sum_{l,\bar m}(\|u_{l\bar m}\|^{2}+\|A_{l}u_{l\bar m}\|^{2})<\infty$; then $U(C_{\gamma}\psi)=(A_{l}u_{l\bar m})_{l,\bar m}$, equivalently $UC_{\gamma}U^{*}=\bigoplus_{(l,\bar m)}A_{l}$ on $K$ ([[thm-nrqm-coulomb-transported-radial-endpoint-realization]] clauses (a), (d), [[thm-nrqm-coulomb-angular-radial-unitary-reduction]] clauses (a), (b)).

[F5] **Positive scaling and PVM multiplicativity.** For $c_{0}>0$: $c_{0}C_{\gamma}$ is self-adjoint on $D(C_{\gamma})$, $\sigma(c_{0}C_{\gamma})=c_{0}\sigma(C_{\gamma})$, and $x\in D(C_{\gamma})$ with $C_{\gamma}x=\lambda x$ if and only if $x\in D(c_{0}C_{\gamma})$ with $(c_{0}C_{\gamma})x=(c_{0}\lambda)x$, with the same eigenspaces; moreover the spectral projection valued measures satisfy $E_{c_{0}C_{\gamma}}(B)=E_{C_{\gamma}}(c_{0}^{-1}B)$ for every Borel $B$, so in particular the negative and nonnegative spectral subspaces of $c_{0}C_{\gamma}$ and $C_{\gamma}$ coincide ([[lem-nrqm-potentials-positive-scaling-of-self-adjoint-operators]] clauses (a), (b), (d), [[lem-nrqm-central-positive-scaling-spectral-measure]] clause (c)). The spectral PVM additionally satisfies $E(B\cap C)=E(B)E(C)=E(C)E(B)$ for all Borel $B,C$, with $E(\varnothing)=0$ ([[def-projection-valued-measure]] clauses 2, 3).

[F6] **Outcome law and atoms.** For every preparation $\rho$ and Borel $B$ the energy outcome law is $\mu^{H_{\kappa}}_{\rho}(B)=\operatorname{tr}(\rho E_{H_{\kappa}}(B))$, for a unit vector it is $\|E_{H_{\kappa}}(B)\psi\|^{2}$, and $\mu^{H_{\kappa}}_{\psi}(\{\lambda\})=0$ unless $\lambda$ is an eigenvalue, in which case the value is the total weight of the eigenspace ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (b), (c), [[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]], [[pthm-nrqm-kinematics-spin-s-outcome-laws]] clause (b) for the position reading).

## Proof

**Proof technique:** direct; transport the spectral data of the unscaled Coulomb operator across the positive scaling $H_{\kappa}=c_{0}C_{\gamma}$, then read the framework's outcome law in the model.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Eigenpairs and degeneracy] By [F3] clause (a), $\psi_{nl\bar m}\in D(C_{\gamma})$ and $C_{\gamma}\psi_{nl\bar m}=-\frac{\gamma^{2}}{4n^{2}}\psi_{nl\bar m}$; by [F5] the eigenpair correspondence gives $\psi_{nl\bar m}\in D(H_{\kappa})$ and $H_{\kappa}\psi_{nl\bar m}=c_{0}\bigl(-\frac{\gamma^{2}}{4n^{2}}\bigr)\psi_{nl\bar m}$. With $c_{0}=\hbar^{2}/2m$ and $\gamma=2m\kappa/\hbar^{2}$ one computes $c_{0}\frac{\gamma^{2}}{4}=\frac{\hbar^{2}}{2m}\cdot\frac{4m^{2}\kappa^{2}}{4\hbar^{4}}=\frac{m\kappa^{2}}{2\hbar^{2}}$, so $H_{\kappa}\psi_{nl\bar m}=E_{n}\psi_{nl\bar m}$ with $E_{n}=-\frac{m\kappa^{2}}{2\hbar^{2}n^{2}}$; the identity $E_{n}=-\frac{\hbar^{2}}{2ma_{\kappa}^{2}n^{2}}$ follows from $a_{\kappa}=\hbar^{2}/(m\kappa)$. Normalising preserves the eigenpair relation and orthogonality is inherited from [F3] clause (a); the eigenspace of $C_{\gamma}$ at $-\gamma^{2}/(4n^{2})$ is exactly the span of the $\psi_{nl\bar m}$ with the stated labels, of dimension $n^{2}$, and by [F5] the eigenspaces of $H_{\kappa}$ at $E_{n}$ are the same, so the $\Psi_{nl\bar m}$ of fixed $n$ span exactly that eigenspace. This proves (a) and the eigenspace claim of (b). [given, F3, F5, algebra, F1]

1.2 [Completeness in the negative subspace] By [F3] clause (b) the family $(\Psi_{nl\bar m})$ is a complete orthonormal family of $E_{C_{\gamma}}((-\infty,0))L^{2}$; by [F5] the spectral projections satisfy $E_{H_{\kappa}}((-\infty,0))=E_{C_{\gamma}}(c_{0}^{-1}(-\infty,0))=E_{C_{\gamma}}((-\infty,0))$, so the same family is a complete orthonormal family of $E_{H_{\kappa}}((-\infty,0))L^{2}$. This is (c). [given, F3, F5]

2.1 [No nonnegative eigenvalue] Suppose $H_{\kappa}\psi=\lambda\psi$ with $\psi\ne0$ and $\lambda\ge0$; by [F5] this is equivalent to $C_{\gamma}\psi=(\lambda/c_{0})\psi$ with $\lambda/c_{0}\ge0$, and $\psi\in D(C_{\gamma})$. Write $U\psi=(u_{l\bar m})$; by the block identity [F4] one has $U\psi\in D(\bigoplus_{(l,\bar m)}A_{l})$ and $(A_{l}u_{l\bar m})_{l,\bar m}=U C_{\gamma}U^{*}U\psi=(\lambda/c_{0})U\psi$, so $A_{l}u_{l\bar m}=(\lambda/c_{0})u_{l\bar m}$ for every $(l,\bar m)$. Since $U$ is unitary and $\psi\ne0$, some component $u_{l_{0}\bar m_{0}}$ is nonzero, and $\lambda/c_{0}\ge0$ is an eigenvalue of $A_{l_{0}}$, contradicting [F2] (no eigenvalue $k^{2}>0$, and no eigenvalue $0$). Hence every eigenvalue of $H_{\kappa}$ is negative; by [F2] clauses (b) and (d) together with [F5] the negative eigenvalues of $H_{\kappa}$ are exactly the numbers $c_{0}\,(-\frac{\gamma^{2}}{4n^{2}})=-\frac{\gamma^{2}c_{0}}{4n^{2}}$, $n\ge1$, with the eigenspaces of step 1.1. This completes (b). [step 1.1, F2, F4, F5]

2.2 [Non-exhaustion and the continuum] By [F3] clause (c) the nonnegative spectral subspace of $C_{\gamma}$ is nonzero, indeed infinite dimensional; by [F5] at $B=[0,+\infty)$, $E_{H_{\kappa}}([0,+\infty))=E_{C_{\gamma}}([0,+\infty))$, so the nonnegative spectral subspace of $H_{\kappa}$ is nonzero and infinite dimensional, and by step 1.2 the closed span of the bound states, namely the negative spectral subspace, is a proper subspace of $L^{2}(\mathbb R^{3};\mathbb C)$; this is the non-completeness in (d). For a unit vector $\psi$ in the nonnegative subspace the outcome law obeys $\mu^{H_{\kappa}}_{\psi}(B)=\|E_{H_{\kappa}}(B)\psi\|^{2}$ by [F6], and for Borel $B\subseteq(-\infty,0)$ the multiplicativity in [F5] with $B\cap[0,+\infty)=\varnothing$ gives $E_{H_{\kappa}}(B)\psi=E_{H_{\kappa}}(B)E_{H_{\kappa}}([0,+\infty))\psi=E_{H_{\kappa}}(\varnothing)\psi=0$, so strictly negative energy outcomes have probability zero. [step 1.2, F3, F5, F6, algebra]

2.3 [Energy-law reading] For a unit $\psi$, [F6] gives the sigma-additive law $\mu^{H_{\kappa}}_{\psi}$ with $\mu^{H_{\kappa}}_{\psi}(B)=\|E_{H_{\kappa}}(B)\psi\|^{2}$; put $N:=\{E_n:n\ge1\}$ and $D:=(-\infty,0)\setminus N$. By step 1.1 and [F6], each $\Psi_{nl\bar m}$ lies in the range of $E_{H_{\kappa}}(\{E_n\})$; multiplicativity [F5] therefore gives $E_{H_{\kappa}}(D)\Psi_{nl\bar m}=0$. Step 1.2 says these vectors have dense linear span in the negative spectral subspace, so boundedness of the projection makes it vanish on that entire subspace. Since $D\subseteq(-\infty,0)$, [F5] also gives $E_{H_{\kappa}}(D)=E_{H_{\kappa}}(D)E_{H_{\kappa}}((-\infty,0))=0$. Thus the restricted law is carried by $N$, and [F6]'s atom rule gives $\mu^{H_{\kappa}}_{\psi}(\{E_{n}\})=\|E_{H_{\kappa}}(\{E_{n}\})\psi\|^{2}=w_{n}$, so additivity gives $\sum_{n}w_{n}=\mu^{H_{\kappa}}_{\psi}((-\infty,0))=\|E_{H_{\kappa}}((-\infty,0))\psi\|^{2}\le1$. For $\psi=\Psi_{nl\bar m}$ step 1.1 gives $\mu^{H_{\kappa}}_{\psi}=\delta_{E_{n}}$. This is (e). [step 1.1, step 1.2, F5, F6]

3.1 [Assembly and scope] Steps 1.1 and 2.1 give (a) and (b), step 1.2 gives (c), step 2.2 gives (d) and step 2.3 gives (e); only the declared model, P1, P2, P4, P5 and the cited mathematics were used, so no measured line, transition rate, photon coupling or empirical result is asserted, and the absolute continuity of the positive spectral subspace is not claimed for the scaled model. This completes the proof with the recorded scope (f). [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **The degeneracy is a property of this model.** The independence of $E_{n}$
  from $l$ within the range $0\le l\le n-1$ and the resulting $n^{2}$-fold
  degeneracy are properties of the Coulomb spectral problem computed here; the
  page asserts no symmetry explanation of the degeneracy, and the later
  angular-momentum and approximation pages are the destinations for any such
  structural account.
- **Size of the degeneracy.** The count $\sum_{l=0}^{n-1}(2l+1)=n^{2}$ uses
  only the multiplicity $2l+1$ of each fixed-$l$ eigenspace, which is inherited
  from the $(2l+1)$-dimensional span of spherical harmonics in the cited
  mathematics; no additional multiplicity from the angular momentum coupling
  is claimed on this page.
