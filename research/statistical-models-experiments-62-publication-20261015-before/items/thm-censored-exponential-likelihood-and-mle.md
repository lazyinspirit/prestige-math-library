---
id: thm-censored-exponential-likelihood-and-mle
kind: theorem
title: Right-censored exponential likelihood and its boundary maximum
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-countable-choice
  - def-dominated-statistical-experiment
  - def-event-time-observation-schemes
  - def-independent-random-elements
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-likelihood-density
  - def-measure-with-density
  - def-parametric-statistical-model
  - def-statistical-experiment
  - def-parametric-survival-and-reliability
  - thm-logarithm-derivative-and-integral
  - thm-derivative-of-exponential
  - thm-continuity-from-below-for-measures
  - thm-independent-random-elements-have-product-joint-law
  - thm-exponential-and-weibull-survival-laws
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-monotone-real-functions-are-borel-measurable
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-integration-against-a-density
  - cor-mean-value-theorem
  - thm-exponential-is-strictly-increasing
  - def-borel-sigma-algebra
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "NIST/SEMATECH Engineering Statistics Handbook, Chapter 8, §8.4.1.2, PDF pp. 159–161"
      url: "https://www.itl.nist.gov/div898/handbook/toolaids/pff/apr.pdf"
    - title: "Lu Tian, STAT331 Unit 2: Likelihood Construction, Inference for Parametric Survival Distributions, §§2.1–2.2, PDF pp. 1–7"
      url: "https://web.stanford.edu/~lutian/coursepdf/unit2.pdf"
    - title: "Qiqing Yu, Survival Analysis (Lecture Notes), §§1.2.2 and 2.1–2.2.1, PDF pp. 3–4 and 10–11"
      url: "https://people.math.binghamton.edu/qyu/ftp/surv5.pdf"
---

## Statement

Assume Countable Choice.

Let $\lambda>0$ be an event-rate parameter and let $\psi\in\Psi$ index a
censoring-law family $G_\psi$ on $[0,\infty)$. For every $\psi$, assume
$G_\psi$ is a Borel probability measure with a specified finite-valued
Borel-measurable density $g_\psi$ relative to one fixed sigma-finite Borel
measure $\nu$ on $[0,\infty)$, where $\nu$ does not depend on $\lambda$ or
$\psi$.
Assume the parameter space is the product $(0,\infty)\times\Psi$: the event
law depends only on $\lambda$, the censor law only on $\psi$, and for each
subject $T_i\sim\mathrm{Exp}(\lambda)$ is independent of $C_i\sim G_\psi$.
The subject pairs are iid. Observe
$$U_i=\min(T_i,C_i),\qquad \delta_i=1\{T_i\le C_i\},$$
as in [[def-event-time-observation-schemes]]. Write
$\bar G_\psi(u):=G_\psi([u,\infty))$.

On the one-subject observation space $[0,\infty)\times\{0,1\}$ with the
product of the Borel sigma-algebra and the discrete sigma-algebra, let $\rho$
equal Lebesgue measure on the $\delta=1$ branch and $\nu$ on the $\delta=0$
branch; explicitly,
$$\rho(A)=\operatorname{Leb}\{u:(u,1)\in A\}+\nu\{u:(u,0)\in A\}$$
for measurable $A$. Then the observation law has the explicitly specified $\rho$-density
$$h_{\lambda,\psi}(u,1)=\lambda e^{-\lambda u}\bar G_\psi(u),\qquad h_{\lambda,\psi}(u,0)=e^{-\lambda u}g_\psi(u).$$
For $n\ge1$ subjects, set $d:=\sum_{i=1}^n\delta_i$ and
$E:=\sum_{i=1}^n U_i$. For each fixed $(\lambda,\psi)$ and its displayed
density versions, the likelihood is, $\rho^{\otimes n}$-almost everywhere,
$$L(\lambda,\psi;\mathbf u,\boldsymbol\delta)=\lambda^d e^{-\lambda E}C_\psi(\mathbf u,\boldsymbol\delta),$$
where
$$C_\psi(\mathbf u,\boldsymbol\delta):=\prod_{i:\delta_i=1}\bar G_\psi(u_i)\prod_{i:\delta_i=0}g_\psi(u_i).$$
Thus, for fixed $\psi$ with $C_\psi>0$, the event-rate likelihood is
proportional to $\lambda^d e^{-\lambda E}$.

For such data: if $d>0$ and $E>0$, the unique maximum over $\lambda>0$ is
$\widehat\lambda=d/E$; if $d=0$ and $E>0$, the likelihood is strictly
decreasing, with supremum as $\lambda\downarrow0$ and no maximizer in
$(0,\infty)$. A formal likelihood extension to the boundary $\lambda=0$
attains that supremum there, but $\lambda=0$ is not a proper exponential law
for finite event times. If $d=0$ and $E=0$, the likelihood is constant in
$\lambda$. Under the model, $d>0,E=0$ occurs with probability zero. If
$C_\psi=0$, the likelihood version is zero for every $\lambda$ at that fixed
$\psi$, so the stated maximizing claims do not apply to that parameter value.

