---
id: ex-cfg-emptiness-and-finiteness-are-decidable
kind: example
title: "Running the emptiness and finiteness tests on small grammars"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cfg-emptiness-and-finiteness-are-decidable]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. Conrad Cunningham, CSci 311, Models of Computation, Chapter 8"
      url: "https://john.cs.olemiss.edu/~hcc/csci311/notes/chap08/ch08.html"
---

## Example

Use the three grammars

$$ G_{\emptyset}: S\to AB,\ A\to a,\ B\to bB, $$
$$ G_{\infty}: S\to A,\ A\to aAb\mid ab, $$
$$ G_{\mathrm{fin}}: S\to aA\mid b,\ A\to c\mid d. $$

## Facts & Assumptions

**Given:** The three displayed grammars.

[L1] By [[thm-cfg-emptiness-and-finiteness-are-decidable]], the emptiness and finiteness questions for CFG's are decidable by generating-variable and dependency-graph tests.

## Verification

**Proof technique:** direct.

1.1 In $G_{\emptyset}$, the variable $B$ never derives a terminal word, so the start symbol $S$ is not generating. The emptiness test from [L1] therefore reports $L(G_{\emptyset})=\varnothing$. [L1, given]

1.2 In $G_{\mathrm{fin}}$, the dependency graph is acyclic and the grammar generates exactly the three words $ac$, $ad$, and $b$. So the finiteness test from [L1] reports "finite" on this grammar. [L1, given]

2.1 In $G_{\infty}$, the variable $A$ lies on a productive cycle through the rule $A\to aAb$, so the dependency-graph test from [L1] reports infinitude. Indeed $L(G_{\infty})=\{a^n b^n:n\ge 1\}$ is infinite. [L1, step 1.1]

3.1 These three tiny inputs realize the empty, infinite, and finite outcomes of the theorem. [step 1.1, step 1.2, step 2.1] ∎
