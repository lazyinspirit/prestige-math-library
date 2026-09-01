---
id: cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite
kind: corollary
title: "The canonical map is injective exactly when the group is residually finite"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion, def-finite-residual-and-residually-finite-group]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

The canonical map to the profinite completion is injective if and only if the
group is residually finite.

## Facts & Assumptions

**Given:** An abstract group $G$.

[L1] The kernel of the canonical map $\iota_G:G\to\widehat G$ is the finite
residual $R_f(G)$ ([[thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion]]).

[F1] Residual finiteness means $R_f(G)=\{1\}$
([[def-finite-residual-and-residually-finite-group]]).

## Proof

**Proof technique:** direct.

1.1 If $\iota_G$ is injective, then its kernel is trivial. By [L1], the finite residual is therefore trivial, and [F1] says that $G$ is residually finite. [L1, F1, given]

1.2 If $G$ is residually finite, then [F1] gives $R_f(G)=\{1\}$. By [L1], this is exactly the statement that $\ker\iota_G=\{1\}$, so $\iota_G$ is injective. [L1, F1, given]

2.1 The two implications prove the equivalence. [step 1.1, step 1.2] ∎
