---
id: lem-cox-uniform-risk-set-convergence
kind: lemma
title: Uniform convergence of Cox risk-set sums
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-cox-proportional-hazards-model-and-partial-likelihood
  - def-covering-packing-bracketing-number-and-metric-entropy
  - def-empirical-process-and-rademacher-process
  - def-glivenko-cantelli-class
  - def-progressively-measurable-and-predictable-process
  - thm-gc-by-bracketing-entropy
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lu Tian, STAT331 Revisiting Cox's PH Model: Asymptotic Theory, PDF pp. 1–5 and 9–10"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-cox2.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §5.2, PDF pp. 58–63"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
---

## Statement

Let $O_i=(T_i,C_i,Z_i(\cdot))$, $i\ge1$, be IID subject records with law $P$. Suppose $p<\infty$, $\|Z_i(t)\|_2\le K$ for every $i,t$ almost surely, and let $B\subset\mathbb R^p$ be a compact set containing $\beta_0$. Define $Y_i(t)=1\{U_i\ge t\}$ and, for $r=0,1,2$, with $Z^{\otimes0}:=1$, $Z^{\otimes1}:=Z$, and $Z^{\otimes2}:=ZZ^T$,
$$ S_n^{(r)}(t,\beta)=\frac1n\sum_{i=1}^nY_i(t)Z_i(t)^{\otimes r}e^{\beta^TZ_i(t)},\qquad s^{(r)}(t,\beta)=E_P\!\left[Y_i(t)Z_i(t)^{\otimes r}e^{\beta^TZ_i(t)}\right]. $$
Assume
$$ \inf_{0\le t\le\tau}s^{(0)}(t,\beta_0)>0 $$
and, for each $r\in\{0,1,2\}$ and each scalar coordinate of $Z^{\otimes r}$, the class
$$ \mathcal F_{r,k}:= \left\{\,O\mapsto [Y(t)Z(t)^{\otimes r}e^{\beta^TZ(t)}]_k: t\in[0,\tau],\ \beta\in B\,\right\} $$
is pointwise measurable and has finite $L^1(P)$ bracketing number at every positive width. For $r=0$, the coordinate is the scalar function $Y(t)e^{\beta^TZ(t)}$. Then, in probability,
$$ \max_{r=0,1,2}\ \sup_{\substack{0\le t\le\tau\\\beta\in B}} \|S_n^{(r)}(t,\beta)-s^{(r)}(t,\beta)\|_{\max}\longrightarrow0. $$
Define $\bar Z_n(t,\beta)=S_n^{(1)}(t,\beta)/S_n^{(0)}(t,\beta)$ and $\bar z(t,\beta)=s^{(1)}(t,\beta)/s^{(0)}(t,\beta)$ when the respective denominator is positive, and set the corresponding ratio to zero when its denominator is zero. The same assumptions imply that with probability tending to one $S_n^{(0)}$ is uniformly bounded below on $[0,\tau]\times B$, and
$$ \sup_{\substack{0\le t\le\tau\\\beta\in B}} \|\bar Z_n(t,\beta)-\bar z(t,\beta)\|_2\longrightarrow_P0. $$

## Facts & Assumptions

**Given:** The IID subject model and notation in the Statement, bounded predictable covariates, a compact parameter set $B$, a uniformly positive population risk denominator at $\beta_0$, and the stated pointwise-measurability and finite-bracketing hypotheses.

[F1] [[def-cox-proportional-hazards-model-and-partial-likelihood]]: $U_i=\min(T_i,C_i)$, $\delta_i=1\{T_i\le C_i\}$, $Y_i(t)=1\{U_i\ge t\}$, and $Z_i(t)$ is predictable; the IID law $P$ is assumed in this lemma's Statement.

[F2] [[def-empirical-process-and-rademacher-process]]: $P_nf=n^{-1}\sum_{i=1}^nf(O_i)$ and $Pf=E_Pf(O_i)$.

[F3] [[def-covering-packing-bracketing-number-and-metric-entropy]]: an $L^1(P)$ bracket has measurable endpoints $\ell\le f\le u$ $P$-almost surely and width $P(u-\ell)$.

[F4] [[def-glivenko-cantelli-class]]: pointwise measurability makes the uniform empirical-process supremum measurable, and the $P$-Glivenko--Cantelli conclusion is convergence in probability.

[F5] [[thm-gc-by-bracketing-entropy]]: an IID pointwise-measurable class with integrable envelope and finite $L^1(P)$ bracketing number at every positive width is $P$-Glivenko--Cantelli in probability; its stronger almost-sure branch separately assumes Countable Choice.

[F6] [[def-progressively-measurable-and-predictable-process]]: predictable processes are jointly measurable in time and sample point, and deterministic Borel functions of time are predictable.

[F7] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions can be integrated in either order; bounded signed coordinates follow by positive and negative parts.

[A1] The coordinate classes $\mathcal F_{r,k}$ have the stated finite bracketing numbers and pointwise-measurable versions. This is an additional empirical-process regularity condition on the predictable covariate paths.

[A2] The Axiom of Choice is inherited through the Cox model definition; this proof uses only the convergence-in-probability branch of [F5], not its Countable-Choice strong-law branch. [[def-axiom-of-choice]]

## Proof

**Proof technique:** Apply the bracketing Glivenko--Cantelli theorem coordinatewise, then use a denominator bound and ratio algebra.

1.1 By [F6], the bounded Cox risk functions are jointly measurable; [F7] makes their expectations $s^{(r)}(t,\beta)$ measurable in $(t,\beta)$, so the population ratios have deterministic predictable versions. For each $r$ and coordinate $k$, compactness of $B$ and $\|Z(t)\|_2\le K$ give the integrable constant envelope $e^{K\sup_{\beta\in B}\|\beta\|_2}\max(1,K,K^2)$. [given, A2, F1, F6, F7]

2.1 By [A1], [F3], and [F4], each coordinate class is pointwise measurable, has the stated integrable envelope, and has finite bracketing numbers. Apply [F5] to obtain uniform $P_n-P$ convergence for each class; this step uses only its probability-convergence branch and no Countable Choice. [A1, F3, F4, F5, step 1.1]

3.1 By [F2], the empirical and population means of each coordinate function are exactly the entries of $S_n^{(r)}$ and $s^{(r)}$. The finite union over $r=0,1,2$ and their finitely many coordinates turns step 2.1 into the simultaneous max-norm convergence in the Statement. [F2, step 2.1]

4.1 Put $c_0=\inf_t s^{(0)}(t,\beta_0)>0$ and $D=K\sup_{\beta\in B}\|\beta-\beta_0\|_2$. The pointwise bound $e^{\beta^TZ(t)}\ge e^{-D}e^{\beta_0^TZ(t)}$ gives $s^{(0)}(t,\beta)\ge e^{-D}c_0$ uniformly. By step 3.1, with probability tending to one $S_n^{(0)}(t,\beta)\ge e^{-D}c_0/2$ everywhere on $[0,\tau]\times B$. [given, step 3.1, algebra]

5.1 On that event, for all $t,\beta$, $\bar Z_n-\bar z=(S_n^{(1)}-s^{(1)})/S_n^{(0)}+s^{(1)}(s^{(0)}-S_n^{(0)})/(S_n^{(0)}s^{(0)})$. The vector $s^{(1)}$ is uniformly bounded by $Ke^{K\sup_{\beta\in B}\|\beta\|_2}$, and both denominators have the positive lower bounds from step 4.1. The two terms therefore converge uniformly to zero in probability by step 3.1, proving the ratio conclusion. [step 3.1, step 4.1, algebra] ∎

