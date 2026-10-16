---
id: thm-qa-truncated-qft-operator-norm-error
kind: theorem
title: Operator-norm error of QFT truncation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps: [alg-qa-truncated-binary-qft-circuit, alg-qa-exact-binary-qft-circuit, def-operator-norm-on-a-finite-dimensional-inner-product-space, cor-operator-norm-submultiplicative-and-t-star-t-identity, cor-triangle-inequality-for-inner-product-norm, thm-finite-dimensional-isometry-characterisations, thm-qa-exact-binary-qft-circuit-correct, def-qa-qft-gate-cost-model, cor-sine-and-cosine-are-one-lipschitz, thm-sine-and-cosine-derivatives, thm-double-angle-and-power-reduction-identities, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-qc-wire-permutation-is-unitary, lem-qc-tensor-product-basis-and-dimension, thm-bessel-inequality-and-finite-parseval-identity, lem-qa-tensor-extension-preserves-operator-norm, def-qc-tensor-map, def-qc-circuit-denotational-semantics, lem-qc-local-gate-wire-embedding]
axiom_use: "No choice axiom is used; the proof is a finite telescoping sum."
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
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---

## Statement

Let $n\ge1$, $N=2^n$, and let $m\ge1$ be an integer. For $1\le m<n$,

$$\|\operatorname{QFT}_{2^n}-\operatorname{QFT}^{(m)}_{2^n}\|\le\sum_{s=m+1}^{n}(n-s+1)\frac{2\pi}{2^s}\le2\pi n\,2^{-m}.$$

For $m\ge n$, the truncated circuit is exact and the error is zero. In particular, for $0<\varepsilon<1$, the cutoff $m=\min\{n,\lceil\log_2(2\pi n/\varepsilon)\rceil\}$ gives operator-norm error at most $\varepsilon$.

## Facts & Assumptions

**Given:** The exact and truncated circuits on a nonzero $2^n$-dimensional register, with $n\ge1$, and an integer cutoff $m\ge1$.

[F1] The exact and truncated gate lists agree except that each controlled phase with denominator index $s>m$ is replaced by the identity ([[alg-qa-exact-binary-qft-circuit]], [[alg-qa-truncated-binary-qft-circuit]]).

[F2] The ideal controlled phase is $\operatorname{diag}(1,1,1,e^{2\pi i/2^s})$ ([[def-qa-qft-gate-cost-model]]).

[F3] For a nonzero finite-dimensional domain, the operator norm is the maximum over unit vectors ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F4] Compatible products satisfy $\|ST\|\le\|S\|\,\|T\|$ ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F5] In finite dimension, a unitary is an isometry and its adjoint is its inverse ([[thm-finite-dimensional-isometry-characterisations]]).

[F6] The vector norm induced by an inner product satisfies $\|u+v\|\le\|u\|+\|v\|$ ([[cor-triangle-inequality-for-inner-product-norm]]).

[F7] For real $t$, $e^{it}=\cos t+i\sin t$ and $|e^{it}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F8] $|\sin u-\sin v|\le|u-v|$ for real $u,v$ ([[cor-sine-and-cosine-are-one-lipschitz]]).

[F9] $\sin0=0$ ([[thm-sine-and-cosine-derivatives]]).

[F10] $\cos(2u)=1-2\sin^2u$ ([[thm-double-angle-and-power-reduction-identities]]).

[F11] The exact circuit denotes $\operatorname{QFT}_{2^n}$ ([[thm-qa-exact-binary-qft-circuit-correct]]).

[F12] A wire permutation of an ordered tensor register is unitary ([[thm-qc-wire-permutation-is-unitary]]).

[F13] Adding spectator factors or moving the selected wires preserves the operator norm of a local gate ([[lem-qa-tensor-extension-preserves-operator-norm]]).

[F14] A tensor map acts on elementary product vectors by applying its factor maps ([[def-qc-tensor-map]]).

[F15] The two-qubit computational basis is orthonormal ([[lem-qc-tensor-product-basis-and-dimension]]).

[F16] Coordinates in a finite orthonormal basis satisfy Parseval and Bessel bounds ([[thm-bessel-inequality-and-finite-parseval-identity]]).

