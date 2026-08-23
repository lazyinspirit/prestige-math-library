---
id: thm-normal-subgroups-and-quotients-in-the-galois-correspondence
kind: theorem
title: "Normal subgroups, conjugate fields, and quotient groups in the Galois correspondence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-finite-galois-theory, def-normal-subgroup, thm-normal-subgroup-characterisations, def-quotient-group, thm-first-isomorphism-theorem-groups, def-normal-algebraic-extension, thm-algebraic-embedding-extension]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 3.17"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Theorem 5.6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be finite Galois, let $G=\operatorname{Gal}(K/F)$, let $H\le G$, and put $E=K^H$. For every $\sigma\in G$,

$$\operatorname{Gal}(K/\sigma(E))=\sigma H\sigma^{-1}.$$

An intermediate field $E/F$ is Galois exactly when its corresponding subgroup is normal. In that case restriction gives a surjective homomorphism $G\to\operatorname{Gal}(E/F)$ with kernel $H$, and hence

$$\operatorname{Gal}(E/F)\cong G/H.$$

## Facts & Assumptions

**Given:** The finite Galois correspondence; normal subgroups and quotient groups ([[def-normal-subgroup]], [[def-quotient-group]]); the characterization of a normal algebraic extension by stability of conjugates ([[def-normal-algebraic-extension]]); the Axiom of Choice and algebraic embedding extension ([[thm-algebraic-embedding-extension]]); and the first isomorphism theorem for groups ([[thm-first-isomorphism-theorem-groups]]).

[L1] The assignments $H\mapsto K^H$ and $E\mapsto\operatorname{Gal}(K/E)$ are mutually inverse inclusion-reversing bijections ([[thm-fundamental-theorem-of-finite-galois-theory]]).

[F1] A subgroup is normal exactly when it is invariant under conjugation ([[thm-normal-subgroup-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in K$, the element $x$ is fixed by $\sigma H\sigma^{-1}$ exactly when $\sigma^{-1}(x)$ is fixed by $H$, exactly when $\sigma^{-1}(x)\in E$, and exactly when $x\in\sigma(E)$. Thus $K^{\sigma H\sigma^{-1}}=\sigma(E)$, and [L1] gives $\operatorname{Gal}(K/\sigma(E))=\sigma H\sigma^{-1}$. [L1, algebra]

2.1 For the forward direction, if $H\trianglelefteq G$, then step 1.1 gives $\sigma(E)=E$ for every $\sigma\in G$; every $F$-conjugate of an element of $E$ is obtained by extending its embedding to $K$ and hence lies in $E$, so $E/F$ is normal, and it is separable as a subextension of the separable extension $K/F$, hence Galois. For the reverse direction, if $E/F$ is Galois, normality gives $\sigma(E)=E$ for every $\sigma\in G$, so step 1.1 and [L1] give $\sigma H\sigma^{-1}=H$ and [F1] gives $H\trianglelefteq G$. [step 1.1, L1, F1, given]

3.1 In the normal case, restriction $\rho:G\to\operatorname{Gal}(E/F)$ is defined by step 2.1. Every $F$-automorphism of $E$ extends to an embedding of $K$ in an algebraic closure; normality of $K/F$ makes the extension an element of $G$, so $\rho$ is surjective. Its kernel consists exactly of the automorphisms fixing $E$, namely $H$ by [L1]. The first isomorphism theorem therefore gives $G/H\cong\operatorname{Gal}(E/F)$; for $H=\{1\}$ and $H=G$ this yields the two endpoint quotients. [step 2.1, L1, given] ∎
