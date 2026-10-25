---
id: ex-two-stage-conditional-error-sample-size-and-weight-adaptation
kind: example
title: "Calibrated selected sample size and an uncalibrated weight change"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - lem-selected-sample-size-conditionally-superuniform-pvalue
  - cor-conditionally-superuniform-stage-two-pvalue
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
  - def-probability-measure
  - def-p-value
  - lem-conditioning-a-known-variable-and-an-independent-variable
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Kenkichi Sugiura and Hiroyuki Uesaka, Theoretical Basis of Adaptive Designs for Clinical Trials in Phase II and III, Japanese Journal of Biometrics 29, Special Issue 1 (2008), S33–S52"
      url: "https://www.jstage.jst.go.jp/article/jjb/29/Special_Issue_1/29_Special_Issue_1_S33/_pdf/-char/en"
      locator: "§2, PDF pp.2–3 (printed S34–S35): fresh nonoverlapping stage samples; §5.1.2, PDF p.8 (printed S40): inverse-normal weights and error inflation when selected stage-2 size is substituted without recalibration."
    - title: "Giorgos Minas, Multivariate Global Testing and Adaptive Designs, PhD thesis, University of Warwick (2013)"
      url: "https://wrap.warwick.ac.uk/id/eprint/58321/7/WRAP_THESIS_Minas_2013.pdf"
      locator: "Complete Chapter 5, especially §5.4.1, printed pp.74–77 = PDF pp.95–98 (conditional invariance and inverse-normal combinations), §5.4.2, printed pp.77–79 = PDF pp.98–100 (conditional-error threshold), and §5.6, printed pp.81–83 = PDF pp.102–104 (planning cautions)."
---

## Statement

In the finite null model below, the selected stage-2 sample size is a function
of interim information, and each selected-size p-value retains its conditional
null calibration. The rejection rule at the original conditional error has
null rejection probability $1/2$, equal to the original budget. In the normal
model, for any fixed critical value $c>0$, the equal-weight inverse-normal rule
rejecting when $(Z_1+Z_2)/\sqrt2\ge c$ has size
$\alpha=\int_c^\infty\phi(t)\,dt\in(0,1/2)$. Choosing unit-norm weights from
the sign of the interim statistic $Z_1$ and retaining $c$ raises that
probability to $3\alpha/2$.

## Facts & Assumptions

**Given:** AC; a finite uniform null probability space for the first model; independent fair binary coordinates $I,B_0,B_2,B_3$; and, for the second model, independent standard-normal variables $Z_1,Z_2$ with density $\phi(x)=C e^{-x^2/2}$, where $C=(\int_{\mathbb R}e^{-t^2/2}\,dt)^{-1}$. Thus $\phi$ is even, continuous, strictly positive, and has total mass one. Write $\Phi(x)=\int_{-\infty}^x\phi(t)\,dt$.

[A1] AC supplies the conditional-expectation classes inherited by the results used here. [[def-axiom-of-choice]]

[F1] For a countable-valued interim-measurable $N$, calibration within every selected-size stratum implies conditional superuniformity of the selected p-value. [[lem-selected-sample-size-conditionally-superuniform-pvalue]]

[F2] If a stage-2 p-value is conditionally superuniform given $\mathcal F_1$, rejection at the original conditional error $A$ has conditional rejection probability at most $A$; when $P_0(R_0)\le\alpha$, its overall null rejection probability is at most $\alpha$. [[cor-conditionally-superuniform-stage-two-pvalue]]

[F3] A p-value statistic is measurable, takes values in $[0,1]$, and is valid under the null when its null CDF is superuniform. [[def-p-value]]

[F4] If an integrable variable is independent of $\mathcal F_1$, its conditional expectation given $\mathcal F_1$ is its ordinary expectation (under AC). [[lem-conditioning-a-known-variable-and-an-independent-variable]]

[F5] Conditional expectations are almost-sure classes, so changing a version does not alter event probabilities. [[def-conditional-expectation-as-an-ae-class]]

## Verification

