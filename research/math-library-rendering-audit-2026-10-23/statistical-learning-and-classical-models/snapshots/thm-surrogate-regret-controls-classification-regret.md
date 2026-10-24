---
id: thm-surrogate-regret-controls-classification-regret
kind: theorem
title: "Surrogate regret controls classification regret with explicit tie and scale terms"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-classification-calibration-of-a-surrogate
  - lem-binary-zero-one-risk-excess-with-zero-tie
  - lem-finite-label-conditional-probability-function
  - def-population-and-empirical-risk
  - thm-jensen-inequality-for-expectation
  - lem-negative-root-power-is-convex
  - def-axiom-of-choice
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
  - cor-integral-over-a-null-set-vanishes
  - cor-convex-functions-on-open-convex-sets-are-continuous
  - def-measurable-function-between-measurable-spaces
  - thm-arithmetic-and-lattice-operations-preserve-measurability
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 4, Theorem 4.7 and proof, printed pp. 76–77 (PDF pp. 93–94)"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Sections 1.6.1 and 4.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Statement

Assume AC and the binary-surrogate setup, including a measurable extended-real conditional minimizer $h_\Phi^*$. Let $s\ge1$ and $c>0$. Suppose for every $x$,
$$\left|\eta(x)-\tfrac12\right|^s\le c\,[L_\Phi(x,0)-L_\Phi(x,h_\Phi^*(x))].$$
Then every measurable real-valued score $h$ with finite surrogate risk satisfies the sound zero-score-is-error bound
$$R_{01}(h)-R_{01}^*\le 2c^{1/s}[L_\Phi(h)-L_\Phi^*]^{1/s}+\mathbb E\!\left[\min\{\eta(X),1-\eta(X)\}\mathbf1_{\{h(X)=0\}}\right].$$

In particular, if $P(h(X)=0)=0$, the correction vanishes. Define instead the label classifier $f_h(x)=+1$ for $h(x)\ge0$ and $f_h(x)=-1$ for $h(x)<0$, and write $R_+(h)=P(f_h(X)\ne Y)$. For all scores covered above, including scores with zeros,
$$R_+(h)-R_{01}^*\le 2c^{1/s}[L_\Phi(h)-L_\Phi^*]^{1/s}.$$
Equivalently, parameterizing the same margin premise by $|\eta(x)-1/2|^s\le a^s[L_\Phi(x,0)-L_\Phi(x,h_\Phi^*(x))]$ gives coefficient $2a$ in both inequalities, with the same zero-score correction when using $R_{01}$.

## Statement references

[[def-classification-calibration-of-a-surrogate]]: defines $\eta$, the conditional margin risk, its minimizer, and the surrogate and classification risks.

[[lem-binary-zero-one-risk-excess-with-zero-tie]]: gives the exact classification-risk excess under the convention that zero scores are errors.

[[lem-negative-root-power-is-convex]]: supplies the convexity needed for the reciprocal-power Jensen step.

## Facts & Assumptions

**Given:** AC, a binary supervised problem with $Y\in\{-1,+1\}$, the selected conditional probability function $\eta$, a finite convex nondecreasing margin loss $\Phi$, its measurable extended-real conditional minimizer $h_\Phi^*$, $s\ge1$, $c>0$, the displayed margin hypothesis, and a measurable real-valued score $h$ with $L_\Phi(h)<\infty$.

[A1] Assume AC; it supplies the conditional-probability version used to define $\eta$. [[def-axiom-of-choice]] [[lem-finite-label-conditional-probability-function]]

[F1] The conditional class probabilities satisfy the event-integral identities for all measurable feature events. [[lem-finite-label-conditional-probability-function]]

[F2] The conditional loss is $L_\Phi(x,u)=\eta(x)\Phi(-u)+(1-\eta(x))\Phi(u)$; $h_\Phi^*(x)$ minimizes it over the extended real line; $R_{01}$ uses $Yh\le0$ and $L_\Phi(h)$ is the population risk of $\Phi(-Yh)$. [[def-classification-calibration-of-a-surrogate]] [[def-population-and-empirical-risk]]

[F3] A nonnegative measurable function admits increasing simple approximations, and monotone convergence passes their integrals to the limit. [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]] [[thm-monotone-convergence-for-the-integral]]

[F4] A finite convex real function on $\mathbb R$ is continuous. [[cor-convex-functions-on-open-convex-sets-are-continuous]]

