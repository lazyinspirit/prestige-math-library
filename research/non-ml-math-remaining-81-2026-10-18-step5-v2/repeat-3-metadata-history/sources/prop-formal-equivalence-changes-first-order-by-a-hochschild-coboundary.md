---
id: prop-formal-equivalence-changes-first-order-by-a-hochschild-coboundary
kind: proposition
title: Formal equivalence changes the first-order cochain by a Hochschild coboundary
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-formal-equivalence-of-star-products
  - def-formal-star-product-on-a-poisson-manifold
  - def-hh-cochain-complex-and-gerstenhaber-bracket
  - prop-hochschild-cochains-form-a-differential-graded-lie-algebra
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Maxim Kontsevich, Deformation Quantization of Poisson Manifolds, I
      url: https://arxiv.org/pdf/q-alg/9709040
      locator: §1.2, gauge transformation of the first-order term (PDF p. 2)
    - title: Sarah J. Witherspoon, Hochschild Cohomology for Algebras
      url: https://people.tamu.edu/~sjw/pub/gsm204.pdf
      locator: Chapter 5, §§5.1–5.2, formal equivalence and infinitesimal deformations
    - title: Nima Moshayedi, Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory
      url: https://arxiv.org/pdf/2012.14662
      locator: §4.1.4, Definition 4.1.17 and Lemma 4.1.19 (PDF p. 88)
verification:
  precheck: pending
proof_strategy: direct
---

## Statement

Let $\star$ and $\star'$ be formally gauge equivalent differential star
products on a real Poisson manifold, with first coefficients $B_1$ and
$B_1'$. If their gauge map is
$T=\operatorname{id}+\hbar D_1+O(\hbar^2)$, then
$$B_1'(f,g)=B_1(f,g)+(\delta D_1)(f,g),\qquad (\delta D_1)(f,g)=fD_1(g)-D_1(fg)+D_1(f)g.$$
Consequently $B_1$ and $B_1'$ define the same class in
$HH^2_{\mathrm{diff,norm}}(C^\infty(M),C^\infty(M))$, and their skew
parts are identical. This is a first-order invariant only; it does not
classify full star products.

## Facts & Assumptions

**Given:** A commutative real algebra $A=C^\infty(M,\mathbb R)$, two
differential star products on $A\llbracket\hbar\rrbracket$, and a gauge map $T$ as in
[F1].

[F1] [[def-formal-star-product-on-a-poisson-manifold]]: the products are
associative, their coefficients are bidifferential, and they preserve the
unit.

[F2] [[def-formal-equivalence-of-star-products]]: $T=\operatorname{id}+
\sum_{r\geq1}\hbar^rD_r$, with differential coefficients vanishing on
$1$, and $f\star' g=T^{-1}(Tf\star Tg)$.

[F3] [[def-hh-cochain-complex-and-gerstenhaber-bracket]]: for a 1-cochain
$D$, $(\delta D)(f,g)=fD(g)-D(fg)+D(f)g$.

[F4] [[prop-hochschild-cochains-form-a-differential-graded-lie-algebra]]:
$\delta^2=0$, so the normalized multidifferential cocycles modulo
coboundaries define the stated Hochschild cohomology group.

## Proof

1.1 The coefficient of $\hbar$ in associativity of $\star$ is $B_1(f,g)h+B_1(fg,h)-fB_1(g,h)-B_1(f,gh)=0$, which is $-(\delta B_1)(f,g,h)=0$. The same calculation applies to $\star'$, so both first coefficients are normalized 2-cocycles in the complex of [F4]. [given, F1, F3, F4, algebra]

1.2 Comparing coefficients of $\hbar$ in $TT^{-1}=\operatorname{id}$ gives $T^{-1}=\operatorname{id}-\hbar D_1+O(\hbar^2)$. [F2, given, algebra]

2.1 Expand the defining transformation from [F2] through first order: $$Tf\star Tg=fg+\hbar\bigl(D_1(f)g+fD_1(g)+B_1(f,g)\bigr) +O(\hbar^2).$$ Applying $T^{-1}$ subtracts $\hbar D_1(fg)$, hence $B_1'=B_1+fD_1(g)-D_1(fg)+D_1(f)g=B_1+\delta D_1$ by [F3]. [F2, F3, step 1.2, algebra]

3.1 Since $A$ is commutative, $\delta D_1(f,g)=fD_1(g)-D_1(fg)+D_1(f)g$ equals $\delta D_1(g,f)$. Thus the skew parts of $B_1$ and $B_1'$ agree, and their difference is the coboundary $\delta D_1$. With step 1.1 this proves equality of their classes in the cohomology of [F4]. [given, F3, F4, step 1.1, step 2.1, algebra] ∎
