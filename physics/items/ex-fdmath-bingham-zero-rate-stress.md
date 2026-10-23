---
id: ex-fdmath-bingham-zero-rate-stress
kind: example
title: "The Bingham graph at zero contains nonzero tensors"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
proof_strategy: direct
deps:
  - lem-fd-bingham-monotone-graph
dependency_roles:
  lem-fd-bingham-monotone-graph: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare, Lecture Notes on Fluid Dynamics (1.63J/2.21J), §1.6.2"
      url: "https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Example

Let $M_3(\mathbb R)$ denote the real $3\times3$ matrices and set $\mathcal S_0=\{D\in M_3(\mathbb R):D^{\mathsf T}=D,\operatorname{tr}D=0\}$, the space of trace-free symmetric matrices with Frobenius product $D:E=\operatorname{tr}(D^{\mathsf T}E)$ and norm $|D|=(D:D)^{1/2}$. Let $\tau_y>0$, let $D=0\in\mathcal S_0$, and use the Frobenius-norm Bingham graph whose zero-rate value is $\{\tau\in\mathcal S_0:|\tau|\le\tau_y\}$. The tensor

$$
S=\frac{\tau_y}{\sqrt2}\begin{pmatrix}1&0&0\\0&-1&0\\0&0&0\end{pmatrix}
$$

is nonzero, trace-free, and has Frobenius norm $\tau_y$, so $S\in\mathcal B(0)$. Thus zero strain rate does not imply zero deviatoric stress in this set-valued Bingham model.

## Example references

[[lem-fd-bingham-monotone-graph|the graph definition and zero-rate stress ball]].

[MIT OpenCourseWare, Lecture Notes on Fluid Dynamics, §1.6.2](https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf).

## Facts & Assumptions

**Given:** A yield parameter $\tau_y>0$, the tensor $D=0$, and the Bingham graph in the Example.

[F1] [[lem-fd-bingham-monotone-graph]]: at $D=0$, $\mathcal B(0)=\{\tau\in\mathcal S_0:|\tau|\le\tau_y\}$.

## Verification

**Given:** The data in the Example and Facts & Assumptions.

1.1 The diagonal entries of $S$ sum to zero, so $S\in\mathcal S_0$; its squared Frobenius norm is $\tau_y^2/2+\tau_y^2/2=\tau_y^2$, and $S\ne0$ because $\tau_y>0$. [given, algebra]

2.1 By [F1] and step 1.1, $|S|=\tau_y$ places $S$ in $\mathcal B(0)$. [F1, step 1.1]

3.1 The pair $D=0,\tau=S\ne0$ is therefore an element of the graph, which refutes the implication that zero strain rate forces zero deviatoric stress for this model. [step 1.1, step 2.1] ∎

