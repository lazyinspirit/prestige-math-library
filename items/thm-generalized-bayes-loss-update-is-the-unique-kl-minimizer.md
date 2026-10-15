---
id: thm-generalized-bayes-loss-update-is-the-unique-kl-minimizer
kind: theorem
title: "The generalized Bayes loss update uniquely minimizes loss plus KL"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-generalized-bayes-loss-update-and-temperature
  - lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure
  - def-probability-measure
  - def-measure
  - def-kullback-leibler-divergence
  - def-radon-nikodym-derivative
  - def-absolutely-continuous-with-respect-to-a-positive-measure
  - def-axiom-of-choice
  - thm-chain-rule-for-radon-nikodym-derivatives
  - cor-exponential-reciprocal-and-positivity
  - def-natural-logarithm
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - cor-mean-value-theorem
  - thm-change-of-variables-for-expectation
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "P. G. Bissiri, C. C. Holmes, and S. G. Walker, A general framework for updating belief distributions, JRSS B 78(5), 2016"
      url: "https://arxiv.org/pdf/1306.6430"
    - title: "J. Knoblauch, J. Jewson, and T. Damoulas, An Optimization-centric View on Bayes’ Rule: Reviewing and Generalizing Variational Inference, JMLR 23(132), 2022"
      url: "https://www.jmlr.org/papers/volume23/19-1047/19-1047.pdf"
    - title: "M. J. Wainwright and M. I. Jordan, Graphical Models, Exponential Families, and Variational Inference, Foundations and Trends in Machine Learning 1(1–2), 2008"
      url: "https://people.eecs.berkeley.edu/~jordan/sail/readings/wainwright-jordan-fnt.pdf"
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) used by the
Kullback–Leibler definition. Let $(\Theta,\mathcal T)$ be the standard Borel
parameter space of [[def-generalized-bayes-loss-update-and-temperature]], let
$\pi$ be a probability prior, let $x$ be fixed, let $w>0$, and let
$\ell_x:\Theta\to\mathbb R$ be measurable. Suppose
$$0<Z:=\int_\Theta e^{-w\ell_x(\theta)}\,\pi(d\theta)<\infty$$
and the update $q:=G_{w,\pi,x}$ has finite absolute loss expectation
$\int_\Theta|\ell_x|\,dq<\infty$.

Let $\mathcal V$ be the probabilities $\nu$ on $(\Theta,\mathcal T)$ such
that $\nu\ll\pi$, $D(\nu\|\pi)<\infty$, and
$\int_\Theta|\ell_x|\,d\nu<\infty$. Define
$$J_w(\nu):=w\,\mathbb E_\nu[\ell_x]+D(\nu\|\pi),$$
where expectation is integration under the law $\nu$
([[thm-change-of-variables-for-expectation]]). Then $q\in\mathcal V$ and
$$J_w(\nu)-J_w(q)=D(\nu\|q)\ge0\qquad(\nu\in\mathcal V),$$
with equality if and only if $\nu=q$. Thus $q$ is the unique minimizer of
loss plus KL over $\mathcal V$.

## Facts & Assumptions

**Given:** AC; a probability prior $\pi$ on the stated parameter space; a
fixed measurable real loss section $\ell_x$; $w>0$; $0<Z<\infty$; and
$\int|\ell_x|\,dq<\infty$.

[F1] [[def-generalized-bayes-loss-update-and-temperature]]: when $0<Z<\infty$,
the update has density $g=e^{-w\ell_x}/Z$ relative to $\pi$.

[F2] [[lem-generalized-bayes-loss-update-normalizes-to-a-probability-measure]]:
the update $q=G_{w,\pi,x}$ is a probability measure.

[F3] [[def-radon-nikodym-derivative]]: under AC, a Radon–Nikodym derivative
is an almost-everywhere class of measurable functions satisfying the
setwise integral formula.

[F4] [[def-kullback-leibler-divergence]]: for probability measures $P\ll Q$,
the definition gives $D(P\|Q)=\int\log(dP/dQ)\,dP=\int r\log r\,dQ$
for a Radon–Nikodym density $r=dP/dQ$, with $0\log0:=0$ and finite negative
part. AC is used to supply the derivative representative.

[F5] [[def-absolutely-continuous-with-respect-to-a-positive-measure]]:
$P\ll Q$ means every measurable $Q$-null set is $P$-null.

[F6] [[thm-chain-rule-for-radon-nikodym-derivatives]]: under AC, if
$\nu\ll q\ll\pi$ are sigma-finite positive measures with a common finite
exhaustion, then $d\nu/d\pi=(d\nu/dq)(dq/d\pi)$ $\pi$-almost everywhere.

[F7] [[cor-exponential-reciprocal-and-positivity]]: $e^t>0$ and
$e^{-t}=1/e^t$ for every real $t$.

[F8] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the
nonnegative integral is monotone and homogeneous under positive scalars.

[F9] [[thm-natural-logarithm-laws]]: for positive $a,b$,
$\log(ab)=\log a+\log b$ and $\log(a/b)=\log a-\log b$; the logarithm
is the inverse of the exponential ([[def-natural-logarithm]]).

[F10] [[thm-logarithm-derivative-and-integral]]: $\log$ is differentiable
on $(0,\infty)$ with derivative $1/t$.

[F11] [[cor-mean-value-theorem]]: a continuous function on a closed interval
that is differentiable in its interior satisfies the mean value theorem.

