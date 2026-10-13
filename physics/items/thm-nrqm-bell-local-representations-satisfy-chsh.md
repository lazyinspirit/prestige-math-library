---
id: thm-nrqm-bell-local-representations-satisfy-chsh
aliases: [nrqm-bell-local-representations-satisfy-chsh]
kind: theorem
domain: mathematics
title: "The CHSH bound for every binary correlation model admitting a local-response representation"
status: published
origin: session
dependency_level: 2
deps: [def-nrqm-bell-binary-correlation-models, def-nrqm-bell-local-response-representation, cor-expectation-linearity-monotonicity-and-modulus-bound, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-finite-sum, def-measurable-function-between-measurable-spaces]
dependency_roles:
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  def-nrqm-bell-local-response-representation: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  def-finite-sum: mathematical-premise
  def-measurable-function-between-measurable-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014) 419, Section I.A, PDF page 3, equation (4) and its derivation: the CHSH inequality S <= 2 for probabilities satisfying the local decomposition with local expectations in [-1,1]"
      url: "https://arxiv.org/pdf/1303.2849"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1.4, printed pages 113-115 (PDF pages 121-123): Bell's inequality for a setting-independent response-function model, obtained by bounding the response product pointwise"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Let $\mu$ be a binary correlation model on the setting sets $I=J=\{0,1\}$
with outcome labels $\Sigma=\{-1,+1\}$, with correlations $E_{ij}(\mu)$ and
CHSH functional $S(\mu)$ as in
[[def-nrqm-bell-binary-correlation-models]] clauses (d), and suppose that
$\mu$ admits a local-response representation with response laws
$(\alpha_{i})_{i\in I}$, $(\beta_{j})_{j\in J}$ on a probability space
$(\Lambda,\Sigma_{\Lambda},\mathbb P)$
([[def-nrqm-bell-local-response-representation]]). Then
$$\bigl|S(\mu)\bigr|\le 2 .$$
The statement is a theorem about the tables and their representation; it
asserts no measurement, no dynamics, no spatial or causal structure, and it
contains no physics. No choice principle is used.

## Facts & Assumptions

**Given:** A binary correlation model $\mu$ on $I=J=\{0,1\}$; a local-response representation with response laws $(\alpha_{i})$, $(\beta_{j})$ on $(\Lambda,\Sigma_{\Lambda},\mathbb P)$.

[F1] The correlations and the CHSH functional are the finite sums $E_{ij}(\mu)=\sum_{\varepsilon,\delta\in\Sigma}\varepsilon\delta\,\mu_{ij}(\varepsilon,\delta)$ and $S(\mu)=E_{00}(\mu)+E_{01}(\mu)+E_{10}(\mu)-E_{11}(\mu)$ ([[def-nrqm-bell-binary-correlation-models]] clause (d), [[def-finite-sum]]), and the representation identity $\mu_{ij}(\varepsilon,\delta)=\mathbb E_{\mathbb P}[\alpha_{i}(\cdot,\varepsilon)\beta_{j}(\cdot,\delta)]$ holds for all $i,j,\varepsilon,\delta$ ([[def-nrqm-bell-local-response-representation]] clause (a)).

[F2] For every $i\in I$ the **local mean** $a_{i}(\lambda):=\sum_{\varepsilon\in\Sigma}\varepsilon\,\alpha_{i}(\lambda,\varepsilon)=\alpha_{i}(\lambda,+1)-\alpha_{i}(\lambda,-1)$ is a measurable function of $\lambda$ taking values in $[-1,1]$, because $\alpha_{i}(\lambda,\cdot)$ is a probability law on $\Sigma=\{-1,+1\}$ ([[def-nrqm-bell-local-response-representation]] clause (a)); the same holds for $b_{j}(\lambda):=\sum_{\delta\in\Sigma}\delta\,\beta_{j}(\lambda,\delta)$ ([[def-measurable-function-between-measurable-spaces]], [[def-finite-sum]]).

[F3] Expectation is linear on finite sums: for integrable real random variables $X_{\varepsilon}$ on $(\Lambda,\Sigma_{\Lambda},\mathbb P)$ and real coefficients $c_{\varepsilon}$, $\mathbb E[\sum_{\varepsilon\in\Sigma}c_{\varepsilon}X_{\varepsilon}]=\sum_{\varepsilon\in\Sigma}c_{\varepsilon}\mathbb E[X_{\varepsilon}]$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-finite-sum]]); it is monotone and satisfies $|\mathbb E[Y]|\le\mathbb E[|Y|]$ for integrable real $Y$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

