---
id: ex-aqft-scalar-positivity-bound
kind: example
title: Allowed and excluded order-two forward coefficients
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 4
deps:
  - def-aqft-truncated-amplitude-bootstrap-problem
  - thm-aqft-gapped-scalar-forward-positivity
  - prop-aqft-finite-truncated-bootstrap-constraints
dependency_roles:
  def-aqft-truncated-amplitude-bootstrap-problem: mathematical-premise
  thm-aqft-gapped-scalar-forward-positivity: mathematical-premise
  prop-aqft-finite-truncated-bootstrap-constraints: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: 'Claudia de Rham, Scott Melville, Andrew J. Tolley, and Shuang-Yong Zhou, Positivity Bounds for Scalar Theories'
      url: https://arxiv.org/pdf/1702.06134
      locator: 'Section 2.2, equations (11)–(15), PDF pp. 2–3: positivity of forward amplitude derivatives; the order-two finite-vector arithmetic below is checked locally.'
    - title: 'Ivano Basile, Luca Buoninfante, Francesco Di Filippo, Benjamin Knorr, Alessia Platania, and Anna Tokareva, Lectures in Quantum Gravity'
      url: https://arxiv.org/pdf/2412.08690.pdf
      locator: 'Section 3.3.1, printed pp. 96–98: interpretation of forward amplitude coefficient positivity; the specific candidate vectors below are checked locally.'
---

## Example

At truncation order $N=2$, let $(b_0,b_1,b_2)$ denote the normalized forward on-shell amplitude coordinates and let $\mathcal K_2$ be the finite feasible set defined by the order-two constraints. The strict region $\mathcal U_2=\{b_0>0,\ b_1>0,\ b_0-b_1>0,\ b_0b_2-b_1^2>0\}$ is contained in $\mathcal K_2$. The strict region $\mathcal V_2=\{b_0>0,\ b_1>0,\ b_0-b_1>0,\ b_0b_2-b_1^2<0\}$ is disjoint from $\mathcal K_2$. The vectors $b^{\mathrm{pass}}=(1,\tfrac12,\tfrac13)\in\mathcal U_2$ and $b^{\mathrm{fail}}=(1,\tfrac12,\tfrac18)\in\mathcal V_2$ witness that both regions are nonempty. The first region passes the finite necessary test; this example does not assert that any vector passing that test extends to full analytic amplitude data or a physical theory, and it assigns no sign to a generic off-shell Lagrangian coefficient.

## Example references

[[def-aqft-truncated-amplitude-bootstrap-problem]]

[[prop-aqft-finite-truncated-bootstrap-constraints]]

[[thm-aqft-gapped-scalar-forward-positivity]]

[de Rham et al., *Positivity Bounds for Scalar Theories*, §2.2](https://arxiv.org/pdf/1702.06134)

[Basile et al., *Lectures in Quantum Gravity*, §3.3.1](https://arxiv.org/pdf/2412.08690.pdf)

## Facts & Assumptions

**Given:** The normalized on-shell coordinates $b_0,b_1,b_2$, the definition of $\mathcal K_2$, and the finite-constraint proposition.

[F1] [[def-aqft-truncated-amplitude-bootstrap-problem]]: for $N=2$, the applicable constraints are $b_0\ge0$, $\begin{pmatrix}b_0&b_1\\b_1&b_2\end{pmatrix}\succeq0$, $b_1\ge0$, and $b_0-b_1\ge0$.

[F2] [[prop-aqft-finite-truncated-bootstrap-constraints]]: every amplitude-data vector under the stated gapped-scalar hypotheses lies in $\mathcal K_2$.

## Verification

1.1 For any $b\in\mathcal U_2$, the order-one Hankel quadratic form is $b_0u^2+2b_1uv+b_2v^2=b_0(u+(b_1/b_0)v)^2+((b_0b_2-b_1^2)/b_0)v^2$, which is positive for every nonzero $(u,v)$ because $b_0>0$ and $b_0b_2-b_1^2>0$. The remaining order-two inequalities are $b_0>0$, $b_1>0$, and $b_0-b_1>0$ by [F1]; hence $\mathcal U_2\subseteq\mathcal K_2$. For $b^{\mathrm{pass}}=(1,\tfrac12,\tfrac13)$, the order-one determinant is $\tfrac13-\tfrac14=\tfrac1{12}>0$, while $b_0=1$, $b_1=\tfrac12$, and $b_0-b_1=\tfrac12$ are positive, so it lies in $\mathcal U_2$. [F1, algebra]

1.2 For any $b\in\mathcal V_2$, choose $a=(-b_1/b_0,1)$. Its order-one Hankel quadratic form equals $b_2-b_1^2/b_0=(b_0b_2-b_1^2)/b_0<0$, so that matrix is not positive semidefinite and $b\notin\mathcal K_2$. In particular, for $b^{\mathrm{fail}}=(1,\tfrac12,\tfrac18)$ this vector is $a=(-\tfrac12,1)$ and the value is $\tfrac18-\tfrac14=-\tfrac18$. [F1, algebra]

2.1 By [F2], any coefficient vector arising from the specified gapped amplitude data must satisfy every order-two constraint. Hence $b^{\mathrm{fail}}$ is excluded under those hypotheses, while the finite test alone only labels $b^{\mathrm{pass}}$ as allowed by $\mathcal K_2$; it supplies no converse or physical realization. [F2, step 1.1, step 1.2, algebra] ∎
