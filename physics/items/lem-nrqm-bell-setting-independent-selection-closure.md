---
id: lem-nrqm-bell-setting-independent-selection-closure
aliases: [nrqm-bell-setting-independent-selection-closure]
kind: lemma
domain: mathematics
title: "Conditioning on a setting-independent selection preserves local-response representability and the CHSH bound"
status: draft
origin: session
dependency_level: 3
deps: [def-nrqm-bell-binary-correlation-models, def-nrqm-bell-local-response-representation, thm-nrqm-bell-local-representations-satisfy-chsh, def-probability-measure, def-measure, def-expectation-of-a-nonnegative-or-integrable-random-variable, cor-expectation-of-an-indicator-is-probability, prop-indicator-function-is-measurable-iff-its-set-is-measurable, cor-expectation-linearity-monotonicity-and-modulus-bound, thm-nonnegative-measurable-functions-admit-increasing-simple-approximations, thm-monotone-convergence-for-the-integral, def-integral-of-a-nonnegative-simple-function, def-finite-sum]
dependency_roles:
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  def-nrqm-bell-local-response-representation: mathematical-premise
  thm-nrqm-bell-local-representations-satisfy-chsh: mathematical-premise
  def-probability-measure: mathematical-premise
  def-measure: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  cor-expectation-of-an-indicator-is-probability: mathematical-premise
  prop-indicator-function-is-measurable-iff-its-set-is-measurable: mathematical-premise
  cor-expectation-linearity-monotonicity-and-modulus-bound: mathematical-premise
  thm-nonnegative-measurable-functions-admit-increasing-simple-approximations: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  def-integral-of-a-nonnegative-simple-function: mathematical-premise
  def-finite-sum: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014) 419, Section I.A, PDF page 3: the decomposition p(ab|xy) = integral of q(lambda) p(a|x,lambda) p(b|y,lambda), in which the settings are chosen independently of the specification lambda; conditioning on a specification-only event reweights q"
      url: "https://arxiv.org/pdf/1303.2849"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1.4, printed pages 113-115 (PDF pages 121-123): experimental tests of Bell's inequality and the qualification that a recorded sample is a sub-ensemble of the pairs produced"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Let $\mu$ be a binary correlation model on finite setting sets $I,J$ with
outcome labels $\Sigma=\{-1,+1\}$
([[def-nrqm-bell-binary-correlation-models]]), and suppose that $\mu$ admits a
local-response representation with response laws $(\alpha_{i})_{i\in I}$,
$(\beta_{j})_{j\in J}$ on a probability space
$(\Lambda,\Sigma_{\Lambda},\mathbb P)$
([[def-nrqm-bell-local-response-representation]]). Let
$D\in\Sigma_{\Lambda}$ be a **selection event** with $\mathbb P(D)>0$, put
$$\mathbb P_{D}(A):=\frac{\mathbb P(A\cap D)}{\mathbb P(D)}\qquad(A\in\Sigma_{\Lambda})$$
for the **conditional probability measure** on $D$, and define the
**$D$-conditional tables**
$$\mu^{D}_{ij}(\varepsilon,\delta):=\frac{1}{\mathbb P(D)} \int_{\Lambda}\mathbf 1_{D}(\lambda)\,\alpha_{i}(\lambda,\varepsilon)\, \beta_{j}(\lambda,\delta)\,d\mathbb P(\lambda)$$
for $(i,j)\in I\times J$ and $(\varepsilon,\delta)\in\Sigma\times\Sigma$. Then:

(a) $\mathbb P_{D}$ is a probability measure on $(\Lambda,\Sigma_{\Lambda})$
and $\mu^{D}:=(\mu^{D}_{ij})$ is a binary correlation model on $(I,J)$;

(b) the same response laws represent $\mu^{D}$ over $\mathbb P_{D}$:
$$\mu^{D}_{ij}(\varepsilon,\delta) =\int_{\Lambda}\alpha_{i}(\lambda,\varepsilon)\,\beta_{j}(\lambda,\delta)\, d\mathbb P_{D}(\lambda)\qquad\text{for all }i,j,\varepsilon,\delta ;$$

(c) if $I=J=\{0,1\}$, then $\bigl|S(\mu^{D})\bigr|\le2$.

The selection event $D$ is a subset of the specification space: membership in
$D$ is the same for every setting pair and does not depend on the settings or
on the outcomes. No choice principle is used.

## Facts & Assumptions

**Given:** A binary correlation model $\mu$; a local-response representation $(\alpha_{i})_{i\in I}$, $(\beta_{j})_{j\in J}$ on $(\Lambda,\Sigma_{\Lambda},\mathbb P)$; a selection event $D$ with $\mathbb P(D)>0$; the measures $\mathbb P_{D}$ and tables $\mu^{D}$ displayed in the statement.

