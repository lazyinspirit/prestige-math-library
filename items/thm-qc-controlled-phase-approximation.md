---
id: thm-qc-controlled-phase-approximation
kind: theorem
title: Controlled-Phase Approximation and Global-Phase Boundary
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-qc-controlled-phase-rotation
  - thm-qc-fixed-arity-unitary-error-budget
  - lem-qc-global-phase-under-control
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: https://arxiv.org/pdf/quant-ph/9503016
      locator: §§4–7, controlled gates and phase conventions, PDF pp. 8–25
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: Ch. 1 and Ch. 2 §2.2, PDF pp. 16 and 26–29
---

## Statement

For $\theta\in\mathbb R$, let
$P_\alpha=\operatorname{diag}(1,e^{i\alpha})$ and
$R_z(\alpha)=\operatorname{diag}(e^{-i\alpha/2},e^{i\alpha/2})$.
Define $CP_\theta=\operatorname{diag}(1,1,1,e^{i\theta})$ in the
control-first basis $|00\rangle,|01\rangle,|10\rangle,|11\rangle$.
Define CNOT by $|a,b\rangle\mapsto|a,b\oplus a\rangle$, where
$a,b\in\{0,1\}$ and $\oplus$ is addition modulo two. The continuous
phase-gate model permits each $P_\alpha$ exactly for real $\alpha$.
On an additional control qubit define
$C(M)=\operatorname{diag}(I_4,M)$ in control-first order. The two-qubit
circuit that applies CNOT, then $P_{-\theta/2}$ to the target, then CNOT,
then $P_{\theta/2}$ to each wire implements $CP_\theta$. Replacing the
three $P$ gates by their $R_z$ representatives gives
$e^{-i\theta/4}CP_\theta$; here
$P_\alpha=e^{i\alpha/2}R_z(\alpha)$.

For the three-qubit factorization, use the lexicographically ordered basis
$|a,b,c\rangle$ with $a,b,c\in\{0,1\}$. A gate $P_\alpha^{(j)}$ multiplies
this basis vector by $e^{i\alpha x_j}$, where $(x_1,x_2,x_3)=(a,b,c)$;
$\operatorname{CNOT}_{i\to j}$ toggles bit $x_j$ by $x_i$ and fixes the
other bits. These explicit basis actions fix the wire order used below.

For $0<\varepsilon<1/2$, the fixed-arity compiler gives a projective operator approximation within
$\varepsilon$ when applied to the complete $CP_\theta$ block. If this block
is controlled by an additional qubit, one valid approach is to apply the
compiler to the complete three-qubit controlled-$CP_\theta$ matrix. A phase-minimized
approximation to $CP_\theta$ cannot in general be controlled without
restoring its relative phase: if $\|CP_\theta-\mu W\|\le\varepsilon$
and $|\mu|=1$, then
$$\|C(CP_\theta)-(\operatorname{diag}(1,\mu)\otimes I_4)C(W)\|\le\varepsilon.$$
Thus phase restoration is another valid approach when $C(W)$ and the
control phase are available. This identity alone assigns no finite-gate
cost or controlled black-box access to those operations.
In particular, controlling the $R_z$ circuit
from the first paragraph gives
$C(e^{-i\theta/4}CP_\theta)=
(\operatorname{diag}(1,e^{-i\theta/4})\otimes I_4)C(CP_\theta)$;
applying $P_{\theta/4}$ to the added control restores the exact controlled
target in the continuous phase-gate model.

## Facts & Assumptions

**Given:** $\theta\in\mathbb R$, the ordered basis
$|00\rangle,|01\rangle,|10\rangle,|11\rangle$, and the continuous phase-gate
model, and $0<\varepsilon<1/2$ for the approximation claims.

[F1] [[def-qc-controlled-phase-rotation]] defines the exact phase gate
$P_\theta=\operatorname{diag}(1,e^{i\theta})$ and its control-first block
$CP_\theta=\operatorname{diag}(1,1,1,e^{i\theta})$.

[F2] [[lem-qc-global-phase-under-control]]: for a unit scalar $\lambda$,
$C(\lambda U)=(P_\lambda\otimes I)C(U)$; the scalar becomes a relative phase
on the active control block.

[F3] [[thm-qc-fixed-arity-unitary-error-budget]] gives projective operator
error at most $\varepsilon$ for a complete fixed-arity block when an exact
factorization into one-qubit gates and CNOTs is supplied.

