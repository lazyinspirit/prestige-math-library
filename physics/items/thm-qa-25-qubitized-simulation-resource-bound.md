---
id: thm-qa-25-qubitized-simulation-resource-bound
kind: theorem
title: Qubitization query and gate resources
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - thm-qa-25-qubitized-simulation-correctness
  - alg-qa-25-small-time-aware-simulator
  - thm-qa-25-small-time-aware-simulator-correctness
  - def-qa-25-qubitization-access-model
  - thm-qa-24-qsvt-error-and-resource-bound
  - thm-qa-24-qsvt-query-count
  - thm-qa-23-qsp-query-cost
  - thm-qa-25-sparse-hamiltonian-block-encoding-correctness
  - lem-qa-25-jacobi-anger-truncation
  - lem-qa-25-sorted-xor-sparse-access-isometries
proof_strategy: direct
axiom_use: "None; the bound follows from the explicit finite circuit counts and scalar tail estimate."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Theorem 58, Lemma 59, and Corollary 60"
      url: "https://arxiv.org/pdf/1806.01838"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Guang Hao Low and Isaac L. Chuang, Hamiltonian Simulation by Qubitization"
      url: "https://arxiv.org/pdf/1610.06546"
---

## Statement

Let $\tau=\alpha|t|$ and $L=\ln(1/\epsilon)$, with $0<\epsilon<1$. In the nontrivial branch $\tau>\epsilon$, put $S=\tau+L/\ln(e+L/\tau)$. The small-time-aware simulator of [[alg-qa-25-small-time-aware-simulator]] uses zero signal queries when $\tau\le\epsilon$. When $\tau>\epsilon$, the OP4 degree satisfies $d=O(S)$. The complete OAA circuit uses at most $3(d_E+d_O)\le6d$ ordinary $U/U^*$ signal calls, where $d_E,d_O\le d$ are the even and odd QSP degrees. It uses $3(d_E+d_O+2)$ projector-phase slots and therefore $6(d_E+d_O+2)$ controlled-reflection calls, by [[thm-qa-24-qsvt-query-count]]. Coherent selection of each real sequence against identity uses exactly one controlled signal call when that sequence degree is odd and none when it is even; because the selection occurs in each of the three OAA blocks $W,W^*,W$, the total is $3(\mathbf1_{d_E\text{ odd}}+\mathbf1_{d_O\text{ odd}})\le6$ controlled signal calls. The $\Phi/-\Phi$ branch itself controls phases, not signal calls. Any external control of the complete simulator controls and charges the whole block.

Gate, depth, width, ancilla, classical bit, precision, PREPARE/SELECT, phase-list-generation, and sparse-location/value costs remain separate coordinates. For a $d_H$-row-sparse input with supplied-permutation bound $h\ge h_{\max}$, the $h=0$ branch encodes $H=0$ with normalization $1$ and uses no location or value calls. If $h>0$, [[thm-qa-25-sparse-hamiltonian-block-encoding-correctness]] gives normalization $\alpha=d_Hh$; choosing the tight bound $h=h_{\max}$ gives $\alpha=d_Hh_{\max}$. Multiply the signal-query count by the actual supplied sparse-encoding cost, including any location-permutation completion. The optional sorted-XOR mode has the same normalization $d_Hh$ for a supplied positive entry bound $h$ and multiplies the signal count by $O(\log(d_H+1))$ location calls and $O(1)$ value calls per signal, including inverses and coherent controls. No cost-free conversion from XOR row-location access is claimed. If $\tau$ is bounded above and below by positive constants as $\epsilon\to0$, the query bound specializes to $O(\tau+L/\ln L)=O(\tau+\ln(1/\epsilon)/\ln\ln(1/\epsilon))$. This is an upper bound; no matching lower bound for arbitrary block-encoding access or for the additive precision term is asserted.

## Facts & Assumptions

**Given:** An exact block encoding, the certified OP4 procedure, rational $t,\epsilon$, and all separately charged access operations.

