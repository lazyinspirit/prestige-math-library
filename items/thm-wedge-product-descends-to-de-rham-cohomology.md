---
id: "thm-wedge-product-descends-to-de-rham-cohomology"
kind: "theorem"
title: "Wedge product descends to de rham cohomology"
deps: ["def-de-rham-cohomology", "lem-wedge-with-a-closed-form-preserves-exactness-classes", "prop-differential-forms-form-a-graded-commutative-algebra", "thm-the-exterior-derivative-is-a-graded-derivation"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Nigel Hitchin, Differentiable Manifolds (2014)"
      url: "https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The formula $[\alpha][\beta]=[\alpha\wedge\beta]$ defines a bilinear, associative, graded-commutative product on $H^\bullet_{\mathrm{dR}}(M)$, with unit $[1]$.

## Facts & Assumptions

**Given:** Closed forms $\alpha,\beta$ of degrees $p,q\ge0$.

[F1] [[def-de-rham-cohomology]]: The real **de Rham cohomology** is $H^k_{\mathrm{dR}}(M)=Z^k(M)/B^k(M)$, with $Z^k,B^k$ as in def-closed-and-exact-differential-forms. This is def-cohomology-object-of-a-cochain-complex in real vector spaces. Only a closed form $\omega$ represents a class $[\omega]$. For closed forms $\omega,\omega\prime$, equality $[\omega]=[\omega\prime]$ means precisely $\omega\prime-\omega=d\eta$ for some $(k-1)$-form $\eta$. Addition and real scalar multiplication are induced by those of forms. All groups on the empty manifold are zero.

[F2] [[lem-wedge-with-a-closed-form-preserves-exactness-classes]]: If $\alpha\in\Omega^p(M)$ and $\beta\in\Omega^q(M)$ are closed, then $d\eta\wedge\beta=d(\eta\wedge\beta)$ for $\eta\in\Omega^{p-1}(M)$ and $\alpha\wedge d\theta=(-1)^p d(\alpha\wedge\theta)$ for $\theta\in\Omega^{q-1}(M)$.

[F3] [[prop-differential-forms-form-a-graded-commutative-algebra]]: The graded vector space $$ \Omega^*(M):=\bigoplus_{k\ge 0}\Omega^k(M) $$ with the wedge product is an associative graded-commutative algebra.

[F4] [[thm-the-exterior-derivative-is-a-graded-derivation]]: Let $M$ be a smooth manifold. The exterior derivative is an $\mathbb R$-linear map $d:\Omega^*(M)\to\Omega^*(M)$ of degree one. For homogeneous smooth forms $\alpha\in\Omega^p(M)$ and $\beta\in\Omega^q(M)$, $$d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{\deg\alpha}\alpha\wedge d\beta.$$

## Proof

**Proof technique:** direct.

1.1 The identity $d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^p\alpha\wedge d\beta=0$ shows that the proposed product represents a class. If $\alpha\prime=\alpha+d\eta$ and $\beta\prime=\beta+d\theta$, all four forms are closed, and $\alpha\prime\wedge\beta\prime-\alpha\wedge\beta=d(\eta\wedge\beta\prime)+(-1)^p d(\alpha\wedge\theta)$. Hence the product is independent of both representatives. [F1, F2, F4, given]

2.1 Bilinearity and associativity follow by applying the quotient map to the corresponding identities of forms. Similarly $\alpha\wedge\beta=(-1)^{pq}\beta\wedge\alpha$ gives the graded sign. The constant function $1$ is closed and satisfies $1\wedge\alpha=\alpha$, giving the unit; on the empty manifold it equals the zero element of the zero algebra. [F1, F3, step 1.1] ∎

## Source locator

Lee, Chapter 17, p.441 (quotient); the graded-algebra and graded-derivation identities are supplied by the declared local exterior-calculus results.
