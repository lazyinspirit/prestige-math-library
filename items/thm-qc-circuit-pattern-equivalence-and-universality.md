---
id: thm-qc-circuit-pattern-equivalence-and-universality
kind: theorem
title: "Circuit and pattern translations are branch preserving and universal"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [thm-qc-circuit-simulated-by-adaptive-pattern, thm-qc-pattern-is-measurement-circuit, def-qc-j-gate-and-equatorial-basis, def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-pauli-matrices, def-qc-controlled-phase-rotation, lem-qc-j-basis-and-phase-identities, thm-qc-one-qubit-euler-decomposition, thm-qc-exact-unitary-synthesis-from-qsd, def-qc-circuit-syntax-and-register-order]
justified_by: []
dependency_level: 12
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf and Hans J. Briegel, Quantum computing via measurements only, pp. 2–4"
      url: https://arxiv.org/pdf/quant-ph/0010033
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §§II F–G"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

Every finite J/CZ circuit has an adaptive open-graph pattern whose corrected
branches implement the same unitary channel and whose transcript branches
preserve the exact probabilities. Conversely, every finite open-graph
pattern has a raw measurement-circuit presentation with exactly its raw branch operators $K_{\mathbf b}$, probabilities, and positive-probability conditional outputs. Appending its specified and separately charged correction suffixes gives a corrected measurement-circuit presentation with exactly its corrected branch operators $C(\mathbf b)K_{\mathbf b}$, unchanged probabilities, and corrected conditional outputs $C(\mathbf b)\rho_{\mathbf b}C(\mathbf b)^*$. The corresponding raw instruments agree transcript by transcript, as do the corresponding corrected instruments; the corrected channels agree after forgetting the transcript. For every $n\ge0$, each unitary channel on the
ordered $n$-qubit register $\mathcal Q_n$ has a J/CZ circuit representative
and hence an adaptive pattern implementing the same channel; for $n\ge1$ the
unitary matrix has size $2^n$, and for $n=0$ the channel is the identity on
$\mathbb C$. Global scalar phases are retained in branch maps and do not alter
the induced channel.

## Facts & Assumptions

**Given:** A finite unitary circuit or a finite open-graph pattern, with the
ordered wire and branch conventions of the assigned definitions.

[F1] Every finite J/CZ circuit is represented by the circuit-to-pattern
construction, with branch maps, probabilities and corrected channel as
stated ([[thm-qc-circuit-simulated-by-adaptive-pattern]]).

[F2] Every finite open-graph pattern has a raw measurement circuit with the same exact ordered $K_{\mathbf b}$, outcome law and raw conditional states. Appending the specified separately charged suffix gives a corrected circuit with the same $C(\mathbf b)K_{\mathbf b}$ and corrected conditional states as the corrected pattern; the raw and corrected transcript-labelled instruments agree with their respective counterparts
([[thm-qc-pattern-is-measurement-circuit]]).

[F3] $J(\alpha)=HP_\alpha$, $J(0)=H$, and
$P_\alpha=HJ(\alpha)$ ([[def-qc-j-gate-and-equatorial-basis]],
[[lem-qc-j-basis-and-phase-identities]]).

[F4] The angle-$\pi$ controlled phase is
$CZ=\operatorname{diag}(1,1,1,-1)$ ([[def-qc-controlled-phase-rotation]]).

[F5] Define local notation $R_z^E(\phi):=R_z(-\phi)$ and $R_y^E(\theta):=R_y(-\theta)$ using the QC07 convention. Thus
$R_z^E(\phi)=\operatorname{diag}(e^{i\phi/2},e^{-i\phi/2})$ and
$R_y^E(\theta)=\begin{pmatrix}\cos(\theta/2)&\sin(\theta/2)\\
-\sin(\theta/2)&\cos(\theta/2)\end{pmatrix}$.
The actual Euler theorem [[thm-qc-one-qubit-euler-decomposition]] gives $U=e^{i\delta}R_z(a)R_y(t)R_z(b)$. Setting $\alpha=-a$, $\theta=-t$, $\beta=-b$ yields $U=e^{i\delta}R_z^E(\alpha)R_y^E(\theta)R_z^E(\beta)$, retaining the same scalar. The superscript $E$ is notation local to this proof, with the opposite angle signs from the supplier's rotations.

