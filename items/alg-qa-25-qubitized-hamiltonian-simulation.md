---
id: alg-qa-25-qubitized-hamiltonian-simulation
kind: algorithm
title: Qubitized Hamiltonian simulator
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-25-qubitization-access-model
  - def-qa-25-hamiltonian-simulation-polynomial
  - thm-qa-25-qubitization-signal-sequence
  - alg-qa-24-qsvt
  - alg-qa-23-qsp-phase-synthesis
  - thm-qa-23-qsp-synthesis-correctness
  - thm-qa-24-qsvt-singular-space-action
  - lem-qa-24-qsvt-robustness-amplitude-bound
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - cor-triangle-inequality-for-inner-product-norm
  - lem-qa-21-robust-one-step-oaa-isometry
justified_by: []
axiom_use: "None; all registers and circuits are finite-dimensional."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, §5.1"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §§29.3–29.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.4.1"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

**Inputs.** A finite Hermitian $H$, $\alpha>0$ with the certified norm promise $\|H\|_{\rm op}\le\alpha$, rational time $t$, rational $0<\epsilon\le1$, and either (i) the exact $(\alpha,a,0)$ block encoding $U$ with clean injection $J$ and $J^*UJ=H/\alpha$, or (ii) a separately selected bounded-block-error mode with the same declared ancilla embedding $J$ and a unitary $U$ whose clean block satisfies $\|J^*UJ-H/\alpha\|_{\rm op}\le\epsilon_{\rm BE}$ for a supplied certified rational upper bound $\epsilon_{\rm BE}\ge0$. The latter mode is accepted only if it passes the explicit post-degree error-budget test in steps 3 and 5. For either mode, declare the access and cost for $U,U^*,$ controlled-$U$, controlled-$U^*$, both projector-phase circuits, coefficient preparation, SELECT, OAA reflections, phase synthesis, data access, and classical arithmetic. The input description also supplies terminating certified comparisons and rational-interval evaluations for the scalar arithmetic below.

**Output.** Return the finite circuit list and error certificate for a unitary dilation $V_{\rm impl}$. Its success claim is on the clean-input isometry $J_{\rm clean}|\psi\rangle=|0_{\rm work}\rangle|\psi\rangle$; auxiliary output registers are approximate and are not measured to clean an unknown system input. On a failed polynomial or phase certificate, return the phase routine's declared failure status and do not report a simulator.

**Generation and execution.** Set $\tau=\alpha t$ and $\rho=\epsilon^2/10000$. For $t=0$, return the identity circuit and zero query count. Otherwise:

1. Starting at $d=\max(1,\lceil|\tau|\rceil)$, increase $d$ until $u=|\tau|/(2(d+2))<1$ and
   $$\frac{2(|\tau|/2)^{d+1}}{(d+1)!(1-u)}\le\rho/8.$$
   Evaluate each strict comparison by the certified interval routine named in OP0 of the binding operational appendix; an undecided equality is not rounded toward success.
2. For each $k=0,\ldots,d$, compute $J_k(\tau)$ from the series in [[def-qa-25-hamiltonian-simulation-polynomial]]. Stop its alternating-series evaluation only after its ratio $\tau^2/[4(j+1)(j+k+1)]$ is below $1$ and its geometric remainder is at most $\rho/(32(d+1))$. Store a rational coefficient and its error interval. Form $T_0=1,T_1=x,T_{k+1}=2xT_k-T_{k-1}$. Set
   $$E=J_0+2\sum_{1\le 2r\le d}(-1)^rJ_{2r}T_{2r},\qquad O=2\sum_{1\le 2r+1\le d}(-1)^rJ_{2r+1}T_{2r+1}.$$
   Thus $Q:=E-iO$ is the rounded Jacobi–Anger truncation and its certified scalar error is $\|Q-f_\tau\|_{[-1,1]}\le\rho$; the sign $(-i)^k$ is literal.
3. Require a certified combined polynomial error at most $\rho$. Then $|E(x)|,|O(x)|\le1+\rho$ on $[-1,1]$. Put $B=1+2\rho$, $p_E=E/B$, and $p_O=O/B$, and set $\delta_{\rm qsp}=\rho/64$. Define
   $$\Gamma=\left(\frac{3\epsilon}{128}\right)^2-3\rho-2\delta_{\rm qsp}>0,$$
   since $3\rho+2\delta_{\rm qsp}=97\epsilon^2/320000<9\epsilon^2/16384$.
   In exact-block mode put $\epsilon_{\rm BE}=0$. In bounded-block-error mode require the supplied rational upper bound to satisfy $(8d)^2\epsilon_{\rm BE}\le\Gamma^2$; otherwise return `CERTIFICATE_ERROR`. This is the explicit block-error allocation for the selected degree. Call [[alg-qa-23-qsp-phase-synthesis]] separately on the rational real targets in `efficient-numerical` mode with tolerance $\delta_{\rm qsp}$, their actual degree, and its parity. If either target is identically zero, declare degree $0$ and even parity. Retain each complementary-polynomial identity, phase list, per-phase precision and optional compiler certificates. A successful call certifies $\eta_{\rm poly}+\sum_\ell\zeta_\ell\le\delta_{\rm qsp}$, where $\eta_{\rm poly}$ is the exact phase-list polynomial error and $\zeta_\ell$ are the implemented phase-slot errors, by [[thm-qa-23-qsp-synthesis-correctness]]. Execute each real QSVT extraction using [[alg-qa-24-qsvt]] and the supplied forward/inverse signal calls of [[def-qa-25-qubitization-access-model]], with block-compression error $0$ in exact mode or at most $\epsilon_{\rm BE}$ in bounded mode. For the bounded mode, compare each exact $\Phi$ and $-\Phi$ singular-value transform on the perturbed and target block using [[lem-qa-24-qsvt-robustness-amplitude-bound]], then average the two bounds. The phase-list polynomial mismatch and implemented phase-slot errors together contribute at most $\delta_{\rm qsp}$, while the averaged block perturbation is at most $4d\sqrt{\epsilon_{\rm BE}}$. Thus each extracted clean block differs from its target by at most $\delta_{\rm qsp}+4d\sqrt{\epsilon_{\rm BE}}$. Since $p_E$ is even and $p_O$ odd, these singular-value transforms on Hermitian $H/\alpha$ equal the ordinary polynomials $p_E(H/\alpha)$ and $p_O(H/\alpha)$: the even values agree at $\lambda=\pm\sigma$, while for the odd transform a negative eigenvalue has left singular vector $u=-v$ and therefore supplies the sign; also $p_O(0)=0$. Propagate every non-success status from either synthesis or extraction unchanged; do not report a simulator on a failed certificate.
