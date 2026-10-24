---
id: thm-lidskii-for-trace-class-operators
kind: theorem
title: Lidskii trace formula for trace-class operators
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, def-fredholm-determinant, prop-fredholm-determinant-properties-for-trace-class-operators, def-trace-class-operator]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  precheck: pass
sources:
  references:
    - title: "Aleksey Kostenko, Trace Ideals with Applications — Theorem 3.4.7, printed p. 41"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $H$ be any complex Hilbert space, including
$H=\{0\}$, and let $T\in\mathcal S_1(H)$. List all nonzero eigenvalues
$(\lambda_j(T))$ with their finite algebraic multiplicities, where the
multiplicity of $\lambda\neq0$ is the dimension of the stabilized generalized
kernel $\bigcup_{r\geq1}\ker(T-\lambda I)^r$. Then
$$ \sum_j|\lambda_j(T)|\leq\|T\|_1, \qquad \operatorname{tr}_H(T)=\sum_j\lambda_j(T). $$
The list is finite or countable and may be empty. No normality,
self-adjointness, positivity, or separability of $H$ is assumed.

## Facts & Assumptions

**Given:** The Axiom of Choice, a complex Hilbert space $H$, and a trace-class
operator $T$.

[F1] The determinant definition preserves the nonzero generalized-eigenvalue
data under separable-support reduction ([[def-fredholm-determinant]]).

[F2] The determinant properties give absolute eigenvalue summability,
$D_T(z)=\prod_j(1+z\lambda_j(T))$ locally uniformly, and
$D_T'(0)=\operatorname{tr}_H(T)$
([[prop-fredholm-determinant-properties-for-trace-class-operators]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] and [F2], the eigenvalue list has the stated algebraic multiplicities and $L:=\sum_j|\lambda_j(T)|\leq\|T\|_1$. For a finite initial product $P_N(z)=\prod_{j\leq N}(1+z\lambda_j)$, expansion and the ordered-tuple bound for elementary symmetric sums give $\left|P_N(z)-1-z\sum_{j\leq N}\lambda_j\right|\leq\sum_{k=2}^N(|z|L)^k/k!\leq (|z|L)^2e^{|z|L}/2$. Indeed, every unordered product of $k$ distinct absolute eigenvalues occurs $k!$ times among the ordered $k$-tuples contributing to $L^k$. [F1, F2, given, algebra]

2.1 Let $N\to\infty$. The local product convergence and absolute convergence of $\sum_j\lambda_j$ from [F2] preserve the bound in step 1.1, so $\lim_{z\to0}(D_T(z)-1)/z=\sum_j\lambda_j(T)$. The left side is $D_T'(0)=\operatorname{tr}_H(T)$ by [F2]. The same argument applies to finite and empty lists, with the empty sum equal to $0$ and the empty product equal to $1$. [F2, step 1.1, algebra] ∎
