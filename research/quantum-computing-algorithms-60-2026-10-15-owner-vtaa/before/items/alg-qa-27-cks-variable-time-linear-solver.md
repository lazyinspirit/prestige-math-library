---
id: alg-qa-27-cks-variable-time-linear-solver
kind: algorithm
title: "Finite CKS sparse QLSP with variable-time inverse estimation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-27-cks-sparse-oracle-model
  - def-qa-27-variable-time-model
  - lem-qa-27-lcu-projected-block-identity
  - thm-qa-27-vtaa-amplification
  - alg-qa-13-phase-estimation-amplitude-estimation
  - thm-qa-13-amplitude-estimation-guarantee
  - thm-qa-13-amplitude-estimation-query-complexity
  - alg-qa-13-relative-approximate-counting
  - thm-qa-13-relative-counting-success
  - thm-qa-13-relative-counting-query-cost
  - alg-qa-12-known-amplitude-amplification
  - thm-qa-12-known-amplitude-success-bound
  - thm-qa-12-known-amplitude-query-cost
  - alg-qc-state-preparation
  - alg-qa-25-small-time-aware-simulator
  - thm-qa-25-small-time-aware-simulator-correctness
  - alg-qa-25-qubitized-hamiltonian-simulation
  - thm-qa-25-qubitized-simulation-correctness
  - thm-qa-25-qubitized-simulation-resource-bound
  - def-qa-25-qubitization-access-model
  - alg-qa-25-sparse-hamiltonian-block-encoding
  - thm-qa-25-sparse-hamiltonian-block-encoding-correctness
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-dirac-notation-conversion
  - def-qc-circuit-cost-model
justified_by: []
axiom_use: "None; the procedure uses finite registers, finite tables, and declared reversible operations."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: "https://arxiv.org/pdf/1511.02306"
      locator: "§§2–5, especially Theorem 5 and §§5.1–5.4, PDF pp.2–29."
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
      locator: "§§3–4, PDF pp.4–16."
operational_contract_ref:
  path: research/quantum-algorithms-planning/operational-contracts.md
  section: OP6
  binding: true
---

## Definition

**Inputs.** A finite Hermitian $d$-sparse $A$ with $\|A\|_{\rm op}\le1$, normalized $|b\rangle$ supported on eigenvalues $|\lambda|\ge1/\kappa$, rational $0<e<1$ and failure budget $0<\rho<1/3$, the full reversible row/reverse-location and entry-value access of [[def-qa-27-cks-sparse-oracle-model]], and supplied $B,B^\dagger$ preparing $|b\rangle$. Every controlled, inverse, state-preparation, simulation, reflection, arithmetic, classical table, precision, and compilation cost is an input coordinate.

**Registers and stopping semantics.** Put $m=\lceil\log_2\kappa\rceil+1$. Use clock bits $C_1,\ldots,C_m$, success bit $F$, system register $I$, separate phase workspaces $P_j$, and coefficient workspace $Q$. Once a clock bit first records a stopped branch, every later stage is controlled on all earlier clock bits being zero. All clock, outcome, and step branches are orthogonal; there are no intermediate measurements in a branch later inverted.

**Finite Fourier inverse.** For each requested $\phi\in(0,1]$ and error $e_0>0$, `GenerateInverse(φ,e₀)` chooses rational $Y,Z>0$ by increasing integer squares until
$$e^{-\phi^2Y^2/2}/\phi\le e_0/8,\qquad 2Y e^{-Z^2/2}/\sqrt{2\pi}\le e_0/8.$$
Set $L_y=Z^2$, $L_z=1+Z^2+YZ$, and choose positive dyadic $\Delta_y,\Delta_z$ with $2YZ(L_y\Delta_y+L_z\Delta_z)/\sqrt{2\pi}\le e_0/8$. Increase $Y,Z$ to multiples of those steps and recheck. For $j=0,\ldots,J-1$, $J=Y/\Delta_y$, and $k=-K,\ldots,K-1$, $K=Z/\Delta_z$, use $y_j=j\Delta_y$, $z_k=k\Delta_z$, and
$$c_{jk}=i\Delta_y\Delta_z z_k e^{-z_k^2/2}/\sqrt{2\pi}$$
for the controlled simulator $e^{-iAy_jz_k}$. Round coefficients with total absolute error at most $e_0/8$, take the rational upper bound $\alpha_\phi=\max(1,\operatorname{upper}(\sum|c_{jk}|))$, pad with cancelling identity terms if needed, and prepare the coefficient table with [[alg-qc-state-preparation]]. A supplied SELECT applies the indicated controlled simulations; PREPARE, SELECT, their inverses, and their costs are explicit. The analytic identity being discretized is
$$\frac1x=\frac{i}{\sqrt{2\pi}}\int_0^\infty\!dy\int_{\mathbb R} z e^{-z^2/2}e^{-ixyz}\,dz\quad(|x|\ge\phi).$$
The coefficient PREPARE/SELECT block is the conditional identity proved in [[lem-qa-27-lcu-projected-block-identity]]. The chosen cutoffs and finite coefficients do not by themselves certify the approximation or its gate/bit cost.

