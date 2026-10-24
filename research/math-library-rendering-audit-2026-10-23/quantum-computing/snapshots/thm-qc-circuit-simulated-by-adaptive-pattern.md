---
id: thm-qc-circuit-simulated-by-adaptive-pattern
kind: theorem
title: "A finite J/CZ circuit is simulated branch by branch by its adaptive pattern"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-adaptive-measurement-pattern, def-qc-circuit-denotational-semantics, def-qc-tensor-register-and-permutation, def-qc-circuit-to-graph-resource-encoding, def-qc-normalized-transport-schedule, lem-qc-normalized-rounds-preserve-circuit, lem-qc-transport-encoding-is-simple-and-size-bounded, lem-qc-one-bit-teleportation, lem-qc-adaptive-angle-pauli-frame-update, lem-qc-cz-matching-pauli-frame-action, lem-qc-graph-state-edge-gates-commute, thm-qc-pattern-branch-probabilities-and-zero-branches, cor-trace-is-invariant-under-similarity]
justified_by: []
dependency_level: 11
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6, pp. 178–180"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §§II D–G, pp. 8–20"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

Let $C$ be a finite $n$-wire J/CZ circuit with $d$ chronological layers, let
$R$ be the normalized transport-round count, and let $U_C$ be its denotation.
For the adaptive graph pattern of
[[def-qc-circuit-to-graph-resource-encoding]], every transcript
$\mathbf b\in\{0,1\}^{nR}$ has branch map

$$K_{\mathbf b}=2^{-nR/2}\lambda_{\mathbf b}P_{\mathbf b}U_C,$$

where for $n\ge1$, $P_{\mathbf b}=P(x^R,z^R)$ in the phase-aware convention,
and for $n=0$ the empty-frame convention is $P_{\mathbf b}=I_{\mathbb C}$.
The exact unit-modulus scalar $\lambda_{\mathbf b}$ is the one defined in
that encoding, including the
mixed-layer padding phase and the CZ-matching signs. Each transcript has
probability $2^{-nR}$ on every normalized pure or mixed input. Applying the
terminal correction $P_{\mathbf b}^{\dagger}$ gives the circuit output ray
on pure inputs, and summing the corrected branches gives exactly the channel
$\rho\mapsto U_C\rho U_C^{\dagger}$ on density operators. The empty-register
and zero-round cases use their unique empty transcript.

## Facts & Assumptions

**Given:** A finite ordered J/CZ circuit, its normalized transport schedule,
and the associated open-graph pattern.

[F1] The schedule defines rounds with one $J$ on each wire, matching $M_s$,
and scalar $\sigma_C$ ([[def-qc-normalized-transport-schedule]]).

[F2] The normalized round circuit is exactly $\sigma_C U_C$
([[lem-qc-normalized-rounds-preserve-circuit]]).

[F3] The transport vertex/edge lists form a finite simple graph, with
$n(R+1)$ vertices and $R\le3d$
([[lem-qc-transport-encoding-is-simple-and-size-bounded]]).

[F4] The graph pattern uses the stated ordered branch maps, measurement
bases, and terminal correction ([[def-qc-adaptive-measurement-pattern]],
[[def-qc-circuit-to-graph-resource-encoding]]).

[F5] A one-wire equatorial transport with angle $\alpha$ and outcome $b$
has branch operator $2^{-1/2}X^bJ(\alpha)$
([[lem-qc-one-bit-teleportation]]).

[F6] With incoming frame $X^xZ^z$, angle $(-1)^x\alpha$ updates the frame
to $(b\oplus z,x)$ and contributes the exact scalar
$\gamma(x,z,\alpha)$ ([[lem-qc-adaptive-angle-pauli-frame-update]]).

[F7] A matching $M$ changes a frame by
$CZ_M P(x,z)=(-1)^{q_M(x)}P(x,z\oplus A_Mx)CZ_M$
([[lem-qc-cz-matching-pauli-frame-action]]).

[F8] The embedded graph-edge $CZ$ gates commute
([[lem-qc-graph-state-edge-gates-commute]]).

