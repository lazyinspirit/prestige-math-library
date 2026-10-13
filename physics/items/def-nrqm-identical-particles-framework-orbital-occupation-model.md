---
id: def-nrqm-identical-particles-framework-orbital-occupation-model
aliases: [ nrqm-identical-particles-framework-orbital-occupation-model ]
kind: definition
domain: physics
title: "The declared finite-mode model and its occupation readouts"
status: published
origin: pipeline
dependency_level: 10
deps:
  [
    def-nrqm-identical-particles-framework-species-sectors-and-preparations,
    thm-nrqm-identical-particles-occupation-number-basis,
    thm-nrqm-identical-particles-finite-mode-occupation-counts,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-framework-quantities-and-units,
    def-hilbert-space,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  thm-nrqm-identical-particles-occupation-number-basis: mathematical-premise
  thm-nrqm-identical-particles-finite-mode-occupation-counts: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared finite-mode occupation model of an
  identical-particle sector: a declared species sector, a finite declared
  orthonormal mode family, the occupation readouts and their joint outcome law,
  and the total-occupation identity. The finite mode family is a declared
  idealization of the model, its identification with any laboratory mode set is
  a tested physical identification with uncertainty, and the definition asserts
  no measured count, no dynamics and no empirical result."
sources:
  references:
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Chapter 1 Sections 1.2-1.3 pp. 5-9: occupation-number states,
        mode occupations and the number operator"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 10.1
        printed pages 226-230 (PDF pages 234-238): single-particle states of a
        species, antisymmetric pair states and the exclusion rule"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Adopted readings.** Adopt a declared species sector in the vocabulary of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]],
the observable and probability postulate
[[post-nrqm-framework-observable-and-probability]] (P2) in the reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]], and the
quantities and units of [[def-nrqm-framework-quantities-and-units]]. Assume
the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). The latter is inherited
from the general spectral-PVM construction in P2 and clause (b) of the
observable definition used in clause (c) below; the finite joint-eigenspace
decomposition in clause (d) requires no additional choice.

**(b) The declared finite-mode model.** Fix $d\ge1$, a finite-dimensional
complex Hilbert space $K$ of dimension $d$ ([[def-hilbert-space]]) with a
declared orthonormal basis $(f_1,\dots,f_d)$, the **declared modes** of the
model, and an integer $n\ge1$. The **declared finite-mode model** of the
species with these data is the declared species sector of clause (a) whose
one-particle space is $K$, together with its $n$-particle sector space
$\mathfrak H_n^\sigma=\operatorname{ran}P_\sigma^{(n)}\subseteq K^{\otimes n}$
and the declared sector preparations of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]]
clauses (c)-(d). The declaration is an idealization: it asserts that the model
confines the one-particle content to the $d$ declared modes. No claim is made
that a species has finitely many modes; whether the declared modes describe a
laboratory mode family is a tested identification with uncertainty under the
preparation and apparatus postulate P7, not a consequence of this definition.

**(c) The occupation readouts.** For $j\in\{1,\dots,d\}$ let
$$N_j:K^{\otimes n}\to K^{\otimes n},\qquad N_jx:=\sum_{i\in\{1,\dots,d\}^n}|i|_j\,\langle x,f_{i_1}\otimes\cdots\otimes f_{i_n}\rangle\,f_{i_1}\otimes\cdots\otimes f_{i_n},\qquad |i|_j:=\#\{k:i_k=j\},$$
be the occupation operator of
[[thm-nrqm-identical-particles-occupation-number-basis]] clause (d) for the
basis $(f_1,\dots,f_d)$. By that clause $N_j$ is bounded and self-adjoint, the
$N_j$ commute pairwise, and $N_j$ preserves the sector $\mathfrak H_n^\sigma$;
the **sector occupation readout** is the restriction
$$N_j^\sigma:=N_j|_{\mathfrak H_n^\sigma},$$
a bounded self-adjoint endomorphism of $\mathfrak H_n^\sigma$ with spectrum
contained in $\{0,1,\dots,n\}$. The model reads $(N_j^\sigma,\text{particle
count})$ as an assigned sharp observable of the declared sector in the sense
of [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a):
its outcome law in a declared sector preparation $\rho$ is
$$\mu^{N_j^\sigma}_\rho(B)=\operatorname{tr}\bigl(\rho\, E_{N_j^\sigma}(B)\bigr),\qquad B\subseteq\mathbb R\ \text{Borel},$$
the reading of P2 clause (ii) through the observable definition.

