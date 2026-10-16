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

Every finite open-graph adaptive pattern has a finite **raw measurement circuit** that preserves its arbitrary input, adjoins $|+\rangle$ ancillas on $V\setminus I$, applies one $CZ$ per graph edge, performs the same ordered projective measurements with the same transcript-dependent bases, and retains the same ordered output wires. Its branch operator on transcript $\mathbf b$ is exactly the pattern's raw operator $K_{\mathbf b}$, including its scalar phase. Thus for every density input $\rho$ both have branch probability
$$p_{\mathbf b}=\operatorname{tr}(K_{\mathbf b}\rho K_{\mathbf b}^*),$$
and, when $p_{\mathbf b}>0$, the same raw conditional output $\rho_{\mathbf b}=K_{\mathbf b}\rho K_{\mathbf b}^*/p_{\mathbf b}$.

Appending the pattern's specified transcript-controlled suffix $C(\mathbf b)$ gives a **corrected measurement circuit** with branch operator $L_{\mathbf b}=C(\mathbf b)K_{\mathbf b}$. This equals the corrected pattern branch operator, has the same probability $p_{\mathbf b}$, and has conditional output $C(\mathbf b)\rho_{\mathbf b}C(\mathbf b)^*$ whenever $p_{\mathbf b}>0$. Both raw presentations have the same transcript-labelled instrument, and both corrected presentations have the same corrected transcript-labelled instrument and the same channel after forgetting the transcript. Zero-probability branches have no normalized conditional output in either presentation.

The raw circuit uses $|V|$ qubit wires, $|E|$ controlled-phase gate occurrences, and $q$ measurement occurrences under [[def-qc-adaptive-measurement-pattern]]; wire and gate counts use [[def-qc-elementary-circuit-resources]]. Corrections are charged separately: the operation model must grant and cost each specified suffix call, or supply a finite construction and charge all its gate occurrences and any extra workspace. These suffix costs are added to the raw resource coordinates; they are not included in $|E|$ or supplied for free. The family of suffixes is finite because $\{0,1\}^q$ is finite. No finite-bit encoding or efficient synthesis claim for exact angles or suffix matrices is made.

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

[F5] The elementary resource convention counts declared gate occurrences and all wires ([[def-qc-elementary-circuit-resources]]). The pattern has one measurement occurrence at each of its $q$ listed measured vertices ([[def-qc-adaptive-measurement-pattern]]); this is a separate count.

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


1.1 Construct the finite graph operation list by adjoining $|+\rangle$ on $V\setminus I$, applying one $CZ$ for each edge, and then applying the pattern's ordered projective measurements with the transcript-dependent bases. The finite edge-gate list denotes its chronological product by [F3], and the ordered measurement contractions compose after that product. The resulting branch maps are exactly the $K_{\mathbf b}$ of [F1], with input register $\mathcal H_I$, output register $\mathcal H_O$, and finite outcome set $\{0,1\}^q$. This finite specification has one wire per vertex, one $CZ$ occurrence per edge, and one measurement occurrence per listed measured vertex, so [F5] gives the stated resource coordinates. The set of exact angle and correction labels is finite because both the vertex set and transcript set are finite; no finite-bit encoding or synthesis-time claim follows. [F1, F2, F3, F5, construct]

1.2 For each transcript define $\mathcal I_{\mathbf b}(X):= K_{\mathbf b}XK_{\mathbf b}^*$. Each branch map is completely positive: for any finite reference register and positive $Y$, its extension sends $Y$ to $(I\otimes K_{\mathbf b})Y(I\otimes K_{\mathbf b}^*)$, which is positive. Let $A:=\sum_{\mathbf b}K_{\mathbf b}^*K_{\mathbf b}$. For every unit vector $u$, [F6] applied to $|u\rangle\langle u|$ gives $\langle Au,u\rangle=\sum_{\mathbf b}\|K_{\mathbf b}u\|^2=1$. In an orthonormal basis, applying this identity to each basis vector shows the diagonal entries of $A-I$ vanish; applying it to $(e_j+e_k)/\sqrt2$ and $(e_j+i e_k)/\sqrt2$ shows the real and imaginary parts of each off-diagonal entry vanish. Hence $A=I$. By trace cyclicity [F8], $\sum_{\mathbf b}\operatorname{tr}(\mathcal I_{\mathbf b}(X)) =\operatorname{tr}(XA)=\operatorname{tr}(X)$ for every operator $X$. Thus these maps form a finite instrument from $\mathcal H_I$ to $\mathcal H_O$ by [F7]. [F6, F7, F8, algebra]

2.1 For density input $\rho$, step 1.1 gives exactly the same raw branch state $K_{\mathbf b}\rho K_{\mathbf b}^*$ in the raw circuit and raw pattern. Its trace is $p_{\mathbf b}$, and division by that trace gives the same $\rho_{\mathbf b}$ when $p_{\mathbf b}>0$. The controller in [F4] stores the observed transcript and appends $C(\mathbf b)$, giving the exact corrected branch operator $L_{\mathbf b}=C(\mathbf b)K_{\mathbf b}$ in both corrected presentations. Unitarity gives $L_{\mathbf b}^*L_{\mathbf b}=K_{\mathbf b}^*K_{\mathbf b}$, so cyclicity [F8] gives the same probability. Normalizing gives $C(\mathbf b)\rho_{\mathbf b}C(\mathbf b)^*$ on positive branches. There is no normalized output on zero-probability branches. [step 1.1, step 1.2, F1, F4, F6, F8, algebra]

3.1 Retaining the transcript associates each $\mathbf b$ to the raw map $X\mapsto K_{\mathbf b}XK_{\mathbf b}^*$ or to the corrected map $X\mapsto L_{\mathbf b}XL_{\mathbf b}^*$, respectively. Corresponding maps agree exactly in the two raw or two corrected presentations. The corrected maps are completely positive by the same reference-register calculation as in step 1.2, and $\sum_{\mathbf b}L_{\mathbf b}^*L_{\mathbf b}=I$ by step 1.2 and step 2.1, so they too form an instrument. Summing the corrected maps therefore gives equal trace-preserving channels after discarding the transcript. These are exact operator identities before passing to branch states, so no scalar phase has been discarded. By [F4]–[F5], the declared cost of the selected suffix call, or every occurrence and extra wire in its supplied construction, must be charged in addition to the raw prefix coordinates. Finiteness alone provides no access or efficiency bound. [step 1.1, step 1.2, step 2.1, F4, F5, F7, algebra] ∎

