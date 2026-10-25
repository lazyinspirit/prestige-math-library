---
id: lem-qa-18-johnson-walk-spectrum
kind: lemma
title: "Spectrum of the lazy Johnson walk"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-18-element-distinctness-johnson-walk
  - def-inner-product-space
  - thm-rank-nullity
  - thm-finite-dimensional-orthogonal-decomposition
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-orthogonal-complement
  - prop-adjoint-algebra
  - def-qa-17-finite-reversible-chain
  - def-qa-17-absolute-spectral-gap
justified_by: []
proof_strategy: direct
axiom_use: "None; all spaces are finite coordinate spaces and the proof uses finite incidence maps."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 20, §20.2"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 8, §8.3.2"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andris Ambainis, Quantum walk algorithm for element distinctness, §§3–4"
      url: "https://arxiv.org/pdf/quant-ph/0311001"
---
## Statement

Let $N\ge4$ and $2\le r\le\lfloor N/2\rfloor$. For the lazy Johnson transition matrix $P$ on the $r$-subsets of $[N]$ from [[def-qa-18-element-distinctness-johnson-walk]], all eigenvalues, counted with multiplicity, are

$$\lambda_j=1-\frac{j(N+1-j)}{2r(N-r)},\qquad 0\le j\le r,$$

with multiplicity $\binom Nj-\binom N{j-1}$, where $\binom N{-1}=0$. They are nonnegative, and for the uniform stationary law the absolute spectral gap, in the sense of [[def-qa-17-absolute-spectral-gap]], is

$$\delta(P)=1-\lambda_1=\frac{N}{2r(N-r)}.$$

## Facts & Assumptions

**Given:** The finite state space $\Omega_r=\{S\subseteq[N]:|S|=r\}$ and the lazy transition probabilities of [[def-qa-18-element-distinctness-johnson-walk]].

[F1] [[def-qa-18-element-distinctness-johnson-walk]]: $P$ stays at a subset with probability $1/2$ and replaces one of its $r$ elements by one of the $N-r$ elements outside with probability $1/(2r(N-r))$ for each replacement.

[F2] [[thm-rank-nullity]]: for a linear map $T$ with finite-dimensional domain, $\dim V=\dim\ker T+\dim\operatorname{im}T$.

[F3] [[thm-finite-dimensional-orthogonal-decomposition]]: for a subspace $W$ of a finite-dimensional inner-product space $V$, $V=W\oplus W^\perp$.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Tv,w\rangle=\langle v,T^*w\rangle$ for every $v,w$.

[F5] [[def-orthogonal-complement]]: $W^\perp=\{v:\langle w,v\rangle=0\text{ for all }w\in W\}$.

[F6] [[prop-adjoint-algebra]]: for compatible finite-dimensional maps, $(ST)^*=T^*S^*$; also $(\lambda T)^*=\overline\lambda T^*$ and $I^*=I$.

[F7] [[def-qa-17-finite-reversible-chain]] and [[def-qa-17-absolute-spectral-gap]]: a positive stationary law and detailed balance make the chain reversible, and its absolute gap is $1-\|P|_{H_0}\|$ on the mean-zero subspace.

## Proof


1.1 For $0\le k\le r$, let $V_k=\mathbb C^{\binom{[N]}k}$ with the standard coordinate inner product, linear in the first argument as in [[def-inner-product-space]]. For $0\le k<r$, define the up map $R_k:V_k\to V_{k+1}$ by $(R_k f)(B)=\sum_{a\in B}f(B\setminus\{a\})$ and the down map $L_{k+1}:V_{k+1}\to V_k$ by $(L_{k+1}g)(A)=\sum_{b\notin A}g(A\cup\{b\})$. Expanding the finite sums with this convention gives $$ \langle R_k f,g\rangle=\sum_A f(A)\,\overline{\sum_{b\notin A}g(A\cup\{b\})}=\langle f,L_{k+1}g\rangle; $$ by [F4], $L_{k+1}=R_k^*$. Put $L_0:V_0\to\{0\}$ equal to zero. For $0\le k<r$ and $f\in V_k$, the diagonal terms in $L_{k+1}R_k f$ occur $N-k$ times, the diagonal terms in $R_{k-1}L_kf$ occur $k$ times, and both have the same off-diagonal replacement terms. Hence $L_{k+1}R_k-R_{k-1}L_k=(N-2k)I_{V_k}$, where the second term is zero for $k=0$. [F1, F4, construct, algebra]