## Proof

1.1 On a basis vector $|ab\rangle$, the first CNOT maps it to $|a,b\oplus a\rangle$. The target phase contributes $e^{-i\theta(b\oplus a)/2}$; the second CNOT restores $|ab\rangle$; and the two final phase gates contribute $e^{i\theta(a+b)/2}$. The product is $e^{i\theta ab}$, which is $1$ on $|00\rangle,|01\rangle,|10\rangle$ and $e^{i\theta}$ on $|11\rangle$. This is exactly $CP_\theta$ from [F1]. [given, F1, algebra]

2.1 Direct diagonal multiplication gives $P_\alpha=e^{i\alpha/2}R_z(\alpha)$, hence $R_z(\alpha)=e^{-i\alpha/2}P_\alpha$. Replacing $P_{-\theta/2}$ on the target contributes $e^{i\theta/4}$, while replacing each of the two $P_{\theta/2}$ gates contributes $e^{-i\theta/4}$. Their product is $e^{-i\theta/4}$, so the resulting $R_z$ circuit is $e^{-i\theta/4}CP_\theta$. [given, F1, step 1.1, algebra]

2.2 The circuit in step 1.1 is an exact factorization of the two-qubit $CP_\theta$ into three one-qubit phase gates and two CNOTs. Applying [F3] therefore gives a word $W$ and unit scalar $\mu$ with $\|CP_\theta-\mu W\|\le\varepsilon$. By [F2], $C(\mu W)=(\operatorname{diag}(1,\mu)\otimes I_4)C(W)$. The difference $C(CP_\theta)-C(\mu W)=\operatorname{diag}(0,CP_\theta-\mu W)$ has norm exactly $\|CP_\theta-\mu W\|$: on a vector $(x,y)$ it acts as $(0,(CP_\theta-\mu W)y)$, giving the upper bound, and vectors $(0,y)$ give equality. Consequently the displayed phase-corrected controlled approximation has error at most $\varepsilon$. If $\mu\ne1$, the correction $\operatorname{diag}(1,\mu)$ is not a scalar on the control. Omitting it is not justified by the two-qubit projective bound; using it requires both the control phase and $C(W)$ to be available. [F2, F3, step 1.1, algebra]

3.1 With $\lambda_R=e^{-i\theta/4}$ from step 2.1, [F2] gives $C(\lambda_R CP_\theta)=(\operatorname{diag}(1,\lambda_R)\otimes I_4) C(CP_\theta)$. Applying $P_{\theta/4}=\operatorname{diag}(1,\overline{\lambda_R})$ to the outer control restores the exact controlled target in the continuous phase-gate model. [F2, step 2.1, algebra]

4.1 The complete controlled target is the diagonal three-qubit matrix $D_\theta=\operatorname{diag}(1,1,1,1,1,1,1,e^{i\theta})$. For bits $a,b,c\in\{0,1\}$, put $p_{ab}=a\oplus b$, $p_{ac}=a\oplus c$, $p_{bc}=b\oplus c$, and $p_{abc}=a\oplus b\oplus c$. Checking the four possible Hamming weights $0,1,2,3$ makes the right side respectively $0,0,0,4$, so $4abc=a+b+c-p_{ab}-p_{ac}-p_{bc}+p_{abc}$. Apply $P_{\theta/4}$ to each single bit. To apply $P_{-\theta/4}$ to $p_{ab}$, use a CNOT with control $b$ and target $a$, apply $P_{-\theta/4}$ to wire $a$, and undo that CNOT; the target wire then again contains $a$. Use the corresponding pairs for $p_{ac}$ and $p_{bc}$. To apply $P_{\theta/4}$ to $p_{abc}$, use two CNOTs into wire $a$, apply $P_{\theta/4}$ there, and undo both CNOTs. On each basis state these circuits restore the original bits and contribute exactly the indicated signed parity phase. The resulting phase is $e^{i\theta abc}$, so this is an exact factorization of $D_\theta$ with seven one-qubit phase gates and ten CNOTs. Applying [F3] to this complete three-qubit factorization gives a projective operator approximation to $D_\theta$ itself; its scalar is global on the three-qubit block. This supplies the complete-block compilation option in the statement. [F3, given, algebra, construct] ∎