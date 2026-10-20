---
id: ex-singular-local-lle-covariance
kind: example
title: "A singular local LLE covariance still has a unique minimum-norm weight vector"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [def-lle-local-reconstruction-weights, thm-minimum-norm-lle-weights-exist-uniquely]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition, corrected 12th printing"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Maria Cameron, Linear and Nonlinear Dimensionality Reduction, lecture notes"
      url: "https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf"
verification:
  precheck: pass
---

## Example

Take $x_1=0$, $x_2=1$, $x_3=-1$, and $x_4=0$ in $\mathbb R$, with $i=1$ and $k=3$. The neighbor order is $N_1=(4,2,3)$. Define the local difference matrix $Z_1=[x_1-x_j]_{j\in N_1}$ and its local covariance matrix $C_1=Z_1^TZ_1$; then $C_1$ has rank one and is singular. The affine reconstruction minimizers are $w_4=1-2t$, $w_2=w_3=t$ for real $t$, and the unique minimum-norm choice is $w_4=w_2=w_3=1/3$.

## Example references

[Hastie, Tibshirani, and Friedman, ESL II, §14.9, printed pp. 573–575](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §7, PDF pp. 14–16](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** The four real points, the subject $i=1$, neighbor count $k=3$, and the specified tie rule.

[F1] The local LLE weights minimize squared reconstruction error under weights summing to $1$ and then minimize Euclidean norm among the minimizers ([[def-lle-local-reconstruction-weights]]).

[F2] For every finite nonempty neighborhood, that affine least-squares problem has a unique minimum-norm minimizer, including singular local covariance cases ([[thm-minimum-norm-lle-weights-exist-uniquely]]).

## Verification

1.1 The distances from $x_1=0$ to $x_4=0$, $x_2=1$, and $x_3=-1$ are $0,1,1$, so the deterministic list is $N_1=(4,2,3)$. The corresponding row matrix is $Z_1=(0,-1,1)$ and $C_1=Z_1^TZ_1=\begin{pmatrix}0&0&0\\0&1&-1\\0&-1&1\end{pmatrix}$, which is nonzero of rank one and hence singular. [given, F1, algebra]

2.1 Write the weights in the order $(w_4,w_2,w_3)$. The constraint is $w_4+w_2+w_3=1$, and the reconstructed point is $w_2-w_3$. The minimum residual is zero exactly when $w_2=w_3=t$, giving $w_4=1-2t$. [step 1.1, F1, algebra]

3.1 Along this affine family, the squared norm is $(1-2t)^2+2t^2=6(t-1/3)^2+1/3$, uniquely minimized at $t=1/3$. Thus the minimum-norm weights are $(1/3,1/3,1/3)$ in the ordered list, and [F2] guarantees the selection is well-defined despite singularity. [step 2.1, F2, algebra] ∎
