---
id: cor-the-galois-group-of-a-rational-cyclotomic-field
kind: corollary
title: "$[\\mathbb Q(\\zeta_n):\\mathbb Q]=\\varphi(n)$ and $\\operatorname{Gal}(\\mathbb Q(\\mu_n)/\\mathbb Q)\\cong(\\mathbb Z/n)^\\times$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cyclotomic-polynomials-are-irreducible-over-the-rationals, prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group, thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n, def-cyclotomic-extension, def-unit-group-modulo-n-and-euler-totient, def-extension-degree-and-finite-extension, def-roots-of-unity-in-a-field, thm-rat-ordered-field, def-ring-characteristic, def-divides-in-z]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory (course notes/monograph), Corollary 9.9"
      url: "https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/FieldTheory.pdf"
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Theorem 2.5"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $\zeta$ be a primitive $n$-th root of unity
([[def-roots-of-unity-in-a-field]]) in $\mathbb Q(\mu_n)$
([[def-cyclotomic-extension]]). Then

$$[\mathbb Q(\zeta):\mathbb Q]=\varphi(n)$$

([[def-extension-degree-and-finite-extension]],
[[def-unit-group-modulo-n-and-euler-totient]]), and the embedding

$$\operatorname{Gal}\bigl(\mathbb Q(\mu_n)/\mathbb Q\bigr)\longrightarrow(\mathbb Z/n)^{\times}$$

of [[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]] is an
isomorphism.

## Facts & Assumptions

**Given:** An integer $n\ge1$; $\mathbb Q$ is an ordered field ([[thm-rat-ordered-field]]), so $\operatorname{char}\mathbb Q=0$ ([[def-ring-characteristic]]) and divides no $n\ge1$ ([[def-divides-in-z]]).

[L1] $\Phi_n$ is irreducible in $\mathbb Q[t]$ for every $n\ge1$ ([[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]).

[L2] For a field $K$ with $\operatorname{char}K\nmid n$ and a primitive $n$-th root of unity $\zeta$ in a splitting field, irreducibility of the image of $\Phi_n$ in $K[t]$, the equality $[K(\zeta):K]=\varphi(n)$, and surjectivity of the embedding $\operatorname{Gal}(K(\mu_n)/K)\to(\mathbb Z/n)^{\times}$ are equivalent ([[prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group]]).

## Proof

**Proof technique:** direct.

1.1 Since $\operatorname{char}\mathbb Q=0$ does not divide $n$, [L2] applies with $K=\mathbb Q$. [L2, given]

2.1 The image of $\Phi_n$ in $\mathbb Q[t]$ is $\Phi_n$ itself, irreducible by [L1]; so the first clause of [L2] holds, and therefore so do the other two: $[\mathbb Q(\zeta):\mathbb Q]=\varphi(n)$, and the embedding is onto, hence an isomorphism, being injective. [step 1.1, L1, L2] ∎

## Remarks

- **The isomorphism is canonical.** It sends $\sigma$ to the class of the exponent $a_\sigma$ with $\sigma(\zeta)=\zeta^{a_\sigma}$, and [[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]] shows that class does not depend on which primitive $n$-th root of unity is chosen. So every subgroup of $(\mathbb Z/n)^{\times}$ names an intermediate field of $\mathbb Q(\mu_n)/\mathbb Q$ without any choice being made.
