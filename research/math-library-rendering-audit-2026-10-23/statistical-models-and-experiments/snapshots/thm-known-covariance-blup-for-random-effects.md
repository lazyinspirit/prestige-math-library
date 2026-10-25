---
id: thm-known-covariance-blup-for-random-effects
kind: theorem
title: "Known-covariance BLUP and its prediction-error covariance"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-linear-mixed-model
  - lem-marginal-covariance-of-linear-mixed-model
  - def-known-covariance-generalized-least-squares-estimator
  - thm-known-covariance-gls-is-blue
  - thm-normal-equations-for-best-affine-l2-prediction
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-continuous-preimages-of-borel-sets-are-borel
  - lem-measurable-functions-preserve-independence
  - thm-factorization-of-expectations-for-independent-variables
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Fan Li, STA610 Lecture 5: Estimation of Group Effects, PDF pp. 8–10"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec5-GroupEffects.pdf"
    - title: "Fan Li, STA610 Lecture 6: Linear Mixed-Effects Models, PDF pp. 11–12"
      url: "https://stat.duke.edu/~fl35/teaching/610-26F/Lec6-LME.pdf"
    - title: "Duchateau, Janssen, and Rowlands, Linear Mixed Models, Chapter 2 §2.4.3"
      url: "https://biometrics.ilri.org/Publication/Full%20Text/Linear_Mixed_Models/Chapter2_2_1to2_2.htm"
proof_strategy: direct
---

## Statement

In the moment-only linear mixed model, suppose $X$ has full column rank and the known marginal covariance $V=ZGZ^T+R$ is positive definite. Define
$$\widehat b=GZ^TV^{-1}(Y-X\widehat\beta_{\mathrm{GLS}}),\qquad \widehat\beta_{\mathrm{GLS}}=(X^TV^{-1}X)^{-1}X^TV^{-1}Y.$$
Here **best linear unbiased predictor (BLUP)** means that $\widehat b$ is unbiased for $\mathbb E b=0$ for every fixed $\beta$ and its prediction-error covariance is minimal in positive-semidefinite order among all affine linear predictors $a+BY$ with that same unbiasedness property. Then $\widehat b$ is a BLUP and
$$\operatorname{Cov}(b-\widehat b)=G-GZ^TV^{-1}ZG+ GZ^TV^{-1}X(X^TV^{-1}X)^{-1}X^TV^{-1}ZG.$$
No Gaussianity or Axiom of Choice is assumed. The covariance formula treats $G$ and $R$ as known; it does not cover the extra uncertainty from estimating variance components.

## Facts & Assumptions

**Given:** The moment-only mixed model, full-column-rank $X$, known $V\succ0$, and the GLS estimator.

[F1] $Y=X\beta+Zb+\varepsilon$, with centered independent $b,\varepsilon$, covariance matrices $G,R$, and finite second moments. [[def-linear-mixed-model]].

[F2] The marginal covariance is $V=ZGZ^T+R$. [[lem-marginal-covariance-of-linear-mixed-model]].

[F3] The best affine $L^2$ predictor has an intercept fixed by means and coefficients satisfying covariance normal equations; singular predictor covariance is allowed. [[thm-normal-equations-for-best-affine-l2-prediction]].

[F4] The GLS estimator is $\widehat\beta_{\mathrm{GLS}}=(X^TV^{-1}X)^{-1}X^TV^{-1}Y$, is unbiased, and has covariance $C=(X^TV^{-1}X)^{-1}$. [[def-known-covariance-generalized-least-squares-estimator]], [[thm-known-covariance-gls-is-blue]].

[F5] Covariance is bilinear in finite linear combinations. [[thm-covariance-bilinearity-and-symmetry]].

[F6] Variance and covariance are defined by centered second moments. [[def-moments-variance-and-covariance]].

[F7] Measurable coordinate functions preserve independence, and integrable products of independent coordinates factor. [[lem-measurable-functions-preserve-independence]], [[thm-factorization-of-expectations-for-independent-variables]].

