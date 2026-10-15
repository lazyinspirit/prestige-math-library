---
id: cex-hh-rank-one-tensor-action-is-not-faithful
kind: counterexample
title: "The rank-one tensor action of the two-strand Hecke algebra is not faithful"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-hh-hecke-symmetry-and-ordered-basis-operator, def-hh-universal-coxeter-hecke-parameters-and-presentation, thm-hh-generic-coxeter-hecke-standard-basis, thm-hh-hecke-symmetry-tensor-power-action]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Li Luo and Weiqiang Wang, Lectures on dualities ABC in representation theory"
      url: "https://arxiv.org/pdf/2012.07203"
      locator: "§6.1, PDF pp. 30–31: type-A Hecke tensor action and q-Schur duality"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement refuted

For every $N\ge1$ and $n\ge0$, the normalized type-A Hecke algebra $H_n(\mathbb Q(q))$ acts faithfully on $V_N^{\otimes n}$ through the ordered-basis Hecke operator.

## Facts & Assumptions

**Given:** $F=\mathbb Q(q)$, the type-A Hecke algebra with quadratic relation $(T_1-q)(T_1+q^{-1})=0$, and the tensor-power action defined from the ordered-basis operator.

[F1] The generic Hecke algebra has standard basis $\{T_w:w\in W\}$, and this basis remains a basis after base change ([[thm-hh-generic-coxeter-hecke-standard-basis]]).

[F2] The type-A Hecke algebra is the specialization of the universal Coxeter Hecke presentation at common parameter $q$ ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]]).

[F3] Sending $T_i$ to the ordered-basis operator on positions $i,i+1$ defines an algebra action on every tensor power ([[thm-hh-hecke-symmetry-tensor-power-action]]).

[F4] On equal labels the ordered-basis operator is $T(e_a\otimes e_a)=q(e_a\otimes e_a)$ ([[def-hh-hecke-symmetry-and-ordered-basis-operator]]).

## Counterexample

**Given:** Take $N=1$, $n=2$, $V_1=Fe_1$, and the Hecke action $\rho_2$ on $V_1^{\otimes2}$.

1.1 In type $A_1$ the Coxeter presentation has one generator $s$ with $s^2=1$, so every word reduces to $1$ or $s$; the map $s\mapsto\bar1$ to the two-element group is well-defined and nontrivial, so these are distinct and the Coxeter group has exactly two elements. Thus [F1]–[F2] give the $F$-basis $1,T_1$ of $H_2(F)$. By [F3]–[F4], $T_1$ acts on the one-dimensional tensor square by $\rho_2(T_1)(e_1\otimes e_1)=q(e_1\otimes e_1)$; hence $T_1-q1$ lies in the kernel of $\rho_2$. [given, F1, F2, F3, F4, algebra]

2.1 In the basis $1,T_1$, the element $T_1-q1$ has coefficients $(-q,1)$, which are not both zero in $F$. Thus it is a nonzero element of $H_2(F)$ mapped to zero, so $\rho_2$ is not injective and the universal faithfulness statement is false. [given, F1, step 1.1, algebra] ∎
