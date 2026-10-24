---
id: ex-correlated-predictors-and-shrinkage
kind: example
title: Duplicate predictors give a least-squares line, a ridge point, and a lasso segment
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-linear-regression-objectives, thm-ols-and-ridge-solutions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hastie, Tibshirani, and Friedman, The Elements of Statistical Learning, 2nd ed., corrected 12th printing, §§3.2 and 3.4"
      url: "https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS"
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, §2.2"
      url: "https://arxiv.org/pdf/2310.19244v1"
---

## Example

Take $n=1$, $p=2$, $X=(1\;1)$, and $y=1$. The OLS minimizers are exactly $\{(\beta_1,\beta_2):\beta_1+\beta_2=1\}$. Ridge with parameter $1$ has the unique minimizer $(1/3,1/3)$. Lasso with the empirical-loss convention and penalty $\lambda=1/4$ has the full minimizer set $\{(\beta_1,\beta_2):\beta_1,\beta_2\ge0,\ \beta_1+\beta_2=3/4\}$.

## Example references

[The Elements of Statistical Learning, §§3.2 and 3.4](https://drive.google.com/uc?export=download&id=1--Wo5Hcl2y_v3DL-tGgcJHRPdtjiVYjS)

[Rigollet and Hütter, §2.2](https://arxiv.org/pdf/2310.19244v1)

## Facts & Assumptions

**Given:** The fixed design $X=(1\;1)$, response $y=1$, the OLS and ridge objectives, and Lasso penalty $\lambda=1/4$.

[F1] OLS minimizers solve the normal equations and ridge has its unique closed-form minimizer ([[thm-ols-and-ridge-solutions]]).

[F2] The Lasso objective is $\|y-X\beta\|_2^2/(2n)+\lambda\|\beta\|_1$ ([[def-linear-regression-objectives]]).

## Verification

1.1 Here $X^{\mathsf T}X=\begin{pmatrix}1&1\\1&1\end{pmatrix}$ and $X^{\mathsf T}y=(1,1)^{\mathsf T}$. The OLS normal equations reduce to $\beta_1+\beta_2=1$, giving the stated full line. [F1, given, algebra]

2.1 For ridge parameter $1$, $X^{\mathsf T}X+I_2=\begin{pmatrix}2&1\\1&2\end{pmatrix}$, whose inverse sends $(1,1)^{\mathsf T}$ to $(1/3,1/3)^{\mathsf T}$. [F1, step 1.1, algebra]

3.1 Write $t=\beta_1+\beta_2$. Since $|\beta_1|+|\beta_2|\ge|t|$, the Lasso objective is at least $\tfrac12(1-t)^2+\tfrac14|t|$, with equality exactly when the coordinates have the same weak sign. The scalar function decreases up to $t=3/4$ and increases after it: on $t>0$ its derivative is $t-3/4$, and on $t<0$ its derivative is $t-5/4<0$. Thus its unique minimizing sum is $t=3/4>0$, where equality in the triangle inequality requires both coordinates nonnegative. This gives exactly the stated segment of minimizers. [F2, given, algebra] ∎

## Diagram

The axes are $\beta_1$ and $\beta_2$. The dashed segment is the first-quadrant portion of the OLS line; the solid segment is the full Lasso minimizer set; the point is the ridge minimizer. The algebraic verification above proves the exact sets and point; the diagram is illustrative.

```tikz
\begin{tikzpicture}[scale=3]
  \draw[->] (-0.08,0) -- (1.15,0) node[right] {$\beta_1$};
  \draw[->] (0,-0.08) -- (0,1.12) node[above] {$\beta_2$};
  \draw[dashed,gray,thick] (0,1) -- (1,0) node[pos=.22,above right] {OLS};
  \draw[blue,very thick] (0,0.75) -- (0.75,0) node[pos=.25,above right] {Lasso};
  \fill[red] (0.3333,0.3333) circle (0.018) node[above right] {ridge};
  \foreach \x in {0.25,0.5,0.75,1.0} {\draw (\x,0.012) -- (\x,-0.012) node[below=2pt] {\x};}
  \foreach \y in {0.25,0.5,0.75,1.0} {\draw (0.012,\y) -- (-0.012,\y) node[left=2pt] {\y};}
\end{tikzpicture}
```
