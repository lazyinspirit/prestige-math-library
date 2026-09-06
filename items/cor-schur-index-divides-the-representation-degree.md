---
id: cor-schur-index-divides-the-representation-degree
kind: corollary
title: "The Schur index divides the representation degree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-character-of-an-irreducible-over-a-nonsplitting-field, def-schur-index-of-an-irreducible-character]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Corollary 2.5.6"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
---

## Statement

Let $\chi$ be an irreducible complex character, put $K=\mathbb Q(\chi)$, and
let $V$ be the irreducible $K$-representation used in
[[def-schur-index-of-an-irreducible-character]].  Then
$$m_K(\chi)\mid\dim_KV.$$

## Facts & Assumptions

**Given:** $\chi$, $K$, and $V$ as in the statement, together with a finite Galois splitting field $E/K$ inside $\mathbb C$.

[L1] $\dim_KV=m_K(\chi)\,[K(\chi):K],\chi(1)$ ([[thm-character-of-an-irreducible-over-a-nonsplitting-field]]).

## Proof

**Proof technique:** direct.

1.1 Since $K(\chi)=K$, [L1] gives $\dim_KV=m_K(\chi)\chi(1)$.  The integer $\chi(1)$ is positive, so this expresses $\dim_KV$ as an integer multiple of $m_K(\chi)$. [L1, algebra]

2.1 Hence $m_K(\chi)\mid\dim_KV$. [step 1.1] ∎
