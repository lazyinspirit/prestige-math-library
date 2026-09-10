---
id: "ex-homotopy-equivalent-annulus-and-circle-have-isomorphic-de-rham-rings"
kind: "example"
title: "Homotopy equivalent annulus and circle have isomorphic de rham rings"
deps: ["thm-de-rham-cohomology-is-smooth-homotopy-invariant", "prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras", "thm-de-rham-cohomology-of-spheres"]
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

## Example

Under countable choice, the annulus $A=\{x\in\mathbb R^2:a<|x|<b\}$, where $0<a<1<b$, and $S^1$ have isomorphic de Rham graded algebras.

## Facts & Assumptions

**Given:** Assume countable choice. Inclusion $i:S^1\to A$ and $r:A\to S^1$, $r(x)=x/|x|$.

[F1] [[thm-de-rham-cohomology-is-smooth-homotopy-invariant]]: A smooth homotopy equivalence induces an isomorphism of de Rham graded real algebras.

[F2] [[prop-pullback-is-a-homomorphism-of-de-rham-cohomology-algebras]]: Smooth pullback induces a unital graded real algebra homomorphism $H^\bullet_{\mathrm{dR}}(N)\to H^\bullet_{\mathrm{dR}}(M)$.

[F3] [[thm-de-rham-cohomology-of-spheres]]: Assume countable choice. For $n\ge1$, $H^k_{\mathrm{dR}}(S^n)$ is $\mathbb R$ in degrees $0,n$ and zero otherwise. For $S^0$ it is $\mathbb R^2$ in degree zero and zero otherwise.

## Verification

**Proof technique:** direct.

1.1 The homotopy $F(x,t)=((1-t)+t/|x|)x$ has radius $(1-t)|x|+t$, between $|x|$ and $1$, hence strictly between $a$ and $b$. It is smooth, fixes the unit circle, and connects the identity to $ir$; also $ri=\operatorname{id}$. [given, algebra]

2.1 Thus $i^*,r^*$ are inverse graded algebra homomorphisms by smooth homotopy invariance. The sphere computation gives one generator $u$ in degree one and the unit in degree zero; $u^2=0$ because $H^2(S^1)=0$. The annulus has the same multiplication, so its ring is the exterior algebra on one degree-one generator. [F1, F2, F3, step 1.1] ∎

## Source locator

Lee, Proposition 17.10 and Theorem 17.11, pp.445–446; the annulus retraction and its radial homotopy are explicit.