[F1] [[alg-qa-25-small-time-aware-simulator]]: use the identity branch for $\tau\le\epsilon$, otherwise execute OP4.

[F2] [[lem-qa-25-jacobi-anger-truncation]]: for $\tau>\epsilon$, the OP4 factorial-tail loop terminates at degree $d=O(\tau+L/\ln(e+L/\tau))$.

[F3] [[thm-qa-24-qsvt-query-count]]: a degree-$r$ signal sequence has $r$ signal calls, $r+1$ projector phases, and at most one controlled signal call when controlled against identity if $r$ is odd.

[F4] [[thm-qa-23-qsp-query-cost]]: a scalar QSP sequence of degree $r$ has $r$ signal factors and $r+1$ phase factors; signal-query and phase-gate costs are separate.

[F5] [[thm-qa-24-qsvt-error-and-resource-bound]]: every sequence access, phase, controlled operation, synthesis, and precision budget is a separate declared cost.

[F6] [[thm-qa-25-sparse-hamiltonian-block-encoding-correctness]]: the supplied-permutation sparse signal block uses normalization $1$ and no sparse calls when $h=0$; for $h>0$ its normalization is $d_Hh$ for certified $h\ge h_{\max}$, including the tight choice $h=h_{\max}$. The sorted-XOR branch with positive $h$ has normalization $d_Hh$ and costs $O(\log(d_H+1))$ location and $O(1)$ value calls per signal, including inverses and controls.

[F7] [[thm-qa-25-qubitized-simulation-correctness]]: on successful execution, the declared circuit satisfies the operator-isometry error guarantee.

## Proof

**Given:** As in Facts & Assumptions.

1.1 If $\tau\le\epsilon$, [F1] returns the exact identity and makes no signal call. If $\tau>\epsilon$, the degree test of [F2] has a finite passing candidate and its least accepted degree obeys the stated $O(S)$ bound. [F1, F2, cases]

1.2 In one OAA application, $W$ contains one even and one odd real QSVT extraction. By [F3], they use $d_E+d_O$ signal calls and $d_E+d_O+2$ projector-phase slots. OAA uses $W,W^*,W$, so the total is exactly $3(d_E+d_O)$ signal calls and $3(d_E+d_O+2)$ phase slots, bounded above by $6d$ and $6d+6$, respectively. [F1, F3, algebra]

2.1 By [F3], controlling each selected real extraction against identity needs one controlled signal call exactly when its degree is odd. OAA contains the three signal blocks $W,W^*,W$, so the even and odd extractions together use exactly $3(\mathbf1_{d_E\text{ odd}}+\mathbf1_{d_O\text{ odd}})$ such calls. By [F4], the control selecting $\Phi$ or $-\Phi$ acts only on phase rotations and adds no signal query. Any further external control invokes the separately supplied controlled-$U$ or controlled-$U^*$ operations by [F5]. [F3, F4, F5, step 1.2, algebra]

3.1 The lists in OP4 are generated once, while the OAA circuit reuses the declared phase lists, coefficient preparation, and SELECT circuits in its three block calls and their inverses. Every implementation cost named in the Statement is retained from [F5]; the sparse branch multiplies these signal counts by the supplied block-encoding operations and normalization in [F6]. In the optional sorted-XOR branch this explicitly multiplies the signal count by $O(\log(d_H+1))$ location and $O(1)$ value calls; the supplied-permutation branch retains its original sharper count. Thus no sparse location/value, phase-synthesis, or classical bit cost is absorbed into an oracle count. [F5, F6, step 1.2, step 2.1]

4.1 When $0<c\le\tau\le C<\infty$ and $\epsilon\to0$, $L=\ln(1/\epsilon)\to\infty$ and $\ln(e+L/\tau)=\Theta(\ln L)$, since $L/C\le L/\tau\le L/c$. Substituting this comparison into $S$ gives $O(\tau+L/\ln L)$, the stated standard-regime form. Correctness remains the separate theorem [F7]. [F2, F7, step 1.1, algebra] ∎
