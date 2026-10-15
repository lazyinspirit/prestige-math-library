---
id: pthm-qft-lattice-gauge-ward
kind: physics-theorem
domain: physics
library: physics
title: Exact Ward/Gauss predictions in adopted regulator
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 8
deps:
  - post-qft-compact-lattice-gauge-model
  - pthm-qft-lattice-gauge-existence
  - lem-qft-lattice-ward-identities
  - lem-qft-lattice-ward-contact
  - lem-qft-qed-gauss-localization
  - def-axiom-of-choice
dependency_roles:
  post-qft-compact-lattice-gauge-model: physical-assumption
  pthm-qft-lattice-gauge-existence: physical-result
  lem-qft-lattice-ward-identities: mathematical-premise
  lem-qft-lattice-ward-contact: mathematical-premise
  lem-qft-qed-gauss-localization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
physical_scope: "Exact finite-graph selection, infinitesimal, contact and regional charge/flux deductions under the adopted rotor/CAR model, full AC and explicit operator domains, plus a separate conditional continuum implication. It constructs no continuum representation and uses no empirical premise."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979), §VI.C"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review; printed pp. 694–696, local gauge generator, Gauss law, physical states and charge/flux dressing."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020), §§2.1–2.2"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text HTML; compact-link and physical-Gauss-sector conventions. Exact conditional operator and domain conclusions are supplied locally."
empirical_premises: []
---

## Statement

Assume the finite-graph model of
[[post-qft-compact-lattice-gauge-model]] and the Axiom of Choice. Write
$\mathcal U(t)=e^{-itH/\hbar}$ for the unitary group of
[[pthm-qft-lattice-gauge-existence]], and let
$\mathcal H_{\rm phys}=\bigcap_x\ker G_x$ be its nonzero physical sector.

For a bounded operator $O$ on $\mathcal H_{\rm kin}$, define its gauge charge
$q=(q_x)_{x\in V}\in\mathbb Z^V$ by
$$U(\alpha)OU(\alpha)^\dagger=e^{i\sum_x q_x\alpha_x}O \quad(\alpha\in\mathbb T^V).$$
For each normalized $\psi\in\mathcal H_{\rm phys}$,
$\langle\psi,O\psi\rangle=0$ when $q\ne0$. A finite product of bounded
gauge-charge eigenoperators has zero expectation whenever the sum of its
charge vectors is nonzero. If $O$ maps $D(G_x)$ into itself and
$[G_x,O]$ extends to a bounded operator, then
$\langle\psi,[G_x,O]\psi\rangle=0$. These statements also hold for
$O(t)=\mathcal U(t)^\dagger O\mathcal U(t)$; the finite-regulator evolution
preserves gauge charge and the domains $D(G_x)$.

For a fixed vertex $x$, distinct real insertion times $t_1,\ldots,t_n$ with
$n\ge1$, bounded operators $O_j$ that map $D(G_x)$ into itself, and bounded
commutators $[G_x,O_j]$, define ordinary time ordering by placing the factor
with larger time to the left. With
$O_j(t_j)=\mathcal U(t_j)^\dagger O_j\mathcal U(t_j)$ and
$G_x(t)=\mathcal U(t)^\dagger G_x\mathcal U(t)$, the following identity holds
as a distribution in $t$ between normalized physical/domain vectors:
$$\frac{d}{dt}\left\langle\psi,\mathcal T\!\left[G_x(t)\prod_{j=1}^nO_j(t_j)\right]\psi\right\rangle =\sum_{j=1}^n\delta(t-t_j) \left\langle\psi,\mathcal T\!\left([G_x,O_j(t_j)]\prod_{i\ne j}O_i(t_i)\right)\psi\right\rangle.$$
The products are evaluated on the stated common domains and $G_x$ is
bosonic, so no grading sign is inserted.

