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
  - def-qc-instrument-and-conditional-state
  - def-qc-elementary-circuit-resources
  - alg-qa-quantum-phase-estimation
  - def-qa-eigenphase-estimation-model
  - thm-qa-17-walk-access-cost
  - thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
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

**Input.** A finite ergodic reversible row chain $(X,P,\pi)$ with $\pi_x>0$, a supplied positive dyadic rational lower absolute-gap bound $\delta_0$, a dyadic rational marked-mass lower bound $\varepsilon_0>0$ with promise $\pi(\mathcal M)=0$ or $\pi(\mathcal M)\ge\varepsilon_0$, a coherent marked-bit check of cost $C$, and a dyadic rational failure target $\rho\in(0,1)$. These finite parameter encodings suffice for real positive promises: choose dyadic lower bounds within a factor of two of the gap and nonzero marked-mass bounds, and a dyadic target in $(\rho_*/2,\rho_*]$ for desired failure probability $\rho_*$.  Write $|\sqrt\pi\rangle=\sum_{x\in X}\sqrt{\pi_x}|x\rangle$ and let $T|x\rangle=|x\rangle\sum_y\sqrt{P_{xy}}|y\rangle$ be the row isometry of [[def-qa-17-szegedy-transition-isometry]]. The supplied clean preparation $A_\pi$ maps its specified blank input to the **stationary edge state**
$$|\pi_{\rm edge}\rangle=T|\sqrt\pi\rangle=\sum_{x\in X}\sqrt{\pi_x}|x\rangle\sum_{y\in X}\sqrt{P_{xy}}|y\rangle,$$
returns all its work registers to their specified blank states, and has charged cost $S$. The row-access interface of [[def-qa-17-walk-access-model]] supplies the row-preparation unitary $V_P$, its inverse, controlled forward and inverse calls, the clean-state reflection $R_0$ and its controlled call, and the swap $S$ and its controlled call. On the clean-work logical walk space these implement $R_A=2TT^*-I=V_PR_0V_P^*$, $U=SR_A$, and $W=U^2$, with each constituent charged. Supply controlled calls to $W$ and $W^*$ for the coherent QPE circuits and an exact controlled $R_A$ for the all-zero branch. A single bound $U_0$ covers each controlled $W$ or $W^*$ call and the controlled $R_A$ call, including their factorwise implementation costs. A matrix $P$ alone supplies none of these circuits.

**Marked check and retained-state instrument.** Write $m(x)=\mathbf1_{\mathcal M}(x)$. The supplied exact coherent check is a unitary $B_{\mathcal M}$ with separately supplied inverse and specified fresh flag $F$ and scratch $J$. On the declared logical encoding it satisfies, for every $x\in X$, $b\in\{0,1\}$, and vector $\eta$ of all existing remaining registers,
$$B_{\mathcal M}(|x\rangle|\eta\rangle|b\rangle_F|0\rangle_J)=|x\rangle|\eta\rangle|b\mathbin\oplus m(x)\rangle_F|0\rangle_J.$$
Its unitary extension outside the logical encoding is supplied too. Thus it preserves the first label and every existing walk, phase, data, and work auxiliary on clean new scratch. In the relevant query/check cost coordinates, $C$ bounds each forward and inverse check call; declare the flag-readout cost separately and include it in $C$ in any coordinate that counts readout as a check. A flag readout uses no value-oracle query. Gate, output-bit, and new flag/scratch costs are separately priced.

On the whole existing register space set $\Pi_1=\Pi_{\mathcal M}=(\sum_{x\in\mathcal M}|x\rangle\langle x|)\otimes I_{\rm rest}$ and $\Pi_0=I-\Pi_{\mathcal M}$, with identity on every existing auxiliary, including every retained $K_j$. Every marked/unmarked test below uses the **specified Lüders instrument**
$$\mathcal I_a(Z)=\Pi_aZ\Pi_a,\qquad a\in\{0,1\},$$
in the sense of [[def-qc-instrument-and-conditional-state]]: its positive-probability conditional density is $\mathcal I_a(Z)/\operatorname{tr}(\mathcal I_a(Z))$; no conditional state is assigned when that trace is zero. Execute the test by appending $|0\rangle_F|0\rangle_J$, applying $B_{\mathcal M}$, reading only the fresh flag with the explicitly chosen computational-basis Lüders maps $Y\mapsto Q_aYQ_a$, where $Q_a=I\otimes|a\rangle\langle a|_F\otimes I_J$, storing $a$ in the classical output record, and applying $B_{\mathcal M}^*$ to return the fresh flag and scratch to zero. Retain every pre-existing register; on an unmarked result read no finer first-label information. A marked result may then be followed by label readout and verification for output. Charge one forward check, one inverse check, and one flag readout per test, hence $O(C)$ in the stated query/check profile. The recursive marked phase flip is implemented by $B_{\mathcal M}$, a phase $-1$ on flag $1$, and $B_{\mathcal M}^*$, also with both calls charged.

