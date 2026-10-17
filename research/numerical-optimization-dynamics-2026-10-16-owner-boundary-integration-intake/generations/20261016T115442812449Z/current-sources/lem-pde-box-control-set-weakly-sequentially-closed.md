---
id: lem-pde-box-control-set-weakly-sequentially-closed
kind: lemma
title: A pointwise L2 box is weakly sequentially closed
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-pde-box-control-set
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§2, printed pp. 5–7: weakly closed convex admissible sets in existence proofs."
---

## Statement

Let $E$ and $Q_{ad}(q_a,q_b)$ be as in [[def-pde-box-control-set]]. If $q_n\in Q_{ad}$ and $q_n\rightharpoonup q$ weakly in $L^2(E)$, then $q\in Q_{ad}$.

## Facts & Assumptions
**Given:** A bounded measurable $E$, $q_a,q_b\in L^2(E)$ with $q_a\le q_b$ almost everywhere, a sequence $q_n\in Q_{ad}$, and weak convergence $q_n\rightharpoonup q$.

[F1] $Q_{ad}=\{r\in L^2(E):q_a\le r\le q_b\text{ a.e.}\}$ ([[def-pde-box-control-set]]).

## Proof

1.1 Let $A=\{x\in E:q(x)<q_a(x)\}$. If $A$ had positive measure, then for some integer $m\ge1$ the measurable set $A_m=\{x:q(x)\le q_a(x)-1/m\}$ would have positive measure, because $A=\bigcup_{m\ge1}A_m$. Since $E$ has finite measure, $\mathbf1_{A_m}\in L^2(E)$. Weak convergence and $q_n\ge q_a$ give $\int_{A_m}(q-q_a)=\lim_{n\to\infty}\int_{A_m}(q_n-q_a)\ge0,$ whereas the definition of $A_m$ makes the left side at most $-\mu(A_m)/m<0$. This contradiction proves $q\ge q_a$ almost everywhere. [F1, given, algebra]

2.1 Apply the same argument to $B=\{x:q(x)>q_b(x)\}$ and $B_m=\{x:q(x)\ge q_b(x)+1/m\}$. Weak convergence gives $\int_{B_m}(q-q_b)=\lim_n\int_{B_m}(q_n-q_b)\le0$, while the defining inequality on $B_m$ makes this integral at least $\mu(B_m)/m>0$ if $B_m$ has positive measure. Thus $q\le q_b$ almost everywhere, and [F1] gives $q\in Q_{ad}$. [F1, step 1.1, given, algebra] ∎
