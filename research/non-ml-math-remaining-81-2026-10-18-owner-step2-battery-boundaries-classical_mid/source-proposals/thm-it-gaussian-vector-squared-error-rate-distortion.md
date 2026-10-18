---
id: thm-it-gaussian-vector-squared-error-rate-distortion
kind: theorem
title: "Finite-dimensional Gaussian vector squared-error rate-distortion function"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-it-general-rate-distortion-function
  - def-it-general-mutual-information
  - def-measure-theoretic-mutual-information
  - def-standard-normal-and-normal-laws
  - def-standard-borel-conditional-mutual-information
  - lem-it-finite-vector-gaussian-water-level-allocation
  - lem-it-gaussian-reference-kernel-information-lower-bound
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-mutual-information-chain-rule
  - lem-kl-invariant-under-measurable-bijections
  - thm-general-kl-chain-rule-for-standard-borel-kernels
  - thm-orthogonal-transform-preserves-standard-normal-product-law
  - thm-kullback-leibler-is-nonnegative
  - thm-continuity-from-above-for-measures
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is inherited through standard-Borel disintegration, KL, and the Gaussian source suppliers."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed."
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§10.3.3, Theorem 10.3.3, printed pp. 312–314: finite-dimensional reverse water-filling formula."
    - title: "Robert M. Gray, Source Coding Theory, first edition"
      url: "https://ee.stanford.edu/~gray/sourcecodingtheory_rmg.pdf"
      locator: "§4.7.3, printed pp. 105–106: vector Gaussian lower bound; this item's proof supplies a KL argument for arbitrary reconstructions."
---

## Statement

Assume AC. Let $m\ge1$, let $X=(X_1,\ldots,X_m)$ have independent coordinates $X_i\sim N(0,\lambda_i)$ with $\lambda_i\ge0$, and let $Y\in\mathbb R^m$ be any jointly distributed reconstruction. Use squared Euclidean distortion $\mathbb E\|X-Y\|_2^2$. For $D\ge0$, the standard-Borel information rate-distortion function of [[def-it-general-rate-distortion-function]] in bits is
$$
R(D)=\begin{cases}+\infty,&D=0<\sum_i\lambda_i,\\[2pt] \frac12\sum_{i=1}^m\log_2^+(\lambda_i/\theta),&0<D<\sum_i\lambda_i,\\[2pt] 0,&D\ge\sum_i\lambda_i, \end{cases}
$$
where $\log_2^+(0):=0$ (and $\log_2^+(u)=\max(0,\log_2u)$ for $u>0$), and in the middle case $\theta$ is the unique positive solution of $\sum_i\min(\lambda_i,\theta)=D$. If all $\lambda_i=0$, then $R(D)=0$ for every $D\ge0$.

## Facts & Assumptions

**Given:** AC, finite $m\ge1$, nonnegative $\lambda_i$, a Gaussian vector $X$ with independent coordinates of those variances, and distortion budget $D\ge0$.

[A1] [[def-axiom-of-choice]]: AC is assumed by the standard-Borel KL, conditional-law, and Gaussian suppliers.

[F1] [[def-it-general-rate-distortion-function]] and [[def-it-general-mutual-information]]: the rate is the infimum over couplings with the fixed source marginal and expected distortion at most $D$; in nats, mutual information is the joint-law KL from the product of its marginals.

[F2] [[def-measure-theoretic-mutual-information]] and [[thm-mutual-information-chain-rule]] give $I((Z,V);U)=I(Z;U)+I(V;U\mid Z)$ as an extended nonnegative sum. By [[lem-kl-invariant-under-measurable-bijections]], swapping the two unconditioned coordinates sends the joint law and its product reference to the corresponding reversed laws; fixing a conditioning coordinate sends its same-marginal conditional-product reference to the reversed reference as well. Thus $I(U;V)=I(V;U)$ and $I(U;V\mid W)=I(V;U\mid W)$. Combining these symmetries with the stated first-argument rule proves
$$I(U;(Z,V))=I(U;Z)+I(U;V\mid Z).$$
For an additional standard-Borel W, apply this identity to the conditional law given $W=w$ for almost every w and integrate. [[thm-general-kl-chain-rule-for-standard-borel-kernels]], applied with the common W marginal, identifies the three integrals as
$$I(U;(Z,V)\mid W)=I(U;Z\mid W)+I(U;V\mid Z,W).$$
All integrations and rearrangements here concern nonnegative KL values; no possibly infinite term is subtracted.

