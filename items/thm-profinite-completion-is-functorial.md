---
id: thm-profinite-completion-is-functorial
kind: theorem
title: "A homomorphism induces a continuous homomorphism of profinite completions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-universal-property-of-profinite-completion,
       def-profinite-completion-of-an-abstract-group,
       def-canonical-map-to-the-profinite-completion,
       thm-continuity-into-an-inverse-limit-is-coordinatewise]
proof_strategy: "direct"
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

A group homomorphism induces a continuous homomorphism of profinite
completions, and these induced maps respect identities and compositions.

## Facts & Assumptions

**Given:** A homomorphism $f:G\to H$.

[L1] The profinite completion satisfies the universal property with respect to continuous maps into profinite groups ([[thm-universal-property-of-profinite-completion]]).

[F1] The completion $\widehat H$ is the inverse limit of the finite discrete quotients of $H$, hence is a profinite topological group, and $\iota_H$ is its canonical map ([[def-profinite-completion-of-an-abstract-group]], [[def-canonical-map-to-the-profinite-completion]]).

[L2] A map into an inverse limit is continuous exactly when all its coordinate composites are continuous ([[thm-continuity-into-an-inverse-limit-is-coordinatewise]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $\widehat H$ is a profinite topological group. [F1, given]

2.1 Fix a finite-index normal subgroup $N\trianglelefteq H$. The kernel of the coordinate map $G\xrightarrow{f}H\to H/N$ is $f^{-1}(N)$, and the induced map $G/f^{-1}(N)\to H/N$ is injective. Thus $f^{-1}(N)$ is finite-index normal in $G$. Every fibre of the coordinate map is a coset of this open subgroup, so the coordinate map to the finite discrete group $H/N$ is continuous. Since this holds for every coordinate, [L2] makes $\iota_H\circ f:G\to\widehat H$ continuous for the profinite topology on $G$. [F1, L2, step 1.1, algebra]

3.1 Apply [L1] to the continuous homomorphism from step 2.1. It gives a unique continuous homomorphism $$\widehat f:\widehat G\to\widehat H$$ satisfying $\widehat f\circ\iota_G=\iota_H\circ f$. [L1, step 1.1, step 2.1, construct]

4.1 If $f=\operatorname{id}_G$, then both $\widehat f$ and $\operatorname{id}_{\widehat G}$ compose with $\iota_G$ to give $\iota_G$. Uniqueness in [L1] therefore forces $\widehat{\operatorname{id}_G}=\operatorname{id}_{\widehat G}$. [L1, step 3.1]

5.1 For homomorphisms $G\xrightarrow{f}H\xrightarrow{g}K$, both $\widehat g\circ\widehat f$ and $\widehat{g\circ f}$ compose with $\iota_G$ to give $\iota_K\circ g\circ f$. Uniqueness in [L1] again yields $$\widehat{g\circ f}=\widehat g\circ\widehat f.$$ So profinite completion is functorial. [L1, step 3.1, algebra] ∎
