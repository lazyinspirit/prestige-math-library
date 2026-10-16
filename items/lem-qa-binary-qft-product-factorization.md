---
id: lem-qa-binary-qft-product-factorization
kind: lemma
title: Binary factorization of QFT basis output
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 8
deps: [def-qa-cyclic-quantum-fourier-transform, def-qc-ordered-bitstring-encoding, def-qc-tensor-register-and-permutation, def-qc-dirac-notation-conversion, thm-qc-bitstring-index-is-bijection, def-qc-one-qubit-gate-alphabet-and-rotations, def-qc-controlled-phase-rotation]
axiom_use: "No choice axiom is used; the bitstring sums and tensor products are finite."
justified_by: []
proof_strategy: direct
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
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§4.5, PDF pp.44–45: binary output product factors and the Hadamard/controlled-phase circuit, whose factors are prepared in reverse wire order before the final swap(s)."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

Let $n\ge0$, $N=2^n$, and take the input word $(x_{n-1},\ldots,x_0)$ in wire order $q_{n-1},\ldots,q_0$. By the big-endian index convention, its integer is $x=\sum_{i=0}^{n-1}x_i2^i$, with $x_i\in\{0,1\}$. For $0\le j<n$, set

$$R_j:=2^{-1/2}\bigl(|0\rangle+e^{2\pi i\sum_{i=0}^{j}x_i2^{-(j-i+1)}}|1\rangle\bigr).$$

With the register order $q_{n-1},\ldots,q_0$, the standard-basis output $\operatorname{QFT}_{2^n}|x\rangle$ is $R_0\otimes R_1\otimes\cdots\otimes R_{n-1}$. The ordered factors immediately before the final wire-reversal permutation of the exact circuit are $R_{n-1}\otimes\cdots\otimes R_0$. For $n=0$, both are the empty tensor product, interpreted as the scalar $1$.

## Facts & Assumptions

**Given:** The positive-sign transform $\operatorname{QFT}_{2^n}$ of [[def-qa-cyclic-quantum-fourier-transform]], binary input encoding by [[def-qc-ordered-bitstring-encoding]], ordered tensor registers and reversal permutation by [[def-qc-tensor-register-and-permutation]], the standard ket convention of [[def-qc-dirac-notation-conversion]], and bijectivity of the binary index.

[F1] The map $\operatorname{enc}_n$ is a bijection from length-$n$ bit strings to $\{0,\ldots,2^n-1\}$ ([[thm-qc-bitstring-index-is-bijection]]).

[F2] A bit tuple $(b_0,\ldots,b_{n-1})$ has big-endian index $\sum_{k<n}b_k2^{n-1-k}$, so the first listed wire is most significant ([[def-qc-ordered-bitstring-encoding]]).

[F3] The product basis is ordered lexicographically by factor indices, and a wire permutation sends a product-basis tuple to the tuple in the permuted factor order ([[def-qc-tensor-register-and-permutation]]).

[F4] A ket denotes its vector, and the standard coordinate kets are the corresponding coordinate vectors ([[def-qc-dirac-notation-conversion]]).

[L1] The definition [[def-qa-cyclic-quantum-fourier-transform]] gives the basis amplitude $2^{-n/2}e^{2\pi ixy/2^n}$ at output integer $y$.

[F5] The Hadamard sends $|b\rangle$ to $2^{-1/2}(|0\rangle+(-1)^b|1\rangle)$ for $b\in\{0,1\}$ ([[def-qc-one-qubit-gate-alphabet-and-rotations]]).

[F6] The controlled phase $CP(\theta)$ fixes $|00\rangle,|01\rangle,|10\rangle$ and multiplies $|11\rangle$ by $e^{i\theta}$ ([[def-qc-controlled-phase-rotation]]).

## Proof

**Proof technique:** direct.

**Given:** $n\ge0$, an input bit string $x_0,\ldots,x_{n-1}$, and the stated ordered-basis conventions.

1.1 For $n\ge1$, bijectivity [F1] lets us index the output basis by all bit words $(y_{n-1},\ldots,y_0)$ in wire order; [F2] gives $y=\sum_{j=0}^{n-1}y_j2^j$. Then $xy/2^n=\sum_j y_jx/2^{n-j}$. In the term indexed by $y_j$, put $k=n-1-j$. The fractional part of $x/2^{n-j}$ is $\sum_{i=0}^{k}x_i2^{-(k-i+1)}$: terms with $i>k$ are integers and the remaining powers have exactly these denominators. Thus the phase attached to output bit $y_j$ is the phase of $R_{n-1-j}$. [given, F1, F2, L1, algebra]

2.1 Consequently $e^{2\pi ixy/2^n}=\prod_j e^{2\pi iy_j\sum_{i=0}^{n-1-j}x_i2^{-(n-j-i)}}$. Summing over all bit strings $y$ factors as a tensor product of the two-term sums for the individual $y_j$; the normalization $2^{-n/2}$ is the product of the $n$ factors $2^{-1/2}$. By [F3], in wire order $q_{n-1},\ldots,q_0$ the factor sequence is $R_0\otimes\cdots\otimes R_{n-1}$, and [F4] identifies these coordinate factors with the corresponding kets. [given, F3, F4, L1, step 1.1, algebra]

3.1 In the descending-target circuit, the block on $q_j$ applies $H$ followed by $CP(2\pi/2^{j-i+1})$ from each control $q_i$ with $i<j$. Before this block, all lower wires are still in the basis states $|x_i\rangle$: previous blocks target only higher wires, and [F6] leaves basis controls unchanged. By [F5], the Hadamard contributes relative phase $(-1)^{x_j}=e^{2\pi i x_j/2}$; by [F6], the controlled phases multiply it by $\prod_{i<j}e^{2\pi i x_i/2^{j-i+1}}$. Thus the block prepares $R_j$ without changing the lower wires or previously prepared higher factors. Induction down the finite loop gives $R_{n-1}\otimes\cdots\otimes R_0$ before reversal. By [F3], reversal gives the output of step 2.1. At $n=0$, the loop is empty, $N=1$, and both states are the empty tensor $1$. [given, F3, F5, F6, step 2.1, algebra] ∎

## Remarks

The binary fraction in $R_j$ is $0.x_jx_{j-1}\cdots x_0$ in base two. In particular, the output factor order and the pre-swap factor order differ; suppressing the final reversal changes the bit convention.
