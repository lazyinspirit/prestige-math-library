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
  - def-qc-pauli-matrices
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Vivek V. Shende, Stephen S. Bullock, and Igor L. Markov, Synthesis of Quantum Logic Circuits
      url: https://arxiv.org/pdf/quant-ph/0406176
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
---

## Definition

**Input and output.** Input an integer $n\ge0$ and an explicit exact table $(a_x)_{x\in\{0,1\}^n}$ in the ordered basis convention of [[def-qc-ordered-bitstring-encoding]]. If the table length is not $D=2^n$ or $\sum_x|a_x|^2\ne1$, return INVALID. Otherwise return a finite continuous-gate circuit which prepares the ray $[a]$ from $|0^n\rangle$, together with its classical angle table. When the table is supplied as a dense fixed-width bit encoding, read all $b$ bits of each real and imaginary coordinate before computation. Arithmetic is ideal and exact: it supplies complex arithmetic, absolute value, exact zero tests and square roots; for $x,y\ge0$ not both zero, $\operatorname{atan2}(y,x)$ returns the unique $\phi\in[0,\pi/2]$ with $\cos\phi=x/\sqrt{x^2+y^2}$ and $\sin\phi=y/\sqrt{x^2+y^2}$. For $z\ne0$, $\arg z\in(-\pi,\pi]$ is the unique principal angle in the polar form of [[thm-polar-form-with-unique-principal-argument]], so $z=|z|e^{i\arg z}$ by [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]. No Turing bit-time bound is asserted.

**Exact gate-family operation model.** Interpret this procedure's output in the ideal continuous-angle model with exact one-qubit gates $R_y(\theta)$ and $P_\phi:=\operatorname{diag}(1,e^{i\phi})$ for arbitrary real $\theta,\phi$, the two-qubit gate $C(R_y(\theta))=\operatorname{diag}(I_2,R_y(\theta))$ with the control first, and the fixed gates $X$ ([[def-qc-pauli-matrices]]) and Toffoli ([[def-qc-toffoli-and-fredkin]]). Each occurrence of any of these gates costs one gate occurrence; the operation model explicitly grants controlled access to every $R_y(\theta)$ ([[def-qc-controlled-unitary-access]]). The phase gate is unitary since $|e^{i\phi}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]). This is an ideal parameterized gate-family model, distinct from a finite fixed-matrix alphabet. It does not assert that arbitrary-angle gates are exactly available from a finite alphabet or give their finite-alphabet cost.

**Prefix norms and rotations.** For every binary prefix $p$ of length at most $n$, set

$$r_p=\sqrt{\sum_{x\text{ extends }p}|a_x|^2}.$$

For $\theta\in\mathbb R$ define

$$R_y(\theta)=\begin{pmatrix}\cos(\theta/2)&-\sin(\theta/2)\\\sin(\theta/2)&\cos(\theta/2)\end{pmatrix}$$

in basis $(|0\rangle,|1\rangle)$. This is the $y$-axis rotation in the QC07 exponent convention; [[thm-qc-axis-rotation-pauli-formula]] gives this matrix and its unitarity. Define $C(U)=\operatorname{diag}(I_2,U)$ with the control as the first wire, following [[def-qc-controlled-unitary-access]]. For each $l=0,\ldots,n-1$ and each length-$l$ prefix $p$ in lexicographic order, skip the operation if $r_p=0$; otherwise set $\theta_p=2\operatorname{atan2}(r_{p1},r_{p0})$ and apply $R_y(\theta_p)$ to bit $l$, controlled on the first $l$ bits equaling $p$. Length zero means no control. Thus no division is performed on a zero-norm branch.

**Exact bounded-arity control construction.** For a prefix rotation with $m\ge2$ control bits, conjugate each zero-control bit by $X$ so the requested condition becomes all ones. Allocate $m-1$ clean work bits $w_1,\ldots,w_{m-1}$. Compute $w_1=c_1c_2$ with one Toffoli; for $j=3,\ldots,m$, compute $w_{j-1}=w_{j-2}c_j$ with one Toffoli. Apply $C(R_y(\theta_p))$ to the flag and target bits, with the flag as the control, then apply the Toffolis in reverse order and undo the $X$ conjugations. For $m=1$, apply $C(R_y(\theta_p))$ directly when the requested pattern is $1$; for pattern $0$, conjugate that controlled gate by $X$ on its control wire. For $m=0$, apply $R_y(\theta_p)$ directly to the target bit. For a leaf phase with $m\ge2$, use the same flag construction and apply $P_\phi=\operatorname{diag}(1,e^{i\phi})$ to the final work bit instead of a controlled rotation. A one-bit leaf phase uses $P_\phi$ directly for pattern $1$ and $XP_\phi X$ for pattern $0$. The work bits return to zero after each operation and are reused; no multi-control gate is assumed as a primitive.

**Leaf phases.** For a basis string $x$, define $P_{x,\phi}=I+(e^{i\phi}-1)|x\rangle\langle x|$. Let $x_*$ be the lexicographically first index with $a_{x_*}\ne0$. Put $\phi_*=\arg(a_{x_*})$. For each other $x$ with $a_x\ne0$, put $\phi_x=\arg(a_x)-\phi_*$ and, unless $\phi_x\equiv0\pmod{2\pi}$, apply $P_{x,\phi_x}$ using the control construction above. The reference leaf needs no phase, and zero entries and zero relative phases require no gate. Every nonzero output amplitude is then $e^{-i\phi_*}a_x$, including the reference leaf, so the output is the target ray. When $n=0$, the valid table has one unit-modulus entry and the empty circuit already prepares its unique ray.
