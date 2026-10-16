---
id: lem-qc-multiplexed-axis-rotation-gray-code
kind: lemma
title: Gray-Code Synthesis of a Multiplexed Axis Rotation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-ordered-bitstring-encoding
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-pauli-matrices
  - thm-qc-axis-rotation-pauli-formula
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
  - thm-qc-computational-basis-orthonormal
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5"
      url: "https://arxiv.org/pdf/quant-ph/0406176"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $k\ge0$ controls have computational labels $x\in\{0,1\}^k$, and let $\theta_x\in\mathbb R$. Fix $a\in\{x,y,z\}$. On one target qubit define
$$M=\sum_{x\in\{0,1\}^k}|x\rangle\langle x|\otimes R_a(\theta_x),\qquad R_a(t)=\exp(-it\sigma_a/2).$$
Then $M$ is exactly synthesized with $2^k$ CNOTs for $k>0$ (the final CNOT restores the parity network). For $a=y,z$ it uses $2^k$ target rotations $R_a(\beta_j)$; for $a=x$ it uses $2^k$ $R_y$ rotations in the fixed target basis described below; for $k=0$ it is one rotation and no CNOT. For $a=x$ and $k>0$ the implementation also uses two fixed target basis-change gates; the $y,z$ implementations need none. One may replace the cyclic Gray traversal by a traversal that omits the final restoration and absorb that final parity into the next block only when that block is explicitly specified.

## Facts & Assumptions

**Given:** The real angles $(\theta_x)$, the computational-basis order on the controls, and the rotation convention $R_a(t)=\exp(-it\sigma_a/2)$. For a control bit $x_r$ and target bit $b$, define $\mathrm{CNOT}_{r\to t}|x,b\rangle=|x,b\oplus x_r\rangle$, extending linearly; its matrix is a permutation and is self-inverse.

[F1] [[def-qc-ordered-bitstring-encoding]]: the ordered $n$-qubit basis assigns bit word $x$ the big-endian index $\operatorname{enc}_n(x)=\sum_{r<n}x_r2^{n-1-r}$, so the first wire is the most significant bit.

[F2] [[thm-qc-axis-rotation-pauli-formula]]: $R_{\mathbf n}(t)=\cos(t/2)I-i\sin(t/2)(\mathbf n\cdot\boldsymbol\sigma)$ for real unit $\mathbf n$.

[F3] [[def-qc-pauli-matrices]]: $Y=\left(\begin{smallmatrix}0&-i\\i&0\end{smallmatrix}\right)$ in the ordered computational basis.

[F4] [[def-qc-cnot-and-control-target-order]]: the first-wire-control CNOT maps $|a,t\rangle$ to $|a,t\oplus a\rangle$ and is self-inverse.

[F5] [[def-qc-circuit-denotational-semantics]]: later-applied gates multiply on the left of earlier gates in the circuit denotation.

[F6] [[def-qc-elementary-circuit-resources]]: the declared gate count is the number of occurrences from the operation model's allowed alphabet.

[F7] [[thm-qc-computational-basis-orthonormal]]: the ordered computational basis is orthonormal.

## Proof


1.1 For $k>0$, construct the reflected list $G_1=(0,1)$ and $G_k=(0G_{k-1},1\operatorname{rev}(G_{k-1}))$ for $k\ge2$. Induction shows that each mask occurs once, adjacent masks differ in one coordinate, and the last mask differs from the first in one coordinate. Enumerate these $2^k$ masks as $p_j$, beginning at $p_0=0$. For $k=0$, take the singleton list containing the empty mask and use no coordinate transition. Set $H_{xj}=(-1)^{p_j\cdot x}$ and choose $\beta_j=2^{-k}\sum_yH_{yj}\theta_y$. For $z=x\oplus y$, summing over all masks factors as $\sum_p(-1)^{p\cdot z}=\prod_{r=1}^k(1+(-1)^{z_r})$, which equals $2^k$ when $z=0$ and $0$ otherwise. Substituting the chosen $\beta_j$ therefore gives $\sum_jH_{xj}\beta_j=\theta_x$. [given, F1, choose, algebra]

2.1 Assume $k>0$. Substitute $\mathbf n=(0,1,0)$ in [F2] and use [F3]; this gives $R_y(t)=\left(\begin{smallmatrix}\cos(t/2)&-\sin(t/2)\\\sin(t/2)&\cos(t/2)\end{smallmatrix}\right)$. Apply $R_y(\beta_0)$, then toggle the single control coordinate taking $p_0$ to $p_1$ with a CNOT and apply $R_y(\beta_1)$, continuing through $p_{2^k-1}$ and using one final CNOT to restore mask $0$. On a fixed control basis state $|x\rangle$, the accumulated target bit flip before the $j$th rotation is $p_j\cdot x$ modulo two by [F4]. The CNOT network consists of basis permutations and hence is unitary by [F7]. Conjugation by $X$ gives $XR_y(t)X=R_y(-t)$ by direct multiplication of the displayed matrix, so that rotation acts as $R_y((-1)^{p_j\cdot x}\beta_j)$. Its ordered application agrees with [F5], and [F6] counts these gate occurrences. [step 1.1, F2, F3, F4, F5, F6, F7, algebra]

3.1 Direct multiplication of the $R_y$ matrices from step 2.1 gives $R_y(s)R_y(t)=R_y(s+t)$. Thus on branch $x$ the target product is $R_y(\sum_jH_{xj}\beta_j)=R_y(\theta_x)$ by step 1.1. The final CNOT returns the parity network to zero and hence leaves no extra control-dependent permutation. This proves the exact block action for every computational branch; linearity proves it on every superposition. For $k=0$, there is one branch and the circuit is just $R_y(\theta_0)$. [step 1.1, step 2.1, F2, F3, algebra]

4.1 For $a=z$, use exactly the same masks and angles with $R_z$ in place of $R_y$: the diagonal formula $R_z(t)=\operatorname{diag}(e^{-it/2},e^{it/2})$ gives $XR_z(t)X=R_z(-t)$ and $R_z(s)R_z(t)=R_z(s+t)$, proving the same branch calculation. For $a=x$, put $B=R_z(-\pi/2)$. Direct Pauli multiplication gives $BYB^*=X$, hence $BR_y(t)B^*=R_x(t)$ by [F2]. Conjugate the entire $y$ circuit by the two target gates $B^*,B$ in chronological order. Its branch action is $BR_y(\theta_x)B^*=R_x(\theta_x)$. This implementation retains the original $y$ network unchanged between the two external basis changes, so it has exactly $2^k$ CNOTs, $2^k$ $R_y$ rotations, and those two additional one-qubit gates. For $k=0$, directly apply $R_a(\theta_0)$. [step 1.1, step 2.1, step 3.1, F2, algebra] ∎
