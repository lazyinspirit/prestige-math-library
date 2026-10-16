---
id: alg-qc-two-level-gate-to-elementary-gates
kind: algorithm
title: Gray-Path Synthesis of a Two-Level Gate
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qc-two-level-unitary
  - def-qc-controlled-unitary-access
  - def-qc-elementary-circuit-resources
  - def-qc-ordered-bitstring-encoding
  - thm-qc-multicontrolled-ancilla-resource-tradeoff
  - lem-qc-borrowed-bit-multicontrolled-x-linear
  - thm-qc-one-control-unitary-two-cnot
  - thm-qc-one-qubit-euler-decomposition
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-polar-form-with-unique-principal-argument
  - thm-sine-and-cosine-addition-formulas
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-clean-and-dirty-ancillas
  - thm-qc-computational-basis-orthonormal
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification: {}
sources:
  references:
    - title: "Adriano Barenco et al., Elementary gates for quantum computation, arXiv:quant-ph/9503016v1"
      url: "https://arxiv.org/pdf/quant-ph/9503016"
---
## Definition

Input distinct $x,y\in\{0,1\}^n$, $n\ge1$, exact $V\in U(2)$, and for each controlled call a choice between the no-workspace and clean-bit constructions of [[thm-qc-multicontrolled-ancilla-resource-tradeoff]]. If any call selects the clean-bit construction, supply one clean bit initialized to $0$. Output: the chronological elementary-gate list on the $n$ data wires and, if selected, that one clean work wire.

Let $g_0=x,\ldots,g_d=y$ be the path that flips the differing bit positions once in increasing order, where $d$ is the Hamming distance. For $j=0,\ldots,d-2$, swap $g_j$ and $g_{j+1}$ by an $X$ on their differing bit controlled on the other $n-1$ bits matching their common pattern. Apply $V$ to the final pair $g_{d-1},y$ by a one-qubit target gate controlled on their common other bits, reversing the ordered $2\times2$ block if $g_{d-1}$ has target bit $1$. Undo the swaps in reverse order. Expand every multi-control using its selected construction; implement negative controls by conjugating that control wire with $X$.

Expand the calls by the following procedures. Every list below is chronological; concatenation means execute the left list first. Order control wires and available spare wires by their register positions. All parameter selections are exact mathematical operations: use exact matrix arithmetic, a finite-dimensional unitary eigendecomposition, polar arguments and the Euler parameter selection of [[thm-qc-one-qubit-euler-decomposition]]. The input representation must support these selections and exact zero tests; no finite-precision bit-time claim is made. Fix each selection when its call is first expanded and retain the resulting list for an inverse call.

For one control $c$, target $t$ and matrix $W$, choose $W=e^{i\delta}R_z(\alpha)R_y(\theta)R_z(\beta)$ as in [[thm-qc-one-qubit-euler-decomposition]]. Form the three matrices $A=R_z(\alpha)R_y(\theta/2)$, $B=R_y(-\theta/2)R_z(- (\alpha+\beta)/2)$ and $C=R_z((\beta-\alpha)/2)$. Define $S(c,t;W)$ to be the list $C_t$, $\mathrm{CNOT}_{c\to t}$, $B_t$, $\mathrm{CNOT}_{c\to t}$, $A_t$, $\operatorname{diag}(1,e^{i\delta})_c$. Each of $A,B,C$ is one arbitrary one-qubit gate, as in [[thm-qc-one-control-unitary-two-cnot]]. Define $T(a,b;t)$ by setting $J=((1+i)I+(1-i)X)/2$ and concatenating $S(b,t;J)$, $\mathrm{CNOT}_{a\to b}$, $S(b,t;J^*)$, $\mathrm{CNOT}_{a\to b}$, $S(a,t;J)$.

Define the ladder list $L(c_1,\ldots,c_s;t)$ with an ordered supply of at least $\max\{s-2,0\}$ distinct spare wires. For $s=1$ emit one CNOT; for $s=2$ emit $T(c_1,c_2;t)$. For $s\ge3$, use the first $s-2$ spares $a_1,\ldots,a_{s-2}$. Set $T_1=T(c_1,c_2;a_1)$, $T_j=T(c_{j+1},a_{j-1};a_j)$ for $2\le j\le s-2$, and $H=T(c_s,a_{s-2};t)$. Concatenate $T_1,\ldots,T_{s-2},H,T_{s-2},\ldots,T_1$ and then $T_2,\ldots,T_{s-2},H,T_{s-2},\ldots,T_2$; the latter list is just $H$ when $s=3$. This is the borrowed ladder used in [[lem-qc-borrowed-bit-multicontrolled-x-linear]].

Define $D(C;t;z)$ for an ordered nonempty control set $C$ and a distinct borrowed wire $z$. With one or two controls use the corresponding ladder base case and leave $z$ unused. With $r\ge3$ controls split $C$ into its first $p=\lceil r/2\rceil$ controls $A$ and the remaining $q=\lfloor r/2\rfloor$ controls $B$. Let $F=L(A;z)$ use spares from $B\cup\{t\}$, and let $G=L(B\cup\{z\};t)$ use spares from $A$. Emit $F,G,F,G$, using the same parameter choices for repeated lists. The stated spare supplies have at least $p-2$ and $q-1$ wires, respectively.

Define the positive-control no-workspace expansion $N(C;t;W)$ recursively. If $C$ is empty, emit $W_t$. If it has one wire $c$, emit $S(c,t;W)$. Otherwise write $C=A\cup\{b\}$, with $b$ its last control. Choose an orthonormal eigendecomposition $W=R\operatorname{diag}(\lambda_1,\lambda_2)R^*$ by [[thm-complex-spectral-theorem-for-normal-endomorphisms]], choose polar angles $\lambda_j=\cos u_j+i\sin u_j$ by [[thm-polar-form-with-unique-principal-argument]], and set $Z=R\operatorname{diag}(\cos(u_1/2)+i\sin(u_1/2),\cos(u_2/2)+i\sin(u_2/2))R^*$. The addition formulas of [[thm-sine-and-cosine-addition-formulas]] specify these half-angle roots. Emit $S(b,t;Z)$, $D(A;b;t)$, $S(b,t;Z^*)$, $D(A;b;t)$, $N(A;t;Z)$. The last call has one fewer control and uses only its indicated wires.

For the positive-control clean-bit expansion with nonempty $C$ and clean wire $w$, emit $D(C;w;t)$, $S(w,t;W)$, and the reversed adjoint of that same $D$ list. With no controls emit $W_t$ and leave $w$ unused. These are the two constructions analyzed in [[thm-qc-multicontrolled-ancilla-resource-tradeoff]]. For a pattern control, conjugate the selected whole positive-control list by one $X$ on each zero-valued control, ordering each set of these $X$ gates by wire position. Reverse the ordered middle block by using $XVX$ as its single matrix parameter, not by adding target $X$ occurrences.

Use the selected literal elementary gate list for each call without deleting identity gates or cancelling neighboring gates. In the one-control base use the three target matrices and one control phase as four arbitrary one-qubit gates. Use the same choices and reversed adjoint gate lists for the return swaps. Reuse the supplied clean bit sequentially; each selected clean-bit construction returns it to $0$.
