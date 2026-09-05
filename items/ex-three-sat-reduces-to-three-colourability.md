---
id: ex-three-sat-reduces-to-three-colourability
kind: example
title: "A small 3SAT instance and its three-colourability gadget graph"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-three-colourability, thm-three-sat-reduces-to-three-colourability]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John E. Savage, Models of Computation, Chapter 8"
      url: "https://cs.brown.edu/people/jsavage/book/pdfs/ModelsOfComputation_Chapter8.pdf"
verification:
  precheck: pass
---

## Example

Take the one-clause formula
$$ \varphi=(x\lor y\lor z). $$
The reduction introduces the global variable $w$ and one fresh splitter
variable $s$, producing the NAE clauses
$$ N_1=NAE(x,y,s), \qquad N_2=NAE(\neg s,z,w). $$

## Facts & Assumptions

**Given:** The satisfying assignment $x=1$, $y=0$, $z=0$, together with $w=0$
and $s=0$.

[F1] A proper three-colouring uses the colours $0,1,2$ and forbids equal colours on adjacent vertices, by [[def-three-colourability]].

[L1] The reduction to $3$-COLORABILITY first converts a $3$-CNF clause to NAE clauses and then builds one variable triangle per variable and one clause triangle per NAE clause, by [[thm-three-sat-reduces-to-three-colourability]].

## Verification

**Proof technique:** direct.

1.1 Under the given assignment, both NAE clauses are satisfied: $(x,y,s)=(1,0,0)$ is not all equal, and $(\neg s,z,w)=(1,0,0)$ is not all equal. [L1, given]

2.1 Define the graph directly: take a distinguished vertex $\nu$; for each variable $u\in\{x,y,z,w,s\}$ add the triangle $(u,\neg u,\nu)$; for each of the two ordered NAE clauses add a triangle of three position vertices and join its $r$th vertex to the literal vertex in position $r$. Colour $\nu$ by $2$. In the variable triangles, colour each literal vertex by its Boolean value, so $x,\neg x$ receive $1,0$, $y,\neg y$ receive $0,1$, $z,\neg z$ receive $0,1$, $w,\neg w$ receive $0,1$, and $s,\neg s$ receive $0,1$. [F1, step 1.1, construct]

3.1 For the clause triangle for $N_1$, the literals $x$ and $y$ have different truth values, so colour their two position vertices by the opposite colours $0$ and $1$, and colour the remaining position vertex by $2$. Do the same for $N_2$. Every clause triangle then uses $0,1,2$, and each clause vertex differs from the colour of its adjacent literal vertex. Thus the explicitly defined graph is properly three-coloured. [F1, step 2.1, construct]

4.1 This worked instance shows concretely how the theorem's NAE assignment is converted into a proper three-colouring. [L1, step 1.1, step 3.1] ∎
