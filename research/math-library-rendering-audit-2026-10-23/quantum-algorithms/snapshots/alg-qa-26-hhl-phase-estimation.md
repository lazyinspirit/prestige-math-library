---
id: alg-qa-26-hhl-phase-estimation
kind: algorithm
title: "HHL finite sine-window phase-estimation algorithm"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 20
deps:
  - def-qa-26-qlsp-task
  - lem-qa-26-qlsp-target-is-well-defined
  - lem-qa-26-hermitian-dilation
  - def-qa-26-hhl-access-model
  - lem-qa-26-phase-to-eigenvalue-unwrapping
  - def-qa-26-hhl-reciprocal-filter
  - lem-qa-26-hhl-filter-geometry
  - def-qa-26-hhl-sine-window
  - lem-qa-26-hhl-sine-window-prefix-masses
  - lem-qa-26-hhl-prefix-table-synthesis-error
  - alg-qa-quantum-phase-estimation
  - thm-qa-exact-binary-qft-circuit-correct
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-dirac-notation-conversion
  - def-qc-register-and-computational-basis
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - thm-qc-axis-rotation-pauli-formula
  - alg-qa-12-amplitude-amplification
  - lem-qa-26-hhl-sine-window-kernel-moment
  - lem-qa-26-hhl-capped-amplification
  - lem-qa-25-clean-subspace-unitary-hybrid
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Definition

Input a self-adjoint $H$ with $\|H\|\le1$, a unit input state $|b\rangle$ supported only on eigenvalues satisfying $1/\kappa\le|\lambda|\le1$, and a supplied finite exact representation of the cutoff $\kappa\ge1$ that supports certified arithmetic and rational comparisons. Supply costed $B,B^\dagger$ and controlled/inverse simulation access as in [[def-qa-26-hhl-access-model]]. The accuracy and failure inputs are exact rational values $\epsilon=p_\epsilon/q_\epsilon$ and $\rho=p_\rho/q_\rho$, with positive binary-encoded integers and $0<p_\epsilon\le q_\epsilon$, $0<p_\rho<q_\rho$. Rectangular systems $A:\mathbb C^n\to\mathbb C^m$ use [[lem-qa-26-hermitian-dilation]]: choose a supplied rational scale $\Lambda\ge\|H_A\|$, use $H=H_A/\Lambda$, and set $\kappa=\Lambda/\gamma$ from the QLSP support gap $\gamma$. The QLSP definition supplies $\sigma_j\ge\gamma$ whenever the left singular coefficient of $b$ is nonzero; the dilation eigenvalues on this input support are $\pm\sigma_j/\Lambda$, so $1/\kappa\le|\lambda|\le1$. On $(\mathbb C^m\otimes W)\oplus(\mathbb C^n\otimes W)$ prepare the normalized codomain-supported input $(b/\|b\|,0)$ with the tagged preparation $B_A:=B\oplus I_{\mathbb C^n\otimes W}$. Implement its $B$ block with the supplied tag-controlled form of $B$ and charge that controlled preparation cost. The QLSP promise $b\in\operatorname{ran}(A)$ removes the kernel component, and the output is tagged in the domain summand. All parameter comparisons, reversible arithmetic and finite-precision synthesis use the separately charged routines in the access model. The algorithm is the finite OP5 program:

1. Apply the supplied $B$ (or $B_A$ for a rectangular system) to prepare the input and its fixed work state, set $t_0=2048\kappa/\epsilon$, choose the least power of two $T\ge8(t_0+1)$ by certified comparisons, and let $L=\log_2T$. Initialize the phase register to $|0^L\rangle$ in big-endian order $q_{L-1}\cdots q_0$. This carrier chooses OP5's explicit table variant for preparing [[def-qa-26-hhl-sine-window]]. Build the complete binary prefix tree on the $T$ leaves. At each level $\ell=0,\ldots,L-1$ and for each interval node $[a,b)$ at that level, put $m=(a+b)/2$ and compute the child masses $W_T(a,m)$ and $W_T(m,b)$ from the formula in [[lem-qa-26-hhl-sine-window-prefix-masses]]. Store $r=W_T(a,m)/W_T(a,b)$ and apply $R_y(2\arcsin\sqrt r)$ to wire $q_{L-1-\ell}$, controlled on the preceding $\ell$ wires matching the path to $[a,b)$; encode bit $1$ as the left child and bit $0$ as the right child. The root has no controls. Thus the ideal circuit prepares $|\Psi_T\rangle$ by [[lem-qa-26-hhl-prefix-table-synthesis-error]]. Put $\epsilon_\Psi=\epsilon/(4096\kappa)$. Each nonempty mass is at least $T^{-2}$ by [[lem-qa-26-hhl-sine-window-prefix-masses]]. Use certified interval arithmetic with absolute mass error at most $\epsilon_\Psi^2/(10^6L^2T^4)$; refine until each stored angle and its finite gate synthesis together give controlled-rotation operator error at most $\epsilon_\Psi/(100T)$. The cases $r=0$ and $r=1$ use the identity and $\pi$ rotations, respectively. Store each other angle with at least $\lceil\log_2(100\pi T/\epsilon_\Psi)\rceil+2$ bits. There are $T-1$ rotations; [[lem-qa-26-hhl-prefix-table-synthesis-error]] bounds their total operator error by $\epsilon_\Psi/100$ from the displayed combined per-node operator tolerance. The table contains $O(T\log(T/\epsilon_\Psi))$ bits and $T-1$ controlled rotations. Charge its one-time construction/data cost $G_\Psi(T,\epsilon_\Psi)$ and each forward/inverse preparation cost $C_\Psi(T,\epsilon_\Psi)$ from [[def-qa-26-hhl-access-model]], including reversible lookup, control and finite gate synthesis. Thus the sine-preparation unitary and its inverse each have operator error at most $\epsilon_\Psi$; this variant pays linear-in-$T$ table and rotation resources rather than assuming a loaded amplitude table.

