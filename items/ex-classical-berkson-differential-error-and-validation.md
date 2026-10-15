---
id: ex-classical-berkson-differential-error-and-validation
kind: example
title: "Classical and Berkson slopes, misclassification, and validation"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-measurement-error-models
  - def-nondifferential-measurement-error-relative-to-named-variables
  - thm-classical-error-attenuation-in-simple-linear-regression
  - thm-berkson-error-slope-in-simple-linear-model
  - prop-observed-law-does-not-identify-latent-error-variance-split
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - def-independent-random-elements
  - thm-expectation-of-products-of-independent-random-variables
  - def-conditional-independence-given-a-sigma-algebra
  - def-axiom-of-choice
proof_strategy: direct
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
    - title: "Hernán and Robins, Causal Inference: What If, Chapter 9"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
      locator: "§§9.1–9.2 and Fine Point 9.1, printed pp. 125–128"
    - title: "Keogh et al., STRATOS guidance on measurement error and misclassification, Part 1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7450672/"
      locator: "§§2.1–2.2, 3.1.1, 3.2.1–3.2.4 and 4.1–4.2"
---

## Example

Each construction below is a separate probability model.

1. **Classical error.** Let $(X,U)$ be uniform on $\{-1,1\}^2$, put
   $W=X+U$ and $Y=2X$. The latent-value slope is $2$, while the measured-value
   slope is $1$.
2. **Berkson error.** Let $(W,U)$ instead be uniform on $\{-1,1\}^2$, put
   $X=W+U$ and $Y=2X$. Under this different error direction and independence
   condition, the slope of $Y$ on $W$ is $2$.
3. **Nondifferential binary misclassification.** Let $X$ be fair binary and
   $Y=X$. Given either value of $X$, set $W=X$ with probability $1/5$ and
   $W=1-X$ with probability $4/5$. This mechanism is nondifferential relative
   to $Y$ given $X$, but it reverses the sign of the observed mean contrast:
   the true contrast is $1$ and the contrast by $W$ is $-3/5$.
4. **Differential binary misclassification.** Give $(X,Y)$ probabilities
   $3/8,1/8,1/8,3/8$ at $(0,0),(0,1),(1,0),(1,1)$, respectively, and set
   $W=1-Y$. The true contrast of $Y$ across $X$ is $1/2$, while the contrast
   across $W$ is $-1$; here $W$ is not conditionally independent of $Y$ given
   $X$.
5. **Unidentified variance split and validation.** Let $A,B,C,D$ be the
   coordinate signs on the uniform space $\{-1,1\}^4$. The decompositions
   $X_0=A+B,\ U_0=C+D$ and $X_1=A+B+C,\ U_1=D$ both give
   $W=A+B+C+D$. Their latent-error variance pairs are $(2,2)$ and $(3,1)$.
   The joint validation laws of $(X,W)$ differ: $\mathbb P(X_0=0)=1/2$ but
   $\mathbb P(X_1=0)=0$. Thus observing $X$ adds information that separates
   these two candidate laws.

The fifth construction shows what additional validation information can do
for this candidate pair; it does not assert a universal correction rule.

## Facts & Assumptions

**Given:** The finite probability models and their cell probabilities specified in the Example.

[F1] Classical and Berkson errors have the opposite additive equations and their own independence conditions ([[def-measurement-error-models]]).

[F2] Variance and covariance are centered expectations, and covariance is bilinear ([[def-moments-variance-and-covariance]], [[thm-covariance-bilinearity-and-symmetry]]).

[F3] Independence of real random variables is independence of their generated sigma-algebras ([[def-independent-random-elements]]).

[F4] Expectations of products of finite independent integrable families factor ([[thm-expectation-of-products-of-independent-random-variables]]).

[F5] Under the stated classical hypotheses, the measured-value slope is the variance-ratio formula in the classical error theorem ([[thm-classical-error-attenuation-in-simple-linear-regression]]).

[F6] Under the stated Berkson hypotheses, the measured-value slope equals the latent-value slope ([[thm-berkson-error-slope-in-simple-linear-model]]).

[F7] Nondifferentiality is conditional independence relative to the named variables ([[def-nondifferential-measurement-error-relative-to-named-variables]]).

[F8] The general conditional-independence definition explicitly assumes the Axiom of Choice so that its conditional-expectation classes are available ([[def-conditional-independence-given-a-sigma-algebra]], [[def-axiom-of-choice]]).

