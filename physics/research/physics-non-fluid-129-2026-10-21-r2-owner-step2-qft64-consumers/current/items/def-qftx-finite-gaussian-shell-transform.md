---
id: def-qftx-finite-gaussian-shell-transform
kind: definition
domain: mathematics
library: mathematics
title: Normalized finite Gaussian shell transform
status: draft
origin: pipeline
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-natural-logarithm
  - thm-exponential-is-strictly-increasing
justified_by: []
forward_refs: []
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-multivariate-normal-law: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-exponential-is-strictly-increasing: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Skinner, Advanced Quantum Field Theory, Chapter 2: QFT in Zero Dimensions"
      url: "https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap2.pdf"
      locator: "§§2.1–2.2, printed pp.13–16: normalized finite Gaussian expectation and source-generating integral."
    - title: "Nima Moshayedi, Quantum Field Theory and Functional Integrals"
      url: "https://arxiv.org/pdf/1902.08652"
      locator: "§11.2, printed pp.44–48: finite-dimensional Gaussian laws and generating functions."
verification:
  precheck: pending
---

## Definition

Assume AC and let $d\ge1$. For a real symmetric positive-semidefinite covariance matrix $C$, write $\gamma_C=N_d(0,C)$, allowing singular $C$. For a nonnegative Borel function $f:\mathbb R^d\to[0,\infty]$, define the normalized shell transform
$$T_Cf(x):=\int_{\mathbb R^d}f(x+z)\,d\gamma_C(z)\in[0,\infty].$$
This is a Borel function of $x$. If $V:\mathbb R^d\to[0,\infty)$ is finite-valued and Borel, define
$$V_C(x):=-\log\bigl(T_C(e^{-V})(x)\bigr).$$
Then $V_C$ is a finite nonnegative Borel function, and $0<T_C(e^{-V})(x)\le1$ for every $x$. The covariance convention is $\mathbb E[ZZ^T]=C$; $x,z,V$ use the same finite-regulator field-coordinate convention, so $C$ has the square units of those coordinates. The measures $\gamma_C$ are normalized probabilities, with no determinant/vacuum factor in $T_C$. The transform is defined at finite regulator only.

## Facts & Assumptions

**Given:** AC, finite $d\ge1$, symmetric positive-semidefinite $C$, and the functions in the Definition.

[A1] [[def-axiom-of-choice]]: the finite-dimensional Gaussian-law definition assumes AC.

[F1] [[def-multivariate-normal-law]]: for positive-semidefinite $C$, the Borel probability $\gamma_C=N_d(0,C)$ exists, including singular $C$.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: for product-measurable nonnegative functions, parameter integrals are measurable and iterated integrals agree.

[F3] [[def-natural-logarithm]]: $\log$ is defined on $(0,\infty)$ as the inverse of $\exp$.

[F4] [[thm-exponential-is-strictly-increasing]]: $\exp$ is continuous and strictly increasing on $\mathbb R$.

## Proof

**Proof technique:** direct measurability and positivity check.

**Given:** The objects and hypotheses in the Definition.

1.1 The map $(x,z)\mapsto f(x+z)$ is Borel because addition is continuous and $f$ is Borel. Lebesgue measure on $\mathbb R^d$ is sigma-finite because $\mathbb R^d=\bigcup_{n\ge1}[-n,n]^d$ and each cube has finite measure; $\gamma_C$ is a probability by [F1]. Thus [F2] makes $x\mapsto T_Cf(x)$ Borel, including when the integral is infinite. [A1, F1, F2, given]

2.1 For finite nonnegative Borel $V$, $g_x(z):=e^{-V(x+z)}$ is Borel and satisfies $0<g_x(z)\le1$. Its integral against the probability $\gamma_C$ is at most one. It is strictly positive: if the integral were zero, each set $\{z:g_x(z)\ge1/n\}$ would have measure zero, while their countable union is all of $\mathbb R^d$, contradicting $\gamma_C(\mathbb R^d)=1$. Thus $T_C(e^{-V})(x)\in(0,1]$. [F1, F2, step 1.1, algebra]

3.1 By [F3], the logarithm is defined at these values. Its continuity follows directly from [F4]: for $y_0>0$ and $\epsilon>0$, strict increase and continuity of $\exp$ give $\exp(\log y_0-\epsilon)<y_0<\exp(\log y_0+\epsilon)$; put $\delta=\min\{y_0-\exp(\log y_0-\epsilon),\exp(\log y_0+\epsilon)-y_0\}>0$. If $y>0$ and $|y-y_0|<\delta$, then $\exp(\log y_0-\epsilon)<y<\exp(\log y_0+\epsilon)$, and strict monotonicity gives $|\log y-\log y_0|<\epsilon$. Hence $V_C$ is finite, nonnegative, and Borel. If $C=0$, then for each coordinate $Z_i$, $\mathbb E Z_i^2=C_{ii}=0$. For every $n\ge1$, $0=\mathbb E Z_i^2\ge n^{-2}\mathbb P(|Z_i|\ge n^{-1})$, so $Z_i=0$ almost surely; the finite intersection gives $Z=0$ almost surely and $\gamma_0=\delta_0$; hence $T_0f=f$ and $V_0=V$. [F1, F3, F4, step 2.1, algebra] ∎
