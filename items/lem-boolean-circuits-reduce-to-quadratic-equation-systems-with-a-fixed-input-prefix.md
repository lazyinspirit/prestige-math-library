---
id: lem-boolean-circuits-reduce-to-quadratic-equation-systems-with-a-fixed-input-prefix
kind: lemma
title: "Boolean circuits become quadratic systems with a fixed input prefix"
status: draft
origin: pipeline
deps:
  - def-quadratic-equation-instance-and-tensor-code-oracles
  - def-boolean-circuit-size-depth-fanin-and-basis
  - def-circuit-sat
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.3, proof of Corollary 18.25, printed p. 368; §18.4.2, QUADEQ encoding, printed pp. 365–366"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
---

## Statement

Let $C$ be an explicit topologically ordered Boolean circuit with $s$ input
wires, a designated prefix of $n$ inputs where $0\le n\le s$, and $m$
non-input nodes. Each non-input node is a constant $0$ or $1$, a NOT gate, or
a two-input AND or OR gate; represented constant nodes count among the $m$
nodes. Its output is one of the resulting $s+m$ wires. There is a deterministic
polynomial-time construction of a QUADEQ instance over $\mathbb F_2$ with
$N=s+m$ wire variables and $m+1$ equations, each with at most four monomials.
The variables are ordered with the $s$ input wires first and the non-input
nodes next in topological order, so the named inputs are the first $n$
variables. For every $x\in\mathbb F_2^n$, fixing those first $n$ variables to
$x$ extends to a solution of the QUADEQ instance if and only if there is a
completion $y\in\mathbb F_2^{s-n}$ such that $C(x,y)=1$.

## Facts & Assumptions

**Given:** A valid circuit as in the statement and the fixed named-prefix
assignment $x$.

[F1] In the canonical QUADEQ encoding, constants are moved to the right-hand
side, repeated monomials cancel in $\mathbb F_2$, and a linear term $w_i$ is
represented by the diagonal monomial $w_i^2$. ([[def-quadratic-equation-instance-and-tensor-code-oracles]])

[F2] A Boolean circuit is a finite directed acyclic graph with input wires,
constants, NOT/AND/OR gates, a designated output, and evaluation in topological
order. ([[def-boolean-circuit-size-depth-fanin-and-basis]])

[F3] Circuit satisfiability asks whether some input assignment makes the
designated output one. ([[def-circuit-sat]])

## Proof

1.1 Number the $s$ primary input wires first, then number the $m$ remaining nodes in topological order, and associate a variable $w_i$ to each wire. Thus $N=s+m$, and fixing $w_1,\ldots,w_n$ to $x$ fixes exactly the named prefix; the other primary input variables remain available for the completion. [F2, given, construct]

2.1 For a constant node with variable $z$ and value $c$, impose $z=c$; for a NOT node with input $a$ impose $z+a=1$; for an AND node with inputs $a,b$ impose $z+ab=0$; and for an OR node impose $z+a+b+ab=0$. These equations force exactly the indicated Boolean operation: in particular $a\lor b=a+b+ab$ for bits. They remain valid when the two input wires coincide, after reducing repeated monomials using $a^2=a$ in $\mathbb F_2$. Append the output equation $w_{\mathrm{out}}=1$. There are $m+1$ equations, each with at most four monomials. Using [F1], place each linear term on its diagonal tensor coordinate, each quadratic term on its upper-triangular coordinate, and each constant on the right-hand side; this gives a canonical QUADEQ instance. [F1, F2, step 1.1, algebra]

3.1 Suppose a solution extends the prefix $x$. Its next $s-n$ coordinates define a completion $y$. The gate equations in step 2.1, read in topological order, force every non-input wire to equal its evaluated circuit value, and the output equation forces $C(x,y)=1$. [F2, F3, step 2.1, algebra]

3.2 Conversely, suppose some completion $y$ makes $C(x,y)=1$. Set the first $s$ variables to $(x,y)$ and set every remaining variable to the value of its node under the circuit evaluation. Each constant or gate equation in step 2.1 then holds by its defining Boolean operation, and the output equation holds because the output is one. This constructs a QUADEQ solution extending $x$, proving the reverse implication. [F2, F3, step 2.1, construct, algebra]

4.1 The construction lists one constant-size equation per node and one output equation. Writing each of the $m+1$ coefficient matrices with $N^2$ entries takes $O((m+1)N^2)$ time; since the explicit description lists all $s+m=N$ wires, this is polynomial in its length. The equations themselves have the claimed bound from step 2.1. The construction uses only the topological order and fixed gate formulas, so it is deterministic. [F1, F2, step 2.1, discharge-construct, algebra] ∎