[F9] The observed law need not identify the latent-error variance pair ([[prop-observed-law-does-not-identify-latent-error-variance-split]]).

[F10] Conditional independence is the conditional-expectation factorization; it holds automatically when one side is measurable with respect to the conditioning sigma-algebra ([[def-conditional-independence-given-a-sigma-algebra]]).

## Verification

1.1 In the first construction, each of the four sign pairs has probability $1/4$ and each coordinate sign has probability $1/2$, so $X$ and $U$ are independent. Each has $\mathbb E[X]=0$ and $\operatorname{Var}(X)=1$, and likewise for $U$. Their covariance is $0$ by [F2]–[F4]. The error is classical, $\epsilon=0$, and the response coefficient is $\beta=2$. Applying [F5] gives measured slope $2(1)/(1+1)=1$, while $Y=2X$ gives latent slope $2$. [given, F1, F2, F3, F4, F5, algebra]

1.2 In the second construction, $W$ and $U$ are independent centered signs with variance $1$, $X=W+U$, and $\epsilon=0$. Thus the distinct Berkson hypotheses hold, and [F6] gives measured slope $2$. [given, F1, F2, F3, F4, F6]

1.3 In the third construction $Y=X$. On each positive-probability stratum $X=x$, the variable $Y$ is constant. The conditional-independence definition [F10], applied under the explicit Axiom of Choice premise [F8], therefore gives for all bounded measurable $f,g$, $$\mathbb E[f(W)g(Y)\mid\sigma(X)]=g(X)\mathbb E[f(W)\mid\sigma(X)]=\mathbb E[f(W)\mid\sigma(X)]\mathbb E[g(Y)\mid\sigma(X)].$$ By [F7], the error is nondifferential relative to $Y$ given $X$. [given, F7, F8, F10, algebra]

1.4 In the fourth construction, $\mathbb E[Y\mid X=1]-\mathbb E[Y\mid X=0]=3/4-1/4=1/2$. Since $W=1-Y$, $\mathbb E[Y\mid W=1]-\mathbb E[Y\mid W=0]=0-1=-1$. On the positive stratum $X=1$, the conditional expectation of $\mathbf 1_{\{W=1\}}\mathbf 1_{\{Y=1\}}$ is $0$, whereas the product of the two conditional expectations is $(1/4)(3/4)=3/16$. The factorization in [F10] fails, so the error is differential relative to $Y$ given $X$. [given, F7, F8, F10, algebra]

1.5 On the uniform four-sign space, every specified pattern of $k$ distinct signs has probability $2^{-k}$; thus the coordinates are mutually independent, centered, and have variance $1$. For sign-pattern sets $E,F$ on disjoint blocks of sizes $2,2$ or $3,1$, the joint probability is $|E||F|/16$, the product of the two block probabilities; hence $X_i$ is independent of $U_i$ for $i=0,1$. Their distinct-coordinate covariances are zero by [F4]. They satisfy $W_0=W_1=A+B+C+D$ pointwise. [given, F1, F3, F4, algebra]

2.1 The true contrast is $\mathbb E[Y\mid X=1]-\mathbb E[Y\mid X=0]=1$. The table gives $\mathbb P(W=1)=1/2$, $\mathbb E[Y\mid W=1]=1/5$, and $\mathbb E[Y\mid W=0]=4/5$, so the measured contrast is $1/5-4/5=-3/5$. Thus this nondifferential mechanism reverses the contrast direction. [given, F2, step 1.3, algebra]

2.2 Bilinearity [F2] and the zero coordinate covariances from step 1.5 give $\operatorname{Var}(X_0)=1+1=2$, $\operatorname{Var}(U_0)=1+1=2$, $\operatorname{Var}(X_1)=1+1+1=3$, and $\operatorname{Var}(U_1)=1$. Thus the same observed $W$ law is compatible with distinct variance pairs, as asserted in [F9]. [F2, F3, F4, F9, step 1.5, algebra]

3.1 The event $X_0=0$ requires opposite signs among $A,B$, so has probability $2/4=1/2$. Since $X_1=A+B+C$ is a sum of three signs, it takes values only in $\{-3,-1,1,3\}$, and therefore $\mathbb P(X_1=0)=0$. These unequal marginals show that the joint validation laws of $(X,W)$ differ, so observing $X$ adds information that separates these two candidate laws. [given, step 1.5, step 2.2, algebra] ∎
