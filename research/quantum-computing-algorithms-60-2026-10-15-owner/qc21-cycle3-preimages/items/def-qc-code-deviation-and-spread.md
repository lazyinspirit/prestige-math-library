---
id: def-qc-code-deviation-and-spread
kind: definition
title: "Code Deviation and Fault Spread"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-qc-local-operator-support-and-weight
  - def-qc-exact-recovery-of-a-quantum-code
dependency_level: 7
verification:
  precheck: n/a
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction"
      url: "https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf"
---

## Definition

Consider one block of $m$ tensor factors $H_1\otimes\cdots\otimes H_m$, its code subspace $Q$, and an arbitrary finite reference system $R$. For an integer $s\ge0$, let $\mathcal E_s$ be the complex linear span of all operators on the block supported on at most $s$ physical coordinates, with support and weight as in [[def-qc-local-operator-support-and-weight]].

A density operator $\rho$ on the block and $R$ is $s$-deviated from a code-supported density operator $\sigma$ if there is a CPTP map $\mathcal N$ on the block with a finite Kraus family $K_1,\ldots,K_t\in\mathcal E_s$ such that $\rho=(\mathcal N\otimes\operatorname{id}_R)(\sigma)=\sum_{j=1}^t(K_j\otimes I_R)\sigma(K_j^\dagger\otimes I_R)$ and $\sum_{j=1}^tK_j^\dagger K_j=I$.
Here $\sigma$ is **code-supported** when its joint support is contained in $Q\otimes R$. The reference factor is retained in the identity above. Equality of reduced states outside a coordinate set is not the definition of deviation here.

For a finite family of live blocks indexed by $B$, use the joint error space $\mathcal E_s^{B}:=\operatorname{span}\{\bigotimes_{b\in B}A_b: A_b\text{ is supported on at most }s\text{ coordinates of block }b\}$. Joint $s$-deviation means the same Kraus formula with a single CPTP map on all live blocks, every Kraus operator in $\mathcal E_s^B$, and identity on the external reference alone. The ideal joint state is supported in $\bigotimes_{b\in B}Q_b\otimes R$. This includes the original one-block definition when $|B|=1$. The joint error map need not factor across blocks: a faulty multi-block gate can correlate their errors. Other live data blocks are part of the data system, not part of the unchanged external reference. Statements about deviation per block in a multi-block computation use this joint convention.

For an integer $\ell\ge1$, **literal support-propagation spread** applies to a specified unitary circuit segment: conjugating a fault operator supported on $S$ through the remaining fault-free unitary gates produces an operator supported on at most $\ell|S|$ output coordinates per block. For several faults, expand the finite Kraus families and take the union of their propagated supports. This gives the sum of the individual support bounds. The bound must account for all input blocks of a multi-block gate.

For a correcting, preparing or measuring gadget, an **effective spread budget** is instead part of an explicit input-sector/output-sector contract. The gadget declares its admitted joint error sectors, allowed fault supports, ideal logical channel or instrument, and joint residual-error sector for each allowed fault count. The required identities compare its decoded output with that ideal logical channel or instrument on every admitted input, with an arbitrary finite external reference. Measurement identities are identities of the subnormalized branch maps, not equations obtained by ignoring their probabilities. Any auxiliary fault memory is retained in the description of the faulty maps and may change there; it is distinct from the untouched external reference, and nonfaulty locations leave that memory alone. An identity that retains fault memory must specify its output memory action rather than silently identify it with the reference identity.

The numerical computation and correction budgets needed for sparse induction are explicitly imposed in the separately stated proper-code gadget contract; the word spread alone supplies none of those identities. In particular, incoming-error propagation and the full noisy correction action must be checked. Zero-fault recovery on arbitrary inputs remains a separate requirement. No global equation moving arbitrary input faults through a recovery channel on its whole input space is asserted.
