---
id: lem-qa-36-history-path-ground-vector-monotonicity
kind: lemma
title: Nonnegative monotone ground vector of the history path
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 16
deps:
  - alg-qa-36-five-local-history-path
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: None; only finite-dimensional minimization and the stated spectral theorem are used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Quantum Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: Claims 3.7–3.8, PDF pp. 13–14; positive and monotone path ground vector for the step-potential path.
    - title: Michael Jarret and Stephen P. Jordan, The Fundamental Gap for a Class of Schrödinger Operators on Path and Hypercube Graphs
      url: https://arxiv.org/pdf/1403.1473
      locator: §§II.2 and III.2, especially Lemma 4; recurrence and ground-vector monotonicity for a linear path potential.
verification:
  precheck: n/a
---

## Statement

Let $N\ge1$, $s\in[0,1]$, $a=1-s$, $t=s/2$, and let $L_N$ be the graph Laplacian of the path with vertices $0,1,\ldots,N$. Define the clock matrix
$$H_0(s)=a\,\operatorname{diag}(0,1,\ldots,N)+tL_N.$$
For each $s\in[0,1]$, its smallest eigenvalue is simple and has a normalized nonnegative eigenvector $v(s)=(v_0,\ldots,v_N)$ satisfying
$$v_0\ge v_1\ge\cdots\ge v_N\ge0.$$
For $s>0$ the vector is strictly positive; at $s=0$ it is $e_0$ and its tail coordinates are zero. At $s=1$ it is the uniform vector.

For a path produced by [[alg-qa-36-five-local-history-path]], set $W_0=I$, $W_\ell=U_\ell\cdots U_1$ and $\eta_\ell=W_\ell|0^n\rangle\otimes|c_\ell\rangle$. The all-zero-input history sector $\mathcal S_0=\operatorname{span}\{\eta_0,\ldots,\eta_N\}$ is invariant under $H(s)$, and its restriction has matrix $H_0(s)$ in this orthonormal history basis.

## Facts & Assumptions

**Given:** The unary clock and linear interpolation from [[alg-qa-36-five-local-history-path]].

[F1] A finite-dimensional self-adjoint operator has an orthonormal eigenbasis with real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof

1.1 For the constructed path, the vectors $\eta_\ell$ are orthonormal because the prefixes $W_\ell$ are unitary and the clock states are orthonormal. The clock penalty vanishes on them. The input penalty annihilates $\eta_0$ because its data input is $|0^n\rangle$, and annihilates $\eta_\ell$ for $\ell>0$ because the first clock bit is $1$. Also $H_{\rm clock0}\eta_\ell=\ell\eta_\ell$. Each propagation term $h_\ell$ sends $\eta_{\ell-1}$ to $(\eta_{\ell-1}-\eta_\ell)/2$ and $\eta_\ell$ to $(\eta_\ell-\eta_{\ell-1})/2$, and annihilates the other history basis vectors, since $W_\ell=U_\ell W_{\ell-1}$. Thus $\mathcal S_0$ is invariant and the restricted matrix is $a\operatorname{diag}(0,1,\ldots,N)+tL_N$. For every $N\ge1$, the quadratic form of this abstract matrix at $x$ is $a\sum_{i=0}^N i|x_i|^2+t\sum_{i=0}^{N-1}|x_i-x_{i+1}|^2$, so both summands are positive semidefinite. [given, F1, algebra]

2.1 If $s=0$, then $H_0(0)=\operatorname{diag}(0,1,\ldots,N)$ and its unique normalized nonnegative ground vector is $e_0$. If $s=1$, then $H_0(1)=L_N/2$; its quadratic form is one half the sum of squared adjacent differences, so its kernel consists exactly of constant vectors, giving the stated uniform ground vector. [step 1.1, algebra]

2.2 Suppose $0<s<1$, so $a,t>0$. The matrix is real symmetric with neighboring off-diagonal entries $-t$. By [F1], a complex eigenvector for the smallest eigenvalue exists; its real or imaginary part is a nonzero real eigenvector because the matrix and eigenvalue are real. Normalize that real eigenvector. Expanding any vector in the eigenbasis from [F1] shows its Rayleigh quotient is a weighted average of the eigenvalues, so this real eigenvector minimizes the quotient. Replacing its coordinates by their absolute values does not increase the Rayleigh quotient, since each edge contribution is $t(x_i-x_{i+1})^2$ and $(|x_i|-|x_{i+1}|)^2\le (x_i-x_{i+1})^2$; therefore a nonnegative ground vector $v$ exists. Its eigenvalue equation at any zero coordinate forces every adjacent coordinate to be zero, and connectedness of the path would then force $v=0$. Hence $v_i>0$ for every $i$. [F1, step 1.1, algebra]

3.1 The endpoint equation at vertex $0$ determines $v_1$ uniquely from $v_0$, and each interior equation determines $v_{i+1}$ from $v_i,v_{i-1}$. If $v_0=0$, the endpoint equation gives $v_1=0$ and recurrence gives $v=0$, impossible. Thus every eigenvector at a fixed eigenvalue is determined by its first coordinate, so the ground eigenspace is one-dimensional. [step 2.2, algebra]

3.2 Write $E$ for the ground eigenvalue and $d_i=v_i-v_{i+1}$ for $0\le i<N$. The endpoint and interior eigenvalue equations give $\displaystyle d_0=\frac{E}{t}v_0,\qquad d_i-d_{i-1}=\frac{E-ai}{t}v_i\quad(1\le i<N),\qquad d_{N-1}=\frac{aN-E}{t}v_N.$ The ground energy satisfies $E\ge0$ because both terms in $H_0(s)$ are positive semidefinite. Testing the normalized constant vector gives $E\le aN/2$, because its Laplacian energy is zero and the average of $0,1,\ldots,N$ is $N/2$. Therefore $d_0\ge0$ and $d_{N-1}\ge0$. [step 1.1, step 2.2, F1, algebra]

4.1 Since $a>0$ and each $v_i>0$, the increments $d_i-d_{i-1}$ in step 3.2 are nonnegative while $ai\le E$ and nonpositive after $ai\ge E$. Thus the sequence $(d_i)$ first does not decrease and then does not increase; every one of its entries is at least the smaller of its two endpoint entries. Step 3.2 makes both endpoints nonnegative, so every $d_i\ge0$. This proves $v_i\ge v_{i+1}$ and completes the remaining case. [step 3.2, algebra] ∎
