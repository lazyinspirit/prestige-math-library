---
id: ex-high-leverage-is-a-design-feature
kind: example
title: "Leverage is determined by the design"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-least-squares-solution-set
  - thm-least-squares-fitted-vector-and-solution-set
  - def-orthogonal-projection
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Statistics: Lecture Three — Linear Models"
      url: "https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf"
    - title: "Statistics for Applications, Section 15: Multiple Linear Regression"
      url: "https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf"
proof_strategy: direct
---

## Example

For a simple-regression design with an intercept, take predictor values
$x=(0,1,2,3,20)^T$ and let $X=[\mathbf1\ \ x]$. Define the hat matrix
$H=P_{\operatorname{col}(X)}$ and the leverage of row $i$ by
$h_{ii}=e_i^THe_i$. The fifth row has leverage $h_{55}=687/697\approx0.986$.
This value depends only on $X$, not on the response.

## Facts & Assumptions

**Given:** The five-point predictor vector and intercept design in the Example.

[F1] The least-squares fitted vector is the unique orthogonal projection
$P_{\operatorname{col}(X)}y$ for every response $y$.
[[thm-least-squares-fitted-vector-and-solution-set]].

[F2] $P_Wy$ is characterized by $P_Wy\in W$ and
$y-P_Wy\in W^\perp$. [[def-orthogonal-projection]].

## Verification

**Proof technique:** direct.

**Given:** $\mathbf1=(1,1,1,1,1)^T$ and
$x=(0,1,2,3,20)^T$.

1.1 The predictor mean is $\bar x=26/5$. Put $z=x-\bar x\mathbf1=(-26,-21,-16,-11,74)^T/5$. Then $\mathbf1^Tz=0$ and $z^Tz=\frac{676+441+256+121+5476}{25}=\frac{1394}{5}.$ Since $x=z+\bar x\mathbf1$, the column space is $C=\operatorname{span}\{\mathbf1,z\}$, with these two generators nonzero and orthogonal. [given, algebra]

2.1 For every $y\in\mathbb R^5$, the vector $p(y)=\frac{\mathbf1^Ty}{5}\mathbf1+\frac{z^Ty}{z^Tz}z$ lies in $C$, and $y-p(y)$ is orthogonal to both generators, hence to all of $C$. By [F2], $p(y)=P_Cy$; [F1] identifies this as the fitted vector. Therefore $H=\frac{\mathbf1\mathbf1^T}{5}+\frac{zz^T}{z^Tz},\qquad h_{55}=\frac15+\frac{(74/5)^2}{1394/5}=\frac15+\frac{2738}{3485}=\frac{687}{697}.$ [F1, F2, step 1.1, algebra]

3.1 Since $h_{55}=1-10/697$ is close to one and its formula involves only the design vector, this is a high-leverage design row. The calculation makes no claim that the fifth response has a large residual or is influential; those are separate diagnostics. [step 2.1] ∎