[F5] For nonnegative integrable $D$ and convex $\varphi(t)=-t^{1/s}$ on $[0,\infty)$, Jensen gives $\mathbb E[D^{1/s}]\le(\mathbb ED)^{1/s}$. [[lem-negative-root-power-is-convex]] [[thm-jensen-inequality-for-expectation]]

[F6] The exact binary classification-risk excess is the sum of the wrong-sign term and the zero-score correction displayed in the risk-excess lemma. [[lem-binary-zero-one-risk-excess-with-zero-tie]]

[F7] Measurability is preserved by composition with Borel maps and by defined arithmetic operations on measurable extended-real functions. [[def-measurable-function-between-measurable-spaces]] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

[F8] The nonnegative integral is additive on nonnegative measurable functions. [[cor-additivity-of-the-nonnegative-lebesgue-integral]]

[F9] A nonnegative measurable function with finite integral is finite almost everywhere. [[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]

[F10] The nonnegative integral of a measurable function over a null set is zero. [[cor-integral-over-a-null-set-vanishes]]

[F11] The nonnegative integral is monotone for pointwise ordered nonnegative measurable functions and homogeneous under positive finite real scalars. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

## Proof

1.1 Under AC [A1], the event identities [F1] imply, first for indicators and finite nonnegative simple functions and then by [F3] for every nonnegative measurable $f:\mathsf X\to[0,\infty]$, that $\mathbb E[\mathbf1_{\{Y=+1\}}f(X)]=\mathbb E[\eta(X)f(X)],\qquad \mathbb E[\mathbf1_{\{Y=-1\}}f(X)]=\mathbb E[(1-\eta(X))f(X)].$ For simple $f$ this follows by finite additivity of the event identities; increasing simple approximation and monotone convergence give the general case. [A1, F1, F3, algebra]

2.1 The function $\Phi$ is continuous by [F4], hence Borel; its endpoint extension by one-sided limits is Borel on the extended real line. Since $h$ is measurable, the measurable-map definition [F7] makes $\Phi\circ h$ and $\Phi\circ(-h)$ measurable and nonnegative. Applying step 1.1 to these functions gives $L_\Phi(h)=\mathbb E[L_\Phi(X,h(X))].$ This identity also verifies measurability of the conditional-risk integrand used below. [F2, F4, F7, step 1.1]

3.1 Put $m(x)=L_\Phi(x,h_\Phi^*(x))$ and $g(x)=L_\Phi(x,0)-m(x)$. Minimality gives $0\le m(x)\le L_\Phi(x,0)=\Phi(0)$ and $g(x)\ge0$ for every $x$, so $L_\Phi^*=\mathbb E m(X)<\infty$. Here $m$ is measurable: for the endpoint-valued minimizer, each weighted term is the limit of the measurable functions $\eta(x)\min\{\Phi(-h_\Phi^*(x)),n\}$ or $(1-\eta(x))\min\{\Phi(h_\Phi^*(x)),n\}$, respectively; this also implements $0\cdot\infty=0$. For the score $h$, put $R(x)=L_\Phi(x,h(x))$ and $D_0(x)=R(x)-m(x)\ge0$. By step 2.1, $\mathbb E R(X)=L_\Phi(h)$, while $R=D_0+m$ pointwise because $m$ is finite. Additivity [F8] gives $\mathbb E D_0(X)=L_\Phi(h)-L_\Phi^*<\infty$. By [F9], $N=\{D_0=+\infty\}$ is measurable and null. Set $D=D_0$ on $N^c$ and $D=0$ on $N$; [F7] makes this finite representative measurable. Additivity [F8] and [F10] show that it has $\mathbb E D=\mathbb E D_0=L_\Phi(h)-L_\Phi^*$. [F2, F7, F8, F9, F10, step 2.1, given, algebra]

4.1 Fix $x$, write $a=\eta(x)$, and let $u$ be a real score satisfying $u(a-1/2)\le0$. For all real $u$, convexity gives $\Phi(-u)+\Phi(u)-2\Phi(0)\ge0$. If $a>1/2$ then $u\le0$, so monotonicity gives $\Phi(-u)-\Phi(u)\ge0$; if $a<1/2$ then $u\ge0$, so $\Phi(-u)-\Phi(u)\le0$. The identity $L_\Phi(x,u)-L_\Phi(x,0)=\tfrac12[\Phi(-u)+\Phi(u)-2\Phi(0)]+(a-\tfrac12)[\Phi(-u)-\Phi(u)]$ therefore shows $L_\Phi(x,u)\ge L_\Phi(x,0)$ whenever $a\ne1/2$ and $u(a-1/2)\le0$. When $a=1/2$, the same identity has zero second term and proves $L_\Phi(x,u)\ge L_\Phi(x,0)$ for every $u$, so the conditional minimum is at $0$ and $g(x)=0$. Consequently, on $\{h(x)(a-1/2)\le0\}\setminus N$ one has $D(x)=D_0(x)\ge g(x)\ge0$; the excluded set is null. [F2, step 3.1, given, algebra]

5.1 Almost surely on the event $h(X)(\eta(X)-1/2)\le0$, we are outside the null set $N$ from step 3.1, so the margin hypothesis and step 4.1 give $|\eta(X)-1/2|^s\le c g(X)\le cD(X)$, hence $|\eta(X)-1/2|\le c^{1/s}D(X)^{1/s}$. For nonnegative measurable integrands, [F8] and [F10] identify each full expectation with its integral on $N^c$; on that set the displayed inequality is pointwise, so monotonicity and positive-scalar homogeneity [F11] pass it to expectations and extract the factor $2c^{1/s}$. Apply the exact excess identity [F6], bound its first integrand in this way, and use $\mathbf1_{\{h=0\}}\le1$ to obtain $R_{01}(h)-R_{01}^*\le2c^{1/s}\mathbb E[D(X)^{1/s}]+\mathbb E[\min\{\eta(X),1-\eta(X)\}\mathbf1_{\{h(X)=0\}}].$ [F2, F6, F8, F10, F11, step 3.1, step 4.1, given, algebra]

6.1 Put $\alpha=1/s\in(0,1]$. For $0\le t\le1$, $t^\alpha\le1$, while for $t\ge1$, $t^\alpha\le t$; hence $D^\alpha\le1+D$. Monotonicity [F11] and additivity [F8] give $\mathbb E[D^\alpha]\le\mathbb E[1+D]=1+\mathbb ED<\infty$ by step 3.1, so $D^\alpha$ is integrable. By [F5], Jensen applied to the integrable convex function $-t^\alpha$ gives $\mathbb E[D^{1/s}]\le(\mathbb ED)^{1/s}=[L_\Phi(h)-L_\Phi^*]^{1/s}$ by step 3.1. Substitution in step 5.1 proves the zero-score-is-error bound. [F5, F8, F11, step 3.1, step 5.1, algebra]

7.1 Under $P(h(X)=0)=0$ the correction has expectation zero. For the label classifier $f_h$, at each $x$ its conditional excess over $\min(\eta(x),1-\eta(x))$ is $2|\eta(x)-1/2|$ on $\{h(x)<0,\eta(x)>1/2\}\cup\{h(x)\ge0,\eta(x)<1/2\}$ and zero elsewhere. This follows by comparing the conditional error $\eta(x)$ for prediction $-1$ and $1-\eta(x)$ for prediction $+1$. This adverse-sign set is contained in the event of step 5.1, so steps 5.1 and 6.1 bound its expectation by $2c^{1/s}[L_\Phi(h)-L_\Phi^*]^{1/s}$ without a tie correction. Finally, replacing $c$ by $a^s$ makes $c^{1/s}=a$ and proves the equivalent source parameterization. [F1, F2, step 5.1, step 6.1, algebra] ∎

## Source notes

Mohri et al. Theorem 4.7 assumes the margin right-hand side is $c^s[L_\Phi(x,0)-L_\Phi(x,h_\Phi^*(x))]$ to obtain coefficient $2c$. The controlling plan instead has $c$ there, which yields $2c^{1/s}$. The source classifier predicts $+1$ at zero, while the plan counts zero as an error; the exact local risk identity therefore requires the displayed zero-score correction. The original planned zero-remainder formula with coefficient $2c$ is false: a deterministic positive label with natural-log logistic loss, $s=2$, $c=1/2$, and score $h=-0.1$ satisfies its premise but has excess classification error $1>\sqrt{\ln(1+e^{0.1})}$. Independently, at $\eta=1/2$ the zero score has surrogate excess zero and zero-score-is-error excess $1/2$, so changing only the coefficient cannot repair that convention. The corrected general bound and both clean specializations above retain the complete planned surrogate scope. Mohri Lemma 4.5 overcounts at zero under its own $+1$ tie rule; only its valid upper bound is used here, proved directly in step 7.1.