For a region $R\subseteq V$, define its boundary links by
$$\partial R=\{e\in E:\text{exactly one endpoint of }e\text{ lies in }R\},$$
with $\epsilon(e,R)=1$ for a link directed out of $R$ and $-1$ for a link
directed into $R$. On
$\mathcal D_R=\mathcal H_{\rm phys}\cap\bigcap_{e\in\partial R}D(E_e)$, put
$Q_R^{\rm lat}=\sum_{x\in R}(n_x-b_xI)$. If bounded $O$ preserves
$\mathcal H_{\rm phys}$, maps each boundary $D(E_e)$ into itself, and
$E_eO\phi=OE_e\phi$ for every $\phi\in D(E_e)$ and every $e\in\partial R$,
then $[Q_R^{\rm lat},O]\psi=0$ for every $\psi\in\mathcal D_R$. Consequently,
an operator that changes $Q_R^{\rm lat}$ by a fixed nonzero charge cannot
satisfy all these preservation and boundary-commutation hypotheses while
acting nontrivially on that domain.

There is also a separate conditional continuum implication; it does not assert
that a continuum representation exists. Let $\mathcal H_c$ be a Hilbert space
and $D\subseteq\mathcal H_c$ a common invariant dense domain. For real
$f,g_k\in C_c^\infty(\mathbb R^3)$, let
$\rho(f),E_k(g_k):D\to D$ be linear assignments and put
$E(\mathbf g)=\sum_{k=1}^3E_k(g_k)$ for real
$\mathbf g=(g_1,g_2,g_3)\in C_c^\infty(\mathbb R^3;\mathbb R^3)$. Fix
$\varepsilon_0>0$ and assume
$$\rho(f)=-\varepsilon_0\sum_{k=1}^3E_k(\partial_k f) \quad(f\in C_c^\infty(\mathbb R^3)).$$
Let $K\subset\mathbb R^3$ be compact. Suppose bounded $O$ maps $D$ into
itself and $E(\mathbf g)O\psi=OE(\mathbf g)\psi$ for every $\psi\in D$ whenever
$\operatorname{supp}\mathbf g$ is disjoint from $K$. For integers
$R\ge R_0$, suppose real $\chi_R\in C_c^\infty(\mathbb R^3)$ equals $1$ on a
neighborhood of $K$, $\operatorname{supp}\nabla\chi_R$ is disjoint from $K$,
and, with $Q_R^{\rm cont}:=\rho(\chi_R)
=-\varepsilon_0E(\nabla\chi_R)$, there is $Q:D\to D$ such that
$Q_R^{\rm cont}\psi\to Q\psi$ and
$Q_R^{\rm cont}O\psi\to QO\psi$ for every $\psi\in D$. Then
$[Q,O]\psi=0$ on $D$. If also $[Q,O]\psi=qO\psi$ on $D$ for a fixed
$q\ne0$, boundedness of $O$ implies $O=0$ on $\mathcal H_c$. This clause is
conditional on the displayed common-domain, Gauss, locality and limit
hypotheses only.

## Facts & Assumptions

**Given:** The adopted finite-graph model, full AC, the nonzero physical
sector and its unitary evolution, the exact finite-regulator Ward suppliers,
and, separately, the continuum hypotheses in the Statement.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice
function. It supplies the choice premise used by the finite-graph evolution
and Ward suppliers.

[F1] [[pthm-qft-lattice-gauge-existence]]: under the adopted fixed finite
model and full AC, $\mathcal H_{\rm phys}$ is nonzero and the exact
self-adjoint Hamiltonian generates a strongly continuous unitary group
preserving that sector. This is the preceding item on this page and is
conditional on its stated draft mathematical inputs.

[L1] [[lem-qft-lattice-ward-identities]]: for bounded gauge-charge operators,
physical-state expectations vanish at nonzero total charge; under the stated
$D(G_x)$ and bounded-commutator hypotheses the infinitesimal matrix element
vanishes; the exact evolution preserves charge and those domains. The current
carrier is draft with a complete conditional proof and a Step-1 ready record,
not independent proof acceptance.