[F9] Pattern branch probabilities are the branch-map norm squares or
density-operator traces, and zero-probability branches have no normalized
conditional output ([[thm-qc-pattern-branch-probabilities-and-zero-branches]]).

[F10] Similar finite square matrices have equal trace
([[cor-trace-is-invariant-under-similarity]]).

[F11] The current circuit denotation composes chronological layers as
$U_{L_d}\cdots U_{L_1}$, and the ordered tensor convention fixes the factor
permutations and local wire embeddings
([[def-qc-circuit-denotational-semantics]],
[[def-qc-tensor-register-and-permutation]]). The exact supplier bodies and
their local embedding proof were inspected.

## Proof


1.1 By [F8], the graph state's finite product of edge gates may be reordered without changing it. For round $s$, the vertical edges from $M_s$ act on column $s-1$ before that column is measured, and the horizontal edges from column $s-1$ to $s$ form one one-bit transport on each wire. The tensor factors of these $n$ transports are disjoint; later vertical edges act on later columns and do not change an earlier measurement projector. The ordered pattern in [F4] therefore realizes the round-wise sequence of matching and horizontal transports. [F3, F4, F5, F8, F11, construct]

1.2 Suppose the logical state entering round $s$ is represented with frame $P(x^{s-1},z^{s-1})$. The matching relation [F7] moves that frame past $CZ_{M_s}$, contributes $\mu_s=(-1)^{q_{M_s}(x^{s-1})}$, and changes its $Z$ vector to $z^{s,*}=z^{s-1}\oplus A_sx^{s-1}$. Applying [F6] on wire $j$ with angle $\alpha_{sj}$ and outcome $b_j^s$ gives the new frame bits $x_j^s=b_j^s\oplus z_j^{s,*}$ and $z_j^s=x_j^{s-1}$ and contributes $2^{-1/2}\gamma(x_j^{s-1},z_j^{s,*},\alpha_{sj})$. Tensoring the $n$ one-wire identities gives round factor $2^{-n/2}\mu_s\prod_j\gamma(x_j^{s-1},z_j^{s,*},\alpha_{sj})$ and applies the round unitary after the prior logical unitary. [F5, F6, F7, F4, F11, algebra]

2.1 Initially $x^0=z^0=0$ and the branch map is the identity. Induction on $s$ using step 1.2 gives, for the first $s$ outcome blocks, the scalar $2^{-ns/2}$, the recursively specified Pauli frame, and the chronological product of the first $s$ normalized round unitaries. At $s=R$, [F2] turns that logical product into $\sigma_CU_C$, so the accumulated scalar equals the explicit $\lambda_{\mathbf b}$ of the encoding. Therefore $K_{\mathbf b}=2^{-nR/2}\lambda_{\mathbf b}P_{\mathbf b}U_C$. [step 1.2, F1, F2, F11, induction, algebra]

3.1 Both $P_{\mathbf b}$ and $U_C$ are unitary and $|\lambda_{\mathbf b}|=1$. Thus a normalized pure input has branch probability $2^{-nR}$ by [F9]. For a density operator $\rho$, the branch output is $2^{-nR}P_{\mathbf b}U_C\rho U_C^{\dagger}P_{\mathbf b}^{\dagger}$; unitary conjugation is a similarity, so [F10] gives its trace as $2^{-nR}\operatorname{tr}(\rho)=2^{-nR}$. The transcript has $nR$ binary outcomes, hence $2^{nR}$ leaves and total probability one. [step 2.1, F9, F10, algebra]

4.1 Applying $P_{\mathbf b}^{\dagger}$ to each branch leaves $2^{-nR/2}\lambda_{\mathbf b}U_C$. On pure inputs this differs from $U_C|\psi\rangle$ only by a nonzero scalar, so it has the same output ray. On density inputs, summing the corrected branch maps gives $2^{-nR}\sum_{\mathbf b}U_C\rho U_C^{\dagger}=U_C\rho U_C^{\dagger}$, because there are $2^{nR}$ transcripts. If $R=0$, there is one empty transcript and the schedule contains only empty layers; if $n=0$, there is one empty transcript on the one-dimensional register. The formula gives the identity in both boundary cases. [step 2.1, step 3.1, F1, algebra, cases] ∎