2.1 Taking the inner product of the identity in step 1.1 with $f$ gives $\|R_kf\|^2=\|L_kf\|^2+(N-2k)\|f\|^2$. Since $k<N/2$ for $0\le k<r$, $R_k$ is injective, so [F2] gives $\dim\operatorname{ran}R_k=\dim V_k$. By [F4] and [F5], $\ker L_{k+1}=\ker R_k^*=(\operatorname{ran}R_k)^\perp$. Apply [F3] to $W=\operatorname{ran}R_k$; the projection onto $W$ along $W^\perp$ is linear, with image $W$ and kernel $\ker L_{k+1}$, so [F2] gives $\dim V_{k+1}=\dim\operatorname{ran}R_k+\dim\ker L_{k+1}$. Applying [F2] to $L_{k+1}$ then yields $\dim\operatorname{ran}L_{k+1}=\dim V_k$, so $L_{k+1}:V_{k+1}\to V_k$ is onto. Put $H_0=V_0$ and $H_j=\ker L_j$ for $1\le j\le r$; [F2] gives $\dim H_j=\binom Nj-\binom N{j-1}$. [F2, F3, F4, F5, step 1.1, algebra]

3.1 If $h\in H_j$, repeated use of step 1.1 gives, for $t\ge1$ with $j+t\le r$, $L_{j+t}R_{j+t-1}\cdots R_jh=t(N-2j-t+1)R_{j+t-2}\cdots R_jh.$ For $t=1$ this is the commutator identity and $L_jh=0$. Empty products of raising maps mean the identity. If it holds at $t$ and $j+t<r$, apply the commutator at level $j+t$; the coefficient becomes $t(N-2j-t+1)+(N-2j-2t)=(t+1)(N-2j-t)$, proving the formula for $t+1$. [step 1.1, step 2.1, induction, algebra]

4.1 On $V_r$, the Johnson adjacency operator is $A=R_{r-1}L_r-rI$: the $r$ diagonal choices in $R_{r-1}L_r$ return the same subset, and every other term replaces exactly one element. Since $L_r=R_{r-1}^*$ by step 1.1, [F6] gives $A^*=A$. For $j<r$, applying step 3.1 with $t=r-j$ shows that $R_{r-1}\cdots R_jH_j$ is an eigenspace of $A$ with eigenvalue $(r-j)(N-r-j+1)-r$. For $j=r$, the empty raising product is the identity on $H_r$, and $L_rH_r=0$ gives $A|_{H_r}=-rI$ directly, the same formula. The raising maps are injective by step 2.1, so this eigenspace has dimension $\dim H_j$. These eigenvalues are distinct because consecutive values differ by $N-2j>0$ for $j<r\le N/2$. For $v,w$ in eigenspaces with distinct eigenvalues $\alpha,\beta$, self-adjointness gives $(\alpha-\beta)\langle v,w\rangle=\langle Av,w\rangle-\langle v,Aw\rangle=0$; hence the eigenspaces are mutually orthogonal. Their dimensions sum telescopically to $\binom Nr=\dim V_r$, so their direct sum is all of $V_r$. [F1, F6, step 1.1, step 2.1, step 3.1, algebra]

5.1 The nonlazy transition is $A/[r(N-r)]$ by [F1], and the lazy transition is its average with the identity. Therefore its eigenvalue on the $j$th eigenspace is $\frac12\left(1+\frac{(r-j)(N-r-j+1)-r}{r(N-r)}\right)=1-\frac{j(N+1-j)}{2r(N-r)}.$ The transitions are symmetric and row-stochastic, so the uniform positive law is stationary and satisfies detailed balance; [F7] makes this a finite reversible chain and defines its absolute gap on the mean-zero subspace. The $j=0$ eigenspace has multiplicity one and is spanned by the constant vector. The other eigenspaces are orthogonal to it by self-adjointness, and their eigenvalues are nonnegative and decreasing in $j$, since $j(N+1-j)$ increases for $0\le j\le r\le N/2$. If $v=\sum_{j=1}^r v_j$ is the orthogonal decomposition into these eigenspaces, then $\|Pv\|^2=\sum_{j=1}^r\lambda_j^2\|v_j\|^2\le\lambda_1^2\|v\|^2$, with equality on a nonzero vector in the $j=1$ eigenspace. Hence the norm of $P$ on the mean-zero subspace is $\lambda_1$. The smallest eigenvalue is $\lambda_r=(N-r-1)/(2(N-r))\ge0$, since $N-r\ge2$. Therefore the absolute gap is $1-\lambda_1=N/[2r(N-r)]$, as stated. [F1, F7, step 4.1, algebra] ∎