[F17] A unitary gate on distinct ordered wires has a unique unitary global embedding acting by the local gate on those wires and by the identity on the others ([[lem-qc-local-gate-wire-embedding]]).

[A1] [[def-qc-circuit-denotational-semantics]] identifies the chronological gate list with the right-to-left product of its embedded gate operators.

## Proof

**Proof technique:** direct.

**Given:** The circuits and hypotheses above.

1.1 For real $t$, [F7] and [F10] give $|1-e^{it}|^2=(1-\cos t)^2+\sin^2t=2(1-\cos t)=4\sin^2(t/2)$. By [F8]–[F9], $|\sin(t/2)|=|\sin(t/2)-\sin0|\le|t|/2$, hence $|1-e^{it}|\le|t|$. [F7, F8, F9, F10, algebra]

2.1 For an omitted gate at level $s$, set $t_s=2\pi/2^s$ and $D_s=\mathrm{CP}_s-I$ on its two-qubit target. By [F2], $D_s$ has only one nonzero diagonal entry, $e^{it_s}-1$, in the orthonormal basis [F15]. For any unit vector, Bessel's inequality [F16] bounds its $|11\rangle$ coordinate in modulus by $1$, so $\|D_s v\|\le|e^{it_s}-1|$; equality is attained at $v=|11\rangle$. Thus $\|D_s\|=|e^{it_s}-1|\le2\pi/2^s$ by step 1.1, and embedding it on the full register preserves this norm by [F13]. [F2, F3, F13, F15, F16, step 1.1, algebra]

3.1 By [A1], let $G_1,\ldots,G_K$ be the embedded operators in chronological order, so the exact circuit product is $G_K\cdots G_1$ and the truncated product replaces omitted $G_r$ by $\widetilde G_r=I$. The local embedding action is [F17]. By [F11], the exact product is $\operatorname{QFT}_{2^n}$. Their difference telescopes as $\sum_{r=1}^{K}G_K\cdots G_{r+1}(G_r-\widetilde G_r)\widetilde G_{r-1}\cdots\widetilde G_1$. Each $H$ is unitary by direct multiplication of its matrix in [F2]; each $\mathrm{CP}_s$ is unitary because it is diagonal with unit-modulus entries by [F2,F7]; each SWAP is unitary by [F12], and each omitted gate is replaced by $I$. A local unitary $U$ tensored with $I$ has inverse $U^{-1}\otimes I$ by [F14], and conjugating by the unitary wire permutation preserves unitarity. Thus every outside product is unitary and has norm $1$ by [F3,F5]. For any operators $X,Y$, [F6] and the definition [F3] give $\|X+Y\|\le\|X\|+\|Y\|$; submultiplicativity [F4] therefore bounds the telescoping sum by the sum of the omitted-gate norms from step 2.1. [A1, F2, F3, F4, F5, F6, F7, F11, F12, F14, F17, step 2.1, algebra]

4.1 At level $s$, the pairs $0\le i<j<n$ satisfying $j-i+1=s$ have $i=0,\ldots,n-s$, so there are $n-s+1$ such gates. Summing step 2.1 over the omitted levels gives the first bound. Since $n-s+1\le n$ and $\sum_{s=m+1}^{n}2^{-s}\le2^{-m}$, this is at most $2\pi n2^{-m}$. [F1, step 2.1, step 3.1, algebra]

5.1 If $m\ge n$, no gate is omitted by [F1], so the error is zero. Otherwise the displayed sum bound applies. For $m=\lceil\log_2(2\pi n/\varepsilon)\rceil<n$, $2^m\ge2\pi n/\varepsilon$, hence $2\pi n2^{-m}\le\varepsilon$; taking $m=\min\{n,\lceil\log_2(2\pi n/\varepsilon)\rceil\}$ selects either this case or $m=n$. [F1, step 4.1, algebra] ∎

## Remarks

No axiom of choice is used. The key local proof obligation is the telescoping operator-norm estimate: the cited QFT treatments motivate the cutoff but do not supply this complete operator-norm argument. The sine/cosine suppliers are published and read; the QFT circuit suppliers remain in the assigned cross-pair dependency set.