## Proof

**Proof technique:** direct; rewrite each correlation as the integral of the product of the two local means, bound the integrand of the CHSH functional pointwise by $2$ on the interval $[-1,1]^{4}$, and integrate.

**Given:** The data of the statement and [F1]-[F3].

1.1 [Correlations through local means] Fix $(i,j)\in\{0,1\}^{2}$. By [F1] and [F3], $E_{ij}(\mu)=\sum_{\varepsilon\in\Sigma}\sum_{\delta\in\Sigma}\varepsilon\delta\,\mathbb E_{\mathbb P}[\alpha_{i}(\cdot,\varepsilon)\beta_{j}(\cdot,\delta)]=\mathbb E_{\mathbb P}\bigl[\sum_{\varepsilon\in\Sigma}\sum_{\delta\in\Sigma}\varepsilon\delta\,\alpha_{i}(\cdot,\varepsilon)\beta_{j}(\cdot,\delta)\bigr]=\mathbb E_{\mathbb P}\bigl[\bigl(\sum_{\varepsilon\in\Sigma}\varepsilon\,\alpha_{i}(\cdot,\varepsilon)\bigr)\bigl(\sum_{\delta\in\Sigma}\delta\,\beta_{j}(\cdot,\delta)\bigr)\bigr]=\mathbb E_{\mathbb P}[a_{i}b_{j}]$ with the local means of [F2], the inner factorizations being the distributive law in $\mathbb R$ for the two-term sums over $\Sigma$. [given, F1, F2, F3, algebra]

1.2 [Pointwise bound] Let $u,v,s,t\in[-1,1]$. Then $|s(u+v)+t(u-v)|\le|u+v|+|u-v|$ by the triangle inequality and $|s|,|t|\le1$. For real $u,v$ one has $|u+v|+|u-v|=2\max(|u|,|v|)$: if $|v|\le|u|$ then both $u+v$ and $u-v$ have the sign of $u$ (for $|v|\le|u|$ neither crosses $0$), so the sum is $|2u|=2\max(|u|,|v|)$, and the case $|v|>|u|$ is symmetric with the roles of $u$ and $v$ exchanged. Hence $|u+v|+|u-v|\le2$, and the bound is $|s(u+v)+t(u-v)|\le2$. [given, algebra]

2.1 [CHSH bound] By [F1], [F2] and step 1.1, $S(\mu)=\mathbb E_{\mathbb P}[a_{0}b_{0}]+\mathbb E_{\mathbb P}[a_{0}b_{1}]+\mathbb E_{\mathbb P}[a_{1}b_{0}]-\mathbb E_{\mathbb P}[a_{1}b_{1}]=\mathbb E_{\mathbb P}\bigl[a_{0}(b_{0}+b_{1})+a_{1}(b_{0}-b_{1})\bigr]$, the second equality by the linearity of [F3]; the four local means take values in $[-1,1]$ by [F2], so the pointwise bound of step 1.2 gives $\bigl|a_{0}(\lambda)(b_{0}(\lambda)+b_{1}(\lambda))+a_{1}(\lambda)(b_{0}(\lambda)-b_{1}(\lambda))\bigr|\le2$ for every $\lambda\in\Lambda$. The modulus bound and monotonicity of [F3] applied to this pointwise bound yield $|S(\mu)|\le\mathbb E_{\mathbb P}[2]=2$. [step 1.1, step 1.2, F1, F2, F3, algebra] ∎

## Remarks

- **Deterministic special case.** If the representation has response functions $a_{i},b_{j}:\Lambda\to\Sigma$ in the sense of clause (b) of [[def-nrqm-bell-local-response-representation]], then the four compositions $a_{i}b_{j}$ are $\pm1$-valued random variables on one probability space and the present bound reduces to the classical CHSH inequality for such variables, which is also proved directly in [[lem-nrqm-composites-chsh-and-finite-sampling-law]] (a). The probabilistic form proved here is the general case: it does not assume determinism of the responses.
- **Sharpness.** The bound $2$ is not improvable for the class: the model $I=J=\{0,1\}$ with $\mu_{ij}$ the point mass at $(\varepsilon,\delta)$ with $\varepsilon=\delta=+1$ for all $(i,j)$ admits the deterministic representation with $a_{i}\equiv+1$, $b_{j}\equiv+1$ and has $S(\mu)=2$; reversing the sign of every $b_{j}$ gives $S(\mu)=-2$.
