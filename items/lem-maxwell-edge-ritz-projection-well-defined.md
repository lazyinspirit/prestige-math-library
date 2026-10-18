---
id: lem-maxwell-edge-ritz-projection-well-defined
kind: lemma
title: Well-definedness and best approximation of the Maxwell Ritz map
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-maxwell-edge-ritz-projection
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§2, printed pp. 6–8: the curl-energy Maxwell bilinear form; existence and orthogonality of the finite-dimensional projection are established locally."
verification:
  precheck: pass
---

## Statement

In the Countable Choice branch of [[def-maxwell-edge-ritz-projection]], the equation defining $R_hu$ has a unique solution for each $u\in V$. Moreover, with $\|v\|_{a_+}^2=a_+(v,v)$,
$$\|u-R_hu\|_{a_+}\le\inf_{v_h\in V_h}\|u-v_h\|_{a_+}.$$

## Facts & Assumptions

**Given:** The finite-dimensional real edge space and symmetric form $a_+$ from [[def-maxwell-edge-ritz-projection]], with uniformly positive definite $\epsilon$ and $\mu^{-1}$.

[A1] Countable Choice is inherited from the H(div) and affine Piola definitions that supply the FE spaces; the local linear-algebra argument below uses only the given finite space. ([[def-countable-choice]], [[def-maxwell-edge-ritz-projection]])

[F1] The mass form $m$ and curl form $a$ are symmetric, and their sum satisfies $a_+(v,v)\ge c(\|v\|_{L^2}^2+\|\operatorname{curl}v\|_{L^2}^2)$ for some $c>0$. ([[def-maxwell-edge-ritz-projection]])

## Proof


1.1 By [F1], the Gram matrix of $a_+$ in any basis of the finite-dimensional $V_h$ is symmetric positive definite. Hence its kernel is zero and it is invertible, so the linear system defining $R_hu$ has exactly one solution. [A1, F1, given, algebra]

1.2 Subtracting the defining equation from itself gives $a_+(u-R_hu,v_h)=0$ for every $v_h\in V_h$. [F1, given, algebra]

2.1 For arbitrary $w_h\in V_h$, write $u-w_h=(u-R_hu)+(R_hu-w_h)$. The second summand lies in $V_h$, so [step 1.2] makes the cross term zero in the $a_+$ inner product. Thus $\|u-w_h\|_{a_+}^2=\|u-R_hu\|_{a_+}^2+\|R_hu-w_h\|_{a_+}^2\ge\|u-R_hu\|_{a_+}^2$. Taking the infimum proves the claim. [A1, F1, step 1.2, algebra] ∎
