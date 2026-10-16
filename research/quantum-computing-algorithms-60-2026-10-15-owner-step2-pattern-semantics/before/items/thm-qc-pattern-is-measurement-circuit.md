---
id: thm-qc-pattern-is-measurement-circuit
kind: theorem
title: "Every finite open-graph pattern is a measurement circuit"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-adaptive-measurement-pattern, def-qc-circuit-syntax-and-register-order, def-qc-circuit-denotational-semantics, def-qc-classical-control-and-measurement-circuit, def-qc-elementary-circuit-resources, def-qc-register-and-computational-basis, thm-qc-computational-basis-orthonormal, thm-qc-pattern-branch-probabilities-and-zero-branches, thm-trace-of-ab-equals-trace-of-ba, def-qc-instrument-and-conditional-state]
justified_by: []
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert Raussendorf and Hans J. Briegel, Quantum computing via measurements only, arXiv:quant-ph/0010033, pp. 2–4"
      url: https://arxiv.org/pdf/quant-ph/0010033
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §II D, pp. 8–10"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

Every finite open-graph adaptive pattern is a finite measurement circuit that
preserves its arbitrary input, adjoins $|+\rangle$ ancillas on $V\setminus I$,
applies one $CZ$ per graph edge, performs the same ordered projective
measurements with the same transcript-dependent bases, retains the same output
wires, and applies the specified terminal correction. For every transcript its
branch map, probability, and positive-probability conditional output equal
those of the pattern. It uses $|V|$ qubit wires, $|E|$ controlled-phase gate
occurrences, and $q$ measurement occurrences under
[[def-qc-elementary-circuit-resources]]. The transcript-dependent suffixes
form a finite family because $\{0,1\}^q$ is finite; these resource counts
do not include any finite-bit encoding or efficient synthesis cost for exact
angles and suffix matrices.

## Facts & Assumptions

**Given:** An open-graph pattern on a finite ordered graph, its transcript
branch maps, and finite circuit and instrument semantics.

[F1] The pattern defines the ordered ancilla embedding, graph edge unitary,
measurement bras, branch maps $K_{\mathbf b}:\mathcal H_I\to\mathcal H_O$,
and branch probabilities ([[def-qc-adaptive-measurement-pattern]]).

[F2] The circuit syntax supplies finite ordered wires and gate occurrences
with specified unitary matrices ([[def-qc-circuit-syntax-and-register-order]]).

[F3] Chronological layers denote the exact product
$U_{L_d}\cdots U_{L_1}$ ([[def-qc-circuit-denotational-semantics]]).

[F4] A finite classical controller may retain the observed history and select
a specified finite unitary suffix; hidden Kraus labels are not transcript data
([[def-qc-classical-control-and-measurement-circuit]]).

[F5] The resource convention counts declared gate occurrences, wires, and
measurement occurrences as separate coordinates
([[def-qc-elementary-circuit-resources]]).

[F6] The pattern branch probabilities sum to one for every density input
([[thm-qc-pattern-branch-probabilities-and-zero-branches]]).

[F7] A finite instrument is a finite family of completely positive branch
maps whose sum is trace-preserving
([[def-qc-instrument-and-conditional-state]]).

[F8] The ordered computational basis of each finite register is orthonormal,
and trace is cyclic for conformable finite-dimensional operators
([[def-qc-register-and-computational-basis]],
[[thm-qc-computational-basis-orthonormal]],
[[thm-trace-of-ab-equals-trace-of-ba]]).

## Proof

1.1 Construct the finite graph operation list by adjoining $|+\rangle$ on
$V\setminus I$, applying one $CZ$ for each edge, and then applying the
pattern's ordered projective measurements with the transcript-dependent
bases. The finite edge-gate list denotes its chronological product by [F3], and the
ordered measurement contractions compose after that product. The resulting
branch maps are exactly the $K_{\mathbf b}$ of [F1], with input register $\mathcal H_I$, output register $\mathcal H_O$, and
finite outcome set $\{0,1\}^q$. This finite specification has one wire per
vertex, one $CZ$ occurrence per edge, and one measurement occurrence per
listed measured vertex, so [F5] gives the stated resource coordinates. The
set of exact angle and correction labels is finite because both the vertex
set and transcript set are finite; no finite-bit encoding or synthesis-time
claim follows. [F1, F2, F3, F5, construct]

1.2 For each transcript define $\mathcal I_{\mathbf b}(X):=
K_{\mathbf b}XK_{\mathbf b}^*$. Each branch map is completely positive:
for any finite reference register and positive $Y$, its extension sends $Y$
to $(I\otimes K_{\mathbf b})Y(I\otimes K_{\mathbf b}^*)$, which is
positive. Let $A:=\sum_{\mathbf b}K_{\mathbf b}^*K_{\mathbf b}$.
For every unit vector $u$, [F6] applied to $|u\rangle\langle u|$ gives
$\langle Au,u\rangle=\sum_{\mathbf b}\|K_{\mathbf b}u\|^2=1$.
In an orthonormal basis, applying this identity to each basis vector shows
the diagonal entries of $A-I$ vanish; applying it to
$(e_j+e_k)/\sqrt2$ and $(e_j+i e_k)/\sqrt2$ shows the real and imaginary
parts of each off-diagonal entry vanish. Hence $A=I$. By trace cyclicity
[F8], $\sum_{\mathbf b}\operatorname{tr}(\mathcal I_{\mathbf b}(X))
=\operatorname{tr}(XA)=\operatorname{tr}(X)$ for every operator $X$.
Thus these maps form a finite instrument from $\mathcal H_I$ to
$\mathcal H_O$ by [F7]. [F6, F7, F8, algebra]

1.3 The finite controller in [F4] stores exactly $\mathbf b$ and applies the
specified suffix $C(\mathbf b)$ on $\mathcal H_O$. Therefore its branch map
is $X\mapsto C(\mathbf b)K_{\mathbf b}XK_{\mathbf b}^*C(\mathbf b)^*$,
with the same branch operator and outcome law as the open-graph pattern.
When the branch probability is positive, both conditional outputs normalize
the same branch state; zero-probability outcomes are not assigned a
normalized state. [step 1.1, step 1.2, F1, F4, F6, algebra] ∎
