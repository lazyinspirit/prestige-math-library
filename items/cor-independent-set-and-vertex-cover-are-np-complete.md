---
id: cor-independent-set-and-vertex-cover-are-np-complete
kind: corollary
title: "INDEPENDENT SET and VERTEX COVER are NP-complete"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-clique-is-np-complete, thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible, def-clique-independent-set-and-vertex-cover-problems, def-np-hard-and-np-complete]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP3"
      url: "https://lucatrevisan.github.io/30540/notes-np3.pdf"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

INDEPENDENT SET and VERTEX COVER are NP-complete.

## Facts & Assumptions

**Given:** Arbitrary instances $(G,k)$ of INDEPENDENT SET and VERTEX COVER.

[L1] CLIQUE is NP-complete, by [[cor-clique-is-np-complete]].

[L2] CLIQUE, INDEPENDENT SET, and VERTEX COVER polynomial-time many-one reduce to one another, by [[thm-clique-independent-set-and-vertex-cover-are-polynomially-interreducible]].

[L3] A language is NP-complete exactly when it is NP-hard and belongs to $NP$, by [[def-np-hard-and-np-complete]].

[F1] INDEPENDENT SET asks for $k$ pairwise nonadjacent chosen vertices, and VERTEX COVER asks for at most $k$ vertices meeting every edge, by [[def-clique-independent-set-and-vertex-cover-problems]].

## Proof

**Proof technique:** direct.

1.1 A certificate for INDEPENDENT SET is a list of $k$ vertices, and one checks in polynomial time that no pair among them is adjacent. A certificate for VERTEX COVER is a list of at most $k$ vertices, and one checks in polynomial time that every edge has an endpoint in that list. Hence both problems lie in $NP$. [F1, given, construct]

1.2 Since [L1] makes CLIQUE NP-complete, every language in $NP$ reduces to CLIQUE. Applying the reductions from [L2] from CLIQUE to INDEPENDENT SET and from CLIQUE to VERTEX COVER shows that every language in $NP$ reduces to each of those target problems. Therefore both targets are NP-hard. [L1, L2, L3]

2.1 Combine step 1.1 with step 1.2 and [L3]. Both INDEPENDENT SET and VERTEX COVER are NP-complete. [L3, step 1.1, step 1.2] ∎
