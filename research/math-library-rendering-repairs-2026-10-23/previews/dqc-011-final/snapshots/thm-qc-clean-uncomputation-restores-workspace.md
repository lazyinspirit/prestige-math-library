---
id: thm-qc-clean-uncomputation-restores-workspace
kind: theorem
title: "Compute-copy-uncompute restores clean workspace"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-clean-and-dirty-ancillas
  - lem-qc-ancilla-identities-stable-under-reference-and-mixtures
  - thm-qc-circuit-inverse-reversal
  - def-qc-circuit-denotational-semantics
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-bitstring-index-is-bijection
  - def-qc-cnot-and-control-target-order
  - lem-qc-x-cnot-toffoli-and-fredkin-are-involutions
  - thm-qc-computational-basis-orthonormal
  - lem-qc-tensor-product-basis-and-dimension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits (updated July 2015)"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
      locator: "§5.2.3, printed p.20: copy the output and run the full computation backward to clear work."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§2.3, printed p.16: function evaluation on basis inputs and linear extension."
---

## Statement

Let $C$ be a unitary circuit on input register $X$ and clean work register $W$, with an available circuit for $C^{-1}$. Suppose that for every $x\in\{0,1\}^n$,
$$
C|x,0_W\rangle=|x,g(x),r(x)\rangle,
$$
where $g(x)$ occupies a designated $m$-bit subregister of $W$ and $r(x)$ is any remaining work string. Copying $g(x)$ into a distinct arbitrary target register $Y$ by bitwise CNOT and then applying $C^{-1}$ to $XW$ maps
$$
|x,y,0_W\rangle\longmapsto|x,y\oplus g(x),0_W\rangle.
$$
The identity holds coherently on superpositions and with any reference register.

## Facts & Assumptions

**Given:** The stated basis action of $C$, disjoint target register $Y$, and available inverse circuit. Prove that the work is restored.

[F1] [[def-qc-clean-and-dirty-ancillas]]: Clean workspace is initialized to the all-zero vector and must be returned exactly to that factor.

[F2] [[lem-qc-ancilla-identities-stable-under-reference-and-mixtures]]: Clean identities extend to reference registers by tensoring with identity and to arbitrary matrices by linearity.

[F3] [[def-qc-cnot-and-control-target-order]]: In the ordered two-qubit basis, $\operatorname{CNOT}_{1\to2}|a,t\rangle=|a,t\mathbin{\oplus}a\rangle$.

[F4] [[def-qc-tensor-map]]: The tensor map acts factorwise on elementary tensors and extends uniquely by linearity.

[F5] [[def-qc-circuit-denotational-semantics]]: Chronological layers $L_1,\ldots,L_d$, with $L_1$ applied first, denote the ordered product $U_{L_d}\cdots U_{L_1}$.

[F6] [[thm-qc-circuit-inverse-reversal]]: If the inverses of all gates are explicitly available, reversing the chronological gate order and adjointing each gate implements $C^\dagger=C^{-1}$.

[F7] [[def-qc-register-and-computational-basis]]: An $n$-qubit register is the ordered tensor product of $n$ copies of $Q_2$, with the first wire most significant; the empty register is $\mathbb C$ with basis $\{1\}$.

[F8] [[def-qc-ordered-bitstring-encoding]]: A bit string occupies the computational-basis slot given by its big-endian index.

[F9] [[thm-qc-bitstring-index-is-bijection]]: Every length-$n$ bit string labels exactly one computational-basis vector.

[F10] [[thm-qc-computational-basis-orthonormal]]: The computational basis of each nonempty qubit register is orthonormal.

[F11] [[lem-qc-tensor-product-basis-and-dimension]]: Ordered product bases of finite registers form a basis of their tensor product, including the empty-register case.

[F12] [[lem-qc-x-cnot-toffoli-and-fredkin-are-involutions]]: CNOT is a unitary gate on its ordered register.

## Proof

1.1 On a basis input, the forward computation gives $|x,g(x),r(x)\rangle$. Since $Y$ is disjoint, bitwise CNOT from the designated $g(x)$ subregister changes an arbitrary target $y$ to $y\oplus g(x)$ and leaves $XW$ unchanged. The intermediate state is therefore $|x,y\oplus g(x),g(x),r(x)\rangle$, with $g(x),r(x)$ together occupying $W$; [F12] supplies the CNOT gate unitarity. [given, F3, F5, F12, algebra]

2.1 Applying $C^{-1}$ to $XW$ returns $|x,g(x),r(x)\rangle$ to $|x,0_W\rangle$ by the assumed forward basis action and [F6]. The inverse is supplied on $XW$ by the Given clause, so the disjoint target $Y$ is untouched and remains $y\oplus g(x)$. This proves the displayed basis action and exact restoration of all work required by the clean-ancilla contract [F1]. [given, F1, F5, F6, step 1.1, algebra]

3.1 By [F7]–[F11], the ordered basis vectors $|x,y,0_W\rangle$ form a basis of the subspace with work fixed to zero. Step 2.1 therefore extends by linearity to every superposition in that subspace, with data action $V|x,y\rangle=|x,y\oplus g(x)\rangle$. This data map is an involutive permutation of its orthonormal computational basis, since applying it twice restores $y$; hence $V$ is unitary. The complete compute-copy-inverse operation thus satisfies the clean identity in [F1], and [F2] extends it to every finite reference register and matrix. The tensor-map and chronological-circuit conventions [F4]–[F5] preserve the ordered factors in these extensions. [step 2.1, F1, F2, F4, F5, F7, F8, F9, F10, F11, algebra] ∎

## Remarks

The circuit below groups $XW$ into its upper row; the lower row is the distinct $m$-bit target $Y$. Time runs from left to right. The middle box applies bitwise CNOT from the designated $g(x)$ subregister of $W$ to $Y$, leaving $XW$ unchanged. It copies computational-basis bits coherently, rather than cloning an arbitrary quantum state.

```tikz
\begin{tikzpicture}[x=1cm,y=0.8cm]
\node at (-0.7,1) {$XW:\ |x,0_W\rangle$};
\node at (-0.7,-1) {$Y:\ |y\rangle$};
\node[draw,minimum width=1.2cm,minimum height=0.7cm] (compute) at (1.8,1) {$C$};
\draw (3.3,-1.5) rectangle (5.1,1.5);
\node[align=center] at (4.2,0) {bitwise CNOT\\ $g\to Y$};
\node[draw,minimum width=1.2cm,minimum height=0.7cm] (inverse) at (6.6,1) {$C^{-1}$};
\draw (0.6,1) -- (compute.west);
\draw (compute.east) -- (3.3,1);
\draw (5.1,1) -- (inverse.west);
\draw (inverse.east) -- (7.7,1);
\draw (0.6,-1) -- (3.3,-1);
\draw (5.1,-1) -- (7.7,-1);
\node[anchor=west] at (7.7,1) {$|x,0_W\rangle$};
\node[anchor=west] at (7.7,-1) {$|y\oplus g(x)\rangle$};
\end{tikzpicture}
```

After $C$, the upper row is $|x,g(x),r(x)\rangle$; after the middle box it is still that same basis vector, so $C^{-1}$ restores $|x,0_W\rangle$. The lower row changes only in the middle box. These basis-state labels illustrate proof steps 1.1–2.1; the coherent extension, including reference registers, is established independently in step 3.1.
