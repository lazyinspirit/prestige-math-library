---
id: ex-vector-and-tracial-states-on-matrix-algebras
kind: example
title: Vector and normalized-trace states on matrix algebras
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - lem-matrix-algebra-is-a-c-star-algebra
  - def-state-on-a-c-star-algebra
  - def-real-and-complex-inner-product-space
  - def-space-of-bounded-linear-operators
  - def-operator-norm
  - def-hilbert-space
  - cor-finite-dimensional-normed-spaces-are-banach
  - thm-cauchy-schwarz-in-an-inner-product-space
  - cor-inner-product-induces-a-norm
dependency_level: 1
axiom_use: "No choice principle is used; both quotient models are explicit finite-dimensional spaces and all basis vectors and matrix units are specified."
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Ilijas Farah, Combinatorial Set Theory of C*-algebras (2019), complete author-hosted book"
      url: "https://ifarah.mathstats.yorku.ca/files/2022/07/2019_Book_CombinatorialSetTheoryOfC-alge.pdf"
      locator: "Proposition 1.10.3, printed p. 35: the unital state quotient inner product, left multiplication representation, and cyclic vector."
    - title: "Ian F. Putnam, Lecture Notes on C*-algebras (2019), complete author-hosted lecture notes"
      url: "https://ncatlab.org/nlab/files/Putnam-CStarAlgebras.pdf"
      locator: "Section 1.12, Theorem 1.12.4, printed pp. 54-55: the unital state quotient, completion, bounded left action, and unit cyclic vector."
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition, complete author-hosted book"
      url: "https://linear.axler.net/LADR4e.pdf"
      locator: "Section 7F, printed pp. 280-282 / PDF pp. 293-295: finite-dimensional operator norms and the norm of an adjoint."
---
## Statement

Let $n\ge1$, $A=M_n(\mathbb C)$ with its matrix C*-algebra structure, and
$e_1,\ldots,e_n$ the standard basis of $\mathbb C^n$. For a state $\rho$ on
the unital algebra $A$, its **quotient GNS model** here is the following
construction when the displayed formulas are well-defined: set
$$N_\rho=\{a\in A:\rho(a^*a)=0\},$$
give $A/N_\rho$ the inner product
$$\langle[a],[b]\rangle_\rho=\rho(b^*a),$$
complete it, let $\pi_\rho(c)[b]=[cb]$, and take $\xi_\rho=[I_n]$.

For $a=(a_{ij})$, define $\operatorname{Tr}(a)=\sum_{j=1}^n a_{jj}$. Write
$\|b\|_\tau=\sqrt{\langle b,b\rangle_\tau}$ for the norm induced by the
normalized-trace pairing below. In this item a **representation** is a bounded
linear map $\pi:A\to\mathcal B(H)$ preserving products and involution; the
models below are unital.

For each $j$, $\omega_j(a)=\langle ae_j,e_j\rangle$ is a state and its
quotient GNS model is unitarily equivalent to the defining representation of
$M_n(\mathbb C)$ on $\mathbb C^n$. The normalized trace
$$\tau(a)=\frac{1}{n}\operatorname{Tr}(a)$$
has quotient GNS model $M_n(\mathbb C)$ with inner product
$$\langle b,c\rangle_\tau=\frac{1}{n}\operatorname{Tr}(c^*b)$$
and left multiplication. If $n\ge2$, $\tau$ is not an extreme state and its
GNS representation is reducible. When $n=1$, $\tau=\omega_1$ and the
one-dimensional representation is irreducible.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the C*-algebra $A=M_n(\mathbb C)$, its standard basis vectors $e_1,\ldots,e_n$, and the inner product linear in its first variable.

[F1] [[lem-matrix-algebra-is-a-c-star-algebra]]: $M_n(\mathbb C)$ with conjugate transpose and the operator norm on $\mathbb C^n$ is a unital complex C*-algebra for every $n\ge1$.

[F2] [[def-state-on-a-c-star-algebra]]: a state is a bounded positive linear functional of norm one, where positivity means $\rho(a^*a)\ge0$ for every $a$.

[F3] [[def-real-and-complex-inner-product-space]]: complex inner products here are linear in the first variable, conjugate-linear in the second, and have induced norm $\|x\|=\sqrt{\langle x,x\rangle}$.

[F4] [[def-space-of-bounded-linear-operators]]: $\mathcal B(H)$ is the space of bounded linear maps $H\to H$.

[F5] [[def-operator-norm]]: the operator norm is the supremum of $\|Tx\|$ over $\|x\|\le1$; rescaling gives $\|Tx\|\le\|T\|\,\|x\|$.

[F6] [[def-hilbert-space]]: a complex Hilbert space is a complete complex inner-product space for its induced norm.