[F1] The representation identity $\mu_{ij}(\varepsilon,\delta)=\mathbb E_{\mathbb P}[\alpha_{i}(\cdot,\varepsilon)\beta_{j}(\cdot,\delta)]$ holds, the response laws are $[0,1]$-valued with $\sum_{\varepsilon}\alpha_{i}(\lambda,\varepsilon)=1=\sum_{\delta}\beta_{j}(\lambda,\delta)$ for every $\lambda$, and $\lambda\mapsto\alpha_{i}(\lambda,\varepsilon)$, $\lambda\mapsto\beta_{j}(\lambda,\delta)$ are measurable ([[def-nrqm-bell-local-response-representation]] clause (a)); a binary correlation model is a family of normalized $[0,1]$-valued tables ([[def-nrqm-bell-binary-correlation-models]] clause (a)).

[F2] $\mathbb P$ is a measure with $\mathbb P(\Lambda)=1$: it is countably additive on pairwise disjoint families and finitely additive, and $\mathbb P(\varnothing)=0$ ([[def-measure]], [[def-probability-measure]]).

[F3] For an event $A$ the expectation of its indicator is its probability, $\mathbb E[\mathbf 1_{A}]=\mathbb P(A)$, and $\mathbf 1_{A}$ is measurable exactly when $A$ is ([[cor-expectation-of-an-indicator-is-probability]], [[prop-indicator-function-is-measurable-iff-its-set-is-measurable]], [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]).

