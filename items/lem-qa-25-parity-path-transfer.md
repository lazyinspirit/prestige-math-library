---
id: lem-qa-25-parity-path-transfer
kind: lemma
title: Sparse parity-path transfer and norm
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-qa-19-finite-matrix-dynamics
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-dirac-notation-conversion
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
proof_strategy: direct
axiom_use: "None; the basis change and matrix evolution are finite and choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.1"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.4"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $\mathcal B_n$ be the complex inner-product space with orthonormal basis $\{|y\rangle:y\in\{0,1\}^n\}$. For $1\le r\le n$, define $X_r|y_1\cdots y_n\rangle=|y_1\cdots(y_r\oplus1)\cdots y_n\rangle$, and put $J=\frac12\sum_{r=1}^nX_r$. For $0\le i\le n$, let $|D_i^n\rangle$ be the normalized uniform sum of basis vectors of Hamming weight $i$; define $\mathcal S_n=\operatorname{span}\{|D_i^n\rangle:0\le i\le n\}$. On a separate path space with orthonormal basis $\{|i\rangle:0\le i\le n\}$, define $H_0$ to have off-diagonal entries $w_i=\sqrt{i(n+1-i)}/n$ between $|i-1\rangle$ and $|i\rangle$ for every 1≤i≤n, and all other matrix entries zero.

Let $n\ge1$, $x\in\{0,1\}^n$, and $p_0=0,\ p_i=x_1\oplus\cdots\oplus x_i$. On the basis $\{|i,b\rangle:0\le i\le n,\ b\in\{0,1\}\}$, put
$$H_x=\sum_{i=1}^n w_i\sum_{b=0}^1\left(|i-1,b\rangle\langle i,b\oplus x_i|+|i,b\oplus x_i\rangle\langle i-1,b|\right).$$
Write $\operatorname{parity}(x)=p_n=x_1\oplus\cdots\oplus x_n$. The basis permutation $V_x|i,b\rangle=|i,b\oplus p_i\rangle$ conjugates $H_x$ to two copies of $H_0$. The counting identity proved below gives $H_0=(2/n)J|_{\mathcal S_n}$, under the isometry $|i\rangle\mapsto|D_i^n\rangle$. Consequently $\|H_x\|_{\rm op}\le1$ and
$$e^{-iH_x\pi n/2}|0,0\rangle=(-i)^n|n,\operatorname{parity}(x)\rangle.$$

## Facts & Assumptions

**Given:** A positive integer $n$, a bit string $x$, the finite matrix dynamics of [[def-qa-19-finite-matrix-dynamics]], and the root convention of [[def-qc-dirac-notation-conversion]].

[F1] [[def-qa-19-finite-matrix-dynamics]] and [[thm-complex-exponential-addition-and-real-extension]]: finite Hermitian evolution is $e^{-itA}$ by spectral functional calculus, and the scalar exponential satisfies $\exp(z+w)=\exp(z)\exp(w)$.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite Hermitian matrix has an orthonormal eigenbasis.

[F3] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $\exp(i\theta)=\cos\theta+i\sin\theta$, with the stated quarter-turn values.

## Proof

**Given:** As in Facts & Assumptions.

1.1 The map $V_x$ permutes the finite orthonormal basis and satisfies $V_x^2=I$, so it is unitary. In a term indexed by $i,b$, the endpoints become $|i-1,b\oplus p_{i-1}\rangle$ and $|i,b\oplus x_i\oplus p_i\rangle$. Since $p_i=p_{i-1}\oplus x_i$, the second bit is $b\oplus p_{i-1}$; the edge is therefore an ordinary adjacent path edge with the spectator bit unchanged. Thus $V_xH_xV_x$ is two identical path matrices $H_0$, one for each bit $b$, and $V_x$ fixes $|0,0\rangle$ while sending $|n,0\rangle$ to $|n,p_n\rangle$. [given, construct, algebra]

1.2 Let $|D_i^n\rangle$ be the normalized uniform superposition of $n$-bit strings of Hamming weight $i$, and set $|D_{-1}^n\rangle=|D_{n+1}^n\rangle=0$. Counting the $i$ downward flips and $n-i$ upward flips gives $J|D_i^n\rangle=\tfrac12\sqrt{i(n+1-i)}|D_{i-1}^n\rangle+\tfrac12\sqrt{(i+1)(n-i)}|D_{i+1}^n\rangle$ for every $0\le i\le n$. Thus $(2/n)J$ has the stated path weights on the symmetric subspace. [given, algebra]

2.1 Each $X_r$ permutes an orthonormal basis, so for $v=\sum_y c_y|y\rangle$ one has $\|X_rv\|^2=\sum_y|c_y|^2=\|v\|^2$, and hence $\|X_r\|_{\rm op}=1$. The vector triangle inequality gives $\|Jv\|\le\frac12\sum_r\|X_rv\|=(n/2)\|v\|$, which yields $\|J\|_{\rm op}\le n/2$, so $\|H_0\|_{\rm op}\le1$; unitary conjugation in step 1.1 gives $\|H_x\|_{\rm op}\le1$. [given, step 1.1, step 1.2, algebra]

3.1 For each sign string $\sigma\in\{-1,1\}^n$, put $u_\sigma=2^{-n/2}\sum_{y\in\{0,1\}^n}(\prod_r\sigma_r^{y_r})|y\rangle$. Factorizing the finite inner-product sum gives $\langle u_\sigma,u_\tau\rangle=2^{-n}\prod_r(1+\sigma_r\tau_r)$, so these $2^n$ vectors form an orthonormal basis. Flipping bit $r$ gives $X_ru_\sigma=\sigma_ru_\sigma$. By [F1]–[F2], $e^{-i(\pi/2)\sum_rX_r}$ acts on $u_\sigma$ by $\exp(-i\pi\sum_r\sigma_r/2)$. The scalar addition law in [F1] factors this as $\prod_r\exp(-i\pi\sigma_r/2)$, and Euler's formula [F3] gives each factor as $-i\sigma_r$. Hence $e^{-i(\pi/2)\sum_rX_r}=(-i)^nX_1\cdots X_n$. This maps $|D_0^n\rangle=|0^n\rangle$ to $(-i)^n|D_n^n\rangle=(-i)^n|1^n\rangle$. The path basis identifies $|D_0^n\rangle,|D_n^n\rangle$ with $|0\rangle,|n\rangle$; step 1.1 then sends the endpoint to $|n,p_n\rangle$. Since $H_0=(2/n)J$, evolution for $t=\pi n/2$ is $e^{-itH_0}=e^{-i\pi J}$, which is the transfer established above. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎
