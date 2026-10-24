---
id: lem-test-zero-one-loss-risk-identities
kind: lemma
title: "Binary zero-one loss risks are the testing error probabilities"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-statistical-experiment
  - def-randomized-test
  - def-loss-function-and-risk
  - def-probability-measure
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.1, PDF pp. 100–102"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Peter Hoff, Statistical Decision Problems, §§4.1–4.2, PDF pp. 7–8"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/581/LectureNotes/intro.pdf"
---

## Statement

Let $\Theta_0,\Theta_1$ be disjoint subsets of a parameter set $\Theta$ in
a statistical experiment. Let $K$ be a randomized test on the binary action
space $\{0,1\}$, with $1$ meaning reject, and write
$\varphi(x)=K(x,\{1\})$. Define the zero-one error loss by
$$L(\theta,a)=\mathbf 1_{\Theta_0}(\theta)a+\mathbf 1_{\Theta_1}(\theta)(1-a),$$
so $L$ is zero when $\theta\notin\Theta_0\cup\Theta_1$. For
$\beta_\varphi(\theta)=E_\theta[\varphi(X)]$ and the risk
$R(\theta,K)$ of [[def-loss-function-and-risk]],
$$R(\theta,K)=\beta_\varphi(\theta)\quad(\theta\in\Theta_0),\qquad R(\theta,K)=1-\beta_\varphi(\theta)\quad(\theta\in\Theta_1).$$

## Facts & Assumptions

**Given:** A statistical experiment, disjoint hypotheses $\Theta_0,\Theta_1$,
and a binary randomized test $K$ with test function $\varphi$.

[F1] [[def-randomized-test]]: the action space is $\{0,1\}$ with its full
sigma-algebra, each $K(x,\cdot)$ is a probability measure, and
$\varphi(x)=K(x,\{1\})$.

[F2] [[def-loss-function-and-risk]]: if each action section of $L$ is
measurable and nonnegative, then
$R(\theta,K)=\int[\int L(\theta,a)K(x,da)]P_\theta(dx)$.

[F3] [[def-nonnegative-simple-measurable-function]],
[[def-integral-of-a-nonnegative-simple-function]], and
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: the
integral of an indicator of a measurable singleton under $K(x,\cdot)$ is
the $K(x,\cdot)$-measure of that singleton.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]:
expectation under $P_\theta$ is integration with respect to $P_\theta$.

[F5] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: if
$0\le f\le g$, then $\int f\,dP_\theta\le\int g\,dP_\theta$.

[F6] [[def-integrable-real-and-complex-functions-and-their-integrals]]: a
real measurable function is integrable when the integral of its absolute
value is finite.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is
linear on integrable functions.

[F8] [[def-statistical-experiment]] and [[def-probability-measure]]: each
$P_\theta$ is a probability measure with $P_\theta(\mathcal X)=1$.

## Proof

**Proof technique:** direct.

1.1 For fixed $\theta$, the action section $a\mapsto L(\theta,a)$ is one of $a$, $1-a$, or $0$. Each is nonnegative and measurable on the full sigma-algebra of $\{0,1\}$, so [F2] defines its risk. [given, F1, F2]

2.1 On $\Theta_0$, the section is $a=\mathbf1_{\{1\}}(a)$, whose integral under $K(x,\cdot)$ is $K(x,\{1\})=\varphi(x)$ by [F1] and [F3]. On $\Theta_1$, the section is $1-a=\mathbf1_{\{0\}}(a)$, whose integral is $K(x,\{0\})=1-\varphi(x)$ because $K(x,\cdot)$ is a probability measure. [F1, F3, step 1.1, algebra]

3.1 Substituting these inner integrals into [F2] and using [F4] gives $R(\theta,K)=E_\theta\varphi(X)$ on $\Theta_0$ and $R(\theta,K)=E_\theta[1-\varphi(X)]$ on $\Theta_1$. [F2, F4, step 2.1]

4.1 Since $0\le\varphi\le1$ and $0\le1-\varphi\le1$, [F5] and [F8] show that each has integral at most $1$. Thus their absolute-value integrals are finite, so they are integrable by [F6]. Linearity [F7] and [F8] give $E_\theta[1-\varphi]=1-E_\theta[\varphi]$. The two risk identities now have the asserted form. [F1, F5, F6, F7, F8, step 3.1, algebra] ∎
