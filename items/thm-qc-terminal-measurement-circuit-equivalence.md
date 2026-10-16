---
id: thm-qc-terminal-measurement-circuit-equivalence
kind: theorem
title: "All measurements may be moved to terminal readout"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - thm-qc-deferred-measurement
  - def-qc-measurement-branch-output-law
  - def-qc-classical-control-and-measurement-circuit
  - def-qc-povm-and-outcome-law
  - thm-induction-principle
justified_by: []
dependency_level: 10
proof_strategy: induction
axiom_use: "None; the induction and every outcome tree are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let a finite measurement history tree be as defined in [[def-qc-classical-control-and-measurement-circuit]], with a finite terminal POVM $(F_z^h)_{z\in Z}$ for a common finite nonempty outcome set $Z$ at each leaf $h$. A **complete history** is the ordered list of observed labels along a root-to-leaf path. For every density operator at the root, the joint law of the complete history $h$ and the leaf's terminal outcome $z$ is unchanged when all node instruments are coherently deferred to terminal readout, with each recorded history controlling its declared later operations. More strongly, for every finite-dimensional reference $R$ and every operator $X$ on the root data and $R$, the unnormalized data-reference branch operator at each complete history $h$ is the same in the measured and coherently deferred constructions. Any history-controlled dilation or block operation used in that construction must be explicitly supplied and charged by the operation model.

## Facts & Assumptions

**Given:** A finite measurement tree, its finite instruments and branch-controlled gates, an input state (possibly entangled with a finite reference), and a designated final POVM.

[F1] [[def-qc-classical-control-and-measurement-circuit]]: a finite history tree has finitely many observed outcomes at each internal node, branch maps $X\mapsto S_{h,a}\mathcal I^h_a(X)S_{h,a}^\dagger$, and orthogonal records contain only observed labels.

[F2] [[thm-qc-deferred-measurement]]: for one finite instrument stage and any finite reference, the coherent construction preserves each data-reference branch operator and retains the observed outcome in its own orthogonal label register after the hidden Kraus and padding registers are discarded.

[F3] [[def-qc-measurement-branch-output-law]]: a branch weight is the trace of its unnormalized instrument output, and a conditional state is formed only for a positive weight.

[F4] [[def-qc-povm-and-outcome-law]]: a finite POVM assigns outcome weight $\operatorname{tr}(\rho F_z)$ to density operator $\rho$.

[F5] [[thm-induction-principle]]: a statement true at zero stages and preserved by adding one stage holds for every finite number of stages.

## Proof


1.1 Give a finite history tree height $0$ when its root is a leaf; otherwise give it height one plus the maximum height of its finitely many child subtrees. For height $0$, there is a single empty history, no instrument is applied, and the leaf's terminal POVM is unchanged. Thus the branch-operator invariant holds at height $0$. [given, F1, F4, base]

1.2 Let the root be internal and suppose the invariant holds for all trees of height at most $k$. For each root outcome $a$, [F2] replaces the root instrument and its edge unitary $S_{h,a}$ by a coherent record with the same unnormalized operator $Y_a$ on the child input and the reference, for every input operator $X$, while retaining a separate orthogonal label register $e_a$. The outcome set is finite by [F1]. [given, F1, F2, ih]

2.1 Each child subtree has height at most $k$, so apply the induction hypothesis to its input operator $Y_a$ with the already retained history labels included in the finite reference. The operator need not be normalized or positive because the invariant is stated for every operator. The child constructions are controlled on the root's observed record; distinct labels occupy orthogonal record subspaces by [F1]–[F2], so the continuations preserve each full-history branch separately and do not merge histories. [step 1.2, F1, F2, ih, algebra]

3.1 By finite induction [F5] from step 1.1 and the preservation argument in step 2.1, every finite history tree has equal measured and coherently deferred unnormalized branch operators for each complete history and every finite reference. [step 1.1, step 2.1, F5, discharge-induction]

4.1 For a leaf history $h$ and terminal outcome $z$, apply the same effect $F_z^h\otimes I_R$ to the equal branch operators from step 3.1 and take traces. This gives equal joint probabilities. The preterminal data-reference outputs conditioned on history $h$ agree after dividing their equal branch operators by the common positive history probability; zero-probability branches are never normalized by [F3]. Equality of the operators for arbitrary $R$ preserves reference correlations. Any required dilation and block controls remain explicit operation-model costs as stated. [step 3.1, F3, F4, algebra, discharge-induction: step 3.1] ∎

