---
id: ex-clique-is-np-complete
kind: example
title: "A worked clause-cluster instance witnessing that CLIQUE is NP-complete"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-clique-independent-set-and-vertex-cover-problems, thm-three-sat-reduces-to-clique, cor-clique-is-np-complete]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
verification:
  precheck: pass
---

## Example

Consider the formula
$$ \varphi=(x\lor y\lor z)\land(\neg x\lor y\lor z)\land(x\lor \neg y\lor z). $$

Form a graph with one vertex for each of the nine displayed literal
occurrences. Join two vertices exactly when they come from different clauses
and their literal labels are not complementary.

## Facts & Assumptions

**Given:** The above $3$-CNF formula $\varphi$.

[F1] A CLIQUE instance asks for $k$ pairwise adjacent vertices, by [[def-clique-independent-set-and-vertex-cover-problems]].

[L1] The reduction theorem states that the clause-occurrence construction gives a CLIQUE yes-instance exactly when the input formula is satisfiable, by [[thm-three-sat-reduces-to-clique]].

[L2] CLIQUE is NP-complete, by [[cor-clique-is-np-complete]].

## Verification

**Proof technique:** direct.

1.1 In the graph defined in the example, choose the vertices labeled by the literal $z$ in the first, second, and third clauses. These occurrences come from different clauses and no two are complementary, so every pair is adjacent. Thus they form a clique of size $3$. [F1, given, construct]

2.1 The assignment $z=1$ satisfies all three clauses of $\varphi$, so the explicitly constructed clique agrees with the iff asserted by [L1]. This concrete yes-instance therefore illustrates the reduction theorem and, through [L2], the NP-completeness conclusion for CLIQUE. [L1, L2, step 1.1] ∎
