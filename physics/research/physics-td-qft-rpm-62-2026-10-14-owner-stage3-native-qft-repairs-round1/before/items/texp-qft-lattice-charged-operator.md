---
id: texp-qft-lattice-charged-operator
kind: thought-experiment
domain: physics
library: physics
title: Boundary-flux commutation obstructs charged regulator insertions
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 9
deps:
  - pthm-qft-lattice-gauge-ward
  - lem-qft-qed-gauss-localization
  - def-axiom-of-choice
dependency_roles:
  pthm-qft-lattice-gauge-ward: physical-result
  lem-qft-qed-gauss-localization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
physical_scope: "Hypothetical charge-changing insertion in the fixed finite-graph rotor/CAR regulator, conditional on physical-sector preservation, common electric domains and commutation with every boundary electric operator. No continuum-locality or all-charged-sector theorem is asserted."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979), §VI.C"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review; printed pp. 694–696, charged sources, Gauss law and electric-flux dressing."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020), §2.2"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text HTML; physical Hilbert space and local Gauss constraints. The source's worked staggered model is not substituted for the finite-graph carrier."
empirical_premises: []
---

## Statement

Consider the idealized attempt to insert a nonzero charge in a region $R$ of the
finite-graph model of [[pthm-qft-lattice-gauge-ward]]. Let
$\partial R=\{e\in E:e\text{ has exactly one endpoint in }R\}$, with
$\epsilon(e,R)=1$ for links directed out of $R$ and $-1$ for links directed
into $R$, and put
$$Q_R=\sum_{x\in R}(n_x-b_xI).$$
On
$$\mathcal D_R=\mathcal H_{\rm phys}\cap \bigcap_{e\in\partial R}D(E_e),$$
suppose a bounded operator $O$ preserves $\mathcal H_{\rm phys}$, maps each
boundary domain $D(E_e)$ into itself, and satisfies
$E_eO\phi=OE_e\phi$ for all $\phi\in D(E_e)$ and all
$e\in\partial R$. Then
$$[Q_R,O]\psi=0\qquad(\psi\in\mathcal D_R).$$
If, in addition, $[Q_R,O]\psi=qO\psi$ on $\mathcal D_R$ for a fixed
$q\ne0$, then $O\psi=0$ for every $\psi\in\mathcal D_R$. Thus a
charge-changing insertion cannot act nontrivially on this domain while
preserving the physical sector and commuting with every boundary electric
operator. This is a fixed-regulator statement; it does not claim a continuum
charged-sector or general locality theorem.

## Facts & Assumptions

**Given:** Full AC, the exact finite-graph physical sector and regional Gauss identity, and the boundedness/domain hypotheses on $O$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. It is carried because the finite-regulator physical evolution and Ward result used below assume full AC.

[F1] [[pthm-qft-lattice-gauge-ward]]: the adopted finite model has a nonzero physical sector, the stated exact Gauss/Ward identities, and the current domain-qualified regional charge/flux conclusion. That theorem is conditional on full AC and current draft mathematical suppliers.

[F2] [[lem-qft-qed-gauss-localization]]: on $\mathcal H_{\rm phys}\cap\bigcap_{e\in\partial R}D(E_e)$, a bounded operator that preserves the physical sector, preserves each boundary electric domain, and commutes with each boundary $E_e$ has $[Q_R,O]\psi=0$. The current carrier is a draft with a complete conditional proof and a Step-1 ready record.

## Proof

**Given:** [A1], [F1], [F2], $R\subseteq V$, and the domain hypotheses in the Statement.

1.1 By [F1], the physical sector and the regional charge $Q_R$ are those of the exact finite regulator. The supplier [F2] gives the coefficient identity $Q_R\psi=\sum_{e\in\partial R}\epsilon(e,R)E_e\psi$ on $\mathcal D_R$: summing the Gauss multipliers over $x\in R$ cancels every link with both endpoints in $R$, leaving only the signed boundary links. [A1, F1, F2, given, algebra]

2.1 The hypotheses on $O$ match [F2], so $O\psi$ remains physical and in all
boundary electric domains. Therefore
$$Q_RO\psi=\sum_{e\in\partial R}\epsilon(e,R)E_eO\psi =O\sum_{e\in\partial R}\epsilon(e,R)E_e\psi =OQ_R\psi,$$
which proves $[Q_R,O]\psi=0$ on $\mathcal D_R$. [F2, step 1.1, given, algebra]

3.1 If also $[Q_R,O]\psi=qO\psi$ with fixed $q\ne0$, step 2.1 gives $qO\psi=0$ for every $\psi\in\mathcal D_R$. Division by the nonzero scalar $q$ yields $O\psi=0$ there; no conclusion about vectors outside this domain is needed. [step 2.1, given, algebra] ∎
