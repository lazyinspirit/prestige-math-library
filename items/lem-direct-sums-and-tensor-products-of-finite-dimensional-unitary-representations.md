---
id: lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations
kind: lemma
title: Direct sums and tensor products of finite-dimensional unitary representations
deps:
- def-tensor-product-of-complex-representations
- def-matrix-coefficient-of-a-unitary-representation
- def-strongly-continuous-unitary-representation
- cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
- thm-universal-property-of-module-tensor-products
- lem-complex-conjugation-and-modulus-laws
- def-linear-isometry-and-orthogonal-or-unitary-operator
- def-dimension
- cor-inner-product-induces-a-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (author-hosted draft, 338 pp.)
    url: https://people.math.ethz.ch/~kowalski/representation-theory.pdf
    locator: Ch. 5 §5.4, printed p. 230 (formal matrix-coefficient argument)
  - title: David A. Vogan, Review of Harmonic Analysis on Compact Groups (MIT lecture notes, 12 pp.)
    url: https://math.mit.edu/~dav/compactrev.pdf
    locator: §2.9, printed p. 7 (matrix coefficients and tensor bookkeeping)
  - title: Constantin Teleman, Representation Theory (Berkeley lecture notes, 60 pp.)
    url: https://math.berkeley.edu/~teleman/math/RepThry.pdf
    locator: §22.6, printed p. 53 (tensor products of representations and their characters)
status: draft
origin: pipeline
---
## Statement

Let $K$ be a topological group and let $\pi_1,\pi_2$ be finite-dimensional continuous unitary representations of $K$ on complex Hilbert spaces $V_1,V_2$, of dimensions $d_1,d_2$.

1. The **direct sum** $\pi_1\oplus\pi_2$ on $V_1\oplus V_2$ is a continuous unitary representation of dimension $d_1+d_2$, and $c^{\pi_1\oplus\pi_2}_{(v_1,v_2),(w_1,w_2)}=c^{\pi_1}_{v_1,w_1}+c^{\pi_2}_{v_2,w_2}$ for all vectors.
2. The **tensor product** $\pi_1\otimes\pi_2$ on the algebraic tensor product $V_1\otimes_{\mathbb C}V_2$ with the action of [[def-tensor-product-of-complex-representations]] carries a unique inner product with $\langle v_1\otimes v_2,w_1\otimes w_2\rangle=\langle v_1,w_1\rangle_{V_1}\langle v_2,w_2\rangle_{V_2}$ on elementary tensors ([[thm-universal-property-of-module-tensor-products]]), making it a finite-dimensional Hilbert space of dimension $d_1d_2$ on which $\pi_1\otimes\pi_2$ is a continuous unitary representation, and $c^{\pi_1\otimes\pi_2}_{v_1\otimes v_2,w_1\otimes w_2}=c^{\pi_1}_{v_1,w_1}\,c^{\pi_2}_{v_2,w_2}$.
3. The trivial one-dimensional representation $1_K$ is a continuous unitary representation with constant matrix coefficient $1$; and for every finite-dimensional continuous unitary $\pi$ on $V$ with an orthonormal basis $e_1,\dots,e_d$, the linear operators defined in this basis by $\langle\sigma(k)e_i,e_j\rangle=\overline{\langle\pi(k)e_i,e_j\rangle}$ form a continuous finite-dimensional unitary representation $\sigma$ of $K$, and $\overline{c^{\pi}_{v,w}}=c^{\sigma}_{Jv,Jw}$ for all $v,w\in V$, where $J(\sum_ia_ie_i)=\sum_i\overline{a_i}e_i$. In particular the complex conjugate of a matrix coefficient of a finite-dimensional continuous unitary representation is again such a coefficient, so the operations above make the representative functions an algebra closed under conjugation.

## Facts & Assumptions

[F1] Matrix coefficients are $c^{\pi}_{v,w}(k)=\langle\pi(k)v,w\rangle$, linear in $v$ and conjugate-linear in $w$, and a strongly continuous unitary representation is a homomorphism $k\mapsto\pi(k)$ into the bijective linear isometries of the Hilbert space whose orbit maps $k\mapsto\pi(k)v$ are norm-continuous. ([[def-matrix-coefficient-of-a-unitary-representation]], [[def-strongly-continuous-unitary-representation]])

[F2] Every finite-dimensional complex inner product space has an orthonormal basis, and every vector is the sum $v=\sum_i\langle v,e_i\rangle e_i$ over such a basis. ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]])

