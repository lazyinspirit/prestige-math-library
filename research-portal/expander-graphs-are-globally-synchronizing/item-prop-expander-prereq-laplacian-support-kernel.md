---
title: Support connectivity and the unnormalized Laplacian kernel
status: published
research_item: prop-expander-prereq-laplacian-support-kernel
dependency_level: 1
---

## Prerequisites

- [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:lem-weighted-graph-laplacian-quadratic-form-and-kernel](https://alphabetamath.cc/item/lem-weighted-graph-laplacian-quadratic-form-and-kernel)
- [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)
- [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)
- [math:def-eigenvalue-eigenvector-eigenspace-and-spectrum](https://alphabetamath.cc/item/def-eigenvalue-eigenvector-eigenspace-and-spectrum)
- [math:def-self-adjoint-and-normal-endomorphism](https://alphabetamath.cc/item/def-self-adjoint-and-normal-endomorphism)


## Statement

Let $(V,A)$ be a network: $V$ is nonempty and finite, $n=|V|$, and $A$ is real, symmetric and entrywise nonnegative. Put $d(x)=\sum_y A_{xy}$, $D=\operatorname{diag}(d(x))$ and $L=D-A$. The loop-free support graph has an edge $\{x,y\}$ exactly when $x\ne y$ and $A_{xy}>0$. For every $f\in\mathbb C^V$,

$$f^*Lf=\frac12\sum_{x,y\in V}A_{xy}|f(x)-f(y)|^2.$$

The kernel of $L$ consists exactly of functions constant on each connected component of the support graph. In particular, for $n\ge2$ the support graph is connected if and only if zero is a simple eigenvalue of $L$, meaning that it occurs once in an eigenvalue list counted with multiplicity. If some $\eta>0$ satisfies $f^*Lf\ge\eta\|f\|_2^2$ for every $f\in\mathbf1^\perp$, then the support graph is connected. Connectivity alone does not imply such a bound for an arbitrarily prescribed positive $\eta$.

Here $\mathbf1$ is the constant-one function and $\mathbf1^\perp=\{f:\sum_x f(x)=0\}$, with the vertex inner product and norm.

## Statement references

[def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)

[def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[math:def-eigenvalue-eigenvector-eigenspace-and-spectrum](https://alphabetamath.cc/item/def-eigenvalue-eigenvector-eigenspace-and-spectrum)

## Facts & Assumptions

[F1] The network definition gives $W=A-\operatorname{diag}(A_{xx})$, a symmetric nonnegative zero-diagonal matrix with the same support graph, and $L=\operatorname{diag}(\sum_y W_{xy})-W$. [def-expander-prereq-loop-compatible-networks](item-def-expander-prereq-loop-compatible-networks)

[F2] For a symmetric nonnegative zero-diagonal weight matrix on a nonempty finite vertex set, its weighted Laplacian has real quadratic form $u^TLu=\frac12\sum_{x,y}W_{xy}(u(x)-u(y))^2$; its real kernel consists of functions constant on each support component. [math:lem-weighted-graph-laplacian-quadratic-form-and-kernel](https://alphabetamath.cc/item/lem-weighted-graph-laplacian-quadratic-form-and-kernel)

[F3] Components consist of vertices joined by paths, and a nonempty graph is connected exactly when all its vertices lie in one component. [math:def-connected-graph-and-connected-component](https://alphabetamath.cc/item/def-connected-graph-and-connected-component)

[F4] The vertex space has inner product $\langle f,g\rangle=\sum_x\overline{f(x)}g(x)$, norm $\|f\|_2^2=\langle f,f\rangle$, and matrix action by finite sums; real symmetric matrices are self-adjoint. [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)

[F5] An endomorphism $T$ is normal when $TT^*=T^*T$; a self-adjoint endomorphism is normal since $TT^*=T^2=T^*T$. [math:def-self-adjoint-and-normal-endomorphism](https://alphabetamath.cc/item/def-self-adjoint-and-normal-endomorphism) A normal endomorphism of a finite-dimensional complex inner product space has an orthonormal eigenbasis. [math:thm-complex-spectral-theorem-for-normal-endomorphisms](https://alphabetamath.cc/item/thm-complex-spectral-theorem-for-normal-endomorphisms)

[F6] An eigenvector of an endomorphism $T$ is a nonzero vector $v$ with $Tv=\lambda v$ for some scalar $\lambda$, its eigenvalue; the corresponding eigenspace is $\ker(T-\lambda I)$. [math:def-eigenvalue-eigenvector-eigenspace-and-spectrum](https://alphabetamath.cc/item/def-eigenvalue-eigenvector-eigenspace-and-spectrum)

## Proof

**Given:** A network $(V,A)$ with the stated matrices and support graph.

**Goal:** Establish the quadratic identity, kernel characterization, connectivity equivalence and the stated limits on a numerical lower bound.

1.1 Write $f=u+iv$ with real functions $u,v$. By [F1], $L$ is real symmetric and is the weighted Laplacian of $W$. Expanding with [F4], the imaginary cross terms cancel, so $f^*Lf=u^TLu+v^TLv$. Applying [F2] to $u$ and $v$ gives $f^*Lf=\frac12\sum_{x,y}W_{xy}(|u(x)-u(y)|^2+|v(x)-v(y)|^2)$. The diagonal terms vanish and $W_{xy}=A_{xy}$ off the diagonal, proving the displayed identity. [given, F1, F2, F4, algebra]

2.1 Since $L$ is real, $Lf=0$ exactly when $Lu=Lv=0$. By [F2], this holds exactly when both $u$ and $v$ are constant on each component, equivalently when $f$ is. The component indicators form a basis of this kernel: they span all componentwise constant functions and are independent by evaluation at a vertex in each component. In particular $\mathbf1\in\ker L$, and the kernel dimension equals the number of components. [F2, F3, step 1.1, algebra]

3.1 By [F4], $L$ is self-adjoint; the normality identity in [F5] therefore holds, and its spectral theorem supplies an orthonormal eigenbasis. By [F6], in that basis its matrix is diagonal with the eigenvalues on the diagonal; the number of zero entries, equivalently the multiplicity of zero in the eigenvalue list, is $\dim\ker L$. Thus [F3] and step 2.1 show that the nonempty support graph is connected exactly when zero is simple. This applies in particular for $n\ge2$. [F3, F4, F5, F6, step 2.1, algebra]

3.2 If the graph is disconnected, choose a nonempty proper component $C$ and put $f=\mathbf1_C-(|C|/n)\mathbf1$. This function is componentwise constant, is nonzero, and has coordinate sum zero. By step 2.1 it belongs to $\ker L\cap\mathbf1^\perp$, so a lower bound with $\eta>0$ would give $0\ge\eta\|f\|_2^2>0$, a contradiction. Hence the stated lower bound implies connectivity. [F3, F4, step 2.1, algebra, construct]

4.1 For the converse limitation, take two vertices, zero diagonal and $A_{12}=A_{21}=1/4$. The support graph is connected. For $f=(1,-1)\in\mathbf1^\perp$, step 1.1 gives $f^*Lf=1$ while $\|f\|_2^2=2$, so the bound fails for the prescribed value $\eta=1$. This completes all assertions. [F3, F4, step 1.1, algebra] ∎
