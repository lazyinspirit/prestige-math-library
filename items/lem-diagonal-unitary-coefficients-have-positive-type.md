---
id: lem-diagonal-unitary-coefficients-have-positive-type
kind: lemma
title: Diagonal unitary coefficients have positive type
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuous-function-of-positive-type, def-matrix-coefficient-of-a-unitary-representation, def-strongly-continuous-unitary-representation, def-real-and-complex-inner-product-space]
landmark: false
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Bekka, de la Harpe and Valette, Kazhdan's Property (T), Proposition C.4.3 and Example C.1.3, Appendix C, printed pp. 362 and 374–375"
      url: "https://ncatlab.org/nlab/files/BekkaHarpeValetteOnKashdanPropertyT.pdf"
    - title: "Bekka and de la Harpe, Unitary Representations of Groups, Duals, and Characters, §1.B"
      url: "https://arxiv.org/pdf/1912.07262"
axiom_audit: choice-free
---

## Statement

Let $G$ be a topological group, let $H$ be a complex Hilbert space, and let
$\pi:G\to U(H)$ be a strongly continuous unitary representation. For each
$\xi\in H$, the function $\varphi(g)=\langle\pi(g)\xi,\xi\rangle$ is
continuous and of positive type, and $\varphi(e)=\|\xi\|^2$.

## Facts & Assumptions

[A1] A function of positive type is continuous and its finite matrices $(\varphi(g_i^{-1}g_j))_{i,j}$ are positive semidefinite, with repetitions allowed ([[def-continuous-function-of-positive-type]]).

[A2] The matrix coefficient is $c_{\xi,\eta}(g)=\langle\pi(g)\xi,\eta\rangle$; it is continuous when $G$ is topological and $\pi$ is strongly continuous ([[def-matrix-coefficient-of-a-unitary-representation]]).

[A3] A strongly continuous unitary representation is a homomorphism into bijective complex-linear isometries, and each orbit map is norm-continuous ([[def-strongly-continuous-unitary-representation]]).

[A4] The complex inner product is linear in its first variable, conjugate-linear in its second, conjugate symmetric, and its induced norm satisfies $\|x\|^2=\langle x,x\rangle$ ([[def-real-and-complex-inner-product-space]]).

[A5] The induced length is defined by $\|v\|:=\sqrt{\langle v,v\rangle}$ ([[def-real-and-complex-inner-product-space]]).

## Proof

**Proof technique:** direct.

**Given:** A strongly continuous unitary representation $\pi:G\to U(H)$ and $\xi\in H$.

1.1 For any complex-linear isometry $U:H\to H$, expanding the squared norms using [A4] gives $\|x+y\|^2-\|x-y\|^2=4\operatorname{Re}\langle x,y\rangle$ and $\|x+iy\|^2-\|x-iy\|^2=4\operatorname{Im}\langle x,y\rangle$. Since $U$ is linear and norm-preserving, the two differences are unchanged when $x,y$ are replaced by $Ux,Uy$. Their real and imaginary parts therefore agree, so $\langle Ux,Uy\rangle=\langle x,y\rangle$. In particular each $\pi(g)$ preserves the inner product. [A3, A4, A5, algebra]

2.1 Fix $n\ge1$, elements $g_1,\ldots,g_n\in G$, and scalars $c_1,\ldots,c_n\in\mathbb C$, and put $v_i=\pi(g_i)\xi$. The homomorphism law and step 1.1 yield $\varphi(g_i^{-1}g_j)=\langle\pi(g_i)^{-1}\pi(g_j)\xi,\xi\rangle=\langle v_j,v_i\rangle$. Hence the positive-semidefinite quadratic form from [A1] is $\sum_{i,j=1}^n\overline{c_i}c_j\varphi(g_i^{-1}g_j)=\left\|\sum_{j=1}^n c_jv_j\right\|^2\ge0$. The calculation includes repeated group elements, zero coefficients, and $\xi=0$; when $\xi=0$ the value is zero. [A1, A3, A4, A5, step 1.1, algebra]

3.1 By [A2], $\varphi=c_{\xi,\xi}$ is continuous. Step 2.1 proves its positive-type matrix test for every allowed finite list, so [A1] gives that $\varphi$ is of positive type. The homomorphism law implies $\pi(e)=I$; therefore $\varphi(e)=\langle\xi,\xi\rangle=\|\xi\|^2$, including when $\xi=0$. [A1, A2, A3, A4, A5, step 2.1, algebra] ∎
