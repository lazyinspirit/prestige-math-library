---
id: ex-qa-17-two-state-reversible-walk
kind: example
title: "Two-state reversible walk and its endpoint phases"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-17-finite-reversible-chain
  - def-qa-17-szegedy-transition-isometry
  - thm-qa-17-discriminant-self-adjoint
  - def-qa-17-szegedy-walk
  - lem-qa-17-invariant-eigenplane
  - lem-qa-17-walk-reflection-unitarity
  - thm-qa-17-szegedy-spectral-mapping
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-kernel-and-image-of-a-linear-map
  - thm-linear-kernel-image-and-injectivity
  - def-orthogonal-complement
  - thm-finite-dimensional-orthogonal-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §18.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §8.2"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Example

For $a\in[0,1]$, take

$$P_a=\begin{pmatrix}1-a&a\\a&1-a\end{pmatrix},\qquad \pi=(1/2,1/2).$$

Compute the discriminant and the complete eigenvalue multisets of the one-reflection walk $U$ and its square $W=U^2$, including both endpoint parameters.

## Facts & Assumptions

**Given:** The finite row-stochastic kernel $(X,P_a)$ with the supplied law $\pi$ and the definitions of $T,S,D,U,W$ from [[def-qa-17-szegedy-transition-isometry]] and [[def-qa-17-szegedy-walk]].

[F1] [[def-qa-17-finite-reversible-chain]]: a finite reversible chain has a positive stationary probability law and satisfies detailed balance.

[F2] [[thm-qa-17-discriminant-self-adjoint]]: $T^*T=I$ and $D_{xy}=\sqrt{(P_a)_{xy}(P_a)_{yx}}$.

[F3] [[def-qa-17-szegedy-transition-isometry]]: the label/product bases are orthonormal; $T|x\rangle=|x\rangle\sum_y\sqrt{(P_a)_{xy}}|y\rangle$, $S|x,y\rangle=|y,x\rangle$, and $D=T^*ST$.

[F4] [[def-qa-17-szegedy-walk]]: $U=S(2TT^*-I)$ and $W=U^2$.

[F5] [[lem-qa-17-invariant-eigenplane]]: for $Dv=\mu v$, the span of $Tv,STv$ is an invariant line when $\mu=\pm1$ and an invariant plane when $-1<\mu<1$.

[F6] [[lem-qa-17-walk-reflection-unitarity]]: $S$ is unitary and, with $A=\operatorname{ran}T$, $U=-S$ on $A^\perp$.

[F7] [[thm-qa-17-szegedy-spectral-mapping]]: an interior discriminant eigenvalue $\mu$ contributes $e^{\pm i\arccos\mu}$ to $U$ and $e^{\pm2i\arccos\mu}$ to $W$; a $+1$ or $-1$ endpoint eigendirection contributes that same sign to $U$ and $+1$ to $W$.

