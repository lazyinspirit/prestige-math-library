---
id: cex-an-algebraic-complement-need-not-be-topological
kind: counterexample
title: "An algebraic complement need not be a topological complement"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complemented-subspace]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Hamel basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hamel_basis"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://math.jhu.edu/~sire/brezis.pdf"
pipeline_run: frontier-28
---

## Statement refuted

**Refuted claim:** every algebraic direct-sum decomposition of a normed space is
automatically a topological direct sum.

Assume the Axiom of Choice and fix a Hamel basis $\mathcal H$ of $c_0$
containing all standard unit vectors $e_n$. Let $M:=\operatorname{span}\{e_0\}$,
let $W$ be the kernel of the linear map $P:c_0\to M$ defined on basis vectors by

$$P(e_0)=e_0,\qquad P(e_n)=n e_0 \text{ for } n \ge 1,\qquad P(h)=0 \text{ for } h \in \mathcal H \setminus \{e_n:n\ge0\},$$

and extend linearly. Then $c_0=M\oplus W$ algebraically, but $W$ is not a
topological complement of $M$.

## Facts & Assumptions

**Given:** The normed space $c_0$, the Hamel basis $\mathcal H$, the one-dimensional subspace $M=\operatorname{span}\{e_0\}$, and the algebraic projection $P$ above.

[L2] A topological complement is a direct-sum partner with bounded coordinate projections ([[def-complemented-subspace]]).

## Counterexample

**Proof technique:** direct.

1.1 By construction, $P$ is linear, $P^2=P$, and $\operatorname{ran}(P)=M$. So $W:=\ker P$ satisfies $c_0=M\oplus W$ algebraically: every vector decomposes as $Px+(x-Px)$, and the intersection is trivial because $P$ acts as the identity on $M$ and vanishes on $W$. [given, algebra]

2.1 The projection $P$ is not bounded for the supremum norm. Indeed, $u_n:=e_n/n$ satisfies $\|u_n\|_\infty=1/n \to 0$, while $P(u_n)=e_0$ for every $n \ge 1$, so $\|P(u_n)\|_\infty=1$. No bounded linear map can behave this way at $0$. [step 1.1]

3.1 Suppose, toward a contradiction, that $W$ were a topological complement of $M$. Then [L2] gives a bounded projection onto $M$ along $W$, and that projection is unique because the decomposition $x=m+w$ with $m \in M$, $w \in W$ determines the projection value $m$ pointwise. But $P$ already has exactly that range and kernel by step 1.1, so the bounded projection would have to equal $P$, contradicting step 2.1. [step 1.1, step 2.1, L2, assume-contra, discharge-contradiction]

4.1 Therefore $c_0=M\oplus W$ is an algebraic decomposition that is not a topological direct sum. This refutes the claim. [step 1.1, step 3.1] ∎

## Remarks

- The example is intentionally non-load-bearing: it uses a Hamel basis and therefore the Axiom of Choice.
- The point is not that complements are rare, but that boundedness of the coordinate projections is extra structure and must be stated.
