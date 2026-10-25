---
id: thm-order-raising-recursive-specifications-have-unique-solutions
kind: theorem
title: "An order-raising recursive specification has a unique solution"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-combinatorial-specification-and-order-raising-recursion, thm-x-adic-completeness-and-polynomial-density, lem-formal-order-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, and let

$$F : R\llbracket x\rrbracket \to R\llbracket x\rrbracket$$

satisfy

$$\operatorname{ord}_x(F(f)-F(g)) \ge \operatorname{ord}_x(f-g)+1$$

for all formal series $f,g$. Then there is a unique formal series $y$ with
$F(y)=y$.

Equivalently, once a commutative coefficient ring is fixed, every order-raising
recursive specification has a unique generating-function solution.

## Facts & Assumptions

**Given:** A commutative ring $R$ and an operator $F : R\llbracket x\rrbracket \to R\llbracket x\rrbracket$ satisfying the displayed order-raising inequality.

[L1] Formal order is non-Archimedean under sums: in particular, $\operatorname{ord}_x(f+g) \ge \min(\operatorname{ord}_x f,\operatorname{ord}_x g)$ ([[lem-formal-order-laws]]).

[L2] Every $x$-adically Cauchy sequence in $R\llbracket x\rrbracket$ has a unique $x$-adic limit ([[thm-x-adic-completeness-and-polynomial-density]]).

## Proof

**Proof technique:** direct.

1.1 Define a sequence by $f_0:=0$ and $f_{j+1}:=F(f_j)$. Then $\operatorname{ord}_x(f_{j+1}-f_j) \ge j$ for every $j$: the case $j=0$ is automatic, and if it holds at $j$ then $\operatorname{ord}_x(f_{j+2}-f_{j+1}) = \operatorname{ord}_x(F(f_{j+1})-F(f_j)) \ge \operatorname{ord}_x(f_{j+1}-f_j)+1 \ge j+1$. [given]

2.1 For $p>q$, write $f_p-f_q = (f_p-f_{p-1}) + \cdots + (f_{q+1}-f_q)$. Step 1.1 and [L1] give $\operatorname{ord}_x(f_p-f_q) \ge q$, so $(f_j)$ is $x$-adically Cauchy. [step 1.1, L1]

3.1 By [L2], the sequence $(f_j)$ has a unique $x$-adic limit; call it $y$. [step 2.1, L2, choose]

4.1 The order-raising hypothesis applied to $f_j$ and $y$ gives $\operatorname{ord}_x(F(f_j)-F(y)) \ge \operatorname{ord}_x(f_j-y)+1$, so $F(f_j) \to F(y)$ in the $x$-adic topology. But $F(f_j)=f_{j+1}$, and $f_{j+1} \to y$ as well, hence $F(y)=y$. [step 3.1, given]

5.1 If $z$ is another fixed point and $z \ne y$, put $p := \operatorname{ord}_x(y-z)$. Then $p = \operatorname{ord}_x(F(y)-F(z)) \ge p+1$, impossible. Hence $z=y$. [step 4.1, given, assume-contra, discharge-contradiction]

6.1 Step 4.1 gives existence of a fixed point and step 5.1 gives uniqueness, so the recursive specification has exactly one solution. [step 4.1, step 5.1] ∎
