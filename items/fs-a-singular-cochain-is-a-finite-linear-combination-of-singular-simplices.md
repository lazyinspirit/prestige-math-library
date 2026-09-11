---
id: "fs-a-singular-cochain-is-a-finite-linear-combination-of-singular-simplices"
kind: "false-statement"
title: "A singular cochain is a finite linear combination of singular simplices"
deps: ["def-continuous-singular-simplex-and-real-singular-chain-group", "def-real-singular-cochain-complex"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 false-statement inventory; exact refutation or unresolved wording recorded in proof_plan"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Every real singular cochain is a finite linear combination of singular simplices; equivalently, after using the simplex-indexed coordinate functions, every cochain has finite support.

## Facts & Assumptions

**Given:** Let $X=\mathbb N$ with the discrete topology and work in degree zero.

[F1] Chains are finitely supported real functions on the simplex set ([[def-continuous-singular-simplex-and-real-singular-chain-group]]).

[F2] Cochains are real-linear functionals on chains ([[def-real-singular-cochain-complex]]).

## Proof

1.1 Vertices of $X$ are exactly its natural numbers. Define $\varphi(\sum_{n\in F}a_n[n])=\sum_{n\in F}a_n$ for a finite set $F$. The coordinate description [F1] makes this independent of adding zero coefficients or rewriting a finite chain, and distributivity makes it real-linear. Thus [F2] makes $\varphi$ a legitimate zero-cochain. It takes value one at every vertex. [given, F1, F2, algebra]

2.1 A finite linear combination of coordinate functionals $\epsilon_n$, where $\epsilon_n([m])=1$ if $m=n$ and zero otherwise, vanishes outside a finite index set. Our $\varphi$ does not: for nonempty finite $F$ take $m=1+\max F$, and for empty $F$ take $m=0$. Then $\varphi([m])=1$ but every such finite combination evaluates to zero. Hence the finite-support interpretation fails. Literally simplices generate chains, not the dual space; even the charitable coordinate-functional interpretation is false. [F1, F2, step 1.1, algebra]

3.1 Evaluation on the zero chain is zero, although every basis value is one. A one-point target has only one vertex and therefore does not give this degree-zero witness; the infinite specified vertex set is essential. Negative degrees are zero, and the empty target has zero cochains. No degeneracy or endpoint quotient is used in degree zero, and no infinite sum of coefficients is ever evaluated. The construction is choice-free. [F1, F2, step 1.1, step 2.1] ∎
