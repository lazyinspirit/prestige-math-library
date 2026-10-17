---
id: thm-mean-field-characteristic-flow-exists-uniquely
kind: theorem
title: Global characteristic flow for a globally Lipschitz mean-field kernel
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-p-one-wasserstein-one
  - def-globally-lipschitz-mean-field-kernel
  - def-characteristic-mean-field-solution
  - lem-weighted-continuous-path-space-is-complete
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-banach-fixed-point
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - def-countable-choice
  - thm-of-archimedean
proof_strategy: direct
axiom_use: Countable Choice enters through weighted path-space completeness; the fixed-point iteration itself uses no further choice.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
    - title: Simon Mayer, The Vlasov Equation and Mean Field Limit of a Particle System
      url: https://mathphys.pages.ist.ac.at/wp-content/uploads/sites/193/2023/10/Handout_Mayer.pdf
---

## Statement

Assume Countable Choice. Let $K$ be globally Lipschitz with constant $L$ in the convention of [[def-globally-lipschitz-mean-field-kernel]], and let $\mu_0$ be a Borel probability measure on $\mathbb R^d$ with finite first moment. For every finite $T>0$ there exists a characteristic solution on $[0,T]$ in the sense of [[def-characteristic-mean-field-solution]]. It is unique up to equality of trajectories for $\mu_0$-almost every label. No compact support assumption is needed.

## Facts & Assumptions

**Given:** Countable Choice, the kernel, probability measure, and finite first moment in the Statement.

[F1] The kernel satisfies $|K(x,y)|\le |K(0,0)|+L(|x|+|y|)$ and the two-variable Lipschitz bound ([[def-globally-lipschitz-mean-field-kernel]]).

[F2] The weighted continuous path space over a probability label space with integrable initial path is complete ([[lem-weighted-continuous-path-space-is-complete]]).

[F3] A contraction of a nonempty complete metric space has a unique fixed point ([[thm-banach-fixed-point]]).

[F4] The product probability measure exists, Tonelli applies to its nonnegative integrands, and the product Borel sigma-algebra agrees with the Euclidean product Borel sigma-algebra ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]).

[F5] Dominated convergence passes a pointwise limit through an integral under one integrable majorant ([[thm-dominated-convergence]]).

[A1] Countable Choice supplies representatives in the weighted-path completeness proof ([[def-countable-choice]]).

[F6] The natural numbers are cofinal in the reals ([[thm-of-archimedean]]).

## Proof
1.1 On a time interval $[a,a+\delta]$, use the space in [F2] over $(\mathbb R^d,\mu_0)$ and fix the initial label map $X_a$. Define $\Phi(Z)_t(x)=X_a(x)+\int_a^t\int K(Z_s(x),Z_s(y))d\mu_0(y)ds.$ The growth bound in [F1], the integrability of $X_a$, and [F4] make the time integral finite in the weighted norm. For almost every label, the integrand is continuous in time; it is dominated in the second label by $|K(0,0)|+L(\sup_s|Z_s(x)|+\sup_s|Z_s(y)|)$, integrable by the path norm, so [F5] makes each output path continuous. The space is nonempty because the constant-in-time path $X_a$ belongs to it. [given, A1, F1, F2, F4, F5, construct]

2.1 For any $Z,W$, applying [F1], integrating first over the label $x$ and then $y$, and using that $\mu_0$ has mass one gives $\|\Phi Z-\Phi W\|\le2L\delta\|Z-W\|.$ Choose $\delta>0$ with $2L\delta<1$ when $L>0$; if $L=0$ any finite $\delta$ works. The contraction theorem [F3] yields a unique fixed point on this interval. [F1, F2, F3, F4, step 1.1, choose]

3.1 The bound in step 2.1 applies on each successive interval with the attained endpoint path as initial data. By [F6], choose an integer $J>2LT$ and partition $[0,T]$ into $J$ equal intervals (or use one interval when $L=0$); each interval then has length below $1/(2L)$ and successive fixed points construct the solution on all of $[0,T]$. Each fixed point belongs to the weighted path space, so its endpoint has finite first moment and is admissible for the next interval. [F1, F2, F6, step 1.1, step 2.1, algebra]

4.1 Any two solutions on the first interval are fixed points of the same contraction and hence agree by [F3]. Repeating on each successive interval gives equality for $\mu_0$-almost every label on all of $[0,T]$. The fixed point equation and the pushforward definition give exactly the characteristic solution in [F1] and [[def-characteristic-mean-field-solution]]. [F1, F2, F3, step 3.1, step 2.1] ∎
