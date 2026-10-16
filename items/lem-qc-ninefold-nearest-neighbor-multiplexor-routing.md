---
id: lem-qc-ninefold-nearest-neighbor-multiplexor-routing
kind: lemma
title: "Ninefold nearest-neighbor multiplexor routing"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - lem-qc-unoptimized-qsd-recursive-decomposition-and-count
  - lem-qc-multiplexed-axis-rotation-gray-code
  - def-qc-cnot-and-control-target-order
  - def-qc-circuit-syntax-and-register-order
  - def-qc-circuit-denotational-semantics
  - def-qc-elementary-circuit-resources
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Shende, Bullock, and Markov, Synthesis of Quantum Logic Circuits, nearest-neighbor decomposition section"
      url: https://arxiv.org/pdf/quant-ph/0406176
proof_strategy: direct
---

## Statement

For the unoptimized recursive QSD circuit, use the contiguous interval layout in which each multiplexed-rotation target is an endpoint, each recursive child acts on the remaining contiguous interval, and each two-qubit terminal block acts on adjacent wires. The line architecture permits both ordered orientations of adjacent CNOT. Replacing each length-$k$ CNOT in a multiplexor by the explicit line-neighbor network below uses at most nine times the original CNOT count. This is an architecture-specific gate-count bound; it asserts no depth bound or arbitrary-layout guarantee.

## Facts & Assumptions

**Given:** $n\ge2$ ordered qubits, the contiguous recursive layout stated above, the cyclic reflected Gray-code multiplexor implementation, and both directed adjacent CNOT orientations.

[F1] [[lem-qc-multiplexed-axis-rotation-gray-code]] gives an exact $(n-1)$-control multiplexed-axis rotation using $2^{n-1}$ CNOTs; the final CNOT restores the parity network.

[F2] [[def-qc-cnot-and-control-target-order]] fixes $\mathrm{CNOT}_{j\to j+1}|a,b\rangle=|a,b\oplus a\rangle$ and makes each CNOT self-inverse.

[A1] [[lem-qc-unoptimized-qsd-recursive-decomposition-and-count]] proves the exact recursive block structure and unoptimized CNOT recurrence. The separate optimized count is not used here.

[A2] [[def-qc-circuit-syntax-and-register-order]] fixes ordered wire labels and chronological layers; [[def-qc-circuit-denotational-semantics]] fixes embedded-gate and circuit products; [[def-qc-elementary-circuit-resources]] counts gate occurrences and explicit layers. These current draft bodies were inspected. They provide the syntax, denotation, and cost conventions used to state the routing result; their presence is not independent approval.

## Proof


1.1 Let $m=n-1$ be the number of controls and list them from nearest to farthest from the target. In a reflected Gray traversal, the nearest control is toggled at most $2^m$ times; the control at distance $k\ge2$ is toggled at most $2^{m-k+1}=2^{n-k}$ times. To see the bound, recursively form the reflected list $G_m=(G_{m-1}0,\operatorname{rev}(G_{m-1})1)$ and add the final edge returning the last word to the first: each non-farthest coordinate's toggle count is at most twice its count at the preceding recursion level, while the farthest coordinate changes at most twice (once at the join and once on return). The bound holds at $m=1$ and induction gives the displayed powers. Each toggle is one CNOT between the toggled control and the target. The total number of original CNOTs is $2^m$ by [F1]. [F1, construct, induction, algebra]

2.1 For a CNOT whose endpoints are $k\ge2$ line edges apart, define $S_k$ to be the sequence of adjacent CNOTs along edges $0\to1,1\to2,\ldots,k-1\to k$, followed by the reverse sequence on edges $k-2\to k-1,\ldots,1\to2$. It has $2k-2$ gates. Starting from bits $(x_0,\ldots,x_k)$, the forward sweep makes wire $j$ hold $x_j\oplus\cdots\oplus x_0$. The reverse sweep, in descending order, restores wires $2,\ldots,k-1$ to $x_j$ and leaves wire 1 as $x_1\oplus x_0$ and wire $k$ as $x_k\oplus\cdots\oplus x_0$. Applying the same sequence a second time restores every intermediate wire and changes only wire $k$, to $x_k\oplus x_0$. Thus $S_kS_k$ is the required remote CNOT and uses $4k-4$ adjacent CNOTs. For the opposite ordered orientation, reflect the wire labels $j\mapsto k-j$ in this construction; that reflection already reverses the physical orientation of each adjacent CNOT. Applying the same calculation to $(x_k,\ldots,x_0)$ shows that the mirrored square restores every intermediate wire and changes only the left endpoint target, to $x_0\oplus x_k$. Both directed adjacent orientations are permitted, and the mirrored network also uses $4k-4$ gates. The identities hold on every basis vector by [F2], hence as operators by linearity. [F2, given, step 1.1, algebra]

3.1 Leave every length-one CNOT unchanged and route each longer CNOT by step 2.1. Using the bounds in step 1.1, the routed count for one multiplexor is at most $$2^{n-1}+\sum_{k=2}^{n-1}(4k-4)2^{n-k}=9\cdot2^{n-1}-8n\le9\cdot2^{n-1}.$$ The original multiplexor has $2^{n-1}$ CNOTs by [F1], so the routed count is at most nine times its original count. By the contiguous recursive layout in [A1], every recursive block occupies a contiguous interval and each terminal two-qubit block is adjacent, so its CNOTs need no routing. Routing each multiplexor independently therefore preserves the factor-nine bound for the total CNOT count. This does not use any optimized QSD cancellation. [F1, A1, step 1.1, step 2.1, algebra]

4.1 The local routing identity and count use the ordered-wire, chronological-denotation, and occurrence-count conventions in [A2]. The factor-nine estimate uses the locally stated unoptimized recurrence [A1]; the separate optimized terminal-count proof is not assumed. [A1, A2, step 3.1] ∎