[F3] [[def-standard-borel-conditional-mutual-information]]: conditional mutual information is a KL divergence and hence is nonnegative by [[thm-kullback-leibler-is-nonnegative]].

[F4] [[lem-it-gaussian-reference-kernel-information-lower-bound]]: if $X_i\sim N(0,\lambda_i)$, $0<\delta<\lambda_i$, and $\mathbb E(X_i-Y_i)^2\le\delta$, then $I_{\rm nat}(X_i;Y_i)\ge\frac12\ln(\lambda_i/\delta)$.

[F5] [[lem-it-finite-vector-gaussian-water-level-allocation]]: under a total distortion constraint, the minimum of the coordinate rates $\frac12\log_2^+(\lambda_i/\delta_i)$ is given by the unique water level and endpoint branches stated there.

[F6] [[def-standard-normal-and-normal-laws]]: standard-normal laws have density $(2\pi)^{-1/2}e^{-z^2/2}$, and $N(0,s)$ is its scaling by $\sqrt s$.

[F7] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, an invertible linear change of variables transforms a density by the absolute determinant of its inverse. The assumed AC in [A1] implies Countable Choice by restricting its choice function to a countable family.

[F8] [[thm-continuity-from-above-for-measures]]: a finite measure is continuous along a decreasing sequence of measurable sets.

[F9] [[thm-orthogonal-transform-preserves-standard-normal-product-law]]: under AC, an orthogonal transform of independent standard normals again has independent standard-normal coordinates.

[F10] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]: the finite product laws of independent standard normals exist and have the product-density formula.

## Proof




**Given:** The hypotheses and suppliers [A1], [F1]–[F10]; each finite-dimensional Euclidean space is standard Borel.

1.1 Write $\delta_i=\mathbb E(X_i-Y_i)^2$, so $\sum_i\delta_i\le D$. Repeated use of [F2] expands $I_{\rm nat}(X^m;Y^m)$ as $\sum_i I_{\rm nat}(X_i;Y^m\mid X_1^{i-1})$. Put $W_i=X_1^{i-1}$. Reorder $Y^m$ as $(Y_i,Y_{[m]\setminus\{i\}})$ by the coordinate-bijection invariance in [F2]. Its derived second-argument conditional rule gives $$I_{\rm nat}(X_i;Y^m\mid W_i)=I_{\rm nat}(X_i;Y_i\mid W_i)+I_{\rm nat}(X_i;Y_{[m]\setminus\{i\}}\mid W_i,Y_i)\ge I_{\rm nat}(X_i;Y_i\mid W_i),$$ by nonnegativity [F3]; the empty tuple has zero information. [A1, F1, F2, F3, given]

1.2 If $\lambda_i>0$ and $0<\delta_i<\lambda_i$, [F4] gives $I_{\rm nat}(X_i;Y_i)\ge\frac12\ln(\lambda_i/\delta_i)$. If $\delta_i\ge\lambda_i$, nonnegativity gives $I_{\rm nat}(X_i;Y_i)\ge0=\frac12\ln^+(\lambda_i/\delta_i)$; if $\lambda_i=0$, the same zero lower bound holds. If $\lambda_i>0=\delta_i$, then $X_i=Y_i$ almost surely. Writing $f_i$ for its bounded normal density, the product law assigns probability at most $2h\|f_i\|_\infty$ to $|x_i-y_i|\le h$, for each $h>0$; taking $h=1/n$ and applying [F8] to these decreasing neighborhoods gives product probability zero on the diagonal. The joint law gives the diagonal probability one, so the KL is infinite. [A1, F1, F3, F4, F6, F8, given, algebra]

