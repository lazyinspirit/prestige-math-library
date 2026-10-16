---
id: lem-qc-recursive-qsd-central-cz-absorption
kind: lemma
title: Exact Central Controlled-Z Absorption at a QSD Node
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - lem-qc-multiplexed-axis-rotation-gray-code
  - lem-qc-two-unitary-block-demultiplexing
  - thm-qc-one-qubit-euler-decomposition
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shende, Bullock, and Markov, Synthesis of Quantum Logic Circuits, Appendix A.1"
      url: https://arxiv.org/pdf/quant-ph/0406176
---

## Statement

Let $k\ge1$, let the first of $k+1$ wires be the target, and let $L=\operatorname{diag}(L_0,L_1)$ and $R=\operatorname{diag}(R_0,R_1)$ be generic block-diagonal unitaries in that target's basis. Let $M$ be a multiplexed $R_y$ on that target, selected by the other $k$ wires. The exact matrix $LMR$ can be represented by four generic $k$-qubit slots, two multiplexed $R_z$ factors and a central network with only $2^k-1$ controlled-$Z$ gates and arbitrary one-qubit rotations. Each controlled-$Z$ costs one CNOT. Thus one CNOT is saved relative to demultiplexing $L,R$ and using a full $2^k$-CNOT central rotation. The exact rewritten factors add no workspace, preserve scalar phases, and keep every non-target wire a select wire within the central network.

## Facts & Assumptions

**Given:** The target-first ordered basis, $k\ge1$, and $L,M,R$ as stated.

[F1] [[lem-qc-multiplexed-axis-rotation-gray-code]] supplies the cyclic Gray masks and Walsh angles for $M$.

[F2] [[thm-qc-one-qubit-euler-decomposition]] gives the QC7 matrix $R_y(t)=\begin{pmatrix}\cos(t/2)&-\sin(t/2)\\\sin(t/2)&\cos(t/2)\end{pmatrix}$.

[F3] [[lem-qc-two-unitary-block-demultiplexing]] factors each generic two-block unitary into two smaller unitaries and a diagonal two-block factor.

[F4] [[def-qc-cnot-and-control-target-order]] supplies the exact controlled-$X$ matrix; [[def-qc-circuit-denotational-semantics]] puts later chronological gates to the left.

[F5] [[def-qc-elementary-circuit-resources]] counts declared CNOT occurrences and all wires.

## Proof

1.1 Direct multiplication of [F2] gives $ZR_y(t)Z=R_y(-t)$, with $Z=\operatorname{diag}(1,-1)$. In the cyclic Gray construction [F1], replace each select-to-target controlled-$X$ by select-to-target controlled-$Z$. On select word $x$, the parity accumulated at mask $p_j$ is now $Z^{p_j\cdot x}$, so conjugation changes the $j$th rotation angle to $(-1)^{p_j\cdot x}\beta_j$. The same Walsh inversion proves the final target angle is $\theta_x$, and the final Gray edge restores the accumulated $Z$ exponent to zero. Thus this network equals $M$ exactly and contains $2^k$ controlled-$Z$ gates. All select bits are unchanged. [given, F1, F2, F4, algebra]

2.1 Let its final chronological controlled-$Z$ use select wire $r$, and put $Z_r$ for $Z$ on that select wire and identity on the other $k-1$ select wires. In target-first block order this last gate is $E_r=\operatorname{diag}(I_{2^k},Z_r)$. If $T$ is the chronological network with this last gate deleted, [F4] gives the exact identities $M=E_rT$ and $LMR=(LE_r)TR=\operatorname{diag}(L_0,L_1Z_r)\,T\,\operatorname{diag}(R_0,R_1)$. Both $L_0$ and $L_1Z_r$ remain arbitrary $k$-qubit unitaries. This is a block multiplication identity and does not commute $E_r$ through $L$. [step 1.1, F4, algebra]

3.1 Apply [F3] separately to $LE_r$ and $R$. These two generic block-diagonal factors still produce four arbitrary $k$-qubit slots and two diagonal two-block factors. A diagonal factor $\operatorname{diag}(D,D^*)$ is a multiplexed $R_z$ on the first wire: if $D_{xx}=e^{i\alpha_x}$, its two target entries are $e^{i\alpha_x},e^{-i\alpha_x}$ and hence equal $R_z(-2\alpha_x)$. The central $T$ has $2^k-1$ controlled-$Z$ gates. Therefore the rewritten circuit has exactly the required shape and retains the identity in step 2.1. [step 2.1, F2, F3, algebra]

4.1 Set $H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$. Direct multiplication gives $H^2=I$ and $HXH=Z$, so a controlled-$Z$ on a select-target pair equals $(I\otimes H)\operatorname{CNOT}(I\otimes H)$ in that pair's control-first order. Each costs one CNOT and two one-qubit gates, with no added wire. Thus deleting the terminal $E_r$ saves exactly one CNOT in the central network. Every remaining central gate still acts on the first-wire target or reads other wires only as unchanged selects. The block products in steps 2.1–3.1 are ordinary exact matrix products, so no scalar phase or workspace promise has been suppressed. [step 1.1, step 2.1, step 3.1, F4, F5, algebra] ∎
