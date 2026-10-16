---
id: alg-qc-state-preparation
kind: algorithm
title: QC24 State Preparation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-state-preparation-cost-model
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-controlled-unitary-access
  - def-qc-ordered-bitstring-encoding
  - def-qc-toffoli-and-fredkin
  - thm-qc-axis-rotation-pauli-formula
  - def-qc-circuit-denotational-semantics
  - thm-polar-form-with-unique-principal-argument
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by:
  - thm-qc-state-preparation-rotation-level-upper-bound
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
---

## Definition

**Input and output.** Input an integer $n\ge0$ and an explicit exact table $(a_x)_{x\in\{0,1\}^n}$ in the ordered basis convention of [[def-qc-ordered-bitstring-encoding]]. If the table length is not $D=2^n$ or $\sum_x|a_x|^2\ne1$, return INVALID. Otherwise return a finite continuous-gate circuit which prepares the ray $[a]$ from $|0^n\rangle$, together with its classical angle table. When the table is supplied as a dense fixed-width bit encoding, read all $b$ bits of each real and imaginary coordinate before computation. Arithmetic is ideal and exact: it supplies complex arithmetic, absolute value, exact zero tests and square roots; for $x,y\ge0$ not both zero, $\operatorname{atan2}(y,x)$ returns the unique $\phi\in[0,\pi/2]$ with $\cos\phi=x/\sqrt{x^2+y^2}$ and $\sin\phi=y/\sqrt{x^2+y^2}$. For $z\ne0$, $\arg z\in(-\pi,\pi]$ is the unique principal angle in the polar form of [[thm-polar-form-with-unique-principal-argument]], so $z=|z|e^{i\arg z}$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. No Turing bit-time bound is asserted.

**Prefix norms and rotations.** For every binary prefix $p$ of length at most $n$, set

$$r_p=\sqrt{\sum_{x\text{ extends }p}|a_x|^2}.$$

For $\theta\in\mathbb R$ define

$$R_y(\theta)=\begin{pmatrix}\cos(\theta/2)&-\sin(\theta/2)\\\sin(\theta/2)&\cos(\theta/2)\end{pmatrix}$$

in basis $(|0\rangle,|1\rangle)$. This is the $y$-axis rotation in the QC07 exponent convention; [[thm-qc-axis-rotation-pauli-formula]] gives this matrix and its unitarity. Define $C(U)=\operatorname{diag}(I_2,U)$ with the control as the first wire, following [[def-qc-controlled-unitary-access]]. For each $l=0,\ldots,n-1$ and each length-$l$ prefix $p$ in lexicographic order, skip the operation if $r_p=0$; otherwise set $\theta_p=2\operatorname{atan2}(r_{p1},r_{p0})$ and apply $R_y(\theta_p)$ to bit $l$, controlled on the first $l$ bits equaling $p$. Length zero means no control. Thus no division is performed on a zero-norm branch.

**Exact bounded-arity control construction.** For a control pattern with $m\ge2$ bits, conjugate each zero-control bit by $X$ so the desired condition becomes all ones. Allocate $m-1$ clean work bits $w_1,\ldots,w_{m-1}$. Compute $w_1=c_1c_2$ with one Toffoli; for $j=3,\ldots,m$, compute $w_{j-1}=w_{j-2}c_j$ with one Toffoli. Use the final work bit as the control for the desired two-wire unitary, then apply the Toffolis in reverse order and undo the $X$ conjugations. For a leaf phase, apply $P_\phi=\operatorname{diag}(1,e^{i\phi})$ to the final work bit instead. For $m=1$ use the corresponding one-control unitary directly; for $m=0$ apply the one-qubit operation directly. The work bits return to zero after each operation and are reused. A one-bit leaf phase uses $P_\phi$ directly for pattern $1$ and $XP_\phi X$ for pattern $0$.

**Leaf phases.** For a basis string $x$, define $P_{x,\phi}=I+(e^{i\phi}-1)|x\rangle\langle x|$. Let $x_*$ be the lexicographically first index with $a_{x_*}\ne0$. For each other $x$ with $a_x\ne0$ and $\arg(a_x)\not\equiv0\pmod{2\pi}$, apply $P_{x,\arg(a_x)}$ using the control construction above. Zero entries and zero phases require no gate. Omitting $\arg(a_{x_*})$ changes only a common scalar, so the output is the target ray. When $n=0$, the valid table has one unit-modulus entry and the empty circuit already prepares its unique ray.
