---
id: thm-qa-17-szegedy-spectral-mapping
kind: theorem
title: "Szegedy spectral mapping for one and two reflections"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - lem-qa-17-invariant-eigenplane
  - thm-qa-17-discriminant-self-adjoint
  - lem-qa-17-walk-reflection-unitarity
  - def-qa-17-szegedy-transition-isometry
  - def-qa-17-szegedy-walk
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-orthogonal-complement
  - def-kernel-and-image-of-a-linear-map
  - thm-linear-kernel-image-and-injectivity
  - thm-finite-dimensional-orthogonal-decomposition
  - thm-of-square-roots
  - def-principal-inverse-sine-and-cosine
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-eulers-formula
  - thm-complex-exponential-addition-and-real-extension
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - thm-quarter-turn-values-and-shift-formulas
  - def-qa-17-finite-stochastic-kernel
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §18.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

Let $D=T^*ST$ be the discriminant of a finite row-stochastic kernel and let $U=S(2TT^*-I)$ and $W=U^2$. For every eigenvalue $\lambda\in(-1,1)$ of $D$, counted with multiplicity, its invariant planes contribute eigenvalues

$$\exp(i\arccos\lambda),\ \exp(-i\arccos\lambda)\quad\text{for }U,\qquad \exp(2i\arccos\lambda),\ \exp(-2i\arccos\lambda)\quad\text{for }W.$$

For each eigendirection with $\lambda=1$ (respectively $\lambda=-1$), the plane collapses to a line on which $U$ acts as $+I$ (respectively $-I$), so $W$ acts as $+I$. On the remaining subspace $K=(\operatorname{ran}T+\operatorname{ran}(ST))^\perp$, $U=-S$ and its eigenvalues lie in $\{+1,-1\}$; therefore all eigenvalues of $W$ there are $+1$. If $X=\varnothing$, both spaces are zero and the statements about eigenvalues are vacuous.

## Facts & Assumptions

**Given:** A finite row-stochastic kernel $(X,P)$, the maps $T,S,D,U,W$ from [[def-qa-17-szegedy-transition-isometry]] and [[def-qa-17-szegedy-walk]], and the root inner product linear in its first argument.

[F1] [[thm-qa-17-discriminant-self-adjoint]]: $D$ is self-adjoint, $\|D\|\le1$, and $T^*T=I$.

[F2] [[lem-qa-17-invariant-eigenplane]]: if $Dv=\lambda v$, then $\operatorname{span}\{Tv,STv\}$ is invariant with $U(Tv)=STv$ and $U(STv)=-Tv+2\lambda STv$; the span is one-dimensional at $\lambda=\pm1$ and two-dimensional for $|\lambda|<1$.

[F3] [[lem-qa-17-walk-reflection-unitarity]]: $U$ is unitary and equals $-S$ on $A^\perp$, where $A=\operatorname{ran}T$.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite-dimensional complex normal endomorphism has an orthonormal eigenbasis.

[F5] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: an eigenvalue has a nonzero eigenvector, and the spectrum is the set of eigenvalues.

[F6] [[def-orthogonal-complement]] and [[thm-finite-dimensional-orthogonal-decomposition]]: for a subspace $V_0$ of a finite-dimensional inner-product space, $V=V_0\oplus V_0^\perp$.

[F7] [[def-principal-inverse-sine-and-cosine]]: $\arccos:[-1,1]\to[0,\pi]$ satisfies $\cos(\arccos r)=r$.

[F8] [[cor-trigonometric-parity-and-pythagorean-identity]]: $\sin^2\theta+\cos^2\theta=1$ for real $\theta$.

[F9] [[thm-of-square-roots]]: every nonnegative real has a unique nonnegative square root.

[F10] [[thm-eulers-formula]]: $\exp(i\theta)=\cos\theta+i\sin\theta$ for real $\theta$.

[F11] [[thm-complex-exponential-addition-and-real-extension]]: $\exp(z+w)=\exp z\exp w$.

[F12] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: sine is strictly increasing on $[-\pi/2,\pi/2]$ and strictly decreasing on $[\pi/2,3\pi/2]$.

[F13] [[thm-linear-kernel-image-and-injectivity]]: the image of a linear map is a linear subspace.

[F14] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin0=0$, $\sin(\pi/2)=1$, and $\sin\pi=0$.

