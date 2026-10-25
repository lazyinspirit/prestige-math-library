---
id: lem-cox-uniform-risk-set-convergence
kind: lemma
title: Integrated and conditional uniform convergence of Cox risk-set sums
status: published
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
  - thm-dominated-convergence
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lu Tian, STAT331 Revisiting Cox's PH Model: Asymptotic Theory, PDF pp. 1–5 and 9–10"
      url: "https://web.stanford.edu/~lutian/coursepdf/stat331-cox2.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §5.2, PDF pp. 58–63"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
---

## Statement

Let $O_i=(T_i,C_i,Z_i(\cdot))$, $i\ge1$, be IID subject records with law $P$, with jointly measurable predictable covariates, $p<\infty$, and $\|Z_i(t)\|_2\le K$ for all $i,t$ outside one null event. Let $B\subset\mathbb R^p$ be compact and contain $\beta_0$. With $Y_i(t)=1\{U_i\ge t\}$, define, for $r=0,1,2$,
$$S_n^{(r)}(t,\beta)=\frac1n\sum_{i=1}^nY_i(t)Z_i(t)^{\otimes r}e^{\beta^TZ_i(t)},\qquad s^{(r)}(t,\beta)=E_P[Y_i(t)Z_i(t)^{\otimes r}e^{\beta^TZ_i(t)}],$$
where $Z^{\otimes0}=1$, $Z^{\otimes1}=Z$, and $Z^{\otimes2}=ZZ^T$. Suppose $c_0:=\inf_{t\le\tau}s^{(0)}(t,\beta_0)>0$. For every finite deterministic measure $\nu(dt)=w(t)\,dt$ with nonnegative integrable density $w$, put
$$D_n(t)=\max_{r=0,1,2}\sup_{\beta\in B}\|S_n^{(r)}(t,\beta)-s^{(r)}(t,\beta)\|_{\max}.$$
Then for each fixed $t$, $E[D_n(t)^2]\to0$, and
$$E\int_0^\tau D_n(t)^2\,\nu(dt)\longrightarrow0.$$
There are measurable events $E_n$ with $P(E_n)\to1$ and a constant $c>0$ such that on $E_n$,
$$S_n^{(0)}(t,\beta)\ge c\qquad\text{for every }t\le\tau,\ \beta\in B.$$
Define $\bar Z_n=S_n^{(1)}/S_n^{(0)}$ and $V_n=S_n^{(2)}/S_n^{(0)}-\bar Z_n\bar Z_n^T$, setting each to zero at a zero denominator, and define $\bar z=s^{(1)}/s^{(0)}$, $V=s^{(2)}/s^{(0)}-\bar z\bar z^T$. Their fixed-time and integrated parameter-uniform errors satisfy
$$E\sup_{\beta\in B}\|\bar Z_n(t,\beta)-\bar z(t,\beta)\|_2^2\to0,\qquad E\sup_{\beta\in B}\|V_n(t,\beta)-V(t,\beta)\|_{\max}^2\to0,$$
$$E\int_0^\tau\sup_{\beta\in B}\!\left\{\|\bar Z_n-\bar z\|_2^2+\|V_n-V\|_{\max}^2\right\}\nu(dt)\longrightarrow0.$$
These conclusions require no regularity of the time-indexed covariate class beyond bounded predictability. In particular take $\nu(dt)=\lambda_0(t)\,dt$.

The stronger uniform-in-time conclusion remains valid under the following additional, sufficient condition: every scalar coordinate class $\mathcal F_{r,k}=\{O\mapsto[Y(t)Z(t)^{\otimes r}e^{\beta^TZ(t)}]_k:t\le\tau,\beta\in B\}$ is pointwise measurable and has finite $L^1(P)$ bracketing number at every positive width. Under that condition, $\sup_tD_n(t)\to_P0$, and both ratio errors converge uniformly on $[0,\tau]\times B$ in probability. This optional condition is not imposed by the Cox inference consumers.

## Facts & Assumptions

**Given:** The IID bounded predictable subject records, compact $B$, positive population risk support, and finite deterministic measure $\nu$ of the Statement. Only the final conditional conclusion assumes pointwise measurability and finite bracketing.

[F1] [[def-cox-proportional-hazards-model-and-partial-likelihood]]: $U_i=\min(T_i,C_i)$ and $Y_i(t)=1\{U_i\ge t\}$.

[F2] [[def-empirical-process-and-rademacher-process]]: $P_nf=n^{-1}\sum_i f(O_i)$ and $Pf=E_P f$.

[F3] [[def-covering-packing-bracketing-number-and-metric-entropy]]: finite $L^1(P)$ brackets have measurable endpoints and the specified positive widths.

[F4] [[def-glivenko-cantelli-class]]: pointwise-measurable classes have measurable suprema and their GC law is convergence in probability.

