---
id: "cor-de-rham-cohomology-of-punctured-euclidean-space"
kind: "corollary"
title: "De rham cohomology of punctured euclidean space"
deps: ["thm-de-rham-cohomology-of-spheres", "thm-de-rham-cohomology-is-smooth-homotopy-invariant", "cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum", "thm-poincare-lemma-for-differential-forms-on-star-shaped-domains"]
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
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Under countable choice, $\mathbb R^n\setminus\{0\}$ has cohomology $\mathbb R$ in degrees $0,n-1$ only for $n\ge2$. For $n=1$ it has $\mathbb R^2$ in degree zero only, and for $n=0$ all groups vanish.

## Facts & Assumptions

**Given:** A nonnegative integer $n$ and countable choice.

[F1] [[thm-de-rham-cohomology-of-spheres]]: Assume countable choice. For $n\ge1$, $H^k_{\mathrm{dR}}(S^n)$ is $\mathbb R$ in degrees $0,n$ and zero otherwise. For $S^0$ it is $\mathbb R^2$ in degree zero and zero otherwise.

[F2] [[thm-de-rham-cohomology-is-smooth-homotopy-invariant]]: A smooth homotopy equivalence induces an isomorphism of de Rham graded real algebras.

[F3] [[cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum]]: For a finite disjoint union $M=\coprod_{j=1}^mM_j$, restrictions give $H^k_{\mathrm{dR}}(M)\cong\bigoplus_{j=1}^mH^k_{\mathrm{dR}}(M_j)$.

[F4] [[thm-poincare-lemma-for-differential-forms-on-star-shaped-domains]]: Every closed smooth $k$-form on a star-shaped open domain is exact for $k\ge1$. For centre $0$, one primitive is $\eta_x(v_1,\ldots,v_{k-1})=\int_0^1t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})\,dt$.

## Proof

**Proof technique:** direct.

1.1 For $n\ge2$, set $r(x)=x/|x|$ and $i:S^{n-1}\hookrightarrow\mathbb R^n\setminus\{0\}$. Then $ri=\operatorname{id}$ and $F(x,t)=((1-t)+t/|x|)x$ is a smooth homotopy from the identity to $ir$. Its scalar coefficient is strictly positive for $0\le t\le1$, so it never reaches zero. Smooth homotopy invariance and the sphere computation give the groups asserted. [F1, F2, given]

2.1 For $n=1$, the two half-lines are star-shaped and connected, so each has only $H^0=\mathbb R$; their finite disjoint union gives $\mathbb R^2$. For $n=0$ the punctured space is empty, all its form spaces are zero, and every cohomology group is zero. [F3, F4, given] ∎

## Source locator

Lee, Corollary 17.23, p.451, with the low-dimensional cases computed explicitly.