**(d) The joint occupation readout.** The operators $N_1^\sigma,\dots,N_d^\sigma$
are simultaneously diagonalised by the sector bases of the cited theorem: the
Slater basis in the fermionic case and the family $(m_\lambda)$ in the
bosonic case, with joint eigenvalues $\mathbf 1_J$ and $\lambda$ respectively.
Write $\Lambda_n:=\{\lambda\in\mathbb N^d:\lambda_j\le n,\
\sum_j\lambda_j=n\}$ and, for $\lambda\in\Lambda_n$, let $P_\lambda$ be the
orthogonal projection of $\mathfrak H_n^\sigma$ onto the joint eigenspace of
$(N_1^\sigma,\dots,N_d^\sigma)$ for the eigenvalue vector $\lambda$; the cited
theorem exhibits a line $\mathbb C m_\lambda$ for every bosonic
$\lambda\in\Lambda_n$. In the fermionic sector there is a line
$\mathbb C f_J^\wedge$ exactly when $\lambda=\mathbf 1_J$ for an
$n$-element subset $J$; if any entry of $\lambda$ is at least $2$, the joint
eigenspace is $\{0\}$ and $P_\lambda=0$. Thus the $P_\lambda$, including
these zero projections, are mutually orthogonal, their finite sum is the
identity of the sector, and $N_j^\sigma=\sum_{\lambda\in\Lambda_n}
\lambda_jP_\lambda$. The model reads the **joint occupation readout** through
the finite family $(P_\lambda)_{\lambda\in\Lambda_n}$: the joint law in a
declared sector preparation $\rho$ is
$$\mu^{N}_\rho(\lambda):=\operatorname{tr}(\rho P_\lambda)\qquad (\lambda\in\Lambda_n),$$
and the marginal law of $N_j^\sigma$ is recovered by
$\mu^{N_j^\sigma}_\rho(B)=\sum_{\lambda:\lambda_j\in B}\mu^{N}_\rho(\lambda)$,
because the eigenvalue decomposition of $N_j^\sigma$ groups the $P_\lambda$
by the value $\lambda_j$.

**(e) Total occupation.** By clause (d) of the cited theorem,
$\sum_{j=1}^{d}N_j^\sigma=n\,\mathrm{id}_{\mathfrak H_n^\sigma}$; hence the
**total occupation** $\sum_jN_j^\sigma$ has the degenerate outcome law
$\delta_n$ in every declared sector preparation, and the joint law is
supported on $\Lambda_n$: the total number of particles read by the model is
$n$ with certainty.

**(f) Status and scope.** Clauses (a)-(e) fix the vocabulary of the model and
read the cited spectral mathematics through P2 under the choice hypotheses of
clause (a); they add no physical assumption beyond
the sector declaration and the finite-mode idealization of clause (b). The
occupation readouts are sector quantities in the sense of clause (e) of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]];
the exclusion and occupation-count consequences are proved on this page
([[pthm-nrqm-identical-particles-orbital-occupation-exclusion]] and
[[thm-nrqm-identical-particles-finite-mode-occupation-counts]]). No measured
count, no detector response, no dynamics and no empirical claim is made.

## Remarks

- **Mode versus particle.** $N_j^\sigma$ counts how many of the $n$ particles
  the model reads in the declared mode $f_j$; it is a collective readout of
  the sector, not a quantity of a labelled factor, and it is insensitive to
  which labels carry the occupied modes.
- **Choice hypotheses.** The tensor construction and the sector projections
  carry the Axiom of Countable Choice. The reading of the general spectral
  construction through P2 additionally carries the Axiom of Choice; both
  hypotheses are declared in clause (a). The finite spectral decomposition
  of clause (d) uses no further choice.