2. In either the original full-space or alternative clean-workspace simulation mode, initialize all simulator work in zero and retain it coherently. For $j=0,\ldots,L-1$, set $t_j=2^jt_0/T$ and allocate $\eta_j=\epsilon/(8192\kappa L)$ to both its forward controlled call $S_H(t_j,\eta_j)$ and its reverse call. Apply $S_H(t_j,\eta_j)$ to the system controlled on wire $q_j$ being $1$, and act as identity on its $0$ branch. In the declared order $q_{L-1}\cdots q_0$, a phase label $\tau$ has bits $x_j$ with $\tau=\sum_{j=0}^{L-1}2^jx_j$, so the ideal controlled list applies $e^{+iH\tau t_0/T}$. Apply the negative-sign QFT, decode $y$ to signed $k=y$ for $y<T/2$ and $k=y-T$ otherwise, and set $\widetilde\lambda=2\pi k/t_0$. The total forward evolution time is $\sum_{j<L}t_j=t_0(1-1/T)<t_0$, and the sum of the $2L$ simulation error allocations is $\epsilon/(4096\kappa)$. This uses the signed convention in [[lem-qa-26-phase-to-eigenvalue-unwrapping]].

3. Reversibly compute the flag angles and sign from $\widetilde\lambda$ using [[def-qa-26-hhl-reciprocal-filter]]. Use the two-qubit computational basis $|q_1q_0\rangle$ with labels $|\mathrm{nothing}\rangle=|00\rangle$, $|\mathrm{well}\rangle=|01\rangle$, $|\mathrm{ill}\rangle=|10\rangle$, and unused label $|11\rangle$. Write $p=|f_\kappa(\widetilde\lambda)|$, $r=\sqrt{1-p^2}$, $\alpha=2\arcsin p$, and $\beta=2\arcsin(g_\kappa(\widetilde\lambda)/r)$. These are defined at every decoded grid point because [[lem-qa-26-hhl-filter-geometry]] gives $p\le1/2$, $0\le g\le1/2$, and $r\ge\sqrt3/2$, so $g/r\le1/\sqrt3<1$. First apply $R_y(\alpha)$ to $q_0$ conditioned on $q_1=0$, acting as identity on the $q_1=1$ subspace. Next apply $R_y(\beta)$ to $q_1$ conditioned on $q_0=0$, acting as identity on the $q_0=1$ subspace. Here $R_y(\theta)=\exp(-i\theta Y/2)$ with the exact convention and unitary formula of [[def-qc-one-qubit-gate-alphabet-and-rotations]] and [[thm-qc-axis-rotation-pauli-formula]]. Finally apply $D_s=\operatorname{diag}(1,s,1,1)$ in the ordered flag basis, where $s=-1$ if $\widetilde\lambda<0$ and $s=+1$ otherwise (in particular at zero, where $f_\kappa(0)=0$). The resulting full flag unitary is $D_sG_{02}(\beta)G_{01}(\alpha)$: the two conditional rotations act as $R_y$ on the indicated two-label subspaces and as identity on their orthogonal complements, and $D_s$ is diagonal unitary. All three factors fix the unused label $|11\rangle$. On $|00\rangle$ the product gives $h(\widetilde\lambda)|00\rangle+f_\kappa(\widetilde\lambda)|01\rangle+g_\kappa(\widetilde\lambda)|10\rangle$, since $\cos(\beta/2)=h/r$ and $\sin(\beta/2)=g/r$. Uncompute the arithmetic. Synthesize the phase-controlled map with uniform operator error at most $\eta_R:=\epsilon/(4096\kappa)$, charged through $C_{\rm flag}$ and $C_{\rm arith}$.

4. Reverse the QFT, every actual controlled simulation circuit, and sine preparation, retaining the flag and all simulator work. In clean-workspace mode the ideal trajectory has this work in zero; [[lem-qa-25-clean-subspace-unitary-hybrid]] bounds the complete attempt on that ideal trajectory without assuming actual intermediate work is clean. This gives a unitary flagged preparation $V$ and its exact circuit inverse $V^\dagger$. Let $\Pi_{\rm good}$ be the well-flag projection in Hermitian mode and the product of the well-flag projection and tagged domain projection in rectangular mode; these two projections act on distinct registers and commute. Let $p=\|\Pi_{\rm good}V|0\rangle\|^2$. Apply the finite capped amplification procedure proved in [[lem-qa-26-hhl-capped-amplification]] with success projection $\Pi_{\rm good}$, lower bound $p_{\mathrm{low}}=1/(16\kappa^2)$ and failure target $\rho$. Its success reflection and verification test both the well flag and the domain tag in rectangular mode; charge their actual costs to $C_{\rm ref}$ and $C_{\rm ver}$. Measure $\{\Pi_{\rm good},I-\Pi_{\rm good}\}$ and return the conditional state, tagged output and success bit on success; return FAIL otherwise.

The circuit uses no uniform-register phase-tail estimate: its phase distribution is the sine-window kernel proved in [[lem-qa-26-hhl-sine-window-kernel-moment]]. Its $G_\Psi,C_\Psi,C_{\rm sim},C_{\rm QFT}^{+/-},C_{\rm flag}$, reflection, verification and $B/B^\dagger$ costs remain separate inputs.
