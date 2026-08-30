---
id: lem-holomorphic-logarithms-for-two-omitted-values
kind: lemma
title: "Disc functions omitting 0 and 1 admit holomorphic logarithms for f and 1-f"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-star-shaped-plane-domains-are-homologically-simply-connected, thm-holomorphic-logarithms-homologically-simply-connected-domains]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, §6.3"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement

Let $f:\mathbb D\to\mathbb C$ be holomorphic and omit $0$ and $1$. Then there
exist holomorphic functions $F,G:\mathbb D\to\mathbb C$ such that

$$e^F=f,\qquad e^G=1-f.$$

## Facts & Assumptions

**Given:** A holomorphic map $f:\mathbb D\to\mathbb C\setminus\{0,1\}$.

[L1] The unit disc is homologically simply connected ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]]).

[L2] On a homologically simply connected complex domain, every holomorphic nowhere-zero function has a holomorphic logarithm ([[thm-holomorphic-logarithms-homologically-simply-connected-domains]]).

## Proof

**Proof technique:** direct.

1.1 Both $f$ and $1-f$ are holomorphic and nowhere zero on $\mathbb D$. Fact [L1] makes $\mathbb D$ homologically simply connected. [L1, given]

2.1 Applying [L2] first to $f$ and then to $1-f$ gives holomorphic logarithms $F$ and $G$ with $e^F=f$ and $e^G=1-f$. [L2, step 1.1] ∎
