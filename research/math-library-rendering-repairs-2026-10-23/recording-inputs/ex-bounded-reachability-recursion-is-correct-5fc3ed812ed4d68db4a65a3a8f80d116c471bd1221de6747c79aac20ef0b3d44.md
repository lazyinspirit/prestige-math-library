---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-bounded-reachability-recursion-is-correct.json
  precheck: pass
id: ex-bounded-reachability-recursion-is-correct
kind: example
title: "A four-vertex digraph where the bounded reachability recursion finds a path via a midpoint"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-bounded-reachability-recursion, lem-bounded-reachability-recursion-is-correct]
proof_strategy: direct
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

[L1] The recursion $\operatorname{Reach}_i^G$ is defined by splitting at a midpoint ([[def-bounded-reachability-recursion|The bounded reachability recursion for directed paths of length at most $2^i$]]).

[L2] $\operatorname{Reach}_i^G(u,v)$ holds exactly when there is a path of length at most $2^i$ from $u$ to $v$ ([[lem-bounded-reachability-recursion-is-correct]]).

## Verification

**Proof technique:** direct.

1.1 The only directed path from $s$ to $t$ is $s\to a\to b\to t$, which has length $3$. Therefore [L2] gives $\operatorname{Reach}_1^G(s,t)$ false, because $2^1=2<3$. [L2, given]

2.1 Using midpoint $b$, [L1] reduces $\operatorname{Reach}_2^G(s,t)$ to $\operatorname{Reach}_1^G(s,b)$ and $\operatorname{Reach}_1^G(b,t)$. By [L2], the first holds because $s\to a\to b$ has length $2$, and the second holds because $b\to t$ has length $1$. Hence $\operatorname{Reach}_2^G(s,t)$ is true. [L1, L2, step 1.1]

3.1 This makes the divide-and-conquer structure concrete: one midpoint splits the length-$3$ path into two shorter subproblems, exactly as the recursion predicts. [step 2.1] ∎

## Remarks

The diagram displays exactly the three arcs of $G$; $b$ is the chosen recursive midpoint, not a new vertex. The two subpaths have lengths $2$ and $1$, each at most $2^1$, whereas the full path has length $3>2^1$. Thus they witness $\operatorname{Reach}_2^G(s,t)$ through $\operatorname{Reach}_1^G(s,b)$ and $\operatorname{Reach}_1^G(b,t)$. The verification above is independent of the illustration.

```tikz
\begin{tikzpicture}
\node[circle,draw] (s) at (0,0) {$s$};
\node[circle,draw] (a) at (2,0) {$a$};
\node[circle,draw,thick] (b) at (4,0) {$b$};
\node[circle,draw] (t) at (6,0) {$t$};
\draw[->] (s) -- (a);
\draw[->] (a) -- (b);
\draw[->] (b) -- (t);
\node at (4,0.65) {midpoint};
\node at (2,-0.85) {$\mathrm{Reach}_1^G(s,b)$};
\node at (2,-1.35) {length $2$};
\node at (5.3,-0.85) {$\mathrm{Reach}_1^G(b,t)$};
\node at (5.3,-1.35) {length $1$};
\end{tikzpicture}
```
