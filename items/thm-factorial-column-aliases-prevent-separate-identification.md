---
id: thm-factorial-column-aliases-prevent-separate-identification
kind: theorem
title: "Aliased factorial columns prevent separate coefficient identification"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps: [def-regular-fractional-factorial-defining-relation-and-resolution]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 18, §18.6"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
      locator: "Printed pp. 485–486; PDF pp. 504–505: aliased effects give indistinguishable interpretations without added data or external restrictions."
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, §5.3.3.4.3, Confounding (also called aliasing)"
      url: "https://www.itl.nist.gov/div898/handbook/pri/section3/pri3343.htm"
      locator: "Complete focused section: identical and signed-alias columns, combined effect estimates, and the sparsity-of-effects assumption."
---

## Statement

Let $c_A,c_B\in\mathbb R^{\mathcal F}$ be the columns for distinct factorial effects $A,B\subseteq[k]$ in a regular fraction, and suppose $c_A=\sigma c_B$ for a fixed $\sigma\in\{-1,+1\}$. Consider the unrestricted fixed-design linear model $Y=X\beta+\epsilon$, where these columns occur in $X$ and the distribution of the error vector $\epsilon$ does not depend on $\beta$. A coefficient combination is **identifiable** if it has the same value for all parameter vectors giving the same distribution of $Y$. The contribution of these two columns depends only on $\sigma\beta_A+\beta_B$; neither coefficient is separately identifiable while the parameter space remains unrestricted. For equal columns ($\sigma=+1$), the relevant combination is the sum; for opposite columns ($\sigma=-1$), it is the difference. Additional runs can remove the ambiguity only if they break the column relation, and hierarchy or sparsity restrictions are extra modeling assumptions.

## Facts & Assumptions

**Given:** A regular fraction with distinct effects $A,B$, design columns $c_A,c_B$ satisfying $c_A=\sigma c_B$, and the fixed-design model and error-law condition in the Statement.

[F1] [[def-regular-fractional-factorial-defining-relation-and-resolution]]: signed-alias columns satisfy $x_A=\sigma x_B$ on every run in the fraction; sign $+1$ is equality and sign $-1$ is opposition.

## Proof

**Proof technique:** exhibit the coefficient combination in the fitted vector and a parameter direction that leaves it unchanged.

1.1 The two terms in the fitted vector combine as $\beta_Ac_A+\beta_Bc_B=\beta_A(\sigma c_B)+\beta_Bc_B=(\sigma\beta_A+\beta_B)c_B$. Thus the fitted vector depends on this pair only through $\sigma\beta_A+\beta_B$, with all other coefficients fixed. [given, F1, algebra]

2.1 For any $t\in\mathbb R$, replace $\beta_A$ by $\beta_A+t$ and $\beta_B$ by $\beta_B-\sigma t$. Then $\sigma(\beta_A+t)+(\beta_B-\sigma t)=\sigma\beta_A+\beta_B$, so the combination in step 1.1 and therefore $X\beta$ are unchanged. Because the error law is independent of $\beta$, the resulting response distributions are identical. Taking $t\ne0$ changes both coefficients, proving that neither is separately identifiable in the unrestricted model. [given, step 1.1, algebra] ∎

## Sources

Oehlert §18.6 and NIST/SEMATECH §5.3.3.4.3 explain the ambiguity left by aliased effects and the extra role of sparsity assumptions. The parameter nonidentifiability argument is given explicitly above.
