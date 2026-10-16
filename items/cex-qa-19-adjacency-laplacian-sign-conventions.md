---
id: cex-qa-19-adjacency-laplacian-sign-conventions
kind: counterexample
title: Generator convention matters
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qa-19-graph-generator-conventions
  - def-qa-19-finite-matrix-dynamics
  - thm-qa-19-matrix-exponential-unitary-properties
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - thm-qa-19-measurement-distribution
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - def-sine-and-cosine-by-power-series
  - thm-alternating-series-test
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.1
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.1, PDF pp.81–82 (printed p.74 on PDF p.82): opposite graph-Laplacian sign conventions."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: finite Hermitian-matrix evolution; both counterexamples are calculated locally."
---

## Statement refuted

For every finite undirected graph, every initial unit pure state, and every time, replacing $D-A$ by $A-D$ leaves the computational-basis measurement law unchanged. For every finite graph with positive degrees, replacing $A$ by $D^{-1/2}AD^{-1/2}$ also leaves the minimum nonnegative time needed to reach any specified walk output ray unchanged.

## Facts & Assumptions
**Given:** The graph-generator conventions and finite matrix evolution in the preceding definitions. Produce finite counterexamples to both claims.

[F1] [[def-qa-19-graph-generator-conventions]]: $L_+=D-A$, $L_-=A-D=-L_+$, and when every degree is positive, $A_{\rm norm}=D^{-1/2}AD^{-1/2}$.

[F2] [[def-qa-19-finite-matrix-dynamics]]: for self-adjoint $H$, $U_H(t)=\sum_\lambda e^{-it\lambda}P_\lambda$.

[F3] [[thm-complex-exponential-addition-and-real-extension]]: $e^{z+w}=e^ze^w$ for complex $z,w$.

[F4] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{iy}=\cos y+i\sin y$ and $|e^{iy}|=1$ for real $y$.

[F5] [[def-sine-and-cosine-by-power-series]]: sine and cosine are given by their real power series.

[F6] [[thm-alternating-series-test]]: for decreasing nonnegative terms tending to zero, the alternating sum lies between consecutive partial sums.

[F7] [[thm-quarter-turn-values-and-shift-formulas]]: $\cos\pi=-1$, $\sin\pi=0$, and shifts by $\pi$ negate sine and cosine.

[F8] [[thm-sine-cosine-zero-sets-and-fundamental-period]]: $\sin x=0$ exactly when $x=k\pi$ for an integer $k$.

[F9] [[def-qc-register-and-computational-basis]] and [[thm-qc-computational-basis-orthonormal]]: the ordered basis of $\mathbb C^d$ is the standard orthonormal basis.

[F10] [[thm-qa-19-measurement-distribution]]: for self-adjoint $H$ and unit $\psi$, measuring $U_H(t)\psi$ in an orthonormal basis assigns each basis line its squared-coordinate probability.

## Counterexample

1.1 For the two-vertex graph with one edge, in basis $(e_0,e_1)$ the adjacency swaps the basis vectors, $Ae_0=e_1$ and $Ae_1=e_0$, and $D=I$. Thus $L_+=I-A$, $L_-=-L_+$, and $A_{\rm norm}=A$. Put $u_+=(e_0+e_1)/\sqrt2$, $u_-=(e_0-e_1)/\sqrt2$, and $\psi=(e_0+i e_1)/\sqrt2$. Direct inner-product calculations using [F9] give $\|u_+\|=\|u_-\|=\|\psi\|=1$ and $\langle u_+,u_-\rangle=0$; direct application of $A$ gives $Au_+=u_+$ and $Au_-=-u_-$. Thus $(u_+,u_-)$ is an orthonormal eigenbasis. [given, F1, F9, algebra]

