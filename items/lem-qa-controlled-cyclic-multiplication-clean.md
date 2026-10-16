---
id: lem-qa-controlled-cyclic-multiplication-clean
kind: lemma
title: Clean reversible controlled multiplication by a cyclic constant
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - def-qa-finite-cyclic-discrete-logarithm-problem
  - def-qc-ordered-bitstring-encoding
  - alg-qc-reversible-embedding
  - thm-qc-reversible-embedding-cost
  - def-qc-circuit-denotational-semantics
  - def-qc-clean-and-dirty-ancillas
  - def-qc-cnot-and-control-target-order
  - thm-qc-computational-basis-orthonormal
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the construction is a finite Boolean circuit and a finite basis calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Preskill, Quantum Computation, Chapter 5: Classical and Quantum Circuits"
      url: "https://www.preskill.caltech.edu/ph219/chap5_15.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $G=\langle g\rangle$ have order $q\ge2$, let $c\in G$, and let valid fixed-length codes occupy a subset $V\subseteq\{0,1\}^w$. Suppose total Boolean circuits are supplied for functions $h_c,h_{c^{-1}}:\{0,1\}\times\{0,1\}^w\to\{0,1\}^w$, where
$$h_c(b,z)=\begin{cases}z,&b=0,\\\operatorname{enc}(u c),&b=1,\ z=\operatorname{enc}(u)\in V,\\z,&b=1,\ z\notin V,\end{cases}.$$
For each fixed control $b$, the maps $z\mapsto h_c(b,z)$ and $z\mapsto h_{c^{-1}}(b,z)$ are inverse permutations; the full controlled permutation preserves $b$.
Then reversible embedding supplies a clean-ancilla circuit that acts on a control bit and accumulator by
$$
|b,z,0_{\mathrm{work}}\rangle\longmapsto |b,h_c(b,z),0_{\mathrm{work}}\rangle.
$$
If the two Boolean circuits have at most $S$ non-input nodes and $E$ port uses each, the construction uses at most $12S+8E+5w$ elementary gates and at most $2(S+E)+w$ clean work wires. The gate charge counts each supplied $X$, CNOT, and Toffoli as one gate; no cost for constructing the Boolean descriptions is inferred.

## Facts & Assumptions

**Given:** A finite cyclic group and fixed element $c$, valid codes $V$, total Boolean functions $h_c,h_{c^{-1}}$ whose fixed-control slices are inverse permutations with the displayed action, and their explicit Boolean circuit descriptions.

[F1] [[def-qa-finite-cyclic-discrete-logarithm-problem]]: valid element codes are injective fixed-length bit strings, and operation circuits and costs are supplied as input data.

[F2] [[alg-qc-reversible-embedding]]: a finite Boolean DAG can be evaluated into fresh work, its outputs XORed into a target, and its evaluation reversed.

[F3] [[thm-qc-reversible-embedding-cost]]: the reversible embedding restores all clean work to zero and uses at most $6S+4E+m$ gates and $S+E$ work bits for an $m$-bit output.

[F4] [[def-qc-cnot-and-control-target-order]]: CNOT on an ordered control and target bit maps $(a,b)$ to $(a,b\oplus a)$.

[F5] [[def-qc-clean-and-dirty-ancillas]]: a clean work register must return exactly to its specified zero vector.

[F6] [[def-qc-circuit-denotational-semantics]]: a chronological finite gate list acts by the corresponding composed unitary, with later gates on the left.

[F7] [[thm-qc-computational-basis-orthonormal]]: distinct computational-basis words are orthonormal.

## Proof

1.1 For a valid code $z=\operatorname{enc}(u)$, the inverse property gives $h_{c^{-1}}(1,h_c(1,z))=z$ and $h_c(1,h_{c^{-1}}(1,z))=z$; for invalid $z$ both maps fix $z$, and for $b=0$ both fix $z$. Thus, for each fixed control $b$, the two supplied maps on the $w$-bit data register are inverse permutations on every data word, and the complete controlled map preserves $b$. [given, F1, algebra]

1.2 Apply [F2] to $h_c$ and $h_{c^{-1}}$ with separate fresh $w$-bit targets. By [F3], each XOR computation returns its internal work to zero and has at most $6S+4E+w$ gates and $S+E$ work bits. [F2, F3]

2.1 Starting from control $b$, data code $z$, and a fresh target $t=0^w$, compute $h_c(b,z)$ into $t$. Swap $z$ and $t$ bitwise using three CNOTs per bit; on each pair $(u,v)$ the sequence $(u,v)\mapsto(u,u\oplus v)\mapsto(v,u\oplus v)\mapsto(v,u)$, so it swaps the registers. The accumulator now contains $h_c(b,z)$ and $t$ contains the old $z$. [step 1.2, F4, F6, F7, algebra]

2.2 Compute $h_{c^{-1}}(b,h_c(b,z))$ into the old-$z$ target by XOR. By step 1.1 this XORs $z$ with itself and clears $t$ to $0^w$. The inverse computation also restores its internal work to zero by [F3]. The resulting data is $h_c(b,z)$, with every work and temporary target bit zero, which is the clean-ancilla identity of [F5]. [step 1.1, step 1.2, F3, F5, F6, algebra]

3.1 The forward and inverse embeddings use at most $12S+8E+2w$ gates in total; the three-CNOT swaps use $3w$ more. The two Boolean embeddings use at most $2(S+E)$ clean internal work bits and the swapped $w$-bit target is also clean on return. Hence the total bounds are $12S+8E+5w$ gates and $2(S+E)+w$ clean work wires. [step 1.2, step 2.2, F3, algebra] ∎