[F12] [[thm-change-of-variables-for-expectation]]: for a random element $X$
with law $\nu$, $\mathbb E[g(X)]=\int g\,d\nu$ when $g(X)$ is integrable.

[F13] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a
nonnegative measurable function has integral zero exactly when it vanishes
almost everywhere.

[F14] [[def-probability-measure]]: a probability measure is a measure of
total mass one.

[F15] [[def-measure]]: a measure is countably additive on pairwise disjoint
measurable sequences.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets
has a choice function. It is used here only through the KL/Radon–Nikodym
interfaces in [F3], [F4], and [F6].

## Proof

1.1 Let $g(\theta)=e^{-w\ell_x(\theta)}/Z$. By [F1]–[F2], $q$ is the probability measure with density $g$ relative to $\pi$. Since $\ell_x$ is real-valued, [F7] gives $g>0$ everywhere. [F1, F2, F7, given]

1.2 For $t>0$, put $u(t)=\log t-1+t^{-1}$. By [F10], $u'(t)=(t-1)/t^2$. If $0<t<1$, the mean value theorem on $[t,1]$ gives $u(t)>u(1)=0$; if $t>1$, it on $[1,t]$ gives $u(t)>u(1)=0$. Thus $\log t\ge1-t^{-1}$. Multiplying by $t>0$ gives $t\log t\ge t-1$, with equality only at $t=1$. At $t=0$ the inequality also holds under $0\log0:=0$. [F10, F11, algebra]

2.1 The update is admissible: $q\ll\pi$ by [F1], and [F4], [F9] give $$D(q\|\pi)=\int\log g\,dq=-w\int\ell_x\,dq-\log Z,$$ which is finite by the loss-integrability hypothesis and $0<Z<\infty$. Thus $q\in\mathcal V$. [F1, F4, F9, A1, F2, step 1.1, given, algebra]

2.2 Fix $\nu\in\mathcal V$. If $q(A)=0$, then for every integer $m\ge1$, [F8] and [F1] give $$0\le m^{-1}\pi(A\cap\{g\ge m^{-1}\})\le\int_Ag\,d\pi=q(A)=0.$$ Let $A_1=A\cap\{g\ge1\}$ and, for $m\ge2$, let $A_m=(A\cap\{g\ge m^{-1}\})\setminus(A\cap\{g\ge(m-1)^{-1}\})$. These sets are disjoint, each is $\pi$-null by the displayed bound, and their union is $A$ because $g>0$ everywhere. Countable additivity [F15] therefore gives $\pi(A)=0$. Hence $\pi\ll q$, and $\nu\ll q$ follows from $\nu\ll\pi$ and [F5]. [F8, F1, F15, F5, step 1.1, given]

3.1 The measures $\nu,q,\pi$ are finite probabilities. The constant exhaustion $X_m=\Theta$ is therefore a common finite exhaustion, so [A1] and [F6] apply to $\nu\ll q\ll\pi$. With $r=d\nu/d\pi$ and $h=d\nu/dq$, the chain rule gives $r=hg$ $\pi$-almost everywhere. [A1, F6, F1, F2, F3, step 2.2, given]

4.1 The Radon–Nikodym formula [F3] gives $\nu(\{r=0\})=\int_{\{r=0\}}r\,d\pi=0$ and likewise $\nu(\{h=0\})=0$, so $r,h>0$ $\nu$-almost everywhere. Since $D(\nu\|\pi)<\infty$ and the negative part of the log-density integral is finite by [F4], $\log r$ is $\nu$-integrable; $\log g$ is $\nu$-integrable by $\int|\ell_x|\,d\nu<\infty$. Using $r=hg$ from step 3.1, [F9], and $\log g=-w\ell_x-\log Z$, we obtain $$D(\nu\|q)=\int\log h\,d\nu =D(\nu\|\pi)+w\int\ell_x\,d\nu+\log Z.$$ The right-hand side is finite, so $D(\nu\|q)<\infty$. [F3, F4, step 3.1, F9, A1, given, algebra]

5.1 For $h=d\nu/dq$, the density form of [F4] gives $$D(\nu\|q)=\int\log h\,d\nu=\int h\log h\,dq,$$ with $0\log0:=0$. The integral is finite by step 4.1. [F4, step 4.1, A1]

6.1 Apply step 1.2 to $h$ and integrate under $q$. Since $\int h\,dq=\nu(\Theta)=1$ and $q(\Theta)=1$, step 5.1 yields $$D(\nu\|q)=\int h\log h\,dq\ge\int(h-1)\,dq=0.$$ If equality holds, the nonnegative function $h\log h-h+1$ has integral zero, so [F13] makes it zero $q$-almost everywhere. Step 1.2 then gives $h=1$ $q$-almost everywhere, and the Radon–Nikodym formula [F3] implies $\nu=q$. Conversely, if $\nu=q$, its Radon–Nikodym density relative to itself is $h=1$ $q$-almost everywhere, so [F4] and [F9] give $D(q\|q)=\int 1\log 1\,dq=0$. Thus equality holds exactly when $\nu=q$. [step 1.2, step 5.1, F13, F3, F4, F9, A1, F14, algebra]

7.1 By step 4.1 and [F12], $$J_w(\nu)=D(\nu\|q)-\log Z\ge-\log Z.$$ Step 2.1 gives $J_w(q)=-\log Z$, and step 6.1 shows equality is possible only for $\nu=q$. Therefore $q$ is the unique minimizer and $J_w(\nu)-J_w(q)=D(\nu\|q)$. [step 4.1, F12, step 2.1, step 6.1, algebra] ∎