1.2 For the three-vertex path with ordered vertices $0,1,2$, the degrees are $(1,2,1)$ and $Ae_0=e_1$, $Ae_1=e_0+e_2$, $Ae_2=e_1$. Thus $A=\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix},\quad D=\begin{pmatrix}1&0&0\\0&2&0\\0&0&1\end{pmatrix},\quad A_{\rm norm}=D^{-1/2}AD^{-1/2}=A/\sqrt2,\quad L_+=D-A,\quad L_-=A-D=-L_+.$ All degrees are positive, so [F1] defines $A_{\rm norm}$. Put $u_0=(e_0-e_2)/\sqrt2$, $u_+=(e_0+\sqrt2e_1+e_2)/2$, and $u_-=(e_0-\sqrt2e_1+e_2)/2$. By direct coordinate inner products in the standard orthonormal basis [F9], $(u_0,u_+,u_-)$ is an orthonormal basis; direct multiplication gives $Au_0=0$, $Au_+=\sqrt2u_+$, and $Au_-=-\sqrt2u_-$. The vectors $c=(e_0+e_1+e_2)/\sqrt3$, $u_0$, and $v=(e_0-2e_1+e_2)/\sqrt6$ also have unit norm and pairwise zero inner products. Direct multiplication gives $L_+c=0$, $L_+u_0=u_0$, and $L_+v=3v$. Hence the four generator spectra are $\sigma(A)=\{0,\pm\sqrt2\}$, $\sigma(A_{\rm norm})=\{0,\pm1\}$, $\sigma(L_+)=\{0,1,3\}$, and $\sigma(L_-)=\{0,-1,-3\}$. This directly compares adjacency, normalized adjacency, and both Laplacian signs on the irregular graph. [given, F1, F9, algebra]

2.1 The spectral definition [F2] gives eigenphases $1,e^{-2i}$ for $U_{L_+}(1)$ on $(u_+,u_-)$ and $1,e^{2i}$ for $U_{L_-}(1)$. By [F3]–[F4], these are equivalently $e^{-i}(\cos1\,I+i\sin1\,A)$ and $e^{i}(\cos1\,I-i\sin1\,A)$: on $u_+$ and $u_-$, respectively, the coefficients are $1,e^{-2i}$ and $1,e^{2i}$. The $e_1$ coordinate after $U_{L_+}(1)$ is $e^{-i}i(\cos1+\sin1)/\sqrt2$; after $U_{L_-}(1)$ it is $e^{i}i(\cos1-\sin1)/\sqrt2$. Thus [F10] gives $p_+(1)=(\cos1+\sin1)^2/2$ and $p_-(1)=(\cos1-\sin1)^2/2$. [given, F2, F3, F4, F9, F10, step 1.1, algebra]

2.2 Put $\xi=(u_0+u_+)/\sqrt2$, which is unit by step 1.2, and fix the target ray $[\zeta]:=[U_A(\pi/\sqrt2)\xi]=[(u_0-u_+)/\sqrt2]$, since $e^{-i\pi}=-1$ by [F4], [F7]. For any real $t$, $U_A(t)\xi=(u_0+e^{-i\sqrt2t}u_+)/\sqrt2$ and $U_{A_{\rm norm}}(t)\xi=(u_0+e^{-it}u_+)/\sqrt2$ by [F1]–[F2]. Since the $u_0$ coefficient is the same nonzero number in both target and output, equality of rays forces the scalar multiple to be $1$ and is equivalent to equality of the displayed relative phases. [given, F1, F2, F3, F4, F7, step 1.2, algebra]

3.1 At $1$, the cosine-series magnitudes $b_k=1/(2k)!$ and sine-series magnitudes $c_k=1/(2k+1)!$ decrease to zero: each next factorial multiplies the denominator by a factor at least $2$, so both sequences tend to zero. By [F5]–[F6], the cosine sum lies above its two-term partial sum $1-1/2=1/2$, and the sine sum lies above $1-1/6=5/6$. Therefore $p_+(1)-p_-(1)=2\sin1\cos1\ge5/6>0$. The two Laplacian signs give different same-time measurement laws. [F5, F6, step 2.1, algebra]

4.1 If $[U_A(t)\xi]=[\zeta]$, then $e^{-i(\sqrt2t-\pi)}=1$. By [F3]–[F4], this forces $\sin(\sqrt2t-\pi)=0$ and $\cos(\sqrt2t-\pi)=1$; [F8] puts the angle at $k\pi$, and [F7] shows $k$ must be even. Thus $t=\pi/\sqrt2+k\sqrt2\pi$. For $k\ge0$ this is at least $\pi/\sqrt2$; for $k\le-1$ it is at most $\pi/\sqrt2-\sqrt2\pi<0$. Hence its least nonnegative value is $\pi/\sqrt2$. The same argument for $A_{\rm norm}$ gives $t=\pi+2k\pi$, whose least nonnegative value is $\pi$. For the second family, $k=0$ gives $t=\pi$, every $k\ge1$ gives a larger time, and every $k\le-1$ gives a negative time. Thus the least nonnegative time is $\pi$. These runtimes differ because $\sqrt2>1$. [F3, F4, F7, F8, step 2.2, algebra] ∎