[F7] [[cor-finite-dimensional-normed-spaces-are-banach]]: a complex normed vector space with a finite basis is complete.

[F8] [[thm-cauchy-schwarz-in-an-inner-product-space]]: $|\langle x,y\rangle|\le\|x\|\,\|y\|$.

[F9] [[cor-inner-product-induces-a-norm]]: the length induced by any real or complex inner product satisfies absolute homogeneity and the triangle inequality, and is a norm.

An **extreme state** is a state that is not a convex combination $t\alpha+(1-t)\beta$ of distinct states with $0<t<1$. A representation is **reducible** if it has a nonzero proper closed invariant subspace. A vector is **cyclic** if its representation orbit has dense linear span.

[L1] In these finite-dimensional Hilbert-space models, an adjoint of a bounded map $T$ means a bounded map $S$ satisfying $\langle Tx,y\rangle=\langle x,Sy\rangle$ for all $x,y$. Such an $S$ is unique: if $S_1,S_2$ both satisfy the identity, then $\langle x,(S_1-S_2)y\rangle=0$ for every $x$, and taking $x=(S_1-S_2)y$ gives $(S_1-S_2)y=0$. On $\mathbb C^n$, coordinate expansion shows that the adjoint of the matrix $a$ is its conjugate transpose $a^*$.

## Verification

**Given:** The data above. For each state $\rho$ considered, form $N_\rho$, $A/N_\rho$, and the quotient inner product displayed in the Statement.

1.1 For each $j$, $\omega_j(a)=\langle ae_j,e_j\rangle$ is linear and satisfies $|\omega_j(a)|\le\|ae_j\|_2\le\|a\|$, by [F5] and [F8]. The $j$th diagonal entry of $a^*a$ is $\sum_i|a_{ij}|^2=\|ae_j\|_2^2$, so $\omega_j(a^*a)=\|ae_j\|_2^2\ge0$; also $\omega_j(I_n)=1$. Thus $\|\omega_j\|\le1$ and $\|\omega_j\|\ge|\omega_j(I_n)|=1$, so each $\omega_j$ is a state by [F2]. [F1, F2, F3, F5, F8, given]

1.2 The functional $\tau(a)=n^{-1}\operatorname{Tr}(a)$ satisfies $\tau(a^*a)=n^{-1}\sum_{i,j}|a_{ij}|^2\ge0$ and $\tau(I_n)=1$. Moreover, $|\tau(a)|=n^{-1}|\sum_j\langle ae_j,e_j\rangle|\le n^{-1}\sum_j\|ae_j\|_2\le\|a\|$ by [F5] and [F8]. Hence $\|\tau\|=1$, so $\tau$ is a state by [F2]. [F1, F2, F3, F5, F8, given]

2.1 For each $j$, $N_{\omega_j}=\{a:ae_j=0\}$ by step 1.1, and $U_j([a])=ae_j$ is well-defined and injective on $A/N_{\omega_j}$. For matrices $a,b$, $\omega_j(b^*a)=(b^*a)_{jj}=\sum_i a_{ij}\overline{b_{ij}}=\langle ae_j,be_j\rangle$, so the quotient pairing is well-defined and $U_j$ is an isometry. It is onto because an arbitrary vector $v\in\mathbb C^n$ is the $j$th column of a matrix $a$, giving $ae_j=v$; the classes $[E_{ij}]$ for $1\le i\le n$ map to the standard basis, so the quotient has a finite basis. The norm is the inner-product norm and satisfies the norm axioms by [F9]; [F7] makes this finite-dimensional space complete, hence each quotient is already the Hilbert space $\mathbb C^n$ by [F6]. [F1, F3, F6, F7, F9, step 1.1, given]

2.2 The null space $N_\tau$ is $\{0\}$, since $\tau(a^*a)=0$ forces every matrix entry of $a$ to vanish. The quotient pairing is the positive-definite form $\langle b,c\rangle_\tau=n^{-1}\operatorname{Tr}(c^*b)=n^{-1}\sum_{i,j}b_{ij}\overline{c_{ij}}$. Its induced length is a norm by [F9], and the matrix units form a finite basis, so [F7] makes it complete; it is a Hilbert space by [F6]. Left multiplication is bounded: $\|\pi_\tau(a)b\|_\tau^2=n^{-1}\sum_j\|abe_j\|_2^2\le\|a\|^2n^{-1}\sum_j\|be_j\|_2^2=\|a\|^2\|b\|_\tau^2$ by [F5]. Bilinearity of matrix multiplication gives $\pi_\tau(a+c)=\pi_\tau(a)+\pi_\tau(c)$ and $\pi_\tau(za)=z\pi_\tau(a)$, associativity gives $\pi_\tau(a)\pi_\tau(c)=\pi_\tau(ac)$, and $\pi_\tau(I_n)b=[I_nb]=[b]$ makes the representation unital. Also $\langle ab,c\rangle_\tau=\tau(c^*ab)=\tau((a^*c)^*b)=\langle b,a^*c\rangle_\tau$. Therefore $\pi_\tau(a^*)$ satisfies the adjoint identity for $\pi_\tau(a)$ and equals its adjoint by [L1]. The vector $I_n$ is unit and cyclic because $\pi_\tau(a)I_n=a$, and its coefficient is $\langle aI_n,I_n\rangle_\tau=\tau(a)$. This verifies the trace quotient GNS model. [F1, F3, F4, F5, F6, F7, F9, L1, step 1.2, algebra]

