---
id: lem-csm-frontier-quartic-engineering-scaling
kind: lemma
title: Engineering scaling of the Gaussian gradient and quartic actions
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-chain-rule
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-chain-rule: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Uses the Axiom of Countable Choice through the cited nonnegative change-of-variables theorem."
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Statistical Field Theory, complete Cambridge lecture notes
      url: https://www.damtp.cam.ac.uk/user/tong/sft/sft.pdf
      locator: §§3.1–3.2, printed pp. 59–69 / PDF pp. 63–73, Gaussian scaling dimensions and engineering power counting.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$, meaning every sequence $(X_n)_{n\in\mathbb N}$ of nonempty sets has a function $f$ with $f(n)\in X_n$ for every $n$. Let integer $d\ge1$, dimensionless scale factor $b>0$, and real function $\varphi'\in C_c^\infty(\mathbb R^d)$ be given, where $C_c^\infty(\mathbb R^d)$ denotes the functions $\psi:\mathbb R^d\to\mathbb R$ whose partial derivatives of every order exist and are continuous and whose support $\operatorname{supp}\psi:=\overline{\{x:\psi(x)\ne0\}}$ is compact. Define

$$\varphi_b(x):=b^{-(d-2)/2}\varphi'(x/b),\qquad x\in\mathbb R^d.$$

For any $\psi\in C_c^\infty(\mathbb R^d)$, define its Gaussian gradient action and quartic integral by

$$S_2[\psi]:=\frac12\int_{\mathbb R^d}|\nabla\psi(x)|^2\,d\lambda_d(x),\qquad Q_4[\psi]:=\frac1{4!}\int_{\mathbb R^d}\psi(x)^4\,d\lambda_d(x),$$

where $\nabla$ is the vector of first partial derivatives. Then

$$S_2[\varphi_b]=S_2[\varphi'],\qquad Q_4[\varphi_b]=b^{4-d}Q_4[\varphi'].$$

Consequently a coefficient $g$ multiplying $Q_4$ transforms to $g'=b^{4-d}g$ when the action is re-expressed in the rescaled coordinate $x'=x/b$. This is engineering power counting on smooth test fields; it neither constructs an interacting probability measure nor proves an interacting critical exponent.

## Statement references

[[def-countable-choice]]

[[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[[thm-chain-rule]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, integer $d\ge1$, $b>0$, and a real smooth compactly supported $\varphi'$ on $\mathbb R^d$.

[F1] Under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism changes a nonnegative Lebesgue integral by its absolute Jacobian ([[def-countable-choice]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F2] The derivative of a composition is given by the chain rule ([[thm-chain-rule]]).

## Proof

1.1 The map $T(x')=b x'$ is a $C^1$ diffeomorphism of $\mathbb R^d$ with Jacobian determinant $b^d$. By [F2], each partial derivative satisfies
$$\partial_{x_j}\varphi_b(x)=b^{-(d-2)/2}b^{-1}(\partial_{x'_j}\varphi')(x/b)=b^{-d/2}(\partial_{x'_j}\varphi')(x/b).$$
Thus $|\nabla\varphi_b(x)|^2=b^{-d}|\nabla\varphi'(x/b)|^2$. Applying [F1] with $T$ to this nonnegative integrand gives
$$S_2[\varphi_b]=\frac12\int_{\mathbb R^d}b^{-d}|\nabla\varphi'(x')|^2b^d\,d\lambda_d(x')=S_2[\varphi'].$$
The compact support and smoothness assumptions make these integrands measurable and finite. [given, F1, F2, algebra]

2.1 The same change of variables gives
$$Q_4[\varphi_b]=\frac1{4!}\int_{\mathbb R^d}b^{-2(d-2)}\varphi'(x/b)^4\,d\lambda_d(x) =b^{d-2(d-2)}Q_4[\varphi']=b^{4-d}Q_4[\varphi'].$$
Therefore $gQ_4[\varphi_b]=g'Q_4[\varphi']$ with $g'=b^{4-d}g$, as claimed. [given, F1, algebra] ∎