[F6] The one-qubit matrix definition fixes
$H=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$, and the Pauli
definition fixes $X,Y,Z$ ([[def-qc-one-qubit-gate-alphabet-and-rotations]],
[[def-qc-pauli-matrices]]).

[F7] Every finite-dimensional unitary channel has an exact finite circuit
with no ancillas using arbitrary one-qubit gates and CNOT gates; the $n=0$
channel is the identity ([[thm-qc-exact-unitary-synthesis-from-qsd]]). This
supplier proves existence from the unoptimized cosine-sine recursion and makes
no gate-count, finite-bit, or synthesis-time claim.
## Proof


1.1 For a finite J/CZ circuit, [F1] supplies the open-graph pattern and gives the equality of every transcript branch map, the branch probabilities and the corrected unitary channel. This proves the circuit-to-pattern direction with the arbitrary input unchanged. [F1, construct]

1.2 For a finite open-graph pattern, [F2] first lists its ancilla preparations, edge gates, ordered projective measurements and transcript-controlled basis choices as a raw measurement circuit. Its exact branch operator is $K_{\mathbf b}$, giving the same $p_{\mathbf b}$ and the same raw conditional state $\rho_{\mathbf b}$ whenever $p_{\mathbf b}>0$. The separately charged terminal correction then gives $C(\mathbf b)K_{\mathbf b}$ and the conditional state $C(\mathbf b)\rho_{\mathbf b}C(\mathbf b)^*$, exactly as for the corrected pattern. Unitarity of $C(\mathbf b)$ leaves $p_{\mathbf b}$ unchanged. Therefore the respective raw and corrected transcript instruments agree, and summing corrected branches gives the same corrected channel. No normalized state is assigned on a zero-probability branch. [F2, algebra]

1.3 By [F7], choose a finite exact synthesis circuit. For each one-qubit factor, [F5] gives its Euler product. Direct multiplication of the Pauli matrices gives $S:=P_{\pi/2}=\operatorname{diag}(1,i)$, $SXS^\dagger=Y$, and $HZH=X$. Therefore $R_y^E(\theta)=S H R_z^E(\theta)H S^\dagger$: indeed, conjugating $R_z^E(\theta)=e^{i\theta Z/2}$ by $H$ gives $e^{i\theta X/2}$, and conjugating that by $S$ gives $e^{i\theta Y/2}$, whose matrix is the one in [F5]. Also $R_z^E(\phi)=e^{i\phi/2}P_{-\phi}$. By [F3], each $P_{-\phi}$ is $H J(-\phi)$, $H=J(0)$, $S=P_{\pi/2}$ is $H J(\pi/2)$, and $S^\dagger=P_{-\pi/2}$ is $H J(-\pi/2)$. Thus each Euler factor is a finite product of J gates times its explicitly retained scalar. On basis inputs $|0,y\rangle$, $(I\otimes H)CZ(I\otimes H)$ fixes the target; on $|1,y\rangle$ it applies $HZH=X$ to the target. Hence this circuit maps $|x,y\rangle$ to $|x,y\oplus x\rangle$ and equals CNOT. Replacing each one-qubit gate and CNOT in the finite decomposition therefore gives a finite J/CZ circuit for the same unitary channel. [F3, F4, F5, F6, F7, algebra]

2.1 Apply [F1] to that J/CZ circuit. The resulting finite pattern has the same corrected unitary channel and exact branch probabilities; its scalar phase remains part of each branch map. This proves universality at the unitary-channel level, including the one-dimensional identity case with an empty circuit and empty transcript. [step 1.3, F1, algebra, cases] ∎