## Facts & Assumptions

**Given:** The stated product parameter space, iid subject pairs, independent event and censor times within each pair, a common sigma-finite Borel censor dominator $\nu$ with specified densities $g_\psi$, and the observed records $(U_i,\delta_i)$.

[F1] Right censoring records $U=\min(T,C)$ and $\delta=1\{T\le C\}$; ties are assigned to the event branch. [[def-event-time-observation-schemes]]

[F2] The exponential event law has density $f_\lambda(t)=\lambda e^{-\lambda t}$ for $t>0$, zero for $t\le0$, and survival $S_\lambda(t)=e^{-\lambda t}$. [[thm-exponential-and-weibull-survival-laws]]

[F3] Independent random elements have product joint law; measurable rectangles generate the finite product sigma-algebra; for sigma-finite factors the product measure satisfies its rectangle formula and is unique from that formula; Tonelli's iterated-integral identity holds. [[def-independent-random-elements]], [[thm-independent-random-elements-have-product-joint-law]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F4] A dominated experiment uses one fixed sigma-finite measure for every parameter law; its likelihood is a selected density representative, determined only up to the reference measure's null sets. [[def-dominated-statistical-experiment]], [[def-likelihood-density]]

[F5] The event and censor laws form the sampling experiment and parametric model, with distinct parameter components as stated. [[def-statistical-experiment]], [[def-parametric-statistical-model]]

[F6] $\log'(x)=1/x$ for $x>0$. [[thm-logarithm-derivative-and-integral]]

[F7] An increasing sequence of measurable sets has measure equal to the supremum of the measures in the sequence. [[thm-continuity-from-below-for-measures]]

[F9] Every monotone real function on $\mathbb R$ is Borel measurable. [[thm-monotone-real-functions-are-borel-measurable]]

[F10] The composition of measurable maps is measurable. [[thm-composition-with-borel-functions-preserves-measurability]]

[F11] Under Countable Choice, Lebesgue measure is one-dimensional, every interval $[a,b]$ has measure $b-a$, and every singleton has measure $0$; in particular $[0,n]$ is a finite-measure exhaustion. [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]

[F12] Integrating a nonnegative measurable function against a measure with density $g_\psi$ equals integrating its product with $g_\psi$ against $\nu$. [[thm-integration-against-a-density]]

[F13] The mean value theorem turns a strictly positive (respectively negative) derivative throughout an interval into strict increase (respectively decrease). [[cor-mean-value-theorem]]

[F14] The exponential function is strictly increasing. [[thm-exponential-is-strictly-increasing]]

[F15] Open sets generate the Borel sigma-algebra, which contains closed sets. [[def-borel-sigma-algebra]]

[F16] A nonnegative measurable function defines a measure by integration against its base measure. [[def-measure-with-density]]

