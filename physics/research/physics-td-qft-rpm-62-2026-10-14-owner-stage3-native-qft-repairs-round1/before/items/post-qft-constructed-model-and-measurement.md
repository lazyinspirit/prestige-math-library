---
id: post-qft-constructed-model-and-measurement
kind: postulate
domain: physics
library: physics
title: "Physical interpretation of a supplied constructed quantum model"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 2
deps:
  - def-qft-framework-units
  - def-qft-finite-bounded-kraus-instrument
  - def-countable-choice
  - lem-qft-finite-instrument-normalization
  - def-projection-valued-measure
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
dependency_roles:
  def-qft-framework-units: formulation-prerequisite
  def-qft-finite-bounded-kraus-instrument: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qft-finite-instrument-normalization: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
physical_scope: "Adopts state, finite instrument and actual constructed unitary dynamics only; supplies no continuum representation or convergence."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. Watrous, The Theory of Quantum Information (Cambridge University Press, 2018; author-hosted prepublication manuscript), §2.3.1 pp. 100–102 and §2.3.2 pp. 111–113"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf"
    - title: "R. B. Griffiths, Notes on Quantum Information Theory, version 30 Jan. 2004, complete §7, printed pp. 1–3, equations (7.2)–(7.9)"
      url: "https://www.andrew.cmu.edu/course/33-658/qit7.pdf"
---

## Postulate

Adopt the following physical reading only for an explicitly selected model
whose mathematical data have actually been constructed. Let $\mathscr H$ be a
nonzero complex Hilbert space, let $\rho_t$ be the model's density operator at
a time $t$ at which a measurement is made, and let
$\{M_{a,r}:r=1,\ldots,q_a\}_{a=1}^m$ be a supplied normalized finite bounded
Kraus instrument on $\mathscr H$ in the exact sense of
[[def-qft-finite-bounded-kraus-instrument]]. Assume the Axiom of Countable
Choice $\mathrm{AC}_\omega$ when using the normalization result of
[[lem-qft-finite-instrument-normalization]]. Its hypotheses include that
$\rho_t$ is a density operator and that the instrument really satisfies
$\sum_{a,r}M_{a,r}^*M_{a,r}=I_{\mathscr H}$; the supplier's result is a draft
with a complete conditional proof, not an independent approval or an
apparatus-realization theorem.

Put

$$E_a:=\sum_rM_{a,r}^*M_{a,r},\qquad \mathcal J_a(X):=\sum_rM_{a,r}XM_{a,r}^*.$$

As the **Born interpretation postulate** for this selected model, read

$$p_a(t):=\operatorname{tr}(\mathcal J_a(\rho_t)) =\operatorname{tr}(\rho_tE_a)$$

as the model probability for outcome $a$. The mathematical supplier proves
$p_a(t)\in[0,1]$ and $\sum_{a=1}^mp_a(t)=1$ under the hypotheses just
listed. When $p_a(t)>0$, adopt
$\mathcal J_a(\rho_t)/p_a(t)$ as the model's conditional state after outcome
$a$; at zero probability no normalized update is assigned. These are
model-level probability assignments, not observations.

If the selected construction supplies a self-adjoint observable in the sense
of [[def-symmetric-self-adjoint-and-essentially-self-adjoint]] and its
spectral projection-valued measure as in
[[def-projection-valued-measure]], a declared finite Borel partition may be
used only after its projections have been constructed and verified as a
finite projective instrument. In that case the projections are the single
Kraus operators for their outcomes. A supplied bounded effect is read as an
outcome effect only as part of a supplied normalized instrument; this item
does not construct square roots, a spectral measure, or an instrument from an
arbitrary formal observable.

If a selected construction supplies a self-adjoint Hamiltonian
$\widehat H:D(\widehat H)\subseteq\mathscr H\to\mathscr H$ in the sense of
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]], and an evolution
family $U(t):\mathscr H\to\mathscr H$ whose maps are surjective
complex-linear and preserve the Hilbert inner product, as specified in
[[def-qft-framework-units]], for $t\in I\subseteq\mathbb R$ (with $t$ in
seconds), adopt the Schrödinger convention
$U(t)=\exp(-it\widehat H/\hbar)$ and
$\rho_t=U(t)\rho_0U(t)^*$ when that construction establishes that $\rho_t$
is a density operator. The unitary convention and SI dimensions are those of
[[def-qft-framework-units]], where $U(t)^*:=U(t)^{-1}$ and $\widehat H$ has
unit joules. For any supplied complex-linear operator
$O:D(O)\to\mathscr H$ with specified linear domain $D(O)\subseteq\mathscr H$,
define its Heisenberg conjugate by
$$O_H(t):=U(t)^*O\,U(t),\quad D(O_H(t)):=\{\xi\in\mathscr H:U(t)\xi\in D(O)\}.$$
The model supplies these domains and the evolution. This postulate neither
constructs the Hamiltonian, evolution family, state, or field representation,
nor any model-specific operator domain.

The model declaration identifies the selected species, field normalization,
regulator, preparation and measurement data using
[[def-qft-framework-units]]. It does not assert that every classical action
has a quantization, that every formal state is positive, or that any cutoff
can be removed. In particular it supplies no interacting continuum
four-dimensional QED Hilbert space, scattering operator, asymptotic
completeness, LSZ limit, or nonperturbative convergence. A formal coefficient
is not an exact probability without an additional controlled approximation
map and a constructed model. Agreement with reported data would test the
selected approximation and empirical inputs; it would not prove this
postulate or the model. No reported data are asserted here.
