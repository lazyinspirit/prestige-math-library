---
id: alg-qa-18-reversible-walk-finding
kind: algorithm
title: "MNRS finite reversible-walk finding"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-18-marked-set-and-stationary-mass
  - def-qa-17-absolute-spectral-gap
  - def-qa-17-szegedy-transition-isometry
  - def-qa-17-szegedy-walk
  - def-qa-17-walk-access-model
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - def-qc-projective-measurement
  - def-qc-elementary-circuit-resources
  - alg-qa-quantum-phase-estimation
  - def-qa-eigenphase-estimation-model
  - thm-qa-17-walk-access-cost
justified_by: []
axiom_use: "None; the procedure uses finite circuits and explicitly supplied forward, inverse, and controlled access."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Frédéric Magniez, Ashwin Nayak, Jérémie Roland, and Miklos Santha, Search via Quantum Walk, §§3.2–4"
      url: "https://arxiv.org/pdf/quant-ph/0608026"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 20, §20.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Definition

This is the finite-generation and execution procedure OP2 in `research/quantum-algorithms-planning/operational-contracts.md`, section “OP2 — MNRS approximate reflection and finite tolerant recursive finding”, transcribed with its declared constants and charged branches.

**Input.** A finite ergodic reversible row chain $(X,P,\pi)$ with $\pi_x>0$, a supplied positive lower absolute-gap bound $\delta_0$, a coherent marked predicate with promise $\pi(\mathcal M)=0$ or $\pi(\mathcal M)\ge\varepsilon_0>0$, a coherent marked-bit check of cost $C$, and a failure target $\rho\in(0,1)$. Write $|\sqrt\pi\rangle=\sum_{x\in X}\sqrt{\pi_x}|x\rangle$ and let $T|x\rangle=|x\rangle\sum_y\sqrt{P_{xy}}|y\rangle$ be the row isometry of [[def-qa-17-szegedy-transition-isometry]]. The supplied clean preparation $A_\pi$ maps its specified blank input to the **stationary edge state**
$$|\pi_{\rm edge}\rangle=T|\sqrt\pi\rangle=\sum_{x\in X}\sqrt{\pi_x}|x\rangle\sum_{y\in X}\sqrt{P_{xy}}|y\rangle,$$
returns all its work registers to their specified blank states, and has charged cost $S$. The row-access interface of [[def-qa-17-walk-access-model]] supplies the row-preparation unitary $V_P$, its inverse, controlled forward and inverse calls, the clean-state reflection $R_0$ and its controlled call, and the swap $S$ and its controlled call. On the clean-work logical walk space these implement $R_A=2TT^*-I=V_PR_0V_P^*$, $U=SR_A$, and $W=U^2$, with each constituent charged. Supply controlled calls to $W$ and $W^*$ for the coherent QPE circuits and an exact controlled $R_A$ for the all-zero branch. A single bound $U_0$ covers each controlled $W$ or $W^*$ call and the controlled $R_A$ call, including their factorwise implementation costs. A matrix $P$ alone supplies none of these circuits.

**Approximate stationary reflection $R(\beta)$.** Set $\Delta_0=2\sqrt{\delta_0}$, $s=\lceil\log_2(4\pi/\Delta_0)\rceil$, and $k=\max(1,\lceil\log_2(2/\beta)\rceil)$, using certified interval arithmetic for real constants and ceilings. Append $k$ separate $s$-bit zero phase registers. Coherently execute the finite QPE circuit prefix from [[alg-qa-quantum-phase-estimation]] on $W$ in each register, using the declared controlled powers. This prefix is a unitary circuit on the full walk register and is executed on arbitrary walk states, including superpositions; the eigenvector input in the QPE analysis is not a restriction on the circuit's action. Do not measure these phase registers. If at least one phase register is nonzero, apply $-I$ to the walk state. If all are zero, apply the exact controlled row-space reflection $R_A=2TT^*-I$ using the charged row-preparation, inverse, and clean-state reflection calls. Reverse the $k$ coherent QPE prefixes in reverse chronological order, using the supplied controlled inverse powers. Charge $2k(2^s-1)$ controlled $W$ and $W^*$ calls, the controlled $R_A$ branch, all-zero comparisons, phase-register gates, and the allocated classical arithmetic. The all-zero branch is required: $W$ has the extra zero-phase subspace $A^\perp\cap B^\perp$, where $R_A=-I$, while $R_A=+I$ on the stationary state.

**Recursive circuit $A_i$.** Let $\gamma=1/120$, $\beta_i=18\gamma/(4\pi^3i^2)$ for $i\ge1$, and $A_0=I$. For $i>0$, allocate a fresh $K_i$ for $R(\beta_i)$ and execute chronologically: (i) $A_{i-1}$, the marked phase flip, and $A_{i-1}^\dagger$; (ii) coherently test every older $K_j$, $j<i$, applying $-I$ if any is nonzero and otherwise applying $R(\beta_i)$ on the walk and fresh $K_i$; compute and uncompute the control predicate; (iii) apply $A_{i-1}$. An inverse means the exact reversed finite gate list, not a reset of measured work.

**Tolerant finding wrapper.** If $\varepsilon_0\ge1/2$, take $n_s=\lceil\ln(1/\rho)/\ln2\rceil$ fresh stationary samples, verify each label, return the first marked label, and output `NO MARKED` if all fail. Otherwise, let $t_{\max}$ be the least integer $t\ge0$ such that $3^t\arcsin\sqrt{\varepsilon_0}\ge\pi/4$. Determine it by certified interval comparison or the exact-algebraic threshold test; equality takes the $\ge$ branch. Let $n_{\rm out}=\lceil20\ln(1/\rho)\rceil+20$. In each outer trial:

1. Prepare a fresh stationary sample, test its first label, and return it if marked.
2. Prepare a fresh stationary walk state with all $K_1,\ldots,K_{t_{\max}}$ zero.
3. For $i=1,\ldots,t_{\max}$, apply $A_i$, measure marked/unmarked, and on a marked outcome verify and return the label. On an unmarked outcome retain the conditional current state and all auxiliary registers, and continue; do not reprepare or reset them.
4. If no level succeeds, discard the trial and begin the next fresh outer trial.

If all trials fail, output `NO MARKED`. Every loop has a finite cap; all confidence calculations, comparisons, reversible predicates, retained auxiliary space, state preparation, update, inverse, controlled, reflection, and check costs are charged. In the $\varepsilon_0\ge1/2$ branch, the cap above gives false-negative probability at most $\rho$; in the other branch correctness and the sharper cost are proved separately in [[thm-qa-18-reversible-search-cost]].