2.1 Independence gives $P_{X_iW_i}=P_{X_i}\otimes P_{W_i}$, so $I_{\rm nat}(X_i;W_i)=0$ from the KL definition. The derived second-argument rule in [F2] gives $$I_{\rm nat}(X_i;(W_i,Y_i))=0+I_{\rm nat}(X_i;Y_i\mid W_i)=I_{\rm nat}(X_i;Y_i\mid W_i).$$ A coordinate swap and the other expansion give $$I_{\rm nat}(X_i;(W_i,Y_i))=I_{\rm nat}(X_i;(Y_i,W_i))=I_{\rm nat}(X_i;Y_i)+I_{\rm nat}(X_i;W_i\mid Y_i)\ge I_{\rm nat}(X_i;Y_i).$$ These identities remain valid when an information value is infinite, since only the explicitly zero term is removed and all other terms are nonnegative. Thus $I_{\rm nat}(X^m;Y^m)\ge\sum_i I_{\rm nat}(X_i;Y_i)$. [A1, F2, F3, step 1.1, algebra]

3.1 For each coordinate put $\bar\delta_i=\min(\delta_i,\lambda_i)$ when $\lambda_i>0$, and $\bar\delta_i=0$ when $\lambda_i=0$. Then $\sum_i\bar\delta_i\le D$. step 1.2 and step 2.1 give the lower bound $I_{\rm nat}(X^m;Y^m)\ge\frac12\sum_{i:\lambda_i>0}\max\{0,\ln(\lambda_i/\bar\delta_i)\}$ nats, with the sum interpreted as $+\infty$ if any positive-variance coordinate has $\bar\delta_i=0$. Dividing by $\ln2$ converts this to the corresponding coordinate-rate sum in bits. [step 2.1, step 1.2, given, algebra]

4.1 If $0<D<\sum_i\lambda_i$, applying [F5] to $(\bar\delta_i)$ minimizes the bit-valued coordinate-rate sum under $\sum_i\bar\delta_i\le D$ and gives the stated water-level lower bound for $I_{\rm nat}(X^m;Y^m)/\ln2$, hence for the rate in [F1]. If $D=0<\sum_i\lambda_i$, some positive-variance coordinate has zero error, so step 1.2 makes the information infinite. If $D\ge\sum_i\lambda_i$, nonnegativity is the lower bound zero; the all-zero variance case has the same lower bound for every $D$. [F1, F3, F5, step 1.2, step 3.1, given, cases]

5.1 In the middle case let $\delta_i^*=\min(\lambda_i,\theta)$. For $\lambda_i\le\theta$, choose the constant reconstruction $Y_i=0$. For $\lambda_i>\theta$, put $a_i=\sqrt{\lambda_i-\theta}$, $b=\sqrt\theta$, and take independent standard normals $U_i,V_i$ using the finite product law in [F10]; set $Y_i=a_iU_i$, $X_i=a_iU_i+bV_i$. The orthogonal rotation with first row $(a_i,b)/\sqrt{\lambda_i}$ and [F9] gives the required $N(0,\lambda_i)$ source; the squared error has mean $b^2=\theta$. By [F6], [F7] and the product normal density, the joint density of $(X_i,Y_i)$ is $(2\pi a_ib)^{-1}\exp[-y_i^2/(2a_i^2)-(x_i-y_i)^2/(2b^2)]$; dividing by the product of the source and reconstruction densities gives expected log ratio $\frac12\ln(\lambda_i/\theta)$. Choose all coordinate pairs independently. Their joint and product-marginal laws factor, and the log density ratio is the sum of the coordinate log ratios, each integrable; [F1] therefore makes the vector mutual information the sum $\frac12\sum_{i:\lambda_i>0}\ln^+(\lambda_i/\theta)$ nats. By [F1], the rate is this value divided by $\ln2$, so the construction attains the bit-valued lower bound. [A1, F1, F3, F5, F6, F7, F9, F10, step 4.1, given, construct, algebra]

6.1 If $D\ge\sum_i\lambda_i$, choose $Y=0$; the error is the total variance and mutual information is zero. If every $\lambda_i=0$, the same constant reconstruction has zero error and zero mutual information for all $D\ge0$. These constructions attain the remaining lower bounds and complete the proof. [F1, step 4.1, given, cases] ∎