**Given:** The two null models and notation stated above; verify the calibrated finite-size rejection probability and the changed-weight normal rejection probability.

1.1 Put $\Omega=\{0,1\}^4$ with the uniform law and let $I,B_0,B_2,B_3$ be the independent fair-bit coordinates. Define $p_j=1/2$ when $B_j=0$ and $p_j=1$ when $B_j=1$, for $j\in\{0,2,3\}$. Each $p_j$ is measurable with values in $[0,1]$, and its null CDF is $0$ for $u<1/2$, $1/2$ for $1/2\le u<1$, and $1$ at $u=1$, so each is a valid p-value by [F3]. Let $\mathcal F_1=\sigma(I)$, select $N=2$ on $I=0$ and $N=3$ on $I=1$, and take the original rejection event $R_0=\{p_0\le1/2\}$. Independence and [A1, F4] give its conditional error $A=E_0[\mathbf1_{R_0}\mid\mathcal F_1]=1/2$ almost surely; [F5] makes the resulting event probabilities version-independent. For each $m\in\{2,3\}$ and $H\in\mathcal F_1$, independence of $B_m$ from $I$ gives $P_0(H\cap\{N=m\}\cap\{p_N\le u\})=c(u)P_0(H\cap\{N=m\})$, where $c(u)=0$ for $u<1/2$, $1/2$ for $1/2\le u<1$, and $1$ for $u=1$; in every case $c(u)\le u$. Thus [F1] makes $p_N$ conditionally superuniform. Rejection at $A=1/2$ is exactly the event that the selected bit is zero. Since $P_0(R_0)=P_0(B_0=0)=1/2$, set $\alpha=1/2$ in the overall conclusion of [F2] to obtain $P_0(p_N\le A)\le1/2$; the selected bit is fair, so equality holds and the original budget is attained. [A1, F1, F2, F3, F4, F5, given, construct, algebra]

1.2 The positive density makes $\Phi$ continuous and strictly increasing. Define the one-sided stage p-values $p_i=1-\Phi(Z_i)$, so $Z_i=\Phi^{-1}(1-p_i)$; for $0<u<1$, $P_0(p_i\le u)=P_0(Z_i\ge\Phi^{-1}(1-u))=u$, and the endpoint inequalities are immediate, so they are valid by [F3]. Fix $c>0$ and set $\alpha=\int_c^\infty\phi(t)\,dt$, with $0<\alpha<1/2$ by positivity and evenness. Under the fixed equal-weight inverse-normal rule, reject when $W=(Z_1+Z_2)/\sqrt2\ge c$. The orthogonal change of variables $w=(z_1+z_2)/\sqrt2$, $v=(z_1-z_2)/\sqrt2$ has absolute Jacobian $1$ and satisfies $z_1^2+z_2^2=w^2+v^2$, so the joint density transforms to $\phi(w)\phi(v)$ and integration over $w\ge c$ gives the fixed-rule null rejection probability $\alpha$. [F3, given, construct, algebra]

2.1 Choose $N_2=1$ when $Z_1\ge0$ and $N_2=2$ when $Z_1<0$. Without recalibrating $c$, use weights $w(N_2)=(1,0)$ in the first case and $(0,1)$ in the second; each has squared norm one. Since $c>0$, the adapted rejection event is the disjoint union $\{Z_1\ge c\}\cup\{Z_1<0,Z_2\ge c\}$, whose probability by independence is $\alpha+(1/2)\alpha=3\alpha/2>\alpha$. Thus unit-norm weights selected with the stage-2 size do not by themselves preserve the fixed-rule error probability. [given, step 1.2, construct, algebra] ∎

## Remarks

The normal counterexample uses extreme weights so its size calculation is exact. Sugiura–Uesaka give the more direct sample-size-weight warning: in the weighted inverse-normal rule, replacing the prespecified second-stage size by its interim-selected value can exceed the target null rejection probability. The finite calibrated model above illustrates the separate condition that must be checked: the selected second-stage p-value law under the null.
