---
id: "thm-mayer-vietoris-sequence-in-de-rham-cohomology"
kind: "theorem"
title: "Mayer vietoris sequence in de rham cohomology"
deps: ["thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes", "def-de-rham-cohomology", "thm-long-exact-sequence-in-cohomology"]
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
landmark: true
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Under countable choice the de Rham Mayer–Vietoris sequence is exact: $\cdots\to H^k(M)\xrightarrow{r^*}H^k(U)\oplus H^k(V)\xrightarrow{s^*}H^k(U\cap V)\xrightarrow\delta H^{k+1}(M)\to\cdots$, beginning with $0\to H^0(M)$.

## Facts & Assumptions

**Given:** An open cover $M=U\cup V$ and countable choice.

[F1] [[thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes]]: Under countable choice, $0\to\Omega^\bullet(M)\xrightarrow r\Omega^\bullet(U)\oplus\Omega^\bullet(V)\xrightarrow s\Omega^\bullet(U\cap V)\to0$ is short exact as a sequence of real cochain complexes.

[F2] [[def-de-rham-cohomology]]: The real **de Rham cohomology** is $H^k_{\mathrm{dR}}(M)=Z^k(M)/B^k(M)$, with $Z^k,B^k$ as in def-closed-and-exact-differential-forms. This is def-cohomology-object-of-a-cochain-complex in real vector spaces. Only a closed form $\omega$ represents a class $[\omega]$. For closed forms $\omega,\omega\prime$, equality $[\omega]=[\omega\prime]$ means precisely $\omega\prime-\omega=d\eta$ for some $(k-1)$-form $\eta$. Addition and real scalar multiplication are induced by those of forms. All groups on the empty manifold are zero.

[F3] [[thm-long-exact-sequence-in-cohomology]]: Let $$0\to A^\bullet\to B^\bullet\to C^\bullet\to0$$ be a short exact sequence of cochain complexes in an abelian category. Then there is a natural exact sequence $$\cdots\to H^n(A)\to H^n(B)\to H^n(C)\xrightarrow{\partial^n}H^{n+1}(A)\to H^{n+1}(B)\to H^{n+1}(C)\to\cdots.$$

## Proof

**Proof technique:** direct.

1.1 The short exact sequence of de Rham cochain complexes satisfies the hypotheses of the cohomology long exact sequence theorem in the abelian category of real vector spaces. It gives the connecting map from overlap degree $k$ to global degree $k+1$, with no additional differential sign. [F1, F3, given]

2.1 For the middle complex, $d(\alpha,\beta)=(d\alpha,d\beta)$, so its cycle space is $Z^k(U)\oplus Z^k(V)$ and its boundary space is $B^k(U)\oplus B^k(V)$. The quotient map sends $[(\alpha,\beta)]$ to $([\alpha],[\beta])$, bijectively: a pair maps to zero exactly when both entries have primitives. Thus its cohomology is the displayed direct sum. All negative-degree cohomology is zero by the definition of forms, giving the stated initial zero. [F2, step 1.1] ∎

## Source locator

Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.