[F3] The length $\|u\|=\sqrt{\langle u,u\rangle}$ induced by an inner product satisfies $\|u+v\|\le\|u\|+\|v\|$ and $\|\lambda u\|=|\lambda|\,\|u\|$. ([[cor-inner-product-induces-a-norm]])

[F4] The tensor product representation acts by $k\cdot(v\otimes w)=(\pi_1(k)v)\otimes(\pi_2(k)w)$ on elementary tensors, and this action is well defined by the universal property of the tensor product. ([[def-tensor-product-of-complex-representations]], [[thm-universal-property-of-module-tensor-products]])

[F5] A finite-dimensional vector space has a basis of $\dim V$ vectors, and the dimension is the unique size of a finite basis. ([[def-dimension]])

[F6] Complex conjugation satisfies $\overline{zw}=\overline z\,\overline w$ and $\overline{z+w}=\overline z+\overline w$, and $|z|^2=z\overline z$. ([[lem-complex-conjugation-and-modulus-laws]])

[F7] A bijective linear isometry from a finite-dimensional complex inner product space to itself is a unitary operator. ([[def-linear-isometry-and-orthogonal-or-unitary-operator]])

## Proof

**Given:** A topological group $K$, finite-dimensional continuous unitary representations $\pi_1,\pi_2$ of $K$ on $V_1,V_2$ with $\dim V_i=d_i$, and the direct sum and tensor product constructions.

1.1 On $V_1\oplus V_2$ with the inner product $\langle(v_1,v_2),(w_1,w_2)\rangle=\langle v_1,w_1\rangle+\langle v_2,w_2\rangle$ define $(\pi_1\oplus\pi_2)(k)(v_1,v_2)=(\pi_1(k)v_1,\pi_2(k)v_2)$; the group law holds componentwise, and $\|(\pi_1\oplus\pi_2)(k)(v_1,v_2)\|^2=\|\pi_1(k)v_1\|^2+\|\pi_2(k)v_2\|^2=\|(v_1,v_2)\|^2$ shows that each operator is an isometry, bijective with inverse $(\pi_1\oplus\pi_2)(k^{-1})$, hence unitary by [F7], while strong continuity follows from $\|(\pi_1\oplus\pi_2)(k)(v_1,v_2)-(\pi_1\oplus\pi_2)(k_0)(v_1,v_2)\|^2=\|\pi_1(k)v_1-\pi_1(k_0)v_1\|^2+\|\pi_2(k)v_2-\pi_2(k_0)v_2\|^2\to0$. The disjoint union of bases of $V_1$ and $V_2$ is a basis of $V_1\oplus V_2$, so the dimension is $d_1+d_2$ by [F5], and expanding the inner product gives $c^{\pi_1\oplus\pi_2}_{(v_1,v_2),(w_1,w_2)}(k)=\langle\pi_1(k)v_1,w_1\rangle+\langle\pi_2(k)v_2,w_2\rangle=c^{\pi_1}_{v_1,w_1}(k)+c^{\pi_2}_{v_2,w_2}(k)$ for all vectors and all $k$, which is (1). [F1, F5, F7]

1.2 Fix orthonormal bases $(e_i)_{i\le d_1}$ of $V_1$ and $(f_j)_{j\le d_2}$ of $V_2$ [F2]; the elementary tensors $e_i\otimes f_j$ span $V_1\otimes V_2$ because $v\otimes w=\sum_{i,j}\langle v,e_i\rangle\langle w,f_j\rangle\,e_i\otimes f_j$ by the expansion of $v$ and $w$, and they are linearly independent because a relation $\sum_{i,j}\lambda_{ij}e_i\otimes f_j=0$ returns $\lambda_{i_0j_0}=0$ when one applies the linear functional induced by the bilinear form $(v,w)\mapsto\langle v,e_{i_0}\rangle\langle w,f_{j_0}\rangle$ through [F4]; hence they form a basis and $\dim(V_1\otimes V_2)=d_1d_2$ by [F5]. Declaring this basis orthonormal makes $V_1\otimes V_2$ a finite-dimensional complex Hilbert space, and the same expansions give $\langle v\otimes w,v'\otimes w'\rangle=\sum_{i,j}\langle v,e_i\rangle\langle w,f_j\rangle\overline{\langle v',e_i\rangle\langle w',f_j\rangle}=\langle v,v'\rangle\langle w,w'\rangle$ for all elementary tensors, so such an inner product exists and is unique with this property because the elementary tensors span. [F2, F4, F5]