4. Pad both extraction workspaces to the same ordered register space. Prepare a clean coefficient qubit in $|+\rangle$. SELECT applies the $p_E(H/\alpha)$ block in branch $0$ and $-i$ times the $p_O(H/\alpha)$ block in branch $1$. Unprepare the coefficient qubit. The ideal target block is $M/2$, where $M=p_E(H/\alpha)-i p_O(H/\alpha)=Q(H/\alpha)/B$. Let $M_{\rm ph}$ be twice the clean block of this phase-certified $W$ when its remaining operations are exact. By the step-3 synthesis certificates and branchwise robustness from [[lem-qa-24-qsvt-robustness-amplitude-bound]],
   $$\|M_{\rm ph}-M\|_{\rm op}\le2\delta_{\rm qsp}+8d\sqrt{\epsilon_{\rm BE}},$$
   In exact-block mode this bound uses $\epsilon_{\rm BE}=0$. Since $B=1+2\rho$, the ideal target polynomial error satisfies
$$\|M-e^{-itH}\|_{\rm op}\le\frac{\rho}{B}+\frac{B-1}{B}=\frac{3\rho}{1+2\rho}<3\rho;$$
here $f_\tau(H/\alpha)=e^{-itH}$ by finite spectral calculus and $|f_\tau(x)|=1$. The factor $-i$ is a relative phase under any outer control and is not discarded.
5. Apply the explicit phase-corrected oblivious-amplitude-amplification unitary $C=-WRW^*RW$, where $R=I-2\Pi_{\rm zero}$ and $W$ is the complete even/odd block-combination circuit. Retain its work registers. By step 4, with $V=e^{-itH}$, the certified OAA input error is
   $$\eta_{\rm OAA}:=3\rho+2\delta_{\rm qsp}+8d\sqrt{\epsilon_{\rm BE}}\le\left(\frac{3\epsilon}{128}\right)^2<1/100.$$
   The exact and bounded-block variants use the same OAA route; [[lem-qa-21-robust-one-step-oaa-isometry]] certifies phase/block clean-input isometry error at most $10\sqrt{\eta_{\rm OAA}}\le15\epsilon/64$, including the retained-work leakage.

   For the remaining implementation error, unroll the complete post-amplification circuit, including every occurrence within $W,W^*,W$, both OAA reflections, the known correction, each $U/U^*$ and controlled call, both SELECT branches, coefficient preparation/unpreparation, projector-reflection implementation, and all inverses. Exclude only phase-rotation and optional phase-compiler errors already covered by the two step-3 certificates. Let $N$ be the number of remaining primitive-unitary occurrences in this unrolled list. For $N>0$, require each finite-basis implementation $\widetilde G_j$ of its ideal unitary $G_j$ to have a certified full-space bound $\|\widetilde G_j-G_j\|_{\rm op}\le\epsilon/(64N)$; exact supplied calls have zero error. Count repeated and controlled occurrences separately. If any implementation lacks a unitary certificate at its allocation, return `IMPLEMENTATION_ERROR`. The full-space telescoping product estimate, using [[cor-triangle-inequality-for-inner-product-norm]] and unitary norm one, gives remaining post-amplification error at most $\epsilon/64$ (zero if $N=0$). The complete clean-input isometry certificate is therefore at most $15\epsilon/64+\epsilon/64=\epsilon/4<\epsilon$; return `CERTIFICATE_ERROR` if a certified comparison does not verify this bound. A controlled simulator controls every whole block and the known correction, using the separately supplied controlled access and counting its implementation in the same way.

The arithmetic, coefficient series, two phase-generation calls, controlled QSVT sequences, coefficient register, SELECT, and OAA list are finite outputs; their gate, query, precision, workspace, description-bit, and classical computation costs are separate coordinates. The phase-generation call is the finite procedure of [[alg-qa-23-qsp-phase-synthesis]], not a free source routine. A sparse input uses its actually supplied block-encoding circuit and its exact row-location, value, precision, and state-preparation costs; standard XOR sparse access alone does not imply an in-place reversible location permutation.
