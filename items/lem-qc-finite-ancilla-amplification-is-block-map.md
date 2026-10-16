---
id: lem-qc-finite-ancilla-amplification-is-block-map
kind: lemma
title: "Finite ancilla amplification is a well-defined block map"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-register-and-computational-basis, def-qc-tensor-register-and-permutation, lem-qc-tensor-product-basis-and-dimension, thm-gram-schmidt-orthonormalisation, def-dimension, def-real-and-complex-inner-product-space, def-linear-map, def-vector-space-of-linear-maps, prop-linear-maps-form-a-vector-space, cor-finite-iterated-tensor-products-represent-multilinear-maps]
justified_by: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.2.6"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

Let $H,K$ be finite-dimensional complex-inner-product spaces, let $r\ge1$, and let $R=\mathbb C^r$ have its standard ordered orthonormal basis $(e_0,\ldots,e_{r-1})$. For every $X\in\mathcal L(H\otimes R)$ there is a unique family $X_{ij}\in\mathcal L(H)$ such that

$$X(x\otimes e_j)=\sum_{i<r}X_{ij}x\otimes e_i\qquad(x\in H,\ j<r).$$

For every complex-linear $\Phi:\mathcal L(H)\to\mathcal L(K)$, there is a unique operator $\Phi^{(r)}(X)\in\mathcal L(K\otimes R)$ satisfying

$$\Phi^{(r)}(X)(y\otimes e_j)=\sum_{i<r}\Phi(X_{ij})y\otimes e_i\qquad(y\in K,\ j<r).$$

Thus the block rule $[X_{ij}]\mapsto[\Phi(X_{ij})]$ defines a well-defined linear map on the full operator space. At $r=1$, it is $\Phi$ under the canonical unitary identifications $x\mapsto x\otimes e_0$ and $y\mapsto y\otimes e_0$.

## Facts & Assumptions

**Given:** Finite-dimensional complex-inner-product spaces $H,K$, an integer $r\ge1$, the standard basis of $R=\mathbb C^r$, and a complex-linear map $\Phi:\mathcal L(H)\to\mathcal L(K)$.

[F1] [[def-qc-register-and-computational-basis]]: the $r$-level register is $\mathbb C^r$ with ordered standard basis $e_0,\ldots,e_{r-1}$.

[F2] [[def-qc-tensor-register-and-permutation]]: after specifying ordered orthonormal bases for the factors, their tensor register has the product inner product, linear in the first argument.

[F3] [[lem-qc-tensor-product-basis-and-dimension]]: product vectors from specified orthonormal bases of the factors form an orthonormal basis of the tensor space.

[F4] [[def-vector-space-of-linear-maps]]: $\mathcal L(H)$ and $\mathcal L(K)$ are the spaces of complex-linear endomorphisms, with pointwise operations.

[F5] [[prop-linear-maps-form-a-vector-space]]: pointwise operations make each finite-dimensional linear-map space a complex vector space.

[F6] [[def-linear-map]]: a complex-linear map preserves finite linear combinations.

[F7] [[def-dimension]]: finite-dimensional means having a finite basis; the stated finite-dimensional spaces therefore admit finite bases.

[F8] [[cor-finite-iterated-tensor-products-represent-multilinear-maps]]: tensor products represent finite multilinear maps, and the scalar space is the tensor unit with its canonical unit identifications.

[F9] [[thm-gram-schmidt-orthonormalisation]]: Gram–Schmidt turns any finite linearly independent list, in particular a basis, into an orthonormal list with the same successive spans.

## Proof

1.1 Choose finite bases of $H$ and $K$, which exist by [F7] and are linearly independent by the basis definition; apply [F9] to obtain orthonormal bases $(u_\alpha)$ and $(v_\beta)$ with the same spans. By [F1]–[F3], $(u_\alpha\otimes e_j)_{\alpha,j}$ and $(v_\beta\otimes e_j)_{\beta,j}$ are orthonormal bases of $H\otimes R$ and $K\otimes R$. For each $j,\alpha$, uniquely expand $X(u_\alpha\otimes e_j)=\sum_{i<r,\,\beta}c_{\beta i;\alpha j}u_\beta\otimes e_i$. Define $X_{ij}u_\alpha=\sum_\beta c_{\beta i;\alpha j}u_\beta$ and extend linearly from the basis of $H$. Linearity of $X$ gives the required block formula on every $x\in H$. Any other family satisfying it has the same coefficients on every product-basis vector, hence each block agrees on the basis $u_\alpha$ and is equal. [given, F1, F2, F3, F7, F9]

2.1 On each product-basis vector $v_\beta\otimes e_j$, prescribe the image $\sum_i\Phi(X_{ij})v_\beta\otimes e_i$. Since these product vectors are a basis, there exists a unique linear operator $Y$ on $K\otimes R$ with those values. By linearity this gives the displayed rule for all $y\in K$. Define $\Phi^{(r)}(X)=Y$. Uniqueness of the blocks from step 1.1 and uniqueness of an operator from its values on a basis show that this definition is unambiguous. [given, F1, F2, F3, F4, F6, step 1.1]

3.1 For $X,X'\in\mathcal L(H\otimes R)$, their block families are respectively $[X_{ij}]$ and $[X'_{ij}]$. The defining action on the product basis shows that the blocks of $sX+tX'$ are $sX_{ij}+tX'_{ij}$ for any scalars $s,t\in\mathbb C$. Applying the linearity of $\Phi$ from [F6] gives blocks $s\Phi(X_{ij})+t\Phi(X'_{ij})$, which are exactly the blocks of $s\Phi^{(r)}(X)+t\Phi^{(r)}(X')$. Equality on a basis yields $\Phi^{(r)}(sX+tX')=s\Phi^{(r)}(X)+t\Phi^{(r)}(X')$. When $r=1$, identify $R=\mathbb C^1$ with the tensor unit $\mathbb C$ by $1\mapsto e_0$, and define $u_H:H\to H\otimes R$ and $u_K:K\to K\otimes R$ by $u_Hx=x\otimes e_0$ and $u_Ky=y\otimes e_0$. These are the corresponding canonical unit identifications of [F8]. By [F3], they send the orthonormal bases chosen in step 1.1 to the corresponding product bases, and [F1]–[F2] show they preserve inner products; hence they are unitary. The sole block equations are $Xu_H=u_HX_{00}$ and $\Phi^{(1)}(X)u_K=u_K\Phi(X_{00})$, so $X_{00}=u_H^{-1}Xu_H$ and $u_K^{-1}\Phi^{(1)}(X)u_K=\Phi(X_{00})=\Phi(u_H^{-1}Xu_H)$. This is the original map under these identifications. [given, F1, F2, F3, F4, F5, F6, F8, step 1.1, step 2.1] ∎