**Common normalization.** Set $L=\lceil\log_2(1024m\kappa/e)\rceil$ and $\zeta=e/2^L$. Generate at every $\phi_j=2^{-j}$ with error $m\zeta$, set $\alpha_{\max}=\max_j\alpha_{\phi_j}$, and pad every success branch to this common normalization with cancelling identities. If $m\alpha_{\max}\zeta>e/256$, increment $L$ and regenerate. A declared finite cap returns `CONSTRUCTION_TIMEOUT`; an uncapped run relies on the separate termination and growth proof.

**Gapped phase estimation and stages.** For each $\phi_j$, `GPE(φ_j,ζ)` uses a dyadic phase scale at least $64\pi/\phi_j$, an odd number $r\ge8\ln(1/\zeta^2)+8$ of coherent QPE repetitions on the same eigencomponent, and reversible majority comparison of the unwrapped phase magnitude with $3\phi_j/2$. Threshold equality selects the large branch. The promise cases are $|\lambda|\le\phi_j$ and $|\lambda|\ge2\phi_j$; the transition band is unconstrained. Retain all phase work in $P_j$ and make no intermediate measurement.

At stage $j$, conditional on the active prefix $C_1=\cdots=C_{j-1}=0$, run GPE into $C_j,P_j$. On the same prefix and $C_j=1$, execute the common-normalized `GenerateInverse(φ_j,mζ)` on $F,Q,I$; otherwise leave the branch unchanged. Let $A_j$ be this stage list, $A=A_m\cdots A_1$, and let $A'_j$ replace its inverse call by a flip of $F$, with $A'=A'_m\cdots A'_1$. The inverse lists are literal reversal with the corresponding inverse calls.

**Finite variable-time amplification wrapper (OP6).** Pad stage call counts to increasing dyadic stopping times. For each unfinished interval form $B_i$ from the prior amplified list followed by the original $A$ continuation. Run the QA13 `RelProb` estimator on $B_i$ with $c=1/100$, failure $\rho/(16(m+1))$, and conservative floor $p_{\min}=1/(64\alpha_{\max}^2)$; a zero estimate returns `ESTIMATION_FAIL`. If the estimated live probability exceeds $1/(9(m+1))$, use $V_i=B_i$. Otherwise search the finite range $k=0,\ldots,\lceil1/\sqrt{p_{\min}}\rceil$ for the least integer satisfying
$$\frac1{9(m+1)}\le(2k+1)^2p_i\le\frac1{m+1};$$
if none is certified, return `ESTIMATION_FAIL`; otherwise perform exactly $k$ ordinary amplification iterates with the good-or-unfinished projector and all-zero input reflection. Retain the finite lists and estimator records. At the final interval use `CapAmplify` with lower target $1/(18(m+1))$ and failure $\rho/4$. After a successful flag apply $(A')^\dagger$ to erase the phase/clock workspace and return the conditional system state with its heralding bit. Estimator, cap, numerical, or certificate failures return `FAIL` with their declared status.

## Remarks

This is the binding OP6 constructor. It defines a finite capped procedure and a separate uncapped source mode; the source CKS theorem does not automatically prove the capped wrapper's failure probability, success amplitude, or resource bounds. Every sparse simulation must use the explicitly supplied reversible location permutations and the QA25 simulator access chain; QA20 XOR row/value access alone does not supply those permutations. Gate efficiency additionally requires the local coefficient-generation, common-normalization, amplitude-estimation, and compiler cost proofs.