[F17] The pointwise product of measurable real-valued functions is measurable. [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[A1] The censor family is dominated by one measure $\nu$ that is independent of the event parameter, and the specified density representatives $g_\psi$ are part of the model. [[def-dominated-statistical-experiment]], [[def-measure-with-density]]

[A2] The likelihood factorization is conditional on the product parameter space: $\lambda$ does not enter $G_\psi$, and $\psi$ does not enter the event law. [[def-parametric-statistical-model]]

[A3] Within each subject $T_i$ and $C_i$ are independent, and the subject pairs are iid, as stated in the Given. [[def-independent-random-elements]]

[F8] The exponential function is continuous by smoothness; its density in [F2] assigns no mass to $0$, so $S_\lambda(0)=1=e^0$. [[thm-derivative-of-exponential]]

[A4] Countable Choice is inherited from the exponential-family law existence result in [F2]. [[def-countable-choice]]

## Proof

**Proof technique:** direct.

1.1 For any Borel $B\subseteq[0,\infty)$, the event branch satisfies $$P(U\in B,\delta=1)=\int\!\int 1\{t\in B,\ t\le c\}\,\lambda e^{-\lambda t}\,dt\,G_\psi(dc)=\int_B\lambda e^{-\lambda u}G_\psi([u,\infty))\,du.$$ Here we use the event-density version $\lambda e^{-\lambda t}$ for $t\ge0$, which differs from [F2] only at the Lebesgue-null singleton $\{0\}$ by [F11]. The indicator is product measurable because $B$ is Borel and $\{(t,c):t\le c\}$ is closed. The factor $\lambda e^{-\lambda t}$ is continuous, so [F17] makes the full integrand product measurable. The first equality uses the product law from [A3], [F2], and [F3]; the second integrates the nonnegative indicator in the censor coordinate by Tonelli. [A1, A3, A4, F1, F2, F3, F11, F15, F17]

1.2 On the censor branch, $U=C$ and $T>C$, so $$P(U\in B,\delta=0)=\int_B P(T>u)\,G_\psi(du)=\int_B e^{-\lambda u}g_\psi(u)\,\nu(du).$$ The integrand $1_B(u)e^{-\lambda u}$ is measurable by [F17]. This uses the survival in [F2], independence, and the specified density of $G_\psi$; [F12] changes integration against $G_\psi=g_\psi\nu$ into integration against $g_\psi\,d\nu$. [A1, A3, A4, F1, F2, F3, F12, F17]

1.3 The formal survival boundary $S_0(t)=1$ cannot be a probability law of a finite-valued event time: for every integer $m$, it would give $P(T\le m)=0$, while $[0,\infty)=\bigcup_m[0,m]$ and [F7] would then give $P(T\in[0,\infty))=0$. Thus the boundary value is a likelihood extension unless the event-time model is enlarged to admit $T=\infty$. [F7, given, algebra]

2.1 Extend $u\mapsto\bar G_\psi(u)$ to $u<0$ by the constant $G_\psi([0,\infty))=1$. This extension is nonincreasing by inclusion of the tail sets, so [F9] makes it Borel measurable. The event-branch density is measurable by [F17], and the censor-branch density is measurable by [F17] because $g_\psi$ is measurable. The event branch is sigma-finite because [F11] gives the finite exhaustion $[0,n]$; the censor branch uses a countable finite-measure exhaustion of $\nu$. Their union across the disjoint branches makes $\rho$ sigma-finite. Steps 1.1 and 1.2 then show that the one-subject observation law is dominated by $\rho$ with the displayed density $h_{\lambda,\psi}$. [A4, F9, F11, F15, F17, step 1.1, step 1.2, F4]

3.1 For each $i$, $(T_i,C_i)$ is a measurable map into the product space by [F3]. The map $(t,c)\mapsto(\min(t,c),1\{t\le c\})$ is Borel: minimum is continuous and $\{(t,c):t\le c\}$ is closed. Thus [F10] makes each observed pair measurable under the convention [F1]; taking the finite tuple is measurable since rectangle preimages are finite intersections. The coordinate pullbacks of $h_{\lambda,\psi}$ are measurable, so repeated use of [F17] makes $D(\mathbf u,\boldsymbol\delta):=\prod_{i=1}^n h_{\lambda,\psi}(u_i,\delta_i)$ measurable. Let $Q$ be its density measure relative to $\rho^{\otimes n}$, which exists by [F16]. By step 2.1, each one-subject density integrates to one. Repeated Tonelli integration therefore makes $Q$ a probability measure and gives, for every measurable rectangle $R=\prod_{i=1}^n B_i$, $$Q(R)=\prod_{i=1}^n\int_{B_i}h_{\lambda,\psi}\,d\rho.$$ Independence of the subject pairs and [F3] give the same rectangle probabilities for their joint observation law. Measurable rectangles form a generating $\pi$-system, and the whole product space is a finite-measure exhaustion for both probability measures. The uniqueness clause of [F3], iterated over the $n$ factors, now identifies $Q$ with the joint observation law. Hence $D$ is the asserted density version. [A3, A4, F1, F3, F10, F15, F16, F17, step 2.1]

4.1 Substituting the two branch formulas from step 2.1 into the product density of step 3.1 gives $$L(\lambda,\psi;\mathbf u,\boldsymbol\delta)=\lambda^{\sum_i\delta_i}e^{-\lambda\sum_i u_i}\prod_{i:\delta_i=1}\bar G_\psi(u_i)\prod_{i:\delta_i=0}g_\psi(u_i).$$ By [F5], the experiment and parameter map give the sampling-law context; under the parameter-distinct model [A2], this is the asserted factorization. The density representatives are explicit model inputs, so no arbitrary simultaneous selection of Radon–Nikodym versions is used; the equality is stated separately almost everywhere for each fixed parameter pair. [A2, A4, F4, F5, step 3.1, algebra]

5.1 Fix $\psi$ with $C_\psi>0$. For $d>0$ and $E>0$, the log likelihood up to an additive constant is $\ell(\lambda)=d\log\lambda-E\lambda$. Its derivative is $d/\lambda-E$, which is positive for $0<\lambda<d/E$ and negative for $\lambda>d/E$. By [F13] it is strictly increasing before $d/E$ and strictly decreasing after it, so its unique global maximum is at $\widehat\lambda=d/E$. [F6, F13, given, step 4.1, algebra]

5.2 If $d=0$ and $E>0$, then the event factor is $e^{-\lambda E}$, strictly decreasing on $(0,\infty)$ by [F14], and tends to $1$ as $\lambda\downarrow0$ by [F8]. The supremum is therefore not attained in the ordinary parameter space. If the likelihood alone is extended to include $\lambda=0$, it is attained there. [F8, F14, step 4.1, algebra]

5.3 If $d=0$ and $E=0$, the event factor is identically $1$, so every $\lambda>0$ maximizes it. If $d>0$ and $E=0$, some event has $U_i=T_i=0$; but the exponential law has $P(T_i=0)=0$, so such observations form a probability-zero boundary set. [A4, F2, step 4.1]

6.1 Steps 1.1, 1.2, 2.1, 3.1, and 4.1 prove the dominated likelihood factorization, and steps 5.1–5.3 establish all stated interior, boundary, and zero-exposure cases. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, step 5.2, step 5.3, step 1.3] ∎
