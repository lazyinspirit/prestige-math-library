---
id: lem-fisher-scoring-irls-is-well-defined
kind: lemma
title: The minimum-norm IRLS step is well-defined for every design rank
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
deps:
  - alg-fisher-scoring-irls
  - def-generalized-linear-model
  - thm-of-square-roots
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution
proof_strategy: direct
axiom_use: "This is a finite real-matrix specialization of the stated suppliers; it introduces no choice among minimizers and no additional choice assumption."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Stanford CS205L, Unit 11: Zero Singular Values, Moore–Penrose least-squares selection"
      url: "https://web.stanford.edu/class/cs205l/assets/unit_11_svd_pinv_solns.pdf"
    - title: "Ryan Tibshirani, Generalized Linear Models, CMU Advanced Methods for Data Analysis, Fisher scoring and weighted least squares"
      url: "https://www.stat.cmu.edu/~ryantibs/advmethods/notes/glm.pdf"
dependency_level: 6
---

## Statement

For every input satisfying the Definition of [[alg-fisher-scoring-irls]], every intermediate quantity in its three instructions is uniquely determined and finite. Its output $\beta_{\mathrm{new}}\in\mathbb R^p$ is the unique minimum-Euclidean-norm member of the nonempty set
$$\operatorname*{argmin}_{\gamma\in\mathbb R^p}\sum_{i=1}^n w_i(z_i-x_i^\mathsf T\gamma)^2.$$
This holds for every rank of $X$, including $X=0$. The weighted normal matrix $H=X^\mathsf T W X$ is positive semidefinite and has kernel $\ker H=\ker X$; its singularity does not obstruct this output. No assertion that the output lies in the model parameter domain, or that repeated updates converge, is made.

## Facts & Assumptions

[F1] The algorithm specifies a finite real response vector and design, an admissible finite current parameter, a positive common scale, finite nonzero $\dot\mu_i$, finite positive $V_i$, and the formulas for $z_i,w_i,A,r$ and the return value. [[alg-fisher-scoring-irls]]

[F2] In the GLM, $\eta_i=x_i^\mathsf T\beta$ is in the inverse link's domain; that inverse gives the unique real $\mu_i$, and the specified maps determine the component natural parameters. [[def-generalized-linear-model]]

[F3] Every nonnegative real number has a unique nonnegative square root. [[thm-of-square-roots]]

[F4] Every finite real matrix has a unique Moore–Penrose pseudoinverse satisfying the four Penrose equations. [[def-moore-penrose-pseudoinverse]], [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]

[F5] For a finite real matrix $A$ and every finite real target vector $r$, the vector $A^+r$ is a least-squares minimizer and is the unique such minimizer of minimum Euclidean norm. [[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]

## Proof

**Proof technique:** apply the supplied finite-matrix existence and uniqueness results to the weighted design and identify the exact objective.

**Given:** Any input satisfying the algorithm's Definition.

1.1 Each predictor is a finite sum of products of real design and parameter entries, and each mean is a unique finite real value by [F2]. The observed response coordinates are finite real numbers by [F1]. Thus $z_i=\eta_i+(y_i-\mu_i)/\dot\mu_i$ is finite and uniquely determined because its denominator is nonzero. Likewise $w_i=\dot\mu_i^2/(a(\phi)V_i)$ is finite and strictly positive: its numerator is positive and its denominator is a finite positive real number. These operations refer to real arithmetic, with no floating-point overflow assertion. [F1, F2, algebra]

2.1 By [F3] each $w_i$ has one finite positive square root. Consequently the diagonal matrix $D=\operatorname{diag}(\sqrt{w_i})$, the weighted design $A=DX$, and the target $r=Dz$ are unique finite real matrices or vectors with the specified dimensions. By [F4] the $p\times n$ matrix $A^+$ exists uniquely for every rank of $A$, so the returned $A^+r$ exists uniquely in $\mathbb R^p$. No inverse of $X^\mathsf T W X$ was required at this stage. [F1, F3, F4, step 1.1, construct]

3.1 For every $\gamma\in\mathbb R^p$, the diagonal construction gives $\|A\gamma-r\|_2^2=\sum_iw_i(x_i^\mathsf T\gamma-z_i)^2$. Since a nonnegative real number and its square have the same minimizing arguments, [F5] makes $A^+r$ a member of the displayed weighted least-squares minimizer set and the unique member of minimum Euclidean norm. In particular that set is nonempty even when $X$ is rank deficient. The minimum-norm property is the conclusion of the supplied theorem, not an extra condition imposed on the algorithm's inputs. [F3, F5, step 2.1, algebra]

4.1 The weighted normal matrix is symmetric, and for every $u\in\mathbb R^p$ one has $u^\mathsf T H u=\sum_iw_i(x_i^\mathsf T u)^2=\|Au\|_2^2\ge0$, so $H$ is positive semidefinite. If $Xu=0$, then $Hu=X^\mathsf T W Xu=0$. Conversely, if $Hu=0$, the displayed sum is zero, and its finitely many nonnegative terms with strictly positive $w_i$ force every $x_i^\mathsf T u=0$; hence $Xu=0$. This proves $\ker H=\ker X$. Steps 2.1–3.1 apply equally when this kernel is nontrivial. [step 1.1, step 2.1, step 3.1, algebra]

5.1 If $X=0$, then $A=0$. The zero matrix satisfies the Penrose equations, so uniqueness in [F4] gives $A^+=0$ and the algorithm returns $0$. The weighted objective is then constant in $\gamma$, so every vector is a minimizer and $0$ is its unique minimum-norm member, consistent with step 3.1. A single response, zero observed responses, and other ranks use the same proof whenever the original admissibility conditions hold. Thus all stated well-definedness claims hold without an invertibility condition or a condition that the returned vector remain in the model domain. [F1, F4, step 2.1, step 3.1, step 4.1, algebra] ∎

## Source notes

This is the explicit well-definedness discharge for the local algorithm. The proof uses the complete locally proved square-root, pseudoinverse-existence, and minimum-norm least-squares suppliers named above. The weighted objective is checked directly, and no Fisher-scoring equivalence or convergence theorem is assumed to prove existence of the procedure's output.