[F15] [[def-kernel-and-image-of-a-linear-map]]: $\operatorname{im}T=\{T(v):v\in V\}$.

## Proof

1.1 If $X=\varnothing$, then $\mathbb C^X=\mathbb C^{X\times X}=\{0\}$, so there are no eigenvalues and the claims are vacuous. Assume now $X\ne\varnothing$. By [F1] and [F4], choose an orthonormal eigenbasis $(v_j)$ of the self-adjoint $D$, with real eigenvalues $\lambda_j\in[-1,1]$; the bound follows from $\|D\|\le1$. [F1, F4, F5, choose]

2.1 For distinct basis vectors $v_j,v_k$, the spans $\operatorname{span}\{Tv_j,STv_j\}$ and $\operatorname{span}\{Tv_k,STv_k\}$ are orthogonal: the $T$-images and their swapped images pair to $\langle v_j,v_k\rangle=0$, while the cross pairings equal $\langle v_j,Dv_k\rangle=\lambda_k\langle v_j,v_k\rangle=0$. These spans together generate $A+B$, where $A=\operatorname{ran}T$ and $B=\operatorname{ran}(ST)$. [F1, F2, step 1.1, algebra]

2.2 Fix an eigenvalue $\lambda_j\in(-1,1)$ and its plane basis $a=Tv_j,b=STv_j$. By [F2], the matrix of $U$ in the ordered basis $(a,b)$ is $\begin{pmatrix}0&-1\\1&2\lambda_j\end{pmatrix}$, so its characteristic equation is $z^2-2\lambda_jz+1=0$. Its roots are $z=\lambda_j\pm i\sqrt{1-\lambda_j^2}$; each root has eigenvector $(1,-z)$ in these coordinates, and the roots are distinct because $|\lambda_j|<1$. Put $\theta_j=\arccos\lambda_j\in(0,\pi)$. By [F7], $\cos\theta_j=\lambda_j$. If $0<\theta_j\le\pi/2$, strict increase from $\sin0=0$ on $[0,\pi/2]$ gives $\sin\theta_j>0$; if $\pi/2<\theta_j<\pi$, strict decrease to $\sin\pi=0$ on $[\pi/2,\pi]$ gives the same. These monotonicity and endpoint facts are [F12] and [F14]. Then [F8] and uniqueness in [F9] yield $\sin\theta_j=\sqrt{1-\lambda_j^2}$. [F10] identifies the roots as $\exp(\pm i\theta_j)$, and [F11] squares them to $\exp(\pm2i\theta_j)$ for $W=U^2$. [F2, F7, F8, F9, F10, F11, F12, F14, step 1.1, algebra]

2.3 If $\lambda_j=\pm1$, [F2] gives $STv_j=\lambda_jTv_j$, so the corresponding line contributes the single eigenvalue $\lambda_j$ to $U$ and $+1$ to $W$. This counts one endpoint eigenvalue per eigendirection, not two coincident plane eigenvalues. [F2, step 1.1, algebra]

3.1 Let $H=A+B$, the sum of the images of $T$ and $ST$ as identified by [F15]; both are subspaces by [F13], so their sum is a subspace. By [F6], $\mathbb C^{X\times X}=H\oplus K$ with $K=H^\perp$. Since $K\subseteq A^\perp$, [F3] gives $U|_K=-S|_K$. The swap preserves $K$: for $a\in A$ and $w\in K$, $\langle a,Sw\rangle=\langle Sa,w\rangle=0$ because $Sa\in B$, and for $b\in B$ and $w\in K$, $\langle b,Sw\rangle=\langle Sb,w\rangle=0$ because $Sb\in A$. [F3, F6, F13, F15, step 2.1, algebra]

4.1 On $K$, $S^2=I$, so each $w\in K$ decomposes as $(w+Sw)/2+(w-Sw)/2$; these summands lie in $K$ by step 3.1 and satisfy $S(w+Sw)=w+Sw$ and $S(w-Sw)=-(w-Sw)$. Thus $U=-S$ has eigenvalues only $\pm1$ on $K$, and $W=U^2$ is identity there. Combining this with steps 2.2–2.3 gives the complete eigenvalue multiset, including repeated eigenvalues and any overlap of endpoint values with the complement. No irreducibility, aperiodicity, or choice principle is used. [F3, step 2.2, step 2.3, step 3.1, algebra] ∎
