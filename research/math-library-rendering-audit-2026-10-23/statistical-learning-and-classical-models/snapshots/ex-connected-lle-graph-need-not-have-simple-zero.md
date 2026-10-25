---
id: ex-connected-lle-graph-need-not-have-simple-zero
kind: example
title: "A connected LLE neighbor graph can have more than one fixed vector"
status: published
dependency_level: 4
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [alg-deterministic-neighbor-selection, def-lle-local-reconstruction-weights, thm-minimum-norm-lle-weights-exist-uniquely, alg-locally-linear-embedding]
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Take $x_1=x_3=-1$, $x_2=x_4=1$, and $x_5=0$ in $\mathbb R$, with $k=2$ and deterministic distance ties broken by index. The undirected union neighbor graph is connected. The minimum-norm local weights give

$$W=\begin{pmatrix}0&0&1&0&0\\0&0&0&1&0\\1&0&0&0&0\\0&1&0&0&0\\1/2&1/2&0&0&0\end{pmatrix},$$

for which $\ker(I_5-W)$ has dimension two rather than being $\operatorname{span}\{\mathbf1_5\}$. Thus graph connectivity alone does not satisfy the simple constant-kernel condition required by LLE.

The diagram shows the undirected union neighbor graph. Its edges record selected neighbor relations, not whether the corresponding directed LLE weight is nonzero.

```tikz
\begin{tikzpicture}[vertex/.style={draw,circle,minimum size=7mm}]
  \node[vertex] (x1) at (0,1) {$1:-1$};
  \node[vertex] (x3) at (0,-1) {$3:-1$};
  \node[vertex] (x5) at (2,0) {$5:0$};
  \node[vertex] (x2) at (4,1) {$2:1$};
  \node[vertex] (x4) at (4,-1) {$4:1$};
  \draw (x1)--(x3) (x1)--(x5) (x3)--(x5);
  \draw (x2)--(x4) (x2)--(x5) (x4)--(x5);
\end{tikzpicture}
```

## Example references

[Hastie, Tibshirani, and Friedman, ESL II, §14.9, printed pp. 573–575](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Cameron, Linear and Nonlinear Dimensionality Reduction, §7, PDF pp. 13–16](https://www.math.umd.edu/~mariakc/NumMetDSML/LectureNotes/4-DimReduction.pdf)

## Facts & Assumptions

**Given:** The five real points, $k=2$, deterministic tie-breaking by sample index, union symmetrization, and the LLE local minimum-norm rule.

[F1] Neighbor lists sort by distance and then sample index; the union graph uses an edge if either endpoint selects the other ([[alg-deterministic-neighbor-selection]]).

[F2] Local weights minimize reconstruction error subject to summing to one, with a minimum-Euclidean-norm tie rule ([[def-lle-local-reconstruction-weights]]).

[F3] The finite minimum-norm rule defines a unique weight vector even for singular local covariance ([[thm-minimum-norm-lle-weights-exist-uniquely]]).

[F4] LLE requires $\ker(I-W)=\operatorname{span}\{\mathbf1_n\}$ before using the isolated constant zero eigenvector ([[alg-locally-linear-embedding]]).

## Verification

1.1 For $x_1=x_3=-1$, the two nearest indices to each are the duplicate at $-1$ and $x_5=0$, giving $N_1=(3,5)$ and $N_3=(1,5)$. For $x_2=x_4=1$, the lists are $N_2=(4,5)$ and $N_4=(2,5)$. From $x_5=0$ all four distances are $1$, so $N_5=(1,2)$ by the index tie rule. [given, F1, algebra]

2.1 For rows 1 and 3, the exact reconstruction weights are 1 on the duplicate point and 0 on $x_5$; for rows 2 and 4, they are 1 on the duplicate point and 0 on $x_5$. For row 5, weights $(1/2,1/2)$ on points $x_1=-1,x_2=1$ reconstruct zero exactly. Each is the unique minimum-norm choice by [F2] and [F3], yielding the displayed $W$. [step 1.1, F2, F3, algebra]

2.2 The union edges are $\{1,3\}$, $\{1,5\}$, $\{3,5\}$, $\{2,4\}$, $\{2,5\}$, and $\{4,5\}$, so every vertex lies in one connected graph. [step 1.1, F1]

3.1 The equation $Wy=y$ gives $y_1=y_3$, $y_3=y_1$, $y_2=y_4$, $y_4=y_2$, and $y_5=(y_1+y_2)/2$. The parameters $y_1,y_2$ are free, so $\dim\ker(I_5-W)=2$, whereas the constant vectors form a one-dimensional subspace. The condition in [F4] fails despite connectivity, and LLE does not specify an embedding for this input. [step 2.1, step 2.2, F4, algebra] ∎