2.1 Because $\pi_1(k)$ and $\pi_2(k)$ are unitary, the elementary-tensor formula of step 1.2 and the action [F4] give $\langle(\pi_1\otimes\pi_2)(k)(v\otimes w),(\pi_1\otimes\pi_2)(k)(v'\otimes w')\rangle=\langle\pi_1(k)v,\pi_1(k)v'\rangle\langle\pi_2(k)w,\pi_2(k)w'\rangle=\langle v,v'\rangle\langle w,w'\rangle=\langle v\otimes w,v'\otimes w'\rangle$ for all elementary tensors; both sides are sesquilinear and the elementary tensors span, so the identity holds on all of $V_1\otimes V_2$, each $(\pi_1\otimes\pi_2)(k)$ is a bijective linear isometry, hence unitary by [F7], and $c^{\pi_1\otimes\pi_2}_{v\otimes w,v'\otimes w'}(k)=c^{\pi_1}_{v,v'}(k)c^{\pi_2}_{w,w'}(k)$ on elementary tensors. For finite expansions $u=\sum_a\alpha_a v_a\otimes w_a$ and $u\prime=\sum_b\beta_b v_b\prime\otimes w_b\prime$, sesquilinearity instead gives $c^{\pi_1\otimes\pi_2}_{u,u\prime}(k)=\sum_{a,b}\alpha_a\overline{\beta_b}\,c^{\pi_1}_{v_a,v_b\prime}(k)c^{\pi_2}_{w_a,w_b\prime}(k)$, a finite sum of products. For strong continuity write $u=\sum_a c_a\,v_a\otimes w_a$ as a finite sum; then [F3] gives $\|(\pi_1\otimes\pi_2)(k)u-(\pi_1\otimes\pi_2)(k_0)u\|\le\sum_a|c_a|\bigl(\|\pi_1(k)v_a\|\,\|\pi_2(k)w_a-\pi_2(k_0)w_a\|+\|\pi_1(k)v_a-\pi_1(k_0)v_a\|\,\|\pi_2(k_0)w_a\|\bigr)\to0$ as $k\to k_0$, using $\|x\otimes y\|=\|x\|\,\|y\|$ from step 1.2 and the strong continuity of $\pi_1$ and $\pi_2$; hence $\pi_1\otimes\pi_2$ is strongly continuous, which completes (2). [F1, F3, F4, F7, step 1.2]

3.1 The trivial representation $1_K(k)z=z$ on $\mathbb C$ is a continuous unitary representation whose matrix coefficient at the unit vector $1$ is the constant function $1$. Now let $\pi$ be finite-dimensional continuous unitary on $V$ with orthonormal basis $e_1,\dots,e_d$, and let $\sigma(k)$ be the linear operator whose matrix in this basis is the entrywise conjugate of that of $\pi(k)$, that is $\langle\sigma(k)e_i,e_j\rangle=\overline{\langle\pi(k)e_i,e_j\rangle}$ for all $i,j$; then $\sigma(k)=J\pi(k)J$, where $J(\sum_i a_i e_i)=\sum_i\overline{a_i}e_i$ and $J^2=I$, so $\sigma(kh)=J\pi(k)\pi(h)J=(J\pi(k)J)(J\pi(h)J)=\sigma(k)\sigma(h)$, so $\sigma$ is a homomorphism, and $\sigma(k)$ is unitary because its matrix is the conjugate of the unitary matrix of $\pi(k)$; each matrix entry $k\mapsto\langle\sigma(k)e_i,e_j\rangle$ is continuous as the conjugate of a continuous function, so $\sigma$ is strongly continuous, since $\|(\sigma(k)-\sigma(k_0))x\|\le\sum_i|x_i|\,\|(\sigma(k)-\sigma(k_0))e_i\|\to0$ for $x=\sum_ix_ie_i$ by [F3]; expanding coefficients in the basis gives $\overline{c^{\pi}_{v,w}(k)}=\sum_{i,j}\overline{\langle v,e_i\rangle\overline{\langle w,e_j\rangle}\langle\pi(k)e_i,e_j\rangle}=\sum_{i,j}\overline{\langle v,e_i\rangle}\langle w,e_j\rangle\overline{\langle\pi(k)e_i,e_j\rangle}=\langle\sigma(k)Jv,Jw\rangle=c^{\sigma}_{Jv,Jw}(k)$ for all $v,w\in V$ and all $k$; this proves (3). [F1, F2, F3, F6, F7] ∎