[F4] Expectation is linear on finite sums of nonnegative bounded measurable functions, $\mathbb E[\sum_{k}c_{k}f_{k}]=\sum_{k}c_{k}\mathbb E[f_{k}]$ for finite index sets and real coefficients $c_{k}\ge0$ ([[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[def-finite-sum]]); in particular the finite sums over $\Sigma$ commute with the integral.

[F5] Every nonnegative measurable $f$ is the pointwise limit of an increasing sequence $(s_{k})$ of nonnegative simple functions with $0\le s_{k}\le s_{k+1}\le f$ ([[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]]); for such a sequence and any measure $\nu$, $\int s_{k}\,d\nu\uparrow\int f\,d\nu$ ([[thm-monotone-convergence-for-the-integral]]); the integral of a nonnegative simple function is defined as its finite weighted sum ([[def-integral-of-a-nonnegative-simple-function]]).

[F6] If $\mu$ admits a local-response representation on $I=J=\{0,1\}$, then $|S(\mu)|\le2$ ([[thm-nrqm-bell-local-representations-satisfy-chsh]]).

## Proof

**Proof technique:** direct; verify that conditioning on a measurable selection event gives a probability measure, prove the change-of-measure identity between $\mathbb P_{D}$ and $\mathbb P$ by the indicator-simple-monotone-convergence ladder, and apply it to the bounded response products.

**Given:** The data of the statement and [F1]-[F6].

1.1 [$\mathbb P_{D}$ is a probability measure] Since $\mathbb P(D)>0$, the definition of $\mathbb P_{D}$ is meaningful; it is nonnegative and $\mathbb P_{D}(\Lambda)=\mathbb P(\Lambda\cap D)/\mathbb P(D)=1$. For pairwise disjoint $A_{n}\in\Sigma_{\Lambda}$ with union $A$, the sets $A_{n}\cap D$ are pairwise disjoint with union $A\cap D$, so countable additivity of $\mathbb P$ [F2] gives $\mathbb P_{D}(A)=\mathbb P(A\cap D)/\mathbb P(D)=\sum_{n}\mathbb P(A_{n}\cap D)/\mathbb P(D)=\sum_{n}\mathbb P_{D}(A_{n})$; hence $\mathbb P_{D}$ is a probability measure on $(\Lambda,\Sigma_{\Lambda})$. [given, F2, algebra]

2.1 [Indicators] Let $A\in\Sigma_{\Lambda}$. Then $\mathbf 1_{D}\mathbf 1_{A}=\mathbf 1_{A\cap D}$, and [F3] applied to the probability space $(\Lambda,\Sigma_{\Lambda},\mathbb P)$ gives $\int\mathbf 1_{D}\mathbf 1_{A}\,d\mathbb P=\mathbb E[\mathbf 1_{A\cap D}]=\mathbb P(A\cap D)$, while [F3] applied to $(\Lambda,\Sigma_{\Lambda},\mathbb P_{D})$ gives $\int\mathbf 1_{A}\,d\mathbb P_{D}=\mathbb E_{\mathbb P_{D}}[\mathbf 1_{A}]=\mathbb P_{D}(A)=\mathbb P(A\cap D)/\mathbb P(D)$; hence $\int_{\Lambda}\mathbf 1_{A}\,d\mathbb P_{D}=\mathbb P(D)^{-1}\int_{\Lambda}\mathbf 1_{D}\mathbf 1_{A}\,d\mathbb P$. [given, F3, step 1.1, algebra]

3.1 [Nonnegative simple functions] By [F4] and the definition of the integral of a nonnegative simple function, both sides of the identity of step 2.1 are linear in the integrand over finite nonnegative combinations; hence for every nonnegative simple function $s$ on $(\Lambda,\Sigma_{\Lambda})$ one has $\int_{\Lambda}s\,d\mathbb P_{D}=\mathbb P(D)^{-1}\int_{\Lambda}\mathbf 1_{D}s\,d\mathbb P$. [step 2.1, F4, algebra]

3.2 [Normalization] By [F1] and [F4], $\sum_{\varepsilon,\delta}\mu^{D}_{ij}(\varepsilon,\delta)=\mathbb P(D)^{-1}\int\mathbf 1_{D}\bigl(\sum_{\varepsilon}\alpha_{i}(\cdot,\varepsilon)\bigr)\bigl(\sum_{\delta}\beta_{j}(\cdot,\delta)\bigr)d\mathbb P=\mathbb P(D)^{-1}\int\mathbf 1_{D}\,d\mathbb P=\mathbb P(D)/\mathbb P(D)=1$, the last equality by the indicator identity of step 2.1 with $A=\Lambda$, and each $\mu^{D}_{ij}(\varepsilon,\delta)\ge0$ by nonnegativity of the integrand; hence $\mu^{D}$ is a binary correlation model on $(I,J)$. Together with step 1.1 this is (a). [step 1.1, step 2.1, F1, F4, algebra]

4.1 [Bounded measurable functions] Let $f\ge0$ be measurable and bounded, say $0\le f\le M<+\infty$. By [F5] choose an increasing sequence $(s_{k})$ of nonnegative simple functions with $s_{k}\uparrow f$; then $\mathbf 1_{D}s_{k}\uparrow\mathbf 1_{D}f$, and monotone convergence [F5] applied to the measures $\mathbb P_{D}$ and $\mathbb P$ gives $\int s_{k}\,d\mathbb P_{D}\uparrow\int f\,d\mathbb P_{D}$ and $\int\mathbf 1_{D}s_{k}\,d\mathbb P\uparrow\int\mathbf 1_{D}f\,d\mathbb P$. Passing to the limit in the identity of step 3.1, valid for every $k$, yields $\int_{\Lambda}f\,d\mathbb P_{D}=\mathbb P(D)^{-1}\int_{\Lambda}\mathbf 1_{D}f\,d\mathbb P$. [step 3.1, F5, algebra]

5.1 [Representation over $\mathbb P_{D}$] Fix $i,j,\varepsilon,\delta$ and put $f:=\alpha_{i}(\cdot,\varepsilon)\beta_{j}(\cdot,\delta)$. By [F1] $f$ is a product of two measurable $[0,1]$-valued functions, hence measurable and bounded with $0\le f\le1$. Step 4.1 gives $\int f\,d\mathbb P_{D}=\mathbb P(D)^{-1}\int\mathbf 1_{D}f\,d\mathbb P=\mu^{D}_{ij}(\varepsilon,\delta)$ by the definition of the $D$-conditional tables; this is (b). [given, F1, step 4.1, algebra]

6.1 [Bound and assembly] Step 5.1 exhibits a local-response representation of $\mu^{D}$ with the same response laws over the probability space $(\Lambda,\Sigma_{\Lambda},\mathbb P_{D})$; hence [F6] applies to $\mu^{D}$ and gives $|S(\mu^{D})|\le2$ when $I=J=\{0,1\}$, which is (c). Steps 1.1 and 3.2 prove (a) and step 5.1 proves (b). [step 1.1, step 3.2, step 5.1, F6] ∎

## Remarks

- **Setting-independent selection.** The lemma conditions on an event of the specification space alone. This is the mathematical form of a **setting-independent selection**: whether a run enters the recorded sample is determined by the specification and not by the settings or the outcomes. Nothing is claimed here for selection rules that depend on the distant setting, on the local setting or on the observed outcomes; those require their own models and are not covered by the lemma.
- **Direction of use.** The lemma is used in the converse direction of detection: if the full tables of a comparison admit a local-response representation and the recorded trials are the runs that pass a setting-independent selection, then the recorded tables again admit one, so the CHSH bound holds for the recorded tables too. Without such a selection model no transfer of the bound to a sub-ensemble is asserted.