[F5] [[thm-gc-by-bracketing-entropy]]: an IID pointwise-measurable class with integrable envelope and finite $L^1(P)$ bracketing numbers is GC in probability.

[F6] [[def-progressively-measurable-and-predictable-process]]: predictable processes are jointly measurable, and deterministic Borel time functions are predictable.

[F7] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions can be integrated in either order.

[F8] [[thm-dominated-convergence]]: pointwise convergence under an integrable majorant gives convergence of integrals.

[A1] Only for the final conditional conclusion, the classes $\mathcal F_{r,k}$ have pointwise-measurable versions and finite bracketing numbers at every positive width.

[A2] AC is inherited through the Cox predictability interface; finite nets and probability bounds below add no further choice assumption. [[def-axiom-of-choice]]

## Proof

**Proof technique:** Use bounded IID coordinate variances and finite parameter nets at each time, integrate their errors, and protect denominators by the monotone unweighted risk count. Retain the bracketing law as an optional stronger conclusion.

1.1 Put $R=\sup_{\beta\in B}\|\beta\|_2$ and $C=e^{KR}\max(1,K,K^2)$. Each risk coordinate is bounded by $C$ and is Lipschitz in $\beta$ with constant at most $KC$, since the segment between two points of $B$ lies in the radius-$R$ ball. By [F6]–[F7], the expectations are jointly measurable in time and parameter. Both empirical and population functions are continuous in parameter, so each parameter supremum equals the supremum over a fixed countable dense subset of $B$ and is measurable. Population ratios are deterministic Borel time functions and hence predictable. [given, A2, F1, F6, F7, algebra]

2.1 For each fixed $t,\beta$ and coordinate $f$, independence and centering give $E[(P_nf-Pf)^2]=\operatorname{Var}(f)/n\le C^2/n$: the cross terms vanish by independence. On a finite $\varepsilon$-net of $B$, the squared maximum over its $m_\varepsilon$ points and the $d=1+p+p^2$ coordinates has expectation at most $dm_\varepsilon C^2/n$. Between a point and its nearest net point, the empirical-minus-population Lipschitz bound is $2KC\varepsilon$. Thus $\limsup_n E D_n(t)^2\le8K^2C^2\varepsilon^2$; let $\varepsilon\downarrow0$. The uniform bound $D_n\le2C$ and [F8] applied to $t\mapsto E D_n(t)^2$, followed by [F7], prove $E\int D_n^2d\nu\to0$. [F2, F7, F8, step 1.1, construct, algebra]

2.2 Write $q=P(U_i\ge\tau)$. Since $c_0\le s^{(0)}(\tau,\beta_0)\le e^{K\|\beta_0\|_2}q$, $q>0$. For $Q_n=n^{-1}\sum_i1\{U_i\ge\tau\}$, independence gives $E(Q_n-q)^2=q(1-q)/n$, so $P(Q_n<q/2)\le4(1-q)/(nq)\to0$. Monotonicity of $Y_i$ and the weight bound give $S_n^{(0)}(t,\beta)\ge e^{-KR}Q_n$ for every $t,\beta$. Hence on the event $E_n=\{Q_n\ge q/2\}$ all sample denominators are at least $c=e^{-KR}q/2$, while all population denominators are at least $e^{-KR}q$. [given, F1, step 1.1, algebra]

3.1 On $E_n$, ratio subtraction and the bounds of steps 1.1 and 2.2 bound both $\sup_B\|\bar Z_n-\bar z\|_2$ and $\sup_B\|V_n-V\|_{\max}$ by a constant times $D_n(t)$. Off $E_n$, the weighted means have norm at most $K$ and the second-moment matrices have entries at most $K^2$, including the zero convention, so both errors remain bounded by constants depending only on $K,p$. Their expected squared errors are therefore at most $C_1E D_n(t)^2+C_2P(E_n^c)$. Steps 2.1–3.1 prove the fixed-time conclusions; integration against finite $\nu$, or [F7]–[F8], proves their integrated versions. [F7, F8, step 1.1, step 2.1, step 2.2, algebra]

4.1 Under [A1], each coordinate class has the envelope from step 1.1 and the hypotheses of [F3]–[F5]. Apply only the probability branch of [F5] and take the finite union over coordinates to obtain $\sup_tD_n(t)\to_P0$. Step 3.1's ratio bound on $E_n$, whose probability tends to one, gives both uniform-in-time ratio conclusions. No such time-indexed class hypothesis was used in steps 1.1–4.1. [A1, F3, F4, F5, step 1.1, step 2.2, step 3.1] ∎

## Remarks

Bounded predictability alone does not imply the optional uniform-in-time law. The controlling-plan reconciliation and an explicit IID predictable counterexample with positive information are recorded in `research/statistical-models-experiments-62-owner-cox-uniform-resolution.json`. The integrated law above preserves arbitrary bounded predictable covariates in the estimator expansion.