[L2] [[lem-qft-lattice-ward-contact]]: for pairwise distinct times and
domain-preserving bounded insertions with bounded $G_x$ commutators, the
time-ordered contact identity holds distributionally; the current carrier is
a draft with a complete conditional proof and a Step-1 ready record.

[L3] [[lem-qft-qed-gauss-localization]]: on the finite graph, its Proof step 1.1 establishes that regional charge
equals boundary electric flux on the common physical/electric domain, and a
bounded physical-sector-preserving operator commuting with boundary electric
operators has zero regional-charge commutator. Its separate continuum clause
requires exactly the common-domain, Gauss, locality and convergence assumptions
listed in the Statement. This current draft carrier has a complete conditional
proof and a Step-1 ready record.

## Proof

**Given:** [A1], [F1], [L1]–[L3], and the separate continuum assumptions in the
Statement.

1.1 By [F1], under the adopted model and full AC the physical sector is a
nonzero Hilbert subspace and $\mathcal U(t)$ is its exact unitary evolution.
Thus the physical vectors and time-evolved insertions in the finite clauses
are those of the declared regulator, not an assumed continuum state space.
[A1, F1, given]

1.2 For any normalized physical $\psi$ and gauge-charge eigenoperator with
$q\ne0$, the gauge transformations fix $\psi$ while multiplying the operator
by its charge character. Choosing a vertex $x$ with $q_x\ne0$ and
$\alpha_x=\pi/q_x$ makes that character $-1$, so its expectation must vanish.
For a finite product, inserting $U(\alpha)^\dagger U(\alpha)=I$ between
factors adds their charges; the same argument applies if their total charge
is nonzero. The exact gauge transformation, domain and evolution hypotheses
are those in [L1], so the finite selection and infinitesimal identities apply
also to the stated $O(t)$. [A1, L1, given, algebra]

1.3 The insertion-time and domain hypotheses in the Statement match [L2].
Since $G_x$ is gauge invariant under the exact evolution, $G_x(t)=G_x$; between
successive distinct $t_j$ the ordinary time-ordered product is constant, and
at $t_j$ its jump is the same ordered product with $G_xO_j(t_j)-O_j(t_j)G_x$
in place of the adjacent factors. The distributional derivative of a
piecewise constant function is the sum of its jumps times
$\delta(t-t_j)$, which gives the displayed contact relation. [L2, given, algebra]

1.4 On the finite graph, [L3] and its region flux input give
$Q_R^{\rm lat}\psi=\sum_{e\in\partial R}\epsilon(e,R)E_e\psi$ for
$\psi\in\mathcal D_R$. If $R=\varnothing$, both the regional charge and
boundary sum are zero. For nonempty $R$, the stated preservation,
common-domain and boundary commutation assumptions give
$Q_R^{\rm lat}O\psi=\sum_e\epsilon(e,R)E_eO\psi
=O\sum_e\epsilon(e,R)E_e\psi=OQ_R^{\rm lat}\psi$.
Thus $[Q_R^{\rm lat},O]\psi=0$. If the same commutator equals
$qO\psi$ with $q\ne0$, then $O\psi=0$ for every vector in this common domain.
This excludes only nontrivial action there; it does not infer that $O$ is zero
on the full finite Hilbert space. [L3, given, algebra]

2.1 For the separate continuum clause, the support of $\nabla\chi_R$ is
disjoint from $K$, so the assumed locality gives
$E(\nabla\chi_R)O\psi=OE(\nabla\chi_R)\psi$. The smeared Gauss identity yields
$Q_R^{\rm cont}O\psi=OQ_R^{\rm cont}\psi$. Taking the two stated limits and
using boundedness of $O$ gives $QO\psi=OQ\psi$, hence $[Q,O]\psi=0$ on $D$.
If also $[Q,O]\psi=qO\psi$ with $q\ne0$, then $O$ vanishes on dense $D$ and,
being bounded, vanishes on all of $\mathcal H_c$. No existence of such a
continuum model is inferred. [L3, given, algebra] ∎
