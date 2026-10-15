---
id: ex-tdmath-reference-order-two-state
kind: example
title: Two-state reference order
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps: [def-tdmath-tagged-scalable-compound, def-tdmath-comparison-and-stability, def-tdmath-signed-comparison, lem-tdmath-reference-order]
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  def-tdmath-signed-comparison: mathematical-premise
  lem-tdmath-reference-order: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Lemma 2.2"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
---

## Example

Let $a,b$ be distinct state tags and $X=\{a,b\}$. For equal-mass nonnegative compounds $c,d$, define $c\preceq d$ exactly when $c(b)\le d(b)$. For signed unit-mass reference maps $R_\lambda=(1-\lambda)e_a+\lambda e_b$, the order is strict from $a$ to $b$ and gives the full real-parameter reference ordering.

## Facts & Assumptions

[A1] The example's comparison rule: on equal-mass compounds, $c\preceq d$ iff the coefficient of $b$ in $c$ is at most that in $d$.

[F1] [[def-tdmath-comparison-and-stability]]: the required comparison axioms are the preorder, consistency, positive scaling, splitting, stability and CH listed in its Definition.

[F2] [[lem-tdmath-reference-order]]: a strict reference pair orders every real-parameter signed reference map by its parameter.

## Verification

**Given:** [A1] and $a,b$ as distinct tags.

1.1 Reflexivity and transitivity follow from those properties of $\le$ on the $b$ coefficient, and CH follows because $\le$ is total. Adding a common compound adds the same $b$ coefficient to each side, so consistency holds. Multiplying both coefficients by $t>0$ preserves the inequality. Splitting a state coefficient into two positive parts preserves the total coefficient of $b$, so splitting/recombination gives equivalence. Finally $e_a\preceq e_b$ because $0\le1$, while $e_b\npreceq e_a$ because $1\nleq0$. [A1, F1]

1.2 For stability, suppose $A+\epsilon_n Z_0\preceq B+\epsilon_n Z_1$ for every $n$, with $\epsilon_n\to0$ and fixed positive $Z_0,Z_1$. If $A(b)>B(b)$, let $\delta=A(b)-B(b)>0$ and $q:=|Z_0(b)-Z_1(b)|$. If $q=0$, every perturbed difference remains $\delta>0$; if $q>0$, choose $n$ with $\epsilon_n q<\delta$. In either case some perturbed $b$-coefficient difference is positive, contradicting the assumed comparison. Thus $A(b)\le B(b)$, which is $A\preceq B$. [A1, F1]

2.1 The reference pair $x_0=a,x_1=b$ is strict by step 1.1. Therefore [F2] applies and yields $R_\lambda\preceq_sR_\mu$ iff $\lambda\le\mu$ for all real $\lambda,\mu$, including parameters outside $[0,1]$. The signed parameters are handled by the signed comparison definition, not by treating $R_\lambda$ as a nonnegative compound. [F2, step 1.1] ∎

