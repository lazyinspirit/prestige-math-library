---
id: "prop-pullback-is-a-morphism-of-de-rham-complexes"
kind: "proposition"
title: "Pullback is a morphism of de rham complexes"
deps: ["def-de-rham-cochain-complex", "thm-the-exterior-derivative-commutes-with-pullback", "def-cochain-map"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

A smooth map $F:M\to N$ induces a degree-zero real cochain map $F^*:\Omega^\bullet(N)\to\Omega^\bullet(M)$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$.

[F1] [[def-de-rham-cochain-complex]]: Let $M$ be a finite-dimensional Hausdorff second-countable smooth manifold without boundary. Its real **de Rham cochain complex** is $(\Omega^\bullet(M),d)$, where $\Omega^k(M)$ is the space of smooth $k$-forms for $0\le k\le\dim M$ and is $0$ otherwise; $d$ has degree $+1$. These are the sections in def-smooth-differential-k-form. The identity $d^{k+1}d^k=0$ in thm-the-exterior-derivative-squares-to-zero makes this an instance of def-cochain-complex-in-an-abelian-category. On the empty manifold each section space is the zero vector space. Whenever a product with $[0,1]$ is used, forms mean smooth forms up to the endpoints, locally extendible across them.

[F2] [[thm-the-exterior-derivative-commutes-with-pullback]]: For every smooth map $F:M\to N$ and every form $\omega$ on $N$, $$d(F^*\omega)=F^*(d\omega).$$

[F3] [[def-cochain-map]]: Let $C^\bullet$ and $D^\bullet$ be cochain complexes. A **cochain map** $f:C^\bullet\to D^\bullet$ is a family of morphisms $$f^n:C^n\to D^n$$ such that $$d_D^n\circ f^n=f^{n+1}\circ d_C^n$$ for every $n\in\mathbb Z$. Thus the upper-index square $$\begin{matrix} C^n&\xrightarrow{f^n}&D^n\\ d_C^n\downarrow&&\downarrow d_D^n\\ C^{n+1}&\xrightarrow{f^{n+1}}&D^{n+1} \end{matrix}$$ commutes in each degree.

## Proof

**Proof technique:** direct.

1.1 Pointwise, $(F^*\omega)_p(v_1,\ldots,v_k)=\omega_{F(p)}(dF_pv_1,\ldots,dF_pv_k)$. This formula is real linear in $\omega$ and preserves degree; in coordinates its coefficients are finite sums of smooth coefficients times derivatives of $F$, hence smooth. The unique maps on zero terms supply the other degrees. [F1, given]

2.1 For every $\omega$, $d_MF^*\omega=F^*d_N\omega$. This is precisely the equation required for a cochain map in each degree, so the family just constructed is a cochain map. [F2, F3, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 17, pp.441–443, Proposition 17.2 and Corollary 17.3; local quotient calculations below.
