---
id: "def-primitive-recursive-functions-by-initial-functions-and-schemes"
kind: "definition"
title: "Primitive recursive functions by initial functions and schemes"
status: published
origin: "pipeline"
deps: ["def-natural-numbers", "thm-recursion"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gallier §1.7–§1.8 (recovery edition); local parameter-recursion construction"
      url: https://www.cis.upenn.edu/~cis5110/notes/tcbook-comp.pdf
proof_strategy: "direct"
---

## Definition

For each arity $k\ge0$, primitive recursive functions are total maps $\mathbb N^k\to\mathbb N$ given by finite derivation trees from the following rules. The empty tuple is the unique element of $\mathbb N^0$.

The initial functions are zero (in every arity), successor $S(x)=x+1$, and projections $P_i^k(x_1,\ldots,x_k)=x_i$ for $1\le i\le k$. Composition forms $h(g_1(\mathbf a),\ldots,g_r(\mathbf a))$ from an $r$-ary $h$ and $k$-ary $g_i$; $r=0$ gives the constant value of $h$. Primitive recursion forms the $(k+1)$-ary function
$$f(\mathbf a,0)=g(\mathbf a),\qquad f(\mathbf a,y+1)=h(\mathbf a,y,f(\mathbf a,y))$$
from a $k$-ary $g$ and a $(k+2)$-ary $h$. In particular $k=0$ is allowed. This finite-tree definition is the least arity-indexed class closed under the rules: every closed class contains the value of each tree, by induction on the tree's finite depth.

A predicate is primitive recursive when its characteristic function, with true represented by $1$ and false by $0$, is primitive recursive. This is a definition by the displayed schemes, not by computability or unbounded search.

## Facts & Assumptions

**Given:** Initial functions and the two schemes above, on the naturals of [[def-natural-numbers]]. No choice axiom is assumed.

[F1] Recursion on naturals with an initial point in a set and a total successor operation has a unique total solution ([[thm-recursion]]).

## Verification

1.1 For total $g,h$, fix $\mathbf a$. On $\mathbb N\times\mathbb N$ set $A_0=(0,g(\mathbf a))$ and $H_{\mathbf a}(y,z)=(y+1,h(\mathbf a,y,z))$. Recursion produces a unique sequence $A_y$. Its first coordinate is $y$: it is zero initially and increments at each step. Its second coordinate therefore satisfies exactly the two equations defining $f(\mathbf a,y)$. [F1, given]

2.1 If another function satisfied those equations, its pairs $(y,f(\mathbf a,y))$ would be the same unique recursion solution. Thus each parameter tuple and each $y$ have exactly one value. Define the parameterized graph by that unique-solution property inside $\mathbb N^{k+1}\times\mathbb N$; this is not a choice of solutions from possibly many witnesses. Composition of total functions is total, and the initial functions are total. Applying these observations successively at the finitely many nodes of a derivation tree proves totality of its denoted function. Empty parameter tuples and nullary constants obey the same construction. [step 1.1, F1, given] ∎