[F8] Write $\sigma_{\mathrm{mult}}(T)$ for the multiset of eigenvalues counted with algebraic multiplicity. The ordinary spectrum $\sigma(T)$ is a set. [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: the spectrum of an endomorphism is the set of scalars with a nonzero eigenvector; the zero-space endomorphism has empty spectrum.

[F9] [[def-kernel-and-image-of-a-linear-map]]: the image of a linear map $T$ is $\{T(v):v\in V\}$.

[F10] [[thm-linear-kernel-image-and-injectivity]]: the image of a linear map is a linear subspace.

[F11] [[def-orthogonal-complement]]: $H^\perp$ consists of vectors whose inner product with every vector of $H$ is zero.

[F12] [[thm-finite-dimensional-orthogonal-decomposition]]: in a finite-dimensional inner-product space, $V=H\oplus H^\perp$.

## Verification

1.1 Both rows of $P_a$ sum to one, $\pi P_a=\pi$, and $P_a$ is symmetric, so $\pi_x(P_a)_{xy}=\pi_y(P_a)_{yx}$ for all $x,y$. Thus $\pi$ is a positive stationary reversible law. [F1, given, algebra]

1.2 Since $P_a$ is symmetric and has nonnegative entries, [F2] gives $D=P_a$. The vectors $u_+=(1,1)$ and $u_-=(1,-1)$ form a basis with $Du_+=u_+$ and $Du_-=(1-2a)u_-$. [F2, algebra]

1.3 At $a=0$, $T|0\rangle=|00\rangle$ and $T|1\rangle=|11\rangle$, so $A=B=\operatorname{span}\{|00\rangle,|11\rangle\}$. On $A$, $R_A=2TT^*-I$ is $+I$ and $S=I$, so $U=+I$. On $K=\operatorname{span}\{|01\rangle,|10\rangle\}$, [F6] gives $U=-S$, whose eigenvectors $|01\rangle+|10\rangle$ and $|01\rangle-|10\rangle$ have eigenvalues $-1$ and $+1$. Hence $\sigma_{\mathrm{mult}}(U)=\{1,1,1,-1\}$ and $W=I$ has four eigenvalues $+1$. [F3, F4, F6, F8, algebra]

1.4 At $a=1$, $T|0\rangle=|01\rangle$ and $T|1\rangle=|10\rangle$, so $A=B=\operatorname{span}\{|01\rangle,|10\rangle\}$. On $A$, $R_A=+I$ and $U=S$, with eigenvalues $+1,-1$. On $K=\operatorname{span}\{|00\rangle,|11\rangle\}$, $S=I$, so [F6] gives $U=-I$. Thus $\sigma_{\mathrm{mult}}(U)=\{1,-1,-1,-1\}$ and $W=I$ has four eigenvalues $+1$. [F3, F4, F6, F8, algebra]

2.1 Suppose $0<a<1$ and set $\lambda=1-2a\in(-1,1)$ and $\theta=\arccos\lambda\in(0,\pi)$. By [F7], the $u_+$ endpoint line contributes $+1$ to $U$ and $W$, and the $u_-$ invariant plane contributes $e^{i\theta},e^{-i\theta}$ to $U$ and $e^{2i\theta},e^{-2i\theta}$ to $W$. [F5, F7, F8, step 1.2, algebra]

3.1 Under the hypothesis of step 2.1, put $r=\sqrt{1-a}$ and $s=\sqrt a$. Let $A=\operatorname{im}T$ and $B=\operatorname{im}(ST)$; these are subspaces by [F9]–[F10]. By [F3], their spanning vectors are $T|0\rangle=r|00\rangle+s|01\rangle$, $T|1\rangle=s|10\rangle+r|11\rangle$, $ST|0\rangle=r|00\rangle+s|10\rangle$, and $ST|1\rangle=s|01\rangle+r|11\rangle$. The vector $k=(s|00\rangle-r|01\rangle-r|10\rangle+s|11\rangle)/\sqrt2$ has norm one because $r^2+s^2=1$ and is orthogonal to each spanning vector by cancellation of the two $rs$ terms. Hence [F11] gives $0\ne k\in K:=(A+B)^\perp$; since the product register has dimension four, [F12] implies $\dim(A+B)\le3$. By [F5], $STu_+=Tu_+$ gives a common nonzero vector in $A\cap B$, while $Tu_-$ and $STu_-$ are linearly independent because $-1<\lambda<1$. These two vectors are orthogonal to the common vector: $\langle Tu_+,Tu_-\rangle=\langle STu_+,STu_-\rangle=0$ by isometry of $T$ and unitarity of $S$, and $\langle Tu_+,STu_-\rangle=\langle u_+,Du_-\rangle=0$ by the distinct eigenvalues in step 1.2; the reverse cross-pairing vanishes by conjugate symmetry. Thus $\dim(A+B)\ge3$, so it is exactly $3$ and $K$ is one-dimensional, hence $K=\operatorname{span}\{k\}$. The coefficients of $|01\rangle$ and $|10\rangle$ in $k$ are equal, so [F3] gives $Sk=k$. By [F6], $U=-S=-I$ on $K$. Combining this complement eigenvalue with the line and plane eigenvalues from step 2.1 yields $\sigma_{\mathrm{mult}}(U)=\{1,-1,e^{i\theta},e^{-i\theta}\}$ and $\sigma_{\mathrm{mult}}(W)=\{1,1,e^{2i\theta},e^{-2i\theta}\}$. [F2, F3, F4, F5, F6, F9, F10, F11, F12, step 1.2, step 2.1, algebra] ∎
