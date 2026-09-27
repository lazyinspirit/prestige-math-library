---
id: cor-clique-is-np-complete
kind: corollary
title: "CLIQUE is NP-complete"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-three-sat-reduces-to-clique, def-clique-independent-set-and-vertex-cover-problems, def-np-hard-and-np-complete, thm-three-sat-is-np-complete]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Fabrizio Iozzi and Luca Trevisan, Handout NP3"
      url: "https://lucatrevisan.github.io/30540/notes-np3.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

CLIQUE is NP-complete.

## Facts & Assumptions

**Given:** An arbitrary CLIQUE instance $(G,k)$.

[L1] The previous theorem gives a polynomial-time many-one reduction from $3$-SAT to CLIQUE, by [[thm-three-sat-reduces-to-clique]].

[L2] The language $3$-SAT is NP-complete, by [[thm-three-sat-is-np-complete]].

[L3] A language is NP-complete exactly when it is NP-hard and belongs to $NP$, by [[def-np-hard-and-np-complete]].

[F1] A yes-instance of CLIQUE consists of a graph with $k$ pairwise adjacent chosen vertices, by [[def-clique-independent-set-and-vertex-cover-problems]].

## Proof

**Proof technique:** direct.

1.1 A certificate for $(G,k)\in CLIQUE$ is a list of $k$ vertices. One checks in polynomial time that the listed vertices are distinct and that every pair is adjacent, so CLIQUE lies in $NP$. [F1, given, construct]

1.2 Because [L2] says that $3$-SAT is NP-complete, every language in $NP$ reduces to $3$-SAT. Composing any such reduction with the fixed reduction [L1] shows that every language in $NP$ reduces to CLIQUE. Hence CLIQUE is NP-hard. [L1, L2, L3]

2.1 Step 1.1 gives CLIQUE $\in NP$, and step 1.2 gives NP-hardness. Therefore CLIQUE is NP-complete by [L3]. [L3, step 1.1, step 1.2] ∎
