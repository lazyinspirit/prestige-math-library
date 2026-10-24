---
id: thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple
kind: theorem
title: "For a finite-dimensional algebra, the Jacobson radical is nilpotent and the quotient by it is semisimple"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobson-radical-of-a-finite-dimensional-algebra, def-simple-module, def-semisimple-ring]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $A$ be a finite-dimensional algebra over a field and let $J=J(A)$. Then
$J$ is nilpotent, and the quotient algebra $A/J$ is semisimple.

## Facts & Assumptions

**Given:** A finite-dimensional algebra $A$ and its Jacobson radical $J=J(A)$.

[F1] The Jacobson radical is the intersection of the maximal left ideals ([[def-jacobson-radical-of-a-finite-dimensional-algebra]]).

[L1] A strict chain of submodules of a finite-dimensional module strictly changes vector-space dimension, so ascending and descending chains are finite. A composition series can be built by repeatedly choosing a nonzero submodule of least positive dimension in a quotient; each choice is from a finite set of possible dimensions. [algebra]

[L2] Every nonzero finite-dimensional module has a maximal proper submodule: among proper submodules choose one with largest vector-space dimension; $0$ ensures the candidate dimensions are nonempty, and strict containment would increase dimension. [algebra]

[L3] A simple module is a nonzero module with no proper nonzero submodule ([[def-simple-module]]).

[L4] A unital ring is semisimple when its left regular module is semisimple ([[def-semisimple-ring]]).

## Proof

**Proof technique:** direct.

1.1 The left regular module ${}_A A$ is finite-dimensional, so [L1] makes the descending chain $A\supseteq J\supseteq J^2\supseteq\cdots$ stabilize: choose $n$ with $J^n=J^{n+1}$. If $J^n\ne0$, [L2] gives a maximal submodule $N$ of the finite-dimensional left $A$-module $J^n$, so $S=J^n/N$ is simple by [L3]. For every nonzero $s\in S$, the map $A\to S$, $a\mapsto as$, is onto; its kernel is a maximal left ideal, hence contains $J$ by [F1]. Thus $Js=0$ for every $s$, so $JS=0$ and $J^{n+1}=JJ^n\subseteq N$, contradicting $J^{n+1}=J^n$. Therefore $J^n=0$, so $J$ is nilpotent. [F1, L1, L2, L3, given, algebra]

1.2 Maximal left ideals of $A/J$ are exactly the quotients $L/J$ with $L$ a maximal left ideal of $A$ containing $J$, so their intersection is $0$ by [F1]. Let $M={}_{A/J}(A/J)$ be the left regular module. It is finite-dimensional. We prove by induction on vector-space dimension that any finite-dimensional module whose maximal submodules intersect trivially is semisimple. If $M=0$ there is nothing to prove. Otherwise choose a nonzero submodule $S\le M$ of least positive dimension, so $S$ is simple. Since the intersection of maximal submodules is $0$, some maximal submodule $N$ does not contain $S$. Then $S\cap N=0$, and maximality makes $(S+N)/N$ a nonzero submodule of the simple quotient $M/N$, so $M=S\oplus N$. For any nonzero $x\in N$, choose a maximal submodule $L$ of $M$ avoiding $x$. The image of $N$ in the simple module $M/L$ is nonzero and hence all of $M/L$, so $N\cap L$ is a maximal submodule of $N$ avoiding $x$. Thus the maximal submodules of $N$ also intersect trivially. Its dimension is smaller than that of $M$, so induction makes $N$ semisimple, hence so is $M$. [F1, L1, L2, L3, given, induction]

2.1 By step 1.2, the left regular module of $A/J$ is semisimple. Thus [L4] makes the quotient algebra $A/J$ semisimple. Together with step 1.1, this proves the theorem. [L4, step 1.1, step 1.2] ∎
