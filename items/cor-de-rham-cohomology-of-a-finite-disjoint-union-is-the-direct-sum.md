---
id: "cor-de-rham-cohomology-of-a-finite-disjoint-union-is-the-direct-sum"
kind: "corollary"
title: "De rham cohomology of a finite disjoint union is the direct sum"
deps: ["def-de-rham-cohomology"]
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

For a finite disjoint union $M=\coprod_{j=1}^mM_j$, restrictions give $H^k_{\mathrm{dR}}(M)\cong\bigoplus_{j=1}^mH^k_{\mathrm{dR}}(M_j)$.

## Facts & Assumptions

**Given:** A finite family of smooth manifolds and any integer $k$.

[F1] [[def-de-rham-cohomology]]: The real **de Rham cohomology** is $H^k_{\mathrm{dR}}(M)=Z^k(M)/B^k(M)$, with $Z^k,B^k$ as in def-closed-and-exact-differential-forms. This is def-cohomology-object-of-a-cochain-complex in real vector spaces. Only a closed form $\omega$ represents a class $[\omega]$. For closed forms $\omega,\omega\prime$, equality $[\omega]=[\omega\prime]$ means precisely $\omega\prime-\omega=d\eta$ for some $(k-1)$-form $\eta$. Addition and real scalar multiplication are induced by those of forms. All groups on the empty manifold are zero.

## Proof

**Proof technique:** direct.

1.1 A form on $M$ is uniquely a tuple of forms on the open components $M_j$: define its value componentwise, which is smooth locally. Its derivative is componentwise too, so $Z^k(M)=\bigoplus_jZ^k(M_j)$. A tuple of exact forms has a tuple of primitives, obtained by finite choice, so $B^k(M)=\bigoplus_jB^k(M_j)$. [F1, given]

2.1 The resulting map on quotient classes is onto, since a finite tuple of classes has a finite tuple of closed representatives. Its kernel consists precisely of tuples with all entries exact, which step 1.1 identifies with $B^k(M)$. Thus it is an isomorphism. For $m=0$ both sides are zero, and for $m=1$ it is the identity. [F1, step 1.1] ∎

## Source locator

Lee, Proposition 17.5, pp.442–443; the local statement is finite only, where products and sums coincide and all witness selection is finite.
