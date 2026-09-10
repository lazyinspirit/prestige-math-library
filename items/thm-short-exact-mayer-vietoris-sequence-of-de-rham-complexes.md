---
id: "thm-short-exact-mayer-vietoris-sequence-of-de-rham-complexes"
kind: "theorem"
title: "Short exact mayer vietoris sequence of de rham complexes"
deps: ["lem-the-de-rham-mayer-vietoris-sequence-is-exact-at-the-first-two-terms", "lem-the-de-rham-mayer-vietoris-difference-map-is-surjective", "def-short-exact-sequence-of-complexes"]
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

Under countable choice, $0\to\Omega^\bullet(M)\xrightarrow r\Omega^\bullet(U)\oplus\Omega^\bullet(V)\xrightarrow s\Omega^\bullet(U\cap V)\to0$ is short exact as a sequence of real cochain complexes.

## Facts & Assumptions

**Given:** An open cover $M=U\cup V$ and countable choice.

[F1] [[lem-the-de-rham-mayer-vietoris-sequence-is-exact-at-the-first-two-terms]]: The sequence $0\to\Omega^k(M)\xrightarrow{r}\Omega^k(U)\oplus\Omega^k(V)\xrightarrow{s}\Omega^k(U\cap V)$ is exact at the first two nonzero terms.

[F2] [[lem-the-de-rham-mayer-vietoris-difference-map-is-surjective]]: Assume countable choice. The difference map $s:\Omega^k(U)\oplus\Omega^k(V)\to\Omega^k(U\cap V)$ is surjective in every degree.

[F3] [[def-short-exact-sequence-of-complexes]]: A **short exact sequence of complexes** is a sequence of chain maps $$0\to A_\bullet\to B_\bullet\to C_\bullet\to0$$ that is exact in each degree as a sequence in the ambient abelian category.

## Proof

**Proof technique:** direct.

1.1 In every degree, the first lemma gives injectivity of $r$ and $\ker s=\operatorname{im}r$, and the second gives surjectivity of $s$. Hence each degree is a short exact sequence of real vector spaces. [F1, F2, given]

2.1 The maps $r,s$ commute with the differentials because they are the restriction cochain maps of those lemmas. Reindexing by $C_n=C^{-n}$ turns this into a sequence of chain maps exact in every degree, precisely the definition of a short exact sequence of complexes. Thus it is the claimed cochain version, including zero terms. [F3, step 1.1] ∎

## Source locator

Lee, Theorem 17.20, pp.449–450, and its full proof pp.462–463. This page reverses Lee’s difference convention consistently: $s(\alpha,\beta)=\beta-\alpha$.