3.1 If $b\in N_{\omega_j}$ then $(cb)e_j=c(be_j)=0$, so $\pi_{\omega_j}(c)[b]=[cb]$ is well-defined. For $a,c\in A$, $z\in\mathbb C$, and every $[b]$, $\pi_{\omega_j}(a+c)[b]=[(a+c)b]=[ab]+[cb]$ and $\pi_{\omega_j}(za)[b]=[(za)b]=z[ab]$; associativity also gives $\pi_{\omega_j}(a)\pi_{\omega_j}(c)[b]=[acb]=\pi_{\omega_j}(ac)[b]$, and $\pi_{\omega_j}(I_n)[b]=[I_nb]=[b]$ makes the representation unital. Under $U_j$ it is exactly the matrix $a$, so it is bounded and its adjoint is the action of $a^*$ by [L1]. The vector $[I_n]$ is unit and cyclic because $\pi_{\omega_j}(a)[I_n]=[a]$ for every $a\in A$; moreover, its coefficient is $\langle\pi_{\omega_j}(a)[I_n],[I_n]\rangle_{\omega_j}=\langle ae_j,e_j\rangle=\omega_j(a)$. Thus $U_j$ identifies this quotient GNS model with the defining representation for every $j$. [F1, F3, F4, L1, step 2.1, algebra]

3.2 For $n\ge2$, let $W$ be the subspace of matrices whose columns after the first are zero. It contains $E_{11}$ and omits $E_{12}$, so it is nonzero and proper. It is closed because it is the intersection of the kernels of the finitely many entry functionals $b\mapsto b_{ij}$ for $j>1$; each functional is bounded for the normalized Hilbert-Schmidt norm because step 2.2 gives $\|b\|_\tau^2=n^{-1}\sum_{k,l}|b_{kl}|^2$, so $|b_{ij}|^2\le\sum_{k,l}|b_{kl}|^2=n\|b\|_\tau^2$ and hence $|b_{ij}|\le\sqrt n\,\|b\|_\tau$. For $a\in M_n(\mathbb C)$ and $b\in W$, every column of $ab$ after the first is still zero, so left multiplication preserves $W$. Thus the trace GNS representation is reducible for $n\ge2$. [F1, step 2.2, given, algebra]

4.1 If $n=1$, then $\tau=\omega_1$ by their formulas, and steps 2.1 and 3.1 identify its GNS space with $\mathbb C$; the only subspaces of a one-dimensional space are $\{0\}$ and the whole space, so the representation is irreducible. If $n\ge2$, define $\psi=(n-1)^{-1}\sum_{j=2}^n\omega_j$. Step 1.1 gives $\psi(a^*a)\ge0$ and $|\psi(a)|\le(n-1)^{-1}\sum_{j=2}^n|\omega_j(a)|\le\|a\|$, while $\psi(I_n)=1$; hence $\psi$ is a state by [F2]. Since $\operatorname{Tr}(a)=\sum_j\omega_j(a)$, $\tau=n^{-1}\omega_1+((n-1)/n)\psi$. For $p=E_{11}$, $\omega_1(p)=1$ and $\psi(p)=0$, so the two states are distinct and this is a nontrivial convex decomposition. Therefore $\tau$ is not an extreme state for $n\ge2$. [F2, F5, step 1.1, step 2.1, step 2.2, step 3.1, algebra]

5.1 Steps 2.1 and 3.1 verify the quotient GNS model and defining representation for every vector state, while steps 1.2 and 2.2 verify the normalized-trace state and its left-multiplication quotient model. Steps 3.2 and 4.1 give the $n=1$ and $n\ge2$ boundaries for the trace state. These are the claims in the Statement. [step 1.2, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1] ∎

## Remarks

The quotient inner products are linear in the first variable. The general C*-state GNS route and the distinct topological-group positive-type route are summarized on the A page.
