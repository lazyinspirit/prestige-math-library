---
id: prop-arithmetized-formula-counting-sum
kind: proposition
title: "Verifying formula counts over a supplied field"
status: draft
origin: pipeline
deps: [lem-arithmetization-agrees-on-boolean-inputs, lem-formula-arithmetization-degree-and-evaluation-cost, thm-sum-check-soundness, lem-sum-check-verifier-is-polynomial-time-given-point-evaluation]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct calculation
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a78.5.1\u20138.5.2, Theorem 8.18 proof pp.158\u2013160 (field supplied variant)"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $\varphi$ have $s\geq1$ syntax nodes and $n\geq1$ variables, with $t_i$ occurrences of $x_i$. Over any supplied finite field $F$, its polynomial satisfies
$$\sum_{b\in\{0,1\}^n}P_\varphi(b)=M\,1_F,$$
where $M\in\{0,\ldots,2^n\}$ is the number of satisfying assignments. With the formula-tree evaluator and bounds $d_i=t_i$, sum-check has perfect completeness and soundness at most $\min(1,\sum_i t_i/|F|)$, using $O(s+n)$ verifier field operations, including evaluation.

If $F=\mathbb F_p$ is a supplied prime field with $p>2^n$, then for every integer $0\leq K\leq2^n$,
$$K\,1_F=\sum_bP_\varphi(b)\quad\Longleftrightarrow\quad K=M.$$
The field and its implementation are inputs. Large extension-field cardinality alone does not guarantee this integer equivalence.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Every Boolean evaluation of the formula polynomial equals its Boolean truth value embedded in F ([[lem-arithmetization-agrees-on-boolean-inputs]]).

[F2] Individual degrees are bounded by occurrence counts and point evaluation costs O(s) field operations ([[lem-formula-arithmetization-degree-and-evaluation-cost]]).

[F3] With trusted individual bounds, false-claim acceptance is at most min(1,sum_i d_i/|F|) ([[thm-sum-check-soundness]]).

[F4] The verifier uses O(D) field operations plus one point evaluation, where D=sum_i(d_i+1) ([[lem-sum-check-verifier-is-polynomial-time-given-point-evaluation]]).

## Proof

1.1 Each satisfying Boolean input contributes $1_F$ and each other input contributes $0_F$ by Boolean agreement. Adding the $2^n$ values gives $M1_F$, including $M=0$ and $M=2^n$. [F1, algebra]

1.2 The formula degree lemma supplies the individual bounds $t_i$ and an $O(s)$ point evaluator. Since $\sum_i t_i\leq s$, we have $D=n+\sum_i t_i\leq n+s$; the verifier resource lemma therefore gives $O(s+n)$ field operations including that evaluator. [F2, F4, algebra]

2.1 The soundness theorem gives the stated false-claim error bound with $d_i=t_i$. For a true claim the honest partial sums have these degree bounds, their values at $0,1$ sum to the preceding true value, and their value at each challenge is the next true value. Starting from $M1_F$, these identities propagate to the terminal value, so every honest execution accepts. [F3, step 1.1, step 1.2, algebra]

3.1 If $K=M$, their field images are equal, proving the reverse implication. Conversely, equality of the images in $\mathbb F_p$ implies $p$ divides $K-M$. As $|K-M|\leq2^n<p$, the only possible multiple is zero, so $K=M$. This includes both allowed endpoints for each count. In a field of characteristic $p$ the integer image depends on reduction modulo $p$, regardless of the field cardinality; for example a constant-one formula on one variable has count two and field sum zero in characteristic two. [step 1.1, given, algebra] ∎
