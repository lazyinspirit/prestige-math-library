---
id: lem-qc-r-y-r-z-multiplexor-gray-code
kind: lemma
title: "Exact Gray-code synthesis of multiplexed y- and z-axis rotations"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-pauli-matrices, thm-qc-axis-rotation-pauli-formula, def-qc-cnot-and-control-target-order, def-qc-circuit-syntax-and-register-order, def-qc-circuit-denotational-semantics, def-qc-elementary-circuit-resources, def-qc-ordered-bitstring-encoding, def-qc-tensor-register-and-permutation, lem-qc-local-gate-wire-embedding]
justified_by: []
dependency_level: 9
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits, arXiv:quant-ph/0406176v5, §§3 and 5"
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §2.2"
      url: https://arxiv.org/pdf/1907.09415
---

## Statement

For $k\ge0$ controls and real angles $\theta_x$ indexed by
$x\in\{0,1\}^k$, let
$$M_a=\sum_{x\in\{0,1\}^k}|x\rangle\langle x|\otimes R_a(\theta_x), \qquad a\in\{y,z\},$$
where $R_y(\theta)=R_{(0,1,0)}(\theta)$ and
$R_z(\theta)=R_{(0,0,1)}(\theta)$ use the exact exponential convention of
[[def-qc-one-qubit-gate-alphabet-and-rotations]]. There is an exact finite
circuit for $M_a$ on the same $k+1$ wires, using arbitrary one-qubit
rotations and CNOT gates and no ancillas. For $k=0$ it is one rotation and no
CNOT; for $k>0$ it uses $2^k$ target rotations and $2^k$ CNOTs. The circuit
uses exact real angle labels; no finite-bit encoding or synthesis-time bound
is asserted.

## Facts & Assumptions

**Given:** A finite ordered control register, one target qubit, real angles
$\theta_x$, and the specified exact y- or z-axis rotation family.

[F1] The exact one-qubit convention is
$R_{\mathbf n}(t)=\exp(-it\,\mathbf n\cdot\boldsymbol\sigma/2)$;
$X,Y,Z$ are the displayed Pauli matrices. Thus
$$R_y(t)=\begin{pmatrix}\cos(t/2)&-\sin(t/2)\\ \sin(t/2)&\cos(t/2)\end{pmatrix},\qquad R_z(t)=\operatorname{diag}(e^{-it/2},e^{it/2}).$$
([[def-qc-one-qubit-gate-alphabet-and-rotations]],
[[def-qc-pauli-matrices]], [[thm-qc-axis-rotation-pauli-formula]])

[F2] A CNOT with control wire $r$ and target wire $t$ maps a basis word by
$t\mapsto t\oplus r$; circuit products follow the
chronological gate order ([[def-qc-cnot-and-control-target-order]],
[[def-qc-circuit-denotational-semantics]]).

[F3] The finite product basis is indexed by ordered bitstrings, and gates may
be embedded on a specified ordered list of distinct wires
([[def-qc-ordered-bitstring-encoding]],
[[def-qc-tensor-register-and-permutation]],
[[def-qc-circuit-syntax-and-register-order]],
[[lem-qc-local-gate-wire-embedding]]).

[F4] The operation count is the number of occurrences from the declared
finite gate alphabet; for each fixed instance, the finitely many exact
rotation matrices and CNOT may be listed as that alphabet
([[def-qc-elementary-circuit-resources]],
[[def-qc-circuit-syntax-and-register-order]]).

## Proof


1.1 For $k>0$, put $m=2^k$ and, for $0\le j<m$, write $j$ as a $k$-bit word and set $p_j=j\oplus\lfloor j/2\rfloor$. In the arithmetic on these masks, bit $r=0$ is the least significant bit and controls are assigned to wires in reverse display order, as allowed by [F3]. In this proof, a control word $x$ is written in that same least-significant-first order, so it denotes the displayed register word $(x_{k-1},\ldots,x_0)$ and $\theta_x$ is the angle assigned to that displayed word; this is only a fixed reindexing of the finite branch set. The map is bijective: from $p_{k-1}=j_{k-1}$ and $p_r=j_{r+1}\oplus j_r$ one recovers the bits $j_r$ in descending order. Consecutive words $p_{j-1},p_j$ differ in exactly one coordinate: incrementing $j-1$ flips its trailing ones and the first zero, so in the Gray word all changed adjacent-bit XORs cancel except the bit at position $\nu_2(j)$, where $\nu_2(j)$ is the largest $r$ such that $2^r$ divides $j$. Also $p_0=0$ and $p_{m-1}=10\cdots0$, so the return from $p_{m-1}$ to $p_0$ changes one coordinate. Thus these words give a cyclic Gray traversal of all masks. [given, F3, construct, algebra]

2.1 Set $$\beta_j:=2^{-k}\sum_{y\in\{0,1\}^k}(-1)^{p_j\cdot y}\theta_y.$$ For each fixed $x$, bijectivity of $j\mapsto p_j$ gives $$\sum_{j=0}^{m-1}(-1)^{p_j\cdot x}\beta_j =2^{-k}\sum_y\theta_y\sum_{p\in\{0,1\}^k}(-1)^{p\cdot(x\oplus y)} =\theta_x.$$ Indeed, the inner sum factors as $\prod_{r=0}^{k-1}(1+(-1)^{x_r\oplus y_r})$, equal to $2^k$ when $x=y$ and zero otherwise. [given, step 1.1, algebra]

3.1 Write $\delta_j=p_{j-1}\oplus p_j$ for $1\le j<m$, and $\delta_m=p_{m-1}\oplus p_0$ for the return toggle. For a fixed control word $x$, the circuit matrix on the target is $$X^{\delta_m\cdot x}R_a(\beta_{m-1})X^{\delta_{m-1}\cdot x} R_a(\beta_{m-2})\cdots R_a(\beta_1)X^{\delta_1\cdot x}R_a(\beta_0).$$ The target-flip parity before rotation $j$ is $p_j\cdot x$. Direct multiplication of the matrices in [F1] gives, for both $a=y,z$, $XR_a(t)X=R_a(-t)$ and $R_a(s)R_a(t)=R_a(s+t)$. Moving each $X$ factor leftward through the preceding rotations gives angle sign $(-1)^{(\delta_{j+1}\oplus\cdots\oplus\delta_m)\cdot x} =(-1)^{p_j\cdot x}$ on $R_a(\beta_j)$, because the cyclic toggle sum is zero and $p_m=p_0=0$. No $X$ remains at the end. The rotations then combine to $R_a(\sum_j(-1)^{p_j\cdot x}\beta_j)=R_a(\theta_x)$ by step 2.1. The circuit consequently agrees with $M_a$ on every control basis subspace, and linearity gives equality on the whole register. It has $m$ rotations and $m$ CNOTs. For $k=0$ the sole term is $R_a(\theta_\emptyset)$ and needs no CNOT. [F1, F2, F3, F4, step 2.1, algebra, cases] ∎

