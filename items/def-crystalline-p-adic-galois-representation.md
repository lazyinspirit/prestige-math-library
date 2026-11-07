---
id: def-crystalline-p-adic-galois-representation
kind: definition
title: Crystalline p-adic representation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - def-local-p-adic-galois-representation
  - def-p-adic-period-rings
  - def-de-rham-p-adic-galois-representation
  - lem-p-adic-period-ring-comparison-embedding-is-injective
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Chapter 9, Section 9.1
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: Laurent Berger, An Introduction to the Theory of p-adic Representations, Section II.3.1
      url: https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf
verification:
  precheck: n/a
---

## Definition

Let $K/\mathbb Q_p$ be finite and let $V$ be a finite-dimensional continuous $\mathbb Q_p$-representation of $G_K$. Define
$$D_{\mathrm{cris}}(V):=(B_{\mathrm{cris}}\otimes_{\mathbb Q_p}V)^{G_K},$$
a $K_0$-vector space with the Frobenius induced by that of $B_{\mathrm{cris}}$. The natural inclusion $B_{\mathrm{cris}}\subseteq B_{\mathrm{st}}$ and the chosen injective map $K\otimes_{K_0}B_{\mathrm{st}}\hookrightarrow B_{\mathrm{dR}}$ give an injection $K\otimes_{K_0}D_{\mathrm{cris}}(V)\hookrightarrow D_{\mathrm{dR}}(V)$; give the source its induced filtration. The representation $V$ is **crystalline** if $\dim_{K_0}D_{\mathrm{cris}}(V)=\dim_{\mathbb Q_p}V$.

## Definition references

[[def-local-p-adic-galois-representation]]

[[def-p-adic-period-rings]]

[[def-de-rham-p-adic-galois-representation]]

[[lem-p-adic-period-ring-comparison-embedding-is-injective]]

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part II, Chapter 9, §9.1](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Laurent Berger, *An Introduction to the Theory of p-adic Representations*, §II.3.1](https://perso.ens-lyon.fr/laurent.berger/articles/article05.pdf)

## Facts & Assumptions

**Given:** a finite extension $K/\mathbb Q_p$, its residue field, and a finite-dimensional continuous representation $V$.

[F1] [[def-p-adic-period-rings]]: $B_{\mathrm{cris}}$ is a $G_K$-stable subring of $B_{\mathrm{st}}$ with induced Frobenius and a natural inclusion into $B_{\mathrm{dR}}$.

[F2] [[def-de-rham-p-adic-galois-representation]]: $D_{\mathrm{dR}}(V)$ is a filtered $K$-vector space.

[F3] [[lem-p-adic-period-ring-comparison-embedding-is-injective]]: the chosen map $K\otimes_{K_0}B_{\mathrm{st}}\to B_{\mathrm{dR}}$ is injective. This supplier now contains a local proof. The construction obligations retained in [F1] remain separate; this use grants no readiness certification.

## Proof

1.1 The inclusion $B_{\mathrm{cris}}\subseteq B_{\mathrm{st}}$ in [F1], after tensoring with $K$ over $K_0$, is injective because $K$ is a field extension of $K_0$. Composing with the injective map of [F3] and tensoring with $V$ gives an equivariant injection into $B_{\mathrm{dR}}\otimes_{\mathbb Q_p}V$. Restriction to invariant subspaces therefore injects $K\otimes_{K_0}D_{\mathrm{cris}}(V)$ into $D_{\mathrm{dR}}(V)$. [given, F1, F2, F3, algebra]

2.1 The filtration on the source is consequently the pullback of the filtration on $D_{\mathrm{dR}}(V)$ along this injection, so it is well-defined. Its definition imposes the dimension equality on $D_{\mathrm{cris}}(V)$; when that equality holds, the associated filtered Frobenius module is finite-dimensional over $K_0$. The period-ring construction obligations retained in [F1] remain explicit prerequisites. [given, F2, F3, step 1.1, algebra] ∎