[F8] Expectation is linear on finite sums of integrable random variables. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F9] Finite-dimensional linear maps are continuous and preserve Borel measurability of random vectors. [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]], [[thm-continuous-preimages-of-borel-sets-are-borel]].

[A1] $X$ has full column rank, the random vectors are square-integrable, $b$ is independent of $\varepsilon$, and the known covariance $V$ is positive definite.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $Y_c=Y-X\beta$. By [F1], each pair of coordinates $b_k,\varepsilon_\ell$ is independent; since both are centered, factorization in [F7] gives $\operatorname{Cov}(b,\varepsilon)=0$. Bilinearity [F5] then gives $\operatorname{Cov}(b,Y_c)=GZ^T$, while [F2] gives $\operatorname{Cov}(Y_c)=V$. The affine predictor is a Borel random vector by [F9]. For fixed $\beta$, apply [F3] coordinatewise to predict $b$ affinely from $Y$: the covariance normal equations have the unique solution $H=GZ^TV^{-1}$ because $V$ is invertible by [A1]. The intercept is $\mathbb E b-H\mathbb E Y=-HX\beta$ by [F8] and [F1]. Thus $H(Y-X\beta)$ is the best affine $L^2$ predictor when $\beta$ is treated as known. [A1, F1, F2, F3, F5, F7, F8, F9, algebra]

2.1 Write $C=(X^TV^{-1}X)^{-1}$ and $P=H(I-XCX^TV^{-1})$. Then $\widehat b=PY$ and $PX=0$, because $CX^TV^{-1}X=I_p$. By [F9], $\widehat b$ is Borel; by [F8] and [F1], $\mathbb E_\beta\widehat b=P X\beta=0=\mathbb E b$ for every $\beta$. Every affine linear predictor $a+BY$ unbiased for $b$ for every $\beta$ must have $a=0$ and $BX=0$. [A1, F1, F8, F9, step 1.1, algebra]

3.1 Let $Y_c=Y-X\beta$ and $u=b-HY_c$. By step 1.1, bilinearity gives $\operatorname{Cov}(u,Y_c)=GZ^T-HV=0$ and $\operatorname{Cov}(u)=G-GZ^TV^{-1}ZG-GZ^TV^{-1}ZG+GZ^TV^{-1}VV^{-1}ZG =G-GZ^TV^{-1}ZG.$ Also $\widehat\beta_{\mathrm{GLS}}-\beta=CX^TV^{-1}Y_c$, so its covariance is $C$ by [F4], and its covariance with $u$ is zero because step 1.1 gives $\operatorname{Cov}(u,Y_c)=0$. Since $b-\widehat b=u+HX(\widehat\beta_{\mathrm{GLS}}-\beta),$ the error covariance is $G-GZ^TV^{-1}ZG+HXCX^TH^T,$ which is the displayed matrix after substituting $H$ and $C$. [F1, F2, F4, F5, F6, step 1.1, step 2.1, algebra]

4.1 Let $BY$ be any other affine linear predictor unbiased for $b$ for every $\beta$. By step 2.1 its intercept is zero and $BX=0$. Put $D=B-P$, so $DX=0$ and the competing prediction error is $(b-PY)-DY$. Since $PV=GZ^T-HXCX^T$, one has $\operatorname{Cov}(b-PY,Y)=GZ^T-PV=HXCX^T.$ Therefore $\operatorname{Cov}(b-PY,DY)=HXCX^TD^T=HXC(DX)^T=0$. Expanding the competing error covariance now gives $\operatorname{Cov}(b-BY)=\operatorname{Cov}(b-PY)+DVD^T \succeq \operatorname{Cov}(b-PY).$ This is exactly the stated BLUP criterion. [A1, F1, F2, F4, F5, step 1.1, step 2.1, step 3.1, given, algebra] ∎

## Remarks

If variance components are estimated and substituted into this expression, the result is an empirical BLUP (eBLUP). This theorem supplies no exact prediction-error covariance for that plug-in estimator.
