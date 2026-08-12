---
id: lem-potentials-glue-over-a-path-connected-overlap
kind: lemma
title: "Potentials glue after a constant adjustment over a nonempty path-connected overlap"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-potentials-differ-by-a-componentwise-constant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 9.3"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
pipeline_run: null
---

## Statement

Let $U_1,U_2\subseteq\mathbb R^n$ be open, with nonempty piecewise-$C^1$ path-connected intersection. Suppose $F:U_1\cup U_2\to\mathbb R^n$ has $C^1$ potentials $\phi_i$ on $U_i$. Then there is a constant $C$ such that

$$\phi(x):=\begin{cases}\phi_1(x),&x\in U_1,\\ \phi_2(x)+C,&x\in U_2.\end{cases}$$

is a well-defined $C^1$ potential for $F$ on $U_1\cup U_2$.

## Facts & Assumptions
**Given:** The two open sets, field, potentials, and overlap in the Statement.

[L1] Two potentials of the same field differ by a constant on each piecewise-$C^1$ path component of their common domain ([[cor-potentials-differ-by-a-componentwise-constant]]).



## Proof

**Proof technique:** direct.

1.1 On $U_1\cap U_2$, both gradients equal $F$. Since this intersection is nonempty and piecewise-$C^1$ path-connected, [L1] gives a single constant $C$ such that $\phi_1-\phi_2=C$ throughout the overlap. [given, L1]

2.1 Therefore the two clauses in the displayed definition of $\phi$ agree at every point of $U_1\cap U_2$, so $\phi$ is well-defined. [step 1.1, algebra]

3.1 Every point of $U_1\cup U_2$ has a neighbourhood on which $\phi$ equals either the $C^1$ function $\phi_1$ or the $C^1$ function $\phi_2+C$. Hence $\phi$ is $C^1$ on the union. [given, step 2.1]

4.1 On those same neighbourhoods, $\nabla\phi$ equals $\nabla\phi_1=F$ or $\nabla(\phi_2+C)=F$. Thus $\nabla\phi=F$ on all of $U_1\cup U_2$. [given, step 3.1, algebra]

5.1 Steps 2.1, 3.1, and 4.1 prove the gluing assertion. Nonemptiness permits a comparison constant, and path-connectedness makes one adjustment valid on the whole overlap. [step 2.1, step 3.1, step 4.1] ∎