**Approximate stationary reflection $R(\beta)$.** Set $s=\min\{q\ge1:4^q\delta_0\ge64\}$ and $k=\min\{j\ge1:2^j\beta\ge2\}$, using exact integer/rational comparisons. With $Q=2^s$, these comparisons give $Q\ge8/\sqrt{\delta_0}>2\pi/\sqrt{\delta_0}$ using $\pi<4$ from [[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]. Append $k$ separate $s$-bit zero phase registers. Coherently execute the finite QPE circuit prefix from [[alg-qa-quantum-phase-estimation]] on $W$ in each register, using the declared controlled powers. This prefix is a unitary circuit on the full walk register and is executed on arbitrary walk states, including superpositions; the eigenvector input in the QPE analysis is not a restriction on the circuit's action. Do not measure these phase registers. If at least one phase register is nonzero, apply $-I$ to the walk state. If all are zero, apply the exact controlled row-space reflection $R_A=2TT^*-I$ using the charged row-preparation, inverse, and clean-state reflection calls. Reverse the $k$ coherent QPE prefixes in reverse chronological order, using the supplied controlled inverse powers. Charge $2k(2^s-1)$ controlled $W$ and $W^*$ calls, the controlled $R_A$ branch, all-zero comparisons, phase-register gates, and the allocated classical arithmetic. The all-zero branch is required: $W$ has the extra zero-phase subspace $A^\perp\cap B^\perp$, where $R_A=-I$, while $R_A=+I$ on the stationary state.

**Recursive circuit $A_i$.** Let $\gamma=1/120$, $\beta_i=\gamma/(16i^2)$ for $i\ge1$, and $A_0=I$. For $i>0$, allocate a fresh $K_i$ for $R(\beta_i)$ and execute chronologically: (i) $A_{i-1}$, the marked phase flip, and $A_{i-1}^\dagger$; (ii) coherently test every older $K_j$, $j<i$, applying $-I$ if any is nonzero and otherwise applying $R(\beta_i)$ on the walk and fresh $K_i$; compute and uncompute the control predicate; (iii) apply $A_{i-1}$. Each $\beta_i$ is rational, and the $k_i$ loop in $R(\beta_i)$ is an exact rational comparison. An inverse means the exact reversed finite gate list, not a reset of measured work.

**Tolerant finding wrapper.** If $\varepsilon_0\ge1/2$, take $n_s=\min\{n\ge1:2^{-n}\le\rho\}$ fresh stationary samples, verify each label, return the first marked label, and output `NO MARKED` if all fail. Otherwise, let $t_{\max}$ be the least integer $t\ge0$ such that $3^t\arcsin\sqrt{\varepsilon_0}\ge\pi/4$. Determine it by the exact algebraic threshold comparison $\varepsilon_0\ge\sin^2(\pi/(4\cdot3^t))$; equality takes the $\ge$ branch. Let $n_{\rm out}=\min\{n\ge1:(19/20)^n\le\rho\}$, found by exact rational comparisons. In each outer trial:

1. Prepare a fresh stationary sample, test its first label, and return it if marked.
2. Prepare a fresh stationary walk state with all $K_1,\ldots,K_{t_{\max}}$ zero.
3. For $i=1,\ldots,t_{\max}$, apply $A_i$, execute the marked/unmarked Lüders test specified above, and on a marked outcome read, verify, and return the label. On an unmarked outcome retain the conditional current state and all auxiliary registers, and continue; do not reprepare or reset them.
4. If no level succeeds, discard the trial and begin the next fresh outer trial.

If all trials fail, output `NO MARKED`. Every loop has a finite cap; all confidence calculations, comparisons, reversible predicates, retained auxiliary space, state preparation, update, inverse, controlled, reflection, and check costs are charged. In the $\varepsilon_0\ge1/2$ branch, the cap above gives false-negative probability at most $\rho$; in the other branch correctness and the sharper cost are proved separately in [[thm-qa-18-reversible-search-cost]].
