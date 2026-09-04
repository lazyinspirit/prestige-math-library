---
id: ex-bounded-reachability-recursion-is-correct
kind: example
title: "A four-vertex digraph where the bounded reachability recursion finds a path via a midpoint"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-bounded-reachability-recursion, lem-bounded-reachability-recursion-is-correct]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
---

## Example

Let $G$ have vertices $\{s,a,b,t\}$ and arcs $s\to a$, $a\to b$, and $b\to t$. Then $\operatorname{Reach}_1^G(s,t)$ is false but $\operatorname{Reach}_2^G(s,t)$ is true, witnessed by the midpoint $b$.

## Facts & Assumptions

**Given:** the digraph $G$ above.

[L1] The recursion $\operatorname{Reach}_i^G$ is defined by splitting at a midpoint ([[def-bounded-reachability-recursion]]).

[L2] $\operatorname{Reach}_i^G(u,v)$ holds exactly when there is a path of length at most $2^i$ from $u$ to $v$ ([[lem-bounded-reachability-recursion-is-correct]]).

## Verification

**Proof technique:** direct.

1.1 The only directed path from $s$ to $t$ is $s\to a\to b\to t$, which has length $3$. Therefore [L2] gives $\operatorname{Reach}_1^G(s,t)$ false, because $2^1=2<3$. [L2, given]

2.1 Using midpoint $b$, [L1] reduces $\operatorname{Reach}_2^G(s,t)$ to $\operatorname{Reach}_1^G(s,b)$ and $\operatorname{Reach}_1^G(b,t)$. By [L2], the first holds because $s\to a\to b$ has length $2$, and the second holds because $b\to t$ has length $1$. Hence $\operatorname{Reach}_2^G(s,t)$ is true. [L1, L2, step 1.1]

3.1 This makes the divide-and-conquer structure concrete: one midpoint splits the length-$3$ path into two shorter subproblems, exactly as the recursion predicts. [step 2.1] ∎
